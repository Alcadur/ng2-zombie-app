import {Component} from 'angular2/core';
import {CacheService} from '../services/CacheService';
import {NgFor} from 'angular2/common';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'zombies.zombies',
    templateUrl: 'dev/scripts/zombies/zombies.html',
    directives: [NgFor, RouterLink]
})
export class Zombies {
    public zombies: Array<any>;
    constructor(private cache: CacheService){
        cache.getZombies().then(zombies => {
            this.zombies = zombies;
        });
    }

    getCemeteryName(cemeteryId: string): string {
        let cemetery = this.cache.getCemeteryById(cemeteryId);
        return cemetery.name;
    }
}