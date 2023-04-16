class Developer{
    constructor(name){
        this.name = name;
    }
    startWork(){
        return `${this.name} start work ...`
    }
    endtWork(){
        return `${this.name} end work ...`
    }
}

class Frontend extends Developer{
    constructor(name,websiteName){
        super(name);
        this.websiteName = websiteName;
    }
    buildWebSite(){
        return `${this.name} start build website ${this.websiteName}`
    }
}

class Backend extends Developer{
    constructor(name){
        super(name)
    }
    buildServer(){
        return `${this.name} start build server`
    }
}
let DmitryDeveloper = new Developer('Dmitry');
let DmitryFrontend = new Frontend('Dmitry','the-one-api.dev');
let DmitryBackend = new Backend('Dmitry');

console.log(DmitryDeveloper);
console.log(DmitryFrontend);
console.log(DmitryBackend);

console.log(DmitryDeveloper.startWork());
console.log(DmitryDeveloper.endtWork());
console.log(DmitryFrontend.buildWebSite());
console.log(DmitryBackend.buildServer());