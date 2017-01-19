



function CreateBasicModel() {
    this.listenerFuncs = new Array(); //事件监听对象列表
    this.data = new Object();
    // var obj = new Object();
    // obj.listenerFuncs = new Array();   //事件监听对象列表
    // obj.pageType = PageType.NONE;//默认位置类型
    // obj.billConfig = null;     //界面配置信息
    // obj.billType = null;

    // obj.inLoading = null;
    // obj.data = buildModelProto();     //界面数据信息
    // obj.state = ModelState.NONE;   //状态
    // obj.operateType = OperateType.RETRIEVE;
    // obj.stateArbitratorFunc = true;//是否可编辑，默认是
    // obj.FAIL_msgList = [];

    // 页面初始化,需传递页面配置信息,单据类型, 页面类型
    // obj.init = function (serverConfig, billconfig, pagetype) {
    //     this.pageType = pagetype;
    //     this.billConfig = billconfig;
    //     this.billType = serverConfig.billTypeid;
    //     //this.urls = serverConfig.serverUrls;
    //     this.urls = Object.assign({}, this.data.urls, serverConfig.serverUrls);
    //     this.setValue('pageInfo', {
    //         pageNumber: 0,
    //         pageSize: 10
    //     });
    // };
    // obj.getFAILmsgs = function () {    //获取需提示的异常，获取后立即清除
    //     var FAILmsg = this.FAIL_msgList.concat();
    //     this.FAIL_msgList.length = 0;
    //     return FAILmsg;
    // };
    // obj.addFAILmsg = function (msg) {    // 添加需提示的异常
    //     this.FAIL_msgList.push(msg);
    // }
    // //注册事件监听
    // obj.regModelChangeListener = function (listenerFunc) {
    //     this.listenerFuncs.push(listenerFunc);
    // }
    // obj.removeModelChangeListener = function (listenerFunc) {
    //     this.listenerFuncs.splice(this.listenerFuncs.indexOf(listenerFunc), 1);
    // };
    // //obj.regStateArbitrator = function (arbitratorFunc) {
    // //    this.stateArbitratorFunc = arbitratorFunc;
    // //};
    // obj.dispatchEvent = function (eventKey) {  //触发事件监听
    //     for (var i = 0; i < this.listenerFuncs.length; i++) {
    //         this.listenerFuncs[i](eventKey);
    //     }
    // };
    // obj.getValue = function (key) {
    //     if (false == isValidData(this.data[key])) {
    //         return null;
    //     }
    //     return this.data[key];
    // };
    // obj.setValue = function (key, value) {
    //     this.data[key] = value;
    //     console.log('setValue', value);
    // };
    // obj.getConfig = function (key) {
    //     if (false == isValidData(this.billConfig[key])) {
    //         return null;
    //     }

    //     return this.billConfig[key];
    // };
    // obj.setState = function (newState) {
    //     this.state = newState;
    // };

    // obj.getState = function () {
    //     return this.state;
    // };

    // obj.getJson = function (url, params, succCallback, failCallback) {
    //     console.log('inGetJson=====>baseModel');
    //     var that = this;
    //     this.setInLoading(true);
    //     this.dispatchEvent(EventTypes.LOADING);
    //     //params.extendCookieParams = this.getOfficeContext();
    //     ajax.getJSON(url, params, function (data) {
    //         console.log('getJson...............end');
    //         if (data) {
    //             if (data.success == true) {
    //                 if (isValidData(succCallback)) {
    //                     succCallback(data);
    //                 }
    //             } else {
    //                 if (isValidData(failCallback)) {
    //                     failCallback(data);
    //                 } else {
    //                     that.addFAILmsg(data.backMsg);
    //                     that.procAjaxFail(data);
    //                 }
    //             }
    //         } else {
    //             console.error('get请求返回数据为空', data);
    //         }
    //         that.setInLoading(false);
    //         that.dispatchEvent(EventTypes.LOADING);
    //     }, function (data) {
    //         console.log('getjson..............error.........end');
    //         if (isValidData(failCallback)) {
    //             failCallback(data);
    //         } else {
    //             that.addFAILmsg("网络通讯异常");
    //             that.procAjaxFail(data);
    //         }

    //         that.setInLoading(false);
    //         that.dispatchEvent(EventTypes.LOADING);
    //     });
    // };

    // obj.getRefJson = function (url, params, succCallback, failCallback) {
    //     //console.log('inGetJson=====>baseModel');
    //     var that = this;
    //     this.setInLoading(true);
    //     this.dispatchEvent(EventTypes.LOADING);
    //     ajax.getJSON(url, params, function (data) {
    //         console.log('getJson...............end');
    //         if (data) {
    //             if (isValidData(succCallback)) {
    //                 succCallback(data);
    //             }
    //         } else {
    //             console.error('get请求返回数据为空', data);
    //         }
    //         that.setInLoading(false);
    //         that.dispatchEvent(EventTypes.LOADING);
    //     }, function (data) {
    //         console.log('getjson..............error.........end');
    //         if (isValidData(failCallback)) {
    //             failCallback(data);
    //         } else {
    //             that.addFAILmsg("网络通讯异常");
    //             that.procAjaxFail(data);
    //         }

    //         that.setInLoading(false);
    //         that.dispatchEvent(EventTypes.LOADING);
    //     });
    // };

    // obj.postJson = function (url, params, succCallback, failCallback) {
    //     var that = this;
    //     obj.setInLoading(true);
    //     that.dispatchEvent(EventTypes.LOADING);
    //     //params.extendCookieParams = this.getOfficeContext();
    //     ajax.postJSON(url, params, function (data) {
    //         if (data) {
    //             if (data.success == true) {
    //                 if (isValidData(succCallback)) {
    //                     succCallback(data);
    //                 }
    //             } else {
    //                 if (isValidData(failCallback)) {
    //                     failCallback(data);
    //                 } else {
    //                     that.addFAILmsg(data.backMsg);
    //                     that.procAjaxFail(data);
    //                 }
    //             }
    //         } else {
    //             console.error('post请求返回数据为空', data);
    //         }
    //         that.setInLoading(false);
    //         that.dispatchEvent(EventTypes.LOADING);
    //     }, function (data) {
    //         if (isValidData(failCallback)) {
    //             failCallback(data);
    //         } else {
    //             that.addFAILmsg("网络通讯异常");
    //             that.procAjaxFail(data);
    //         }
    //         that.setInLoading(false);
    //         that.dispatchEvent(EventTypes.LOADING);
    //     });
    // };

    // obj.procAjaxFail = function (data) {
    //     this.dispatchEvent(EventTypes.FAIL);
    // };
    // //加载表头的筛选条件
    // obj.loadFilterParams = function (filterSearchParam) {
    //     var that = this;
    //     this.postJson(that.baseModel.urls.getFilterSearchUrl, filterSearchParam, function (data) {
    //         that.setValue('filterSearchList', data);
    //         //..........................待处理附件管理
    //         that.dispatchEvent(EventTypes.FILTER_SEARCH_LIST);
    //     });
    // };
    // obj.getPackage = function (params) {
    //     var that = this;
    //     console.log('baseModel==>getPackage');
    //     //获取附件数
    //     this.getJson(that.baseModel.urls.getPackageListUrl, params, function (data) {
    //         that.setValue('packageList', data);
    //         //..........................待处理附件管理
    //         that.dispatchEvent(EventTypes.PACKAGE_LIST);
    //     });
    // }
    // obj.deletePackage = function () {
    //     //删除附件
    // }
    // //加载列表数据
    // obj.loadList = function (params) {
    //     var that = this;
    //     console.log('baseModel==>loadList');
    //     this.getJson(that.urls.listUrl, params, function (data) {
    //         //Todo 使用真实数据
    //         //列表数据
    //         that.setValue('list', data);
    //         //that.setValue('list', buildTestData());
    //         that.dispatchEvent(EventTypes.LOAD_PAGE);
    //     });
    // };

    // obj.loadContent = function (params) {
    //     var that = this;
    //     //console.log('loadContent============');
    //     switch (this.operateType) {
    //         case OperateType.CREATE:
    //             this.getBillNo();
    //             break;
    //         case OperateType.RETRIEVE:
    //         case OperateType.UPDATE:

    //             console.log('baseModel==>loadContent');
    //             this.getJson(this.urls.getUrl, params, function (data) {
    //                 that.setState(ModelState.EDITABLE);
    //                 //Todo 确认真实的数据格式
    //                 that.setValue('main', data);
    //                 that.dispatchEvent(EventTypes.LOAD_PAGE);
    //             });
    //             break;

    //     }
    // };

    // obj.onDeleteCollect = function (postList, backfunc) {  //取消收藏事件
    //     //console.log("收藏事件未实现");
    //     this.setConcern(true, true, postList, backfunc);
    // };
    // obj.onCollect = function (postList, backfunc) {  //收藏事件
    //     //console.log("收藏事件未实现");
    //     this.setConcern(true, false, postList, backfunc);
    // }
    // obj.onBatchDel = function (postList, backfunc) {  //批量删除事件
    //     //console.log("批量删除事件未实现");
    //     this.del(postList, backfunc);
    // };
    // obj.onExport = function (postList, backfunc) {  //导出事件
    //     console.log("导出事件未实现");
    // };
    // obj.ShowCollect = function (gettList, backfunc) {  //查看收藏
    //     //console.log("查看收藏未实现");
    //     this.getConcern(true, gettList, backfunc);
    // };
    // obj.showRecent = function (gettList, backfunc) {  //查看最近查看
    //     //console.log("最近查看未实现");
    //     this.getConcern(false, gettList, backfunc);
    // };
    // obj.setInLoading = function (isInLoading) {
    //     this.inLoading = isInLoading;
    // };
    // obj.setConcern = function (isFavorite, isDelete, params, succCallback, failCallback) {
    //     if (false == isFavorite) {
    //         return;
    //     }

    //     var that = this;
    //     var action = null;
    //     var targetUrl = null;

    //     if (isDelete) {
    //         action = EventTypes.DELETE_FAVORITE;
    //         targetUrl = this.urls.delFavoriteUrl;
    //     } else {
    //         action = EventTypes.ADD_FAVORITE;
    //         targetUrl = this.urls.saveFavoriteUrl;
    //     }

    //     this.postJson(targetUrl, params, function (data) {
    //         that.dispatchEvent(action);
    //     }, failCallback);
    // };

    // //查找最近收藏和我的查看
    // obj.getConcern = function (isFavorite, params, succCallback, failCallback) {
    //     var that = this;
    //     var targetUrl = null;
    //     if (isFavorite) {
    //         //我的收藏
    //         targetUrl = this.urls.getFavoriteUrl;
    //     } else {
    //         //最近查看
    //         targetUrl = this.urls.getRecentUrl;
    //     }

    //     console.log('baseModel==>getConcern');
    //     this.getJson(targetUrl, params, function (data) {
    //         if (data) {
    //             that.setValue('list', data);
    //             that.dispatchEvent(isFavorite ? EventTypes.LOAD_FAVORITE : EventTypes.LOAD_RECENT);

    //             if (isValidData(succCallback)) {
    //                 succCallback(data.backData.content);
    //             }
    //         } else {
    //             console.log('get请求没有返回值');
    //         }
    //     }, failCallback);
    // };

    // obj.del = function (params) {
    //     var that = this;
    //     this.postJson(this.urls.delUrl, params, function () {
    //         that.dispatchEvent(EventTypes.DELETE)
    //     });
    // };

    // //审批流提交
    // obj.doSubmit = function (params) {
    //     var that = this;
    //     this.postJson(this.baseModel.urls.doSubmitUrl, params, function (data) {
    //         that.setValue('main', data);
    //         that.dispatchEvent(EventTypes.DO_SUBMIT);
    //     });
    // };
    // //审批流收回
    // obj.doCallBack = function (params) {
    //     var that = this;
    //     this.postJson(this.baseModel.urls.doCallBackUrl, params, function (data) {
    //         that.setValue('main', data);
    //         that.dispatchEvent(EventTypes.DO_CALLBACK);
    //     });
    // };
    // //审批流审批
    // obj.doApprove = function (params) {
    //     var that = this;
    //     this.postJson(this.baseModel.urls.doApproveUrl, params, function (data) {
    //         that.setValue('main', data);
    //         that.dispatchEvent(EventTypes.DO_APPROVE);
    //     });
    // }
    // //查询审批历史
    // obj.doApproveList = function (params) {
    //     var that = this;
    //     this.postJson(this.baseModel.urls.doApproveListUrl, params, function (data) {
    //         that.setValue('approveList', data);
    //         that.dispatchEvent(EventTypes.DO_APPROVE_LIST)
    //     });
    // };
    // //查看流程图
    // obj.doRejectList = function (params) {
    //     var that = this;
    //     this.postJson(this.baseModel.urls.doRejectListUrl, params, function (data) {
    //         that.setValue('rejectList', data);
    //         that.dispatchEvent(EventTypes.DO_REJECT_LIST)
    //     });
    // };
    // obj.save = function (data, type, succCallback, failCallback) {

    //     if (this.beforeSave != undefined && this.beforeSave != null) {
    //         if (false == this.beforeSave()) {
    //             return;
    //         }
    //     }
    //     var that = this;
    //     this.postJson(this.urls.setUrl, data, function (data) {
    //         if (succCallback) {
    //             succCallback();
    //         }
    //         that.setValue('main', data);
    //         switch (type) {
    //             case 'save':
    //                 that.dispatchEvent(EventTypes.SAVE);
    //                 break;
    //             case 'saveAdd':
    //                 that.dispatchEvent(EventTypes.SAVE_ADD);
    //                 break
    //             case 'saveCopy':
    //                 that.dispatchEvent(EventTypes.SAVE_COPY);
    //                 break
    //             default:
    //                 that.dispatchEvent(EventTypes.SAVE);
    //         }
    //         if (that.afterSave != undefined && that.afterSave != null) {
    //             that.afterSave();
    //         }
    //     }, failCallback);
    // };
    // obj.beforeSave = function () {
    //     return true;
    // };

    // obj.afterSave = function () {
    //     return true;
    // };

    // obj.setOperateType = function (opType) {
    //     this.operateType = opType;
    // };

    // obj.getOperateType = function () {
    //     return this.operateType;
    // };
    // obj.initData = function (succCallback, failCallback) {
    //     if (false == isValidData(this.urls.getStaffVOUrl)) {
    //         return;
    //     }
    //     var that = this;
    //     var params = { userId: this.getCurrentUserId() };
    //     if (params.userId == null || params.userId == 'undefined' || params.userId == undefined) {
    //         params.userId = "e996cb85-915e-46c1-a0a5-d8a7a2c68fdd";
    //     }
    //     this.getJson(that.urls.getStaffVOUrl, params, function (data) {
    //         //Todo 保存人员基本信息
    //         that.setValue('initData', data);
    //         that.dispatchEvent("init_data");
    //         if (isValidData(succCallback)) {
    //             succCallback(data);
    //         }
    //     }, function (data) {
    //         that.addFAILmsg("获取人员信息失败，请检查后端服务是否正常");
    //         that.procAjaxFail(data);
    //     });
    // };
    // obj.getBillNo = function (succCallback, failCallback) {
    //     if (false == isValidData(this.urls.getBillNoUrl)) {
    //         return;
    //     }

    //     var that = this;
    //     this.getJson(that.urls.getBillNoUrl, null, function (data) {
    //         //Todo 保存billNo
    //         that.setValue('newBillNo', data);
    //         that.dispatchEvent(EventTypes.ALLOC_BILL_NO);
    //         if (isValidData(succCallback)) {
    //             succCallback(data);
    //         }
    //     }, function (data) {
    //         that.addFAILmsg("获取单据号失败，请检查后端服务是否正常");
    //         that.procAjaxFail(data);
    //     });
    // };
    // obj.InitEnum = function (enumTypes) {   //初始化枚举
    //     var postenumtypes;
    //     if (!enumTypes) return;
    //     if (enumTypes instanceof Array) {
    //         postenumtypes = enumTypes;
    //     } else {
    //         postenumtypes = [enumTypes];
    //     }
    //     var postdata = { "etypeCode": postenumtypes };

    //     var that = this;

    //     ajax.postText(that.urls.getEnumValueUrl, JSON.stringify(postdata), function (data) {
    //         if (data) {
    //             var jsondata = JSON.parse(data);
    //             if (jsondata.success == true) {
    //                 that.setValue('EnumValus', jsondata.message);
    //                 that.dispatchEvent(EventTypes.FILL_ENUM_VALUE);
    //             } else {
    //                 that.addFAILmsg(jsondata.message);
    //                 that.procAjaxFail(jsondata);
    //             }
    //         } else {
    //             that.addFAILmsg("获取枚举值失败，请检查平台服务是否正常");
    //             that.procAjaxFail(data);
    //         }
    //     }, function (data) {
    //         that.addFAILmsg("获取枚举值失败，请检查平台服务是否正常");
    //         that.procAjaxFail(data);
    //     });
    // };
    // obj.getContext = function () {  //获取登录上下文信息
    //     if (!AuthToken || !AuthToken.getContext()) {
    //         return {};
    //     }
    //     return AuthToken.getContext();
    // };
    // obj.getCurrentUserId = function () {   //获取当前登录用户ID
    //     return this.getContext()._A_P_userId;
    // };
    // obj.getCurrentUserName = function () {   //获取当前登录用户名称
    //     var username = this.getContext()._A_P_userName;
    //     if (username)
    //         username = decodeURI(username);
    //     return username;
    // };
    // obj.getOfficeContext = function () {
    //     var context = this.getContext();
    //     return JSON.stringify({
    //         companyCode: context.companyCode,
    //         companyName: context.companyName,
    //         tenantid: context.tenantid,
    //         userId: context.userId,
    //         userType: context.userType
    //     })
    // }
    // return obj;
}
CreateBasicModel.prototype.init = function(){                       //初始化

};
CreateBasicModel.prototype.regModelChangeListener = function (listenerFunc) {   //注册监听
        this.listenerFuncs.push(listenerFunc);
};
CreateBasicModel.prototype.dispatchEvent = function (eventKey) {  //触发事件监听
        for (var i = 0; i < this.listenerFuncs.length; i++) {
            this.listenerFuncs[i](eventKey);
        }
};
CreateBasicModel.prototype.setValue = function (key, value) {       //设置数据
        this.data[key] = value;
        console.log(key+'======', value);
};
CreateBasicModel.prototype.getValue = function (key) {
        
        return this.data[key];
};
module.exports = new CreateBasicModel();
