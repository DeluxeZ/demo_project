import {useCallback, useState} from "react";
import {Button, Drawer, Switch} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import styles from './index.module.less';
import {useOperatorContext} from "../../providers/OperatorProvider";
import {THEME} from "../../model/const";
import classNames from "classnames";

export const Operator = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const operatorStore = useOperatorContext();
    const { theme, setTheme, showHeader, setShowHeader, showMenu, setShowMenu } = operatorStore;
    
    const changeTheme = useCallback((theme: THEME) => {
        const body = document.body;
        body.className = theme;
        setTheme(theme);
    }, [setTheme]);
    
    return (
        <>
            <Drawer placement="right" onClose={() => setShowDrawer(false)} open={showDrawer}>
                <div className={styles['item-container']}>
                    <div className={styles['title']}>主题色</div>
                    <div className={styles['item']}>
                        <div
                            className={classNames({
                                [styles['red-picker']]: true,
                                [styles.selected]: theme === THEME.RED,
                            })}
                            onClick={() => changeTheme(THEME.RED)}
                        ></div>
                        <div
                            className={classNames({
                                [styles['blue-picker']]: true,
                                [styles.selected]: theme === THEME.BLUE,
                            })}
                            onClick={() => changeTheme(THEME.BLUE)}
                        ></div>
                    </div>
                </div>
                <div className={styles['item-container']}>
                    <div className={styles.title}>内容区域</div>
                    <div>
                        <div className={styles['content-switch']}>
                            <div className={styles.label}>顶栏</div>
                            <Switch checked={showHeader} onChange={checked => setShowHeader(checked)}/>
                        </div>
                        <div  className={styles['content-switch']}>
                            <div className={styles.label}>菜单栏</div>
                            <Switch checked={showMenu} onChange={checked => setShowMenu(checked)}/>
                        </div>
                    </div>
                </div>
            </Drawer>
            <Button icon={<SettingOutlined />} onClick={() => setShowDrawer(true)} className={styles['setting-button']}></Button>
        </>
    );
}