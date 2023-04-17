class Developer {
    constructor(name) {
        this.name = name;
    };

    startWork() {
        return `${this.name} start work...`;
    };
    endtWork() {
        return `${this.name} end work...`;
    };
};


class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    };
    buildWebsite() {
        return `${this.name} start build ${this.websiteName}`
    };
};


class Backend extends Developer {
    constructor(name) {
        super(name);
    };
    buildServer() {
        return `${this.name} strat build server`;
    };
};


const bob = new Backend('Bob');

console.log(bob.buildServer());
