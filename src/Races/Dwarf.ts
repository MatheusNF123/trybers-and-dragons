import Race from './Race';

class Dwarf extends Race {
  private maxHelth: number;
  private static dwarfCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 80;
    Dwarf.dwarfCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf.dwarfCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Dwarf;