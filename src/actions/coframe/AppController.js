//This file is automatically generated

// app-controller

import { AppController } from '../controller';
export default {
    actions: {
        [AppController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/apps`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'应用信息','$ref':'#/definitions/应用信息'}}],
        },
        [AppController.deleteById.method] : {
            summary: '按主键删除',
            method: 'delete',
            url: (payload) => `/api/apps/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [AppController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/apps/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [AppController.findByCriteria.method] : {
            summary: '按条件查询',
            method: 'get',
            url: (payload) => `/api/apps/query`,
            parameters: [{'name':'administratorId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'appId','in':'query','required':false,'type':'string'},{'name':'appName','in':'query','required':false,'type':'string'},{'name':'createBy','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'id','required':false,'type':'string'},{'name':'loadDownloadCount','in':'query','required':false,'type':'boolean'},{'name':'loadLatestOnlineArchive','in':'query','required':false,'type':'boolean'},{'name':'ownerId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'roleTplGrpId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'shortUrl','in':'query','required':false,'type':'string'},{'name':'subscriptionKey','in':'query','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'租户id','required':false,'type':'string'},{'name':'updateBy','in':'query','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [AppController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/apps/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [AppController.findGropApps.method] : {
            summary: '根据当前用户角色查询app列表',
            method: 'get',
            url: (payload) => `/api/apps/all-and-group`,
            parameters: [{'name':'administratorId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'appId','in':'query','required':false,'type':'string'},{'name':'appName','in':'query','required':false,'type':'string'},{'name':'createBy','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'id','required':false,'type':'string'},{'name':'loadDownloadCount','in':'query','required':false,'type':'boolean'},{'name':'loadLatestOnlineArchive','in':'query','required':false,'type':'boolean'},{'name':'ownerId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'roleTplGrpId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'shortUrl','in':'query','required':false,'type':'string'},{'name':'subscriptionKey','in':'query','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'租户id','required':false,'type':'string'},{'name':'updateBy','in':'query','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [AppController.pageByCriteria.method] : {
            summary: '按条件分页查询',
            method: 'get',
            url: (payload) => `/api/apps/page-query`,
            parameters: [{'name':'administratorId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'appId','in':'query','required':false,'type':'string'},{'name':'appName','in':'query','required':false,'type':'string'},{'name':'createBy','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'id','required':false,'type':'string'},{'name':'loadDownloadCount','in':'query','required':false,'type':'boolean'},{'name':'loadLatestOnlineArchive','in':'query','required':false,'type':'boolean'},{'name':'ownerId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'roleTplGrpId','in':'query','description':'门户权限管理相关','required':false,'type':'string'},{'name':'shortUrl','in':'query','required':false,'type':'string'},{'name':'subscriptionKey','in':'query','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'租户id','required':false,'type':'string'},{'name':'updateBy','in':'query','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [AppController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/apps`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'应用信息','$ref':'#/definitions/应用信息'}}],
        },
        [AppController.uploadIcon.method] : {
            summary: '上传图���',
            method: 'post',
            url: (payload) => `/api/apps/upload/icon`,
            parameters: [{'name':'icon','in':'formData','description':'icon','required':true,'type':'file'}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}