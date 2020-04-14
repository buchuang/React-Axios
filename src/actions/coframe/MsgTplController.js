//This file is automatically generated

// msg-tpl-controller

import { MsgTplController } from '../controller';
export default {
    actions: {
        [MsgTplController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/message-templates`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'推送模版','$ref':'#/definitions/推送模版'}}],
        },
        [MsgTplController.deleteById.method] : {
            summary: '按主键删除',
            method: 'delete',
            url: (payload) => `/api/message-templates/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [MsgTplController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/message-templates/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [MsgTplController.findByCriteria.method] : {
            summary: '按条件查询',
            method: 'get',
            url: (payload) => `/api/message-templates/query`,
            parameters: [{'name':'appId','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'id','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'租户id','required':false,'type':'string'},{'name':'tplCode','in':'query','required':false,'type':'string'},{'name':'tplName','in':'query','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [MsgTplController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/message-templates/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [MsgTplController.pageByCriteria.method] : {
            summary: '按条件分页查询',
            method: 'get',
            url: (payload) => `/api/message-templates/page-query`,
            parameters: [{'name':'appId','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'id','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'tenantId','in':'query','description':'租户id','required':false,'type':'string'},{'name':'tplCode','in':'query','required':false,'type':'string'},{'name':'tplName','in':'query','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [MsgTplController.refreshMsgTpl.method] : {
            summary: '刷新模版缓存',
            method: 'get',
            url: (payload) => `/api/message-templates/refresh/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [MsgTplController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/message-templates`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'推送模版','$ref':'#/definitions/推送模版'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
