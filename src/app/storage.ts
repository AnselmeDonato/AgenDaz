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


    // Create an instance of a db object for us to store the open database in
    let db;

    // Open our database; it is created if it doesn't already exist
    // (see the upgradeneeded handler below)
    const openRequest = window.indexedDB.open("tasks_db", 1);

    // error handler signifies that the database didn't open successfully
    openRequest.addEventListener("error", () =>
    console.error("Database failed to open")
    );

    // success handler signifies that the database opened successfully
    openRequest.addEventListener("success", () => {
      console.log("Database opened successfully");

      // Store the opened database object in the db variable. This is used a lot below
      db = openRequest.result;

      // Run the displayData() function to display the notes already in the IDB
      displayData();
        }
    );

    // Set up the database tables if this has not already been done
    openRequest.addEventListener("upgradeneeded", (e) => {
      // Grab a reference to the opened database
      db = e.target.result;

      // Create an objectStore in our database to store notes and an auto-incrementing key
      // An objectStore is similar to a 'table' in a relational database
      const objectStore = db.createObjectStore("tasks_os", {
        keyPath: "id",
        autoIncrement: true,
      });

      // Define what data items the objectStore will contain
      objectStore.createIndex("description", "description", { unique: false });
      objectStore.createIndex("done", "done", { unique: false });

      console.log("Database setup complete");
    });

  }

  // public clear(){
  //   localStorage.clear();
  // }

}
function displayData() {
  throw new Error('Function not implemented.');
}
