//This file is automatically generated

// iam-position-controller

import { IamPositionController } from '../controller';
export default {
    actions: {
        [IamPositionController.addPositionEmployees.method] : {
            summary: '往岗位下批量添加员工',
            method: 'put',
            url: (payload) => `/api/iam-positions/${payload.id}/employees/add`,
            parameters: [{'in':'body','name':'employeeIds','description':'employeeIds','required':true,'schema':{'type':'array','items':{'type':'string'}}},{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamPositionController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/iam-positions`,
            parameters: [{'in':'body','name':'position','description':'position','required':true,'schema':{'originalRef':'岗位','$ref':'#/definitions/岗位'}}],
        },
        [IamPositionController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/iam-positions/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [IamPositionController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/iam-positions/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'},{'name':'loadChildren','in':'query','description':'loadChildren','required':false,'type':'boolean'},{'name':'loadLevel','in':'query','description':'loadLevel','required':false,'type':'integer','default':1,'format':'int32'},{'name':'loadOthers','in':'query','description':'loadOthers','required':false,'type':'boolean'}],
        },
        [IamPositionController.pagingByCriteria.method] : {
            summary: '按条件分页查询',
            method: 'get',
            url: (payload) => `/api/iam-positions/page-query`,
            parameters: [{'name':'code','in':'query','description':'编码','required':false,'type':'string'},{'name':'id','in':'query','description':'Id','required':false,'type':'string'},{'name':'listRoot','in':'query','description':'是否只查询顶层数据','required':false,'type':'boolean'},{'name':'loadChildren','in':'query','description':'是否加载子节点','required':false,'type':'boolean'},{'name':'loadChildrenLevel','in':'query','description':'从当前层开始，需要加载子节点的层级','required':false,'type':'integer','format':'int32'},{'name':'loadOthers','in':'query','description':'是否加载节点的其它资源','required':false,'type':'boolean'},{'name':'name','in':'query','description':'名称','required':false,'type':'string'},{'name':'orgCode','in':'query','required':false,'type':'string'},{'name':'orgId','in':'query','required':false,'type':'string'},{'name':'orgName','in':'query','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'parentId','in':'query','description':'父对象的id','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'tenantId','required':false,'type':'string'},{'name':'type','in':'query','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [IamPositionController.querySubEmployees.method] : {
            summary: '查询岗位下的员工',
            method: 'get',
            url: (payload) => `/api/iam-positions/${payload.id}/employees`,
            parameters: [{'name':'employeeName','in':'query','description':'employeeName','required':false,'type':'string'},{'name':'id','in':'path','description':'id','required':true,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'}],
        },
        [IamPositionController.removePositionEmployees.method] : {
            summary: '从岗位下批量移除员工',
            method: 'put',
            url: (payload) => `/api/iam-positions/${payload.id}/employees/remove`,
            parameters: [{'in':'body','name':'employeeIds','description':'employeeIds','required':true,'schema':{'type':'array','items':{'type':'string'}}},{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamPositionController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/iam-positions`,
            parameters: [{'in':'body','name':'position','description':'position','required':true,'schema':{'originalRef':'岗位','$ref':'#/definitions/岗位'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
