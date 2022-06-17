import {action, computed, observable} from 'mobx';

class Store {
    // 被观察者，声明一些想要观察的变量，状态。可以是：JavaScript 的原始类型、对象、数组、函数等。
    @observable name = 'mobx';
    @observable age = 18;

    // 计算值，根据现有的状态或者其它计算值衍生出的值。计算值不接受参数。
    @computed
    get getName() {
        return this.name;
    }

    @computed
    getAge(){
        return this.age;
    }

    // 使用 @action 来修改状态。把状态的改变视为一个动作，可以被 Mobx 进行记录。
    @action
    setName(name) {
        this.name = name;
    }

    @action
    setAge(age){
        this.age = age;
    }
}

export default Store;