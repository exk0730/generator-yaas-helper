import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

const CATEGORY = '[<%= className %>]';

@Injectable()
export class <%= className %>Actions {
    static DEFAULT_ACTION = `${CATEGORY} Default Action`;
    static defaultAction(): Action {
        return {
            type: <%= className %>Actions.DEFAULT_ACTION
        };
    }
}

