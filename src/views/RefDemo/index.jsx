import React, {Component} from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
    }

    render() {
        return (
            <>
                <div id={'test'} ref={c => this.myDiv = c}>
                    <p>ref demo</p>
                </div>
                <button onClick={() => {
                    console.log(this.myDiv.id);
                }}>button
                </button>
            </>

        );
    }
}

export default Index;
