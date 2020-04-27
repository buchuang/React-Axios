//Do not modify this file, it will be auto generated
import reduxDecorator from '@lib/reduxDecorator';

{{#list}}
import {{this.name}} from './{{this.path}}/{{this.name}}';
{{/list}}

export default {
{{#list}}
    {{this.name}}: reduxDecorator('{{this.name}}',{{this.name}}),
{{/list}}
}
