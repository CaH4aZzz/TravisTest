module.exports = class Component {

    constructor(name) {
        this.name = name;
        this.callback = this.callback.bind(this);
    }

    callback (newState)  {
        console.log(this.name, newState);
    }
};