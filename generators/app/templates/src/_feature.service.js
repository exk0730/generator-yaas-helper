import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseService } from 'shared';

@Injectable()
export class <%= className %>Service extends BaseService {
    constructor(http: Http) {
        super(http);
    }
}
