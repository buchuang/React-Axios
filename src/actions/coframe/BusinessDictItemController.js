//This file is automatically generated

// business-dict-item-controller

import { BusinessDictItemController } from '../controller';
export default {
    actions: {
        [BusinessDictItemController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/business-dict-items`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'数据字典项对象','$ref':'#/definitions/数据字典项对象'}}],
        },
        [BusinessDictItemController.deleteById.method] : {
            summary: '按主键删除',
            method: 'delete',
            url: (payload) => `/api/business-dict-items/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [BusinessDictItemController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/business-dict-items/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [BusinessDictItemController.findByCriteria.method] : {
            summary: '按条件分页查询',
            method: 'get',
            url: (payload) => `/api/business-dict-items/page-query`,
            parameters: [{'name':'dictId','in':'query','description':'字典id','required':false,'type':'string'},{'name':'dictItemName','in':'query','description':'字典项名','required':false,'type':'string'},{'name':'dictItemValue','in':'query','description':'字典项值','required':false,'type':'string'},{'name':'id','in':'query','description':'id','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'tenantId','in':'query','description':'租户id','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [BusinessDictItemController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/business-dict-items/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [BusinessDictItemController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/business-dict-items`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'数据字典项对象','$ref':'#/definitions/数据字典项对象'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}