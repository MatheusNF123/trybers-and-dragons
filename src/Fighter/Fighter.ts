import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {

  defense:number;
  energy?:Energy;
  // attack(enemy:SimpleFighter):void
  special?(enemy:Fighter):void
  levelUp():void
  // receiveDamage(attackPoints:number):number
}