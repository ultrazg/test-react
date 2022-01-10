import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div draggable={true} style={{width: 50, height: 20, background: 'pink'}}>
                拖拽
            </div>
        );
    }
}

export default Index;