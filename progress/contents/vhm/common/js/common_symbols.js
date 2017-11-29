(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,30);


(lib.play = function() {
	this.initialize(img.play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,213);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.UI閉じるボタンMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一時停止
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AAAATIguAwIgUgUIAvgvIgvguIAUgUIAuAvIAvgvIAUAUIgvAuIAvAvIgUAUg");
	this.shape.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 前へ次へ
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABahZQglglg1AAQg0AAgmAlQglAlAAA0QAAA1AlAlQAmAlA0AAQA1AAAlglQAmglAAg1QAAg0gmglg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EAEAEA","#999999"],[0,1],-40.5,-12.2,-40.5,13.5).s().p("AhaBaQgkglgBg1QABg0AkglQAmglA0AAQA1AAAlAlQAmAlAAA0QAAA1gmAlQglAlg1AAQg0AAgmglg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI閉じるボタンMC, new cjs.Rectangle(-13.7,-13.7,27.5,27.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("AipDBQhkAAAAhkIAAi6QAAhjBkAAIFTAAQBkAAAABjIAAC6QAABkhkAAg");
	this.shape.setTransform(27,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,54,38.7), null);


(lib.subtitleicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一時停止
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AhngVIDPAAAhRAWICjAA");
	this.shape.setTransform(0.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 再生
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EAEAEA","#999999"],[0,1],-35,-11.8,-35,13.6).s().p("Ah7BtQgpAAAAgoIAAiJQAAgoApAAID2AAQAqAAAAAoIAACJQAAAogqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtitleicon, new cjs.Rectangle(-16.5,-10.9,33.1,21.8), null);


(lib.plate2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg15AADIAAgFMBrzAAAIAAAFg");
	this.shape.setTransform(345,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg15AADIAAgFMBrzAAAIAAAFg");
	this.shape_1.setTransform(345,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.6)").s().p("Eg15ADcIAAm3MBrzAAAIAAG3g");
	this.shape_2.setTransform(345,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate2, new cjs.Rectangle(0,0,690,45), null);


(lib.main_control_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.6)").s().p("AdiEpIgiAAIhvAAIkgAAIiuAAIncAAIm5AAMgloAAAQg0AAAAg1IAAnoQAAg0A0AAMAloAAAIG5AAIHcAAICuAAIEgAAIBvAAIAiAAICZAAQA0AAAAA0IAAHoQAAA1g0AAg");
	this.shape.setTransform(209.5,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.main_control_bg, new cjs.Rectangle(0,0,419.1,59.5), null);


(lib.IFマーク5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一時停止
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAEAEA","#999999"],[0,1],-81.5,-17.6,-81.5,7.8).s().p("AAjB2IAAhYIhEAAIAABYIhLAAIAAh/IBshsIBtBsIAAB/g");
	this.shape.setTransform(0.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EAEAEA","#999999"],[0,1],-81.6,-8.2,-81.6,17.2).s().p("AB5BJIh5h1Ih4B1IgcAAICUiRICVCRgAA8glIAAgbIAoAAIAABBg");
	this.shape_1.setTransform(0.2,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.IFマーク5, new cjs.Rectangle(-14.7,-14.1,29.8,28.6), null);


(lib.IFマーク4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一時停止
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AhngVIDPAAAhRAWICjAA");
	this.shape.setTransform(0.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 再生
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EAEAEA","#999999"],[0,1],-35,-11.8,-35,13.6).s().p("Ah7BtQgpAAAAgoIAAiJQAAgoApAAID2AAQAqAAAAAoIAACJQAAAogqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.IFマーク4, new cjs.Rectangle(-16.5,-10.9,33.1,21.8), null);


(lib.IFマーク3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 再生
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAEAEA","#999999"],[0,1],0.5,-12.8,0.5,12.9).s().p("Ah4iAIDxCAIjxCBg");
	this.shape.setTransform(0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.IFマーク3, new cjs.Rectangle(-11.5,-12.9,24.3,25.9), null);


(lib.IFマーク2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一時停止
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAEAEA","#999999"],[0,1],2.2,-13.7,2.2,13.8).s().p("AAnCCIAAkDIBSAAIAAEDgAh4CCIAAkDIBTAAIAAEDg");
	this.shape.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.IFマーク2, new cjs.Rectangle(-12.5,-13,24.2,26), null);


(lib.IFマーク1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 前へ次へ
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAEAEA","#999999"],[0,1],2.7,-12.8,2.7,12.9).s().p("AhHABIDBiBIAAECgAh5CCIAAkDIAyAAIAACCIAACBg");
	this.shape.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.IFマーク1, new cjs.Rectangle(-13.1,-13,24.4,26), null);


(lib.homeicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 一時停止
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAEAEA","#999999"],[0,1],-81.5,-17.6,-81.5,7.8).s().p("AAjB2IAAhYIhEAAIAABYIhLAAIAAh/IBshsIBtBsIAAB/g");
	this.shape.setTransform(0.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EAEAEA","#999999"],[0,1],-81.6,-8.2,-81.6,17.2).s().p("AB5BJIh5h1Ih4B1IgcAAICUiRICVCRgAA8glIAAgbIAoAAIAABBg");
	this.shape_1.setTransform(0.2,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.homeicon, new cjs.Rectangle(-14.7,-14.1,29.8,28.6), null);


(lib.play_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.onRelease = function() {
		};
		this.useHandCursor = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg15AeFMAAAg8JMBrzAAAMAAAA8Jg");
	this.shape.setTransform(345,192.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.play_bg, new cjs.Rectangle(0,0,690,385), null);


(lib.play_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.play();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.play_1, new cjs.Rectangle(0,0,213,213), null);


(lib.helpass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 枠
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B5B22").s().p("AkkBrQgJAAgGgCIABABQgTgFgOgOIgBAAQgRgSgCgZIAAhRQgBgdAUgUIABAAQANgOATgEIABAAQAGgCAIAAIJIAAQAdAAATAUQAUAUABAdIAABMIgBAHIAAgCQgCAZgSASQgUAUgcAAgAkshQIgBAAQgMADgJAJQgNAMABASIAABQQABAQALALIAAABQAKAIALADIABAAIAIABIJIAAQASAAANgMQAMgNAAgPIABgCIAAgEIAAADIAAhMQgBgTgMgMIgBgBQgMgMgSAAIpIAAg");
	this.shape.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// 塗り
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBE6FF").s().p("AkkBSIgIgBIgBAAQgLgDgKgIIAAgBQgLgLgBgQIAAhQQgBgSANgMQAJgJAMgDIABAAIAIgBIJIAAQASAAAMAMIABABQAMAMABATIAABMIgBADQAAAPgMANQgNAMgSAAg");
	this.shape_1.setTransform(15,0);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-10.7,72.1,21.5);


(lib.b_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkqAyIAMgEQAHgDAKgGIAUgRQAGgFAFgFIAIgKIgZgSIgSgLIALgMIASAKIAYARQAIgNAEgJIAHgQIADgMIAVAFIgHAPIgJAUIgMAVIAQAMIAMAKIAHAIIgQAOIgKgMIgUgSIgOAPIgWATQgOAKgVAKgAAXA5IAAgQIBAAAIADgQIACgRIABgNIAAgHIg5AAIAAgRIBLAAIgCAYIgCARIgBAOIgCAPIAbAAIAAAQgAiOAwIAAgQICEAAIAAAQgACiAGIAAgRICJAAIAAARgAiDgfIAAgRIBrAAIAAARg");
	this.shape.setTransform(-4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-64,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-15,120,30);


(lib.jimaku = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_787 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(787).call(this.frame_787).wait(1));

	// 字幕
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgFQAHgHAIAAQAKAAAFAHQAHAFAAAJQAAAJgHAHQgFAGgKAAQgIAAgHgGgAgJgJQgEAEgBAFQABAGAEAEQAEAEAFABQAGgBAEgEQAFgEgBgGQABgFgFgEQgEgFgGABQgFgBgEAFg");
	this.shape.setTransform(409.3,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA5QAZgGAOgOQAMgMAAgQQAAgLgGgGQgGgFgIAAQgRACghALIgHgRQAYgEAVgFQAKgCAFAAQAOAAAJAIQAJAKABASQAAAYgRARQgPAPgZAHgAgdg3IAEgPQAiAIAZACIgDAPQgZgCgjgIg");
	this.shape_1.setTransform(399.6,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAwQgHgGABgIQgBgHAHgHQAHgHAOAAIAMABIgChDIAKAAQAHABgGAEIACAaQAVgBARgDIAAAKQgUAEgSAAIABAcQAaAHATAKIgGALQgXgLgQgFQgBAMgGAHQgIAHgOAAQgKAAgGgGgAgiAbQgDADAAAEQAAAJAOAAQAIAAADgDQAFgFgBgKQgHgCgFAAQgKAAgEAEg");
	this.shape_2.setTransform(388.6,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA0QgIgIAAgXIAAhTIANAAQAGABgEAEIAABOQAAAPAFAGQAHAHAOAAQAXAAAZgcIAKAMQgbAegfAAQgWAAgLgLg");
	this.shape_3.setTransform(377,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA9QgFgGAAgKQAAgJAGgGQAIgJARABIAPABIAAgUIgvABIAAgMIAvgBIAAgVIg6ACIAAgNIA6gCIAAgYIALAAQAHABgGADIAAATIAzgCIAAAMIgzADIAAAWIApgBIAAALIgpABIAAAXQAaAGAYAMIgHANQgXgOgUgGQAAARgIAIQgHAIgRAAQgNgBgIgHgAghAmQgEADAAAFQAAAEAEADQAEAFAJAAQAIgBAFgFQAFgFAAgNIgOgBQgMAAgFAFg");
	this.shape_4.setTransform(363.1,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOA2QAVgHAIgJQAKgJAAgPQAAgRgKgJQgLgMgTgCQgHAagNAbIALAOIgJAHIgJgKQgFAJgFAFQgIAIgJAAQgIAAgIgHQgIgJAAgPQAAgWAYgYQgEgTgCgRIAMAAQAGABgFAFQACANACAJQAQgJAQgDQADgJACgTIANADQAGADgGACIgFAUQAXABAOAOQAOAOAAAWQAAAVgNAMQgLAMgUAHgAg0AfQAAAJAFAFQADACADAAQAEAAAEgDQAEgEAHgMQgJgNgGgSQgPARAAARgAgbgMQAGAUAGAJQALgUAEgWQgOADgNAKg");
	this.shape_5.setTransform(348.1,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBHIAAhAIA/AAIAAA9IgMAAIAAgFIgoAAIAAAIgAAHAzIAoAAIAAggIgoAAgAhEA7QARgMALgPIgPgKIgCAIIgLgFQAIgXAFgdIgOAAIAAgMIAQAAIAFgdIAKACQAHACgHADIgCAWIAOAAIADgCIAJAGIgCADQgCAngIAVIANAKIgHANIgLgLQgKARgTAMgAgyALIAOAKQAFgQACggIgNAAQgEAUgEASgAA1gLIg6AHQgBABgBAAQgBABAAAAQgBAAAAgBQAAAAgBgBIgCgNIALAAQAGgUAHghIAPAEQAEAEgHABIgPArIAmgDIgNgTIAKgFQAPAQALAWIgMAGg");
	this.shape_6.setTransform(332.5,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBHQgUAAgIgIQgGgGAAgKQAAgKAIgIQANgMAXgKQAAgHgCgCQgDgDgIAAQgNAAgZAWIgLgLQAegRALgWIgjACIgDgMIAqgCIAIgZIALADQAGADgGACIgFAQQAVgBAWgEIABAOIgvADQgHANgGAHQAHgCAIAAQAGAAAFAFQAEAEABAJIAqgOIAFAOQgYAEgWAIIAAAcIgNAAIAAgXQgRAJgGAFQgGAHgBAHQABAEADAEQAEAEANAAIAzAAIAAAMg");
	this.shape_7.setTransform(317.4,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA+QA8gZANg8IgxAAQgOAXgQAOIgNgIQAhgdAJgnIAPAFQADACgFACIgGAQIAsAAIAFgDIALALQAFAEgGACQgMBDhCAegAAYg8IAIgHQALAKAJAMIgJAHQgKgOgJgIgAArhBIAIgIQAJAJAJALIgIAIQgKgNgIgHg");
	this.shape_8.setTransform(303.3,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3A3IgFgRQBQgCAchAIANAKQghBEhNADQgCAFgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgAg6gsIALgNQANAIAUATIgMAMQgRgQgPgKg");
	this.shape_9.setTransform(288.7,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAApIAAgOICBAAIAAAOgAgwgaIAAgOIBbAAIAAAOg");
	this.shape_10.setTransform(274.5,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFAHIAAgNICLAAIAAANg");
	this.shape_11.setTransform(259.6,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AyIACgEIAAhmIANAAQAGAAgGAEIAABdQA5gLAbgvIAKALQgeA0hFALg");
	this.shape_12.setTransform(245.5,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglA/IAAh8IAMAAQAIABgGADIAAAoQAeAJAfAOIgHAOQghgRgVgEIAABAg");
	this.shape_13.setTransform(233.6,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXA4IAAgMIAiAAIAAhjIAMAAIAABvg");
	this.shape_14.setTransform(223.4,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA6QgIgIAAgLQAAgHAGgGQAGgGAIAAQALAAAHAHQAJAJADATQAKgCAHgGQAHgIAAgMQAAgOgIgIQgIgHgRAAQgUAAgLAHQgLAHgRAUIgKgKQAtgsAWgeIgpAFIgEgPQAfAAAWgDIAGgCIAHAGQAHAHgKACIglApQAMgDAJAAQAYAAALAMQALAKAAARQAAASgKAKQgPAPgXAAQgVAAgKgKgAgOAhQgDADAAAEQAAAFAFAFQAGAHAJAAIAFAAQgBgRgGgFQgDgFgFAAQgFAAgCADg");
	this.shape_15.setTransform(212.7,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjBFIAAgzIgcAiIgKgKIAZgdIANgRIAAgQIgcAKIgEgNIAggIIAAglIALAAQAFABgEAEIAAAcIAHAEQAGACgHAEIgGALIAAAEQAcgbAPAAQATAAgCAZIgDAwQAAAJAIABQAIAAAEgFQAFgHAEgKIALAJQgHAMgFAGQgIAIgLAAQgXAAABgXIADgvQABgMgIAAQgKAAgeAdIAAA/g");
	this.shape_16.setTransform(198,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBDIgFgOIAPAAQAeAAAIgIQAHgHAAgJQAAgIgGgFQgGgGgNAAQgaAAgXAaIgMgBIAHhBIANACQAGADgGACIgFAoQAWgSAbAAQARAAAKAJQAIAIAAANQAAAOgKALQgNANgiAAgAgkg2IAGgLQARAEAdAKIgGANQgWgJgYgHg");
	this.shape_17.setTransform(183.6,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCA7QAVgYAAghIAAgQIgsABIAAgOQAVABAXgCIAAgmIALAAQAFACgEADIAAAgQAQAAANgDIACANIgfADIAAAUQAAAkgVAbgAg9ADQAAgkAGgaIAMACQAIACgHAEQgGAbAAAbQAAAWAFAZIgOACQgEgWAAgbg");
	this.shape_18.setTransform(170,14);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhCA6QAlgIAQgKQgNgLgIgRIgKAAIAAgKIBFAAIADgDIAMAFQADADgFABQgPAUgPANQAcAMAfACIgEAOQgrgHgVgOQgcAPgiAIgAgCAiQAMgKAJgMIgnAAQAFAMANAKgAA0AJIAAgTIhpAAIAAATIgMAAIAAgeIBUAAQAJgPAIgQIAOAHQAAABABAAQAAAAgBABQAAAAgBABQgBAAgBABIgOAUIAgAAIAAAegAg1goIANgIQAIAIAFAJIgMAIQgGgKgIgHgAgOgrIAMgHQAGAHAGAMIgMAGQgFgKgHgIgAg4g9QBHgDAagGIAKAMQACAFgHgDQgpAEg8ACg");
	this.shape_19.setTransform(154.2,13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhIBAQASgcAOgsIgbADIgBgOIAfgCQAGgTADgUIANAEQAIADgIADIgHAcIAPgBQAIAAAFAEQAHAIAAAZQAAAkgLALQgFAGgIAAQgMAAgMgOIAIgLQAKAKAFAAQADAAADgDQAGgGAAggQAAgQgDgEQgCgCgFAAIgQABQgNAugSAhgAAUgbIAMgIQAZAaAKAkIgOAGQgLgogWgUgAAcguIAHgHQAMAGAOALIgJAIQgOgMgKgGgAApg8IAHgIQALAHAOALIgIAHIgYgRg");
	this.shape_20.setTransform(138.3,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhABIIAAgzIAvAAIAAAwIgLAAIAAgEIgZAAIAAAHgAg1A3IAZAAIAAgYIgZAAgAAABHIAAg9IAZAAIAAgZIgjAAIAAgMIAjAAIAAgYIgdADIgDgMQAqgDAYgIIAIALQAAAFgEgDQgOAEgMABIAAAaIAiAAIAAAMIgiAAIAAAZIAaAAIAAA7IgMAAIAAgFIgoAAIAAAHgAALA0IAoAAIAAgeIgoAAgAg+ALIAAgLIAqAAIAAALgAg+gKIAAgMIAqAAIAAAMgAhGghIAAgMIA6AAIAAAMgAg+g3IAAgMIAqAAIAAAMg");
	this.shape_21.setTransform(122,13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABBGQgKAAAAgLIAAgMIghAAIAAALIgKAAIAAg8IBlAAIAAAxIgvAAIAAAGQAAAFAFAAIApAAQAIAAABgOIANACQAAAYgUAAgAACAlIAkAAIAAgKIgkAAgAgqAlIAhAAIAAgKIghAAgAACARIAkAAIAAgKIgkAAgAgqARIAhAAIAAgKIghAAgAgJgGIAAgkIgwAAIAAAZIgMAAIAAggIA8AAIAAgKIgyAAIAAgKIBwAAIAAAKIgyAAIAAAKIA+AAIAAAeIgMAAIAAgXIgyAAIAAAkgAAKgLIAAgHIAkAAIAAAHgAgxgLIAAgHIAiAAIAAAHgAAKgaIAAgIIAkAAIAAAIgAgxgaIAAgIIAiAAIAAAIg");
	this.shape_22.setTransform(106.2,13.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWA4IAAhvIAuAAIAAAMIgiAAIAABjg");
	this.shape_23.setTransform(94.3,12.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUgGIAJgNQATAMANAOIgLANQgOgRgQgJg");
	this.shape_24.setTransform(83,19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAHA6QAZgCAJgJQAHgHAAgNQAAgNgHgHQgIgHgOgCQgKAggMANIADAIIgLAJIgDgHQgQAOgMAAQgHAAgGgHQgHgGAAgMQAAgVAOgPQAJgIAJgFIACgXIgbABIgCgOIAdgBIACgbIAMAAQAGACgFADIgCAWQAdgCAWgDIACANQgaAEgbABIgCAUQAJgDAPgBIACgKIAMACQAFABgEADIgBAFQAUACAKAKQAMAMAAASQAAARgLAMQgLAKgaAFgAgnAPQgLAKAAATQAAAFADADQACACADAAQAKAAAMgMQgHgTgBgRQgFACgGAHgAgPAAQAAAQAGAPQAJgOAEgTQgKAAgJACg");
	this.shape_25.setTransform(71.8,13.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAIBFQggAAgNgNQgJgKAAgLQgBgMAIgHQAKgLAZAAQAWAAAEACQgPgRgGgOQgYADgZAAIgEgNQAfAAASgCQgGgRgCgPIAMAAQAGABgFAEQADAMAFAOQAWgBAPgFIAEAPIgkADQANAYAZARIgKAKQgXgKgVAAQgVAAgHAIQgFAEAAAHQAAAGAGAFQAJAJAgAAIAVAAIgDAOg");
	this.shape_26.setTransform(58.2,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHA2IAAgSIARAAIAAASgAgFASIAAgJQAAgJAGgDIAVgLQAHgEAAgHQAAgFgDgEQgGgFgRAAQgRAAgIAHQgGAHAAAHIAAADIgRAAIAAgDQAAgGADgHQADgFAEgEQANgNAZAAQAYAAAKAKQAJAJAAAIQAAAIgEAFQgFAHgIADQgMAFgGAEQgDADAAAEIAAAFg");
	this.shape_27.setTransform(246.2,13.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhFA8QATgcANgsIgbADIgBgNIAfgCQAGgUAEgUIANAFQAHADgIACIgHAcIAPgBQAIAAAFAFQAHAHAAAZQAAAlgLAKQgFAGgIAAQgMAAgMgOIAIgLQAKAKAFAAQAEAAACgCQAGgHAAggQAAgQgDgEQgCgBgFAAIgQABQgNAtgSAhgAAYgfIALgIQAZAbAKAjIgOAGQgLgogVgUg");
	this.shape_28.setTransform(230.4,13.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag5A+QAQgnAHgqIgbABIgDgMQASAAAOgCIAEghIANACQAHACgGADIgFAZIAagFIACAMIgeAGQgJA2gOAggAAlBBQgYAAgUgLIAFgLQAQAIAXABIAbAAIAAANgAAAgCQAbgLAgABIACAMQgkABgUAIg");
	this.shape_29.setTransform(214.9,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRBCIAAggQgbAKgSAEQgBABAAABQgBABAAAAQgBAAAAAAQgBAAAAgBIgDgQIAOgCIAAhWIgMAAIAAgMIBPAAIAAAMIgRAAIAAB4gAgqAeQAMgDANgFIAAgPIgZAAgAgqgCIAZAAIAAgVIgZAAgAgqggIAZAAIAAgWIgZAAgAgBA2QASgNALgOQgQgXgEgmIgHAAIAAgNIA2AAIACgDIAKAKIgCACQgFAmgPAbQAJANAQAKIgHAOQgQgNgKgNQgNAOgRAOgAAkAQQAJgPAFgjIgeAAQADAdANAVg");
	this.shape_30.setTransform(157.2,14.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHBFQgZAAgKgKQgHgIgBgMQAAgJAIgHQAKgLAgAAQALAAALACIgPgRQgcADgkAAIgCgMQAgAAAcgDIgGgPQgXACgZAAIgBgNQAZABAVgCQgEgLgCgPIAOAAQAGABgGAEIADATQARgCARgEIADAMIghAGQACAHAFAIQAVgDATgFIAFANQgQAEgWADQAKALAPALIgLALQgXgFgMAAQgZAAgHAIQgFAEABAFQAAAGAEAEQAEAFAXAAIAlAAIgCAOg");
	this.shape_31.setTransform(142.4,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAsBFIgCgLIAKAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAAhLIgYAAIgWAAIAAgxIA6AAIAAB+QAAAMgKgBgAAUgdIAiAAIAAgKIgiAAgAAUgwIAiAAIAAgKIgiAAgAhBBFIAAiJIA6AAIAAAxIguAAIAABYgAg1gdIAiAAIAAgKIgiAAgAg1gwIAiAAIAAgKIgiAAgAAPBCIAAgOIg2AGQAAAEgDgDIgCgNIARgBIAAgtIgPAAIAAgKIBWAAIAAAKIgSAAIAABCgAgQAsIAfgCIAAgIIgfAAgAgQAYIAfAAIAAgHIgfAAgAgQAHIAfAAIAAgHIgfAAg");
	this.shape_32.setTransform(127.7,14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag7AnQgEgLAAgiQAAgZACgZIAOADQAHACgHAEQgCAXAAATQAAAZADAKQADALAGAAQAHAAAFgKIAGgPIANAJQgGAOgGAHQgJALgJAAQgPAAgIgSgAARgoIANgIQAcAeAGApIgRAEQgHgrgXgYg");
	this.shape_33.setTransform(112.2,13.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgbAQQgJgIAAgGQAAgHAHgGQAnglAMgUIAMAJQAFAGgJgCQgJAOgnAmQgCADAAABQAAADACACQAiAcAVAYIgLALQgWgZgfgcg");
	this.shape_34.setTransform(86.9,13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjBFIAAgzIgcAiIgKgKIAZgdIANgRIAAgQIgcAKIgEgNIAggIIAAglIALAAQAFABgEAEIAAAcIAHAEQAGACgHAEIgGALIAAAEQAcgbAPAAQATAAgCAZIgDAwQAAAJAIABQAIAAAEgFQAFgHAEgKIALAJQgHAMgFAGQgIAIgLAAQgXAAABgXIADgvQABgMgIAAQgKAAgeAdIAAA/g");
	this.shape_35.setTransform(74.2,13.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYBDQgUAAgIgIQgJgIAAgLQAAgNAKgKQAIgIARgJQgDgJgBgLIgCgqIANAAQAHACgGADIABAeQABANAEAJQAQgIAdgIIAHAQQg7AKgUAUQgHAHAAAHQAAAGAFAEQAEAFAOAAIA7AAIAAANgAARgtIAGgJIAZAQIgGAIIgZgPgAAfg6IAGgIIAZAQIgHAIIgYgQg");
	this.shape_36.setTransform(59.5,13.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHA5IAAgQIAPAAIAAAQgAgEAdIgDg8IAAgZIAQAAIAAAZIgFA8g");
	this.shape_37.setTransform(169.1,13.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_38.setTransform(162.3,15.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAqArIAAg0QAAgIgBgEQgBgDgEgDQgEgCgFAAQgIAAgGAFQgGAHAAAMIAAAwIgNAAIAAg1QAAgKgDgFQgEgEgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAArIgOAAIAAhTIAMAAIAAAMQAEgGAHgDQAGgFAJAAQAJAAAGAFQAFAEACAGQAKgPAQAAQAMAAAHAHQAGAIAAANIAAA5g");
	this.shape_39.setTransform(151.2,15.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVArIAAhTIAMAAIAAANQAFgIAEgDQADgEAFAAQAHABAIAEIgGANQgEgDgGAAQgEAAgDADQgDADgCAEQgDAIAAAJIAAArg");
	this.shape_40.setTransform(138.1,15.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_41.setTransform(130.3,15.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAguIgKAAIAAgMIAKAAIAAgUIANgJIAAAdIAOAAIAAAMIgOAAIAAAvQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFABIAGAAIACANIgLABQgHgBgDgCg");
	this.shape_42.setTransform(123.7,14);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLA6IAAhHIgMAAIAAgLIAMAAIAAgJQAAgIACgEQACgFAFgEQAEgDAJAAIANABIgCAMIgIAAQgHAAgCACQgDADAAAIIAAAHIAQAAIAAALIgQAAIAABHg");
	this.shape_43.setTransform(119.5,13.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAkQgHgGAAgLQAAgGADgFQACgEAFgEQAFgCAFgBIAMgDQARgBAHgDIAAgEQAAgJgDgDQgGgFgKABQgKAAgEADQgFAEgCAIIgOgCQACgJAFgFQADgFAJgDQAIgEAJAAQALABAHACQAGACADAEQAEAEABAGIABANIAAASQAAATABAGIADAKIgOAAIgEgKQgHAGgHADQgHADgIAAQgNAAgIgIgAgCAFIgNADQgDACgCACQgCADAAAEQAAAGAEADQAFAFAHAAQAIAAAGgEQAHgDADgHQABgFAAgJIAAgFQgHADgOACg");
	this.shape_44.setTransform(112.5,15.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAguIgKAAIAAgMIAKAAIAAgUIANgJIAAAdIAOAAIAAAMIgOAAIAAAvQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFABIAGAAIACANIgLABQgHgBgDgCg");
	this.shape_45.setTransform(101.5,14);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgeAkQgHgGAAgLQAAgGACgFQADgEAFgEQAEgCAGgBIANgDQAQgBAHgDIAAgEQAAgJgDgDQgGgFgKABQgKAAgEADQgFAEgCAIIgOgCQACgJAFgFQADgFAJgDQAIgEAJAAQALABAHACQAGACADAEQAEAEABAGIABANIAAASQAAATAAAGIAEAKIgOAAIgEgKQgHAGgHADQgHADgIAAQgNAAgIgIgAgCAFIgNADQgEACgBACQgCADAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAGgDADgHQACgFAAgJIAAgFQgHADgOACg");
	this.shape_46.setTransform(94.7,15.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_47.setTransform(85.8,15.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgjA6IAAhyIANAAIAAAMQAEgHAGgDQAGgDAHgBQALABAHAFQAJAGAEAKQAEAJAAANQAAAMgEAKQgFAJgJAGQgIAFgKABQgGAAgFgDQgHgDgDgFIAAAogAgQgmQgGAJAAAPQAAAQAGAHQAHAIAJAAQAIAAAHgIQAHgIAAgPQAAgQgHgJQgGgHgJgBQgJAAgHAJg");
	this.shape_48.setTransform(77.1,16.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_49.setTransform(68,15.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAgA5IgQgYIgKgPIgIgIIgGgDIgJgBIgSAAIAAAzIgOAAIAAhxIAxAAQAPAAAJADQAHADAFAIQAFAIAAAJQAAAMgIAJQgIAHgQACIAJAGQAGAGAHAJIAUAfgAgjgGIAhAAQAJAAAHgCQAGgCADgFQACgEAAgGQABgIgHgFQgFgGgNAAIgkAAg");
	this.shape_50.setTransform(58.3,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:183.6}},{t:this.shape_16,p:{x:198}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:363.1}},{t:this.shape_3,p:{x:377}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},81).to({state:[]},105).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_17,p:{x:98.1}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_16,p:{x:173.2}},{t:this.shape_4,p:{x:188.2}},{t:this.shape_3,p:{x:202.1}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},304).to({state:[]},49).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},51).to({state:[]},89).wait(109));

	// BG
	this.instance = new lib.plate2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(788));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,690,45);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.helpass("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-36,-10.7,72.1,21.5), null);


(lib.main_control_subtitle_on = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(28.4,21.5,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AALAuIgXhEIAAAAIAABEIgMAAIAAhbIAOAAIAXBEIABAAIAAhEIALAAIAABbg");
	this.shape.setTransform(48.2,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgPAoQgKgLAAgdQAAgcAKgKQAGgHAJAAQAJAAAHAHQAKAKAAAcQAAAdgKALQgHAGgJAAQgJAAgGgGgAgIgfQgHAGAAAZQAAAbAHAGQAEAEAEAAQAFAAAEgEQAGgGAAgbQAAgZgGgGQgEgFgFAAQgEAAgEAFg");
	this.shape_1.setTransform(42.3,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgFA2IAAgXIgSAAIAAARIgJAAIAAgVQgHAFgLAEIgDgIQARgGALgKIgZAAIAAgHIAfAAIAEgFIgUAAIAAgeIANAAIAAgGIgcAAIAAgIIAcAAIAAgJIAIAAQABABAAAAQABAAAAAAQAAABAAAAQgBABgBAAIAAAGIAZAAIAAgJIAIAAQAEABgEACIAAAGIAeAAIAAAIIgeAAIAAAGIAQAAIAAAeIgpAAIgEAFIA7AAIAAAHIgXAAQAJAIATAFIgDAJQgKgDgHgEIAAAPQAAAIgHgBIgIAAIgBgJIAFAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgHIgWAAIAAAXgAADAQQABAAABAAQAAAAAAABQAAAAAAAAQgBABgBAAIAAAGIAZAAQgIgFgHgHIgcAAQgEAGgHAGIAVAAIAAgIgAgbgGIA2AAIAAgHIg2AAgAgbgSIA2AAIAAgHIg2AAgAgOgeIAZAAIAAgGIgZAAg");
	this.shape_2.setTransform(27.3,40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgNA0IgCgJIALAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgYIgxAAIAAgJIAxAAIAAgLIAEABIAMgIIgsAAIAAgJIA2AAIACgCIAIAIIgDABIgZAOIAAAGIAuAAIAAAJIguAAIAAAbQAAAIgHAAgAgwgOIAAgYIAsAAIAAgNIAJAAQAFABgEADIAAAJIAsAAIAAAXIgKAAIAAgOIhOAAIAAAPg");
	this.shape_3.setTransform(15.2,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance_1 = new lib.subtitleicon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.7,16);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance_1.cache(-18,-13,37,26);

	this.instance_2 = new lib.IFマーク4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.7,16);
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 30, 60, 0)];
	this.instance_2.cache(-18,-13,37,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-7.5,76.6,58.1);


(lib.main_control_subtitle_off = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(28.4,21.5,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AgYAuIAAhbIAxAAIAAAJIgmAAIAAAfIAcAAIAAAIIgcAAIAAArg");
	this.shape.setTransform(51.3,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AgYAuIAAhbIAxAAIAAAJIgmAAIAAAfIAcAAIAAAIIgcAAIAAArg");
	this.shape_1.setTransform(45.3,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("AgPAoQgKgLAAgdQAAgcAKgKQAGgHAJAAQAKAAAFAHQALAKAAAcQAAAdgLALQgFAGgKAAQgJAAgGgGgAgIgfQgHAGABAZQgBAbAHAGQAEAEAEAAQAEAAAFgEQAGgGAAgbQAAgZgGgGQgFgFgEAAQgEAAgEAFg");
	this.shape_2.setTransform(39.3,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AgEA2IAAgXIgSAAIAAARIgKAAIAAgVQgHAFgKAEIgEgIQARgGALgKIgZAAIAAgHIAfAAIAEgFIgUAAIAAgeIANAAIAAgGIgcAAIAAgIIAcAAIAAgJIAIAAQABABAAAAQABAAAAAAQAAABAAAAQgBABAAAAIAAAGIAZAAIAAgJIAHAAQAEABgDACIAAAGIAdAAIAAAIIgdAAIAAAGIAOAAIAAAeIgnAAIgFAFIA8AAIAAAHIgZAAQAKAIATAFIgDAJQgLgDgGgEIAAAPQAAAIgIgBIgHAAIgCgJIAGAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgHIgVAAIAAAXgAAEAQQAAAAABAAQAAAAAAABQAAAAAAAAQgBABAAAAIAAAGIAYAAQgIgFgHgHIgbAAQgFAGgIAGIAXAAIAAgIgAgbgGIA1AAIAAgHIg1AAgAgbgSIA1AAIAAgHIg1AAgAgNgeIAZAAIAAgGIgZAAg");
	this.shape_3.setTransform(24.3,40.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("AgNA0IgDgJIAMAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgYIgxAAIAAgJIAxAAIAAgLIADABIAOgIIgsAAIAAgJIA1AAIACgCIAIAIIgDABIgZAOIAAAGIAuAAIAAAJIguAAIAAAbQAAAIgGAAgAgvgOIAAgYIArAAIAAgNIAJAAQAFABgEADIAAAJIAsAAIAAAXIgKAAIAAgOIhOAAIAAAPg");
	this.shape_4.setTransform(12.2,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance_1 = new lib.IFマーク4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.7,16);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 50, 0, 0, 0)];
	this.instance_1.cache(-18,-13,37,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-7.5,76.6,58.1);


(lib.main_control_prev = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.7,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgPAsQgGgGAAgJQAAgFAEgFQAFgEAGAAQAHAAAGAFQAGAHADAOQAHgBAFgFQAGgGAAgJQAAgKgGgHQgGgFgNAAQgPAAgIAFQgIAGgNAPIgIgHQAighAQgXIgeAEIgDgLQAXAAARgDIAEgBIAFAFQAFAEgHACIgbAfQAJgCAGAAQASAAAIAIQAJAIAAANQAAANgIAIQgLALgRAAQgQAAgHgHgAgKAZQgDACAAADQAAAEAEAEQAFAEAGAAIAEAAQgBgMgEgEQgDgDgDAAQgEAAgBACg");
	this.shape.setTransform(7.8,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AghAqQAdgGAEgVIgfAAQgCAVgMANIgHgIQALgLAAgSIAAgtIBSAAIAAAeIgJAAIAAgDIg/AAIAAANIAfAAIAAgKIAJAAQABAAAAAAQABAAAAABQAAAAgBABQAAAAgBABIAAAHIAoAAIAAAIIgjAAQAGASAhAHIgEAKQgfgIgLgXQgGAYggAIgAgfgPIA/AAIAAgJIg/AAgAgugpIAAgJIBdAAIAAAJg");
	this.shape_1.setTransform(-4.1,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_3
	this.instance_1 = new lib.IFマーク1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.1,-6.2);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance_1.cache(-15,-15,28,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-29.7,76.6,58.1);


(lib.main_control_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.7,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0E2B4").s().p("AgyAyIAAgJIAwAAIAAgcIgfAAIAAgJIAfAAIAAgUIgYAAQgGAOgLAKIgHgHQARgQADgaIAKACQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABIgDALIAVAAIAAgYIAIAAQAEABgDACIAAAVIAmAAIAAAJIgmAAIAAAUIAhAAIAAAJIghAAIAAAcIAsAAIAAAJg");
	this.shape.setTransform(7.9,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0E2B4").s().p("AglAyIAAgcIgQAAIAAgIIAQAAIAAgqIAhAAIAAgMIguAAIAAgJIBkAAIAAAJIguAAIAAAMIAiAAIAAAqIAQAAIAAAIIgQAAIAAAVQAAAFgHABIgQAAIgCgJIAOAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgPIg4AAIAAAcgAAEAOIAYAAIAAgNIgYAAgAgcAOIAYAAIAAgNIgYAAgAAEgHIAYAAIAAgMIgYAAgAgcgHIAYAAIAAgMIgYAAg");
	this.shape_1.setTransform(-4.2,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance_1 = new lib.IFマーク3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.4,-6.2);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 70, 20, 0)];
	this.instance_1.cache(-13,-15,28,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-29.7,76.6,58.1);


(lib.main_control_pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.7,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag1AwIAAgLIAWAAIAAg8IAKAAQAFABgEADIAAA4IAUAAIAAhUIAKAAQAFABgEADIAAAdIAfAAIAAAKIgfAAIAAApIArAAIAAALg");
	this.shape.setTransform(19.8,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoA3IAAg7IgIALIgFgLQAQgQAFggIAKACQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgFAUgEAIIACABQABAAAAABQAAAAAAAAQAAAAgBABQAAAAgBABIAABHgAABA1IgBgJIAKAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAAgRIgZAAIAAgJIA3AAIAAAJIgVAAIAAAVQAAAHgHAAgAgZATIAAgTIBPAAIAAASIgJAAIAAgKIg9AAIAAALgAgJgGIAAgWIAwAAIAAAWgAgCgOIAhAAIAAgHIghAAgAgWgiIAAgJIAfAAIAAgKIAJAAQABAAAAAAQABAAAAABQAAAAgBAAQAAABgBAAIAAAIIAgAAIAAAJg");
	this.shape_1.setTransform(7.8,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AARA2IgCgJIAIAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgcIgmAAIAAgJIAmAAIAAgLIgsAAIAAArIgIAAIAAgDIgPAAIAAAIIgIAAIAAhVIAfAAIAAAcIAcAAIAAgNIgTAAIAAgJIATAAIAAgQIAJAAQAEAAgEACIAAAOIAYAAIAAAJIgYAAIAAANIAhAAIAAAJIgRAAIAAALIAOAAIAAAJIgOAAIAAAfQAAAIgHAAgAgqAaIAPAAIAAgaIgPAAgAgqgJIAPAAIAAgZIgPAAgAgEAYIAHgGIAKAOIgIAGQgFgKgEgEg");
	this.shape_2.setTransform(-3.9,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgxAFIAAgJIBiAAIAAAJg");
	this.shape_3.setTransform(-16.2,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance_1 = new lib.IFマーク2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.4,-6.2,1,1,0,0,180);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance_1.cache(-14,-15,28,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-29.7,76.6,58.1);


(lib.main_control_home = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(28.4,21.5,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgzAFIAAgJIBnAAIAAAJg");
	this.shape.setTransform(60.2,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgpAaIAAgJIAxAAIABgiIglAAIAAgJIAvAAIgBArIAYAAIAAAJg");
	this.shape_1.setTransform(49.5,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgwAfIAAgLIBhAAIAAALgAgkgTIAAgLIBEAAIAAALg");
	this.shape_2.setTransform(39.2,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AglAkQAdgPAMgUQgMgGgKgFIAGgKQAKAFAMAHQAGgNAFgYIAMAFQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAgBABQgGAXgHANIASAMIgFALIgSgNQgRAXgYAOg");
	this.shape_3.setTransform(29.4,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgwAiQAxggAOgfIgyADIgCgLIA2gDIAGgBIAHAHQADAEgFABIgTAcQAVAPATAUIgJAIQgUgVgSgOQgRAUgYAPg");
	this.shape_4.setTransform(19.6,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgzAFIAAgJIBnAAIAAAJg");
	this.shape_5.setTransform(8.5,40.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AAbAiIAAgGIhAAAIAAgKIBAAAIAAgoIhAAAIAAgLIBLAAIAABDg");
	this.shape_6.setTransform(-2.3,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.instance_1 = new lib.homeicon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.6,16);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance_1.cache(-17,-16,34,33);

	this.instance_2 = new lib.IFマーク5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.6,16);
	this.instance_2.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 30, 60, 0)];
	this.instance_2.cache(-17,-16,34,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-7.5,77.8,58.1);


(lib.main_control_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.UI閉じるボタンMC();
	this.instance.parent = this;
	this.instance.setTransform(3.5,-7.6,1,1,0,0,180);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance.cache(-16,-16,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({mode:"synched",startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-20.9,26.5,26.5);


(lib.top_panel = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Button ON
	this.main_control_on = new lib.b_menu();
	this.main_control_on.name = "main_control_on";
	this.main_control_on.parent = this;
	this.main_control_on.setTransform(283.1,-172.5,0.976,1.096);
	this.main_control_on.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.main_control_on.cache(-66,-17,124,34);

	this.timeline.addTween(cjs.Tween.get(this.main_control_on).wait(1));

	// Button OFF
	this.main_control_off = new lib.b_menu();
	this.main_control_off.name = "main_control_off";
	this.main_control_off.parent = this;
	this.main_control_off.setTransform(283.1,-172.5,0.976,1.096);
	this.main_control_off.filters = [new cjs.ColorFilter(1, 1, 1, 1, 70, 0, 0, 0)];
	this.main_control_off.cache(-66,-17,124,34);

	this.timeline.addTween(cjs.Tween.get(this.main_control_off).wait(1));

}).prototype = getMCSymbolPrototype(lib.top_panel, new cjs.Rectangle(220.6,-189,117.1,32.9), null);


(lib.NextFileBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(16));

	// Layer_3
	this.play_img = new lib.play_1();
	this.play_img.name = "play_img";
	this.play_img.parent = this;
	this.play_img.setTransform(345,192.5,1,1,0,0,0,106.5,106.5);

	this.timeline.addTween(cjs.Tween.get(this.play_img).wait(20));

	// レイヤー 2
	this.instance = new lib.play_bg();
	this.instance.parent = this;
	this.instance.setTransform(345,411.5,1,2.138,0,0,0,345,192.5);
	this.instance.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleY:1,y:192.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,690,823);


(lib.yogoOnBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(15,0);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B5B22").s().p("AAEAuQAMgGALgNQgEgTAAgSIgsAAIAAgHIALAAIgDgOIgGAAIAAgIIAPAAIAAgNIAIAAQAEAAgEACIAAALIAPAAIAAAIIgDAAIgGAOIANAAIAAghIAIAAQABAAAAAAQABABAAAAQAAAAgBABQAAAAgBABIAAAeIAVAAIAAAHIgVAAIACAbQAFgIAEgLIAHADQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBABQgDALgJANQAEALAEABQACAAABgKIAIADQgCAOgGADQgIACgIgQQgKALgMAIgAgCgRIAFAAIAFgOIgNAAgAg0A0IAAglIAdAAIAAAjIgIAAIAAgDIgNAAIAAAFgAgsAoIANAAIAAgRIgNAAgAgPArIAAguIAfAAIAAAoIgXAAIAAAGgAgHAeIAPAAIAAgJIgPAAgAgHANIAPAAIAAgJIgPAAgAgxAHIAAgIIAXAAIAAAIgAgxgIIAAgJIAXAAIAAAJgAAigoIAHgEQAHAIACAIIgIAFQgCgJgGgIgAg2gZIAAgJIAfAAIAAAJgAgxgpIAAgJIAXAAIAAAJg");
	this.shape.setTransform(26.9,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B5B22").s().p("AgxArQAZgLAAgdIgZAAIAAgIIAZAAIAAgTIgGAAQgFAIgHAHIgHgHQAOgMAFgXIAKADQADABgFACIgFAMIAdAAIAAAJIgRAAIAAATIAWAAIAAAIIgWAAIgBAMQAKAHAMAPIgGAJIgSgXQgFARgTAMgAAMAwIAAhUIAmAAIAABTIgJAAIAAgHIgUAAIAAAIgAAVAfIAUAAIAAg6IgUAAg");
	this.shape_1.setTransform(15,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B5B22").s().p("Ag1AvIAAgJIA5AAQAGgMAFgPIAKAEQAAABABAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgKAVIAoAAIAAAJgAgZARIAJgGQAGAIAGAMIgKAFQgGgNgFgGgAgjANIAAgnIBGAAIAAAmIgJAAIAAgDIg0AAIAAAEgAgaABIA0AAIAAgSIg0AAgAgvglIAAgJIBeAAIAAAJg");
	this.shape_2.setTransform(3.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.helpass("synched",0,false);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.yogoOnBtn, new cjs.Rectangle(-21,-10.7,72.1,21.5), null);


(lib.yogoOffBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345798").s().p("AAEAuQAMgGALgNQgEgTAAgSIgsAAIAAgHIALAAIgDgOIgGAAIAAgIIAPAAIAAgNIAIAAQAEAAgEACIAAALIAPAAIAAAIIgDAAIgGAOIANAAIAAghIAIAAQABAAAAAAQABABAAAAQAAAAgBABQAAAAgBABIAAAeIAVAAIAAAHIgVAAIACAbQAFgIAEgLIAHADQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBABQgDALgJANQAEALAEABQACAAABgKIAIADQgCAOgGADQgIACgIgQQgKALgMAIgAgCgRIAFAAIAFgOIgNAAgAg0A0IAAglIAdAAIAAAjIgIAAIAAgDIgNAAIAAAFgAgsAoIANAAIAAgRIgNAAgAgPArIAAguIAfAAIAAAoIgXAAIAAAGgAgHAeIAPAAIAAgJIgPAAgAgHANIAPAAIAAgJIgPAAgAgxAHIAAgIIAXAAIAAAIgAgxgIIAAgJIAXAAIAAAJgAAigoIAHgEQAHAIACAIIgIAFQgCgJgGgIgAg2gZIAAgJIAfAAIAAAJgAgxgpIAAgJIAXAAIAAAJg");
	this.shape.setTransform(26.9,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#345798").s().p("AgxArQAZgLAAgdIgZAAIAAgIIAZAAIAAgTIgGAAQgFAIgHAHIgHgHQAOgMAFgXIAKADQADABgFACIgFAMIAdAAIAAAJIgRAAIAAATIAWAAIAAAIIgWAAIgBAMQAKAHAMAPIgGAJIgSgXQgFARgTAMgAAMAwIAAhUIAmAAIAABTIgJAAIAAgHIgUAAIAAAIgAAVAfIAUAAIAAg6IgUAAg");
	this.shape_1.setTransform(15,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#345798").s().p("Ag1AvIAAgJIA5AAQAGgMAFgPIAKAEQAAABABAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgKAVIAoAAIAAAJgAgZARIAJgGQAGAIAGAMIgKAFQgGgNgFgGgAgjANIAAgnIBGAAIAAAmIgJAAIAAgDIg0AAIAAAEgAgaABIA0AAIAAgSIg0AAgAgvglIAAgJIBeAAIAAAJg");
	this.shape_2.setTransform(3.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.helpass("single",1);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yogoOffBtn, new cjs.Rectangle(-21,-10.7,72.1,21.5), null);


(lib.blink = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer_1
	this.instance = new lib.IFマーク1();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-0.1,1,1,0,0,180);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, -150, 100, 150, 0)];
	this.instance.cache(-15,-15,28,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-13.1,24.4,26);


(lib.main_control_next = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.7,1.419,1.502,0,0,0,26.9,19.3);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_5
	this.blink = new lib.blink();
	this.blink.name = "blink";
	this.blink.parent = this;
	this.blink.setTransform(0,-6);
	this.blink.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.blink).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgIAzQgSAAgCgOIgBgHIgGACQgHAAgDgFQgGgEAAgKQAAgLAHgFQAFgGAHAAQAFABADABIAAgNIgXABIgDgJIAagCIAAgUIAJAAQABAAAAABQABAAAAAAQAAABAAAAQgBABgBAAIAAAQIAVgCIABAKIgWACIAAAVQACACAAADQAAAJgGAJIAAAMQAAAHALAAIAYAAQAJAAAAgJIAAgSIAKABIAAASQAAARgSAAgAgmABQgEAEAAAIQAAAFADAEQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAQADAAADgDQAFgFgBgGQABgGgCgCQgDgCgEAAQgDAAgDACgAATgWIAGgJQAQAMALAKIgHAIQgOgOgMgHg");
	this.shape.setTransform(8.1,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ag2ArQAMgEAHgGIAAgdIgRAAIAAgIIAbAAIAAAmQAIAJAPAAIA5AAIgDAJIg2AAQgUAAgKgNQgFAIgLAGgAgLAlIAAgxQgGAHgEACIgEgKQARgQAGgXIAJADQAEABgFABQgCAHgEAIIAOAAQAHgKADgJIAKADQADADgEAAIgJANIAZAAIAAAHIgZAAIAAAMIAVAAIAAAIIgVAAIAAAJIAUAAIAAAIIgUAAIAAANIAcAAIAAAHIg2AAIAAAFgAgCAZIAQAAIAAgNIgQAAgAgCAEIAQAAIAAgJIgQAAgAgCgNIAQAAIAAgMIgQAAgAgtgoIAGgHQAMAHAGAGIgIAIQgGgHgKgHg");
	this.shape_1.setTransform(-4.2,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_4
	this.instance_1 = new lib.IFマーク1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.7,-6.2,1,1,0,0,180);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance_1.cache(-15,-15,28,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-29.7,76.6,58.1);


(lib.main_control_btns = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Home Button
	this.main_control_home_btn = new lib.main_control_home();
	this.main_control_home_btn.name = "main_control_home_btn";
	this.main_control_home_btn.parent = this;
	this.main_control_home_btn.setTransform(48.9,28.4,1,1,0,0,0,28.4,21.4);
	new cjs.ButtonHelper(this.main_control_home_btn, 0, 1, 2, false, new lib.main_control_home(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_home_btn).wait(1));

	// subtitle ON
	this.main_control_subtitle_on = new lib.main_control_subtitle_on();
	this.main_control_subtitle_on.name = "main_control_subtitle_on";
	this.main_control_subtitle_on.parent = this;
	this.main_control_subtitle_on.setTransform(128.9,28.4,1,1,0,0,0,28.4,21.4);
	new cjs.ButtonHelper(this.main_control_subtitle_on, 0, 1, 2, false, new lib.main_control_subtitle_on(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_subtitle_on).wait(1));

	// subtitle OFF
	this.main_control_subtitle_off = new lib.main_control_subtitle_off();
	this.main_control_subtitle_off.name = "main_control_subtitle_off";
	this.main_control_subtitle_off.parent = this;
	this.main_control_subtitle_off.setTransform(100.5,7);
	new cjs.ButtonHelper(this.main_control_subtitle_off, 0, 1, 2, false, new lib.main_control_subtitle_off(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_subtitle_off).wait(1));

	// back button
	this.main_control_prev = new lib.main_control_prev();
	this.main_control_prev.name = "main_control_prev";
	this.main_control_prev.parent = this;
	this.main_control_prev.setTransform(209.9,28.5,1,1.003,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.main_control_prev, 0, 1, 2, false, new lib.main_control_prev(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_prev).wait(1));

	// play button
	this.main_control_play = new lib.main_control_play();
	this.main_control_play.name = "main_control_play";
	this.main_control_play.parent = this;
	this.main_control_play.setTransform(290.4,29.8,1,1.003);
	new cjs.ButtonHelper(this.main_control_play, 0, 1, 2, false, new lib.main_control_play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_play).wait(1));

	// pause button
	this.main_control_pause = new lib.main_control_pause();
	this.main_control_pause.name = "main_control_pause";
	this.main_control_pause.parent = this;
	this.main_control_pause.setTransform(290.4,29.8,1,1.003);
	new cjs.ButtonHelper(this.main_control_pause, 0, 1, 2, false, new lib.main_control_pause(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_pause).wait(1));

	// next button
	this.main_control_next = new lib.main_control_next();
	this.main_control_next.name = "main_control_next";
	this.main_control_next.parent = this;
	this.main_control_next.setTransform(371.1,29.8,1,1.003);
	new cjs.ButtonHelper(this.main_control_next, 0, 1, 2, false, new lib.main_control_next(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_next).wait(1));

	// close button
	this.main_control_close = new lib.main_control_close();
	this.main_control_close.name = "main_control_close";
	this.main_control_close.parent = this;
	this.main_control_close.setTransform(413.7,8.6,1,1.003,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.main_control_close, 0, 1, 2, false, new lib.main_control_close(), 3);

	this.timeline.addTween(cjs.Tween.get(this.main_control_close).wait(1));

	// background
	this.instance = new lib.main_control_bg();
	this.instance.parent = this;
	this.instance.setTransform(170,29,1,1,0,0,0,170.3,29.7);
	this.instance.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 10, 20, 0)];
	this.instance.cache(-2,-2,423,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.main_control_btns, new cjs.Rectangle(-0.3,-13,431.3,71.8), null);


// stage content:
(lib.common_symbols = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// play button
	this.play_btn = new lib.NextFileBtn();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(106.5,106.5,1,1,0,0,0,106.5,106.5);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(1));

	// top panel
	this.top_panel = new lib.top_panel();
	this.top_panel.name = "top_panel";
	this.top_panel.parent = this;
	this.top_panel.setTransform(346.9,108.5,1,1,0,0,0,1.9,-85.7);

	this.timeline.addTween(cjs.Tween.get(this.top_panel).wait(1));

	// main button
	this.main_control_btns = new lib.main_control_btns();
	this.main_control_btns.name = "main_control_btns";
	this.main_control_btns.parent = this;
	this.main_control_btns.setTransform(202,358.5,1.2,1.2,0,0,0,90,21.4);

	this.timeline.addTween(cjs.Tween.get(this.main_control_btns).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345,225,690,823);
// library properties:
lib.properties = {
	id: '3DED92BA2B85C1499B6F52630496A342',
	width: 690,
	height: 450,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../common/images/Bitmap2.png", id:"Bitmap2"},
		{src:"../common/images/play.png", id:"play"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3DED92BA2B85C1499B6F52630496A342'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;