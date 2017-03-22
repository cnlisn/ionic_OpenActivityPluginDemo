var exec = require('cordova/exec');

var myFunc = function() {};


// arg1：成功回调  
// arg2：失败回调  
// arg3：将要调用类配置的标识  
// arg4：调用的原生方法名  
// arg5：参数，json格式  
// myFunc.prototype.showToast=function(success, error) {  
//     exec(success, error, "OpenPagePlugin", "showToast", []);  
// };  


// myFunc.prototype.showshowToast=function(text, lenth,success, error) {  
//     exec(success, error, "OpenPagePlugin", "showshowToast", [text, lenth]);  
// };  
myFunc.prototype.openActivity = function(success, error) {
    exec(success, error, "OpenPagePlugin", "openActivity", []);
};
var showt = new myFunc();
module.exports = showt;