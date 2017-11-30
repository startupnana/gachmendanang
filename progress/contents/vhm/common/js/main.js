
var animOptions = {
	sceneNum:0, // total scence
	mcid: '', // id of animation
	verticalWidth:0, // width in the vertical mode
	verticalHeight:0, // height in the vertical mode
	horizontalWidth:0, // width in the horizontal mode
	horizontalHeight:0, // height in the horizontal mode
	sectionName:'', // name of parent movieClip in each section
	vertical:false, // true is the vertical mode, false is the horizontal mode
	sounds:{},
	fitWidth:false // fit size follow width: false is follow screen's height, true is follow screen's width
};

var section = 'new lib.'+animOptions.sectionName+'()';
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation,lib;
var currentMcIndex = 0;
var currentMc;
var instanceSound = null;
var currentMode = 'horizontal';
var mainctrl_y;
var play_y;
var subtite_y;

function windowRotate(){
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	if(windowWidth>windowHeight){
		rotateHandle(false);
	}else{
		rotateHandle(true);
	}
	
}

window.onresize = function(){
	windowRotate();
};

function loadNextMC(id){
	var comp=AdobeAn.getComposition(id); /// example: 3DED92BA2B85C1499B6F52630496A342
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	// var sounds = animOptions.sounds;
	// createjs.Sound.alternateExtensions = ["mp3"];
	// createjs.Sound.addEventListener("fileload", handleFileLoadSound);
	// createjs.Sound.registerSounds(sounds);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleLoadComplete(evt,comp)});
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoadSound(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}

function handleFileLoadSound() {

}

function playSound(id){
	if(id){
		instanceSound = createjs.Sound.play(id);
		instanceSound.volume = 0.75;
		instanceSound.offset = 300;
	}else{
		instanceSound.play();
	}
	return instanceSound;
}
function pauseSound(){
	instanceSound.paused =true;
}

function rotateHandle(_vertical){
	currentMc = exportRoot.children[0];
	setTimeout(function(){
		currentMc.JIMAKU.mode = 'SYNCHED';
		currentMc.horizontal.mode = 'SYNCHED';
		currentMc.vertical.mode = 'SYNCHED';
	}, 100);
	var CVheight = window.innerHeight;
	var containerDiv = document.getElementById('animation_container');
	// console.log(currentMc.JIMAKU.y);
	if(_vertical){
		containerDiv.style.height = 'auto';	
		canvas.className = "";
		currentMode = 'vertical';
		currentMc.vertical.visible = true;
		currentMc.horizontal.visible = false;
		stage.canvas.width = animOptions.verticalWidth;
		stage.canvas.height = animOptions.verticalHeight;
		currentMc.JIMAKU.y = 780;
		exportRoot.main_control_btns.y = animOptions.verticalHeight - 92; 
		exportRoot.play_btn.play_img.y = 400;
		currentMc.thumb_vertical.visible = true;
		currentMc.thumb_horizontal.visible = false;
	}else{
		containerDiv.style.height = CVheight+'px';	
		currentMode = 'horizontal';
		currentMc.vertical.visible = false;
		currentMc.horizontal.visible = true;
		stage.canvas.width = animOptions.horizontalWidth;
		stage.canvas.height = animOptions.horizontalHeight;
		currentMc.thumb_horizontal.visible = true;
		currentMc.thumb_vertical.visible = false;
		if(animOptions.fitWidth){
			canvas.className = "";
		}else{
			canvas.className = "fit-height";
		}
		currentMc.JIMAKU.y = subtite_y;
		exportRoot.main_control_btns.y = mainctrl_y; 
		exportRoot.play_btn.play_img.y = play_y;
	}
	
	//makeResponsive(true,'both',true,1);	
}

function handleLoadComplete(evt,comp) { 
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	mc1 = eval(section);
	var preloaderDiv = document.getElementById("_preload_div_");
	preloaderDiv.style.display = 'none';
	canvas.style.display = 'block';
	setTimeout(function(){
		exportRoot.children.unshift(mc1);
		subtite_y = exportRoot.children[0].JIMAKU.y;
		//exportRoot.children[0].gotoAndStop(6);
		if(animOptions.vertical){
			if(animOptions.vertical==="auto"){
				windowRotate();
			}else{
				rotateHandle(animOptions.vertical);
			}
		}else{
			rotateHandle(animOptions.vertical);
		};
	}, 200);
}

function init(anim_options) {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("3DED92BA2B85C1499B6F52630496A342");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp,anim_options)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);	
}

