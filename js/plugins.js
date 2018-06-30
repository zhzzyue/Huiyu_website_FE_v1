// jQuery Easing
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(n, e, t, u, a) {
		return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
	},
	easeInQuad: function(n, e, t, u, a) {
		return u * (e /= a) * e + t
	},
	easeOutQuad: function(n, e, t, u, a) {
		return -u * (e /= a) * (e - 2) + t
	},
	easeInOutQuad: function(n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
	},
	easeInCubic: function(n, e, t, u, a) {
		return u * (e /= a) * e * e + t
	},
	easeOutCubic: function(n, e, t, u, a) {
		return u * ((e = e / a - 1) * e * e + 1) + t
	},
	easeInOutCubic: function(n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
	},
	easeInQuart: function(n, e, t, u, a) {
		return u * (e /= a) * e * e * e + t
	},
	easeOutQuart: function(n, e, t, u, a) {
		return -u * ((e = e / a - 1) * e * e * e - 1) + t
	},
	easeInOutQuart: function(n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
	},
	easeInQuint: function(n, e, t, u, a) {
		return u * (e /= a) * e * e * e * e + t
	},
	easeOutQuint: function(n, e, t, u, a) {
		return u * ((e = e / a - 1) * e * e * e * e + 1) + t
	},
	easeInOutQuint: function(n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
	},
	easeInSine: function(n, e, t, u, a) {
		return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
	},
	easeOutSine: function(n, e, t, u, a) {
		return u * Math.sin(e / a * (Math.PI / 2)) + t
	},
	easeInOutSine: function(n, e, t, u, a) {
		return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
	},
	easeInExpo: function(n, e, t, u, a) {
		return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
	},
	easeOutExpo: function(n, e, t, u, a) {
		return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
	},
	easeInOutExpo: function(n, e, t, u, a) {
		return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
	},
	easeInCirc: function(n, e, t, u, a) {
		return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
	},
	easeOutCirc: function(n, e, t, u, a) {
		return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
	},
	easeInOutCirc: function(n, e, t, u, a) {
		return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
	},
	easeInElastic: function(n, e, t, u, a) {
		var r = 1.70158,
			i = 0,
			s = u;
		if (0 == e) return t;
		if (1 == (e /= a)) return t + u;
		if (i || (i = .3 * a), s < Math.abs(u)) {
			s = u;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(u / s);
		return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
	},
	easeOutElastic: function(n, e, t, u, a) {
		var r = 1.70158,
			i = 0,
			s = u;
		if (0 == e) return t;
		if (1 == (e /= a)) return t + u;
		if (i || (i = .3 * a), s < Math.abs(u)) {
			s = u;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(u / s);
		return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
	},
	easeInOutElastic: function(n, e, t, u, a) {
		var r = 1.70158,
			i = 0,
			s = u;
		if (0 == e) return t;
		if (2 == (e /= a / 2)) return t + u;
		if (i || (i = .3 * a * 1.5), s < Math.abs(u)) {
			s = u;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(u / s);
		return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
	},
	easeInBack: function(n, e, t, u, a, r) {
		return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
	},
	easeOutBack: function(n, e, t, u, a, r) {
		return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
	},
	easeInOutBack: function(n, e, t, u, a, r) {
		return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
	},
	easeInBounce: function(n, e, t, u, a) {
		return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
	},
	easeOutBounce: function(n, e, t, u, a) {
		return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
	},
	easeInOutBounce: function(n, e, t, u, a) {
		return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
	}
});

// Images Loaded
(function() {
	function e() {}
	function t(e, t) {
		for (var n = e.length; n--;) if (e[n].listener === t) return n;
		return -1
	}
	function n(e) {
		return function() {
			return this[e].apply(this, arguments)
		}
	}
	var i = e.prototype,
		r = this,
		o = r.EventEmitter;
	i.getListeners = function(e) {
		var t, n, i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, i.flattenListeners = function(e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, i.getListenersAsObject = function(e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, i.addListener = function(e, n) {
		var i, r = this.getListenersAsObject(e),
			o = "object" == typeof n;
		for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
			listener: n,
			once: !1
		});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function(e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, i.once = n("addOnceListener"), i.defineEvent = function(e) {
		return this.getListeners(e), this
	}, i.defineEvents = function(e) {
		for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, i.removeListener = function(e, n) {
		var i, r, o = this.getListenersAsObject(e);
		for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function(e, t) {
		return this.manipulateListeners(!1, e, t)
	}, i.removeListeners = function(e, t) {
		return this.manipulateListeners(!0, e, t)
	}, i.manipulateListeners = function(e, t, n) {
		var i, r, o = e ? this.removeListener : this.addListener,
			s = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]);
		else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
		return this
	}, i.removeEvent = function(e) {
		var t, n = typeof e,
			i = this._getEvents();
		if ("string" === n) delete i[e];
		else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
		else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
		var n, i, r, o, s = this.getListenersAsObject(e);
		for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, i.setOnceReturnValue = function(e) {
		return this._onceReturnValue = e, this
	}, i._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function() {
		return this._events || (this._events = {})
	}, e.noConflict = function() {
		return r.EventEmitter = o, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function(e) {
	function t(t) {
		var n = e.event;
		return n.target = n.target || n.srcElement || t, n
	}
	var n = document.documentElement,
		i = function() {};
	n.addEventListener ? i = function(e, t, n) {
		e.addEventListener(t, n, !1)
	} : n.attachEvent && (i = function(e, n, i) {
		e[n + i] = i.handleEvent ?
		function() {
			var n = t(e);
			i.handleEvent.call(i, n)
		} : function() {
			var n = t(e);
			i.call(e, n)
		}, e.attachEvent("on" + n, e[n + i])
	});
	var r = function() {};
	n.removeEventListener ? r = function(e, t, n) {
		e.removeEventListener(t, n, !1)
	} : n.detachEvent && (r = function(e, t, n) {
		e.detachEvent("on" + t, e[t + n]);
		try {
			delete e[t + n]
		} catch (i) {
			e[t + n] = void 0
		}
	});
	var o = {
		bind: i,
		unbind: r
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function(e, t) {
	"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
		return t(e, n, i)
	}) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function(e, t, n) {
	function i(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}
	function r(e) {
		return "[object Array]" === d.call(e)
	}
	function o(e) {
		var t = [];
		if (r(e)) t = e;
		else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
		else t.push(e);
		return t
	}
	function s(e, t, n) {
		if (!(this instanceof s)) return new s(e, t);
		"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
		var r = this;
		setTimeout(function() {
			r.check()
		})
	}
	function f(e) {
		this.img = e
	}
	function c(e) {
		this.src = e, v[e] = this
	}
	var a = e.jQuery,
		u = e.console,
		h = u !== void 0,
		d = Object.prototype.toString;
	s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
		this.images = [];
		for (var e = 0, t = this.elements.length; t > e; e++) {
			var n = this.elements[e];
			"IMG" === n.nodeName && this.addImage(n);
			var i = n.nodeType;
			if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
				var f = r[o];
				this.addImage(f)
			}
		}
	}, s.prototype.addImage = function(e) {
		var t = new f(e);
		this.images.push(t)
	}, s.prototype.check = function() {
		function e(e, r) {
			return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
		}
		var t = this,
			n = 0,
			i = this.images.length;
		if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
		for (var r = 0; i > r; r++) {
			var o = this.images[r];
			o.on("confirm", e), o.check()
		}
	}, s.prototype.progress = function(e) {
		this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
		var t = this;
		setTimeout(function() {
			t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
		})
	}, s.prototype.complete = function() {
		var e = this.hasAnyBroken ? "fail" : "done";
		this.isComplete = !0;
		var t = this;
		setTimeout(function() {
			if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
				var n = t.hasAnyBroken ? "reject" : "resolve";
				t.jqDeferred[n](t)
			}
		})
	}, a && (a.fn.imagesLoaded = function(e, t) {
		var n = new s(this, e, t);
		return n.jqDeferred.promise(a(this))
	}), f.prototype = new t, f.prototype.check = function() {
		var e = v[this.img.src] || new c(this.img.src);
		if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
		if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
		var t = this;
		e.on("confirm", function(e, n) {
			return t.confirm(e.isLoaded, n), !0
		}), e.check()
	}, f.prototype.confirm = function(e, t) {
		this.isLoaded = e, this.emit("confirm", this, t)
	};
	var v = {};
	return c.prototype = new t, c.prototype.check = function() {
		if (!this.isChecked) {
			var e = new Image;
			n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
		}
	}, c.prototype.handleEvent = function(e) {
		var t = "on" + e.type;
		this[t] && this[t](e)
	}, c.prototype.onload = function(e) {
		this.confirm(!0, "onload"), this.unbindProxyEvents(e)
	}, c.prototype.onerror = function(e) {
		this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
	}, c.prototype.confirm = function(e, t) {
		this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
	}, c.prototype.unbindProxyEvents = function(e) {
		n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
	}, s
});

// MouseWheel
!
function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}
	function c() {
		f = null
	}
	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function() {
			if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function(b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
});

// SelectBoxIt
(function(c) {
	c(window.jQuery, window, document)
})(function(c, m, w, x) {
	c.widget("selectBox.selectBoxIt", {
		VERSION: "3.8.1",
		options: {
			showEffect: "none",
			showEffectOptions: {},
			showEffectSpeed: "medium",
			hideEffect: "none",
			hideEffectOptions: {},
			hideEffectSpeed: "medium",
			showFirstOption: !0,
			defaultText: "",
			defaultIcon: "",
			downArrowIcon: "",
			theme: "default",
			keydownOpen: !0,
			isMobile: function() {
				return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(navigator.userAgent || navigator.vendor || m.opera)
			},
			"native": !1,
			aggressiveChange: !1,
			selectWhenHidden: !0,
			viewport: c(m),
			similarSearch: !1,
			copyAttributes: ["title", "rel"],
			copyClasses: "button",
			nativeMousedown: !1,
			customShowHideEvent: !1,
			autoWidth: !0,
			html: !0,
			populate: "",
			dynamicPositioning: !0,
			hideCurrent: !1
		},
		getThemes: function() {
			var a = c(this.element).attr("data-theme") || "c";
			return {
				bootstrap: {
					focus: "active",
					hover: "",
					enabled: "enabled",
					disabled: "disabled",
					arrow: "caret",
					button: "btn",
					list: "dropdown-menu",
					container: "bootstrap",
					open: "open"
				},
				jqueryui: {
					focus: "ui-state-focus",
					hover: "ui-state-hover",
					enabled: "ui-state-enabled",
					disabled: "ui-state-disabled",
					arrow: "ui-icon ui-icon-triangle-1-s",
					button: "ui-widget ui-state-default",
					list: "ui-widget ui-widget-content",
					container: "jqueryui",
					open: "selectboxit-open"
				},
				jquerymobile: {
					focus: "ui-btn-down-" + a,
					hover: "ui-btn-hover-" + a,
					enabled: "ui-enabled",
					disabled: "ui-disabled",
					arrow: "ui-icon ui-icon-arrow-d ui-icon-shadow",
					button: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + a,
					list: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + a,
					container: "jquerymobile",
					open: "selectboxit-open"
				},
				"default": {
					focus: "selectboxit-focus",
					hover: "selectboxit-hover",
					enabled: "selectboxit-enabled",
					disabled: "selectboxit-disabled",
					arrow: "selectboxit-default-arrow",
					button: "selectboxit-btn",
					list: "selectboxit-list",
					container: "selectboxit-container",
					open: "selectboxit-open"
				}
			}
		},
		isDeferred: function(a) {
			return c.isPlainObject(a) && a.promise && a.done
		},
		_create: function(a) {
			var b = this.options.populate,
				d = this.options.theme;
			if (this.element.is("select")) return this.widgetProto = c.Widget.prototype, this.originalElem = this.element[0], this.selectBox = this.element, this.options.populate && this.add && !a && this.add(b), this.selectItems = this.element.find("option"), this.firstSelectItem = this.selectItems.slice(0, 1), this.documentHeight = c(w).height(), this.theme = c.isPlainObject(d) ? c.extend({}, this.getThemes()["default"], d) : this.getThemes()[d] ? this.getThemes()[d] : this.getThemes()["default"], this.currentFocus = 0, this.blur = !0, this.textArray = [], this.currentIndex = 0, this.currentText = "", this.flipped = !1, a || (this.selectBoxStyles = this.selectBox.attr("style")), this._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(this.theme)._eventHandlers(), this.originalElem.disabled && this.disable && this.disable(), this._ariaAccessibility && this._ariaAccessibility(), this.isMobile = this.options.isMobile(), this._mobile && this._mobile(), this.options["native"] && this._applyNativeSelect(), this.triggerEvent("create"), this
		},
		_createDropdownButton: function() {
			var a = this.originalElemId = this.originalElem.id || "",
				b = this.originalElemValue = this.originalElem.value || "",
				d = this.originalElemName = this.originalElem.name || "",
				e = this.options.copyClasses,
				g = this.selectBox.attr("class") || "";
			this.dropdownText = c("<span/>", {
				id: a && a + "SelectBoxItText",
				"class": "selectboxit-text",
				unselectable: "on",
				text: this.firstSelectItem.text()
			}).attr("data-val", b);
			this.dropdownImageContainer = c("<span/>", {
				"class": "selectboxit-option-icon-container"
			});
			this.dropdownImage = c("<i/>", {
				id: a && a + "SelectBoxItDefaultIcon",
				"class": "selectboxit-default-icon",
				unselectable: "on"
			});
			this.dropdown = c("<span/>", {
				id: a && a + "SelectBoxIt",
				"class": "selectboxit " + ("button" === e ? g : "") + " " + (this.selectBox.prop("disabled") ? this.theme.disabled : this.theme.enabled),
				name: d,
				tabindex: this.selectBox.attr("tabindex") || "0",
				unselectable: "on"
			}).append(this.dropdownImageContainer.append(this.dropdownImage)).append(this.dropdownText);
			this.dropdownContainer = c("<span/>", {
				id: a && a + "SelectBoxItContainer",
				"class": "selectboxit-container " + this.theme.container + " " + ("container" === e ? g : "")
			}).append(this.dropdown);
			return this
		},
		_createUnorderedList: function() {
			var a = this,
				b, d, e, g, f, p, h, l = "",
				n = a.originalElemId || "",
				n = c("<ul/>", {
					id: n && n + "SelectBoxItOptions",
					"class": "selectboxit-options",
					tabindex: -1
				}),
				u, v, t, q, k, r;
			a.options.showFirstOption || (a.selectItems.first().attr("disabled", "disabled"), a.selectItems = a.selectBox.find("option").slice(1));
			a.selectItems.each(function(n) {
				k = c(this);
				e = d = "";
				b = k.prop("disabled");
				g = k.attr("data-icon") || "";
				p = (f = k.attr("data-iconurl") || "") ? "selectboxit-option-icon-url" : "";
				h = f ? "style=\"background-image:url('" + f + "');\"" : "";
				u = k.attr("data-selectedtext");
				q = (v = k.attr("data-text")) ? v : k.text();
				r = k.parent();
				r.is("optgroup") && (d = "selectboxit-optgroup-option", 0 === k.index() && (e = '<span class="selectboxit-optgroup-header ' + r.first().attr("class") + '"data-disabled="true">' + r.first().attr("label") + "</span>"));
				k.attr("value", this.value);
				l += e + '<li data-id="' + n + '" data-val="' + this.value + '" data-disabled="' + b + '" class="' + d + " selectboxit-option " + (c(this).attr("class") || "") + '"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon ' + g + " " + (p || a.theme.container) + '"' + h + "></i></span>" + (a.options.html ? q : a.htmlEscape(q)) + "</a></li>";
				t = k.attr("data-search");
				a.textArray[n] = b ? "" : t ? t : q;
				this.selected && (a._setText(a.dropdownText, u || q), a.currentFocus = n)
			});
			if (a.options.defaultText || a.selectBox.attr("data-text")) {
				var m = a.options.defaultText || a.selectBox.attr("data-text");
				a._setText(a.dropdownText, m);
				a.options.defaultText = m
			}
			n.append(l);
			a.list = n;
			a.dropdownContainer.append(a.list);
			a.listItems = a.list.children("li");
			a.listAnchors = a.list.find("a");
			a.listItems.first().addClass("selectboxit-option-first");
			a.listItems.last().addClass("selectboxit-option-last");
			a.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(a.theme.disabled);
			a.dropdownImage.addClass(a.selectBox.attr("data-icon") || a.options.defaultIcon || a.listItems.eq(a.currentFocus).find("i").attr("class"));
			a.dropdownImage.attr("style", a.listItems.eq(a.currentFocus).find("i").attr("style"));
			return a
		},
		_replaceSelectBox: function() {
			var a = this.originalElem.id || "",
				b = this.selectBox.attr("data-size"),
				b = this.listSize = b === x ? "auto" : "0" === b ? "auto" : +b,
				d;
			this.selectBox.css("display", "none").after(this.dropdownContainer);
			this.dropdownContainer.appendTo("body").addClass("selectboxit-rendering");
			this.dropdown.height();
			this.downArrow = c("<i/>", {
				id: a && a + "SelectBoxItArrow",
				"class": "selectboxit-arrow",
				unselectable: "on"
			});
			this.downArrowContainer = c("<span/>", {
				id: a && a + "SelectBoxItArrowContainer",
				"class": "selectboxit-arrow-container",
				unselectable: "on"
			}).append(this.downArrow);
			this.dropdown.append(this.downArrowContainer);
			this.listItems.removeClass("selectboxit-selected").eq(this.currentFocus).addClass("selectboxit-selected");
			a = this.downArrowContainer.outerWidth(!0);
			d = this.dropdownImage.outerWidth(!0);
			this.options.autoWidth && (this.dropdown.css({
				width: "auto"
			}).css({
				width: this.list.outerWidth(!0) + a + d
			}), this.list.css({
				"min-width": this.dropdown.width()
			}));
			this.dropdownText.css({
				"max-width": this.dropdownContainer.outerWidth(!0) - (a + d)
			});
			this.selectBox.after(this.dropdownContainer);
			this.dropdownContainer.removeClass("selectboxit-rendering");
			"number" === c.type(b) && (this.maxHeight = this.listAnchors.outerHeight(!0) * b);
			return this
		},
		_scrollToView: function(a) {
			var b = this.listItems.eq(this.currentFocus),
				d = this.list.scrollTop(),
				c = b.height(),
				b = b.position().top,
				g = Math.abs(b),
				f = this.list.height();
			"search" === a ? f - b < c ? this.list.scrollTop(d + (b - (f - c))) : -1 > b && this.list.scrollTop(b - c) : "up" === a ? -1 > b && this.list.scrollTop(d - g) : "down" === a && f - b < c && this.list.scrollTop(d + (g - f + c));
			return this
		},
		_callbackSupport: function(a) {
			c.isFunction(a) && a.call(this, this.dropdown);
			return this
		},
		_setText: function(a, b) {
			this.options.html ? a.html(b) : a.text(b);
			return this
		},
		open: function(a) {
			var b = this,
				d = b.options.showEffect,
				c = b.options.showEffectSpeed,
				g = b.options.showEffectOptions,
				f = b.options["native"],
				p = b.isMobile;
			if (!b.listItems.length || b.dropdown.hasClass(b.theme.disabled)) return b;
			if (!f && !p && !this.list.is(":visible")) {
				b.triggerEvent("open");
				b._dynamicPositioning && b.options.dynamicPositioning && b._dynamicPositioning();
				if ("none" === d) b.list.show();
				else if ("show" === d || "slideDown" === d || "fadeIn" === d) b.list[d](c);
				else b.list.show(d, g, c);
				b.list.promise().done(function() {
					b._scrollToView("search");
					b.triggerEvent("opened")
				})
			}
			b._callbackSupport(a);
			return b
		},
		close: function(a) {
			var b = this,
				c = b.options.hideEffect,
				e = b.options.hideEffectSpeed,
				g = b.options.hideEffectOptions,
				f = b.isMobile;
			if (!b.options["native"] && !f && b.list.is(":visible")) {
				b.triggerEvent("close");
				if ("none" === c) b.list.hide();
				else if ("hide" === c || "slideUp" === c || "fadeOut" === c) b.list[c](e);
				else b.list.hide(c, g, e);
				b.list.promise().done(function() {
					b.triggerEvent("closed")
				})
			}
			b._callbackSupport(a);
			return b
		},
		toggle: function() {
			var a = this.list.is(":visible");
			a ? this.close() : a || this.open()
		},
		_keyMappings: {
			38: "up",
			40: "down",
			13: "enter",
			8: "backspace",
			9: "tab",
			32: "space",
			27: "esc"
		},
		_keydownMethods: function() {
			var a = this,
				b = a.list.is(":visible") || !a.options.keydownOpen;
			return {
				down: function() {
					a.moveDown && b && a.moveDown()
				},
				up: function() {
					a.moveUp && b && a.moveUp()
				},
				enter: function() {
					var b = a.listItems.eq(a.currentFocus);
					a._update(b);
					"true" !== b.attr("data-preventclose") && a.close();
					a.triggerEvent("enter")
				},
				tab: function() {
					a.triggerEvent("tab-blur");
					a.close()
				},
				backspace: function() {
					a.triggerEvent("backspace")
				},
				esc: function() {
					a.close()
				}
			}
		},
		_eventHandlers: function() {
			var a = this,
				b = a.options.nativeMousedown,
				d = a.options.customShowHideEvent,
				e, g, f = a.focusClass,
				p = a.hoverClass,
				h = a.openClass;
			this.dropdown.on({
				"click.selectBoxIt": function() {
					a.dropdown.trigger("focus", !0);
					a.originalElem.disabled || (a.triggerEvent("click"), b || d || a.toggle())
				},
				"mousedown.selectBoxIt": function() {
					c(this).data("mdown", !0);
					a.triggerEvent("mousedown");
					b && !d && a.toggle()
				},
				"mouseup.selectBoxIt": function() {
					a.triggerEvent("mouseup")
				},
				"blur.selectBoxIt": function() {
					a.blur && (a.triggerEvent("blur"), a.close(), c(this).removeClass(f))
				},
				"focus.selectBoxIt": function(b, d) {
					var e = c(this).data("mdown");
					c(this).removeData("mdown");
					e || d || setTimeout(function() {
						a.triggerEvent("tab-focus")
					}, 0);
					d || (c(this).hasClass(a.theme.disabled) || c(this).addClass(f), a.triggerEvent("focus"))
				},
				"keydown.selectBoxIt": function(b) {
					var c = a._keyMappings[b.keyCode],
						d = a._keydownMethods()[c];
					d && (d(), !a.options.keydownOpen || "up" !== c && "down" !== c || a.open());
					d && "tab" !== c && b.preventDefault()
				},
				"keypress.selectBoxIt": function(b) {
					var c = a._keyMappings[b.charCode || b.keyCode],
						d = String.fromCharCode(b.charCode || b.keyCode);
					a.search && (!c || c && "space" === c) && a.search(d, !0, !0);
					"space" === c && b.preventDefault()
				},
				"mouseenter.selectBoxIt": function() {
					a.triggerEvent("mouseenter")
				},
				"mouseleave.selectBoxIt": function() {
					a.triggerEvent("mouseleave")
				}
			});
			a.list.on({
				"mouseover.selectBoxIt": function() {
					a.blur = !1
				},
				"mouseout.selectBoxIt": function() {
					a.blur = !0
				},
				"focusin.selectBoxIt": function() {
					a.dropdown.trigger("focus", !0)
				}
			});
			a.list.on({
				"mousedown.selectBoxIt": function() {
					a._update(c(this));
					a.triggerEvent("option-click");
					"false" === c(this).attr("data-disabled") && "true" !== c(this).attr("data-preventclose") && a.close();
					setTimeout(function() {
						a.dropdown.trigger("focus", !0)
					}, 0)
				},
				"focusin.selectBoxIt": function() {
					a.listItems.not(c(this)).removeAttr("data-active");
					c(this).attr("data-active", "");
					var b = a.list.is(":hidden");
					(a.options.searchWhenHidden && b || a.options.aggressiveChange || b && a.options.selectWhenHidden) && a._update(c(this));
					c(this).addClass(f)
				},
				"mouseup.selectBoxIt": function() {
					b && !d && (a._update(c(this)), a.triggerEvent("option-mouseup"), "false" === c(this).attr("data-disabled") && "true" !== c(this).attr("data-preventclose") && a.close())
				},
				"mouseenter.selectBoxIt": function() {
					"false" === c(this).attr("data-disabled") && (a.listItems.removeAttr("data-active"), c(this).addClass(f).attr("data-active", ""), a.listItems.not(c(this)).removeClass(f), c(this).addClass(f), a.currentFocus = +c(this).attr("data-id"))
				},
				"mouseleave.selectBoxIt": function() {
					"false" === c(this).attr("data-disabled") && (a.listItems.not(c(this)).removeClass(f).removeAttr("data-active"), c(this).addClass(f), a.currentFocus = +c(this).attr("data-id"))
				},
				"blur.selectBoxIt": function() {
					c(this).removeClass(f)
				}
			}, ".selectboxit-option");
			a.list.on({
				"click.selectBoxIt": function(a) {
					a.preventDefault()
				}
			}, "a");
			a.selectBox.on({
				"change.selectBoxIt, internal-change.selectBoxIt": function(b, c) {
					var d, f;
					c || (d = a.list.find('li[data-val="' + a.originalElem.value + '"]'), d.length && (a.listItems.eq(a.currentFocus).removeClass(a.focusClass), a.currentFocus = +d.attr("data-id")));
					d = a.listItems.eq(a.currentFocus);
					f = d.attr("data-selectedtext");
					g = (e = d.attr("data-text")) ? e : d.find("a").text();
					a._setText(a.dropdownText, f || g);
					a.dropdownText.attr("data-val", a.originalElem.value);
					d.find("i").attr("class") && (a.dropdownImage.attr("class", d.find("i").attr("class")).addClass("selectboxit-default-icon"), a.dropdownImage.attr("style", d.find("i").attr("style")));
					a.triggerEvent("changed")
				},
				"disable.selectBoxIt": function() {
					a.dropdown.addClass(a.theme.disabled)
				},
				"enable.selectBoxIt": function() {
					a.dropdown.removeClass(a.theme.disabled)
				},
				"open.selectBoxIt": function() {
					var b = a.list.find("li[data-val='" + a.dropdownText.attr("data-val") + "']");
					b.length || (b = a.listItems.not("[data-disabled=true]").first());
					a.currentFocus = +b.attr("data-id");
					b = a.listItems.eq(a.currentFocus);
					a.dropdown.addClass(h).removeClass(p).addClass(f);
					a.listItems.removeClass(a.selectedClass).removeAttr("data-active").not(b).removeClass(f);
					b.addClass(a.selectedClass).addClass(f);
					a.options.hideCurrent && (a.listItems.show(), b.hide())
				},
				"close.selectBoxIt": function() {
					a.dropdown.removeClass(h)
				},
				"blur.selectBoxIt": function() {
					a.dropdown.removeClass(f)
				},
				"mouseenter.selectBoxIt": function() {
					c(this).hasClass(a.theme.disabled) || a.dropdown.addClass(p)
				},
				"mouseleave.selectBoxIt": function() {
					a.dropdown.removeClass(p)
				},
				destroy: function(a) {
					a.preventDefault();
					a.stopPropagation()
				}
			});
			return a
		},
		_update: function(a) {
			var b, c = this.options.defaultText || this.selectBox.attr("data-text"),
				e = this.listItems.eq(this.currentFocus);
			"false" === a.attr("data-disabled") && (this.listItems.eq(this.currentFocus).attr("data-selectedtext"), (b = e.attr("data-text")) || e.text(), (c && this.options.html ? this.dropdownText.html() === c : this.dropdownText.text() === c) && this.selectBox.val() === a.attr("data-val") ? this.triggerEvent("change") : (this.selectBox.val(a.attr("data-val")), this.currentFocus = +a.attr("data-id"), this.originalElem.value !== this.dropdownText.attr("data-val") && this.triggerEvent("change")))
		},
		_addClasses: function(a) {
			this.focusClass = a.focus;
			this.hoverClass = a.hover;
			var b = a.button,
				c = a.list,
				e = a.arrow,
				g = a.container;
			this.openClass = a.open;
			this.selectedClass = "selectboxit-selected";
			this.downArrow.addClass(this.selectBox.attr("data-downarrow") || this.options.downArrowIcon || e);
			this.dropdownContainer.addClass(g);
			this.dropdown.addClass(b);
			this.list.addClass(c);
			return this
		},
		refresh: function(a, b) {
			this._destroySelectBoxIt()._create(!0);
			b || this.triggerEvent("refresh");
			this._callbackSupport(a);
			return this
		},
		htmlEscape: function(a) {
			return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
		},
		triggerEvent: function(a) {
			this.selectBox.trigger(a, {
				selectbox: this.selectBox,
				selectboxOption: this.selectItems.eq(this.options.showFirstOption ? this.currentFocus : 0 <= this.currentFocus - 1 ? this.currentFocus : 0),
				dropdown: this.dropdown,
				dropdownOption: this.listItems.eq(this.currentFocus)
			});
			return this
		},
		_copyAttributes: function() {
			this._addSelectBoxAttributes && this._addSelectBoxAttributes();
			return this
		},
		_realOuterWidth: function(a) {
			if (a.is(":visible")) return a.outerWidth(!0);
			a = a.clone();
			var b;
			a.css({
				visibility: "hidden",
				display: "block",
				position: "absolute"
			}).appendTo("body");
			b = a.outerWidth(!0);
			a.remove();
			return b
		}
	});
	var h = c.selectBox.selectBoxIt.prototype;
	h._dynamicPositioning = function() {
		if ("number" === c.type(this.listSize)) this.list.css("max-height", this.maxHeight || "none");
		else {
			var a = this.dropdown.offset().top,
				b = this.list.data("max-height") || this.list.outerHeight(),
				d = this.dropdown.outerHeight(),
				e = this.options.viewport,
				g = e.height(),
				e = c.isWindow(e.get(0)) ? e.scrollTop() : e.offset().top,
				f = !(a + d + b <= g + e);
			this.list.data("max-height") || this.list.data("max-height", this.list.outerHeight());
			f ? this.dropdown.offset().top - e >= b ? (this.list.css("max-height", b), this.list.css("top", this.dropdown.position().top - this.list.outerHeight())) : (a = Math.abs(a + d + b - (g + e)), g = Math.abs(this.dropdown.offset().top - e - b), a < g ? (this.list.css("max-height", b - a - d / 2), this.list.css("top", "auto")) : (this.list.css("max-height", b - g - d / 2), this.list.css("top", this.dropdown.position().top - this.list.outerHeight()))) : (this.list.css("max-height", b), this.list.css("top", "auto"))
		}
		return this
	};
	h.moveDown = function(a) {
		this.currentFocus += 1;
		var b = "true" === this.listItems.eq(this.currentFocus).attr("data-disabled") ? !0 : !1,
			c = this.listItems.eq(this.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;
		if (this.currentFocus === this.listItems.length)--this.currentFocus;
		else {
			if (b && c) {
				this.listItems.eq(this.currentFocus - 1).blur();
				this.moveDown();
				return
			}
			b && !c ? --this.currentFocus : (this.listItems.eq(this.currentFocus - 1).blur().end().eq(this.currentFocus).focusin(), this._scrollToView("down"), this.triggerEvent("moveDown"))
		}
		this._callbackSupport(a);
		return this
	};
	h.moveUp = function(a) {
		--this.currentFocus;
		var b = "true" === this.listItems.eq(this.currentFocus).attr("data-disabled") ? !0 : !1,
			c = this.listItems.eq(this.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;
		if (-1 === this.currentFocus) this.currentFocus += 1;
		else {
			if (b && c) {
				this.listItems.eq(this.currentFocus + 1).blur();
				this.moveUp();
				return
			}
			b && !c ? this.currentFocus += 1 : (this.listItems.eq(this.currentFocus + 1).blur().end().eq(this.currentFocus).focusin(), this._scrollToView("up"), this.triggerEvent("moveUp"))
		}
		this._callbackSupport(a);
		return this
	};
	h._setCurrentSearchOption = function(a) {
		(this.options.aggressiveChange || this.options.selectWhenHidden || this.listItems.eq(a).is(":visible")) && !0 !== this.listItems.eq(a).data("disabled") && (this.listItems.eq(this.currentFocus).blur(), this.currentFocus = this.currentIndex = a, this.listItems.eq(this.currentFocus).focusin(), this._scrollToView("search"), this.triggerEvent("search"));
		return this
	};
	h._searchAlgorithm = function(a, b) {
		var c = !1,
			e, g, f, h, m = this.textArray,
			l = this.currentText;
		e = a;
		for (f = m.length; e < f; e += 1) {
			h = m[e];
			for (g = 0; g < f; g += 1) - 1 !== m[g].search(b) && (c = !0, g = f);
			c || (l = this.currentText = this.currentText.charAt(this.currentText.length - 1).replace(/[|()\[{.+*?$\\]/g, "\\$0"));
			b = new RegExp(l, "gi");
			if (3 > l.length) {
				if (b = new RegExp(l.charAt(0), "gi"), -1 !== h.charAt(0).search(b)) {
					this._setCurrentSearchOption(e);
					if (h.substring(0, l.length).toLowerCase() !== l.toLowerCase() || this.options.similarSearch) this.currentIndex += 1;
					return !1
				}
			} else if (-1 !== h.search(b)) return this._setCurrentSearchOption(e), !1;
			if (h.toLowerCase() === this.currentText.toLowerCase()) return this._setCurrentSearchOption(e), this.currentText = "", !1
		}
		return !0
	};
	h.search = function(a, b, c) {
		this.currentText = c ? this.currentText + a.replace(/[|()\[{.+*?$\\]/g, "\\$0") : a.replace(/[|()\[{.+*?$\\]/g, "\\$0");
		this._searchAlgorithm(this.currentIndex, new RegExp(this.currentText, "gi")) && this._searchAlgorithm(0, this.currentText);
		this._callbackSupport(b);
		return this
	};
	h._updateMobileText = function() {
		var a, b;
		a = this.selectBox.find("option").filter(":selected");
		b = (b = a.attr("data-text")) ? b : a.text();
		this._setText(this.dropdownText, b);
		this.list.find('li[data-val="' + a.val() + '"]').find("i").attr("class") && this.dropdownImage.attr("class", this.list.find('li[data-val="' + a.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon")
	};
	h._applyNativeSelect = function() {
		this.dropdownContainer.append(this.selectBox);
		this.dropdown.attr("tabindex", "-1");
		this.selectBox.css({
			display: "block",
			visibility: "visible",
			width: this._realOuterWidth(this.dropdown),
			height: this.dropdown.outerHeight(),
			opacity: "0",
			position: "absolute",
			top: "0",
			left: "0",
			cursor: "pointer",
			"z-index": "999999",
			margin: this.dropdown.css("margin"),
			padding: "0",
			"-webkit-appearance": "menulist-button"
		});
		this.originalElem.disabled && this.triggerEvent("disable");
		return this
	};
	h._mobileEvents = function() {
		var a = this;
		a.selectBox.on({
			"changed.selectBoxIt": function() {
				a.hasChanged = !0;
				a._updateMobileText();
				a.triggerEvent("option-click")
			},
			"mousedown.selectBoxIt": function() {
				a.hasChanged || !a.options.defaultText || a.originalElem.disabled || (a._updateMobileText(), a.triggerEvent("option-click"))
			},
			"enable.selectBoxIt": function() {
				a.selectBox.removeClass("selectboxit-rendering")
			},
			"disable.selectBoxIt": function() {
				a.selectBox.addClass("selectboxit-rendering")
			}
		})
	};
	h._mobile = function(a) {
		this.isMobile && (this._applyNativeSelect(), this._mobileEvents());
		return this
	}
});

// pngPreloader

function PNGPreloader(e, t, i, r, n, a) {
	var o = this;
	this.animated = !1, this.element = e, this.frames = t, this.currentFrame = 0, this.width = i, this.height = r, this.row = $("> img", this.element).width() / this.width, this.speed = n, this.interval, this.delay = this.frames * this.speed / 2, this.positioning = a, $(window).resize(function() {
		o.positionContent(o)
	})
}
PNGPreloader.prototype.start = function(e) {
	var t = this;
	t.animated || (t.animated = !0, t.interval = setInterval(function() {
		t.animate(e, t)
	}, t.speed))
}, PNGPreloader.prototype.pause = function() {
	var e = this;
	e.animated = !1, clearInterval(e.interval)
}, PNGPreloader.prototype.reset = function() {
	var e = this;
	e.animated = !1, clearInterval(e.interval), e.currentFrame = 0, $("> img", e.element).css("margin", "0")
}, PNGPreloader.prototype.animate = function(e, t) {
	"undefined" != typeof e && t.currentFrame == e && t.pause();
	var i = t.currentFrame % t.row * t.width,
		r = Math.floor(t.currentFrame / t.row) * t.height;
	$("> img", t.element).css("margin-top", -r + "px"), $("> img", t.element).css("margin-left", -i + "px"), t.currentFrame++, t.currentFrame > t.frames && (t.currentFrame = 0)
}, PNGPreloader.prototype.positionContent = function(e) {
	e.positioning && $(e.element).css("left", $(window).width() / 2 - $(e.element).width() / 2 + "px").css("top", $(window).height() / 2 - $(e.element).height() / 2 + "px")
};