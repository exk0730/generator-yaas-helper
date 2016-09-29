import { Component } from '@angular/core';

@Component({
    selector: '<%= featureName %>',
    template: require('./<%= featureName %>.html')
})
export class <%= className %> {}
