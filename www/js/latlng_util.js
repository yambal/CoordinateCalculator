function latlng_util(){

    function _dmsToD(d, m, s, digit){
    	var res = parseInt(d, 10);
    	res += parseInt(m, 10) / 60;
    	res += parseFloat(m, 10) / 3600;

    	if(typeof digit === "number"){
    		var p = Math.pow(10, digit);
    		console.log(digit, p);
    		res = Math.round(res * p) / p;
    	}

    	return res;
    }

    function _dmsStringToD(str, digit){
    	var noS = str.replace(/"/, "");
        var chack_s = noS.split(/[\°'"]/);
        var d = parseInt(chack_s[0],10);
        var m = parseInt(chack_s[1],10);
        var s = parseFloat(chack_s[2]);

        return _dmsToD(d, m, s, digit);
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

/*
    y = lat - lat * 0.00010695 + lon * 0.000017464 + 0.0046017
  	x = lon - lat * 0.000046038 - lon * 0.000083043 + 0.01004

    wgs2tky_linear = lat + 0.000106961 * lat - 0.000017467 * lon - 0.004602017
  wgs2tky_linear = lon + 0.000046047 * lat + 0.000083049 * lon - 0.010041046
*/

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