import React, {useState} from "react";
import 
{
    HomeOutlined,
    TeamOutlined,
    CompassOutlined
} from '@ant-design/icons'
import type { MenuProps} from 'antd';
import {ConfigProvider, Menu as MenuAntd} from "antd";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] =
[
    { key: '1', icon: <HomeOutlined style={{fontSize: 20}}/>, label: 'Recommended' },
    { key: '2', icon: <TeamOutlined style={{fontSize: 20}}/>, label: 'Subscribers' },
    { key: '3', icon: <CompassOutlined style={{fontSize: 20}}/>, label: 'Watch' }
]

const Sider: React.FC = () => 
{
    return(
    <div style={{ width: 250 }}>
        <ConfigProvider
            theme={{
                 components:
                 {
                    Menu : {
                        itemHeight: 60,
                        itemBg: 'black'
                    }
                 },
                 token: {
                    
                 }
            }}
        >
        <MenuAntd defaultOpenKeys={['sub1']} mode="inline" theme="dark" items={items} style={{fontSize: 20}}></MenuAntd>
        </ConfigProvider>
    </div>
    );
}

export default Sider;