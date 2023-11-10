import {PicLeftOutlined, UserOutlined} from "@ant-design/icons";
import styles from './index.module.less';
import {useOperatorContext} from "../../providers/OperatorProvider";
import {Header} from "antd/es/layout/layout";

export const HeaderSection = () => {
    const operatorStore = useOperatorContext();
    const { showHeader } = operatorStore;
        
    if (!showHeader) {
        return <></>;
    }
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles['header-container']}>
                <div className={styles['left']}>
                    <div className={styles['logo']}>
                        <PicLeftOutlined />
                    </div>
                    <div>张晓汝啥都不会的管理平台</div>
                </div>
                <div className={styles['right']}>
                    <div className={styles['avatar']}>
                        <UserOutlined />
                    </div>
                    <div className={styles['name']}>张晓汝是猪</div>
                </div>
            </div>
        </Header>
    );
}