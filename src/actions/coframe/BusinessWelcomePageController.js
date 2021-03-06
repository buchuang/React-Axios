//This file is automatically generated

// business-welcome-page-controller

import { BusinessWelcomePageController } from '../controller';
export default {
    actions: {
        [BusinessWelcomePageController.create.method] : {
            summary: '新增',
            method: 'post',
            url: (payload) => `/api/business-welcome-pages`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'欢迎页对象','$ref':'#/definitions/欢迎页对象'}}],
        },
        [BusinessWelcomePageController.deleteById.method] : {
            summary: '按主键删除',
            method: 'delete',
            url: (payload) => `/api/business-welcome-pages/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [BusinessWelcomePageController.deleteByIds.method] : {
            summary: '按主键集合删除',
            method: 'put',
            url: (payload) => `/api/business-welcome-pages/bulk-delete`,
            parameters: [{'in':'body','name':'ids','description':'ids','required':true,'schema':{'type':'array','items':{'type':'string'}}}],
        },
        [BusinessWelcomePageController.findByAppPageId.method] : {
            summary: '根据页面id获取欢迎页配置',
            method: 'get',
            url: (payload) => `/api/business-welcome-pages/appPageId/${payload.appPageId}`,
            parameters: [{'name':'appPageId','in':'path','description':'appPageId','required':true,'type':'string'}],
        },
        [BusinessWelcomePageController.findById.method] : {
            summary: '按主键查询',
            method: 'get',
            url: (payload) => `/api/business-welcome-pages/${payload.id}`,
            parameters: [{'name':'id','in':'path','description':'id','required':true,'type':'string'}],
        },
        [BusinessWelcomePageController.update.method] : {
            summary: '更新',
            method: 'put',
            url: (payload) => `/api/business-welcome-pages`,
            parameters: [{'in':'body','name':'model','description':'model','required':true,'schema':{'originalRef':'欢迎页对象','$ref':'#/definitions/欢迎页对象'}}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
