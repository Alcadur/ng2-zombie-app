import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';
import {Cemeteries} from '../cemeteries/Cemeteries';
import {Cemetery} from '../cemeteries/CemeteryComponent';
import {Zombies} from '../zombies/Zombies';
import {Zombie} from '../zombies/Zombie';
import {EditZombie} from '../zombies/EditZombie';

@Component({
    selector: 'zombie-app',
    templateUrl: 'dev/scripts/zombie-app/zombie-app.html',
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/cemeteries', component: Cemeteries, name: 'Cemeteries'},
    {path: '/cemeteries/:id', component: Cemetery, name: 'Cemetery'},
    {path: '/zombies', component: Zombies, name: 'Zombies'},
    {path: '/zombies/:id', component: Zombie, name: 'Zombie'},
    {path: '/zombies/:id/edit', component: EditZombie, name: 'EditZombie'}
])
export class ZombieApp {
    constructor(private router: Router) {
        router.navigate(['Cemeteries']);
    }
}
