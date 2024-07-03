import React from "react";
import {Layout as LayoutAntd} from 'antd';
import {TikTokOutlined} from '@ant-design/icons';
import Link from "antd/es/typography/Link";

const {Header : HeaderAntd} = LayoutAntd;

const Header : React.FC = () => (
    <>
        <HeaderAntd style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <span>
                    <TikTokOutlined />
                </span>
            </div>
        </HeaderAntd>
    </>
);

export default Header;