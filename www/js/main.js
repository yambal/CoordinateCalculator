(function($) {
    $(document).ready(function() {
        console.log("ready");
        $('.key').click(function(event) {
            var key = $(this).data("key");
            if(key){
				c.onKeyPress(key);
            }
        });

    });
})(window.jQuery);



var CoordinateCalculator = function(){
	var modes = [
		{name:'ll-wgs84', subMode:[
			'll-wgs84-lat',
			'll-wgs84-lng'
		], keys:[
			[{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:'WGS84', value:'ll-wgs84'}],
			[{name:null, value:null},{name:"7", value:7},{name:"8", value:8},{name:"9", value:9},{name:'Tokyo', value:'ll-tokyo'}],
			[{name:null, value:null},{name:"4", value:4},{name:"5", value:5},{name:"6", value:6},{name:'Map', value:'map'}],
			[{name:"C", value:"c"},{name:"1", value:1},{name:"2", value:2},{name:"3", value:3},{name:'n', value:'n'}],
			[{name:"AC", value:"ac"},{name:"0", value:1},{name:".", value:"."},{name:"=", value:"="},{name:null, value:null}]
		]},
		{name:'ll-tokyo', subMode:[
			'll-tokyo-lat',
			'll-tokyo-lng'
		], keys:[
			[{name:"T", value:"t"},{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:'WGS84', value:'ll-wgs84'}],
			[{name:null, value:null},{name:"7", value:7},{name:"8", value:8},{name:"9", value:9},{name:'Tokyo', value:'ll-tokyo'}],
			[{name:null, value:null},{name:"4", value:4},{name:"5", value:5},{name:"6", value:6},{name:'Map', value:'map'}],
			[{name:"C", value:"c"},{name:"1", value:1},{name:"2", value:2},{name:"3", value:3},{name:'n', value:'n'}],
			[{name:"AC", value:"ac"},{name:"0", value:1},{name:".", value:"."},{name:"=", value:"="},{name:null, value:null}]
		]},
		{name:'map', subMode:[
			'map-std',
			'map-photo'
		], keys:[
			[{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:'WGS84', value:'ll-wgs84'}],
			[{name:"zoom<br />in", value:"zoomIn"},{name:"7", value:7},{name:"8", value:8},{name:"9", value:9},{name:'Tokyo', value:'ll-tokyo'}],
			[{name:"zoom<br />out", value:"zoomOut"},{name:"4", value:4},{name:"5", value:5},{name:"6", value:6},{name:'Map', value:'map'}],
			[{name:"GPS", value:"gps"},{name:"1", value:1},{name:"2", value:2},{name:"3", value:3},{name:'n', value:'n'}],
			[{name:null, value:null},{name:"0", value:1},{name:".", value:"."},{name:"=", value:"="},{name:null, value:null}]
		]},
		{name:'n', subMode:[
			'n-block',
			'n-unit',
			'n-mesh'
		], keys:{
			"n-block":[
				[{name:"X", value:"x"},{name:"A", value:"a"},{name:"B", value:"b"},{name:"C", value:"c"},{name:'WGS84', value:'ll-wgs84'}],
				[{name:"Y", value:"y"},{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:'Tokyo', value:'ll-tokyo'}],
				[{name:null, value:null},{name:"4", value:4},{name:"5", value:5},{name:"6", value:6},{name:'Map', value:'map'}],
				[{name:"C", value:"c"},{name:"1", value:1},{name:"2", value:2},{name:"3", value:3},{name:'n', value:'n'}],
				[{name:"AC", value:"ac"},{name:"0", value:1},{name:".", value:"."},{name:"=", value:"="},{name:null, value:null}]
			],
			"n-unit":[
				[{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:'WGS84', value:'ll-wgs84'}],
				[{name:null, value:null},{name:"7", value:7},{name:"8", value:8},{name:"9", value:9},{name:'Tokyo', value:'ll-tokyo'}],
				[{name:null, value:null},{name:"4", value:4},{name:"5", value:5},{name:"6", value:6},{name:'Map', value:'map'}],
				[{name:"C", value:"c"},{name:"1", value:1},{name:"2", value:2},{name:"3", value:3},{name:'n', value:'n'}],
				[{name:"AC", value:"ac"},{name:"0", value:1},{name:".", value:"."},{name:"=", value:"="},{name:null, value:null}]
			],
			"n-mesh":[
				[{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:null, value:null},{name:'WGS84', value:'ll-wgs84'}],
				[{name:null, value:null},{name:"7", value:7},{name:"8", value:8},{name:"9", value:9},{name:'Tokyo', value:'ll-tokyo'}],
				[{name:null, value:null},{name:"4", value:4},{name:"5", value:5},{name:"6", value:6},{name:'Map', value:'map'}],
				[{name:"C", value:"c"},{name:"1", value:1},{name:"2", value:2},{name:"3", value:3},{name:'n', value:'n'}],
				[{name:"AC", value:"ac"},{name:"0", value:1},{name:".", value:"."},{name:"=", value:"="},{name:null, value:null}]
			]
		}},
	];

	var mode = null;
	var subMode = null;
	var map;
	var gpsIsActive = false;
	var mapActiveLayer;
	var mapActiveLayerName;

	function _onKeyPress(val){
		switch(val){
			case modes[0].name:
				var preMode = mode;
				var preSububMode = subMode;
				if(preMode == val && preSububMode == modes[0].subMode[0]){
					preSububMode = modes[0].subMode[1];
				}else{
					preSububMode = modes[0].subMode[0];
				}
				preMode = val;
				_changeMode(preMode, preSububMode);
				break;
			case modes[1].name:
				var preMode = mode;
				var preSububMode = subMode;
				if(preMode == val && preSububMode == modes[1].subMode[0]){
					preSububMode = modes[1].subMode[1];
				}else{
					preSububMode = modes[1].subMode[0];
				}
				preMode = val;
				_changeMode(preMode, preSububMode);
				break;
			case modes[2].name:
				var preMode = mode;
				var preSububMode = subMode;
				if(preMode == val && preSububMode == modes[2].subMode[0]){
					preSububMode = modes[2].subMode[1];
				}else{
					preSububMode = modes[2].subMode[0];
				}
				preMode = val;
				_changeMode(preMode, preSububMode);
				break;
			case modes[3].name:
				var preMode = mode;
				var preSububMode = subMode;
				if(preMode == val && preSububMode == modes[3].subMode[0]){
					preSububMode = modes[3].subMode[1];
				}else if(preMode == val && preSububMode == modes[3].subMode[1]){
					preSububMode = modes[3].subMode[2];
				}else{
					preSububMode = modes[3].subMode[0];
				}
				preMode = val;
				_changeMode(preMode, preSububMode);
				break;
			case "zoomIn":
				map.zoomIn();
				break;
			case "zoomOut":
				map.zoomOut();
				break;
			case "gps":
				_gpsToggle();
				break;
			default:
				addDisplayValue(val);
				break;
		}
	}

	// ************************************************************
	function _changeMode(_mode, _subMode){
		if(mode != _mode){
			$('body').removeClass("mode-" + mode);
			mode = _mode;
			_updateKey();
			$('body').addClass("mode-" + mode);
		}
		if(subMode != _subMode){
			$('body').removeClass("submode-" + subMode);
			subMode = _subMode;
			// サブモードのクラスに .active を付けたり消したり
			for (var i = modes.length - 1; i >= 0; i--) {
				for (var j = modes[i].subMode.length - 1; j >= 0; j--) {
					_isActive("." + modes[i].subMode[j], subMode == modes[i].subMode[j]);
				}
			}
			_updateKey();
			$('body').addClass("submode-" + subMode);
		}
		if(mode == "map"){
			_mapSetup();
			if(mapActiveLayerName != _subMode){
				console.log(mapActiveLayerName, _subMode);
				setActiveLayer(_subMode);
			}
		}
	}
	function _isActive(elem, bool){
		if(bool){
			$(elem).addClass('active');
			return;
		}
		$(elem).removeClass('active');
	}

	function _updateKey(){
		var filtered = modes.filter(function(element, index, array){
			return element.name == mode;
		});
		var modeObj = filtered[0];
		var keys = modeObj.keys;
		if(keys[subMode]){
			keys = keys[subMode];
		}
		for (var col = 0; col < keys.length; col++) {
			var keyCol = keys[col];
			for (var row = 0; row < keyCol.length; row++) {
				if(keyCol[row].name){
					$("#key-" + col + row).find(".key-label").html(keyCol[row].name);
				}else{
					$("#key-" + col + row).find(".key-label").html("");
				}
				if(keyCol[row].value !== null){
					$("#key-" + col + row)
						.data("key", keyCol[row].value)
						.removeClass('key-desable');
				}else{
					$("#key-" + col + row)
						.data("key", null)
						.addClass('key-desable')
				}
			}
		}
	}

	// ************************************************************
	var mapLayers = [
		{
			name:"map-std",
			layer:L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
				maxZoom: 18,
				maxNativeZoom:18,
				minZoom:2,
				minNativeZoom:2,
				errorTileUrl:"http://placehold.jp/256x256.png?text=no%20tile",
				attribution: '出典:<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院/地理院タイル</a>'
			})
		},
		{
			name:"map-photo",
			layer:L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
				maxZoom: 18,
				maxNativeZoom:18,
				minZoom:14,
				minNativeZoom:14 ,
				errorTileUrl:"http://placehold.jp/256x256.png?text=no%20tile",
				attribution: '出典:<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院/地理院タイル</a>'
			})
		}
	];

	function _mapSetup(){
		if(!map){
			map = L.map('map', {
				center: [35, 135],
		    	zoom: 5
			});

			setActiveLayer(mapLayers[0].name);  

			map.on('locationfound', onLocationFound);
			map.on('locationerror', onLocationError);
		}
	};

	// マップに表示する地図を変更する
	function setActiveLayer(name){
		var filtered  = mapLayers.filter(function(element, index, array){
			return element.name == name;
		});
		if(filtered.length >= 0){
			if(mapActiveLayer){
				map.removeLayer(mapActiveLayer);
			}
			map.addLayer(filtered[0].layer);
			mapActiveLayer = filtered[0].layer;
			mapActiveLayerName = filtered[0].name;
		}
	}

	function onLocationFound(e){
		console.log(e.latlng);
	}

	function onLocationError(e) {
		alert(e.message);
	}

	function _gpsToggle(){
		if(gpsIsActive){
			map.stopLocate();
			$('body').removeClass("gps-active");
			gpsIsActive = false;
		}else{
			map.locate({
				watch:true,
				setView:true,
				enableHighAccuracy:true
			});
			$('body').addClass("gps-active");
			gpsIsActive = true;
		}
	}

	// ************************************************************
	function addDisplayValue(val){
		var target = ".value-" + mode + "-" + subMode;
		var oldVal = $(target).html();
		var newVal = oldVal + val;
		$(target).html(newVal);
	};

	_changeMode(modes[0].name, modes[0].subMode[0]);
	

	return {
		onKeyPress:function(val){
			_onKeyPress(val);
		}
	}
}

var c = CoordinateCalculator();
