import { NgModule } from '@angular/core';

import { <%= className %> } from './<%= featureName %>.component';
<% if (hasService) { %>import { <%= className %>Service } from './<%= featureName %>.service';<% } %>

@NgModule({
    imports: [],
    declarations: [<%= className %>],
    exports: [<%= className %>]<% if (hasService) {%>,
    providers: [<%= className %>Service]<%}%>
})
export class <%= className %>Module {}
