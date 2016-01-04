/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
//import {ELEMENT_PROBE_PROVIDERS} from '../../node_modules/angular2/platform/common_dom.d';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CacheService} from './services/CacheService';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {ZombieApp} from './zombie-app/ZombieApp';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return bootstrap(ZombieApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, CacheService])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
