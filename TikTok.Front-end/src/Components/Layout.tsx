import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import { ConfigProvider, Layout as LayoutAntd } from "antd";
import { Outlet } from "react-router-dom";
import Sider from "./Sider";
const { Content } = LayoutAntd;



const Layout: React.FC = () => {
    return (
        <LayoutAntd className="Layout" style={{background: 'black', height: window.innerHeight, overflow: 'hidden'}}>
            <Header />
            
            <div style={{display: 'grid', gridTemplateColumns: '300px 1fr', height: window.innerHeight}}>
            
            <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
                <Sider/>
                <Footer/>
            </div>
            
            <Content className='Main'>
                <Outlet />
            </Content>

            </div>
        </LayoutAntd>
    );
}

export default Layout;