import React, {Component} from 'react';
import utils from 'g0blin-utils';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            admin: '吴彦祖',
            email: 'test@163com',
            phone: '19849017480',
            price: 56896,
            count: 989,
            color: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Utils Demo</h1>
                <p>{utils.getTimeToSayhello()}，{this.state.admin}</p>
                <p>tel:{utils.maskString(this.state.phone, 3, 4)}</p>
                <p>{utils.formatMoney(this.state.price)}</p>
                <p>{utils.digitUppercase(this.state.price)}</p>
                <p style={{color: this.state.color}}>今天是周{utils.replaceWeekToCn()}</p>
                <p>{utils.outOfNumShowPlus(this.state.count, 99)}</p>
                <button onClick={() => {
                    console.log(utils.isNullOrUndefined(this.state.message));
                }}>isNull
                </button>
                <button onClick={() => {
                    console.log(utils.isIe());
                }}>isIe
                </button>
                <button onClick={() => {
                    console.log(utils.isEmail(this.state.email));
                }}>isEmail
                </button>
                <button onClick={() => {
                    this.setState({
                        color: utils.randomHexColor()
                    })
                }}>random color
                </button>
                <button onClick={() => {
                    utils.setCookie('name', 'goblin', null, 300);
                    utils.setCookie('address', '广东省广州市天河区xx街道', null, 300);
                    utils.setCookie('post name', '小明', null, 300);
                }}>set cookie
                </button>
                <button onClick={() => {
                    console.log(utils.getCookie('name'));
                }}>get cookie
                </button>
                <button onClick={() => {
                    utils.rmCookie();
                }}>remove cookie
                </button>
                <button onClick={() => {
                    utils.setLocalStorage('name', 'goblin');
                }}>set localstorage
                </button>
                <button onClick={() => {
                    utils.getSessionStorage('name');
                }}>get localstorage
                </button>
                <button onClick={() => {
                    utils.rmLocalStorage('name');
                }}>remove localstorage
                </button>
                <button onClick={() => {
                    utils.setSessionStorage('name', 'goblin');
                }}>set session
                </button>
                <button onClick={() => {
                    utils.getSessionStorage('name');
                }}>get session
                </button>
                <button onClick={() => {
                    utils.rmSessionStorage('name');
                }}>remove session
                </button>
            </div>
        );
    }
}

export default Index;