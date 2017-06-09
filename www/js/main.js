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
	var inputTargets = ['lat', 'lng', 'n-block', 'n-unit', 'n-mesh'];
	var inputTarget = inputTargets[0];

	var datums = ['wgs84', 'tokyo'];
	var datum = datums[0];

	function _onKeyPress(val){
		switch(val){
			case "latlng":
				if(inputTarget == inputTargets[0]){
					inputTarget = inputTargets[1];
				}else{
					inputTarget = inputTargets[0];
				}
				updateInputTarget();
				break;
			case "n":
				if(inputTarget == inputTargets[4]){
					inputTarget = inputTargets[3];
				}else if(inputTarget == inputTargets[3]){
					inputTarget = inputTargets[2];
				}else if(inputTarget == inputTargets[2]){
					inputTarget = inputTargets[4];
				}else{
					inputTarget = inputTargets[4];
				}
				updateInputTarget();
				break;
			case "c":
				clearInputTarget();
				break;
			case "ac":
				clearAllInputTarget();
				break;
			case "datum":
				if(datum == datums[0]){
					datum = datums[1];
					updateDatumMode();
					return;
				}
				datum = datums[0];
				updateDatumMode();
				break;
			default:
				console.log(val);
				addCharToInputTarget(val);
		}
	}

	// ---------------------------------------------------------------
	function clearInputTarget(){
		$(".input-group-" + inputTarget + " .input").html('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	}

	function clearAllInputTarget(){
		for (var i = inputTargets.length - 1; i >= 0; i--) {
			$(".input-group-" + inputTargets[i] + " .input").html('');
		}
	}

	// ---------------------------------------------------------------
	function addCharToInputTarget(char){
		var val = $(".input-group-" + inputTarget + " .input").html();
		$(".input-group-" + inputTarget + " .input").html(val + char);
	}

	// ---------------------------------------------------------------
	function updateDatumMode(){
		console.log("updateDatumMode:" + datum);
		if(datum == datums[0]){
			$('.mode-datum').addClass('mode-datum-' + datums[0]);
			$('.mode-datum').removeClass('mode-datum-' + datums[1]);
			return;
		}
		$('.mode-datum').addClass('mode-datum-' + datums[1]);
		$('.mode-datum').removeClass('mode-datum-' + datums[0]);
	}
	
	// ---------------------------------------------------------------
	function updateInputTarget(){
		latIsActuve(inputTarget == inputTargets[0]);
		lngIsActuve(inputTarget == inputTargets[1]);
		nBlockIsActuve(inputTarget == inputTargets[2]);
		nUnitIsActuve(inputTarget == inputTargets[3]);
		nMeshIsActuve(inputTarget == inputTargets[4]);
		for (var i = inputTargets .length - 1; i >= 0; i--) {
			$(".mode-input-target").removeClass('mode-input-target-' + inputTargets [i]);
		}
		$(".mode-input-target").addClass('mode-input-target-' + inputTarget);
	}
	function latIsActuve(bool){
		isActive(".input-group-lat", bool);
	}
	function lngIsActuve(bool){
		isActive(".input-group-lng", bool);
	}
	function nBlockIsActuve(bool){
		isActive(".input-group-n-block", bool);
	}
	function nUnitIsActuve(bool){
		isActive(".input-group-n-unit", bool);
	}
	function nMeshIsActuve(bool){
		isActive(".input-group-n-mesh", bool);
	}
	function isActive(elm, bool){
		if(bool){
			$(elm).addClass('active');
			return;
		}
		$(elm).removeClass('active');
	}

	updateInputTarget();
	updateDatumMode();

	return {
		onKeyPress:function(val){
			_onKeyPress(val);
		}
	}
}

var c = CoordinateCalculator();
