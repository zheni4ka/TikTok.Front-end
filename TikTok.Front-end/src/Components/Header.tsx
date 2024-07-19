import React, { useState } from "react";
import { Layout as LayoutAntd, Input, Button, ConfigProvider, Modal } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, UserAddOutlined, GoogleOutlined, TikTokOutlined } from '@ant-design/icons';
import './Header.css';
import Login from "../AccountManagement/Login";
import Register from "../AccountManagement/Register";
const { Header: HeaderAntd } = LayoutAntd;
const { Search } = Input;
const Header: React.FC = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        if (showLogin) {
            setShowLogin(false); 
          } else {
            setIsModalOpen(false); 
          }
    
          if (showRegister) {
            setShowRegister(false); 
          } else {
            setIsModalOpen(false); 
          }
    };
    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
      };
      const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
      };
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
                            borderRadius: 15
                        }
                    }}
                >
                    <Search placeholder="Search user here" allowClear style={{ width: 500, marginInline: 'auto', paddingTop: '15px', color: 'white' }} />
                </ConfigProvider>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto', gap: 10 }}>
                    <Button className="Login" onClick={showModal}>Login</Button>
                    <Modal open={isModalOpen} onCancel={handleCancel} className="custom-modal" bodyStyle={{ backgroundColor: '#252525' }} style={{ backgroundColor: '#252525' }} footer={null}>
                        <div className="modal-content">
                            <h1>Login in to TikTok</h1>
                            {showLogin ? (
          <Login />
        ) : (
          <Button className="button-login" type="primary" onClick={handleShowLogin}>
               <h1>Login Gmail</h1> 
              </Button>
            )}
            {showRegister ? (
          <Register />
        ) : (
          <Button className="button-register" type="primary" onClick={handleShowRegister}>
               <h1>Register</h1> 
              </Button>
            )}
                            <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?platform=google&client_id=1096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com&response_type=token&redirect_uri=https%3A%2F%2Fwww.tiktok.com%2Flogin%2F&state=%7B%22client_id%22%3A%221096011445005-sdea0nf5jvj14eia93icpttv27cidkvk.apps.googleusercontent.com%22%2C%22network%22%3A%22google%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_4mjtwquh%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fwww.tiktok.com%2Flogin%2F%22%2C%22scope%22%3A%22basic%22%7D&scope=openid%20profile&prompt=consent&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow">
                                <Button className="button-google" type="primary" icon={<GoogleOutlined style={{ fontSize: '33px' }} />}>
                                    <h1>Google</h1>
                                </Button>
                            </a>
                            <h3>Or</h3>
                            <Button className="button-guest" type="default" style={{ marginTop: '20px' }} onClick={handleCancel}>
                                <h1>Continue as Guest</h1>
                            </Button>
                        </div>
                    </Modal>
                </div>
            </HeaderAntd>
    );
};  

export default Header;
