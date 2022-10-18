import Race from './Race';

class Elf extends Race {
  private maxHelth: number;
  static ElfCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 99;
    Elf.ElfCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf.ElfCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Elf;