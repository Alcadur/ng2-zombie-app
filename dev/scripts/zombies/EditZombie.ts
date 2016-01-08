import {Component} from 'angular2/core';
import {CacheService} from '../services/CacheService';
import {RouteParams} from 'angular2/router';
import {
    FormBuilder,
    ControlGroup,
    NgFor,
    Validators,
    NgClass} from 'angular2/common';
import {DeadMan} from '../zombies/DeadMan';
import {Cemetery} from '../cemeteries/Cemetery';
import {Router, RouterLink} from 'angular2/router'

@Component({
    selector: "edit-zombie.edit-zombie",
    templateUrl: 'dev/scripts/zombies/edit-zombie.html',
    directives: [NgFor, NgClass, RouterLink]
})
export class EditZombie {
    public form: ControlGroup;
    public cemeteries: Array<Cemetery>;
    public zombieId: string;
    public zombie: DeadMan;
    private router: Router;

    constructor(cache: CacheService, params: RouteParams, formBuilder: FormBuilder, private router: Router) {
        cache.getCemeteries().then(cemeteries => this.cemeteries = cemeteries);
        this.zombie = cache.getZombieById(params.get('id'));
        this.zombieId = this.zombie.id;
        this.form = formBuilder.group({
            picture: [this.zombie.picture],
            firstName: [this.zombie.name.first, Validators.required],
            lastName: [this.zombie.name.last, Validators.required],
            cemeteryId: [this.zombie.cemeteryId],
            about: [this.zombie.about]
        });
    }

    submit() {
        if(this.form.valid){
            this.zombie.update(this.form.value);
            this.router.navigate(["Zombie", {id: this.zombie.id}]);
        }
    }

    hasError(fieldKey: string): boolean {
        let field = this.form.controls[fieldKey];
        return !field.valid && field.dirty;
    }
}
