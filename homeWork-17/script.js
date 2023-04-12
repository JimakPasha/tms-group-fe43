class Developer {
    constructor(name) {
      this.name = name;
    }
    startWork() {
      return `${this.name} starts work ...`;
    }
    endWork() {
      return `${this.name} ends work ...`;
    }
  }

class Frontend extends Developer {
    constructor(name, websiteName) {
      super(name);
      this.websiteName = websiteName;
    }
    buildWebsite() {
      return `${this.name} start build website ${this.websiteName}`;
    }
  }

class Backend extends Developer {
    constructor(name) {
      super(name);
    }
    buildServer() {
      return `${this.name} starts build server`;
    }
  }

const userName = new Frontend('Evgeny', 'Google');
console.log (userName.startWork());
console.log(userName.endWork());
console.log (userName.buildWebsite());

const server = new Backend(userName.name);
console.log (server.startWork());
console.log(server.endWork());
console.log (server.buildServer());