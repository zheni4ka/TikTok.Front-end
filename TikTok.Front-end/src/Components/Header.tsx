import React from "react";
import {Layout as LayoutAntd, Input, Button, ConfigProvider} from 'antd';
import { Link } from "react-router-dom";

const {Header : HeaderAntd} = LayoutAntd;
const { Search } = Input;

const Header : React.FC = () => {

    return (
        <HeaderAntd style={{ display: 'grid', width: '100%', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '50px', background: 'black', borderBottom: '2px solid gray', height: '70px'}}>
                <Link to="/" style={{marginInline: '-10%'}}><img style={{width: '200px', height: '60px'}} src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg"/></Link>
                <ConfigProvider
                theme={{
                    token: {
                        colorBgContainer: '#2f2f2f',
                        colorBorder: '#2f2f2f',
                        colorTextBase: '#fcfcfc',
                        fontSize: 18,
                        borderRadius: 25,
                        controlHeight: 50
                    }
                }}
                >
                    <Search placeholder="Search" allowClear style={{ width: 500, marginInline: 'auto',  paddingTop: '10px', color: 'white'}} />
                </ConfigProvider>
                
                <div style={{display : 'flex', justifyContent: 'flex-end', marginTop: 'auto', gap: 10}}>
                    <Button className="Login">Login</Button>
                </div>
        </HeaderAntd>
    );
};  

export default Header;