var fName = "vhm212_sm_";
//レイアウト切り替えの有無
LayoutC = true;


function SetSceneAction(){
}
var arrTotalFrames = [2631];
var cTotalFrames = 0;
var arrFrmOffSet = new Array();
for (var i=0; i<arrTotalFrames.length; i++){
	cTotalFrames += arrTotalFrames[i];
	arrFrmOffSet[i] = 0;
	if (i != 0){
		for (var ii=0; ii<i; ii++){
			arrFrmOffSet[i] += arrTotalFrames[ii];
		}
	}
}

var currentMode = 'horizontal';

function playParentFromChild(parent,position){
	parent.gotoAndPlay(position);
}

function windowRotate(){
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	
	if(windowWidth>windowHeight){
		currentMode = 'horizontal';
	}else{
		currentMode= 'vertical';
	}
}
windowRotate();

window.onresize = function(){
	resizeCheck();
	windowRotate();
};

function unBlinkNext() {
	exportRoot.UIBtns.NextBtn.icon.gotoAndStop(0);
}

function goNext(){
	//window.open('vhm212_sm.html','_self');
	//nothing to happen
}
