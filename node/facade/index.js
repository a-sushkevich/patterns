// Facade Pattern: provide a simplified interface to a complex subsystem

class CPU {
  freeze() {
    console.log("Freezing CPU");
  }
  execute() {
    console.log("Executing instructions");
  }
}

class Memory {
  load(position, data) {
    console.log(`Loading ${data} into memory at ${position}`);
  }
}

class HardDrive {
  read(position, size) {
    return `Data from ${position} (size: ${size})`;
  }
}

class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    const data = this.hardDrive.read("0x00", 512);
    this.memory.load("0x00", data);
    this.cpu.execute();
  }
}

// Example
const computer = new ComputerFacade();
computer.start();
