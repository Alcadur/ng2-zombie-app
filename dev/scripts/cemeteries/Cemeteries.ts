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
        http.get('data/zombies.json').map(res => res.json()).subscribe(zombies => {
            let cemeteries = [];
            http.get('data/cementarys.json').map(res => res.json()).subscribe(response => {
                cemeteries = response;
                let zombiesInCemeteries = {};
                for(let zombie of zombies){
                    zombiesInCemeteries[zombie.cemetery] = zombiesInCemeteries[zombie.cemetery] || 0;
                    zombiesInCemeteries[zombie.cemetery]++;
                }

                for(let cemetery of cemeteries){
                    cemetery.zombies = zombiesInCemeteries[cemetery.id];
                    this.cemeteries.push(cemetery);
                }
            });
        });

    }
}
