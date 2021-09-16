import React from 'react';
import CountCom from './components/Hook';
import StarList from './components/starList';
import EchartsDemo from "./views/EchartsDemo";
import ModalDemo from './views/ModalDemo';
import WordFun from './components/wordFun';

function App() {
  return (
    <div>
      <h3>hello world</h3>
      {/* <CountCom/>
      <StarList name='手抓饼' score={3}/>
      <StarList name='苹果汁' score={2}/>
      <StarList name='烤鱿鱼' score={4}/> */}
      {/*<EchartsDemo/>*/}
      {/* <ModalDemo/> */}
      <WordFun />
    </div>
  );
}

export default App;
