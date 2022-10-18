import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _mana: EnergyType;
  static necromancerCountInstances = 0;
  constructor(name: string) {
    super(name);
    Necromancer.necromancerCountInstances += 1;
    this._mana = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerCountInstances;
  }

  get energyType(): EnergyType {
    return this._mana;
  }
}