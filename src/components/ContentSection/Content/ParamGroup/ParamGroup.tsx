import {useCallback, useMemo, useState} from "react";
import {Button, Input} from "antd";
import styles from './index.module.less';
import {MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";

export const ParamGroup = () => {
    const [params, setParams] = useState([{
        props: 'a',
        value: '1',
    }]);
    
    const [tempValue, setTempValue] = useState({
        props: '',
        value: '',
    });
    
    const validate = useMemo(() => !tempValue.value || !tempValue.props,[tempValue]);
    
    const onPropChange = useCallback((e: any, index?: number) => {
        const target = e.target.value;
        if (!index) {
            setTempValue(pre => ({
                props: target,
                value: pre.value,
            }));
            return;
        }
        if (!target) {
            return;
        }
        const aim = params[index];
        aim.props = target;
        const newParams = [...params];
        newParams.splice(index, 1, aim);
        setParams(newParams);
    }, [setTempValue, params, setParams]);

    const onValueChange = useCallback((e: any, index?: number) => {
        const target = e.target.value;
        if (!index) {
            setTempValue(pre => ({
                props: pre.props,
                value: target,
            }));
            return;
        }
        if (!target) {
            return;
        }
        const aim = params[index];
        aim.value = target;
        const newParams = [...params];
        newParams.splice(index, 1, aim);
        setParams(newParams);
    }, [setTempValue, params, setParams]);
    
    const onAdd = useCallback(() => {
        console.log(tempValue);
        if (!tempValue || !tempValue.props || !tempValue.value) {
            return;
        }
        setParams([...params, tempValue]);
        setTempValue({
            props: '',
            value: '',
        });
    }, [tempValue, params, setParams, setTempValue]);
    
    const onDelete = useCallback((index: number) => {
        const tempParams = [...params];
        tempParams.splice(index, 1);
        setParams(tempParams);
    }, [params, setParams]);
    
    return (
        <div>
            {
                params.map((item, index) => (
                    <div key={`${item.props}_${index}`} className={styles['params-container']}>
                        <Input value={item.props} className={styles.props} onChange={e => onPropChange(e, index)}></Input>
                        <Input value={item.value} className={styles.value} onChange={e => onValueChange(e, index)}></Input>
                        <Button disabled={params.length === 1} icon={<MinusCircleOutlined />} onClick={() => onDelete(index)} type={'text'}></Button>
                    </div>
                ))
            }
            <div className={styles['params-container']}>
                <Input value={tempValue.props} className={styles.props} placeholder='prop' onChange={onPropChange}></Input>
                <Input value={tempValue.value} className={styles.value} placeholder='value' onChange={onValueChange}></Input>
                <Button icon={<PlusCircleOutlined />} onClick={onAdd} type={'text'}></Button>
            </div>
            {validate && (
                <div className={styles['error']}>
                    新增的props或value必填
                </div>
            )}
        </div>
    );
}