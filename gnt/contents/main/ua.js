function getterm(){
	var ua=navigator.userAgent;
	var terminal;
	if (ua.indexOf('iPhone') > 0 ){
		terminal="sm";
   	} else if (ua.indexOf('iPad') > 0 ){
		terminal="sm";
	} else if (ua.indexOf('iPod') > 0 ){
		terminal="sm";
	} else if (ua.indexOf('Silk') > 0 ){
		terminal="sm";
	}else if( ua.indexOf('Android')  > 0){
		var ver = ua.substr(ua.indexOf('Android')+8, 3);
  	  	if (ua.indexOf('Chrome') > 0 ){
			terminal="sm";
		}else{
			terminal="pc";
		}
	}else{
		terminal="pc";
	}
	return terminal;
}