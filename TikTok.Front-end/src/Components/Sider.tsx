import React, { useState } from "react";
import {
HomeOutlined,
TeamOutlined,
CompassOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";
import Login from "../AccountManagement/Login";
import Register from "../AccountManagement/Register";
import { ConfigProvider, Button, Menu as MenuAntd, Modal } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] =
  [
    { key: '1', icon: <HomeOutlined style={{ fontSize: 22, padding: '5px' }} />, label: <Link to='/recommended'>Recommended</Link> },
    { key: '2', icon: <TeamOutlined style={{ fontSize: 22, padding: '5px' }} />, label: <Link to="/subscribes">Subscribes</Link> },
    { key: '3', icon: <CompassOutlined style={{ fontSize: 22, padding: '5px' }} />, label: <Link to='/watch'>Watch</Link> }
  ]

const Sider: React.FC = () => {
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
    <div style={{ width: "300px", display: 'flex', flexDirection: 'column' }}>
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

      <h6 style={{ color: 'gray', textWrap: 'wrap', width: '200px', marginInline: '35px', marginTop: '20px', fontSize: '20px', marginLeft: '20px' }}>
        Log in to subscribe on authors, like videos and read comments
      </h6>

      <Button style={{ width: "250px", height: '40px', margin: 'auto', border: '2px solid #f83b5b', background: '#252525', color: '#f83b5b', fontSize: '20px', fontWeight: 'bold' }} onClick={showModal}>Log in</Button>

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

      <hr style={{ color: "gray", width: 250, marginTop: '30px' }} />
    </div>
  );
}

export default Sider;