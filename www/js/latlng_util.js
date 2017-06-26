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
		}
	}
}