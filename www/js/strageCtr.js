var strageCtr = function (){

	function _get(key, _default){
		var str = localStorage.getItem(key);
		if(str){
			return JSON.parse(str);
		}
		return _default;
	}

	function _set(key, value){
		console.log(value);
		localStorage.setItem(key, JSON.stringify(value));
	}


	return {
		get:function(key, _default){
			return _get(key, _default);
		},
		set:function(key, value){
			return _set(key, value);
		}
	}

}