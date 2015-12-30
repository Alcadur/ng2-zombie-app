import {
    it,
    xit,
    inject,
    injectAsync,
    beforeEachProviders
} from 'angular2/testing';

import {ROUTER_PROVIDERS} from 'angular2/router'

import {ZombieApp} from "../ZombieApp";

describe("ZombieApp", function(){

    xit("should redirect to cemeteries list", inject([ ZombieApp ], function(app){
        expect(app.url).toEqual("dupa")
    }))
});