//表示一个区域点
export class Area {
    public constructor(public id: string | number, public name: string, public hasChild: boolean) { }

    public equal(area: Area) {
        return this.id === area.id && this.name === area.name && this.hasChild === area.hasChild;
    }
}