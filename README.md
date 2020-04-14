本项目是为了简化开发流程，提升react开发效率

步骤：
1、首先配置后端服务器swagger地址,在scripts/conifg中
swaggerUrl: 'http://1.1.1.1:18080/v2/api-docs',
然后执行npm run build:api
2、创建组件，继承ParentComponent
3、导入请求的类和方法，这些类和方法已经在前面自动生成，发起网络请求
let resp = await this.dispatch(AppController.create, {data: 111})


