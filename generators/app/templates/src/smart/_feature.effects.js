import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { IAppStore } from 'shared';
import { <%= className %>Actions } from './<%= featureName %>.actions';

@Injectable()
export class <%= className %>Effects {
    constructor(private updates$: Actions, private store: Store<IAppStore>) {}
}
