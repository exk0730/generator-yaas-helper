<% if(isSmart) { %>
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { <%= inCamelCase %>Reducer, I<%= className %>State } from './<%= featureName %>.reducer';
import { <%= className %> } from './<%= featureName %>.component';
import * as <%= inCamelCase %>Actions from './<%= featureName %>.actions';

describe('<%= className %>Component', () => {
    const spy = jasmine.createSpy('<%= inCamelCase %>').and.callFake(function (state, action) {
        return <%= inCamelCase %>Reducer(state, action);
    });
    let componentInstance: <%= className %>;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [<%= className %>],
            imports: [
                SharedModule,
                StoreModule.provideStore({<%= inCamelCase %>: spy})
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();

        fixture = TestBed.createComponent(<%= className %>);
        fixture.detectChanges();
        componentInstance = (<<%= className %>>fixture.componentInstance);
    });
});
<% } else { %>
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { <%= className %> } from './<%= featureName %>.component';

describe('<%= className %>Component', () => {
    let componentInstance: <%= className %>;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [<%= className %>],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();

        fixture = TestBed.createComponent(<%= className %>);
        fixture.detectChanges();
        componentInstance = (<<%= className %>>fixture.componentInstance);
    });
});
<% } %>
