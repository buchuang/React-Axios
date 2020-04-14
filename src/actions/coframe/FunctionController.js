//This file is automatically generated

// function-controller

import { FunctionController } from '../controller';
export default {
    actions: {
        [FunctionController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/functions`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'功能','$ref':'#/definitions/功能'}}],
        },
        [FunctionController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/functions/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [FunctionController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/functions/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [FunctionController.importFunctions.method] : {
            summary: '批量导入',
            method: 'post',
            url: (payload) => `/api/functions/import`,
            parameters: [{'in':'body','name':'functions','description':'functions','required':true,'schema':{'type':'array','items':{'originalRef':'CofFunction','$ref':'#/definitions/CofFunction'}}}],
        },
        [FunctionController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/functions`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'功能','$ref':'#/definitions/功能'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
