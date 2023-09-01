let launchMissiles = function(){
	missileSystem.launch();
};

if(safeMode){
	launchMissiles = function(){/* do nothing */};
}