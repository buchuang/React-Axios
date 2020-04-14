//This file is automatically generated

// statistic-device-distribution-controller

import { StatisticDeviceDistributionController } from '../controller';
export default {
    actions: {
        [StatisticDeviceDistributionController.findByCriteria.method] : {
            summary: '查询设备分布统计信息',
            method: 'get',
            url: (payload) => `/api/device-distribution/query`,
            parameters: [{'name':'appId','in':'query','description':'应用标识','required':true,'type':'string'},{'name':'appVersionId','in':'query','description':'应用版本','required':false,'type':'string'},{'name':'buildNo','in':'query','description':'构建版本','required':false,'type':'string'},{'name':'dateBegin','in':'query','description':'开始时间','required':false,'type':'string','format':'date-time'},{'name':'dateEnd','in':'query','description':'结束时间','required':false,'type':'string','format':'date-time'},{'name':'deviceType','in':'query','description':'设备类型','required':false,'type':'string'},{'name':'extFlag','in':'query','description':'数据标识，1代表已处理，0代表未处理，外部查询需要传1','required':true,'type':'integer','format':'int32'},{'name':'osVersion','in':'query','description':'系统版本','required':false,'type':'string'},{'name':'platform','in':'query','description':'系统类型','required':false,'type':'string'},{'name':'timeType','in':'query','description':'查询时间类型','required':true,'type':'string','enum':['MINUTE','HOUR','DAY']}],
        },
    },
    // state: {},
    // mutations: {},
    // getters: {}
}
