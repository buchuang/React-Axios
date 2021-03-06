//This file is automatically generated

// portal-operation-log-controller

import { PortalOperationLogController } from '../controller';
export default {
    actions: {
        [PortalOperationLogController.getOperationLogDetail.method] : {
            summary: '根据日志id获取日志详情',
            method: 'get',
            url: (payload) => `/api/portal/operation-logs/logs/${payload.logId}`,
            parameters: [{'name':'logId','in':'path','description':'logId','required':true,'type':'string'}],
        },
        [PortalOperationLogController.pagingByCriteria.method] : {
            summary: '按条件分页查询操作日志列表',
            method: 'get',
            url: (payload) => `/api/portal/operation-logs/page-query`,
            parameters: [{'name':'appId','in':'query','required':false,'type':'string'},{'name':'dateBegin','in':'query','required':false,'type':'string','format':'date-time'},{'name':'dateEnd','in':'query','required':false,'type':'string','format':'date-time'},{'name':'operateType','in':'query','required':false,'type':'string','enum':['CREATE','UPDATE','DELETE','OTHER']},{'name':'operatorId','in':'query','required':false,'type':'string'},{'name':'pageNum','in':'query','description':'第几页，从0开始','required':true,'type':'integer','format':'int32'},{'name':'pageSize','in':'query','description':'单页条数','required':true,'type':'integer','format':'int32'}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
