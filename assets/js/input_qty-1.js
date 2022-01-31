/* Js obfuscated only in the demo to avoid copy. Original files are not obfuscated */

function qtySum_tours() {
    var _0x1ecdx2 = document['getElementsByName']('qtyInput_tours');
    var _0x1ecdx3 = 0;
    for (var _0x1ecdx4 = 0; _0x1ecdx4 < _0x1ecdx2['length']; _0x1ecdx4++) {
        if (parseInt(_0x1ecdx2[_0x1ecdx4]['value'])) {
            _0x1ecdx3 += parseInt(_0x1ecdx2[_0x1ecdx4]['value'])
        }
    };
    var _0x1ecdx5 = document['querySelector']('.qtyTotal.tours');
    _0x1ecdx5['innerHTML'] = _0x1ecdx3
}
qtySum_tours();
$(function() {
    $('.qtyButtons.tours input')['after']('<div class="qtyInc tours"></div>');
    $('.qtyButtons.tours input')['before']('<div class="qtyDec tours"></div>');
    $('.qtyDec.tours, .qtyInc.tours')['on']('click', function() {
        var _0x1ecdx6 = $(this);
        var _0x1ecdx7 = _0x1ecdx6['parent']()['find']('input')['val']();
        if (_0x1ecdx6['hasClass']('qtyInc tours')) {
            var _0x1ecdx8 = parseFloat(_0x1ecdx7) + 1
        } else {
            if (_0x1ecdx7 > 0) {
                var _0x1ecdx8 = parseFloat(_0x1ecdx7) - 1
            } else {
                _0x1ecdx8 = 0
            }
        };
        _0x1ecdx6['parent']()['find']('input')['val'](_0x1ecdx8);
        qtySum_tours();
        $('.qtyTotal.tours')['addClass']('rotate-x')
    });

    function _0x1ecdx9() {
        $('.qtyTotal.tours')['removeClass']('rotate-x')
    }
    const _0x1ecdxa = document['querySelector']('.qtyTotal.tours');
    _0x1ecdxa['addEventListener']('animationend', _0x1ecdx9)
});

function qtySum_hotels() {
    var _0x1ecdx2 = document['getElementsByName']('qtyInput_hotels');
    var _0x1ecdx3 = 0;
    for (var _0x1ecdx4 = 0; _0x1ecdx4 < _0x1ecdx2['length']; _0x1ecdx4++) {
        if (parseInt(_0x1ecdx2[_0x1ecdx4]['value'])) {
            _0x1ecdx3 += parseInt(_0x1ecdx2[_0x1ecdx4]['value'])
        }
    };
    var _0x1ecdx5 = document['querySelector']('.qtyTotal.hotels');
    _0x1ecdx5['innerHTML'] = _0x1ecdx3
}
qtySum_hotels();
$(function() {
    $('.qtyButtons.hotels input')['after']('<div class="qtyInc hotels"></div>');
    $('.qtyButtons.hotels input')['before']('<div class="qtyDec hotels"></div>');
    $('.qtyDec.hotels, .qtyInc.hotels')['on']('click', function() {
        var _0x1ecdx6 = $(this);
        var _0x1ecdx7 = _0x1ecdx6['parent']()['find']('input')['val']();
        if (_0x1ecdx6['hasClass']('qtyInc hotels')) {
            var _0x1ecdx8 = parseFloat(_0x1ecdx7) + 1
        } else {
            if (_0x1ecdx7 > 0) {
                var _0x1ecdx8 = parseFloat(_0x1ecdx7) - 1
            } else {
                _0x1ecdx8 = 0
            }
        };
        _0x1ecdx6['parent']()['find']('input')['val'](_0x1ecdx8);
        qtySum_hotels();
        $('.qtyTotal.hotels')['addClass']('rotate-x')
    });

    function _0x1ecdx9() {
        $('.qtyTotal.hotels')['removeClass']('rotate-x')
    }
    const _0x1ecdxa = document['querySelector']('.qtyTotal.hotels');
    _0x1ecdxa['addEventListener']('animationend', _0x1ecdx9)
});

function qtySum_restaurants() {
    var _0x1ecdx2 = document['getElementsByName']('qtyInput_restaurants');
    var _0x1ecdx3 = 0;
    for (var _0x1ecdx4 = 0; _0x1ecdx4 < _0x1ecdx2['length']; _0x1ecdx4++) {
        if (parseInt(_0x1ecdx2[_0x1ecdx4]['value'])) {
            _0x1ecdx3 += parseInt(_0x1ecdx2[_0x1ecdx4]['value'])
        }
    };
    var _0x1ecdx5 = document['querySelector']('.qtyTotal.restaurants');
    _0x1ecdx5['innerHTML'] = _0x1ecdx3
}
qtySum_restaurants();
$(function() {
    $('.qtyButtons.restaurants input')['after']('<div class="qtyInc restaurants"></div>');
    $('.qtyButtons.restaurants input')['before']('<div class="qtyDec restaurants"></div>');
    $('.qtyDec.restaurants, .qtyInc.restaurants')['on']('click', function() {
        var _0x1ecdx6 = $(this);
        var _0x1ecdx7 = _0x1ecdx6['parent']()['find']('input')['val']();
        if (_0x1ecdx6['hasClass']('qtyInc restaurants')) {
            var _0x1ecdx8 = parseFloat(_0x1ecdx7) + 1
        } else {
            if (_0x1ecdx7 > 0) {
                var _0x1ecdx8 = parseFloat(_0x1ecdx7) - 1
            } else {
                _0x1ecdx8 = 0
            }
        };
        _0x1ecdx6['parent']()['find']('input')['val'](_0x1ecdx8);
        qtySum_restaurants();
        $('.qtyTotal.restaurants')['addClass']('rotate-x')
    });

    function _0x1ecdx9() {
        $('.qtyTotal.restaurants')['removeClass']('rotate-x')
    }
    const _0x1ecdxa = document['querySelector']('.qtyTotal.restaurants');
    _0x1ecdxa['addEventListener']('animationend', _0x1ecdx9)
})