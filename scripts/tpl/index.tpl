//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

{{#list}}
import {{this.name}} from './{{this.path}}/{{this.name}}';
{{/list}}

export default {
{{#list}}
    {{this.name}}: vuexDecorator('{{this.name}}',{{this.name}}),
{{/list}}
}
