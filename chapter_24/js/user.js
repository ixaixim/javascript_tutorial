export default class User {
    constructor(email, name) {
        this._id = email;
        this._name = name;
    }

    greeting() {
        console.log(`Hi, I am ${this._name}`);
    }
}