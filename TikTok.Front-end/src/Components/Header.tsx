import React, { useState } from "react";
import { Layout as LayoutAntd, Input, Button, ConfigProvider, Modal } from 'antd';
import { Link } from "react-router-dom";
const { Header: HeaderAntd } = LayoutAntd;
const { Search } = Input;
const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <>
            <HeaderAntd style={{ display: 'grid', width: '100%', gridTemplateColumns: '400px 650px 400px', gridTemplateRows: '50px', background: 'black' }}>
                <Link to="/"><img style={{ width: '200px', height: '60px' }} src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-White-Dark-Background-Logo.wine.svg" /></Link>
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
                </div>
            </HeaderAntd>
            <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        </>
    );
};
export default Header;

