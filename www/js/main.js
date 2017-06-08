//　====================================================
// APP Start
var isMonaca = false;
var isDeviceready = false;
var isFiredStart = false;
if(typeof monaca !== "undefined"){
    isMonaca = true;
    document.addEventListener("deviceready", function() {
        isDeviceready = true;
        onDeviceReady();
    }, false);
};

(function($) {
    $(document).ready(function() {
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

function appStart(){
        console.log("ready");

        $('.keyboad-col').click(function(event) {
            console.log("keyboad-col");
            var key = $(this).data("key");
            console.log(key);
        });
}
