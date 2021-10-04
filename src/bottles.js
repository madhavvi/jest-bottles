/* eslint-disable eqeqeq */
import { downTo, capitalize } from './helper';

class Bottles {

  getNum(val){
    switch(val) {
      case 0: return 'no more';
      case -1: return '99';
      default: return val.toString();
    }
  }

  getBottlesStr(val){
    return val == 1 ? 'bottle' : 'bottles';
  }

  getWordStr(val){
    return val == 1 ? 'it' : 'one';
  }

  getThirdPartofVerse(val){
    return (val != 0) ? `Take ${this.getWordStr(val)} down and pass it around, ` : 'Go to the store and buy some more, ';
  }

  verse(num) {
    const verseStr = `${capitalize(this.getNum(num))} ${this.getBottlesStr(num)} of beer on the wall, ` +
            `${this.getNum(num)} ${this.getBottlesStr(num)} of beer.\n` +
            this.getThirdPartofVerse(num) +
            `${this.getNum(num-1)} ${this.getBottlesStr(num-1)} of beer on the wall.\n`;
            
    // console.log('verseStr : ', verseStr);
    return verseStr;
  }

  verses(from, to) {
    const numsArr = downTo(from, to);
    const versesStr = numsArr.map((num) => this.verse(num)).join('\n');
    //   console.log('versesStr ', versesStr);
    return versesStr;
  }

  song() {
    let numsArr = downTo(99, 0);
    let songVerses = numsArr.map(num => this.verse(num)).join('\n');
    // console.log('song : ', songVerses);
    return songVerses;
  }
}

export { Bottles };

// I used this to run in terminal
// const bottles = new Bottles();
// bottles.verses(1, 0);
// bottles.verse(0);
// bottles.song();