function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}

function handleComplete(evt,comp,anim_options) {
	if(anim_options){
		animOptions = anim_options;
		section = 'new lib.'+animOptions.sectionName+'()';
	}
	loadNextMC(animOptions.mcid);
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.common_symbols();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	exportRoot.top_panel.main_control_on.visible = true;
	exportRoot.top_panel.main_control_off.addEventListener('click', mainCtrlSetOff);
	exportRoot.top_panel.main_control_on.addEventListener('click', mainCtrlSetOn);
	exportRoot.main_control_btns.main_control_subtitle_on.addEventListener('click', subtitleOn);
	exportRoot.main_control_btns.main_control_subtitle_off.addEventListener('click', subtitleOff);
	exportRoot.main_control_btns.main_control_next.addEventListener('click', nextScene);
	exportRoot.main_control_btns.main_control_prev.addEventListener('click', prevScene);
	exportRoot.main_control_btns.main_control_subtitle_off.visible = false;
	exportRoot.main_control_btns.main_control_subtitle_on.visible = true;
	exportRoot.main_control_btns.main_control_prev.visible = false;
	exportRoot.main_control_btns.main_control_play.visible = false;
	exportRoot.main_control_btns.main_control_pause.addEventListener('click', pauseMainMC);
	exportRoot.play_btn.addEventListener('click', startAnimation);
	exportRoot.main_control_btns.main_control_play.addEventListener('click', playMainMC);
	exportRoot.main_control_btns.main_control_close.addEventListener('click', mainCtrlOff);
	mainctrl_y = exportRoot.main_control_btns.y;
	exportRoot.main_control_btns.visible = false;
	play_y = exportRoot.play_btn.play_img.y;

	function startAnimation(){
		currentMc.gotoAndPlay(3);
		currentMc.JIMAKU.visible = false;
		exportRoot.removeChild(exportRoot.play_btn);
		currentMc.thumb_vertical.visible = false;
		currentMc.thumb_horizontal.visible = false;
		var menuStt = getCookie('mainMenu');
		if(menuStt){
			mainCtrlOn();
		}
	}

	function nextScene(){
		unBlinkNext();
		enablePause();
		if(instanceSound){
			instanceSound.stop();
		}
		var currentLabel = Number((currentMc.timeline.getCurrentLabel()).substr(6,3));
		if (currentLabel < animOptions.sceneNum) {
			currentLabel++;
			currentMc.gotoAndPlay('label_' + currentLabel);
			if (currentLabel > 1) {
				exportRoot.main_control_btns.main_control_prev.visible = true;
			}
		} else {
			exportRoot.main_control_btns.main_control_next.visible = false;
			exportRoot.main_control_btns.main_control_next.removeEventListener('click', nextScene);
		}
	}
	
	function prevScene(){
		enablePause();
		unBlinkNext();
		if(instanceSound){
			instanceSound.stop();
		}
		var currentLabel = Number((currentMc.timeline.getCurrentLabel()).substr(6,3));
		if (currentLabel > 1) {
			currentLabel--;
			currentMc.gotoAndPlay('label_' + currentLabel);
			if (currentLabel < animOptions.sceneNum) {
				exportRoot.main_control_btns.main_control_next.visible = true;
			}
			if (currentLabel == 1) {
				exportRoot.main_control_btns.main_control_prev.visible = false;
			}
		} else {
			exportRoot.main_control_btns.main_control_prev.visible = false;
		}
		exportRoot.main_control_btns.main_control_next.addEventListener('click', nextScene);	
	}

	function pauseMainMC(){
		currentMc.stop();
		pauseSound();
		exportRoot.main_control_btns.main_control_play.visible = true;
		exportRoot.main_control_btns.main_control_pause.visible = false;
	}
	
	function playMainMC(){
		playSound();
		exportRoot.main_control_btns.main_control_play.visible = false;
		exportRoot.main_control_btns.main_control_pause.visible = true;
		currentMc.play();
	}

	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

//Code to support hidpi screens and responsive scaling.
function makeResponsive(isResp, respDim, isScale, scaleType) {		
    var lastW, lastH, lastS=1;		
    window.addEventListener('resize', resizeCanvas);		
    resizeCanvas();		
    function resizeCanvas() {			
        var w = lib.properties.width, h = lib.properties.height;			
        var iw = window.innerWidth, ih=window.innerHeight;			
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
        if(isResp) {                
            if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                sRatio = lastS;                
            }				
            else if(!isScale) {					
                if(iw<w || ih<h)						
                    sRatio = Math.min(xRatio, yRatio);				
            }				
            else if(scaleType==1) {					
                sRatio = Math.min(xRatio, yRatio);				
            }				
            else if(scaleType==2) {					
                sRatio = Math.max(xRatio, yRatio);				
            }			
        }			
        canvas.width = w*pRatio*sRatio;			
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;			
        stage.scaleY = pRatio*sRatio;			
        lastW = iw; lastH = ih; lastS = sRatio;            
        stage.tickOnUpdate = false;            
        stage.update();            
        stage.tickOnUpdate = true;		
    }
}

