import { Events } from 'ionic-angular';

import { FilterItem } from '../../entity/filter-item';

export abstract class BaseFilter {
    public constructor(public filter: FilterItem, public events: Events){
        this.filter = filter;
        this.events = events;
    }

    public publish(): void {
        this.events.publish('buildingList:filter', this.filter);
    }
}