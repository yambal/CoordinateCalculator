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
            [{ name: "My Location", value: "my_location", icon: "icon-cc-my_location" }, { name: "cmv", value: "cmv", icon: "icon-cc-d-dms" }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: null, value: null }, { name: null, value: null }]
        ]
    }, {
        name: 'll-tokyo',
        subMode: [
            'll-tokyo-lat',
            'll-tokyo-lng'
        ],
        keys: [
            [{ name: "My Location", value: "my_location", icon: "icon-cc-my_location" }, { name: "cmv", value: "cmv", icon: "icon-cc-d-dms" }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: null, value: null }, { name: null, value: null }]
        ]
    }, {
        name: 'map',
        subMode: [
            'map-std',
            'map-photo'
        ],
        keys: [
            [{ name: "My Location", value: "my_location", icon: "icon-cc-my_location" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: "GPS", value: "gps", icon: "icon-cc-GPS" }, { name: null, value: null }, { name: "up", value: "up", icon: "icon-cc-arrow_upward" }, { name: null, value: null }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: "zoom<br />in", value: "zoomIn", icon: "icon-cc-zoom_in" }, { name: "left", value: "left", icon: "icon-cc-arrow_back" }, { name: null, value: null }, { name: "right", value: "right", icon: "icon-cc-arrow_forward" }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "zoom<br />out", value: "zoomOut", icon: "icon-cc-zoom_out" }, { name: null, value: null }, { name: "down", value: "down", icon: "icon-cc-arrow_downward" }, { name: null, value: null }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }]
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
                [{ name: "My Location", value: "my_location", icon: "icon-cc-my_location" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: "X", value: "X" }, { name: "A", value: "A" }, { name: "B", value: "B" }, { name: "C", value: "C" }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: "Y", value: "Y" }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: null, value: null }, { name: null, value: null }]
            ],
            "n-unit": [
                [{ name: "My Location", value: "my_location", icon: "icon-cc-my_location" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: "-", value: "-" }, { name: null, value: null }, { name: null, value: null }]
            ],
            "n-mesh": [
                [{ name: "My Location", value: "my_location", icon: "icon-cc-my_location" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: "-", value: "-" }, { name: null, value: null }, { name: null, value: null }]
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
    var anchorMarker = false;
    var centerMaker = false;
    var errorMaker = false;
    var n = nCode(); // https://raw.githubusercontent.com/yambal/N-Code/master/nCode.js
    var util = latlng_util();
    var isDms = {};
    isDms['ll-wgs84'] = false;
    isDms['ll-tokyo'] = false;
    var keyVib = 13;// バイブレーション時間

    // ************************************************************
    // トリガー
    function _onKeyPress(val) {
        console.log("_onKeyPress(" + val + ")");
        switch (val) {
            case modes[0].name:
                // ll-wgs84-lat
                var toSubMode = modes[0].subMode[0];
                if (mode == val) {
                    // 同じモードの場合は SubMode を変更する
                    toSubMode = getLatLonPairSubMode(mode, subMode);
                }
                navigator.vibrate(keyVib);
                _changeMode(val, toSubMode);
                break;

            case modes[1].name:
                var toSubMode = modes[1].subMode[0];
                if (mode == val) {
                    // 同じモードの場合は SubMode を変更する
                    toSubMode = getLatLonPairSubMode(mode, subMode);
                }
                navigator.vibrate(keyVib);
                _changeMode(val, toSubMode);
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
                navigator.vibrate(keyVib);
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
                navigator.vibrate(keyVib);
                _changeMode(preMode, preSububMode);
                break;

            case "zoomIn":
                map.zoomIn();
                navigator.vibrate(keyVib);

                break;

            case "zoomOut":
                map.zoomOut();
                navigator.vibrate(keyVib);
                break;

            case "left":
                hideMapErrorIcon();
                disableMyLocation();
                var mw = $("#map").width();
                map.panBy([mw * -0.33, 0]);
                navigator.vibrate(keyVib);
                break;

            case "right":
                hideMapErrorIcon();
                disableMyLocation();
                var mw = $("#map").width();
                map.panBy([mw * 0.33, 0]);
                navigator.vibrate(keyVib);
                break;

            case "up":
                hideMapErrorIcon();
                disableMyLocation();
                var mh = $("#map").height();
                map.panBy([0, mh * -0.33]);
                navigator.vibrate(keyVib);
                break;

            case "down":
                hideMapErrorIcon();
                disableMyLocation();
                var mh = $("#map").height();
                map.panBy([0, mh * 0.33]);
                navigator.vibrate(keyVib);
                break;

            case "gps":
                gpsToggle();
                navigator.vibrate(keyVib);
                break;

            case "my_location":
                myLocationToggle();
                navigator.vibrate(keyVib);
                break;

            case "del":
                deleteDisplayValue();
                navigator.vibrate(keyVib);
                break;

            case "c":
                clearDisplayValue();
                navigator.vibrate(keyVib);
                break;

            case "cmv":
                comvertDisplayValue();
                navigator.vibrate(keyVib);
                break;

            default:
                addDisplayValue(val);
                navigator.vibrate(keyVib);
                break;
        }
    }

    // ************************************************************
    // 入力処理
    function addDisplayValue(val) {
        if (mode == "ll-wgs84" || mode == "ll-tokyo") {
            addDisplayValueToTargetLatLng(val);

        } else if (subMode == "n-block") {
            addDisplayValueToTargetNBlock(val);

        } else if (subMode == "n-unit") {
            addDisplayValueToTargetNUnit(val);

        } else if (subMode == "n-mesh") {
            addDisplayValueToTargetNMesh(val);
        }
    };

    function deleteDisplayValue() {
        if (mode == "ll-wgs84" || mode == "ll-tokyo") {
            deleteDisplayValueToTargetLatLng();

        } else if (subMode == "n-block") {
            deleteDisplayValueToTargetNBlock();

        } else if (subMode == "n-unit") {
            deleteDisplayValueToTargetNUnit();

        } else if (subMode == "n-mesh") {
            deleteDisplayValueToTargetNMesh();
        }
    }

    function clearDisplayValue() {
        if (mode == "ll-wgs84" || mode == "ll-tokyo") {
            clearDisplayValueTargetLatLng();

        } else if (subMode == "n-block" || subMode == "n-unit" || subMode == "n-mesh") {
            clearDisplayValueTargetN();

        }
    }

    // ************************************************************
    // 表示
    // モード（入力モード）/サブモード（入力欄）を変更する
    function _changeMode(_toMode, _toSubMode) {
        var nowMod = mode;
        if (nowMod != _toMode) {
            for (var i = 0; i < modes.length; i++) {
                $('body').removeClass("mode-" + modes[i].name);
            }
            mode = _toMode;
            _updateKeyTo(mode);
            $('body').addClass("mode-" + mode);
        }

        if (subMode != _toSubMode) {
            $('body').removeClass("submode-" + subMode);
            subMode = _toSubMode;
            _updateKeyTo(mode);
            $('body').addClass("submode-" + subMode);
        }
        if (mode == "map") {
            _mapSetup();
            if (mapActiveLayerName != _toSubMode) {
                setActiveLayer(_toSubMode);
            }
        }
    }

    // Keyを更新する
    function _updateKeyTo(toMode) {
        var modeObj = getModeObj(toMode);
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

    // 指定した mode subMode にあわせてクラスをセットする
    function setNotationView(_subMode, isDms) {
        if (isDms) {
            $('body').addClass(_subMode + "-notation-dms");
        } else {
            $('body').removeClass(_subMode + "-notation-dms");
        }
    }

    // 指定した SubMode にエラーの有無についてのクラスをセットする
    function setSubmodeIsErrorView(_subMode, bool) {
        if (bool) {
            $("body").addClass(_subMode + "-" + "error");
        } else {
            $("body").removeClass(_subMode + "-" + "error");
        }
    }

    // 指定した Mode にエラーの有無についてのクラスをセットする
    function setModeIsErrorView(_mode, bool) {
        if (bool) {
            $("body").addClass(_mode + "-" + "error");
        } else {
            $("body").removeClass(_mode + "-" + "error");
        }
    }

    function showMapErrorIcon() {
        var centerLatLng = map.getCenter();
        if (!errorMaker) {
            errorMaker = L.marker(centerLatLng, { icon: errorIcon }).addTo(map);
        } else {
            errorMaker.setLatLng(centerLatLng);
        }
    }
    function hideMapErrorIcon() {
        if (errorMaker) {
            map.removeLayer(errorMaker);
            errorMaker = null;
        }
    }

    // ************************************************************
    // 入力値
    // 指定した mode subMode の値を返す
    function getModeSubModeValue(_mode, _subMode) {
        var target = ".value-" + _mode + "-" + _subMode;
        return $(target).html();
    }

    function getCurrentModeSubModeValue(clearS) {
        if (clearS) {
            return getModeSubModeValue(mode, subMode).replace(/"/, "");
        }
        return getModeSubModeValue(mode, subMode);
    }

    function subModeIsLat(_subMode) {
        console.group("subModeIsLat(" + _subMode + ")");
        if (_subMode == modes[0].subMode[0] || _subMode == modes[1].subMode[0]) {
            console.log("is lat");
            console.groupEnd();
            return true;
        }

        console.log("not lat");
        console.groupEnd();
        return false;
    }

    // Lat/Lang
    // ---------------------------------------------------------------
    // 入力操作
    // mode/subMode の値から一文字削除
    // バリデーション/エラー判断/Class設定を含む
    function deleteDisplayValueToTargetLatLng() {
        var oldVal = getCurrentModeSubModeValue(true);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setDisplayValueToCurrentLatLng(newVal, 'user', null, null);
        disableMyLocation();// GPS追従を停止
        shareToOtherModes(mode); // 他に反映する
    }

    // mode/subMode の値から一文字追加
    // バリデーション/エラー判断/Class設定を含む
    function addDisplayValueToTargetLatLng(val) {
        console.group("addDisplayValueToTargetLatLng(" + val + ")");
        var oldVal = getCurrentModeSubModeValue(false);
        var newVal = oldVal + val;

        setDisplayValueToCurrentLatLng(newVal, 'user', null, null);
        disableMyLocation();// GPS追従を停止
        shareToOtherModes(mode); // 他に反映する
        console.groupEnd();
    }

    // clear
    function clearDisplayValueTargetLatLng() {
        clearDisplayValueModeLatLng(mode);
    }

    function clearDisplayValueModeLatLng(_mode, _share){
        if(typeof _share === "undefined"){
            _share = true;
        }

        var modeObj = getModeObj(_mode);
        var subModeA = modeObj.subMode[0];
        var subModeB = modeObj.subMode[1];

        setDisplayValueToLatLng(_mode, subModeA, '');
        setDisplayValueToLatLng(_mode, subModeB, '');
        disableMyLocation();// GPS追従を停止
        setValue(mode, null, null, null, true, false, 'user', null, null);
        if(_share){
            shareToOtherModes(mode); // 他に反映する
        }
    }

    // 指定した mode subMode に値をセットする
    // バリデーションは含まない
    function setModeSubModeValue(_mode, _subMode, value) {
        if (_mode === modes[2].name) {
            return;
        };
        var target = ".value-" + _mode + "-" + _subMode;
        $(target).html(value);
    }

    // mode/submode に値を、検証を行い、表示を変更、結果を返す
    function setDisplayValueToLatLng(_mode, _subMode, val) {
        console.group("setDisplayValueToLatLng(" + _mode + "," + _subMode + "," + val + ")");

        var isLat = subModeIsLat(_subMode);

        var validated = validationLatLng(val, isLat);
        console.log("validated", validated);

        var inputNotationIsDms = util.notationIsDms(validated.value);

        // View
        setNotationView(_subMode, inputNotationIsDms);
        setSubmodeIsErrorView(_subMode, validated.error);

        // 値を更新
        setModeSubModeValue(_mode, _subMode, validated.value);
        console.log("set to display ", validated.value, "to", _mode, _subMode);

        console.groupEnd();
        return {
            hasError: validated.error,
            value: validated.value,
            isDms: inputNotationIsDms,
            isLat: isLat
        }
    }

    // ************************************************************
    var maker = L.icon({
        iconUrl: 'images/marker-icon.png',
        iconSize: [25, 40],
        iconAnchor: [12, 40],
        popupAnchor: [12 - 2]
    });
    var anchorIcon = L.icon({
        iconUrl: 'images/anchor-icon.png',
        iconSize: [25, 40],
        iconAnchor: [12, 40],
        popupAnchor: [12 - 2]
    });
    var gpsIcon = L.icon({
        iconUrl: 'images/gps-icon.png',
        iconSize: [25, 63],
        iconAnchor: [12, 58],
        popupAnchor: [12 - 2]
    });

    var centerIcon = L.icon({
        iconUrl: 'images/center-icon.png',
        iconSize: [41, 41],
        iconAnchor: [20, 20],
        popupAnchor: [20 - 2]
    });

    var errorIcon = L.icon({
        iconUrl: 'images/error-icon.png',
        iconSize: [41, 41],
        iconAnchor: [20, 20],
        popupAnchor: [20 - 2]
    });

    var mapLayers = [{
        name: "map-std",
        layer: L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
            maxZoom: 18,
            maxNativeZoom: 18,
            minZoom: 2,
            minNativeZoom: 2,
            errorTileUrl: "http://placehold.jp/256x256.png?text=no%20tile",
            attribution: '出典:<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_system">国土地理院/地理院タイル</a>'
        })
    }, {
        name: "map-photo",
        layer: L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
            maxZoom: 18,
            maxNativeZoom: 18,
            minZoom: 14,
            minNativeZoom: 14,
            errorTileUrl: "http://placehold.jp/256x256.png?text=no%20tile",
            attribution: '出典:<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_system">国土地理院/地理院タイル</a>'
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

            map.on('moveend', onMapMoveEnd);
            map.on('dragstart', onDragstart);
            map.on('move', onMove);
            map.on('dragend', onDragend);

            // Zoom時のセンター調整
            map.on('zoomend', function() {
                if (gpsSetView && lastGPSLatLng) {
                    map.panTo(lastGPSLatLng, {
                        noMoveStart: true
                    });
                }
            });

            onMapMoveEnd(null);

            var centerLatLng = map.getCenter();
            if (!centerMaker) {
                centerMaker = L.marker(centerLatLng, { icon: centerIcon }).addTo(map);
            } else {
                centerMaker.setLatLng(centerLatLng);
            }

            // Map初期の座標を他のモードに通知する
            var latlang = map.getCenter();
            var mapMode = modes[2].name;
            setValue(mapMode, latlang.lat, latlang.lng, null, false, false, "user", null, null);
            shareToOtherModes(mode);
        }
    };

    function panTo(lat, lng, fireMoveEnd) {
        console.group("panTo(" + lat + "," + lng + "," + fireMoveEnd + ")");

        latlang = new L.latLng(lat, lng);
        map.panTo(latlang, {
            noMoveStart: fireMoveEnd
        });
        console.groupEnd();
    }

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

    function onMove(){
        var centerLatLng = map.getCenter();
        if (!centerMaker) {
            centerMaker = L.marker(centerLatLng, { icon: centerIcon }).addTo(map);
        } else {
            centerMaker.setLatLng(centerLatLng);
        }
    }

    //　マップ位置が変更されたとき
    function onMapMoveEnd(event) {

    }

    function onDragstart() {
        console.log("onDragstart() > disableMyLocation()");
        hideMapErrorIcon(); // ドラッグ開始したらエラーは非表示
        disableMyLocation();
    }

    function onDragend() {
        var latlang = map.getCenter();
        var mapMode = modes[2].name;
        setValue(mapMode, latlang.lat, latlang.lng, null, false, false, "user", null, null);
        shareToOtherModes(mapMode);
    }

    // GPS を受信したとき
    function onLocationFound(e) {
        console.group("onLocationFound()");
        var gpsLat = e.latlng.lat;
        var gpsLng = e.latlng.lng;
        lastGPSLatLng = e.latlng;

        if (!gpsMaker) {
            gpsMaker = L.marker(lastGPSLatLng, { icon: gpsIcon }).addTo(map);
        } else {
            gpsMaker.setLatLng(lastGPSLatLng);
        }

        if (gpsSetView) {
            var mapMode = modes[2].name;
            setValue(mapMode, gpsLat, gpsLng, null, false, false, "gps", null, null);
            shareToOtherModes(mapMode);

            map.panTo(lastGPSLatLng);
        }

        console.groupEnd();
    }

    function onLocationError(e) {
        alert(e.message);
    }

    // GPSの on off をトグル
    function gpsToggle() {
        if (!gpsIsActive) {
            // GPSが無効の時 > GPSを有効
            activeGps();

        } else {
            // GPSが有効でセンター化も有効 > GPSをOff
            console.log("gpsToggle() > disableMyLocation()");
            deActiveGps();
            disableMyLocation();
        }
    }

    // GPS 追従 をトグル
    function myLocationToggle() {
        if (!gpsSetView) {
            enableMyLocation();
        } else {
            console.log("myLocationToggle() > disableMyLocation()");
            disableMyLocation();
        }
    }

    // GPS をアクティブにする
    function activeGps() {
        map.locate({
            watch: true,
            setView: false,
            enableHighAccuracy: true
        });
        $('body').addClass("gps-active");
        gpsIsActive = true;
        hideMapErrorIcon(); // GPS開始したらエラーは非表示
    }

    // GPS を停止する
    function deActiveGps() {
        map.stopLocate();
        $('body').removeClass("gps-active");
        if (gpsMaker) {
            map.removeLayer(gpsMaker);
            gpsMaker = null;
        }
        gpsIsActive = false;
    }

    // GPS 追従をOn
    function enableMyLocation() {
        $('body').addClass("gps-setview");
        console.warn("enableMyLocation()");
        gpsSetView = true;
        if (lastGPSLatLng) {
            map.panTo(lastGPSLatLng, {
                noMoveStart: true
            });
        }
        if (!gpsIsActive) {
            activeGps();
        }
        hideMapErrorIcon();
    }

    // GPS 追従をOff
    function disableMyLocation() {
        $('body').removeClass("gps-setview");
        console.warn("disableMyLocation()");
        gpsSetView = false;
    }

    // =============================================================
    // 指定した mode のオジェを返す
    function getModeObj(_mode) {
        var filtered = modes.filter(function(element, index, array) {
            return element.name == _mode;
        });
        return filtered[0];
    }

    // 指定した SubMode のペア SubMode を返す（LatLon）
    function getLatLonPairSubMode(_mode, _subMode) {
        var modeObj = getModeObj(_mode);
        if (_subMode == modeObj.subMode[0]) {
            return modeObj.subMode[1];
        }
        return modeObj.subMode[0];
    }

    // 現在の SubMode のペア SubMode を返す（LatLon）
    function getPairCurrentSubMode() {
        return getLatLonPairSubMode(mode, subMode);
    }

    // =============================================================
    // Lat/Lang
    // mode/submode に値をセットする
    // バリデーション/エラー判断/Class設定を含む
    function setDisplayValueToCurrentLatLng(val, surceType, sourceLat, sourceLng) {
        console.group("setDisplayValueToCurrentLatLng(" + val + "," + surceType + "," + sourceLat + "," + sourceLng + ")");

        // 検証
        var validated = setDisplayValueToLatLng(mode, subMode, val);
        console.log("validated", validated);
        var hasError = validated.hasError;
        var newVal = validated.value;
        var inputNotationIsDms = validated.isDms;

        // 対を検証する
        var pairMode = getPairCurrentSubMode();
        var pairVal = getModeSubModeValue(mode, pairMode);
        var pairIsLat = subModeIsLat(pairMode);
        var pairIsDms = util.notationIsDms(pairVal);

        var pairValidated = validationLatLng(pairVal, pairIsLat);
        var pairHasError = pairValidated.error;
        console.log("pairValidated", pairValidated);

        // ペアとセットで検証
        // ペアはDMSか
        var notationIsDMS = inputNotationIsDms && pairIsDms;
        isDms[mode] = notationIsDMS;
        console.log('isDms', isDms);

        // ペアは同じ表記か
        var isSameN = inputNotationIsDms == pairIsDms;
        // セットでエラーがあるか
        var setHasError = hasError || pairHasError || !isSameN;
        console.warn(setHasError, hasError, pairHasError, !isSameN);

        console.log("setHasError", hasError, pairHasError, isSameN, "=", setHasError);

        console.warn(setHasError);

        // View
        setSubmodeIsErrorView(subMode, hasError || !isSameN);
        setSubmodeIsErrorView(pairMode, !isSameN);
        setModeIsErrorView(mode, setHasError);
        /** ToDo : セットのエラー表現 **/

        var lat, lng;
        if (subModeIsLat(subMode)) {
            lat = newVal;
            lng = pairVal;
        } else {
            lat = pairVal;
            lng = newVal;
        }

        console.warn(setHasError);
        setValue(mode, lat, lng, null, setHasError, notationIsDMS, surceType, sourceLat, sourceLng);

        console.groupEnd();
    }

    function setValue(mode, lat, lng, nCode, hasError, isDms, sourceType, sourceLat, sourceLng) {
        console.group("setValue(mode:" + mode + ",lat:" + lat + ",lng:" + lng + ",ncode:" + nCode + ",hasError:" + hasError + "," + isDms + "," + sourceType + "," + sourceLat + "," + sourceLng + ")");
        values[mode] = {
            lat: lat,
            lng: lng,
            nCode: nCode,
            hasError: hasError,
            notationIsDMS: isDms,
            source: {
                source: sourceType,
                lat: sourceLat,
                lng: sourceLng
            }
        }
        console.log(values[mode]);
        console.groupEnd();
    }

    // LatLang の validation
    function validationLatLng(check, isLat) {
        var hasError = false;
        var retVal;

        if (check.length == 0) {
            hasError = true;
        }

        //console.log("check", check);

        if (typeof check === "number") {
            check = check.toString();
        }

        //console.log("check", check);

        var noS = check.replace(/"/, "");
        var chack_s = noS.split(/[\.°']/);
        if (chack_s[0]) {
            var d = parseInt(chack_s[0], 10);
            if (isLat && (d < -90 || d > 90)) {
                hasError = true;
                return {
                    error: hasError,
                    value: parseInt(d, 10)
                }

            } else if (d < -180 || d > 180) {
                hasError = true;
                return {
                    error: hasError,
                    value: parseInt(d, 10)
                }
            }
        }

        if (chack_s.length >= 3) {
            // dms として評価
            if (chack_s.length > 5) {
                hasError = true;
                return {
                    error: hasError,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + _zPad2(chack_s[2], "00") + '.' + chack_s[3].substr(0, 3) + '"'
                }
            }

            var m = parseInt(chack_s[1], 10);
            if (m >= 60) {
                hasError = true;
                return {
                    error: hasError,
                    value: chack_s[0] + "°" + chack_s[1] + "'"
                }
            }

            var s = parseInt(chack_s[2], 10);
            if (s >= 60) {
                hasError = true;
                return {
                    error: hasError,
                    value: chack_s[0] + "°" + chack_s[1] + "'" + chack_s[2] + '"'
                }
            }

            if (chack_s.length == 3) {
                if (chack_s[2].length > 0) {
                    return {
                        error: hasError,
                        value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + chack_s[2] + '"'
                    }
                }
                return {
                    error: hasError,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1]) + "'"
                }
            }

            if (chack_s.length == 4) {
                return {
                    error: hasError,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + _zPad2(chack_s[2], "00") + "." + chack_s[3].substr(0, 3) + '"'
                }
            }


            if (chack_s.length >= 5) {
                var _sS = "";
                for (var i = 3; i < chack_s.length; i++) {
                    _sS += chack_s[i];
                }
                return {
                    error: hasError,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + _zPad2(chack_s[2], "00") + '.' + _sS + '"'
                }
            }

        } else {
            // d として評価
            if (chack_s.length == 1) {
                return {
                    error: hasError,
                    value: chack_s[0]
                }
            }
            return {
                error: hasError,
                value: chack_s[0] + "." + chack_s[1].substr(0, 7)
            }
        }
    }

    function _zPad2(str, _default) {
        if (!str || (typeof str === "string" && str.length == 0) || (typeof str === "number" && isNaN(str))) {
            if (typeof _default === "string") {
                return _default
            }
            return "";
        }
        return ("0" + parseInt(str, 10)).slice(-2);
    }

    function _deleteRight(str) {
        if (str.length <= 1) {
            return "";
        }
        return str.substr(0, str.length - 1)
    }

    // 現在の Value を D <> DMS 変換する
    function comvertDisplayValue() {
        console.group("comvertDisplayValue()");

        var value = values[mode];
        console.log("mode", mode, "value", value);

        if (value) {
            if (value.hasError) {
                console.log("hasError cancel");
            } else {

                var validLat = validationLatLng(value.lat, true);
                var validLng = validationLatLng(value.lng, false);
                var lat = validLat.value;
                var lng = validLng.value;

                var latIsDms = util.notationIsDms(lat);
                var lngIsDms = util.notationIsDms(lng);

                var modeObj = getModeObj(mode);

                if (latIsDms && lngIsDms) {
                    // DMS を D に変換
                    var newLat = util.toD(lat, 6);
                    var newLng = util.toD(lng, 　6);

                    console.log(newLat, newLng);

                    isDms[mode] = false;

                    setModeSubModeValue(mode, modeObj.subMode[0], newLat);
                    setModeSubModeValue(mode, modeObj.subMode[1], newLng);

                    setValue(mode, newLat, newLng, null, false, false, mode, lat, lng);

                    // D モード表示に更新
                    setNotationView(subMode, false);
                    setNotationView(getPairCurrentSubMode(), false);

                } else if (!latIsDms && !lngIsDms) {
                    // D を DMS に変換

                    var newLat = util.dToDmsString(lat, 4); //dToDms(lat);
                    var newLng = util.dToDmsString(lng, 4); //.dToDms(lng);

                    isDms[mode] = true;

                    setModeSubModeValue(mode, modeObj.subMode[0], newLat);
                    setModeSubModeValue(mode, modeObj.subMode[1], newLng);

                    setValue(mode, newLat, newLng, null, false, false, mode, lat, lng);

                    // D モード表示に更新
                    setNotationView(subMode, true);
                    setNotationView(getPairCurrentSubMode(), true);
                }

                console.warn("isDms", isDms);
            }
        } else {
            console.log("cancel");
        }
        console.groupEnd();
    }

    // =============================================================
    // N-code
    function addDisplayValueToTargetNBlock(val) {
        disableMyLocation();// GPS追従を停止
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = (oldVal + val).substr(0, 2);
        setModeSubModeValue(mode, subMode, newVal);
        onNCodeDisplayChange();
    };

    function NBlockHasError(val) {
        if (val.length != 2) {
            return true;
        }

        var header;
        var body;

        var hasError = false;
        if (val.length >= 1) {
            header = parseInt(val.substr(0, 1), 10);

            if (!header) {
                hasError = true;
            }
        }
        if (val.length >= 2) {
            body = val.substr(1, 1);
            if (body != "X" && body != "A" && body != "B" && body != "C" && body != "Y") {
                hasError = true;
            }

        }
        return hasError;
    }

    function addDisplayValueToTargetNUnit(val) {
        disableMyLocation();// GPS追従を停止
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = (oldVal + val).substr(0, 4);
        setModeSubModeValue(mode, subMode, newVal);
        onNCodeDisplayChange();
    }

    function nUnitHasError(val) {
        //console.log(val, parseInt(val, 10), val.length);
        if (val.length != 4) {
            return true;
        }
        return false;
    }

    function addDisplayValueToTargetNMesh(val) {
        disableMyLocation();// GPS追従を停止
        if (!isNaN(parseInt(val, 10)) || val == '-') {
            var oldVal = getModeSubModeValue(mode, subMode);
            var newVal = (oldVal + val).substr(0, 9);

            setModeSubModeValue(mode, subMode, newVal);
        }
        onNCodeDisplayChange();
    }

    function nMeshHasError(val) {
        var hasError = false;

        if (val.length > 0) {
            var a = val.split('-');

            if (a.length == 1 || a.length == 2) {
                // 1か2項目しか許さない

                var meshEW = a[0];
                console.warn("meshEW.length", meshEW.length);
                if (meshEW.length >= 2 && meshEW.length <= 4) {
                    // ew mesh は 2～4桁で計算可能

                } else {

                    hasError = true;
                }

                var meshSN = '';
                if (a.length <= 2) {
                    // （sn mesh は無くとも計算可能）

                    meshSN = a[1];
                    console.warn("meshSN.length", meshSN.length);
                    if (meshSN.length >= 2 && meshSN.length <= 4) {
                        // sn mesh は 2桁か4桁で計算可能

                    } else {

                        hasError = true;
                    }
                }
            }
        }
        setSubmodeIsErrorView('n-mesh', hasError);
        //console.log(meshEW, hasError);
        return hasError
    }

    function deleteDisplayValueToTargetNBlock() {
        disableMyLocation();// GPS追従を停止
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setModeSubModeValue(mode, subMode, newVal);
        onNCodeDisplayChange();
    }

    function deleteDisplayValueToTargetNUnit() {
        disableMyLocation();// GPS追従を停止
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setModeSubModeValue(mode, subMode, newVal);
        onNCodeDisplayChange();
    }

    function deleteDisplayValueToTargetNMesh() {
        disableMyLocation();// GPS追従を停止
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setModeSubModeValue(mode, subMode, newVal);
        nMeshHasError(newVal);
        onNCodeDisplayChange();
    }

    function clearDisplayValueTargetN() {
        disableMyLocation();// GPS追従を停止
        setModeSubModeValue('n', 'n-block', '');
        setModeSubModeValue('n', 'n-unit', '');
        setModeSubModeValue('n', 'n-mesh', '');
        onNCodeDisplayChange();
    }

    function onNCodeDisplayChange() {
        console.group();
        console.log("onNCodeDisplayChange()");

        //$('.bound').html("?");
        var b = getModeSubModeValue('n', 'n-block');
        var u = getModeSubModeValue('n', 'n-unit');
        var m = getModeSubModeValue('n', 'n-mesh');

        var bError = NBlockHasError(b);
        var uError = nUnitHasError(u);
        var mError = nMeshHasError(m);

        setSubmodeIsErrorView('n-block', bError);
        setSubmodeIsErrorView('n-unit', uError);
        setSubmodeIsErrorView('n-mesh', mError);

        setModeIsErrorView('n', bError || uError || mError);

        console.log(b, bError, u, uError, m, mError);

        if (!bError && !uError && !mError) {
            var ms = m.split('-');
            var code = n.nCode(b, u, ms[0], ms[1]);
            var bound = n.nCodeToBound(code);

            var sw = bound.getSouthWest();
            var ne = bound.getNorthEast();
            var center = bound.getCenterLatLng();

            var latDis = util.getDistance(sw.lat, center.lng, ne.lat, center.lng, true, 1);
            var lngDis = util.getDistance(center.lat, sw.lng, center.lat, ne.lng, true, 1);

            $('.bound').html(latDis + " x " + lngDis);

            setValue(modes[3].name, center.lat, center.lng, {
                block: b,
                unit: u,
                mesh: m
            }, false, false, "user", null, null);

        } else {
            setValue(modes[3].name, null, null, {
                block: b,
                unit: u,
                mesh: m
            }, true, false, "user", null, null);
        }

        console.log("values", values);

        shareToOtherModes(modes[3].name);

        console.groupEnd();
    }

    function shareToOtherModes(fireMode) {
        console.group("shareToOtherModes()");

        var value = values[fireMode];
        shareToMode(fireMode, modes[0].name, value);
        shareToMode(fireMode, modes[1].name, value);
        shareToMode(fireMode, modes[2].name, value);
        shareToMode(fireMode, modes[3].name, value);

        console.log("values", values);
        console.groupEnd();
    }

    // 現在のモードの値を指定のモードに反映させる
    function shareToMode(fromMode, toMode, value) {
        console.group("shareToMode(" + fromMode + "," + toMode + "," + value + ")", value);

        if (fromMode != toMode && value) {

            if (!value.hasError) {
                var wgsLat, wgsLng, tokyoLat, tokyoLng;
                if (fromMode == modes[1].name) {
                    // 現在のモードがTokyoの場合
                    tokyoLat = util.toD(value.lat);
                    tokyoLng = util.toD(value.lng);

                    // WGS取得
                    var latlng = util.tokyoToWgs(tokyoLat, tokyoLng, 6);
                    wgsLat = latlng.lat;
                    wgsLng = latlng.lng;

                    // 表示用丸めWGS
                    var roundedWgsLat = util.round(wgsLat, 6);
                    var roundedWgsLng = util.round(wgsLng, 6);
                } else {
                    // WGS取得
                    wgsLat = util.toD(value.lat);
                    wgsLng = util.toD(value.lng);

                    // 表示用丸めWGS
                    var roundedWgsLat = util.round(wgsLat, 6);
                    var roundedWgsLng = util.round(wgsLng, 6);

                    // 表示用Tokyo
                    var latlng = util.wgsToTokyo(wgsLat, wgsLng, 6);
                    tokyoLat = latlng.lat;
                    tokyoLng = latlng.lng;
                }

                if (toMode == modes[0].name) {

                    console.warn("isDms", isDms[toMode]);
                    if (isDms[toMode]) {
                        // 現在の表示がDMSなら変換
                        roundedWgsLat = util.dToDmsString(wgsLat, 4);
                        roundedWgsLng = util.dToDmsString(wgsLng, 4);
                    }

                    setModeSubModeValue(toMode, modes[0].subMode[0], roundedWgsLat);
                    setModeSubModeValue(toMode, modes[0].subMode[1], roundedWgsLng);

                    setNotationView(modes[0].subMode[0], false);
                    setNotationView(modes[0].subMode[1], false);
                    setValue(toMode, roundedWgsLat, roundedWgsLng, null, false, false, value.source.source, value.lat, value.lng);

                    setModeIsErrorView(toMode, false);
                    setSubmodeIsErrorView(modes[0].subMode[0], false);
                    setSubmodeIsErrorView(modes[0].subMode[1], false);

                } else if (toMode == modes[1].name) {

                    console.warn("isDms", isDms[toMode]);
                    if (isDms[toMode]) {
                        // 現在の表示がDMSなら変換
                        tokyoLat = util.dToDmsString(tokyoLat, 4);
                        tokyoLng = util.dToDmsString(tokyoLng, 4);
                    }

                    setModeSubModeValue(toMode, modes[1].subMode[0], tokyoLat);
                    setModeSubModeValue(toMode, modes[1].subMode[1], tokyoLng);
                    setNotationView(modes[0].subMode[0], false);
                    setNotationView(modes[0].subMode[1], false);
                    setValue(toMode, tokyoLat, tokyoLng, null, false, false, value.source.source, value.lat, value.lng);

                    setModeIsErrorView(toMode, false);
                    setSubmodeIsErrorView(modes[1].subMode[0], false);
                    setSubmodeIsErrorView(modes[2].subMode[1], false);

                } else if (toMode == modes[2].name) {
                    hideMapErrorIcon();
                    if (value.source.source != "gps") {
                        panTo(wgsLat, wgsLng, false);
                        setValue(toMode, wgsLat, wgsLng, null, false, false, value.source.source, value.lat, value.lng);
                    }

                } else if (toMode == modes[3].name) {
                    var latlng = n.latlng(wgsLat, wgsLng);
                    var nCode = n.latlngToNCode(latlng);
                    setModeSubModeValue(toMode, modes[3].subMode[0], nCode.blockName);
                    setModeSubModeValue(toMode, modes[3].subMode[1], nCode.unitName);
                    setModeSubModeValue(toMode, modes[3].subMode[2], nCode.ewMeshName + "-" + nCode.nsMeshName);

                    setValue(toMode, wgsLat, wgsLng, {
                        block: nCode.blockName,
                        unit: nCode.unitName,
                        mesh: nCode.ewMeshName + "-" + nCode.nsMeshName
                    }, false, false, value.source.source, value.lat, value.lng);

                    setModeIsErrorView(toMode, false);
                    setSubmodeIsErrorView(modes[3].subMode[0], false);
                    setSubmodeIsErrorView(modes[3].subMode[1], false);
                    setSubmodeIsErrorView(modes[3].subMode[2], false);

                }
            } else {
                // Error
                if (toMode == modes[0].name) {
                    clearDisplayValueModeLatLng(toMode, false);

                }else if(toMode == modes[1].name){
                    clearDisplayValueModeLatLng(toMode, false);

                }else if (toMode == modes[2].name) {
                    console.log("error map");
                    showMapErrorIcon();

                }else if(toMode == modes[3].name){
                    clearDisplayValueTargetN();
                }
            }
        } else {
            console.log("skip or cancel");
        }

        /*
        modeFlash(toMode);
        */
        console.groupEnd();
    }



    // ************************************************************
    _changeMode(modes[2].name, modes[2].subMode[0]);

    return {
        onKeyPress: function(val) {
            _onKeyPress(val);
        }
    }
}

var c = CoordinateCalculator();
