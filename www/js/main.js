
//　====================================================
// APP Start
var isMonaca = false;
var isDeviceready = false;
var isFiredStart = false;
//console.log(monaca);
if(typeof monaca !== "undefined"){
    isMonaca = true;
    document.addEventListener("deviceready", function() {
        console.log("deviceready");
        isDeviceready = true;
        onDeviceReady();
    }, false);
};

(function($) {
    $(document).ready(function() {
        console.log("document ready");
        onDeviceReady();
    });
})(window.jQuery);

function onDeviceReady(){
        if(isMonaca && isDeviceready && !isFiredStart){
            isFiredStart = true;
            appStart();
        }else if(!isMonaca && !isFiredStart){
            isFiredStart = true;
            appStart();
        }
        return;
}

//　====================================================
function appStart(){
    console.log("appStart");
}