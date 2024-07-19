import React from "react";
import {Layout as LayoutAntd} from "antd";
import VideoPlayer from "./VideoPlayer";
const Home : React.FC = () => {
    return (
       <div style={{width: '80%', marginTop: '50px'}}>
            <VideoPlayer/>
       </div>
    );
};

export default Home;