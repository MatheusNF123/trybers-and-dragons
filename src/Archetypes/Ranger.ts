import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _mana: EnergyType;
  static rangerCountInstances = 0;
  constructor(name: string) {
    super(name);
    Ranger.rangerCountInstances += 1;
    this._mana = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerCountInstances;
  }

  get energyType(): EnergyType {
    return this._mana;
  }
}