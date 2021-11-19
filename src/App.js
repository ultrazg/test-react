import React from 'react';
import CountCom from './components/Hook';
import StarList from './components/starList';
import EchartsDemo from "./views/EchartsDemo";
import ModalDemo from './views/ModalDemo';
import WordFun from './components/wordFun';
import RefDemo from './views/RefDemo';
import AntdView from './views/AntdView';
// import WaterMark from './views/WaterMark';
import WaterMark from 'watermark-component-for-react';

function App() {
    return (
        <div>
            <h3>hello world</h3>
            {/*<CountCom/>*/}
            {/*<StarList name='手抓饼' score={3}/>*/}
            {/*<StarList name='苹果汁' score={2}/>*/}
            {/*<StarList name='烤鱿鱼' score={4}/>*/}
            {/*<EchartsDemo/>*/}
            {/*<ModalDemo/>*/}
            {/*<WordFun/>*/}
            {/*<RefDemo />*/}
            {/*<WaterMark content='测试水印'>*/}
            <AntdView/>
            {/*</WaterMark>*/}
        </div>
    );
}

export default App;
