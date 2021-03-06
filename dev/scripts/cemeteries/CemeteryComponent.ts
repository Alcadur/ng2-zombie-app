import {Component} from 'angular2/core';
import {CacheService} from '../services/CacheService';
import {RouteParams, RouterLink} from 'angular2/router';
import {NgFor} from 'angular2/common';
import {DeadMan} from '../zombies/DeadMan';

@Component({
    selector: 'cemetery.cemetery',
    templateUrl: 'dev/scripts/cemeteries/cemetery.html',
    directives: [RouterLink, NgFor]
})
export class Cemetery {
    public info;
    public zombies: Array<DeadMan>;

    constructor(cache: CacheService, params: RouteParams) {
        this.info = cache.getCemeteryById(params.get('id'));
        this.zombies = cache.getZombiesByCemeteryId(params.get('id'));
    }
}
