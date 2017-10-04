import { Area } from './area';
import { AreaType } from './area-type';

// 当前Block块
// current为选中的
// options为备选的
// type为当前类型
export class AreaBlock {
    public constructor(public current: Area, public options: Area[], public type: AreaType, public depth: number) { }
}