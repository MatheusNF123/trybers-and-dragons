import Race from './Race';

class Dwarf extends Race {
  private maxHelth: number;
  static DwarfCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 80;
    Dwarf.DwarfCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf.DwarfCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Dwarf;