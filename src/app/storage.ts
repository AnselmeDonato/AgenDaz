import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class Storage {
  constructor() {
  }

  // public set task(value:string){
  //   localStorage.setItem('task', value);
  // }

  public get_all() {
    // Mock data for testing
    localStorage.setItem('task','test_true');
    localStorage.setItem('test_true','true');

    localStorage.setItem('task','test_false');
    localStorage.setItem('test_false','false');


    let all_stored_tasks = new Array<Task>();

    for(var key in localStorage){
      console.log(key);
      if(key === 'task'){
        let value = localStorage.getItem(key)!;
        let done = false;
        if(localStorage.getItem(value) === 'true'){
          done = true;
        }
        all_stored_tasks.push({description: value, done: done})
      }
    }
    return all_stored_tasks
  }

  // public clear(){
  //   localStorage.clear();
  // }

}
