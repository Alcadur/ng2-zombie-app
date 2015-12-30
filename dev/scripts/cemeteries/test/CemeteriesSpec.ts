import {
    it,
    xit,
    inject,
    injectAsync,
    beforeEachProviders,
} from 'angular2/testing';


import {provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http'
import {MockBackend} from 'angular2/http/testing'

import {Cemeteries} from '../Cemeteries';

describe('Cemeteries', function () {

    beforeEachProviders(function () {
        return [
            MockBackend,
            BaseRequestOptions,
            Cemeteries,
            provide(Http, {
                useFactory: function (backend, defaultOptions) {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            })
        ]
    });

    xit('should get list of cemeteries after init', inject([ Cemeteries ], function(cemeteries){

    }));
});