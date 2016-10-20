import { ActionReducer } from '@ngrx/store';

import * as <%= inCamelCase %>Actions from './<%= featureName %>.actions';

export interface I<%= className %>State {}

const initialState: I<%= className %>State = <I<%= className %>State>{};

export const <%= inCamelCase %>Reducer: ActionReducer<I<%= className %>State> =
    (state: I<%= className %>State = initialState, action: <%= inCamelCase %>Actions.Actions): I<%= className %>State => {
        switch (action.type) {
            case <%= inCamelCase %>Actions.ActionTypes.EXAMPLE: {
                return Object.assign({}, state, {/* new state properties */});
            }

            default:
                return state;
        }
    };
