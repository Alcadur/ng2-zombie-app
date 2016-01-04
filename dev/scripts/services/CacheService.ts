import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class CacheService {
    private cemeteries: Array<any> = [];
    private zombies: Array<any> = [];

    constructor(private http: Http) {
    }

    getCemeteries() {
        if (this.cemeteries.length === 0) {
            return new Promise<any[]>((resolve)=> {
                this.http.get('data/zombies.json').map(res => res.json()).subscribe(zombies => {
                    let cemeteries = [];
                    this.zombies = zombies;
                    this.http.get('data/cementarys.json').map(res => res.json()).subscribe(response => {
                        cemeteries = response;
                        let zombiesInCemeteries = {};
                        for (let zombie of zombies) {
                            zombiesInCemeteries[zombie.cemeteryId] = zombiesInCemeteries[zombie.cemeteryId] || 0;
                            zombiesInCemeteries[zombie.cemeteryId]++;
                        }

                        for (let cemetery of cemeteries) {
                            cemetery.zombies = zombiesInCemeteries[cemetery.id];
                            this.cemeteries.push(cemetery);
                        }

                        resolve(this.cemeteries);
                    });
                });
            });
        }

        return new Promise<any[]>(resolve => resolve(this.cemeteries));
    }

    getCemeteryById(id: string) {
        for (let cemetery of this.cemeteries) {
            if (cemetery.id === id) {
                return cemetery;
            }
        }
    }

    getZombies() {
        if (this.zombies.length === 0) {
            return new Promise<any[]>(resolve => {
                this.http.get('data/zombies.json').map(res => res.json()).subscribe(zombies => {
                    this.zombies = zombies;
                    resolve(this.zombies);
                });
            });
        }

        return new Promise<any[]>(resolve => resolve(this.zombies));
    }

    getZombiesByCemeteryId(cemeteryId: string) {
        var cemeteryZombies = [];
        for (let zombie of this.zombies) {
            if (zombie.cemeteryId === cemeteryId) {
                cemeteryZombies.push(zombie);
            }
        }

        return cemeteryZombies;
    }

    getZombieById(id: string) {
        for (let zombie of this.zombies) {
            if (zombie.id === id) {
                return zombie;
            }
        }
    }
}