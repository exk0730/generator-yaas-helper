import { Action, ActionReducer } from '@ngrx/store';

import { <%= className %>Actions } from './<%= featureName %>.actions';

export interface I<%= className %>State {}

const initialState: I<%= className %>State = <I<%= className %>State>{};

export const <%= inCamelCase %>Reducer: ActionReducer<I<%= className %>State> =
    (state: I<%= className %>State = initialState, action: Action): I<%= className %>State => {
        switch (action.type) {
            case <%= className %>Actions.DEFAULT_ACTION: {
                return initialState;
            }

            default:
                return state;
        }
    };
