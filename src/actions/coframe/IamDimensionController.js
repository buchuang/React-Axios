//This file is automatically generated

// iam-dimension-controller

import { IamDimensionController } from '../controller';
export default {
    actions: {
        [IamDimensionController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/iam-dimensions`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'维度','$ref':'#/definitions/维度'}}],
        },
        [IamDimensionController.deleteById.method] : {
            summary: '按主键删除',
            method: 'delete',
            url: (payload) => `/api/iam-dimensions/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamDimensionController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/iam-dimensions/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [IamDimensionController.findByCriteria.method] : {
            summary: '按条件查询',
            method: 'get',
            url: (payload) => `/api/iam-dimensions/query`,
            parameters: [{'name':'code','in':'query','description':'编码','required':false,'type':'string'},{'name':'id','in':'query','description':'Id','required':false,'type':'string'},{'name':'main','in':'query','required':false,'type':'boolean'},{'name':'name','in':'query','description':'名称','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'tenantId','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [IamDimensionController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/iam-dimensions/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamDimensionController.pageByCriteria.method] : {
            summary: '按条件分页查询',
            method: 'get',
            url: (payload) => `/api/iam-dimensions/page-query`,
            parameters: [{'name':'code','in':'query','description':'编码','required':false,'type':'string'},{'name':'id','in':'query','description':'Id','required':false,'type':'string'},{'name':'main','in':'query','required':false,'type':'boolean'},{'name':'name','in':'query','description':'名称','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'tenantId','in':'query','description':'tenantId','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [IamDimensionController.queryByDimensionId.method] : {
            summary: '按维度id查询维度下所有员工信息',
            method: 'get',
            url: (payload) => `/api/iam-dimensions/${payload.id}/search`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamDimensionController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/iam-dimensions`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'维度','$ref':'#/definitions/维度'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
