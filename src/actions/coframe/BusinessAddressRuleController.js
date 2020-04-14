//This file is automatically generated

// business-address-rule-controller

import { BusinessAddressRuleController } from '../controller';
export default {
    actions: {
        [BusinessAddressRuleController.batchCreate.method] : {
            summary: '批量增加',
            method: 'post',
            url: (payload) => `/api/business-address-rules/bulk-create`,
            parameters: [{'in':'body','name':'addressRules','description':'addressRules','required':true,'schema':{'type':'array','items':{'originalRef':'通讯录匹配规则','$ref':'#/definitions/通讯录匹配规则'}}}],
        },
        [BusinessAddressRuleController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/business-address-rules`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'通讯录匹配规则','$ref':'#/definitions/通讯录匹配规则'}}],
        },
        [BusinessAddressRuleController.deleteById.method] : {
            summary: '按主键删除',
            method: 'delete',
            url: (payload) => `/api/business-address-rules/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [BusinessAddressRuleController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/business-address-rules/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [BusinessAddressRuleController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/business-address-rules/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [BusinessAddressRuleController.findRulesByAddressId.method] : {
            summary: '根据通讯录id查询通讯录规则',
            method: 'get',
            url: (payload) => `/api/business-address-rules/addressId/${payload.addressId}`,
            parameters: [{'name':'addressId','in':'path','description':'addressId','required':true,'type':'string'}],
        },
        [BusinessAddressRuleController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/business-address-rules`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'通讯录匹配规则','$ref':'#/definitions/通讯录匹配规则'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
