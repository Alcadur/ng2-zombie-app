import {Component} from "angular2/core";
import {CacheService} from '../services/CacheService';
import {RouteParams, RouterLink} from "angular2/router";
import {NgFor} from "angular2/common";

@Component({
    selector: "cemetery.cemetery",
    templateUrl: "dev/scripts/cemeteries/cemetery.html",
    directives: [RouterLink, NgFor]
})
export class Cementary {
    public info;
    public zombies: Array<any>;

    constructor(cache: CacheService, params: RouteParams){
        this.info = cache.getCemeteryById(params.get('id'));
        this.zombies = cache.getZombiesByCemeteryId(params.get('id'));
    }
}
