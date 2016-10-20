import { Action } from '@ngrx/store';

export const ActionTypes = {
    EXAMPLE: <'[<%= className %>] Example'>('[<%= className %>] Example')
};

export class ExampleAction implements Action {
    type = ActionTypes.EXAMPLE;

    constructor(public payload: any) {}
}

export type Actions = ExampleAction /* | ...AnotherAction | AnotherAnotherAction | etc... */;
