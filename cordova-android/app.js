var APP = {
	isIOS : function(){
		return this.isDevice() && (device.platform == 'iPhone'
	    || device.platform == 'iPad'
	    || device.platform == 'iPod touch'
	    || device.platform == 'iOS')
	},
	isAndroid : function(){
		return this.isDevice() && (device.platform == "Android");
	},
	isAPP : function(){
		return this.isIOS() || this.isAndroid();
	},
	isDevice : function(){
		var isDevice = GetQueryString("isDevice");
		return null != isDevice && isDevice == "prisoner";
	},
	addScript : function(path){
	    var oHead = document.getElementsByTagName('HEAD').item(0); 
    	var oScript= document.createElement("script");	
        oScript.type = "text/javascript"; 
        oScript.src=path; 
    	oHead.appendChild(oScript); 
    	return oScript;
	}
};

var GetQueryString = function(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var scriptOnLoad = function(script,callback){
	script.onload=script.onreadystatechange=function(){  
	    if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){  
	      callback();
	    }  
	    script.onload=script.onreadystatechange=null;  
	}  
}

