import React from 'react';
// import CountCom from './components/Hook';
// import StarList from './components/starList';
// import EchartsDemo from "./views/EchartsDemo";
// import ModalDemo from './views/ModalDemo';
// import WordFun from './components/wordFun';
// import RefDemo from './views/RefDemo';
// import AntdView from './views/AntdView';
// import WaterMark from './views/WaterMark';
// import WaterMark from 'watermark-component-for-react';
// import Draggable from './views/Draggable';
// import AntdTableDemo from './views/AntdTableDemo';
import Searcher from './components/Searcher';

const FORM_LIST = [
    {
        key: 'Input',
        type: 'Input',
        label: '关键词',
        width: 150,
        placeholder: '请输入关键词',
        attrs: {
            maxLength: 10,
            allowClear: true
        }
    },
    {
        key: 'RangePicker',
        type: 'RangePicker',
        label: '时间段',
        width: 250,
        // placeholder: ['开始的时间', '结束的时间'],
    },
    {
        key: 'Select',
        type: 'Select',
        value: 'status',
        label: '状态',
        width: 100,
        options: [
            {value: 0, name: '全部'},
            {value: 1, name: '通过'},
            {value: 2, name: '未通过'}
        ]
    },
    {
        key: 'br',
        type: 'br'
    },
    {
        key: 'Select',
        type: 'Select',
        value: 'type',
        label: '服务类型',
        width: 100,
        options: [
            {value: 0, name: '已结算'},
            {value: 1, name: '未结算'},
        ]
    },
    {
        key: 'DatePicker',
        type: 'DatePicker',
        label: '日期',
        placeholder: '请选择日期'
    },
];

function App() {
    return (
        <div>
            {/*<h3>hello world</h3>*/}
            {/*<CountCom/>*/}
            {/*<StarList name='手抓饼' score={3}/>*/}
            {/*<StarList name='苹果汁' score={2}/>*/}
            {/*<StarList name='烤鱿鱼' score={4}/>*/}
            {/*<EchartsDemo/>*/}
            {/*<ModalDemo/>*/}
            {/*<WordFun/>*/}
            {/*<RefDemo />*/}
            {/*<WaterMark content='测试水印'>*/}
            {/*<AntdView/>*/}
            {/*</WaterMark>*/}
            {/*<Draggable/>*/}
            {/*<AntdTableDemo/>*/}
            <Searcher
                form={FORM_LIST}
                onSearch={data => {
                    console.log(data);
                }}
                onReset={data => {
                    console.log(data);
                }}
            />
        </div>
    );
}

export default App;
