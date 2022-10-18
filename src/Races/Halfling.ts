import Race from './Race';

class Halfling extends Race {
  private maxHelth: number;
  static HalflingCountInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHelth = 60;
    Halfling.HalflingCountInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.HalflingCountInstances;
  }

  get maxLifePoints(): number {
    return this.maxHelth;
  }
}

export default Halfling;