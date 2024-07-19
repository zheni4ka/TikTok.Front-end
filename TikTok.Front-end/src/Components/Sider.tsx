import React, {useState} from "react";
import 
{
    HomeOutlined,
    TeamOutlined,
    CompassOutlined
} from '@ant-design/icons'
import type { MenuProps} from 'antd';
import {ConfigProvider, Button, Menu as MenuAntd} from "antd";

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
    <div style={{width: "300px", display: 'flex', flexDirection: 'column'}}>
        <ConfigProvider
            theme={{
                 components: {
                    Menu: {
                        itemHeight: 60,
                        darkItemBg: 'black',
                        darkItemSelectedBg: 'black',
                        darkItemSelectedColor: '#f83b5b'
                    },
                 },
                 token: {
                    fontSize: 22
                 }
            }}
        >
        <MenuAntd defaultOpenKeys={['sub1']} mode="inline" theme="dark" items={items}></MenuAntd>
        </ConfigProvider>

        <h6 style={{color: 'gray', textWrap: 'wrap', width: '200px', marginInline: '35px', marginTop: '20px', fontSize: '20px', marginLeft: '20px'}}>
            Log in to subscribe on authors, like videos and read comments
        </h6>

        <Button style={{ width: "250px", height: '40px', margin: 'auto', border: '2px solid #f83b5b', background: '#252525', color: '#f83b5b', fontSize: '20px', fontWeight: 'bold'}}>Log in</Button>

        <hr style={{color: "gray", width: 250, marginTop: '30px'}}/>
    </div>
    );
}

export default Sider;