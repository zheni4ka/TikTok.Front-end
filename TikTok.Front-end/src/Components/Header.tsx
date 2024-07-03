import React from "react";
import {Layout as LayoutAntd, Input, Button} from 'antd';
import {TikTokOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

const {Header : HeaderAntd} = LayoutAntd;
const { Search } = Input;

const Header : React.FC = () => {

    return (
        <HeaderAntd style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <span style={{display: 'flex'}}>
                    <TikTokOutlined />
                    <Link to="/"><h1>TikTok</h1></Link>
                </span>

                <span>
                    <Search placeholder="Search user here" allowClear style={{ width: 200, flexGrow: 1 }} />

                </span>
                
                <Button>Login</Button>
                <Button>Register</Button>
            </div>
        </HeaderAntd>
    );
};

export default Header;