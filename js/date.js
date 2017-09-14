//判断是否为闰年
function isLeap(year){
	if((year%4==0&&year%100!=0)||(year%400==0)){
		return true;
	}
	else{
		return false;
	}
}
//判断日期是否合法!!!
function ymd(year,month,day){
	if(month<1||month>12){
		return false;
	}
	switch(month){
		case 4 : 
		case 6 :
		case 9 :
		case 11 : {
			if(day<1||day>30){
				return false;
			}
		}
		case 2 : {
			if(isLeap(year)){
				if(day<1||day>29){
					return false;
				}
			}
			else{
				if(day<1||day>28){
					return false;
				}
			}
		}
		default : {
			if(day<1||day>31){
				return false;
			}
		}  
	}
	return true;
}
//判断第几天
function isdayth(year,month,day){
	var days = 0;
	switch(month-1){
		//理解switch，倒着写case
		case 11: days+=30;
		case 10: days+=31;
		case 9: days+=30;
		case 8: days+=31;
		case 7: days+=31;
		case 6: days+=30;
		case 5: days+=31;
		case 4: days+=30;
		case 3: days+=31;
		case 2: days+=28;
		case 1: days+=31;
		default :days+=day;
	}
	if(isLeap(year)){
		days+=1;
		return days;
	}
	else{
		return days;
	}
}
//转为两位的字符串
function toDoubleNum(num){
	return num < 10 ? "0" + num : num;
}
//转为两位的字符串
function toTwoNum(num){
	return num < 10 ? "0" + num : num.toString();
}
//毫秒转为三位数
function toThreeNum(num){
	// 注意分段！！
	var str;
	if (num<10) {
		str = "00" + num;
	}else if(num<100){
		str = "0" + num;
	}else{
		str = num;
	}
	return str;
}
//转换周几
function week(w){
	switch(w){
		//用return 不用break了！！
		case 0:return "周日 ";
		case 1:return "周一 ";
		case 2:return "周二 ";
		case 3:return "周三 ";
		case 4:return "周四 ";
		case 5:return "周五 ";
		case 6:return "周六 ";
	}
}