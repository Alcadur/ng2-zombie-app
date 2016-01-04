import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';
import {Cemeteries} from '../cemeteries/Cemeteries';
import {Cementary} from '../cemeteries/Cemetery';

@Component({
    selector: 'zombie-app',
    templateUrl: 'dev/scripts/zombie-app/zombie-app.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/cemeteries', component: Cemeteries, name: 'Cemeteries'},
    {path: '/cemeteries/:id', component: Cementary, name: 'Cementary'}
])
export class ZombieApp {
    constructor(private router: Router) {
        router.navigate(['Cemeteries']);
    }
}
