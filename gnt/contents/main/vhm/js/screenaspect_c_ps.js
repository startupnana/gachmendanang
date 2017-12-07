var myua = navigator.userAgent;
function getCrm(){
	var res = false;
	if( myua.indexOf('Android')  > 0){
		//Android
		var ver = myua.substr(myua.indexOf('Android')+8, 3);
		if (myua.indexOf('Chrome') > 0 ){
			//Chrome
			res = true;
		}
	}
	return res;
}
function getiPad(){
	var res = false;
	if( myua.indexOf('iPad')  > 0){
		res = true;
	}
	return res;
}
function getS4OS7(){
	var res = false;
	var iPhone = myua.indexOf('iPhone OS');
	if(iPhone > 0){
		//iPhone OSver
		var verS = iPhone + 10;
		var verE = myua.indexOf('like')-1;
		var verStr = myua.substring(verS,verE);
		var verArr = verStr.split('_');
		var verNum = parseFloat(verArr.join("").substring(0,1));
		var sysAspectL = getAspect_ab(screen.width, screen.height);
		if(verNum >= 7 && sysAspectL==1.5){
			//4S iOS7(over)
			res = true;
		}
	}
	return res;
}
function getNexus7(){
	var res = false;
	if(myua.indexOf('Nexus 7') > 0){
		res = true;
	}
	return res;
}
function getTablet(){
	var res = false;
	if(myua.indexOf('Mobile') < 0){
		res = true;
	}
	return res;
}
function getAspect_ab(a,b) {
  var aHi = Math.max(a,b)/Math.min(a,b);
  return aHi;
}
var siff_w = stWidth;
var siff_h = stHeight;
var siff_hy = stHeighty;
var siff_yoko_w = siff_w;
var siff_yoko_h = siff_h;
var siff_yoko_hy = siff_hy;
var sWpx = screen.width;
var sHpx = screen.height;
if (getNexus7() && getTablet()){
	sHpx -= 70;
}
var sysAspect=getAspect_ab(sWpx, sHpx);
var conAspect=getAspect_ab(siff_w, siff_hy);
if (sysAspect > conAspect){
	var adj = 0;
	/*
	if (getCrm()){
		adj -= -1;
		adj -= getTablet()? 16: 0;
	}
	*/
	var vpHi = (Math.min(sWpx,sHpx)-adj)*(siff_w/Math.max(sWpx,sHpx));
	var tpar = vpHi/siff_hy
	siff_yoko_w = siff_w*tpar;
	siff_yoko_h = siff_h*tpar;
	siff_yoko_hy = siff_hy*tpar;
}
var PW = window.top;
var tateyoko = '';
var tateyokoB = '';
sAspect = 'tate';
function resizeCheck(myEvents){
  var sCont = document.getElementById('canvas');
  tateyoko = 'tate';
  var sCont_w = siff_w;
  var sCont_h = siff_h;
  if (term == 'sm'){
    if (PW.innerWidth >= PW.innerHeight) {
      tateyoko = 'yoko';
      sCont_w = siff_yoko_w;
      sCont_h = siff_yoko_h;
    }
  }else{
    tateyoko = 'yoko';
    sCont_w = siff_yoko_w;
    sCont_h = siff_yoko_h;
  }
  sAspect=tateyoko;
  if (tateyokoB!=tateyoko){
    sCont.style.width = sCont_w+'px';
    sCont.style.height = sCont_h+'px';
   if (tateyokoB != 'sai' || firstTime){
	    sclLT();
    }
    tateyokoB=tateyoko;
  }
  fncAspect();
}
function sclLT(){
  if (PW.innerWidth >= PW.document.body.clientWidth){
    PW.scrollTo(0,0);
  }
}
function scrollStop(){
  var i_w=PW.innerWidth;
  var i_h=PW.innerHeight;
  if (tateyoko=='tate'){
    var sCont_w = siff_w;
    var sCont_h = siff_h;
  }else{
    var sCont_w = siff_yoko_w;
    var sCont_h = siff_yoko_hy;
  }
  var limit_x=(i_w>=sCont_w)? 0: sCont_w-i_w;
  var limit_y=(i_h>=sCont_h)? 0: sCont_h-i_h;
  var obj=(PW.document.documentElement.scrollLeft>0)? PW.document.documentElement: PW.document.body;
  if ((obj.scrollLeft > limit_x)||(obj.scrollTop > limit_y)){
    var aj_x=Math.round((obj.scrollLeft>=limit_x)? limit_x: obj.scrollLeft);
    var aj_y=Math.round((obj.scrollTop>=limit_y)? limit_y: obj.scrollTop);
    PW.scrollTo(aj_x, aj_y);
  }
  fncAspect();
}
if (term == 'sm'){
	PW.onresize = resizeCheck;
	PW.onscroll = scrollStop;
}
function removeEv(){
	PW.onscroll = null;
	PW.onresize = null;
}
this.onunload = removeEv;
