import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CheckForUpdateService {

    constructor(appRef: ApplicationRef, updates: SwUpdate) {
        // Allow the app to stabilize first, before starting polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
        const everyHour$ = interval(1 * 1 * 60 * 1000);
        const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);

        everyHourOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    }
}