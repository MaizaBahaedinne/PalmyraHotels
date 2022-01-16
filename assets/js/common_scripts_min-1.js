!(function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
                ? e(exports, require("jquery"))
                : "function" == typeof define && define.amd
                ? define(["exports", "jquery"], e)
                : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}), t.jQuery);
})(this, function (t, e) {
        "use strict";
        function i(t) {
                return t && "object" == typeof t && "default" in t ? t : { default: t };
        }
        var c = i(e);
        function s(t, e) {
                for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                }
        }
        function a(t, e, i) {
                return e && s(t.prototype, e), i && s(t, i), t;
        }
        function r() {
                return (r =
                        Object.assign ||
                        function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                        var i,
                                                s = arguments[e];
                                        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
                                }
                                return t;
                        }).apply(this, arguments);
        }
        var n = "transitionend";
        function o(t) {
                var e = this,
                        i = !1;
                return (
                        c.default(this).one(d.TRANSITION_END, function () {
                                i = !0;
                        }),
                        setTimeout(function () {
                                i || d.triggerTransitionEnd(e);
                        }, t),
                        this
                );
        }
        var d = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
                        return t;
                },
                getSelectorFromElement: function (t) {
                        var e = t.getAttribute("data-target");
                        (e && "#" !== e) || (e = (t = t.getAttribute("href")) && "#" !== t ? t.trim() : "");
                        try {
                                return document.querySelector(e) ? e : null;
                        } catch (t) {
                                return null;
                        }
                },
                getTransitionDurationFromElement: function (t) {
                        if (!t) return 0;
                        var e = c.default(t).css("transition-duration"),
                                i = c.default(t).css("transition-delay"),
                                s = parseFloat(e),
                                t = parseFloat(i);
                        return s || t ? ((e = e.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(e) + parseFloat(i))) : 0;
                },
                reflow: function (t) {
                        return t.offsetHeight;
                },
                triggerTransitionEnd: function (t) {
                        c.default(t).trigger(n);
                },
                supportsTransitionEnd: function () {
                        return Boolean(n);
                },
                isElement: function (t) {
                        return (t[0] || t).nodeType;
                },
                typeCheckConfig: function (t, e, i) {
                        for (var s in i)
                                if (Object.prototype.hasOwnProperty.call(i, s)) {
                                        var n = i[s],
                                                o = e[s],
                                                a =
                                                        o && d.isElement(o)
                                                                ? "element"
                                                                : null == (a = o)
                                                                ? "" + a
                                                                : {}.toString
                                                                          .call(a)
                                                                          .match(/\s([a-z]+)/i)[1]
                                                                          .toLowerCase();
                                        if (!new RegExp(n).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + n + '".');
                                }
                        var a;
                },
                findShadowRoot: function (t) {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? d.findShadowRoot(t.parentNode) : null;
                        t = t.getRootNode();
                        return t instanceof ShadowRoot ? t : null;
                },
                jQueryDetection: function () {
                        if (void 0 === c.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                        var t = c.default.fn.jquery.split(" ")[0].split(".");
                        if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
                },
        };
        d.jQueryDetection(),
                (c.default.fn.emulateTransitionEnd = o),
                (c.default.event.special[d.TRANSITION_END] = {
                        bindType: n,
                        delegateType: n,
                        handle: function (t) {
                                if (c.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                        },
                });
        var l = "alert",
                h = "bs.alert",
                u = "." + h,
                f = c.default.fn[l],
                p = (function () {
                        function s(t) {
                                this._element = t;
                        }
                        var t = s.prototype;
                        return (
                                (t.close = function (t) {
                                        var e = this._element;
                                        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                                }),
                                (t.dispose = function () {
                                        c.default.removeData(this._element, h), (this._element = null);
                                }),
                                (t._getRootElement = function (t) {
                                        var e = d.getSelectorFromElement(t),
                                                i = !1;
                                        return e && (i = document.querySelector(e)), (i = i || c.default(t).closest(".alert")[0]);
                                }),
                                (t._triggerCloseEvent = function (t) {
                                        var e = c.default.Event("close.bs.alert");
                                        return c.default(t).trigger(e), e;
                                }),
                                (t._removeElement = function (e) {
                                        var t,
                                                i = this;
                                        c.default(e).removeClass("show"),
                                                c.default(e).hasClass("fade")
                                                        ? ((t = d.getTransitionDurationFromElement(e)),
                                                          c
                                                                  .default(e)
                                                                  .one(d.TRANSITION_END, function (t) {
                                                                          return i._destroyElement(e, t);
                                                                  })
                                                                  .emulateTransitionEnd(t))
                                                        : this._destroyElement(e);
                                }),
                                (t._destroyElement = function (t) {
                                        c.default(t).detach().trigger("closed.bs.alert").remove();
                                }),
                                (s._jQueryInterface = function (i) {
                                        return this.each(function () {
                                                var t = c.default(this),
                                                        e = t.data(h);
                                                e || ((e = new s(this)), t.data(h, e)), "close" === i && e[i](this);
                                        });
                                }),
                                (s._handleDismiss = function (e) {
                                        return function (t) {
                                                t && t.preventDefault(), e.close(this);
                                        };
                                }),
                                a(s, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                ]),
                                s
                        );
                })();
        c.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', p._handleDismiss(new p())),
                (c.default.fn[l] = p._jQueryInterface),
                (c.default.fn[l].Constructor = p),
                (c.default.fn[l].noConflict = function () {
                        return (c.default.fn[l] = f), p._jQueryInterface;
                });
        var m = "button",
                g = "bs.button",
                _ = "." + g,
                e = ".data-api",
                v = c.default.fn[m],
                y = "active",
                u = '[data-toggle^="button"]',
                w = 'input:not([type="hidden"])',
                b = ".btn",
                x = (function () {
                        function n(t) {
                                (this._element = t), (this.shouldAvoidTriggerChange = !1);
                        }
                        var t = n.prototype;
                        return (
                                (t.toggle = function () {
                                        var t,
                                                e = !0,
                                                i = !0,
                                                s = c.default(this._element).closest('[data-toggle="buttons"]')[0];
                                        !s ||
                                                ((t = this._element.querySelector(w)) &&
                                                        ("radio" === t.type && (t.checked && this._element.classList.contains(y) ? (e = !1) : (s = s.querySelector(".active")) && c.default(s).removeClass(y)),
                                                        e && (("checkbox" !== t.type && "radio" !== t.type) || (t.checked = !this._element.classList.contains(y)), this.shouldAvoidTriggerChange || c.default(t).trigger("change")),
                                                        t.focus(),
                                                        (i = !1))),
                                                this._element.hasAttribute("disabled") ||
                                                        this._element.classList.contains("disabled") ||
                                                        (i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), e && c.default(this._element).toggleClass(y));
                                }),
                                (t.dispose = function () {
                                        c.default.removeData(this._element, g), (this._element = null);
                                }),
                                (n._jQueryInterface = function (i, s) {
                                        return this.each(function () {
                                                var t = c.default(this),
                                                        e = t.data(g);
                                                e || ((e = new n(this)), t.data(g, e)), (e.shouldAvoidTriggerChange = s), "toggle" === i && e[i]();
                                        });
                                }),
                                a(n, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                ]),
                                n
                        );
                })();
        c
                .default(document)
                .on("click.bs.button.data-api", u, function (t) {
                        var e,
                                i = t.target,
                                s = i;
                        c.default(i).hasClass("btn") || (i = c.default(i).closest(b)[0]),
                                !i || i.hasAttribute("disabled") || i.classList.contains("disabled") || ((e = i.querySelector(w)) && (e.hasAttribute("disabled") || e.classList.contains("disabled")))
                                        ? t.preventDefault()
                                        : ("INPUT" !== s.tagName && "LABEL" === i.tagName) || x._jQueryInterface.call(c.default(i), "toggle", "INPUT" === s.tagName);
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", u, function (t) {
                        var e = c.default(t.target).closest(b)[0];
                        c.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
                }),
                c.default(window).on("load.bs.button.data-api", function () {
                        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, i = t.length; e < i; e++) {
                                var s = t[e],
                                        n = s.querySelector(w);
                                n.checked || n.hasAttribute("checked") ? s.classList.add(y) : s.classList.remove(y);
                        }
                        for (var o = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
                                var r = t[o];
                                "true" === r.getAttribute("aria-pressed") ? r.classList.add(y) : r.classList.remove(y);
                        }
                }),
                (c.default.fn[m] = x._jQueryInterface),
                (c.default.fn[m].Constructor = x),
                (c.default.fn[m].noConflict = function () {
                        return (c.default.fn[m] = v), x._jQueryInterface;
                });
        var k = "carousel",
                C = "bs.carousel",
                D = "." + C,
                _ = ".data-api",
                S = c.default.fn[k],
                T = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                E = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                M = "next",
                O = "prev",
                P = "slid" + D,
                I = "active",
                $ = ".active.carousel-item",
                A = { TOUCH: "touch", PEN: "pen" },
                Y = (function () {
                        function n(t, e) {
                                (this._items = null),
                                        (this._interval = null),
                                        (this._activeElement = null),
                                        (this._isPaused = !1),
                                        (this._isSliding = !1),
                                        (this.touchTimeout = null),
                                        (this.touchStartX = 0),
                                        (this.touchDeltaX = 0),
                                        (this._config = this._getConfig(e)),
                                        (this._element = t),
                                        (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                                        (this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints),
                                        (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                                        this._addEventListeners();
                        }
                        var t = n.prototype;
                        return (
                                (t.next = function () {
                                        this._isSliding || this._slide(M);
                                }),
                                (t.nextWhenVisible = function () {
                                        var t = c.default(this._element);
                                        !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
                                }),
                                (t.prev = function () {
                                        this._isSliding || this._slide(O);
                                }),
                                (t.pause = function (t) {
                                        t || (this._isPaused = !0),
                                                this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)),
                                                clearInterval(this._interval),
                                                (this._interval = null);
                                }),
                                (t.cycle = function (t) {
                                        t || (this._isPaused = !1),
                                                this._interval && (clearInterval(this._interval), (this._interval = null)),
                                                this._config.interval &&
                                                        !this._isPaused &&
                                                        (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
                                }),
                                (t.to = function (t) {
                                        var e = this;
                                        this._activeElement = this._element.querySelector($);
                                        var i = this._getItemIndex(this._activeElement);
                                        if (!(t > this._items.length - 1 || t < 0))
                                                if (this._isSliding)
                                                        c.default(this._element).one(P, function () {
                                                                return e.to(t);
                                                        });
                                                else {
                                                        if (i === t) return this.pause(), void this.cycle();
                                                        i = i < t ? M : O;
                                                        this._slide(i, this._items[t]);
                                                }
                                }),
                                (t.dispose = function () {
                                        c.default(this._element).off(D),
                                                c.default.removeData(this._element, C),
                                                (this._items = null),
                                                (this._config = null),
                                                (this._element = null),
                                                (this._interval = null),
                                                (this._isPaused = null),
                                                (this._isSliding = null),
                                                (this._activeElement = null),
                                                (this._indicatorsElement = null);
                                }),
                                (t._getConfig = function (t) {
                                        return (t = r({}, T, t)), d.typeCheckConfig(k, t, E), t;
                                }),
                                (t._handleSwipe = function () {
                                        var t = Math.abs(this.touchDeltaX);
                                        t <= 40 || ((t = t / this.touchDeltaX), (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next());
                                }),
                                (t._addEventListeners = function () {
                                        var e = this;
                                        this._config.keyboard &&
                                                c.default(this._element).on("keydown.bs.carousel", function (t) {
                                                        return e._keydown(t);
                                                }),
                                                "hover" === this._config.pause &&
                                                        c
                                                                .default(this._element)
                                                                .on("mouseenter.bs.carousel", function (t) {
                                                                        return e.pause(t);
                                                                })
                                                                .on("mouseleave.bs.carousel", function (t) {
                                                                        return e.cycle(t);
                                                                }),
                                                this._config.touch && this._addTouchEventListeners();
                                }),
                                (t._addTouchEventListeners = function () {
                                        var t,
                                                e,
                                                i = this;
                                        this._touchSupported &&
                                                ((t = function (t) {
                                                        i._pointerEvent && A[t.originalEvent.pointerType.toUpperCase()] ? (i.touchStartX = t.originalEvent.clientX) : i._pointerEvent || (i.touchStartX = t.originalEvent.touches[0].clientX);
                                                }),
                                                (e = function (t) {
                                                        i._pointerEvent && A[t.originalEvent.pointerType.toUpperCase()] && (i.touchDeltaX = t.originalEvent.clientX - i.touchStartX),
                                                                i._handleSwipe(),
                                                                "hover" === i._config.pause &&
                                                                        (i.pause(),
                                                                        i.touchTimeout && clearTimeout(i.touchTimeout),
                                                                        (i.touchTimeout = setTimeout(function (t) {
                                                                                return i.cycle(t);
                                                                        }, 500 + i._config.interval)));
                                                }),
                                                c.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
                                                        return t.preventDefault();
                                                }),
                                                this._pointerEvent
                                                        ? (c.default(this._element).on("pointerdown.bs.carousel", t), c.default(this._element).on("pointerup.bs.carousel", e), this._element.classList.add("pointer-event"))
                                                        : (c.default(this._element).on("touchstart.bs.carousel", t),
                                                          c.default(this._element).on("touchmove.bs.carousel", function (t) {
                                                                  (t = t).originalEvent.touches && 1 < t.originalEvent.touches.length ? (i.touchDeltaX = 0) : (i.touchDeltaX = t.originalEvent.touches[0].clientX - i.touchStartX);
                                                          }),
                                                          c.default(this._element).on("touchend.bs.carousel", e)));
                                }),
                                (t._keydown = function (t) {
                                        if (!/input|textarea/i.test(t.target.tagName))
                                                switch (t.which) {
                                                        case 37:
                                                                t.preventDefault(), this.prev();
                                                                break;
                                                        case 39:
                                                                t.preventDefault(), this.next();
                                                }
                                }),
                                (t._getItemIndex = function (t) {
                                        return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(t);
                                }),
                                (t._getItemByDirection = function (t, e) {
                                        var i = t === M,
                                                s = t === O,
                                                n = this._getItemIndex(e),
                                                o = this._items.length - 1;
                                        if (((s && 0 === n) || (i && n === o)) && !this._config.wrap) return e;
                                        t = (n + (t === O ? -1 : 1)) % this._items.length;
                                        return -1 == t ? this._items[this._items.length - 1] : this._items[t];
                                }),
                                (t._triggerSlideEvent = function (t, e) {
                                        var i = this._getItemIndex(t),
                                                s = this._getItemIndex(this._element.querySelector($)),
                                                i = c.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: s, to: i });
                                        return c.default(this._element).trigger(i), i;
                                }),
                                (t._setActiveIndicatorElement = function (t) {
                                        var e;
                                        this._indicatorsElement &&
                                                ((e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"))),
                                                c.default(e).removeClass(I),
                                                (t = this._indicatorsElement.children[this._getItemIndex(t)]) && c.default(t).addClass(I));
                                }),
                                (t._updateInterval = function () {
                                        var t = this._activeElement || this._element.querySelector($);
                                        t &&
                                                ((t = parseInt(t.getAttribute("data-interval"), 10))
                                                        ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t))
                                                        : (this._config.interval = this._config.defaultInterval || this._config.interval));
                                }),
                                (t._slide = function (t, e) {
                                        var i,
                                                s,
                                                n,
                                                o = this,
                                                a = this._element.querySelector($),
                                                r = this._getItemIndex(a),
                                                l = e || (a && this._getItemByDirection(t, a)),
                                                h = this._getItemIndex(l),
                                                e = Boolean(this._interval),
                                                t = t === M ? ((i = "carousel-item-left"), (s = "carousel-item-next"), "left") : ((i = "carousel-item-right"), (s = "carousel-item-prev"), "right");
                                        l && c.default(l).hasClass(I)
                                                ? (this._isSliding = !1)
                                                : this._triggerSlideEvent(l, t).isDefaultPrevented() ||
                                                  (a &&
                                                          l &&
                                                          ((this._isSliding = !0),
                                                          e && this.pause(),
                                                          this._setActiveIndicatorElement(l),
                                                          (this._activeElement = l),
                                                          (n = c.default.Event(P, { relatedTarget: l, direction: t, from: r, to: h })),
                                                          c.default(this._element).hasClass("slide")
                                                                  ? (c.default(l).addClass(s),
                                                                    d.reflow(l),
                                                                    c.default(a).addClass(i),
                                                                    c.default(l).addClass(i),
                                                                    (h = d.getTransitionDurationFromElement(a)),
                                                                    c
                                                                            .default(a)
                                                                            .one(d.TRANSITION_END, function () {
                                                                                    c
                                                                                            .default(l)
                                                                                            .removeClass(i + " " + s)
                                                                                            .addClass(I),
                                                                                            c.default(a).removeClass(I + " " + s + " " + i),
                                                                                            (o._isSliding = !1),
                                                                                            setTimeout(function () {
                                                                                                    return c.default(o._element).trigger(n);
                                                                                            }, 0);
                                                                            })
                                                                            .emulateTransitionEnd(h))
                                                                  : (c.default(a).removeClass(I), c.default(l).addClass(I), (this._isSliding = !1), c.default(this._element).trigger(n)),
                                                          e && this.cycle()));
                                }),
                                (n._jQueryInterface = function (s) {
                                        return this.each(function () {
                                                var t = c.default(this).data(C),
                                                        e = r({}, T, c.default(this).data());
                                                "object" == typeof s && (e = r({}, e, s));
                                                var i = "string" == typeof s ? s : e.slide;
                                                if ((t || ((t = new n(this, e)), c.default(this).data(C, t)), "number" == typeof s)) t.to(s);
                                                else if ("string" == typeof i) {
                                                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                                        t[i]();
                                                } else e.interval && e.ride && (t.pause(), t.cycle());
                                        });
                                }),
                                (n._dataApiClickHandler = function (t) {
                                        var e,
                                                i,
                                                s = d.getSelectorFromElement(this);
                                        !s ||
                                                ((e = c.default(s)[0]) &&
                                                        c.default(e).hasClass("carousel") &&
                                                        ((i = r({}, c.default(e).data(), c.default(this).data())),
                                                        (s = this.getAttribute("data-slide-to")) && (i.interval = !1),
                                                        n._jQueryInterface.call(c.default(e), i),
                                                        s && c.default(e).data(C).to(s),
                                                        t.preventDefault()));
                                }),
                                a(n, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return T;
                                                },
                                        },
                                ]),
                                n
                        );
                })();
        c.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", Y._dataApiClickHandler),
                c.default(window).on("load.bs.carousel.data-api", function () {
                        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, i = t.length; e < i; e++) {
                                var s = c.default(t[e]);
                                Y._jQueryInterface.call(s, s.data());
                        }
                }),
                (c.default.fn[k] = Y._jQueryInterface),
                (c.default.fn[k].Constructor = Y),
                (c.default.fn[k].noConflict = function () {
                        return (c.default.fn[k] = S), Y._jQueryInterface;
                });
        var N = "collapse",
                F = "bs.collapse",
                e = "." + F,
                L = c.default.fn[N],
                H = { toggle: !0, parent: "" },
                W = { toggle: "boolean", parent: "(string|element)" },
                R = "show",
                j = "collapse",
                z = "collapsing",
                B = "collapsed",
                U = '[data-toggle="collapse"]',
                V = (function () {
                        function o(e, t) {
                                (this._isTransitioning = !1),
                                        (this._element = e),
                                        (this._config = this._getConfig(t)),
                                        (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                                for (var i = [].slice.call(document.querySelectorAll(U)), s = 0, n = i.length; s < n; s++) {
                                        var o = i[s],
                                                a = d.getSelectorFromElement(o),
                                                r = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                                                        return t === e;
                                                });
                                        null !== a && 0 < r.length && ((this._selector = a), this._triggerArray.push(o));
                                }
                                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                        }
                        var t = o.prototype;
                        return (
                                (t.toggle = function () {
                                        c.default(this._element).hasClass(R) ? this.hide() : this.show();
                                }),
                                (t.show = function () {
                                        var t,
                                                e,
                                                i,
                                                s,
                                                n = this;
                                        this._isTransitioning ||
                                                c.default(this._element).hasClass(R) ||
                                                (this._parent &&
                                                        0 ===
                                                                (s = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                                                                        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(j);
                                                                })).length &&
                                                        (s = null),
                                                (s && (i = c.default(s).not(this._selector).data(F)) && i._isTransitioning) ||
                                                        ((t = c.default.Event("show.bs.collapse")),
                                                        c.default(this._element).trigger(t),
                                                        t.isDefaultPrevented() ||
                                                                (s && (o._jQueryInterface.call(c.default(s).not(this._selector), "hide"), i || c.default(s).data(F, null)),
                                                                (e = this._getDimension()),
                                                                c.default(this._element).removeClass(j).addClass(z),
                                                                (this._element.style[e] = 0),
                                                                this._triggerArray.length && c.default(this._triggerArray).removeClass(B).attr("aria-expanded", !0),
                                                                this.setTransitioning(!0),
                                                                (i = "scroll" + (e[0].toUpperCase() + e.slice(1))),
                                                                (s = d.getTransitionDurationFromElement(this._element)),
                                                                c
                                                                        .default(this._element)
                                                                        .one(d.TRANSITION_END, function () {
                                                                                c
                                                                                        .default(n._element)
                                                                                        .removeClass(z)
                                                                                        .addClass(j + " " + R),
                                                                                        (n._element.style[e] = ""),
                                                                                        n.setTransitioning(!1),
                                                                                        c.default(n._element).trigger("shown.bs.collapse");
                                                                        })
                                                                        .emulateTransitionEnd(s),
                                                                (this._element.style[e] = this._element[i] + "px"))));
                                }),
                                (t.hide = function () {
                                        var t = this;
                                        if (!this._isTransitioning && c.default(this._element).hasClass(R)) {
                                                var e = c.default.Event("hide.bs.collapse");
                                                if ((c.default(this._element).trigger(e), !e.isDefaultPrevented())) {
                                                        e = this._getDimension();
                                                        (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px"),
                                                                d.reflow(this._element),
                                                                c
                                                                        .default(this._element)
                                                                        .addClass(z)
                                                                        .removeClass(j + " " + R);
                                                        var i = this._triggerArray.length;
                                                        if (0 < i)
                                                                for (var s = 0; s < i; s++) {
                                                                        var n = this._triggerArray[s],
                                                                                o = d.getSelectorFromElement(n);
                                                                        null !== o && (c.default([].slice.call(document.querySelectorAll(o))).hasClass(R) || c.default(n).addClass(B).attr("aria-expanded", !1));
                                                                }
                                                        this.setTransitioning(!0);
                                                        this._element.style[e] = "";
                                                        e = d.getTransitionDurationFromElement(this._element);
                                                        c.default(this._element)
                                                                .one(d.TRANSITION_END, function () {
                                                                        t.setTransitioning(!1), c.default(t._element).removeClass(z).addClass(j).trigger("hidden.bs.collapse");
                                                                })
                                                                .emulateTransitionEnd(e);
                                                }
                                        }
                                }),
                                (t.setTransitioning = function (t) {
                                        this._isTransitioning = t;
                                }),
                                (t.dispose = function () {
                                        c.default.removeData(this._element, F), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                                }),
                                (t._getConfig = function (t) {
                                        return ((t = r({}, H, t)).toggle = Boolean(t.toggle)), d.typeCheckConfig(N, t, W), t;
                                }),
                                (t._getDimension = function () {
                                        return c.default(this._element).hasClass("width") ? "width" : "height";
                                }),
                                (t._getParent = function () {
                                        var t,
                                                i = this;
                                        d.isElement(this._config.parent) ? ((t = this._config.parent), void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                                        var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                                e = [].slice.call(t.querySelectorAll(e));
                                        return (
                                                c.default(e).each(function (t, e) {
                                                        i._addAriaAndCollapsedClass(o._getTargetFromElement(e), [e]);
                                                }),
                                                t
                                        );
                                }),
                                (t._addAriaAndCollapsedClass = function (t, e) {
                                        t = c.default(t).hasClass(R);
                                        e.length && c.default(e).toggleClass(B, !t).attr("aria-expanded", t);
                                }),
                                (o._getTargetFromElement = function (t) {
                                        t = d.getSelectorFromElement(t);
                                        return t ? document.querySelector(t) : null;
                                }),
                                (o._jQueryInterface = function (s) {
                                        return this.each(function () {
                                                var t = c.default(this),
                                                        e = t.data(F),
                                                        i = r({}, H, t.data(), "object" == typeof s && s ? s : {});
                                                if ((!e && i.toggle && "string" == typeof s && /show|hide/.test(s) && (i.toggle = !1), e || ((e = new o(this, i)), t.data(F, e)), "string" == typeof s)) {
                                                        if (void 0 === e[s]) throw new TypeError('No method named "' + s + '"');
                                                        e[s]();
                                                }
                                        });
                                }),
                                a(o, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return H;
                                                },
                                        },
                                ]),
                                o
                        );
                })();
        c.default(document).on("click.bs.collapse.data-api", U, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = c.default(this),
                        t = d.getSelectorFromElement(this),
                        t = [].slice.call(document.querySelectorAll(t));
                c.default(t).each(function () {
                        var t = c.default(this),
                                e = t.data(F) ? "toggle" : i.data();
                        V._jQueryInterface.call(t, e);
                });
        }),
                (c.default.fn[N] = V._jQueryInterface),
                (c.default.fn[N].Constructor = V),
                (c.default.fn[N].noConflict = function () {
                        return (c.default.fn[N] = L), V._jQueryInterface;
                });
        var q = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                G = (function () {
                        for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (q && 0 <= navigator.userAgent.indexOf(t[e])) return 1;
                        return 0;
                })();
        var Q =
                q && window.Promise
                        ? function (t) {
                                  var e = !1;
                                  return function () {
                                          e ||
                                                  ((e = !0),
                                                  window.Promise.resolve().then(function () {
                                                          (e = !1), t();
                                                  }));
                                  };
                          }
                        : function (t) {
                                  var e = !1;
                                  return function () {
                                          e ||
                                                  ((e = !0),
                                                  setTimeout(function () {
                                                          (e = !1), t();
                                                  }, G));
                                  };
                          };
        function Z(t) {
                return t && "[object Function]" === {}.toString.call(t);
        }
        function X(t, e) {
                if (1 !== t.nodeType) return [];
                t = t.ownerDocument.defaultView.getComputedStyle(t, null);
                return e ? t[e] : t;
        }
        function K(t) {
                return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function J(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                        case "HTML":
                        case "BODY":
                                return t.ownerDocument.body;
                        case "#document":
                                return t.body;
                }
                var e = X(t),
                        i = e.overflow,
                        s = e.overflowX,
                        e = e.overflowY;
                return /(auto|scroll|overlay)/.test(i + e + s) ? t : J(K(t));
        }
        function tt(t) {
                return t && t.referenceNode ? t.referenceNode : t;
        }
        var et = q && !(!window.MSInputMethodContext || !document.documentMode),
                it = q && /MSIE 10/.test(navigator.userAgent);
        function st(t) {
                return 11 === t ? et : (10 !== t && et) || it;
        }
        function nt(t) {
                if (!t) return document.documentElement;
                for (var e = st(10) ? document.body : null, i = t.offsetParent || null; i === e && t.nextElementSibling; ) i = (t = t.nextElementSibling).offsetParent;
                var s = i && i.nodeName;
                return s && "BODY" !== s && "HTML" !== s ? (-1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === X(i, "position") ? nt(i) : i) : (t ? t.ownerDocument : document).documentElement;
        }
        function ot(t) {
                return null !== t.parentNode ? ot(t.parentNode) : t;
        }
        function at(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                        s = i ? t : e,
                        n = i ? e : t,
                        i = document.createRange();
                i.setStart(s, 0), i.setEnd(n, 0);
                i = i.commonAncestorContainer;
                if ((t !== i && e !== i) || s.contains(n)) return "BODY" === (n = (s = i).nodeName) || ("HTML" !== n && nt(s.firstElementChild) !== s) ? nt(i) : i;
                i = ot(t);
                return i.host ? at(i.host, e) : at(t, ot(e).host);
        }
        function rt(t, e) {
                var i = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft",
                        e = t.nodeName;
                if ("BODY" !== e && "HTML" !== e) return t[i];
                e = t.ownerDocument.documentElement;
                return (t.ownerDocument.scrollingElement || e)[i];
        }
        function lt(t, e) {
                var i = "x" === e ? "Left" : "Top",
                        e = "Left" == i ? "Right" : "Bottom";
                return parseFloat(t["border" + i + "Width"]) + parseFloat(t["border" + e + "Width"]);
        }
        function ht(t, e, i, s) {
                return Math.max(
                        e["offset" + t],
                        e["scroll" + t],
                        i["client" + t],
                        i["offset" + t],
                        i["scroll" + t],
                        st(10) ? parseInt(i["offset" + t]) + parseInt(s["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(s["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0
                );
        }
        function ct(t) {
                var e = t.body,
                        i = t.documentElement,
                        t = st(10) && getComputedStyle(i);
                return { height: ht("Height", e, i, t), width: ht("Width", e, i, t) };
        }
        var dt = function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                },
                u = function (t, e, i) {
                        return e && ut(t.prototype, e), i && ut(t, i), t;
                };
        function ut(t, e) {
                for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                }
        }
        function ft(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
        }
        var pt =
                Object.assign ||
                function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                                var i,
                                        s = arguments[e];
                                for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
                        }
                        return t;
                };
        function mt(t) {
                return pt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
        }
        function gt(t) {
                var e,
                        i,
                        s = {};
                try {
                        st(10) ? ((s = t.getBoundingClientRect()), (e = rt(t, "top")), (i = rt(t, "left")), (s.top += e), (s.left += i), (s.bottom += e), (s.right += i)) : (s = t.getBoundingClientRect());
                } catch (t) {}
                var n = { left: s.left, top: s.top, width: s.right - s.left, height: s.bottom - s.top },
                        o = "HTML" === t.nodeName ? ct(t.ownerDocument) : {},
                        a = o.width || t.clientWidth || n.width,
                        r = o.height || t.clientHeight || n.height,
                        o = t.offsetWidth - a,
                        a = t.offsetHeight - r;
                return (o || a) && ((o -= lt((r = X(t)), "x")), (a -= lt(r, "y")), (n.width -= o), (n.height -= a)), mt(n);
        }
        function _t(t, e, i) {
                var s = 2 < arguments.length && void 0 !== i && i,
                        n = st(10),
                        o = "HTML" === e.nodeName,
                        a = gt(t),
                        r = gt(e),
                        l = J(t),
                        h = X(e),
                        i = parseFloat(h.borderTopWidth),
                        t = parseFloat(h.borderLeftWidth);
                s && o && ((r.top = Math.max(r.top, 0)), (r.left = Math.max(r.left, 0)));
                a = mt({ top: a.top - r.top - i, left: a.left - r.left - t, width: a.width, height: a.height });
                return (
                        (a.marginTop = 0),
                        (a.marginLeft = 0),
                        !n && o && ((o = parseFloat(h.marginTop)), (h = parseFloat(h.marginLeft)), (a.top -= i - o), (a.bottom -= i - o), (a.left -= t - h), (a.right -= t - h), (a.marginTop = o), (a.marginLeft = h)),
                        (n && !s ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
                                (a = (function (t, e, i) {
                                        var s = 2 < arguments.length && void 0 !== i && i,
                                                i = rt(e, "top"),
                                                e = rt(e, "left"),
                                                s = s ? -1 : 1;
                                        return (t.top += i * s), (t.bottom += i * s), (t.left += e * s), (t.right += e * s), t;
                                })(a, e)),
                        a
                );
        }
        function vt(t) {
                if (!t || !t.parentElement || st()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === X(e, "transform"); ) e = e.parentElement;
                return e || document.documentElement;
        }
        function yt(t, e, i, s, n) {
                var o = 4 < arguments.length && void 0 !== n && n,
                        a = { top: 0, left: 0 },
                        r = o ? vt(t) : at(t, tt(e));
                "viewport" === s
                        ? (a = (function (t, e) {
                                  var i = 1 < arguments.length && void 0 !== e && e,
                                          s = t.ownerDocument.documentElement,
                                          n = _t(t, s),
                                          o = Math.max(s.clientWidth, window.innerWidth || 0),
                                          e = Math.max(s.clientHeight, window.innerHeight || 0),
                                          t = i ? 0 : rt(s),
                                          s = i ? 0 : rt(s, "left");
                                  return mt({ top: t - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: o, height: e });
                          })(r, o))
                        : ((n = void 0),
                          "scrollParent" === s ? "BODY" === (n = J(K(e))).nodeName && (n = t.ownerDocument.documentElement) : (n = "window" === s ? t.ownerDocument.documentElement : s),
                          (l = _t(n, r, o)),
                          "HTML" !== n.nodeName ||
                          (function t(e) {
                                  var i = e.nodeName;
                                  if ("BODY" === i || "HTML" === i) return !1;
                                  if ("fixed" === X(e, "position")) return !0;
                                  e = K(e);
                                  return !!e && t(e);
                          })(r)
                                  ? (a = l)
                                  : ((t = (r = ct(t.ownerDocument)).height), (r = r.width), (a.top += l.top - l.marginTop), (a.bottom = t + l.top), (a.left += l.left - l.marginLeft), (a.right = r + l.left)));
                var l = "number" == typeof (i = i || 0);
                return (a.left += l ? i : i.left || 0), (a.top += l ? i : i.top || 0), (a.right -= l ? i : i.right || 0), (a.bottom -= l ? i : i.bottom || 0), a;
        }
        function wt(t, e, i, s, n, o) {
                o = 5 < arguments.length && void 0 !== o ? o : 0;
                if (-1 === t.indexOf("auto")) return t;
                var n = yt(i, s, o, n),
                        a = {
                                top: { width: n.width, height: e.top - n.top },
                                right: { width: n.right - e.right, height: n.height },
                                bottom: { width: n.width, height: n.bottom - e.bottom },
                                left: { width: e.left - n.left, height: n.height },
                        },
                        e = Object.keys(a)
                                .map(function (t) {
                                        return pt({ key: t }, a[t], { area: (t = a[t]).width * t.height });
                                })
                                .sort(function (t, e) {
                                        return e.area - t.area;
                                }),
                        n = e.filter(function (t) {
                                var e = t.width,
                                        t = t.height;
                                return e >= i.clientWidth && t >= i.clientHeight;
                        }),
                        e = (0 < n.length ? n : e)[0].key,
                        t = t.split("-")[1];
                return e + (t ? "-" + t : "");
        }
        function bt(t, e, i, s) {
                s = 3 < arguments.length && void 0 !== s ? s : null;
                return _t(i, s ? vt(e) : at(e, tt(i)), s);
        }
        function xt(t) {
                var e = t.ownerDocument.defaultView.getComputedStyle(t),
                        i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                        e = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                return { width: t.offsetWidth + e, height: t.offsetHeight + i };
        }
        function kt(t) {
                var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
                return t.replace(/left|right|bottom|top/g, function (t) {
                        return e[t];
                });
        }
        function Ct(t, e, i) {
                i = i.split("-")[0];
                var s = xt(t),
                        n = { width: s.width, height: s.height },
                        o = -1 !== ["right", "left"].indexOf(i),
                        a = o ? "top" : "left",
                        r = o ? "left" : "top",
                        t = o ? "height" : "width",
                        o = o ? "width" : "height";
                return (n[a] = e[a] + e[t] / 2 - s[t] / 2), (n[r] = i === r ? e[r] - s[o] : e[kt(r)]), n;
        }
        function Dt(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function St(t, i, e) {
                return (
                        (void 0 === e
                                ? t
                                : t.slice(
                                          0,
                                          (function (t, e, i) {
                                                  if (Array.prototype.findIndex)
                                                          return t.findIndex(function (t) {
                                                                  return t[e] === i;
                                                          });
                                                  var s = Dt(t, function (t) {
                                                          return t[e] === i;
                                                  });
                                                  return t.indexOf(s);
                                          })(t, "name", e)
                                  )
                        ).forEach(function (t) {
                                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                                var e = t.function || t.fn;
                                t.enabled && Z(e) && ((i.offsets.popper = mt(i.offsets.popper)), (i.offsets.reference = mt(i.offsets.reference)), (i = e(i, t)));
                        }),
                        i
                );
        }
        function Tt(t, i) {
                return t.some(function (t) {
                        var e = t.name;
                        return t.enabled && e === i;
                });
        }
        function Et(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), s = 0; s < e.length; s++) {
                        var n = e[s],
                                n = n ? "" + n + i : t;
                        if (void 0 !== document.body.style[n]) return n;
                }
                return null;
        }
        function Mt(t) {
                t = t.ownerDocument;
                return t ? t.defaultView : window;
        }
        function Ot(t, e, i, s) {
                (i.updateBound = s), Mt(t).addEventListener("resize", i.updateBound, { passive: !0 });
                t = J(t);
                return (
                        (function t(e, i, s, n) {
                                var o = "BODY" === e.nodeName,
                                        e = o ? e.ownerDocument.defaultView : e;
                                e.addEventListener(i, s, { passive: !0 }), o || t(J(e.parentNode), i, s, n), n.push(e);
                        })(t, "scroll", i.updateBound, i.scrollParents),
                        (i.scrollElement = t),
                        (i.eventsEnabled = !0),
                        i
                );
        }
        function Pt() {
                var t, e;
                this.state.eventsEnabled &&
                        (cancelAnimationFrame(this.scheduleUpdate),
                        (this.state =
                                ((t = this.reference),
                                (e = this.state),
                                Mt(t).removeEventListener("resize", e.updateBound),
                                e.scrollParents.forEach(function (t) {
                                        t.removeEventListener("scroll", e.updateBound);
                                }),
                                (e.updateBound = null),
                                (e.scrollParents = []),
                                (e.scrollElement = null),
                                (e.eventsEnabled = !1),
                                e)));
        }
        function It(t) {
                return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function $t(i, s) {
                Object.keys(s).forEach(function (t) {
                        var e = "";
                        -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && It(s[t]) && (e = "px"), (i.style[t] = s[t] + e);
                });
        }
        var At = q && /Firefox/i.test(navigator.userAgent);
        function Yt(t, e, i) {
                var s,
                        n = Dt(t, function (t) {
                                return t.name === e;
                        }),
                        o =
                                !!n &&
                                t.some(function (t) {
                                        return t.name === i && t.enabled && t.order < n.order;
                                });
                return o || ((s = "`" + e + "`"), (t = "`" + i + "`"), console.warn(t + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")), o;
        }
        var _ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Nt = _.slice(3);
        function Ft(t, e) {
                (e = 1 < arguments.length && void 0 !== e && e), (t = Nt.indexOf(t)), (t = Nt.slice(t + 1).concat(Nt.slice(0, t)));
                return e ? t.reverse() : t;
        }
        var Lt = "flip",
                Ht = "clockwise",
                Wt = "counterclockwise";
        function Rt(t, n, o, e) {
                var a = [0, 0],
                        r = -1 !== ["right", "left"].indexOf(e),
                        i = t.split(/(\+|\-)/).map(function (t) {
                                return t.trim();
                        }),
                        e = i.indexOf(
                                Dt(i, function (t) {
                                        return -1 !== t.search(/,|\s/);
                                })
                        );
                i[e] && -1 === i[e].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                t = /\s*,\s*|\s+/;
                return (
                        (-1 !== e ? [i.slice(0, e).concat([i[e].split(t)[0]]), [i[e].split(t)[1]].concat(i.slice(e + 1))] : [i])
                                .map(function (t, e) {
                                        var i = (1 === e ? !r : r) ? "height" : "width",
                                                s = !1;
                                        return t
                                                .reduce(function (t, e) {
                                                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? ((t[t.length - 1] = e), (s = !0), t) : s ? ((t[t.length - 1] += e), (s = !1), t) : t.concat(e);
                                                }, [])
                                                .map(function (t) {
                                                        return (function (t, e, i, s) {
                                                                var n = +(o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],
                                                                        o = o[2];
                                                                if (!n) return t;
                                                                if (0 !== o.indexOf("%"))
                                                                        return "vh" !== o && "vw" !== o
                                                                                ? n
                                                                                : (("vh" === o
                                                                                          ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                                                                                          : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                                                                          100) *
                                                                                          n;
                                                                var a = void 0;
                                                                switch (o) {
                                                                        case "%p":
                                                                                a = i;
                                                                                break;
                                                                        case "%":
                                                                        case "%r":
                                                                        default:
                                                                                a = s;
                                                                }
                                                                return (mt(a)[e] / 100) * n;
                                                        })(t, i, n, o);
                                                });
                                })
                                .forEach(function (i, s) {
                                        i.forEach(function (t, e) {
                                                It(t) && (a[s] += t * ("-" === i[e - 1] ? -1 : 1));
                                        });
                                }),
                        a
                );
        }
        var e = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function () {},
                        onUpdate: function () {},
                        modifiers: {
                                shift: {
                                        order: 100,
                                        enabled: !0,
                                        fn: function (t) {
                                                var e,
                                                        i,
                                                        s = t.placement,
                                                        n = s.split("-")[0],
                                                        o = s.split("-")[1];
                                                return (
                                                        o &&
                                                                ((e = (i = t.offsets).reference),
                                                                (s = i.popper),
                                                                (n = (i = -1 !== ["bottom", "top"].indexOf(n)) ? "width" : "height"),
                                                                (n = { start: ft({}, (i = i ? "left" : "top"), e[i]), end: ft({}, i, e[i] + e[n] - s[n]) }),
                                                                (t.offsets.popper = pt({}, s, n[o]))),
                                                        t
                                                );
                                        },
                                },
                                offset: {
                                        order: 200,
                                        enabled: !0,
                                        fn: function (t, e) {
                                                var i = e.offset,
                                                        s = t.placement,
                                                        n = (o = t.offsets).popper,
                                                        e = o.reference,
                                                        o = s.split("-")[0],
                                                        s = void 0,
                                                        s = It(+i) ? [+i, 0] : Rt(i, n, e, o);
                                                return (
                                                        "left" === o
                                                                ? ((n.top += s[0]), (n.left -= s[1]))
                                                                : "right" === o
                                                                ? ((n.top += s[0]), (n.left += s[1]))
                                                                : "top" === o
                                                                ? ((n.left += s[0]), (n.top -= s[1]))
                                                                : "bottom" === o && ((n.left += s[0]), (n.top += s[1])),
                                                        (t.popper = n),
                                                        t
                                                );
                                        },
                                        offset: 0,
                                },
                                preventOverflow: {
                                        order: 300,
                                        enabled: !0,
                                        fn: function (t, s) {
                                                var e = s.boundariesElement || nt(t.instance.popper);
                                                t.instance.reference === e && (e = nt(e));
                                                var i = Et("transform"),
                                                        n = t.instance.popper.style,
                                                        o = n.top,
                                                        a = n.left,
                                                        r = n[i];
                                                (n.top = ""), (n.left = ""), (n[i] = "");
                                                var l = yt(t.instance.popper, t.instance.reference, s.padding, e, t.positionFixed);
                                                (n.top = o), (n.left = a), (n[i] = r), (s.boundaries = l);
                                                var r = s.priority,
                                                        h = t.offsets.popper,
                                                        c = {
                                                                primary: function (t) {
                                                                        var e = h[t];
                                                                        return h[t] < l[t] && !s.escapeWithReference && (e = Math.max(h[t], l[t])), ft({}, t, e);
                                                                },
                                                                secondary: function (t) {
                                                                        var e = "right" === t ? "left" : "top",
                                                                                i = h[e];
                                                                        return h[t] > l[t] && !s.escapeWithReference && (i = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), ft({}, e, i);
                                                                },
                                                        };
                                                return (
                                                        r.forEach(function (t) {
                                                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                                                h = pt({}, h, c[e](t));
                                                        }),
                                                        (t.offsets.popper = h),
                                                        t
                                                );
                                        },
                                        priority: ["left", "right", "top", "bottom"],
                                        padding: 5,
                                        boundariesElement: "scrollParent",
                                },
                                keepTogether: {
                                        order: 400,
                                        enabled: !0,
                                        fn: function (t) {
                                                var e = (o = t.offsets).popper,
                                                        i = o.reference,
                                                        s = t.placement.split("-")[0],
                                                        n = Math.floor,
                                                        o = (a = -1 !== ["top", "bottom"].indexOf(s)) ? "right" : "bottom",
                                                        s = a ? "left" : "top",
                                                        a = a ? "width" : "height";
                                                return e[o] < n(i[s]) && (t.offsets.popper[s] = n(i[s]) - e[a]), e[s] > n(i[o]) && (t.offsets.popper[s] = n(i[o])), t;
                                        },
                                },
                                arrow: {
                                        order: 500,
                                        enabled: !0,
                                        fn: function (t, e) {
                                                if (!Yt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                                var i = e.element;
                                                if ("string" == typeof i) {
                                                        if (!(i = t.instance.popper.querySelector(i))) return t;
                                                } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                                                var s = t.placement.split("-")[0],
                                                        n = (c = t.offsets).popper,
                                                        o = c.reference,
                                                        a = -1 !== ["left", "right"].indexOf(s),
                                                        r = a ? "height" : "width",
                                                        l = a ? "Top" : "Left",
                                                        h = l.toLowerCase(),
                                                        e = a ? "left" : "top",
                                                        c = a ? "bottom" : "right",
                                                        s = xt(i)[r];
                                                return (
                                                        o[c] - s < n[h] && (t.offsets.popper[h] -= n[h] - (o[c] - s)),
                                                        o[h] + s > n[c] && (t.offsets.popper[h] += o[h] + s - n[c]),
                                                        (t.offsets.popper = mt(t.offsets.popper)),
                                                        (a = o[h] + o[r] / 2 - s / 2),
                                                        (c = X(t.instance.popper)),
                                                        (o = parseFloat(c["margin" + l])),
                                                        (l = parseFloat(c["border" + l + "Width"])),
                                                        (l = a - t.offsets.popper[h] - o - l),
                                                        (l = Math.max(Math.min(n[r] - s, l), 0)),
                                                        (t.arrowElement = i),
                                                        (t.offsets.arrow = (ft((i = {}), h, Math.round(l)), ft(i, e, ""), i)),
                                                        t
                                                );
                                        },
                                        element: "[x-arrow]",
                                },
                                flip: {
                                        order: 600,
                                        enabled: !0,
                                        fn: function (h, c) {
                                                if (Tt(h.instance.modifiers, "inner")) return h;
                                                if (h.flipped && h.placement === h.originalPlacement) return h;
                                                var d = yt(h.instance.popper, h.instance.reference, c.padding, c.boundariesElement, h.positionFixed),
                                                        u = h.placement.split("-")[0],
                                                        f = kt(u),
                                                        p = h.placement.split("-")[1] || "",
                                                        m = [];
                                                switch (c.behavior) {
                                                        case Lt:
                                                                m = [u, f];
                                                                break;
                                                        case Ht:
                                                                m = Ft(u);
                                                                break;
                                                        case Wt:
                                                                m = Ft(u, !0);
                                                                break;
                                                        default:
                                                                m = c.behavior;
                                                }
                                                return (
                                                        m.forEach(function (t, e) {
                                                                if (u !== t || m.length === e + 1) return h;
                                                                (u = h.placement.split("-")[0]), (f = kt(u));
                                                                var i = h.offsets.popper,
                                                                        s = h.offsets.reference,
                                                                        n = Math.floor,
                                                                        o =
                                                                                ("left" === u && n(i.right) > n(s.left)) ||
                                                                                ("right" === u && n(i.left) < n(s.right)) ||
                                                                                ("top" === u && n(i.bottom) > n(s.top)) ||
                                                                                ("bottom" === u && n(i.top) < n(s.bottom)),
                                                                        a = n(i.left) < n(d.left),
                                                                        r = n(i.right) > n(d.right),
                                                                        l = n(i.top) < n(d.top),
                                                                        t = n(i.bottom) > n(d.bottom),
                                                                        s = ("left" === u && a) || ("right" === u && r) || ("top" === u && l) || ("bottom" === u && t),
                                                                        i = -1 !== ["top", "bottom"].indexOf(u),
                                                                        n = !!c.flipVariations && ((i && "start" === p && a) || (i && "end" === p && r) || (!i && "start" === p && l) || (!i && "end" === p && t)),
                                                                        l = !!c.flipVariationsByContent && ((i && "start" === p && r) || (i && "end" === p && a) || (!i && "start" === p && t) || (!i && "end" === p && l)),
                                                                        l = n || l;
                                                                (o || s || l) &&
                                                                        ((h.flipped = !0),
                                                                        (o || s) && (u = m[e + 1]),
                                                                        l && (p = "end" === (l = p) ? "start" : "start" === l ? "end" : l),
                                                                        (h.placement = u + (p ? "-" + p : "")),
                                                                        (h.offsets.popper = pt({}, h.offsets.popper, Ct(h.instance.popper, h.offsets.reference, h.placement))),
                                                                        (h = St(h.instance.modifiers, h, "flip")));
                                                        }),
                                                        h
                                                );
                                        },
                                        behavior: "flip",
                                        padding: 5,
                                        boundariesElement: "viewport",
                                        flipVariations: !1,
                                        flipVariationsByContent: !1,
                                },
                                inner: {
                                        order: 700,
                                        enabled: !1,
                                        fn: function (t) {
                                                var e = t.placement,
                                                        i = e.split("-")[0],
                                                        s = (a = t.offsets).popper,
                                                        n = a.reference,
                                                        o = -1 !== ["left", "right"].indexOf(i),
                                                        a = -1 === ["top", "left"].indexOf(i);
                                                return (s[o ? "left" : "top"] = n[i] - (a ? s[o ? "width" : "height"] : 0)), (t.placement = kt(e)), (t.offsets.popper = mt(s)), t;
                                        },
                                },
                                hide: {
                                        order: 800,
                                        enabled: !0,
                                        fn: function (t) {
                                                if (!Yt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                                var e = t.offsets.reference,
                                                        i = Dt(t.instance.modifiers, function (t) {
                                                                return "preventOverflow" === t.name;
                                                        }).boundaries;
                                                if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                                                        if (!0 === t.hide) return t;
                                                        (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                                                } else {
                                                        if (!1 === t.hide) return t;
                                                        (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                                                }
                                                return t;
                                        },
                                },
                                computeStyle: {
                                        order: 850,
                                        enabled: !0,
                                        fn: function (t, e) {
                                                var i = e.x,
                                                        s = e.y,
                                                        n = t.offsets.popper;
                                                void 0 !==
                                                        (p = Dt(t.instance.modifiers, function (t) {
                                                                return "applyStyle" === t.name;
                                                        }).gpuAcceleration) && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                                var o,
                                                        a,
                                                        r,
                                                        l,
                                                        h = void 0 !== p ? p : e.gpuAcceleration,
                                                        c = nt(t.instance.popper),
                                                        d = gt(c),
                                                        u = { position: n.position },
                                                        f =
                                                                ((o = t),
                                                                (f = window.devicePixelRatio < 2 || !At),
                                                                (m = (l = o.offsets).popper),
                                                                (a = l.reference),
                                                                (r = Math.round),
                                                                (p = Math.floor),
                                                                (e = function (t) {
                                                                        return t;
                                                                }),
                                                                (n = r(a.width)),
                                                                (l = r(m.width)),
                                                                (a = -1 !== ["left", "right"].indexOf(o.placement)),
                                                                (o = -1 !== o.placement.indexOf("-")),
                                                                (p = f ? (a || o || n % 2 == l % 2 ? r : p) : e),
                                                                (e = f ? r : e),
                                                                { left: p(n % 2 == 1 && l % 2 == 1 && !o && f ? m.left - 1 : m.left), top: e(m.top), bottom: e(m.bottom), right: p(m.right) }),
                                                        e = "bottom" === i ? "top" : "bottom",
                                                        p = "right" === s ? "left" : "right",
                                                        m = Et("transform"),
                                                        i = void 0,
                                                        s = void 0,
                                                        s = "bottom" == e ? ("HTML" === c.nodeName ? -c.clientHeight + f.bottom : -d.height + f.bottom) : f.top,
                                                        i = "right" == p ? ("HTML" === c.nodeName ? -c.clientWidth + f.right : -d.width + f.right) : f.left;
                                                return (
                                                        h && m
                                                                ? ((u[m] = "translate3d(" + i + "px, " + s + "px, 0)"), (u[e] = 0), (u[p] = 0), (u.willChange = "transform"))
                                                                : ((h = "bottom" == e ? -1 : 1), (m = "right" == p ? -1 : 1), (u[e] = s * h), (u[p] = i * m), (u.willChange = e + ", " + p)),
                                                        (p = { "x-placement": t.placement }),
                                                        (t.attributes = pt({}, p, t.attributes)),
                                                        (t.styles = pt({}, u, t.styles)),
                                                        (t.arrowStyles = pt({}, t.offsets.arrow, t.arrowStyles)),
                                                        t
                                                );
                                        },
                                        gpuAcceleration: !0,
                                        x: "bottom",
                                        y: "right",
                                },
                                applyStyle: {
                                        order: 900,
                                        enabled: !0,
                                        fn: function (t) {
                                                var e, i;
                                                return (
                                                        $t(t.instance.popper, t.styles),
                                                        (e = t.instance.popper),
                                                        (i = t.attributes),
                                                        Object.keys(i).forEach(function (t) {
                                                                !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t);
                                                        }),
                                                        t.arrowElement && Object.keys(t.arrowStyles).length && $t(t.arrowElement, t.arrowStyles),
                                                        t
                                                );
                                        },
                                        onLoad: function (t, e, i, s, n) {
                                                return (
                                                        (n = bt(n, e, t, i.positionFixed)),
                                                        (t = wt(i.placement, n, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding)),
                                                        e.setAttribute("x-placement", t),
                                                        $t(e, { position: i.positionFixed ? "fixed" : "absolute" }),
                                                        i
                                                );
                                        },
                                        gpuAcceleration: void 0,
                                },
                        },
                },
                jt =
                        (u(zt, [
                                {
                                        key: "update",
                                        value: function () {
                                                return function () {
                                                        var t;
                                                        this.state.isDestroyed ||
                                                                (((t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }).offsets.reference = bt(
                                                                        this.state,
                                                                        this.popper,
                                                                        this.reference,
                                                                        this.options.positionFixed
                                                                )),
                                                                (t.placement = wt(
                                                                        this.options.placement,
                                                                        t.offsets.reference,
                                                                        this.popper,
                                                                        this.reference,
                                                                        this.options.modifiers.flip.boundariesElement,
                                                                        this.options.modifiers.flip.padding
                                                                )),
                                                                (t.originalPlacement = t.placement),
                                                                (t.positionFixed = this.options.positionFixed),
                                                                (t.offsets.popper = Ct(this.popper, t.offsets.reference, t.placement)),
                                                                (t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                                                                (t = St(this.modifiers, t)),
                                                                this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t)));
                                                }.call(this);
                                        },
                                },
                                {
                                        key: "destroy",
                                        value: function () {
                                                return function () {
                                                        return (
                                                                (this.state.isDestroyed = !0),
                                                                Tt(this.modifiers, "applyStyle") &&
                                                                        (this.popper.removeAttribute("x-placement"),
                                                                        (this.popper.style.position = ""),
                                                                        (this.popper.style.top = ""),
                                                                        (this.popper.style.left = ""),
                                                                        (this.popper.style.right = ""),
                                                                        (this.popper.style.bottom = ""),
                                                                        (this.popper.style.willChange = ""),
                                                                        (this.popper.style[Et("transform")] = "")),
                                                                this.disableEventListeners(),
                                                                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                                                this
                                                        );
                                                }.call(this);
                                        },
                                },
                                {
                                        key: "enableEventListeners",
                                        value: function () {
                                                return function () {
                                                        this.state.eventsEnabled || (this.state = Ot(this.reference, this.options, this.state, this.scheduleUpdate));
                                                }.call(this);
                                        },
                                },
                                {
                                        key: "disableEventListeners",
                                        value: function () {
                                                return Pt.call(this);
                                        },
                                },
                        ]),
                        zt);
        function zt(t, e) {
                var i = this,
                        s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                dt(this, zt),
                        (this.scheduleUpdate = function () {
                                return requestAnimationFrame(i.update);
                        }),
                        (this.update = Q(this.update.bind(this))),
                        (this.options = pt({}, zt.Defaults, s)),
                        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                        (this.reference = t && t.jquery ? t[0] : t),
                        (this.popper = e && e.jquery ? e[0] : e),
                        (this.options.modifiers = {}),
                        Object.keys(pt({}, zt.Defaults.modifiers, s.modifiers)).forEach(function (t) {
                                i.options.modifiers[t] = pt({}, zt.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                                .map(function (t) {
                                        return pt({ name: t }, i.options.modifiers[t]);
                                })
                                .sort(function (t, e) {
                                        return t.order - e.order;
                                })),
                        this.modifiers.forEach(function (t) {
                                t.enabled && Z(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                        }),
                        this.update();
                e = this.options.eventsEnabled;
                e && this.enableEventListeners(), (this.state.eventsEnabled = e);
        }
        (jt.Utils = ("undefined" != typeof window ? window : global).PopperUtils), (jt.placements = _), (jt.Defaults = e);
        var Bt = "dropdown",
                Ut = "bs.dropdown",
                Vt = "." + Ut,
                u = ".data-api",
                qt = c.default.fn[Bt],
                Gt = new RegExp("38|40|27"),
                Qt = "hide" + Vt,
                Zt = "hidden" + Vt,
                _ = "click" + Vt + u,
                e = "keydown" + Vt + u,
                Xt = "disabled",
                Kt = "show",
                Jt = "dropdown-menu-right",
                te = '[data-toggle="dropdown"]',
                ee = ".dropdown-menu",
                ie = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
                se = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
                ne = (function () {
                        function h(t, e) {
                                (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                        }
                        var t = h.prototype;
                        return (
                                (t.toggle = function () {
                                        var t;
                                        this._element.disabled || c.default(this._element).hasClass(Xt) || ((t = c.default(this._menu).hasClass(Kt)), h._clearMenus(), t || this.show(!0));
                                }),
                                (t.show = function (t) {
                                        if ((void 0 === t && (t = !1), !(this._element.disabled || c.default(this._element).hasClass(Xt) || c.default(this._menu).hasClass(Kt)))) {
                                                var e = { relatedTarget: this._element },
                                                        i = c.default.Event("show.bs.dropdown", e),
                                                        s = h._getParentFromElement(this._element);
                                                if ((c.default(s).trigger(i), !i.isDefaultPrevented())) {
                                                        if (!this._inNavbar && t) {
                                                                if (void 0 === jt) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                                                t = this._element;
                                                                "parent" === this._config.reference
                                                                        ? (t = s)
                                                                        : d.isElement(this._config.reference) && ((t = this._config.reference), void 0 !== this._config.reference.jquery && (t = this._config.reference[0])),
                                                                        "scrollParent" !== this._config.boundary && c.default(s).addClass("position-static"),
                                                                        (this._popper = new jt(t, this._menu, this._getPopperConfig()));
                                                        }
                                                        "ontouchstart" in document.documentElement && 0 === c.default(s).closest(".navbar-nav").length && c.default(document.body).children().on("mouseover", null, c.default.noop),
                                                                this._element.focus(),
                                                                this._element.setAttribute("aria-expanded", !0),
                                                                c.default(this._menu).toggleClass(Kt),
                                                                c.default(s).toggleClass(Kt).trigger(c.default.Event("shown.bs.dropdown", e));
                                                }
                                        }
                                }),
                                (t.hide = function () {
                                        var t, e, i;
                                        this._element.disabled ||
                                                c.default(this._element).hasClass(Xt) ||
                                                !c.default(this._menu).hasClass(Kt) ||
                                                ((t = { relatedTarget: this._element }),
                                                (e = c.default.Event(Qt, t)),
                                                (i = h._getParentFromElement(this._element)),
                                                c.default(i).trigger(e),
                                                e.isDefaultPrevented() || (this._popper && this._popper.destroy(), c.default(this._menu).toggleClass(Kt), c.default(i).toggleClass(Kt).trigger(c.default.Event(Zt, t))));
                                }),
                                (t.dispose = function () {
                                        c.default.removeData(this._element, Ut), c.default(this._element).off(Vt), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                                }),
                                (t.update = function () {
                                        (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                                }),
                                (t._addEventListeners = function () {
                                        var e = this;
                                        c.default(this._element).on("click.bs.dropdown", function (t) {
                                                t.preventDefault(), t.stopPropagation(), e.toggle();
                                        });
                                }),
                                (t._getConfig = function (t) {
                                        return (t = r({}, this.constructor.Default, c.default(this._element).data(), t)), d.typeCheckConfig(Bt, t, this.constructor.DefaultType), t;
                                }),
                                (t._getMenuElement = function () {
                                        var t;
                                        return this._menu || ((t = h._getParentFromElement(this._element)) && (this._menu = t.querySelector(ee))), this._menu;
                                }),
                                (t._getPlacement = function () {
                                        var t = c.default(this._element.parentNode),
                                                e = "bottom-start";
                                        return (
                                                t.hasClass("dropup")
                                                        ? (e = c.default(this._menu).hasClass(Jt) ? "top-end" : "top-start")
                                                        : t.hasClass("dropright")
                                                        ? (e = "right-start")
                                                        : t.hasClass("dropleft")
                                                        ? (e = "left-start")
                                                        : c.default(this._menu).hasClass(Jt) && (e = "bottom-end"),
                                                e
                                        );
                                }),
                                (t._detectNavbar = function () {
                                        return 0 < c.default(this._element).closest(".navbar").length;
                                }),
                                (t._getOffset = function () {
                                        var e = this,
                                                t = {};
                                        return (
                                                "function" == typeof this._config.offset
                                                        ? (t.fn = function (t) {
                                                                  return (t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                                                          })
                                                        : (t.offset = this._config.offset),
                                                t
                                        );
                                }),
                                (t._getPopperConfig = function () {
                                        var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                                        return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), r({}, t, this._config.popperConfig);
                                }),
                                (h._jQueryInterface = function (e) {
                                        return this.each(function () {
                                                var t = c.default(this).data(Ut);
                                                if ((t || ((t = new h(this, "object" == typeof e ? e : null)), c.default(this).data(Ut, t)), "string" == typeof e)) {
                                                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                                                        t[e]();
                                                }
                                        });
                                }),
                                (h._clearMenus = function (t) {
                                        if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                                                for (var e = [].slice.call(document.querySelectorAll(te)), i = 0, s = e.length; i < s; i++) {
                                                        var n,
                                                                o,
                                                                a = h._getParentFromElement(e[i]),
                                                                r = c.default(e[i]).data(Ut),
                                                                l = { relatedTarget: e[i] };
                                                        t && "click" === t.type && (l.clickEvent = t),
                                                                r &&
                                                                        ((n = r._menu),
                                                                        c.default(a).hasClass(Kt) &&
                                                                                ((t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && c.default.contains(a, t.target)) ||
                                                                                        ((o = c.default.Event(Qt, l)),
                                                                                        c.default(a).trigger(o),
                                                                                        o.isDefaultPrevented() ||
                                                                                                ("ontouchstart" in document.documentElement && c.default(document.body).children().off("mouseover", null, c.default.noop),
                                                                                                e[i].setAttribute("aria-expanded", "false"),
                                                                                                r._popper && r._popper.destroy(),
                                                                                                c.default(n).removeClass(Kt),
                                                                                                c.default(a).removeClass(Kt).trigger(c.default.Event(Zt, l))))));
                                                }
                                }),
                                (h._getParentFromElement = function (t) {
                                        var e,
                                                i = d.getSelectorFromElement(t);
                                        return i && (e = document.querySelector(i)), e || t.parentNode;
                                }),
                                (h._dataApiKeydownHandler = function (t) {
                                        if (
                                                (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || c.default(t.target).closest(ee).length))) : Gt.test(t.which)) &&
                                                !this.disabled &&
                                                !c.default(this).hasClass(Xt)
                                        ) {
                                                var e = h._getParentFromElement(this),
                                                        i = c.default(e).hasClass(Kt);
                                                if (i || 27 !== t.which) {
                                                        if ((t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which))
                                                                return 27 === t.which && c.default(e.querySelector(te)).trigger("focus"), void c.default(this).trigger("click");
                                                        i = [].slice.call(e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
                                                                return c.default(t).is(":visible");
                                                        });
                                                        0 !== i.length && ((e = i.indexOf(t.target)), 38 === t.which && 0 < e && e--, 40 === t.which && e < i.length - 1 && e++, e < 0 && (e = 0), i[e].focus());
                                                }
                                        }
                                }),
                                a(h, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return ie;
                                                },
                                        },
                                        {
                                                key: "DefaultType",
                                                get: function () {
                                                        return se;
                                                },
                                        },
                                ]),
                                h
                        );
                })();
        c
                .default(document)
                .on(e, te, ne._dataApiKeydownHandler)
                .on(e, ee, ne._dataApiKeydownHandler)
                .on(_ + " keyup.bs.dropdown.data-api", ne._clearMenus)
                .on(_, te, function (t) {
                        t.preventDefault(), t.stopPropagation(), ne._jQueryInterface.call(c.default(this), "toggle");
                })
                .on(_, ".dropdown form", function (t) {
                        t.stopPropagation();
                }),
                (c.default.fn[Bt] = ne._jQueryInterface),
                (c.default.fn[Bt].Constructor = ne),
                (c.default.fn[Bt].noConflict = function () {
                        return (c.default.fn[Bt] = qt), ne._jQueryInterface;
                });
        var oe = "modal",
                ae = "bs.modal",
                re = "." + ae,
                le = c.default.fn[oe],
                he = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                ce = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                de = "hidden" + re,
                ue = "show" + re,
                fe = "focusin" + re,
                pe = "resize" + re,
                me = "click.dismiss" + re,
                ge = "keydown.dismiss" + re,
                _e = "mousedown.dismiss" + re,
                ve = "modal-open",
                ye = "fade",
                we = "show",
                be = "modal-static",
                xe = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                ke = ".sticky-top",
                Ce = (function () {
                        function n(t, e) {
                                (this._config = this._getConfig(e)),
                                        (this._element = t),
                                        (this._dialog = t.querySelector(".modal-dialog")),
                                        (this._backdrop = null),
                                        (this._isShown = !1),
                                        (this._isBodyOverflowing = !1),
                                        (this._ignoreBackdropClick = !1),
                                        (this._isTransitioning = !1),
                                        (this._scrollbarWidth = 0);
                        }
                        var t = n.prototype;
                        return (
                                (t.toggle = function (t) {
                                        return this._isShown ? this.hide() : this.show(t);
                                }),
                                (t.show = function (t) {
                                        var e,
                                                i = this;
                                        this._isShown ||
                                                this._isTransitioning ||
                                                (c.default(this._element).hasClass(ye) && (this._isTransitioning = !0),
                                                (e = c.default.Event(ue, { relatedTarget: t })),
                                                c.default(this._element).trigger(e),
                                                this._isShown ||
                                                        e.isDefaultPrevented() ||
                                                        ((this._isShown = !0),
                                                        this._checkScrollbar(),
                                                        this._setScrollbar(),
                                                        this._adjustDialog(),
                                                        this._setEscapeEvent(),
                                                        this._setResizeEvent(),
                                                        c.default(this._element).on(me, '[data-dismiss="modal"]', function (t) {
                                                                return i.hide(t);
                                                        }),
                                                        c.default(this._dialog).on(_e, function () {
                                                                c.default(i._element).one("mouseup.dismiss.bs.modal", function (t) {
                                                                        c.default(t.target).is(i._element) && (i._ignoreBackdropClick = !0);
                                                                });
                                                        }),
                                                        this._showBackdrop(function () {
                                                                return i._showElement(t);
                                                        })));
                                }),
                                (t.hide = function (t) {
                                        var e = this;
                                        t && t.preventDefault(),
                                                this._isShown &&
                                                        !this._isTransitioning &&
                                                        ((t = c.default.Event("hide.bs.modal")),
                                                        c.default(this._element).trigger(t),
                                                        this._isShown &&
                                                                !t.isDefaultPrevented() &&
                                                                ((this._isShown = !1),
                                                                (t = c.default(this._element).hasClass(ye)) && (this._isTransitioning = !0),
                                                                this._setEscapeEvent(),
                                                                this._setResizeEvent(),
                                                                c.default(document).off(fe),
                                                                c.default(this._element).removeClass(we),
                                                                c.default(this._element).off(me),
                                                                c.default(this._dialog).off(_e),
                                                                t
                                                                        ? ((t = d.getTransitionDurationFromElement(this._element)),
                                                                          c
                                                                                  .default(this._element)
                                                                                  .one(d.TRANSITION_END, function (t) {
                                                                                          return e._hideModal(t);
                                                                                  })
                                                                                  .emulateTransitionEnd(t))
                                                                        : this._hideModal()));
                                }),
                                (t.dispose = function () {
                                        [window, this._element, this._dialog].forEach(function (t) {
                                                return c.default(t).off(re);
                                        }),
                                                c.default(document).off(fe),
                                                c.default.removeData(this._element, ae),
                                                (this._config = null),
                                                (this._element = null),
                                                (this._dialog = null),
                                                (this._backdrop = null),
                                                (this._isShown = null),
                                                (this._isBodyOverflowing = null),
                                                (this._ignoreBackdropClick = null),
                                                (this._isTransitioning = null),
                                                (this._scrollbarWidth = null);
                                }),
                                (t.handleUpdate = function () {
                                        this._adjustDialog();
                                }),
                                (t._getConfig = function (t) {
                                        return (t = r({}, he, t)), d.typeCheckConfig(oe, t, ce), t;
                                }),
                                (t._triggerBackdropTransition = function () {
                                        var t,
                                                e,
                                                i = this,
                                                s = c.default.Event("hidePrevented.bs.modal");
                                        c.default(this._element).trigger(s),
                                                s.isDefaultPrevented() ||
                                                        ((t = this._element.scrollHeight > document.documentElement.clientHeight) || (this._element.style.overflowY = "hidden"),
                                                        this._element.classList.add(be),
                                                        (e = d.getTransitionDurationFromElement(this._dialog)),
                                                        c.default(this._element).off(d.TRANSITION_END),
                                                        c
                                                                .default(this._element)
                                                                .one(d.TRANSITION_END, function () {
                                                                        i._element.classList.remove(be),
                                                                                t ||
                                                                                        c
                                                                                                .default(i._element)
                                                                                                .one(d.TRANSITION_END, function () {
                                                                                                        i._element.style.overflowY = "";
                                                                                                })
                                                                                                .emulateTransitionEnd(i._element, e);
                                                                })
                                                                .emulateTransitionEnd(e),
                                                        this._element.focus());
                                }),
                                (t._showElement = function (t) {
                                        var e = this,
                                                i = c.default(this._element).hasClass(ye),
                                                s = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                                                (this._element.style.display = "block"),
                                                this._element.removeAttribute("aria-hidden"),
                                                this._element.setAttribute("aria-modal", !0),
                                                this._element.setAttribute("role", "dialog"),
                                                c.default(this._dialog).hasClass("modal-dialog-scrollable") && s ? (s.scrollTop = 0) : (this._element.scrollTop = 0),
                                                i && d.reflow(this._element),
                                                c.default(this._element).addClass(we),
                                                this._config.focus && this._enforceFocus();
                                        var n = c.default.Event("shown.bs.modal", { relatedTarget: t }),
                                                t = function () {
                                                        e._config.focus && e._element.focus(), (e._isTransitioning = !1), c.default(e._element).trigger(n);
                                                };
                                        i ? ((i = d.getTransitionDurationFromElement(this._dialog)), c.default(this._dialog).one(d.TRANSITION_END, t).emulateTransitionEnd(i)) : t();
                                }),
                                (t._enforceFocus = function () {
                                        var e = this;
                                        c.default(document)
                                                .off(fe)
                                                .on(fe, function (t) {
                                                        document !== t.target && e._element !== t.target && 0 === c.default(e._element).has(t.target).length && e._element.focus();
                                                });
                                }),
                                (t._setEscapeEvent = function () {
                                        var e = this;
                                        this._isShown
                                                ? c.default(this._element).on(ge, function (t) {
                                                          e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
                                                  })
                                                : this._isShown || c.default(this._element).off(ge);
                                }),
                                (t._setResizeEvent = function () {
                                        var e = this;
                                        this._isShown
                                                ? c.default(window).on(pe, function (t) {
                                                          return e.handleUpdate(t);
                                                  })
                                                : c.default(window).off(pe);
                                }),
                                (t._hideModal = function () {
                                        var t = this;
                                        (this._element.style.display = "none"),
                                                this._element.setAttribute("aria-hidden", !0),
                                                this._element.removeAttribute("aria-modal"),
                                                this._element.removeAttribute("role"),
                                                (this._isTransitioning = !1),
                                                this._showBackdrop(function () {
                                                        c.default(document.body).removeClass(ve), t._resetAdjustments(), t._resetScrollbar(), c.default(t._element).trigger(de);
                                                });
                                }),
                                (t._removeBackdrop = function () {
                                        this._backdrop && (c.default(this._backdrop).remove(), (this._backdrop = null));
                                }),
                                (t._showBackdrop = function (t) {
                                        var e,
                                                i = this,
                                                s = c.default(this._element).hasClass(ye) ? ye : "";
                                        this._isShown && this._config.backdrop
                                                ? ((this._backdrop = document.createElement("div")),
                                                  (this._backdrop.className = "modal-backdrop"),
                                                  s && this._backdrop.classList.add(s),
                                                  c.default(this._backdrop).appendTo(document.body),
                                                  c.default(this._element).on(me, function (t) {
                                                          i._ignoreBackdropClick ? (i._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._triggerBackdropTransition() : i.hide());
                                                  }),
                                                  s && d.reflow(this._backdrop),
                                                  c.default(this._backdrop).addClass(we),
                                                  t && (s ? ((e = d.getTransitionDurationFromElement(this._backdrop)), c.default(this._backdrop).one(d.TRANSITION_END, t).emulateTransitionEnd(e)) : t()))
                                                : !this._isShown && this._backdrop
                                                ? (c.default(this._backdrop).removeClass(we),
                                                  (s = function () {
                                                          i._removeBackdrop(), t && t();
                                                  }),
                                                  c.default(this._element).hasClass(ye) ? ((e = d.getTransitionDurationFromElement(this._backdrop)), c.default(this._backdrop).one(d.TRANSITION_END, s).emulateTransitionEnd(e)) : s())
                                                : t && t();
                                }),
                                (t._adjustDialog = function () {
                                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                                }),
                                (t._resetAdjustments = function () {
                                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                                }),
                                (t._checkScrollbar = function () {
                                        var t = document.body.getBoundingClientRect();
                                        (this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                                }),
                                (t._setScrollbar = function () {
                                        var t,
                                                e,
                                                n = this;
                                        this._isBodyOverflowing &&
                                                ((t = [].slice.call(document.querySelectorAll(xe))),
                                                (e = [].slice.call(document.querySelectorAll(ke))),
                                                c.default(t).each(function (t, e) {
                                                        var i = e.style.paddingRight,
                                                                s = c.default(e).css("padding-right");
                                                        c.default(e)
                                                                .data("padding-right", i)
                                                                .css("padding-right", parseFloat(s) + n._scrollbarWidth + "px");
                                                }),
                                                c.default(e).each(function (t, e) {
                                                        var i = e.style.marginRight,
                                                                s = c.default(e).css("margin-right");
                                                        c.default(e)
                                                                .data("margin-right", i)
                                                                .css("margin-right", parseFloat(s) - n._scrollbarWidth + "px");
                                                }),
                                                (t = document.body.style.paddingRight),
                                                (e = c.default(document.body).css("padding-right")),
                                                c
                                                        .default(document.body)
                                                        .data("padding-right", t)
                                                        .css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")),
                                                c.default(document.body).addClass(ve);
                                }),
                                (t._resetScrollbar = function () {
                                        var t = [].slice.call(document.querySelectorAll(xe));
                                        c.default(t).each(function (t, e) {
                                                var i = c.default(e).data("padding-right");
                                                c.default(e).removeData("padding-right"), (e.style.paddingRight = i || "");
                                        });
                                        t = [].slice.call(document.querySelectorAll(ke));
                                        c.default(t).each(function (t, e) {
                                                var i = c.default(e).data("margin-right");
                                                void 0 !== i && c.default(e).css("margin-right", i).removeData("margin-right");
                                        });
                                        t = c.default(document.body).data("padding-right");
                                        c.default(document.body).removeData("padding-right"), (document.body.style.paddingRight = t || "");
                                }),
                                (t._getScrollbarWidth = function () {
                                        var t = document.createElement("div");
                                        (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                                        var e = t.getBoundingClientRect().width - t.clientWidth;
                                        return document.body.removeChild(t), e;
                                }),
                                (n._jQueryInterface = function (i, s) {
                                        return this.each(function () {
                                                var t = c.default(this).data(ae),
                                                        e = r({}, he, c.default(this).data(), "object" == typeof i && i ? i : {});
                                                if ((t || ((t = new n(this, e)), c.default(this).data(ae, t)), "string" == typeof i)) {
                                                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                                        t[i](s);
                                                } else e.show && t.show(s);
                                        });
                                }),
                                a(n, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return he;
                                                },
                                        },
                                ]),
                                n
                        );
                })();
        c.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
                var e,
                        i = this,
                        s = d.getSelectorFromElement(this);
                s && (e = document.querySelector(s));
                s = c.default(e).data(ae) ? "toggle" : r({}, c.default(e).data(), c.default(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
                var n = c.default(e).one(ue, function (t) {
                        t.isDefaultPrevented() ||
                                n.one(de, function () {
                                        c.default(i).is(":visible") && i.focus();
                                });
                });
                Ce._jQueryInterface.call(c.default(e), s, this);
        }),
                (c.default.fn[oe] = Ce._jQueryInterface),
                (c.default.fn[oe].Constructor = Ce),
                (c.default.fn[oe].noConflict = function () {
                        return (c.default.fn[oe] = le), Ce._jQueryInterface;
                });
        var De = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                _ = {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "srcset", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: [],
                },
                Se = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        function Ee(t, o, e) {
                if (0 === t.length) return t;
                if (e && "function" == typeof e) return e(t);
                for (
                        var t = new window.DOMParser().parseFromString(t, "text/html"),
                                a = Object.keys(o),
                                r = [].slice.call(t.body.querySelectorAll("*")),
                                i = function (t, e) {
                                        var i = r[t],
                                                s = i.nodeName.toLowerCase();
                                        if (-1 === a.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                                        var t = [].slice.call(i.attributes),
                                                n = [].concat(o["*"] || [], o[s] || []);
                                        t.forEach(function (t) {
                                                !(function (t, e) {
                                                        var i = t.nodeName.toLowerCase();
                                                        if (-1 !== e.indexOf(i)) return -1 === De.indexOf(i) || Boolean(t.nodeValue.match(Se) || t.nodeValue.match(Te));
                                                        for (
                                                                var s = e.filter(function (t) {
                                                                                return t instanceof RegExp;
                                                                        }),
                                                                        n = 0,
                                                                        o = s.length;
                                                                n < o;
                                                                n++
                                                        )
                                                                if (i.match(s[n])) return 1;
                                                })(t, n) && i.removeAttribute(t.nodeName);
                                        });
                                },
                                s = 0,
                                n = r.length;
                        s < n;
                        s++
                )
                        i(s);
                return t.body.innerHTML;
        }
        var Me = "tooltip",
                Oe = "bs.tooltip",
                Pe = "." + Oe,
                Ie = c.default.fn[Me],
                $e = "bs-tooltip",
                Ae = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
                Ye = ["sanitize", "whiteList", "sanitizeFn"],
                Ne = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string|function)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)",
                        customClass: "(string|function)",
                        sanitize: "boolean",
                        sanitizeFn: "(null|function)",
                        whiteList: "object",
                        popperConfig: "(null|object)",
                },
                Fe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                Le = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent",
                        customClass: "",
                        sanitize: !0,
                        sanitizeFn: null,
                        whiteList: _,
                        popperConfig: null,
                },
                He = "show",
                We = {
                        HIDE: "hide" + Pe,
                        HIDDEN: "hidden" + Pe,
                        SHOW: "show" + Pe,
                        SHOWN: "shown" + Pe,
                        INSERTED: "inserted" + Pe,
                        CLICK: "click" + Pe,
                        FOCUSIN: "focusin" + Pe,
                        FOCUSOUT: "focusout" + Pe,
                        MOUSEENTER: "mouseenter" + Pe,
                        MOUSELEAVE: "mouseleave" + Pe,
                },
                Re = "fade",
                je = "show",
                ze = "hover",
                Be = "focus",
                Ue = (function () {
                        function n(t, e) {
                                if (void 0 === jt) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                                (this._isEnabled = !0),
                                        (this._timeout = 0),
                                        (this._hoverState = ""),
                                        (this._activeTrigger = {}),
                                        (this._popper = null),
                                        (this.element = t),
                                        (this.config = this._getConfig(e)),
                                        (this.tip = null),
                                        this._setListeners();
                        }
                        var t = n.prototype;
                        return (
                                (t.enable = function () {
                                        this._isEnabled = !0;
                                }),
                                (t.disable = function () {
                                        this._isEnabled = !1;
                                }),
                                (t.toggleEnabled = function () {
                                        this._isEnabled = !this._isEnabled;
                                }),
                                (t.toggle = function (t) {
                                        var e, i;
                                        this._isEnabled &&
                                                (t
                                                        ? ((e = this.constructor.DATA_KEY),
                                                          (i = c.default(t.currentTarget).data(e)) || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), c.default(t.currentTarget).data(e, i)),
                                                          (i._activeTrigger.click = !i._activeTrigger.click),
                                                          i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i))
                                                        : c.default(this.getTipElement()).hasClass(je)
                                                        ? this._leave(null, this)
                                                        : this._enter(null, this));
                                }),
                                (t.dispose = function () {
                                        clearTimeout(this._timeout),
                                                c.default.removeData(this.element, this.constructor.DATA_KEY),
                                                c.default(this.element).off(this.constructor.EVENT_KEY),
                                                c.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                                                this.tip && c.default(this.tip).remove(),
                                                (this._isEnabled = null),
                                                (this._timeout = null),
                                                (this._hoverState = null),
                                                (this._activeTrigger = null),
                                                this._popper && this._popper.destroy(),
                                                (this._popper = null),
                                                (this.element = null),
                                                (this.config = null),
                                                (this.tip = null);
                                }),
                                (t.show = function () {
                                        var e = this;
                                        if ("none" === c.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                                        var t,
                                                i,
                                                s = c.default.Event(this.constructor.Event.SHOW);
                                        this.isWithContent() &&
                                                this._isEnabled &&
                                                (c.default(this.element).trigger(s),
                                                (i = d.findShadowRoot(this.element)),
                                                (t = c.default.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element)),
                                                !s.isDefaultPrevented() &&
                                                        t &&
                                                        ((i = this.getTipElement()),
                                                        (s = d.getUID(this.constructor.NAME)),
                                                        i.setAttribute("id", s),
                                                        this.element.setAttribute("aria-describedby", s),
                                                        this.setContent(),
                                                        this.config.animation && c.default(i).addClass(Re),
                                                        (t = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement),
                                                        (s = this._getAttachment(t)),
                                                        this.addAttachmentClass(s),
                                                        (t = this._getContainer()),
                                                        c.default(i).data(this.constructor.DATA_KEY, this),
                                                        c.default.contains(this.element.ownerDocument.documentElement, this.tip) || c.default(i).appendTo(t),
                                                        c.default(this.element).trigger(this.constructor.Event.INSERTED),
                                                        (this._popper = new jt(this.element, i, this._getPopperConfig(s))),
                                                        c.default(i).addClass(je),
                                                        c.default(i).addClass(this.config.customClass),
                                                        "ontouchstart" in document.documentElement && c.default(document.body).children().on("mouseover", null, c.default.noop),
                                                        (s = function () {
                                                                e.config.animation && e._fixTransition();
                                                                var t = e._hoverState;
                                                                (e._hoverState = null), c.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
                                                        }),
                                                        c.default(this.tip).hasClass(Re) ? ((i = d.getTransitionDurationFromElement(this.tip)), c.default(this.tip).one(d.TRANSITION_END, s).emulateTransitionEnd(i)) : s()));
                                }),
                                (t.hide = function (t) {
                                        function e() {
                                                i._hoverState !== He && s.parentNode && s.parentNode.removeChild(s),
                                                        i._cleanTipClass(),
                                                        i.element.removeAttribute("aria-describedby"),
                                                        c.default(i.element).trigger(i.constructor.Event.HIDDEN),
                                                        null !== i._popper && i._popper.destroy(),
                                                        t && t();
                                        }
                                        var i = this,
                                                s = this.getTipElement(),
                                                n = c.default.Event(this.constructor.Event.HIDE);
                                        c.default(this.element).trigger(n),
                                                n.isDefaultPrevented() ||
                                                        (c.default(s).removeClass(je),
                                                        "ontouchstart" in document.documentElement && c.default(document.body).children().off("mouseover", null, c.default.noop),
                                                        (this._activeTrigger.click = !1),
                                                        (this._activeTrigger[Be] = !1),
                                                        (this._activeTrigger[ze] = !1),
                                                        c.default(this.tip).hasClass(Re) ? ((n = d.getTransitionDurationFromElement(s)), c.default(s).one(d.TRANSITION_END, e).emulateTransitionEnd(n)) : e(),
                                                        (this._hoverState = ""));
                                }),
                                (t.update = function () {
                                        null !== this._popper && this._popper.scheduleUpdate();
                                }),
                                (t.isWithContent = function () {
                                        return Boolean(this.getTitle());
                                }),
                                (t.addAttachmentClass = function (t) {
                                        c.default(this.getTipElement()).addClass($e + "-" + t);
                                }),
                                (t.getTipElement = function () {
                                        return (this.tip = this.tip || c.default(this.config.template)[0]), this.tip;
                                }),
                                (t.setContent = function () {
                                        var t = this.getTipElement();
                                        this.setElementContent(c.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), c.default(t).removeClass(Re + " " + je);
                                }),
                                (t.setElementContent = function (t, e) {
                                        "object" != typeof e || (!e.nodeType && !e.jquery)
                                                ? this.config.html
                                                        ? (this.config.sanitize && (e = Ee(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e))
                                                        : t.text(e)
                                                : this.config.html
                                                ? c.default(e).parent().is(t) || t.empty().append(e)
                                                : t.text(c.default(e).text());
                                }),
                                (t.getTitle = function () {
                                        return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
                                }),
                                (t._getPopperConfig = function (t) {
                                        var e = this;
                                        return r(
                                                {},
                                                {
                                                        placement: t,
                                                        modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                                        onCreate: function (t) {
                                                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                                        },
                                                        onUpdate: function (t) {
                                                                return e._handlePopperPlacementChange(t);
                                                        },
                                                },
                                                this.config.popperConfig
                                        );
                                }),
                                (t._getOffset = function () {
                                        var e = this,
                                                t = {};
                                        return (
                                                "function" == typeof this.config.offset
                                                        ? (t.fn = function (t) {
                                                                  return (t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                                                          })
                                                        : (t.offset = this.config.offset),
                                                t
                                        );
                                }),
                                (t._getContainer = function () {
                                        return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? c.default(this.config.container) : c.default(document).find(this.config.container);
                                }),
                                (t._getAttachment = function (t) {
                                        return Fe[t.toUpperCase()];
                                }),
                                (t._setListeners = function () {
                                        var i = this;
                                        this.config.trigger.split(" ").forEach(function (t) {
                                                var e;
                                                "click" === t
                                                        ? c.default(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                                                                  return i.toggle(t);
                                                          })
                                                        : "manual" !== t &&
                                                          ((e = t === ze ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN),
                                                          (t = t === ze ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT),
                                                          c
                                                                  .default(i.element)
                                                                  .on(e, i.config.selector, function (t) {
                                                                          return i._enter(t);
                                                                  })
                                                                  .on(t, i.config.selector, function (t) {
                                                                          return i._leave(t);
                                                                  }));
                                        }),
                                                (this._hideModalHandler = function () {
                                                        i.element && i.hide();
                                                }),
                                                c.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                                                this.config.selector ? (this.config = r({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                                }),
                                (t._fixTitle = function () {
                                        var t = typeof this.element.getAttribute("data-original-title");
                                        (!this.element.getAttribute("title") && "string" == t) || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                                }),
                                (t._enter = function (t, e) {
                                        var i = this.constructor.DATA_KEY;
                                        (e = e || c.default(t.currentTarget).data(i)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), c.default(t.currentTarget).data(i, e)),
                                                t && (e._activeTrigger["focusin" === t.type ? Be : ze] = !0),
                                                c.default(e.getTipElement()).hasClass(je) || e._hoverState === He
                                                        ? (e._hoverState = He)
                                                        : (clearTimeout(e._timeout),
                                                          (e._hoverState = He),
                                                          e.config.delay && e.config.delay.show
                                                                  ? (e._timeout = setTimeout(function () {
                                                                            e._hoverState === He && e.show();
                                                                    }, e.config.delay.show))
                                                                  : e.show());
                                }),
                                (t._leave = function (t, e) {
                                        var i = this.constructor.DATA_KEY;
                                        (e = e || c.default(t.currentTarget).data(i)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), c.default(t.currentTarget).data(i, e)),
                                                t && (e._activeTrigger["focusout" === t.type ? Be : ze] = !1),
                                                e._isWithActiveTrigger() ||
                                                        (clearTimeout(e._timeout),
                                                        (e._hoverState = "out"),
                                                        e.config.delay && e.config.delay.hide
                                                                ? (e._timeout = setTimeout(function () {
                                                                          "out" === e._hoverState && e.hide();
                                                                  }, e.config.delay.hide))
                                                                : e.hide());
                                }),
                                (t._isWithActiveTrigger = function () {
                                        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                                        return !1;
                                }),
                                (t._getConfig = function (t) {
                                        var e = c.default(this.element).data();
                                        return (
                                                Object.keys(e).forEach(function (t) {
                                                        -1 !== Ye.indexOf(t) && delete e[t];
                                                }),
                                                "number" == typeof (t = r({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                                                "number" == typeof t.title && (t.title = t.title.toString()),
                                                "number" == typeof t.content && (t.content = t.content.toString()),
                                                d.typeCheckConfig(Me, t, this.constructor.DefaultType),
                                                t.sanitize && (t.template = Ee(t.template, t.whiteList, t.sanitizeFn)),
                                                t
                                        );
                                }),
                                (t._getDelegateConfig = function () {
                                        var t = {};
                                        if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                                        return t;
                                }),
                                (t._cleanTipClass = function () {
                                        var t = c.default(this.getTipElement()),
                                                e = t.attr("class").match(Ae);
                                        null !== e && e.length && t.removeClass(e.join(""));
                                }),
                                (t._handlePopperPlacementChange = function (t) {
                                        (this.tip = t.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                                }),
                                (t._fixTransition = function () {
                                        var t = this.getTipElement(),
                                                e = this.config.animation;
                                        null === t.getAttribute("x-placement") && (c.default(t).removeClass(Re), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
                                }),
                                (n._jQueryInterface = function (s) {
                                        return this.each(function () {
                                                var t = c.default(this),
                                                        e = t.data(Oe),
                                                        i = "object" == typeof s && s;
                                                if ((e || !/dispose|hide/.test(s)) && (e || ((e = new n(this, i)), t.data(Oe, e)), "string" == typeof s)) {
                                                        if (void 0 === e[s]) throw new TypeError('No method named "' + s + '"');
                                                        e[s]();
                                                }
                                        });
                                }),
                                a(n, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return Le;
                                                },
                                        },
                                        {
                                                key: "NAME",
                                                get: function () {
                                                        return Me;
                                                },
                                        },
                                        {
                                                key: "DATA_KEY",
                                                get: function () {
                                                        return Oe;
                                                },
                                        },
                                        {
                                                key: "Event",
                                                get: function () {
                                                        return We;
                                                },
                                        },
                                        {
                                                key: "EVENT_KEY",
                                                get: function () {
                                                        return Pe;
                                                },
                                        },
                                        {
                                                key: "DefaultType",
                                                get: function () {
                                                        return Ne;
                                                },
                                        },
                                ]),
                                n
                        );
                })();
        (c.default.fn[Me] = Ue._jQueryInterface),
                (c.default.fn[Me].Constructor = Ue),
                (c.default.fn[Me].noConflict = function () {
                        return (c.default.fn[Me] = Ie), Ue._jQueryInterface;
                });
        var Ve = "popover",
                qe = "bs.popover",
                Ge = "." + qe,
                Qe = c.default.fn[Ve],
                Ze = "bs-popover",
                Xe = new RegExp("(^|\\s)" + Ze + "\\S+", "g"),
                Ke = r({}, Ue.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                Je = r({}, Ue.DefaultType, { content: "(string|element|function)" }),
                ti = {
                        HIDE: "hide" + Ge,
                        HIDDEN: "hidden" + Ge,
                        SHOW: "show" + Ge,
                        SHOWN: "shown" + Ge,
                        INSERTED: "inserted" + Ge,
                        CLICK: "click" + Ge,
                        FOCUSIN: "focusin" + Ge,
                        FOCUSOUT: "focusout" + Ge,
                        MOUSEENTER: "mouseenter" + Ge,
                        MOUSELEAVE: "mouseleave" + Ge,
                },
                ei = (function (t) {
                        var e;
                        function s() {
                                return t.apply(this, arguments) || this;
                        }
                        (i = t), ((e = s).prototype = Object.create(i.prototype)), ((e.prototype.constructor = e).__proto__ = i);
                        var i = s.prototype;
                        return (
                                (i.isWithContent = function () {
                                        return this.getTitle() || this._getContent();
                                }),
                                (i.addAttachmentClass = function (t) {
                                        c.default(this.getTipElement()).addClass(Ze + "-" + t);
                                }),
                                (i.getTipElement = function () {
                                        return (this.tip = this.tip || c.default(this.config.template)[0]), this.tip;
                                }),
                                (i.setContent = function () {
                                        var t = c.default(this.getTipElement());
                                        this.setElementContent(t.find(".popover-header"), this.getTitle());
                                        var e = this._getContent();
                                        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
                                }),
                                (i._getContent = function () {
                                        return this.element.getAttribute("data-content") || this.config.content;
                                }),
                                (i._cleanTipClass = function () {
                                        var t = c.default(this.getTipElement()),
                                                e = t.attr("class").match(Xe);
                                        null !== e && 0 < e.length && t.removeClass(e.join(""));
                                }),
                                (s._jQueryInterface = function (i) {
                                        return this.each(function () {
                                                var t = c.default(this).data(qe),
                                                        e = "object" == typeof i ? i : null;
                                                if ((t || !/dispose|hide/.test(i)) && (t || ((t = new s(this, e)), c.default(this).data(qe, t)), "string" == typeof i)) {
                                                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                                        t[i]();
                                                }
                                        });
                                }),
                                a(s, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return Ke;
                                                },
                                        },
                                        {
                                                key: "NAME",
                                                get: function () {
                                                        return Ve;
                                                },
                                        },
                                        {
                                                key: "DATA_KEY",
                                                get: function () {
                                                        return qe;
                                                },
                                        },
                                        {
                                                key: "Event",
                                                get: function () {
                                                        return ti;
                                                },
                                        },
                                        {
                                                key: "EVENT_KEY",
                                                get: function () {
                                                        return Ge;
                                                },
                                        },
                                        {
                                                key: "DefaultType",
                                                get: function () {
                                                        return Je;
                                                },
                                        },
                                ]),
                                s
                        );
                })(Ue);
        (c.default.fn[Ve] = ei._jQueryInterface),
                (c.default.fn[Ve].Constructor = ei),
                (c.default.fn[Ve].noConflict = function () {
                        return (c.default.fn[Ve] = Qe), ei._jQueryInterface;
                });
        var ii = "scrollspy",
                si = "bs.scrollspy",
                ni = "." + si,
                oi = c.default.fn[ii],
                ai = { offset: 10, method: "auto", target: "" },
                ri = { offset: "number", method: "string", target: "(string|element)" },
                li = "active",
                hi = ".nav, .list-group",
                ci = ".nav-link",
                di = ".list-group-item",
                ui = "position",
                fi = (function () {
                        function i(t, e) {
                                var i = this;
                                (this._element = t),
                                        (this._scrollElement = "BODY" === t.tagName ? window : t),
                                        (this._config = this._getConfig(e)),
                                        (this._selector = this._config.target + " " + ci + "," + this._config.target + " " + di + "," + this._config.target + " .dropdown-item"),
                                        (this._offsets = []),
                                        (this._targets = []),
                                        (this._activeTarget = null),
                                        (this._scrollHeight = 0),
                                        c.default(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
                                                return i._process(t);
                                        }),
                                        this.refresh(),
                                        this._process();
                        }
                        var t = i.prototype;
                        return (
                                (t.refresh = function () {
                                        var e = this,
                                                t = this._scrollElement === this._scrollElement.window ? "offset" : ui,
                                                s = "auto" === this._config.method ? t : this._config.method,
                                                n = s === ui ? this._getScrollTop() : 0;
                                        (this._offsets = []),
                                                (this._targets = []),
                                                (this._scrollHeight = this._getScrollHeight()),
                                                [].slice
                                                        .call(document.querySelectorAll(this._selector))
                                                        .map(function (t) {
                                                                var e,
                                                                        i = d.getSelectorFromElement(t);
                                                                if ((i && (e = document.querySelector(i)), e)) {
                                                                        t = e.getBoundingClientRect();
                                                                        if (t.width || t.height) return [c.default(e)[s]().top + n, i];
                                                                }
                                                                return null;
                                                        })
                                                        .filter(function (t) {
                                                                return t;
                                                        })
                                                        .sort(function (t, e) {
                                                                return t[0] - e[0];
                                                        })
                                                        .forEach(function (t) {
                                                                e._offsets.push(t[0]), e._targets.push(t[1]);
                                                        });
                                }),
                                (t.dispose = function () {
                                        c.default.removeData(this._element, si),
                                                c.default(this._scrollElement).off(ni),
                                                (this._element = null),
                                                (this._scrollElement = null),
                                                (this._config = null),
                                                (this._selector = null),
                                                (this._offsets = null),
                                                (this._targets = null),
                                                (this._activeTarget = null),
                                                (this._scrollHeight = null);
                                }),
                                (t._getConfig = function (t) {
                                        var e;
                                        return (
                                                "string" != typeof (t = r({}, ai, "object" == typeof t && t ? t : {})).target &&
                                                        d.isElement(t.target) &&
                                                        ((e = c.default(t.target).attr("id")) || ((e = d.getUID(ii)), c.default(t.target).attr("id", e)), (t.target = "#" + e)),
                                                d.typeCheckConfig(ii, t, ri),
                                                t
                                        );
                                }),
                                (t._getScrollTop = function () {
                                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                                }),
                                (t._getScrollHeight = function () {
                                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                                }),
                                (t._getOffsetHeight = function () {
                                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                                }),
                                (t._process = function () {
                                        var t = this._getScrollTop() + this._config.offset,
                                                e = this._getScrollHeight(),
                                                i = this._config.offset + e - this._getOffsetHeight();
                                        if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
                                                i = this._targets[this._targets.length - 1];
                                                this._activeTarget !== i && this._activate(i);
                                        } else {
                                                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                                                for (var s = this._offsets.length; s--; )
                                                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
                                        }
                                }),
                                (t._activate = function (e) {
                                        (this._activeTarget = e), this._clear();
                                        var t = this._selector.split(",").map(function (t) {
                                                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                                                }),
                                                t = c.default([].slice.call(document.querySelectorAll(t.join(","))));
                                        t.hasClass("dropdown-item")
                                                ? (t.closest(".dropdown").find(".dropdown-toggle").addClass(li), t.addClass(li))
                                                : (t.addClass(li),
                                                  t
                                                          .parents(hi)
                                                          .prev(ci + ", " + di)
                                                          .addClass(li),
                                                  t.parents(hi).prev(".nav-item").children(ci).addClass(li)),
                                                c.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
                                }),
                                (t._clear = function () {
                                        [].slice
                                                .call(document.querySelectorAll(this._selector))
                                                .filter(function (t) {
                                                        return t.classList.contains(li);
                                                })
                                                .forEach(function (t) {
                                                        return t.classList.remove(li);
                                                });
                                }),
                                (i._jQueryInterface = function (e) {
                                        return this.each(function () {
                                                var t = c.default(this).data(si);
                                                if ((t || ((t = new i(this, "object" == typeof e && e)), c.default(this).data(si, t)), "string" == typeof e)) {
                                                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                                                        t[e]();
                                                }
                                        });
                                }),
                                a(i, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return ai;
                                                },
                                        },
                                ]),
                                i
                        );
                })();
        c.default(window).on("load.bs.scrollspy.data-api", function () {
                for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--; ) {
                        var i = c.default(t[e]);
                        fi._jQueryInterface.call(i, i.data());
                }
        }),
                (c.default.fn[ii] = fi._jQueryInterface),
                (c.default.fn[ii].Constructor = fi),
                (c.default.fn[ii].noConflict = function () {
                        return (c.default.fn[ii] = oi), fi._jQueryInterface;
                });
        var pi = "bs.tab",
                _ = "." + pi,
                mi = c.default.fn.tab,
                gi = "active",
                _i = ".active",
                vi = "> li > .active",
                yi = (function () {
                        function s(t) {
                                this._element = t;
                        }
                        var t = s.prototype;
                        return (
                                (t.show = function () {
                                        var t,
                                                e,
                                                i,
                                                s,
                                                n,
                                                o,
                                                a = this;
                                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && c.default(this._element).hasClass(gi)) ||
                                                c.default(this._element).hasClass("disabled") ||
                                                ((o = c.default(this._element).closest(".nav, .list-group")[0]),
                                                (e = d.getSelectorFromElement(this._element)),
                                                o && ((n = "UL" === o.nodeName || "OL" === o.nodeName ? vi : _i), (i = (i = c.default.makeArray(c.default(o).find(n)))[i.length - 1])),
                                                (s = c.default.Event("hide.bs.tab", { relatedTarget: this._element })),
                                                (n = c.default.Event("show.bs.tab", { relatedTarget: i })),
                                                i && c.default(i).trigger(s),
                                                c.default(this._element).trigger(n),
                                                n.isDefaultPrevented() ||
                                                        s.isDefaultPrevented() ||
                                                        (e && (t = document.querySelector(e)),
                                                        this._activate(this._element, o),
                                                        (o = function () {
                                                                var t = c.default.Event("hidden.bs.tab", { relatedTarget: a._element }),
                                                                        e = c.default.Event("shown.bs.tab", { relatedTarget: i });
                                                                c.default(i).trigger(t), c.default(a._element).trigger(e);
                                                        }),
                                                        t ? this._activate(t, t.parentNode, o) : o()));
                                }),
                                (t.dispose = function () {
                                        c.default.removeData(this._element, pi), (this._element = null);
                                }),
                                (t._activate = function (t, e, i) {
                                        var s = this,
                                                n = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName) ? c.default(e).children(_i) : c.default(e).find(vi))[0],
                                                o = i && n && c.default(n).hasClass("fade"),
                                                e = function () {
                                                        return s._transitionComplete(t, n, i);
                                                };
                                        n && o ? ((o = d.getTransitionDurationFromElement(n)), c.default(n).removeClass("show").one(d.TRANSITION_END, e).emulateTransitionEnd(o)) : e();
                                }),
                                (t._transitionComplete = function (t, e, i) {
                                        var s;
                                        e &&
                                                (c.default(e).removeClass(gi),
                                                (s = c.default(e.parentNode).find("> .dropdown-menu .active")[0]) && c.default(s).removeClass(gi),
                                                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)),
                                                c.default(t).addClass(gi),
                                                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                                                d.reflow(t),
                                                t.classList.contains("fade") && t.classList.add("show"),
                                                t.parentNode &&
                                                        c.default(t.parentNode).hasClass("dropdown-menu") &&
                                                        ((e = c.default(t).closest(".dropdown")[0]) && ((e = [].slice.call(e.querySelectorAll(".dropdown-toggle"))), c.default(e).addClass(gi)), t.setAttribute("aria-expanded", !0)),
                                                i && i();
                                }),
                                (s._jQueryInterface = function (i) {
                                        return this.each(function () {
                                                var t = c.default(this),
                                                        e = t.data(pi);
                                                if ((e || ((e = new s(this)), t.data(pi, e)), "string" == typeof i)) {
                                                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                                                        e[i]();
                                                }
                                        });
                                }),
                                a(s, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                ]),
                                s
                        );
                })();
        c.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                t.preventDefault(), yi._jQueryInterface.call(c.default(this), "show");
        }),
                (c.default.fn.tab = yi._jQueryInterface),
                (c.default.fn.tab.Constructor = yi),
                (c.default.fn.tab.noConflict = function () {
                        return (c.default.fn.tab = mi), yi._jQueryInterface;
                });
        var wi = "toast",
                bi = "bs.toast",
                _ = "." + bi,
                xi = c.default.fn[wi],
                ki = "click.dismiss" + _,
                Ci = "show",
                Di = "showing",
                Si = { animation: "boolean", autohide: "boolean", delay: "number" },
                Ti = { animation: !0, autohide: !0, delay: 500 },
                Ei = (function () {
                        function s(t, e) {
                                (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
                        }
                        var t = s.prototype;
                        return (
                                (t.show = function () {
                                        var t,
                                                e = this,
                                                i = c.default.Event("show.bs.toast");
                                        c.default(this._element).trigger(i),
                                                i.isDefaultPrevented() ||
                                                        (this._clearTimeout(),
                                                        this._config.animation && this._element.classList.add("fade"),
                                                        (t = function () {
                                                                e._element.classList.remove(Di),
                                                                        e._element.classList.add(Ci),
                                                                        c.default(e._element).trigger("shown.bs.toast"),
                                                                        e._config.autohide &&
                                                                                (e._timeout = setTimeout(function () {
                                                                                        e.hide();
                                                                                }, e._config.delay));
                                                        }),
                                                        this._element.classList.remove("hide"),
                                                        d.reflow(this._element),
                                                        this._element.classList.add(Di),
                                                        this._config.animation ? ((i = d.getTransitionDurationFromElement(this._element)), c.default(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(i)) : t());
                                }),
                                (t.hide = function () {
                                        var t;
                                        this._element.classList.contains(Ci) && ((t = c.default.Event("hide.bs.toast")), c.default(this._element).trigger(t), t.isDefaultPrevented() || this._close());
                                }),
                                (t.dispose = function () {
                                        this._clearTimeout(),
                                                this._element.classList.contains(Ci) && this._element.classList.remove(Ci),
                                                c.default(this._element).off(ki),
                                                c.default.removeData(this._element, bi),
                                                (this._element = null),
                                                (this._config = null);
                                }),
                                (t._getConfig = function (t) {
                                        return (t = r({}, Ti, c.default(this._element).data(), "object" == typeof t && t ? t : {})), d.typeCheckConfig(wi, t, this.constructor.DefaultType), t;
                                }),
                                (t._setListeners = function () {
                                        var t = this;
                                        c.default(this._element).on(ki, '[data-dismiss="toast"]', function () {
                                                return t.hide();
                                        });
                                }),
                                (t._close = function () {
                                        function t() {
                                                i._element.classList.add("hide"), c.default(i._element).trigger("hidden.bs.toast");
                                        }
                                        var e,
                                                i = this;
                                        this._element.classList.remove(Ci), this._config.animation ? ((e = d.getTransitionDurationFromElement(this._element)), c.default(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(e)) : t();
                                }),
                                (t._clearTimeout = function () {
                                        clearTimeout(this._timeout), (this._timeout = null);
                                }),
                                (s._jQueryInterface = function (i) {
                                        return this.each(function () {
                                                var t = c.default(this),
                                                        e = t.data(bi);
                                                if ((e || ((e = new s(this, "object" == typeof i && i)), t.data(bi, e)), "string" == typeof i)) {
                                                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                                                        e[i](this);
                                                }
                                        });
                                }),
                                a(s, null, [
                                        {
                                                key: "VERSION",
                                                get: function () {
                                                        return "4.6.0";
                                                },
                                        },
                                        {
                                                key: "DefaultType",
                                                get: function () {
                                                        return Si;
                                                },
                                        },
                                        {
                                                key: "Default",
                                                get: function () {
                                                        return Ti;
                                                },
                                        },
                                ]),
                                s
                        );
                })();
        (c.default.fn[wi] = Ei._jQueryInterface),
                (c.default.fn[wi].Constructor = Ei),
                (c.default.fn[wi].noConflict = function () {
                        return (c.default.fn[wi] = xi), Ei._jQueryInterface;
                }),
                (t.Alert = p),
                (t.Button = x),
                (t.Carousel = Y),
                (t.Collapse = V),
                (t.Dropdown = ne),
                (t.Modal = Ce),
                (t.Popover = ei),
                (t.Scrollspy = fi),
                (t.Tab = yi),
                (t.Toast = Ei),
                (t.Tooltip = Ue),
                (t.Util = d),
                Object.defineProperty(t, "__esModule", { value: !0 });
}),
        (function (a, r, l, s) {
                function h(t, e) {
                        var i = this;
                        "object" == typeof e && (delete e.refresh, delete e.render, a.extend(this, e)), (this.$element = a(t)), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
                        e = (this.position + "").toLowerCase().match(/\S+/g) || [];
                        if (
                                (e.length < 1 && e.push("center"),
                                1 == e.length && e.push(e[0]),
                                ("top" != e[0] && "bottom" != e[0] && "left" != e[1] && "right" != e[1]) || (e = [e[1], e[0]]),
                                this.positionX !== s && (e[0] = this.positionX.toLowerCase()),
                                this.positionY !== s && (e[1] = this.positionY.toLowerCase()),
                                (i.positionX = e[0]),
                                (i.positionY = e[1]),
                                "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? (this.positionX = "center") : (this.positionX = parseInt(this.positionX))),
                                "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? (this.positionY = "center") : (this.positionY = parseInt(this.positionY))),
                                (this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px")),
                                navigator.userAgent.match(/(iPod|iPhone|iPad)/))
                        )
                                return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: 'url("' + this.imageSrc + '")', backgroundSize: "cover", backgroundPosition: this.position }), this;
                        if (navigator.userAgent.match(/(Android)/))
                                return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: 'url("' + this.imageSrc + '")', backgroundSize: "cover", backgroundPosition: this.position }), this;
                        this.$mirror = a("<div />").prependTo(this.mirrorContainer);
                        (t = this.$element.find(">.parallax-slider")), (e = !1);
                        0 == t.length ? (this.$slider = a("<img />").prependTo(this.$mirror)) : ((this.$slider = t.prependTo(this.$mirror)), (e = !0)),
                                this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }),
                                this.$slider.addClass("parallax-slider").one("load", function () {
                                        (i.naturalHeight && i.naturalWidth) || ((i.naturalHeight = this.naturalHeight || this.height || 1), (i.naturalWidth = this.naturalWidth || this.width || 1)),
                                                (i.aspectRatio = i.naturalWidth / i.naturalHeight),
                                                h.isSetup || h.setup(),
                                                h.sliders.push(i),
                                                (h.isFresh = !1),
                                                h.requestRender();
                                }),
                                e || (this.$slider[0].src = this.imageSrc),
                                ((this.naturalHeight && this.naturalWidth) || this.$slider[0].complete || 0 < t.length) && this.$slider.trigger("load");
                }
                !(function () {
                        for (var n = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !r.requestAnimationFrame; ++e)
                                (r.requestAnimationFrame = r[t[e] + "RequestAnimationFrame"]), (r.cancelAnimationFrame = r[t[e] + "CancelAnimationFrame"] || r[t[e] + "CancelRequestAnimationFrame"]);
                        r.requestAnimationFrame ||
                                (r.requestAnimationFrame = function (t) {
                                        var e = new Date().getTime(),
                                                i = Math.max(0, 16 - (e - n)),
                                                s = r.setTimeout(function () {
                                                        t(e + i);
                                                }, i);
                                        return (n = e + i), s;
                                }),
                                r.cancelAnimationFrame ||
                                        (r.cancelAnimationFrame = function (t) {
                                                clearTimeout(t);
                                        });
                })(),
                        a.extend(h.prototype, {
                                speed: 0.2,
                                bleed: 0,
                                zIndex: 1,
                                iosFix: !0,
                                androidFix: !0,
                                position: "center",
                                overScrollFix: !1,
                                mirrorContainer: "body",
                                refresh: function () {
                                        (this.boxWidth = this.$element.outerWidth()),
                                                (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
                                                (this.boxOffsetTop = this.$element.offset().top - this.bleed),
                                                (this.boxOffsetLeft = this.$element.offset().left),
                                                (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
                                        var t,
                                                e = h.winHeight,
                                                i = h.docHeight,
                                                i = Math.min(this.boxOffsetTop, i - e),
                                                e = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
                                                e = (this.boxHeight + (i - e) * (1 - this.speed)) | 0,
                                                i = ((this.boxOffsetTop - i) * (1 - this.speed)) | 0;
                                        e * this.aspectRatio >= this.boxWidth
                                                ? ((this.imageWidth = (e * this.aspectRatio) | 0),
                                                  (this.imageHeight = e),
                                                  (this.offsetBaseTop = i),
                                                  (t = this.imageWidth - this.boxWidth),
                                                  "left" == this.positionX
                                                          ? (this.offsetLeft = 0)
                                                          : "right" == this.positionX
                                                          ? (this.offsetLeft = -t)
                                                          : isNaN(this.positionX)
                                                          ? (this.offsetLeft = (-t / 2) | 0)
                                                          : (this.offsetLeft = Math.max(this.positionX, -t)))
                                                : ((this.imageWidth = this.boxWidth),
                                                  (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
                                                  (this.offsetLeft = 0),
                                                  (t = this.imageHeight - e),
                                                  "top" == this.positionY
                                                          ? (this.offsetBaseTop = i)
                                                          : "bottom" == this.positionY
                                                          ? (this.offsetBaseTop = i - t)
                                                          : isNaN(this.positionY)
                                                          ? (this.offsetBaseTop = (i - t / 2) | 0)
                                                          : (this.offsetBaseTop = i + Math.max(this.positionY, -t)));
                                },
                                render: function () {
                                        var t = h.scrollTop,
                                                e = h.scrollLeft,
                                                i = this.overScrollFix ? h.overScroll : 0,
                                                s = t + h.winHeight;
                                        this.boxOffsetBottom > t && this.boxOffsetTop <= s
                                                ? ((this.visibility = "visible"),
                                                  (this.mirrorTop = this.boxOffsetTop - t),
                                                  (this.mirrorLeft = this.boxOffsetLeft - e),
                                                  (this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
                                                : (this.visibility = "hidden"),
                                                this.$mirror.css({ transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - i) + "px, 0px)", visibility: this.visibility, height: this.boxHeight, width: this.boxWidth }),
                                                this.$slider.css({
                                                        transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
                                                        position: "absolute",
                                                        height: this.imageHeight,
                                                        width: this.imageWidth,
                                                        maxWidth: "none",
                                                });
                                },
                        }),
                        a.extend(h, {
                                scrollTop: 0,
                                scrollLeft: 0,
                                winHeight: 0,
                                winWidth: 0,
                                docHeight: 1 << 30,
                                docWidth: 1 << 30,
                                sliders: [],
                                isReady: !1,
                                isFresh: !1,
                                isBusy: !1,
                                setup: function () {
                                        var e, t, s, i, n, o;
                                        this.isReady ||
                                                ((e = this),
                                                (t = a(l)),
                                                (s = a(r)),
                                                (i = function () {
                                                        (h.winHeight = s.height()), (h.winWidth = s.width()), (h.docHeight = t.height()), (h.docWidth = t.width());
                                                }),
                                                (n = function () {
                                                        var t = s.scrollTop(),
                                                                e = h.docHeight - h.winHeight,
                                                                i = h.docWidth - h.winWidth;
                                                        (h.scrollTop = Math.max(0, Math.min(e, t))), (h.scrollLeft = Math.max(0, Math.min(i, s.scrollLeft()))), (h.overScroll = Math.max(t - e, Math.min(t, 0)));
                                                }),
                                                s
                                                        .on("resize.px.parallax load.px.parallax", function () {
                                                                i(), e.refresh(), (h.isFresh = !1), h.requestRender();
                                                        })
                                                        .on("scroll.px.parallax load.px.parallax", function () {
                                                                n(), h.requestRender();
                                                        }),
                                                i(),
                                                n(),
                                                (this.isReady = !0),
                                                (o = -1),
                                                (function t() {
                                                        if (o == r.pageYOffset) return r.requestAnimationFrame(t), !1;
                                                        (o = r.pageYOffset), e.render(), r.requestAnimationFrame(t);
                                                })());
                                },
                                configure: function (t) {
                                        "object" == typeof t && (delete t.refresh, delete t.render, a.extend(this.prototype, t));
                                },
                                refresh: function () {
                                        a.each(this.sliders, function () {
                                                this.refresh();
                                        }),
                                                (this.isFresh = !0);
                                },
                                render: function () {
                                        this.isFresh || this.refresh(),
                                                a.each(this.sliders, function () {
                                                        this.render();
                                                });
                                },
                                requestRender: function () {
                                        this.render(), (this.isBusy = !1);
                                },
                                destroy: function (t) {
                                        var e,
                                                i = a(t).data("px.parallax");
                                        for (i.$mirror.remove(), e = 0; e < this.sliders.length; e += 1) this.sliders[e] == i && this.sliders.splice(e, 1);
                                        a(t).data("px.parallax", !1), 0 === this.sliders.length && (a(r).off("scroll.px.parallax resize.px.parallax load.px.parallax"), (this.isReady = !1), (h.isSetup = !1));
                                },
                        });
                var t = a.fn.parallax;
                (a.fn.parallax = function (i) {
                        return this.each(function () {
                                var t = a(this),
                                        e = "object" == typeof i && i;
                                this == r || this == l || t.is("body")
                                        ? h.configure(e)
                                        : t.data("px.parallax")
                                        ? "object" == typeof i && a.extend(t.data("px.parallax"), e)
                                        : ((e = a.extend({}, t.data(), e)), t.data("px.parallax", new h(this, e))),
                                        "string" == typeof i && ("destroy" == i ? h.destroy(this) : h[i]());
                        });
                }),
                        (a.fn.parallax.Constructor = h),
                        (a.fn.parallax.noConflict = function () {
                                return (a.fn.parallax = t), this;
                        }),
                        a(function () {
                                a('[data-parallax="scroll"]').parallax();
                        });
        })(jQuery, window, document),
        (function (t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto);
        })(function (h) {
                function t() {}
                function c(t, e) {
                        p.ev.on("mfp" + t + w, e);
                }
                function d(t, e, i, s) {
                        var n = document.createElement("div");
                        return (n.className = "mfp-" + t), i && (n.innerHTML = i), s ? e && e.appendChild(n) : ((n = h(n)), e && n.appendTo(e)), n;
                }
                function u(t, e) {
                        p.ev.triggerHandler("mfp" + t, e), p.st.callbacks && ((t = t.charAt(0).toLowerCase() + t.slice(1)), p.st.callbacks[t] && p.st.callbacks[t].apply(p, h.isArray(e) ? e : [e]));
                }
                function f(t) {
                        return (t === e && p.currTemplate.closeBtn) || ((p.currTemplate.closeBtn = h(p.st.closeMarkup.replace("%title%", p.st.tClose))), (e = t)), p.currTemplate.closeBtn;
                }
                function o() {
                        h.magnificPopup.instance || ((p = new t()).init(), (h.magnificPopup.instance = p));
                }
                var p,
                        s,
                        m,
                        n,
                        g,
                        e,
                        l = "Close",
                        _ = "BeforeClose",
                        v = "MarkupParse",
                        y = "Open",
                        w = ".mfp",
                        b = "mfp-ready",
                        i = "mfp-removing",
                        a = "mfp-prevent-close",
                        r = !!window.jQuery,
                        x = h(window);
                (t.prototype = {
                        constructor: t,
                        init: function () {
                                var t = navigator.appVersion;
                                (p.isLowIE = p.isIE8 = document.all && !document.addEventListener),
                                        (p.isAndroid = /android/gi.test(t)),
                                        (p.isIOS = /iphone|ipad|ipod/gi.test(t)),
                                        (p.supportsTransition = (function () {
                                                var t = document.createElement("p").style,
                                                        e = ["ms", "O", "Moz", "Webkit"];
                                                if (void 0 !== t.transition) return !0;
                                                for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
                                                return !1;
                                        })()),
                                        (p.probablyMobile = p.isAndroid || p.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                                        (m = h(document)),
                                        (p.popupsCache = {});
                        },
                        open: function (t) {
                                if (!1 === t.isObj) {
                                        (p.items = t.items.toArray()), (p.index = 0);
                                        for (var e, i = t.items, s = 0; s < i.length; s++)
                                                if (((e = i[s]).parsed && (e = e.el[0]), e === t.el[0])) {
                                                        p.index = s;
                                                        break;
                                                }
                                } else (p.items = h.isArray(t.items) ? t.items : [t.items]), (p.index = t.index || 0);
                                if (!p.isOpen) {
                                        (p.types = []),
                                                (g = ""),
                                                t.mainEl && t.mainEl.length ? (p.ev = t.mainEl.eq(0)) : (p.ev = m),
                                                t.key ? (p.popupsCache[t.key] || (p.popupsCache[t.key] = {}), (p.currTemplate = p.popupsCache[t.key])) : (p.currTemplate = {}),
                                                (p.st = h.extend(!0, {}, h.magnificPopup.defaults, t)),
                                                (p.fixedContentPos = "auto" === p.st.fixedContentPos ? !p.probablyMobile : p.st.fixedContentPos),
                                                p.st.modal && ((p.st.closeOnContentClick = !1), (p.st.closeOnBgClick = !1), (p.st.showCloseBtn = !1), (p.st.enableEscapeKey = !1)),
                                                p.bgOverlay ||
                                                        ((p.bgOverlay = d("bg").on("click" + w, function () {
                                                                p.close();
                                                        })),
                                                        (p.wrap = d("wrap")
                                                                .attr("tabindex", -1)
                                                                .on("click" + w, function (t) {
                                                                        p._checkIfClose(t.target) && p.close();
                                                                })),
                                                        (p.container = d("container", p.wrap))),
                                                (p.contentContainer = d("content")),
                                                p.st.preloader && (p.preloader = d("preloader", p.container, p.st.tLoading));
                                        var n = h.magnificPopup.modules;
                                        for (s = 0; s < n.length; s++) {
                                                var o = (o = n[s]).charAt(0).toUpperCase() + o.slice(1);
                                                p["init" + o].call(p);
                                        }
                                        u("BeforeOpen"),
                                                p.st.showCloseBtn &&
                                                        (p.st.closeBtnInside
                                                                ? (c(v, function (t, e, i, s) {
                                                                          i.close_replaceWith = f(s.type);
                                                                  }),
                                                                  (g += " mfp-close-btn-in"))
                                                                : p.wrap.append(f())),
                                                p.st.alignTop && (g += " mfp-align-top"),
                                                p.fixedContentPos ? p.wrap.css({ overflow: p.st.overflowY, overflowX: "hidden", overflowY: p.st.overflowY }) : p.wrap.css({ top: x.scrollTop(), position: "absolute" }),
                                                (!1 !== p.st.fixedBgPos && ("auto" !== p.st.fixedBgPos || p.fixedContentPos)) || p.bgOverlay.css({ height: m.height(), position: "absolute" }),
                                                p.st.enableEscapeKey &&
                                                        m.on("keyup" + w, function (t) {
                                                                27 === t.keyCode && p.close();
                                                        }),
                                                x.on("resize" + w, function () {
                                                        p.updateSize();
                                                }),
                                                p.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                                                g && p.wrap.addClass(g);
                                        var a = (p.wH = x.height()),
                                                r = {};
                                        p.fixedContentPos && (!p._hasScrollBar(a) || ((l = p._getScrollbarSize()) && (r.marginRight = l))),
                                                p.fixedContentPos && (p.isIE7 ? h("body, html").css("overflow", "hidden") : (r.overflow = "hidden"));
                                        var l = p.st.mainClass;
                                        return (
                                                p.isIE7 && (l += " mfp-ie7"),
                                                l && p._addClassToMFP(l),
                                                p.updateItemHTML(),
                                                u("BuildControls"),
                                                h("html").css(r),
                                                p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo || h(document.body)),
                                                (p._lastFocusedEl = document.activeElement),
                                                setTimeout(function () {
                                                        p.content ? (p._addClassToMFP(b), p._setFocus()) : p.bgOverlay.addClass(b), m.on("focusin" + w, p._onFocusIn);
                                                }, 16),
                                                (p.isOpen = !0),
                                                p.updateSize(a),
                                                u(y),
                                                t
                                        );
                                }
                                p.updateItemHTML();
                        },
                        close: function () {
                                p.isOpen &&
                                        (u(_),
                                        (p.isOpen = !1),
                                        p.st.removalDelay && !p.isLowIE && p.supportsTransition
                                                ? (p._addClassToMFP(i),
                                                  setTimeout(function () {
                                                          p._close();
                                                  }, p.st.removalDelay))
                                                : p._close());
                        },
                        _close: function () {
                                u(l);
                                var t = i + " " + b + " ";
                                p.bgOverlay.detach(),
                                        p.wrap.detach(),
                                        p.container.empty(),
                                        p.st.mainClass && (t += p.st.mainClass + " "),
                                        p._removeClassFromMFP(t),
                                        p.fixedContentPos && ((t = { marginRight: "" }), p.isIE7 ? h("body, html").css("overflow", "") : (t.overflow = ""), h("html").css(t)),
                                        m.off("keyup.mfp focusin" + w),
                                        p.ev.off(w),
                                        p.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                                        p.bgOverlay.attr("class", "mfp-bg"),
                                        p.container.attr("class", "mfp-container"),
                                        !p.st.showCloseBtn || (p.st.closeBtnInside && !0 !== p.currTemplate[p.currItem.type]) || (p.currTemplate.closeBtn && p.currTemplate.closeBtn.detach()),
                                        p.st.autoFocusLast && p._lastFocusedEl && h(p._lastFocusedEl).focus(),
                                        (p.currItem = null),
                                        (p.content = null),
                                        (p.currTemplate = null),
                                        (p.prevHeight = 0),
                                        u("AfterClose");
                        },
                        updateSize: function (t) {
                                var e;
                                p.isIOS ? ((e = document.documentElement.clientWidth / window.innerWidth), (e = window.innerHeight * e), p.wrap.css("height", e), (p.wH = e)) : (p.wH = t || x.height()),
                                        p.fixedContentPos || p.wrap.css("height", p.wH),
                                        u("Resize");
                        },
                        updateItemHTML: function () {
                                var t = p.items[p.index];
                                p.contentContainer.detach(), p.content && p.content.detach(), t.parsed || (t = p.parseEl(p.index));
                                var e = t.type;
                                u("BeforeChange", [p.currItem ? p.currItem.type : "", e]),
                                        (p.currItem = t),
                                        p.currTemplate[e] || ((i = !!p.st[e] && p.st[e].markup), u("FirstMarkupParse", i), (p.currTemplate[e] = !i || h(i))),
                                        n && n !== t.type && p.container.removeClass("mfp-" + n + "-holder");
                                var i = p["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, p.currTemplate[e]);
                                p.appendContent(i, e), (t.preloaded = !0), u("Change", t), (n = t.type), p.container.prepend(p.contentContainer), u("AfterChange");
                        },
                        appendContent: function (t, e) {
                                (p.content = t) ? (p.st.showCloseBtn && p.st.closeBtnInside && !0 === p.currTemplate[e] ? p.content.find(".mfp-close").length || p.content.append(f()) : (p.content = t)) : (p.content = ""),
                                        u("BeforeAppend"),
                                        p.container.addClass("mfp-" + e + "-holder"),
                                        p.contentContainer.append(p.content);
                        },
                        parseEl: function (t) {
                                var e,
                                        i = p.items[t];
                                if ((i = i.tagName ? { el: h(i) } : ((e = i.type), { data: i, src: i.src })).el) {
                                        for (var s = p.types, n = 0; n < s.length; n++)
                                                if (i.el.hasClass("mfp-" + s[n])) {
                                                        e = s[n];
                                                        break;
                                                }
                                        (i.src = i.el.attr("data-mfp-src")), i.src || (i.src = i.el.attr("href"));
                                }
                                return (i.type = e || p.st.type || "inline"), (i.index = t), (i.parsed = !0), (p.items[t] = i), u("ElementParse", i), p.items[t];
                        },
                        addGroup: function (e, i) {
                                function t(t) {
                                        (t.mfpEl = this), p._openClick(t, e, i);
                                }
                                var s = "click.magnificPopup";
                                ((i = i || {}).mainEl = e), i.items ? ((i.isObj = !0), e.off(s).on(s, t)) : ((i.isObj = !1), i.delegate ? e.off(s).on(s, i.delegate, t) : (i.items = e).off(s).on(s, t));
                        },
                        _openClick: function (t, e, i) {
                                if ((void 0 !== i.midClick ? i : h.magnificPopup.defaults).midClick || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                                        var s = (void 0 !== i.disableOn ? i : h.magnificPopup.defaults).disableOn;
                                        if (s)
                                                if (h.isFunction(s)) {
                                                        if (!s.call(p)) return !0;
                                                } else if (x.width() < s) return !0;
                                        t.type && (t.preventDefault(), p.isOpen && t.stopPropagation()), (i.el = h(t.mfpEl)), i.delegate && (i.items = e.find(i.delegate)), p.open(i);
                                }
                        },
                        updateStatus: function (t, e) {
                                var i;
                                p.preloader &&
                                        (s !== t && p.container.removeClass("mfp-s-" + s),
                                        e || "loading" !== t || (e = p.st.tLoading),
                                        u("UpdateStatus", (i = { status: t, text: e })),
                                        (t = i.status),
                                        (e = i.text),
                                        p.preloader.html(e),
                                        p.preloader.find("a").on("click", function (t) {
                                                t.stopImmediatePropagation();
                                        }),
                                        p.container.addClass("mfp-s-" + t),
                                        (s = t));
                        },
                        _checkIfClose: function (t) {
                                if (!h(t).hasClass(a)) {
                                        var e = p.st.closeOnContentClick,
                                                i = p.st.closeOnBgClick;
                                        if (e && i) return !0;
                                        if (!p.content || h(t).hasClass("mfp-close") || (p.preloader && t === p.preloader[0])) return !0;
                                        if (t === p.content[0] || h.contains(p.content[0], t)) {
                                                if (e) return !0;
                                        } else if (i && h.contains(document, t)) return !0;
                                        return !1;
                                }
                        },
                        _addClassToMFP: function (t) {
                                p.bgOverlay.addClass(t), p.wrap.addClass(t);
                        },
                        _removeClassFromMFP: function (t) {
                                this.bgOverlay.removeClass(t), p.wrap.removeClass(t);
                        },
                        _hasScrollBar: function (t) {
                                return (p.isIE7 ? m.height() : document.body.scrollHeight) > (t || x.height());
                        },
                        _setFocus: function () {
                                (p.st.focus ? p.content.find(p.st.focus).eq(0) : p.wrap).focus();
                        },
                        _onFocusIn: function (t) {
                                if (t.target !== p.wrap[0] && !h.contains(p.wrap[0], t.target)) return p._setFocus(), !1;
                        },
                        _parseMarkup: function (n, t, e) {
                                var o;
                                e.data && (t = h.extend(e.data, t)),
                                        u(v, [n, t, e]),
                                        h.each(t, function (t, e) {
                                                return (
                                                        void 0 === e ||
                                                        !1 === e ||
                                                        void (1 < (o = t.split("_")).length
                                                                ? 0 < (i = n.find(w + "-" + o[0])).length &&
                                                                  ("replaceWith" === (s = o[1])
                                                                          ? i[0] !== e[0] && i.replaceWith(e)
                                                                          : "img" === s
                                                                          ? i.is("img")
                                                                                  ? i.attr("src", e)
                                                                                  : i.replaceWith(h("<img>").attr("src", e).attr("class", i.attr("class")))
                                                                          : i.attr(o[1], e))
                                                                : n.find(w + "-" + t).html(e))
                                                );
                                                var i, s;
                                        });
                        },
                        _getScrollbarSize: function () {
                                var t;
                                return (
                                        void 0 === p.scrollbarSize &&
                                                (((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                                                document.body.appendChild(t),
                                                (p.scrollbarSize = t.offsetWidth - t.clientWidth),
                                                document.body.removeChild(t)),
                                        p.scrollbarSize
                                );
                        },
                }),
                        (h.magnificPopup = {
                                instance: null,
                                proto: t.prototype,
                                modules: [],
                                open: function (t, e) {
                                        return o(), ((t = t ? h.extend(!0, {}, t) : {}).isObj = !0), (t.index = e || 0), this.instance.open(t);
                                },
                                close: function () {
                                        return h.magnificPopup.instance && h.magnificPopup.instance.close();
                                },
                                registerModule: function (t, e) {
                                        e.options && (h.magnificPopup.defaults[t] = e.options), h.extend(this.proto, e.proto), this.modules.push(t);
                                },
                                defaults: {
                                        disableOn: 0,
                                        key: null,
                                        midClick: !1,
                                        mainClass: "",
                                        preloader: !0,
                                        focus: "",
                                        closeOnContentClick: !1,
                                        closeOnBgClick: !0,
                                        closeBtnInside: !0,
                                        showCloseBtn: !0,
                                        enableEscapeKey: !0,
                                        modal: !1,
                                        alignTop: !1,
                                        removalDelay: 0,
                                        prependTo: null,
                                        fixedContentPos: "auto",
                                        fixedBgPos: "auto",
                                        overflowY: "auto",
                                        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
                                        tClose: "Close (Esc)",
                                        tLoading: "Loading...",
                                        autoFocusLast: !0,
                                },
                        }),
                        (h.fn.magnificPopup = function (t) {
                                o();
                                var e,
                                        i,
                                        s,
                                        n = h(this);
                                return (
                                        "string" == typeof t
                                                ? "open" === t
                                                        ? ((e = r ? n.data("magnificPopup") : n[0].magnificPopup),
                                                          (i = parseInt(arguments[1], 10) || 0),
                                                          (s = e.items ? e.items[i] : ((s = n), e.delegate && (s = s.find(e.delegate)), s.eq(i))),
                                                          p._openClick({ mfpEl: s }, n, e))
                                                        : p.isOpen && p[t].apply(p, Array.prototype.slice.call(arguments, 1))
                                                : ((t = h.extend(!0, {}, t)), r ? n.data("magnificPopup", t) : (n[0].magnificPopup = t), p.addGroup(n, t)),
                                        n
                                );
                        });
                function k() {
                        S && (D.after(S.addClass(C)).detach(), (S = null));
                }
                var C,
                        D,
                        S,
                        T = "inline";
                h.magnificPopup.registerModule(T, {
                        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
                        proto: {
                                initInline: function () {
                                        p.types.push(T),
                                                c(l + "." + T, function () {
                                                        k();
                                                });
                                },
                                getInline: function (t, e) {
                                        if ((k(), t.src)) {
                                                var i,
                                                        s = p.st.inline,
                                                        n = h(t.src);
                                                return (
                                                        n.length
                                                                ? ((i = n[0].parentNode) && i.tagName && (D || ((C = s.hiddenClass), (D = d(C)), (C = "mfp-" + C)), (S = n.after(D).detach().removeClass(C))), p.updateStatus("ready"))
                                                                : (p.updateStatus("error", s.tNotFound), (n = h("<div>"))),
                                                        (t.inlineElement = n)
                                                );
                                        }
                                        return p.updateStatus("ready"), p._parseMarkup(e, {}, t), e;
                                },
                        },
                });
                function E() {
                        O && h(document.body).removeClass(O);
                }
                function M() {
                        E(), p.req && p.req.abort();
                }
                var O,
                        P = "ajax";
                h.magnificPopup.registerModule(P, {
                        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
                        proto: {
                                initAjax: function () {
                                        p.types.push(P), (O = p.st.ajax.cursor), c(l + "." + P, M), c("BeforeChange." + P, M);
                                },
                                getAjax: function (s) {
                                        O && h(document.body).addClass(O), p.updateStatus("loading");
                                        var t = h.extend(
                                                {
                                                        url: s.src,
                                                        success: function (t, e, i) {
                                                                i = { data: t, xhr: i };
                                                                u("ParseAjax", i),
                                                                        p.appendContent(h(i.data), P),
                                                                        (s.finished = !0),
                                                                        E(),
                                                                        p._setFocus(),
                                                                        setTimeout(function () {
                                                                                p.wrap.addClass(b);
                                                                        }, 16),
                                                                        p.updateStatus("ready"),
                                                                        u("AjaxContentAdded");
                                                        },
                                                        error: function () {
                                                                E(), (s.finished = s.loadError = !0), p.updateStatus("error", p.st.ajax.tError.replace("%url%", s.src));
                                                        },
                                                },
                                                p.st.ajax.settings
                                        );
                                        return (p.req = h.ajax(t)), "";
                                },
                        },
                });
                var I;
                h.magnificPopup.registerModule("image", {
                        options: {
                                markup:
                                        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                                cursor: "mfp-zoom-out-cur",
                                titleSrc: "title",
                                verticalFit: !0,
                                tError: '<a href="%url%">The image</a> could not be loaded.',
                        },
                        proto: {
                                initImage: function () {
                                        var t = p.st.image,
                                                e = ".image";
                                        p.types.push("image"),
                                                c(y + e, function () {
                                                        "image" === p.currItem.type && t.cursor && h(document.body).addClass(t.cursor);
                                                }),
                                                c(l + e, function () {
                                                        t.cursor && h(document.body).removeClass(t.cursor), x.off("resize" + w);
                                                }),
                                                c("Resize" + e, p.resizeImage),
                                                p.isLowIE && c("AfterChange", p.resizeImage);
                                },
                                resizeImage: function () {
                                        var t,
                                                e = p.currItem;
                                        e && e.img && p.st.image.verticalFit && ((t = 0), p.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", p.wH - t));
                                },
                                _onImageHasSize: function (t) {
                                        t.img && ((t.hasSize = !0), I && clearInterval(I), (t.isCheckingImgSize = !1), u("ImageHasSize", t), t.imgHidden && (p.content && p.content.removeClass("mfp-loading"), (t.imgHidden = !1)));
                                },
                                findImageSize: function (e) {
                                        var i = 0,
                                                s = e.img[0],
                                                n = function (t) {
                                                        I && clearInterval(I),
                                                                (I = setInterval(function () {
                                                                        0 < s.naturalWidth ? p._onImageHasSize(e) : (200 < i && clearInterval(I), 3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500));
                                                                }, t));
                                                };
                                        n(1);
                                },
                                getImage: function (t, e) {
                                        var i,
                                                s = 0,
                                                n = function () {
                                                        t &&
                                                                (t.img[0].complete
                                                                        ? (t.img.off(".mfploader"), t === p.currItem && (p._onImageHasSize(t), p.updateStatus("ready")), (t.hasSize = !0), (t.loaded = !0), u("ImageLoadComplete"))
                                                                        : ++s < 200
                                                                        ? setTimeout(n, 100)
                                                                        : o());
                                                },
                                                o = function () {
                                                        t &&
                                                                (t.img.off(".mfploader"),
                                                                t === p.currItem && (p._onImageHasSize(t), p.updateStatus("error", a.tError.replace("%url%", t.src))),
                                                                (t.hasSize = !0),
                                                                (t.loaded = !0),
                                                                (t.loadError = !0));
                                                },
                                                a = p.st.image,
                                                r = e.find(".mfp-img");
                                        return (
                                                r.length &&
                                                        (((i = document.createElement("img")).className = "mfp-img"),
                                                        t.el && t.el.find("img").length && (i.alt = t.el.find("img").attr("alt")),
                                                        (t.img = h(i).on("load.mfploader", n).on("error.mfploader", o)),
                                                        (i.src = t.src),
                                                        r.is("img") && (t.img = t.img.clone()),
                                                        0 < (i = t.img[0]).naturalWidth ? (t.hasSize = !0) : i.width || (t.hasSize = !1)),
                                                p._parseMarkup(
                                                        e,
                                                        {
                                                                title: (function (t) {
                                                                        if (t.data && void 0 !== t.data.title) return t.data.title;
                                                                        var e = p.st.image.titleSrc;
                                                                        if (e) {
                                                                                if (h.isFunction(e)) return e.call(p, t);
                                                                                if (t.el) return t.el.attr(e) || "";
                                                                        }
                                                                        return "";
                                                                })(t),
                                                                img_replaceWith: t.img,
                                                        },
                                                        t
                                                ),
                                                p.resizeImage(),
                                                t.hasSize
                                                        ? (I && clearInterval(I),
                                                          t.loadError ? (e.addClass("mfp-loading"), p.updateStatus("error", a.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), p.updateStatus("ready")))
                                                        : (p.updateStatus("loading"), (t.loading = !0), t.hasSize || ((t.imgHidden = !0), e.addClass("mfp-loading"), p.findImageSize(t))),
                                                e
                                        );
                                },
                        },
                });
                var $;
                h.magnificPopup.registerModule("zoom", {
                        options: {
                                enabled: !1,
                                easing: "ease-in-out",
                                duration: 300,
                                opener: function (t) {
                                        return t.is("img") ? t : t.find("img");
                                },
                        },
                        proto: {
                                initZoom: function () {
                                        var t,
                                                e,
                                                i,
                                                s,
                                                n,
                                                o,
                                                a = p.st.zoom,
                                                r = ".zoom";
                                        a.enabled &&
                                                p.supportsTransition &&
                                                ((e = a.duration),
                                                (i = function (t) {
                                                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                                                i = "all " + a.duration / 1e3 + "s " + a.easing,
                                                                s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                                                t = "transition";
                                                        return (s["-webkit-" + t] = s["-moz-" + t] = s["-o-" + t] = s[t] = i), e.css(s), e;
                                                }),
                                                (s = function () {
                                                        p.content.css("visibility", "visible");
                                                }),
                                                c("BuildControls" + r, function () {
                                                        p._allowZoom() &&
                                                                (clearTimeout(n),
                                                                p.content.css("visibility", "hidden"),
                                                                (t = p._getItemToZoom())
                                                                        ? ((o = i(t)).css(p._getOffset()),
                                                                          p.wrap.append(o),
                                                                          (n = setTimeout(function () {
                                                                                  o.css(p._getOffset(!0)),
                                                                                          (n = setTimeout(function () {
                                                                                                  s(),
                                                                                                          setTimeout(function () {
                                                                                                                  o.remove(), (t = o = null), u("ZoomAnimationEnded");
                                                                                                          }, 16);
                                                                                          }, e));
                                                                          }, 16)))
                                                                        : s());
                                                }),
                                                c(_ + r, function () {
                                                        if (p._allowZoom()) {
                                                                if ((clearTimeout(n), (p.st.removalDelay = e), !t)) {
                                                                        if (!(t = p._getItemToZoom())) return;
                                                                        o = i(t);
                                                                }
                                                                o.css(p._getOffset(!0)),
                                                                        p.wrap.append(o),
                                                                        p.content.css("visibility", "hidden"),
                                                                        setTimeout(function () {
                                                                                o.css(p._getOffset());
                                                                        }, 16);
                                                        }
                                                }),
                                                c(l + r, function () {
                                                        p._allowZoom() && (s(), o && o.remove(), (t = null));
                                                }));
                                },
                                _allowZoom: function () {
                                        return "image" === p.currItem.type;
                                },
                                _getItemToZoom: function () {
                                        return !!p.currItem.hasSize && p.currItem.img;
                                },
                                _getOffset: function (t) {
                                        var e = t ? p.currItem.img : p.st.zoom.opener(p.currItem.el || p.currItem),
                                                i = e.offset(),
                                                s = parseInt(e.css("padding-top"), 10),
                                                t = parseInt(e.css("padding-bottom"), 10);
                                        i.top -= h(window).scrollTop() - s;
                                        s = { width: e.width(), height: (r ? e.innerHeight() : e[0].offsetHeight) - t - s };
                                        return (
                                                void 0 === $ && ($ = void 0 !== document.createElement("p").style.MozTransform),
                                                $ ? (s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)") : ((s.left = i.left), (s.top = i.top)),
                                                s
                                        );
                                },
                        },
                });
                function A(t) {
                        var e;
                        !p.currTemplate[Y] || ((e = p.currTemplate[Y].find("iframe")).length && (t || (e[0].src = "//about:blank"), p.isIE8 && e.css("display", t ? "block" : "none")));
                }
                var Y = "iframe";
                h.magnificPopup.registerModule(Y, {
                        options: {
                                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                                srcAction: "iframe_src",
                                patterns: {
                                        youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                                        vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                                        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                                },
                        },
                        proto: {
                                initIframe: function () {
                                        p.types.push(Y),
                                                c("BeforeChange", function (t, e, i) {
                                                        e !== i && (e === Y ? A() : i === Y && A(!0));
                                                }),
                                                c(l + "." + Y, function () {
                                                        A();
                                                });
                                },
                                getIframe: function (t, e) {
                                        var i = t.src,
                                                s = p.st.iframe;
                                        h.each(s.patterns, function () {
                                                if (-1 < i.indexOf(this.index))
                                                        return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), (i = this.src.replace("%id%", i)), !1;
                                        });
                                        var n = {};
                                        return s.srcAction && (n[s.srcAction] = i), p._parseMarkup(e, n, t), p.updateStatus("ready"), e;
                                },
                        },
                });
                function N(t) {
                        var e = p.items.length;
                        return e - 1 < t ? t - e : t < 0 ? e + t : t;
                }
                function F(t, e, i) {
                        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
                }
                h.magnificPopup.registerModule("gallery", {
                        options: {
                                enabled: !1,
                                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                                preload: [0, 2],
                                navigateByImgClick: !0,
                                arrows: !0,
                                tPrev: "Previous (Left arrow key)",
                                tNext: "Next (Right arrow key)",
                                tCounter: "%curr% of %total%",
                        },
                        proto: {
                                initGallery: function () {
                                        var o = p.st.gallery,
                                                t = ".mfp-gallery";
                                        if (((p.direction = !0), !o || !o.enabled)) return !1;
                                        (g += " mfp-gallery"),
                                                c(y + t, function () {
                                                        o.navigateByImgClick &&
                                                                p.wrap.on("click" + t, ".mfp-img", function () {
                                                                        if (1 < p.items.length) return p.next(), !1;
                                                                }),
                                                                m.on("keydown" + t, function (t) {
                                                                        37 === t.keyCode ? p.prev() : 39 === t.keyCode && p.next();
                                                                });
                                                }),
                                                c("UpdateStatus" + t, function (t, e) {
                                                        e.text && (e.text = F(e.text, p.currItem.index, p.items.length));
                                                }),
                                                c(v + t, function (t, e, i, s) {
                                                        var n = p.items.length;
                                                        i.counter = 1 < n ? F(o.tCounter, s.index, n) : "";
                                                }),
                                                c("BuildControls" + t, function () {
                                                        var t, e;
                                                        1 < p.items.length &&
                                                                o.arrows &&
                                                                !p.arrowLeft &&
                                                                ((e = o.arrowMarkup),
                                                                (t = p.arrowLeft = h(e.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(a)),
                                                                (e = p.arrowRight = h(e.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(a)),
                                                                t.click(function () {
                                                                        p.prev();
                                                                }),
                                                                e.click(function () {
                                                                        p.next();
                                                                }),
                                                                p.container.append(t.add(e)));
                                                }),
                                                c("Change" + t, function () {
                                                        p._preloadTimeout && clearTimeout(p._preloadTimeout),
                                                                (p._preloadTimeout = setTimeout(function () {
                                                                        p.preloadNearbyImages(), (p._preloadTimeout = null);
                                                                }, 16));
                                                }),
                                                c(l + t, function () {
                                                        m.off(t), p.wrap.off("click" + t), (p.arrowRight = p.arrowLeft = null);
                                                });
                                },
                                next: function () {
                                        (p.direction = !0), (p.index = N(p.index + 1)), p.updateItemHTML();
                                },
                                prev: function () {
                                        (p.direction = !1), (p.index = N(p.index - 1)), p.updateItemHTML();
                                },
                                goTo: function (t) {
                                        (p.direction = t >= p.index), (p.index = t), p.updateItemHTML();
                                },
                                preloadNearbyImages: function () {
                                        for (var t = p.st.gallery.preload, e = Math.min(t[0], p.items.length), i = Math.min(t[1], p.items.length), s = 1; s <= (p.direction ? i : e); s++) p._preloadItem(p.index + s);
                                        for (s = 1; s <= (p.direction ? e : i); s++) p._preloadItem(p.index - s);
                                },
                                _preloadItem: function (t) {
                                        var e;
                                        (t = N(t)),
                                                p.items[t].preloaded ||
                                                        ((e = p.items[t]).parsed || (e = p.parseEl(t)),
                                                        u("LazyLoad", e),
                                                        "image" === e.type &&
                                                                (e.img = h('<img class="mfp-img" />')
                                                                        .on("load.mfploader", function () {
                                                                                e.hasSize = !0;
                                                                        })
                                                                        .on("error.mfploader", function () {
                                                                                (e.hasSize = !0), (e.loadError = !0), u("LazyLoadError", e);
                                                                        })
                                                                        .attr("src", e.src)),
                                                        (e.preloaded = !0));
                                },
                        },
                });
                var L = "retina";
                h.magnificPopup.registerModule(L, {
                        options: {
                                replaceSrc: function (t) {
                                        return t.src.replace(/\.\w+$/, function (t) {
                                                return "@2x" + t;
                                        });
                                },
                                ratio: 1,
                        },
                        proto: {
                                initRetina: function () {
                                        var i, s;
                                        1 < window.devicePixelRatio &&
                                                ((i = p.st.retina),
                                                (s = i.ratio),
                                                1 < (s = isNaN(s) ? s() : s) &&
                                                        (c("ImageHasSize." + L, function (t, e) {
                                                                e.img.css({ "max-width": e.img[0].naturalWidth / s, width: "100%" });
                                                        }),
                                                        c("ElementParse." + L, function (t, e) {
                                                                e.src = i.replaceSrc(e, s);
                                                        })));
                                },
                        },
                }),
                        o();
        }),
        function () {
                function e(t, e) {
                        return function () {
                                return t.apply(e, arguments);
                        };
                }
                var s,
                        t,
                        i,
                        l,
                        n,
                        a =
                                [].indexOf ||
                                function (t) {
                                        for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
                                        return -1;
                                };
                function o() {}
                function r() {
                        (this.keys = []), (this.values = []);
                }
                function h() {
                        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                                "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
                }
                function c(t) {
                        null == t && (t = {}),
                                (this.scrollCallback = e(this.scrollCallback, this)),
                                (this.scrollHandler = e(this.scrollHandler, this)),
                                (this.resetAnimation = e(this.resetAnimation, this)),
                                (this.start = e(this.start, this)),
                                (this.scrolled = !0),
                                (this.config = this.util().extend(t, this.defaults)),
                                null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)),
                                (this.animationNameCache = new i()),
                                (this.wowEvent = this.util().createEvent(this.config.boxClass));
                }
                (o.prototype.extend = function (t, e) {
                        var i, s;
                        for (i in e) (s = e[i]), null == t[i] && (t[i] = s);
                        return t;
                }),
                        (o.prototype.isMobile = function (t) {
                                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);
                        }),
                        (o.prototype.createEvent = function (t, e, i, s) {
                                var n;
                                return (
                                        null == e && (e = !1),
                                        null == i && (i = !1),
                                        null == s && (s = null),
                                        null != document.createEvent
                                                ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, s)
                                                : null != document.createEventObject
                                                ? ((n = document.createEventObject()).eventType = t)
                                                : (n.eventName = t),
                                        n
                                );
                        }),
                        (o.prototype.emitEvent = function (t, e) {
                                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0;
                        }),
                        (o.prototype.addEvent = function (t, e, i) {
                                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : (t[e] = i);
                        }),
                        (o.prototype.removeEvent = function (t, e, i) {
                                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e];
                        }),
                        (o.prototype.innerHeight = function () {
                                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
                        }),
                        (t = o),
                        (i =
                                this.WeakMap ||
                                this.MozWeakMap ||
                                ((r.prototype.get = function (t) {
                                        for (var e, i = this.keys, s = (e = 0), n = i.length; e < n; s = ++e) if (i[s] === t) return this.values[s];
                                }),
                                (r.prototype.set = function (t, e) {
                                        for (var i, s = this.keys, n = (i = 0), o = s.length; i < o; n = ++i) if (s[n] === t) return void (this.values[n] = e);
                                        return this.keys.push(t), this.values.push(e);
                                }),
                                r)),
                        (s = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || ((h.notSupported = !0), (h.prototype.observe = function () {}), h)),
                        (l =
                                this.getComputedStyle ||
                                function (i, t) {
                                        return (
                                                (this.getPropertyValue = function (t) {
                                                        var e;
                                                        return (
                                                                "float" === t && (t = "styleFloat"),
                                                                n.test(t) &&
                                                                        t.replace(n, function (t, e) {
                                                                                return e.toUpperCase();
                                                                        }),
                                                                (null != (e = i.currentStyle) ? e[t] : void 0) || null
                                                        );
                                                }),
                                                this
                                        );
                                }),
                        (n = /(\-([a-z]){1})/g),
                        (this.WOW =
                                ((c.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }),
                                (c.prototype.init = function () {
                                        var t;
                                        return (
                                                (this.element = window.document.documentElement),
                                                "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                                                (this.finished = [])
                                        );
                                }),
                                (c.prototype.start = function () {
                                        var n, t, e, i, a;
                                        if (
                                                ((this.stopped = !1),
                                                (this.boxes = function () {
                                                        for (var t = this.element.querySelectorAll("." + this.config.boxClass), e = [], i = 0, s = t.length; i < s; i++) (n = t[i]), e.push(n);
                                                        return e;
                                                }.call(this)),
                                                (this.all = function () {
                                                        for (var t = this.boxes, e = [], i = 0, s = t.length; i < s; i++) (n = t[i]), e.push(n);
                                                        return e;
                                                }.call(this)),
                                                this.boxes.length)
                                        )
                                                if (this.disabled()) this.resetStyle();
                                                else for (t = 0, e = (i = this.boxes).length; t < e; t++) (n = i[t]), this.applyStyle(n, !0);
                                        if (
                                                (this.disabled() ||
                                                        (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                                                        this.util().addEvent(window, "resize", this.scrollHandler),
                                                        (this.interval = setInterval(this.scrollCallback, 50))),
                                                this.config.live)
                                        )
                                                return new s(
                                                        ((a = this),
                                                        function (t) {
                                                                for (var n, o, e = [], i = 0, s = t.length; i < s; i++)
                                                                        (o = t[i]),
                                                                                e.push(
                                                                                        function () {
                                                                                                for (var t = o.addedNodes || [], e = [], i = 0, s = t.length; i < s; i++) (n = t[i]), e.push(this.doSync(n));
                                                                                                return e;
                                                                                        }.call(a)
                                                                                );
                                                                return e;
                                                        })
                                                ).observe(document.body, { childList: !0, subtree: !0 });
                                }),
                                (c.prototype.stop = function () {
                                        if (
                                                ((this.stopped = !0),
                                                this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                                                this.util().removeEvent(window, "resize", this.scrollHandler),
                                                null != this.interval)
                                        )
                                                return clearInterval(this.interval);
                                }),
                                (c.prototype.sync = function (t) {
                                        if (s.notSupported) return this.doSync(this.element);
                                }),
                                (c.prototype.doSync = function (t) {
                                        var e, i, s, n, o;
                                        if ((null == t && (t = this.element), 1 === t.nodeType)) {
                                                for (o = [], i = 0, s = (n = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i < s; i++)
                                                        (e = n[i]),
                                                                a.call(this.all, e) < 0
                                                                        ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push((this.scrolled = !0)))
                                                                        : o.push(void 0);
                                                return o;
                                        }
                                }),
                                (c.prototype.show = function (t) {
                                        return (
                                                this.applyStyle(t),
                                                (t.className = t.className + " " + this.config.animateClass),
                                                null != this.config.callback && this.config.callback(t),
                                                this.util().emitEvent(t, this.wowEvent),
                                                this.util().addEvent(t, "animationend", this.resetAnimation),
                                                this.util().addEvent(t, "oanimationend", this.resetAnimation),
                                                this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
                                                this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
                                                t
                                        );
                                }),
                                (c.prototype.applyStyle = function (t, e) {
                                        var i,
                                                s = t.getAttribute("data-wow-duration"),
                                                n = t.getAttribute("data-wow-delay"),
                                                o = t.getAttribute("data-wow-iteration");
                                        return this.animate(
                                                ((i = this),
                                                function () {
                                                        return i.customStyle(t, e, s, n, o);
                                                })
                                        );
                                }),
                                (c.prototype.animate =
                                        "requestAnimationFrame" in window
                                                ? function (t) {
                                                          return window.requestAnimationFrame(t);
                                                  }
                                                : function (t) {
                                                          return t();
                                                  }),
                                (c.prototype.resetStyle = function () {
                                        for (var t, e = this.boxes, i = [], s = 0, n = e.length; s < n; s++) (t = e[s]), i.push((t.style.visibility = "visible"));
                                        return i;
                                }),
                                (c.prototype.resetAnimation = function (t) {
                                        if (0 <= t.type.toLowerCase().indexOf("animationend")) return ((t = t.target || t.srcElement).className = t.className.replace(this.config.animateClass, "").trim());
                                }),
                                (c.prototype.customStyle = function (t, e, i, s, n) {
                                        return (
                                                e && this.cacheAnimationName(t),
                                                (t.style.visibility = e ? "hidden" : "visible"),
                                                i && this.vendorSet(t.style, { animationDuration: i }),
                                                s && this.vendorSet(t.style, { animationDelay: s }),
                                                n && this.vendorSet(t.style, { animationIterationCount: n }),
                                                this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }),
                                                t
                                        );
                                }),
                                (c.prototype.vendors = ["moz", "webkit"]),
                                (c.prototype.vendorSet = function (n, t) {
                                        var o,
                                                a,
                                                r,
                                                e = [];
                                        for (o in t)
                                                (a = t[o]),
                                                        (n["" + o] = a),
                                                        e.push(
                                                                function () {
                                                                        for (var t = this.vendors, e = [], i = 0, s = t.length; i < s; i++) (r = t[i]), e.push((n["" + r + o.charAt(0).toUpperCase() + o.substr(1)] = a));
                                                                        return e;
                                                                }.call(this)
                                                        );
                                        return e;
                                }),
                                (c.prototype.vendorCSS = function (t, e) {
                                        for (var i, s = l(t), n = s.getPropertyCSSValue(e), o = this.vendors, a = 0, r = o.length; a < r; a++) (i = o[a]), (n = n || s.getPropertyCSSValue("-" + i + "-" + e));
                                        return n;
                                }),
                                (c.prototype.animationName = function (e) {
                                        var i;
                                        try {
                                                i = this.vendorCSS(e, "animation-name").cssText;
                                        } catch (t) {
                                                i = l(e).getPropertyValue("animation-name");
                                        }
                                        return "none" === i ? "" : i;
                                }),
                                (c.prototype.cacheAnimationName = function (t) {
                                        return this.animationNameCache.set(t, this.animationName(t));
                                }),
                                (c.prototype.cachedAnimationName = function (t) {
                                        return this.animationNameCache.get(t);
                                }),
                                (c.prototype.scrollHandler = function () {
                                        return (this.scrolled = !0);
                                }),
                                (c.prototype.scrollCallback = function () {
                                        var n;
                                        if (
                                                this.scrolled &&
                                                ((this.scrolled = !1),
                                                (this.boxes = function () {
                                                        for (var t = this.boxes, e = [], i = 0, s = t.length; i < s; i++) (n = t[i]) && (this.isVisible(n) ? this.show(n) : e.push(n));
                                                        return e;
                                                }.call(this)),
                                                !this.boxes.length && !this.config.live)
                                        )
                                                return this.stop();
                                }),
                                (c.prototype.offsetTop = function (t) {
                                        for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
                                        for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
                                        return e;
                                }),
                                (c.prototype.isVisible = function (t) {
                                        var e = t.getAttribute("data-wow-offset") || this.config.offset,
                                                i = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset,
                                                s = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - e,
                                                e = this.offsetTop(t),
                                                t = e + t.clientHeight;
                                        return e <= s && i <= t;
                                }),
                                (c.prototype.util = function () {
                                        return null != this._util ? this._util : (this._util = new t());
                                }),
                                (c.prototype.disabled = function () {
                                        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
                                }),
                                c));
        }.call(this),
        (function (e) {
                "function" == typeof define && define.amd
                        ? define(["jquery"], function (t) {
                                  return e(t, document, window, navigator);
                          })
                        : "object" == typeof exports
                        ? e(require("jquery"), document, window, navigator)
                        : e(jQuery, document, window, navigator);
        })(function (a, r, l, t, h) {
                "use strict";
                var e,
                        i = 0,
                        s = ((e = t.userAgent), (t = /msie\s\d+/i), 0 < e.search(t) && t.exec(e).toString().split(" ")[1] < 9 && (a("html").addClass("lt-ie9"), !0));
                Function.prototype.bind ||
                        (Function.prototype.bind = function (i) {
                                var s = this,
                                        n = [].slice;
                                if ("function" != typeof s) throw new TypeError();
                                var o = n.call(arguments, 1),
                                        a = function () {
                                                if (this instanceof a) {
                                                        var t = function () {};
                                                        t.prototype = s.prototype;
                                                        var e = new t(),
                                                                t = s.apply(e, o.concat(n.call(arguments)));
                                                        return Object(t) === t ? t : e;
                                                }
                                                return s.apply(i, o.concat(n.call(arguments)));
                                        };
                                return a;
                        }),
                        Array.prototype.indexOf ||
                                (Array.prototype.indexOf = function (t, e) {
                                        var i;
                                        if (null == this) throw new TypeError('"this" is null or not defined');
                                        var s = Object(this),
                                                n = s.length >>> 0;
                                        if (0 == n) return -1;
                                        e = +e || 0;
                                        if ((Math.abs(e) === 1 / 0 && (e = 0), n <= e)) return -1;
                                        for (i = Math.max(0 <= e ? e : n - Math.abs(e), 0); i < n; ) {
                                                if (i in s && s[i] === t) return i;
                                                i++;
                                        }
                                        return -1;
                                });
                function n(t, e, i) {
                        (this.VERSION = "2.2.0"),
                                (this.input = t),
                                (this.plugin_count = i),
                                (this.current_plugin = 0),
                                (this.calc_count = 0),
                                (this.update_tm = 0),
                                (this.old_from = 0),
                                (this.old_to = 0),
                                (this.old_min_interval = null),
                                (this.raf_id = null),
                                (this.dragging = !1),
                                (this.force_redraw = !1),
                                (this.no_diapason = !1),
                                (this.has_tab_index = !0),
                                (this.is_key = !1),
                                (this.is_update = !1),
                                (this.is_start = !0),
                                (this.is_finish = !1),
                                (this.is_active = !1),
                                (this.is_resize = !1),
                                (this.is_click = !1),
                                (e = e || {}),
                                (this.$cache = {
                                        win: a(l),
                                        body: a(r.body),
                                        input: a(t),
                                        cont: null,
                                        rs: null,
                                        min: null,
                                        max: null,
                                        from: null,
                                        to: null,
                                        single: null,
                                        bar: null,
                                        line: null,
                                        s_single: null,
                                        s_from: null,
                                        s_to: null,
                                        shad_single: null,
                                        shad_from: null,
                                        shad_to: null,
                                        edge: null,
                                        grid: null,
                                        grid_labels: [],
                                }),
                                (this.coords = {
                                        x_gap: 0,
                                        x_pointer: 0,
                                        w_rs: 0,
                                        w_rs_old: 0,
                                        w_handle: 0,
                                        p_gap: 0,
                                        p_gap_left: 0,
                                        p_gap_right: 0,
                                        p_step: 0,
                                        p_pointer: 0,
                                        p_handle: 0,
                                        p_single_fake: 0,
                                        p_single_real: 0,
                                        p_from_fake: 0,
                                        p_from_real: 0,
                                        p_to_fake: 0,
                                        p_to_real: 0,
                                        p_bar_x: 0,
                                        p_bar_w: 0,
                                        grid_gap: 0,
                                        big_num: 0,
                                        big: [],
                                        big_w: [],
                                        big_p: [],
                                        big_x: [],
                                }),
                                (this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 });
                        var s,
                                n,
                                o = this.$cache.input,
                                i = o.prop("value"),
                                t = {
                                        type: "single",
                                        min: 10,
                                        max: 100,
                                        from: null,
                                        to: null,
                                        step: 1,
                                        min_interval: 0,
                                        max_interval: 0,
                                        drag_interval: !1,
                                        values: [],
                                        p_values: [],
                                        from_fixed: !1,
                                        from_min: null,
                                        from_max: null,
                                        from_shadow: !1,
                                        to_fixed: !1,
                                        to_min: null,
                                        to_max: null,
                                        to_shadow: !1,
                                        prettify_enabled: !0,
                                        prettify_separator: " ",
                                        prettify: null,
                                        force_edges: !1,
                                        keyboard: !0,
                                        grid: !1,
                                        grid_margin: !0,
                                        grid_num: 4,
                                        grid_snap: !1,
                                        hide_min_max: !1,
                                        hide_from_to: !1,
                                        prefix: "",
                                        postfix: "",
                                        max_postfix: "",
                                        decorate_both: !0,
                                        values_separator: " — ",
                                        input_values_separator: ";",
                                        disable: !1,
                                        block: !1,
                                        extra_classes: "",
                                        scope: null,
                                        onStart: null,
                                        onChange: null,
                                        onFinish: null,
                                        onUpdate: null,
                                };
                        for (n in ("INPUT" !== o[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", o[0]),
                        ((s = {
                                type: o.data("type"),
                                min: o.data("min"),
                                max: o.data("max"),
                                from: o.data("from"),
                                to: o.data("to"),
                                step: o.data("step"),
                                min_interval: o.data("minInterval"),
                                max_interval: o.data("maxInterval"),
                                drag_interval: o.data("dragInterval"),
                                values: o.data("values"),
                                from_fixed: o.data("fromFixed"),
                                from_min: o.data("fromMin"),
                                from_max: o.data("fromMax"),
                                from_shadow: o.data("fromShadow"),
                                to_fixed: o.data("toFixed"),
                                to_min: o.data("toMin"),
                                to_max: o.data("toMax"),
                                to_shadow: o.data("toShadow"),
                                prettify_enabled: o.data("prettifyEnabled"),
                                prettify_separator: o.data("prettifySeparator"),
                                force_edges: o.data("forceEdges"),
                                keyboard: o.data("keyboard"),
                                grid: o.data("grid"),
                                grid_margin: o.data("gridMargin"),
                                grid_num: o.data("gridNum"),
                                grid_snap: o.data("gridSnap"),
                                hide_min_max: o.data("hideMinMax"),
                                hide_from_to: o.data("hideFromTo"),
                                prefix: o.data("prefix"),
                                postfix: o.data("postfix"),
                                max_postfix: o.data("maxPostfix"),
                                decorate_both: o.data("decorateBoth"),
                                values_separator: o.data("valuesSeparator"),
                                input_values_separator: o.data("inputValuesSeparator"),
                                disable: o.data("disable"),
                                block: o.data("block"),
                                extra_classes: o.data("extraClasses"),
                        }).values = s.values && s.values.split(",")),
                        s))
                                s.hasOwnProperty(n) && ((s[n] !== h && "" !== s[n]) || delete s[n]);
                        i !== h &&
                                "" !== i &&
                                ((i = i.split(s.input_values_separator || e.input_values_separator || ";"))[0] && i[0] == +i[0] && (i[0] = +i[0]),
                                i[1] && i[1] == +i[1] && (i[1] = +i[1]),
                                e && e.values && e.values.length ? ((t.from = i[0] && e.values.indexOf(i[0])), (t.to = i[1] && e.values.indexOf(i[1]))) : ((t.from = i[0] && +i[0]), (t.to = i[1] && +i[1]))),
                                a.extend(t, e),
                                a.extend(t, s),
                                (this.options = t),
                                (this.update_check = {}),
                                this.validate(),
                                (this.result = {
                                        input: this.$cache.input,
                                        slider: null,
                                        min: this.options.min,
                                        max: this.options.max,
                                        from: this.options.from,
                                        from_percent: 0,
                                        from_value: null,
                                        to: this.options.to,
                                        to_percent: 0,
                                        to_value: null,
                                }),
                                this.init();
                }
                (n.prototype = {
                        init: function (t) {
                                (this.no_diapason = !1),
                                        (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
                                        (this.target = "base"),
                                        this.toggleInput(),
                                        this.append(),
                                        this.setMinMax(),
                                        t ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate()) : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
                                        this.updateScene();
                        },
                        append: function () {
                                var t = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                                this.$cache.input.before(t),
                                        this.$cache.input.prop("readonly", !0),
                                        (this.$cache.cont = this.$cache.input.prev()),
                                        (this.result.slider = this.$cache.cont),
                                        this.$cache.cont.html(
                                                '<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'
                                        ),
                                        (this.$cache.rs = this.$cache.cont.find(".irs")),
                                        (this.$cache.min = this.$cache.cont.find(".irs-min")),
                                        (this.$cache.max = this.$cache.cont.find(".irs-max")),
                                        (this.$cache.from = this.$cache.cont.find(".irs-from")),
                                        (this.$cache.to = this.$cache.cont.find(".irs-to")),
                                        (this.$cache.single = this.$cache.cont.find(".irs-single")),
                                        (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                                        (this.$cache.line = this.$cache.cont.find(".irs-line")),
                                        (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
                                        "single" === this.options.type
                                                ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),
                                                  (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
                                                  (this.$cache.s_single = this.$cache.cont.find(".single")),
                                                  (this.$cache.from[0].style.visibility = "hidden"),
                                                  (this.$cache.to[0].style.visibility = "hidden"),
                                                  (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
                                                : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),
                                                  (this.$cache.s_from = this.$cache.cont.find(".from")),
                                                  (this.$cache.s_to = this.$cache.cont.find(".to")),
                                                  (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
                                                  (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
                                                  this.setTopHandler()),
                                        this.options.hide_from_to && ((this.$cache.from[0].style.display = "none"), (this.$cache.to[0].style.display = "none"), (this.$cache.single[0].style.display = "none")),
                                        this.appendGrid(),
                                        this.options.disable ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0)) : ((this.$cache.input[0].disabled = !1), this.removeDisableMask(), this.bindEvents()),
                                        this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()),
                                        this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
                        },
                        setTopHandler: function () {
                                var t = this.options.min,
                                        e = this.options.max,
                                        i = this.options.from,
                                        s = this.options.to;
                                t < i && s === e ? this.$cache.s_from.addClass("type_last") : s < e && this.$cache.s_to.addClass("type_last");
                        },
                        changeLevel: function (t) {
                                switch (t) {
                                        case "single":
                                                (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake)), this.$cache.s_single.addClass("state_hover");
                                                break;
                                        case "from":
                                                (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
                                                        this.$cache.s_from.addClass("state_hover"),
                                                        this.$cache.s_from.addClass("type_last"),
                                                        this.$cache.s_to.removeClass("type_last");
                                                break;
                                        case "to":
                                                (this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake)),
                                                        this.$cache.s_to.addClass("state_hover"),
                                                        this.$cache.s_to.addClass("type_last"),
                                                        this.$cache.s_from.removeClass("type_last");
                                                break;
                                        case "both":
                                                (this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake)),
                                                        (this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer)),
                                                        this.$cache.s_to.removeClass("type_last"),
                                                        this.$cache.s_from.removeClass("type_last");
                                }
                        },
                        appendDisableMask: function () {
                                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
                        },
                        removeDisableMask: function () {
                                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
                        },
                        remove: function () {
                                this.$cache.cont.remove(),
                                        (this.$cache.cont = null),
                                        this.$cache.line.off("keydown.irs_" + this.plugin_count),
                                        this.$cache.body.off("touchmove.irs_" + this.plugin_count),
                                        this.$cache.body.off("mousemove.irs_" + this.plugin_count),
                                        this.$cache.win.off("touchend.irs_" + this.plugin_count),
                                        this.$cache.win.off("mouseup.irs_" + this.plugin_count),
                                        s && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
                                        (this.$cache.grid_labels = []),
                                        (this.coords.big = []),
                                        (this.coords.big_w = []),
                                        (this.coords.big_p = []),
                                        (this.coords.big_x = []),
                                        cancelAnimationFrame(this.raf_id);
                        },
                        bindEvents: function () {
                                this.no_diapason ||
                                        (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                                        this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)),
                                        this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                                        this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)),
                                        this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                        this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)),
                                        this.options.drag_interval && "double" === this.options.type
                                                ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")),
                                                  this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")))
                                                : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                                  this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                                        "single" === this.options.type
                                                ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                                  this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                                  this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                                  this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                                  this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                                                  this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                                  this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")))
                                                : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
                                                  this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)),
                                                  this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                                  this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                                  this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                                  this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                                  this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                                  this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                                  this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                                  this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")),
                                                  this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                                  this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                                                  this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")),
                                                  this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))),
                                        this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")),
                                        s && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
                        },
                        pointerFocus: function (t) {
                                var e, i;
                                this.target ||
                                        ((i = (e = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left), (i += e.width() / 2 - 1), this.pointerClick("single", { preventDefault: function () {}, pageX: i }));
                        },
                        pointerMove: function (t) {
                                this.dragging && ((t = t.pageX || (t.originalEvent.touches && t.originalEvent.touches[0].pageX)), (this.coords.x_pointer = t - this.coords.x_gap), this.calc());
                        },
                        pointerUp: function (t) {
                                this.current_plugin === this.plugin_count &&
                                        this.is_active &&
                                        ((this.is_active = !1),
                                        this.$cache.cont.find(".state_hover").removeClass("state_hover"),
                                        (this.force_redraw = !0),
                                        s && a("*").prop("unselectable", !1),
                                        this.updateScene(),
                                        this.restoreOriginalMinInterval(),
                                        (a.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(),
                                        (this.dragging = !1));
                        },
                        pointerDown: function (t, e) {
                                e.preventDefault();
                                var i = e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
                                2 !== e.button &&
                                        ("both" === t && this.setTempMinInterval(),
                                        (t = t || this.target || "from"),
                                        (this.current_plugin = this.plugin_count),
                                        (this.target = t),
                                        (this.is_active = !0),
                                        (this.dragging = !0),
                                        (this.coords.x_gap = this.$cache.rs.offset().left),
                                        (this.coords.x_pointer = i - this.coords.x_gap),
                                        this.calcPointerPercent(),
                                        this.changeLevel(t),
                                        s && a("*").prop("unselectable", !0),
                                        this.$cache.line.trigger("focus"),
                                        this.updateScene());
                        },
                        pointerClick: function (t, e) {
                                e.preventDefault();
                                var i = e.pageX || (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
                                2 !== e.button &&
                                        ((this.current_plugin = this.plugin_count),
                                        (this.target = t),
                                        (this.is_click = !0),
                                        (this.coords.x_gap = this.$cache.rs.offset().left),
                                        (this.coords.x_pointer = +(i - this.coords.x_gap).toFixed()),
                                        (this.force_redraw = !0),
                                        this.calc(),
                                        this.$cache.line.trigger("focus"));
                        },
                        key: function (t, e) {
                                if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                                        switch (e.which) {
                                                case 83:
                                                case 65:
                                                case 40:
                                                case 37:
                                                        e.preventDefault(), this.moveByKey(!1);
                                                        break;
                                                case 87:
                                                case 68:
                                                case 38:
                                                case 39:
                                                        e.preventDefault(), this.moveByKey(!0);
                                        }
                                        return !0;
                                }
                        },
                        moveByKey: function (t) {
                                var e = this.coords.p_pointer,
                                        i = (this.options.max - this.options.min) / 100,
                                        i = this.options.step / i;
                                t ? (e += i) : (e -= i), (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * e)), (this.is_key = !0), this.calc();
                        },
                        setMinMax: function () {
                                if (this.options) {
                                        if (this.options.hide_min_max) return (this.$cache.min[0].style.display = "none"), void (this.$cache.max[0].style.display = "none");
                                        var t, e;
                                        this.options.values.length
                                                ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])))
                                                : ((t = this._prettify(this.options.min)),
                                                  (e = this._prettify(this.options.max)),
                                                  (this.result.min_pretty = t),
                                                  (this.result.max_pretty = e),
                                                  this.$cache.min.html(this.decorate(t, this.options.min)),
                                                  this.$cache.max.html(this.decorate(e, this.options.max))),
                                                (this.labels.w_min = this.$cache.min.outerWidth(!1)),
                                                (this.labels.w_max = this.$cache.max.outerWidth(!1));
                                }
                        },
                        setTempMinInterval: function () {
                                var t = this.result.to - this.result.from;
                                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), (this.options.min_interval = t);
                        },
                        restoreOriginalMinInterval: function () {
                                null !== this.old_min_interval && ((this.options.min_interval = this.old_min_interval), (this.old_min_interval = null));
                        },
                        calc: function (t) {
                                if (this.options && (this.calc_count++, (10 !== this.calc_count && !t) || ((this.calc_count = 0), (this.coords.w_rs = this.$cache.rs.outerWidth(!1)), this.calcHandlePercent()), this.coords.w_rs)) {
                                        this.calcPointerPercent();
                                        var e = this.getHandleX();
                                        switch (
                                                ("both" === this.target && ((this.coords.p_gap = 0), (e = this.getHandleX())),
                                                "click" === this.target &&
                                                        ((this.coords.p_gap = this.coords.p_handle / 2), (e = this.getHandleX()), this.options.drag_interval ? (this.target = "both_one") : (this.target = this.chooseHandle(e))),
                                                this.target)
                                        ) {
                                                case "base":
                                                        var i = (this.options.max - this.options.min) / 100,
                                                                s = (this.result.from - this.options.min) / i,
                                                                n = (this.result.to - this.options.min) / i;
                                                        (this.coords.p_single_real = this.toFixed(s)),
                                                                (this.coords.p_from_real = this.toFixed(s)),
                                                                (this.coords.p_to_real = this.toFixed(n)),
                                                                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                                                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real)),
                                                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)),
                                                                (this.target = null);
                                                        break;
                                                case "single":
                                                        if (this.options.from_fixed) break;
                                                        (this.coords.p_single_real = this.convertToRealPercent(e)),
                                                                (this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real)),
                                                                (this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max)),
                                                                (this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real));
                                                        break;
                                                case "from":
                                                        if (this.options.from_fixed) break;
                                                        (this.coords.p_from_real = this.convertToRealPercent(e)),
                                                                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                                                this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real),
                                                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                                                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                                                (this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real));
                                                        break;
                                                case "to":
                                                        if (this.options.to_fixed) break;
                                                        (this.coords.p_to_real = this.convertToRealPercent(e)),
                                                                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                                                this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real),
                                                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                                                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                                                (this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                                                        break;
                                                case "both":
                                                        if (this.options.from_fixed || this.options.to_fixed) break;
                                                        (e = this.toFixed(e + 0.001 * this.coords.p_handle)),
                                                                (this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left),
                                                                (this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real)),
                                                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                                                (this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from")),
                                                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                                                (this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right),
                                                                (this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real)),
                                                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                                                (this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to")),
                                                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                                                        break;
                                                case "both_one":
                                                        if (this.options.from_fixed || this.options.to_fixed) break;
                                                        var o = this.convertToRealPercent(e),
                                                                i = this.result.from_percent,
                                                                s = this.result.to_percent - i,
                                                                n = s / 2,
                                                                i = o - n,
                                                                n = o + n;
                                                        i < 0 && (n = (i = 0) + s),
                                                                100 < n && (i = (n = 100) - s),
                                                                (this.coords.p_from_real = this.calcWithStep(i)),
                                                                (this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max)),
                                                                (this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real)),
                                                                (this.coords.p_to_real = this.calcWithStep(n)),
                                                                (this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max)),
                                                                (this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real));
                                        }
                                        "single" === this.options.type
                                                ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
                                                  (this.coords.p_bar_w = this.coords.p_single_fake),
                                                  (this.result.from_percent = this.coords.p_single_real),
                                                  (this.result.from = this.convertToValue(this.coords.p_single_real)),
                                                  (this.result.from_pretty = this._prettify(this.result.from)),
                                                  this.options.values.length && (this.result.from_value = this.options.values[this.result.from]))
                                                : ((this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2)),
                                                  (this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake)),
                                                  (this.result.from_percent = this.coords.p_from_real),
                                                  (this.result.from = this.convertToValue(this.coords.p_from_real)),
                                                  (this.result.from_pretty = this._prettify(this.result.from)),
                                                  (this.result.to_percent = this.coords.p_to_real),
                                                  (this.result.to = this.convertToValue(this.coords.p_to_real)),
                                                  (this.result.to_pretty = this._prettify(this.result.to)),
                                                  this.options.values.length && ((this.result.from_value = this.options.values[this.result.from]), (this.result.to_value = this.options.values[this.result.to]))),
                                                this.calcMinMax(),
                                                this.calcLabels();
                                }
                        },
                        calcPointerPercent: function () {
                                this.coords.w_rs
                                        ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? (this.coords.x_pointer = 0) : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs),
                                          (this.coords.p_pointer = this.toFixed((this.coords.x_pointer / this.coords.w_rs) * 100)))
                                        : (this.coords.p_pointer = 0);
                        },
                        convertToRealPercent: function (t) {
                                return (t / (100 - this.coords.p_handle)) * 100;
                        },
                        convertToFakePercent: function (t) {
                                return (t / 100) * (100 - this.coords.p_handle);
                        },
                        getHandleX: function () {
                                var t = 100 - this.coords.p_handle,
                                        e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                                return e < 0 ? (e = 0) : t < e && (e = t), e;
                        },
                        calcHandlePercent: function () {
                                "single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                                        (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100));
                        },
                        chooseHandle: function (t) {
                                return "single" === this.options.type
                                        ? "single"
                                        : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t
                                        ? this.options.to_fixed
                                                ? "from"
                                                : "to"
                                        : this.options.from_fixed
                                        ? "to"
                                        : "from";
                        },
                        calcMinMax: function () {
                                this.coords.w_rs && ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100), (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
                        },
                        calcLabels: function () {
                                this.coords.w_rs &&
                                        !this.options.hide_from_to &&
                                        ("single" === this.options.type
                                                ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
                                                  (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                                                  (this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2))
                                                : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
                                                  (this.labels.p_from_fake = (this.labels.w_from / this.coords.w_rs) * 100),
                                                  (this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2),
                                                  (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
                                                  (this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake)),
                                                  (this.labels.w_to = this.$cache.to.outerWidth(!1)),
                                                  (this.labels.p_to_fake = (this.labels.w_to / this.coords.w_rs) * 100),
                                                  (this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2),
                                                  (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
                                                  (this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake)),
                                                  (this.labels.w_single = this.$cache.single.outerWidth(!1)),
                                                  (this.labels.p_single_fake = (this.labels.w_single / this.coords.w_rs) * 100),
                                                  (this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2),
                                                  (this.labels.p_single_left = this.toFixed(this.labels.p_single_left))),
                                        (this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)));
                        },
                        updateScene: function () {
                                this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
                                        clearTimeout(this.update_tm),
                                        (this.update_tm = null),
                                        this.options && (this.drawHandles(), this.is_active ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this))) : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
                        },
                        drawHandles: function () {
                                (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                                        this.coords.w_rs &&
                                                (this.coords.w_rs !== this.coords.w_rs_old && ((this.target = "base"), (this.is_resize = !0)),
                                                (this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw) ||
                                                        (this.setMinMax(),
                                                        this.calc(!0),
                                                        this.drawLabels(),
                                                        this.options.grid && (this.calcGridMargin(), this.calcGridLabels()),
                                                        (this.force_redraw = !0),
                                                        (this.coords.w_rs_old = this.coords.w_rs),
                                                        this.drawShadow()),
                                                this.coords.w_rs &&
                                                        (this.dragging || this.force_redraw || this.is_key) &&
                                                        ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) &&
                                                                (this.drawLabels(),
                                                                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                                                                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                                                                "single" === this.options.type
                                                                        ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%")
                                                                        : ((this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%"),
                                                                          (this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%"),
                                                                          (this.old_from === this.result.from && !this.force_redraw) || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"),
                                                                          (this.old_to === this.result.to && !this.force_redraw) || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")),
                                                                (this.$cache.single[0].style.left = this.labels.p_single_left + "%"),
                                                                this.writeToInput(),
                                                                (this.old_from === this.result.from && this.old_to === this.result.to) || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")),
                                                                (this.old_from = this.result.from),
                                                                (this.old_to = this.result.to),
                                                                this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(),
                                                                (this.is_key || this.is_click) && ((this.is_key = !1), (this.is_click = !1), this.callOnFinish()),
                                                                (this.is_update = !1),
                                                                (this.is_resize = !1),
                                                                (this.is_finish = !1)),
                                                        (this.is_start = !1),
                                                        (this.is_key = !1),
                                                        (this.is_click = !1),
                                                        (this.force_redraw = !1)));
                        },
                        drawLabels: function () {
                                var t, e, i, s, n, o;
                                this.options &&
                                        ((t = this.options.values.length),
                                        (e = this.options.p_values),
                                        this.options.hide_from_to ||
                                                ("single" === this.options.type
                                                        ? ((s = t ? this.decorate(e[this.result.from]) : ((o = this._prettify(this.result.from)), this.decorate(o, this.result.from))),
                                                          this.$cache.single.html(s),
                                                          this.calcLabels(),
                                                          this.labels.p_single_left < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                                                          this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1
                                                                  ? (this.$cache.max[0].style.visibility = "hidden")
                                                                  : (this.$cache.max[0].style.visibility = "visible"))
                                                        : ((o = t
                                                                  ? (this.options.decorate_both
                                                                            ? ((s = this.decorate(e[this.result.from])), (s += this.options.values_separator), (s += this.decorate(e[this.result.to])))
                                                                            : (s = this.decorate(e[this.result.from] + this.options.values_separator + e[this.result.to])),
                                                                    (n = this.decorate(e[this.result.from])),
                                                                    this.decorate(e[this.result.to]))
                                                                  : ((o = this._prettify(this.result.from)),
                                                                    (i = this._prettify(this.result.to)),
                                                                    this.options.decorate_both
                                                                            ? ((s = this.decorate(o, this.result.from)), (s += this.options.values_separator), (s += this.decorate(i, this.result.to)))
                                                                            : (s = this.decorate(o + this.options.values_separator + i, this.result.to)),
                                                                    (n = this.decorate(o, this.result.from)),
                                                                    this.decorate(i, this.result.to))),
                                                          this.$cache.single.html(s),
                                                          this.$cache.from.html(n),
                                                          this.$cache.to.html(o),
                                                          this.calcLabels(),
                                                          (i = Math.min(this.labels.p_single_left, this.labels.p_from_left)),
                                                          (s = this.labels.p_single_left + this.labels.p_single_fake),
                                                          (n = this.labels.p_to_left + this.labels.p_to_fake),
                                                          (o = Math.max(s, n)),
                                                          this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left
                                                                  ? ((this.$cache.from[0].style.visibility = "hidden"),
                                                                    (this.$cache.to[0].style.visibility = "hidden"),
                                                                    (this.$cache.single[0].style.visibility = "visible"),
                                                                    (o =
                                                                            this.result.from === this.result.to
                                                                                    ? ("from" === this.target
                                                                                              ? (this.$cache.from[0].style.visibility = "visible")
                                                                                              : "to" === this.target
                                                                                              ? (this.$cache.to[0].style.visibility = "visible")
                                                                                              : this.target || (this.$cache.from[0].style.visibility = "visible"),
                                                                                      (this.$cache.single[0].style.visibility = "hidden"),
                                                                                      n)
                                                                                    : ((this.$cache.from[0].style.visibility = "hidden"),
                                                                                      (this.$cache.to[0].style.visibility = "hidden"),
                                                                                      (this.$cache.single[0].style.visibility = "visible"),
                                                                                      Math.max(s, n))))
                                                                  : ((this.$cache.from[0].style.visibility = "visible"), (this.$cache.to[0].style.visibility = "visible"), (this.$cache.single[0].style.visibility = "hidden")),
                                                          i < this.labels.p_min + 1 ? (this.$cache.min[0].style.visibility = "hidden") : (this.$cache.min[0].style.visibility = "visible"),
                                                          o > 100 - this.labels.p_max - 1 ? (this.$cache.max[0].style.visibility = "hidden") : (this.$cache.max[0].style.visibility = "visible"))));
                        },
                        drawShadow: function () {
                                var t,
                                        e,
                                        i = this.options,
                                        s = this.$cache,
                                        n = "number" == typeof i.from_min && !isNaN(i.from_min),
                                        o = "number" == typeof i.from_max && !isNaN(i.from_max),
                                        a = "number" == typeof i.to_min && !isNaN(i.to_min),
                                        r = "number" == typeof i.to_max && !isNaN(i.to_max);
                                "single" === i.type
                                        ? i.from_shadow && (n || o)
                                                ? ((t = this.convertToPercent(n ? i.from_min : i.min)),
                                                  (e = this.convertToPercent(o ? i.from_max : i.max) - t),
                                                  (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                                                  (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                                                  (t += this.coords.p_handle / 2),
                                                  (s.shad_single[0].style.display = "block"),
                                                  (s.shad_single[0].style.left = t + "%"),
                                                  (s.shad_single[0].style.width = e + "%"))
                                                : (s.shad_single[0].style.display = "none")
                                        : (i.from_shadow && (n || o)
                                                  ? ((t = this.convertToPercent(n ? i.from_min : i.min)),
                                                    (e = this.convertToPercent(o ? i.from_max : i.max) - t),
                                                    (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                                                    (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                                                    (t += this.coords.p_handle / 2),
                                                    (s.shad_from[0].style.display = "block"),
                                                    (s.shad_from[0].style.left = t + "%"),
                                                    (s.shad_from[0].style.width = e + "%"))
                                                  : (s.shad_from[0].style.display = "none"),
                                          i.to_shadow && (a || r)
                                                  ? ((a = this.convertToPercent(a ? i.to_min : i.min)),
                                                    (i = this.convertToPercent(r ? i.to_max : i.max) - a),
                                                    (a = this.toFixed(a - (this.coords.p_handle / 100) * a)),
                                                    (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                                                    (a += this.coords.p_handle / 2),
                                                    (s.shad_to[0].style.display = "block"),
                                                    (s.shad_to[0].style.left = a + "%"),
                                                    (s.shad_to[0].style.width = i + "%"))
                                                  : (s.shad_to[0].style.display = "none"));
                        },
                        writeToInput: function () {
                                "single" === this.options.type
                                        ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from))
                                        : (this.options.values.length
                                                  ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value)
                                                  : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to),
                                          this.$cache.input.data("from", this.result.from),
                                          this.$cache.input.data("to", this.result.to));
                        },
                        callOnStart: function () {
                                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
                        },
                        callOnChange: function () {
                                this.writeToInput(),
                                        this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
                        },
                        callOnFinish: function () {
                                this.writeToInput(),
                                        this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
                        },
                        callOnUpdate: function () {
                                this.writeToInput(),
                                        this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
                        },
                        toggleInput: function () {
                                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), (this.has_tab_index = !this.has_tab_index);
                        },
                        convertToPercent: function (t, e) {
                                var i = this.options.max - this.options.min,
                                        s = i / 100;
                                return i ? ((s = (e ? t : t - this.options.min) / s), this.toFixed(s)) : ((this.no_diapason = !0), 0);
                        },
                        convertToValue: function (t) {
                                var e,
                                        i,
                                        s = this.options.min,
                                        n = this.options.max,
                                        o = s.toString().split(".")[1],
                                        a = n.toString().split(".")[1],
                                        r = 0,
                                        l = 0;
                                if (0 === t) return this.options.min;
                                if (100 === t) return this.options.max;
                                o && (r = e = o.length), a && (r = i = a.length), e && i && (r = i <= e ? e : i), s < 0 && ((s = +(s + (l = Math.abs(s))).toFixed(r)), (n = +(n + l).toFixed(r)));
                                (t = ((n - s) / 100) * t + s), (s = this.options.step.toString().split(".")[1]), (t = s ? +t.toFixed(s.length) : ((t /= this.options.step), +(t *= this.options.step).toFixed(0)));
                                return l && (t -= l), (t = s ? +t.toFixed(s.length) : this.toFixed(t)) < this.options.min ? (t = this.options.min) : t > this.options.max && (t = this.options.max), t;
                        },
                        calcWithStep: function (t) {
                                var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
                                return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e);
                        },
                        checkMinInterval: function (t, e, i) {
                                var s,
                                        n = this.options;
                                return n.min_interval
                                        ? ((s = this.convertToValue(t)),
                                          (e = this.convertToValue(e)),
                                          "from" === i ? e - s < n.min_interval && (s = e - n.min_interval) : s - e < n.min_interval && (s = e + n.min_interval),
                                          this.convertToPercent(s))
                                        : t;
                        },
                        checkMaxInterval: function (t, e, i) {
                                var s,
                                        n = this.options;
                                return n.max_interval
                                        ? ((s = this.convertToValue(t)),
                                          (e = this.convertToValue(e)),
                                          "from" === i ? e - s > n.max_interval && (s = e - n.max_interval) : s - e > n.max_interval && (s = e + n.max_interval),
                                          this.convertToPercent(s))
                                        : t;
                        },
                        checkDiapason: function (t, e, i) {
                                var s = this.convertToValue(t),
                                        t = this.options;
                                return "number" != typeof e && (e = t.min), "number" != typeof i && (i = t.max), s < e && (s = e), i < s && (s = i), this.convertToPercent(s);
                        },
                        toFixed: function (t) {
                                return +(t = t.toFixed(20));
                        },
                        _prettify: function (t) {
                                return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options : this).prettify(t) : t;
                        },
                        prettify: function (t) {
                                return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
                        },
                        checkEdges: function (t, e) {
                                return this.options.force_edges && (t < 0 ? (t = 0) : 100 - e < t && (t = 100 - e)), this.toFixed(t);
                        },
                        validate: function () {
                                var t,
                                        e,
                                        i = this.options,
                                        s = this.result,
                                        n = i.values,
                                        o = n.length;
                                if (
                                        ("string" == typeof i.min && (i.min = +i.min),
                                        "string" == typeof i.max && (i.max = +i.max),
                                        "string" == typeof i.from && (i.from = +i.from),
                                        "string" == typeof i.to && (i.to = +i.to),
                                        "string" == typeof i.step && (i.step = +i.step),
                                        "string" == typeof i.from_min && (i.from_min = +i.from_min),
                                        "string" == typeof i.from_max && (i.from_max = +i.from_max),
                                        "string" == typeof i.to_min && (i.to_min = +i.to_min),
                                        "string" == typeof i.to_max && (i.to_max = +i.to_max),
                                        "string" == typeof i.grid_num && (i.grid_num = +i.grid_num),
                                        i.max < i.min && (i.max = i.min),
                                        o)
                                )
                                        for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++)
                                                (t = +n[e]), (t = isNaN(t) ? n[e] : ((n[e] = t), this._prettify(t))), i.p_values.push(t);
                                ("number" == typeof i.from && !isNaN(i.from)) || (i.from = i.min),
                                        ("number" == typeof i.to && !isNaN(i.to)) || (i.to = i.max),
                                        "single" === i.type
                                                ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max))
                                                : (i.from < i.min && (i.from = i.min),
                                                  i.from > i.max && (i.from = i.max),
                                                  i.to < i.min && (i.to = i.min),
                                                  i.to > i.max && (i.to = i.max),
                                                  this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)),
                                                  i.from > i.to && (i.from = i.to),
                                                  i.to < i.from && (i.to = i.from)),
                                        ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1),
                                        "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min),
                                        "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max),
                                        "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min),
                                        "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max),
                                        s && (s.min !== i.min && (s.min = i.min), s.max !== i.max && (s.max = i.max), (s.from < s.min || s.from > s.max) && (s.from = i.from), (s.to < s.min || s.to > s.max) && (s.to = i.to)),
                                        ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0),
                                        ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0),
                                        i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min),
                                        i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min);
                        },
                        decorate: function (t, e) {
                                var i = "",
                                        s = this.options;
                                return (
                                        s.prefix && (i += s.prefix),
                                        (i += t),
                                        s.max_postfix && ((s.values.length && t === s.p_values[s.max]) || e === s.max) && ((i += s.max_postfix), s.postfix && (i += " ")),
                                        s.postfix && (i += s.postfix),
                                        i
                                );
                        },
                        updateFrom: function () {
                                (this.result.from = this.options.from),
                                        (this.result.from_percent = this.convertToPercent(this.result.from)),
                                        (this.result.from_pretty = this._prettify(this.result.from)),
                                        this.options.values && (this.result.from_value = this.options.values[this.result.from]);
                        },
                        updateTo: function () {
                                (this.result.to = this.options.to),
                                        (this.result.to_percent = this.convertToPercent(this.result.to)),
                                        (this.result.to_pretty = this._prettify(this.result.to)),
                                        this.options.values && (this.result.to_value = this.options.values[this.result.to]);
                        },
                        updateResult: function () {
                                (this.result.min = this.options.min), (this.result.max = this.options.max), this.updateFrom(), this.updateTo();
                        },
                        appendGrid: function () {
                                if (this.options.grid) {
                                        var t,
                                                e,
                                                i,
                                                s,
                                                n,
                                                o = this.options,
                                                a = o.max - o.min,
                                                r = o.grid_num,
                                                l = 0,
                                                h = 0,
                                                c = 4,
                                                d = "";
                                        for (
                                                this.calcGridMargin(),
                                                        l = o.grid_snap ? (50 < a ? ((r = 50 / o.step), this.toFixed(o.step / 0.5)) : ((r = a / o.step), this.toFixed(o.step / (a / 100)))) : this.toFixed(100 / r),
                                                        4 < r && (c = 3),
                                                        7 < r && (c = 2),
                                                        14 < r && (c = 1),
                                                        28 < r && (c = 0),
                                                        t = 0;
                                                t < r + 1;
                                                t++
                                        ) {
                                                for (i = c, 100 < (h = this.toFixed(l * t)) && (h = 100), s = ((this.coords.big[t] = h) - l * (t - 1)) / (i + 1), e = 1; e <= i && 0 !== h; e++)
                                                        d += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(h - s * e) + '%"></span>';
                                                (d += '<span class="irs-grid-pol" style="left: ' + h + '%"></span>'),
                                                        (n = this.convertToValue(h)),
                                                        (d += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + h + '%">' + (n = o.values.length ? o.p_values[n] : this._prettify(n)) + "</span>");
                                        }
                                        (this.coords.big_num = Math.ceil(r + 1)), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(d), this.cacheGridLabels();
                                }
                        },
                        cacheGridLabels: function () {
                                for (var t, e = this.coords.big_num, i = 0; i < e; i++) (t = this.$cache.grid.find(".js-grid-text-" + i)), this.$cache.grid_labels.push(t);
                                this.calcGridLabels();
                        },
                        calcGridLabels: function () {
                                for (var t, e = [], i = [], s = this.coords.big_num, n = 0; n < s; n++)
                                        (this.coords.big_w[n] = this.$cache.grid_labels[n].outerWidth(!1)),
                                                (this.coords.big_p[n] = this.toFixed((this.coords.big_w[n] / this.coords.w_rs) * 100)),
                                                (this.coords.big_x[n] = this.toFixed(this.coords.big_p[n] / 2)),
                                                (e[n] = this.toFixed(this.coords.big[n] - this.coords.big_x[n])),
                                                (i[n] = this.toFixed(e[n] + this.coords.big_p[n]));
                                for (
                                        this.options.force_edges &&
                                                (e[0] < -this.coords.grid_gap && ((e[0] = -this.coords.grid_gap), (i[0] = this.toFixed(e[0] + this.coords.big_p[0])), (this.coords.big_x[0] = this.coords.grid_gap)),
                                                i[s - 1] > 100 + this.coords.grid_gap &&
                                                        ((i[s - 1] = 100 + this.coords.grid_gap),
                                                        (e[s - 1] = this.toFixed(i[s - 1] - this.coords.big_p[s - 1])),
                                                        (this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap)))),
                                                this.calcGridCollision(2, e, i),
                                                this.calcGridCollision(4, e, i),
                                                n = 0;
                                        n < s;
                                        n++
                                )
                                        (t = this.$cache.grid_labels[n][0]), this.coords.big_x[n] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[n] + "%");
                        },
                        calcGridCollision: function (t, e, i) {
                                for (var s, n, o = this.coords.big_num, a = 0; a < o && !(o <= (s = a + t / 2)); a += t) (n = this.$cache.grid_labels[s][0]), i[a] <= e[s] ? (n.style.visibility = "visible") : (n.style.visibility = "hidden");
                        },
                        calcGridMargin: function () {
                                this.options.grid_margin &&
                                        ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                                        this.coords.w_rs &&
                                                ("single" === this.options.type ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                                                (this.coords.p_handle = this.toFixed((this.coords.w_handle / this.coords.w_rs) * 100)),
                                                (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
                                                (this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%"),
                                                (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
                        },
                        update: function (t) {
                                this.input &&
                                        ((this.is_update = !0),
                                        (this.options.from = this.result.from),
                                        (this.options.to = this.result.to),
                                        (this.update_check.from = this.result.from),
                                        (this.update_check.to = this.result.to),
                                        (this.options = a.extend(this.options, t)),
                                        this.validate(),
                                        this.updateResult(t),
                                        this.toggleInput(),
                                        this.remove(),
                                        this.init(!0));
                        },
                        reset: function () {
                                this.input && (this.updateResult(), this.update());
                        },
                        destroy: function () {
                                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), (this.input = null), (this.options = null));
                        },
                }),
                        (a.fn.ionRangeSlider = function (t) {
                                return this.each(function () {
                                        a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new n(this, t, i++));
                                });
                        }),
                        (function () {
                                for (var o = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !l.requestAnimationFrame; ++e)
                                        (l.requestAnimationFrame = l[t[e] + "RequestAnimationFrame"]), (l.cancelAnimationFrame = l[t[e] + "CancelAnimationFrame"] || l[t[e] + "CancelRequestAnimationFrame"]);
                                l.requestAnimationFrame ||
                                        (l.requestAnimationFrame = function (t, e) {
                                                var i = new Date().getTime(),
                                                        s = Math.max(0, 16 - (i - o)),
                                                        n = l.setTimeout(function () {
                                                                t(i + s);
                                                        }, s);
                                                return (o = i + s), n;
                                        }),
                                        l.cancelAnimationFrame ||
                                                (l.cancelAnimationFrame = function (t) {
                                                        clearTimeout(t);
                                                });
                        })();
        }),
        (function (o) {
                o.fn.footerReveal = function (t) {
                        var e = o(this),
                                i = e.prev(),
                                s = o(window),
                                n = o.extend({ shadow: !0, shadowOpacity: 0.8, zIndex: -100 }, t);
                        o.extend(!0, {}, n, t);
                        return (
                                e.outerHeight() <= s.outerHeight() &&
                                        (e.css({ "z-index": n.zIndex, position: "fixed", bottom: 0 }),
                                        n.shadow &&
                                                i.css({
                                                        "-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + n.shadowOpacity + ")",
                                                        "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + n.shadowOpacity + ")",
                                                        "box-shadow": "0 20px 30px -20px rgba(0,0,0," + n.shadowOpacity + ")",
                                                }),
                                        s.on("load resize", function () {
                                                e.css({ width: i.outerWidth() }), i.css({ "margin-bottom": e.outerHeight() });
                                        })),
                                this
                        );
                };
        })(jQuery),
        (function (t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery);
        })(function (a) {
                var s = {
                        element: "body",
                        position: null,
                        type: "info",
                        allow_dismiss: !0,
                        allow_duplicates: !0,
                        newest_on_top: !1,
                        showProgressbar: !1,
                        placement: { from: "top", align: "right" },
                        offset: 20,
                        spacing: 10,
                        z_index: 1031,
                        delay: 5e3,
                        timer: 1e3,
                        url_target: "_blank",
                        mouse_over: null,
                        animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" },
                        onShow: null,
                        onShown: null,
                        onClose: null,
                        onClosed: null,
                        onClick: null,
                        icon_type: "class",
                        template:
                                '<div data-notify="container" class="customized_notify alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i><span data-notify="icon"></span></i> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                };
                function i(t, e, i) {
                        var n,
                                o,
                                e = { content: { message: "object" == typeof e ? e.message : e, title: e.title || "", icon: e.icon || "", url: e.url || "#", target: e.target || "-" } };
                        (i = a.extend(!0, {}, e, i)),
                                (this.settings = a.extend(!0, {}, s, i)),
                                (this._defaults = s),
                                "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target),
                                (this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }),
                                "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }),
                                (!this.settings.allow_duplicates &&
                                        (this.settings.allow_duplicates ||
                                                ((n = this),
                                                (o = !1),
                                                a('[data-notify="container"]').each(function (t, e) {
                                                        var i = a(e),
                                                                s = i.find('[data-notify="title"]').html().trim(),
                                                                e = i.find('[data-notify="message"]').html().trim(),
                                                                s =
                                                                        s ===
                                                                        a("<div>" + n.settings.content.title + "</div>")
                                                                                .html()
                                                                                .trim(),
                                                                e =
                                                                        e ===
                                                                        a("<div>" + n.settings.content.message + "</div>")
                                                                                .html()
                                                                                .trim(),
                                                                i = i.hasClass("alert-" + n.settings.type);
                                                        return s && e && i && (o = !0), !o;
                                                }),
                                                o))) ||
                                        this.init();
                }
                (String.format = function () {
                        var e = arguments;
                        return arguments[0].replace(/(\{\{\d\}\}|\{\d\})/g, function (t) {
                                if ("{{" === t.substring(0, 2)) return t;
                                t = parseInt(t.match(/\d/)[0]);
                                return e[t + 1];
                        });
                }),
                        a.extend(i.prototype, {
                                init: function () {
                                        var o = this;
                                        this.buildNotify(),
                                                this.settings.content.icon && this.setIcon(),
                                                "#" != this.settings.content.url && this.styleURL(),
                                                this.styleDismiss(),
                                                this.placement(),
                                                this.bind(),
                                                (this.notify = {
                                                        $ele: this.$ele,
                                                        update: function (t, e) {
                                                                var i,
                                                                        s = {};
                                                                for (i in ("string" == typeof t ? (s[t] = e) : (s = t), s))
                                                                        switch (i) {
                                                                                case "type":
                                                                                        this.$ele.removeClass("alert-" + o.settings.type),
                                                                                                this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + o.settings.type),
                                                                                                (o.settings.type = s[i]),
                                                                                                this.$ele
                                                                                                        .addClass("alert-" + s[i])
                                                                                                        .find('[data-notify="progressbar"] > .progress-bar')
                                                                                                        .addClass("progress-bar-" + s[i]);
                                                                                        break;
                                                                                case "icon":
                                                                                        var n = this.$ele.find('[data-notify="icon"]');
                                                                                        "class" === o.settings.icon_type.toLowerCase()
                                                                                                ? n.removeClass(o.settings.content.icon).addClass(s[i])
                                                                                                : (n.is("img") || n.find("img"), n.attr("src", s[i])),
                                                                                                (o.settings.content.icon = s[t]);
                                                                                        break;
                                                                                case "progress":
                                                                                        n = o.settings.delay - o.settings.delay * (s[i] / 100);
                                                                                        this.$ele.data("notify-delay", n),
                                                                                                this.$ele
                                                                                                        .find('[data-notify="progressbar"] > div')
                                                                                                        .attr("aria-valuenow", s[i])
                                                                                                        .css("width", s[i] + "%");
                                                                                        break;
                                                                                case "url":
                                                                                        this.$ele.find('[data-notify="url"]').attr("href", s[i]);
                                                                                        break;
                                                                                case "target":
                                                                                        this.$ele.find('[data-notify="url"]').attr("target", s[i]);
                                                                                        break;
                                                                                default:
                                                                                        this.$ele.find('[data-notify="' + i + '"]').html(s[i]);
                                                                        }
                                                                e = this.$ele.outerHeight() + parseInt(o.settings.spacing) + parseInt(o.settings.offset.y);
                                                                o.reposition(e);
                                                        },
                                                        close: function () {
                                                                o.close();
                                                        },
                                                });
                                },
                                buildNotify: function () {
                                        var t = this.settings.content;
                                        (this.$ele = a(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target))),
                                                this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align),
                                                this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"),
                                                ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove();
                                },
                                setIcon: function () {
                                        "class" === this.settings.icon_type.toLowerCase()
                                                ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon)
                                                : this.$ele.find('[data-notify="icon"]').is("img")
                                                ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon)
                                                : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
                                },
                                styleDismiss: function () {
                                        this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 });
                                },
                                styleURL: function () {
                                        this.$ele
                                                .find('[data-notify="url"]')
                                                .css({
                                                        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                                                        height: "100%",
                                                        left: 0,
                                                        position: "absolute",
                                                        top: 0,
                                                        width: "100%",
                                                        zIndex: this.settings.z_index + 1,
                                                });
                                },
                                placement: function () {
                                        var i = this,
                                                t = this.settings.offset.y,
                                                e = {
                                                        display: "inline-block",
                                                        margin: "0px auto",
                                                        position: this.settings.position || ("body" === this.settings.element ? "fixed" : "absolute"),
                                                        transition: "all .5s ease-in-out",
                                                        zIndex: this.settings.z_index,
                                                },
                                                s = !1,
                                                n = this.settings;
                                        switch (
                                                (a('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                                                        t = Math.max(t, parseInt(a(this).css(n.placement.from)) + parseInt(a(this).outerHeight()) + parseInt(n.spacing));
                                                }),
                                                !0 === this.settings.newest_on_top && (t = this.settings.offset.y),
                                                (e[this.settings.placement.from] = t + "px"),
                                                this.settings.placement.align)
                                        ) {
                                                case "left":
                                                case "right":
                                                        e[this.settings.placement.align] = this.settings.offset.x + "px";
                                                        break;
                                                case "center":
                                                        (e.left = 0), (e.right = 0);
                                        }
                                        this.$ele.css(e).addClass(this.settings.animate.enter),
                                                a.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, e) {
                                                        i.$ele[0].style[e + "AnimationIterationCount"] = 1;
                                                }),
                                                a(this.settings.element).append(this.$ele),
                                                !0 === this.settings.newest_on_top && ((t = parseInt(t) + parseInt(this.settings.spacing) + this.$ele.outerHeight()), this.reposition(t)),
                                                a.isFunction(i.settings.onShow) && i.settings.onShow.call(this.$ele),
                                                this.$ele
                                                        .one(this.animations.start, function () {
                                                                s = !0;
                                                        })
                                                        .one(this.animations.end, function () {
                                                                i.$ele.removeClass(i.settings.animate.enter), a.isFunction(i.settings.onShown) && i.settings.onShown.call(this);
                                                        }),
                                                setTimeout(function () {
                                                        s || (a.isFunction(i.settings.onShown) && i.settings.onShown.call(this));
                                                }, 600);
                                },
                                bind: function () {
                                        var i,
                                                s = this;
                                        this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                                                s.close();
                                        }),
                                                a.isFunction(s.settings.onClick) &&
                                                        this.$ele.on("click", function (t) {
                                                                t.target != s.$ele.find('[data-notify="dismiss"]')[0] && s.settings.onClick.call(this, t);
                                                        }),
                                                this.$ele
                                                        .mouseover(function () {
                                                                a(this).data("data-hover", "true");
                                                        })
                                                        .mouseout(function () {
                                                                a(this).data("data-hover", "false");
                                                        }),
                                                this.$ele.data("data-hover", "false"),
                                                0 < this.settings.delay &&
                                                        (s.$ele.data("notify-delay", s.settings.delay),
                                                        (i = setInterval(function () {
                                                                var t,
                                                                        e = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
                                                                (("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over) || "pause" != s.settings.mouse_over) &&
                                                                        ((t = ((s.settings.delay - e) / s.settings.delay) * 100),
                                                                        s.$ele.data("notify-delay", e),
                                                                        s.$ele
                                                                                .find('[data-notify="progressbar"] > div')
                                                                                .attr("aria-valuenow", t)
                                                                                .css("width", t + "%")),
                                                                        e <= -s.settings.timer && (clearInterval(i), s.close());
                                                        }, s.settings.timer)));
                                },
                                close: function () {
                                        var t = this,
                                                e = parseInt(this.$ele.css(this.settings.placement.from)),
                                                i = !1;
                                        this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit),
                                                t.reposition(e),
                                                a.isFunction(t.settings.onClose) && t.settings.onClose.call(this.$ele),
                                                this.$ele
                                                        .one(this.animations.start, function () {
                                                                i = !0;
                                                        })
                                                        .one(this.animations.end, function () {
                                                                a(this).remove(), a.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this);
                                                        }),
                                                setTimeout(function () {
                                                        i || (t.$ele.remove(), t.settings.onClosed && t.settings.onClosed(t.$ele));
                                                }, 600);
                                },
                                reposition: function (t) {
                                        var e = this,
                                                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                                                s = this.$ele.nextAll(i);
                                        !0 === this.settings.newest_on_top && (s = this.$ele.prevAll(i)),
                                                s.each(function () {
                                                        a(this).css(e.settings.placement.from, t), (t = parseInt(t) + parseInt(e.settings.spacing) + a(this).outerHeight());
                                                });
                                },
                        }),
                        (a.notify = function (t, e) {
                                return new i(0, t, e).notify;
                        }),
                        (a.notifyDefaults = function (t) {
                                return (s = a.extend(!0, {}, s, t));
                        }),
                        (a.notifyClose = function (t) {
                                a(
                                        void 0 === t || "all" === t
                                                ? "[data-notify]"
                                                : "success" === t || "info" === t || "warning" === t || "danger" === t
                                                ? ".alert-" + t + "[data-notify]"
                                                : t
                                                ? t + "[data-notify]"
                                                : '[data-notify-position="' + t + '"]'
                                )
                                        .find('[data-notify="dismiss"]')
                                        .trigger("click");
                        }),
                        (a.notifyCloseExcept = function (t) {
                                ("success" === t || "info" === t || "warning" === t || "danger" === t ? a("[data-notify]").not(".alert-" + t) : a("[data-notify]").not(t)).find('[data-notify="dismiss"]').trigger("click");
                        });
        }),
        (function (l, i, s, r) {
                function h(t, e) {
                        (this.settings = null),
                                (this.options = l.extend({}, h.Defaults, e)),
                                (this.$element = l(t)),
                                (this._handlers = {}),
                                (this._plugins = {}),
                                (this._supress = {}),
                                (this._current = null),
                                (this._speed = null),
                                (this._coordinates = []),
                                (this._breakpoint = null),
                                (this._width = null),
                                (this._items = []),
                                (this._clones = []),
                                (this._mergers = []),
                                (this._widths = []),
                                (this._invalidated = {}),
                                (this._pipe = []),
                                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                                l.each(
                                        ["onResize", "onThrottledResize"],
                                        l.proxy(function (t, e) {
                                                this._handlers[e] = l.proxy(this[e], this);
                                        }, this)
                                ),
                                l.each(
                                        h.Plugins,
                                        l.proxy(function (t, e) {
                                                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
                                        }, this)
                                ),
                                l.each(
                                        h.Workers,
                                        l.proxy(function (t, e) {
                                                this._pipe.push({ filter: e.filter, run: l.proxy(e.run, this) });
                                        }, this)
                                ),
                                this.setup(),
                                this.initialize();
                }
                (h.Defaults = {
                        items: 3,
                        loop: !1,
                        center: !1,
                        rewind: !1,
                        checkVisibility: !0,
                        mouseDrag: !0,
                        touchDrag: !0,
                        pullDrag: !0,
                        freeDrag: !1,
                        margin: 0,
                        stagePadding: 0,
                        merge: !1,
                        mergeFit: !0,
                        autoWidth: !1,
                        startPosition: 0,
                        rtl: !1,
                        smartSpeed: 250,
                        fluidSpeed: !1,
                        dragEndSpeed: !1,
                        responsive: {},
                        responsiveRefreshRate: 200,
                        responsiveBaseElement: i,
                        fallbackEasing: "swing",
                        slideTransition: "",
                        info: !1,
                        nestedItemSelector: !1,
                        itemElement: "div",
                        stageElement: "div",
                        refreshClass: "owl-refresh",
                        loadedClass: "owl-loaded",
                        loadingClass: "owl-loading",
                        rtlClass: "owl-rtl",
                        responsiveClass: "owl-responsive",
                        dragClass: "owl-drag",
                        itemClass: "owl-item",
                        stageClass: "owl-stage",
                        stageOuterClass: "owl-stage-outer",
                        grabClass: "owl-grab",
                }),
                        (h.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
                        (h.Type = { Event: "event", State: "state" }),
                        (h.Plugins = {}),
                        (h.Workers = [
                                {
                                        filter: ["width", "settings"],
                                        run: function () {
                                                this._width = this.$element.width();
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function (t) {
                                                t.current = this._items && this._items[this.relative(this._current)];
                                        },
                                },
                                {
                                        filter: ["items", "settings"],
                                        run: function () {
                                                this.$stage.children(".cloned").remove();
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function (t) {
                                                var e = this.settings.margin || "",
                                                        i = !this.settings.autoWidth,
                                                        s = this.settings.rtl,
                                                        e = { width: "auto", "margin-left": s ? e : "", "margin-right": s ? "" : e };
                                                i || this.$stage.children().css(e), (t.css = e);
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function (t) {
                                                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                                                        i = null,
                                                        s = this._items.length,
                                                        n = !this.settings.autoWidth,
                                                        o = [];
                                                for (t.items = { merge: !1, width: e }; s--; )
                                                        (i = this._mergers[s]), (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i), (t.items.merge = 1 < i || t.items.merge), (o[s] = n ? e * i : this._items[s].width());
                                                this._widths = o;
                                        },
                                },
                                {
                                        filter: ["items", "settings"],
                                        run: function () {
                                                var t = [],
                                                        e = this._items,
                                                        i = this.settings,
                                                        s = Math.max(2 * i.items, 4),
                                                        n = 2 * Math.ceil(e.length / 2),
                                                        o = i.loop && e.length ? (i.rewind ? s : Math.max(s, n)) : 0,
                                                        a = "",
                                                        r = "";
                                                for (o /= 2; 0 < o; )
                                                        t.push(this.normalize(t.length / 2, !0)),
                                                                (a += e[t[t.length - 1]][0].outerHTML),
                                                                t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
                                                                (r = e[t[t.length - 1]][0].outerHTML + r),
                                                                --o;
                                                (this._clones = t), l(a).addClass("cloned").appendTo(this.$stage), l(r).addClass("cloned").prependTo(this.$stage);
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function () {
                                                for (var t, e, i = this.settings.rtl ? 1 : -1, s = this._clones.length + this._items.length, n = -1, o = []; ++n < s; )
                                                        (t = o[n - 1] || 0), (e = this._widths[this.relative(n)] + this.settings.margin), o.push(t + e * i);
                                                this._coordinates = o;
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function () {
                                                var t = this.settings.stagePadding,
                                                        e = this._coordinates,
                                                        t = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                                                this.$stage.css(t);
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function (t) {
                                                var e = this._coordinates.length,
                                                        i = !this.settings.autoWidth,
                                                        s = this.$stage.children();
                                                if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), s.eq(e).css(t.css);
                                                else i && ((t.css.width = t.items.width), s.css(t.css));
                                        },
                                },
                                {
                                        filter: ["items"],
                                        run: function () {
                                                this._coordinates.length < 1 && this.$stage.removeAttr("style");
                                        },
                                },
                                {
                                        filter: ["width", "items", "settings"],
                                        run: function (t) {
                                                (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);
                                        },
                                },
                                {
                                        filter: ["position"],
                                        run: function () {
                                                this.animate(this.coordinates(this._current));
                                        },
                                },
                                {
                                        filter: ["width", "position", "items", "settings"],
                                        run: function () {
                                                for (
                                                        var t,
                                                                e,
                                                                i = this.settings.rtl ? 1 : -1,
                                                                s = 2 * this.settings.stagePadding,
                                                                n = this.coordinates(this.current()) + s,
                                                                o = n + this.width() * i,
                                                                a = [],
                                                                r = 0,
                                                                l = this._coordinates.length;
                                                        r < l;
                                                        r++
                                                )
                                                        (t = this._coordinates[r - 1] || 0),
                                                                (e = Math.abs(this._coordinates[r]) + s * i),
                                                                ((this.op(t, "<=", n) && this.op(t, ">", o)) || (this.op(e, "<", n) && this.op(e, ">", o))) && a.push(r);
                                                this.$stage.children(".active").removeClass("active"),
                                                        this.$stage.children(":eq(" + a.join("), :eq(") + ")").addClass("active"),
                                                        this.$stage.children(".center").removeClass("center"),
                                                        this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                                        },
                                },
                        ]),
                        (h.prototype.initializeStage = function () {
                                (this.$stage = this.$element.find("." + this.settings.stageClass)),
                                        this.$stage.length ||
                                                (this.$element.addClass(this.options.loadingClass),
                                                (this.$stage = l("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(l("<div/>", { class: this.settings.stageOuterClass }))),
                                                this.$element.append(this.$stage.parent()));
                        }),
                        (h.prototype.initializeItems = function () {
                                var t = this.$element.find(".owl-item");
                                if (t.length)
                                        return (
                                                (this._items = t.get().map(function (t) {
                                                        return l(t);
                                                })),
                                                (this._mergers = this._items.map(function () {
                                                        return 1;
                                                })),
                                                void this.refresh()
                                        );
                                this.replace(this.$element.children().not(this.$stage.parent())),
                                        this.isVisible() ? this.refresh() : this.invalidate("width"),
                                        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
                        }),
                        (h.prototype.initialize = function () {
                                var t, e;
                                this.enter("initializing"),
                                        this.trigger("initialize"),
                                        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
                                        this.settings.autoWidth &&
                                                !this.is("pre-loading") &&
                                                ((t = this.$element.find("img")),
                                                (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r),
                                                (e = this.$element.children(e).width()),
                                                t.length && e <= 0 && this.preloadAutoWidthImages(t)),
                                        this.initializeStage(),
                                        this.initializeItems(),
                                        this.registerEventHandlers(),
                                        this.leave("initializing"),
                                        this.trigger("initialized");
                        }),
                        (h.prototype.isVisible = function () {
                                return !this.settings.checkVisibility || this.$element.is(":visible");
                        }),
                        (h.prototype.setup = function () {
                                var e = this.viewport(),
                                        t = this.options.responsive,
                                        i = -1,
                                        s = null;
                                t
                                        ? (l.each(t, function (t) {
                                                  t <= e && i < t && (i = Number(t));
                                          }),
                                          "function" == typeof (s = l.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()),
                                          delete s.responsive,
                                          s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i)))
                                        : (s = l.extend({}, this.options)),
                                        this.trigger("change", { property: { name: "settings", value: s } }),
                                        (this._breakpoint = i),
                                        (this.settings = s),
                                        this.invalidate("settings"),
                                        this.trigger("changed", { property: { name: "settings", value: this.settings } });
                        }),
                        (h.prototype.optionsLogic = function () {
                                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
                        }),
                        (h.prototype.prepare = function (t) {
                                var e = this.trigger("prepare", { content: t });
                                return (
                                        e.data ||
                                                (e.data = l("<" + this.settings.itemElement + "/>")
                                                        .addClass(this.options.itemClass)
                                                        .append(t)),
                                        this.trigger("prepared", { content: e.data }),
                                        e.data
                                );
                        }),
                        (h.prototype.update = function () {
                                for (
                                        var t = 0,
                                                e = this._pipe.length,
                                                i = l.proxy(function (t) {
                                                        return this[t];
                                                }, this._invalidated),
                                                s = {};
                                        t < e;

                                )
                                        (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
                                (this._invalidated = {}), this.is("valid") || this.enter("valid");
                        }),
                        (h.prototype.width = function (t) {
                                switch ((t = t || h.Width.Default)) {
                                        case h.Width.Inner:
                                        case h.Width.Outer:
                                                return this._width;
                                        default:
                                                return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                                }
                        }),
                        (h.prototype.refresh = function () {
                                this.enter("refreshing"),
                                        this.trigger("refresh"),
                                        this.setup(),
                                        this.optionsLogic(),
                                        this.$element.addClass(this.options.refreshClass),
                                        this.update(),
                                        this.$element.removeClass(this.options.refreshClass),
                                        this.leave("refreshing"),
                                        this.trigger("refreshed");
                        }),
                        (h.prototype.onThrottledResize = function () {
                                i.clearTimeout(this.resizeTimer), (this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
                        }),
                        (h.prototype.onResize = function () {
                                return (
                                        !!this._items.length &&
                                        this._width !== this.$element.width() &&
                                        !!this.isVisible() &&
                                        (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                                );
                        }),
                        (h.prototype.registerEventHandlers = function () {
                                l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)),
                                        !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
                                        this.settings.mouseDrag &&
                                                (this.$element.addClass(this.options.dragClass),
                                                this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)),
                                                this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                                                        return !1;
                                                })),
                                        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)));
                        }),
                        (h.prototype.onDragStart = function (t) {
                                var e = null;
                                3 !== t.which &&
                                        ((e = l.support.transform
                                                ? {
                                                          x: (e = this.$stage
                                                                  .css("transform")
                                                                  .replace(/.*\(|\)| /g, "")
                                                                  .split(","))[16 === e.length ? 12 : 4],
                                                          y: e[16 === e.length ? 13 : 5],
                                                  }
                                                : ((e = this.$stage.position()), { x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left, y: e.top })),
                                        this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")),
                                        this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
                                        this.speed(0),
                                        (this._drag.time = new Date().getTime()),
                                        (this._drag.target = l(t.target)),
                                        (this._drag.stage.start = e),
                                        (this._drag.stage.current = e),
                                        (this._drag.pointer = this.pointer(t)),
                                        l(s).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)),
                                        l(s).one(
                                                "mousemove.owl.core touchmove.owl.core",
                                                l.proxy(function (t) {
                                                        var e = this.difference(this._drag.pointer, this.pointer(t));
                                                        l(s).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)),
                                                                (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                                                }, this)
                                        ));
                        }),
                        (h.prototype.onDragMove = function (t) {
                                var e,
                                        i = null,
                                        s = null,
                                        n = this.difference(this._drag.pointer, this.pointer(t)),
                                        o = this.difference(this._drag.stage.start, n);
                                this.is("dragging") &&
                                        (t.preventDefault(),
                                        this.settings.loop
                                                ? ((i = this.coordinates(this.minimum())), (s = this.coordinates(this.maximum() + 1) - i), (o.x = ((((o.x - i) % s) + s) % s) + i))
                                                : ((i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                                                  (s = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                                                  (e = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
                                                  (o.x = Math.max(Math.min(o.x, i + e), s + e))),
                                        (this._drag.stage.current = o),
                                        this.animate(o.x));
                        }),
                        (h.prototype.onDragEnd = function (t) {
                                var e = this.difference(this._drag.pointer, this.pointer(t)),
                                        i = this._drag.stage.current,
                                        t = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
                                l(s).off(".owl.core"),
                                        this.$element.removeClass(this.options.grabClass),
                                        ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
                                                (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                                                this.current(this.closest(i.x, 0 !== e.x ? t : this._drag.direction)),
                                                this.invalidate("position"),
                                                this.update(),
                                                (this._drag.direction = t),
                                                (3 < Math.abs(e.x) || 300 < new Date().getTime() - this._drag.time) &&
                                                        this._drag.target.one("click.owl.core", function () {
                                                                return !1;
                                                        })),
                                        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
                        }),
                        (h.prototype.closest = function (i, s) {
                                var n = -1,
                                        o = this.width(),
                                        a = this.coordinates();
                                return (
                                        this.settings.freeDrag ||
                                                l.each(
                                                        a,
                                                        l.proxy(function (t, e) {
                                                                return (
                                                                        "left" === s && e - 30 < i && i < e + 30
                                                                                ? (n = t)
                                                                                : "right" === s && e - o - 30 < i && i < e - o + 30
                                                                                ? (n = t + 1)
                                                                                : this.op(i, "<", e) && this.op(i, ">", a[t + 1] !== r ? a[t + 1] : e - o) && (n = "left" === s ? t + 1 : t),
                                                                        -1 === n
                                                                );
                                                        }, this)
                                                ),
                                        this.settings.loop || (this.op(i, ">", a[this.minimum()]) ? (n = i = this.minimum()) : this.op(i, "<", a[this.maximum()]) && (n = i = this.maximum())),
                                        n
                                );
                        }),
                        (h.prototype.animate = function (t) {
                                var e = 0 < this.speed();
                                this.is("animating") && this.onTransitionEnd(),
                                        e && (this.enter("animating"), this.trigger("translate")),
                                        l.support.transform3d && l.support.transition
                                                ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                                                : e
                                                ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this))
                                                : this.$stage.css({ left: t + "px" });
                        }),
                        (h.prototype.is = function (t) {
                                return this._states.current[t] && 0 < this._states.current[t];
                        }),
                        (h.prototype.current = function (t) {
                                return t === r
                                        ? this._current
                                        : 0 === this._items.length
                                        ? r
                                        : ((t = this.normalize(t)),
                                          this._current !== t &&
                                                  ((e = this.trigger("change", { property: { name: "position", value: t } })).data !== r && (t = this.normalize(e.data)),
                                                  (this._current = t),
                                                  this.invalidate("position"),
                                                  this.trigger("changed", { property: { name: "position", value: this._current } })),
                                          this._current);
                                var e;
                        }),
                        (h.prototype.invalidate = function (t) {
                                return (
                                        "string" === l.type(t) && ((this._invalidated[t] = !0), this.is("valid") && this.leave("valid")),
                                        l.map(this._invalidated, function (t, e) {
                                                return e;
                                        })
                                );
                        }),
                        (h.prototype.reset = function (t) {
                                (t = this.normalize(t)) !== r && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
                        }),
                        (h.prototype.normalize = function (t, e) {
                                var i = this._items.length,
                                        e = e ? 0 : this._clones.length;
                                return !this.isNumeric(t) || i < 1 ? (t = r) : (t < 0 || i + e <= t) && (t = ((((t - e / 2) % i) + i) % i) + e / 2), t;
                        }),
                        (h.prototype.relative = function (t) {
                                return (t -= this._clones.length / 2), this.normalize(t, !0);
                        }),
                        (h.prototype.maximum = function (t) {
                                var e,
                                        i,
                                        s,
                                        n = this.settings,
                                        o = this._coordinates.length;
                                if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
                                else if (n.autoWidth || n.merge) {
                                        if ((e = this._items.length)) for (i = this._items[--e].width(), s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin)); );
                                        o = e + 1;
                                } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
                                return t && (o -= this._clones.length / 2), Math.max(o, 0);
                        }),
                        (h.prototype.minimum = function (t) {
                                return t ? 0 : this._clones.length / 2;
                        }),
                        (h.prototype.items = function (t) {
                                return t === r ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
                        }),
                        (h.prototype.mergers = function (t) {
                                return t === r ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
                        }),
                        (h.prototype.clones = function (i) {
                                function s(t) {
                                        return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2;
                                }
                                var e = this._clones.length / 2,
                                        n = e + this._items.length;
                                return i === r
                                        ? l.map(this._clones, function (t, e) {
                                                  return s(e);
                                          })
                                        : l.map(this._clones, function (t, e) {
                                                  return t === i ? s(e) : null;
                                          });
                        }),
                        (h.prototype.speed = function (t) {
                                return t !== r && (this._speed = t), this._speed;
                        }),
                        (h.prototype.coordinates = function (t) {
                                var e,
                                        i = 1,
                                        s = t - 1;
                                return t === r
                                        ? l.map(
                                                  this._coordinates,
                                                  l.proxy(function (t, e) {
                                                          return this.coordinates(e);
                                                  }, this)
                                          )
                                        : (this.settings.center
                                                  ? (this.settings.rtl && ((i = -1), (s = t + 1)), (e = this._coordinates[t]), (e += ((this.width() - e + (this._coordinates[s] || 0)) / 2) * i))
                                                  : (e = this._coordinates[s] || 0),
                                          (e = Math.ceil(e)));
                        }),
                        (h.prototype.duration = function (t, e, i) {
                                return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
                        }),
                        (h.prototype.to = function (t, e) {
                                var i,
                                        s = this.current(),
                                        n = t - this.relative(s),
                                        o = (0 < n) - (n < 0),
                                        a = this._items.length,
                                        r = this.minimum(),
                                        l = this.maximum();
                                this.settings.loop
                                        ? (!this.settings.rewind && Math.abs(n) > a / 2 && (n += -1 * o * a), (i = (((((t = s + n) - r) % a) + a) % a) + r) !== t && i - n <= l && 0 < i - n && ((s = i - n), (t = i), this.reset(s)))
                                        : (t = this.settings.rewind ? ((t % (l += 1)) + l) % l : Math.max(r, Math.min(l, t))),
                                        this.speed(this.duration(s, t, e)),
                                        this.current(t),
                                        this.isVisible() && this.update();
                        }),
                        (h.prototype.next = function (t) {
                                (t = t || !1), this.to(this.relative(this.current()) + 1, t);
                        }),
                        (h.prototype.prev = function (t) {
                                (t = t || !1), this.to(this.relative(this.current()) - 1, t);
                        }),
                        (h.prototype.onTransitionEnd = function (t) {
                                if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                                this.leave("animating"), this.trigger("translated");
                        }),
                        (h.prototype.viewport = function () {
                                var t;
                                return (
                                        this.options.responsiveBaseElement !== i
                                                ? (t = l(this.options.responsiveBaseElement).width())
                                                : i.innerWidth
                                                ? (t = i.innerWidth)
                                                : s.documentElement && s.documentElement.clientWidth
                                                ? (t = s.documentElement.clientWidth)
                                                : console.warn("Can not detect viewport width."),
                                        t
                                );
                        }),
                        (h.prototype.replace = function (t) {
                                this.$stage.empty(),
                                        (this._items = []),
                                        (t = t && (t instanceof jQuery ? t : l(t))),
                                        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)),
                                        t
                                                .filter(function () {
                                                        return 1 === this.nodeType;
                                                })
                                                .each(
                                                        l.proxy(function (t, e) {
                                                                (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                                                        }, this)
                                                ),
                                        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                                        this.invalidate("items");
                        }),
                        (h.prototype.add = function (t, e) {
                                var i = this.relative(this._current);
                                (e = e === r ? this._items.length : this.normalize(e, !0)),
                                        (t = t instanceof jQuery ? t : l(t)),
                                        this.trigger("add", { content: t, position: e }),
                                        (t = this.prepare(t)),
                                        0 === this._items.length || e === this._items.length
                                                ? (0 === this._items.length && this.$stage.append(t),
                                                  0 !== this._items.length && this._items[e - 1].after(t),
                                                  this._items.push(t),
                                                  this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                                                : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                                        this._items[i] && this.reset(this._items[i].index()),
                                        this.invalidate("items"),
                                        this.trigger("added", { content: t, position: e });
                        }),
                        (h.prototype.remove = function (t) {
                                (t = this.normalize(t, !0)) !== r &&
                                        (this.trigger("remove", { content: this._items[t], position: t }),
                                        this._items[t].remove(),
                                        this._items.splice(t, 1),
                                        this._mergers.splice(t, 1),
                                        this.invalidate("items"),
                                        this.trigger("removed", { content: null, position: t }));
                        }),
                        (h.prototype.preloadAutoWidthImages = function (t) {
                                t.each(
                                        l.proxy(function (t, e) {
                                                this.enter("pre-loading"),
                                                        (e = l(e)),
                                                        l(new Image())
                                                                .one(
                                                                        "load",
                                                                        l.proxy(function (t) {
                                                                                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh();
                                                                        }, this)
                                                                )
                                                                .attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
                                        }, this)
                                );
                        }),
                        (h.prototype.destroy = function () {
                                for (var t in (this.$element.off(".owl.core"),
                                this.$stage.off(".owl.core"),
                                l(s).off(".owl.core"),
                                !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)),
                                this._plugins))
                                        this._plugins[t].destroy();
                                this.$stage.children(".cloned").remove(),
                                        this.$stage.unwrap(),
                                        this.$stage.children().contents().unwrap(),
                                        this.$stage.children().unwrap(),
                                        this.$stage.remove(),
                                        this.$element
                                                .removeClass(this.options.refreshClass)
                                                .removeClass(this.options.loadingClass)
                                                .removeClass(this.options.loadedClass)
                                                .removeClass(this.options.rtlClass)
                                                .removeClass(this.options.dragClass)
                                                .removeClass(this.options.grabClass)
                                                .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                                                .removeData("owl.carousel");
                        }),
                        (h.prototype.op = function (t, e, i) {
                                var s = this.settings.rtl;
                                switch (e) {
                                        case "<":
                                                return s ? i < t : t < i;
                                        case ">":
                                                return s ? t < i : i < t;
                                        case ">=":
                                                return s ? t <= i : i <= t;
                                        case "<=":
                                                return s ? i <= t : t <= i;
                                }
                        }),
                        (h.prototype.on = function (t, e, i, s) {
                                t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i);
                        }),
                        (h.prototype.off = function (t, e, i, s) {
                                t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i);
                        }),
                        (h.prototype.trigger = function (t, e, i, s, n) {
                                var o = { item: { count: this._items.length, index: this.current() } },
                                        a = l.camelCase(
                                                l
                                                        .grep(["on", t, i], function (t) {
                                                                return t;
                                                        })
                                                        .join("-")
                                                        .toLowerCase()
                                        ),
                                        r = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({ relatedTarget: this }, o, e));
                                return (
                                        this._supress[t] ||
                                                (l.each(this._plugins, function (t, e) {
                                                        e.onTrigger && e.onTrigger(r);
                                                }),
                                                this.register({ type: h.Type.Event, name: t }),
                                                this.$element.trigger(r),
                                                this.settings && "function" == typeof this.settings[a] && this.settings[a].call(this, r)),
                                        r
                                );
                        }),
                        (h.prototype.enter = function (t) {
                                l.each(
                                        [t].concat(this._states.tags[t] || []),
                                        l.proxy(function (t, e) {
                                                this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++;
                                        }, this)
                                );
                        }),
                        (h.prototype.leave = function (t) {
                                l.each(
                                        [t].concat(this._states.tags[t] || []),
                                        l.proxy(function (t, e) {
                                                this._states.current[e]--;
                                        }, this)
                                );
                        }),
                        (h.prototype.register = function (i) {
                                var e;
                                i.type === h.Type.Event
                                        ? (l.event.special[i.name] || (l.event.special[i.name] = {}),
                                          l.event.special[i.name].owl ||
                                                  ((e = l.event.special[i.name]._default),
                                                  (l.event.special[i.name]._default = function (t) {
                                                          return !e || !e.apply || (t.namespace && -1 !== t.namespace.indexOf("owl")) ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments);
                                                  }),
                                                  (l.event.special[i.name].owl = !0)))
                                        : i.type === h.Type.State &&
                                          (this._states.tags[i.name] ? (this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags)) : (this._states.tags[i.name] = i.tags),
                                          (this._states.tags[i.name] = l.grep(
                                                  this._states.tags[i.name],
                                                  l.proxy(function (t, e) {
                                                          return l.inArray(t, this._states.tags[i.name]) === e;
                                                  }, this)
                                          )));
                        }),
                        (h.prototype.suppress = function (t) {
                                l.each(
                                        t,
                                        l.proxy(function (t, e) {
                                                this._supress[e] = !0;
                                        }, this)
                                );
                        }),
                        (h.prototype.release = function (t) {
                                l.each(
                                        t,
                                        l.proxy(function (t, e) {
                                                delete this._supress[e];
                                        }, this)
                                );
                        }),
                        (h.prototype.pointer = function (t) {
                                var e = { x: null, y: null };
                                return (
                                        (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX
                                                ? ((e.x = t.pageX), (e.y = t.pageY))
                                                : ((e.x = t.clientX), (e.y = t.clientY)),
                                        e
                                );
                        }),
                        (h.prototype.isNumeric = function (t) {
                                return !isNaN(parseFloat(t));
                        }),
                        (h.prototype.difference = function (t, e) {
                                return { x: t.x - e.x, y: t.y - e.y };
                        }),
                        (l.fn.owlCarousel = function (e) {
                                var s = Array.prototype.slice.call(arguments, 1);
                                return this.each(function () {
                                        var t = l(this),
                                                i = t.data("owl.carousel");
                                        i ||
                                                ((i = new h(this, "object" == typeof e && e)),
                                                t.data("owl.carousel", i),
                                                l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                                                        i.register({ type: h.Type.Event, name: e }),
                                                                i.$element.on(
                                                                        e + ".owl.carousel.core",
                                                                        l.proxy(function (t) {
                                                                                t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]));
                                                                        }, i)
                                                                );
                                                })),
                                                "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s);
                                });
                        }),
                        (l.fn.owlCarousel.Constructor = h);
        })(window.Zepto || window.jQuery, window, document),
        (function (e, i) {
                var s = function (t) {
                        (this._core = t),
                                (this._interval = null),
                                (this._visible = null),
                                (this._handlers = {
                                        "initialized.owl.carousel": e.proxy(function (t) {
                                                t.namespace && this._core.settings.autoRefresh && this.watch();
                                        }, this),
                                }),
                                (this._core.options = e.extend({}, s.Defaults, this._core.options)),
                                this._core.$element.on(this._handlers);
                };
                (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                        (s.prototype.watch = function () {
                                this._interval || ((this._visible = this._core.isVisible()), (this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
                        }),
                        (s.prototype.refresh = function () {
                                this._core.isVisible() !== this._visible &&
                                        ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
                        }),
                        (s.prototype.destroy = function () {
                                var t, e;
                                for (t in (i.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
        })(window.Zepto || window.jQuery, window, document),
        (function (r, n) {
                var e = function (t) {
                        (this._core = t),
                                (this._loaded = []),
                                (this._handlers = {
                                        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": r.proxy(function (t) {
                                                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && ((t.property && "position" == t.property.name) || "initialized" == t.type)) {
                                                        var e = this._core.settings,
                                                                i = (e.center && Math.ceil(e.items / 2)) || e.items,
                                                                s = (e.center && -1 * i) || 0,
                                                                n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s,
                                                                o = this._core.clones().length,
                                                                a = r.proxy(function (t, e) {
                                                                        this.load(e);
                                                                }, this);
                                                        for (0 < e.lazyLoadEager && ((i += e.lazyLoadEager), e.loop && ((n -= e.lazyLoadEager), i++)); s++ < i; )
                                                                this.load(o / 2 + this._core.relative(n)), o && r.each(this._core.clones(this._core.relative(n)), a), n++;
                                                }
                                        }, this),
                                }),
                                (this._core.options = r.extend({}, e.Defaults, this._core.options)),
                                this._core.$element.on(this._handlers);
                };
                (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                        (e.prototype.load = function (t) {
                                var e = this._core.$stage.children().eq(t),
                                        t = e && e.find(".owl-lazy");
                                !t ||
                                        -1 < r.inArray(e.get(0), this._loaded) ||
                                        (t.each(
                                                r.proxy(function (t, e) {
                                                        var i = r(e),
                                                                s = (1 < n.devicePixelRatio && i.attr("data-src-retina")) || i.attr("data-src") || i.attr("data-srcset");
                                                        this._core.trigger("load", { element: i, url: s }, "lazy"),
                                                                i.is("img")
                                                                        ? i
                                                                                  .one(
                                                                                          "load.owl.lazy",
                                                                                          r.proxy(function () {
                                                                                                  i.css("opacity", 1), this._core.trigger("loaded", { element: i, url: s }, "lazy");
                                                                                          }, this)
                                                                                  )
                                                                                  .attr("src", s)
                                                                        : i.is("source")
                                                                        ? i
                                                                                  .one(
                                                                                          "load.owl.lazy",
                                                                                          r.proxy(function () {
                                                                                                  this._core.trigger("loaded", { element: i, url: s }, "lazy");
                                                                                          }, this)
                                                                                  )
                                                                                  .attr("srcset", s)
                                                                        : (((e = new Image()).onload = r.proxy(function () {
                                                                                  i.css({ "background-image": 'url("' + s + '")', opacity: "1" }), this._core.trigger("loaded", { element: i, url: s }, "lazy");
                                                                          }, this)),
                                                                          (e.src = s));
                                                }, this)
                                        ),
                                        this._loaded.push(e.get(0)));
                        }),
                        (e.prototype.destroy = function () {
                                var t, e;
                                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (r.fn.owlCarousel.Constructor.Plugins.Lazy = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (n, i) {
                var s = function (t) {
                        (this._core = t),
                                (this._previousHeight = null),
                                (this._handlers = {
                                        "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function (t) {
                                                t.namespace && this._core.settings.autoHeight && this.update();
                                        }, this),
                                        "changed.owl.carousel": n.proxy(function (t) {
                                                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update();
                                        }, this),
                                        "loaded.owl.lazy": n.proxy(function (t) {
                                                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                                        }, this),
                                }),
                                (this._core.options = n.extend({}, s.Defaults, this._core.options)),
                                this._core.$element.on(this._handlers),
                                (this._intervalId = null);
                        var e = this;
                        n(i).on("load", function () {
                                e._core.settings.autoHeight && e.update();
                        }),
                                n(i).resize(function () {
                                        e._core.settings.autoHeight &&
                                                (null != e._intervalId && clearTimeout(e._intervalId),
                                                (e._intervalId = setTimeout(function () {
                                                        e.update();
                                                }, 250)));
                                });
                };
                (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
                        (s.prototype.update = function () {
                                var t = this._core._current,
                                        e = t + this._core.settings.items,
                                        i = this._core.settings.lazyLoad,
                                        t = this._core.$stage.children().toArray().slice(t, e),
                                        s = [],
                                        e = 0;
                                n.each(t, function (t, e) {
                                        s.push(n(e).height());
                                }),
                                        (e = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (e = this._previousHeight),
                                        (this._previousHeight = e),
                                        this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass);
                        }),
                        (s.prototype.destroy = function () {
                                var t, e;
                                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (n.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
        })(window.Zepto || window.jQuery, window, document),
        (function (c, e) {
                var i = function (t) {
                        (this._core = t),
                                (this._videos = {}),
                                (this._playing = null),
                                (this._handlers = {
                                        "initialized.owl.carousel": c.proxy(function (t) {
                                                t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                                        }, this),
                                        "resize.owl.carousel": c.proxy(function (t) {
                                                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
                                        }, this),
                                        "refreshed.owl.carousel": c.proxy(function (t) {
                                                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                                        }, this),
                                        "changed.owl.carousel": c.proxy(function (t) {
                                                t.namespace && "position" === t.property.name && this._playing && this.stop();
                                        }, this),
                                        "prepared.owl.carousel": c.proxy(function (t) {
                                                var e;
                                                !t.namespace || ((e = c(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, c(t.content))));
                                        }, this),
                                }),
                                (this._core.options = c.extend({}, i.Defaults, this._core.options)),
                                this._core.$element.on(this._handlers),
                                this._core.$element.on(
                                        "click.owl.video",
                                        ".owl-video-play-icon",
                                        c.proxy(function (t) {
                                                this.play(t);
                                        }, this)
                                );
                };
                (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
                        (i.prototype.fetch = function (t, e) {
                                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                                        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                                        n = t.attr("data-width") || this._core.settings.videoWidth,
                                        o = t.attr("data-height") || this._core.settings.videoHeight,
                                        a = t.attr("href");
                                if (!a) throw new Error("Missing video URL.");
                                if (
                                        -1 <
                                        (s = a.match(
                                                /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                        ))[3].indexOf("youtu")
                                )
                                        i = "youtube";
                                else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
                                else {
                                        if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                                        i = "vzaar";
                                }
                                (s = s[6]), (this._videos[a] = { type: i, id: s, width: n, height: o }), e.attr("data-video", a), this.thumbnail(t, this._videos[a]);
                        }),
                        (i.prototype.thumbnail = function (e, t) {
                                function i(t) {
                                        (s = h.lazyLoad ? c("<div/>", { class: "owl-video-tn " + l, srcType: t }) : c("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + t + ")" })),
                                                e.after(s),
                                                e.after('<div class="owl-video-play-icon"></div>');
                                }
                                var s,
                                        n,
                                        o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
                                        a = e.find("img"),
                                        r = "src",
                                        l = "",
                                        h = this._core.settings;
                                if ((e.wrap(c("<div/>", { class: "owl-video-wrapper", style: o })), this._core.settings.lazyLoad && ((r = "data-src"), (l = "owl-lazy")), a.length)) return i(a.attr(r)), a.remove(), !1;
                                "youtube" === t.type
                                        ? ((n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), i(n))
                                        : "vimeo" === t.type
                                        ? c.ajax({
                                                  type: "GET",
                                                  url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                                                  jsonp: "callback",
                                                  dataType: "jsonp",
                                                  success: function (t) {
                                                          (n = t[0].thumbnail_large), i(n);
                                                  },
                                          })
                                        : "vzaar" === t.type &&
                                          c.ajax({
                                                  type: "GET",
                                                  url: "//vzaar.com/api/videos/" + t.id + ".json",
                                                  jsonp: "callback",
                                                  dataType: "jsonp",
                                                  success: function (t) {
                                                          (n = t.framegrab_url), i(n);
                                                  },
                                          });
                        }),
                        (i.prototype.stop = function () {
                                this._core.trigger("stop", null, "video"),
                                        this._playing.find(".owl-video-frame").remove(),
                                        this._playing.removeClass("owl-video-playing"),
                                        (this._playing = null),
                                        this._core.leave("playing"),
                                        this._core.trigger("stopped", null, "video");
                        }),
                        (i.prototype.play = function (t) {
                                var e = c(t.target).closest("." + this._core.settings.itemClass),
                                        i = this._videos[e.attr("data-video")],
                                        s = i.width || "100%",
                                        n = i.height || this._core.$stage.height();
                                this._playing ||
                                        (this._core.enter("playing"),
                                        this._core.trigger("play", null, "video"),
                                        (e = this._core.items(this._core.relative(e.index()))),
                                        this._core.reset(e.index()),
                                        (t = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", n),
                                        t.attr("width", s),
                                        "youtube" === i.type
                                                ? t.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id)
                                                : "vimeo" === i.type
                                                ? t.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1")
                                                : "vzaar" === i.type && t.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"),
                                        c(t).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                                        (this._playing = e.addClass("owl-video-playing")));
                        }),
                        (i.prototype.isInFullScreen = function () {
                                var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
                                return t && c(t).parent().hasClass("owl-video-frame");
                        }),
                        (i.prototype.destroy = function () {
                                var t, e;
                                for (t in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (c.fn.owlCarousel.Constructor.Plugins.Video = i);
        })(window.Zepto || window.jQuery, (window, document)),
        (function (a) {
                var e = function (t) {
                        (this.core = t),
                                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                                (this.swapping = !0),
                                (this.previous = void 0),
                                (this.next = void 0),
                                (this.handlers = {
                                        "change.owl.carousel": a.proxy(function (t) {
                                                t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));
                                        }, this),
                                        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (t) {
                                                t.namespace && (this.swapping = "translated" == t.type);
                                        }, this),
                                        "translate.owl.carousel": a.proxy(function (t) {
                                                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                                        }, this),
                                }),
                                this.core.$element.on(this.handlers);
                };
                (e.Defaults = { animateOut: !1, animateIn: !1 }),
                        (e.prototype.swap = function () {
                                var t, e, i, s, n, o;
                                1 === this.core.settings.items &&
                                        a.support.animation &&
                                        a.support.transition &&
                                        (this.core.speed(0),
                                        (e = a.proxy(this.clear, this)),
                                        (i = this.core.$stage.children().eq(this.previous)),
                                        (s = this.core.$stage.children().eq(this.next)),
                                        (n = this.core.settings.animateIn),
                                        (o = this.core.settings.animateOut),
                                        this.core.current() !== this.previous &&
                                                (o &&
                                                        ((t = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                                                        i
                                                                .one(a.support.animation.end, e)
                                                                .css({ left: t + "px" })
                                                                .addClass("animated owl-animated-out")
                                                                .addClass(o)),
                                                n && s.one(a.support.animation.end, e).addClass("animated owl-animated-in").addClass(n)));
                        }),
                        (e.prototype.clear = function (t) {
                                a(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
                        }),
                        (e.prototype.destroy = function () {
                                var t, e;
                                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
        })(window.Zepto || window.jQuery, (window, document)),
        (function (s, n, e) {
                var i = function (t) {
                        (this._core = t),
                                (this._call = null),
                                (this._time = 0),
                                (this._timeout = 0),
                                (this._paused = !0),
                                (this._handlers = {
                                        "changed.owl.carousel": s.proxy(function (t) {
                                                t.namespace && "settings" === t.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);
                                        }, this),
                                        "initialized.owl.carousel": s.proxy(function (t) {
                                                t.namespace && this._core.settings.autoplay && this.play();
                                        }, this),
                                        "play.owl.autoplay": s.proxy(function (t, e, i) {
                                                t.namespace && this.play(e, i);
                                        }, this),
                                        "stop.owl.autoplay": s.proxy(function (t) {
                                                t.namespace && this.stop();
                                        }, this),
                                        "mouseover.owl.autoplay": s.proxy(function () {
                                                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                                        }, this),
                                        "mouseleave.owl.autoplay": s.proxy(function () {
                                                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                                        }, this),
                                        "touchstart.owl.core": s.proxy(function () {
                                                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                                        }, this),
                                        "touchend.owl.core": s.proxy(function () {
                                                this._core.settings.autoplayHoverPause && this.play();
                                        }, this),
                                }),
                                this._core.$element.on(this._handlers),
                                (this._core.options = s.extend({}, i.Defaults, this._core.options));
                };
                (i.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
                        (i.prototype._next = function (t) {
                                (this._call = n.setTimeout(s.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                                        this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed);
                        }),
                        (i.prototype.read = function () {
                                return new Date().getTime() - this._time;
                        }),
                        (i.prototype.play = function (t, e) {
                                var i;
                                this._core.is("rotating") || this._core.enter("rotating"),
                                        (t = t || this._core.settings.autoplayTimeout),
                                        (i = Math.min(this._time % (this._timeout || t), t)),
                                        this._paused ? ((this._time = this.read()), (this._paused = !1)) : n.clearTimeout(this._call),
                                        (this._time += (this.read() % t) - i),
                                        (this._timeout = t),
                                        (this._call = n.setTimeout(s.proxy(this._next, this, e), t - i));
                        }),
                        (i.prototype.stop = function () {
                                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), n.clearTimeout(this._call), this._core.leave("rotating"));
                        }),
                        (i.prototype.pause = function () {
                                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), n.clearTimeout(this._call));
                        }),
                        (i.prototype.destroy = function () {
                                var t, e;
                                for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (s.fn.owlCarousel.Constructor.Plugins.autoplay = i);
        })(window.Zepto || window.jQuery, window, document),
        (function (n) {
                "use strict";
                var e = function (t) {
                        (this._core = t),
                                (this._initialized = !1),
                                (this._pages = []),
                                (this._controls = {}),
                                (this._templates = []),
                                (this.$element = this._core.$element),
                                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                                (this._handlers = {
                                        "prepared.owl.carousel": n.proxy(function (t) {
                                                t.namespace &&
                                                        this._core.settings.dotsData &&
                                                        this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                                        }, this),
                                        "added.owl.carousel": n.proxy(function (t) {
                                                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
                                        }, this),
                                        "remove.owl.carousel": n.proxy(function (t) {
                                                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
                                        }, this),
                                        "changed.owl.carousel": n.proxy(function (t) {
                                                t.namespace && "position" == t.property.name && this.draw();
                                        }, this),
                                        "initialized.owl.carousel": n.proxy(function (t) {
                                                t.namespace &&
                                                        !this._initialized &&
                                                        (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                                        }, this),
                                        "refreshed.owl.carousel": n.proxy(function (t) {
                                                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                                        }, this),
                                }),
                                (this._core.options = n.extend({}, e.Defaults, this._core.options)),
                                this.$element.on(this._handlers);
                };
                (e.Defaults = {
                        nav: !1,
                        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1,
                }),
                        (e.prototype.initialize = function () {
                                var t,
                                        i = this._core.settings;
                                for (t in ((this._controls.$relative = (i.navContainer ? n(i.navContainer) : n("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                                (this._controls.$previous = n("<" + i.navElement + ">")
                                        .addClass(i.navClass[0])
                                        .html(i.navText[0])
                                        .prependTo(this._controls.$relative)
                                        .on(
                                                "click",
                                                n.proxy(function (t) {
                                                        this.prev(i.navSpeed);
                                                }, this)
                                        )),
                                (this._controls.$next = n("<" + i.navElement + ">")
                                        .addClass(i.navClass[1])
                                        .html(i.navText[1])
                                        .appendTo(this._controls.$relative)
                                        .on(
                                                "click",
                                                n.proxy(function (t) {
                                                        this.next(i.navSpeed);
                                                }, this)
                                        )),
                                i.dotsData || (this._templates = [n('<button role="button">').addClass(i.dotClass).append(n("<span>")).prop("outerHTML")]),
                                (this._controls.$absolute = (i.dotsContainer ? n(i.dotsContainer) : n("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),
                                this._controls.$absolute.on(
                                        "click",
                                        "button",
                                        n.proxy(function (t) {
                                                var e = (n(t.target).parent().is(this._controls.$absolute) ? n(t.target) : n(t.target).parent()).index();
                                                t.preventDefault(), this.to(e, i.dotsSpeed);
                                        }, this)
                                ),
                                this._overrides))
                                        this._core[t] = n.proxy(this[t], this);
                        }),
                        (e.prototype.destroy = function () {
                                var t,
                                        e,
                                        i,
                                        s,
                                        n = this._core.settings;
                                for (t in this._handlers) this.$element.off(t, this._handlers[t]);
                                for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                                for (s in this.overides) this._core[s] = this._overrides[s];
                                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
                        }),
                        (e.prototype.update = function () {
                                var t,
                                        e,
                                        i = this._core.clones().length / 2,
                                        s = i + this._core.items().length,
                                        n = this._core.maximum(!0),
                                        o = this._core.settings,
                                        a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                                if (("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy))
                                        for (this._pages = [], t = i, e = 0; t < s; t++) {
                                                if (a <= e || 0 === e) {
                                                        if ((this._pages.push({ start: Math.min(n, t - i), end: t - i + a - 1 }), Math.min(n, t - i) === n)) break;
                                                        (e = 0), 0;
                                                }
                                                e += this._core.mergers(this._core.relative(t));
                                        }
                        }),
                        (e.prototype.draw = function () {
                                var t = this._core.settings,
                                        e = this._core.items().length <= t.items,
                                        i = this._core.relative(this._core.current()),
                                        s = t.loop || t.rewind;
                                this._controls.$relative.toggleClass("disabled", !t.nav || e),
                                        t.nav && (this._controls.$previous.toggleClass("disabled", !s && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && i >= this._core.maximum(!0))),
                                        this._controls.$absolute.toggleClass("disabled", !t.dots || e),
                                        t.dots &&
                                                ((e = this._pages.length - this._controls.$absolute.children().length),
                                                t.dotsData && 0 != e
                                                        ? this._controls.$absolute.html(this._templates.join(""))
                                                        : 0 < e
                                                        ? this._controls.$absolute.append(new Array(1 + e).join(this._templates[0]))
                                                        : e < 0 && this._controls.$absolute.children().slice(e).remove(),
                                                this._controls.$absolute.find(".active").removeClass("active"),
                                                this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"));
                        }),
                        (e.prototype.onTrigger = function (t) {
                                var e = this._core.settings;
                                t.page = { index: n.inArray(this.current(), this._pages), count: this._pages.length, size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items) };
                        }),
                        (e.prototype.current = function () {
                                var i = this._core.relative(this._core.current());
                                return n
                                        .grep(
                                                this._pages,
                                                n.proxy(function (t, e) {
                                                        return t.start <= i && t.end >= i;
                                                }, this)
                                        )
                                        .pop();
                        }),
                        (e.prototype.getPosition = function (t) {
                                var e,
                                        i,
                                        s = this._core.settings;
                                return (
                                        "page" == s.slideBy
                                                ? ((e = n.inArray(this.current(), this._pages)), (i = this._pages.length), t ? ++e : --e, (e = this._pages[((e % i) + i) % i].start))
                                                : ((e = this._core.relative(this._core.current())), (i = this._core.items().length), t ? (e += s.slideBy) : (e -= s.slideBy)),
                                        e
                                );
                        }),
                        (e.prototype.next = function (t) {
                                n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
                        }),
                        (e.prototype.prev = function (t) {
                                n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
                        }),
                        (e.prototype.to = function (t, e, i) {
                                !i && this._pages.length ? ((i = this._pages.length), n.proxy(this._overrides.to, this._core)(this._pages[((t % i) + i) % i].start, e)) : n.proxy(this._overrides.to, this._core)(t, e);
                        }),
                        (n.fn.owlCarousel.Constructor.Plugins.Navigation = e);
        })(window.Zepto || window.jQuery, (window, document)),
        (function (s, n) {
                "use strict";
                var e = function (t) {
                        (this._core = t),
                                (this._hashes = {}),
                                (this.$element = this._core.$element),
                                (this._handlers = {
                                        "initialized.owl.carousel": s.proxy(function (t) {
                                                t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation");
                                        }, this),
                                        "prepared.owl.carousel": s.proxy(function (t) {
                                                var e;
                                                !t.namespace || ((e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content));
                                        }, this),
                                        "changed.owl.carousel": s.proxy(function (t) {
                                                var i;
                                                t.namespace &&
                                                        "position" === t.property.name &&
                                                        ((i = this._core.items(this._core.relative(this._core.current()))),
                                                        (t = s
                                                                .map(this._hashes, function (t, e) {
                                                                        return t === i ? e : null;
                                                                })
                                                                .join()) &&
                                                                n.location.hash.slice(1) !== t &&
                                                                (n.location.hash = t));
                                        }, this),
                                }),
                                (this._core.options = s.extend({}, e.Defaults, this._core.options)),
                                this.$element.on(this._handlers),
                                s(n).on(
                                        "hashchange.owl.navigation",
                                        s.proxy(function (t) {
                                                var e = n.location.hash.substring(1),
                                                        i = this._core.$stage.children(),
                                                        e = this._hashes[e] && i.index(this._hashes[e]);
                                                void 0 !== e && e !== this._core.current() && this._core.to(this._core.relative(e), !1, !0);
                                        }, this)
                                );
                };
                (e.Defaults = { URLhashListener: !1 }),
                        (e.prototype.destroy = function () {
                                var t, e;
                                for (t in (s(n).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(t, this._handlers[t]);
                                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
                        }),
                        (s.fn.owlCarousel.Constructor.Plugins.Hash = e);
        })(window.Zepto || window.jQuery, window, document),
        (function (n, o) {
                var a = n("<support>").get(0).style,
                        r = "Webkit Moz O ms".split(" "),
                        t = {
                                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
                        },
                        e = function () {
                                return !!l("transform");
                        },
                        i = function () {
                                return !!l("perspective");
                        },
                        s = function () {
                                return !!l("animation");
                        };
                function l(t, i) {
                        var s = !1,
                                e = t.charAt(0).toUpperCase() + t.slice(1);
                        return (
                                n.each((t + " " + r.join(e + " ") + e).split(" "), function (t, e) {
                                        if (a[e] !== o) return (s = !i || e), !1;
                                }),
                                s
                        );
                }
                function h(t) {
                        return l(t, !0);
                }
                !(function () {
                        return !!l("transition");
                })() || ((n.support.transition = new String(h("transition"))), (n.support.transition.end = t.transition.end[n.support.transition])),
                        s() && ((n.support.animation = new String(h("animation"))), (n.support.animation.end = t.animation.end[n.support.animation])),
                        e() && ((n.support.transform = new String(h("transform"))), (n.support.transform3d = i()));
        })(window.Zepto || window.jQuery, (window, void document)),
        (function (t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery);
        })(function (o, s) {
                var i = "plugin_hideShowPassword",
                        n = ["show", "innerToggle"],
                        e = {
                                show: "infer",
                                innerToggle: !1,
                                enable: (function () {
                                        var t = document.body,
                                                e = document.createElement("input"),
                                                i = !0,
                                                e = (t = t || document.createElement("body")).appendChild(e);
                                        try {
                                                e.setAttribute("type", "text");
                                        } catch (t) {
                                                i = !1;
                                        }
                                        return t.removeChild(e), i;
                                })(),
                                triggerOnToggle: !1,
                                className: "hideShowPassword-field",
                                initEvent: "hideShowPasswordInit",
                                changeEvent: "passwordVisibilityChange",
                                props: { autocapitalize: "off", autocomplete: "off", autocorrect: "off", spellcheck: "false" },
                                toggle: {
                                        element: '<button type="button">',
                                        className: "hideShowPassword-toggle",
                                        touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
                                        attachToEvent: "click.hideShowPassword",
                                        attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
                                        attachToKeyEvent: "keyup",
                                        attachToKeyCodes: !0,
                                        styles: { position: "absolute" },
                                        touchStyles: { pointerEvents: "none" },
                                        position: "infer",
                                        verticalAlign: "middle",
                                        offset: 0,
                                        attr: { role: "button", "aria-label": "Show Password", title: "Show Password", tabIndex: 0 },
                                },
                                wrapper: {
                                        element: "<div>",
                                        className: "hideShowPassword-wrapper",
                                        enforceWidth: !1,
                                        styles: { position: "relative" },
                                        inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
                                        innerElementStyles: { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 },
                                },
                                states: {
                                        shown: {
                                                className: "hideShowPassword-shown",
                                                changeEvent: "passwordShown",
                                                props: { type: "text" },
                                                toggle: { className: "hideShowPassword-toggle-hide", content: "Hide", attr: { "aria-pressed": "true", title: "Hide Password" } },
                                        },
                                        hidden: {
                                                className: "hideShowPassword-hidden",
                                                changeEvent: "passwordHidden",
                                                props: { type: "password" },
                                                toggle: { className: "hideShowPassword-toggle-show", content: "Show", attr: { "aria-pressed": "false", title: "Show Password" } },
                                        },
                                },
                        };
                function a(t, e) {
                        (this.element = o(t)), (this.wrapperElement = o()), (this.toggleElement = o()), this.init(e);
                }
                (a.prototype = {
                        init: function (t) {
                                this.update(t, e) &&
                                        (this.element.addClass(this.options.className),
                                        this.options.innerToggle &&
                                                (this.wrapElement(this.options.wrapper),
                                                this.initToggle(this.options.toggle),
                                                "string" == typeof this.options.innerToggle &&
                                                        (this.toggleElement.hide(),
                                                        this.element.one(
                                                                this.options.innerToggle,
                                                                o.proxy(function () {
                                                                        this.toggleElement.show();
                                                                }, this)
                                                        ))),
                                        this.element.trigger(this.options.initEvent, [this]));
                        },
                        update: function (t, e) {
                                return (this.options = this.prepareOptions(t, e)), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable;
                        },
                        toggle: function (t) {
                                return (t = t || "toggle"), this.update({ show: t });
                        },
                        prepareOptions: function (t, e) {
                                var i,
                                        s = t || {},
                                        n = [];
                                if (
                                        ((e = e || this.options),
                                        (t = o.extend(!0, {}, e, t)),
                                        s.hasOwnProperty("wrapper") && s.wrapper.hasOwnProperty("inheritStyles") && (t.wrapper.inheritStyles = s.wrapper.inheritStyles),
                                        t.enable &&
                                                ("toggle" === t.show ? (t.show = this.isType("hidden", t.states)) : "infer" === t.show && (t.show = this.isType("shown", t.states)),
                                                "infer" === t.toggle.position && (t.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"),
                                                !o.isArray(t.toggle.attachToKeyCodes)))
                                ) {
                                        if (!0 === t.toggle.attachToKeyCodes)
                                                switch ((i = o(t.toggle.element)).prop("tagName").toLowerCase()) {
                                                        case "button":
                                                        case "input":
                                                                break;
                                                        case "a":
                                                                if (i.filter("[href]").length) {
                                                                        n.push(32);
                                                                        break;
                                                                }
                                                        default:
                                                                n.push(32, 13);
                                                }
                                        t.toggle.attachToKeyCodes = n;
                                }
                                return t;
                        },
                        updateElement: function () {
                                return (
                                        !(!this.options.enable || this.isType()) &&
                                        (this.element.prop(o.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className),
                                        this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]),
                                        this.updateToggle(),
                                        !0)
                                );
                        },
                        isType: function (t, e) {
                                return (e = e || this.options.states)[(t = t || this.state(s, s, e).props.type)] && (t = e[t].props.type), this.element.prop("type") === t;
                        },
                        state: function (t, e, i) {
                                return (i = i || this.options.states), t === s && (t = this.options.show), "boolean" == typeof t && (t = t ? "shown" : "hidden"), e && (t = "shown" === t ? "hidden" : "shown"), i[t];
                        },
                        otherState: function (t) {
                                return this.state(t, !0);
                        },
                        wrapElement: function (i) {
                                var t,
                                        e = i.enforceWidth;
                                return (
                                        this.wrapperElement.length ||
                                                ((t = this.element.outerWidth()),
                                                o.each(
                                                        i.inheritStyles,
                                                        o.proxy(function (t, e) {
                                                                i.styles[e] = this.element.css(e);
                                                        }, this)
                                                ),
                                                this.element.css(i.innerElementStyles).wrap(o(i.element).addClass(i.className).css(i.styles)),
                                                (this.wrapperElement = this.element.parent()),
                                                !0 === e && (e = this.wrapperElement.outerWidth() !== t && t),
                                                !1 !== e && this.wrapperElement.css("width", e)),
                                        this.wrapperElement
                                );
                        },
                        initToggle: function (t) {
                                return (
                                        this.toggleElement.length ||
                                                ((this.toggleElement = o(t.element).attr(t.attr).addClass(t.className).css(t.styles).appendTo(this.wrapperElement)),
                                                this.updateToggle(),
                                                this.positionToggle(t.position, t.verticalAlign, t.offset),
                                                t.touchSupport
                                                        ? (this.toggleElement.css(t.touchStyles), this.element.on(t.attachToTouchEvent, o.proxy(this.toggleTouchEvent, this)))
                                                        : this.toggleElement.on(t.attachToEvent, o.proxy(this.toggleEvent, this)),
                                                t.attachToKeyCodes.length && this.toggleElement.on(t.attachToKeyEvent, o.proxy(this.toggleKeyEvent, this))),
                                        this.toggleElement
                                );
                        },
                        positionToggle: function (t, e, i) {
                                var s = {};
                                switch (((s[t] = i), e)) {
                                        case "top":
                                        case "bottom":
                                                s[e] = i;
                                                break;
                                        case "middle":
                                                (s.top = "50%"), (s.marginTop = this.toggleElement.outerHeight() / -2);
                                }
                                return this.toggleElement.css(s);
                        },
                        updateToggle: function (t, e) {
                                var i;
                                return (
                                        this.toggleElement.length &&
                                                ((i = "padding-" + this.options.toggle.position),
                                                (t = t || this.state().toggle),
                                                (e = e || this.otherState().toggle),
                                                this.toggleElement.attr(t.attr).addClass(t.className).removeClass(e.className).html(t.content),
                                                (t = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset),
                                                this.element.css(i) !== t && this.element.css(i, t)),
                                        this.toggleElement
                                );
                        },
                        toggleEvent: function (t) {
                                t.preventDefault(), this.toggle();
                        },
                        toggleKeyEvent: function (i) {
                                o.each(
                                        this.options.toggle.attachToKeyCodes,
                                        o.proxy(function (t, e) {
                                                if (i.which === e) return this.toggleEvent(i), !1;
                                        }, this)
                                );
                        },
                        toggleTouchEvent: function (t) {
                                var e,
                                        i,
                                        s = this.toggleElement.offset().left;
                                s && ((i = t.pageX || t.originalEvent.pageX), (i = "left" === this.options.toggle.position ? ((e = i), (s += this.toggleElement.outerWidth())) : ((e = s), i)), e <= i && this.toggleEvent(t));
                        },
                }),
                        (o.fn.hideShowPassword = function () {
                                var s = {};
                                return (
                                        o.each(arguments, function (t, e) {
                                                var i = {};
                                                if ("object" == typeof e) i = e;
                                                else {
                                                        if (!n[t]) return !1;
                                                        i[n[t]] = e;
                                                }
                                                o.extend(!0, s, i);
                                        }),
                                        this.each(function () {
                                                var t = o(this),
                                                        e = t.data(i);
                                                e ? e.update(s) : t.data(i, new a(this, s));
                                        })
                                );
                        }),
                        o.each({ show: !0, hide: !1, toggle: "toggle" }, function (t, i) {
                                o.fn[t + "Password"] = function (t, e) {
                                        return this.hideShowPassword(i, t, e);
                                };
                        });
        }),
        (function (t, e) {
                "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.moment = e());
        })(this, function () {
                "use strict";
                var t, s;
                function p() {
                        return t.apply(null, arguments);
                }
                function a(t) {
                        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
                }
                function r(t) {
                        return null != t && "[object Object]" === Object.prototype.toString.call(t);
                }
                function o(t) {
                        return void 0 === t;
                }
                function l(t) {
                        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
                }
                function h(t) {
                        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
                }
                function c(t, e) {
                        for (var i = [], s = 0; s < t.length; ++s) i.push(e(t[s], s));
                        return i;
                }
                function f(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e);
                }
                function d(t, e) {
                        for (var i in e) f(e, i) && (t[i] = e[i]);
                        return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), t;
                }
                function u(t, e, i, s) {
                        return De(t, e, i, s, !0).utc();
                }
                function m(t) {
                        return (
                                null == t._pf &&
                                        (t._pf = {
                                                empty: !1,
                                                unusedTokens: [],
                                                unusedInput: [],
                                                overflow: -2,
                                                charsLeftOver: 0,
                                                nullInput: !1,
                                                invalidMonth: null,
                                                invalidFormat: !1,
                                                userInvalidated: !1,
                                                iso: !1,
                                                parsedDateParts: [],
                                                meridiem: null,
                                                rfc2822: !1,
                                                weekdayMismatch: !1,
                                        }),
                                t._pf
                        );
                }
                function g(t) {
                        if (null == t._isValid) {
                                var e = m(t),
                                        i = s.call(e.parsedDateParts, function (t) {
                                                return null != t;
                                        }),
                                        i =
                                                !isNaN(t._d.getTime()) &&
                                                e.overflow < 0 &&
                                                !e.empty &&
                                                !e.invalidMonth &&
                                                !e.invalidWeekday &&
                                                !e.weekdayMismatch &&
                                                !e.nullInput &&
                                                !e.invalidFormat &&
                                                !e.userInvalidated &&
                                                (!e.meridiem || (e.meridiem && i));
                                if ((t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t))) return i;
                                t._isValid = i;
                        }
                        return t._isValid;
                }
                function _(t) {
                        var e = u(NaN);
                        return null != t ? d(m(e), t) : (m(e).userInvalidated = !0), e;
                }
                s =
                        Array.prototype.some ||
                        function (t) {
                                for (var e = Object(this), i = e.length >>> 0, s = 0; s < i; s++) if (s in e && t.call(this, e[s], s, e)) return !0;
                                return !1;
                        };
                var v = (p.momentProperties = []);
                function y(t, e) {
                        var i, s, n;
                        if (
                                (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
                                o(e._i) || (t._i = e._i),
                                o(e._f) || (t._f = e._f),
                                o(e._l) || (t._l = e._l),
                                o(e._strict) || (t._strict = e._strict),
                                o(e._tzm) || (t._tzm = e._tzm),
                                o(e._isUTC) || (t._isUTC = e._isUTC),
                                o(e._offset) || (t._offset = e._offset),
                                o(e._pf) || (t._pf = m(e)),
                                o(e._locale) || (t._locale = e._locale),
                                0 < v.length)
                        )
                                for (i = 0; i < v.length; i++) o((n = e[(s = v[i])])) || (t[s] = n);
                        return t;
                }
                var e = !1;
                function w(t) {
                        y(this, t), (this._d = new Date(null != t._d ? t._d.getTime() : NaN)), this.isValid() || (this._d = new Date(NaN)), !1 === e && ((e = !0), p.updateOffset(this), (e = !1));
                }
                function b(t) {
                        return t instanceof w || (null != t && null != t._isAMomentObject);
                }
                function x(t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                }
                function k(t) {
                        var e = +t,
                                t = 0;
                        return 0 != e && isFinite(e) && (t = x(e)), t;
                }
                function C(t, e, i) {
                        for (var s = Math.min(t.length, e.length), n = Math.abs(t.length - e.length), o = 0, a = 0; a < s; a++) ((i && t[a] !== e[a]) || (!i && k(t[a]) !== k(e[a]))) && o++;
                        return o + n;
                }
                function D(t) {
                        !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
                }
                function i(n, o) {
                        var a = !0;
                        return d(function () {
                                if ((null != p.deprecationHandler && p.deprecationHandler(null, n), a)) {
                                        for (var t, e = [], i = 0; i < arguments.length; i++) {
                                                if (((t = ""), "object" == typeof arguments[i])) {
                                                        for (var s in ((t += "\n[" + i + "] "), arguments[0])) t += s + ": " + arguments[0][s] + ", ";
                                                        t = t.slice(0, -2);
                                                } else t = arguments[i];
                                                e.push(t);
                                        }
                                        D(n + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + new Error().stack), (a = !1);
                                }
                                return o.apply(this, arguments);
                        }, o);
                }
                var n,
                        S = {};
                function T(t, e) {
                        null != p.deprecationHandler && p.deprecationHandler(t, e), S[t] || (D(e), (S[t] = !0));
                }
                function E(t) {
                        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
                }
                function M(t, e) {
                        var i,
                                s = d({}, t);
                        for (i in e) f(e, i) && (r(t[i]) && r(e[i]) ? ((s[i] = {}), d(s[i], t[i]), d(s[i], e[i])) : null != e[i] ? (s[i] = e[i]) : delete s[i]);
                        for (i in t) f(t, i) && !f(e, i) && r(t[i]) && (s[i] = d({}, s[i]));
                        return s;
                }
                function O(t) {
                        null != t && this.set(t);
                }
                (p.suppressDeprecationWarnings = !1),
                        (p.deprecationHandler = null),
                        (n =
                                Object.keys ||
                                function (t) {
                                        var e,
                                                i = [];
                                        for (e in t) f(t, e) && i.push(e);
                                        return i;
                                });
                var P = {};
                function I(t, e) {
                        var i = t.toLowerCase();
                        P[i] = P[i + "s"] = P[e] = t;
                }
                function $(t) {
                        return "string" == typeof t ? P[t] || P[t.toLowerCase()] : void 0;
                }
                function A(t) {
                        var e,
                                i,
                                s = {};
                        for (i in t) f(t, i) && (e = $(i)) && (s[e] = t[i]);
                        return s;
                }
                var Y = {};
                function N(t, e) {
                        Y[t] = e;
                }
                function F(t, e, i) {
                        var s = "" + Math.abs(t),
                                e = e - s.length;
                        return (0 <= t ? (i ? "+" : "") : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + s;
                }
                var L = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                        W = {},
                        R = {};
                function j(t, e, i, s) {
                        var n =
                                "string" == typeof s
                                        ? function () {
                                                  return this[s]();
                                          }
                                        : s;
                        t && (R[t] = n),
                                e &&
                                        (R[e[0]] = function () {
                                                return F(n.apply(this, arguments), e[1], e[2]);
                                        }),
                                i &&
                                        (R[i] = function () {
                                                return this.localeData().ordinal(n.apply(this, arguments), t);
                                        });
                }
                function z(t, e) {
                        return t.isValid()
                                ? ((e = B(e, t.localeData())),
                                  (W[e] =
                                          W[e] ||
                                          (function (s) {
                                                  for (var t, n = s.match(L), e = 0, o = n.length; e < o; e++) R[n[e]] ? (n[e] = R[n[e]]) : (n[e] = (t = n[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, ""));
                                                  return function (t) {
                                                          for (var e = "", i = 0; i < o; i++) e += E(n[i]) ? n[i].call(t, s) : n[i];
                                                          return e;
                                                  };
                                          })(e)),
                                  W[e](t))
                                : t.localeData().invalidDate();
                }
                function B(t, e) {
                        var i = 5;
                        function s(t) {
                                return e.longDateFormat(t) || t;
                        }
                        for (H.lastIndex = 0; 0 <= i && H.test(t); ) (t = t.replace(H, s)), (H.lastIndex = 0), --i;
                        return t;
                }
                var U = /\d/,
                        V = /\d\d/,
                        q = /\d{3}/,
                        G = /\d{4}/,
                        Q = /[+-]?\d{6}/,
                        Z = /\d\d?/,
                        X = /\d\d\d\d?/,
                        K = /\d\d\d\d\d\d?/,
                        J = /\d{1,3}/,
                        tt = /\d{1,4}/,
                        et = /[+-]?\d{1,6}/,
                        it = /\d+/,
                        st = /[+-]?\d+/,
                        nt = /Z|[+-]\d\d:?\d\d/gi,
                        ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                        rt = {};
                function lt(t, i, s) {
                        rt[t] = E(i)
                                ? i
                                : function (t, e) {
                                          return t && s ? s : i;
                                  };
                }
                function ht(t) {
                        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                }
                var ct = {};
                function dt(t, i) {
                        var e,
                                s = i;
                        for (
                                "string" == typeof t && (t = [t]),
                                        l(i) &&
                                                (s = function (t, e) {
                                                        e[i] = k(t);
                                                }),
                                        e = 0;
                                e < t.length;
                                e++
                        )
                                ct[t[e]] = s;
                }
                function ut(t, n) {
                        dt(t, function (t, e, i, s) {
                                (i._w = i._w || {}), n(t, i._w, i, s);
                        });
                }
                var ft = 0,
                        pt = 1,
                        mt = 2,
                        gt = 3,
                        _t = 4,
                        vt = 5,
                        yt = 6,
                        wt = 7,
                        bt = 8;
                function xt(t) {
                        return kt(t) ? 366 : 365;
                }
                function kt(t) {
                        return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
                }
                j("Y", 0, 0, function () {
                        var t = this.year();
                        return t <= 9999 ? "" + t : "+" + t;
                }),
                        j(0, ["YY", 2], 0, function () {
                                return this.year() % 100;
                        }),
                        j(0, ["YYYY", 4], 0, "year"),
                        j(0, ["YYYYY", 5], 0, "year"),
                        j(0, ["YYYYYY", 6, !0], 0, "year"),
                        I("year", "y"),
                        N("year", 1),
                        lt("Y", st),
                        lt("YY", Z, V),
                        lt("YYYY", tt, G),
                        lt("YYYYY", et, Q),
                        lt("YYYYYY", et, Q),
                        dt(["YYYYY", "YYYYYY"], ft),
                        dt("YYYY", function (t, e) {
                                e[ft] = 2 === t.length ? p.parseTwoDigitYear(t) : k(t);
                        }),
                        dt("YY", function (t, e) {
                                e[ft] = p.parseTwoDigitYear(t);
                        }),
                        dt("Y", function (t, e) {
                                e[ft] = parseInt(t, 10);
                        }),
                        (p.parseTwoDigitYear = function (t) {
                                return k(t) + (68 < k(t) ? 1900 : 2e3);
                        });
                var Ct,
                        Dt = St("FullYear", !0);
                function St(e, i) {
                        return function (t) {
                                return null != t ? (Et(this, e, t), p.updateOffset(this, i), this) : Tt(this, e);
                        };
                }
                function Tt(t, e) {
                        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
                }
                function Et(t, e, i) {
                        t.isValid() &&
                                !isNaN(i) &&
                                ("FullYear" === e && kt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Mt(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i));
                }
                function Mt(t, e) {
                        if (isNaN(t) || isNaN(e)) return NaN;
                        var i = ((e % 12) + 12) % 12;
                        return (t += (e - i) / 12), 1 == i ? (kt(t) ? 29 : 28) : 31 - ((i % 7) % 2);
                }
                (Ct =
                        Array.prototype.indexOf ||
                        function (t) {
                                for (var e = 0; e < this.length; ++e) if (this[e] === t) return e;
                                return -1;
                        }),
                        j("M", ["MM", 2], "Mo", function () {
                                return this.month() + 1;
                        }),
                        j("MMM", 0, 0, function (t) {
                                return this.localeData().monthsShort(this, t);
                        }),
                        j("MMMM", 0, 0, function (t) {
                                return this.localeData().months(this, t);
                        }),
                        I("month", "M"),
                        N("month", 8),
                        lt("M", Z),
                        lt("MM", Z, V),
                        lt("MMM", function (t, e) {
                                return e.monthsShortRegex(t);
                        }),
                        lt("MMMM", function (t, e) {
                                return e.monthsRegex(t);
                        }),
                        dt(["M", "MM"], function (t, e) {
                                e[pt] = k(t) - 1;
                        }),
                        dt(["MMM", "MMMM"], function (t, e, i, s) {
                                s = i._locale.monthsParse(t, s, i._strict);
                                null != s ? (e[pt] = s) : (m(i).invalidMonth = t);
                        });
                var Ot = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        It = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
                function $t(t, e) {
                        var i;
                        if (!t.isValid()) return t;
                        if ("string" == typeof e)
                                if (/^\d+$/.test(e)) e = k(e);
                                else if (!l((e = t.localeData().monthsParse(e)))) return t;
                        return (i = Math.min(t.date(), Mt(t.year(), e))), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t;
                }
                function At(t) {
                        return null != t ? ($t(this, t), p.updateOffset(this, !0), this) : Tt(this, "Month");
                }
                var Yt = at,
                        Nt = at;
                function Ft() {
                        function t(t, e) {
                                return e.length - t.length;
                        }
                        for (var e, i = [], s = [], n = [], o = 0; o < 12; o++) (e = u([2e3, o])), i.push(this.monthsShort(e, "")), s.push(this.months(e, "")), n.push(this.months(e, "")), n.push(this.monthsShort(e, ""));
                        for (i.sort(t), s.sort(t), n.sort(t), o = 0; o < 12; o++) (i[o] = ht(i[o])), (s[o] = ht(s[o]));
                        for (o = 0; o < 24; o++) n[o] = ht(n[o]);
                        (this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i")),
                                (this._monthsShortRegex = this._monthsRegex),
                                (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
                                (this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"));
                }
                function Lt(t) {
                        var e;
                        return (
                                t < 100 && 0 <= t
                                        ? (((e = Array.prototype.slice.call(arguments))[0] = t + 400), (e = new Date(Date.UTC.apply(null, e))), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t))
                                        : (e = new Date(Date.UTC.apply(null, arguments))),
                                e
                        );
                }
                function Ht(t, e, i) {
                        i = 7 + e - i;
                        return (-(7 + Lt(t, 0, i).getUTCDay() - e) % 7) + i - 1;
                }
                function Wt(t, e, i, s, n) {
                        var o,
                                n = 1 + 7 * (e - 1) + ((7 + i - s) % 7) + Ht(t, s, n),
                                n = n <= 0 ? xt((o = t - 1)) + n : n > xt(t) ? ((o = t + 1), n - xt(t)) : ((o = t), n);
                        return { year: o, dayOfYear: n };
                }
                function Rt(t, e, i) {
                        var s,
                                n,
                                o = Ht(t.year(), e, i),
                                o = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                        return o < 1 ? (s = o + jt((n = t.year() - 1), e, i)) : o > jt(t.year(), e, i) ? ((s = o - jt(t.year(), e, i)), (n = t.year() + 1)) : ((n = t.year()), (s = o)), { week: s, year: n };
                }
                function jt(t, e, i) {
                        var s = Ht(t, e, i),
                                i = Ht(t + 1, e, i);
                        return (xt(t) - s + i) / 7;
                }
                function zt(t, e) {
                        return t.slice(e, 7).concat(t.slice(0, e));
                }
                j("w", ["ww", 2], "wo", "week"),
                        j("W", ["WW", 2], "Wo", "isoWeek"),
                        I("week", "w"),
                        I("isoWeek", "W"),
                        N("week", 5),
                        N("isoWeek", 5),
                        lt("w", Z),
                        lt("ww", Z, V),
                        lt("W", Z),
                        lt("WW", Z, V),
                        ut(["w", "ww", "W", "WW"], function (t, e, i, s) {
                                e[s.substr(0, 1)] = k(t);
                        }),
                        j("d", 0, "do", "day"),
                        j("dd", 0, 0, function (t) {
                                return this.localeData().weekdaysMin(this, t);
                        }),
                        j("ddd", 0, 0, function (t) {
                                return this.localeData().weekdaysShort(this, t);
                        }),
                        j("dddd", 0, 0, function (t) {
                                return this.localeData().weekdays(this, t);
                        }),
                        j("e", 0, 0, "weekday"),
                        j("E", 0, 0, "isoWeekday"),
                        I("day", "d"),
                        I("weekday", "e"),
                        I("isoWeekday", "E"),
                        N("day", 11),
                        N("weekday", 11),
                        N("isoWeekday", 11),
                        lt("d", Z),
                        lt("e", Z),
                        lt("E", Z),
                        lt("dd", function (t, e) {
                                return e.weekdaysMinRegex(t);
                        }),
                        lt("ddd", function (t, e) {
                                return e.weekdaysShortRegex(t);
                        }),
                        lt("dddd", function (t, e) {
                                return e.weekdaysRegex(t);
                        }),
                        ut(["dd", "ddd", "dddd"], function (t, e, i, s) {
                                s = i._locale.weekdaysParse(t, s, i._strict);
                                null != s ? (e.d = s) : (m(i).invalidWeekday = t);
                        }),
                        ut(["d", "e", "E"], function (t, e, i, s) {
                                e[s] = k(t);
                        });
                var Bt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        Ut = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        Vt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        qt = at,
                        Gt = at,
                        Qt = at;
                function Zt() {
                        function t(t, e) {
                                return e.length - t.length;
                        }
                        for (var e, i, s, n = [], o = [], a = [], r = [], l = 0; l < 7; l++)
                                (s = u([2e3, 1]).day(l)), (e = this.weekdaysMin(s, "")), (i = this.weekdaysShort(s, "")), (s = this.weekdays(s, "")), n.push(e), o.push(i), a.push(s), r.push(e), r.push(i), r.push(s);
                        for (n.sort(t), o.sort(t), a.sort(t), r.sort(t), l = 0; l < 7; l++) (o[l] = ht(o[l])), (a[l] = ht(a[l])), (r[l] = ht(r[l]));
                        (this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i")),
                                (this._weekdaysShortRegex = this._weekdaysRegex),
                                (this._weekdaysMinRegex = this._weekdaysRegex),
                                (this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")),
                                (this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")),
                                (this._weekdaysMinStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"));
                }
                function Xt() {
                        return this.hours() % 12 || 12;
                }
                function Kt(t, e) {
                        j(t, 0, 0, function () {
                                return this.localeData().meridiem(this.hours(), this.minutes(), e);
                        });
                }
                function Jt(t, e) {
                        return e._meridiemParse;
                }
                j("H", ["HH", 2], 0, "hour"),
                        j("h", ["hh", 2], 0, Xt),
                        j("k", ["kk", 2], 0, function () {
                                return this.hours() || 24;
                        }),
                        j("hmm", 0, 0, function () {
                                return "" + Xt.apply(this) + F(this.minutes(), 2);
                        }),
                        j("hmmss", 0, 0, function () {
                                return "" + Xt.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2);
                        }),
                        j("Hmm", 0, 0, function () {
                                return "" + this.hours() + F(this.minutes(), 2);
                        }),
                        j("Hmmss", 0, 0, function () {
                                return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2);
                        }),
                        Kt("a", !0),
                        Kt("A", !1),
                        I("hour", "h"),
                        N("hour", 13),
                        lt("a", Jt),
                        lt("A", Jt),
                        lt("H", Z),
                        lt("h", Z),
                        lt("k", Z),
                        lt("HH", Z, V),
                        lt("hh", Z, V),
                        lt("kk", Z, V),
                        lt("hmm", X),
                        lt("hmmss", K),
                        lt("Hmm", X),
                        lt("Hmmss", K),
                        dt(["H", "HH"], gt),
                        dt(["k", "kk"], function (t, e, i) {
                                t = k(t);
                                e[gt] = 24 === t ? 0 : t;
                        }),
                        dt(["a", "A"], function (t, e, i) {
                                (i._isPm = i._locale.isPM(t)), (i._meridiem = t);
                        }),
                        dt(["h", "hh"], function (t, e, i) {
                                (e[gt] = k(t)), (m(i).bigHour = !0);
                        }),
                        dt("hmm", function (t, e, i) {
                                var s = t.length - 2;
                                (e[gt] = k(t.substr(0, s))), (e[_t] = k(t.substr(s))), (m(i).bigHour = !0);
                        }),
                        dt("hmmss", function (t, e, i) {
                                var s = t.length - 4,
                                        n = t.length - 2;
                                (e[gt] = k(t.substr(0, s))), (e[_t] = k(t.substr(s, 2))), (e[vt] = k(t.substr(n))), (m(i).bigHour = !0);
                        }),
                        dt("Hmm", function (t, e, i) {
                                var s = t.length - 2;
                                (e[gt] = k(t.substr(0, s))), (e[_t] = k(t.substr(s)));
                        }),
                        dt("Hmmss", function (t, e, i) {
                                var s = t.length - 4,
                                        n = t.length - 2;
                                (e[gt] = k(t.substr(0, s))), (e[_t] = k(t.substr(s, 2))), (e[vt] = k(t.substr(n)));
                        });
                var te,
                        ee = St("Hours", !0),
                        ie = {
                                calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
                                longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
                                invalidDate: "Invalid date",
                                ordinal: "%d",
                                dayOfMonthOrdinalParse: /\d{1,2}/,
                                relativeTime: {
                                        future: "in %s",
                                        past: "%s ago",
                                        s: "a few seconds",
                                        ss: "%d seconds",
                                        m: "a minute",
                                        mm: "%d minutes",
                                        h: "an hour",
                                        hh: "%d hours",
                                        d: "a day",
                                        dd: "%d days",
                                        M: "a month",
                                        MM: "%d months",
                                        y: "a year",
                                        yy: "%d years",
                                },
                                months: Pt,
                                monthsShort: It,
                                week: { dow: 0, doy: 6 },
                                weekdays: Bt,
                                weekdaysMin: Vt,
                                weekdaysShort: Ut,
                                meridiemParse: /[ap]\.?m?\.?/i,
                        },
                        se = {},
                        ne = {};
                function oe(t) {
                        return t && t.toLowerCase().replace("_", "-");
                }
                function ae(t) {
                        var e;
                        if (!se[t] && "undefined" != typeof module && module && module.exports)
                                try {
                                        (e = te._abbr), require("./locale/" + t), re(e);
                                } catch (t) {}
                        return se[t];
                }
                function re(t, e) {
                        return t && ((e = o(e) ? he(t) : le(t, e)) ? (te = e) : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), te._abbr;
                }
                function le(t, e) {
                        if (null === e) return delete se[t], null;
                        var i,
                                s = ie;
                        if (((e.abbr = t), null != se[t]))
                                T(
                                        "defineLocaleOverride",
                                        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                                ),
                                        (s = se[t]._config);
                        else if (null != e.parentLocale)
                                if (null != se[e.parentLocale]) s = se[e.parentLocale]._config;
                                else {
                                        if (null == (i = ae(e.parentLocale))) return ne[e.parentLocale] || (ne[e.parentLocale] = []), ne[e.parentLocale].push({ name: t, config: e }), null;
                                        s = i._config;
                                }
                        return (
                                (se[t] = new O(M(s, e))),
                                ne[t] &&
                                        ne[t].forEach(function (t) {
                                                le(t.name, t.config);
                                        }),
                                re(t),
                                se[t]
                        );
                }
                function he(t) {
                        var e;
                        if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)) return te;
                        if (!a(t)) {
                                if ((e = ae(t))) return e;
                                t = [t];
                        }
                        return (function (t) {
                                for (var e, i, s, n, o = 0; o < t.length; ) {
                                        for (e = (n = oe(t[o]).split("-")).length, i = (i = oe(t[o + 1])) ? i.split("-") : null; 0 < e; ) {
                                                if ((s = ae(n.slice(0, e).join("-")))) return s;
                                                if (i && i.length >= e && C(n, i, !0) >= e - 1) break;
                                                e--;
                                        }
                                        o++;
                                }
                                return te;
                        })(t);
                }
                function ce(t) {
                        var e = t._a;
                        return (
                                e &&
                                        -2 === m(t).overflow &&
                                        ((e =
                                                e[pt] < 0 || 11 < e[pt]
                                                        ? pt
                                                        : e[mt] < 1 || e[mt] > Mt(e[ft], e[pt])
                                                        ? mt
                                                        : e[gt] < 0 || 24 < e[gt] || (24 === e[gt] && (0 !== e[_t] || 0 !== e[vt] || 0 !== e[yt]))
                                                        ? gt
                                                        : e[_t] < 0 || 59 < e[_t]
                                                        ? _t
                                                        : e[vt] < 0 || 59 < e[vt]
                                                        ? vt
                                                        : e[yt] < 0 || 999 < e[yt]
                                                        ? yt
                                                        : -1),
                                        m(t)._overflowDayOfYear && (e < ft || mt < e) && (e = mt),
                                        m(t)._overflowWeeks && -1 === e && (e = wt),
                                        m(t)._overflowWeekday && -1 === e && (e = bt),
                                        (m(t).overflow = e)),
                                t
                        );
                }
                function de(t, e, i) {
                        return null != t ? t : null != e ? e : i;
                }
                function ue(t) {
                        var e,
                                i,
                                s,
                                n,
                                o,
                                a,
                                r,
                                l,
                                h,
                                c = [];
                        if (!t._d) {
                                var d = t,
                                        u = new Date(p.now()),
                                        f = d._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()];
                                for (
                                        t._w &&
                                                null == t._a[mt] &&
                                                null == t._a[pt] &&
                                                (null != (d = (s = t)._w).GG || null != d.W || null != d.E
                                                        ? ((o = 1), (a = 4), (l = de(d.GG, s._a[ft], Rt(Se(), 1, 4).year)), (h = de(d.W, 1)), ((n = de(d.E, 1)) < 1 || 7 < n) && (r = !0))
                                                        : ((o = s._locale._week.dow),
                                                          (a = s._locale._week.doy),
                                                          (u = Rt(Se(), o, a)),
                                                          (l = de(d.gg, s._a[ft], u.year)),
                                                          (h = de(d.w, u.week)),
                                                          null != d.d ? ((n = d.d) < 0 || 6 < n) && (r = !0) : null != d.e ? ((n = d.e + o), (d.e < 0 || 6 < d.e) && (r = !0)) : (n = o)),
                                                h < 1 || h > jt(l, o, a) ? (m(s)._overflowWeeks = !0) : null != r ? (m(s)._overflowWeekday = !0) : ((a = Wt(l, h, n, o, a)), (s._a[ft] = a.year), (s._dayOfYear = a.dayOfYear))),
                                                null != t._dayOfYear &&
                                                        ((i = de(t._a[ft], f[ft])),
                                                        (t._dayOfYear > xt(i) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0),
                                                        (i = Lt(i, 0, t._dayOfYear)),
                                                        (t._a[pt] = i.getUTCMonth()),
                                                        (t._a[mt] = i.getUTCDate())),
                                                e = 0;
                                        e < 3 && null == t._a[e];
                                        ++e
                                )
                                        t._a[e] = c[e] = f[e];
                                for (; e < 7; e++) t._a[e] = c[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
                                24 === t._a[gt] && 0 === t._a[_t] && 0 === t._a[vt] && 0 === t._a[yt] && ((t._nextDay = !0), (t._a[gt] = 0)),
                                        (t._d = (t._useUTC
                                                ? Lt
                                                : function (t, e, i, s, n, o, a) {
                                                          var r;
                                                          return t < 100 && 0 <= t ? ((r = new Date(t + 400, e, i, s, n, o, a)), isFinite(r.getFullYear()) && r.setFullYear(t)) : (r = new Date(t, e, i, s, n, o, a)), r;
                                                  }
                                        ).apply(null, c)),
                                        (i = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
                                        null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                                        t._nextDay && (t._a[gt] = 24),
                                        t._w && void 0 !== t._w.d && t._w.d !== i && (m(t).weekdayMismatch = !0);
                        }
                }
                var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        pe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        me = /Z|[+-]\d\d(?::?\d\d)?/,
                        ge = [
                                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                                ["YYYY-DDD", /\d{4}-\d{3}/],
                                ["YYYY-MM", /\d{4}-\d\d/, !1],
                                ["YYYYYYMMDD", /[+-]\d{10}/],
                                ["YYYYMMDD", /\d{8}/],
                                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                                ["YYYYDDD", /\d{7}/],
                        ],
                        _e = [
                                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                                ["HH:mm", /\d\d:\d\d/],
                                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                                ["HHmmss", /\d\d\d\d\d\d/],
                                ["HHmm", /\d\d\d\d/],
                                ["HH", /\d\d/],
                        ],
                        ve = /^\/?Date\((\-?\d+)/i;
                function ye(t) {
                        var e,
                                i,
                                s,
                                n,
                                o,
                                a,
                                r = t._i,
                                l = fe.exec(r) || pe.exec(r);
                        if (l) {
                                for (m(t).iso = !0, e = 0, i = ge.length; e < i; e++)
                                        if (ge[e][1].exec(l[1])) {
                                                (n = ge[e][0]), (s = !1 !== ge[e][2]);
                                                break;
                                        }
                                if (null == n) return (t._isValid = !1);
                                if (l[3]) {
                                        for (e = 0, i = _e.length; e < i; e++)
                                                if (_e[e][1].exec(l[3])) {
                                                        o = (l[2] || " ") + _e[e][0];
                                                        break;
                                                }
                                        if (null == o) return (t._isValid = !1);
                                }
                                if (!s && null != o) return (t._isValid = !1);
                                if (l[4]) {
                                        if (!me.exec(l[4])) return (t._isValid = !1);
                                        a = "Z";
                                }
                                (t._f = n + (o || "") + (a || "")), ke(t);
                        } else t._isValid = !1;
                }
                var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
                var be = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
                function xe(t) {
                        var e,
                                i,
                                s,
                                n,
                                o,
                                a,
                                r = we.exec(
                                        t._i
                                                .replace(/\([^)]*\)|[\n\t]/g, " ")
                                                .replace(/(\s\s+)/g, " ")
                                                .replace(/^\s\s*/, "")
                                                .replace(/\s\s*$/, "")
                                );
                        r
                                ? ((e = r[4]),
                                  (i = r[3]),
                                  (s = r[2]),
                                  (n = r[5]),
                                  (o = r[6]),
                                  (a = r[7]),
                                  (o = [(e = parseInt(e, 10)) <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e, It.indexOf(i), parseInt(s, 10), parseInt(n, 10), parseInt(o, 10)]),
                                  a && o.push(parseInt(a, 10)),
                                  (n = s = o),
                                  (a = t),
                                  (o = r[1]) && Ut.indexOf(o) !== new Date(n[0], n[1], n[2]).getDay()
                                          ? ((m(a).weekdayMismatch = !0), (a._isValid = !1))
                                          : ((t._a = s),
                                            (t._tzm = (function (t, e, i) {
                                                    if (t) return be[t];
                                                    if (e) return 0;
                                                    (e = parseInt(i, 10)), (i = e % 100);
                                                    return ((e - i) / 100) * 60 + i;
                                            })(r[8], r[9], r[10])),
                                            (t._d = Lt.apply(null, t._a)),
                                            t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                                            (m(t).rfc2822 = !0)))
                                : (t._isValid = !1);
                }
                function ke(t) {
                        if (t._f !== p.ISO_8601)
                                if (t._f !== p.RFC_2822) {
                                        (t._a = []), (m(t).empty = !0);
                                        for (var e, i, s, n = "" + t._i, o = n.length, a = 0, r = B(t._f, t._locale).match(L) || [], l = 0; l < r.length; l++)
                                                (i = r[l]),
                                                        (e = (n.match(
                                                                ((u = t),
                                                                f(rt, (d = i))
                                                                        ? rt[d](u._strict, u._locale)
                                                                        : new RegExp(
                                                                                  ht(
                                                                                          d.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, s, n) {
                                                                                                  return e || i || s || n;
                                                                                          })
                                                                                  )
                                                                          ))
                                                        ) || [])[0]) && (0 < (s = n.substr(0, n.indexOf(e))).length && m(t).unusedInput.push(s), (n = n.slice(n.indexOf(e) + e.length)), (a += e.length)),
                                                        R[i] ? (e ? (m(t).empty = !1) : m(t).unusedTokens.push(i), (u = i), (d = t), null != (s = e) && f(ct, u) && ct[u](s, d._a, d, u)) : t._strict && !e && m(t).unusedTokens.push(i);
                                        (m(t).charsLeftOver = o - a),
                                                0 < n.length && m(t).unusedInput.push(n),
                                                t._a[gt] <= 12 && !0 === m(t).bigHour && 0 < t._a[gt] && (m(t).bigHour = void 0),
                                                (m(t).parsedDateParts = t._a.slice(0)),
                                                (m(t).meridiem = t._meridiem),
                                                (t._a[gt] =
                                                        ((h = t._locale),
                                                        (c = t._a[gt]),
                                                        null == (o = t._meridiem) ? c : null != h.meridiemHour ? h.meridiemHour(c, o) : (null != h.isPM && ((o = h.isPM(o)) && c < 12 && (c += 12), o || 12 !== c || (c = 0)), c))),
                                                ue(t),
                                                ce(t);
                                } else xe(t);
                        else ye(t);
                        var h, c, d, u;
                }
                function Ce(t) {
                        var e,
                                i,
                                s = t._i,
                                n = t._f;
                        return (
                                (t._locale = t._locale || he(t._l)),
                                null === s || (void 0 === n && "" === s)
                                        ? _({ nullInput: !0 })
                                        : ("string" == typeof s && (t._i = s = t._locale.preparse(s)),
                                          b(s)
                                                  ? new w(ce(s))
                                                  : (h(s)
                                                            ? (t._d = s)
                                                            : a(n)
                                                            ? (function (t) {
                                                                      var e, i, s, n, o;
                                                                      if (0 === t._f.length) return (m(t).invalidFormat = !0), (t._d = new Date(NaN));
                                                                      for (n = 0; n < t._f.length; n++)
                                                                              (o = 0),
                                                                                      (e = y({}, t)),
                                                                                      null != t._useUTC && (e._useUTC = t._useUTC),
                                                                                      (e._f = t._f[n]),
                                                                                      ke(e),
                                                                                      g(e) && ((o += m(e).charsLeftOver), (o += 10 * m(e).unusedTokens.length), (m(e).score = o), (null == s || o < s) && ((s = o), (i = e)));
                                                                      d(t, i || e);
                                                              })(t)
                                                            : n
                                                            ? ke(t)
                                                            : o((n = (s = t)._i))
                                                            ? (s._d = new Date(p.now()))
                                                            : h(n)
                                                            ? (s._d = new Date(n.valueOf()))
                                                            : "string" == typeof n
                                                            ? ((e = s),
                                                              null === (i = ve.exec(e._i))
                                                                      ? (ye(e), !1 === e._isValid && (delete e._isValid, xe(e), !1 === e._isValid && (delete e._isValid, p.createFromInputFallback(e))))
                                                                      : (e._d = new Date(+i[1])))
                                                            : a(n)
                                                            ? ((s._a = c(n.slice(0), function (t) {
                                                                      return parseInt(t, 10);
                                                              })),
                                                              ue(s))
                                                            : r(n)
                                                            ? (e = s)._d ||
                                                              ((i = A(e._i)),
                                                              (e._a = c([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (t) {
                                                                      return t && parseInt(t, 10);
                                                              })),
                                                              ue(e))
                                                            : l(n)
                                                            ? (s._d = new Date(n))
                                                            : p.createFromInputFallback(s),
                                                    g(t) || (t._d = null),
                                                    t))
                        );
                }
                function De(t, e, i, s, n) {
                        var o = {};
                        return (
                                (!0 !== i && !1 !== i) || ((s = i), (i = void 0)),
                                ((r(t) &&
                                        (function (t) {
                                                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                                                for (var e in t) if (t.hasOwnProperty(e)) return;
                                                return 1;
                                        })(t)) ||
                                        (a(t) && 0 === t.length)) &&
                                        (t = void 0),
                                (o._isAMomentObject = !0),
                                (o._useUTC = o._isUTC = n),
                                (o._l = i),
                                (o._i = t),
                                (o._f = e),
                                (o._strict = s),
                                (o = new w(ce(Ce(o))))._nextDay && (o.add(1, "d"), (o._nextDay = void 0)),
                                o
                        );
                }
                function Se(t, e, i, s) {
                        return De(t, e, i, s, !1);
                }
                (p.createFromInputFallback = i(
                        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
                        function (t) {
                                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
                        }
                )),
                        (p.ISO_8601 = function () {}),
                        (p.RFC_2822 = function () {});
                var Te = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                                var t = Se.apply(null, arguments);
                                return this.isValid() && t.isValid() ? (t < this ? this : t) : _();
                        }),
                        Ee = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                                var t = Se.apply(null, arguments);
                                return this.isValid() && t.isValid() ? (this < t ? this : t) : _();
                        });
                function Me(t, e) {
                        var i, s;
                        if ((1 === e.length && a(e[0]) && (e = e[0]), !e.length)) return Se();
                        for (i = e[0], s = 1; s < e.length; ++s) (e[s].isValid() && !e[s][t](i)) || (i = e[s]);
                        return i;
                }
                var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                function Pe(t) {
                        var e = A(t),
                                i = e.year || 0,
                                s = e.quarter || 0,
                                n = e.month || 0,
                                o = e.week || e.isoWeek || 0,
                                a = e.day || 0,
                                r = e.hour || 0,
                                l = e.minute || 0,
                                h = e.second || 0,
                                t = e.millisecond || 0;
                        (this._isValid = (function (t) {
                                for (var e in t) if (-1 === Ct.call(Oe, e) || (null != t[e] && isNaN(t[e]))) return !1;
                                for (var i = !1, s = 0; s < Oe.length; ++s)
                                        if (t[Oe[s]]) {
                                                if (i) return !1;
                                                parseFloat(t[Oe[s]]) !== k(t[Oe[s]]) && (i = !0);
                                        }
                                return !0;
                        })(e)),
                                (this._milliseconds = +t + 1e3 * h + 6e4 * l + 1e3 * r * 60 * 60),
                                (this._days = +a + 7 * o),
                                (this._months = +n + 3 * s + 12 * i),
                                (this._data = {}),
                                (this._locale = he()),
                                this._bubble();
                }
                function Ie(t) {
                        return t instanceof Pe;
                }
                function $e(t) {
                        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
                }
                function Ae(t, i) {
                        j(t, 0, 0, function () {
                                var t = this.utcOffset(),
                                        e = "+";
                                return t < 0 && ((t = -t), (e = "-")), e + F(~~(t / 60), 2) + i + F(~~t % 60, 2);
                        });
                }
                Ae("Z", ":"),
                        Ae("ZZ", ""),
                        lt("Z", ot),
                        lt("ZZ", ot),
                        dt(["Z", "ZZ"], function (t, e, i) {
                                (i._useUTC = !0), (i._tzm = Ne(ot, t));
                        });
                var Ye = /([\+\-]|\d\d)/gi;
                function Ne(t, e) {
                        e = (e || "").match(t);
                        if (null === e) return null;
                        (t = ((e[e.length - 1] || []) + "").match(Ye) || ["-", 0, 0]), (e = 60 * t[1] + k(t[2]));
                        return 0 === e ? 0 : "+" === t[0] ? e : -e;
                }
                function Fe(t, e) {
                        var i;
                        return e._isUTC ? ((i = e.clone()), (e = (b(t) || h(t) ? t : Se(t)).valueOf() - i.valueOf()), i._d.setTime(i._d.valueOf() + e), p.updateOffset(i, !1), i) : Se(t).local();
                }
                function Le(t) {
                        return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
                }
                function He() {
                        return !!this.isValid() && this._isUTC && 0 === this._offset;
                }
                p.updateOffset = function () {};
                var We = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                        Re = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                function je(t, e) {
                        var i,
                                s,
                                n = t,
                                o = null;
                        return (
                                Ie(t)
                                        ? (n = { ms: t._milliseconds, d: t._days, M: t._months })
                                        : l(t)
                                        ? ((n = {}), e ? (n[e] = t) : (n.milliseconds = t))
                                        : (o = We.exec(t))
                                        ? ((i = "-" === o[1] ? -1 : 1), (n = { y: 0, d: k(o[mt]) * i, h: k(o[gt]) * i, m: k(o[_t]) * i, s: k(o[vt]) * i, ms: k($e(1e3 * o[yt])) * i }))
                                        : (o = Re.exec(t))
                                        ? ((i = "-" === o[1] ? -1 : 1), (n = { y: ze(o[2], i), M: ze(o[3], i), w: ze(o[4], i), d: ze(o[5], i), h: ze(o[6], i), m: ze(o[7], i), s: ze(o[8], i) }))
                                        : null == n
                                        ? (n = {})
                                        : "object" == typeof n &&
                                          ("from" in n || "to" in n) &&
                                          ((o = Se(n.from)),
                                          (i = Se(n.to)),
                                          (s = o.isValid() && i.isValid() ? ((i = Fe(i, o)), o.isBefore(i) ? (s = Be(o, i)) : (((s = Be(i, o)).milliseconds = -s.milliseconds), (s.months = -s.months)), s) : { milliseconds: 0, months: 0 }),
                                          ((n = {}).ms = s.milliseconds),
                                          (n.M = s.months)),
                                (n = new Pe(n)),
                                Ie(t) && f(t, "_locale") && (n._locale = t._locale),
                                n
                        );
                }
                function ze(t, e) {
                        t = t && parseFloat(t.replace(",", "."));
                        return (isNaN(t) ? 0 : t) * e;
                }
                function Be(t, e) {
                        var i = {};
                        return (i.months = e.month() - t.month() + 12 * (e.year() - t.year())), t.clone().add(i.months, "M").isAfter(e) && --i.months, (i.milliseconds = +e - +t.clone().add(i.months, "M")), i;
                }
                function Ue(s, n) {
                        return function (t, e) {
                                var i;
                                return (
                                        null === e ||
                                                isNaN(+e) ||
                                                (T(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                                                (i = t),
                                                (t = e),
                                                (e = i)),
                                        Ve(this, je((t = "string" == typeof t ? +t : t), e), s),
                                        this
                                );
                        };
                }
                function Ve(t, e, i, s) {
                        var n = e._milliseconds,
                                o = $e(e._days),
                                e = $e(e._months);
                        t.isValid() && ((s = null == s || s), e && $t(t, Tt(t, "Month") + e * i), o && Et(t, "Date", Tt(t, "Date") + o * i), n && t._d.setTime(t._d.valueOf() + n * i), s && p.updateOffset(t, o || e));
                }
                (je.fn = Pe.prototype),
                        (je.invalid = function () {
                                return je(NaN);
                        });
                var qe = Ue(1, "add"),
                        at = Ue(-1, "subtract");
                function Ge(t, e) {
                        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                                s = t.clone().add(i, "months");
                        return -(i + (e - s < 0 ? (e - s) / (s - t.clone().add(i - 1, "months")) : (e - s) / (t.clone().add(1 + i, "months") - s))) || 0;
                }
                function Qe(t) {
                        return void 0 === t ? this._locale._abbr : (null != (t = he(t)) && (this._locale = t), this);
                }
                (p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"), (p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
                X = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                        return void 0 === t ? this.localeData() : this.locale(t);
                });
                function Ze() {
                        return this._locale;
                }
                var Xe = 126227808e5;
                function Ke(t, e) {
                        return ((t % e) + e) % e;
                }
                function Je(t, e, i) {
                        return t < 100 && 0 <= t ? new Date(t + 400, e, i) - Xe : new Date(t, e, i).valueOf();
                }
                function ti(t, e, i) {
                        return t < 100 && 0 <= t ? Date.UTC(t + 400, e, i) - Xe : Date.UTC(t, e, i);
                }
                function ei(t, e) {
                        j(0, [t, t.length], 0, e);
                }
                function ii(t, e, i, s, n) {
                        var o;
                        return null == t
                                ? Rt(this, s, n).year
                                : ((o = jt(t, s, n)) < e && (e = o),
                                  function (t, e, i, s, n) {
                                          (n = Wt(t, e, i, s, n)), (n = Lt(n.year, 0, n.dayOfYear));
                                          return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this;
                                  }.call(this, t, e, i, s, n));
                }
                j(0, ["gg", 2], 0, function () {
                        return this.weekYear() % 100;
                }),
                        j(0, ["GG", 2], 0, function () {
                                return this.isoWeekYear() % 100;
                        }),
                        ei("gggg", "weekYear"),
                        ei("ggggg", "weekYear"),
                        ei("GGGG", "isoWeekYear"),
                        ei("GGGGG", "isoWeekYear"),
                        I("weekYear", "gg"),
                        I("isoWeekYear", "GG"),
                        N("weekYear", 1),
                        N("isoWeekYear", 1),
                        lt("G", st),
                        lt("g", st),
                        lt("GG", Z, V),
                        lt("gg", Z, V),
                        lt("GGGG", tt, G),
                        lt("gggg", tt, G),
                        lt("GGGGG", et, Q),
                        lt("ggggg", et, Q),
                        ut(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, s) {
                                e[s.substr(0, 2)] = k(t);
                        }),
                        ut(["gg", "GG"], function (t, e, i, s) {
                                e[s] = p.parseTwoDigitYear(t);
                        }),
                        j("Q", 0, "Qo", "quarter"),
                        I("quarter", "Q"),
                        N("quarter", 7),
                        lt("Q", U),
                        dt("Q", function (t, e) {
                                e[pt] = 3 * (k(t) - 1);
                        }),
                        j("D", ["DD", 2], "Do", "date"),
                        I("date", "D"),
                        N("date", 9),
                        lt("D", Z),
                        lt("DD", Z, V),
                        lt("Do", function (t, e) {
                                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
                        }),
                        dt(["D", "DD"], mt),
                        dt("Do", function (t, e) {
                                e[mt] = k(t.match(Z)[0]);
                        });
                K = St("Date", !0);
                j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
                        I("dayOfYear", "DDD"),
                        N("dayOfYear", 4),
                        lt("DDD", J),
                        lt("DDDD", q),
                        dt(["DDD", "DDDD"], function (t, e, i) {
                                i._dayOfYear = k(t);
                        }),
                        j("m", ["mm", 2], 0, "minute"),
                        I("minute", "m"),
                        N("minute", 14),
                        lt("m", Z),
                        lt("mm", Z, V),
                        dt(["m", "mm"], _t);
                Pt = St("Minutes", !1);
                j("s", ["ss", 2], 0, "second"), I("second", "s"), N("second", 15), lt("s", Z), lt("ss", Z, V), dt(["s", "ss"], vt);
                var si,
                        Bt = St("Seconds", !1);
                for (
                        j("S", 0, 0, function () {
                                return ~~(this.millisecond() / 100);
                        }),
                                j(0, ["SS", 2], 0, function () {
                                        return ~~(this.millisecond() / 10);
                                }),
                                j(0, ["SSS", 3], 0, "millisecond"),
                                j(0, ["SSSS", 4], 0, function () {
                                        return 10 * this.millisecond();
                                }),
                                j(0, ["SSSSS", 5], 0, function () {
                                        return 100 * this.millisecond();
                                }),
                                j(0, ["SSSSSS", 6], 0, function () {
                                        return 1e3 * this.millisecond();
                                }),
                                j(0, ["SSSSSSS", 7], 0, function () {
                                        return 1e4 * this.millisecond();
                                }),
                                j(0, ["SSSSSSSS", 8], 0, function () {
                                        return 1e5 * this.millisecond();
                                }),
                                j(0, ["SSSSSSSSS", 9], 0, function () {
                                        return 1e6 * this.millisecond();
                                }),
                                I("millisecond", "ms"),
                                N("millisecond", 16),
                                lt("S", J, U),
                                lt("SS", J, V),
                                lt("SSS", J, q),
                                si = "SSSS";
                        si.length <= 9;
                        si += "S"
                )
                        lt(si, it);
                function ni(t, e) {
                        e[yt] = k(1e3 * ("0." + t));
                }
                for (si = "S"; si.length <= 9; si += "S") dt(si, ni);
                Vt = St("Milliseconds", !1);
                j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");
                tt = w.prototype;
                function oi(t) {
                        return t;
                }
                (tt.add = qe),
                        (tt.calendar = function (t, e) {
                                var i = t || Se(),
                                        t = Fe(i, this).startOf("day"),
                                        t = p.calendarFormat(this, t) || "sameElse",
                                        e = e && (E(e[t]) ? e[t].call(this, i) : e[t]);
                                return this.format(e || this.localeData().calendar(t, this, Se(i)));
                        }),
                        (tt.clone = function () {
                                return new w(this);
                        }),
                        (tt.diff = function (t, e, i) {
                                var s, n, o;
                                if (!this.isValid()) return NaN;
                                if (!(s = Fe(t, this)).isValid()) return NaN;
                                switch (((n = 6e4 * (s.utcOffset() - this.utcOffset())), (e = $(e)))) {
                                        case "year":
                                                o = Ge(this, s) / 12;
                                                break;
                                        case "month":
                                                o = Ge(this, s);
                                                break;
                                        case "quarter":
                                                o = Ge(this, s) / 3;
                                                break;
                                        case "second":
                                                o = (this - s) / 1e3;
                                                break;
                                        case "minute":
                                                o = (this - s) / 6e4;
                                                break;
                                        case "hour":
                                                o = (this - s) / 36e5;
                                                break;
                                        case "day":
                                                o = (this - s - n) / 864e5;
                                                break;
                                        case "week":
                                                o = (this - s - n) / 6048e5;
                                                break;
                                        default:
                                                o = this - s;
                                }
                                return i ? o : x(o);
                        }),
                        (tt.endOf = function (t) {
                                var e;
                                if (void 0 === (t = $(t)) || "millisecond" === t || !this.isValid()) return this;
                                var i = this._isUTC ? ti : Je;
                                switch (t) {
                                        case "year":
                                                e = i(this.year() + 1, 0, 1) - 1;
                                                break;
                                        case "quarter":
                                                e = i(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                                                break;
                                        case "month":
                                                e = i(this.year(), this.month() + 1, 1) - 1;
                                                break;
                                        case "week":
                                                e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                                                break;
                                        case "isoWeek":
                                                e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                                                break;
                                        case "day":
                                        case "date":
                                                e = i(this.year(), this.month(), this.date() + 1) - 1;
                                                break;
                                        case "hour":
                                                (e = this._d.valueOf()), (e += 36e5 - Ke(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1);
                                                break;
                                        case "minute":
                                                (e = this._d.valueOf()), (e += 6e4 - Ke(e, 6e4) - 1);
                                                break;
                                        case "second":
                                                (e = this._d.valueOf()), (e += 1e3 - Ke(e, 1e3) - 1);
                                }
                                return this._d.setTime(e), p.updateOffset(this, !0), this;
                        }),
                        (tt.format = function (t) {
                                t = t || (this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
                                t = z(this, t);
                                return this.localeData().postformat(t);
                        }),
                        (tt.from = function (t, e) {
                                return this.isValid() && ((b(t) && t.isValid()) || Se(t).isValid()) ? je({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
                        }),
                        (tt.fromNow = function (t) {
                                return this.from(Se(), t);
                        }),
                        (tt.to = function (t, e) {
                                return this.isValid() && ((b(t) && t.isValid()) || Se(t).isValid()) ? je({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
                        }),
                        (tt.toNow = function (t) {
                                return this.to(Se(), t);
                        }),
                        (tt.get = function (t) {
                                return E(this[(t = $(t))]) ? this[t]() : this;
                        }),
                        (tt.invalidAt = function () {
                                return m(this).overflow;
                        }),
                        (tt.isAfter = function (t, e) {
                                t = b(t) ? t : Se(t);
                                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = $(e) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(e).valueOf());
                        }),
                        (tt.isBefore = function (t, e) {
                                t = b(t) ? t : Se(t);
                                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = $(e) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(e).valueOf() < t.valueOf());
                        }),
                        (tt.isBetween = function (t, e, i, s) {
                                (t = b(t) ? t : Se(t)), (e = b(e) ? e : Se(e));
                                return !!(this.isValid() && t.isValid() && e.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === s[1] ? this.isBefore(e, i) : !this.isAfter(e, i));
                        }),
                        (tt.isSame = function (t, e) {
                                var t = b(t) ? t : Se(t);
                                return (
                                        !(!this.isValid() || !t.isValid()) &&
                                        ("millisecond" === (e = $(e) || "millisecond") ? this.valueOf() === t.valueOf() : ((t = t.valueOf()), this.clone().startOf(e).valueOf() <= t && t <= this.clone().endOf(e).valueOf()))
                                );
                        }),
                        (tt.isSameOrAfter = function (t, e) {
                                return this.isSame(t, e) || this.isAfter(t, e);
                        }),
                        (tt.isSameOrBefore = function (t, e) {
                                return this.isSame(t, e) || this.isBefore(t, e);
                        }),
                        (tt.isValid = function () {
                                return g(this);
                        }),
                        (tt.lang = X),
                        (tt.locale = Qe),
                        (tt.localeData = Ze),
                        (tt.max = Ee),
                        (tt.min = Te),
                        (tt.parsingFlags = function () {
                                return d({}, m(this));
                        }),
                        (tt.set = function (i, t) {
                                if ("object" == typeof i)
                                        for (
                                                var e = (function () {
                                                                var t,
                                                                        e = [];
                                                                for (t in (i = A(i))) e.push({ unit: t, priority: Y[t] });
                                                                return (
                                                                        e.sort(function (t, e) {
                                                                                return t.priority - e.priority;
                                                                        }),
                                                                        e
                                                                );
                                                        })(),
                                                        s = 0;
                                                s < e.length;
                                                s++
                                        )
                                                this[e[s].unit](i[e[s].unit]);
                                else if (E(this[(i = $(i))])) return this[i](t);
                                return this;
                        }),
                        (tt.startOf = function (t) {
                                var e;
                                if (void 0 === (t = $(t)) || "millisecond" === t || !this.isValid()) return this;
                                var i = this._isUTC ? ti : Je;
                                switch (t) {
                                        case "year":
                                                e = i(this.year(), 0, 1);
                                                break;
                                        case "quarter":
                                                e = i(this.year(), this.month() - (this.month() % 3), 1);
                                                break;
                                        case "month":
                                                e = i(this.year(), this.month(), 1);
                                                break;
                                        case "week":
                                                e = i(this.year(), this.month(), this.date() - this.weekday());
                                                break;
                                        case "isoWeek":
                                                e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                                                break;
                                        case "day":
                                        case "date":
                                                e = i(this.year(), this.month(), this.date());
                                                break;
                                        case "hour":
                                                (e = this._d.valueOf()), (e -= Ke(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
                                                break;
                                        case "minute":
                                                (e = this._d.valueOf()), (e -= Ke(e, 6e4));
                                                break;
                                        case "second":
                                                (e = this._d.valueOf()), (e -= Ke(e, 1e3));
                                }
                                return this._d.setTime(e), p.updateOffset(this, !0), this;
                        }),
                        (tt.subtract = at),
                        (tt.toArray = function () {
                                return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
                        }),
                        (tt.toObject = function () {
                                return { years: this.year(), months: this.month(), date: this.date(), hours: this.hours(), minutes: this.minutes(), seconds: this.seconds(), milliseconds: this.milliseconds() };
                        }),
                        (tt.toDate = function () {
                                return new Date(this.valueOf());
                        }),
                        (tt.toISOString = function (t) {
                                if (!this.isValid()) return null;
                                var e = !0 !== t,
                                        t = e ? this.clone().utc() : this;
                                return t.year() < 0 || 9999 < t.year()
                                        ? z(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
                                        : E(Date.prototype.toISOString)
                                        ? e
                                                ? this.toDate().toISOString()
                                                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", z(t, "Z"))
                                        : z(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
                        }),
                        (tt.inspect = function () {
                                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                                var t = "moment",
                                        e = "";
                                this.isLocal() || ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"), (e = "Z"));
                                var i = "[" + t + '("]',
                                        t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                                        e = e + '[")]';
                                return this.format(i + t + "-MM-DD[T]HH:mm:ss.SSS" + e);
                        }),
                        (tt.toJSON = function () {
                                return this.isValid() ? this.toISOString() : null;
                        }),
                        (tt.toString = function () {
                                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
                        }),
                        (tt.unix = function () {
                                return Math.floor(this.valueOf() / 1e3);
                        }),
                        (tt.valueOf = function () {
                                return this._d.valueOf() - 6e4 * (this._offset || 0);
                        }),
                        (tt.creationData = function () {
                                return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
                        }),
                        (tt.year = Dt),
                        (tt.isLeapYear = function () {
                                return kt(this.year());
                        }),
                        (tt.weekYear = function (t) {
                                return ii.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
                        }),
                        (tt.isoWeekYear = function (t) {
                                return ii.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
                        }),
                        (tt.quarter = tt.quarters = function (t) {
                                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + (this.month() % 3));
                        }),
                        (tt.month = At),
                        (tt.daysInMonth = function () {
                                return Mt(this.year(), this.month());
                        }),
                        (tt.week = tt.weeks = function (t) {
                                var e = this.localeData().week(this);
                                return null == t ? e : this.add(7 * (t - e), "d");
                        }),
                        (tt.isoWeek = tt.isoWeeks = function (t) {
                                var e = Rt(this, 1, 4).week;
                                return null == t ? e : this.add(7 * (t - e), "d");
                        }),
                        (tt.weeksInYear = function () {
                                var t = this.localeData()._week;
                                return jt(this.year(), t.dow, t.doy);
                        }),
                        (tt.isoWeeksInYear = function () {
                                return jt(this.year(), 1, 4);
                        }),
                        (tt.date = K),
                        (tt.day = tt.days = function (t) {
                                if (!this.isValid()) return null != t ? this : NaN;
                                var e,
                                        i,
                                        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                                return null != t ? ((e = t), (i = this.localeData()), (t = "string" != typeof e ? e : isNaN(e) ? ("number" == typeof (e = i.weekdaysParse(e)) ? e : null) : parseInt(e, 10)), this.add(t - s, "d")) : s;
                        }),
                        (tt.weekday = function (t) {
                                if (!this.isValid()) return null != t ? this : NaN;
                                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                                return null == t ? e : this.add(t - e, "d");
                        }),
                        (tt.isoWeekday = function (t) {
                                if (!this.isValid()) return null != t ? this : NaN;
                                if (null == t) return this.day() || 7;
                                var e = ((e = t), (t = this.localeData()), "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
                                return this.day(this.day() % 7 ? e : e - 7);
                        }),
                        (tt.dayOfYear = function (t) {
                                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                                return null == t ? e : this.add(t - e, "d");
                        }),
                        (tt.hour = tt.hours = ee),
                        (tt.minute = tt.minutes = Pt),
                        (tt.second = tt.seconds = Bt),
                        (tt.millisecond = tt.milliseconds = Vt),
                        (tt.utcOffset = function (t, e, i) {
                                var s,
                                        n = this._offset || 0;
                                if (!this.isValid()) return null != t ? this : NaN;
                                if (null == t) return this._isUTC ? n : Le(this);
                                if ("string" == typeof t) {
                                        if (null === (t = Ne(ot, t))) return this;
                                } else Math.abs(t) < 16 && !i && (t *= 60);
                                return (
                                        !this._isUTC && e && (s = Le(this)),
                                        (this._offset = t),
                                        (this._isUTC = !0),
                                        null != s && this.add(s, "m"),
                                        n !== t && (!e || this._changeInProgress ? Ve(this, je(t - n, "m"), 1, !1) : this._changeInProgress || ((this._changeInProgress = !0), p.updateOffset(this, !0), (this._changeInProgress = null))),
                                        this
                                );
                        }),
                        (tt.utc = function (t) {
                                return this.utcOffset(0, t);
                        }),
                        (tt.local = function (t) {
                                return this._isUTC && (this.utcOffset(0, t), (this._isUTC = !1), t && this.subtract(Le(this), "m")), this;
                        }),
                        (tt.parseZone = function () {
                                var t;
                                return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (t = Ne(nt, this._i)) ? this.utcOffset(t) : this.utcOffset(0, !0)), this;
                        }),
                        (tt.hasAlignedHourOffset = function (t) {
                                return !!this.isValid() && ((t = t ? Se(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0);
                        }),
                        (tt.isDST = function () {
                                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
                        }),
                        (tt.isLocal = function () {
                                return !!this.isValid() && !this._isUTC;
                        }),
                        (tt.isUtcOffset = function () {
                                return !!this.isValid() && this._isUTC;
                        }),
                        (tt.isUtc = He),
                        (tt.isUTC = He),
                        (tt.zoneAbbr = function () {
                                return this._isUTC ? "UTC" : "";
                        }),
                        (tt.zoneName = function () {
                                return this._isUTC ? "Coordinated Universal Time" : "";
                        }),
                        (tt.dates = i("dates accessor is deprecated. Use date instead.", K)),
                        (tt.months = i("months accessor is deprecated. Use month instead", At)),
                        (tt.years = i("years accessor is deprecated. Use year instead", Dt)),
                        (tt.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
                                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
                        })),
                        (tt.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
                                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                                var t,
                                        e = {};
                                return y(e, this), (e = Ce(e))._a ? ((t = (e._isUTC ? u : Se)(e._a)), (this._isDSTShifted = this.isValid() && 0 < C(e._a, t.toArray()))) : (this._isDSTShifted = !1), this._isDSTShifted;
                        }));
                G = O.prototype;
                function ai(t, e, i, s) {
                        var n = he(),
                                e = u().set(s, e);
                        return n[i](e, t);
                }
                function ri(t, e, i) {
                        if ((l(t) && ((e = t), (t = void 0)), (t = t || ""), null != e)) return ai(t, e, i, "month");
                        for (var s = [], n = 0; n < 12; n++) s[n] = ai(t, n, i, "month");
                        return s;
                }
                function li(t, e, i, s) {
                        "boolean" == typeof t ? l(e) && ((i = e), (e = void 0)) : ((e = t), (t = !1), l((i = e)) && ((i = e), (e = void 0))), (e = e || "");
                        var n = he(),
                                o = t ? n._week.dow : 0;
                        if (null != i) return ai(e, (i + o) % 7, s, "day");
                        for (var a = [], r = 0; r < 7; r++) a[r] = ai(e, (r + o) % 7, s, "day");
                        return a;
                }
                (G.calendar = function (t, e, i) {
                        t = this._calendar[t] || this._calendar.sameElse;
                        return E(t) ? t.call(e, i) : t;
                }),
                        (G.longDateFormat = function (t) {
                                var e = this._longDateFormat[t],
                                        i = this._longDateFormat[t.toUpperCase()];
                                return e || !i
                                        ? e
                                        : ((this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
                                                  return t.slice(1);
                                          })),
                                          this._longDateFormat[t]);
                        }),
                        (G.invalidDate = function () {
                                return this._invalidDate;
                        }),
                        (G.ordinal = function (t) {
                                return this._ordinal.replace("%d", t);
                        }),
                        (G.preparse = oi),
                        (G.postformat = oi),
                        (G.relativeTime = function (t, e, i, s) {
                                var n = this._relativeTime[i];
                                return E(n) ? n(t, e, i, s) : n.replace(/%d/i, t);
                        }),
                        (G.pastFuture = function (t, e) {
                                t = this._relativeTime[0 < t ? "future" : "past"];
                                return E(t) ? t(e) : t.replace(/%s/i, e);
                        }),
                        (G.set = function (t) {
                                var e, i;
                                for (i in t) E((e = t[i])) ? (this[i] = e) : (this["_" + i] = e);
                                (this._config = t), (this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source));
                        }),
                        (G.months = function (t, e) {
                                return t ? (a(this._months) ? this._months : this._months[(this._months.isFormat || Ot).test(e) ? "format" : "standalone"])[t.month()] : a(this._months) ? this._months : this._months.standalone;
                        }),
                        (G.monthsShort = function (t, e) {
                                return t ? (a(this._monthsShort) ? this._monthsShort : this._monthsShort[Ot.test(e) ? "format" : "standalone"])[t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
                        }),
                        (G.monthsParse = function (t, e, i) {
                                var s, n;
                                if (this._monthsParseExact)
                                        return function (t, e, i) {
                                                var s,
                                                        n,
                                                        o,
                                                        t = t.toLocaleLowerCase();
                                                if (!this._monthsParse)
                                                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
                                                                (o = u([2e3, s])), (this._shortMonthsParse[s] = this.monthsShort(o, "").toLocaleLowerCase()), (this._longMonthsParse[s] = this.months(o, "").toLocaleLowerCase());
                                                return i
                                                        ? "MMM" === e
                                                                ? -1 !== (n = Ct.call(this._shortMonthsParse, t))
                                                                        ? n
                                                                        : null
                                                                : -1 !== (n = Ct.call(this._longMonthsParse, t))
                                                                ? n
                                                                : null
                                                        : "MMM" === e
                                                        ? -1 !== (n = Ct.call(this._shortMonthsParse, t)) || -1 !== (n = Ct.call(this._longMonthsParse, t))
                                                                ? n
                                                                : null
                                                        : -1 !== (n = Ct.call(this._longMonthsParse, t)) || -1 !== (n = Ct.call(this._shortMonthsParse, t))
                                                        ? n
                                                        : null;
                                        }.call(this, t, e, i);
                                for (this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), s = 0; s < 12; s++) {
                                        if (
                                                ((n = u([2e3, s])),
                                                i &&
                                                        !this._longMonthsParse[s] &&
                                                        ((this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i")),
                                                        (this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i"))),
                                                i || this._monthsParse[s] || ((n = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "")), (this._monthsParse[s] = new RegExp(n.replace(".", ""), "i"))),
                                                i && "MMMM" === e && this._longMonthsParse[s].test(t))
                                        )
                                                return s;
                                        if (i && "MMM" === e && this._shortMonthsParse[s].test(t)) return s;
                                        if (!i && this._monthsParse[s].test(t)) return s;
                                }
                        }),
                        (G.monthsRegex = function (t) {
                                return this._monthsParseExact
                                        ? (f(this, "_monthsRegex") || Ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex)
                                        : (f(this, "_monthsRegex") || (this._monthsRegex = Nt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
                        }),
                        (G.monthsShortRegex = function (t) {
                                return this._monthsParseExact
                                        ? (f(this, "_monthsRegex") || Ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                                        : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Yt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
                        }),
                        (G.week = function (t) {
                                return Rt(t, this._week.dow, this._week.doy).week;
                        }),
                        (G.firstDayOfYear = function () {
                                return this._week.doy;
                        }),
                        (G.firstDayOfWeek = function () {
                                return this._week.dow;
                        }),
                        (G.weekdays = function (t, e) {
                                e = a(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
                                return !0 === t ? zt(e, this._week.dow) : t ? e[t.day()] : e;
                        }),
                        (G.weekdaysMin = function (t) {
                                return !0 === t ? zt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
                        }),
                        (G.weekdaysShort = function (t) {
                                return !0 === t ? zt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
                        }),
                        (G.weekdaysParse = function (t, e, i) {
                                var s, n;
                                if (this._weekdaysParseExact)
                                        return function (t, e, i) {
                                                var s,
                                                        n,
                                                        o,
                                                        t = t.toLocaleLowerCase();
                                                if (!this._weekdaysParse)
                                                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
                                                                (o = u([2e3, 1]).day(s)),
                                                                        (this._minWeekdaysParse[s] = this.weekdaysMin(o, "").toLocaleLowerCase()),
                                                                        (this._shortWeekdaysParse[s] = this.weekdaysShort(o, "").toLocaleLowerCase()),
                                                                        (this._weekdaysParse[s] = this.weekdays(o, "").toLocaleLowerCase());
                                                return i
                                                        ? "dddd" === e
                                                                ? -1 !== (n = Ct.call(this._weekdaysParse, t))
                                                                        ? n
                                                                        : null
                                                                : "ddd" === e
                                                                ? -1 !== (n = Ct.call(this._shortWeekdaysParse, t))
                                                                        ? n
                                                                        : null
                                                                : -1 !== (n = Ct.call(this._minWeekdaysParse, t))
                                                                ? n
                                                                : null
                                                        : "dddd" === e
                                                        ? -1 !== (n = Ct.call(this._weekdaysParse, t)) || -1 !== (n = Ct.call(this._shortWeekdaysParse, t)) || -1 !== (n = Ct.call(this._minWeekdaysParse, t))
                                                                ? n
                                                                : null
                                                        : "ddd" === e
                                                        ? -1 !== (n = Ct.call(this._shortWeekdaysParse, t)) || -1 !== (n = Ct.call(this._weekdaysParse, t)) || -1 !== (n = Ct.call(this._minWeekdaysParse, t))
                                                                ? n
                                                                : null
                                                        : -1 !== (n = Ct.call(this._minWeekdaysParse, t)) || -1 !== (n = Ct.call(this._weekdaysParse, t)) || -1 !== (n = Ct.call(this._shortWeekdaysParse, t))
                                                        ? n
                                                        : null;
                                        }.call(this, t, e, i);
                                for (this._weekdaysParse || ((this._weekdaysParse = []), (this._minWeekdaysParse = []), (this._shortWeekdaysParse = []), (this._fullWeekdaysParse = [])), s = 0; s < 7; s++) {
                                        if (
                                                ((n = u([2e3, 1]).day(s)),
                                                i &&
                                                        !this._fullWeekdaysParse[s] &&
                                                        ((this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i")),
                                                        (this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i")),
                                                        (this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i"))),
                                                this._weekdaysParse[s] ||
                                                        ((n = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, "")), (this._weekdaysParse[s] = new RegExp(n.replace(".", ""), "i"))),
                                                i && "dddd" === e && this._fullWeekdaysParse[s].test(t))
                                        )
                                                return s;
                                        if (i && "ddd" === e && this._shortWeekdaysParse[s].test(t)) return s;
                                        if (i && "dd" === e && this._minWeekdaysParse[s].test(t)) return s;
                                        if (!i && this._weekdaysParse[s].test(t)) return s;
                                }
                        }),
                        (G.weekdaysRegex = function (t) {
                                return this._weekdaysParseExact
                                        ? (f(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                                        : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = qt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
                        }),
                        (G.weekdaysShortRegex = function (t) {
                                return this._weekdaysParseExact
                                        ? (f(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                                        : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Gt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
                        }),
                        (G.weekdaysMinRegex = function (t) {
                                return this._weekdaysParseExact
                                        ? (f(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                                        : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
                        }),
                        (G.isPM = function (t) {
                                return "p" === (t + "").toLowerCase().charAt(0);
                        }),
                        (G.meridiem = function (t, e, i) {
                                return 11 < t ? (i ? "pm" : "PM") : i ? "am" : "AM";
                        }),
                        re("en", {
                                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                                ordinal: function (t) {
                                        var e = t % 10;
                                        return t + (1 === k((t % 100) / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th");
                                },
                        }),
                        (p.lang = i("moment.lang is deprecated. Use moment.locale instead.", re)),
                        (p.langData = i("moment.langData is deprecated. Use moment.localeData instead.", he));
                var hi = Math.abs;
                function ci(t, e, i, s) {
                        i = je(e, i);
                        return (t._milliseconds += s * i._milliseconds), (t._days += s * i._days), (t._months += s * i._months), t._bubble();
                }
                function di(t) {
                        return t < 0 ? Math.floor(t) : Math.ceil(t);
                }
                function ui(t) {
                        return (4800 * t) / 146097;
                }
                function fi(t) {
                        return (146097 * t) / 4800;
                }
                function pi(t) {
                        return function () {
                                return this.as(t);
                        };
                }
                (et = pi("ms")), (Q = pi("s")), (U = pi("m")), (V = pi("h")), (J = pi("d")), (q = pi("w")), (qe = pi("M")), (Ee = pi("Q")), (Te = pi("y"));
                function mi(t) {
                        return function () {
                                return this.isValid() ? this._data[t] : NaN;
                        };
                }
                var at = mi("milliseconds"),
                        ee = mi("seconds"),
                        Pt = mi("minutes"),
                        Bt = mi("hours"),
                        Vt = mi("days"),
                        K = mi("months"),
                        Dt = mi("years"),
                        gi = Math.round,
                        _i = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                        vi = Math.abs;
                function yi(t) {
                        return (0 < t) - (t < 0) || +t;
                }
                function wi() {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var t = vi(this._milliseconds) / 1e3,
                                e = vi(this._days),
                                i = vi(this._months),
                                s = x((h = x(t / 60)) / 60);
                        (t %= 60), (h %= 60);
                        var n = x(i / 12),
                                o = (i %= 12),
                                a = e,
                                r = s,
                                l = h,
                                i = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
                                e = this.asSeconds();
                        if (!e) return "P0D";
                        var s = e < 0 ? "-" : "",
                                h = yi(this._months) !== yi(e) ? "-" : "",
                                t = yi(this._days) !== yi(e) ? "-" : "",
                                e = yi(this._milliseconds) !== yi(e) ? "-" : "";
                        return s + "P" + (n ? h + n + "Y" : "") + (o ? h + o + "M" : "") + (a ? t + a + "D" : "") + (r || l || i ? "T" : "") + (r ? e + r + "H" : "") + (l ? e + l + "M" : "") + (i ? e + i + "S" : "");
                }
                G = Pe.prototype;
                return (
                        (G.isValid = function () {
                                return this._isValid;
                        }),
                        (G.abs = function () {
                                var t = this._data;
                                return (
                                        (this._milliseconds = hi(this._milliseconds)),
                                        (this._days = hi(this._days)),
                                        (this._months = hi(this._months)),
                                        (t.milliseconds = hi(t.milliseconds)),
                                        (t.seconds = hi(t.seconds)),
                                        (t.minutes = hi(t.minutes)),
                                        (t.hours = hi(t.hours)),
                                        (t.months = hi(t.months)),
                                        (t.years = hi(t.years)),
                                        this
                                );
                        }),
                        (G.add = function (t, e) {
                                return ci(this, t, e, 1);
                        }),
                        (G.subtract = function (t, e) {
                                return ci(this, t, e, -1);
                        }),
                        (G.as = function (t) {
                                if (!this.isValid()) return NaN;
                                var e,
                                        i,
                                        s = this._milliseconds;
                                if ("month" === (t = $(t)) || "quarter" === t || "year" === t)
                                        switch (((e = this._days + s / 864e5), (i = this._months + ui(e)), t)) {
                                                case "month":
                                                        return i;
                                                case "quarter":
                                                        return i / 3;
                                                case "year":
                                                        return i / 12;
                                        }
                                else
                                        switch (((e = this._days + Math.round(fi(this._months))), t)) {
                                                case "week":
                                                        return e / 7 + s / 6048e5;
                                                case "day":
                                                        return e + s / 864e5;
                                                case "hour":
                                                        return 24 * e + s / 36e5;
                                                case "minute":
                                                        return 1440 * e + s / 6e4;
                                                case "second":
                                                        return 86400 * e + s / 1e3;
                                                case "millisecond":
                                                        return Math.floor(864e5 * e) + s;
                                                default:
                                                        throw new Error("Unknown unit " + t);
                                        }
                        }),
                        (G.asMilliseconds = et),
                        (G.asSeconds = Q),
                        (G.asMinutes = U),
                        (G.asHours = V),
                        (G.asDays = J),
                        (G.asWeeks = q),
                        (G.asMonths = qe),
                        (G.asQuarters = Ee),
                        (G.asYears = Te),
                        (G.valueOf = function () {
                                return this.isValid() ? this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
                        }),
                        (G._bubble = function () {
                                var t = this._milliseconds,
                                        e = this._days,
                                        i = this._months,
                                        s = this._data;
                                return (
                                        (0 <= t && 0 <= e && 0 <= i) || (t <= 0 && e <= 0 && i <= 0) || ((t += 864e5 * di(fi(i) + e)), (i = e = 0)),
                                        (s.milliseconds = t % 1e3),
                                        (t = x(t / 1e3)),
                                        (s.seconds = t % 60),
                                        (t = x(t / 60)),
                                        (s.minutes = t % 60),
                                        (t = x(t / 60)),
                                        (s.hours = t % 24),
                                        (i += t = x(ui((e += x(t / 24))))),
                                        (e -= di(fi(t))),
                                        (t = x(i / 12)),
                                        (i %= 12),
                                        (s.days = e),
                                        (s.months = i),
                                        (s.years = t),
                                        this
                                );
                        }),
                        (G.clone = function () {
                                return je(this);
                        }),
                        (G.get = function (t) {
                                return (t = $(t)), this.isValid() ? this[t + "s"]() : NaN;
                        }),
                        (G.milliseconds = at),
                        (G.seconds = ee),
                        (G.minutes = Pt),
                        (G.hours = Bt),
                        (G.days = Vt),
                        (G.weeks = function () {
                                return x(this.days() / 7);
                        }),
                        (G.months = K),
                        (G.years = Dt),
                        (G.humanize = function (t) {
                                if (!this.isValid()) return this.localeData().invalidDate();
                                var e,
                                        i,
                                        s,
                                        n,
                                        o,
                                        a,
                                        r,
                                        l = this.localeData(),
                                        h =
                                                ((e = !t),
                                                (i = l),
                                                (h = je(this).abs()),
                                                (s = gi(h.as("s"))),
                                                (n = gi(h.as("m"))),
                                                (o = gi(h.as("h"))),
                                                (a = gi(h.as("d"))),
                                                (r = gi(h.as("M"))),
                                                (h = gi(h.as("y"))),
                                                ((h = (s <= _i.ss ? ["s", s] : s < _i.s && ["ss", s]) ||
                                                        (n <= 1 && ["m"]) ||
                                                        (n < _i.m && ["mm", n]) ||
                                                        (o <= 1 && ["h"]) ||
                                                        (o < _i.h && ["hh", o]) ||
                                                        (a <= 1 && ["d"]) ||
                                                        (a < _i.d && ["dd", a]) ||
                                                        (r <= 1 && ["M"]) ||
                                                        (r < _i.M && ["MM", r]) ||
                                                        (h <= 1 && ["y"]) || ["yy", h])[2] = e),
                                                (h[3] = 0 < +this),
                                                (h[4] = i),
                                                function (t, e, i, s, n) {
                                                        return n.relativeTime(e || 1, !!i, t, s);
                                                }.apply(null, h));
                                return t && (h = l.pastFuture(+this, h)), l.postformat(h);
                        }),
                        (G.toISOString = wi),
                        (G.toString = wi),
                        (G.toJSON = wi),
                        (G.locale = Qe),
                        (G.localeData = Ze),
                        (G.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", wi)),
                        (G.lang = X),
                        j("X", 0, 0, "unix"),
                        j("x", 0, 0, "valueOf"),
                        lt("x", st),
                        lt("X", /[+-]?\d+(\.\d{1,3})?/),
                        dt("X", function (t, e, i) {
                                i._d = new Date(1e3 * parseFloat(t, 10));
                        }),
                        dt("x", function (t, e, i) {
                                i._d = new Date(k(t));
                        }),
                        (p.version = "2.24.0"),
                        (t = Se),
                        (p.fn = tt),
                        (p.min = function () {
                                return Me("isBefore", [].slice.call(arguments, 0));
                        }),
                        (p.max = function () {
                                return Me("isAfter", [].slice.call(arguments, 0));
                        }),
                        (p.now = function () {
                                return Date.now ? Date.now() : +new Date();
                        }),
                        (p.utc = u),
                        (p.unix = function (t) {
                                return Se(1e3 * t);
                        }),
                        (p.months = function (t, e) {
                                return ri(t, e, "months");
                        }),
                        (p.isDate = h),
                        (p.locale = re),
                        (p.invalid = _),
                        (p.duration = je),
                        (p.isMoment = b),
                        (p.weekdays = function (t, e, i) {
                                return li(t, e, i, "weekdays");
                        }),
                        (p.parseZone = function () {
                                return Se.apply(null, arguments).parseZone();
                        }),
                        (p.localeData = he),
                        (p.isDuration = Ie),
                        (p.monthsShort = function (t, e) {
                                return ri(t, e, "monthsShort");
                        }),
                        (p.weekdaysMin = function (t, e, i) {
                                return li(t, e, i, "weekdaysMin");
                        }),
                        (p.defineLocale = le),
                        (p.updateLocale = function (t, e) {
                                var i, s;
                                return (
                                        null != e
                                                ? ((s = ie), null != (i = ae(t)) && (s = i._config), ((e = new O((e = M(s, e)))).parentLocale = se[t]), (se[t] = e), re(t))
                                                : null != se[t] && (null != se[t].parentLocale ? (se[t] = se[t].parentLocale) : null != se[t] && delete se[t]),
                                        se[t]
                                );
                        }),
                        (p.locales = function () {
                                return n(se);
                        }),
                        (p.weekdaysShort = function (t, e, i) {
                                return li(t, e, i, "weekdaysShort");
                        }),
                        (p.normalizeUnits = $),
                        (p.relativeTimeRounding = function (t) {
                                return void 0 === t ? gi : "function" == typeof t && ((gi = t), !0);
                        }),
                        (p.relativeTimeThreshold = function (t, e) {
                                return void 0 !== _i[t] && (void 0 === e ? _i[t] : ((_i[t] = e), "s" === t && (_i.ss = e - 1), !0));
                        }),
                        (p.calendarFormat = function (t, e) {
                                e = t.diff(e, "days", !0);
                                return e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
                        }),
                        (p.prototype = tt),
                        (p.HTML5_FMT = {
                                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                                DATE: "YYYY-MM-DD",
                                TIME: "HH:mm",
                                TIME_SECONDS: "HH:mm:ss",
                                TIME_MS: "HH:mm:ss.SSS",
                                WEEK: "GGGG-[W]WW",
                                MONTH: "YYYY-MM",
                        }),
                        p
                );
        }),
        (function (t, i) {
                var e, s;
                "function" == typeof define && define.amd
                        ? define(["moment", "jquery"], function (t, e) {
                                  return e.fn || (e.fn = {}), "function" != typeof t && t.hasOwnProperty("default") && (t = t.default), i(t, e);
                          })
                        : "object" == typeof module && module.exports
                        ? ((e = "undefined" != typeof window ? window.jQuery : void 0) || (e = require("jquery")).fn || (e.fn = {}),
                          (s = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment")),
                          (module.exports = i(s, e)))
                        : (t.daterangepicker = i(t.moment, t.jQuery));
        })("undefined" != typeof window ? window : this, function (P, I) {
                function s(t, e, i) {
                        var s, n, o, a;
                        if (
                                ((this.parentEl = "body"),
                                (this.element = I(t)),
                                (this.startDate = P().startOf("day")),
                                (this.endDate = P().endOf("day")),
                                (this.minDate = !1),
                                (this.maxDate = !1),
                                (this.maxSpan = !1),
                                (this.autoApply = !1),
                                (this.singleDatePicker = !1),
                                (this.showDropdowns = !1),
                                (this.minYear = P().subtract(100, "year").format("YYYY")),
                                (this.maxYear = P().add(100, "year").format("YYYY")),
                                (this.showWeekNumbers = !1),
                                (this.showISOWeekNumbers = !1),
                                (this.showCustomRangeLabel = !0),
                                (this.timePicker = !1),
                                (this.timePicker24Hour = !1),
                                (this.timePickerIncrement = 1),
                                (this.timePickerSeconds = !1),
                                (this.linkedCalendars = !0),
                                (this.autoUpdateInput = !0),
                                (this.alwaysShowCalendars = !1),
                                (this.ranges = {}),
                                (this.opens = "right"),
                                this.element.hasClass("pull-right") && (this.opens = "left"),
                                (this.drops = "down"),
                                this.element.hasClass("dropup") && (this.drops = "up"),
                                (this.buttonClasses = "btn btn-sm"),
                                (this.applyButtonClasses = "btn-primary"),
                                (this.cancelButtonClasses = "btn-default"),
                                (this.locale = {
                                        direction: "ltr",
                                        format: P.localeData().longDateFormat("L"),
                                        separator: " - ",
                                        applyLabel: "Apply",
                                        cancelLabel: "Cancel",
                                        weekLabel: "W",
                                        customRangeLabel: "Custom Range",
                                        daysOfWeek: P.weekdaysMin(),
                                        monthNames: P.monthsShort(),
                                        firstDay: P.localeData().firstDayOfWeek(),
                                }),
                                (this.callback = function () {}),
                                (this.isShowing = !1),
                                (this.leftCalendar = {}),
                                (this.rightCalendar = {}),
                                ("object" == typeof e && null !== e) || (e = {}),
                                "string" == typeof (e = I.extend(this.element.data(), e)).template ||
                                        e.template instanceof I ||
                                        (e.template =
                                                '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),
                                (this.parentEl = e.parentEl && I(e.parentEl).length ? I(e.parentEl) : I(this.parentEl)),
                                (this.container = I(e.template).appendTo(this.parentEl)),
                                "object" == typeof e.locale &&
                                        ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction),
                                        "string" == typeof e.locale.format && (this.locale.format = e.locale.format),
                                        "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator),
                                        "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()),
                                        "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()),
                                        "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay),
                                        "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel),
                                        "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel),
                                        "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel),
                                        "string" == typeof e.locale.customRangeLabel && (((l = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel), (h = l.value), (this.locale.customRangeLabel = h))),
                                this.container.addClass(this.locale.direction),
                                "string" == typeof e.startDate && (this.startDate = P(e.startDate, this.locale.format)),
                                "string" == typeof e.endDate && (this.endDate = P(e.endDate, this.locale.format)),
                                "string" == typeof e.minDate && (this.minDate = P(e.minDate, this.locale.format)),
                                "string" == typeof e.maxDate && (this.maxDate = P(e.maxDate, this.locale.format)),
                                "object" == typeof e.startDate && (this.startDate = P(e.startDate)),
                                "object" == typeof e.endDate && (this.endDate = P(e.endDate)),
                                "object" == typeof e.minDate && (this.minDate = P(e.minDate)),
                                "object" == typeof e.maxDate && (this.maxDate = P(e.maxDate)),
                                this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()),
                                this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()),
                                "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses),
                                "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass),
                                "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses),
                                "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass),
                                "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan),
                                "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit),
                                "string" == typeof e.opens && (this.opens = e.opens),
                                "string" == typeof e.drops && (this.drops = e.drops),
                                "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers),
                                "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers),
                                "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses),
                                "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")),
                                "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns),
                                "number" == typeof e.minYear && (this.minYear = e.minYear),
                                "number" == typeof e.maxYear && (this.maxYear = e.maxYear),
                                "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel),
                                "boolean" == typeof e.singleDatePicker && ((this.singleDatePicker = e.singleDatePicker), this.singleDatePicker && (this.endDate = this.startDate.clone())),
                                "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker),
                                "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds),
                                "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement),
                                "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour),
                                "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply),
                                "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput),
                                "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars),
                                "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate),
                                "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate),
                                "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars),
                                0 != this.locale.firstDay)
                        )
                                for (var r = this.locale.firstDay; 0 < r; ) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), r--;
                        if (
                                (void 0 === e.startDate &&
                                        void 0 === e.endDate &&
                                        I(this.element).is(":text") &&
                                        ((a = s = null),
                                        2 == (t = (o = I(this.element).val()).split(this.locale.separator)).length
                                                ? ((a = P(t[0], this.locale.format)), (s = P(t[1], this.locale.format)))
                                                : this.singleDatePicker && "" !== o && ((a = P(o, this.locale.format)), (s = P(o, this.locale.format))),
                                        null !== a && null !== s && (this.setStartDate(a), this.setEndDate(s))),
                                "object" == typeof e.ranges)
                        ) {
                                for (n in e.ranges) {
                                        (a = "string" == typeof e.ranges[n][0] ? P(e.ranges[n][0], this.locale.format) : P(e.ranges[n][0])),
                                                (s = "string" == typeof e.ranges[n][1] ? P(e.ranges[n][1], this.locale.format) : P(e.ranges[n][1])),
                                                this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone());
                                        var l,
                                                h,
                                                c = this.maxDate;
                                        this.maxSpan && c && a.clone().add(this.maxSpan).isAfter(c) && (c = a.clone().add(this.maxSpan)),
                                                c && s.isAfter(c) && (s = c.clone()),
                                                (this.minDate && s.isBefore(this.minDate, this.timepicker ? "minute" : "day")) ||
                                                        (c && a.isAfter(c, this.timepicker ? "minute" : "day")) ||
                                                        (((l = document.createElement("textarea")).innerHTML = n), (h = l.value), (this.ranges[h] = [a, s]));
                                }
                                var d = "<ul>";
                                for (n in this.ranges) d += '<li data-range-key="' + n + '">' + n + "</li>";
                                this.showCustomRangeLabel && (d += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), (d += "</ul>"), this.container.find(".ranges").prepend(d);
                        }
                        "function" == typeof i && (this.callback = i),
                                this.timePicker || ((this.startDate = this.startDate.startOf("day")), (this.endDate = this.endDate.endOf("day")), this.container.find(".calendar-time").hide()),
                                this.timePicker && this.autoApply && (this.autoApply = !1),
                                this.autoApply && this.container.addClass("auto-apply"),
                                "object" == typeof e.ranges && this.container.addClass("show-ranges"),
                                this.singleDatePicker &&
                                        (this.container.addClass("single"),
                                        this.container.find(".drp-calendar.left").addClass("single"),
                                        this.container.find(".drp-calendar.left").show(),
                                        this.container.find(".drp-calendar.right").hide(),
                                        !this.timePicker && this.autoApply && this.container.addClass("auto-apply")),
                                ((void 0 === e.ranges && !this.singleDatePicker) || this.alwaysShowCalendars) && this.container.addClass("show-calendar"),
                                this.container.addClass("opens" + this.opens),
                                this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),
                                this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses),
                                this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),
                                this.container.find(".applyBtn").html(this.locale.applyLabel),
                                this.container.find(".cancelBtn").html(this.locale.cancelLabel),
                                this.container
                                        .find(".drp-calendar")
                                        .on("click.daterangepicker", ".prev", I.proxy(this.clickPrev, this))
                                        .on("click.daterangepicker", ".next", I.proxy(this.clickNext, this))
                                        .on("mousedown.daterangepicker", "td.available", I.proxy(this.clickDate, this))
                                        .on("mouseenter.daterangepicker", "td.available", I.proxy(this.hoverDate, this))
                                        .on("change.daterangepicker", "select.yearselect", I.proxy(this.monthOrYearChanged, this))
                                        .on("change.daterangepicker", "select.monthselect", I.proxy(this.monthOrYearChanged, this))
                                        .on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", I.proxy(this.timeChanged, this)),
                                this.container.find(".ranges").on("click.daterangepicker", "li", I.proxy(this.clickRange, this)),
                                this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", I.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", I.proxy(this.clickCancel, this)),
                                this.element.is("input") || this.element.is("button")
                                        ? this.element.on({
                                                  "click.daterangepicker": I.proxy(this.show, this),
                                                  "focus.daterangepicker": I.proxy(this.show, this),
                                                  "keyup.daterangepicker": I.proxy(this.elementChanged, this),
                                                  "keydown.daterangepicker": I.proxy(this.keydown, this),
                                          })
                                        : (this.element.on("click.daterangepicker", I.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", I.proxy(this.toggle, this))),
                                this.updateElement();
                }
                return (
                        (s.prototype = {
                                constructor: s,
                                setStartDate: function (t) {
                                        "string" == typeof t && (this.startDate = P(t, this.locale.format)),
                                                "object" == typeof t && (this.startDate = P(t)),
                                                this.timePicker || (this.startDate = this.startDate.startOf("day")),
                                                this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement),
                                                this.minDate &&
                                                        this.startDate.isBefore(this.minDate) &&
                                                        ((this.startDate = this.minDate.clone()),
                                                        this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)),
                                                this.maxDate &&
                                                        this.startDate.isAfter(this.maxDate) &&
                                                        ((this.startDate = this.maxDate.clone()),
                                                        this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)),
                                                this.isShowing || this.updateElement(),
                                                this.updateMonthsInView();
                                },
                                setEndDate: function (t) {
                                        "string" == typeof t && (this.endDate = P(t, this.locale.format)),
                                                "object" == typeof t && (this.endDate = P(t)),
                                                this.timePicker || (this.endDate = this.endDate.endOf("day")),
                                                this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement),
                                                this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()),
                                                this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()),
                                                this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)),
                                                (this.previousRightTime = this.endDate.clone()),
                                                this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)),
                                                this.isShowing || this.updateElement(),
                                                this.updateMonthsInView();
                                },
                                isInvalidDate: function () {
                                        return !1;
                                },
                                isCustomDate: function () {
                                        return !1;
                                },
                                updateView: function () {
                                        this.timePicker &&
                                                (this.renderTimePicker("left"),
                                                this.renderTimePicker("right"),
                                                this.endDate
                                                        ? this.container.find(".right .calendar-time select").prop("disabled", !1).removeClass("disabled")
                                                        : this.container.find(".right .calendar-time select").prop("disabled", !0).addClass("disabled")),
                                                this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)),
                                                this.updateMonthsInView(),
                                                this.updateCalendars(),
                                                this.updateFormInputs();
                                },
                                updateMonthsInView: function () {
                                        if (this.endDate) {
                                                if (
                                                        !this.singleDatePicker &&
                                                        this.leftCalendar.month &&
                                                        this.rightCalendar.month &&
                                                        (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) &&
                                                        (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))
                                                )
                                                        return;
                                                (this.leftCalendar.month = this.startDate.clone().date(2)),
                                                        this.linkedCalendars || (this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year())
                                                                ? (this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"))
                                                                : (this.rightCalendar.month = this.endDate.clone().date(2));
                                        } else
                                                this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") &&
                                                        this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") &&
                                                        ((this.leftCalendar.month = this.startDate.clone().date(2)), (this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month")));
                                        this.maxDate &&
                                                this.linkedCalendars &&
                                                !this.singleDatePicker &&
                                                this.rightCalendar.month > this.maxDate &&
                                                ((this.rightCalendar.month = this.maxDate.clone().date(2)), (this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month")));
                                },
                                updateCalendars: function () {
                                        var t, e, i, s;
                                        this.timePicker &&
                                                (this.endDate
                                                        ? ((e = parseInt(this.container.find(".left .hourselect").val(), 10)),
                                                          (i = parseInt(this.container.find(".left .minuteselect").val(), 10)),
                                                          isNaN(i) && (i = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)),
                                                          (t = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0),
                                                          this.timePicker24Hour || ("PM" === (s = this.container.find(".left .ampmselect").val()) && e < 12 && (e += 12), "AM" === s && 12 === e && (e = 0)))
                                                        : ((e = parseInt(this.container.find(".right .hourselect").val(), 10)),
                                                          (i = parseInt(this.container.find(".right .minuteselect").val(), 10)),
                                                          isNaN(i) && (i = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)),
                                                          (t = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0),
                                                          this.timePicker24Hour || ("PM" === (s = this.container.find(".right .ampmselect").val()) && e < 12 && (e += 12), "AM" === s && 12 === e && (e = 0))),
                                                this.leftCalendar.month.hour(e).minute(i).second(t),
                                                this.rightCalendar.month.hour(e).minute(i).second(t)),
                                                this.renderCalendar("left"),
                                                this.renderCalendar("right"),
                                                this.container.find(".ranges li").removeClass("active"),
                                                null != this.endDate && this.calculateChosenLabel();
                                },
                                renderCalendar: function (t) {
                                        var e = "left" == t ? this.leftCalendar : this.rightCalendar,
                                                i = e.month.month(),
                                                s = e.month.year(),
                                                n = e.month.hour(),
                                                o = e.month.minute(),
                                                a = e.month.second(),
                                                r = P([s, i]).daysInMonth(),
                                                l = P([s, i, 1]),
                                                h = P([s, i, r]),
                                                c = P(l).subtract(1, "month").month(),
                                                s = P(l).subtract(1, "month").year(),
                                                i = P([s, c]).daysInMonth(),
                                                r = l.day();
                                        ((e = []).firstDay = l), (e.lastDay = h);
                                        for (var d = 0; d < 6; d++) e[d] = [];
                                        h = i - r + this.locale.firstDay + 1;
                                        i < h && (h -= 7), r == this.locale.firstDay && (h = i - 6);
                                        for (var u = P([s, c, h, 12, o, a]), d = 0, f = 0, p = 0; d < 42; d++, f++, u = P(u).add(24, "hour"))
                                                0 < d && f % 7 == 0 && ((f = 0), p++),
                                                        (e[p][f] = u.clone().hour(n).minute(o).second(a)),
                                                        u.hour(12),
                                                        this.minDate && e[p][f].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[p][f].isBefore(this.minDate) && "left" == t && (e[p][f] = this.minDate.clone()),
                                                        this.maxDate && e[p][f].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[p][f].isAfter(this.maxDate) && "right" == t && (e[p][f] = this.maxDate.clone());
                                        "left" == t ? (this.leftCalendar.calendar = e) : (this.rightCalendar.calendar = e);
                                        var m = "left" == t ? this.minDate : this.startDate,
                                                g = this.maxDate,
                                                _ = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
                                        (_ += "<thead>"),
                                                (_ += "<tr>"),
                                                (this.showWeekNumbers || this.showISOWeekNumbers) && (_ += "<th></th>"),
                                                (m && !m.isBefore(e.firstDay)) || (this.linkedCalendars && "left" != t) ? (_ += "<th></th>") : (_ += '<th class="prev available"><span></span></th>');
                                        c = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
                                        if (this.showDropdowns) {
                                                for (
                                                        var v = e[1][1].month(),
                                                                y = e[1][1].year(),
                                                                w = (g && g.year()) || this.maxYear,
                                                                h = (m && m.year()) || this.minYear,
                                                                b = y == h,
                                                                x = y == w,
                                                                k = '<select class="monthselect">',
                                                                C = 0;
                                                        C < 12;
                                                        C++
                                                )
                                                        (!b || (m && C >= m.month())) && (!x || (g && C <= g.month()))
                                                                ? (k += "<option value='" + C + "'" + (C === v ? " selected='selected'" : "") + ">" + this.locale.monthNames[C] + "</option>")
                                                                : (k += "<option value='" + C + "'" + (C === v ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[C] + "</option>");
                                                k += "</select>";
                                                for (var D = '<select class="yearselect">', S = h; S <= w; S++) D += '<option value="' + S + '"' + (S === y ? ' selected="selected"' : "") + ">" + S + "</option>";
                                                c = k + (D += "</select>");
                                        }
                                        (_ += '<th colspan="5" class="month">' + c + "</th>"),
                                                (g && !g.isAfter(e.lastDay)) || (this.linkedCalendars && "right" != t && !this.singleDatePicker) ? (_ += "<th></th>") : (_ += '<th class="next available"><span></span></th>'),
                                                (_ += "</tr>"),
                                                (_ += "<tr>"),
                                                (this.showWeekNumbers || this.showISOWeekNumbers) && (_ += '<th class="week">' + this.locale.weekLabel + "</th>"),
                                                I.each(this.locale.daysOfWeek, function (t, e) {
                                                        _ += "<th>" + e + "</th>";
                                                }),
                                                (_ += "</tr>"),
                                                (_ += "</thead>"),
                                                (_ += "<tbody>"),
                                                null == this.endDate && this.maxSpan && ((c = this.startDate.clone().add(this.maxSpan).endOf("day")), (g && !c.isBefore(g)) || (g = c));
                                        for (p = 0; p < 6; p++) {
                                                (_ += "<tr>"), this.showWeekNumbers ? (_ += '<td class="week">' + e[p][0].week() + "</td>") : this.showISOWeekNumbers && (_ += '<td class="week">' + e[p][0].isoWeek() + "</td>");
                                                for (f = 0; f < 7; f++) {
                                                        var T = [];
                                                        e[p][f].isSame(new Date(), "day") && T.push("today"),
                                                                5 < e[p][f].isoWeekday() && T.push("weekend"),
                                                                e[p][f].month() != e[1][1].month() && T.push("off", "ends"),
                                                                this.minDate && e[p][f].isBefore(this.minDate, "day") && T.push("off", "disabled"),
                                                                g && e[p][f].isAfter(g, "day") && T.push("off", "disabled"),
                                                                this.isInvalidDate(e[p][f]) && T.push("off", "disabled"),
                                                                e[p][f].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && T.push("active", "start-date"),
                                                                null != this.endDate && e[p][f].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && T.push("active", "end-date"),
                                                                null != this.endDate && e[p][f] > this.startDate && e[p][f] < this.endDate && T.push("in-range");
                                                        var E = this.isCustomDate(e[p][f]);
                                                        !1 !== E && ("string" == typeof E ? T.push(E) : Array.prototype.push.apply(T, E));
                                                        for (var M = "", O = !1, d = 0; d < T.length; d++) (M += T[d] + " "), "disabled" == T[d] && (O = !0);
                                                        O || (M += "available"), (_ += '<td class="' + M.replace(/^\s+|\s+$/g, "") + '" data-title="r' + p + "c" + f + '">' + e[p][f].date() + "</td>");
                                                }
                                                _ += "</tr>";
                                        }
                                        (_ += "</tbody>"), (_ += "</table>"), this.container.find(".drp-calendar." + t + " .calendar-table").html(_);
                                },
                                renderTimePicker: function (t) {
                                        if ("right" != t || this.endDate) {
                                                var e,
                                                        i,
                                                        s,
                                                        n = this.maxDate;
                                                !this.maxSpan || (this.maxDate && !this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)) || (n = this.startDate.clone().add(this.maxSpan)),
                                                        "left" == t
                                                                ? ((i = this.startDate.clone()), (s = this.minDate))
                                                                : "right" == t &&
                                                                  ((i = this.endDate.clone()),
                                                                  (s = this.startDate),
                                                                  "" != (o = this.container.find(".drp-calendar.right .calendar-time")).html() &&
                                                                          (i.hour(isNaN(i.hour()) ? o.find(".hourselect option:selected").val() : i.hour()),
                                                                          i.minute(isNaN(i.minute()) ? o.find(".minuteselect option:selected").val() : i.minute()),
                                                                          i.second(isNaN(i.second()) ? o.find(".secondselect option:selected").val() : i.second()),
                                                                          this.timePicker24Hour ||
                                                                                  ("PM" === (d = o.find(".ampmselect option:selected").val()) && i.hour() < 12 && i.hour(i.hour() + 12), "AM" === d && 12 === i.hour() && i.hour(0))),
                                                                  i.isBefore(this.startDate) && (i = this.startDate.clone()),
                                                                  n && i.isAfter(n) && (i = n.clone())),
                                                        (e = '<select class="hourselect">');
                                                for (var o = this.timePicker24Hour ? 0 : 1, a = this.timePicker24Hour ? 23 : 12, r = o; r <= a; r++) {
                                                        var l = r;
                                                        this.timePicker24Hour || (l = 12 <= i.hour() ? (12 == r ? 12 : r + 12) : 12 == r ? 0 : r);
                                                        var h = i.clone().hour(l),
                                                                c = !1;
                                                        s && h.minute(59).isBefore(s) && (c = !0),
                                                                n && h.minute(0).isAfter(n) && (c = !0),
                                                                l != i.hour() || c
                                                                        ? (e += c ? '<option value="' + r + '" disabled="disabled" class="disabled">' + r + "</option>" : '<option value="' + r + '">' + r + "</option>")
                                                                        : (e += '<option value="' + r + '" selected="selected">' + r + "</option>");
                                                }
                                                (e += "</select> "), (e += ': <select class="minuteselect">');
                                                for (var d, r = 0; r < 60; r += this.timePickerIncrement) {
                                                        var u = r < 10 ? "0" + r : r,
                                                                h = i.clone().minute(r),
                                                                c = !1;
                                                        s && h.second(59).isBefore(s) && (c = !0),
                                                                n && h.second(0).isAfter(n) && (c = !0),
                                                                i.minute() != r || c
                                                                        ? (e += c ? '<option value="' + r + '" disabled="disabled" class="disabled">' + u + "</option>" : '<option value="' + r + '">' + u + "</option>")
                                                                        : (e += '<option value="' + r + '" selected="selected">' + u + "</option>");
                                                }
                                                if (((e += "</select> "), this.timePickerSeconds)) {
                                                        e += ': <select class="secondselect">';
                                                        for (r = 0; r < 60; r++) {
                                                                (u = r < 10 ? "0" + r : r), (h = i.clone().second(r)), (c = !1);
                                                                s && h.isBefore(s) && (c = !0),
                                                                        n && h.isAfter(n) && (c = !0),
                                                                        i.second() != r || c
                                                                                ? (e += c ? '<option value="' + r + '" disabled="disabled" class="disabled">' + u + "</option>" : '<option value="' + r + '">' + u + "</option>")
                                                                                : (e += '<option value="' + r + '" selected="selected">' + u + "</option>");
                                                        }
                                                        e += "</select> ";
                                                }
                                                this.timePicker24Hour ||
                                                        ((e += '<select class="ampmselect">'),
                                                        (o = d = ""),
                                                        s && i.clone().hour(12).minute(0).second(0).isBefore(s) && (d = ' disabled="disabled" class="disabled"'),
                                                        n && i.clone().hour(0).minute(0).second(0).isAfter(n) && (o = ' disabled="disabled" class="disabled"'),
                                                        12 <= i.hour()
                                                                ? (e += '<option value="AM"' + d + '>AM</option><option value="PM" selected="selected"' + o + ">PM</option>")
                                                                : (e += '<option value="AM" selected="selected"' + d + '>AM</option><option value="PM"' + o + ">PM</option>"),
                                                        (e += "</select>")),
                                                        this.container.find(".drp-calendar." + t + " .calendar-time").html(e);
                                        }
                                },
                                updateFormInputs: function () {
                                        this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))
                                                ? this.container.find("button.applyBtn").prop("disabled", !1)
                                                : this.container.find("button.applyBtn").prop("disabled", !0);
                                },
                                move: function () {
                                        var t,
                                                e = { top: 0, left: 0 },
                                                i = this.drops,
                                                s = I(window).width();
                                        switch (
                                                (this.parentEl.is("body") ||
                                                        ((e = { top: this.parentEl.offset().top - this.parentEl.scrollTop(), left: this.parentEl.offset().left - this.parentEl.scrollLeft() }),
                                                        (s = this.parentEl[0].clientWidth + this.parentEl.offset().left)),
                                                i)
                                        ) {
                                                case "auto":
                                                        (t = this.element.offset().top + this.element.outerHeight() - e.top) + this.container.outerHeight() >= this.parentEl[0].scrollHeight &&
                                                                ((t = this.element.offset().top - this.container.outerHeight() - e.top), (i = "up"));
                                                        break;
                                                case "up":
                                                        t = this.element.offset().top - this.container.outerHeight() - e.top;
                                                        break;
                                                default:
                                                        t = this.element.offset().top + this.element.outerHeight() - e.top;
                                        }
                                        this.container.css({ top: 0, left: 0, right: "auto" });
                                        var n,
                                                o = this.container.outerWidth();
                                        this.container.toggleClass("drop-up", "up" == i),
                                                "left" == this.opens
                                                        ? o + (s = s - this.element.offset().left - this.element.outerWidth()) > I(window).width()
                                                                ? this.container.css({ top: t, right: "auto", left: 9 })
                                                                : this.container.css({ top: t, right: s, left: "auto" })
                                                        : "center" == this.opens
                                                        ? (n = this.element.offset().left - e.left + this.element.outerWidth() / 2 - o / 2) < 0
                                                                ? this.container.css({ top: t, right: "auto", left: 9 })
                                                                : n + o > I(window).width()
                                                                ? this.container.css({ top: t, left: "auto", right: 0 })
                                                                : this.container.css({ top: t, left: n, right: "auto" })
                                                        : (n = this.element.offset().left - e.left) + o > I(window).width()
                                                        ? this.container.css({ top: t, left: "auto", right: 0 })
                                                        : this.container.css({ top: t, left: n, right: "auto" });
                                },
                                show: function (t) {
                                        this.isShowing ||
                                                ((this._outsideClickProxy = I.proxy(function (t) {
                                                        this.outsideClick(t);
                                                }, this)),
                                                I(document)
                                                        .on("mousedown.daterangepicker", this._outsideClickProxy)
                                                        .on("touchend.daterangepicker", this._outsideClickProxy)
                                                        .on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy)
                                                        .on("focusin.daterangepicker", this._outsideClickProxy),
                                                I(window).on(
                                                        "resize.daterangepicker",
                                                        I.proxy(function (t) {
                                                                this.move(t);
                                                        }, this)
                                                ),
                                                (this.oldStartDate = this.startDate.clone()),
                                                (this.oldEndDate = this.endDate.clone()),
                                                (this.previousRightTime = this.endDate.clone()),
                                                this.updateView(),
                                                this.container.show(),
                                                this.move(),
                                                this.element.trigger("show.daterangepicker", this),
                                                (this.isShowing = !0));
                                },
                                hide: function (t) {
                                        this.isShowing &&
                                                (this.endDate || ((this.startDate = this.oldStartDate.clone()), (this.endDate = this.oldEndDate.clone())),
                                                (this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate)) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel),
                                                this.updateElement(),
                                                I(document).off(".daterangepicker"),
                                                I(window).off(".daterangepicker"),
                                                this.container.hide(),
                                                this.element.trigger("hide.daterangepicker", this),
                                                (this.isShowing = !1));
                                },
                                toggle: function (t) {
                                        this.isShowing ? this.hide() : this.show();
                                },
                                outsideClick: function (t) {
                                        var e = I(t.target);
                                        "focusin" == t.type ||
                                                e.closest(this.element).length ||
                                                e.closest(this.container).length ||
                                                e.closest(".calendar-table").length ||
                                                (this.hide(), this.element.trigger("outsideClick.daterangepicker", this));
                                },
                                showCalendars: function () {
                                        this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this);
                                },
                                hideCalendars: function () {
                                        this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this);
                                },
                                clickRange: function (t) {
                                        t = t.target.getAttribute("data-range-key");
                                        (this.chosenLabel = t) == this.locale.customRangeLabel
                                                ? this.showCalendars()
                                                : ((t = this.ranges[t]),
                                                  (this.startDate = t[0]),
                                                  (this.endDate = t[1]),
                                                  this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")),
                                                  this.alwaysShowCalendars || this.hideCalendars(),
                                                  this.clickApply());
                                },
                                clickPrev: function (t) {
                                        I(t.target).parents(".drp-calendar").hasClass("left")
                                                ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month"))
                                                : this.rightCalendar.month.subtract(1, "month"),
                                                this.updateCalendars();
                                },
                                clickNext: function (t) {
                                        I(t.target).parents(".drp-calendar").hasClass("left")
                                                ? this.leftCalendar.month.add(1, "month")
                                                : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")),
                                                this.updateCalendars();
                                },
                                hoverDate: function (t) {
                                        var e, i, n, o, a, r;
                                        I(t.target).hasClass("available") &&
                                                ((e = (i = I(t.target).attr("data-title")).substr(1, 1)),
                                                (i = i.substr(3, 1)),
                                                (n = (I(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[e][i]),
                                                (o = this.leftCalendar),
                                                (a = this.rightCalendar),
                                                (r = this.startDate),
                                                this.endDate ||
                                                        this.container.find(".drp-calendar tbody td").each(function (t, e) {
                                                                var i, s;
                                                                I(e).hasClass("week") ||
                                                                        ((i = (s = I(e).attr("data-title")).substr(1, 1)),
                                                                        (s = s.substr(3, 1)),
                                                                        ((s = (I(e).parents(".drp-calendar").hasClass("left") ? o : a).calendar[i][s]).isAfter(r) && s.isBefore(n)) || s.isSame(n, "day")
                                                                                ? I(e).addClass("in-range")
                                                                                : I(e).removeClass("in-range"));
                                                        }));
                                },
                                clickDate: function (t) {
                                        var e, i, s, n, o, a;
                                        I(t.target).hasClass("available") &&
                                                ((e = (i = I(t.target).attr("data-title")).substr(1, 1)),
                                                (i = i.substr(3, 1)),
                                                (i = (I(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[e][i]),
                                                this.endDate || i.isBefore(this.startDate, "day")
                                                        ? (this.timePicker &&
                                                                  ((s = parseInt(this.container.find(".left .hourselect").val(), 10)),
                                                                  this.timePicker24Hour || ("PM" === (n = this.container.find(".left .ampmselect").val()) && s < 12 && (s += 12), "AM" === n && 12 === s && (s = 0)),
                                                                  (o = parseInt(this.container.find(".left .minuteselect").val(), 10)),
                                                                  isNaN(o) && (o = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)),
                                                                  (a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0),
                                                                  (i = i.clone().hour(s).minute(o).second(a))),
                                                          (this.endDate = null),
                                                          this.setStartDate(i.clone()))
                                                        : !this.endDate && i.isBefore(this.startDate)
                                                        ? this.setEndDate(this.startDate.clone())
                                                        : (this.timePicker &&
                                                                  ((s = parseInt(this.container.find(".right .hourselect").val(), 10)),
                                                                  this.timePicker24Hour || ("PM" === (n = this.container.find(".right .ampmselect").val()) && s < 12 && (s += 12), "AM" === n && 12 === s && (s = 0)),
                                                                  (o = parseInt(this.container.find(".right .minuteselect").val(), 10)),
                                                                  isNaN(o) && (o = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)),
                                                                  (a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0),
                                                                  (i = i.clone().hour(s).minute(o).second(a))),
                                                          this.setEndDate(i.clone()),
                                                          this.autoApply && (this.calculateChosenLabel(), this.clickApply())),
                                                this.singleDatePicker && (this.setEndDate(this.startDate), !this.timePicker && this.autoApply && this.clickApply()),
                                                this.updateView(),
                                                t.stopPropagation());
                                },
                                calculateChosenLabel: function () {
                                        var t,
                                                e = !0,
                                                i = 0;
                                        for (t in this.ranges) {
                                                if (this.timePicker) {
                                                        var s = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                                                        if (this.startDate.format(s) == this.ranges[t][0].format(s) && this.endDate.format(s) == this.ranges[t][1].format(s)) {
                                                                (e = !1),
                                                                        (this.chosenLabel = this.container
                                                                                .find(".ranges li:eq(" + i + ")")
                                                                                .addClass("active")
                                                                                .attr("data-range-key"));
                                                                break;
                                                        }
                                                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[t][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[t][1].format("YYYY-MM-DD")) {
                                                        (e = !1),
                                                                (this.chosenLabel = this.container
                                                                        .find(".ranges li:eq(" + i + ")")
                                                                        .addClass("active")
                                                                        .attr("data-range-key"));
                                                        break;
                                                }
                                                i++;
                                        }
                                        e && (this.showCustomRangeLabel ? (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key")) : (this.chosenLabel = null), this.showCalendars());
                                },
                                clickApply: function (t) {
                                        this.hide(), this.element.trigger("apply.daterangepicker", this);
                                },
                                clickCancel: function (t) {
                                        (this.startDate = this.oldStartDate), (this.endDate = this.oldEndDate), this.hide(), this.element.trigger("cancel.daterangepicker", this);
                                },
                                monthOrYearChanged: function (t) {
                                        var e = I(t.target).closest(".drp-calendar").hasClass("left"),
                                                i = e ? "left" : "right",
                                                t = this.container.find(".drp-calendar." + i),
                                                i = parseInt(t.find(".monthselect").val(), 10),
                                                t = t.find(".yearselect").val();
                                        e || ((t < this.startDate.year() || (t == this.startDate.year() && i < this.startDate.month())) && ((i = this.startDate.month()), (t = this.startDate.year()))),
                                                this.minDate && (t < this.minDate.year() || (t == this.minDate.year() && i < this.minDate.month())) && ((i = this.minDate.month()), (t = this.minDate.year())),
                                                this.maxDate && (t > this.maxDate.year() || (t == this.maxDate.year() && i > this.maxDate.month())) && ((i = this.maxDate.month()), (t = this.maxDate.year())),
                                                e
                                                        ? (this.leftCalendar.month.month(i).year(t), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month")))
                                                        : (this.rightCalendar.month.month(i).year(t), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))),
                                                this.updateCalendars();
                                },
                                timeChanged: function (t) {
                                        var e = I(t.target).closest(".drp-calendar"),
                                                i = e.hasClass("left"),
                                                s = parseInt(e.find(".hourselect").val(), 10),
                                                n = parseInt(e.find(".minuteselect").val(), 10);
                                        isNaN(n) && (n = parseInt(e.find(".minuteselect option:last").val(), 10));
                                        var o,
                                                t = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
                                        this.timePicker24Hour || ("PM" === (e = e.find(".ampmselect").val()) && s < 12 && (s += 12), "AM" === e && 12 === s && (s = 0)),
                                                i
                                                        ? ((o = this.startDate.clone()).hour(s),
                                                          o.minute(n),
                                                          o.second(t),
                                                          this.setStartDate(o),
                                                          this.singleDatePicker
                                                                  ? (this.endDate = this.startDate.clone())
                                                                  : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone()))
                                                        : this.endDate && ((o = this.endDate.clone()).hour(s), o.minute(n), o.second(t), this.setEndDate(o)),
                                                this.updateCalendars(),
                                                this.updateFormInputs(),
                                                this.renderTimePicker("left"),
                                                this.renderTimePicker("right");
                                },
                                elementChanged: function () {
                                        var t, e, i;
                                        this.element.is("input") &&
                                                this.element.val().length &&
                                                ((i = e = null),
                                                2 === (t = this.element.val().split(this.locale.separator)).length && ((e = P(t[0], this.locale.format)), (i = P(t[1], this.locale.format))),
                                                (!this.singleDatePicker && null !== e && null !== i) || (i = e = P(this.element.val(), this.locale.format)),
                                                e.isValid() && i.isValid() && (this.setStartDate(e), this.setEndDate(i), this.updateView()));
                                },
                                keydown: function (t) {
                                        (9 !== t.keyCode && 13 !== t.keyCode) || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide());
                                },
                                updateElement: function () {
                                        var t;
                                        this.element.is("input") &&
                                                this.autoUpdateInput &&
                                                ((t = this.startDate.format(this.locale.format)),
                                                this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)),
                                                t !== this.element.val() && this.element.val(t).trigger("change"));
                                },
                                remove: function () {
                                        this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData();
                                },
                        }),
                        (I.fn.daterangepicker = function (t, e) {
                                var i = I.extend(!0, {}, I.fn.daterangepicker.defaultOptions, t);
                                return (
                                        this.each(function () {
                                                var t = I(this);
                                                t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new s(t, i, e));
                                        }),
                                        this
                                );
                        }),
                        s
                );
        }),
        (function (d, u, s) {
                "use strict";
                function o(t, e) {
                        (this.widget = ""),
                                (this.$element = d(t)),
                                (this.defaultTime = e.defaultTime),
                                (this.disableFocus = e.disableFocus),
                                (this.disableMousewheel = e.disableMousewheel),
                                (this.isOpen = e.isOpen),
                                (this.minuteStep = e.minuteStep),
                                (this.modalBackdrop = e.modalBackdrop),
                                (this.orientation = e.orientation),
                                (this.secondStep = e.secondStep),
                                (this.showInputs = e.showInputs),
                                (this.showMeridian = e.showMeridian),
                                (this.showSeconds = e.showSeconds),
                                (this.template = e.template),
                                (this.appendWidgetTo = e.appendWidgetTo),
                                (this.showWidgetOnAddonClick = e.showWidgetOnAddonClick),
                                this._init();
                }
                (o.prototype = {
                        constructor: o,
                        _init: function () {
                                var t = this;
                                this.showWidgetOnAddonClick && (this.$element.parent().hasClass("input-append") || this.$element.parent().hasClass("input-prepend"))
                                        ? (this.$element
                                                  .parent(".input-append, .input-prepend")
                                                  .find(".add-on")
                                                  .on({ "click.timepicker": d.proxy(this.showWidget, this) }),
                                          this.$element.on({
                                                  "focus.timepicker": d.proxy(this.highlightUnit, this),
                                                  "click.timepicker": d.proxy(this.highlightUnit, this),
                                                  "keydown.timepicker": d.proxy(this.elementKeydown, this),
                                                  "blur.timepicker": d.proxy(this.blurElement, this),
                                                  "mousewheel.timepicker DOMMouseScroll.timepicker": d.proxy(this.mousewheel, this),
                                          }))
                                        : this.template
                                        ? this.$element.on({
                                                  "focus.timepicker": d.proxy(this.showWidget, this),
                                                  "click.timepicker": d.proxy(this.showWidget, this),
                                                  "blur.timepicker": d.proxy(this.blurElement, this),
                                                  "mousewheel.timepicker DOMMouseScroll.timepicker": d.proxy(this.mousewheel, this),
                                          })
                                        : this.$element.on({
                                                  "focus.timepicker": d.proxy(this.highlightUnit, this),
                                                  "click.timepicker": d.proxy(this.highlightUnit, this),
                                                  "keydown.timepicker": d.proxy(this.elementKeydown, this),
                                                  "blur.timepicker": d.proxy(this.blurElement, this),
                                                  "mousewheel.timepicker DOMMouseScroll.timepicker": d.proxy(this.mousewheel, this),
                                          }),
                                        !1 !== this.template ? (this.$widget = d(this.getTemplate()).on("click", d.proxy(this.widgetClick, this))) : (this.$widget = !1),
                                        this.showInputs &&
                                                !1 !== this.$widget &&
                                                this.$widget.find("input").each(function () {
                                                        d(this).on({
                                                                "click.timepicker": function () {
                                                                        d(this).select();
                                                                },
                                                                "keydown.timepicker": d.proxy(t.widgetKeydown, t),
                                                                "keyup.timepicker": d.proxy(t.widgetKeyup, t),
                                                        });
                                                }),
                                        this.setDefaultTime(this.defaultTime);
                        },
                        blurElement: function () {
                                (this.highlightedUnit = null), this.updateFromElementVal();
                        },
                        clear: function () {
                                (this.hour = ""), (this.minute = ""), (this.second = ""), (this.meridian = ""), this.$element.val("");
                        },
                        decrementHour: function () {
                                if (this.showMeridian)
                                        if (1 === this.hour) this.hour = 12;
                                        else {
                                                if (12 === this.hour) return this.hour--, this.toggleMeridian();
                                                {
                                                        if (0 === this.hour) return (this.hour = 11), this.toggleMeridian();
                                                        this.hour--;
                                                }
                                        }
                                else this.hour <= 0 ? (this.hour = 23) : this.hour--;
                        },
                        decrementMinute: function (t) {
                                t = t ? this.minute - t : this.minute - this.minuteStep;
                                t < 0 ? (this.decrementHour(), (this.minute = t + 60)) : (this.minute = t);
                        },
                        decrementSecond: function () {
                                var t = this.second - this.secondStep;
                                t < 0 ? (this.decrementMinute(!0), (this.second = 60 + t)) : (this.second = t);
                        },
                        elementKeydown: function (t) {
                                switch (t.keyCode) {
                                        case 9:
                                        case 27:
                                                this.updateFromElementVal();
                                                break;
                                        case 37:
                                                t.preventDefault(), this.highlightPrevUnit();
                                                break;
                                        case 38:
                                                switch ((t.preventDefault(), this.highlightedUnit)) {
                                                        case "hour":
                                                                this.incrementHour(), this.highlightHour();
                                                                break;
                                                        case "minute":
                                                                this.incrementMinute(), this.highlightMinute();
                                                                break;
                                                        case "second":
                                                                this.incrementSecond(), this.highlightSecond();
                                                                break;
                                                        case "meridian":
                                                                this.toggleMeridian(), this.highlightMeridian();
                                                }
                                                this.update();
                                                break;
                                        case 39:
                                                t.preventDefault(), this.highlightNextUnit();
                                                break;
                                        case 40:
                                                switch ((t.preventDefault(), this.highlightedUnit)) {
                                                        case "hour":
                                                                this.decrementHour(), this.highlightHour();
                                                                break;
                                                        case "minute":
                                                                this.decrementMinute(), this.highlightMinute();
                                                                break;
                                                        case "second":
                                                                this.decrementSecond(), this.highlightSecond();
                                                                break;
                                                        case "meridian":
                                                                this.toggleMeridian(), this.highlightMeridian();
                                                }
                                                this.update();
                                }
                        },
                        getCursorPosition: function () {
                                var t = this.$element.get(0);
                                if ("selectionStart" in t) return t.selectionStart;
                                if (s.selection) {
                                        t.focus();
                                        var e = s.selection.createRange(),
                                                i = s.selection.createRange().text.length;
                                        return e.moveStart("character", -t.value.length), e.text.length - i;
                                }
                        },
                        getTemplate: function () {
                                var t,
                                        e,
                                        i,
                                        s,
                                        n = this.showInputs
                                                ? ((e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>'),
                                                  (i = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>'),
                                                  (s = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>'),
                                                  '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>')
                                                : ((e = '<span class="bootstrap-timepicker-hour"></span>'),
                                                  (i = '<span class="bootstrap-timepicker-minute"></span>'),
                                                  (s = '<span class="bootstrap-timepicker-second"></span>'),
                                                  '<span class="bootstrap-timepicker-meridian"></span>'),
                                        o =
                                                '<table><tr><td><a href="#" data-action="incrementHour"><i class="icon-up-open-big"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-up-open-big"></i></a></td>' +
                                                (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-up-open-big"></i></a></td>' : "") +
                                                (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-up-open-big"></i></a></td>' : "") +
                                                "</tr><tr><td>" +
                                                e +
                                                '</td> <td class="separator">:</td><td>' +
                                                i +
                                                "</td> " +
                                                (this.showSeconds ? '<td class="separator">:</td><td>' + s + "</td>" : "") +
                                                (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + n + "</td>" : "") +
                                                '</tr><tr><td><a href="#" data-action="decrementHour"><i class="icon-down-open-big"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="icon-down-open-big"></i></a></td>' +
                                                (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-down-open-big"></i></a></td>' : "") +
                                                (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-down-open-big"></i></a></td>' : "") +
                                                "</tr></table>";
                                switch (this.template) {
                                        case "modal":
                                                t =
                                                        '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' +
                                                        (this.modalBackdrop ? "true" : "false") +
                                                        '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">' +
                                                        o +
                                                        '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                                                break;
                                        case "dropdown":
                                                t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + o + "</div>";
                                }
                                return t;
                        },
                        getTime: function () {
                                return "" === this.hour
                                        ? ""
                                        : this.hour +
                                                  ":" +
                                                  (1 === this.minute.toString().length ? "0" + this.minute : this.minute) +
                                                  (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") +
                                                  (this.showMeridian ? " " + this.meridian : "");
                        },
                        hideWidget: function () {
                                !1 !== this.isOpen &&
                                        (this.$element.trigger({ type: "hide.timepicker", time: { value: this.getTime(), hours: this.hour, minutes: this.minute, seconds: this.second, meridian: this.meridian } }),
                                        "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"),
                                        d(s).off("mousedown.timepicker, touchend.timepicker"),
                                        (this.isOpen = !1),
                                        this.$widget.detach());
                        },
                        highlightUnit: function () {
                                (this.position = this.getCursorPosition()),
                                        0 <= this.position && this.position <= 2
                                                ? this.highlightHour()
                                                : 3 <= this.position && this.position <= 5
                                                ? this.highlightMinute()
                                                : 6 <= this.position && this.position <= 8
                                                ? this.showSeconds
                                                        ? this.highlightSecond()
                                                        : this.highlightMeridian()
                                                : 9 <= this.position && this.position <= 11 && this.highlightMeridian();
                        },
                        highlightNextUnit: function () {
                                switch (this.highlightedUnit) {
                                        case "hour":
                                                this.highlightMinute();
                                                break;
                                        case "minute":
                                                this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                                                break;
                                        case "second":
                                                this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                                                break;
                                        case "meridian":
                                                this.highlightHour();
                                }
                        },
                        highlightPrevUnit: function () {
                                switch (this.highlightedUnit) {
                                        case "hour":
                                                this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                                                break;
                                        case "minute":
                                                this.highlightHour();
                                                break;
                                        case "second":
                                                this.highlightMinute();
                                                break;
                                        case "meridian":
                                                this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                                }
                        },
                        highlightHour: function () {
                                var t = this.$element.get(0),
                                        e = this;
                                (this.highlightedUnit = "hour"),
                                        t.setSelectionRange &&
                                                setTimeout(function () {
                                                        e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2);
                                                }, 0);
                        },
                        highlightMinute: function () {
                                var t = this.$element.get(0),
                                        e = this;
                                (this.highlightedUnit = "minute"),
                                        t.setSelectionRange &&
                                                setTimeout(function () {
                                                        e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5);
                                                }, 0);
                        },
                        highlightSecond: function () {
                                var t = this.$element.get(0),
                                        e = this;
                                (this.highlightedUnit = "second"),
                                        t.setSelectionRange &&
                                                setTimeout(function () {
                                                        e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8);
                                                }, 0);
                        },
                        highlightMeridian: function () {
                                var t = this.$element.get(0),
                                        e = this;
                                (this.highlightedUnit = "meridian"),
                                        t.setSelectionRange &&
                                                (this.showSeconds
                                                        ? setTimeout(function () {
                                                                  e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11);
                                                          }, 0)
                                                        : setTimeout(function () {
                                                                  e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8);
                                                          }, 0));
                        },
                        incrementHour: function () {
                                if (this.showMeridian) {
                                        if (11 === this.hour) return this.hour++, this.toggleMeridian();
                                        12 === this.hour && (this.hour = 0);
                                }
                                23 !== this.hour ? this.hour++ : (this.hour = 0);
                        },
                        incrementMinute: function (t) {
                                t = t ? this.minute + t : this.minute + this.minuteStep - (this.minute % this.minuteStep);
                                59 < t ? (this.incrementHour(), (this.minute = t - 60)) : (this.minute = t);
                        },
                        incrementSecond: function () {
                                var t = this.second + this.secondStep - (this.second % this.secondStep);
                                59 < t ? (this.incrementMinute(!0), (this.second = t - 60)) : (this.second = t);
                        },
                        mousewheel: function (t) {
                                if (!this.disableMousewheel) {
                                        t.preventDefault(), t.stopPropagation();
                                        var e = t.originalEvent.wheelDelta || -t.originalEvent.detail,
                                                i = null;
                                        switch (
                                                ("mousewheel" === t.type ? (i = -1 * t.originalEvent.wheelDelta) : "DOMMouseScroll" === t.type && (i = 40 * t.originalEvent.detail),
                                                i && (t.preventDefault(), d(this).scrollTop(i + d(this).scrollTop())),
                                                this.highlightedUnit)
                                        ) {
                                                case "minute":
                                                        0 < e ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                                                        break;
                                                case "second":
                                                        0 < e ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                                                        break;
                                                case "meridian":
                                                        this.toggleMeridian(), this.highlightMeridian();
                                                        break;
                                                default:
                                                        0 < e ? this.incrementHour() : this.decrementHour(), this.highlightHour();
                                        }
                                        return !1;
                                }
                        },
                        place: function () {
                                var t, e, i, s, n, o, a, r, l, h, c;
                                this.isInline ||
                                        ((h = this.$widget.outerWidth()),
                                        (t = this.$widget.outerHeight()),
                                        (l = d(u).width()),
                                        (e = d(u).height()),
                                        (i = d(u).scrollTop()),
                                        (s =
                                                parseInt(
                                                        this.$element
                                                                .parents()
                                                                .filter(function () {})
                                                                .first()
                                                                .css("z-index"),
                                                        10
                                                ) + 10),
                                        (c = (this.component ? this.component.parent() : this.$element).offset()),
                                        (n = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1)),
                                        (o = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1)),
                                        (a = c.left),
                                        (r = c.top),
                                        this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),
                                        "auto" !== this.orientation.x
                                                ? (this.picker.addClass("datepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (a -= h - o))
                                                : (this.$widget.addClass("timepicker-orient-left"), c.left < 0 ? (a -= c.left - 10) : c.left + h > l && (a = l - h - 10)),
                                        "auto" === (l = this.orientation.y) && ((h = -i + c.top - t), (c = i + e - (c.top + n + t)), (l = Math.max(h, c) === c ? "top" : "bottom")),
                                        this.$widget.addClass("timepicker-orient-" + l),
                                        "top" === l ? ("body" != this.appendWidgetTo ? ((r = "100%"), (a = "0")) : (r += n)) : "body" != this.appendWidgetTo ? ((r = -t), (a = "0")) : (r -= t + parseInt(this.$widget.css("padding-top"), 10)),
                                        this.$widget.css({ top: r, left: a, zIndex: s }));
                        },
                        remove: function () {
                                d("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker;
                        },
                        setDefaultTime: function (t) {
                                var e, i, s, n, o;
                                this.$element.val()
                                        ? this.updateFromElementVal()
                                        : "current" === t
                                        ? ((i = (e = new Date()).getHours()),
                                          (s = e.getMinutes()),
                                          (o = "AM"),
                                          0 !== (n = e.getSeconds()) && 60 === (n = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep) && ((s += 1), (n = 0)),
                                          0 !== s && 60 === (s = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep) && ((i += 1), (s = 0)),
                                          this.showMeridian && (0 === i ? (i = 12) : (o = 12 <= i ? (12 < i && (i -= 12), "PM") : "AM")),
                                          (this.hour = i),
                                          (this.minute = s),
                                          (this.second = n),
                                          (this.meridian = o),
                                          this.update())
                                        : !1 === t
                                        ? ((this.hour = 0), (this.minute = 0), (this.second = 0), (this.meridian = "AM"))
                                        : this.setTime(t);
                        },
                        setTime: function (t, e) {
                                var i, s, n, o;
                                t
                                        ? ("object" == typeof t && t.getMonth
                                                  ? ((i = t.getHours()), (s = t.getMinutes()), (n = t.getSeconds()), this.showMeridian && ((o = "AM"), 12 < i && ((o = "PM"), (i %= 12)), 12 === i && (o = "PM")))
                                                  : ((o = null !== t.match(/p/i) ? "PM" : "AM"),
                                                    (i = ((t = (t = t.replace(/[^0-9\:]/g, "")).split(":"))[0] || t).toString()),
                                                    (s = t[1] ? t[1].toString() : ""),
                                                    (n = t[2] ? t[2].toString() : ""),
                                                    4 < i.length && (n = i.substr(4, 2)),
                                                    2 < i.length && ((s = i.substr(2, 2)), (i = i.substr(0, 2))),
                                                    2 < s.length && ((n = s.substr(2, 2)), (s = s.substr(0, 2))),
                                                    2 < n.length && (n = n.substr(2, 2)),
                                                    (i = parseInt(i, 10)),
                                                    (s = parseInt(s, 10)),
                                                    (n = parseInt(n, 10)),
                                                    isNaN(i) && (i = 0),
                                                    isNaN(s) && (s = 0),
                                                    isNaN(n) && (n = 0),
                                                    this.showMeridian ? (i < 1 ? (i = 1) : 12 < i && (i = 12)) : (24 <= i ? (i = 23) : i < 0 && (i = 0), i < 13 && "PM" === o && (i += 12)),
                                                    s < 0 ? (s = 0) : 60 <= s && (s = 59),
                                                    this.showSeconds && (isNaN(n) || n < 0 ? (n = 0) : 60 <= n && (n = 59))),
                                          (this.hour = i),
                                          (this.minute = s),
                                          (this.second = n),
                                          (this.meridian = o),
                                          this.update(e))
                                        : this.clear();
                        },
                        showWidget: function () {
                                var e;
                                this.isOpen ||
                                        this.$element.is(":disabled") ||
                                        (this.$widget.appendTo(this.appendWidgetTo),
                                        (e = this),
                                        d(s).on("mousedown.timepicker, touchend.timepicker", function (t) {
                                                e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget();
                                        }),
                                        this.$element.trigger({ type: "show.timepicker", time: { value: this.getTime(), hours: this.hour, minutes: this.minute, seconds: this.second, meridian: this.meridian } }),
                                        this.place(),
                                        this.disableFocus && this.$element.blur(),
                                        "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")),
                                        "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", d.proxy(this.hideWidget, this)) : !1 === this.isOpen && this.$widget.addClass("open"),
                                        (this.isOpen = !0));
                        },
                        toggleMeridian: function () {
                                this.meridian = "AM" === this.meridian ? "PM" : "AM";
                        },
                        update: function (t) {
                                this.updateElement(),
                                        t || this.updateWidget(),
                                        this.$element.trigger({ type: "changeTime.timepicker", time: { value: this.getTime(), hours: this.hour, minutes: this.minute, seconds: this.second, meridian: this.meridian } });
                        },
                        updateElement: function () {
                                this.$element.val(this.getTime()).change();
                        },
                        updateFromElementVal: function () {
                                this.setTime(this.$element.val());
                        },
                        updateWidget: function () {
                                var t, e, i;
                                !1 !== this.$widget &&
                                        ((t = this.hour),
                                        (e = 1 === this.minute.toString().length ? "0" + this.minute : this.minute),
                                        (i = 1 === this.second.toString().length ? "0" + this.second : this.second),
                                        this.showInputs
                                                ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t),
                                                  this.$widget.find("input.bootstrap-timepicker-minute").val(e),
                                                  this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(i),
                                                  this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian))
                                                : (this.$widget.find("span.bootstrap-timepicker-hour").text(t),
                                                  this.$widget.find("span.bootstrap-timepicker-minute").text(e),
                                                  this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(i),
                                                  this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian)));
                        },
                        updateFromWidgetInputs: function () {
                                var t;
                                !1 !== this.$widget &&
                                        ((t =
                                                this.$widget.find("input.bootstrap-timepicker-hour").val() +
                                                ":" +
                                                this.$widget.find("input.bootstrap-timepicker-minute").val() +
                                                (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") +
                                                (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "")),
                                        this.setTime(t, !0));
                        },
                        widgetClick: function (t) {
                                t.stopPropagation(), t.preventDefault();
                                var e = d(t.target),
                                        t = e.closest("a").data("action");
                                t && this[t](), this.update(), e.is("input") && e.get(0).setSelectionRange(0, 2);
                        },
                        widgetKeydown: function (t) {
                                var e = d(t.target),
                                        i = e.attr("class").replace("bootstrap-timepicker-", "");
                                switch (t.keyCode) {
                                        case 9:
                                                if ((this.showMeridian && "meridian" === i) || (this.showSeconds && "second" === i) || (!this.showMeridian && !this.showSeconds && "minute" === i)) return this.hideWidget();
                                                break;
                                        case 27:
                                                this.hideWidget();
                                                break;
                                        case 38:
                                                switch ((t.preventDefault(), i)) {
                                                        case "hour":
                                                                this.incrementHour();
                                                                break;
                                                        case "minute":
                                                                this.incrementMinute();
                                                                break;
                                                        case "second":
                                                                this.incrementSecond();
                                                                break;
                                                        case "meridian":
                                                                this.toggleMeridian();
                                                }
                                                this.setTime(this.getTime()), e.get(0).setSelectionRange(0, 2);
                                                break;
                                        case 40:
                                                switch ((t.preventDefault(), i)) {
                                                        case "hour":
                                                                this.decrementHour();
                                                                break;
                                                        case "minute":
                                                                this.decrementMinute();
                                                                break;
                                                        case "second":
                                                                this.decrementSecond();
                                                                break;
                                                        case "meridian":
                                                                this.toggleMeridian();
                                                }
                                                this.setTime(this.getTime()), e.get(0).setSelectionRange(0, 2);
                                }
                        },
                        widgetKeyup: function (t) {
                                (65 === t.keyCode || 77 === t.keyCode || 80 === t.keyCode || 46 === t.keyCode || 8 === t.keyCode || (46 <= t.keyCode && t.keyCode <= 57)) && this.updateFromWidgetInputs();
                        },
                }),
                        (d.fn.timepicker = function (s) {
                                var n = Array.apply(null, arguments);
                                return (
                                        n.shift(),
                                        this.each(function () {
                                                var t = d(this),
                                                        e = t.data("timepicker"),
                                                        i = "object" == typeof s && s;
                                                e || t.data("timepicker", (e = new o(this, d.extend({}, d.fn.timepicker.defaults, i, d(this).data())))), "string" == typeof s && e[s].apply(e, n);
                                        })
                                );
                        }),
                        (d.fn.timepicker.defaults = {
                                defaultTime: "current",
                                disableFocus: !1,
                                disableMousewheel: !1,
                                isOpen: !1,
                                minuteStep: 15,
                                modalBackdrop: !1,
                                orientation: { x: "auto", y: "auto" },
                                secondStep: 15,
                                showSeconds: !1,
                                showInputs: !0,
                                showMeridian: !0,
                                template: "dropdown",
                                appendWidgetTo: "body",
                                showWidgetOnAddonClick: !0,
                        }),
                        (d.fn.timepicker.Constructor = o);
        })(jQuery, window, document);