function subtitleOff(object){
	exportRoot.main_control_btns.main_control_subtitle_off.visible = false;
	exportRoot.main_control_btns.main_control_subtitle_on.visible = true;
	currentMc.JIMAKU.visible = false;
}

function blinkNext(){
	exportRoot.main_control_btns.main_control_next.blink.visible = true;
	exportRoot.main_control_btns.main_control_pause.visible = false;
	exportRoot.main_control_btns.main_control_play.visible = false;
}

function unBlinkNext(){
	exportRoot.main_control_btns.main_control_next.blink.visible = false;
}

function playPauseInit(){
	if (currentMc.paused) {
		exportRoot.main_control_btns.main_control_pause.visible = false;
		exportRoot.main_control_btns.main_control_play.visible = true;
	} else {
		exportRoot.main_control_btns.main_control_pause.visible = true;
		exportRoot.main_control_btns.main_control_play.visible = false;
	}
}

function mainCtrlOff(){
	var menuStt = getCookie('mainMenu');
	if(!menuStt){
		exportRoot.main_control_btns.alpha = 0;
		exportRoot.main_control_btns.visible = false;
		exportRoot.top_panel.main_control_on.visible = true;
		exportRoot.top_panel.main_control_off.visible = false;
	}
}

function subtitleOn(){
	currentMc.JIMAKU.visible = true;
	exportRoot.main_control_btns.main_control_subtitle_off.visible = true;
	exportRoot.main_control_btns.main_control_subtitle_on.visible = false;
}

function mainCtrlOn(){
	exportRoot.main_control_btns.alpha = 1;
	exportRoot.main_control_btns.visible = true;
	exportRoot.top_panel.main_control_on.visible = false;
	exportRoot.top_panel.main_control_off.visible = true;
}

function prevEnable(){
	exportRoot.main_control_btns.main_control_prev.visible = true;
}

function playParentFromChild(parent,position){
	parent.gotoAndPlay(position);
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }

function mainCtrlSetOff(){
	deleteCookie('mainMenu');
	mainCtrlOff();
}
function mainCtrlSetOn(){
	setCookie('mainMenu', 'on', 30)
	mainCtrlOn();
}

function enablePause(){
	exportRoot.main_control_btns.main_control_pause.visible = true;
	exportRoot.main_control_btns.main_control_play.visible = false;
}

function playPauseLast(){
	exportRoot.main_control_btns.main_control_pause.visible = false;
	exportRoot.main_control_btns.main_control_play.visible = false;
}

function nextSceneLast(){
	exportRoot.main_control_btns.main_control_next.visible = true;
	exportRoot.main_control_btns.main_control_next.addEventListener('click', playPauseLast);
}