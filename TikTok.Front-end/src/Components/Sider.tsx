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
    { key: '1', icon: <HomeOutlined style={{fontSize: 22, padding: '5px'}}/>, label: 'Recommended' },
    { key: '2', icon: <TeamOutlined style={{fontSize: 22, padding: '5px'}}/>, label: 'Subscribers' },
    { key: '3', icon: <CompassOutlined style={{fontSize: 22, padding: '5px'}}/>, label: 'Watch' }
]

const Sider: React.FC = () => 
{
    return(
    <div>
        <ConfigProvider
            theme={{
                 components: {
                    Menu: {
                        itemHeight: 60,
                        darkItemBg: 'black',
                    },
                 },
                 token: {
                    fontSize: 22,
                    
                 }
            }}
        >
        <MenuAntd defaultOpenKeys={['sub1']} mode="inline" theme="dark" items={items}></MenuAntd>
        <hr style={{color: "gray", width: 250}}/>
        </ConfigProvider>

    </div>
    );
}

export default Sider;