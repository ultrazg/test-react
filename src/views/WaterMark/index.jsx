import React, {Component} from 'react';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content || '水印',
            disabled: this.props.disabled || false,
        }
    }

    static getDerivedStateFromProps(prevProp, prevState) {
        return {disabled: prevProp.disabled}
    }

    componentDidMount() {
        // 选择需要观察变动的节点
        const targetNode = document.getElementById('my-watermark');
        const that = this;

        // 观察器的配置（需要观察什么变动）
        const config = {attributes: true, childList: true, subtree: true};

        // 当观察到变动时执行的回调函数
        const callback = function (mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes') {
                    if (that.state.disabled) {
                        targetNode.style.backgroundImage = `url(${that.drawWaterMark(that.state.content)})`;
                    }
                }
                // if (mutation.type === 'childList') {
                //     console.log('A child node has been added or removed.');
                // } else if (mutation.type === 'attributes') {
                //     // console.log('The ' + mutation.attributeName + ' attribute was modified.');
                //     targetNode.style.backgroundImage = `url(${that.drawWaterMark('hello world')})`;
                // }
            }
        };

        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(callback);

        // 以上述配置开始观察目标节点
        observer.observe(targetNode, config);
    }

    render() {
        return (
            <div id="my-watermark"
                 style={
                     this.state.disabled
                         ? {backgroundImage: `url(${this.drawWaterMark(this.state.content)})`}
                         : {backgroundImage: `none`}
                 }
            >
                {this.props.children}
            </div>
        );
    }

    drawWaterMark = text => {
        const sin = Math.sin(Math.PI / 4.5);
        const cos = Math.cos(Math.PI / 4.5);
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 110;
        const ctx = canvas.getContext('2d');
        ctx.transform(cos, -sin, sin, cos, 0, 0);
        ctx.font = '20px Microsoft YaHei';
        ctx.fillStyle = 'rgba(0,0,0,.4)';
        // ctx.fillText(text, 80, 140);
        ctx.fillText(text, -30, 100);
        return canvas.toDataURL('image/png');
    }
}


