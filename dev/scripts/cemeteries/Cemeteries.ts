import {Component, } from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Http} from 'angular2/http';
import {RouterLink} from 'angular2/router';
import {CacheService} from '../services/CacheService';

@Component({
    selector: 'cemeteries.cemeteries',
    templateUrl: 'dev/scripts/cemeteries/cemeteries.html',
    directives: [NgFor, RouterLink]
})
export class Cemeteries {
    public cemeteries: Array<Object> = [];

    constructor(cache: CacheService) {
        cache.getCemeteries().then(cemeteries => {
            this.cemeteries = cemeteries;
        });
    }
}
