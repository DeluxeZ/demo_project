import {LeftMenu} from './Menu/LeftMenu';
import {RightContent} from './Content/RightContent';
import {Layout} from "antd";
import {useCallback, useState} from "react";
import {useOperatorContext} from "../../providers/OperatorProvider";

export const ContentSection = () => {
    const { Content } = Layout;
    const operatorStore = useOperatorContext();
    const { showMenu } = operatorStore;
    const [currentMenu, setCurrentMenu] = useState<string>('menu1');
    
    const onSelect = useCallback((item: any) => {
        setCurrentMenu(item.key);
    }, []);
    
    return (
        <Content style={{ padding: '10px 20px', height: '100%' }}>
            <Layout style={{ height: '100%' }}>
                {showMenu && (
                    <LeftMenu currentMenu={currentMenu} onSelect={onSelect}/>
                )}
                <RightContent currentMenu={currentMenu}/>
            </Layout>
        </Content>
    );
}