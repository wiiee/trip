import { Injectable } from '@angular/core';

/*
  Generated class for the Init provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageService {
    msgs: any = {};
    
    constructor() {

    }

    public add(key: string, value: any): void {
        if(!this.msgs[key]){
            this.msgs[key] = value;
        }
    }

    public get(key: string): any {
        if(!this.msgs[key]){
            return this.msgs[key];
        }

        return null;
    }

    public remove(key: string): void {
        if(this.msgs[key]){
            delete this.msgs[key];
        }
    }

    public exist(msg: string): boolean {
        return this.msgs[msg];
    }
}