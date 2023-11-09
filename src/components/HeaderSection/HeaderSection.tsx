import {PicLeftOutlined} from "@ant-design/icons";
import styles from './index.module.less';

export const HeaderSection = () => {
    return (
        <div className={styles.headerContainer}>
            <div>
                <PicLeftOutlined />
                logo
            </div>
            <div>张晓汝啥都不会的管理平台</div>
            <div>profile</div>
        </div>
    );
}