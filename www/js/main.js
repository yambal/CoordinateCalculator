(function($) {
    $(document).ready(function() {
        console.log("ready");

        $('.key').click(function(event) {
            var key = $(this).data("key");
            c.onKeyPress(key);
        });

    });
})(window.jQuery);

var CoordinateCalculator = function(){
	var modes = [
		{name:'ll-wgs84', subMode:['ll-wgs84-lat', 'll-wgs84-lng']},
		{name:'ll-tokyo', subMode:['ll-tokyo-lat', 'll-tokyo-lng']},
		{name:'map', subMode:['map-map']},
		{name:'n', subMode:['n-block', 'n-unit', 'n-mesh']}
	];
	var mode = modes[0].name;
	var subMode = modes[0].subMode[0];

	function _onKeyPress(val){
		switch(val){
			case modes[0].name:
				if(mode == val && subMode == modes[0].subMode[0]){
					subMode = modes[0].subMode[1];
				}else{
					subMode = modes[0].subMode[0];
				}
				mode = val;
				updateMode();
				break;
			case modes[1].name:
				if(mode == val && subMode == modes[1].subMode[0]){
					subMode = modes[1].subMode[1];
				}else{
					subMode = modes[1].subMode[0];
				}
				mode = val;
				updateMode();
				break;
			case modes[2].name:
				subMode = modes[2].subMode[0];
				mode = val;
				updateMode();
				break;
			case modes[3].name:
				if(mode == val && subMode == modes[3].subMode[0]){
					subMode = modes[3].subMode[1];
				}else if(mode == val && subMode == modes[3].subMode[1]){
					subMode = modes[3].subMode[2];
				}else{
					subMode = modes[3].subMode[0];
				}
				mode = val;
				updateMode();
				break;
			case "c":
				clearInputTarget();
				break;
			case "ac":
				clearAllInputTarget();
				break;
			default:
				console.log(val);
				addCharToInputTarget(val);
		}
	}

	function updateMode(){
		updateModeLLWgs84();
		updateModeLLTokyo();
		updateModeMap();
		updateModeN();

		updateModeLLWgs84Lat();
		updateModeLLWgs84Lng();
		updateModeLLTokyoLat();
		updateModeLLTokyoLng();
		updateModeMapMap();
		updateNBlock();
		updateNUnit();
		updateNMesh();
	}
	function updateModeLLWgs84(){
		isDisplay(".mode-ll-wgs84", mode == modes[0].name);
	}
	function updateModeLLTokyo(){
		isDisplay(".mode-ll-tokyo", mode == modes[1].name);
	}
	function updateModeMap(){
		isDisplay(".mode-map", mode == modes[2].name);
	}
	function updateModeN(){
		isDisplay(".mode-n", mode == modes[3].name);
	}
	function isDisplay(elem, bool){
		if(bool){
			$(elem).show();
			return;
		}
		$(elem).hide();
	}

	function updateModeLLWgs84Lat(){
		isActive(".ll-wgs84-lat", subMode == modes[0].subMode[0]);
	}
	function updateModeLLWgs84Lng(){
		isActive(".ll-wgs84-lng", subMode == modes[0].subMode[1]);
	}
	function updateModeLLTokyoLat(){
		isActive(".ll-tokyo-lat", subMode == modes[1].subMode[0]);
	}
	function updateModeLLTokyoLng(){
		isActive(".ll-tokyo-lng", subMode == modes[1].subMode[1]);
	}
	function updateModeMapMap(){
		isActive(".map-map", subMode == modes[2].subMode[0]);
	}
	function updateNBlock(){
		isActive(".n-block", subMode == modes[3].subMode[0]);
	}
	function updateNUnit(){
		isActive(".n-unit", subMode == modes[3].subMode[1]);
	}
	function updateNMesh(){
		isActive(".n-mesh", subMode == modes[3].subMode[2]);
	}
	function isActive(elem, bool){
		if(bool){
			$(elem).addClass('active');
			return;
		}
		$(elem).removeClass('active');
	}

	updateMode();

	return {
		onKeyPress:function(val){
			_onKeyPress(val);
		}
	}
}

var c = CoordinateCalculator();
