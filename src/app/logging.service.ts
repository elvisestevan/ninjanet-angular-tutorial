import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(className: string) {
    console.log("I am the logging service: " + className);
  }

  constructor() { }
}
