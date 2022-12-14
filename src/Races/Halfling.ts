import Race from './Race';

class Halfling extends Race {
  private maxHelth: number;
  private static halflingCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 60;
    Halfling.halflingCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.halflingCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Halfling;