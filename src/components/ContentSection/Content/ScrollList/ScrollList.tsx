import {ScrollListData} from "../../../../model/type";
import {List} from "antd";
import styles from './index.module.less';
import {useCallback, useEffect, useRef, useState} from "react";

export const ScrollList = (props: {
    data: ScrollListData[];
    hoverPause?: boolean;
}) => {
    const {data, hoverPause} = props;
    const rollTime = 100, rollTop = 1.5;
    const divRef = useRef<HTMLDivElement>();
    const [timer, setTimer] = useState<NodeJS.Timer>();
    useEffect(() => {
        initialScroll(data);
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    const initialScroll = useCallback((data: any) => {
        let v = divRef.current;
        if (data.length > 7) {
            // 只有当大于10条数据的时候 才会看起滚动
            const time = setInterval(() => {
                if (!v) {
                    return;
                }
                v.scrollTop += Number(rollTop);
                if (
                    Math.ceil(v.scrollTop) >= parseFloat(`${v.scrollHeight - v.clientHeight}`)
                ) {
                    v.scrollTop = 0;
                }
            }, Number(rollTime));
            setTimer(time);
        }
    }, [setTimer]);
    
    return (
        <div
            style={{
                maxHeight: 300,
                overflow: 'auto',
                padding: '0 16px',
            }}
            // @ts-ignore
            ref={divRef}
            className={'scroll-container'}
            onMouseEnter={() => {
                hoverPause && clearInterval(timer);
            }}
            onMouseLeave={() => {
                hoverPause && initialScroll(data);
            }}
        >
            <List
                size="small"
                bordered
                dataSource={data}
                style={{ width: '100%' }}
                renderItem={(item, index) => (
                    <List.Item className={styles['scroll-item']}>
                        <div className={styles['scroll-item-index']}>[{index}]</div>
                        <div className={styles['scroll-item-name']}>{item.name}</div>
                        <div className={styles['scroll-item-delay']}>延期 {item.time_delayed} 天</div>
                    </List.Item>
                )}
            />
        </div>
    );
}