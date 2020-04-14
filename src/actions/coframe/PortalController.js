//This file is automatically generated

// portal-controller

import { PortalController } from '../controller';
export default {
    actions: {
        [PortalController.currentApp.method] : {
            summary: '缓存当前appId',
            method: 'post',
            url: (payload) => `/api/portal/${payload.appId}`,
            parameters: [{'name':'appId','in':'path','description':'appId','required':true,'type':'string'}],
        },
        [PortalController.showMenu.method] : {
            summary: '是否显示某些特殊菜单',
            method: 'get',
            url: (payload) => `/api/portal/show-menu`,
            parameters: [],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
