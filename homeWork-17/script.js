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
  
  class Frontend extends Developer {
    #websiteName = "Wildberries";
    constructor(...otherOptions) {
      super(...otherOptions);
    }
    buildWebsite() {
      return `${this.name} start build website ${this.#websiteName}`;
    }
  }
  
  class Backend extends Developer {
    constructor(...otherOptions) {
      super(...otherOptions);
    }
    buildServer() {
      return `${this.name} start build server`;
    }
  }
  
  const john = new Frontend("John");
  const alex = new Backend("Alex");
  console.log(john);
  console.log(john.startWork());
  console.log(john.buildWebsite());
  console.log(john.endWork());
  console.log(alex);
  console.log(alex.startWork());
  console.log(alex.buildServer());
  console.log(alex.endWork());
  