import Race from './Race';

class Orc extends Race {
  private maxHelth: number;
  static OrcCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 74;
    Orc.OrcCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc.OrcCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Orc;