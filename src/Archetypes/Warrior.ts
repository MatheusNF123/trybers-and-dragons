import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _mana: EnergyType;
  private static warriorCountInstances = 0;
  constructor(name: string) {
    super(name);
    Warrior.warriorCountInstances += 1;
    this._mana = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorCountInstances;
  }

  get energyType(): EnergyType {
    return this._mana;
  }
}