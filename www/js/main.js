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
            [{ name: "cmv", value: "cmv", icon: "icon-cc-d-dms" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: null, value: null }, { name: "share", value: "shareToOtherModes" }]
        ]
    }, {
        name: 'll-tokyo',
        subMode: [
            'll-tokyo-lat',
            'll-tokyo-lng'
        ],
        keys: [
            [{ name: "cmv", value: "cmv", icon: "icon-cc-d-dms" }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: null, value: null }, { name: "share", value: "shareToOtherModes" }]
        ]
    }, {
        name: 'map',
        subMode: [
            'map-std',
            'map-photo'
        ],
        keys: [
            [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
            [{ name: "zoom<br />in", value: "zoomIn", icon: "icon-cc-zoom_in" }, { name: null, value: null }, { name: "up", value: "up", icon:"icon-cc-arrow_upward"}, { name: null, value: null }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
            [{ name: "zoom<br />out", value: "zoomOut", icon: "icon-cc-zoom_out" }, { name: "left", value: "left", icon:"icon-cc-arrow_back"}, { name: null, value: null }, { name: "right", value: "right", icon:"icon-cc-arrow_forward"}, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
            [{ name: "GPS", value: "gps", icon: "icon-cc-my_location" }, { name: null, value: null }, { name: "down", value: "icon-cc-arrow_downward", icon:"icon-cc-arrow_downward" }, { name: null, value: null }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
            [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null}, { name: null, value: null}, { name: null, value: null }]
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
                [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: ".", value: "." }, { name: null, value: null }, { name: "share", value: "shareToOtherModes" }]
            ],
            "n-unit": [
                [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: "-", value: "-" }, { name: null, value: null }, { name: "share", value: "shareToOtherModes" }]
            ],
            "n-mesh": [
                [{ name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: null, value: null }, { name: 'WGS84', value: 'll-wgs84', icon: 'icon-cc-WGS84' }],
                [{ name: null, value: null }, { name: "7", value: 7 }, { name: "8", value: 8 }, { name: "9", value: 9 }, { name: 'Tokyo', value: 'll-tokyo', icon: 'icon-cc-Tokyo' }],
                [{ name: null, value: null }, { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: 'Map', value: 'map', icon: 'icon-cc-map' }],
                [{ name: "C", value: "c" }, { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "3", value: 3 }, { name: 'n', value: 'n', icon: 'icon-cc-n' }],
                [{ name: "Del", value: "del" }, { name: "0", value: 0 }, { name: "-", value: "-" }, { name: null, value: null }, { name: "share", value: "shareToOtherModes" }]
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
    var n = nCode(); // https://raw.githubusercontent.com/yambal/N-Code/master/nCode.js
    var util = latlng_util();
    //_mapSetup();

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
                _changeMode(val, toSubMode);
                break;

            case modes[1].name:
                var toSubMode = modes[1].subMode[0];
                if (mode == val) {
                    // 同じモードの場合は SubMode を変更する
                    toSubMode = getLatLonPairSubMode(mode, subMode);
                }
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
            case "anc":
                var latlng = setAnchor();
                setValue('map', latlng.lat, latlng.lng, null, false, false, "user", latlng.lat, latlng.lng);
                break;
            case "gps":
                _gpsToggle();
                break;
            case "del":
                deleteDisplayValue();
                break;
            case "c":
                clearDisplayValue();
                break;
            case "cmv":
                comvertDisplayValue();
                break;
            case "shareToOtherModes":
                shareToOtherModes();
                break;
            default:
                addDisplayValue(val);
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

    // モードボタンをフラッシュさせる
    function modeFlash(_mode){
        $("body").addClass('flash-mode-' + _mode);
        setTimeout(function(){
            $("body").removeClass('flash-mode-' + _mode);
        },150);
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
        console.log("subModeIsLat(" + _subMode + ")");
        if (_subMode == modes[0].subMode[0] || _subMode == modes[1].subMode[0]) {
            return true;
        }
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
    }

    // mode/subMode の値から一文字追加
    // バリデーション/エラー判断/Class設定を含む
    function addDisplayValueToTargetLatLng(val) {
        var oldVal = getCurrentModeSubModeValue(false);
        var newVal = oldVal + val;
        setDisplayValueToCurrentLatLng(newVal, 'user', null, null);
    }

    function clearDisplayValueTargetLatLng() {
        setDisplayValueToLatLng(mode, subMode, '');
        var pairSubMode = getPairCurrentSubMode();
        setDisplayValueToLatLng(mode, pairSubMode, '');
        setValue(mode, null, null, null, false, false, 'user', null, null);
    }

    // 指定した mode subMode に値をセットする
    // バリデーションは含まない
    function setModeSubModeValue(_mode, _subMode, value) {
        if (_mode === modes[2].name) {
            // maのとき
            /*
            var lat = _subMode;
            var lng = value;
            map.panTo(new L.LatLng(lat, lng));
            */
            return;
        };
        var target = ".value-" + _mode + "-" + _subMode;
        $(target).html(value);
    }

    // mode/submode に値を、検証を行い、表示を変更、結果を返す
    function setDisplayValueToLatLng(_mode, _subMode, val) {
        var a = subModeIsLat(_subMode);
        console.log(a);
        var validated = validationLatLng(val, a);
        var newVal = validated.value;
        var hasError = validated.error;
        var inputNotationIsDms = util.notationIsDms(newVal);

        setNotationView(_subMode, inputNotationIsDms);
        setSubmodeIsErrorView(_subMode, hasError);

        setModeSubModeValue(_mode, _subMode, newVal);
        return {
            hasError: hasError,
            value: newVal,
            isDms: inputNotationIsDms
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

            map.on('moveend', onMapMoveEnd);

            onMapMoveEnd(null);
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

    //　マップ位置が変更されたとき
    function onMapMoveEnd(event){
    	console.group("onMapMoveEnd(" + event + ")");
    	console.log("event", event);

    	var centerLatLng = map.getCenter();
    	var lat = centerLatLng.lat;
    	var lng = centerLatLng.lng;

    	console.log('lat', lat, 'lng', lng);

    	// 変化を検証
    	var oldval = values[mode];
    	if(!oldval || oldval.lat != lat && oldval.lng != lng){
    		//変化あり
    		setValue(mode, lat, lng, null, false, false, "user", null, null);
    		shareToOtherModes();
    	}else{
    		// 変化なし
    		console.log("no changed");
    	}

    	console.groupEnd();
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

    function setAnchor(lat, lng) {
        console.group();
        console.log("setAnchor(" + lat + ", " + lng + ")");

        var latlang = map.getCenter();
        if (typeof lat !== "undefined" && typeof lng !== "undefined") {
            latlang = L.latLng(lat, lng);
        }

        if (!anchorMarker) {
            anchorMarker = L.marker(latlang, { icon: anchorIcon }).addTo(map);
        } else {
            anchorMarker.setLatLng(latlang);
        } 

        console.log("values", values);
        console.groupEnd();

        return {
            lat:latlang.lat,
            lng:latlang.lng
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

    // 二つの座標表記を比較し、同じ表記かを返す
    function isSameNotation(coordinaryA, ccordinatyB, _default) {
        if (coordinaryA.length > 0 && ccordinatyB.length > 0) {
            var aIsDms = util.notationIsDms(coordinaryA);
            var bIsDms = util.notationIsDms(ccordinatyB);

            return aIsDms == bIsDms;
        }
        return _default;
    }


    // mode/submode に値をセットする
    // バリデーション/エラー判断/Class設定を含む
    function setDisplayValueToCurrentLatLng(val, surceType, sourceLat, sourceLng) {
        var result = setDisplayValueToLatLng(mode, subMode, val);
        var hasError = result.hasError;
        var newVal = result.value;
        var inputNotationIsDms = result.isDms;

        var pairMode = getPairCurrentSubMode();
        var pairVal = getModeSubModeValue(mode, pairMode);

        var isSameN = isSameNotation(newVal, pairVal, true);

        setSubmodeIsErrorView(subMode, hasError || !isSameN);
        setSubmodeIsErrorView(pairMode, !isSameN);

        var lat, lng;
        if (subModeIsLat(subMode)) {
            lat = newVal;
            lng = pairVal;
        } else {
            lat = pairVal;
            lng = newVal;
        }

        setValue(mode, lat, lng, null, hasError || !isSameN, 'toDo', surceType, sourceLat, sourceLng)
    }

    function setValue(mode, lat, lng, nCode, hasError, isDms, sourceType, sourceLat, sourceLng) {
    	console.group("setValue("+mode + "," + lat + "," + lng + "," + nCode + "," + hasError + "," + isDms + "," + sourceType + "," + sourceLat + "," + sourceLng + ")");
        values[mode] = {
            lat: lat,
            lng: lng,
            nCode:nCode,
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
                return {
                    error: true,
                    value: parseInt(d, 10)
                }

            } else if (d < -180 || d > 180) {
                return {
                    error: true,
                    value: parseInt(d, 10)
                }
            }
        }

        if (chack_s.length >= 3) {
            // dms として評価
            if (chack_s.length > 5) {
                return {
                    error: true,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + _zPad2(chack_s[2], "00") + '.' + chack_s[3].substr(0, 3) + '"'
                }
            }

            var m = parseInt(chack_s[1], 10);
            if (m >= 60) {
                return {
                    error: true,
                    value: chack_s[0] + "°" + chack_s[1] + "'"
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
                        value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + chack_s[2] + '"'
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
                    value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + _zPad2(chack_s[2], "00") + "." + chack_s[3].substr(0, 3) + '"'
                }
            }


            if (chack_s.length >= 5) {
                var _sS = "";
                for (var i = 3; i < chack_s.length; i++) {
                    _sS += chack_s[i];
                }
                return {
                    error: false,
                    value: chack_s[0] + "°" + _zPad2(chack_s[1], "00") + "'" + _zPad2(chack_s[2], "00") + '.' + _sS + '"'
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
                    var newLat = util.toD(lat, 6);
                    var newLng = util.toD(lng, 　6);

                    console.log(newLat, newLng);

                    setModeSubModeValue(mode, modeObj.subMode[0], newLat);
                    setModeSubModeValue(mode, modeObj.subMode[1], newLng);

                    setValue(mode, newLat, newLng, null, false, false, mode, lat, lng);

                    // D モード表示に更新
                    setNotationView(subMode, false);
                    setNotationView(getPairCurrentSubMode(), false);

                } else if (!latIsDms && !lngIsDms) {
                    //console.log(lat,lng);
                    var newLat = util.dToDmsString(lat, 4); //dToDms(lat);
                    var newLng = util.dToDmsString(lng, 4); //.dToDms(lng);

                    setModeSubModeValue(mode, modeObj.subMode[0], newLat);
                    setModeSubModeValue(mode, modeObj.subMode[1], newLng);

                    setValue(mode, newLat, newLng, null, false, false, mode, lat, lng);

                    // D モード表示に更新
                    setNotationView(subMode, true);
                    setNotationView(getPairCurrentSubMode(), true);


                }
            }
        }else{
            console.log("cancel");
        }
        console.groupEnd();
    }

    // =============================================================
    // N-code
    function addDisplayValueToTargetNBlock(val) {
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = (oldVal + val).substr(0, 2);

        if (NBlockHasError(newVal)) {

        } else {
            setModeSubModeValue(mode, subMode, newVal);
        }
        onNCodeDisplayChange();
    };

    function NBlockHasError(val) {
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
        if (!isNaN(parseInt(val, 10)) || val == '-') {
            var oldVal = getModeSubModeValue(mode, subMode);
            var newVal = (oldVal + val).substr(0, 9);

            if (nMeshHasError(newVal)) {

            } else {

            }
            setModeSubModeValue(mode, subMode, newVal);
        }
        onNCodeDisplayChange();
    }

    function nMeshHasError(val) {
        var hasError = false;

        if (val.length > 0) {
            var a = val.split('-');
            var meshEW = a[0];
            if (meshEW.length == 0 || meshEW.length > 4) {
                hasError = true;
            }

            var meshSN = '';
            if (a.length >= 2) {
                meshSN = a[1];

                if (meshSN.length == 0 || meshSN.length > 4) {
                    hasError = true;
                }
            }
        }
        setSubmodeIsErrorView('n-mesh', hasError);
        //console.log(meshEW, hasError);
        return hasError
    }

    function deleteDisplayValueToTargetNBlock() {
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setModeSubModeValue(mode, subMode, newVal);
        onNCodeDisplayChange();
    }

    function deleteDisplayValueToTargetNUnit() {
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setModeSubModeValue(mode, subMode, newVal);
        onNCodeDisplayChange();
    }

    function deleteDisplayValueToTargetNMesh() {
        var oldVal = getModeSubModeValue(mode, subMode);
        var newVal = oldVal.substr(0, oldVal.length - 1);
        setModeSubModeValue(mode, subMode, newVal);
        nMeshHasError(newVal);
        onNCodeDisplayChange();
    }

    function clearDisplayValueTargetN() {
        setModeSubModeValue('n', 'n-block', '');
        setModeSubModeValue('n', 'n-unit', '');
        setModeSubModeValue('n', 'n-mesh', '');
        onNCodeDisplayChange();
    }

    function onNCodeDisplayChange() {
        console.group();
        console.log("onNCodeDisplayChange()");

        $('.bound').html("?");
        var b = getModeSubModeValue('n', 'n-block');
        var u = getModeSubModeValue('n', 'n-unit');
        var m = getModeSubModeValue('n', 'n-mesh');

        var bError = NBlockHasError(b);
        var uError = nUnitHasError(u);
        var mError = nMeshHasError(m);

        //console.log(bError, uError, mError);
        
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
                block:b,
                unit:u,
                mesh:m
            }, false, false, "user", null, null);

        }else{
            setValue(modes[3].name, null, null, {
                block:b,
                unit:u,
                mesh:m
            }, true, false, "user", null, null);
        }

        console.log("values", values);
        console.groupEnd();
    }

    function shareToOtherModes() {
        console.group("shareToOtherModes()");

        var value = values[mode];
        shareToMode(mode, modes[0].name, value);
        shareToMode(mode, modes[1].name, value);
        shareToMode(mode, modes[2].name, value);
        shareToMode(mode, modes[3].name, value);

        console.log("values", values);
        console.groupEnd();
    }

    // 現在のモードの値を指定のモードに反映させる
    function shareToMode(fromMode, toMode, value){
        console.group("shareToMode("+fromMode+","+toMode+","+value+")", value);

        if(fromMode != toMode && value && !value.hasError){
            var wgsLat, wgsLng, tokyoLat, tokyoLng;
            if(fromMode == modes[1].name){
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
            }else{
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

            if(toMode == modes[0].name){
                //var setLat = util.round(wgsLat, 6);
                //var setLng = util.round(wgsLng, 6);
                setModeSubModeValue(modes[0].name, modes[0].subMode[0], roundedWgsLat);
                setModeSubModeValue(modes[0].name, modes[0].subMode[1], roundedWgsLng);
                setNotationView(modes[0].subMode[0], false);
                setNotationView(modes[0].subMode[1], false);
                setValue(modes[0].name, roundedWgsLat, roundedWgsLng, null, false, false, fromMode, value.lat, value.lng);

            }else if(toMode == modes[1].name){
                //var setLat = util.round(tokyoLat, 6);
                //var setLng = util.round(tokyoLng, 6);
                setModeSubModeValue(modes[1].name, modes[1].subMode[0], tokyoLat);
                setModeSubModeValue(modes[1].name, modes[1].subMode[1], tokyoLng);
                setNotationView(modes[0].subMode[0], false);
                setNotationView(modes[0].subMode[1], false);
                setValue(modes[1].name, tokyoLat, tokyoLng, null, false, false, fromMode, value.lat, value.lng);

            }else if(toMode == modes[2].name){
                setAnchor(wgsLat, wgsLng);

                map.panTo(new L.LatLng(wgsLat, wgsLng));
                setValue(modes[2].name, wgsLat, wgsLng, null, false, false, fromMode, value.lat, value.lng);

            }else if(toMode == modes[3].name){
                var latlng = n.latlng(wgsLat, wgsLng);
                var nCode = n.latlngToNCode(latlng);
                setModeSubModeValue(modes[3].name, modes[3].subMode[0], nCode.blockName);
                setModeSubModeValue(modes[3].name, modes[3].subMode[1], nCode.unitName);
                setModeSubModeValue(modes[3].name, modes[3].subMode[2], nCode.ewMeshName + "-" + nCode.nsMeshName);

                setValue(modes[3].name, wgsLat, wgsLng, {
                    block:nCode.blockName,
                    unit:nCode.unitName,
                    mesh:nCode.ewMeshName + "-" + nCode.nsMeshName
                }, false, false, fromMode, value.lat, value.lng);
            }
        }


        modeFlash(toMode);
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
