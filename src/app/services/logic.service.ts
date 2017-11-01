import { Injectable } from '@angular/core';

@Injectable()
export class LogicService {

  constructor() { }


  percentage(value1: any, value2: any){
    if(!value1){
        return 0;
    }

    let base = +value1;
    let oposite = +value2;

    let total = base + oposite;
    let percentage = (base * 100) / total;
    return Math.round(percentage);
}

orderByLikes(array: Array<any>) {
  return array.sort((a: any, b: any) => {
    if (a.likes > b.likes) {
      return -1;
    } else if (a.likes < b.likes) {
      return 1;
    } else {
      return 0;
    }
  });
}

}
 