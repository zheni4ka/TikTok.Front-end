import { Layout as LayoutAntd } from 'antd';

const { Footer: FooterAntd } = LayoutAntd;

const Footer : React.FC = () => {
    return (
        <div style={{background: 'black'}}>
            <h5 style={{textAlign : 'center', color: 'white'}}>@ TikTok {new Date().getFullYear()}</h5>
        </div>
    )
};

export default Footer;