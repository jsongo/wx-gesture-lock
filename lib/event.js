/**
 * 用于页面中，对大块代码做解耦：拆分出单独文件，并在里面操作页面数据
 * 用法：
 *      （1）先在app.js里引入：var event = require('lib/event.js')，然后在onLaunch里调用event(this)
 *      （2）调用 — app.trigger('myEvent', data);
 *      （3）响应函数 - 在Page({})里添加相关的函数：
 *          onMyEvent: function(data) {...}
 *          * 注意onMyEvent方法名的大小写
 * author: jsongo
 */
module.exports = function(app) {
    app && (app.trigger = function(eventType, data) {
        var pages = getCurrentPages(),
            curPage = pages[pages.length-1],
            methodName = 'on' + eventType.charAt(0).toUpperCase() + eventType.substr(1),
            callback = curPage[methodName];
        callback && callback.call(curPage, data);
    });
};