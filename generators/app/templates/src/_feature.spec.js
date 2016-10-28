<% if(isSmart) { %>
import { TestBed, inject, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

import { <%= inCamelCase %>Reducer, I<%= className %>State } from './<%= featureName %>.reducer';
import { <%= className %> } from './<%= featureName %>.component';
import { <%= className %>Effects } from './<%= featureName %>.effects';
import * as <%= inCamelCase %>Actions from './<%= featureName %>.actions';

describe('<%= className %>Component', () => {
    describe('component tests', () => {
        const spy = jasmine.createSpy('<%= inCamelCase %>').and.callFake(function (state, action) {
            return <%= inCamelCase %>Reducer(state, action);
        });
        let componentInstance: <%= className %>;
        let fixture;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [<%= className %>],
                imports: [
                    StoreModule.provideStore({<%= inCamelCase %>: spy})
                ]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(<%= className %>);
            fixture.detectChanges();
            componentInstance = (<<%= className %>>fixture.componentInstance);
        });
    });

    describe('effects tests', () => {
        let runner: EffectsRunner;
        let effects: <%= className %>Effects;

        beforeEach(() => TestBed.configureTestingModule({
            imports: [EffectsTestingModule],
            providers: [<%= className %>Effects]
        }));

        beforeEach(inject([
            EffectsRunner, <%= className %>Effects
        ], (_runner, _effects) => {
            runner = _runner;
            effects = _effects;
        }));
    });
});
<% } else { %>
import { TestBed } from '@angular/core/testing';

import { <%= className %> } from './<%= featureName %>.component';

describe('<%= className %>Component', () => {
    let componentInstance: <%= className %>;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [<%= className %>]
        });

        TestBed.compileComponents();

        fixture = TestBed.createComponent(<%= className %>);
        fixture.detectChanges();
        componentInstance = (<<%= className %>>fixture.componentInstance);
    });
});
<% } %>
