import {Button, Menu} from "antd";
import {MenuUnfoldOutlined, OrderedListOutlined, UnorderedListOutlined, MenuFoldOutlined} from "@ant-design/icons";
import {useCallback, useState} from "react";
import Sider from "antd/es/layout/Sider";

export const LeftMenu = (props: {
    currentMenu: string,
    onSelect: (item: any) => void;
}) => {
    const {currentMenu, onSelect} = props;
    const [collapsed, setCollapsed] = useState(false);
    const menuItems = [{
        key: 'menu1',
        label: '页面1',
        icon: <OrderedListOutlined />,
    }, {
        key: 'menu2',
        label: '页面2',
        icon: <UnorderedListOutlined />,
    }];
    
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={'light'}>
            <Menu items={menuItems} selectedKeys={[currentMenu]} onSelect={onSelect} mode={'inline'} inlineCollapsed={collapsed}/>
        </Sider>
    );
}