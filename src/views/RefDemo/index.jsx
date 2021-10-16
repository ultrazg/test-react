import React, {Component} from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div ref={this.myRef}>
                <p>ref demo</p>
            </div>
        );
    }
}

export default Index;
