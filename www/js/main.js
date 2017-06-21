(function($) {
    $(document).ready(function() {
        console.log("ready");
        $('.key').click(function(event) {
            var key = $(this).data("key");
            if (typeof key !== "undefined") {
                c.onKeyPress(key);
            }
        });

    });
})(window.jQuery);

var CoordinateCalculator = function() {
    var values = {};
    var modes = [{
        name: 'll-wgs84',
        subMode: [
            'll-wgs84-lat',
            'll-wgs84-lng'
        ],
        keys: [
            [{ name: "cmv", value: "cmv" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: "=", value: "=" }, { name: null, value: null }]
        ]
    }, {
        name: 'll-tokyo',
        subMode: [
            'll-tokyo-lat',
            'll-tokyo-lng'
        ],
        keys: [
            [{ name: "cmv", value: "cmv" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: "AC", value: "ac" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: "=", value: "=" }, { name: null, value: null }]
        ]
    }, {
        name: 'map',
        subMode: [
            'map-std',
            'map-photo'
        ],
        keys: [
            [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: "zoom<br />in", value: "zoomIn", icon: "icon-cc-zoom_in" }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: "zoom<br />out", value: "zoomOut", icon: "icon-cc-zoom_out" }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "GPS", value: "gps", icon: "icon-cc-my_location" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: null, value: null }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: "=", value: "=" }, { name: null, value: null }]
        ]
    }, {
        name: 'n',
        subMode: [
            'n-block',
            'n-unit',
            'n-mesh'
        ],
        keys: {
            "n-block": [
                [{ name: "X", value: "X" }, { name: "A", value: "A" }, { name: "B", value: "B" }, { name: "C", value: "C" }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: "Y", value: "Y" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "AC", value: "ac" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: "=", value: "=" }, { name: null, value: null }]
            ],
            "n-unit": [
                [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "AC", value: "ac" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: "=", value: "=" }, { name: null, value: null }]
            ],
            "n-mesh": [
                [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "AC", value: "ac" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: "=", value: "=" }, { name: null, value: null }]
            ]
        }
    }, ];

    var mode = null;
    var subMode = null;
    var map;
    var gpsIsActive = false;
    var gpsSetView = false;
    var lastGPSLatLng;
    var mapActiveLayer;
    var mapActiveLayerName;
    var gpsMaker = false;

    function _onKeyPress(val) {
        console.log("_onKeyPress(" + val + ")");
        switch (val) {
            case modes[0].name:
                var preMode = mode;
                var preSububMode = subMode;
                if (preMode == val && preSububMode == modes[0].subMode[0]) {
                    preSububMode = modes[0].subMode[1];
                } else {
                    preSububMode = modes[0].subMode[0];
                }
                preMode = val;
                _changeMode(preMode, preSububMode);
                break;
            case modes[1].name:
                var preMode = mode;
                var preSububMode = subMode;
                if (preMode == val && preSububMode == modes[1].subMode[0]) {
                    preSububMode = modes[1].subMode[1];
                } else {
                    preSububMode = modes[1].subMode[0];
                }
                preMode = val;
                _changeMode(preMode, preSububMode);
                break;
            case modes[2].name:
                var preMode = mode;
                var preSububMode = subMode;
                if (preMode == val && preSububMode == modes[2].subMode[0]) {
                    preSububMode = modes[2].subMode[1];
                } else {
                    preSububMode = modes[2].subMode[0];
                }
                preMode = val;
                _changeMode(preMode, preSububMode);
                break;
            case modes[3].name:
                var preMode = mode;
                var preSububMode = subMode;
                if (preMode == val && preSububMode == modes[3].subMode[0]) {
                    preSububMode = modes[3].subMode[1];
                } else if (preMode == val && preSububMode == modes[3].subMode[1]) {
                    preSububMode = modes[3].subMode[2];
                } else {
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
            case "del":
                deleteDisplayValue();
                break;
            case "cmv":
                comvertDisplayValue();
                break;
            default:
                addDisplayValue(val);
                break;
        }
    }

    // ************************************************************
    function _changeMode(_mode, _subMode) {
        if (mode != _mode) {
            $('body').removeClass("mode-" + mode);
            mode = _mode;
            _updateKey();
            $('body').addClass("mode-" + mode);
        }
        if (subMode != _subMode) {
            $('body').removeClass("submode-" + subMode);
            subMode = _subMode;
            _updateKey();
            $('body').addClass("submode-" + subMode);
        }
        if (mode == "map") {
            _mapSetup();
            if (mapActiveLayerName != _subMode) {
                console.log(mapActiveLayerName, _subMode);
                setActiveLayer(_subMode);
            }
        }
    }

    function _updateKey() {
        var filtered = modes.filter(function(element, index, array) {
            return element.name == mode;
        });
        var modeObj = filtered[0];
        var keys = modeObj.keys;
        if (keys[subMode]) {
            keys = keys[subMode];
        }

        for (var i = modes.length - 1; i >= 0; i--) {
            for (var j = modes[i].subMode.length - 1; j >= 0; j--) {
                var m = modes[i].subMode[j];
                $(".key").removeClass('key-' + m);
            }
        }

        for (var col = 0; col < keys.length; col++) {
            var keyCol = keys[col];
            for (var row = 0; row < keyCol.length; row++) {
                if (keyCol[row].name) {
                    if (keyCol[row].icon) {
                        $("#key-" + col + row).find(".key-label").html('<i class="' + keyCol[row].icon + '"></i>');
                    } else {
                        $("#key-" + col + row).find(".key-label").html(keyCol[row].name);
                    }
                } else {
                    $("#key-" + col + row).find(".key-label").html("");
                }
                if (keyCol[row].value !== null) {
                    $("#key-" + col + row)
                        .data("key", keyCol[row].value)
                        .addClass('key-' + keyCol[row].value)
                        .removeClass('key-desable');
                } else {
                    $("#key-" + col + row)
                        .data("key", null)
                        .addClass('key-desable')
                }
            }
        }
    }

    // ************************************************************
    var maker = L.icon({
        iconUrl: 'images/marker-icon.png',
        iconSize: [25, 40],
        iconAnchor: [12, 40],
        popupAnchor: [12 - 2]
    });

    var mapLayers = [{
        name: "map-std",
        layer: L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
            maxZoom: 18,
            maxNativeZoom: 18,
            minZoom: 2,
            minNativeZoom: 2,
            errorTileUrl: "http://placehold.jp/256x256.png?text=no%20tile",
            attribution: '出典:<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院/地理院タイル</a>'
        })
    }, {
        name: "map-photo",
        layer: L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
            maxZoom: 18,
            maxNativeZoom: 18,
            minZoom: 14,
            minNativeZoom: 14,
            errorTileUrl: "http://placehold.jp/256x256.png?text=no%20tile",
            attribution: '出典:<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院/地理院タイル</a>'
        })
    }];

    function _mapSetup() {
        if (!map) {
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
    function setActiveLayer(name) {
        var filtered = mapLayers.filter(function(element, index, array) {
            return element.name == name;
        });
        if (filtered.length >= 0) {
            if (mapActiveLayer) {
                map.removeLayer(mapActiveLayer);
            }
            map.addLayer(filtered[0].layer);
            mapActiveLayer = filtered[0].layer;
            mapActiveLayerName = filtered[0].name;
        }
    }

    function onLocationFound(e) {
        lastGPSLatLng = e.latlng;

        if (!gpsMaker) {
            gpsMaker = L.marker(lastGPSLatLng, { icon: maker }).addTo(map);
        } else {
            gpsMaker.setLatLng(lastGPSLatLng);
        }

        if (gpsSetView) {
            map.panTo(lastGPSLatLng, {
                noMoveStart: true
            });
        }
    }

    function onLocationError(e) {
        alert(e.message);
    }

    function _gpsToggle() {
        if (!gpsIsActive) {
            // GPSが無効の時 > GPSを有効
            map.locate({
                watch: true,
                setView: false,
                enableHighAccuracy: true
            });
            $('body').addClass("gps-active");
            $('body').removeClass("gps-setview");
            gpsIsActive = true;
            gpsSetView = false

        } else if (!gpsSetView) {
            // GPSが有効でセンター化が無効 > センター化有効
            $('body').addClass("gps-setview");
            gpsSetView = true;
            if (lastGPSLatLng) {
                map.panTo(lastGPSLatLng, {
                    noMoveStart: true
                });
            }
        } else {
            // GPSが有効でセンター化も有効 > GPSをOff
            map.stopLocate();
            $('body').removeClass("gps-active");
            $('body').removeClass("gps-setview");
            if (gpsMaker) {
                map.removeLayer(gpsMaker);
                gpsMaker = null;
            }
            gpsIsActive = false;
            gpsSetView = false;
        }
    }

    // ************************************************************
    function addDisplayValue(val) {
        if (mode == "ll-wgs84" || mode == "ll-tokyo") {
            addDisplayValueToTargetLatLng(val, 'user');

        } else if (subMode == "n-block") {

        } else if (subMode == "n-unit") {

        } else if (subMode == "n-mesh") {

        }
    };

    function deleteDisplayValue() {
        if (mode == "ll-wgs84" || mode == "ll-tokyo") {
            deleteDisplayValueToTargetLatLng('user');
        }
    }

    // =============================================================
    // Lat/Lang

    // mode/subMode の値から一文字削除
    function deleteDisplayValueToTargetLatLng(source) {
        var oldVal = getModeSubModeValue(mode, subMode);
        var noS = oldVal.replace(/"/, "");
        var newVal = noS.substr(0, noS.length - 1);

        setDisplayValueToCurrentLatLng(newVal, source);
    }

    // mode/subMode の値から一文字追加
    function addDisplayValueToTargetLatLng(val, source) {
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal + val;

        setDisplayValueToCurrentLatLng(newVal, source);
    }

    // 文字列がDMS表記かを返す
    function notationIsDms(_str) {
        if(_str){
            var str = _str;
            if(typeof _str === "number"){
                var str = _str.toString();
            };
            var chack_s = str.split(/[\.°'"]/);
            if (chack_s.length <= 2) {
                return false;
            }
            return true;
        }
        return false;
    };

    // 現在の入力のペアを返す
    function getPairSubMode() {
        var pairSubMode;
        var filtered = modes.filter(function(element, index, array) {
            return element.name == mode;
        });
        var modeObj = filtered[0];

        if (subMode == modeObj.subMode[0]) {
            pairSubMode = modeObj.subMode[1];
        } else {
            pairSubMode = modeObj.subMode[0];
        }
        return pairSubMode;
    }

    // 指定した mode subMode の値を返す
    function getModeSubModeValue(_mode, _subMode) {
        var target = ".value-" + _mode + "-" + _subMode;
        return $(target).html();
    }

    // 指定した mode subMode に値をセットする
    function setModeSubModeValue(_mode, _subMode, value) {
        var target = ".value-" + _mode + "-" + _subMode;
        //console.log(target, value);
        $(target).html(value);
    }

    // 指定した mode subMode にあわせてクラスをセットする
    function setNotationClass(_subMode, isDms) {
        if (isDms) {
            $('body').addClass(_subMode + "-notation-dms");
        } else {
            $('body').removeClass(_subMode + "-notation-dms");
        }
    }

    // 入力中の値とペアの値を検証し、D/DMS のエラーを判断
    // エラーがあれば BODY にクラスを追加
    // 返り値はエラーの有無
    function setPairErrorClass(currentVal, pairVal, pairMode){
        if (currentVal.length > 0 && pairVal.length > 0) {
            var inputNotationIsDms = notationIsDms(currentVal);
            var pairNotationIsDms = notationIsDms(pairVal);

            if(!inputNotationIsDms && pairNotationIsDms){
                // 入力中がDでペアがDMS
                $("body").addClass(pairMode + "-" + "error");
                return true;

            }else if(inputNotationIsDms && !pairNotationIsDms){
                // 入力中がDMSでペアがD
                $("body").addClass(pairMode + "-" + "error");
                return true;

            }
        }
        $("body").removeClass(pairMode + "-" + "error");
        return false;
    }

    // mode/submode に値をセットする
    // バリデーション/エラー判断/Class設定を含む
    function setDisplayValueToCurrentLatLng(val, source){
        var isLat = false;
        if (subMode == modes[0].subMode[0] && subMode == modes[1].subMode[0]) {
            isLat = true;
        }

        var validated = validationLatLng(val, isLat);
        var newVal = validated.value;
        var hasError = validated.error;
        var inputNotationIsDms = notationIsDms(newVal);
        setNotationClass(subMode, inputNotationIsDms);

        var pairMode = getPairSubMode();
        var pairVal = getModeSubModeValue(mode, pairMode);
        var pairNotationIsDms = notationIsDms(pairVal);

        var hasDmsError = setPairErrorClass(newVal, pairVal, pairMode);

        if (hasError || hasDmsError) {
            $("body").addClass(subMode + "-" + "error");
        } else {
            $("body").removeClass(subMode + "-" + "error");
        }

        setModeSubModeValue(mode, subMode, newVal);

        var lat, lng;
        if(isLat){
            lat = newVal;
            lng = pairVal;
        }else{
            lat = pairVal;
            lng = newVal;
        }

        values[mode] = {
            lat:lat,
            lng:lng,
            hasError:hasError || hasDmsError,
            source:source,
            notationIsDMS:inputNotationIsDms && pairNotationIsDms
        }

        console.log(values);
    }

    // LatLang の validation
    function validationLatLng(check, isLat) {
        //var check = now + add;
        var hasError = false;
        var retVal;

        var noS = check.replace(/"/, "");
        var chack_s = noS.split(/[\.°'"]/);
        if (chack_s[0]) {
            var d = parseInt(chack_s[0], 10);
            if (isLat && (d < -90 || d > 90)) {
                return {
                    error: true,
                    value: parseInt(now, 10)
                }

            } else if (d < -180 || d > 180) {
                return {
                    error: true,
                    value: parseInt(now, 10)
                }
            }
        }

        if (chack_s.length >= 3) {
            // dms として評価
            if (chack_s.length > 5) {
                return {
                    error: true,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1]) + "'" + _zPad2(chack_s[2]) + '.' + chack_s[3] + '"'
                }
            }

            var m = parseInt(chack_s[1], 10);
            if (m >= 60) {
                return {
                    error: true,
                    value: chack_s[0] + "°" + chack_s[1] + '"'
                }
            }

            var s = parseInt(chack_s[2], 10);
            if (s >= 60) {
                return {
                    error: true,
                    value: chack_s[0] + "°" + chack_s[1] + "'" + chack_s[2] + '"'
                }
            }

            if (chack_s.length == 3) {
                if (chack_s[2].length > 0) {
                    return {
                        error: false,
                        value: chack_s[0] + "°" + _zPad2(chack_s[1]) + "'" + chack_s[2] + '"'
                    }
                }
                return {
                    error: false,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1]) + "'"
                }
            }

            if (chack_s.length == 4) {
                return {
                    error: false,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1]) + "'" + _zPad2(chack_s[2]) + "." + chack_s[3] + '"'
                }
            }


            if (chack_s.length >= 5) {
                var _sS = "";
                for (var i = 3; i < chack_s.length; i++) {
                    _sS += chack_s[i];
                }
                return {
                    error: false,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1]) + "'" + _zPad2(chack_s[2]) + '.' + _sS + '"'
                }
            }

        } else {
            // d として評価
            if (chack_s.length == 1) {
                return {
                    error: false,
                    value: chack_s[0]
                }
            }
            return {
                error: false,
                value: chack_s[0] + "." + chack_s[1]
            }
        }
    }

    function _zPad2(str) {
        return ("0" + parseInt(str, 10)).slice(-2);
    }

    function _deleteRight(str) {
        if (str.length <= 1) {
            return "";
        }
        return str.substr(0, str.length - 1)
    }

    function comvertDisplayValue(){
        var value = values[mode];
        if(value){

            if(value.hasError){
                console.log("hasError");
            }else {
                var validLat = validationLatLng(value.lat, true);
                var validLng = validationLatLng(value.lng, false);
                var lat = validLat.value;
                var lng = validLng.value;
                var latIsDms = notationIsDms(lat);
                var lngIsDms = notationIsDms(lng);

                var filtered = modes.filter(function(element, index, array) {
                    return element.name == mode;
                });
                var modeObj = filtered[0];

                if(latIsDms && lngIsDms){
                    var newLat = dmsToD(lat);
                    var newLng = dmsToD(lng);

                    setModeSubModeValue(mode, modeObj.subMode[0], newLat);
                    setModeSubModeValue(mode, modeObj.subMode[1], newLng);

                }else if(!latIsDms && !lngIsDms){
                    var newLat = dToDms(lat);
                    var newLng = dToDms(lng);

                    setModeSubModeValue(mode, modeObj.subMode[0], newLat);
                    setModeSubModeValue(mode, modeObj.subMode[1], newLng);
                }

            }
        }
    }

    function dmsToD(str){
        var noS = str.replace(/"/, "");
        var chack_s = noS.split(/[\.°'"]/);

        var res = parseInt(chack_s[0], 10);// +  + parseInt(chack_s[3] + "." + chack_s[4], 10) / 3600;

        //console.log(chack_s.length);
        if(chack_s.length >= 2){
            res += parseInt(chack_s[1], 10)/60;
            //console.log(res);
        }
        if(chack_s.length == 3){
            res += parseInt(chack_s[2],10)/3600;
            //console.log(res);
        }
        if(chack_s.length == 4){
            res += parseInt(chack_s[2] + "." + chack_s[3], 10) / 3600;
            //console.log(res);
        }
        return res;
    }

    function dToDms(str){
        var num = parseFloat(str, 10);
        var d = Math.floor(num);

        var a = (num - d) * 60;
        var m = Math.floor(a);

        var b = a - m;
        var s = b * 60;

        return d + "." + m + "'" + s + '"';
    }

    // ************************************************************
    _changeMode(modes[0].name, modes[0].subMode[0]);


    return {
        onKeyPress: function(val) {
            _onKeyPress(val);
        }
    }
}

var c = CoordinateCalculator();
