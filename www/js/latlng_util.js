function latlng_util(){

    function _dmsToD(d, m, s){
    	var res = parseInt(d, 10);
    	res += parseInt(m, 10) / 60;
    	res += parseFloat(m, 10) / 3600;
    	return res;
    }

    function _dmsStringToD(str){
    	var noS = str.replace(/"/, "");
        var chack_s = noS.split(/[\°'"]/);
        var d = parseInt(chack_s[0],10);
        var m = parseInt(chack_s[1],10);
        var s = parseFloat(chack_s[2]);

        return _dmsToD(d, m, s);
    }

	return {
		dmsToD:function(d, m, s){
			if(typeof d === "string" && typeof m === "undefined" && typeof s === "undefined"){
				return _dmsStringToD(d);
			}
			return _dmsToD(d, m, s);
		}
	}
}