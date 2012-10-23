//set main namespace
goog.provide('soft_eng');


//get requirements
goog.require('lime');
goog.require('lime.Circle');
goog.require('lime.CoverNode');
goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('lime.fill.LinearGradient');
goog.require('lime.Label');
// custom classes
goog.require('soft_eng.Button');
goog.require('soft_eng.Game');

goog.require('soft_eng.Help');
goog.require('soft_eng.Constants');

// other version for testing!!!
goog.require('soft_eng.OtherGame');


// entrypoint, pre-flight checks..
soft_eng.start = function() {
	// check all requirements (accelerometer, etc...)
	//document.addEventListener("deviceready", soft_eng.setupGame, false);
	soft_eng.setupGame();
}

// setup game
soft_eng.setupGame = function() {
	// setup the game, all preconditions are met (accelerometer, etc..)
	// setup the director
	soft_eng.director = new lime.Director(document.body, soft_eng.Constants.canvasSize.x, soft_eng.Constants.canvasSize.y);
	alert( soft_eng.Constants.canvasSize.x + " " +  soft_eng.Constants.canvasSize.y);
	soft_eng.director.makeMobileWebAppCapable();
	// load the main menu scene
	soft_eng.loadMainMenu();
}

// load main menu scene
soft_eng.loadMainMenu = function() {
	// load the main menu
	var scene = new lime.Scene(),
	layer = new lime.Layer().setPosition(0, 0).setAnchorPoint(0, 0);
	
	var title = new lime.Sprite().setFill('images/main_title.jpg').setPosition(0, 0).setAnchorPoint(0, 0);
	//title.qualityRenderer = true;
	layer.appendChild(title);
	
	// main menu buttons layer
	var buttonsLayer = new lime.Layer().setPosition(0, 0).setAnchorPoint(0, 0);
	layer.appendChild(buttonsLayer);
	
	
	// add play button
	var playButton = soft_eng.makeButton('Play Game').setPosition(soft_eng.Constants.canvasSize.x * 0.5, soft_eng.Constants.canvasSize.y * 0.5).setAnchorPoint(0, 0);
	goog.events.listen(playButton, 'click', function() {
		// play the game!!!
		soft_eng.newGame();
	});
	buttonsLayer.appendChild(playButton);
	
	// add Help button
	var helpButton = soft_eng.makeButton('Help').setPosition(soft_eng.Constants.canvasSize.x * 0.5, soft_eng.Constants.canvasSize.y * 0.75).setAnchorPoint(0, 0);
	goog.events.listen(helpButton, 'click', function() {
		// show help window
		soft_eng.loadHelpScene();
	});
	buttonsLayer.appendChild(helpButton);
	
	// add the layer to the scene and view scene
	scene.appendChild(layer);
	
	// set current scene active
	soft_eng.director.replaceScene(scene);
}


// load new game scene
soft_eng.newGame = function() {
	//alert('PLAY TIIIME');
    var scene = new soft_eng.OtherGame();
	soft_eng.director.replaceScene(scene);
};

// helper for same size buttons
soft_eng.makeButton = function(text) {
    var btn = new soft_eng.Button(text).setSize(soft_eng.Constants.canvasSize.x*0.75, soft_eng.Constants.canvasSize.y*0.25);
    return btn;
};


// load new help scene
soft_eng.loadHelpScene = function() {
    //var scene = new soft_eng.Help();
	//soft_eng.director.replaceScene(scene);
	alert('HEEEEEELP');
};


// this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('soft_eng.start', soft_eng.start);
