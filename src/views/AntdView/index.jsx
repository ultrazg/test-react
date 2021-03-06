import React, {Component} from 'react';
import {Switch} from 'antd';
import WaterMark from '../WaterMark';

// import WaterMark from '../WaterMark/watermark';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    }

    render() {
        return (
            <>
                <div id='ffff'>
                    <WaterMark content={'机密★信息'} disabled={this.state.isChecked}>
                        <div id='test' style={{fontSize: 'smaller'}}>
                            <Switch checked={this.state.isChecked} onChange={this.SwitchToggle}/>
                            <span>{this.state.isChecked ? '显示' : '隐藏'}水印</span>
                        </div>
                        <p>机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容</p>
                        <p>机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容</p>
                        <p>机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容机密内容</p>
                    </WaterMark>
                </div>
            </>
        );
    }

    SwitchToggle = checked => {
        this.setState({
            isChecked: checked
        });
    }
}

export default Index;
