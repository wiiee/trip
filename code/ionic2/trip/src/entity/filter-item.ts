import { FilterType } from "./filter-type";

export class FilterItem {
    public constructor(public type: FilterType, public text: string, public page: any, public data?: any) { }
}