(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AzPkuMAmfAAAIAAJdMgmfAAAg");
	this.shape.setTransform(123.2,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzPS8IAApeMAmfAAAIAAJegAzPDXIAApeMAmfAAAIAAJegAzPpdIAApfMAmfAAAIAAJfg");
	this.shape_1.setTransform(123.2,121.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-1,-1,248.4,243.5), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn01.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			window.open("http://www.adobe.com");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.btn01 = new lib.元件1();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(181.9,168,1,1,0,0,0,123.2,121);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRGBpEINsghQhYingohQQhGiLgxhyQjInLhMoJQhIn0AvoJQAsnwCWn6QCOndDnnaQDinTEElRQE0mPFwjuQA3glAqgTQA4gaAzgFQnZEIl8HnQlHGkj+JDQjgH/h5H/Qh/IggGIMQgGIpCDIGQCJIdESHDQAQAbAGASQAIAagJAUQgSAlhMACQh0AEhxAAQkpAAkegWgAtxPKQgIifhMjnIhCi/QgnhygUhPQgrijgRjKQgMiSgDjjQgElTASj9QAVk/A6kLQB7o1FapsQgVBrg9CJQgkBOhNCbQi9GUhQH5QhDGoAGISQACDaAPCeQASDKArCnQARBDBfEmQBHDcASCRQAEAYgIAUQgIAVgQAAIgEgBgEgFtgkpQgHgOARgLQAQgJATABQFNAHFNhLQAqgKAYgKQAkgPATgZQAhgrgJhaQgKhTghhgQgXhBgvhrQkKpckOnFQhiihgwhRQhUiNg0hqQiNkdgMjzQgRk3CvldQBFiIBrieQA/hcCKi6QB0ibBAhIQBqh5BphKQA7gpAjAWQiGBPiDCRQhQBYiKC7QjwFEhmDFQifEzAAEUQgBEDCPExQA1B0BXCVQAzBXBnCrQEwH9DnIbQAuBqAWBDQAhBiAMBTQAGAugDAgQgEArgTAeQgXAkgwAXQgjAQg3ANQkZBBkeAAQhIAAhIgEg");
	this.shape.setTransform(440,1018.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn01}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(698.2,1046.5,498.5,1646.3);
// library properties:
lib.properties = {
	id: 'F53BBB5AC04A32448D4082DA75D38213',
	width: 1280,
	height: 2000,
	fps: 30,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
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
an.compositions['F53BBB5AC04A32448D4082DA75D38213'] = {
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