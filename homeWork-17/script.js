class Developer {
  constructor(name) {
    this.name = name;
  }

  startWork() {
    return `${this.name} start work`;
  }

  endWork() {
    return `${this.name} end work`;
  }
}

const dev = new Developer("Tanya");
console.log(dev.startWork());

class Frontend extends Developer {
  constructor(name, websiteName) {
    super(name);
    this.websiteName = websiteName;
  }

  buildWebsite() {
    return `${this.name} starts building website ${this.websiteName}`;
  }
}

class Backend extends Developer {
  constructor(name) {
    super(name);
  }

  buildServer() {
    return `${this.name} starts building server`;
  }
}

const back = new Backend("Kennen");

const front = new Frontend("John", "Trello");

console.log(front.startWork());
console.log(front.buildWebsite());
console.log(back.startWork());
console.log(back.buildServer());
console.log(dev.endWork());
