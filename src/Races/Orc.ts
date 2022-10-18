import Race from './Race';

class Orc extends Race {
  private maxHelth: number;
  static orcCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 74;
    Orc.orcCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc.orcCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Orc;