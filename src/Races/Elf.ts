import Race from './Race';

class Elf extends Race {
  private maxHelth: number;
  private static elfCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 99;
    Elf.elfCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf.elfCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Elf;