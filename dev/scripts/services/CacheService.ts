import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {DeadMan} from '../zombies/DeadMan';
import {Cemetery} from '../cemeteries/Cemetery';
import {Zombie} from "../zombies/Zombie";

@Injectable()
export class CacheService {
    private cemeteries: Array<Cemetery> = [];
    private zombies: Array<DeadMan> = [];

    constructor(private http: Http) {
    }

    getCemeteries():Promise<Cemetery[]> {
        if (this.cemeteries.length === 0) {
            return new Promise<Cemetery[]>((resolve)=> {
                this.getZombies().then(zombies => {
                    this.http.get('data/cemeteries.json').map(res => Cemetery.convertArray(res.json())).subscribe(cemeteries => {
                        let zombiesInCemeteries = {};
                        for (let zombie of zombies) {
                            zombiesInCemeteries[zombie.cemeteryId] = zombiesInCemeteries[zombie.cemeteryId] || 0;
                            zombiesInCemeteries[zombie.cemeteryId]++;
                        }

                        for (let cemetery of cemeteries) {
                            cemetery.zombieNumber = zombiesInCemeteries[cemetery.id];
                            this.cemeteries.push(cemetery);
                        }

                        resolve(this.cemeteries);
                    });
                });
            });
        }

        return new Promise<Cemetery[]>(resolve => resolve(this.cemeteries));
    }

    getCemeteryById(id: string):Cemetery {
        for (let cemetery of this.cemeteries) {
            if (cemetery.id === id) {
                return cemetery;
            }
        }
    }

    getZombies():Promise<DeadMan[]> {
        if (this.zombies.length === 0) {
            return new Promise<DeadMan[]>(resolve => {
                this.http.get('data/zombies.json').map(res => DeadMan.convertArray(res.json())).subscribe(zombies => {
                    this.zombies = zombies;
                    resolve(this.zombies);
                });
            });
        }

        return new Promise<DeadMan[]>(resolve => resolve(this.zombies));
    }

    getZombiesByCemeteryId(cemeteryId: string):Array<DeadMan> {
        var cemeteryZombies = [];
        for (let zombie of this.zombies) {
            if (zombie.cemeteryId === cemeteryId) {
                cemeteryZombies.push(zombie);
            }
        }

        return cemeteryZombies;
    }

    getZombieById(id: string):DeadMan {
        for (let zombie of this.zombies) {
            if (zombie.id === id) {
                return zombie;
            }
        }
    }
}