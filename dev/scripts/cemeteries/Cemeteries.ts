import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'cemeteries',
    templateUrl: 'dev/scripts/cemeteries/cemeteries.html',
    directives: [NgFor]
})
export class Cemeteries {
    public cemeteries: Array<any> = [];

    constructor(http: Http) {
        http.get('data/cementarys.json').map(res=>res.json()).subscribe(responce => {
            this.cemeteries = responce;
        })
    }
}
