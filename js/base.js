//获取标签
function $$(idNum){
	var olabel = document.getElementById(idNum);
	return olabel;
}
//获取标签的值
function $(idName){
	var oInput = document.getElementById(idName);
	var idValue = oInput.value;
	return idValue;
}
//可视区域的宽度
function clientWidth(){
	return document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth;
}
//可视区域的高度
function clientHeight(){
	return document.body.clicentHeight || document.documentElement.clientHeight || window.innerHeight;
}
//滚动条的高度
function scrollTop(){
	return document.body.scrollTop || document.documentElement.scrollTop;
}
//获取行内样式表的属性
function getStyle(obj,attri){
	return window.getComputedStyle(obj,null)[attri];
}
//判断字符串是否只有空格 换行 制表符Tab 组成
//是的返回true  否则返回false
function isSpaceStr(str){
	// for(var i = 0; i < str.length; i++){
	// 	var c = str.charCodeAt(i);
	// 	if(!(c >= 0 && c <=32 || c == 127)){//全部检查！存在非空白字符返回false
	// 		return false;
	// 	}
	// }
	// return true;//全部为空白字符  返回true
	// 
	var r = /^\s*$/;
	return r.test(str);
}
//随机颜色
function randomColor(){
	//#ffffff   #fff   rgb()  rgba() 拼接即可！
	var str = "rgb(" + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + ")";
	return str;
}
//实现在节点的后面插入新节点
function insertAfter(parent,oldObj,newObj){
	parent.insertBefore(newObj,oldObj.nextSibling);
}