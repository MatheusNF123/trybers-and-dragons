import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _mana: EnergyType;
  private static mageCountInstances = 0;
  constructor(name: string) {
    super(name);
    Mage.mageCountInstances += 1;
    this._mana = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.mageCountInstances;
  }

  get energyType(): EnergyType {
    return this._mana;
  }
}