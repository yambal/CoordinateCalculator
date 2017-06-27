function latlng_util(){

    function _dmsToD(d, m, s, digit){
    	console.group();
    	console.log("_dmsToD(" + d + ", " + m + ", " + s + ", " + digit + ")");

    	var res = parseInt(d, 10);
    	res += parseInt(m, 10) / 60;
    	res += parseFloat(s, 10) / 3600;

    	console.log(res);

    	if(typeof digit === "number"){
    		console.log("do round");
    		var p = Math.pow(10, digit);
    		res = Math.round(res * p) / p;
    		console.log(res)
    	}

    	console.groupEnd();
    	return res;
    }

    function _dmsStringToD(str, digit){
    	console.group();
    	console.log("_dmsStringToD(" + str + ", " + digit + ")");

    	var noS = str.replace(/"/, "");
        var chack_s = noS.split(/[\°'"]/);
        var d = parseInt(chack_s[0],10);
        var m = parseInt(chack_s[1],10);
        var s = parseFloat(chack_s[2]);
        console.log(d, m, s);
        
        var res =  _dmsToD(d, m, s, digit);
        console.groupEnd();
        return res;
    }

    function _dToDms(float, digit) {
        var float = parseFloat(float);

        var d = Math.floor(float);

        var a = (float - d) * 60;
        var m = Math.floor(a);

        var b = a - m;
        var s = b * 60;

        if(typeof digit === "number"){
        	var p = Math.pow(10, digit);
        	s = Math.round(s * p) / p;
        }
        

        return {
        	d:d,
        	m:m,
        	s:s
        }
    }

    
    //日本測地系から世界測地系
    function _tokyoToWgs(lat, lng, digit){
		var wgsLat = lat - lat * 0.00010695 + lng * 0.000017464 + 0.0046017;
  		var wgsLng = lng - lat * 0.000046038 - lng * 0.000083043 + 0.01004;

        if(typeof digit === "number"){
            var p = Math.pow(10, digit);
            wgsLat = Math.round(wgsLat * p) / p;
            wgsLat = Math.round(wgsLat * p) / p;
        }

  		return {
  			lat:wgsLat,
  			lng:wgsLng
  		}
    }

    //世界測地系から日本測地系
    function _wgsToTokyo(_lat, _lng, digit){
    	var lat = parseFloat(_lat);
    	var lng = parseFloat(_lng);

    	var tokyoLat = lat + 0.000106961 * lat - 0.000017467 * lng - 0.004602017;
		var tokyoLng = lng + 0.000046047 * lat + 0.000083049 * lng - 0.010041046;

		//console.log(lat, lng, digit, tokyoLat, tokyoLng);

        if(typeof digit === "number"){
        	var p = Math.pow(10, digit);
        	tokyoLat = Math.round(tokyoLat * p) / p;
        	tokyoLng = Math.round(tokyoLng * p) / p;
        }

		return {
  			lat:tokyoLat,
  			lng:tokyoLng
  		}
    }


    // 距離をを求める
    function _getDistance(lat1, lng1, lat2, lng2, format, digit) {
        var m = 6378.14 * Math.acos(Math.cos(_degToRad(lat1)) *
            Math.cos(_degToRad(lat2)) *
            Math.cos(_degToRad(lng2) - _degToRad(lng1)) +
            Math.sin(_degToRad(lat1)) *
            Math.sin(_degToRad(lat2))) * 1000;

        if(format){
			return _distanceUnitAdjust(m, digit);
        }

        if(typeof digit === "number"){
        	var p = Math.pow(10, digit);
        	return Math.round(m * p) / p;
        }

        return m;
    }

    function _degToRad(deg){
    	return deg * Math.PI / 180;
    }

    function _distanceUnitAdjust(m, _digit){
    	var digit = _digit | 1;

    	var f = m;
    	var unit = "m";
    	if(m >= 1000){
    		var unit = "km";
    		var f = m / 1000;
    	}

    	var p = Math.pow(10, digit);

    	return Math.round(f * p)/p + unit;
    }


    // 0埋め
    function _zPad2(str, _default) {
        if (!str || (typeof str === "string" && str.length == 0) || (typeof str === "number" && isNaN(str))) {
            if (typeof _default === "string") {
                return _default
            }
            return "";
        }
        return ("0" + parseInt(str, 10)).slice(-2);
    }

	return {
		wgsToTokyo:function(lat, lng, digit){
			return _wgsToTokyo(lat, lng, digit);
		},
        tokyoToWgs:function(lat, lng, digit){
            return _tokyoToWgs(lat, lng, digit);
        },
		dmsToD:function(d, m, s, digit){
			//console.log("dmsTo", d, m, s, digit);
			if(typeof d === "string" && typeof s === "undefined"){
				return _dmsStringToD(d, m);
			}
			return _dmsToD(d, m, s, digit);
		},
		dToDms:function (float, digit){
			return _dToDms(float, digit);
		},
		dToDmsString:function(float, digit){
			var dms = _dToDms(float, digit);

			// 秒の0埋め
	        if (dms.s < 10) {
	            dms.s = "0" + dms.s;
	        }

	        return dms.d + "°" + _zPad2(dms.m, "00") + "'" + dms.s + '"';
		},
		getDistance(lat1, lng1, lat2, lng2, format, digit){
			return _getDistance(lat1, lng1, lat2, lng2, format, digit);
		}
	}
}