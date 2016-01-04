import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';
import {Cemeteries} from '../cemeteries/Cemeteries';
import {Cemetery} from '../cemeteries/Cemetery';
import {Zombies} from '../zombies/Zombies';
import {Zombie} from '../zombies/Zombie';

@Component({
    selector: 'zombie-app',
    templateUrl: 'dev/scripts/zombie-app/zombie-app.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/cemeteries', component: Cemeteries, name: 'Cemeteries'},
    {path: '/cemeteries/:id', component: Cemetery, name: 'Cemetery'},
    {path: '/zombies', component: Zombies, name: 'Zombies'},
    {path: '/zombies/:id', component: Zombie, name: 'Zombie'}
])
export class ZombieApp {
    constructor(private router: Router) {
        router.navigate(['Cemeteries']);
    }
}
