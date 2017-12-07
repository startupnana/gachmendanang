//＜サイズ位置の設定＞
//ステージサイズ
var stWidth = 700;
var stHeight = 845;
var stHeighty = 415;
//UIの高さ
var uOs = 75;
//UIの座標
var uYokoY = [stHeighty, stHeighty-uOs];
var uTateY = [stHeight, stHeight-uOs];
var jYokoY = [stHeighty-40, stHeighty-40-uOs];
var jTateY = [stHeight-44, stHeight-44-uOs];

var cUIFlg=0;
var cJIMAKUFlg=0;
var cCurrentFileNum=0;
var cBackFlg=0;
var cSwiffyID=0;
var cIOS=0;
var cHeight=0;
var cIOSversion;
//ジャンプ先を指定したい場合は以下の変数に定義
var jtFileN = "";
var jtFileB = "";
var cCurrentNum;
var cTimerID;
var currentSound;
var cVolume=100;
var cVzenkai=-1;
var slider_operating = false;
var slider_operating2 = false;
var vol_operating = false;
var vol_operating2 = false;
var frameTotal = -1;
var term = getterm();
var LayoutC = false;
function elemShow(elemName){
	var yID = document.getElementById(elemName);
	yID.style.visibility = 'visible';
}
function elemHide(elemName){
	var yID = document.getElementById(elemName);
	yID.style.visibility = 'hidden';
}
$(document).ready(function(){
	CheckIOS();
});
function CheckIOS(){
	var ua=navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0){
		cIOS = 1;
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		cIOSversion=parseInt(v[1], 10);
	}
}
var arrNum = new Array();
var arrLoaderE = new Array();
var firstTime = true;
//var canvas, stage, exportRoot, images, ss;
var canvas, stage, exportRoot, images, ss, anim_container, dom_overlay_container, fnStartAnimation;
var nTimerID;
function init() {
	if (GetCookie(cUI_COOKIE)!=""){
		cUIFlg = Number(GetCookie(cUI_COOKIE));
		cJIMAKUFlg = Number(GetCookie(cTXT_COOKIE));
	}
	if (GetCookie(cVOL_COOKIE)!=""){
		cVolume = Number(GetCookie(cVOL_COOKIE));
		cVzenkai = Number(GetCookie(cVZEN_COOKIE));
	}
	$("#start_modal").css("background-image","url('img/cap.jpg')");
	cTimerID = setTimeout("Stc(0)", 50);
}
function Clc() {
	elemHide('canvcontainer');
	elemShow('loading');
	stage.removeAllEventListeners();
	stage.removeAllChildren();
	ss = null;
	images = null;
	exportRoot = null;
	stage = null;
	canvas = null;
	$("#canv").html("");
	$("#canvcontainer").html("");
}
function Stc(aNum) {
	clearTimeout(cTimerID);
	$("#canvcontainer").html('<canvas id=\"canvas\" width=\"' + stWidth +'\" height=\"' + stHeight + '\" style=\"display: block; background-color:rgba(255, 255, 255, 1.00)\"></canvas>');
	$("#canv").html('<script src=\"./js/' + fName + String(aNum) + '.js\"></script>');
	cTimerID = setTimeout("SetCanvas(" + aNum + ")", 200);
}
function SetCanvas(aNum) {
	clearTimeout(cTimerID);
	cCurrentFileNum = aNum;
	canvas = document.getElementById("canvas");
	createjs.MotionGuidePlugin.install();
	var comp=AdobeAn.getComposition("49FC47607C2DE648AD259A66FEEC7CEF");
	var lib=comp.getLibrary();
	images = images||{};
	ss = ss||{};
	var res = true;
	if (arrNum.length != 0){
		for (i = 0; i < arrNum.length; i++){
			if (arrNum[i] == aNum){
				res = false;
				break;
			}
		}
	}
	if (res){
		var loader = new createjs.LoadQueue(false);
		loader.installPlugin(createjs.Sound);
		loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
		loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
		//loader.addEventListener("fileload", handleFileLoad);
		//loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest);
		//var lib=comp.getLibrary();
		loader.loadManifest(lib.properties.manifest);
		arrNum.push(aNum);
	}else{
		handleComplete(arrLoaderE[i],comp);
		tateyokoB = 'sai';
		sAspectB = "";
		if (term != 'pc'){
			resizeCheck();
		}
	}
}
function handleComplete(evt,comp) {
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	eval("exportRoot = new lib." + fName + cCurrentFileNum + "();");
	stage = new lib.Stage(canvas);
	//stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver();
	if (term == 'pc'){
		createjs.Touch.enable(stage,true,false);
	}else{
		createjs.Touch.enable(stage,false,true);
	}
	stage.preventSelection = false;
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(lib.properties.fps);
	cFps = lib.properties.fps;
	lib.properties.fps;
	if (!firstTime){
		createjs.Ticker.addEventListener("tick", stage);
	}else{
		if (term == 'pc'){
			sAspect = "yoko";
			StartAudio();
		}else{
			elemShow('start_modal');
		}
	}
	elemShow('canvcontainer');
	elemHide('loading');
	SetPixelRatio();
	tateyokoB = 'sai';
	sAspectB = "";
	if (term != 'pc'){
		resizeCheck();
	}
	if(arrNum.length != arrLoaderE.length){
		arrLoaderE.push(evt);
	}
	AdobeAn.compositionLoaded(lib.properties.id);
	SetStageEvt();
	Set_msg_click_UIhyoji();
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function playSound(id, loop) {
	if (!slider_operating){
		currentSound=createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
		return currentSound;
	}
}
function NextFile(strNFN){
	if ((strNFN != void(0))){
		jtFileN = strNFN;
	}
	//ジャンプ先の指定または次のファイル
	var nextcCFN = (jtFileN != "")? parseFloat(jtFileN): cCurrentFileNum + 1;
	//指定されたジャンプ先をクリア
	Clc();
	jtFileN = "";
	cBackFlg = 0;
	cTimerID = setTimeout("Stc(" + nextcCFN + ")", 100);
}
function BackFile(strNFN){
	if ((strNFN != void(0))){
		jtFileB = strNFN;
	}
	//ジャンプ先の指定または前のファイル
	var prevcCFN = (jtFileB != "")? parseFloat(jtFileB): cCurrentFileNum - 1;
	//指定されたジャンプ先をクリア
	Clc();
	jtFileB = "";
	cBackFlg = 1;
	cTimerID = setTimeout("Stc(" + prevcCFN + ")", 100);
}
//20141219もぐりこみ防止用 アウラ
var cSInitTimerID;
function SInit(){
	clearTimeout(cSInitTimerID);
	sclLT();
}
//20141219もぐりこみ防止用 アウラ
//cSInitTimerID = setTimeout("SInit()", 500);

function pause_audio(){
	if(currentSound!=null){
		currentSound.paused=true;
	}
}
function play_audio(){
	if(currentSound!=null){
		currentSound.paused=false;
	}
}
function StartAudio(){
	createjs.Ticker.addEventListener("tick", stage);
	$("#start_modal").css("display","none");
	firstTime = false;
	fncAspect();
}
function SetCurrentScene(aNum){
	cStopPos = aNum - 1;
	cCurrentNum = aNum;
	SetSceneAction();
}
function SetUIFlg(aNum){
	cUIFlg = aNum;
	SetCookie(cUI_COOKIE,aNum);
}
function SetJIMAKUFlg(aNum){
	cJIMAKUFlg = aNum;
	SetCookie(cTXT_COOKIE,aNum);
}
function GoCrseMenu(){
	cTimerID = setTimeout("GoCrseMenuD()", 500);
}
function GoCrseMenuD(){
	pause_audio();
	clearTimeout(cTimerID);
	window.parent.top.goCrseMenu();
}
function GoNext(){
	cTimerID = setTimeout("GoNextD()", 500);
}
function GoNextD(){
	pause_audio();
	clearTimeout(cTimerID);
	window.parent.top.goNext();
}
var cUI_COOKIE = "jmam_el_ui_status";
var cTXT_COOKIE = "jmam_el_txt_status";
var cVOL_COOKIE = "jmam_el_vol_status";
var cVZEN_COOKIE = "jmam_el_vzenkai_status";
var cMARK0_COOKIE = "jmam_el_file_status";
var cMARK1_COOKIE = "jmam_el_label_status";
var cMARK2_COOKIE = "jmam_el_x_status";
function SetCookie(aName,aValue) {
    var fStr = aName + "=" + aValue + "; path=/;"
    document.cookie = fStr;
}
function GetCookie(aName){
	if(document.cookie.length>0){
		var fPos=document.cookie.indexOf(aName + "=");
		if(fPos!=-1){
			var fSt = fPos + aName.length + 1;
			var fEnd=document.cookie.indexOf(";",fSt);
			if(fEnd==-1){
				fEnd=document.cookie.length;
			}
			return unescape(document.cookie.substring(fSt,fEnd));
		}
	}
	return "";
}
function getViewPortWidth(){
	var val;
	var arr=$("meta[name=viewport]").attr("content").split(",");
	for(var i=0; i<arr.length; i++){
		if(arr[i].toLowerCase().match("width")!=null){
			val=Number(arr[i].split("=")[1]);
			if(!isNaN(val)){
				return val;
			}
		}
	}
	return window.innerWidth;
}
function SetPixelRatio(){
	if (window.devicePixelRatio) {
		var height = canvas.getAttribute('height');
		var width = canvas.getAttribute('width');
		canvas.setAttribute('width', Math.round(width * window.devicePixelRatio));
		canvas.setAttribute('height', Math.round( height * window.devicePixelRatio));
		canvas.style.width = width+"px";
		canvas.style.height = height+"px";
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
	}
}

///////////以下javascript外部化に伴う追記分/////////////////////////
var lf;
var mycSArr;
function CheckMode() {
	if (frameTotal != -1) {
		//スライド移動
		var i;
		// 表示フレーム変数
		var frm = frameTotal - arrFrmOffSet[cCurrentFileNum];
		frameTotal = -1;
		for (i = 1; i < mycSArr.length; i++) {
			if (frm < mycSArr[i]) {
				var min = Math.min(Math.abs(frm - mycSArr[i - 1]), Math.abs(frm - mycSArr[i]));
				i = (min == Math.abs(frm - mycSArr[i])) ? i : i - 1;
				break;
			}
		}
		if (i < mycSArr.length - 1) {
			//最終ラベルより前でドロップ
			exportRoot.gotoAndPlay(mycSArr[i]);
		} else {
			//最終ラベルの後ろ半分にドロップ
			//最終ラベルのスクリプト実行
			exportRoot.funcLL();
			if (frm >= lf && exportRoot.cLastFileFlg) {
				//最終ファイル、フレームでの動作
				exportRoot.gotoAndPlay(lf - 2);
			} else {
				//最終ラベルでの動作
				exportRoot.gotoAndPlay(mycSArr[i-1]);
			}
		}
	} else {
		//進む、戻る移動
		if (cBackFlg == 1) {
			var fLabel = "label_" + String(exportRoot.cTotalScene);
			exportRoot.gotoAndPlay(fLabel);
		} else {
			cCurrentNum = 0;
		}
	}
};
function Play() {
	NextBtnReset();
	if (exportRoot.currentFrame + 1 >= exportRoot.duration - 1) {
		createjs.Sound.stop();
		if (exportRoot.cLastFileFlg == true) {
			//GoNext();
		} else {
			exportRoot.stop();
			NextFile(exportRoot.jtFileN);
		}
	} else {
		exportRoot.UIBtns.PauseBtn.visible = true;
		exportRoot.UIBtns.PlayBtn.visible = false;
		exportRoot.play();
		play_audio();
	}
};
function Pause() {
	exportRoot.stop();
	exportRoot.JIMAKU.stop();
	exportRoot.UIBtns.PlayBtn.visible = true;
	exportRoot.UIBtns.PauseBtn.visible = false;
	pause_audio();
};
function Next() {
	if (!slider_operating){
		createjs.Sound.stop();
		NextBtnReset();
		if (cCurrentNum == exportRoot.cTotalScene) {
			exportRoot.UIBtns.NextBtn.visible = false;
			if (exportRoot.cLastFileFlg == true) {
				GoNext();
			} else {
				exportRoot.stop();
				NextFile(exportRoot.jtFileN);
			}
		} else {
			var fNum = cCurrentNum + 1;
			var fLabel = "label_" + (fNum);
			if (exportRoot.jtLabelN != "") {
				fLabel = exportRoot.jtLabelN;
			}
			exportRoot.jtLabelN = "";
			exportRoot.jtLabelB = "";
			exportRoot.UIBtns.PauseBtn.visible = true;
			exportRoot.UIBtns.PlayBtn.visible = false;
			exportRoot.gotoAndPlay(fLabel);
		}
	}
};
function NextBtnReset() {
	exportRoot.UIBtns.NextBtn.gotoAndStop("release");
	exportRoot.UIBtns.NextBtn.icon.gotoAndStop(0);
};
function Back() {
	if (!slider_operating){
		createjs.Sound.stop();
		NextBtnReset();
		if (cCurrentNum == 1) {
			exportRoot.UIBtns.BackBtn.visible = false;
			if (exportRoot.cFirstFileFlg == false) {
				exportRoot.stop();
				BackFile(exportRoot.jtFileB);
			}
		} else {
			var fNum = cCurrentNum - 1;
			var fLabel = "label_" + (fNum);
			if (exportRoot.jtLabelB != "") {
				fLabel = exportRoot.jtLabelB;
			}
			exportRoot.jtLabelN = "";
			exportRoot.jtLabelB = "";
			exportRoot.UIBtns.PauseBtn.visible = true;
			exportRoot.UIBtns.PlayBtn.visible = false;
			exportRoot.gotoAndPlay(fLabel);
		}
	}
};
function UION(aMode) {
	tCount4000 = 0;
	if ((!slider_operating) && (cUIFlg != 1)){
		if (cUIFlg == 0){
			SetUIFlg(1);
			exportRoot.UItitleMC.alpha = 0;
			exportRoot.UItitleMC.y = -20 * exportRoot.UItitleMC.scaleX;
			exportRoot.UIBtns.alpha = 0;
			if (LayoutC){
				exportRoot.JIMAKU.y = (sAspect=="tate")? jTateY[0]: jYokoY[0];
				exportRoot.UIBtns.y = (sAspect=="tate")? uTateY[0]: uYokoY[0];
			}else{
				exportRoot.JIMAKU.y = jYokoY[0];
				exportRoot.UIBtns.y = uYokoY[0];
			}
			createjs.Tween.get(exportRoot.UItitleMC).to({alpha: 1}, 200);
			createjs.Tween.get(exportRoot.UItitleMC).to({y: 0}, 200);
			createjs.Tween.get(exportRoot.UIBtns).to({alpha: 1}, 200);
			if (LayoutC){
				createjs.Tween.get(exportRoot.UIBtns).to({y: (sAspect=="tate")? uTateY[1]: uYokoY[1]}, 200);
				createjs.Tween.get(exportRoot.JIMAKU).to({y: (sAspect=="tate")? jTateY[1]: jYokoY[1]}, 200);
				var arrMC = new Array();
				arrMC[0] = exportRoot.mcLyoko.msg_click;
				arrMC[1] = exportRoot.mcLtate.msg_click;
				for (var i = 0; i < arrMC.length; i++) {
					if (arrMC[i] != void(0)) {
						//メッセージが存在したら以下実行
						arrMC[i].alpha = 1;
					}
				}
			}else{
				createjs.Tween.get(exportRoot.UIBtns).to({y: uYokoY[1]}, 200);
				createjs.Tween.get(exportRoot.JIMAKU).to({y: jYokoY[1]}, 200);
				if (exportRoot.msg_click != void(0)) {
					//メッセージが存在したら以下実行
					exportRoot.msg_click.alpha = 1;
				}
			}
		}
	}
};
function UIOFF() {
	if ((!slider_operating) && (cUIFlg != 0)){
		tCount4000 = tCount4000t;
		if (cUIFlg == 1){
			SetUIFlg(0);
			exportRoot.UItitleMC.alpha = 1;
			exportRoot.UItitleMC.y = 0;
			exportRoot.UIBtns.alpha = 1;
			if (LayoutC){
				exportRoot.UIBtns.y = (sAspect=="tate")? uTateY[1]: uYokoY[1];
				exportRoot.JIMAKU.y = (sAspect=="tate")? jTateY[1]: jYokoY[1];
			}else{
				exportRoot.JIMAKU.y = jYokoY[1];
				exportRoot.UIBtns.y = uYokoY[1];
			}
			createjs.Tween.get(exportRoot.UItitleMC).to({alpha: 0}, 200);
			createjs.Tween.get(exportRoot.UItitleMC).to({y: -20 * exportRoot.UItitleMC.scaleX}, 200);
			createjs.Tween.get(exportRoot.UIBtns).to({alpha: 0}, 200);
			if (LayoutC){
				createjs.Tween.get(exportRoot.UIBtns).to({y: (sAspect=="tate")? uTateY[0]: uYokoY[0]}, 200);
				createjs.Tween.get(exportRoot.JIMAKU).to({y: (sAspect=="tate")? jTateY[0]: jYokoY[0]}, 200);
				var arrMC = new Array();
				arrMC[0] = exportRoot.mcLyoko.msg_click;
				arrMC[1] = exportRoot.mcLtate.msg_click;
				for (var i = 0; i < arrMC.length; i++) {
					if (arrMC[i] != void(0)) {
						//メッセージが存在したら以下実行
						arrMC[i].alpha = 0;
					}
				}
			}else{
				createjs.Tween.get(exportRoot.UIBtns).to({y: uYokoY[0]}, 200);
				createjs.Tween.get(exportRoot.JIMAKU).to({y: jYokoY[0]}, 200);
				if (exportRoot.msg_click != void(0)) {
					//メッセージが存在したら以下実行
					exportRoot.msg_click.alpha = 0;
				}
			}
		}
	}
};
function JimakuON() {
	cJIMAKUFlg = 1;
	exportRoot.UIBtns.JIMAKU_OFF.visible = true;
	exportRoot.UIBtns.JIMAKU_ON.visible = false;
	exportRoot.JIMAKU.visible = true;
	SetJIMAKUFlg(1);
};
function JimakuOFF() {
cJIMAKUFlg = 0;
	exportRoot.UIBtns.JIMAKU_OFF.visible = false;
	exportRoot.UIBtns.JIMAKU_ON.visible = true;
	exportRoot.JIMAKU.visible = false;
	SetJIMAKUFlg(0);
};
function SetBtnVisible() {
	if (cCurrentNum == 1) {
		if (exportRoot.cFirstFileFlg) {
			exportRoot.UIBtns.BackBtn.visible = false;
		} else {
			exportRoot.UIBtns.BackBtn.visible = true;
		}
		exportRoot.UIBtns.BackBtn.alpha = 1;
		exportRoot.UIBtns.NextBtn.visible = true;
	} else if (cCurrentNum == exportRoot.cTotalScene) {
		exportRoot.UIBtns.BackBtn.visible = true;
		if (exportRoot.cLastFileFlg) {
			exportRoot.UIBtns.NextBtn.visible = false;
		} else {
			exportRoot.UIBtns.NextBtn.visible = true;
		}
		exportRoot.UIBtns.NextBtn.alpha = 1;
	} else {
		exportRoot.UIBtns.BackBtn.visible = true;
		exportRoot.UIBtns.NextBtn.visible = true;
	}
	//exportRoot.JIMAKU.visible = (cJIMAKUFlg == 1);
	//130710
	if (cCurrentNum == exportRoot.cTotalScene && exportRoot.cLastFileFlg) {
		exportRoot.UIBtns.NextBtn.visible = false;
	}
};
function SetCurrentNum(aNum) {
	cCurrentNum = aNum;
	SetBtnVisible();
	exportRoot.jtLabelB = "";
	exportRoot.jtLabelN = "";
	SetSceneAction();
};
function BlinkNext() {
	exportRoot.UIBtns.NextBtn.visible = true;
	exportRoot.UIBtns.NextBtn.icon.play();
	exportRoot.UIBtns.PlayBtn.visible = false;
	tCount4000 = 0;
};
function  LMSMenu() {
	GoCrseMenu();
	MenuBtnReset();
};
function MenuBtnReset() {
	exportRoot.UIBtns.LMS_MENU.alpha = 1;
};

function SetBtns(aBoolean) {
	if (aBoolean == 0) {
		exportRoot.UIBtns.y = (sAspect=="tate")? uTateY[cUIFlg]: uYokoY[cUIFlg];
		exportRoot.JIMAKU.visible = false;
	} else {
		if (cUIFlg == 1) {
			exportRoot.UI_OFF.visible = true;
			exportRoot.UIBtns.y = (sAspect=="tate")? uTateY[cUIFlg]: uYokoY[cUIFlg];
		} else {
			exportRoot.UIBtns.y = (sAspect=="tate")? uTateY[cUIFlg]: uYokoY[cUIFlg];
		}
		if (exportRoot.cJIMAKUFlg == 1) {
			exportRoot.JIMAKU.visible = true;
		} else {
			exportRoot.JIMAKU.visible = false;
		}
	}
};
function PlayBtnOFF() {
	exportRoot.UIBtns.PlayBtn.visible = false;
};
function NextBtnOFF() {
	exportRoot.UIBtns.NextBtn.visible = false;
};
function NextBtnON() {
	exportRoot.UIBtns.NextBtn.visible = true;
};
function BackBtnOFF() {
	exportRoot.UIBtns.BackBtn.visible = false;
};
function BackBtnON() {
	exportRoot.UIBtns.BackBtn.visible = true;
};
function PauseBtnOFF() {
	exportRoot.UIBtns.PauseBtn.visible = false;
};
/*
function YougoON() {
};
function YougoOFF() {
};
*/

//リンク関係----------------------------------
function preLink1() {
	if (exportRoot.UIBtns.PauseBtn.visible) {
		//一時停止
		Pause();
		//UIの表示
		UION("auto");
	}
};
//リンク関係----------------------------------*/
///////////////////////////////////////////////////////////////

function InitUI(){
	fncAspect();
	tCount4000 = (cUIFlg == 1)? 0: tCount4000t;
	if (cJIMAKUFlg == 1) {
		exportRoot.UIBtns.JIMAKU_ON.visible = false;
		exportRoot.UIBtns.JIMAKU_OFF.visible = true;
		exportRoot.JIMAKU.visible = true;
	} else {
		exportRoot.UIBtns.JIMAKU_ON.visible = true;
		exportRoot.UIBtns.JIMAKU_OFF.visible = false;
		exportRoot.JIMAKU.visible = false;
	}
	slider_operating = false;
	slider_operating2 = false;
	v_dnRPTtap = false;
}
function SetBtnEvt(){
	UIMC = exportRoot.UIBtns;
	SBMC = UIMC.slider;
	PBMC = SBMC.progress;
	VCMC = UIMC.vol_control;
	exportRoot.UIBtns.LMS_MENU.name="LMS_MENU";
	exportRoot.UIBtns.JIMAKU_OFF.name="JIMAKU_OFF";
	exportRoot.UIBtns.JIMAKU_ON.name="JIMAKU_ON";
	exportRoot.UIBtns.BackBtn.name="BackBtn";
	exportRoot.UIBtns.PlayBtn.name="PlayBtn";
	exportRoot.UIBtns.PauseBtn.name="PauseBtn";
	exportRoot.UIBtns.NextBtn.name="NextBtn";
	//exportRoot.UIBtns.YOUGO_ON.name="YOUGO_ON";

	exportRoot.UIBtns.LMS_MENU.addEventListener("mousedown", handleEvent);
	exportRoot.UIBtns.JIMAKU_OFF.addEventListener("mousedown", handleEvent);
	exportRoot.UIBtns.JIMAKU_ON.addEventListener("mousedown", handleEvent);
	exportRoot.UIBtns.BackBtn.addEventListener("mousedown", handleEvent);
	exportRoot.UIBtns.PlayBtn.addEventListener("mousedown", handleEvent);
	exportRoot.UIBtns.PauseBtn.addEventListener("mousedown", handleEvent);
	exportRoot.UIBtns.NextBtn.addEventListener("mousedown", handleEvent);
	//exportRoot.UIBtns.YOUGO_ON.addEventListener("mousedown", handleEvent);
	//exportRoot.YogoOFF.addEventListener("mousedown", yogoOFF);
	//exportRoot.YogoOFF.visible = false;
	//exportRoot.YogoON.visible = true;

	VCMC.hani1.addEventListener("mousedown", VCmdH1.bind(this));
	VCMC.hani2.addEventListener("mousedown", VCmdH2.bind(this));
	VCMC.hani2.addEventListener("pressup", VCpuH.bind(this));
	if (getterm() == "pc") {
		VCMC.hani2.addEventListener("mouseout", VCmouH.bind(this));
		VCMC.hani2.addEventListener("mouseover", VCmovH.bind(this));
	}
}
function handleEvent(e){
	e.currentTarget.gotoAndStop("release");
	switch(e.currentTarget.name){
		case "UI_ON":
			UION();
			break;
		case "UI_OFF":
			UIOFF();
			break;
		case "LMS_MENU":
			LMSMenu();
			break;
		case "JIMAKU_OFF":
			JimakuOFF();
			UION();
			break;
		case "JIMAKU_ON":
			JimakuON();
			UION();
			break;
		case "BackBtn":
			frameTotal = -1;
			UION();
			Back();
			break;
		case "PlayBtn":
			frameTotal = -1;
			Play();
			UION();
			break;
		case "PauseBtn":
			Pause();
			UION();
			break;
		case "NextBtn":
			if (exportRoot.paused) {
				UIOFF();
			}else{
				UION();
			}
			frameTotal = -1;
			Next();
			break;
		case "YOUGO_ON":
			//YougoON();
			break;
	}
	e.nativeEvent.preventDefault();
}
////////////////////////////////////////////////////////

if (term == 'pc'){
	var keyON = true;
	var keyFF = 0;
	var keyJump = (cFps == 12)? 10: 20;
	document.onkeydown = function (e){
		if (keyON) {
			// キーの押下状態
			var right_key = (e.keyCode == 39);
			var left_key = (e.keyCode == 37);
			var enter_key = (e.keyCode == 13);
			var ctrl_key = e.ctrlKey;
			//動作
			if (right_key && ctrl_key){
				if (exportRoot.UIBtns.NextBtn.visible){
					//UI自動閉キャンセル
					UION();
					Next();
				}
			}else if (left_key && ctrl_key){
				if (exportRoot.UIBtns.BackBtn.visible){
					//UI自動閉キャンセル
					UION();
					Back();
				}
			}else if (enter_key && ctrl_key){
				//UI自動閉キャンセル
				UION();
				if (exportRoot.UIBtns.PauseBtn.visible && !exportRoot.UIBtns.PlayBtn.visible){
					Pause();
				}else if (!exportRoot.UIBtns.PauseBtn.visible && exportRoot.UIBtns.PlayBtn.visible){
					Play();
				}
			}else if (right_key){
				if (keyFF == 0){
					createjs.Sound.stop();
					keyFF = 1;
					//UI自動閉キャンセル
					UION();
				}
			}else if (left_key){
				if (keyFF == 0){
					createjs.Sound.stop();
					keyFF = -1;
					//UI自動閉キャンセル
					UION();
				}
			}
		}
	};
	document.onkeyup = function (e){
		if (keyON) {
			if (keyFF != 0){
				slider_operating2 = true;
				keyFF = 0;
			}
		}
	};
}

//イベント連発防止
var mdNG = false;
//スクロール量の検出
var ssmX = 0;
var ssmY = 0;
function ltapMC_onMouseDown() {
	if (!mdNG) {
		if (!slider_operating && !vol_operating && !v_dnRPTtap){
			ssmX = stage.mouseX;
			ssmY = stage.mouseY;
		}
		msg_click_onMouseDown();
		tCount500 = 0;
		mdNG = true;
	}
}
function ltapMC_onMouseUp(e) {
	if (mdNG) {
		var res = ((Math.abs(ssmX - stage.mouseX) < 10));
		if (res && ((Math.abs(ssmY - stage.mouseY) < 10))) {
			msg_click_onMouseUp();
		}
	}
	e.nativeEvent.preventDefault();
}

//fps = 6の場合
var cFps;

var tCount500t;
var tCount4000t;
var tCount500;
var tCount4000;
var tc2000t;
var tc2000;
var tCountt;
var tCount;
var seft = false;
var smX = 0;
var smY = 0;
//イベントの割り付け
function ltapMC_onEnterFrame() {
	//マウスサ票の取得
	if ((slider_operating || vol_operating) && !v_dnRPTtap){
		smX = stage.mouseX;
		smY = stage.mouseY;
	}
	//連続タップ対策
	if (tCount500 <= tCount500t){
		if (tCount500 == tCount500t){
			mdNG = false;
		}
		tCount500++;
	}
	//カウント
	if (tCount4000 <= tCount4000t){
		if (tCount4000 == tCount4000t){
			UIOFF();
		}
		tCount4000++;
	}
	//最初のエラー
	if (seft){
		// 音量のエンターフレーム
		VCef();
		// スライダーのエンターフレーム
		SBef(exportRoot.currentFrame);
	} else {
		seft = true;
	}
	if (term == 'pc'){
		//キー操作
		if (keyFF != 0){
			var frm = exportRoot.currentFrame + (keyJump * keyFF);
			if (frm < 2){
				frm = 2;
			}else if(frm > lf){
				frm = lf;
			}
			exportRoot.gotoAndStop(frm);
		}
	}
	mDouki();
}
function SetStageEvt(){
	if (!seft){
		tCount500t = 0.5 * cFps
		tCount500 = tCount500t + 1
		tCount4000t = 3 * cFps
		tCount4000 = tCount4000t + 1
		tc2000t = 2 * cFps;
		tc2000 = tc2000t + 1;
		tCountt = 0.5 * cFps;
		tCount = tCountt + 1;
	}
	seft = false;
	if (LayoutC){
		exportRoot.mcLyoko.UI_ONOFF.addEventListener("mousedown", ltapMC_onMouseDown);
		exportRoot.mcLyoko.UI_ONOFF.addEventListener("pressup", ltapMC_onMouseUp);
		exportRoot.mcLtate.UI_ONOFF.addEventListener("mousedown", ltapMC_onMouseDown);
		exportRoot.mcLtate.UI_ONOFF.addEventListener("pressup", ltapMC_onMouseUp);
	}else{
		exportRoot.UI_ONOFF.addEventListener("mousedown", ltapMC_onMouseDown);
		exportRoot.UI_ONOFF.addEventListener("pressup", ltapMC_onMouseUp);
	}
	stage.addEventListener("tick", ltapMC_onEnterFrame);
}
//--------------------------------------------------------------------------------
var msg_click_UIhyoji;
function Set_msg_click_UIhyoji(){
	msg_click_UIhyoji = (cUIFlg == 1);
}
var msg_click_timerID = "0";
function msg_click_onMouseDown() {
	msg_click_UIhyoji = (cUIFlg == 1);
}
function msg_click_onMouseUp() {
	//UI以外をタップ
	if (msg_click_UIhyoji) {
		UIOFF();
	} else {
		UION();
	}
}
//--------------------------------------------------------------------
//親のタイムラインと3mc同期
var msgDisp = false;
var befFrm = 0;
function mDouki() {
	var mc = exportRoot;
	var nowFrm = mc.currentFrame;
	if (mc.befFrm != nowFrm){
		if (LayoutC){
			mc.mcLyoko.gotoAndStop(nowFrm);
			mc.mcLtate.gotoAndStop(nowFrm);
		}
		mc.JIMAKU.gotoAndStop(nowFrm);
		mc.befFrm = nowFrm;
	}
};
//縦/横レイアウト切り替え
sAspectB = "";
function fncAspect() {
	if (LayoutC){
		if (sAspect != sAspectB) {
			exportRoot.mcLtate.visible = (sAspect == "tate") ? true : false;
			exportRoot.mcLyoko.visible = (sAspect == "tate") ? false : true;
			if (sAspect == "tate") {
				exportRoot.UItitleMC.scaleX = 1.3;
				exportRoot.UItitleMC.scaleY = 1.3;
				exportRoot.JIMAKU.scaleX = 1.1;
				exportRoot.JIMAKU.scaleY = 1.1;
				exportRoot.UI_hBox.visible = false;
				exportRoot.UItitleMC.y = (cUIFlg == 1)? 0: -20 * 1.3;
				exportRoot.JIMAKU.y = jTateY[cUIFlg];
				exportRoot.UIBtns.y = uTateY[cUIFlg];
			} else {
				exportRoot.UItitleMC.scaleX = 1;
				exportRoot.UItitleMC.scaleY = 1;
				exportRoot.JIMAKU.scaleX = 1;
				exportRoot.JIMAKU.scaleY = 1;
				exportRoot.UI_hBox.visible = true;
				exportRoot.UItitleMC.y = (cUIFlg == 1)? 0: -20;
				exportRoot.JIMAKU.y = jYokoY[cUIFlg];
				exportRoot.UIBtns.y = uYokoY[cUIFlg];
			}
			exportRoot.UIBtns.alpha = cUIFlg;
			exportRoot.UItitleMC.alpha = cUIFlg;
			sAspectB = sAspect;
		}
	}else{
		if (sAspect != sAspectB) {
			exportRoot.UI_hBox.visible = true;
			exportRoot.UItitleMC.y = (cUIFlg == 1)? 0: -20;
			exportRoot.JIMAKU.y = jYokoY[cUIFlg];
			exportRoot.UIBtns.y = uYokoY[cUIFlg];
			exportRoot.UIBtns.alpha = cUIFlg;
			exportRoot.UItitleMC.alpha = cUIFlg;
			sAspectB = sAspect;
		}
	}
	tCount4000 = 0;
};
var v_dnRPTtap = false;

//ラベルのフレーム番号ファンクション-----------------------
function make_mycSArr(){
	mycSArr = new Array();
	//トータルフレームを検出
	lf = exportRoot.timeline.duration - 1;
	//カレントファイルの正規ラベル（label_1～）のフレーム番号を取得
	for (var i = 0; i < exportRoot.cTotalScene; i++) {
		mycSArr.push(exportRoot.timeline._labels['label_' + (i + 1)]);
	}
	mycSArr.push(lf);
}
//ムービークリップの参照
var UIMC;
var SBMC;
var PBMC;
var VCMC;
//音量ファンクション----------------------------
//音量開閉
function ssClose (bool) {
	UIMC.JIMAKU_ON.alpha = (bool? 0: 1);
	UIMC.JIMAKU_OFF.alpha = (bool? 0: 1);
	VCMC.base.visible = bool;
	VCMC.vol_base.visible = bool;
	VCMC.vol_disp.visible = bool;
	VCMC.vol_tumami.visible = bool;
	VCMC.hani2.visible = bool;
	return bool;
}
// 音量調整ファンクション
function sound_vol (vol) {
	var lvol = vol * 0.01;
	if (VCMC.bVol != lvol) {
		// ボリュームのセット
		createjs.Sound.setVolume(lvol);
		// インジケータ類
		VCMC.vol_disp.scaleX = lvol;
		//音量マーク
		if (vol == 0) {
			var frm = 0;
		} else if ((0 < vol) && (vol <= 50)) {
			var frm = 1;
		} else if ((50 < vol) && (vol < 100)) {
			var frm = 2;
		} else if (vol == 100) {
			var frm = 3;
		}
		if (frm != VCMC.frmB){
			VCMC.vol_dispB.gotoAndStop(frm);
			VCMC.frmB = frm;
		}
		// ツマミも合わせて移動
		VCMC.vol_tumami.x = VCMC.s_width * lvol;
		cVolume = vol;
		VCMC.bVol = vol;
	}
}
// ボリューム用--座標→百分率変換ファンクション
function x_per (px) {
	// 小数点以下四捨五入
	return Math.round((px / VCMC.s_width) * 100);
}
// ボリューム用--百分率→座標変換ファンクション
function per_x (per) {
	// マウスダウン中のみ動作
	return VCMC.s_width * (per * 0.01);
}
// ツマミ移動計算（マウス操作）ファンクション
function vol_bar () {
	// 現在マウスの位置割り出し
	var lm = VCMC.globalToLocal(smX, smY);
	VCMC.now_x = lm.x + 1;
	// ツマミの移動制限
	if (VCMC.now_x <= 0) {
		VCMC.now_x = 0;
	} else if (VCMC.now_x >= VCMC.s_width) {
		VCMC.now_x = VCMC.s_width;
	}
	// 移動の実行     
	if (VCMC.before_x != VCMC.now_x) {
		VCMC.before_x = VCMC.now_x;
		// 現在のボリュームを出力
		exportRoot.UIBtns.now_vol = x_per(VCMC.now_x);
	}
}
//音量イベントファンクション----------------------------------
function VCmdH1(e) {
	ssClose(!VCMC.base.visible);
	tCount4000 = 0;
	tc2000 = 0;
	e.nativeEvent.preventDefault();
}
function VCmdH2(e) {
	if (!vol_operating2 && !v_dnRPTtap) {
		smX = stage.mouseX;
		smY = stage.mouseY;
		// スライダー操作開始変数 代入
		cVzenkai = -1;
		vol_operating = true;
	}
	tCount4000 = 0;
	exportRoot.UIBtns.vol_control.tc2000 = 0;
	e.nativeEvent.preventDefault();
}
function VCpuH(e) {
	if (vol_operating) {
		// スライダー操作開始変数 代入
		vol_operating = false;
		vol_operating2 = true;
	}
	tCount = 0;
	v_dnRPTtap = true;
	e.nativeEvent.preventDefault();
}
if (getterm() == 'pc') {
	function VCmovH(e) {
		//オンマウス中：ポインタ変更
		VCMC.vol_tumami.gotoAndStop(2);
		e.nativeEvent.preventDefault();
	}
	function VCmouH(e) {
		// マウス外れた：ポインタ変更
		VCMC.vol_tumami.gotoAndStop(1);
		e.nativeEvent.preventDefault();
	}
}
function VCef () {
	// ボリュームツマミ移動
	if (vol_operating) {
		// マウスダウン中のみ動作
		vol_bar();
		tCount4000 = 0;
		tc2000 = 0;
	}
	// 今のツマミ位置の音量に
	sound_vol(UIMC.now_vol);
	if (vol_operating2) {
		sound_vol(UIMC.now_vol);
		SetCookie(cVOL_COOKIE, cVolume);
		SetCookie(cVZEN_COOKIE, cVzenkai);
		vol_operating2 = false;
		tc2000 = 0;
	}
	//音量スライドを閉じる
	if (tc2000 <= tc2000t) {
		if (cUIFlg == 0) {
			tc2000 = tc2000t;
			ssClose(false);
		} else if ((tc2000 == tc2000t)) {
			ssClose(false);
		}
		tc2000++;
	}
}
//スライドファンクション----------------------------
function SBoperate () {
	// 現在マウスの位置割り出し
	var lm = SBMC.globalToLocal(smX, smY);
	// xmouseに制限をかけた値をmove_posに代入
	if (lm.x <= 0) {
		UIMC.move_pos = 0;
	} else if (lm.x >= SBMC.progress.myWidth) {
		UIMC.move_pos = SBMC.progress.myWidth;
	} else {
		UIMC.move_pos = lm.x;
	}
	if (UIMC.move_pos != SBMC.move_pos) {
		// スライド位置(フレーム)の計算
		frameTotal = Math.round(cTotalFrames * (UIMC.move_pos / SBMC.progress.myWidth));
		// 表示フレーム変数
		var frame = frameTotal - arrFrmOffSet[cCurrentFileNum];
		if (frame < 2) {
			frame = 2;
			SBMC.pF = false;
		} else if (frame > lf) {
			frame = lf;
			SBMC.pF = false;
		} else {
			SBMC.pF = true;
		}
		exportRoot.gotoAndStop(frame);
		// マウス操作（_xmouse）の制限のかかった値をルートに前回値として代入
		SBMC.move_pos = UIMC.move_pos;
		//ポインタの動き
		SBMC.but_slider.x = SBMC.move_pos;
	}
	tCount4000 = 0;
}
function SBpUp (cf) {
	//リマウスリース後1回実行 操作前ムービー再生状態の復帰（暫定play）
	if (cf < mycSArr[0]) {
		//最初のラベル
		SetCurrentNum(1);
		var sSmd = exportRoot.cFirstFileFlg ? "Play()" : "Back()";
	} else {
		for (var i = 1; i < mycSArr.length; i++) {
			if (cf < mycSArr[i]) {
				var min = Math.min(Math.abs(cf - mycSArr[i - 1]), Math.abs(cf - mycSArr[i]));
				i = (min == Math.abs(cf - mycSArr[i])) ? i : i - 1;
				break;
			}
		}
		if (i < mycSArr.length - 1) {
			//最終ラベルより前でドロップ
			exportRoot.gotoAndStop(mycSArr[i]);
		} else {
			//最終ラベルの後ろ半分にドロップ
			//最終ラベルのスクリプト実行
			exportRoot.funcLL();
			if ((cf >= lf) && exportRoot.cLastFileFlg) {
				//最終ファイル、フレームでの動作
				exportRoot.gotoAndStop(lf - 2);
			}
		}
		var sSmd = "Play()";
	}
	var frm = frameTotal;
	for (var i = 0; i < arrTotalFrames.length; i++) {
		if (frm > arrTotalFrames[i]) {
			frm -= arrTotalFrames[i];
		} else {
			if (cCurrentFileNum < i) {
				exportRoot.jtFileN = String(i);
			} else if (i < cCurrentFileNum) {
				exportRoot.jtFileB = String(i);
			}
			break;
		}
	}
	slider_operating2 = false;
	UION();
	eval(sSmd);
}
function SBcan_operate () {
	// 操作可？条件判定（今回はglossaryの影響を受けない）
	SBMC.operation_ok = true;
	// 操作可、不可変数に変化があった場合に処理実行
	if (SBMC.operation != SBMC.operation_ok) {
		// 表示フレーム変数代入
		var frame = SBMC.operation_ok ? 2 : 1;
		SBMC.gotoAndStop(frame);
		// 表示フレーム変数 代入
		SBMC.operation = SBMC.operation_ok;
	}
}
// 進捗バー拡縮計算ファンクション
function progress_bar (cf) {
	// 現在位置の割り出し（小数点第1位）
	PBMC.current = (((cf + arrFrmOffSet[cCurrentFileNum]) + 1) / (cTotalFrames - 1)) * 1000;
	PBMC.current = Math.round(PBMC.current) * 0.1;
	// 進捗バー拡縮の制限
	if (PBMC.current <= 0.2) {
		PBMC.current = 0.2;
	} else if (PBMC.current >= 100) {
		PBMC.current = 100;
	}
	// 拡縮の実行 
	if (PBMC.current_before != PBMC.current) {
		var scl = PBMC.current * 0.01;
		SBMC.but_slider.x = PBMC.myWidth * scl;
		PBMC.scaleX = scl;
		PBMC.current_before = PBMC.current;
	}
}
function min_sec (sec) {
	var str_min_sec = "";
	var my_date = new Date(2010, 1, 1, 1, 0, 0);
	var myDate_num = my_date.getTime();
	// my_date をミリ秒に変換する
	myDate_num += sec * 1000;
	// sec 秒をミリ秒に換算して追加する
	my_date.setTime(myDate_num);
	// my_date Date オブジェクトを sec 分後の時刻に設定する
	str_min_sec = my_date.getMinutes() + ":" + my_date.getSeconds();
	return str_min_sec;
}
//スライドイベントファンクション----------------------------------
function SBmdH(e) {
	if (!slider_operating2 && !v_dnRPTtap) {
		smX = stage.mouseX;
		smY = stage.mouseY;
		createjs.Sound.stop();
		// スライダー操作開始変数 代入
		slider_operating = true;
		tc2000 = tc2000t-1;
	}
	//UI自動閉キャンセル
	tCount4000 = 0;
	e.nativeEvent.preventDefault();
}
function SBpuH(e) {
	if (slider_operating) {
		// スライダー操作開始変数 代入
		slider_operating = false;
		slider_operating2 = true;
	}
	tCount = 0;
	v_dnRPTtap = true;
	e.nativeEvent.preventDefault();
}
function SBmotH() {}
function SBef (cf) {
	// 操作可、不可切替
	SBcan_operate();
	// 操作
	if (slider_operating) {
		SBoperate();
	} else if (slider_operating2) {
		SBpUp(cf);
	}
	progress_bar(cf);
	//連続タップ対策
	if (tCount <= tCountt){
		if (tCount == tCountt){
			v_dnRPTtap = false;
		}
		tCount++;
	}
}
