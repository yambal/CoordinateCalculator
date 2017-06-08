//　====================================================
// APP Start
var isMonaca = false;
var isDeviceready = false;
var isFiredStart = false;
//console.log(monaca);
if (monaca) {
    isMonaca = true;
    document.addEventListener("deviceready", function() {
        console.log("deviceready");
        isDeviceready = true;
        $(document).ready(function() {
            console.log("document ready");
            onDeviceReady();
        });
    }, false);
} else {
    isMonaca = false;
    isDeviceready = false;
    $(document).ready(function() {
        console.log("document ready");
        onDeviceReady();
    });
}

function onDeviceReady() {
    console.log("onDeviceReady");
}

//　====================================================
function appStart() {
    console.log("appStart");
}
