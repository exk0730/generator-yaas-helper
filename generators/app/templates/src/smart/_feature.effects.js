import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as <%= inCamelCase %>Actions from './<%= featureName %>.actions';
<% if (hasService) { %>import { <%= className %>Service } from './<%= featureName %>.service';<% } %>

@Injectable()
export class <%= className %>Effects {
    constructor(private updates$: Actions<% if (hasService) { %>, private service: <%= className %>Service<% } %>) {}

    /*
    @Effect() example$: Observable<Action> = this.updates$
        .ofType(<%= inCamelCase %>Actions.ActionTypes.EXAMPLE)
        .map(toPayload)
        ...
    */
}
