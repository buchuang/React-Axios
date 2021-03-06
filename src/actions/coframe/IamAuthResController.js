//This file is automatically generated

// iam-auth-res-controller

import { IamAuthResController } from '../controller';
export default {
    actions: {
        [IamAuthResController.findByCriteria.method] : {
            summary: '查找授权',
            method: 'get',
            url: (payload) => `/api/iam-auth-reses/query`,
            parameters: [{'name':'authId','in':'query','required':false,'type':'string'},{'name':'authType','in':'query','required':false,'type':'string'},{'name':'resId','in':'query','required':false,'type':'string'},{'name':'resType','in':'query','required':false,'type':'string'},{'name':'type','in':'query','required':false,'type':'string'}],
        },
        [IamAuthResController.handleAuthReses.method] : {
            summary: '新增或者删除授权',
            method: 'post',
            url: (payload) => `/api/iam-auth-reses`,
            parameters: [{'in':'body','name':'authReses','description':'authReses','required':true,'schema':{'type':'array','items':{'originalRef':'AuthRes','$ref':'#/definitions/AuthRes'}}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
