export class DeadMan {
    id: string;
    picture: string;
    age: number;
    cemeteryId: string;
    name = {first: "", last: ""};
    about: string;
    died: number;

    constructor(obj){
        this.id = obj.id;
        this.picture = obj.picture;
        this.age = obj.age;
        this.cemeteryId = obj.cemeteryId;
        this.name = obj.name;
        this.about = obj.about;
        this.died = obj.died;
    }

    static convertArray(objects: Array<any>):Array<DeadMan>{
        let dedManArray = [];
        for(let obj of objects){
            dedManArray.push(new DeadMan(obj));
        }
        return dedManArray;
    }

    update(obj){
        this.picture = obj.picture;
        this.name.first = obj.firstName;
        this.name.last = obj.lastName;
        this.cemeteryId = obj.cemeteryId;
        this.about = obj.about;
    }
}