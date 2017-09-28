import { Popover } from 'ionic-angular';

export class FilterItem {
    public constructor(public id: number, public text: string, public popover: Popover) { }
}