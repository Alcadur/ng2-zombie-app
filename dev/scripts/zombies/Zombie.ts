import {Component} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';
import {CacheService} from '../services/CacheService';

@Component({
    selector: 'zombie.zombie',
    templateUrl: 'dev/scripts/zombies/zombie.html',
    directives: [RouterLink]
})
export class Zombie {
    public zombie: any;

    constructor(cache: CacheService, params: RouteParams) {
        this.zombie = cache.getZombieById(params.get('id'));
    }
}