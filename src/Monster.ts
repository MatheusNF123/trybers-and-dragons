import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints:number;
  private _strength:number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }
}