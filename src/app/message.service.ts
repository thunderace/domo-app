import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message: string = "Hello";
  
  constructor() { }
}
