import React from "react";
import {Layout as LayoutAntd, Input, Button, ConfigProvider} from 'antd';
import {TikTokOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

const {Header : HeaderAntd} = LayoutAntd;
const { Search } = Input;

const Header : React.FC = () => {

    return (
        <HeaderAntd style={{ display: 'grid', width: '100%', gridTemplateColumns: '400px 650px 400px', gridTemplateRows: '50px', background: 'black'}}>
                <Link to="/"><img style={{width: '200px', height: '60px'}} src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg"/></Link>
                <ConfigProvider
                theme={{
                    token: {
                        colorBgContainer: '#2f2f2f',
                        colorBorder: '#2f2f2f',
                        colorTextBase: '#fcfcfc',
                        fontSize: 18,
                        borderRadius: 15
                    }
                }}
                >
                    <Search placeholder="Search user here" allowClear style={{ width: 500, marginInline: 'auto', paddingTop: '15px', color: 'white'}} />
                </ConfigProvider>
                
                <div style={{display : 'flex', justifyContent: 'flex-end', marginTop: 'auto', gap: 10}}>
                    <Button className="Login">Login</Button>
                    <Button className="Login" style={{background: '#2f2f2f'}}>Register</Button>
                </div>
        </HeaderAntd>
    );
};  

export default Header;