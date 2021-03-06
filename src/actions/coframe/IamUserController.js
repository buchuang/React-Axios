//This file is automatically generated

// iam-user-controller

import { IamUserController } from '../controller';
export default {
    actions: {
        [IamUserController.appLoginNumber.method] : {
            summary: 'app可登录人数',
            method: 'get',
            url: (payload) => `/api/iam-users/${payload.appId}/login-number`,
            parameters: [{'name':'appId','in':'path','description':'appId','required':true,'type':'string'}],
        },
        [IamUserController.create.method] : {
            summary: '创建用户',
            method: 'post',
            url: (payload) => `/api/iam-users`,
            parameters: [{'in':'body','name':'user','description':'user','required':true,'schema':{'originalRef':'IAM用户dto','$ref':'#/definitions/IAM用户dto'}}],
        },
        [IamUserController.deleteByIds.method] : {
            summary: '删除用户',
            method: 'put',
            url: (payload) => `/api/iam-users/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [IamUserController.downloadExcelFormwork.method] : {
            summary: '下载用户导入模板',
            method: 'get',
            url: (payload) => `/api/iam-users/download/excel-formwork`,
            parameters: [],
        },
        [IamUserController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/iam-users/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamUserController.importExcelFormwork.method] : {
            summary: '用户导入',
            method: 'post',
            url: (payload) => `/api/iam-users/import/excel-users`,
            parameters: [{'name':'excelFile','in':'formData','description':'excelFile','required':false,'type':'file'}],
        },
        [IamUserController.loginTimes.method] : {
            summary: '查询当前登录用户数',
            method: 'get',
            url: (payload) => `/api/iam-users/login-times/${payload.appId}`,
            parameters: [{'name':'appId','in':'path','description':'appId','required':true,'type':'string'}],
        },
        [IamUserController.pagingByCriteria.method] : {
            summary: '按条件分页查询',
            method: 'get',
            url: (payload) => `/api/iam-users/page-query`,
            parameters: [{'name':'bindState','in':'query','description':'绑定状态过滤，binded 或者 unBinded，或者不给为空不过滤','required':false,'type':'string'},{'name':'email','in':'query','description':'邮箱','required':false,'type':'string'},{'name':'employeeId','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'Id','required':false,'type':'string'},{'name':'jobNumber','in':'query','description':'工号','required':false,'type':'string'},{'name':'memberState','in':'query','description':'成员相关，成员状态，取值为 isMember 或 notMember。此值需 ownerType 与 ownerId 也同时赋值才意义。isMember 查询为此领域成员的用户，notMember 则查询不为此领域成员的用户，用于往某领域内添加成员时的用户过滤','required':false,'type':'string'},{'name':'name','in':'query','description':'名称','required':false,'type':'string'},{'name':'ownerId','in':'query','description':'成员相关，成员所属的领域Id','required':false,'type':'string'},{'name':'ownerType','in':'query','description':'成员相关，成员所属的领域类型','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'phone','in':'query','description':'手机号','required':false,'type':'string'},{'name':'status','in':'query','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'tenantId','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [IamUserController.pagingUserDtoByCriteria.method] : {
            summary: '分页查询所有用户',
            method: 'get',
            url: (payload) => `/api/iam-users/dto/page-query`,
            parameters: [{'name':'bindState','in':'query','description':'绑定状态过滤，binded 或者 unBinded，或者不给为空不过滤','required':false,'type':'string'},{'name':'email','in':'query','description':'邮箱','required':false,'type':'string'},{'name':'employeeId','in':'query','required':false,'type':'string'},{'name':'id','in':'query','description':'Id','required':false,'type':'string'},{'name':'jobNumber','in':'query','description':'工号','required':false,'type':'string'},{'name':'memberState','in':'query','description':'成员相关，成员状态，取值为 isMember 或 notMember。此值需 ownerType 与 ownerId 也同时赋值才意���。isMember 查询为此领域成员的用户，notMember 则查询不为此领域成员的用户，用于往某领域内添加成员时的用户过滤','required':false,'type':'string'},{'name':'name','in':'query','description':'名称','required':false,'type':'string'},{'name':'ownerId','in':'query','description':'成员相关，成员所属的领域Id','required':false,'type':'string'},{'name':'ownerType','in':'query','description':'成员相关，成员所属的领域类型','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'},{'name':'phone','in':'query','description':'手机号','required':false,'type':'string'},{'name':'status','in':'query','required':false,'type':'string'},{'name':'tenantId','in':'query','description':'tenantId','required':false,'type':'string'},{'name':'usingLikeQuery','in':'query','description':'是否使用模糊查询','required':false,'type':'boolean'}],
        },
        [IamUserController.queryUserDevices.method] : {
            summary: '查看用户设备',
            method: 'get',
            url: (payload) => `/api/iam-users/${payload.userId}/devices`,
            parameters: [{'name':'userId','in':'path','description':'userId','required':true,'type':'string'}],
        },
        [IamUserController.resetPassword.method] : {
            summary: '重置用户密码',
            method: 'put',
            url: (payload) => `/api/iam-users/${payload.id}/reset-password`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [IamUserController.update.method] : {
            summary: '更新用户',
            method: 'put',
            url: (payload) => `/api/iam-users`,
            parameters: [{'in':'body','name':'user','description':'user','required':true,'schema':{'originalRef':'IAM用户','$ref':'#/definitions/IAM用户'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
