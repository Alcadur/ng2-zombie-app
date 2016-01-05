export class Cemetery {
    id: string;
    name: string;
    address: string;
    founded: number;
    zombieNumber: number;

    constructor(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.address = obj.address;
        this.founded = obj.founded;
        this.zombieNumber = 0;
    }

    static convertArray(objects: Array<any>):Array<Cemetery> {
        let cemeteryArray = [];
        for(let obj of objects){
            cemeteryArray.push(new Cemetery(obj));
        }
        return cemeteryArray;
    }
}
