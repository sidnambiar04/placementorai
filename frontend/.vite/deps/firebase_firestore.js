import { A as deepEqual, C as Logger, E as FirebaseError, F as getModularInstance, I as getUA, N as getDefaultEmulatorHostnameAndPort, O as createMockUserToken, S as LogLevel, V as isIndexedDBAvailable, W as isSafari, b as registerVersion, c as _getProvider, d as _registerComponent, f as _removeServiceInstance, h as getApp, n as SDK_VERSION, w as Component } from "./index.esm2017-B_r7p6vl.js";
//#region node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var bloom_blob_es2018 = {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var Integer;
var Md5;
(function() {
	var h;
	function k(f, a) {
		function c() {}
		c.prototype = a.prototype;
		f.D = a.prototype;
		f.prototype = new c();
		f.prototype.constructor = f;
		f.C = function(d, e, g) {
			for (var b = Array(arguments.length - 2), r = 2; r < arguments.length; r++) b[r - 2] = arguments[r];
			return a.prototype[e].apply(d, b);
		};
	}
	function l() {
		this.blockSize = -1;
	}
	function m() {
		this.blockSize = -1;
		this.blockSize = 64;
		this.g = Array(4);
		this.B = Array(this.blockSize);
		this.o = this.h = 0;
		this.s();
	}
	k(m, l);
	m.prototype.s = function() {
		this.g[0] = 1732584193;
		this.g[1] = 4023233417;
		this.g[2] = 2562383102;
		this.g[3] = 271733878;
		this.o = this.h = 0;
	};
	function n(f, a, c) {
		c || (c = 0);
		var d = Array(16);
		if ("string" === typeof a) for (var e = 0; 16 > e; ++e) d[e] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
		else for (e = 0; 16 > e; ++e) d[e] = a[c++] | a[c++] << 8 | a[c++] << 16 | a[c++] << 24;
		a = f.g[0];
		c = f.g[1];
		e = f.g[2];
		var g = f.g[3];
		var b = a + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
		a = c + (b << 7 & 4294967295 | b >>> 25);
		b = g + (e ^ a & (c ^ e)) + d[1] + 3905402710 & 4294967295;
		g = a + (b << 12 & 4294967295 | b >>> 20);
		b = e + (c ^ g & (a ^ c)) + d[2] + 606105819 & 4294967295;
		e = g + (b << 17 & 4294967295 | b >>> 15);
		b = c + (a ^ e & (g ^ a)) + d[3] + 3250441966 & 4294967295;
		c = e + (b << 22 & 4294967295 | b >>> 10);
		b = a + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
		a = c + (b << 7 & 4294967295 | b >>> 25);
		b = g + (e ^ a & (c ^ e)) + d[5] + 1200080426 & 4294967295;
		g = a + (b << 12 & 4294967295 | b >>> 20);
		b = e + (c ^ g & (a ^ c)) + d[6] + 2821735955 & 4294967295;
		e = g + (b << 17 & 4294967295 | b >>> 15);
		b = c + (a ^ e & (g ^ a)) + d[7] + 4249261313 & 4294967295;
		c = e + (b << 22 & 4294967295 | b >>> 10);
		b = a + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
		a = c + (b << 7 & 4294967295 | b >>> 25);
		b = g + (e ^ a & (c ^ e)) + d[9] + 2336552879 & 4294967295;
		g = a + (b << 12 & 4294967295 | b >>> 20);
		b = e + (c ^ g & (a ^ c)) + d[10] + 4294925233 & 4294967295;
		e = g + (b << 17 & 4294967295 | b >>> 15);
		b = c + (a ^ e & (g ^ a)) + d[11] + 2304563134 & 4294967295;
		c = e + (b << 22 & 4294967295 | b >>> 10);
		b = a + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
		a = c + (b << 7 & 4294967295 | b >>> 25);
		b = g + (e ^ a & (c ^ e)) + d[13] + 4254626195 & 4294967295;
		g = a + (b << 12 & 4294967295 | b >>> 20);
		b = e + (c ^ g & (a ^ c)) + d[14] + 2792965006 & 4294967295;
		e = g + (b << 17 & 4294967295 | b >>> 15);
		b = c + (a ^ e & (g ^ a)) + d[15] + 1236535329 & 4294967295;
		c = e + (b << 22 & 4294967295 | b >>> 10);
		b = a + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
		a = c + (b << 5 & 4294967295 | b >>> 27);
		b = g + (c ^ e & (a ^ c)) + d[6] + 3225465664 & 4294967295;
		g = a + (b << 9 & 4294967295 | b >>> 23);
		b = e + (a ^ c & (g ^ a)) + d[11] + 643717713 & 4294967295;
		e = g + (b << 14 & 4294967295 | b >>> 18);
		b = c + (g ^ a & (e ^ g)) + d[0] + 3921069994 & 4294967295;
		c = e + (b << 20 & 4294967295 | b >>> 12);
		b = a + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
		a = c + (b << 5 & 4294967295 | b >>> 27);
		b = g + (c ^ e & (a ^ c)) + d[10] + 38016083 & 4294967295;
		g = a + (b << 9 & 4294967295 | b >>> 23);
		b = e + (a ^ c & (g ^ a)) + d[15] + 3634488961 & 4294967295;
		e = g + (b << 14 & 4294967295 | b >>> 18);
		b = c + (g ^ a & (e ^ g)) + d[4] + 3889429448 & 4294967295;
		c = e + (b << 20 & 4294967295 | b >>> 12);
		b = a + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
		a = c + (b << 5 & 4294967295 | b >>> 27);
		b = g + (c ^ e & (a ^ c)) + d[14] + 3275163606 & 4294967295;
		g = a + (b << 9 & 4294967295 | b >>> 23);
		b = e + (a ^ c & (g ^ a)) + d[3] + 4107603335 & 4294967295;
		e = g + (b << 14 & 4294967295 | b >>> 18);
		b = c + (g ^ a & (e ^ g)) + d[8] + 1163531501 & 4294967295;
		c = e + (b << 20 & 4294967295 | b >>> 12);
		b = a + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
		a = c + (b << 5 & 4294967295 | b >>> 27);
		b = g + (c ^ e & (a ^ c)) + d[2] + 4243563512 & 4294967295;
		g = a + (b << 9 & 4294967295 | b >>> 23);
		b = e + (a ^ c & (g ^ a)) + d[7] + 1735328473 & 4294967295;
		e = g + (b << 14 & 4294967295 | b >>> 18);
		b = c + (g ^ a & (e ^ g)) + d[12] + 2368359562 & 4294967295;
		c = e + (b << 20 & 4294967295 | b >>> 12);
		b = a + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
		a = c + (b << 4 & 4294967295 | b >>> 28);
		b = g + (a ^ c ^ e) + d[8] + 2272392833 & 4294967295;
		g = a + (b << 11 & 4294967295 | b >>> 21);
		b = e + (g ^ a ^ c) + d[11] + 1839030562 & 4294967295;
		e = g + (b << 16 & 4294967295 | b >>> 16);
		b = c + (e ^ g ^ a) + d[14] + 4259657740 & 4294967295;
		c = e + (b << 23 & 4294967295 | b >>> 9);
		b = a + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
		a = c + (b << 4 & 4294967295 | b >>> 28);
		b = g + (a ^ c ^ e) + d[4] + 1272893353 & 4294967295;
		g = a + (b << 11 & 4294967295 | b >>> 21);
		b = e + (g ^ a ^ c) + d[7] + 4139469664 & 4294967295;
		e = g + (b << 16 & 4294967295 | b >>> 16);
		b = c + (e ^ g ^ a) + d[10] + 3200236656 & 4294967295;
		c = e + (b << 23 & 4294967295 | b >>> 9);
		b = a + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
		a = c + (b << 4 & 4294967295 | b >>> 28);
		b = g + (a ^ c ^ e) + d[0] + 3936430074 & 4294967295;
		g = a + (b << 11 & 4294967295 | b >>> 21);
		b = e + (g ^ a ^ c) + d[3] + 3572445317 & 4294967295;
		e = g + (b << 16 & 4294967295 | b >>> 16);
		b = c + (e ^ g ^ a) + d[6] + 76029189 & 4294967295;
		c = e + (b << 23 & 4294967295 | b >>> 9);
		b = a + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
		a = c + (b << 4 & 4294967295 | b >>> 28);
		b = g + (a ^ c ^ e) + d[12] + 3873151461 & 4294967295;
		g = a + (b << 11 & 4294967295 | b >>> 21);
		b = e + (g ^ a ^ c) + d[15] + 530742520 & 4294967295;
		e = g + (b << 16 & 4294967295 | b >>> 16);
		b = c + (e ^ g ^ a) + d[2] + 3299628645 & 4294967295;
		c = e + (b << 23 & 4294967295 | b >>> 9);
		b = a + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
		a = c + (b << 6 & 4294967295 | b >>> 26);
		b = g + (c ^ (a | ~e)) + d[7] + 1126891415 & 4294967295;
		g = a + (b << 10 & 4294967295 | b >>> 22);
		b = e + (a ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
		e = g + (b << 15 & 4294967295 | b >>> 17);
		b = c + (g ^ (e | ~a)) + d[5] + 4237533241 & 4294967295;
		c = e + (b << 21 & 4294967295 | b >>> 11);
		b = a + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
		a = c + (b << 6 & 4294967295 | b >>> 26);
		b = g + (c ^ (a | ~e)) + d[3] + 2399980690 & 4294967295;
		g = a + (b << 10 & 4294967295 | b >>> 22);
		b = e + (a ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
		e = g + (b << 15 & 4294967295 | b >>> 17);
		b = c + (g ^ (e | ~a)) + d[1] + 2240044497 & 4294967295;
		c = e + (b << 21 & 4294967295 | b >>> 11);
		b = a + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
		a = c + (b << 6 & 4294967295 | b >>> 26);
		b = g + (c ^ (a | ~e)) + d[15] + 4264355552 & 4294967295;
		g = a + (b << 10 & 4294967295 | b >>> 22);
		b = e + (a ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
		e = g + (b << 15 & 4294967295 | b >>> 17);
		b = c + (g ^ (e | ~a)) + d[13] + 1309151649 & 4294967295;
		c = e + (b << 21 & 4294967295 | b >>> 11);
		b = a + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
		a = c + (b << 6 & 4294967295 | b >>> 26);
		b = g + (c ^ (a | ~e)) + d[11] + 3174756917 & 4294967295;
		g = a + (b << 10 & 4294967295 | b >>> 22);
		b = e + (a ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
		e = g + (b << 15 & 4294967295 | b >>> 17);
		b = c + (g ^ (e | ~a)) + d[9] + 3951481745 & 4294967295;
		f.g[0] = f.g[0] + a & 4294967295;
		f.g[1] = f.g[1] + (e + (b << 21 & 4294967295 | b >>> 11)) & 4294967295;
		f.g[2] = f.g[2] + e & 4294967295;
		f.g[3] = f.g[3] + g & 4294967295;
	}
	m.prototype.u = function(f, a) {
		void 0 === a && (a = f.length);
		for (var c = a - this.blockSize, d = this.B, e = this.h, g = 0; g < a;) {
			if (0 == e) for (; g <= c;) n(this, f, g), g += this.blockSize;
			if ("string" === typeof f) {
				for (; g < a;) if (d[e++] = f.charCodeAt(g++), e == this.blockSize) {
					n(this, d);
					e = 0;
					break;
				}
			} else for (; g < a;) if (d[e++] = f[g++], e == this.blockSize) {
				n(this, d);
				e = 0;
				break;
			}
		}
		this.h = e;
		this.o += a;
	};
	m.prototype.v = function() {
		var f = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
		f[0] = 128;
		for (var a = 1; a < f.length - 8; ++a) f[a] = 0;
		var c = 8 * this.o;
		for (a = f.length - 8; a < f.length; ++a) f[a] = c & 255, c /= 256;
		this.u(f);
		f = Array(16);
		for (a = c = 0; 4 > a; ++a) for (var d = 0; 32 > d; d += 8) f[c++] = this.g[a] >>> d & 255;
		return f;
	};
	function p(f, a) {
		var c = q;
		return Object.prototype.hasOwnProperty.call(c, f) ? c[f] : c[f] = a(f);
	}
	function t(f, a) {
		this.h = a;
		for (var c = [], d = !0, e = f.length - 1; 0 <= e; e--) {
			var g = f[e] | 0;
			d && g == a || (c[e] = g, d = !1);
		}
		this.g = c;
	}
	var q = {};
	function u(f) {
		return -128 <= f && 128 > f ? p(f, function(a) {
			return new t([a | 0], 0 > a ? -1 : 0);
		}) : new t([f | 0], 0 > f ? -1 : 0);
	}
	function v(f) {
		if (isNaN(f) || !isFinite(f)) return w;
		if (0 > f) return x(v(-f));
		for (var a = [], c = 1, d = 0; f >= c; d++) a[d] = f / c | 0, c *= 4294967296;
		return new t(a, 0);
	}
	function y(f, a) {
		if (0 == f.length) throw Error("number format error: empty string");
		a = a || 10;
		if (2 > a || 36 < a) throw Error("radix out of range: " + a);
		if ("-" == f.charAt(0)) return x(y(f.substring(1), a));
		if (0 <= f.indexOf("-")) throw Error("number format error: interior \"-\" character");
		for (var c = v(Math.pow(a, 8)), d = w, e = 0; e < f.length; e += 8) {
			var g = Math.min(8, f.length - e), b = parseInt(f.substring(e, e + g), a);
			8 > g ? (g = v(Math.pow(a, g)), d = d.j(g).add(v(b))) : (d = d.j(c), d = d.add(v(b)));
		}
		return d;
	}
	var w = u(0), z = u(1), A = u(16777216);
	h = t.prototype;
	h.m = function() {
		if (B(this)) return -x(this).m();
		for (var f = 0, a = 1, c = 0; c < this.g.length; c++) {
			var d = this.i(c);
			f += (0 <= d ? d : 4294967296 + d) * a;
			a *= 4294967296;
		}
		return f;
	};
	h.toString = function(f) {
		f = f || 10;
		if (2 > f || 36 < f) throw Error("radix out of range: " + f);
		if (C(this)) return "0";
		if (B(this)) return "-" + x(this).toString(f);
		for (var a = v(Math.pow(f, 6)), c = this, d = "";;) {
			var e = D(c, a).g;
			c = F(c, e.j(a));
			var g = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(f);
			c = e;
			if (C(c)) return g + d;
			for (; 6 > g.length;) g = "0" + g;
			d = g + d;
		}
	};
	h.i = function(f) {
		return 0 > f ? 0 : f < this.g.length ? this.g[f] : this.h;
	};
	function C(f) {
		if (0 != f.h) return !1;
		for (var a = 0; a < f.g.length; a++) if (0 != f.g[a]) return !1;
		return !0;
	}
	function B(f) {
		return -1 == f.h;
	}
	h.l = function(f) {
		f = F(this, f);
		return B(f) ? -1 : C(f) ? 0 : 1;
	};
	function x(f) {
		for (var a = f.g.length, c = [], d = 0; d < a; d++) c[d] = ~f.g[d];
		return new t(c, ~f.h).add(z);
	}
	h.abs = function() {
		return B(this) ? x(this) : this;
	};
	h.add = function(f) {
		for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0, e = 0; e <= a; e++) {
			var g = d + (this.i(e) & 65535) + (f.i(e) & 65535), b = (g >>> 16) + (this.i(e) >>> 16) + (f.i(e) >>> 16);
			d = b >>> 16;
			g &= 65535;
			b &= 65535;
			c[e] = b << 16 | g;
		}
		return new t(c, c[c.length - 1] & -2147483648 ? -1 : 0);
	};
	function F(f, a) {
		return f.add(x(a));
	}
	h.j = function(f) {
		if (C(this) || C(f)) return w;
		if (B(this)) return B(f) ? x(this).j(x(f)) : x(x(this).j(f));
		if (B(f)) return x(this.j(x(f)));
		if (0 > this.l(A) && 0 > f.l(A)) return v(this.m() * f.m());
		for (var a = this.g.length + f.g.length, c = [], d = 0; d < 2 * a; d++) c[d] = 0;
		for (d = 0; d < this.g.length; d++) for (var e = 0; e < f.g.length; e++) {
			var g = this.i(d) >>> 16, b = this.i(d) & 65535, r = f.i(e) >>> 16, E = f.i(e) & 65535;
			c[2 * d + 2 * e] += b * E;
			G(c, 2 * d + 2 * e);
			c[2 * d + 2 * e + 1] += g * E;
			G(c, 2 * d + 2 * e + 1);
			c[2 * d + 2 * e + 1] += b * r;
			G(c, 2 * d + 2 * e + 1);
			c[2 * d + 2 * e + 2] += g * r;
			G(c, 2 * d + 2 * e + 2);
		}
		for (d = 0; d < a; d++) c[d] = c[2 * d + 1] << 16 | c[2 * d];
		for (d = a; d < 2 * a; d++) c[d] = 0;
		return new t(c, 0);
	};
	function G(f, a) {
		for (; (f[a] & 65535) != f[a];) f[a + 1] += f[a] >>> 16, f[a] &= 65535, a++;
	}
	function H(f, a) {
		this.g = f;
		this.h = a;
	}
	function D(f, a) {
		if (C(a)) throw Error("division by zero");
		if (C(f)) return new H(w, w);
		if (B(f)) return a = D(x(f), a), new H(x(a.g), x(a.h));
		if (B(a)) return a = D(f, x(a)), new H(x(a.g), a.h);
		if (30 < f.g.length) {
			if (B(f) || B(a)) throw Error("slowDivide_ only works with positive integers.");
			for (var c = z, d = a; 0 >= d.l(f);) c = I(c), d = I(d);
			var e = J(c, 1), g = J(d, 1);
			d = J(d, 2);
			for (c = J(c, 2); !C(d);) {
				var b = g.add(d);
				0 >= b.l(f) && (e = e.add(c), g = b);
				d = J(d, 1);
				c = J(c, 1);
			}
			a = F(f, e.j(a));
			return new H(e, a);
		}
		for (e = w; 0 <= f.l(a);) {
			c = Math.max(1, Math.floor(f.m() / a.m()));
			d = Math.ceil(Math.log(c) / Math.LN2);
			d = 48 >= d ? 1 : Math.pow(2, d - 48);
			g = v(c);
			for (b = g.j(a); B(b) || 0 < b.l(f);) c -= d, g = v(c), b = g.j(a);
			C(g) && (g = z);
			e = e.add(g);
			f = F(f, b);
		}
		return new H(e, f);
	}
	h.A = function(f) {
		return D(this, f).h;
	};
	h.and = function(f) {
		for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) & f.i(d);
		return new t(c, this.h & f.h);
	};
	h.or = function(f) {
		for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) | f.i(d);
		return new t(c, this.h | f.h);
	};
	h.xor = function(f) {
		for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) ^ f.i(d);
		return new t(c, this.h ^ f.h);
	};
	function I(f) {
		for (var a = f.g.length + 1, c = [], d = 0; d < a; d++) c[d] = f.i(d) << 1 | f.i(d - 1) >>> 31;
		return new t(c, f.h);
	}
	function J(f, a) {
		var c = a >> 5;
		a %= 32;
		for (var d = f.g.length - c, e = [], g = 0; g < d; g++) e[g] = 0 < a ? f.i(g + c) >>> a | f.i(g + c + 1) << 32 - a : f.i(g + c);
		return new t(e, f.h);
	}
	m.prototype.digest = m.prototype.v;
	m.prototype.reset = m.prototype.s;
	m.prototype.update = m.prototype.u;
	Md5 = bloom_blob_es2018.Md5 = m;
	t.prototype.add = t.prototype.add;
	t.prototype.multiply = t.prototype.j;
	t.prototype.modulo = t.prototype.A;
	t.prototype.compare = t.prototype.l;
	t.prototype.toNumber = t.prototype.m;
	t.prototype.toString = t.prototype.toString;
	t.prototype.getBits = t.prototype.i;
	t.fromNumber = v;
	t.fromString = y;
	Integer = bloom_blob_es2018.Integer = t;
}).apply(typeof commonjsGlobal$1 !== "undefined" ? commonjsGlobal$1 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
//#endregion
//#region node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var webchannel_blob_es2018 = {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var XhrIo;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event;
var getStatEventTarget;
var createWebChannelTransport;
(function() {
	var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
		if (a == Array.prototype || a == Object.prototype) return a;
		a[b] = c.value;
		return a;
	};
	function ba(a) {
		a = [
			"object" == typeof globalThis && globalThis,
			a,
			"object" == typeof window && window,
			"object" == typeof self && self,
			"object" == typeof commonjsGlobal && commonjsGlobal
		];
		for (var b = 0; b < a.length; ++b) {
			var c = a[b];
			if (c && c.Math == Math) return c;
		}
		throw Error("Cannot find global object");
	}
	var ca = ba(this);
	function da(a, b) {
		if (b) a: {
			var c = ca;
			a = a.split(".");
			for (var d = 0; d < a.length - 1; d++) {
				var e = a[d];
				if (!(e in c)) break a;
				c = c[e];
			}
			a = a[a.length - 1];
			d = c[a];
			b = b(d);
			b != d && null != b && aa(c, a, {
				configurable: !0,
				writable: !0,
				value: b
			});
		}
	}
	function ea(a, b) {
		a instanceof String && (a += "");
		var c = 0, d = !1, e = { next: function() {
			if (!d && c < a.length) {
				var f = c++;
				return {
					value: b(f, a[f]),
					done: !1
				};
			}
			d = !0;
			return {
				done: !0,
				value: void 0
			};
		} };
		e[Symbol.iterator] = function() {
			return e;
		};
		return e;
	}
	da("Array.prototype.values", function(a) {
		return a ? a : function() {
			return ea(this, function(b, c) {
				return c;
			});
		};
	});
	var fa = fa || {}, k = this || self;
	function ha(a) {
		var b = typeof a;
		b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
		return "array" == b || "object" == b && "number" == typeof a.length;
	}
	function n(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b;
	}
	function ia(a, b, c) {
		return a.call.apply(a.bind, arguments);
	}
	function ja(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var e = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(e, d);
				return a.apply(b, e);
			};
		}
		return function() {
			return a.apply(b, arguments);
		};
	}
	function p(a, b, c) {
		p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
		return p.apply(null, arguments);
	}
	function ka(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var d = c.slice();
			d.push.apply(d, arguments);
			return a.apply(this, d);
		};
	}
	function r(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.aa = b.prototype;
		a.prototype = new c();
		a.prototype.constructor = a;
		a.Qb = function(d, e, f) {
			for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++) g[m - 2] = arguments[m];
			return b.prototype[e].apply(d, g);
		};
	}
	function la(a) {
		const b = a.length;
		if (0 < b) {
			const c = Array(b);
			for (let d = 0; d < b; d++) c[d] = a[d];
			return c;
		}
		return [];
	}
	function ma(a, b) {
		for (let c = 1; c < arguments.length; c++) {
			const d = arguments[c];
			if (ha(d)) {
				const e = a.length || 0, f = d.length || 0;
				a.length = e + f;
				for (let g = 0; g < f; g++) a[e + g] = d[g];
			} else a.push(d);
		}
	}
	class na {
		constructor(a, b) {
			this.i = a;
			this.j = b;
			this.h = 0;
			this.g = null;
		}
		get() {
			let a;
			0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
			return a;
		}
	}
	function t(a) {
		return /^[\s\xa0]*$/.test(a);
	}
	function u() {
		var a = k.navigator;
		return a && (a = a.userAgent) ? a : "";
	}
	function oa(a) {
		oa[" "](a);
		return a;
	}
	oa[" "] = function() {};
	var pa = -1 != u().indexOf("Gecko") && !(-1 != u().toLowerCase().indexOf("webkit") && -1 == u().indexOf("Edge")) && !(-1 != u().indexOf("Trident") || -1 != u().indexOf("MSIE")) && -1 == u().indexOf("Edge");
	function qa(a, b, c) {
		for (const d in a) b.call(c, a[d], d, a);
	}
	function ra(a, b) {
		for (const c in a) b.call(void 0, a[c], c, a);
	}
	function sa(a) {
		const b = {};
		for (const c in a) b[c] = a[c];
		return b;
	}
	const ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function ua(a, b) {
		let c, d;
		for (let e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (let f = 0; f < ta.length; f++) c = ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
		}
	}
	function va(a) {
		var b = 1;
		a = a.split(":");
		const c = [];
		for (; 0 < b && a.length;) c.push(a.shift()), b--;
		a.length && c.push(a.join(":"));
		return c;
	}
	function wa(a) {
		k.setTimeout(() => {
			throw a;
		}, 0);
	}
	function xa() {
		var a = za;
		let b = null;
		a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
		return b;
	}
	class Aa {
		constructor() {
			this.h = this.g = null;
		}
		add(a, b) {
			const c = Ba.get();
			c.set(a, b);
			this.h ? this.h.next = c : this.g = c;
			this.h = c;
		}
	}
	var Ba = new na(() => new Ca(), (a) => a.reset());
	class Ca {
		constructor() {
			this.next = this.g = this.h = null;
		}
		set(a, b) {
			this.h = a;
			this.g = b;
			this.next = null;
		}
		reset() {
			this.next = this.g = this.h = null;
		}
	}
	let x, y = !1, za = new Aa(), Ea = () => {
		const a = k.Promise.resolve(void 0);
		x = () => {
			a.then(Da);
		};
	};
	var Da = () => {
		for (var a; a = xa();) {
			try {
				a.h.call(a.g);
			} catch (c) {
				wa(c);
			}
			var b = Ba;
			b.j(a);
			100 > b.h && (b.h++, a.next = b.g, b.g = a);
		}
		y = !1;
	};
	function z() {
		this.s = this.s;
		this.C = this.C;
	}
	z.prototype.s = !1;
	z.prototype.ma = function() {
		this.s || (this.s = !0, this.N());
	};
	z.prototype.N = function() {
		if (this.C) for (; this.C.length;) this.C.shift()();
	};
	function A(a, b) {
		this.type = a;
		this.g = this.target = b;
		this.defaultPrevented = !1;
	}
	A.prototype.h = function() {
		this.defaultPrevented = !0;
	};
	var Fa = function() {
		if (!k.addEventListener || !Object.defineProperty) return !1;
		var a = !1, b = Object.defineProperty({}, "passive", { get: function() {
			a = !0;
		} });
		try {
			const c = () => {};
			k.addEventListener("test", c, b);
			k.removeEventListener("test", c, b);
		} catch (c) {}
		return a;
	}();
	function C(a, b) {
		A.call(this, a ? a.type : "");
		this.relatedTarget = this.g = this.target = null;
		this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
		this.key = "";
		this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.state = null;
		this.pointerId = 0;
		this.pointerType = "";
		this.i = null;
		if (a) {
			var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
			this.target = a.target || a.srcElement;
			this.g = b;
			if (b = a.relatedTarget) {
				if (pa) {
					a: {
						try {
							oa(b.nodeName);
							var e = !0;
							break a;
						} catch (f) {}
						e = !1;
					}
					e || (b = null);
				}
			} else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
			this.relatedTarget = b;
			d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
			this.button = a.button;
			this.key = a.key || "";
			this.ctrlKey = a.ctrlKey;
			this.altKey = a.altKey;
			this.shiftKey = a.shiftKey;
			this.metaKey = a.metaKey;
			this.pointerId = a.pointerId || 0;
			this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ga[a.pointerType] || "";
			this.state = a.state;
			this.i = a;
			a.defaultPrevented && C.aa.h.call(this);
		}
	}
	r(C, A);
	var Ga = {
		2: "touch",
		3: "pen",
		4: "mouse"
	};
	C.prototype.h = function() {
		C.aa.h.call(this);
		var a = this.i;
		a.preventDefault ? a.preventDefault() : a.returnValue = !1;
	};
	var D = "closure_listenable_" + (1e6 * Math.random() | 0);
	var Ha = 0;
	function Ia(a, b, c, d, e) {
		this.listener = a;
		this.proxy = null;
		this.src = b;
		this.type = c;
		this.capture = !!d;
		this.ha = e;
		this.key = ++Ha;
		this.da = this.fa = !1;
	}
	function Ja(a) {
		a.da = !0;
		a.listener = null;
		a.proxy = null;
		a.src = null;
		a.ha = null;
	}
	function Ka(a) {
		this.src = a;
		this.g = {};
		this.h = 0;
	}
	Ka.prototype.add = function(a, b, c, d, e) {
		var f = a.toString();
		a = this.g[f];
		a || (a = this.g[f] = [], this.h++);
		var g = La(a, b, d, e);
		-1 < g ? (b = a[g], c || (b.fa = !1)) : (b = new Ia(b, this.src, f, !!d, e), b.fa = c, a.push(b));
		return b;
	};
	function Ma(a, b) {
		var c = b.type;
		if (c in a.g) {
			var d = a.g[c], e = Array.prototype.indexOf.call(d, b, void 0), f;
			(f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
			f && (Ja(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
		}
	}
	function La(a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var f = a[e];
			if (!f.da && f.listener == b && f.capture == !!c && f.ha == d) return e;
		}
		return -1;
	}
	var Na = "closure_lm_" + (1e6 * Math.random() | 0), Oa = {};
	function Qa(a, b, c, d, e) {
		if (d && d.once) return Ra(a, b, c, d, e);
		if (Array.isArray(b)) {
			for (var f = 0; f < b.length; f++) Qa(a, b[f], c, d, e);
			return null;
		}
		c = Sa(c);
		return a && a[D] ? a.K(b, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b, c, !1, d, e);
	}
	function Ta(a, b, c, d, e, f) {
		if (!b) throw Error("Invalid event type");
		var g = n(e) ? !!e.capture : !!e, m = Ua(a);
		m || (a[Na] = m = new Ka(a));
		c = m.add(b, c, d, g, f);
		if (c.proxy) return c;
		d = Va();
		c.proxy = d;
		d.src = a;
		d.listener = c;
		if (a.addEventListener) Fa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
		else if (a.attachEvent) a.attachEvent(Wa(b.toString()), d);
		else if (a.addListener && a.removeListener) a.addListener(d);
		else throw Error("addEventListener and attachEvent are unavailable.");
		return c;
	}
	function Va() {
		function a(c) {
			return b.call(a.src, a.listener, c);
		}
		const b = Xa;
		return a;
	}
	function Ra(a, b, c, d, e) {
		if (Array.isArray(b)) {
			for (var f = 0; f < b.length; f++) Ra(a, b[f], c, d, e);
			return null;
		}
		c = Sa(c);
		return a && a[D] ? a.L(b, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b, c, !0, d, e);
	}
	function Ya(a, b, c, d, e) {
		if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Ya(a, b[f], c, d, e);
		else (d = n(d) ? !!d.capture : !!d, c = Sa(c), a && a[D]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = La(f, c, d, e), -1 < c && (Ja(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.h--)))) : a && (a = Ua(a)) && (b = a.g[b.toString()], a = -1, b && (a = La(b, c, d, e)), (c = -1 < a ? b[a] : null) && Za(c));
	}
	function Za(a) {
		if ("number" !== typeof a && a && !a.da) {
			var b = a.src;
			if (b && b[D]) Ma(b.i, a);
			else {
				var c = a.type, d = a.proxy;
				b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Wa(c), d) : b.addListener && b.removeListener && b.removeListener(d);
				(c = Ua(b)) ? (Ma(c, a), 0 == c.h && (c.src = null, b[Na] = null)) : Ja(a);
			}
		}
	}
	function Wa(a) {
		return a in Oa ? Oa[a] : Oa[a] = "on" + a;
	}
	function Xa(a, b) {
		if (a.da) a = !0;
		else {
			b = new C(b, this);
			var c = a.listener, d = a.ha || a.src;
			a.fa && Za(a);
			a = c.call(d, b);
		}
		return a;
	}
	function Ua(a) {
		a = a[Na];
		return a instanceof Ka ? a : null;
	}
	var $a = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
	function Sa(a) {
		if ("function" === typeof a) return a;
		a[$a] || (a[$a] = function(b) {
			return a.handleEvent(b);
		});
		return a[$a];
	}
	function E() {
		z.call(this);
		this.i = new Ka(this);
		this.M = this;
		this.F = null;
	}
	r(E, z);
	E.prototype[D] = !0;
	E.prototype.removeEventListener = function(a, b, c, d) {
		Ya(this, a, b, c, d);
	};
	function F(a, b) {
		var c, d = a.F;
		if (d) for (c = []; d; d = d.F) c.push(d);
		a = a.M;
		d = b.type || b;
		if ("string" === typeof b) b = new A(b, a);
		else if (b instanceof A) b.target = b.target || a;
		else {
			var e = b;
			b = new A(d, a);
			ua(b, e);
		}
		e = !0;
		if (c) for (var f = c.length - 1; 0 <= f; f--) {
			var g = b.g = c[f];
			e = ab(g, d, !0, b) && e;
		}
		g = b.g = a;
		e = ab(g, d, !0, b) && e;
		e = ab(g, d, !1, b) && e;
		if (c) for (f = 0; f < c.length; f++) g = b.g = c[f], e = ab(g, d, !1, b) && e;
	}
	E.prototype.N = function() {
		E.aa.N.call(this);
		if (this.i) {
			var a = this.i, c;
			for (c in a.g) {
				for (var d = a.g[c], e = 0; e < d.length; e++) Ja(d[e]);
				delete a.g[c];
				a.h--;
			}
		}
		this.F = null;
	};
	E.prototype.K = function(a, b, c, d) {
		return this.i.add(String(a), b, !1, c, d);
	};
	E.prototype.L = function(a, b, c, d) {
		return this.i.add(String(a), b, !0, c, d);
	};
	function ab(a, b, c, d) {
		b = a.i.g[String(b)];
		if (!b) return !0;
		b = b.concat();
		for (var e = !0, f = 0; f < b.length; ++f) {
			var g = b[f];
			if (g && !g.da && g.capture == c) {
				var m = g.listener, q = g.ha || g.src;
				g.fa && Ma(a.i, g);
				e = !1 !== m.call(q, d) && e;
			}
		}
		return e && !d.defaultPrevented;
	}
	function bb(a, b, c) {
		if ("function" === typeof a) c && (a = p(a, c));
		else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
	}
	function cb(a) {
		a.g = bb(() => {
			a.g = null;
			a.i && (a.i = !1, cb(a));
		}, a.l);
		const b = a.h;
		a.h = null;
		a.m.apply(null, b);
	}
	class eb extends z {
		constructor(a, b) {
			super();
			this.m = a;
			this.l = b;
			this.h = null;
			this.i = !1;
			this.g = null;
		}
		j(a) {
			this.h = arguments;
			this.g ? this.i = !0 : cb(this);
		}
		N() {
			super.N();
			this.g && (k.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
		}
	}
	function G(a) {
		z.call(this);
		this.h = a;
		this.g = {};
	}
	r(G, z);
	var fb = [];
	function gb(a) {
		qa(a.g, function(b, c) {
			this.g.hasOwnProperty(c) && Za(b);
		}, a);
		a.g = {};
	}
	G.prototype.N = function() {
		G.aa.N.call(this);
		gb(this);
	};
	G.prototype.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};
	var hb = k.JSON.stringify;
	var ib = k.JSON.parse;
	var jb = class {
		stringify(a) {
			return k.JSON.stringify(a, void 0);
		}
		parse(a) {
			return k.JSON.parse(a, void 0);
		}
	};
	function kb() {}
	kb.prototype.h = null;
	function lb(a) {
		return a.h || (a.h = a.i());
	}
	function mb() {}
	var H = {
		OPEN: "a",
		kb: "b",
		Ja: "c",
		wb: "d"
	};
	function nb() {
		A.call(this, "d");
	}
	r(nb, A);
	function ob() {
		A.call(this, "c");
	}
	r(ob, A);
	var I = {}, pb = null;
	function qb() {
		return pb = pb || new E();
	}
	I.La = "serverreachability";
	function rb(a) {
		A.call(this, I.La, a);
	}
	r(rb, A);
	function J(a) {
		const b = qb();
		F(b, new rb(b));
	}
	I.STAT_EVENT = "statevent";
	function sb(a, b) {
		A.call(this, I.STAT_EVENT, a);
		this.stat = b;
	}
	r(sb, A);
	function K(a) {
		const b = qb();
		F(b, new sb(b, a));
	}
	I.Ma = "timingevent";
	function tb(a, b) {
		A.call(this, I.Ma, a);
		this.size = b;
	}
	r(tb, A);
	function ub(a, b) {
		if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
		return k.setTimeout(function() {
			a();
		}, b);
	}
	function vb() {
		this.g = !0;
	}
	vb.prototype.xa = function() {
		this.g = !1;
	};
	function wb(a, b, c, d, e, f) {
		a.info(function() {
			if (a.g) if (f) {
				var g = "";
				for (var m = f.split("&"), q = 0; q < m.length; q++) {
					var l = m[q].split("=");
					if (1 < l.length) {
						var v = l[0];
						l = l[1];
						var w = v.split("_");
						g = 2 <= w.length && "type" == w[1] ? g + (v + "=" + l + "&") : g + (v + "=redacted&");
					}
				}
			} else g = null;
			else g = f;
			return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
		});
	}
	function xb(a, b, c, d, e, f, g) {
		a.info(function() {
			return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
		});
	}
	function L(a, b, c, d) {
		a.info(function() {
			return "XMLHTTP TEXT (" + b + "): " + yb(a, c) + (d ? " " + d : "");
		});
	}
	function zb(a, b) {
		a.info(function() {
			return "TIMEOUT: " + b;
		});
	}
	vb.prototype.info = function() {};
	function yb(a, b) {
		if (!a.g) return b;
		if (!b) return null;
		try {
			var c = JSON.parse(b);
			if (c) {
				for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
					var d = c[a];
					if (!(2 > d.length)) {
						var e = d[1];
						if (Array.isArray(e) && !(1 > e.length)) {
							var f = e[0];
							if ("noop" != f && "stop" != f && "close" != f) for (var g = 1; g < e.length; g++) e[g] = "";
						}
					}
				}
			}
			return hb(c);
		} catch (m) {
			return b;
		}
	}
	var Ab = {
		NO_ERROR: 0,
		gb: 1,
		tb: 2,
		sb: 3,
		nb: 4,
		rb: 5,
		ub: 6,
		Ia: 7,
		TIMEOUT: 8,
		xb: 9
	};
	var Bb = {
		lb: "complete",
		Hb: "success",
		Ja: "error",
		Ia: "abort",
		zb: "ready",
		Ab: "readystatechange",
		TIMEOUT: "timeout",
		vb: "incrementaldata",
		yb: "progress",
		ob: "downloadprogress",
		Pb: "uploadprogress"
	};
	var Cb;
	function Db() {}
	r(Db, kb);
	Db.prototype.g = function() {
		return new XMLHttpRequest();
	};
	Db.prototype.i = function() {
		return {};
	};
	Cb = new Db();
	function M(a, b, c, d) {
		this.j = a;
		this.i = b;
		this.l = c;
		this.R = d || 1;
		this.U = new G(this);
		this.I = 45e3;
		this.H = null;
		this.o = !1;
		this.m = this.A = this.v = this.L = this.F = this.S = this.B = null;
		this.D = [];
		this.g = null;
		this.C = 0;
		this.s = this.u = null;
		this.X = -1;
		this.J = !1;
		this.O = 0;
		this.M = null;
		this.W = this.K = this.T = this.P = !1;
		this.h = new Eb();
	}
	function Eb() {
		this.i = null;
		this.g = "";
		this.h = !1;
	}
	var Fb = {}, Gb = {};
	function Hb(a, b, c) {
		a.L = 1;
		a.v = Ib(N(b));
		a.m = c;
		a.P = !0;
		Jb(a, null);
	}
	function Jb(a, b) {
		a.F = Date.now();
		Kb(a);
		a.A = N(a.v);
		var c = a.A, d = a.R;
		Array.isArray(d) || (d = [String(d)]);
		Lb(c.i, "t", d);
		a.C = 0;
		c = a.j.J;
		a.h = new Eb();
		a.g = Mb(a.j, c ? b : null, !a.m);
		0 < a.O && (a.M = new eb(p(a.Y, a, a.g), a.O));
		b = a.U;
		c = a.g;
		d = a.ca;
		var e = "readystatechange";
		Array.isArray(e) || (e && (fb[0] = e.toString()), e = fb);
		for (var f = 0; f < e.length; f++) {
			var g = Qa(c, e[f], d || b.handleEvent, !1, b.h || b);
			if (!g) break;
			b.g[g.key] = g;
		}
		b = a.H ? sa(a.H) : {};
		a.m ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.m, b)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b));
		J();
		wb(a.i, a.u, a.A, a.l, a.R, a.m);
	}
	M.prototype.ca = function(a) {
		a = a.target;
		const b = this.M;
		b && 3 == P(a) ? b.j() : this.Y(a);
	};
	M.prototype.Y = function(a) {
		try {
			if (a == this.g) a: {
				const w = P(this.g);
				var b = this.g.Ba();
				const O = this.g.Z();
				if (!(3 > w) && (3 != w || this.g && (this.h.h || this.g.oa() || Nb(this.g)))) {
					this.J || 4 != w || 7 == b || (8 == b || 0 >= O ? J(3) : J(2));
					Ob(this);
					var c = this.g.Z();
					this.X = c;
					b: if (Pb(this)) {
						var d = Nb(this.g);
						a = "";
						var e = d.length, f = 4 == P(this.g);
						if (!this.h.i) {
							if ("undefined" === typeof TextDecoder) {
								Q(this);
								Qb(this);
								var g = "";
								break b;
							}
							this.h.i = new k.TextDecoder();
						}
						for (b = 0; b < e; b++) this.h.h = !0, a += this.h.i.decode(d[b], { stream: !(f && b == e - 1) });
						d.length = 0;
						this.h.g += a;
						this.C = 0;
						g = this.h.g;
					} else g = this.g.oa();
					this.o = 200 == c;
					xb(this.i, this.u, this.A, this.l, this.R, w, c);
					if (this.o) {
						if (this.T && !this.K) {
							b: {
								if (this.g) {
									var m, q = this.g;
									if ((m = q.g ? q.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !t(m)) {
										var l = m;
										break b;
									}
								}
								l = null;
							}
							if (c = l) L(this.i, this.l, c, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, Rb(this, c);
							else {
								this.o = !1;
								this.s = 3;
								K(12);
								Q(this);
								Qb(this);
								break a;
							}
						}
						if (this.P) {
							c = !0;
							let B;
							for (; !this.J && this.C < g.length;) if (B = Sb(this, g), B == Gb) {
								4 == w && (this.s = 4, K(14), c = !1);
								L(this.i, this.l, null, "[Incomplete Response]");
								break;
							} else if (B == Fb) {
								this.s = 4;
								K(15);
								L(this.i, this.l, g, "[Invalid Chunk]");
								c = !1;
								break;
							} else L(this.i, this.l, B, null), Rb(this, B);
							Pb(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0);
							4 != w || 0 != g.length || this.h.h || (this.s = 1, K(16), c = !1);
							this.o = this.o && c;
							if (!c) L(this.i, this.l, g, "[Invalid Chunked Response]"), Q(this), Qb(this);
							else if (0 < g.length && !this.W) {
								this.W = !0;
								var v = this.j;
								v.g == this && v.ba && !v.M && (v.j.info("Great, no buffering proxy detected. Bytes received: " + g.length), Tb(v), v.M = !0, K(11));
							}
						} else L(this.i, this.l, g, null), Rb(this, g);
						4 == w && Q(this);
						this.o && !this.J && (4 == w ? Ub(this.j, this) : (this.o = !1, Kb(this)));
					} else Vb(this.g), 400 == c && 0 < g.indexOf("Unknown SID") ? (this.s = 3, K(12)) : (this.s = 0, K(13)), Q(this), Qb(this);
				}
			}
		} catch (w) {}
	};
	function Pb(a) {
		return a.g ? "GET" == a.u && 2 != a.L && a.j.Ca : !1;
	}
	function Sb(a, b) {
		var c = a.C, d = b.indexOf("\n", c);
		if (-1 == d) return Gb;
		c = Number(b.substring(c, d));
		if (isNaN(c)) return Fb;
		d += 1;
		if (d + c > b.length) return Gb;
		b = b.slice(d, d + c);
		a.C = d + c;
		return b;
	}
	M.prototype.cancel = function() {
		this.J = !0;
		Q(this);
	};
	function Kb(a) {
		a.S = Date.now() + a.I;
		Wb(a, a.I);
	}
	function Wb(a, b) {
		if (null != a.B) throw Error("WatchDog timer not null");
		a.B = ub(p(a.ba, a), b);
	}
	function Ob(a) {
		a.B && (k.clearTimeout(a.B), a.B = null);
	}
	M.prototype.ba = function() {
		this.B = null;
		const a = Date.now();
		0 <= a - this.S ? (zb(this.i, this.A), 2 != this.L && (J(), K(17)), Q(this), this.s = 2, Qb(this)) : Wb(this, this.S - a);
	};
	function Qb(a) {
		0 == a.j.G || a.J || Ub(a.j, a);
	}
	function Q(a) {
		Ob(a);
		var b = a.M;
		b && "function" == typeof b.ma && b.ma();
		a.M = null;
		gb(a.U);
		a.g && (b = a.g, a.g = null, b.abort(), b.ma());
	}
	function Rb(a, b) {
		try {
			var c = a.j;
			if (0 != c.G && (c.g == a || Xb(c.h, a))) {
				if (!a.K && Xb(c.h, a) && 3 == c.G) {
					try {
						var d = c.Da.g.parse(b);
					} catch (l) {
						d = null;
					}
					if (Array.isArray(d) && 3 == d.length) {
						var e = d;
						if (0 == e[0]) {
							a: if (!c.u) {
								if (c.g) if (c.g.F + 3e3 < a.F) Yb(c), Zb(c);
								else break a;
								$b(c);
								K(18);
							}
						} else c.za = e[1], 0 < c.za - c.T && 37500 > e[2] && c.F && 0 == c.v && !c.C && (c.C = ub(p(c.Za, c), 6e3));
						if (1 >= ac(c.h) && c.ca) {
							try {
								c.ca();
							} catch (l) {}
							c.ca = void 0;
						}
					} else R(c, 11);
				} else if ((a.K || c.g == a) && Yb(c), !t(b)) for (e = c.Da.g.parse(b), b = 0; b < e.length; b++) {
					let l = e[b];
					c.T = l[0];
					l = l[1];
					if (2 == c.G) if ("c" == l[0]) {
						c.K = l[1];
						c.ia = l[2];
						const v = l[3];
						null != v && (c.la = v, c.j.info("VER=" + c.la));
						const w = l[4];
						null != w && (c.Aa = w, c.j.info("SVER=" + c.Aa));
						const O = l[5];
						null != O && "number" === typeof O && 0 < O && (d = 1.5 * O, c.L = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
						d = c;
						const B = a.g;
						if (B) {
							const ya = B.g ? B.g.getResponseHeader("X-Client-Wire-Protocol") : null;
							if (ya) {
								var f = d.h;
								f.g || -1 == ya.indexOf("spdy") && -1 == ya.indexOf("quic") && -1 == ya.indexOf("h2") || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (bc(f, f.h), f.h = null));
							}
							if (d.D) {
								const db = B.g ? B.g.getResponseHeader("X-HTTP-Session-Id") : null;
								db && (d.ya = db, S(d.I, d.D, db));
							}
						}
						c.G = 3;
						c.l && c.l.ua();
						c.ba && (c.R = Date.now() - a.F, c.j.info("Handshake RTT: " + c.R + "ms"));
						d = c;
						var g = a;
						d.qa = cc(d, d.J ? d.ia : null, d.W);
						if (g.K) {
							dc(d.h, g);
							var m = g, q = d.L;
							q && (m.I = q);
							m.B && (Ob(m), Kb(m));
							d.g = g;
						} else ec(d);
						0 < c.i.length && fc(c);
					} else "stop" != l[0] && "close" != l[0] || R(c, 7);
					else 3 == c.G && ("stop" == l[0] || "close" == l[0] ? "stop" == l[0] ? R(c, 7) : gc(c) : "noop" != l[0] && c.l && c.l.ta(l), c.v = 0);
				}
			}
			J(4);
		} catch (l) {}
	}
	var hc = class {
		constructor(a, b) {
			this.g = a;
			this.map = b;
		}
	};
	function ic(a) {
		this.l = a || 10;
		k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.chrome && k.chrome.loadTimes && k.chrome.loadTimes() && k.chrome.loadTimes().wasFetchedViaSpdy);
		this.j = a ? this.l : 1;
		this.g = null;
		1 < this.j && (this.g = /* @__PURE__ */ new Set());
		this.h = null;
		this.i = [];
	}
	function jc(a) {
		return a.h ? !0 : a.g ? a.g.size >= a.j : !1;
	}
	function ac(a) {
		return a.h ? 1 : a.g ? a.g.size : 0;
	}
	function Xb(a, b) {
		return a.h ? a.h == b : a.g ? a.g.has(b) : !1;
	}
	function bc(a, b) {
		a.g ? a.g.add(b) : a.h = b;
	}
	function dc(a, b) {
		a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
	}
	ic.prototype.cancel = function() {
		this.i = kc(this);
		if (this.h) this.h.cancel(), this.h = null;
		else if (this.g && 0 !== this.g.size) {
			for (const a of this.g.values()) a.cancel();
			this.g.clear();
		}
	};
	function kc(a) {
		if (null != a.h) return a.i.concat(a.h.D);
		if (null != a.g && 0 !== a.g.size) {
			let b = a.i;
			for (const c of a.g.values()) b = b.concat(c.D);
			return b;
		}
		return la(a.i);
	}
	function lc(a) {
		if (a.V && "function" == typeof a.V) return a.V();
		if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
		if ("string" === typeof a) return a.split("");
		if (ha(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b;
		}
		b = [];
		c = 0;
		for (d in a) b[c++] = a[d];
		return b;
	}
	function mc(a) {
		if (a.na && "function" == typeof a.na) return a.na();
		if (!a.V || "function" != typeof a.V) {
			if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
			if (!("undefined" !== typeof Set && a instanceof Set)) {
				if (ha(a) || "string" === typeof a) {
					var b = [];
					a = a.length;
					for (var c = 0; c < a; c++) b.push(c);
					return b;
				}
				b = [];
				c = 0;
				for (const d in a) b[c++] = d;
				return b;
			}
		}
	}
	function nc(a, b) {
		if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
		else if (ha(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
		else for (var c = mc(a), d = lc(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
	}
	var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
	function pc(a, b) {
		if (a) {
			a = a.split("&");
			for (var c = 0; c < a.length; c++) {
				var d = a[c].indexOf("="), e = null;
				if (0 <= d) {
					var f = a[c].substring(0, d);
					e = a[c].substring(d + 1);
				} else f = a[c];
				b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
			}
		}
	}
	function T(a) {
		this.g = this.o = this.j = "";
		this.s = null;
		this.m = this.l = "";
		this.h = !1;
		if (a instanceof T) {
			this.h = a.h;
			qc(this, a.j);
			this.o = a.o;
			this.g = a.g;
			rc(this, a.s);
			this.l = a.l;
			var b = a.i;
			var c = new sc();
			c.i = b.i;
			b.g && (c.g = new Map(b.g), c.h = b.h);
			tc(this, c);
			this.m = a.m;
		} else a && (b = String(a).match(oc)) ? (this.h = !1, qc(this, b[1] || "", !0), this.o = uc(b[2] || ""), this.g = uc(b[3] || "", !0), rc(this, b[4]), this.l = uc(b[5] || "", !0), tc(this, b[6] || "", !0), this.m = uc(b[7] || "")) : (this.h = !1, this.i = new sc(null, this.h));
	}
	T.prototype.toString = function() {
		var a = [], b = this.j;
		b && a.push(vc(b, wc, !0), ":");
		var c = this.g;
		if (c || "file" == b) a.push("//"), (b = this.o) && a.push(vc(b, wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.s, null != c && a.push(":", String(c));
		if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(vc(c, "/" == c.charAt(0) ? xc : yc, !0));
		(c = this.i.toString()) && a.push("?", c);
		(c = this.m) && a.push("#", vc(c, zc));
		return a.join("");
	};
	function N(a) {
		return new T(a);
	}
	function qc(a, b, c) {
		a.j = c ? uc(b, !0) : b;
		a.j && (a.j = a.j.replace(/:$/, ""));
	}
	function rc(a, b) {
		if (b) {
			b = Number(b);
			if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
			a.s = b;
		} else a.s = null;
	}
	function tc(a, b, c) {
		b instanceof sc ? (a.i = b, Ac(a.i, a.h)) : (c || (b = vc(b, Bc)), a.i = new sc(b, a.h));
	}
	function S(a, b, c) {
		a.i.set(b, c);
	}
	function Ib(a) {
		S(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
		return a;
	}
	function uc(a, b) {
		return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
	}
	function vc(a, b, c) {
		return "string" === typeof a ? (a = encodeURI(a).replace(b, Cc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
	}
	function Cc(a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
	}
	var wc = /[#\/\?@]/g, yc = /[#\?:]/g, xc = /[#\?]/g, Bc = /[#\?@]/g, zc = /#/g;
	function sc(a, b) {
		this.h = this.g = null;
		this.i = a || null;
		this.j = !!b;
	}
	function U(a) {
		a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && pc(a.i, function(b, c) {
			a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
		}));
	}
	h = sc.prototype;
	h.add = function(a, b) {
		U(this);
		this.i = null;
		a = V(this, a);
		var c = this.g.get(a);
		c || this.g.set(a, c = []);
		c.push(b);
		this.h += 1;
		return this;
	};
	function Dc(a, b) {
		U(a);
		b = V(a, b);
		a.g.has(b) && (a.i = null, a.h -= a.g.get(b).length, a.g.delete(b));
	}
	function Ec(a, b) {
		U(a);
		b = V(a, b);
		return a.g.has(b);
	}
	h.forEach = function(a, b) {
		U(this);
		this.g.forEach(function(c, d) {
			c.forEach(function(e) {
				a.call(b, e, d, this);
			}, this);
		}, this);
	};
	h.na = function() {
		U(this);
		const a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [];
		for (let d = 0; d < b.length; d++) {
			const e = a[d];
			for (let f = 0; f < e.length; f++) c.push(b[d]);
		}
		return c;
	};
	h.V = function(a) {
		U(this);
		let b = [];
		if ("string" === typeof a) Ec(this, a) && (b = b.concat(this.g.get(V(this, a))));
		else {
			a = Array.from(this.g.values());
			for (let c = 0; c < a.length; c++) b = b.concat(a[c]);
		}
		return b;
	};
	h.set = function(a, b) {
		U(this);
		this.i = null;
		a = V(this, a);
		Ec(this, a) && (this.h -= this.g.get(a).length);
		this.g.set(a, [b]);
		this.h += 1;
		return this;
	};
	h.get = function(a, b) {
		if (!a) return b;
		a = this.V(a);
		return 0 < a.length ? String(a[0]) : b;
	};
	function Lb(a, b, c) {
		Dc(a, b);
		0 < c.length && (a.i = null, a.g.set(V(a, b), la(c)), a.h += c.length);
	}
	h.toString = function() {
		if (this.i) return this.i;
		if (!this.g) return "";
		const a = [], b = Array.from(this.g.keys());
		for (var c = 0; c < b.length; c++) {
			var d = b[c];
			const f = encodeURIComponent(String(d)), g = this.V(d);
			for (d = 0; d < g.length; d++) {
				var e = f;
				"" !== g[d] && (e += "=" + encodeURIComponent(String(g[d])));
				a.push(e);
			}
		}
		return this.i = a.join("&");
	};
	function V(a, b) {
		b = String(b);
		a.j && (b = b.toLowerCase());
		return b;
	}
	function Ac(a, b) {
		b && !a.j && (U(a), a.i = null, a.g.forEach(function(c, d) {
			var e = d.toLowerCase();
			d != e && (Dc(this, d), Lb(this, e, c));
		}, a));
		a.j = b;
	}
	function Fc(a, b) {
		const c = new vb();
		if (k.Image) {
			const d = new Image();
			d.onload = ka(W, c, "TestLoadImage: loaded", !0, b, d);
			d.onerror = ka(W, c, "TestLoadImage: error", !1, b, d);
			d.onabort = ka(W, c, "TestLoadImage: abort", !1, b, d);
			d.ontimeout = ka(W, c, "TestLoadImage: timeout", !1, b, d);
			k.setTimeout(function() {
				if (d.ontimeout) d.ontimeout();
			}, 1e4);
			d.src = a;
		} else b(!1);
	}
	function Gc(a, b) {
		const c = new vb(), d = new AbortController(), e = setTimeout(() => {
			d.abort();
			W(c, "TestPingServer: timeout", !1, b);
		}, 1e4);
		fetch(a, { signal: d.signal }).then((f) => {
			clearTimeout(e);
			f.ok ? W(c, "TestPingServer: ok", !0, b) : W(c, "TestPingServer: server error", !1, b);
		}).catch(() => {
			clearTimeout(e);
			W(c, "TestPingServer: error", !1, b);
		});
	}
	function W(a, b, c, d, e) {
		try {
			e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
		} catch (f) {}
	}
	function Hc() {
		this.g = new jb();
	}
	function Ic(a, b, c) {
		const d = c || "";
		try {
			nc(a, function(e, f) {
				let g = e;
				n(e) && (g = hb(e));
				b.push(d + f + "=" + encodeURIComponent(g));
			});
		} catch (e) {
			throw b.push(d + "type=_badmap"), e;
		}
	}
	function Jc(a) {
		this.l = a.Ub || null;
		this.j = a.eb || !1;
	}
	r(Jc, kb);
	Jc.prototype.g = function() {
		return new Kc(this.l, this.j);
	};
	Jc.prototype.i = function(a) {
		return function() {
			return a;
		};
	}({});
	function Kc(a, b) {
		E.call(this);
		this.D = a;
		this.o = b;
		this.m = void 0;
		this.status = this.readyState = 0;
		this.responseType = this.responseText = this.response = this.statusText = "";
		this.onreadystatechange = null;
		this.u = new Headers();
		this.h = null;
		this.B = "GET";
		this.A = "";
		this.g = !1;
		this.v = this.j = this.l = null;
	}
	r(Kc, E);
	h = Kc.prototype;
	h.open = function(a, b) {
		if (0 != this.readyState) throw this.abort(), Error("Error reopening a connection");
		this.B = a;
		this.A = b;
		this.readyState = 1;
		Lc(this);
	};
	h.send = function(a) {
		if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
		this.g = !0;
		const b = {
			headers: this.u,
			method: this.B,
			credentials: this.m,
			cache: void 0
		};
		a && (b.body = a);
		(this.D || k).fetch(new Request(this.A, b)).then(this.Sa.bind(this), this.ga.bind(this));
	};
	h.abort = function() {
		this.response = this.responseText = "";
		this.u = new Headers();
		this.status = 0;
		this.j && this.j.cancel("Request was aborted.").catch(() => {});
		1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, Mc(this));
		this.readyState = 0;
	};
	h.Sa = function(a) {
		if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, Lc(this)), this.g && (this.readyState = 3, Lc(this), this.g))) if ("arraybuffer" === this.responseType) a.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
		else if ("undefined" !== typeof k.ReadableStream && "body" in a) {
			this.j = a.body.getReader();
			if (this.o) {
				if (this.responseType) throw Error("responseType must be empty for \"streamBinaryChunks\" mode responses.");
				this.response = [];
			} else this.response = this.responseText = "", this.v = new TextDecoder();
			Nc(this);
		} else a.text().then(this.Ra.bind(this), this.ga.bind(this));
	};
	function Nc(a) {
		a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a));
	}
	h.Pa = function(a) {
		if (this.g) {
			if (this.o && a.value) this.response.push(a.value);
			else if (!this.o) {
				var b = a.value ? a.value : new Uint8Array(0);
				if (b = this.v.decode(b, { stream: !a.done })) this.response = this.responseText += b;
			}
			a.done ? Mc(this) : Lc(this);
			3 == this.readyState && Nc(this);
		}
	};
	h.Ra = function(a) {
		this.g && (this.response = this.responseText = a, Mc(this));
	};
	h.Qa = function(a) {
		this.g && (this.response = a, Mc(this));
	};
	h.ga = function() {
		this.g && Mc(this);
	};
	function Mc(a) {
		a.readyState = 4;
		a.l = null;
		a.j = null;
		a.v = null;
		Lc(a);
	}
	h.setRequestHeader = function(a, b) {
		this.u.append(a, b);
	};
	h.getResponseHeader = function(a) {
		return this.h ? this.h.get(a.toLowerCase()) || "" : "";
	};
	h.getAllResponseHeaders = function() {
		if (!this.h) return "";
		const a = [], b = this.h.entries();
		for (var c = b.next(); !c.done;) c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
		return a.join("\r\n");
	};
	function Lc(a) {
		a.onreadystatechange && a.onreadystatechange.call(a);
	}
	Object.defineProperty(Kc.prototype, "withCredentials", {
		get: function() {
			return "include" === this.m;
		},
		set: function(a) {
			this.m = a ? "include" : "same-origin";
		}
	});
	function Oc(a) {
		let b = "";
		qa(a, function(c, d) {
			b += d;
			b += ":";
			b += c;
			b += "\r\n";
		});
		return b;
	}
	function Pc(a, b, c) {
		a: {
			for (d in c) {
				var d = !1;
				break a;
			}
			d = !0;
		}
		d || (c = Oc(c), "string" === typeof a || S(a, b, c));
	}
	function X(a) {
		E.call(this);
		this.headers = /* @__PURE__ */ new Map();
		this.o = a || null;
		this.h = !1;
		this.v = this.g = null;
		this.D = "";
		this.m = 0;
		this.l = "";
		this.j = this.B = this.u = this.A = !1;
		this.I = null;
		this.H = "";
		this.J = !1;
	}
	r(X, E);
	var Qc = /^https?$/i, Rc = ["POST", "PUT"];
	h = X.prototype;
	h.Ha = function(a) {
		this.J = a;
	};
	h.ea = function(a, b, c, d) {
		if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
		b = b ? b.toUpperCase() : "GET";
		this.D = a;
		this.l = "";
		this.m = 0;
		this.A = !1;
		this.h = !0;
		this.g = this.o ? this.o.g() : Cb.g();
		this.v = this.o ? lb(this.o) : lb(Cb);
		this.g.onreadystatechange = p(this.Ea, this);
		try {
			this.B = !0, this.g.open(b, String(a), !0), this.B = !1;
		} catch (f) {
			Sc(this, f);
			return;
		}
		a = c || "";
		c = new Map(this.headers);
		if (d) if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
		else if ("function" === typeof d.keys && "function" === typeof d.get) for (const f of d.keys()) c.set(f, d.get(f));
		else throw Error("Unknown input type for opt_headers: " + String(d));
		d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
		e = k.FormData && a instanceof k.FormData;
		!(0 <= Array.prototype.indexOf.call(Rc, b, void 0)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		for (const [f, g] of c) this.g.setRequestHeader(f, g);
		this.H && (this.g.responseType = this.H);
		"withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
		try {
			Tc(this), this.u = !0, this.g.send(a), this.u = !1;
		} catch (f) {
			Sc(this, f);
		}
	};
	function Sc(a, b) {
		a.h = !1;
		a.g && (a.j = !0, a.g.abort(), a.j = !1);
		a.l = b;
		a.m = 5;
		Uc(a);
		Vc(a);
	}
	function Uc(a) {
		a.A || (a.A = !0, F(a, "complete"), F(a, "error"));
	}
	h.abort = function(a) {
		this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = a || 7, F(this, "complete"), F(this, "abort"), Vc(this));
	};
	h.N = function() {
		this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Vc(this, !0));
		X.aa.N.call(this);
	};
	h.Ea = function() {
		this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
	};
	h.bb = function() {
		Wc(this);
	};
	function Wc(a) {
		if (a.h && "undefined" != typeof fa && (!a.v[1] || 4 != P(a) || 2 != a.Z())) {
			if (a.u && 4 == P(a)) bb(a.Ea, 0, a);
			else if (F(a, "readystatechange"), 4 == P(a)) {
				a.h = !1;
				try {
					const g = a.Z();
					a: switch (g) {
						case 200:
						case 201:
						case 202:
						case 204:
						case 206:
						case 304:
						case 1223:
							var b = !0;
							break a;
						default: b = !1;
					}
					var c;
					if (!(c = b)) {
						var d;
						if (d = 0 === g) {
							var e = String(a.D).match(oc)[1] || null;
							!e && k.self && k.self.location && (e = k.self.location.protocol.slice(0, -1));
							d = !Qc.test(e ? e.toLowerCase() : "");
						}
						c = d;
					}
					if (c) F(a, "complete"), F(a, "success");
					else {
						a.m = 6;
						try {
							var f = 2 < P(a) ? a.g.statusText : "";
						} catch (m) {
							f = "";
						}
						a.l = f + " [" + a.Z() + "]";
						Uc(a);
					}
				} finally {
					Vc(a);
				}
			}
		}
	}
	function Vc(a, b) {
		if (a.g) {
			Tc(a);
			const c = a.g, d = a.v[0] ? () => {} : null;
			a.g = null;
			a.v = null;
			b || F(a, "ready");
			try {
				c.onreadystatechange = d;
			} catch (e) {}
		}
	}
	function Tc(a) {
		a.I && (k.clearTimeout(a.I), a.I = null);
	}
	h.isActive = function() {
		return !!this.g;
	};
	function P(a) {
		return a.g ? a.g.readyState : 0;
	}
	h.Z = function() {
		try {
			return 2 < P(this) ? this.g.status : -1;
		} catch (a) {
			return -1;
		}
	};
	h.oa = function() {
		try {
			return this.g ? this.g.responseText : "";
		} catch (a) {
			return "";
		}
	};
	h.Oa = function(a) {
		if (this.g) {
			var b = this.g.responseText;
			a && 0 == b.indexOf(a) && (b = b.substring(a.length));
			return ib(b);
		}
	};
	function Nb(a) {
		try {
			if (!a.g) return null;
			if ("response" in a.g) return a.g.response;
			switch (a.H) {
				case "":
				case "text": return a.g.responseText;
				case "arraybuffer": if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
			}
			return null;
		} catch (b) {
			return null;
		}
	}
	function Vb(a) {
		const b = {};
		a = (a.g && 2 <= P(a) ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
		for (let d = 0; d < a.length; d++) {
			if (t(a[d])) continue;
			var c = va(a[d]);
			const e = c[0];
			c = c[1];
			if ("string" !== typeof c) continue;
			c = c.trim();
			const f = b[e] || [];
			b[e] = f;
			f.push(c);
		}
		ra(b, function(d) {
			return d.join(", ");
		});
	}
	h.Ba = function() {
		return this.m;
	};
	h.Ka = function() {
		return "string" === typeof this.l ? this.l : String(this.l);
	};
	function Xc(a, b, c) {
		return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
	}
	function Yc(a) {
		this.Aa = 0;
		this.i = [];
		this.j = new vb();
		this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null;
		this.Ya = this.U = 0;
		this.Va = Xc("failFast", !1, a);
		this.F = this.C = this.u = this.s = this.l = null;
		this.X = !0;
		this.za = this.T = -1;
		this.Y = this.v = this.B = 0;
		this.Ta = Xc("baseRetryDelayMs", 5e3, a);
		this.cb = Xc("retryDelaySeedMs", 1e4, a);
		this.Wa = Xc("forwardChannelMaxRetries", 2, a);
		this.wa = Xc("forwardChannelRequestTimeoutMs", 2e4, a);
		this.pa = a && a.xmlHttpFactory || void 0;
		this.Xa = a && a.Tb || void 0;
		this.Ca = a && a.useFetchStreams || !1;
		this.L = void 0;
		this.J = a && a.supportsCrossDomainXhr || !1;
		this.K = "";
		this.h = new ic(a && a.concurrentRequestLimit);
		this.Da = new Hc();
		this.P = a && a.fastHandshake || !1;
		this.O = a && a.encodeInitMessageHeaders || !1;
		this.P && this.O && (this.O = !1);
		this.Ua = a && a.Rb || !1;
		a && a.xa && this.j.xa();
		a && a.forceLongPolling && (this.X = !1);
		this.ba = !this.P && this.X && a && a.detectBufferingProxy || !1;
		this.ja = void 0;
		a && a.longPollingTimeout && 0 < a.longPollingTimeout && (this.ja = a.longPollingTimeout);
		this.ca = void 0;
		this.R = 0;
		this.M = !1;
		this.ka = this.A = null;
	}
	h = Yc.prototype;
	h.la = 8;
	h.G = 1;
	h.connect = function(a, b, c, d) {
		K(0);
		this.W = a;
		this.H = b || {};
		c && void 0 !== d && (this.H.OSID = c, this.H.OAID = d);
		this.F = this.X;
		this.I = cc(this, null, this.W);
		fc(this);
	};
	function gc(a) {
		Zc(a);
		if (3 == a.G) {
			var b = a.U++, c = N(a.I);
			S(c, "SID", a.K);
			S(c, "RID", b);
			S(c, "TYPE", "terminate");
			$c(a, c);
			b = new M(a, a.j, b);
			b.L = 2;
			b.v = Ib(N(c));
			c = !1;
			if (k.navigator && k.navigator.sendBeacon) try {
				c = k.navigator.sendBeacon(b.v.toString(), "");
			} catch (d) {}
			!c && k.Image && (new Image().src = b.v, c = !0);
			c || (b.g = Mb(b.j, null), b.g.ea(b.v));
			b.F = Date.now();
			Kb(b);
		}
		ad(a);
	}
	function Zb(a) {
		a.g && (Tb(a), a.g.cancel(), a.g = null);
	}
	function Zc(a) {
		Zb(a);
		a.u && (k.clearTimeout(a.u), a.u = null);
		Yb(a);
		a.h.cancel();
		a.s && ("number" === typeof a.s && k.clearTimeout(a.s), a.s = null);
	}
	function fc(a) {
		if (!jc(a.h) && !a.s) {
			a.s = !0;
			var b = a.Ga;
			x || Ea();
			y || (x(), y = !0);
			za.add(b, a);
			a.B = 0;
		}
	}
	function bd(a, b) {
		if (ac(a.h) >= a.h.j - (a.s ? 1 : 0)) return !1;
		if (a.s) return a.i = b.D.concat(a.i), !0;
		if (1 == a.G || 2 == a.G || a.B >= (a.Va ? 0 : a.Wa)) return !1;
		a.s = ub(p(a.Ga, a, b), cd(a, a.B));
		a.B++;
		return !0;
	}
	h.Ga = function(a) {
		if (this.s) if (this.s = null, 1 == this.G) {
			if (!a) {
				this.U = Math.floor(1e5 * Math.random());
				a = this.U++;
				const e = new M(this, this.j, a);
				let f = this.o;
				this.S && (f ? (f = sa(f), ua(f, this.S)) : f = this.S);
				null !== this.m || this.O || (e.H = f, f = null);
				if (this.P) a: {
					var b = 0;
					for (var c = 0; c < this.i.length; c++) {
						b: {
							var d = this.i[c];
							if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
								d = d.length;
								break b;
							}
							d = void 0;
						}
						if (void 0 === d) break;
						b += d;
						if (4096 < b) {
							b = c;
							break a;
						}
						if (4096 === b || c === this.i.length - 1) {
							b = c + 1;
							break a;
						}
					}
					b = 1e3;
				}
				else b = 1e3;
				b = dd(this, e, b);
				c = N(this.I);
				S(c, "RID", a);
				S(c, "CVER", 22);
				this.D && S(c, "X-HTTP-Session-Id", this.D);
				$c(this, c);
				f && (this.O ? b = "headers=" + encodeURIComponent(String(Oc(f))) + "&" + b : this.m && Pc(c, this.m, f));
				bc(this.h, e);
				this.Ua && S(c, "TYPE", "init");
				this.P ? (S(c, "$req", b), S(c, "SID", "null"), e.T = !0, Hb(e, c, null)) : Hb(e, c, b);
				this.G = 2;
			}
		} else 3 == this.G && (a ? ed(this, a) : 0 == this.i.length || jc(this.h) || ed(this));
	};
	function ed(a, b) {
		var c;
		b ? c = b.l : c = a.U++;
		const d = N(a.I);
		S(d, "SID", a.K);
		S(d, "RID", c);
		S(d, "AID", a.T);
		$c(a, d);
		a.m && a.o && Pc(d, a.m, a.o);
		c = new M(a, a.j, c, a.B + 1);
		null === a.m && (c.H = a.o);
		b && (a.i = b.D.concat(a.i));
		b = dd(a, c, 1e3);
		c.I = Math.round(.5 * a.wa) + Math.round(.5 * a.wa * Math.random());
		bc(a.h, c);
		Hb(c, d, b);
	}
	function $c(a, b) {
		a.H && qa(a.H, function(c, d) {
			S(b, d, c);
		});
		a.l && nc({}, function(c, d) {
			S(b, d, c);
		});
	}
	function dd(a, b, c) {
		c = Math.min(a.i.length, c);
		var d = a.l ? p(a.l.Na, a.l, a) : null;
		a: {
			var e = a.i;
			let f = -1;
			for (;;) {
				const g = ["count=" + c];
				-1 == f ? 0 < c ? (f = e[0].g, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
				let m = !0;
				for (let q = 0; q < c; q++) {
					let l = e[q].g;
					const v = e[q].map;
					l -= f;
					if (0 > l) f = Math.max(0, e[q].g - 100), m = !1;
					else try {
						Ic(v, g, "req" + l + "_");
					} catch (w) {
						d && d(v);
					}
				}
				if (m) {
					d = g.join("&");
					break a;
				}
			}
		}
		a = a.i.splice(0, c);
		b.D = a;
		return d;
	}
	function ec(a) {
		if (!a.g && !a.u) {
			a.Y = 1;
			var b = a.Fa;
			x || Ea();
			y || (x(), y = !0);
			za.add(b, a);
			a.v = 0;
		}
	}
	function $b(a) {
		if (a.g || a.u || 3 <= a.v) return !1;
		a.Y++;
		a.u = ub(p(a.Fa, a), cd(a, a.v));
		a.v++;
		return !0;
	}
	h.Fa = function() {
		this.u = null;
		fd(this);
		if (this.ba && !(this.M || null == this.g || 0 >= this.R)) {
			var a = 2 * this.R;
			this.j.info("BP detection timer enabled: " + a);
			this.A = ub(p(this.ab, this), a);
		}
	};
	h.ab = function() {
		this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, K(10), Zb(this), fd(this));
	};
	function Tb(a) {
		null != a.A && (k.clearTimeout(a.A), a.A = null);
	}
	function fd(a) {
		a.g = new M(a, a.j, "rpc", a.Y);
		null === a.m && (a.g.H = a.o);
		a.g.O = 0;
		var b = N(a.qa);
		S(b, "RID", "rpc");
		S(b, "SID", a.K);
		S(b, "AID", a.T);
		S(b, "CI", a.F ? "0" : "1");
		!a.F && a.ja && S(b, "TO", a.ja);
		S(b, "TYPE", "xmlhttp");
		$c(a, b);
		a.m && a.o && Pc(b, a.m, a.o);
		a.L && (a.g.I = a.L);
		var c = a.g;
		a = a.ia;
		c.L = 1;
		c.v = Ib(N(b));
		c.m = null;
		c.P = !0;
		Jb(c, a);
	}
	h.Za = function() {
		null != this.C && (this.C = null, Zb(this), $b(this), K(19));
	};
	function Yb(a) {
		null != a.C && (k.clearTimeout(a.C), a.C = null);
	}
	function Ub(a, b) {
		var c = null;
		if (a.g == b) {
			Yb(a);
			Tb(a);
			a.g = null;
			var d = 2;
		} else if (Xb(a.h, b)) c = b.D, dc(a.h, b), d = 1;
		else return;
		if (0 != a.G) {
			if (b.o) if (1 == d) {
				c = b.m ? b.m.length : 0;
				b = Date.now() - b.F;
				var e = a.B;
				d = qb();
				F(d, new tb(d, c));
				fc(a);
			} else ec(a);
			else if (e = b.s, 3 == e || 0 == e && 0 < b.X || !(1 == d && bd(a, b) || 2 == d && $b(a))) switch (c && 0 < c.length && (b = a.h, b.i = b.i.concat(c)), e) {
				case 1:
					R(a, 5);
					break;
				case 4:
					R(a, 10);
					break;
				case 3:
					R(a, 6);
					break;
				default: R(a, 2);
			}
		}
	}
	function cd(a, b) {
		let c = a.Ta + Math.floor(Math.random() * a.cb);
		a.isActive() || (c *= 2);
		return c * b;
	}
	function R(a, b) {
		a.j.info("Error code " + b);
		if (2 == b) {
			var c = p(a.fb, a), d = a.Xa;
			const e = !d;
			d = new T(d || "//www.google.com/images/cleardot.gif");
			k.location && "http" == k.location.protocol || qc(d, "https");
			Ib(d);
			e ? Fc(d.toString(), c) : Gc(d.toString(), c);
		} else K(2);
		a.G = 0;
		a.l && a.l.sa(b);
		ad(a);
		Zc(a);
	}
	h.fb = function(a) {
		a ? (this.j.info("Successfully pinged google.com"), K(2)) : (this.j.info("Failed to ping google.com"), K(1));
	};
	function ad(a) {
		a.G = 0;
		a.ka = [];
		if (a.l) {
			const b = kc(a.h);
			if (0 != b.length || 0 != a.i.length) ma(a.ka, b), ma(a.ka, a.i), a.h.i.length = 0, la(a.i), a.i.length = 0;
			a.l.ra();
		}
	}
	function cc(a, b, c) {
		var d = c instanceof T ? N(c) : new T(c);
		if ("" != d.g) b && (d.g = b + "." + d.g), rc(d, d.s);
		else {
			var e = k.location;
			d = e.protocol;
			b = b ? b + "." + e.hostname : e.hostname;
			e = +e.port;
			var f = new T(null);
			d && qc(f, d);
			b && (f.g = b);
			e && rc(f, e);
			c && (f.l = c);
			d = f;
		}
		c = a.D;
		b = a.ya;
		c && b && S(d, c, b);
		S(d, "VER", a.la);
		$c(a, d);
		return d;
	}
	function Mb(a, b, c) {
		if (b && !a.J) throw Error("Can't create secondary domain capable XhrIo object.");
		b = a.Ca && !a.pa ? new X(new Jc({ eb: c })) : new X(a.pa);
		b.Ha(a.J);
		return b;
	}
	h.isActive = function() {
		return !!this.l && this.l.isActive(this);
	};
	function gd() {}
	h = gd.prototype;
	h.ua = function() {};
	h.ta = function() {};
	h.sa = function() {};
	h.ra = function() {};
	h.isActive = function() {
		return !0;
	};
	h.Na = function() {};
	function hd() {}
	hd.prototype.g = function(a, b) {
		return new Y(a, b);
	};
	function Y(a, b) {
		E.call(this);
		this.g = new Yc(b);
		this.l = a;
		this.h = b && b.messageUrlParams || null;
		a = b && b.messageHeaders || null;
		b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
		this.g.o = a;
		a = b && b.initMessageHeaders || null;
		b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
		b && b.va && (a ? a["X-WebChannel-Client-Profile"] = b.va : a = { "X-WebChannel-Client-Profile": b.va });
		this.g.S = a;
		(a = b && b.Sb) && !t(a) && (this.g.m = a);
		this.v = b && b.supportsCrossDomainXhr || !1;
		this.u = b && b.sendRawJson || !1;
		(b = b && b.httpSessionIdParam) && !t(b) && (this.g.D = b, a = this.h, null !== a && b in a && (a = this.h, b in a && delete a[b]));
		this.j = new Z(this);
	}
	r(Y, E);
	Y.prototype.m = function() {
		this.g.l = this.j;
		this.v && (this.g.J = !0);
		this.g.connect(this.l, this.h || void 0);
	};
	Y.prototype.close = function() {
		gc(this.g);
	};
	Y.prototype.o = function(a) {
		var b = this.g;
		if ("string" === typeof a) {
			var c = {};
			c.__data__ = a;
			a = c;
		} else this.u && (c = {}, c.__data__ = hb(a), a = c);
		b.i.push(new hc(b.Ya++, a));
		3 == b.G && fc(b);
	};
	Y.prototype.N = function() {
		this.g.l = null;
		delete this.j;
		gc(this.g);
		delete this.g;
		Y.aa.N.call(this);
	};
	function id(a) {
		nb.call(this);
		a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
		var b = a.__sm__;
		if (b) {
			a: {
				for (const c in b) {
					a = c;
					break a;
				}
				a = void 0;
			}
			if (this.i = a) a = this.i, b = null !== b && a in b ? b[a] : void 0;
			this.data = b;
		} else this.data = a;
	}
	r(id, nb);
	function jd() {
		ob.call(this);
		this.status = 1;
	}
	r(jd, ob);
	function Z(a) {
		this.g = a;
	}
	r(Z, gd);
	Z.prototype.ua = function() {
		F(this.g, "a");
	};
	Z.prototype.ta = function(a) {
		F(this.g, new id(a));
	};
	Z.prototype.sa = function(a) {
		F(this.g, new jd());
	};
	Z.prototype.ra = function() {
		F(this.g, "b");
	};
	hd.prototype.createWebChannel = hd.prototype.g;
	Y.prototype.send = Y.prototype.o;
	Y.prototype.open = Y.prototype.m;
	Y.prototype.close = Y.prototype.close;
	createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
		return new hd();
	};
	getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
		return qb();
	};
	Event = webchannel_blob_es2018.Event = I;
	Stat = webchannel_blob_es2018.Stat = {
		mb: 0,
		pb: 1,
		qb: 2,
		Jb: 3,
		Ob: 4,
		Lb: 5,
		Mb: 6,
		Kb: 7,
		Ib: 8,
		Nb: 9,
		PROXY: 10,
		NOPROXY: 11,
		Gb: 12,
		Cb: 13,
		Db: 14,
		Bb: 15,
		Eb: 16,
		Fb: 17,
		ib: 18,
		hb: 19,
		jb: 20
	};
	Ab.NO_ERROR = 0;
	Ab.TIMEOUT = 8;
	Ab.HTTP_ERROR = 6;
	ErrorCode = webchannel_blob_es2018.ErrorCode = Ab;
	Bb.COMPLETE = "complete";
	EventType = webchannel_blob_es2018.EventType = Bb;
	mb.EventType = H;
	H.OPEN = "a";
	H.CLOSE = "b";
	H.ERROR = "c";
	H.MESSAGE = "d";
	E.prototype.listen = E.prototype.K;
	WebChannel = webchannel_blob_es2018.WebChannel = mb;
	webchannel_blob_es2018.FetchXmlHttpFactory = Jc;
	X.prototype.listenOnce = X.prototype.L;
	X.prototype.getLastError = X.prototype.Ka;
	X.prototype.getLastErrorCode = X.prototype.Ba;
	X.prototype.getStatus = X.prototype.Z;
	X.prototype.getResponseJson = X.prototype.Oa;
	X.prototype.getResponseText = X.prototype.oa;
	X.prototype.send = X.prototype.ea;
	X.prototype.setWithCredentials = X.prototype.Ha;
	XhrIo = webchannel_blob_es2018.XhrIo = X;
}).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
//#endregion
//#region node_modules/@firebase/firestore/dist/index.esm2017.js
var w = "@firebase/firestore";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Simple wrapper around a nullable UID. Mostly exists to make code more
* readable.
*/
var User = class {
	constructor(e) {
		this.uid = e;
	}
	isAuthenticated() {
		return null != this.uid;
	}
	/**
	* Returns a key representing this user, suitable for inclusion in a
	* dictionary.
	*/ toKey() {
		return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
	}
	isEqual(e) {
		return e.uid === this.uid;
	}
};
/** A user with a null UID. */ User.UNAUTHENTICATED = new User(null), User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var S = "10.14.0";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var b = new Logger("@firebase/firestore");
function __PRIVATE_getLogLevel() {
	return b.logLevel;
}
/**
* Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
*
* @param logLevel - The verbosity you set for activity and error logging. Can
*   be any of the following values:
*
*   <ul>
*     <li>`debug` for the most verbose logging level, primarily for
*     debugging.</li>
*     <li>`error` to log errors only.</li>
*     <li><code>`silent` to turn off logging.</li>
*   </ul>
*/ function setLogLevel(e) {
	b.setLogLevel(e);
}
function __PRIVATE_logDebug(e, ...t) {
	if (b.logLevel <= LogLevel.DEBUG) {
		const n = t.map(__PRIVATE_argToString);
		b.debug(`Firestore (${S}): ${e}`, ...n);
	}
}
function __PRIVATE_logError(e, ...t) {
	if (b.logLevel <= LogLevel.ERROR) {
		const n = t.map(__PRIVATE_argToString);
		b.error(`Firestore (${S}): ${e}`, ...n);
	}
}
/**
* @internal
*/ function __PRIVATE_logWarn(e, ...t) {
	if (b.logLevel <= LogLevel.WARN) {
		const n = t.map(__PRIVATE_argToString);
		b.warn(`Firestore (${S}): ${e}`, ...n);
	}
}
/**
* Converts an additional log parameter to a string representation.
*/ function __PRIVATE_argToString(e) {
	if ("string" == typeof e) return e;
	try {
		/**
		* @license
		* Copyright 2020 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*   http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/** Formats an object as a JSON string, suitable for logging. */
		return function __PRIVATE_formatJSON(e) {
			return JSON.stringify(e);
		}(e);
	} catch (t) {
		return e;
	}
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Unconditionally fails, throwing an Error with the given message.
* Messages are stripped in production builds.
*
* Returns `never` and can be used in expressions:
* @example
* let futureVar = fail('not implemented yet');
*/ function fail(e = "Unexpected state") {
	const t = `FIRESTORE (${S}) INTERNAL ASSERTION FAILED: ` + e;
	throw __PRIVATE_logError(t), new Error(t);
}
/**
* Fails if the given assertion condition is false, throwing an Error with the
* given message if it did.
*
* Messages are stripped in production builds.
*/ function __PRIVATE_hardAssert(e, t) {
	e || fail();
}
/**
* Fails if the given assertion condition is false, throwing an Error with the
* given message if it did.
*
* The code of callsites invoking this function are stripped out in production
* builds. Any side-effects of code within the debugAssert() invocation will not
* happen in this case.
*
* @internal
*/ function __PRIVATE_debugAssert(e, t) {
	e || fail();
}
/**
* Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
* instance of `T` before casting.
*/ function __PRIVATE_debugCast(e, t) {
	return e;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var D = {
	OK: "ok",
	CANCELLED: "cancelled",
	UNKNOWN: "unknown",
	INVALID_ARGUMENT: "invalid-argument",
	DEADLINE_EXCEEDED: "deadline-exceeded",
	NOT_FOUND: "not-found",
	ALREADY_EXISTS: "already-exists",
	PERMISSION_DENIED: "permission-denied",
	UNAUTHENTICATED: "unauthenticated",
	RESOURCE_EXHAUSTED: "resource-exhausted",
	FAILED_PRECONDITION: "failed-precondition",
	ABORTED: "aborted",
	OUT_OF_RANGE: "out-of-range",
	UNIMPLEMENTED: "unimplemented",
	INTERNAL: "internal",
	UNAVAILABLE: "unavailable",
	DATA_LOSS: "data-loss"
};
/** An error returned by a Firestore operation. */ var FirestoreError = class extends FirebaseError {
	/** @hideconstructor */
	constructor(e, t) {
		super(e, t), this.code = e, this.message = t, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_Deferred = class {
	constructor() {
		this.promise = new Promise(((e, t) => {
			this.resolve = e, this.reject = t;
		}));
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_OAuthToken = class {
	constructor(e, t) {
		this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
	}
};
/**
* A CredentialsProvider that always yields an empty token.
* @internal
*/ var __PRIVATE_EmptyAuthCredentialsProvider = class {
	getToken() {
		return Promise.resolve(null);
	}
	invalidateToken() {}
	start(e, t) {
		e.enqueueRetryable((() => t(User.UNAUTHENTICATED)));
	}
	shutdown() {}
};
/**
* A CredentialsProvider that always returns a constant token. Used for
* emulator token mocking.
*/ var __PRIVATE_EmulatorAuthCredentialsProvider = class {
	constructor(e) {
		this.token = e, this.changeListener = null;
	}
	getToken() {
		return Promise.resolve(this.token);
	}
	invalidateToken() {}
	start(e, t) {
		this.changeListener = t, e.enqueueRetryable((() => t(this.token.user)));
	}
	shutdown() {
		this.changeListener = null;
	}
};
var __PRIVATE_FirebaseAuthCredentialsProvider = class {
	constructor(e) {
		this.t = e, this.currentUser = User.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null;
	}
	start(e, t) {
		__PRIVATE_hardAssert(void 0 === this.o);
		let n = this.i;
		const __PRIVATE_guardedChangeListener = (e) => this.i !== n ? (n = this.i, t(e)) : Promise.resolve();
		let r = new __PRIVATE_Deferred();
		this.o = () => {
			this.i++, this.currentUser = this.u(), r.resolve(), r = new __PRIVATE_Deferred(), e.enqueueRetryable((() => __PRIVATE_guardedChangeListener(this.currentUser)));
		};
		const __PRIVATE_awaitNextToken = () => {
			const t = r;
			e.enqueueRetryable((async () => {
				await t.promise, await __PRIVATE_guardedChangeListener(this.currentUser);
			}));
		}, __PRIVATE_registerAuth = (e) => {
			__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e, this.o && (this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken());
		};
		this.t.onInit(((e) => __PRIVATE_registerAuth(e))), setTimeout((() => {
			if (!this.auth) {
				const e = this.t.getImmediate({ optional: !0 });
				e ? __PRIVATE_registerAuth(e) : (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r.resolve(), r = new __PRIVATE_Deferred());
			}
		}), 0), __PRIVATE_awaitNextToken();
	}
	getToken() {
		const e = this.i, t = this.forceRefresh;
		return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(((t) => this.i !== e ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t ? (__PRIVATE_hardAssert("string" == typeof t.accessToken), new __PRIVATE_OAuthToken(t.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
	}
	invalidateToken() {
		this.forceRefresh = !0;
	}
	shutdown() {
		this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
	}
	u() {
		const e = this.auth && this.auth.getUid();
		return __PRIVATE_hardAssert(null === e || "string" == typeof e), new User(e);
	}
};
var __PRIVATE_FirstPartyToken = class {
	constructor(e, t, n) {
		this.l = e, this.h = t, this.P = n, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
	}
	/**
	* Gets an authorization token, using a provided factory function, or return
	* null.
	*/ T() {
		return this.P ? this.P() : null;
	}
	get headers() {
		this.I.set("X-Goog-AuthUser", this.l);
		const e = this.T();
		return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
	}
};
var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
	constructor(e, t, n) {
		this.l = e, this.h = t, this.P = n;
	}
	getToken() {
		return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l, this.h, this.P));
	}
	start(e, t) {
		e.enqueueRetryable((() => t(User.FIRST_PARTY)));
	}
	shutdown() {}
	invalidateToken() {}
};
var AppCheckToken = class {
	constructor(e) {
		this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
	}
};
var __PRIVATE_FirebaseAppCheckTokenProvider = class {
	constructor(e) {
		this.A = e, this.forceRefresh = !1, this.appCheck = null, this.R = null;
	}
	start(e, t) {
		__PRIVATE_hardAssert(void 0 === this.o);
		const onTokenChanged = (e) => {
			null != e.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);
			const n = e.token !== this.R;
			return this.R = e.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`), n ? t(e.token) : Promise.resolve();
		};
		this.o = (t) => {
			e.enqueueRetryable((() => onTokenChanged(t)));
		};
		const __PRIVATE_registerAppCheck = (e) => {
			__PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e, this.o && this.appCheck.addTokenListener(this.o);
		};
		this.A.onInit(((e) => __PRIVATE_registerAppCheck(e))), setTimeout((() => {
			if (!this.appCheck) {
				const e = this.A.getImmediate({ optional: !0 });
				e ? __PRIVATE_registerAppCheck(e) : __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
			}
		}), 0);
	}
	getToken() {
		const e = this.forceRefresh;
		return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then(((e) => e ? (__PRIVATE_hardAssert("string" == typeof e.token), this.R = e.token, new AppCheckToken(e.token)) : null)) : Promise.resolve(null);
	}
	invalidateToken() {
		this.forceRefresh = !0;
	}
	shutdown() {
		this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
	}
};
/**
* An AppCheck token provider that always yields an empty token.
* @internal
*/ var __PRIVATE_EmptyAppCheckTokenProvider = class {
	getToken() {
		return Promise.resolve(new AppCheckToken(""));
	}
	invalidateToken() {}
	start(e, t) {}
	shutdown() {}
};
/**
* Builds a CredentialsProvider depending on the type of
* the credentials passed in.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Generates `nBytes` of random bytes.
*
* If `nBytes < 0` , an error will be thrown.
*/
function __PRIVATE_randomBytes(e) {
	const t = "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(e);
	if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
	else for (let t = 0; t < e; t++) n[t] = Math.floor(256 * Math.random());
	return n;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A utility class for generating unique alphanumeric IDs of a specified length.
*
* @internal
* Exported internally for testing purposes.
*/ var __PRIVATE_AutoId = class {
	static newId() {
		const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / 62) * 62;
		let n = "";
		for (; n.length < 20;) {
			const r = __PRIVATE_randomBytes(40);
			for (let i = 0; i < r.length; ++i) n.length < 20 && r[i] < t && (n += e.charAt(r[i] % 62));
		}
		return n;
	}
};
function __PRIVATE_primitiveComparator(e, t) {
	return e < t ? -1 : e > t ? 1 : 0;
}
/** Helper to compare arrays using isEqual(). */ function __PRIVATE_arrayEquals(e, t, n) {
	return e.length === t.length && e.every(((e, r) => n(e, t[r])));
}
/**
* Returns the immediate lexicographically-following string. This is useful to
* construct an inclusive range for indexeddb iterators.
*/ function __PRIVATE_immediateSuccessor(e) {
	return e + "\0";
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `Timestamp` represents a point in time independent of any time zone or
* calendar, represented as seconds and fractions of seconds at nanosecond
* resolution in UTC Epoch time.
*
* It is encoded using the Proleptic Gregorian Calendar which extends the
* Gregorian calendar backwards to year one. It is encoded assuming all minutes
* are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
* table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
* 9999-12-31T23:59:59.999999999Z.
*
* For examples and further specifications, refer to the
* {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
*/
var Timestamp = class Timestamp {
	/**
	* Creates a new timestamp.
	*
	* @param seconds - The number of seconds of UTC time since Unix epoch
	*     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
	*     9999-12-31T23:59:59Z inclusive.
	* @param nanoseconds - The non-negative fractions of a second at nanosecond
	*     resolution. Negative second values with fractions must still have
	*     non-negative nanoseconds values that count forward in time. Must be
	*     from 0 to 999,999,999 inclusive.
	*/
	constructor(e, t) {
		if (this.seconds = e, this.nanoseconds = t, t < 0) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
		if (t >= 1e9) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
		if (e < -62135596800) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
		if (e >= 253402300800) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
	}
	/**
	* Creates a new timestamp with the current date, with millisecond precision.
	*
	* @returns a new timestamp representing the current date.
	*/ static now() {
		return Timestamp.fromMillis(Date.now());
	}
	/**
	* Creates a new timestamp from the given date.
	*
	* @param date - The date to initialize the `Timestamp` from.
	* @returns A new `Timestamp` representing the same point in time as the given
	*     date.
	*/ static fromDate(e) {
		return Timestamp.fromMillis(e.getTime());
	}
	/**
	* Creates a new timestamp from the given number of milliseconds.
	*
	* @param milliseconds - Number of milliseconds since Unix epoch
	*     1970-01-01T00:00:00Z.
	* @returns A new `Timestamp` representing the same point in time as the given
	*     number of milliseconds.
	*/ static fromMillis(e) {
		const t = Math.floor(e / 1e3);
		return new Timestamp(t, Math.floor(1e6 * (e - 1e3 * t)));
	}
	/**
	* Converts a `Timestamp` to a JavaScript `Date` object. This conversion
	* causes a loss of precision since `Date` objects only support millisecond
	* precision.
	*
	* @returns JavaScript `Date` object representing the same point in time as
	*     this `Timestamp`, with millisecond precision.
	*/ toDate() {
		return new Date(this.toMillis());
	}
	/**
	* Converts a `Timestamp` to a numeric timestamp (in milliseconds since
	* epoch). This operation causes a loss of precision.
	*
	* @returns The point in time corresponding to this timestamp, represented as
	*     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
	*/ toMillis() {
		return 1e3 * this.seconds + this.nanoseconds / 1e6;
	}
	_compareTo(e) {
		return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
	}
	/**
	* Returns true if this `Timestamp` is equal to the provided one.
	*
	* @param other - The `Timestamp` to compare against.
	* @returns true if this `Timestamp` is equal to the provided one.
	*/ isEqual(e) {
		return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
	}
	/** Returns a textual representation of this `Timestamp`. */ toString() {
		return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
	}
	/** Returns a JSON-serializable representation of this `Timestamp`. */ toJSON() {
		return {
			seconds: this.seconds,
			nanoseconds: this.nanoseconds
		};
	}
	/**
	* Converts this object to a primitive string, which allows `Timestamp` objects
	* to be compared using the `>`, `<=`, `>=` and `>` operators.
	*/ valueOf() {
		const e = this.seconds - -62135596800;
		return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A version of a document in Firestore. This corresponds to the version
* timestamp, such as update_time or read_time.
*/ var SnapshotVersion = class SnapshotVersion {
	constructor(e) {
		this.timestamp = e;
	}
	static fromTimestamp(e) {
		return new SnapshotVersion(e);
	}
	static min() {
		return new SnapshotVersion(new Timestamp(0, 0));
	}
	static max() {
		return new SnapshotVersion(new Timestamp(253402300799, 999999999));
	}
	compareTo(e) {
		return this.timestamp._compareTo(e.timestamp);
	}
	isEqual(e) {
		return this.timestamp.isEqual(e.timestamp);
	}
	/** Returns a number representation of the version for use in spec tests. */ toMicroseconds() {
		return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
	}
	toString() {
		return "SnapshotVersion(" + this.timestamp.toString() + ")";
	}
	toTimestamp() {
		return this.timestamp;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Path represents an ordered sequence of string segments.
*/
var BasePath = class BasePath {
	constructor(e, t, n) {
		void 0 === t ? t = 0 : t > e.length && fail(), void 0 === n ? n = e.length - t : n > e.length - t && fail(), this.segments = e, this.offset = t, this.len = n;
	}
	get length() {
		return this.len;
	}
	isEqual(e) {
		return 0 === BasePath.comparator(this, e);
	}
	child(e) {
		const t = this.segments.slice(this.offset, this.limit());
		return e instanceof BasePath ? e.forEach(((e) => {
			t.push(e);
		})) : t.push(e), this.construct(t);
	}
	/** The index of one past the last segment of the path. */ limit() {
		return this.offset + this.length;
	}
	popFirst(e) {
		return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
	}
	popLast() {
		return this.construct(this.segments, this.offset, this.length - 1);
	}
	firstSegment() {
		return this.segments[this.offset];
	}
	lastSegment() {
		return this.get(this.length - 1);
	}
	get(e) {
		return this.segments[this.offset + e];
	}
	isEmpty() {
		return 0 === this.length;
	}
	isPrefixOf(e) {
		if (e.length < this.length) return !1;
		for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
		return !0;
	}
	isImmediateParentOf(e) {
		if (this.length + 1 !== e.length) return !1;
		for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
		return !0;
	}
	forEach(e) {
		for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t]);
	}
	toArray() {
		return this.segments.slice(this.offset, this.limit());
	}
	static comparator(e, t) {
		const n = Math.min(e.length, t.length);
		for (let r = 0; r < n; r++) {
			const n = e.get(r), i = t.get(r);
			if (n < i) return -1;
			if (n > i) return 1;
		}
		return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
	}
};
/**
* A slash-separated path for navigating resources (documents and collections)
* within Firestore.
*
* @internal
*/ var ResourcePath = class ResourcePath extends BasePath {
	construct(e, t, n) {
		return new ResourcePath(e, t, n);
	}
	canonicalString() {
		return this.toArray().join("/");
	}
	toString() {
		return this.canonicalString();
	}
	/**
	* Returns a string representation of this path
	* where each path segment has been encoded with
	* `encodeURIComponent`.
	*/ toUriEncodedString() {
		return this.toArray().map(encodeURIComponent).join("/");
	}
	/**
	* Creates a resource path from the given slash-delimited string. If multiple
	* arguments are provided, all components are combined. Leading and trailing
	* slashes from all components are ignored.
	*/ static fromString(...e) {
		const t = [];
		for (const n of e) {
			if (n.indexOf("//") >= 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
			t.push(...n.split("/").filter(((e) => e.length > 0)));
		}
		return new ResourcePath(t);
	}
	static emptyPath() {
		return new ResourcePath([]);
	}
};
var v = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
* A dot-separated path for navigating sub-objects within a document.
* @internal
*/ var FieldPath$1 = class FieldPath$1 extends BasePath {
	construct(e, t, n) {
		return new FieldPath$1(e, t, n);
	}
	/**
	* Returns true if the string could be used as a segment in a field path
	* without escaping.
	*/ static isValidIdentifier(e) {
		return v.test(e);
	}
	canonicalString() {
		return this.toArray().map(((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"), e))).join(".");
	}
	toString() {
		return this.canonicalString();
	}
	/**
	* Returns true if this field references the key of a document.
	*/ isKeyField() {
		return 1 === this.length && "__name__" === this.get(0);
	}
	/**
	* The field designating the key of a document.
	*/ static keyField() {
		return new FieldPath$1(["__name__"]);
	}
	/**
	* Parses a field string from the given server-formatted string.
	*
	* - Splitting the empty string is not allowed (for now at least).
	* - Empty segments within the string (e.g. if there are two consecutive
	*   separators) are not allowed.
	*
	* TODO(b/37244157): we should make this more strict. Right now, it allows
	* non-identifier path components, even if they aren't escaped.
	*/ static fromServerFormat(e) {
		const t = [];
		let n = "", r = 0;
		const __PRIVATE_addCurrentSegment = () => {
			if (0 === n.length) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
			t.push(n), n = "";
		};
		let i = !1;
		for (; r < e.length;) {
			const t = e[r];
			if ("\\" === t) {
				if (r + 1 === e.length) throw new FirestoreError(D.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
				const t = e[r + 1];
				if ("\\" !== t && "." !== t && "`" !== t) throw new FirestoreError(D.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
				n += t, r += 2;
			} else "`" === t ? (i = !i, r++) : "." !== t || i ? (n += t, r++) : (__PRIVATE_addCurrentSegment(), r++);
		}
		if (__PRIVATE_addCurrentSegment(), i) throw new FirestoreError(D.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
		return new FieldPath$1(t);
	}
	static emptyPath() {
		return new FieldPath$1([]);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @internal
*/ var DocumentKey = class DocumentKey {
	constructor(e) {
		this.path = e;
	}
	static fromPath(e) {
		return new DocumentKey(ResourcePath.fromString(e));
	}
	static fromName(e) {
		return new DocumentKey(ResourcePath.fromString(e).popFirst(5));
	}
	static empty() {
		return new DocumentKey(ResourcePath.emptyPath());
	}
	get collectionGroup() {
		return this.path.popLast().lastSegment();
	}
	/** Returns true if the document is in the specified collectionId. */ hasCollectionId(e) {
		return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
	}
	/** Returns the collection group (i.e. the name of the parent collection) for this key. */ getCollectionGroup() {
		return this.path.get(this.path.length - 2);
	}
	/** Returns the fully qualified path to the parent collection. */ getCollectionPath() {
		return this.path.popLast();
	}
	isEqual(e) {
		return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
	}
	toString() {
		return this.path.toString();
	}
	static comparator(e, t) {
		return ResourcePath.comparator(e.path, t.path);
	}
	static isDocumentKey(e) {
		return e.length % 2 == 0;
	}
	/**
	* Creates and returns a new document key with the given segments.
	*
	* @param segments - The segments of the path to the document
	* @returns A new instance of DocumentKey
	*/ static fromSegments(e) {
		return new DocumentKey(new ResourcePath(e.slice()));
	}
};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The initial mutation batch id for each index. Gets updated during index
* backfill.
*/
/**
* An index definition for field indexes in Firestore.
*
* Every index is associated with a collection. The definition contains a list
* of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
* `CONTAINS` for ArrayContains/ArrayContainsAny queries).
*
* Unlike the backend, the SDK does not differentiate between collection or
* collection group-scoped indices. Every index can be used for both single
* collection and collection group queries.
*/
var FieldIndex = class {
	constructor(e, t, n, r) {
		this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r;
	}
};
/** An ID for an index that has not yet been added to persistence.  */
/** Returns the ArrayContains/ArrayContainsAny segment for this index. */
function __PRIVATE_fieldIndexGetArraySegment(e) {
	return e.fields.find(((e) => 2 === e.kind));
}
/** Returns all directional (ascending/descending) segments for this index. */ function __PRIVATE_fieldIndexGetDirectionalSegments(e) {
	return e.fields.filter(((e) => 2 !== e.kind));
}
/**
* Returns the order of the document key component for the given index.
*
* PORTING NOTE: This is only used in the Web IndexedDb implementation.
*/
/**
* Compares indexes by collection group and segments. Ignores update time and
* index ID.
*/
function __PRIVATE_fieldIndexSemanticComparator(e, t) {
	let n = __PRIVATE_primitiveComparator(e.collectionGroup, t.collectionGroup);
	if (0 !== n) return n;
	for (let r = 0; r < Math.min(e.fields.length, t.fields.length); ++r) if (n = __PRIVATE_indexSegmentComparator(e.fields[r], t.fields[r]), 0 !== n) return n;
	return __PRIVATE_primitiveComparator(e.fields.length, t.fields.length);
}
/** Returns a debug representation of the field index */ FieldIndex.UNKNOWN_ID = -1;
/** An index component consisting of field path and index type.  */
var IndexSegment = class {
	constructor(e, t) {
		this.fieldPath = e, this.kind = t;
	}
};
function __PRIVATE_indexSegmentComparator(e, t) {
	const n = FieldPath$1.comparator(e.fieldPath, t.fieldPath);
	return 0 !== n ? n : __PRIVATE_primitiveComparator(e.kind, t.kind);
}
/**
* Stores the "high water mark" that indicates how updated the Index is for the
* current user.
*/ var IndexState = class IndexState {
	constructor(e, t) {
		this.sequenceNumber = e, this.offset = t;
	}
	/** The state of an index that has not yet been backfilled. */ static empty() {
		return new IndexState(0, IndexOffset.min());
	}
};
/**
* Creates an offset that matches all documents with a read time higher than
* `readTime`.
*/ function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t) {
	const n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1;
	return new IndexOffset(SnapshotVersion.fromTimestamp(1e9 === r ? new Timestamp(n + 1, 0) : new Timestamp(n, r)), DocumentKey.empty(), t);
}
/** Creates a new offset based on the provided document. */ function __PRIVATE_newIndexOffsetFromDocument(e) {
	return new IndexOffset(e.readTime, e.key, -1);
}
/**
* Stores the latest read time, document and batch ID that were processed for an
* index.
*/ var IndexOffset = class IndexOffset {
	constructor(e, t, n) {
		this.readTime = e, this.documentKey = t, this.largestBatchId = n;
	}
	/** Returns an offset that sorts before all regular offsets. */ static min() {
		return new IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), -1);
	}
	/** Returns an offset that sorts after all regular offsets. */ static max() {
		return new IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), -1);
	}
};
function __PRIVATE_indexOffsetComparator(e, t) {
	let n = e.readTime.compareTo(t.readTime);
	return 0 !== n ? n : (n = DocumentKey.comparator(e.documentKey, t.documentKey), 0 !== n ? n : __PRIVATE_primitiveComparator(e.largestBatchId, t.largestBatchId));
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var C = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
* A base class representing a persistence transaction, encapsulating both the
* transaction's sequence numbers as well as a list of onCommitted listeners.
*
* When you call Persistence.runTransaction(), it will create a transaction and
* pass it to your callback. You then pass it to any method that operates
* on persistence.
*/ var PersistenceTransaction = class {
	constructor() {
		this.onCommittedListeners = [];
	}
	addOnCommittedListener(e) {
		this.onCommittedListeners.push(e);
	}
	raiseOnCommittedEvent() {
		this.onCommittedListeners.forEach(((e) => e()));
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Verifies the error thrown by a LocalStore operation. If a LocalStore
* operation fails because the primary lease has been taken by another client,
* we ignore the error (the persistence layer will immediately call
* `applyPrimaryLease` to propagate the primary state change). All other errors
* are re-thrown.
*
* @param err - An error returned by a LocalStore operation.
* @returns A Promise that resolves after we recovered, or the original error.
*/ async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e) {
	if (e.code !== D.FAILED_PRECONDITION || e.message !== C) throw e;
	__PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease");
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* PersistencePromise is essentially a re-implementation of Promise except
* it has a .next() method instead of .then() and .next() and .catch() callbacks
* are executed synchronously when a PersistencePromise resolves rather than
* asynchronously (Promise implementations use setImmediate() or similar).
*
* This is necessary to interoperate with IndexedDB which will automatically
* commit transactions if control is returned to the event loop without
* synchronously initiating another operation on the transaction.
*
* NOTE: .then() and .catch() only allow a single consumer, unlike normal
* Promises.
*/ var PersistencePromise = class PersistencePromise {
	constructor(e) {
		this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e(((e) => {
			this.isDone = !0, this.result = e, this.nextCallback && this.nextCallback(e);
		}), ((e) => {
			this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e);
		}));
	}
	catch(e) {
		return this.next(void 0, e);
	}
	next(e, t) {
		return this.callbackAttached && fail(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new PersistencePromise(((n, r) => {
			this.nextCallback = (t) => {
				this.wrapSuccess(e, t).next(n, r);
			}, this.catchCallback = (e) => {
				this.wrapFailure(t, e).next(n, r);
			};
		}));
	}
	toPromise() {
		return new Promise(((e, t) => {
			this.next(e, t);
		}));
	}
	wrapUserFunction(e) {
		try {
			const t = e();
			return t instanceof PersistencePromise ? t : PersistencePromise.resolve(t);
		} catch (e) {
			return PersistencePromise.reject(e);
		}
	}
	wrapSuccess(e, t) {
		return e ? this.wrapUserFunction((() => e(t))) : PersistencePromise.resolve(t);
	}
	wrapFailure(e, t) {
		return e ? this.wrapUserFunction((() => e(t))) : PersistencePromise.reject(t);
	}
	static resolve(e) {
		return new PersistencePromise(((t, n) => {
			t(e);
		}));
	}
	static reject(e) {
		return new PersistencePromise(((t, n) => {
			n(e);
		}));
	}
	static waitFor(e) {
		return new PersistencePromise(((t, n) => {
			let r = 0, i = 0, s = !1;
			e.forEach(((e) => {
				++r, e.next((() => {
					++i, s && i === r && t();
				}), ((e) => n(e)));
			})), s = !0, i === r && t();
		}));
	}
	/**
	* Given an array of predicate functions that asynchronously evaluate to a
	* boolean, implements a short-circuiting `or` between the results. Predicates
	* will be evaluated until one of them returns `true`, then stop. The final
	* result will be whether any of them returned `true`.
	*/ static or(e) {
		let t = PersistencePromise.resolve(!1);
		for (const n of e) t = t.next(((e) => e ? PersistencePromise.resolve(e) : n()));
		return t;
	}
	static forEach(e, t) {
		const n = [];
		return e.forEach(((e, r) => {
			n.push(t.call(this, e, r));
		})), this.waitFor(n);
	}
	/**
	* Concurrently map all array elements through asynchronous function.
	*/ static mapArray(e, t) {
		return new PersistencePromise(((n, r) => {
			const i = e.length, s = new Array(i);
			let o = 0;
			for (let _ = 0; _ < i; _++) {
				const a = _;
				t(e[a]).next(((e) => {
					s[a] = e, ++o, o === i && n(s);
				}), ((e) => r(e)));
			}
		}));
	}
	/**
	* An alternative to recursive PersistencePromise calls, that avoids
	* potential memory problems from unbounded chains of promises.
	*
	* The `action` will be called repeatedly while `condition` is true.
	*/ static doWhile(e, t) {
		return new PersistencePromise(((n, r) => {
			const process = () => {
				!0 === e() ? t().next((() => {
					process();
				}), r) : n();
			};
			process();
		}));
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Wraps an IDBTransaction and exposes a store() method to get a handle to a
* specific object store.
*/
var __PRIVATE_SimpleDbTransaction = class __PRIVATE_SimpleDbTransaction {
	constructor(e, t) {
		this.action = e, this.transaction = t, this.aborted = !1, this.V = new __PRIVATE_Deferred(), this.transaction.oncomplete = () => {
			this.V.resolve();
		}, this.transaction.onabort = () => {
			t.error ? this.V.reject(new __PRIVATE_IndexedDbTransactionError(e, t.error)) : this.V.resolve();
		}, this.transaction.onerror = (t) => {
			const n = __PRIVATE_checkForAndReportiOSError(t.target.error);
			this.V.reject(new __PRIVATE_IndexedDbTransactionError(e, n));
		};
	}
	static open(e, t, n, r) {
		try {
			return new __PRIVATE_SimpleDbTransaction(t, e.transaction(r, n));
		} catch (e) {
			throw new __PRIVATE_IndexedDbTransactionError(t, e);
		}
	}
	get m() {
		return this.V.promise;
	}
	abort(e) {
		e && this.V.reject(e), this.aborted || (__PRIVATE_logDebug("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
	}
	g() {
		const e = this.transaction;
		this.aborted || "function" != typeof e.commit || e.commit();
	}
	/**
	* Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
	* operations performed on the SimpleDbStore happen within the context of this
	* transaction and it cannot be used anymore once the transaction is
	* completed.
	*
	* Note that we can't actually enforce that the KeyType and ValueType are
	* correct, but they allow type safety through the rest of the consuming code.
	*/ store(e) {
		return new __PRIVATE_SimpleDbStore(this.transaction.objectStore(e));
	}
};
/**
* Provides a wrapper around IndexedDb with a simplified interface that uses
* Promise-like return values to chain operations. Real promises cannot be used
* since .then() continuations are executed asynchronously (e.g. via
* .setImmediate), which would cause IndexedDB to end the transaction.
* See PersistencePromise for more details.
*/ var __PRIVATE_SimpleDb = class __PRIVATE_SimpleDb {
	constructor(e, t, n) {
		this.name = e, this.version = t, this.p = n;
		12.2 === __PRIVATE_SimpleDb.S(getUA()) && __PRIVATE_logError("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
	}
	/** Deletes the specified database. */ static delete(e) {
		return __PRIVATE_logDebug("SimpleDb", "Removing database:", e), __PRIVATE_wrapRequest(window.indexedDB.deleteDatabase(e)).toPromise();
	}
	/** Returns true if IndexedDB is available in the current environment. */ static D() {
		if (!isIndexedDBAvailable()) return !1;
		if (__PRIVATE_SimpleDb.v()) return !0;
		const e = getUA(), t = __PRIVATE_SimpleDb.S(e), n = 0 < t && t < 10, r = __PRIVATE_getAndroidVersion(e), i = 0 < r && r < 4.5;
		return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || n || i);
	}
	/**
	* Returns true if the backing IndexedDB store is the Node IndexedDBShim
	* (see https://github.com/axemclion/IndexedDBShim).
	*/ static v() {
		var e;
		return "undefined" != typeof process && "YES" === (null === (e = process.__PRIVATE_env) || void 0 === e ? void 0 : e.C);
	}
	/** Helper to get a typed SimpleDbStore from a transaction. */ static F(e, t) {
		return e.store(t);
	}
	/** Parse User Agent to determine iOS version. Returns -1 if not found. */
	static S(e) {
		const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
		return Number(n);
	}
	/**
	* Opens the specified database, creating or upgrading it if necessary.
	*/ async M(e) {
		return this.db || (__PRIVATE_logDebug("SimpleDb", "Opening database:", this.name), this.db = await new Promise(((t, n) => {
			const r = indexedDB.open(this.name, this.version);
			r.onsuccess = (e) => {
				const n = e.target.result;
				t(n);
			}, r.onblocked = () => {
				n(new __PRIVATE_IndexedDbTransactionError(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
			}, r.onerror = (t) => {
				const r = t.target.error;
				"VersionError" === r.name ? n(new FirestoreError(D.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === r.name ? n(new FirestoreError(D.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + r)) : n(new __PRIVATE_IndexedDbTransactionError(e, r));
			}, r.onupgradeneeded = (e) => {
				__PRIVATE_logDebug("SimpleDb", "Database \"" + this.name + "\" requires upgrade from version:", e.oldVersion);
				const t = e.target.result;
				this.p.O(t, r.transaction, e.oldVersion, this.version).next((() => {
					__PRIVATE_logDebug("SimpleDb", "Database upgrade to version " + this.version + " complete");
				}));
			};
		}))), this.N && (this.db.onversionchange = (e) => this.N(e)), this.db;
	}
	L(e) {
		this.N = e, this.db && (this.db.onversionchange = (t) => e(t));
	}
	async runTransaction(e, t, n, r) {
		const i = "readonly" === t;
		let s = 0;
		for (;;) {
			++s;
			try {
				this.db = await this.M(e);
				const t = __PRIVATE_SimpleDbTransaction.open(this.db, e, i ? "readonly" : "readwrite", n), s = r(t).next(((e) => (t.g(), e))).catch(((e) => (t.abort(e), PersistencePromise.reject(e)))).toPromise();
				return s.catch((() => {})), await t.m, s;
			} catch (e) {
				const t = e, n = "FirebaseError" !== t.name && s < 3;
				if (__PRIVATE_logDebug("SimpleDb", "Transaction failed with error:", t.message, "Retrying:", n), this.close(), !n) return Promise.reject(t);
			}
		}
	}
	close() {
		this.db && this.db.close(), this.db = void 0;
	}
};
/** Parse User Agent to determine Android version. Returns -1 if not found. */ function __PRIVATE_getAndroidVersion(e) {
	const t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
	return Number(n);
}
/**
* A controller for iterating over a key range or index. It allows an iterate
* callback to delete the currently-referenced object, or jump to a new key
* within the key range or index.
*/ var __PRIVATE_IterationController = class {
	constructor(e) {
		this.B = e, this.k = !1, this.q = null;
	}
	get isDone() {
		return this.k;
	}
	get K() {
		return this.q;
	}
	set cursor(e) {
		this.B = e;
	}
	/**
	* This function can be called to stop iteration at any point.
	*/ done() {
		this.k = !0;
	}
	/**
	* This function can be called to skip to that next key, which could be
	* an index or a primary key.
	*/ $(e) {
		this.q = e;
	}
	/**
	* Delete the current cursor value from the object store.
	*
	* NOTE: You CANNOT do this with a keysOnly query.
	*/ delete() {
		return __PRIVATE_wrapRequest(this.B.delete());
	}
};
/** An error that wraps exceptions that thrown during IndexedDB execution. */ var __PRIVATE_IndexedDbTransactionError = class extends FirestoreError {
	constructor(e, t) {
		super(D.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`), this.name = "IndexedDbTransactionError";
	}
};
/** Verifies whether `e` is an IndexedDbTransactionError. */ function __PRIVATE_isIndexedDbTransactionError(e) {
	return "IndexedDbTransactionError" === e.name;
}
/**
* A wrapper around an IDBObjectStore providing an API that:
*
* 1) Has generic KeyType / ValueType parameters to provide strongly-typed
* methods for acting against the object store.
* 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
* method return a PersistencePromise instead.
* 3) Provides a higher-level API to avoid needing to do excessive wrapping of
* intermediate IndexedDB types (IDBCursorWithValue, etc.)
*/ var __PRIVATE_SimpleDbStore = class {
	constructor(e) {
		this.store = e;
	}
	put(e, t) {
		let n;
		return void 0 !== t ? (__PRIVATE_logDebug("SimpleDb", "PUT", this.store.name, e, t), n = this.store.put(t, e)) : (__PRIVATE_logDebug("SimpleDb", "PUT", this.store.name, "<auto-key>", e), n = this.store.put(e)), __PRIVATE_wrapRequest(n);
	}
	/**
	* Adds a new value into an Object Store and returns the new key. Similar to
	* IndexedDb's `add()`, this method will fail on primary key collisions.
	*
	* @param value - The object to write.
	* @returns The key of the value to add.
	*/ add(e) {
		__PRIVATE_logDebug("SimpleDb", "ADD", this.store.name, e, e);
		return __PRIVATE_wrapRequest(this.store.add(e));
	}
	/**
	* Gets the object with the specified key from the specified store, or null
	* if no object exists with the specified key.
	*
	* @key The key of the object to get.
	* @returns The object with the specified key or null if no object exists.
	*/ get(e) {
		return __PRIVATE_wrapRequest(this.store.get(e)).next(((t) => (void 0 === t && (t = null), __PRIVATE_logDebug("SimpleDb", "GET", this.store.name, e, t), t)));
	}
	delete(e) {
		__PRIVATE_logDebug("SimpleDb", "DELETE", this.store.name, e);
		return __PRIVATE_wrapRequest(this.store.delete(e));
	}
	/**
	* If we ever need more of the count variants, we can add overloads. For now,
	* all we need is to count everything in a store.
	*
	* Returns the number of rows in the store.
	*/ count() {
		__PRIVATE_logDebug("SimpleDb", "COUNT", this.store.name);
		return __PRIVATE_wrapRequest(this.store.count());
	}
	U(e, t) {
		const n = this.options(e, t), r = n.index ? this.store.index(n.index) : this.store;
		if ("function" == typeof r.getAll) {
			const e = r.getAll(n.range);
			return new PersistencePromise(((t, n) => {
				e.onerror = (e) => {
					n(e.target.error);
				}, e.onsuccess = (e) => {
					t(e.target.result);
				};
			}));
		}
		{
			const e = this.cursor(n), t = [];
			return this.W(e, ((e, n) => {
				t.push(n);
			})).next((() => t));
		}
	}
	/**
	* Loads the first `count` elements from the provided index range. Loads all
	* elements if no limit is provided.
	*/ G(e, t) {
		const n = this.store.getAll(e, null === t ? void 0 : t);
		return new PersistencePromise(((e, t) => {
			n.onerror = (e) => {
				t(e.target.error);
			}, n.onsuccess = (t) => {
				e(t.target.result);
			};
		}));
	}
	j(e, t) {
		__PRIVATE_logDebug("SimpleDb", "DELETE ALL", this.store.name);
		const n = this.options(e, t);
		n.H = !1;
		const r = this.cursor(n);
		return this.W(r, ((e, t, n) => n.delete()));
	}
	J(e, t) {
		let n;
		t ? n = e : (n = {}, t = e);
		const r = this.cursor(n);
		return this.W(r, t);
	}
	/**
	* Iterates over a store, but waits for the given callback to complete for
	* each entry before iterating the next entry. This allows the callback to do
	* asynchronous work to determine if this iteration should continue.
	*
	* The provided callback should return `true` to continue iteration, and
	* `false` otherwise.
	*/ Y(e) {
		const t = this.cursor({});
		return new PersistencePromise(((n, r) => {
			t.onerror = (e) => {
				r(__PRIVATE_checkForAndReportiOSError(e.target.error));
			}, t.onsuccess = (t) => {
				const r = t.target.result;
				r ? e(r.primaryKey, r.value).next(((e) => {
					e ? r.continue() : n();
				})) : n();
			};
		}));
	}
	W(e, t) {
		const n = [];
		return new PersistencePromise(((r, i) => {
			e.onerror = (e) => {
				i(e.target.error);
			}, e.onsuccess = (e) => {
				const i = e.target.result;
				if (!i) return void r();
				const s = new __PRIVATE_IterationController(i), o = t(i.primaryKey, i.value, s);
				if (o instanceof PersistencePromise) {
					const e = o.catch(((e) => (s.done(), PersistencePromise.reject(e))));
					n.push(e);
				}
				s.isDone ? r() : null === s.K ? i.continue() : i.continue(s.K);
			};
		})).next((() => PersistencePromise.waitFor(n)));
	}
	options(e, t) {
		let n;
		return void 0 !== e && ("string" == typeof e ? n = e : t = e), {
			index: n,
			range: t
		};
	}
	cursor(e) {
		let t = "next";
		if (e.reverse && (t = "prev"), e.index) {
			const n = this.store.index(e.index);
			return e.H ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t);
		}
		return this.store.openCursor(e.range, t);
	}
};
/**
* Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
* handlers to resolve / reject the PersistencePromise as appropriate.
*/ function __PRIVATE_wrapRequest(e) {
	return new PersistencePromise(((t, n) => {
		e.onsuccess = (e) => {
			const n = e.target.result;
			t(n);
		}, e.onerror = (e) => {
			n(__PRIVATE_checkForAndReportiOSError(e.target.error));
		};
	}));
}
var F = !1;
function __PRIVATE_checkForAndReportiOSError(e) {
	const t = __PRIVATE_SimpleDb.S(getUA());
	if (t >= 12.2 && t < 13) {
		const t = "An internal error was encountered in the Indexed Database server";
		if (e.message.indexOf(t) >= 0) {
			const e = new FirestoreError("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
			return F || (F = !0, setTimeout((() => {
				throw e;
			}), 0)), e;
		}
	}
	return e;
}
/** This class is responsible for the scheduling of Index Backfiller. */
var __PRIVATE_IndexBackfillerScheduler = class {
	constructor(e, t) {
		this.asyncQueue = e, this.Z = t, this.task = null;
	}
	start() {
		this.X(15e3);
	}
	stop() {
		this.task && (this.task.cancel(), this.task = null);
	}
	get started() {
		return null !== this.task;
	}
	X(e) {
		__PRIVATE_logDebug("IndexBackfiller", `Scheduled in ${e}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", e, (async () => {
			this.task = null;
			try {
				__PRIVATE_logDebug("IndexBackfiller", `Documents written: ${await this.Z.ee()}`);
			} catch (e) {
				__PRIVATE_isIndexedDbTransactionError(e) ? __PRIVATE_logDebug("IndexBackfiller", "Ignoring IndexedDB error during index backfill: ", e) : await __PRIVATE_ignoreIfPrimaryLeaseLoss(e);
			}
			await this.X(6e4);
		}));
	}
};
/** Implements the steps for backfilling indexes. */ var __PRIVATE_IndexBackfiller = class {
	constructor(e, t) {
		this.localStore = e, this.persistence = t;
	}
	async ee(e = 50) {
		return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", ((t) => this.te(t, e)));
	}
	/** Writes index entries until the cap is reached. Returns the number of documents processed. */ te(e, t) {
		const n = /* @__PURE__ */ new Set();
		let r = t, i = !0;
		return PersistencePromise.doWhile((() => !0 === i && r > 0), (() => this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(((t) => {
			if (null !== t && !n.has(t)) return __PRIVATE_logDebug("IndexBackfiller", `Processing collection: ${t}`), this.ne(e, t, r).next(((e) => {
				r -= e, n.add(t);
			}));
			i = !1;
		})))).next((() => t - r));
	}
	/**
	* Writes entries for the provided collection group. Returns the number of documents processed.
	*/ ne(e, t, n) {
		return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e, t).next(((r) => this.localStore.localDocuments.getNextDocuments(e, t, r, n).next(((n) => {
			const i = n.changes;
			return this.localStore.indexManager.updateIndexEntries(e, i).next((() => this.re(r, n))).next(((n) => (__PRIVATE_logDebug("IndexBackfiller", `Updating offset: ${n}`), this.localStore.indexManager.updateCollectionGroup(e, t, n)))).next((() => i.size));
		}))));
	}
	/** Returns the next offset based on the provided documents. */ re(e, t) {
		let n = e;
		return t.changes.forEach(((e, t) => {
			const r = __PRIVATE_newIndexOffsetFromDocument(t);
			__PRIVATE_indexOffsetComparator(r, n) > 0 && (n = r);
		})), new IndexOffset(n.readTime, n.documentKey, Math.max(t.batchId, e.largestBatchId));
	}
};
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
* exceed. All subsequent calls to next will return increasing values. If provided with a
* `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
* well as write out sequence numbers that it produces via `next()`.
*/ var __PRIVATE_ListenSequence = class {
	constructor(e, t) {
		this.previousValue = e, t && (t.sequenceNumberHandler = (e) => this.ie(e), this.se = (e) => t.writeSequenceNumber(e));
	}
	ie(e) {
		return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
	}
	next() {
		const e = ++this.previousValue;
		return this.se && this.se(e), e;
	}
};
__PRIVATE_ListenSequence.oe = -1;
/**
* Returns whether a variable is either undefined or null.
*/
function __PRIVATE_isNullOrUndefined(e) {
	return null == e;
}
/** Returns whether the value represents -0. */ function __PRIVATE_isNegativeZero(e) {
	return 0 === e && 1 / e == -Infinity;
}
/**
* Returns whether a value is an integer and in the safe integer range
* @param value - The value to test for being an integer and in the safe range
*/ function isSafeInteger(e) {
	return "number" == typeof e && Number.isInteger(e) && !__PRIVATE_isNegativeZero(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Encodes a resource path into a IndexedDb-compatible string form.
*/
function __PRIVATE_encodeResourcePath(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t.length > 0 && (t = __PRIVATE_encodeSeparator(t)), t = __PRIVATE_encodeSegment(e.get(n), t);
	return __PRIVATE_encodeSeparator(t);
}
/** Encodes a single segment of a resource path into the given result */ function __PRIVATE_encodeSegment(e, t) {
	let n = t;
	const r = e.length;
	for (let t = 0; t < r; t++) {
		const r = e.charAt(t);
		switch (r) {
			case "\0":
				n += "";
				break;
			case "":
				n += "";
				break;
			default: n += r;
		}
	}
	return n;
}
/** Encodes a path separator into the given result */ function __PRIVATE_encodeSeparator(e) {
	return e + "";
}
/**
* Decodes the given IndexedDb-compatible string form of a resource path into
* a ResourcePath instance. Note that this method is not suitable for use with
* decoding resource names from the server; those are One Platform format
* strings.
*/ function __PRIVATE_decodeResourcePath(e) {
	const t = e.length;
	if (__PRIVATE_hardAssert(t >= 2), 2 === t) return __PRIVATE_hardAssert("" === e.charAt(0) && "" === e.charAt(1)), ResourcePath.emptyPath();
	const __PRIVATE_lastReasonableEscapeIndex = t - 2, n = [];
	let r = "";
	for (let i = 0; i < t;) {
		const t = e.indexOf("", i);
		(t < 0 || t > __PRIVATE_lastReasonableEscapeIndex) && fail();
		switch (e.charAt(t + 1)) {
			case "":
				const s = e.substring(i, t);
				let o;
				0 === r.length ? o = s : (r += s, o = r, r = ""), n.push(o);
				break;
			case "":
				r += e.substring(i, t), r += "\0";
				break;
			case "":
				r += e.substring(i, t + 1);
				break;
			default: fail();
		}
		i = t + 2;
	}
	return new ResourcePath(n);
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var M = ["userId", "batchId"];
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Name of the IndexedDb object store.
*
* Note that the name 'owner' is chosen to ensure backwards compatibility with
* older clients that only supported single locked access to the persistence
* layer.
*/
/**
* Creates a [userId, encodedPath] key for use in the DbDocumentMutations
* index to iterate over all at document mutations for a given path or lower.
*/
function __PRIVATE_newDbDocumentMutationPrefixForPath(e, t) {
	return [e, __PRIVATE_encodeResourcePath(t)];
}
/**
* Creates a full index key of [userId, encodedPath, batchId] for inserting
* and deleting into the DbDocumentMutations index.
*/ function __PRIVATE_newDbDocumentMutationKey(e, t, n) {
	return [
		e,
		__PRIVATE_encodeResourcePath(t),
		n
	];
}
/**
* Because we store all the useful information for this store in the key,
* there is no useful information to store as the value. The raw (unencoded)
* path cannot be stored because IndexedDb doesn't store prototype
* information.
*/ var x = {}, O = [
	"prefixPath",
	"collectionGroup",
	"readTime",
	"documentId"
], N = [
	"prefixPath",
	"collectionGroup",
	"documentId"
], L = [
	"collectionGroup",
	"readTime",
	"prefixPath",
	"documentId"
], B = ["canonicalId", "targetId"], k = ["targetId", "path"], q = ["path", "targetId"], Q = ["collectionId", "parent"], K = ["indexId", "uid"], $ = ["uid", "sequenceNumber"], U = [
	"indexId",
	"uid",
	"arrayValue",
	"directionalValue",
	"orderedDocumentKey",
	"documentKey"
], W = [
	"indexId",
	"uid",
	"orderedDocumentKey"
], G = [
	"userId",
	"collectionPath",
	"documentId"
], z = [
	"userId",
	"collectionPath",
	"largestBatchId"
], j = [
	"userId",
	"collectionGroup",
	"largestBatchId"
], H = [
	...[...[...[...[
		"mutationQueues",
		"mutations",
		"documentMutations",
		"remoteDocuments",
		"targets",
		"owner",
		"targetGlobal",
		"targetDocuments"
	], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"],
	"bundles",
	"namedQueries"
], J = [...H, "documentOverlays"], Y = [
	"mutationQueues",
	"mutations",
	"documentMutations",
	"remoteDocumentsV14",
	"targets",
	"owner",
	"targetGlobal",
	"targetDocuments",
	"clientMetadata",
	"remoteDocumentGlobal",
	"collectionParents",
	"bundles",
	"namedQueries",
	"documentOverlays"
], Z = Y, X = [
	...Z,
	"indexConfiguration",
	"indexState",
	"indexEntries"
], ee = X, te = [...X, "globals"];
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var __PRIVATE_IndexedDbTransaction = class extends PersistenceTransaction {
	constructor(e, t) {
		super(), this._e = e, this.currentSequenceNumber = t;
	}
};
function __PRIVATE_getStore(e, t) {
	const n = __PRIVATE_debugCast(e);
	return __PRIVATE_SimpleDb.F(n._e, t);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function __PRIVATE_objectSize(e) {
	let t = 0;
	for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
	return t;
}
function forEach(e, t) {
	for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function __PRIVATE_mapToArray(e, t) {
	const n = [];
	for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && n.push(t(e[r], r, e));
	return n;
}
function isEmpty(e) {
	for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SortedMap = class SortedMap {
	constructor(e, t) {
		this.comparator = e, this.root = t || LLRBNode.EMPTY;
	}
	insert(e, t) {
		return new SortedMap(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
	}
	remove(e) {
		return new SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
	}
	get(e) {
		let t = this.root;
		for (; !t.isEmpty();) {
			const n = this.comparator(e, t.key);
			if (0 === n) return t.value;
			n < 0 ? t = t.left : n > 0 && (t = t.right);
		}
		return null;
	}
	indexOf(e) {
		let t = 0, n = this.root;
		for (; !n.isEmpty();) {
			const r = this.comparator(e, n.key);
			if (0 === r) return t + n.left.size;
			r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right);
		}
		return -1;
	}
	isEmpty() {
		return this.root.isEmpty();
	}
	get size() {
		return this.root.size;
	}
	minKey() {
		return this.root.minKey();
	}
	maxKey() {
		return this.root.maxKey();
	}
	inorderTraversal(e) {
		return this.root.inorderTraversal(e);
	}
	forEach(e) {
		this.inorderTraversal(((t, n) => (e(t, n), !1)));
	}
	toString() {
		const e = [];
		return this.inorderTraversal(((t, n) => (e.push(`${t}:${n}`), !1))), `{${e.join(", ")}}`;
	}
	reverseTraversal(e) {
		return this.root.reverseTraversal(e);
	}
	getIterator() {
		return new SortedMapIterator(this.root, null, this.comparator, !1);
	}
	getIteratorFrom(e) {
		return new SortedMapIterator(this.root, e, this.comparator, !1);
	}
	getReverseIterator() {
		return new SortedMapIterator(this.root, null, this.comparator, !0);
	}
	getReverseIteratorFrom(e) {
		return new SortedMapIterator(this.root, e, this.comparator, !0);
	}
};
var SortedMapIterator = class {
	constructor(e, t, n, r) {
		this.isReverse = r, this.nodeStack = [];
		let i = 1;
		for (; !e.isEmpty();) if (i = t ? n(e.key, t) : 1, t && r && (i *= -1), i < 0) e = this.isReverse ? e.left : e.right;
		else {
			if (0 === i) {
				this.nodeStack.push(e);
				break;
			}
			this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
		}
	}
	getNext() {
		let e = this.nodeStack.pop();
		const t = {
			key: e.key,
			value: e.value
		};
		if (this.isReverse) for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
		else for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
		return t;
	}
	hasNext() {
		return this.nodeStack.length > 0;
	}
	peek() {
		if (0 === this.nodeStack.length) return null;
		const e = this.nodeStack[this.nodeStack.length - 1];
		return {
			key: e.key,
			value: e.value
		};
	}
};
var LLRBNode = class LLRBNode {
	constructor(e, t, n, r, i) {
		this.key = e, this.value = t, this.color = null != n ? n : LLRBNode.RED, this.left = null != r ? r : LLRBNode.EMPTY, this.right = null != i ? i : LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
	}
	copy(e, t, n, r, i) {
		return new LLRBNode(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right);
	}
	isEmpty() {
		return !1;
	}
	inorderTraversal(e) {
		return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
	}
	reverseTraversal(e) {
		return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
	}
	min() {
		return this.left.isEmpty() ? this : this.left.min();
	}
	minKey() {
		return this.min().key;
	}
	maxKey() {
		return this.right.isEmpty() ? this.key : this.right.maxKey();
	}
	insert(e, t, n) {
		let r = this;
		const i = n(e, r.key);
		return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp();
	}
	removeMin() {
		if (this.left.isEmpty()) return LLRBNode.EMPTY;
		let e = this;
		return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
	}
	remove(e, t) {
		let n, r = this;
		if (t(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
		else {
			if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
				if (r.right.isEmpty()) return LLRBNode.EMPTY;
				n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin());
			}
			r = r.copy(null, null, null, null, r.right.remove(e, t));
		}
		return r.fixUp();
	}
	isRed() {
		return this.color;
	}
	fixUp() {
		let e = this;
		return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
	}
	moveRedLeft() {
		let e = this.colorFlip();
		return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
	}
	moveRedRight() {
		let e = this.colorFlip();
		return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
	}
	rotateLeft() {
		const e = this.copy(null, null, LLRBNode.RED, null, this.right.left);
		return this.right.copy(null, null, this.color, e, null);
	}
	rotateRight() {
		const e = this.copy(null, null, LLRBNode.RED, this.left.right, null);
		return this.left.copy(null, null, this.color, null, e);
	}
	colorFlip() {
		const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
		return this.copy(null, null, !this.color, e, t);
	}
	checkMaxDepth() {
		const e = this.check();
		return Math.pow(2, e) <= this.size + 1;
	}
	check() {
		if (this.isRed() && this.left.isRed()) throw fail();
		if (this.right.isRed()) throw fail();
		const e = this.left.check();
		if (e !== this.right.check()) throw fail();
		return e + (this.isRed() ? 0 : 1);
	}
};
LLRBNode.EMPTY = null, LLRBNode.RED = !0, LLRBNode.BLACK = !1;
LLRBNode.EMPTY = new class LLRBEmptyNode {
	constructor() {
		this.size = 0;
	}
	get key() {
		throw fail();
	}
	get value() {
		throw fail();
	}
	get color() {
		throw fail();
	}
	get left() {
		throw fail();
	}
	get right() {
		throw fail();
	}
	copy(e, t, n, r, i) {
		return this;
	}
	insert(e, t, n) {
		return new LLRBNode(e, t);
	}
	remove(e, t) {
		return this;
	}
	isEmpty() {
		return !0;
	}
	inorderTraversal(e) {
		return !1;
	}
	reverseTraversal(e) {
		return !1;
	}
	minKey() {
		return null;
	}
	maxKey() {
		return null;
	}
	isRed() {
		return !1;
	}
	checkMaxDepth() {
		return !0;
	}
	check() {
		return 0;
	}
}();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* SortedSet is an immutable (copy-on-write) collection that holds elements
* in order specified by the provided comparator.
*
* NOTE: if provided comparator returns 0 for two elements, we consider them to
* be equal!
*/
var SortedSet = class SortedSet {
	constructor(e) {
		this.comparator = e, this.data = new SortedMap(this.comparator);
	}
	has(e) {
		return null !== this.data.get(e);
	}
	first() {
		return this.data.minKey();
	}
	last() {
		return this.data.maxKey();
	}
	get size() {
		return this.data.size;
	}
	indexOf(e) {
		return this.data.indexOf(e);
	}
	/** Iterates elements in order defined by "comparator" */ forEach(e) {
		this.data.inorderTraversal(((t, n) => (e(t), !1)));
	}
	/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ forEachInRange(e, t) {
		const n = this.data.getIteratorFrom(e[0]);
		for (; n.hasNext();) {
			const r = n.getNext();
			if (this.comparator(r.key, e[1]) >= 0) return;
			t(r.key);
		}
	}
	/**
	* Iterates over `elem`s such that: start &lt;= elem until false is returned.
	*/ forEachWhile(e, t) {
		let n;
		for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();) if (!e(n.getNext().key)) return;
	}
	/** Finds the least element greater than or equal to `elem`. */ firstAfterOrEqual(e) {
		const t = this.data.getIteratorFrom(e);
		return t.hasNext() ? t.getNext().key : null;
	}
	getIterator() {
		return new SortedSetIterator(this.data.getIterator());
	}
	getIteratorFrom(e) {
		return new SortedSetIterator(this.data.getIteratorFrom(e));
	}
	/** Inserts or updates an element */ add(e) {
		return this.copy(this.data.remove(e).insert(e, !0));
	}
	/** Deletes an element */ delete(e) {
		return this.has(e) ? this.copy(this.data.remove(e)) : this;
	}
	isEmpty() {
		return this.data.isEmpty();
	}
	unionWith(e) {
		let t = this;
		return t.size < e.size && (t = e, e = this), e.forEach(((e) => {
			t = t.add(e);
		})), t;
	}
	isEqual(e) {
		if (!(e instanceof SortedSet)) return !1;
		if (this.size !== e.size) return !1;
		const t = this.data.getIterator(), n = e.data.getIterator();
		for (; t.hasNext();) {
			const e = t.getNext().key, r = n.getNext().key;
			if (0 !== this.comparator(e, r)) return !1;
		}
		return !0;
	}
	toArray() {
		const e = [];
		return this.forEach(((t) => {
			e.push(t);
		})), e;
	}
	toString() {
		const e = [];
		return this.forEach(((t) => e.push(t))), "SortedSet(" + e.toString() + ")";
	}
	copy(e) {
		const t = new SortedSet(this.comparator);
		return t.data = e, t;
	}
};
var SortedSetIterator = class {
	constructor(e) {
		this.iter = e;
	}
	getNext() {
		return this.iter.getNext().key;
	}
	hasNext() {
		return this.iter.hasNext();
	}
};
/**
* Compares two sorted sets for equality using their natural ordering. The
* method computes the intersection and invokes `onAdd` for every element that
* is in `after` but not `before`. `onRemove` is invoked for every element in
* `before` but missing from `after`.
*
* The method creates a copy of both `before` and `after` and runs in O(n log
* n), where n is the size of the two lists.
*
* @param before - The elements that exist in the original set.
* @param after - The elements to diff against the original set.
* @param comparator - The comparator for the elements in before and after.
* @param onAdd - A function to invoke for every element that is part of `
* after` but not `before`.
* @param onRemove - A function to invoke for every element that is part of
* `before` but not `after`.
*/
/**
* Returns the next element from the iterator or `undefined` if none available.
*/
function __PRIVATE_advanceIterator(e) {
	return e.hasNext() ? e.getNext() : void 0;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provides a set of fields that can be used to partially patch a document.
* FieldMask is used in conjunction with ObjectValue.
* Examples:
*   foo - Overwrites foo entirely with the provided value. If foo is not
*         present in the companion ObjectValue, the field is deleted.
*   foo.bar - Overwrites only the field bar of the object foo.
*             If foo is not an object, foo is replaced with an object
*             containing foo
*/ var FieldMask = class FieldMask {
	constructor(e) {
		this.fields = e, e.sort(FieldPath$1.comparator);
	}
	static empty() {
		return new FieldMask([]);
	}
	/**
	* Returns a new FieldMask object that is the result of adding all the given
	* fields paths to this field mask.
	*/ unionWith(e) {
		let t = new SortedSet(FieldPath$1.comparator);
		for (const e of this.fields) t = t.add(e);
		for (const n of e) t = t.add(n);
		return new FieldMask(t.toArray());
	}
	/**
	* Verifies that `fieldPath` is included by at least one field in this field
	* mask.
	*
	* This is an O(n) operation, where `n` is the size of the field mask.
	*/ covers(e) {
		for (const t of this.fields) if (t.isPrefixOf(e)) return !0;
		return !1;
	}
	isEqual(e) {
		return __PRIVATE_arrayEquals(this.fields, e.fields, ((e, t) => e.isEqual(t)));
	}
};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An error encountered while decoding base64 string.
*/ var __PRIVATE_Base64DecodeError = class extends Error {
	constructor() {
		super(...arguments), this.name = "Base64DecodeError";
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Converts a Base64 encoded string to a binary string. */
/** True if and only if the Base64 conversion functions are available. */
function __PRIVATE_isBase64Available() {
	return "undefined" != typeof atob;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Immutable class that represents a "proto" byte string.
*
* Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
* sent on the wire. This class abstracts away this differentiation by holding
* the proto byte string in a common class that must be converted into a string
* before being sent as a proto.
* @internal
*/ var ByteString = class ByteString {
	constructor(e) {
		this.binaryString = e;
	}
	static fromBase64String(e) {
		return new ByteString(function __PRIVATE_decodeBase64(e) {
			try {
				return atob(e);
			} catch (e) {
				throw "undefined" != typeof DOMException && e instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e) : e;
			}
		}(e));
	}
	static fromUint8Array(e) {
		return new ByteString(
			/**
			* Helper function to convert an Uint8array to a binary string.
			*/
			function __PRIVATE_binaryStringFromUint8Array(e) {
				let t = "";
				for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
				return t;
			}(e)
		);
	}
	[Symbol.iterator]() {
		let e = 0;
		return { next: () => e < this.binaryString.length ? {
			value: this.binaryString.charCodeAt(e++),
			done: !1
		} : {
			value: void 0,
			done: !0
		} };
	}
	toBase64() {
		return function __PRIVATE_encodeBase64(e) {
			return btoa(e);
		}(this.binaryString);
	}
	toUint8Array() {
		return function __PRIVATE_uint8ArrayFromBinaryString(e) {
			const t = new Uint8Array(e.length);
			for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
			return t;
		}(this.binaryString);
	}
	approximateByteSize() {
		return 2 * this.binaryString.length;
	}
	compareTo(e) {
		return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
	}
	isEqual(e) {
		return this.binaryString === e.binaryString;
	}
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var ne = /* @__PURE__ */ new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
* Converts the possible Proto values for a timestamp value into a "seconds and
* nanos" representation.
*/ function __PRIVATE_normalizeTimestamp(e) {
	if (__PRIVATE_hardAssert(!!e), "string" == typeof e) {
		let t = 0;
		const n = ne.exec(e);
		if (__PRIVATE_hardAssert(!!n), n[1]) {
			let e = n[1];
			e = (e + "000000000").substr(0, 9), t = Number(e);
		}
		const r = new Date(e);
		return {
			seconds: Math.floor(r.getTime() / 1e3),
			nanos: t
		};
	}
	return {
		seconds: __PRIVATE_normalizeNumber(e.seconds),
		nanos: __PRIVATE_normalizeNumber(e.nanos)
	};
}
/**
* Converts the possible Proto types for numbers into a JavaScript number.
* Returns 0 if the value is not numeric.
*/ function __PRIVATE_normalizeNumber(e) {
	return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
}
/** Converts the possible Proto types for Blobs into a ByteString. */ function __PRIVATE_normalizeByteString(e) {
	return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a locally-applied ServerTimestamp.
*
* Server Timestamps are backed by MapValues that contain an internal field
* `__type__` with a value of `server_timestamp`. The previous value and local
* write time are stored in its `__previous_value__` and `__local_write_time__`
* fields respectively.
*
* Notes:
* - ServerTimestampValue instances are created as the result of applying a
*   transform. They can only exist in the local view of a document. Therefore
*   they do not need to be parsed or serialized.
* - When evaluated locally (e.g. for snapshot.data()), they by default
*   evaluate to `null`. This behavior can be configured by passing custom
*   FieldValueOptions to value().
* - With respect to other ServerTimestampValues, they sort by their
*   localWriteTime.
*/ function __PRIVATE_isServerTimestamp(e) {
	var t, n;
	return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
/**
* Creates a new ServerTimestamp proto value (using the internal format).
*/
/**
* Returns the value of the field before this ServerTimestamp was set.
*
* Preserving the previous values allows the user to display the last resoled
* value until the backend responds with the timestamp.
*/
function __PRIVATE_getPreviousValue(e) {
	const t = e.mapValue.fields.__previous_value__;
	return __PRIVATE_isServerTimestamp(t) ? __PRIVATE_getPreviousValue(t) : t;
}
/**
* Returns the local time at which this timestamp was first set.
*/ function __PRIVATE_getLocalWriteTime(e) {
	const t = __PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);
	return new Timestamp(t.seconds, t.nanos);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var DatabaseInfo = class {
	/**
	* Constructs a DatabaseInfo using the provided host, databaseId and
	* persistenceKey.
	*
	* @param databaseId - The database to use.
	* @param appId - The Firebase App Id.
	* @param persistenceKey - A unique identifier for this Firestore's local
	* storage (used in conjunction with the databaseId).
	* @param host - The Firestore backend host to connect to.
	* @param ssl - Whether to use SSL when connecting.
	* @param forceLongPolling - Whether to use the forceLongPolling option
	* when using WebChannel as the network transport.
	* @param autoDetectLongPolling - Whether to use the detectBufferingProxy
	* option when using WebChannel as the network transport.
	* @param longPollingOptions Options that configure long-polling.
	* @param useFetchStreams Whether to use the Fetch API instead of
	* XMLHTTPRequest
	*/
	constructor(e, t, n, r, i, s, o, _, a) {
		this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = s, this.autoDetectLongPolling = o, this.longPollingOptions = _, this.useFetchStreams = a;
	}
};
/** The default database name for a project. */
/**
* Represents the database ID a Firestore client is associated with.
* @internal
*/
var DatabaseId = class DatabaseId {
	constructor(e, t) {
		this.projectId = e, this.database = t || "(default)";
	}
	static empty() {
		return new DatabaseId("", "");
	}
	get isDefaultDatabase() {
		return "(default)" === this.database;
	}
	isEqual(e) {
		return e instanceof DatabaseId && e.projectId === this.projectId && e.database === this.database;
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var re = { mapValue: { fields: { __type__: { stringValue: "__max__" } } } }, ie = { nullValue: "NULL_VALUE" };
/** Extracts the backend's type order for the provided value. */
function __PRIVATE_typeOrder(e) {
	return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : __PRIVATE_isMaxValue(e) ? 9007199254740991 : __PRIVATE_isVectorValue(e) ? 10 : 11 : fail();
}
/** Tests `left` and `right` for equality based on the backend semantics. */ function __PRIVATE_valueEquals(e, t) {
	if (e === t) return !0;
	const n = __PRIVATE_typeOrder(e);
	if (n !== __PRIVATE_typeOrder(t)) return !1;
	switch (n) {
		case 0:
		case 9007199254740991: return !0;
		case 1: return e.booleanValue === t.booleanValue;
		case 4: return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));
		case 3: return function __PRIVATE_timestampEquals(e, t) {
			if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length) return e.timestampValue === t.timestampValue;
			const n = __PRIVATE_normalizeTimestamp(e.timestampValue), r = __PRIVATE_normalizeTimestamp(t.timestampValue);
			return n.seconds === r.seconds && n.nanos === r.nanos;
		}(e, t);
		case 5: return e.stringValue === t.stringValue;
		case 6: return function __PRIVATE_blobEquals(e, t) {
			return __PRIVATE_normalizeByteString(e.bytesValue).isEqual(__PRIVATE_normalizeByteString(t.bytesValue));
		}(e, t);
		case 7: return e.referenceValue === t.referenceValue;
		case 8: return function __PRIVATE_geoPointEquals(e, t) {
			return __PRIVATE_normalizeNumber(e.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t.geoPointValue.longitude);
		}(e, t);
		case 2: return function __PRIVATE_numberEquals(e, t) {
			if ("integerValue" in e && "integerValue" in t) return __PRIVATE_normalizeNumber(e.integerValue) === __PRIVATE_normalizeNumber(t.integerValue);
			if ("doubleValue" in e && "doubleValue" in t) {
				const n = __PRIVATE_normalizeNumber(e.doubleValue), r = __PRIVATE_normalizeNumber(t.doubleValue);
				return n === r ? __PRIVATE_isNegativeZero(n) === __PRIVATE_isNegativeZero(r) : isNaN(n) && isNaN(r);
			}
			return !1;
		}(e, t);
		case 9: return __PRIVATE_arrayEquals(e.arrayValue.values || [], t.arrayValue.values || [], __PRIVATE_valueEquals);
		case 10:
		case 11: return function __PRIVATE_objectEquals(e, t) {
			const n = e.mapValue.fields || {}, r = t.mapValue.fields || {};
			if (__PRIVATE_objectSize(n) !== __PRIVATE_objectSize(r)) return !1;
			for (const e in n) if (n.hasOwnProperty(e) && (void 0 === r[e] || !__PRIVATE_valueEquals(n[e], r[e]))) return !1;
			return !0;
		}(e, t);
		default: return fail();
	}
}
function __PRIVATE_arrayValueContains(e, t) {
	return void 0 !== (e.values || []).find(((e) => __PRIVATE_valueEquals(e, t)));
}
function __PRIVATE_valueCompare(e, t) {
	if (e === t) return 0;
	const n = __PRIVATE_typeOrder(e), r = __PRIVATE_typeOrder(t);
	if (n !== r) return __PRIVATE_primitiveComparator(n, r);
	switch (n) {
		case 0:
		case 9007199254740991: return 0;
		case 1: return __PRIVATE_primitiveComparator(e.booleanValue, t.booleanValue);
		case 2: return function __PRIVATE_compareNumbers(e, t) {
			const n = __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue), r = __PRIVATE_normalizeNumber(t.integerValue || t.doubleValue);
			return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
		}(e, t);
		case 3: return __PRIVATE_compareTimestamps(e.timestampValue, t.timestampValue);
		case 4: return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t));
		case 5: return __PRIVATE_primitiveComparator(e.stringValue, t.stringValue);
		case 6: return function __PRIVATE_compareBlobs(e, t) {
			const n = __PRIVATE_normalizeByteString(e), r = __PRIVATE_normalizeByteString(t);
			return n.compareTo(r);
		}(e.bytesValue, t.bytesValue);
		case 7: return function __PRIVATE_compareReferences(e, t) {
			const n = e.split("/"), r = t.split("/");
			for (let e = 0; e < n.length && e < r.length; e++) {
				const t = __PRIVATE_primitiveComparator(n[e], r[e]);
				if (0 !== t) return t;
			}
			return __PRIVATE_primitiveComparator(n.length, r.length);
		}(e.referenceValue, t.referenceValue);
		case 8: return function __PRIVATE_compareGeoPoints(e, t) {
			const n = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.latitude), __PRIVATE_normalizeNumber(t.latitude));
			if (0 !== n) return n;
			return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.longitude), __PRIVATE_normalizeNumber(t.longitude));
		}(e.geoPointValue, t.geoPointValue);
		case 9: return __PRIVATE_compareArrays(e.arrayValue, t.arrayValue);
		case 10: return function __PRIVATE_compareVectors(e, t) {
			var n, r, i, s;
			const o = e.fields || {}, _ = t.fields || {}, a = null === (n = o.value) || void 0 === n ? void 0 : n.arrayValue, u = null === (r = _.value) || void 0 === r ? void 0 : r.arrayValue, c = __PRIVATE_primitiveComparator((null === (i = null == a ? void 0 : a.values) || void 0 === i ? void 0 : i.length) || 0, (null === (s = null == u ? void 0 : u.values) || void 0 === s ? void 0 : s.length) || 0);
			if (0 !== c) return c;
			return __PRIVATE_compareArrays(a, u);
		}(e.mapValue, t.mapValue);
		case 11: return function __PRIVATE_compareMaps(e, t) {
			if (e === re.mapValue && t === re.mapValue) return 0;
			if (e === re.mapValue) return 1;
			if (t === re.mapValue) return -1;
			const n = e.fields || {}, r = Object.keys(n), i = t.fields || {}, s = Object.keys(i);
			r.sort(), s.sort();
			for (let e = 0; e < r.length && e < s.length; ++e) {
				const t = __PRIVATE_primitiveComparator(r[e], s[e]);
				if (0 !== t) return t;
				const o = __PRIVATE_valueCompare(n[r[e]], i[s[e]]);
				if (0 !== o) return o;
			}
			return __PRIVATE_primitiveComparator(r.length, s.length);
		}(e.mapValue, t.mapValue);
		default: throw fail();
	}
}
function __PRIVATE_compareTimestamps(e, t) {
	if ("string" == typeof e && "string" == typeof t && e.length === t.length) return __PRIVATE_primitiveComparator(e, t);
	const n = __PRIVATE_normalizeTimestamp(e), r = __PRIVATE_normalizeTimestamp(t), i = __PRIVATE_primitiveComparator(n.seconds, r.seconds);
	return 0 !== i ? i : __PRIVATE_primitiveComparator(n.nanos, r.nanos);
}
function __PRIVATE_compareArrays(e, t) {
	const n = e.values || [], r = t.values || [];
	for (let e = 0; e < n.length && e < r.length; ++e) {
		const t = __PRIVATE_valueCompare(n[e], r[e]);
		if (t) return t;
	}
	return __PRIVATE_primitiveComparator(n.length, r.length);
}
function canonicalId(e) {
	return __PRIVATE_canonifyValue(e);
}
function __PRIVATE_canonifyValue(e) {
	return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function __PRIVATE_canonifyTimestamp(e) {
		const t = __PRIVATE_normalizeTimestamp(e);
		return `time(${t.seconds},${t.nanos})`;
	}(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function __PRIVATE_canonifyByteString(e) {
		return __PRIVATE_normalizeByteString(e).toBase64();
	}(e.bytesValue) : "referenceValue" in e ? function __PRIVATE_canonifyReference(e) {
		return DocumentKey.fromName(e).toString();
	}(e.referenceValue) : "geoPointValue" in e ? function __PRIVATE_canonifyGeoPoint(e) {
		return `geo(${e.latitude},${e.longitude})`;
	}(e.geoPointValue) : "arrayValue" in e ? function __PRIVATE_canonifyArray(e) {
		let t = "[", n = !0;
		for (const r of e.values || []) n ? n = !1 : t += ",", t += __PRIVATE_canonifyValue(r);
		return t + "]";
	}(e.arrayValue) : "mapValue" in e ? function __PRIVATE_canonifyMap(e) {
		const t = Object.keys(e.fields || {}).sort();
		let n = "{", r = !0;
		for (const i of t) r ? r = !1 : n += ",", n += `${i}:${__PRIVATE_canonifyValue(e.fields[i])}`;
		return n + "}";
	}(e.mapValue) : fail();
}
function __PRIVATE_estimateByteSize(e) {
	switch (__PRIVATE_typeOrder(e)) {
		case 0:
		case 1: return 4;
		case 2: return 8;
		case 3:
		case 8: return 16;
		case 4:
			const t = __PRIVATE_getPreviousValue(e);
			return t ? 16 + __PRIVATE_estimateByteSize(t) : 16;
		case 5: return 2 * e.stringValue.length;
		case 6: return __PRIVATE_normalizeByteString(e.bytesValue).approximateByteSize();
		case 7: return e.referenceValue.length;
		case 9: return function __PRIVATE_estimateArrayByteSize(e) {
			return (e.values || []).reduce(((e, t) => e + __PRIVATE_estimateByteSize(t)), 0);
		}(e.arrayValue);
		case 10:
		case 11: return function __PRIVATE_estimateMapByteSize(e) {
			let t = 0;
			return forEach(e.fields, ((e, n) => {
				t += e.length + __PRIVATE_estimateByteSize(n);
			})), t;
		}(e.mapValue);
		default: throw fail();
	}
}
function __PRIVATE_refValue(e, t) {
	return { referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}` };
}
/** Returns true if `value` is an IntegerValue . */ function isInteger(e) {
	return !!e && "integerValue" in e;
}
/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */
function isArray(e) {
	return !!e && "arrayValue" in e;
}
/** Returns true if `value` is a NullValue. */ function __PRIVATE_isNullValue(e) {
	return !!e && "nullValue" in e;
}
/** Returns true if `value` is NaN. */ function __PRIVATE_isNanValue(e) {
	return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
/** Returns true if `value` is a MapValue. */ function __PRIVATE_isMapValue(e) {
	return !!e && "mapValue" in e;
}
/** Returns true if `value` is a VetorValue. */ function __PRIVATE_isVectorValue(e) {
	var t, n;
	return "__vector__" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
/** Creates a deep copy of `source`. */ function __PRIVATE_deepClone(e) {
	if (e.geoPointValue) return { geoPointValue: Object.assign({}, e.geoPointValue) };
	if (e.timestampValue && "object" == typeof e.timestampValue) return { timestampValue: Object.assign({}, e.timestampValue) };
	if (e.mapValue) {
		const t = { mapValue: { fields: {} } };
		return forEach(e.mapValue.fields, ((e, n) => t.mapValue.fields[e] = __PRIVATE_deepClone(n))), t;
	}
	if (e.arrayValue) {
		const t = { arrayValue: { values: [] } };
		for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = __PRIVATE_deepClone(e.arrayValue.values[n]);
		return t;
	}
	return Object.assign({}, e);
}
/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */ function __PRIVATE_isMaxValue(e) {
	return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
var se = { mapValue: { fields: {
	__type__: { stringValue: "__vector__" },
	value: { arrayValue: {} }
} } };
/** Returns the lowest value for the given value type (inclusive). */ function __PRIVATE_valuesGetLowerBound(e) {
	return "nullValue" in e ? ie : "booleanValue" in e ? { booleanValue: !1 } : "integerValue" in e || "doubleValue" in e ? { doubleValue: NaN } : "timestampValue" in e ? { timestampValue: { seconds: Number.MIN_SAFE_INTEGER } } : "stringValue" in e ? { stringValue: "" } : "bytesValue" in e ? { bytesValue: "" } : "referenceValue" in e ? __PRIVATE_refValue(DatabaseId.empty(), DocumentKey.empty()) : "geoPointValue" in e ? { geoPointValue: {
		latitude: -90,
		longitude: -180
	} } : "arrayValue" in e ? { arrayValue: {} } : "mapValue" in e ? __PRIVATE_isVectorValue(e) ? se : { mapValue: {} } : fail();
}
/** Returns the largest value for the given value type (exclusive). */ function __PRIVATE_valuesGetUpperBound(e) {
	return "nullValue" in e ? { booleanValue: !1 } : "booleanValue" in e ? { doubleValue: NaN } : "integerValue" in e || "doubleValue" in e ? { timestampValue: { seconds: Number.MIN_SAFE_INTEGER } } : "timestampValue" in e ? { stringValue: "" } : "stringValue" in e ? { bytesValue: "" } : "bytesValue" in e ? __PRIVATE_refValue(DatabaseId.empty(), DocumentKey.empty()) : "referenceValue" in e ? { geoPointValue: {
		latitude: -90,
		longitude: -180
	} } : "geoPointValue" in e ? { arrayValue: {} } : "arrayValue" in e ? se : "mapValue" in e ? __PRIVATE_isVectorValue(e) ? { mapValue: {} } : re : fail();
}
function __PRIVATE_lowerBoundCompare(e, t) {
	const n = __PRIVATE_valueCompare(e.value, t.value);
	return 0 !== n ? n : e.inclusive && !t.inclusive ? -1 : !e.inclusive && t.inclusive ? 1 : 0;
}
function __PRIVATE_upperBoundCompare(e, t) {
	const n = __PRIVATE_valueCompare(e.value, t.value);
	return 0 !== n ? n : e.inclusive && !t.inclusive ? 1 : !e.inclusive && t.inclusive ? -1 : 0;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An ObjectValue represents a MapValue in the Firestore Proto and offers the
* ability to add and remove fields (via the ObjectValueBuilder).
*/ var ObjectValue = class ObjectValue {
	constructor(e) {
		this.value = e;
	}
	static empty() {
		return new ObjectValue({ mapValue: {} });
	}
	/**
	* Returns the value at the given path or null.
	*
	* @param path - the path to search
	* @returns The value at the path or null if the path is not set.
	*/ field(e) {
		if (e.isEmpty()) return this.value;
		{
			let t = this.value;
			for (let n = 0; n < e.length - 1; ++n) if (t = (t.mapValue.fields || {})[e.get(n)], !__PRIVATE_isMapValue(t)) return null;
			return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
		}
	}
	/**
	* Sets the field to the provided value.
	*
	* @param path - The field path to set.
	* @param value - The value to set.
	*/ set(e, t) {
		this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t);
	}
	/**
	* Sets the provided fields to the provided values.
	*
	* @param data - A map of fields to values (or null for deletes).
	*/ setAll(e) {
		let t = FieldPath$1.emptyPath(), n = {}, r = [];
		e.forEach(((e, i) => {
			if (!t.isImmediateParentOf(i)) {
				const e = this.getFieldsMap(t);
				this.applyChanges(e, n, r), n = {}, r = [], t = i.popLast();
			}
			e ? n[i.lastSegment()] = __PRIVATE_deepClone(e) : r.push(i.lastSegment());
		}));
		const i = this.getFieldsMap(t);
		this.applyChanges(i, n, r);
	}
	/**
	* Removes the field at the specified path. If there is no field at the
	* specified path, nothing is changed.
	*
	* @param path - The field path to remove.
	*/ delete(e) {
		const t = this.field(e.popLast());
		__PRIVATE_isMapValue(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
	}
	isEqual(e) {
		return __PRIVATE_valueEquals(this.value, e.value);
	}
	/**
	* Returns the map that contains the leaf element of `path`. If the parent
	* entry does not yet exist, or if it is not a map, a new map will be created.
	*/ getFieldsMap(e) {
		let t = this.value;
		t.mapValue.fields || (t.mapValue = { fields: {} });
		for (let n = 0; n < e.length; ++n) {
			let r = t.mapValue.fields[e.get(n)];
			__PRIVATE_isMapValue(r) && r.mapValue.fields || (r = { mapValue: { fields: {} } }, t.mapValue.fields[e.get(n)] = r), t = r;
		}
		return t.mapValue.fields;
	}
	/**
	* Modifies `fieldsMap` by adding, replacing or deleting the specified
	* entries.
	*/ applyChanges(e, t, n) {
		forEach(t, ((t, n) => e[t] = n));
		for (const t of n) delete e[t];
	}
	clone() {
		return new ObjectValue(__PRIVATE_deepClone(this.value));
	}
};
/**
* Returns a FieldMask built from all fields in a MapValue.
*/ function __PRIVATE_extractFieldMask(e) {
	const t = [];
	return forEach(e.fields, ((e, n) => {
		const r = new FieldPath$1([e]);
		if (__PRIVATE_isMapValue(n)) {
			const e = __PRIVATE_extractFieldMask(n.mapValue).fields;
			if (0 === e.length) t.push(r);
			else for (const n of e) t.push(r.child(n));
		} else t.push(r);
	})), new FieldMask(t);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a document in Firestore with a key, version, data and whether it
* has local mutations applied to it.
*
* Documents can transition between states via `convertToFoundDocument()`,
* `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
* not transition to one of these states even after all mutations have been
* applied, `isValidDocument()` returns false and the document should be removed
* from all views.
*/ var MutableDocument = class MutableDocument {
	constructor(e, t, n, r, i, s, o) {
		this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = s, this.documentState = o;
	}
	/**
	* Creates a document with no known version or data, but which can serve as
	* base document for mutations.
	*/ static newInvalidDocument(e) {
		return new MutableDocument(e, 0, SnapshotVersion.min(), SnapshotVersion.min(), SnapshotVersion.min(), ObjectValue.empty(), 0);
	}
	/**
	* Creates a new document that is known to exist with the given data at the
	* given version.
	*/ static newFoundDocument(e, t, n, r) {
		return new MutableDocument(e, 1, t, SnapshotVersion.min(), n, r, 0);
	}
	/** Creates a new document that is known to not exist at the given version. */ static newNoDocument(e, t) {
		return new MutableDocument(e, 2, t, SnapshotVersion.min(), SnapshotVersion.min(), ObjectValue.empty(), 0);
	}
	/**
	* Creates a new document that is known to exist at the given version but
	* whose data is not known (e.g. a document that was updated without a known
	* base document).
	*/ static newUnknownDocument(e, t) {
		return new MutableDocument(e, 3, t, SnapshotVersion.min(), SnapshotVersion.min(), ObjectValue.empty(), 2);
	}
	/**
	* Changes the document type to indicate that it exists and that its version
	* and data are known.
	*/ convertToFoundDocument(e, t) {
		return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
	}
	/**
	* Changes the document type to indicate that it doesn't exist at the given
	* version.
	*/ convertToNoDocument(e) {
		return this.version = e, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
	}
	/**
	* Changes the document type to indicate that it exists at a given version but
	* that its data is not known (e.g. a document that was updated without a known
	* base document).
	*/ convertToUnknownDocument(e) {
		return this.version = e, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
	}
	setHasCommittedMutations() {
		return this.documentState = 2, this;
	}
	setHasLocalMutations() {
		return this.documentState = 1, this.version = SnapshotVersion.min(), this;
	}
	setReadTime(e) {
		return this.readTime = e, this;
	}
	get hasLocalMutations() {
		return 1 === this.documentState;
	}
	get hasCommittedMutations() {
		return 2 === this.documentState;
	}
	get hasPendingWrites() {
		return this.hasLocalMutations || this.hasCommittedMutations;
	}
	isValidDocument() {
		return 0 !== this.documentType;
	}
	isFoundDocument() {
		return 1 === this.documentType;
	}
	isNoDocument() {
		return 2 === this.documentType;
	}
	isUnknownDocument() {
		return 3 === this.documentType;
	}
	isEqual(e) {
		return e instanceof MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
	}
	mutableCopy() {
		return new MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
	}
	toString() {
		return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
	}
};
/**
* Compares the value for field `field` in the provided documents. Throws if
* the field does not exist in both documents.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a bound of a query.
*
* The bound is specified with the given components representing a position and
* whether it's just before or just after the position (relative to whatever the
* query order is).
*
* The position represents a logical index position for a query. It's a prefix
* of values for the (potentially implicit) order by clauses of a query.
*
* Bound provides a function to determine whether a document comes before or
* after a bound. This is influenced by whether the position is just before or
* just after the provided values.
*/
var Bound = class {
	constructor(e, t) {
		this.position = e, this.inclusive = t;
	}
};
function __PRIVATE_boundCompareToDocument(e, t, n) {
	let r = 0;
	for (let i = 0; i < e.position.length; i++) {
		const s = t[i], o = e.position[i];
		if (s.field.isKeyField()) r = DocumentKey.comparator(DocumentKey.fromName(o.referenceValue), n.key);
		else r = __PRIVATE_valueCompare(o, n.data.field(s.field));
		if ("desc" === s.dir && (r *= -1), 0 !== r) break;
	}
	return r;
}
/**
* Returns true if a document sorts after a bound using the provided sort
* order.
*/ function __PRIVATE_boundEquals(e, t) {
	if (null === e) return null === t;
	if (null === t) return !1;
	if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return !1;
	for (let n = 0; n < e.position.length; n++) if (!__PRIVATE_valueEquals(e.position[n], t.position[n])) return !1;
	return !0;
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An ordering on a field, in some Direction. Direction defaults to ASCENDING.
*/ var OrderBy = class {
	constructor(e, t = "asc") {
		this.field = e, this.dir = t;
	}
};
function __PRIVATE_orderByEquals(e, t) {
	return e.dir === t.dir && e.field.isEqual(t.field);
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var Filter = class {};
var FieldFilter = class FieldFilter extends Filter {
	constructor(e, t, n) {
		super(), this.field = e, this.op = t, this.value = n;
	}
	/**
	* Creates a filter based on the provided arguments.
	*/ static create(e, t, n) {
		return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new __PRIVATE_KeyFieldFilter(e, t, n) : "array-contains" === t ? new __PRIVATE_ArrayContainsFilter(e, n) : "in" === t ? new __PRIVATE_InFilter(e, n) : "not-in" === t ? new __PRIVATE_NotInFilter(e, n) : "array-contains-any" === t ? new __PRIVATE_ArrayContainsAnyFilter(e, n) : new FieldFilter(e, t, n);
	}
	static createKeyFieldInFilter(e, t, n) {
		return "in" === t ? new __PRIVATE_KeyFieldInFilter(e, n) : new __PRIVATE_KeyFieldNotInFilter(e, n);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return "!=" === this.op ? null !== t && this.matchesComparison(__PRIVATE_valueCompare(t, this.value)) : null !== t && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) && this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
	}
	matchesComparison(e) {
		switch (this.op) {
			case "<": return e < 0;
			case "<=": return e <= 0;
			case "==": return 0 === e;
			case "!=": return 0 !== e;
			case ">": return e > 0;
			case ">=": return e >= 0;
			default: return fail();
		}
	}
	isInequality() {
		return [
			"<",
			"<=",
			">",
			">=",
			"!=",
			"not-in"
		].indexOf(this.op) >= 0;
	}
	getFlattenedFilters() {
		return [this];
	}
	getFilters() {
		return [this];
	}
};
var CompositeFilter = class CompositeFilter extends Filter {
	constructor(e, t) {
		super(), this.filters = e, this.op = t, this.ae = null;
	}
	/**
	* Creates a filter based on the provided arguments.
	*/ static create(e, t) {
		return new CompositeFilter(e, t);
	}
	matches(e) {
		return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find(((t) => !t.matches(e))) : void 0 !== this.filters.find(((t) => t.matches(e)));
	}
	getFlattenedFilters() {
		return null !== this.ae || (this.ae = this.filters.reduce(((e, t) => e.concat(t.getFlattenedFilters())), [])), this.ae;
	}
	getFilters() {
		return Object.assign([], this.filters);
	}
};
function __PRIVATE_compositeFilterIsConjunction(e) {
	return "and" === e.op;
}
function __PRIVATE_compositeFilterIsDisjunction(e) {
	return "or" === e.op;
}
/**
* Returns true if this filter is a conjunction of field filters only. Returns false otherwise.
*/ function __PRIVATE_compositeFilterIsFlatConjunction(e) {
	return __PRIVATE_compositeFilterIsFlat(e) && __PRIVATE_compositeFilterIsConjunction(e);
}
/**
* Returns true if this filter does not contain any composite filters. Returns false otherwise.
*/ function __PRIVATE_compositeFilterIsFlat(e) {
	for (const t of e.filters) if (t instanceof CompositeFilter) return !1;
	return !0;
}
function __PRIVATE_canonifyFilter(e) {
	if (e instanceof FieldFilter) return e.field.canonicalString() + e.op.toString() + canonicalId(e.value);
	if (__PRIVATE_compositeFilterIsFlatConjunction(e)) return e.filters.map(((e) => __PRIVATE_canonifyFilter(e))).join(",");
	{
		const t = e.filters.map(((e) => __PRIVATE_canonifyFilter(e))).join(",");
		return `${e.op}(${t})`;
	}
}
function __PRIVATE_filterEquals(e, t) {
	return e instanceof FieldFilter ? function __PRIVATE_fieldFilterEquals(e, t) {
		return t instanceof FieldFilter && e.op === t.op && e.field.isEqual(t.field) && __PRIVATE_valueEquals(e.value, t.value);
	}(e, t) : e instanceof CompositeFilter ? function __PRIVATE_compositeFilterEquals(e, t) {
		if (t instanceof CompositeFilter && e.op === t.op && e.filters.length === t.filters.length) return e.filters.reduce(((e, n, r) => e && __PRIVATE_filterEquals(n, t.filters[r])), !0);
		return !1;
	}(e, t) : void fail();
}
function __PRIVATE_compositeFilterWithAddedFilters(e, t) {
	const n = e.filters.concat(t);
	return CompositeFilter.create(n, e.op);
}
/** Returns a debug description for `filter`. */ function __PRIVATE_stringifyFilter(e) {
	return e instanceof FieldFilter ? function __PRIVATE_stringifyFieldFilter(e) {
		return `${e.field.canonicalString()} ${e.op} ${canonicalId(e.value)}`;
	}(e) : e instanceof CompositeFilter ? function __PRIVATE_stringifyCompositeFilter(e) {
		return e.op.toString() + " {" + e.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
	}(e) : "Filter";
}
var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
	constructor(e, t, n) {
		super(e, t, n), this.key = DocumentKey.fromName(n.referenceValue);
	}
	matches(e) {
		const t = DocumentKey.comparator(e.key, this.key);
		return this.matchesComparison(t);
	}
};
/** Filter that matches on key fields within an array. */ var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
	constructor(e, t) {
		super(e, "in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t);
	}
	matches(e) {
		return this.keys.some(((t) => t.isEqual(e.key)));
	}
};
/** Filter that matches on key fields not present within an array. */ var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
	constructor(e, t) {
		super(e, "not-in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t);
	}
	matches(e) {
		return !this.keys.some(((t) => t.isEqual(e.key)));
	}
};
function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
	var n;
	return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(((e) => DocumentKey.fromName(e.referenceValue)));
}
/** A Filter that implements the array-contains operator. */ var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
	constructor(e, t) {
		super(e, "array-contains", t);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value);
	}
};
/** A Filter that implements the IN operator. */ var __PRIVATE_InFilter = class extends FieldFilter {
	constructor(e, t) {
		super(e, "in", t);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t);
	}
};
/** A Filter that implements the not-in operator. */ var __PRIVATE_NotInFilter = class extends FieldFilter {
	constructor(e, t) {
		super(e, "not-in", t);
	}
	matches(e) {
		if (__PRIVATE_arrayValueContains(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
		const t = e.data.field(this.field);
		return null !== t && !__PRIVATE_arrayValueContains(this.value.arrayValue, t);
	}
};
/** A Filter that implements the array-contains-any operator. */ var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
	constructor(e, t) {
		super(e, "array-contains-any", t);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return !(!isArray(t) || !t.arrayValue.values) && t.arrayValue.values.some(((e) => __PRIVATE_arrayValueContains(this.value.arrayValue, e)));
	}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var __PRIVATE_TargetImpl = class {
	constructor(e, t = null, n = [], r = [], i = null, s = null, o = null) {
		this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = s, this.endAt = o, this.ue = null;
	}
};
/**
* Initializes a Target with a path and optional additional query constraints.
* Path must currently be empty if this is a collection group query.
*
* NOTE: you should always construct `Target` from `Query.toTarget` instead of
* using this factory method, because `Query` provides an implicit `orderBy`
* property.
*/ function __PRIVATE_newTarget(e, t = null, n = [], r = [], i = null, s = null, o = null) {
	return new __PRIVATE_TargetImpl(e, t, n, r, i, s, o);
}
function __PRIVATE_canonifyTarget(e) {
	const t = __PRIVATE_debugCast(e);
	if (null === t.ue) {
		let e = t.path.canonicalString();
		null !== t.collectionGroup && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map(((e) => __PRIVATE_canonifyFilter(e))).join(","), e += "|ob:", e += t.orderBy.map(((e) => function __PRIVATE_canonifyOrderBy(e) {
			return e.field.canonicalString() + e.dir;
		}(e))).join(","), __PRIVATE_isNullOrUndefined(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map(((e) => canonicalId(e))).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map(((e) => canonicalId(e))).join(",")), t.ue = e;
	}
	return t.ue;
}
function __PRIVATE_targetEquals(e, t) {
	if (e.limit !== t.limit) return !1;
	if (e.orderBy.length !== t.orderBy.length) return !1;
	for (let n = 0; n < e.orderBy.length; n++) if (!__PRIVATE_orderByEquals(e.orderBy[n], t.orderBy[n])) return !1;
	if (e.filters.length !== t.filters.length) return !1;
	for (let n = 0; n < e.filters.length; n++) if (!__PRIVATE_filterEquals(e.filters[n], t.filters[n])) return !1;
	return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!__PRIVATE_boundEquals(e.startAt, t.startAt) && __PRIVATE_boundEquals(e.endAt, t.endAt);
}
function __PRIVATE_targetIsDocumentTarget(e) {
	return DocumentKey.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length;
}
/** Returns the field filters that target the given field path. */ function __PRIVATE_targetGetFieldFiltersForPath(e, t) {
	return e.filters.filter(((e) => e instanceof FieldFilter && e.field.isEqual(t)));
}
/**
* Returns the values that are used in ARRAY_CONTAINS or ARRAY_CONTAINS_ANY
* filters. Returns `null` if there are no such filters.
*/
/**
* Returns the value to use as the lower bound for ascending index segment at
* the provided `fieldPath` (or the upper bound for an descending segment).
*/
function __PRIVATE_targetGetAscendingBound(e, t, n) {
	let r = ie, i = !0;
	for (const n of __PRIVATE_targetGetFieldFiltersForPath(e, t)) {
		let e = ie, t = !0;
		switch (n.op) {
			case "<":
			case "<=":
				e = __PRIVATE_valuesGetLowerBound(n.value);
				break;
			case "==":
			case "in":
			case ">=":
				e = n.value;
				break;
			case ">":
				e = n.value, t = !1;
				break;
			case "!=":
			case "not-in": e = ie;
		}
		__PRIVATE_lowerBoundCompare({
			value: r,
			inclusive: i
		}, {
			value: e,
			inclusive: t
		}) < 0 && (r = e, i = t);
	}
	if (null !== n) {
		for (let s = 0; s < e.orderBy.length; ++s) if (e.orderBy[s].field.isEqual(t)) {
			const e = n.position[s];
			__PRIVATE_lowerBoundCompare({
				value: r,
				inclusive: i
			}, {
				value: e,
				inclusive: n.inclusive
			}) < 0 && (r = e, i = n.inclusive);
			break;
		}
	}
	return {
		value: r,
		inclusive: i
	};
}
/**
* Returns the value to use as the upper bound for ascending index segment at
* the provided `fieldPath` (or the lower bound for a descending segment).
*/ function __PRIVATE_targetGetDescendingBound(e, t, n) {
	let r = re, i = !0;
	for (const n of __PRIVATE_targetGetFieldFiltersForPath(e, t)) {
		let e = re, t = !0;
		switch (n.op) {
			case ">=":
			case ">":
				e = __PRIVATE_valuesGetUpperBound(n.value), t = !1;
				break;
			case "==":
			case "in":
			case "<=":
				e = n.value;
				break;
			case "<":
				e = n.value, t = !1;
				break;
			case "!=":
			case "not-in": e = re;
		}
		__PRIVATE_upperBoundCompare({
			value: r,
			inclusive: i
		}, {
			value: e,
			inclusive: t
		}) > 0 && (r = e, i = t);
	}
	if (null !== n) {
		for (let s = 0; s < e.orderBy.length; ++s) if (e.orderBy[s].field.isEqual(t)) {
			const e = n.position[s];
			__PRIVATE_upperBoundCompare({
				value: r,
				inclusive: i
			}, {
				value: e,
				inclusive: n.inclusive
			}) > 0 && (r = e, i = n.inclusive);
			break;
		}
	}
	return {
		value: r,
		inclusive: i
	};
}
/** Returns the number of segments of a perfect index for this target. */
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Query encapsulates all the query attributes we support in the SDK. It can
* be run against the LocalStore, as well as be converted to a `Target` to
* query the RemoteStore results.
*
* Visible for testing.
*/
var __PRIVATE_QueryImpl = class {
	/**
	* Initializes a Query with a path and optional additional query constraints.
	* Path must currently be empty if this is a collection group query.
	*/
	constructor(e, t = null, n = [], r = [], i = null, s = "F", o = null, _ = null) {
		this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = s, this.startAt = o, this.endAt = _, this.ce = null, this.le = null, this.he = null, this.startAt, this.endAt;
	}
};
/** Creates a new Query instance with the options provided. */ function __PRIVATE_newQuery(e, t, n, r, i, s, o, _) {
	return new __PRIVATE_QueryImpl(e, t, n, r, i, s, o, _);
}
/** Creates a new Query for a query that matches all documents at `path` */ function __PRIVATE_newQueryForPath(e) {
	return new __PRIVATE_QueryImpl(e);
}
/**
* Helper to convert a collection group query into a collection query at a
* specific path. This is used when executing collection group queries, since
* we have to split the query into a set of collection queries at multiple
* paths.
*/
/**
* Returns true if this query does not specify any query constraints that
* could remove results.
*/
function __PRIVATE_queryMatchesAllDocuments(e) {
	return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField());
}
/**
* Returns whether the query matches a collection group rather than a specific
* collection.
*/
function __PRIVATE_isCollectionGroupQuery(e) {
	return null !== e.collectionGroup;
}
/**
* Returns the normalized order-by constraint that is used to execute the Query,
* which can be different from the order-by constraints the user provided (e.g.
* the SDK and backend always orders by `__name__`). The normalized order-by
* includes implicit order-bys in addition to the explicit user provided
* order-bys.
*/ function __PRIVATE_queryNormalizedOrderBy(e) {
	const t = __PRIVATE_debugCast(e);
	if (null === t.ce) {
		t.ce = [];
		const e = /* @__PURE__ */ new Set();
		for (const n of t.explicitOrderBy) t.ce.push(n), e.add(n.field.canonicalString());
		const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
		(function __PRIVATE_getInequalityFilterFields(e) {
			let t = new SortedSet(FieldPath$1.comparator);
			return e.filters.forEach(((e) => {
				e.getFlattenedFilters().forEach(((e) => {
					e.isInequality() && (t = t.add(e.field));
				}));
			})), t;
		})(t).forEach(((r) => {
			e.has(r.canonicalString()) || r.isKeyField() || t.ce.push(new OrderBy(r, n));
		})), e.has(FieldPath$1.keyField().canonicalString()) || t.ce.push(new OrderBy(FieldPath$1.keyField(), n));
	}
	return t.ce;
}
/**
* Converts this `Query` instance to its corresponding `Target` representation.
*/ function __PRIVATE_queryToTarget(e) {
	const t = __PRIVATE_debugCast(e);
	return t.le || (t.le = __PRIVATE__queryToTarget(t, __PRIVATE_queryNormalizedOrderBy(e))), t.le;
}
/**
* Converts this `Query` instance to its corresponding `Target` representation,
* for use within an aggregate query. Unlike targets for non-aggregate queries,
* aggregate query targets do not contain normalized order-bys, they only
* contain explicit order-bys.
*/ function __PRIVATE_queryToAggregateTarget(e) {
	const t = __PRIVATE_debugCast(e);
	return t.he || (t.he = __PRIVATE__queryToTarget(t, e.explicitOrderBy)), t.he;
}
function __PRIVATE__queryToTarget(e, t) {
	if ("F" === e.limitType) return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
	{
		t = t.map(((e) => {
			const t = "desc" === e.dir ? "asc" : "desc";
			return new OrderBy(e.field, t);
		}));
		const n = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
		return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
	}
}
function __PRIVATE_queryWithAddedFilter(e, t) {
	const n = e.filters.concat([t]);
	return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt);
}
function __PRIVATE_queryWithLimit(e, t, n) {
	return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function __PRIVATE_queryEquals(e, t) {
	return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t)) && e.limitType === t.limitType;
}
function __PRIVATE_canonifyQuery(e) {
	return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`;
}
function __PRIVATE_stringifyQuery(e) {
	return `Query(target=${function __PRIVATE_stringifyTarget(e) {
		let t = e.path.canonicalString();
		return null !== e.collectionGroup && (t += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (t += `, filters: [${e.filters.map(((e) => __PRIVATE_stringifyFilter(e))).join(", ")}]`), __PRIVATE_isNullOrUndefined(e.limit) || (t += ", limit: " + e.limit), e.orderBy.length > 0 && (t += `, orderBy: [${e.orderBy.map(((e) => function __PRIVATE_stringifyOrderBy(e) {
			return `${e.field.canonicalString()} (${e.dir})`;
		}(e))).join(", ")}]`), e.startAt && (t += ", startAt: ", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map(((e) => canonicalId(e))).join(",")), e.endAt && (t += ", endAt: ", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map(((e) => canonicalId(e))).join(",")), `Target(${t})`;
	}(__PRIVATE_queryToTarget(e))}; limitType=${e.limitType})`;
}
/** Returns whether `doc` matches the constraints of `query`. */ function __PRIVATE_queryMatches(e, t) {
	return t.isFoundDocument() && function __PRIVATE_queryMatchesPathAndCollectionGroup(e, t) {
		const n = t.key.path;
		return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : DocumentKey.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n);
	}(e, t) && function __PRIVATE_queryMatchesOrderBy(e, t) {
		for (const n of __PRIVATE_queryNormalizedOrderBy(e)) if (!n.field.isKeyField() && null === t.data.field(n.field)) return !1;
		return !0;
	}(e, t) && function __PRIVATE_queryMatchesFilters(e, t) {
		for (const n of e.filters) if (!n.matches(t)) return !1;
		return !0;
	}(e, t) && function __PRIVATE_queryMatchesBounds(e, t) {
		if (e.startAt && !function __PRIVATE_boundSortsBeforeDocument(e, t, n) {
			const r = __PRIVATE_boundCompareToDocument(e, t, n);
			return e.inclusive ? r <= 0 : r < 0;
		}(e.startAt, __PRIVATE_queryNormalizedOrderBy(e), t)) return !1;
		if (e.endAt && !function __PRIVATE_boundSortsAfterDocument(e, t, n) {
			const r = __PRIVATE_boundCompareToDocument(e, t, n);
			return e.inclusive ? r >= 0 : r > 0;
		}(e.endAt, __PRIVATE_queryNormalizedOrderBy(e), t)) return !1;
		return !0;
	}(e, t);
}
function __PRIVATE_queryCollectionGroup(e) {
	return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2));
}
/**
* Returns a new comparator function that can be used to compare two documents
* based on the Query's ordering constraint.
*/ function __PRIVATE_newQueryComparator(e) {
	return (t, n) => {
		let r = !1;
		for (const i of __PRIVATE_queryNormalizedOrderBy(e)) {
			const e = __PRIVATE_compareDocs(i, t, n);
			if (0 !== e) return e;
			r = r || i.field.isKeyField();
		}
		return 0;
	};
}
function __PRIVATE_compareDocs(e, t, n) {
	const r = e.field.isKeyField() ? DocumentKey.comparator(t.key, n.key) : function __PRIVATE_compareDocumentsByField(e, t, n) {
		const r = t.data.field(e), i = n.data.field(e);
		return null !== r && null !== i ? __PRIVATE_valueCompare(r, i) : fail();
	}(e.field, t, n);
	switch (e.dir) {
		case "asc": return r;
		case "desc": return -1 * r;
		default: return fail();
	}
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A map implementation that uses objects as keys. Objects must have an
* associated equals function and must be immutable. Entries in the map are
* stored together with the key being produced from the mapKeyFn. This map
* automatically handles collisions of keys.
*/ var ObjectMap = class {
	constructor(e, t) {
		this.mapKeyFn = e, this.equalsFn = t, this.inner = {}, this.innerSize = 0;
	}
	/** Get a value for this key, or undefined if it does not exist. */ get(e) {
		const t = this.mapKeyFn(e), n = this.inner[t];
		if (void 0 !== n) {
			for (const [t, r] of n) if (this.equalsFn(t, e)) return r;
		}
	}
	has(e) {
		return void 0 !== this.get(e);
	}
	/** Put this key and value in the map. */ set(e, t) {
		const n = this.mapKeyFn(e), r = this.inner[n];
		if (void 0 === r) return this.inner[n] = [[e, t]], void this.innerSize++;
		for (let n = 0; n < r.length; n++) if (this.equalsFn(r[n][0], e)) return void (r[n] = [e, t]);
		r.push([e, t]), this.innerSize++;
	}
	/**
	* Remove this key from the map. Returns a boolean if anything was deleted.
	*/ delete(e) {
		const t = this.mapKeyFn(e), n = this.inner[t];
		if (void 0 === n) return !1;
		for (let r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, !0;
		return !1;
	}
	forEach(e) {
		forEach(this.inner, ((t, n) => {
			for (const [t, r] of n) e(t, r);
		}));
	}
	isEmpty() {
		return isEmpty(this.inner);
	}
	size() {
		return this.innerSize;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var oe = new SortedMap(DocumentKey.comparator);
function __PRIVATE_mutableDocumentMap() {
	return oe;
}
var _e = new SortedMap(DocumentKey.comparator);
function documentMap(...e) {
	let t = _e;
	for (const n of e) t = t.insert(n.key, n);
	return t;
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
	let t = _e;
	return e.forEach(((e, n) => t = t.insert(e, n.overlayedDocument))), t;
}
function __PRIVATE_newOverlayMap() {
	return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newMutationMap() {
	return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newDocumentKeyMap() {
	return new ObjectMap(((e) => e.toString()), ((e, t) => e.isEqual(t)));
}
var ae = new SortedMap(DocumentKey.comparator);
var ue = new SortedSet(DocumentKey.comparator);
function __PRIVATE_documentKeySet(...e) {
	let t = ue;
	for (const n of e) t = t.add(n);
	return t;
}
var ce = new SortedSet(__PRIVATE_primitiveComparator);
function __PRIVATE_targetIdSet() {
	return ce;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns an DoubleValue for `value` that is encoded based the serializer's
* `useProto3Json` setting.
*/ function __PRIVATE_toDouble(e, t) {
	if (e.useProto3Json) {
		if (isNaN(t)) return { doubleValue: "NaN" };
		if (t === Infinity) return { doubleValue: "Infinity" };
		if (t === -Infinity) return { doubleValue: "-Infinity" };
	}
	return { doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t };
}
/**
* Returns an IntegerValue for `value`.
*/ function __PRIVATE_toInteger(e) {
	return { integerValue: "" + e };
}
/**
* Returns a value for a number that's appropriate to put into a proto.
* The return value is an IntegerValue if it can safely represent the value,
* otherwise a DoubleValue is returned.
*/ function toNumber(e, t) {
	return isSafeInteger(t) ? __PRIVATE_toInteger(t) : __PRIVATE_toDouble(e, t);
}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Used to represent a field transform on a mutation. */ var TransformOperation = class {
	constructor() {
		this._ = void 0;
	}
};
/**
* Computes the local transform result against the provided `previousValue`,
* optionally using the provided localWriteTime.
*/ function __PRIVATE_applyTransformOperationToLocalView(e, t, n) {
	return e instanceof __PRIVATE_ServerTimestampTransform ? function serverTimestamp$1(e, t) {
		const n = { fields: {
			__type__: { stringValue: "server_timestamp" },
			__local_write_time__: { timestampValue: {
				seconds: e.seconds,
				nanos: e.nanoseconds
			} }
		} };
		return t && __PRIVATE_isServerTimestamp(t) && (t = __PRIVATE_getPreviousValue(t)), t && (n.fields.__previous_value__ = t), { mapValue: n };
	}(n, t) : e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e, t) {
		const n = __PRIVATE_computeTransformOperationBaseValue(e, t), r = asNumber(n) + asNumber(e.Pe);
		return isInteger(n) && isInteger(e.Pe) ? __PRIVATE_toInteger(r) : __PRIVATE_toDouble(e.serializer, r);
	}(e, t);
}
/**
* Computes a final transform result after the transform has been acknowledged
* by the server, potentially using the server-provided transformResult.
*/ function __PRIVATE_applyTransformOperationToRemoteDocument(e, t, n) {
	return e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : n;
}
/**
* If this transform operation is not idempotent, returns the base value to
* persist for this transform. If a base value is returned, the transform
* operation is always applied to this base value, even if document has
* already been updated.
*
* Base values provide consistent behavior for non-idempotent transforms and
* allow us to return the same latency-compensated value even if the backend
* has already applied the transform operation. The base value is null for
* idempotent transforms, as they can be re-played even if the backend has
* already applied them.
*
* @returns a base value to store along with the mutation, or null for
* idempotent transforms.
*/ function __PRIVATE_computeTransformOperationBaseValue(e, t) {
	return e instanceof __PRIVATE_NumericIncrementTransformOperation ? function __PRIVATE_isNumber(e) {
		return isInteger(e) || function __PRIVATE_isDouble(e) {
			return !!e && "doubleValue" in e;
		}(e);
	}(t) ? t : { integerValue: 0 } : null;
}
/** Transforms a value into a server-generated timestamp. */
var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {};
/** Transforms an array value via a union operation. */ var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
	constructor(e) {
		super(), this.elements = e;
	}
};
function __PRIVATE_applyArrayUnionTransformOperation(e, t) {
	const n = __PRIVATE_coercedFieldValuesArray(t);
	for (const t of e.elements) n.some(((e) => __PRIVATE_valueEquals(e, t))) || n.push(t);
	return { arrayValue: { values: n } };
}
/** Transforms an array value via a remove operation. */ var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
	constructor(e) {
		super(), this.elements = e;
	}
};
function __PRIVATE_applyArrayRemoveTransformOperation(e, t) {
	let n = __PRIVATE_coercedFieldValuesArray(t);
	for (const t of e.elements) n = n.filter(((e) => !__PRIVATE_valueEquals(e, t)));
	return { arrayValue: { values: n } };
}
/**
* Implements the backend semantics for locally computed NUMERIC_ADD (increment)
* transforms. Converts all field values to integers or doubles, but unlike the
* backend does not cap integer values at 2^63. Instead, JavaScript number
* arithmetic is used and precision loss can occur for values greater than 2^53.
*/ var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
	constructor(e, t) {
		super(), this.serializer = e, this.Pe = t;
	}
};
function asNumber(e) {
	return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
}
function __PRIVATE_coercedFieldValuesArray(e) {
	return isArray(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** A field path and the TransformOperation to perform upon it. */ var FieldTransform = class {
	constructor(e, t) {
		this.field = e, this.transform = t;
	}
};
function __PRIVATE_fieldTransformEquals(e, t) {
	return e.field.isEqual(t.field) && function __PRIVATE_transformOperationEquals(e, t) {
		return e instanceof __PRIVATE_ArrayUnionTransformOperation && t instanceof __PRIVATE_ArrayUnionTransformOperation || e instanceof __PRIVATE_ArrayRemoveTransformOperation && t instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e.elements, t.elements, __PRIVATE_valueEquals) : e instanceof __PRIVATE_NumericIncrementTransformOperation && t instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e.Pe, t.Pe) : e instanceof __PRIVATE_ServerTimestampTransform && t instanceof __PRIVATE_ServerTimestampTransform;
	}(e.transform, t.transform);
}
/** The result of successfully applying a mutation to the backend. */
var MutationResult = class {
	constructor(e, t) {
		this.version = e, this.transformResults = t;
	}
};
/**
* Encodes a precondition for a mutation. This follows the model that the
* backend accepts with the special case of an explicit "empty" precondition
* (meaning no precondition).
*/ var Precondition = class Precondition {
	constructor(e, t) {
		this.updateTime = e, this.exists = t;
	}
	/** Creates a new empty Precondition. */ static none() {
		return new Precondition();
	}
	/** Creates a new Precondition with an exists flag. */ static exists(e) {
		return new Precondition(void 0, e);
	}
	/** Creates a new Precondition based on a version a document exists at. */ static updateTime(e) {
		return new Precondition(e);
	}
	/** Returns whether this Precondition is empty. */ get isNone() {
		return void 0 === this.updateTime && void 0 === this.exists;
	}
	isEqual(e) {
		return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
	}
};
/** Returns true if the preconditions is valid for the given document. */ function __PRIVATE_preconditionIsValidForDocument(e, t) {
	return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument();
}
/**
* A mutation describes a self-contained change to a document. Mutations can
* create, replace, delete, and update subsets of documents.
*
* Mutations not only act on the value of the document but also its version.
*
* For local mutations (mutations that haven't been committed yet), we preserve
* the existing version for Set and Patch mutations. For Delete mutations, we
* reset the version to 0.
*
* Here's the expected transition table.
*
* MUTATION           APPLIED TO            RESULTS IN
*
* SetMutation        Document(v3)          Document(v3)
* SetMutation        NoDocument(v3)        Document(v0)
* SetMutation        InvalidDocument(v0)   Document(v0)
* PatchMutation      Document(v3)          Document(v3)
* PatchMutation      NoDocument(v3)        NoDocument(v3)
* PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
* DeleteMutation     Document(v3)          NoDocument(v0)
* DeleteMutation     NoDocument(v3)        NoDocument(v0)
* DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
*
* For acknowledged mutations, we use the updateTime of the WriteResponse as
* the resulting version for Set and Patch mutations. As deletes have no
* explicit update time, we use the commitTime of the WriteResponse for
* Delete mutations.
*
* If a mutation is acknowledged by the backend but fails the precondition check
* locally, we transition to an `UnknownDocument` and rely on Watch to send us
* the updated version.
*
* Field transforms are used only with Patch and Set Mutations. We use the
* `updateTransforms` message to store transforms, rather than the `transforms`s
* messages.
*
* ## Subclassing Notes
*
* Every type of mutation needs to implement its own applyToRemoteDocument() and
* applyToLocalView() to implement the actual behavior of applying the mutation
* to some source document (see `setMutationApplyToRemoteDocument()` for an
* example).
*/ var Mutation = class {};
/**
* A utility method to calculate a `Mutation` representing the overlay from the
* final state of the document, and a `FieldMask` representing the fields that
* are mutated by the local mutations.
*/ function __PRIVATE_calculateOverlayMutation(e, t) {
	if (!e.hasLocalMutations || t && 0 === t.fields.length) return null;
	if (null === t) return e.isNoDocument() ? new __PRIVATE_DeleteMutation(e.key, Precondition.none()) : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
	{
		const n = e.data, r = ObjectValue.empty();
		let i = new SortedSet(FieldPath$1.comparator);
		for (let e of t.fields) if (!i.has(e)) {
			let t = n.field(e);
			null === t && e.length > 1 && (e = e.popLast(), t = n.field(e)), null === t ? r.delete(e) : r.set(e, t), i = i.add(e);
		}
		return new __PRIVATE_PatchMutation(e.key, r, new FieldMask(i.toArray()), Precondition.none());
	}
}
/**
* Applies this mutation to the given document for the purposes of computing a
* new remote document. If the input document doesn't match the expected state
* (e.g. it is invalid or outdated), the document type may transition to
* unknown.
*
* @param mutation - The mutation to apply.
* @param document - The document to mutate. The input document can be an
*     invalid document if the client has no knowledge of the pre-mutation state
*     of the document.
* @param mutationResult - The result of applying the mutation from the backend.
*/ function __PRIVATE_mutationApplyToRemoteDocument(e, t, n) {
	e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToRemoteDocument(e, t, n) {
		const r = e.value.clone(), i = __PRIVATE_serverTransformResults(e.fieldTransforms, t, n.transformResults);
		r.setAll(i), t.convertToFoundDocument(n.version, r).setHasCommittedMutations();
	}(e, t, n) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToRemoteDocument(e, t, n) {
		if (!__PRIVATE_preconditionIsValidForDocument(e.precondition, t)) return void t.convertToUnknownDocument(n.version);
		const r = __PRIVATE_serverTransformResults(e.fieldTransforms, t, n.transformResults), i = t.data;
		i.setAll(__PRIVATE_getPatch(e)), i.setAll(r), t.convertToFoundDocument(n.version, i).setHasCommittedMutations();
	}(e, t, n) : function __PRIVATE_deleteMutationApplyToRemoteDocument(e, t, n) {
		t.convertToNoDocument(n.version).setHasCommittedMutations();
	}(0, t, n);
}
/**
* Applies this mutation to the given document for the purposes of computing
* the new local view of a document. If the input document doesn't match the
* expected state, the document is not modified.
*
* @param mutation - The mutation to apply.
* @param document - The document to mutate. The input document can be an
*     invalid document if the client has no knowledge of the pre-mutation state
*     of the document.
* @param previousMask - The fields that have been updated before applying this mutation.
* @param localWriteTime - A timestamp indicating the local write time of the
*     batch this mutation is a part of.
* @returns A `FieldMask` representing the fields that are changed by applying this mutation.
*/ function __PRIVATE_mutationApplyToLocalView(e, t, n, r) {
	return e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToLocalView(e, t, n, r) {
		if (!__PRIVATE_preconditionIsValidForDocument(e.precondition, t)) return n;
		const i = e.value.clone(), s = __PRIVATE_localTransformResults(e.fieldTransforms, r, t);
		return i.setAll(s), t.convertToFoundDocument(t.version, i).setHasLocalMutations(), null;
	}(e, t, n, r) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToLocalView(e, t, n, r) {
		if (!__PRIVATE_preconditionIsValidForDocument(e.precondition, t)) return n;
		const i = __PRIVATE_localTransformResults(e.fieldTransforms, r, t), s = t.data;
		if (s.setAll(__PRIVATE_getPatch(e)), s.setAll(i), t.convertToFoundDocument(t.version, s).setHasLocalMutations(), null === n) return null;
		return n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(((e) => e.field)));
	}(e, t, n, r) : function __PRIVATE_deleteMutationApplyToLocalView(e, t, n) {
		if (__PRIVATE_preconditionIsValidForDocument(e.precondition, t)) return t.convertToNoDocument(t.version).setHasLocalMutations(), null;
		return n;
	}(e, t, n);
}
/**
* If this mutation is not idempotent, returns the base value to persist with
* this mutation. If a base value is returned, the mutation is always applied
* to this base value, even if document has already been updated.
*
* The base value is a sparse object that consists of only the document
* fields for which this mutation contains a non-idempotent transformation
* (e.g. a numeric increment). The provided value guarantees consistent
* behavior for non-idempotent transforms and allow us to return the same
* latency-compensated value even if the backend has already applied the
* mutation. The base value is null for idempotent mutations, as they can be
* re-played even if the backend has already applied them.
*
* @returns a base value to store along with the mutation, or null for
* idempotent mutations.
*/ function __PRIVATE_mutationExtractBaseValue(e, t) {
	let n = null;
	for (const r of e.fieldTransforms) {
		const e = t.data.field(r.field), i = __PRIVATE_computeTransformOperationBaseValue(r.transform, e || null);
		null != i && (null === n && (n = ObjectValue.empty()), n.set(r.field, i));
	}
	return n || null;
}
function __PRIVATE_mutationEquals(e, t) {
	return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function __PRIVATE_fieldTransformsAreEqual(e, t) {
		return void 0 === e && void 0 === t || !(!e || !t) && __PRIVATE_arrayEquals(e, t, ((e, t) => __PRIVATE_fieldTransformEquals(e, t)));
	}(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask));
}
/**
* A mutation that creates or replaces the document at the given key with the
* object value contents.
*/ var __PRIVATE_SetMutation = class extends Mutation {
	constructor(e, t, n, r = []) {
		super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0;
	}
	getFieldMask() {
		return null;
	}
};
var __PRIVATE_PatchMutation = class extends Mutation {
	constructor(e, t, n, r, i = []) {
		super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1;
	}
	getFieldMask() {
		return this.fieldMask;
	}
};
function __PRIVATE_getPatch(e) {
	const t = /* @__PURE__ */ new Map();
	return e.fieldMask.fields.forEach(((n) => {
		if (!n.isEmpty()) {
			const r = e.data.field(n);
			t.set(n, r);
		}
	})), t;
}
/**
* Creates a list of "transform results" (a transform result is a field value
* representing the result of applying a transform) for use after a mutation
* containing transforms has been acknowledged by the server.
*
* @param fieldTransforms - The field transforms to apply the result to.
* @param mutableDocument - The current state of the document after applying all
* previous mutations.
* @param serverTransformResults - The transform results received by the server.
* @returns The transform results list.
*/ function __PRIVATE_serverTransformResults(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	__PRIVATE_hardAssert(e.length === n.length);
	for (let i = 0; i < n.length; i++) {
		const s = e[i], o = s.transform, _ = t.data.field(s.field);
		r.set(s.field, __PRIVATE_applyTransformOperationToRemoteDocument(o, _, n[i]));
	}
	return r;
}
/**
* Creates a list of "transform results" (a transform result is a field value
* representing the result of applying a transform) for use when applying a
* transform locally.
*
* @param fieldTransforms - The field transforms to apply the result to.
* @param localWriteTime - The local time of the mutation (used to
*     generate ServerTimestampValues).
* @param mutableDocument - The document to apply transforms on.
* @returns The transform results list.
*/ function __PRIVATE_localTransformResults(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e) {
		const e = i.transform, s = n.data.field(i.field);
		r.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e, s, t));
	}
	return r;
}
/** A mutation that deletes the document at the given key. */ var __PRIVATE_DeleteMutation = class extends Mutation {
	constructor(e, t) {
		super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
	}
	getFieldMask() {
		return null;
	}
};
var __PRIVATE_VerifyMutation = class extends Mutation {
	constructor(e, t) {
		super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
	}
	getFieldMask() {
		return null;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A batch of mutations that will be sent as one unit to the backend.
*/ var MutationBatch = class {
	/**
	* @param batchId - The unique ID of this mutation batch.
	* @param localWriteTime - The original write time of this mutation.
	* @param baseMutations - Mutations that are used to populate the base
	* values when this mutation is applied locally. This can be used to locally
	* overwrite values that are persisted in the remote document cache. Base
	* mutations are never sent to the backend.
	* @param mutations - The user-provided mutations in this mutation batch.
	* User-provided mutations are applied both locally and remotely on the
	* backend.
	*/
	constructor(e, t, n, r) {
		this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r;
	}
	/**
	* Applies all the mutations in this MutationBatch to the specified document
	* to compute the state of the remote document
	*
	* @param document - The document to apply mutations to.
	* @param batchResult - The result of applying the MutationBatch to the
	* backend.
	*/ applyToRemoteDocument(e, t) {
		const n = t.mutationResults;
		for (let t = 0; t < this.mutations.length; t++) {
			const r = this.mutations[t];
			if (r.key.isEqual(e.key)) __PRIVATE_mutationApplyToRemoteDocument(r, e, n[t]);
		}
	}
	/**
	* Computes the local view of a document given all the mutations in this
	* batch.
	*
	* @param document - The document to apply mutations to.
	* @param mutatedFields - Fields that have been updated before applying this mutation batch.
	* @returns A `FieldMask` representing all the fields that are mutated.
	*/ applyToLocalView(e, t) {
		for (const n of this.baseMutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
		for (const n of this.mutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
		return t;
	}
	/**
	* Computes the local view for all provided documents given the mutations in
	* this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
	* replace all the mutation applications.
	*/ applyToLocalDocumentSet(e, t) {
		const n = __PRIVATE_newMutationMap();
		return this.mutations.forEach(((r) => {
			const i = e.get(r.key), s = i.overlayedDocument;
			let o = this.applyToLocalView(s, i.mutatedFields);
			o = t.has(r.key) ? null : o;
			const _ = __PRIVATE_calculateOverlayMutation(s, o);
			null !== _ && n.set(r.key, _), s.isValidDocument() || s.convertToNoDocument(SnapshotVersion.min());
		})), n;
	}
	keys() {
		return this.mutations.reduce(((e, t) => e.add(t.key)), __PRIVATE_documentKeySet());
	}
	isEqual(e) {
		return this.batchId === e.batchId && __PRIVATE_arrayEquals(this.mutations, e.mutations, ((e, t) => __PRIVATE_mutationEquals(e, t))) && __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, ((e, t) => __PRIVATE_mutationEquals(e, t)));
	}
};
/** The result of applying a mutation batch to the backend. */ var MutationBatchResult = class MutationBatchResult {
	constructor(e, t, n, r) {
		this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r;
	}
	/**
	* Creates a new MutationBatchResult for the given batch and results. There
	* must be one result for each mutation in the batch. This static factory
	* caches a document=&gt;version mapping (docVersions).
	*/ static from(e, t, n) {
		__PRIVATE_hardAssert(e.mutations.length === n.length);
		let r = function __PRIVATE_documentVersionMap() {
			return ae;
		}();
		const i = e.mutations;
		for (let e = 0; e < i.length; e++) r = r.insert(i[e].key, n[e].version);
		return new MutationBatchResult(e, t, n, r);
	}
};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Representation of an overlay computed by Firestore.
*
* Holds information about a mutation and the largest batch id in Firestore when
* the mutation was created.
*/ var Overlay = class {
	constructor(e, t) {
		this.largestBatchId = e, this.mutation = t;
	}
	getKey() {
		return this.mutation.key;
	}
	isEqual(e) {
		return null !== e && this.mutation === e.mutation;
	}
	toString() {
		return `Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`;
	}
};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Concrete implementation of the Aggregate type.
*/ var __PRIVATE_AggregateImpl = class {
	constructor(e, t, n) {
		this.alias = e, this.aggregateType = t, this.fieldPath = n;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var ExistenceFilter = class {
	constructor(e, t) {
		this.count = e, this.unchangedNames = t;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Error Codes describing the different ways GRPC can fail. These are copied
* directly from GRPC's sources here:
*
* https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
*
* Important! The names of these identifiers matter because the string forms
* are used for reverse lookups from the webchannel stream. Do NOT change the
* names of these identifiers or change this into a const enum.
*/ var le, he;
/**
* Determines whether an error code represents a permanent error when received
* in response to a non-write operation.
*
* See isPermanentWriteError for classifying write errors.
*/
function __PRIVATE_isPermanentError(e) {
	switch (e) {
		default: return fail();
		case D.CANCELLED:
		case D.UNKNOWN:
		case D.DEADLINE_EXCEEDED:
		case D.RESOURCE_EXHAUSTED:
		case D.INTERNAL:
		case D.UNAVAILABLE:
		case D.UNAUTHENTICATED: return !1;
		case D.INVALID_ARGUMENT:
		case D.NOT_FOUND:
		case D.ALREADY_EXISTS:
		case D.PERMISSION_DENIED:
		case D.FAILED_PRECONDITION:
		case D.ABORTED:
		case D.OUT_OF_RANGE:
		case D.UNIMPLEMENTED:
		case D.DATA_LOSS: return !0;
	}
}
/**
* Determines whether an error code represents a permanent error when received
* in response to a write operation.
*
* Write operations must be handled specially because as of b/119437764, ABORTED
* errors on the write stream should be retried too (even though ABORTED errors
* are not generally retryable).
*
* Note that during the initial handshake on the write stream an ABORTED error
* signals that we should discard our stream token (i.e. it is permanent). This
* means a handshake error should be classified with isPermanentError, above.
*/
/**
* Maps an error Code from GRPC status code number, like 0, 1, or 14. These
* are not the same as HTTP status codes.
*
* @returns The Code equivalent to the given GRPC status code. Fails if there
*     is no match.
*/
function __PRIVATE_mapCodeFromRpcCode(e) {
	if (void 0 === e) return __PRIVATE_logError("GRPC error has no .code"), D.UNKNOWN;
	switch (e) {
		case le.OK: return D.OK;
		case le.CANCELLED: return D.CANCELLED;
		case le.UNKNOWN: return D.UNKNOWN;
		case le.DEADLINE_EXCEEDED: return D.DEADLINE_EXCEEDED;
		case le.RESOURCE_EXHAUSTED: return D.RESOURCE_EXHAUSTED;
		case le.INTERNAL: return D.INTERNAL;
		case le.UNAVAILABLE: return D.UNAVAILABLE;
		case le.UNAUTHENTICATED: return D.UNAUTHENTICATED;
		case le.INVALID_ARGUMENT: return D.INVALID_ARGUMENT;
		case le.NOT_FOUND: return D.NOT_FOUND;
		case le.ALREADY_EXISTS: return D.ALREADY_EXISTS;
		case le.PERMISSION_DENIED: return D.PERMISSION_DENIED;
		case le.FAILED_PRECONDITION: return D.FAILED_PRECONDITION;
		case le.ABORTED: return D.ABORTED;
		case le.OUT_OF_RANGE: return D.OUT_OF_RANGE;
		case le.UNIMPLEMENTED: return D.UNIMPLEMENTED;
		case le.DATA_LOSS: return D.DATA_LOSS;
		default: return fail();
	}
}
/**
* Converts an HTTP response's error status to the equivalent error code.
*
* @param status - An HTTP error response status ("FAILED_PRECONDITION",
* "UNKNOWN", etc.)
* @returns The equivalent Code. Non-matching responses are mapped to
*     Code.UNKNOWN.
*/ (he = le || (le = {}))[he.OK = 0] = "OK", he[he.CANCELLED = 1] = "CANCELLED", he[he.UNKNOWN = 2] = "UNKNOWN", he[he.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", he[he.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", he[he.NOT_FOUND = 5] = "NOT_FOUND", he[he.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", he[he.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", he[he.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", he[he.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", he[he.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", he[he.ABORTED = 10] = "ABORTED", he[he.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", he[he.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", he[he.INTERNAL = 13] = "INTERNAL", he[he.UNAVAILABLE = 14] = "UNAVAILABLE", he[he.DATA_LOSS = 15] = "DATA_LOSS";
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The global, singleton instance of TestingHooksSpi.
*
* This variable will be `null` in all cases _except_ when running from
* integration tests that have registered callbacks to be notified of events
* that happen during the test execution.
*/
var Pe = null;
/**
* Sets the value of the `testingHooksSpi` object.
* @param instance the instance to set.
*/
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An instance of the Platform's 'TextEncoder' implementation.
*/
function __PRIVATE_newTextEncoder() {
	return new TextEncoder();
}
/**
* An instance of the Platform's 'TextDecoder' implementation.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ie = new Integer([4294967295, 4294967295], 0);
function __PRIVATE_getMd5HashValue(e) {
	const t = __PRIVATE_newTextEncoder().encode(e), n = new Md5();
	return n.update(t), new Uint8Array(n.digest());
}
function __PRIVATE_get64BitUints(e) {
	const t = new DataView(e.buffer), n = t.getUint32(0, !0), r = t.getUint32(4, !0), i = t.getUint32(8, !0), s = t.getUint32(12, !0);
	return [new Integer([n, r], 0), new Integer([i, s], 0)];
}
var BloomFilter = class BloomFilter {
	constructor(e, t, n) {
		if (this.bitmap = e, this.padding = t, this.hashCount = n, t < 0 || t >= 8) throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t}`);
		if (n < 0) throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n}`);
		if (e.length > 0 && 0 === this.hashCount) throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n}`);
		if (0 === e.length && 0 !== t) throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${t}`);
		this.Ie = 8 * e.length - t, this.Te = Integer.fromNumber(this.Ie);
	}
	Ee(e, t, n) {
		let r = e.add(t.multiply(Integer.fromNumber(n)));
		return 1 === r.compare(Ie) && (r = new Integer([r.getBits(0), r.getBits(1)], 0)), r.modulo(this.Te).toNumber();
	}
	de(e) {
		return 0 != (this.bitmap[Math.floor(e / 8)] & 1 << e % 8);
	}
	mightContain(e) {
		if (0 === this.Ie) return !1;
		const [n, r] = __PRIVATE_get64BitUints(__PRIVATE_getMd5HashValue(e));
		for (let e = 0; e < this.hashCount; e++) {
			const t = this.Ee(n, r, e);
			if (!this.de(t)) return !1;
		}
		return !0;
	}
	/** Create bloom filter for testing purposes only. */ static create(e, t, n) {
		const r = e % 8 == 0 ? 0 : 8 - e % 8, s = new BloomFilter(new Uint8Array(Math.ceil(e / 8)), r, t);
		return n.forEach(((e) => s.insert(e))), s;
	}
	insert(e) {
		if (0 === this.Ie) return;
		const [n, r] = __PRIVATE_get64BitUints(__PRIVATE_getMd5HashValue(e));
		for (let e = 0; e < this.hashCount; e++) {
			const t = this.Ee(n, r, e);
			this.Ae(t);
		}
	}
	Ae(e) {
		const t = Math.floor(e / 8), n = e % 8;
		this.bitmap[t] |= 1 << n;
	}
};
var __PRIVATE_BloomFilterError = class extends Error {
	constructor() {
		super(...arguments), this.name = "BloomFilterError";
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An event from the RemoteStore. It is split into targetChanges (changes to the
* state or the set of documents in our watched targets) and documentUpdates
* (changes to the actual documents).
*/ var RemoteEvent = class RemoteEvent {
	constructor(e, t, n, r, i) {
		this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i;
	}
	/**
	* HACK: Views require RemoteEvents in order to determine whether the view is
	* CURRENT, but secondary tabs don't receive remote events. So this method is
	* used to create a synthesized RemoteEvent that can be used to apply a
	* CURRENT status change to a View, for queries executed in a different tab.
	*/
	static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
		const r = /* @__PURE__ */ new Map();
		return r.set(e, TargetChange.createSynthesizedTargetChangeForCurrentChange(e, t, n)), new RemoteEvent(SnapshotVersion.min(), r, new SortedMap(__PRIVATE_primitiveComparator), __PRIVATE_mutableDocumentMap(), __PRIVATE_documentKeySet());
	}
};
/**
* A TargetChange specifies the set of changes for a specific target as part of
* a RemoteEvent. These changes track which documents are added, modified or
* removed, as well as the target's resume token and whether the target is
* marked CURRENT.
* The actual changes *to* documents are not part of the TargetChange since
* documents may be part of multiple targets.
*/ var TargetChange = class TargetChange {
	constructor(e, t, n, r, i) {
		this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i;
	}
	/**
	* This method is used to create a synthesized TargetChanges that can be used to
	* apply a CURRENT status change to a View (for queries executed in a different
	* tab) or for new queries (to raise snapshots with correct CURRENT status).
	*/ static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
		return new TargetChange(n, t, __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet());
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a changed document and a list of target ids to which this change
* applies.
*
* If document has been deleted NoDocument will be provided.
*/ var __PRIVATE_DocumentWatchChange = class {
	constructor(e, t, n, r) {
		this.Re = e, this.removedTargetIds = t, this.key = n, this.Ve = r;
	}
};
var __PRIVATE_ExistenceFilterChange = class {
	constructor(e, t) {
		this.targetId = e, this.me = t;
	}
};
var __PRIVATE_WatchTargetChange = class {
	constructor(e, t, n = ByteString.EMPTY_BYTE_STRING, r = null) {
		this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r;
	}
};
/** Tracks the internal state of a Watch target. */ var __PRIVATE_TargetState = class {
	constructor() {
		/**
		* The number of pending responses (adds or removes) that we are waiting on.
		* We only consider targets active that have no pending responses.
		*/
		this.fe = 0, this.ge = __PRIVATE_snapshotChangesMap(), this.pe = ByteString.EMPTY_BYTE_STRING, this.ye = !1, this.we = !0;
	}
	/**
	* Whether this target has been marked 'current'.
	*
	* 'Current' has special meaning in the RPC protocol: It implies that the
	* Watch backend has sent us all changes up to the point at which the target
	* was added and that the target is consistent with the rest of the watch
	* stream.
	*/ get current() {
		return this.ye;
	}
	/** The last resume token sent to us for this target. */ get resumeToken() {
		return this.pe;
	}
	/** Whether this target has pending target adds or target removes. */ get Se() {
		return 0 !== this.fe;
	}
	/** Whether we have modified any state that should trigger a snapshot. */ get be() {
		return this.we;
	}
	/**
	* Applies the resume token to the TargetChange, but only when it has a new
	* value. Empty resumeTokens are discarded.
	*/ De(e) {
		e.approximateByteSize() > 0 && (this.we = !0, this.pe = e);
	}
	/**
	* Creates a target change from the current set of changes.
	*
	* To reset the document changes after raising this snapshot, call
	* `clearPendingChanges()`.
	*/ ve() {
		let e = __PRIVATE_documentKeySet(), t = __PRIVATE_documentKeySet(), n = __PRIVATE_documentKeySet();
		return this.ge.forEach(((r, i) => {
			switch (i) {
				case 0:
					e = e.add(r);
					break;
				case 2:
					t = t.add(r);
					break;
				case 1:
					n = n.add(r);
					break;
				default: fail();
			}
		})), new TargetChange(this.pe, this.ye, e, t, n);
	}
	/**
	* Resets the document changes and sets `hasPendingChanges` to false.
	*/ Ce() {
		this.we = !1, this.ge = __PRIVATE_snapshotChangesMap();
	}
	Fe(e, t) {
		this.we = !0, this.ge = this.ge.insert(e, t);
	}
	Me(e) {
		this.we = !0, this.ge = this.ge.remove(e);
	}
	xe() {
		this.fe += 1;
	}
	Oe() {
		this.fe -= 1, __PRIVATE_hardAssert(this.fe >= 0);
	}
	Ne() {
		this.we = !0, this.ye = !0;
	}
};
/**
* A helper class to accumulate watch changes into a RemoteEvent.
*/
var __PRIVATE_WatchChangeAggregator = class {
	constructor(e) {
		this.Le = e, this.Be = /* @__PURE__ */ new Map(), this.ke = __PRIVATE_mutableDocumentMap(), this.qe = __PRIVATE_documentTargetMap(), this.Qe = new SortedMap(__PRIVATE_primitiveComparator);
	}
	/**
	* Processes and adds the DocumentWatchChange to the current set of changes.
	*/ Ke(e) {
		for (const t of e.Re) e.Ve && e.Ve.isFoundDocument() ? this.$e(t, e.Ve) : this.Ue(t, e.key, e.Ve);
		for (const t of e.removedTargetIds) this.Ue(t, e.key, e.Ve);
	}
	/** Processes and adds the WatchTargetChange to the current set of changes. */ We(e) {
		this.forEachTarget(e, ((t) => {
			const n = this.Ge(t);
			switch (e.state) {
				case 0:
					this.ze(t) && n.De(e.resumeToken);
					break;
				case 1:
					n.Oe(), n.Se || n.Ce(), n.De(e.resumeToken);
					break;
				case 2:
					n.Oe(), n.Se || this.removeTarget(t);
					break;
				case 3:
					this.ze(t) && (n.Ne(), n.De(e.resumeToken));
					break;
				case 4:
					this.ze(t) && (this.je(t), n.De(e.resumeToken));
					break;
				default: fail();
			}
		}));
	}
	/**
	* Iterates over all targetIds that the watch change applies to: either the
	* targetIds explicitly listed in the change or the targetIds of all currently
	* active targets.
	*/ forEachTarget(e, t) {
		e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Be.forEach(((e, n) => {
			this.ze(n) && t(n);
		}));
	}
	/**
	* Handles existence filters and synthesizes deletes for filter mismatches.
	* Targets that are invalidated by filter mismatches are added to
	* `pendingTargetResets`.
	*/ He(e) {
		const t = e.targetId, n = e.me.count, r = this.Je(t);
		if (r) {
			const i = r.target;
			if (__PRIVATE_targetIsDocumentTarget(i)) if (0 === n) {
				const e = new DocumentKey(i.path);
				this.Ue(t, e, MutableDocument.newNoDocument(e, SnapshotVersion.min()));
			} else __PRIVATE_hardAssert(1 === n);
			else {
				const r = this.Ye(t);
				if (r !== n) {
					const n = this.Ze(e), i = n ? this.Xe(n, e, r) : 1;
					if (0 !== i) {
						this.je(t);
						const e = 2 === i ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
						this.Qe = this.Qe.insert(t, e);
					}
					Pe?.et(function __PRIVATE_createExistenceFilterMismatchInfoForTestingHooks(e, t, n, r, i) {
						var s, o, _, a, u, c;
						const l = {
							localCacheCount: e,
							existenceFilterCount: t.count,
							databaseId: n.database,
							projectId: n.projectId
						}, h = t.unchangedNames;
						h && (l.bloomFilter = {
							applied: 0 === i,
							hashCount: null !== (s = null == h ? void 0 : h.hashCount) && void 0 !== s ? s : 0,
							bitmapLength: null !== (a = null === (_ = null === (o = null == h ? void 0 : h.bits) || void 0 === o ? void 0 : o.bitmap) || void 0 === _ ? void 0 : _.length) && void 0 !== a ? a : 0,
							padding: null !== (c = null === (u = null == h ? void 0 : h.bits) || void 0 === u ? void 0 : u.padding) && void 0 !== c ? c : 0,
							mightContain: (e) => {
								var t;
								return null !== (t = null == r ? void 0 : r.mightContain(e)) && void 0 !== t && t;
							}
						});
						return l;
					}(r, e.me, this.Le.tt(), n, i));
				}
			}
		}
	}
	/**
	* Parse the bloom filter from the "unchanged_names" field of an existence
	* filter.
	*/ Ze(e) {
		const t = e.me.unchangedNames;
		if (!t || !t.bits) return null;
		const { bits: { bitmap: n = "", padding: r = 0 }, hashCount: i = 0 } = t;
		let s, o;
		try {
			s = __PRIVATE_normalizeByteString(n).toUint8Array();
		} catch (e) {
			if (e instanceof __PRIVATE_Base64DecodeError) return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed (" + e.message + "); ignoring the bloom filter and falling back to full re-query."), null;
			throw e;
		}
		try {
			o = new BloomFilter(s, r, i);
		} catch (e) {
			return __PRIVATE_logWarn(e instanceof __PRIVATE_BloomFilterError ? "BloomFilter error: " : "Applying bloom filter failed: ", e), null;
		}
		return 0 === o.Ie ? null : o;
	}
	/**
	* Apply bloom filter to remove the deleted documents, and return the
	* application status.
	*/ Xe(e, t, n) {
		return t.me.count === n - this.nt(e, t.targetId) ? 0 : 2;
	}
	/**
	* Filter out removed documents based on bloom filter membership result and
	* return number of documents removed.
	*/ nt(e, t) {
		const n = this.Le.getRemoteKeysForTarget(t);
		let r = 0;
		return n.forEach(((n) => {
			const i = this.Le.tt(), s = `projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;
			e.mightContain(s) || (this.Ue(t, n, null), r++);
		})), r;
	}
	/**
	* Converts the currently accumulated state into a remote event at the
	* provided snapshot version. Resets the accumulated changes before returning.
	*/ rt(e) {
		const t = /* @__PURE__ */ new Map();
		this.Be.forEach(((n, r) => {
			const i = this.Je(r);
			if (i) {
				if (n.current && __PRIVATE_targetIsDocumentTarget(i.target)) {
					const t = new DocumentKey(i.target.path);
					null !== this.ke.get(t) || this.it(r, t) || this.Ue(r, t, MutableDocument.newNoDocument(t, e));
				}
				n.be && (t.set(r, n.ve()), n.Ce());
			}
		}));
		let n = __PRIVATE_documentKeySet();
		this.qe.forEach(((e, t) => {
			let r = !0;
			t.forEachWhile(((e) => {
				const t = this.Je(e);
				return !t || "TargetPurposeLimboResolution" === t.purpose || (r = !1, !1);
			})), r && (n = n.add(e));
		})), this.ke.forEach(((t, n) => n.setReadTime(e)));
		const r = new RemoteEvent(e, t, this.Qe, this.ke, n);
		return this.ke = __PRIVATE_mutableDocumentMap(), this.qe = __PRIVATE_documentTargetMap(), this.Qe = new SortedMap(__PRIVATE_primitiveComparator), r;
	}
	/**
	* Adds the provided document to the internal list of document updates and
	* its document key to the given target's mapping.
	*/
	$e(e, t) {
		if (!this.ze(e)) return;
		const n = this.it(e, t.key) ? 2 : 0;
		this.Ge(e).Fe(t.key, n), this.ke = this.ke.insert(t.key, t), this.qe = this.qe.insert(t.key, this.st(t.key).add(e));
	}
	/**
	* Removes the provided document from the target mapping. If the
	* document no longer matches the target, but the document's state is still
	* known (e.g. we know that the document was deleted or we received the change
	* that caused the filter mismatch), the new document can be provided
	* to update the remote document cache.
	*/
	Ue(e, t, n) {
		if (!this.ze(e)) return;
		const r = this.Ge(e);
		this.it(e, t) ? r.Fe(t, 1) : r.Me(t), this.qe = this.qe.insert(t, this.st(t).delete(e)), n && (this.ke = this.ke.insert(t, n));
	}
	removeTarget(e) {
		this.Be.delete(e);
	}
	/**
	* Returns the current count of documents in the target. This includes both
	* the number of documents that the LocalStore considers to be part of the
	* target as well as any accumulated changes.
	*/ Ye(e) {
		const t = this.Ge(e).ve();
		return this.Le.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
	}
	/**
	* Increment the number of acks needed from watch before we can consider the
	* server to be 'in-sync' with the client's active targets.
	*/ xe(e) {
		this.Ge(e).xe();
	}
	Ge(e) {
		let t = this.Be.get(e);
		return t || (t = new __PRIVATE_TargetState(), this.Be.set(e, t)), t;
	}
	st(e) {
		let t = this.qe.get(e);
		return t || (t = new SortedSet(__PRIVATE_primitiveComparator), this.qe = this.qe.insert(e, t)), t;
	}
	/**
	* Verifies that the user is still interested in this target (by calling
	* `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
	* from watch.
	*/ ze(e) {
		const t = null !== this.Je(e);
		return t || __PRIVATE_logDebug("WatchChangeAggregator", "Detected inactive target", e), t;
	}
	/**
	* Returns the TargetData for an active target (i.e. a target that the user
	* is still interested in that has no outstanding target change requests).
	*/ Je(e) {
		const t = this.Be.get(e);
		return t && t.Se ? null : this.Le.ot(e);
	}
	/**
	* Resets the state of a Watch target to its initial state (e.g. sets
	* 'current' to false, clears the resume token and removes its target mapping
	* from all documents).
	*/ je(e) {
		this.Be.set(e, new __PRIVATE_TargetState());
		this.Le.getRemoteKeysForTarget(e).forEach(((t) => {
			this.Ue(e, t, null);
		}));
	}
	/**
	* Returns whether the LocalStore considers the document to be part of the
	* specified target.
	*/ it(e, t) {
		return this.Le.getRemoteKeysForTarget(e).has(t);
	}
};
function __PRIVATE_documentTargetMap() {
	return new SortedMap(DocumentKey.comparator);
}
function __PRIVATE_snapshotChangesMap() {
	return new SortedMap(DocumentKey.comparator);
}
var Te = {
	asc: "ASCENDING",
	desc: "DESCENDING"
}, Ee = {
	"<": "LESS_THAN",
	"<=": "LESS_THAN_OR_EQUAL",
	">": "GREATER_THAN",
	">=": "GREATER_THAN_OR_EQUAL",
	"==": "EQUAL",
	"!=": "NOT_EQUAL",
	"array-contains": "ARRAY_CONTAINS",
	in: "IN",
	"not-in": "NOT_IN",
	"array-contains-any": "ARRAY_CONTAINS_ANY"
}, de = {
	and: "AND",
	or: "OR"
};
/**
* This class generates JsonObject values for the Datastore API suitable for
* sending to either GRPC stub methods or via the JSON/HTTP REST API.
*
* The serializer supports both Protobuf.js and Proto3 JSON formats. By
* setting `useProto3Json` to true, the serializer will use the Proto3 JSON
* format.
*
* For a description of the Proto3 JSON format check
* https://developers.google.com/protocol-buffers/docs/proto3#json
*
* TODO(klimt): We can remove the databaseId argument if we keep the full
* resource name in documents.
*/
var JsonProtoSerializer = class {
	constructor(e, t) {
		this.databaseId = e, this.useProto3Json = t;
	}
};
/**
* Returns a value for a number (or null) that's appropriate to put into
* a google.protobuf.Int32Value proto.
* DO NOT USE THIS FOR ANYTHING ELSE.
* This method cheats. It's typed as returning "number" because that's what
* our generated proto interfaces say Int32Value must be. But GRPC actually
* expects a { value: <number> } struct.
*/
function __PRIVATE_toInt32Proto(e, t) {
	return e.useProto3Json || __PRIVATE_isNullOrUndefined(t) ? t : { value: t };
}
/**
* Returns a number (or null) from a google.protobuf.Int32Value proto.
*/
/**
* Returns a value for a Date that's appropriate to put into a proto.
*/
function toTimestamp(e, t) {
	if (e.useProto3Json) return `${(/* @__PURE__ */ new Date(1e3 * t.seconds)).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`;
	return {
		seconds: "" + t.seconds,
		nanos: t.nanoseconds
	};
}
/**
* Returns a value for bytes that's appropriate to put in a proto.
*
* Visible for testing.
*/
function __PRIVATE_toBytes(e, t) {
	return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
/**
* Returns a ByteString based on the proto string value.
*/ function __PRIVATE_toVersion(e, t) {
	return toTimestamp(e, t.toTimestamp());
}
function __PRIVATE_fromVersion(e) {
	return __PRIVATE_hardAssert(!!e), SnapshotVersion.fromTimestamp(function fromTimestamp(e) {
		const t = __PRIVATE_normalizeTimestamp(e);
		return new Timestamp(t.seconds, t.nanos);
	}(e));
}
function __PRIVATE_toResourceName(e, t) {
	return __PRIVATE_toResourcePath(e, t).canonicalString();
}
function __PRIVATE_toResourcePath(e, t) {
	const n = function __PRIVATE_fullyQualifiedPrefixPath(e) {
		return new ResourcePath([
			"projects",
			e.projectId,
			"databases",
			e.database
		]);
	}(e).child("documents");
	return void 0 === t ? n : n.child(t);
}
function __PRIVATE_fromResourceName(e) {
	const t = ResourcePath.fromString(e);
	return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t)), t;
}
function __PRIVATE_toName(e, t) {
	return __PRIVATE_toResourceName(e.databaseId, t.path);
}
function fromName(e, t) {
	const n = __PRIVATE_fromResourceName(t);
	if (n.get(1) !== e.databaseId.projectId) throw new FirestoreError(D.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
	if (n.get(3) !== e.databaseId.database) throw new FirestoreError(D.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
	return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(n));
}
function __PRIVATE_toQueryPath(e, t) {
	return __PRIVATE_toResourceName(e.databaseId, t);
}
function __PRIVATE_fromQueryPath(e) {
	const t = __PRIVATE_fromResourceName(e);
	return 4 === t.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t);
}
function __PRIVATE_getEncodedDatabaseId(e) {
	return new ResourcePath([
		"projects",
		e.databaseId.projectId,
		"databases",
		e.databaseId.database
	]).canonicalString();
}
function __PRIVATE_extractLocalPathFromResourceName(e) {
	return __PRIVATE_hardAssert(e.length > 4 && "documents" === e.get(4)), e.popFirst(5);
}
/** Creates a Document proto from key and fields (but no create/update time) */ function __PRIVATE_toMutationDocument(e, t, n) {
	return {
		name: __PRIVATE_toName(e, t),
		fields: n.value.mapValue.fields
	};
}
function __PRIVATE_fromDocument(e, t, n) {
	const r = fromName(e, t.name), i = __PRIVATE_fromVersion(t.updateTime), s = t.createTime ? __PRIVATE_fromVersion(t.createTime) : SnapshotVersion.min(), o = new ObjectValue({ mapValue: { fields: t.fields } }), _ = MutableDocument.newFoundDocument(r, i, s, o);
	return n && _.setHasCommittedMutations(), n ? _.setHasCommittedMutations() : _;
}
function __PRIVATE_fromBatchGetDocumentsResponse(e, t) {
	return "found" in t ? function __PRIVATE_fromFound(e, t) {
		__PRIVATE_hardAssert(!!t.found), t.found.name, t.found.updateTime;
		const n = fromName(e, t.found.name), r = __PRIVATE_fromVersion(t.found.updateTime), i = t.found.createTime ? __PRIVATE_fromVersion(t.found.createTime) : SnapshotVersion.min(), s = new ObjectValue({ mapValue: { fields: t.found.fields } });
		return MutableDocument.newFoundDocument(n, r, i, s);
	}(e, t) : "missing" in t ? function __PRIVATE_fromMissing(e, t) {
		__PRIVATE_hardAssert(!!t.missing), __PRIVATE_hardAssert(!!t.readTime);
		const n = fromName(e, t.missing), r = __PRIVATE_fromVersion(t.readTime);
		return MutableDocument.newNoDocument(n, r);
	}(e, t) : fail();
}
function __PRIVATE_fromWatchChange(e, t) {
	let n;
	if ("targetChange" in t) {
		t.targetChange;
		const r = function __PRIVATE_fromWatchTargetChangeState(e) {
			return "NO_CHANGE" === e ? 0 : "ADD" === e ? 1 : "REMOVE" === e ? 2 : "CURRENT" === e ? 3 : "RESET" === e ? 4 : fail();
		}(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], s = function __PRIVATE_fromBytes(e, t) {
			return e.useProto3Json ? (__PRIVATE_hardAssert(void 0 === t || "string" == typeof t), ByteString.fromBase64String(t || "")) : (__PRIVATE_hardAssert(void 0 === t || t instanceof Buffer || t instanceof Uint8Array), ByteString.fromUint8Array(t || new Uint8Array()));
		}(e, t.targetChange.resumeToken), o = t.targetChange.cause;
		n = new __PRIVATE_WatchTargetChange(r, i, s, o && function __PRIVATE_fromRpcStatus(e) {
			return new FirestoreError(void 0 === e.code ? D.UNKNOWN : __PRIVATE_mapCodeFromRpcCode(e.code), e.message || "");
		}(o) || null);
	} else if ("documentChange" in t) {
		t.documentChange;
		const r = t.documentChange;
		r.document, r.document.name, r.document.updateTime;
		const i = fromName(e, r.document.name), s = __PRIVATE_fromVersion(r.document.updateTime), o = r.document.createTime ? __PRIVATE_fromVersion(r.document.createTime) : SnapshotVersion.min(), _ = new ObjectValue({ mapValue: { fields: r.document.fields } }), a = MutableDocument.newFoundDocument(i, s, o, _);
		n = new __PRIVATE_DocumentWatchChange(r.targetIds || [], r.removedTargetIds || [], a.key, a);
	} else if ("documentDelete" in t) {
		t.documentDelete;
		const r = t.documentDelete;
		r.document;
		const i = fromName(e, r.document), s = r.readTime ? __PRIVATE_fromVersion(r.readTime) : SnapshotVersion.min(), o = MutableDocument.newNoDocument(i, s);
		n = new __PRIVATE_DocumentWatchChange([], r.removedTargetIds || [], o.key, o);
	} else if ("documentRemove" in t) {
		t.documentRemove;
		const r = t.documentRemove;
		r.document;
		const i = fromName(e, r.document);
		n = new __PRIVATE_DocumentWatchChange([], r.removedTargetIds || [], i, null);
	} else {
		if (!("filter" in t)) return fail();
		{
			t.filter;
			const e = t.filter;
			e.targetId;
			const { count: r = 0, unchangedNames: i } = e, s = new ExistenceFilter(r, i), o = e.targetId;
			n = new __PRIVATE_ExistenceFilterChange(o, s);
		}
	}
	return n;
}
function toMutation(e, t) {
	let n;
	if (t instanceof __PRIVATE_SetMutation) n = { update: __PRIVATE_toMutationDocument(e, t.key, t.value) };
	else if (t instanceof __PRIVATE_DeleteMutation) n = { delete: __PRIVATE_toName(e, t.key) };
	else if (t instanceof __PRIVATE_PatchMutation) n = {
		update: __PRIVATE_toMutationDocument(e, t.key, t.data),
		updateMask: __PRIVATE_toDocumentMask(t.fieldMask)
	};
	else {
		if (!(t instanceof __PRIVATE_VerifyMutation)) return fail();
		n = { verify: __PRIVATE_toName(e, t.key) };
	}
	return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map(((e) => function __PRIVATE_toFieldTransform(e, t) {
		const n = t.transform;
		if (n instanceof __PRIVATE_ServerTimestampTransform) return {
			fieldPath: t.field.canonicalString(),
			setToServerValue: "REQUEST_TIME"
		};
		if (n instanceof __PRIVATE_ArrayUnionTransformOperation) return {
			fieldPath: t.field.canonicalString(),
			appendMissingElements: { values: n.elements }
		};
		if (n instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
			fieldPath: t.field.canonicalString(),
			removeAllFromArray: { values: n.elements }
		};
		if (n instanceof __PRIVATE_NumericIncrementTransformOperation) return {
			fieldPath: t.field.canonicalString(),
			increment: n.Pe
		};
		throw fail();
	}(0, e)))), t.precondition.isNone || (n.currentDocument = function __PRIVATE_toPrecondition(e, t) {
		return void 0 !== t.updateTime ? { updateTime: __PRIVATE_toVersion(e, t.updateTime) } : void 0 !== t.exists ? { exists: t.exists } : fail();
	}(e, t.precondition)), n;
}
function __PRIVATE_fromMutation(e, t) {
	const n = t.currentDocument ? function __PRIVATE_fromPrecondition(e) {
		return void 0 !== e.updateTime ? Precondition.updateTime(__PRIVATE_fromVersion(e.updateTime)) : void 0 !== e.exists ? Precondition.exists(e.exists) : Precondition.none();
	}(t.currentDocument) : Precondition.none(), r = t.updateTransforms ? t.updateTransforms.map(((t) => function __PRIVATE_fromFieldTransform(e, t) {
		let n = null;
		if ("setToServerValue" in t) __PRIVATE_hardAssert("REQUEST_TIME" === t.setToServerValue), n = new __PRIVATE_ServerTimestampTransform();
		else if ("appendMissingElements" in t) n = new __PRIVATE_ArrayUnionTransformOperation(t.appendMissingElements.values || []);
		else if ("removeAllFromArray" in t) n = new __PRIVATE_ArrayRemoveTransformOperation(t.removeAllFromArray.values || []);
		else "increment" in t ? n = new __PRIVATE_NumericIncrementTransformOperation(e, t.increment) : fail();
		return new FieldTransform(FieldPath$1.fromServerFormat(t.fieldPath), n);
	}(e, t))) : [];
	if (t.update) {
		t.update.name;
		const i = fromName(e, t.update.name), s = new ObjectValue({ mapValue: { fields: t.update.fields } });
		if (t.updateMask) return new __PRIVATE_PatchMutation(i, s, function __PRIVATE_fromDocumentMask(e) {
			return new FieldMask((e.fieldPaths || []).map(((e) => FieldPath$1.fromServerFormat(e))));
		}(t.updateMask), n, r);
		return new __PRIVATE_SetMutation(i, s, n, r);
	}
	if (t.delete) return new __PRIVATE_DeleteMutation(fromName(e, t.delete), n);
	if (t.verify) return new __PRIVATE_VerifyMutation(fromName(e, t.verify), n);
	return fail();
}
function __PRIVATE_fromWriteResults(e, t) {
	return e && e.length > 0 ? (__PRIVATE_hardAssert(void 0 !== t), e.map(((e) => function __PRIVATE_fromWriteResult(e, t) {
		let n = e.updateTime ? __PRIVATE_fromVersion(e.updateTime) : __PRIVATE_fromVersion(t);
		return n.isEqual(SnapshotVersion.min()) && (n = __PRIVATE_fromVersion(t)), new MutationResult(n, e.transformResults || []);
	}(e, t)))) : [];
}
function __PRIVATE_toDocumentsTarget(e, t) {
	return { documents: [__PRIVATE_toQueryPath(e, t.path)] };
}
function __PRIVATE_toQueryTarget(e, t) {
	const n = { structuredQuery: {} }, r = t.path;
	let i;
	null !== t.collectionGroup ? (i = r, n.structuredQuery.from = [{
		collectionId: t.collectionGroup,
		allDescendants: !0
	}]) : (i = r.popLast(), n.structuredQuery.from = [{ collectionId: r.lastSegment() }]), n.parent = __PRIVATE_toQueryPath(e, i);
	const s = function __PRIVATE_toFilters(e) {
		if (0 === e.length) return;
		return __PRIVATE_toFilter(CompositeFilter.create(e, "and"));
	}(t.filters);
	s && (n.structuredQuery.where = s);
	const o = function __PRIVATE_toOrder(e) {
		if (0 === e.length) return;
		return e.map(((e) => function __PRIVATE_toPropertyOrder(e) {
			return {
				field: __PRIVATE_toFieldPathReference(e.field),
				direction: __PRIVATE_toDirection(e.dir)
			};
		}(e)));
	}(t.orderBy);
	o && (n.structuredQuery.orderBy = o);
	const _ = __PRIVATE_toInt32Proto(e, t.limit);
	return null !== _ && (n.structuredQuery.limit = _), t.startAt && (n.structuredQuery.startAt = function __PRIVATE_toStartAtCursor(e) {
		return {
			before: e.inclusive,
			values: e.position
		};
	}(t.startAt)), t.endAt && (n.structuredQuery.endAt = function __PRIVATE_toEndAtCursor(e) {
		return {
			before: !e.inclusive,
			values: e.position
		};
	}(t.endAt)), {
		_t: n,
		parent: i
	};
}
function __PRIVATE_toRunAggregationQueryRequest(e, t, n, r) {
	const { _t: i, parent: s } = __PRIVATE_toQueryTarget(e, t), o = {}, _ = [];
	let a = 0;
	return n.forEach(((e) => {
		const t = r ? e.alias : "aggregate_" + a++;
		o[t] = e.alias, "count" === e.aggregateType ? _.push({
			alias: t,
			count: {}
		}) : "avg" === e.aggregateType ? _.push({
			alias: t,
			avg: { field: __PRIVATE_toFieldPathReference(e.fieldPath) }
		}) : "sum" === e.aggregateType && _.push({
			alias: t,
			sum: { field: __PRIVATE_toFieldPathReference(e.fieldPath) }
		});
	})), {
		request: {
			structuredAggregationQuery: {
				aggregations: _,
				structuredQuery: i.structuredQuery
			},
			parent: i.parent
		},
		ut: o,
		parent: s
	};
}
function __PRIVATE_convertQueryTargetToQuery(e) {
	let t = __PRIVATE_fromQueryPath(e.parent);
	const n = e.structuredQuery, r = n.from ? n.from.length : 0;
	let i = null;
	if (r > 0) {
		__PRIVATE_hardAssert(1 === r);
		const e = n.from[0];
		e.allDescendants ? i = e.collectionId : t = t.child(e.collectionId);
	}
	let s = [];
	n.where && (s = function __PRIVATE_fromFilters(e) {
		const t = __PRIVATE_fromFilter(e);
		if (t instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t)) return t.getFilters();
		return [t];
	}(n.where));
	let o = [];
	n.orderBy && (o = function __PRIVATE_fromOrder(e) {
		return e.map(((e) => function __PRIVATE_fromPropertyOrder(e) {
			return new OrderBy(__PRIVATE_fromFieldPathReference(e.field), function __PRIVATE_fromDirection(e) {
				switch (e) {
					case "ASCENDING": return "asc";
					case "DESCENDING": return "desc";
					default: return;
				}
			}(e.direction));
		}(e)));
	}(n.orderBy));
	let _ = null;
	n.limit && (_ = function __PRIVATE_fromInt32Proto(e) {
		let t;
		return t = "object" == typeof e ? e.value : e, __PRIVATE_isNullOrUndefined(t) ? null : t;
	}(n.limit));
	let a = null;
	n.startAt && (a = function __PRIVATE_fromStartAtCursor(e) {
		const t = !!e.before;
		return new Bound(e.values || [], t);
	}(n.startAt));
	let u = null;
	return n.endAt && (u = function __PRIVATE_fromEndAtCursor(e) {
		const t = !e.before;
		return new Bound(e.values || [], t);
	}(n.endAt)), __PRIVATE_newQuery(t, i, o, s, _, "F", a, u);
}
function __PRIVATE_toListenRequestLabels(e, t) {
	const n = function __PRIVATE_toLabel(e) {
		switch (e) {
			case "TargetPurposeListen": return null;
			case "TargetPurposeExistenceFilterMismatch": return "existence-filter-mismatch";
			case "TargetPurposeExistenceFilterMismatchBloom": return "existence-filter-mismatch-bloom";
			case "TargetPurposeLimboResolution": return "limbo-document";
			default: return fail();
		}
	}(t.purpose);
	return null == n ? null : { "goog-listen-tags": n };
}
function __PRIVATE_fromFilter(e) {
	return void 0 !== e.unaryFilter ? function __PRIVATE_fromUnaryFilter(e) {
		switch (e.unaryFilter.op) {
			case "IS_NAN":
				const t = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
				return FieldFilter.create(t, "==", { doubleValue: NaN });
			case "IS_NULL":
				const n = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
				return FieldFilter.create(n, "==", { nullValue: "NULL_VALUE" });
			case "IS_NOT_NAN":
				const r = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
				return FieldFilter.create(r, "!=", { doubleValue: NaN });
			case "IS_NOT_NULL":
				const i = __PRIVATE_fromFieldPathReference(e.unaryFilter.field);
				return FieldFilter.create(i, "!=", { nullValue: "NULL_VALUE" });
			default: return fail();
		}
	}(e) : void 0 !== e.fieldFilter ? function __PRIVATE_fromFieldFilter(e) {
		return FieldFilter.create(__PRIVATE_fromFieldPathReference(e.fieldFilter.field), function __PRIVATE_fromOperatorName(e) {
			switch (e) {
				case "EQUAL": return "==";
				case "NOT_EQUAL": return "!=";
				case "GREATER_THAN": return ">";
				case "GREATER_THAN_OR_EQUAL": return ">=";
				case "LESS_THAN": return "<";
				case "LESS_THAN_OR_EQUAL": return "<=";
				case "ARRAY_CONTAINS": return "array-contains";
				case "IN": return "in";
				case "NOT_IN": return "not-in";
				case "ARRAY_CONTAINS_ANY": return "array-contains-any";
				default: return fail();
			}
		}(e.fieldFilter.op), e.fieldFilter.value);
	}(e) : void 0 !== e.compositeFilter ? function __PRIVATE_fromCompositeFilter(e) {
		return CompositeFilter.create(e.compositeFilter.filters.map(((e) => __PRIVATE_fromFilter(e))), function __PRIVATE_fromCompositeOperatorName(e) {
			switch (e) {
				case "AND": return "and";
				case "OR": return "or";
				default: return fail();
			}
		}(e.compositeFilter.op));
	}(e) : fail();
}
function __PRIVATE_toDirection(e) {
	return Te[e];
}
function __PRIVATE_toOperatorName(e) {
	return Ee[e];
}
function __PRIVATE_toCompositeOperatorName(e) {
	return de[e];
}
function __PRIVATE_toFieldPathReference(e) {
	return { fieldPath: e.canonicalString() };
}
function __PRIVATE_fromFieldPathReference(e) {
	return FieldPath$1.fromServerFormat(e.fieldPath);
}
function __PRIVATE_toFilter(e) {
	return e instanceof FieldFilter ? function __PRIVATE_toUnaryOrFieldFilter(e) {
		if ("==" === e.op) {
			if (__PRIVATE_isNanValue(e.value)) return { unaryFilter: {
				field: __PRIVATE_toFieldPathReference(e.field),
				op: "IS_NAN"
			} };
			if (__PRIVATE_isNullValue(e.value)) return { unaryFilter: {
				field: __PRIVATE_toFieldPathReference(e.field),
				op: "IS_NULL"
			} };
		} else if ("!=" === e.op) {
			if (__PRIVATE_isNanValue(e.value)) return { unaryFilter: {
				field: __PRIVATE_toFieldPathReference(e.field),
				op: "IS_NOT_NAN"
			} };
			if (__PRIVATE_isNullValue(e.value)) return { unaryFilter: {
				field: __PRIVATE_toFieldPathReference(e.field),
				op: "IS_NOT_NULL"
			} };
		}
		return { fieldFilter: {
			field: __PRIVATE_toFieldPathReference(e.field),
			op: __PRIVATE_toOperatorName(e.op),
			value: e.value
		} };
	}(e) : e instanceof CompositeFilter ? function __PRIVATE_toCompositeFilter(e) {
		const t = e.getFilters().map(((e) => __PRIVATE_toFilter(e)));
		if (1 === t.length) return t[0];
		return { compositeFilter: {
			op: __PRIVATE_toCompositeOperatorName(e.op),
			filters: t
		} };
	}(e) : fail();
}
function __PRIVATE_toDocumentMask(e) {
	const t = [];
	return e.fields.forEach(((e) => t.push(e.canonicalString()))), { fieldPaths: t };
}
function __PRIVATE_isValidResourceName(e) {
	return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An immutable set of metadata that the local store tracks for each target.
*/ var TargetData = class TargetData {
	constructor(e, t, n, r, i = SnapshotVersion.min(), s = SnapshotVersion.min(), o = ByteString.EMPTY_BYTE_STRING, _ = null) {
		this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = s, this.resumeToken = o, this.expectedCount = _;
	}
	/** Creates a new target data instance with an updated sequence number. */ withSequenceNumber(e) {
		return new TargetData(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
	}
	/**
	* Creates a new target data instance with an updated resume token and
	* snapshot version.
	*/ withResumeToken(e, t) {
		return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, t, this.lastLimboFreeSnapshotVersion, e, null);
	}
	/**
	* Creates a new target data instance with an updated expected count.
	*/ withExpectedCount(e) {
		return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e);
	}
	/**
	* Creates a new target data instance with an updated last limbo free
	* snapshot version number.
	*/ withLastLimboFreeSnapshotVersion(e) {
		return new TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Serializer for values stored in the LocalStore. */ var __PRIVATE_LocalSerializer = class {
	constructor(e) {
		this.ct = e;
	}
};
/** Decodes a remote document from storage locally to a Document. */ function __PRIVATE_fromDbRemoteDocument(e, t) {
	let n;
	if (t.document) n = __PRIVATE_fromDocument(e.ct, t.document, !!t.hasCommittedMutations);
	else if (t.noDocument) {
		const e = DocumentKey.fromSegments(t.noDocument.path), r = __PRIVATE_fromDbTimestamp(t.noDocument.readTime);
		n = MutableDocument.newNoDocument(e, r), t.hasCommittedMutations && n.setHasCommittedMutations();
	} else {
		if (!t.unknownDocument) return fail();
		{
			const e = DocumentKey.fromSegments(t.unknownDocument.path), r = __PRIVATE_fromDbTimestamp(t.unknownDocument.version);
			n = MutableDocument.newUnknownDocument(e, r);
		}
	}
	return t.readTime && n.setReadTime(function __PRIVATE_fromDbTimestampKey(e) {
		const t = new Timestamp(e[0], e[1]);
		return SnapshotVersion.fromTimestamp(t);
	}(t.readTime)), n;
}
/** Encodes a document for storage locally. */ function __PRIVATE_toDbRemoteDocument(e, t) {
	const n = t.key, r = {
		prefixPath: n.getCollectionPath().popLast().toArray(),
		collectionGroup: n.collectionGroup,
		documentId: n.path.lastSegment(),
		readTime: __PRIVATE_toDbTimestampKey(t.readTime),
		hasCommittedMutations: t.hasCommittedMutations
	};
	if (t.isFoundDocument()) r.document = function __PRIVATE_toDocument(e, t) {
		return {
			name: __PRIVATE_toName(e, t.key),
			fields: t.data.value.mapValue.fields,
			updateTime: toTimestamp(e, t.version.toTimestamp()),
			createTime: toTimestamp(e, t.createTime.toTimestamp())
		};
	}(e.ct, t);
	else if (t.isNoDocument()) r.noDocument = {
		path: n.path.toArray(),
		readTime: __PRIVATE_toDbTimestamp(t.version)
	};
	else {
		if (!t.isUnknownDocument()) return fail();
		r.unknownDocument = {
			path: n.path.toArray(),
			version: __PRIVATE_toDbTimestamp(t.version)
		};
	}
	return r;
}
function __PRIVATE_toDbTimestampKey(e) {
	const t = e.toTimestamp();
	return [t.seconds, t.nanoseconds];
}
function __PRIVATE_toDbTimestamp(e) {
	const t = e.toTimestamp();
	return {
		seconds: t.seconds,
		nanoseconds: t.nanoseconds
	};
}
function __PRIVATE_fromDbTimestamp(e) {
	const t = new Timestamp(e.seconds, e.nanoseconds);
	return SnapshotVersion.fromTimestamp(t);
}
/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */
function __PRIVATE_fromDbMutationBatch(e, t) {
	const n = (t.baseMutations || []).map(((t) => __PRIVATE_fromMutation(e.ct, t)));
	for (let e = 0; e < t.mutations.length - 1; ++e) {
		const n = t.mutations[e];
		if (e + 1 < t.mutations.length && void 0 !== t.mutations[e + 1].transform) n.updateTransforms = t.mutations[e + 1].transform.fieldTransforms, t.mutations.splice(e + 1, 1), ++e;
	}
	const r = t.mutations.map(((t) => __PRIVATE_fromMutation(e.ct, t))), i = Timestamp.fromMillis(t.localWriteTimeMs);
	return new MutationBatch(t.batchId, i, n, r);
}
/** Decodes a DbTarget into TargetData */ function __PRIVATE_fromDbTarget(e) {
	const t = __PRIVATE_fromDbTimestamp(e.readTime), n = void 0 !== e.lastLimboFreeSnapshotVersion ? __PRIVATE_fromDbTimestamp(e.lastLimboFreeSnapshotVersion) : SnapshotVersion.min();
	let r;
	return r = function __PRIVATE_isDocumentQuery(e) {
		return void 0 !== e.documents;
	}(e.query) ? function __PRIVATE_fromDocumentsTarget(e) {
		return __PRIVATE_hardAssert(1 === e.documents.length), __PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(__PRIVATE_fromQueryPath(e.documents[0])));
	}(e.query) : function __PRIVATE_fromQueryTarget(e) {
		return __PRIVATE_queryToTarget(__PRIVATE_convertQueryTargetToQuery(e));
	}(e.query), new TargetData(r, e.targetId, "TargetPurposeListen", e.lastListenSequenceNumber, t, n, ByteString.fromBase64String(e.resumeToken));
}
/** Encodes TargetData into a DbTarget for storage locally. */ function __PRIVATE_toDbTarget(e, t) {
	const n = __PRIVATE_toDbTimestamp(t.snapshotVersion), r = __PRIVATE_toDbTimestamp(t.lastLimboFreeSnapshotVersion);
	let i;
	i = __PRIVATE_targetIsDocumentTarget(t.target) ? __PRIVATE_toDocumentsTarget(e.ct, t.target) : __PRIVATE_toQueryTarget(e.ct, t.target)._t;
	const s = t.resumeToken.toBase64();
	return {
		targetId: t.targetId,
		canonicalId: __PRIVATE_canonifyTarget(t.target),
		readTime: n,
		resumeToken: s,
		lastListenSequenceNumber: t.sequenceNumber,
		lastLimboFreeSnapshotVersion: r,
		query: i
	};
}
/**
* Encodes a `BundledQuery` from bundle proto to a Query object.
*
* This reconstructs the original query used to build the bundle being loaded,
* including features exists only in SDKs (for example: limit-to-last).
*/
function __PRIVATE_fromBundledQuery(e) {
	const t = __PRIVATE_convertQueryTargetToQuery({
		parent: e.parent,
		structuredQuery: e.structuredQuery
	});
	return "LAST" === e.limitType ? __PRIVATE_queryWithLimit(t, t.limit, "L") : t;
}
/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/** Encodes a DbDocumentOverlay object to an Overlay model object. */
function __PRIVATE_fromDbDocumentOverlay(e, t) {
	return new Overlay(t.largestBatchId, __PRIVATE_fromMutation(e.ct, t.overlayMutation));
}
/** Decodes an Overlay model object into a DbDocumentOverlay object. */
/**
* Returns the DbDocumentOverlayKey corresponding to the given user and
* document key.
*/
function __PRIVATE_toDbDocumentOverlayKey(e, t) {
	const n = t.path.lastSegment();
	return [
		e,
		__PRIVATE_encodeResourcePath(t.path.popLast()),
		n
	];
}
function __PRIVATE_toDbIndexState(e, t, n, r) {
	return {
		indexId: e,
		uid: t,
		sequenceNumber: n,
		readTime: __PRIVATE_toDbTimestamp(r.readTime),
		documentKey: __PRIVATE_encodeResourcePath(r.documentKey.path),
		largestBatchId: r.largestBatchId
	};
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_IndexedDbBundleCache = class {
	getBundleMetadata(e, t) {
		return __PRIVATE_bundlesStore(e).get(t).next(((e) => {
			if (e) return function __PRIVATE_fromDbBundle(e) {
				return {
					id: e.bundleId,
					createTime: __PRIVATE_fromDbTimestamp(e.createTime),
					version: e.version
				};
			}(e);
		}));
	}
	saveBundleMetadata(e, t) {
		return __PRIVATE_bundlesStore(e).put(function __PRIVATE_toDbBundle(e) {
			return {
				bundleId: e.id,
				createTime: __PRIVATE_toDbTimestamp(__PRIVATE_fromVersion(e.createTime)),
				version: e.version
			};
		}(t));
	}
	getNamedQuery(e, t) {
		return __PRIVATE_namedQueriesStore(e).get(t).next(((e) => {
			if (e) return function __PRIVATE_fromDbNamedQuery(e) {
				return {
					name: e.name,
					query: __PRIVATE_fromBundledQuery(e.bundledQuery),
					readTime: __PRIVATE_fromDbTimestamp(e.readTime)
				};
			}(e);
		}));
	}
	saveNamedQuery(e, t) {
		return __PRIVATE_namedQueriesStore(e).put(function __PRIVATE_toDbNamedQuery(e) {
			return {
				name: e.name,
				readTime: __PRIVATE_toDbTimestamp(__PRIVATE_fromVersion(e.readTime)),
				bundledQuery: e.bundledQuery
			};
		}(t));
	}
};
/**
* Helper to get a typed SimpleDbStore for the bundles object store.
*/ function __PRIVATE_bundlesStore(e) {
	return __PRIVATE_getStore(e, "bundles");
}
/**
* Helper to get a typed SimpleDbStore for the namedQueries object store.
*/ function __PRIVATE_namedQueriesStore(e) {
	return __PRIVATE_getStore(e, "namedQueries");
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Implementation of DocumentOverlayCache using IndexedDb.
*/ var __PRIVATE_IndexedDbDocumentOverlayCache = class __PRIVATE_IndexedDbDocumentOverlayCache {
	/**
	* @param serializer - The document serializer.
	* @param userId - The userId for which we are accessing overlays.
	*/
	constructor(e, t) {
		this.serializer = e, this.userId = t;
	}
	static lt(e, t) {
		return new __PRIVATE_IndexedDbDocumentOverlayCache(e, t.uid || "");
	}
	getOverlay(e, t) {
		return __PRIVATE_documentOverlayStore(e).get(__PRIVATE_toDbDocumentOverlayKey(this.userId, t)).next(((e) => e ? __PRIVATE_fromDbDocumentOverlay(this.serializer, e) : null));
	}
	getOverlays(e, t) {
		const n = __PRIVATE_newOverlayMap();
		return PersistencePromise.forEach(t, ((t) => this.getOverlay(e, t).next(((e) => {
			null !== e && n.set(t, e);
		})))).next((() => n));
	}
	saveOverlays(e, t, n) {
		const r = [];
		return n.forEach(((n, i) => {
			const s = new Overlay(t, i);
			r.push(this.ht(e, s));
		})), PersistencePromise.waitFor(r);
	}
	removeOverlaysForBatchId(e, t, n) {
		const r = /* @__PURE__ */ new Set();
		t.forEach(((e) => r.add(__PRIVATE_encodeResourcePath(e.getCollectionPath()))));
		const i = [];
		return r.forEach(((t) => {
			const r = IDBKeyRange.bound([
				this.userId,
				t,
				n
			], [
				this.userId,
				t,
				n + 1
			], !1, !0);
			i.push(__PRIVATE_documentOverlayStore(e).j("collectionPathOverlayIndex", r));
		})), PersistencePromise.waitFor(i);
	}
	getOverlaysForCollection(e, t, n) {
		const r = __PRIVATE_newOverlayMap(), i = __PRIVATE_encodeResourcePath(t), s = IDBKeyRange.bound([
			this.userId,
			i,
			n
		], [
			this.userId,
			i,
			Number.POSITIVE_INFINITY
		], !0);
		return __PRIVATE_documentOverlayStore(e).U("collectionPathOverlayIndex", s).next(((e) => {
			for (const t of e) {
				const e = __PRIVATE_fromDbDocumentOverlay(this.serializer, t);
				r.set(e.getKey(), e);
			}
			return r;
		}));
	}
	getOverlaysForCollectionGroup(e, t, n, r) {
		const i = __PRIVATE_newOverlayMap();
		let s;
		const o = IDBKeyRange.bound([
			this.userId,
			t,
			n
		], [
			this.userId,
			t,
			Number.POSITIVE_INFINITY
		], !0);
		return __PRIVATE_documentOverlayStore(e).J({
			index: "collectionGroupOverlayIndex",
			range: o
		}, ((e, t, n) => {
			const o = __PRIVATE_fromDbDocumentOverlay(this.serializer, t);
			i.size() < r || o.largestBatchId === s ? (i.set(o.getKey(), o), s = o.largestBatchId) : n.done();
		})).next((() => i));
	}
	ht(e, t) {
		return __PRIVATE_documentOverlayStore(e).put(function __PRIVATE_toDbDocumentOverlay(e, t, n) {
			const [r, i, s] = __PRIVATE_toDbDocumentOverlayKey(t, n.mutation.key);
			return {
				userId: t,
				collectionPath: i,
				documentId: s,
				collectionGroup: n.mutation.key.getCollectionGroup(),
				largestBatchId: n.largestBatchId,
				overlayMutation: toMutation(e.ct, n.mutation)
			};
		}(this.serializer, this.userId, t));
	}
};
/**
* Helper to get a typed SimpleDbStore for the document overlay object store.
*/ function __PRIVATE_documentOverlayStore(e) {
	return __PRIVATE_getStore(e, "documentOverlays");
}
/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_IndexedDbGlobalsCache = class {
	Pt(e) {
		return __PRIVATE_getStore(e, "globals");
	}
	getSessionToken(e) {
		return this.Pt(e).get("sessionToken").next(((e) => {
			const t = null == e ? void 0 : e.value;
			return t ? ByteString.fromUint8Array(t) : ByteString.EMPTY_BYTE_STRING;
		}));
	}
	setSessionToken(e, t) {
		return this.Pt(e).put({
			name: "sessionToken",
			value: t.toUint8Array()
		});
	}
};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Firestore index value writer.  */
var __PRIVATE_FirestoreIndexValueWriter = class {
	constructor() {}
	/** Writes an index value.  */
	It(e, t) {
		this.Tt(e, t), t.Et();
	}
	Tt(e, t) {
		if ("nullValue" in e) this.dt(t, 5);
		else if ("booleanValue" in e) this.dt(t, 10), t.At(e.booleanValue ? 1 : 0);
		else if ("integerValue" in e) this.dt(t, 15), t.At(__PRIVATE_normalizeNumber(e.integerValue));
		else if ("doubleValue" in e) {
			const n = __PRIVATE_normalizeNumber(e.doubleValue);
			isNaN(n) ? this.dt(t, 13) : (this.dt(t, 15), __PRIVATE_isNegativeZero(n) ? t.At(0) : t.At(n));
		} else if ("timestampValue" in e) {
			let n = e.timestampValue;
			this.dt(t, 20), "string" == typeof n && (n = __PRIVATE_normalizeTimestamp(n)), t.Rt(`${n.seconds || ""}`), t.At(n.nanos || 0);
		} else if ("stringValue" in e) this.Vt(e.stringValue, t), this.ft(t);
		else if ("bytesValue" in e) this.dt(t, 30), t.gt(__PRIVATE_normalizeByteString(e.bytesValue)), this.ft(t);
		else if ("referenceValue" in e) this.yt(e.referenceValue, t);
		else if ("geoPointValue" in e) {
			const n = e.geoPointValue;
			this.dt(t, 45), t.At(n.latitude || 0), t.At(n.longitude || 0);
		} else "mapValue" in e ? __PRIVATE_isMaxValue(e) ? this.dt(t, Number.MAX_SAFE_INTEGER) : __PRIVATE_isVectorValue(e) ? this.wt(e.mapValue, t) : (this.St(e.mapValue, t), this.ft(t)) : "arrayValue" in e ? (this.bt(e.arrayValue, t), this.ft(t)) : fail();
	}
	Vt(e, t) {
		this.dt(t, 25), this.Dt(e, t);
	}
	Dt(e, t) {
		t.Rt(e);
	}
	St(e, t) {
		const n = e.fields || {};
		this.dt(t, 55);
		for (const e of Object.keys(n)) this.Vt(e, t), this.Tt(n[e], t);
	}
	wt(e, t) {
		var n, r;
		const i = e.fields || {};
		this.dt(t, 53);
		const s = "value", o = (null === (r = null === (n = i[s].arrayValue) || void 0 === n ? void 0 : n.values) || void 0 === r ? void 0 : r.length) || 0;
		this.dt(t, 15), t.At(__PRIVATE_normalizeNumber(o)), this.Vt(s, t), this.Tt(i[s], t);
	}
	bt(e, t) {
		const n = e.values || [];
		this.dt(t, 50);
		for (const e of n) this.Tt(e, t);
	}
	yt(e, t) {
		this.dt(t, 37);
		DocumentKey.fromName(e).path.forEach(((e) => {
			this.dt(t, 60), this.Dt(e, t);
		}));
	}
	dt(e, t) {
		e.At(t);
	}
	ft(e) {
		e.At(2);
	}
};
__PRIVATE_FirestoreIndexValueWriter.vt = new __PRIVATE_FirestoreIndexValueWriter();
/**
* Counts the number of zeros in a byte.
*
* Visible for testing.
*/
function __PRIVATE_numberOfLeadingZerosInByte(e) {
	if (0 === e) return 8;
	let t = 0;
	return !(e >> 4) && (t += 4, e <<= 4), !(e >> 6) && (t += 2, e <<= 2), !(e >> 7) && (t += 1), t;
}
/** Counts the number of leading zeros in the given byte array. */
/**
* Returns the number of bytes required to store "value". Leading zero bytes
* are skipped.
*/
function __PRIVATE_unsignedNumLength(e) {
	const t = 64 - function __PRIVATE_numberOfLeadingZeros(e) {
		let t = 0;
		for (let n = 0; n < 8; ++n) {
			const r = __PRIVATE_numberOfLeadingZerosInByte(255 & e[n]);
			if (t += r, 8 !== r) break;
		}
		return t;
	}(e);
	return Math.ceil(t / 8);
}
/**
* OrderedCodeWriter is a minimal-allocation implementation of the writing
* behavior defined by the backend.
*
* The code is ported from its Java counterpart.
*/ var __PRIVATE_OrderedCodeWriter = class {
	constructor() {
		this.buffer = new Uint8Array(1024), this.position = 0;
	}
	Ct(e) {
		const t = e[Symbol.iterator]();
		let n = t.next();
		for (; !n.done;) this.Ft(n.value), n = t.next();
		this.Mt();
	}
	xt(e) {
		const t = e[Symbol.iterator]();
		let n = t.next();
		for (; !n.done;) this.Ot(n.value), n = t.next();
		this.Nt();
	}
	/** Writes utf8 bytes into this byte sequence, ascending. */ Lt(e) {
		for (const t of e) {
			const e = t.charCodeAt(0);
			if (e < 128) this.Ft(e);
			else if (e < 2048) this.Ft(960 | e >>> 6), this.Ft(128 | 63 & e);
			else if (t < "\ud800" || "\udbff" < t) this.Ft(480 | e >>> 12), this.Ft(128 | 63 & e >>> 6), this.Ft(128 | 63 & e);
			else {
				const e = t.codePointAt(0);
				this.Ft(240 | e >>> 18), this.Ft(128 | 63 & e >>> 12), this.Ft(128 | 63 & e >>> 6), this.Ft(128 | 63 & e);
			}
		}
		this.Mt();
	}
	/** Writes utf8 bytes into this byte sequence, descending */ Bt(e) {
		for (const t of e) {
			const e = t.charCodeAt(0);
			if (e < 128) this.Ot(e);
			else if (e < 2048) this.Ot(960 | e >>> 6), this.Ot(128 | 63 & e);
			else if (t < "\ud800" || "\udbff" < t) this.Ot(480 | e >>> 12), this.Ot(128 | 63 & e >>> 6), this.Ot(128 | 63 & e);
			else {
				const e = t.codePointAt(0);
				this.Ot(240 | e >>> 18), this.Ot(128 | 63 & e >>> 12), this.Ot(128 | 63 & e >>> 6), this.Ot(128 | 63 & e);
			}
		}
		this.Nt();
	}
	kt(e) {
		const t = this.qt(e), n = __PRIVATE_unsignedNumLength(t);
		this.Qt(1 + n), this.buffer[this.position++] = 255 & n;
		for (let e = t.length - n; e < t.length; ++e) this.buffer[this.position++] = 255 & t[e];
	}
	Kt(e) {
		const t = this.qt(e), n = __PRIVATE_unsignedNumLength(t);
		this.Qt(1 + n), this.buffer[this.position++] = ~(255 & n);
		for (let e = t.length - n; e < t.length; ++e) this.buffer[this.position++] = ~(255 & t[e]);
	}
	/**
	* Writes the "infinity" byte sequence that sorts after all other byte
	* sequences written in ascending order.
	*/ $t() {
		this.Ut(255), this.Ut(255);
	}
	/**
	* Writes the "infinity" byte sequence that sorts before all other byte
	* sequences written in descending order.
	*/ Wt() {
		this.Gt(255), this.Gt(255);
	}
	/**
	* Resets the buffer such that it is the same as when it was newly
	* constructed.
	*/ reset() {
		this.position = 0;
	}
	seed(e) {
		this.Qt(e.length), this.buffer.set(e, this.position), this.position += e.length;
	}
	/** Makes a copy of the encoded bytes in this buffer.  */ zt() {
		return this.buffer.slice(0, this.position);
	}
	/**
	* Encodes `val` into an encoding so that the order matches the IEEE 754
	* floating-point comparison results with the following exceptions:
	*   -0.0 < 0.0
	*   all non-NaN < NaN
	*   NaN = NaN
	*/ qt(e) {
		const t = function __PRIVATE_doubleToLongBits(e) {
			const t = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
			return t.setFloat64(0, e, !1), new Uint8Array(t.buffer);
		}(e), n = 0 != (128 & t[0]);
		t[0] ^= n ? 255 : 128;
		for (let e = 1; e < t.length; ++e) t[e] ^= n ? 255 : 0;
		return t;
	}
	/** Writes a single byte ascending to the buffer. */ Ft(e) {
		const t = 255 & e;
		0 === t ? (this.Ut(0), this.Ut(255)) : 255 === t ? (this.Ut(255), this.Ut(0)) : this.Ut(t);
	}
	/** Writes a single byte descending to the buffer.  */ Ot(e) {
		const t = 255 & e;
		0 === t ? (this.Gt(0), this.Gt(255)) : 255 === t ? (this.Gt(255), this.Gt(0)) : this.Gt(e);
	}
	Mt() {
		this.Ut(0), this.Ut(1);
	}
	Nt() {
		this.Gt(0), this.Gt(1);
	}
	Ut(e) {
		this.Qt(1), this.buffer[this.position++] = e;
	}
	Gt(e) {
		this.Qt(1), this.buffer[this.position++] = ~e;
	}
	Qt(e) {
		const t = e + this.position;
		if (t <= this.buffer.length) return;
		let n = 2 * this.buffer.length;
		n < t && (n = t);
		const r = new Uint8Array(n);
		r.set(this.buffer), this.buffer = r;
	}
};
var __PRIVATE_AscendingIndexByteEncoder = class {
	constructor(e) {
		this.jt = e;
	}
	gt(e) {
		this.jt.Ct(e);
	}
	Rt(e) {
		this.jt.Lt(e);
	}
	At(e) {
		this.jt.kt(e);
	}
	Et() {
		this.jt.$t();
	}
};
var __PRIVATE_DescendingIndexByteEncoder = class {
	constructor(e) {
		this.jt = e;
	}
	gt(e) {
		this.jt.xt(e);
	}
	Rt(e) {
		this.jt.Bt(e);
	}
	At(e) {
		this.jt.Kt(e);
	}
	Et() {
		this.jt.Wt();
	}
};
/**
* Implements `DirectionalIndexByteEncoder` using `OrderedCodeWriter` for the
* actual encoding.
*/ var __PRIVATE_IndexByteEncoder = class {
	constructor() {
		this.jt = new __PRIVATE_OrderedCodeWriter(), this.Ht = new __PRIVATE_AscendingIndexByteEncoder(this.jt), this.Jt = new __PRIVATE_DescendingIndexByteEncoder(this.jt);
	}
	seed(e) {
		this.jt.seed(e);
	}
	Yt(e) {
		return 0 === e ? this.Ht : this.Jt;
	}
	zt() {
		return this.jt.zt();
	}
	reset() {
		this.jt.reset();
	}
};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Represents an index entry saved by the SDK in persisted storage. */ var __PRIVATE_IndexEntry = class __PRIVATE_IndexEntry {
	constructor(e, t, n, r) {
		this.indexId = e, this.documentKey = t, this.arrayValue = n, this.directionalValue = r;
	}
	/**
	* Returns an IndexEntry entry that sorts immediately after the current
	* directional value.
	*/ Zt() {
		const e = this.directionalValue.length, t = 0 === e || 255 === this.directionalValue[e - 1] ? e + 1 : e, n = new Uint8Array(t);
		return n.set(this.directionalValue, 0), t !== e ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new __PRIVATE_IndexEntry(this.indexId, this.documentKey, this.arrayValue, n);
	}
};
function __PRIVATE_indexEntryComparator(e, t) {
	let n = e.indexId - t.indexId;
	return 0 !== n ? n : (n = __PRIVATE_compareByteArrays(e.arrayValue, t.arrayValue), 0 !== n ? n : (n = __PRIVATE_compareByteArrays(e.directionalValue, t.directionalValue), 0 !== n ? n : DocumentKey.comparator(e.documentKey, t.documentKey)));
}
function __PRIVATE_compareByteArrays(e, t) {
	for (let n = 0; n < e.length && n < t.length; ++n) {
		const r = e[n] - t[n];
		if (0 !== r) return r;
	}
	return e.length - t.length;
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A light query planner for Firestore.
*
* This class matches a `FieldIndex` against a Firestore Query `Target`. It
* determines whether a given index can be used to serve the specified target.
*
* The following table showcases some possible index configurations:
*
* Query                                               | Index
* -----------------------------------------------------------------------------
* where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
* where('a', '==', 'a').where('b', '==', 'b')         | a ASC
* where('a', '==', 'a').where('b', '==', 'b')         | b DESC
* where('a', '>=', 'a').orderBy('a')                  | a ASC
* where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
* where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
* where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
* where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
* where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
*/ var __PRIVATE_TargetIndexMatcher = class {
	constructor(e) {
		this.Xt = new SortedSet(((e, t) => FieldPath$1.comparator(e.field, t.field))), this.collectionId = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment(), this.en = e.orderBy, this.tn = [];
		for (const t of e.filters) {
			const e = t;
			e.isInequality() ? this.Xt = this.Xt.add(e) : this.tn.push(e);
		}
	}
	get nn() {
		return this.Xt.size > 1;
	}
	/**
	* Returns whether the index can be used to serve the TargetIndexMatcher's
	* target.
	*
	* An index is considered capable of serving the target when:
	* - The target uses all index segments for its filters and orderBy clauses.
	*   The target can have additional filter and orderBy clauses, but not
	*   fewer.
	* - If an ArrayContains/ArrayContainsAnyfilter is used, the index must also
	*   have a corresponding `CONTAINS` segment.
	* - All directional index segments can be mapped to the target as a series of
	*   equality filters, a single inequality filter and a series of orderBy
	*   clauses.
	* - The segments that represent the equality filters may appear out of order.
	* - The optional segment for the inequality filter must appear after all
	*   equality segments.
	* - The segments that represent that orderBy clause of the target must appear
	*   in order after all equality and inequality segments. Single orderBy
	*   clauses cannot be skipped, but a continuous orderBy suffix may be
	*   omitted.
	*/ rn(e) {
		if (__PRIVATE_hardAssert(e.collectionGroup === this.collectionId), this.nn) return !1;
		const t = __PRIVATE_fieldIndexGetArraySegment(e);
		if (void 0 !== t && !this.sn(t)) return !1;
		const n = __PRIVATE_fieldIndexGetDirectionalSegments(e);
		let r = /* @__PURE__ */ new Set(), i = 0, s = 0;
		for (; i < n.length && this.sn(n[i]); ++i) r = r.add(n[i].fieldPath.canonicalString());
		if (i === n.length) return !0;
		if (this.Xt.size > 0) {
			const e = this.Xt.getIterator().getNext();
			if (!r.has(e.field.canonicalString())) {
				const t = n[i];
				if (!this.on(e, t) || !this._n(this.en[s++], t)) return !1;
			}
			++i;
		}
		for (; i < n.length; ++i) {
			const e = n[i];
			if (s >= this.en.length || !this._n(this.en[s++], e)) return !1;
		}
		return !0;
	}
	/**
	* Returns a full matched field index for this target. Currently multiple
	* inequality query is not supported so function returns null.
	*/ an() {
		if (this.nn) return null;
		let e = new SortedSet(FieldPath$1.comparator);
		const t = [];
		for (const n of this.tn) {
			if (n.field.isKeyField()) continue;
			if ("array-contains" === n.op || "array-contains-any" === n.op) t.push(new IndexSegment(n.field, 2));
			else {
				if (e.has(n.field)) continue;
				e = e.add(n.field), t.push(new IndexSegment(n.field, 0));
			}
		}
		for (const n of this.en) n.field.isKeyField() || e.has(n.field) || (e = e.add(n.field), t.push(new IndexSegment(n.field, "asc" === n.dir ? 0 : 1)));
		return new FieldIndex(FieldIndex.UNKNOWN_ID, this.collectionId, t, IndexState.empty());
	}
	sn(e) {
		for (const t of this.tn) if (this.on(t, e)) return !0;
		return !1;
	}
	on(e, t) {
		if (void 0 === e || !e.field.isEqual(t.fieldPath)) return !1;
		const n = "array-contains" === e.op || "array-contains-any" === e.op;
		return 2 === t.kind === n;
	}
	_n(e, t) {
		return !!e.field.isEqual(t.fieldPath) && (0 === t.kind && "asc" === e.dir || 1 === t.kind && "desc" === e.dir);
	}
};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provides utility functions that help with boolean logic transformations needed for handling
* complex filters used in queries.
*/
/**
* The `in` filter is only a syntactic sugar over a disjunction of equalities. For instance: `a in
* [1,2,3]` is in fact `a==1 || a==2 || a==3`. This method expands any `in` filter in the given
* input into a disjunction of equality filters and returns the expanded filter.
*/ function __PRIVATE_computeInExpansion(e) {
	var t, n;
	if (__PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), e instanceof FieldFilter) {
		if (e instanceof __PRIVATE_InFilter) {
			const r = (null === (n = null === (t = e.value.arrayValue) || void 0 === t ? void 0 : t.values) || void 0 === n ? void 0 : n.map(((t) => FieldFilter.create(e.field, "==", t)))) || [];
			return CompositeFilter.create(r, "or");
		}
		return e;
	}
	const r = e.filters.map(((e) => __PRIVATE_computeInExpansion(e)));
	return CompositeFilter.create(r, e.op);
}
/**
* Given a composite filter, returns the list of terms in its disjunctive normal form.
*
* <p>Each element in the return value is one term of the resulting DNF. For instance: For the
* input: (A || B) && C, the DNF form is: (A && C) || (B && C), and the return value is a list
* with two elements: a composite filter that performs (A && C), and a composite filter that
* performs (B && C).
*
* @param filter the composite filter to calculate DNF transform for.
* @return the terms in the DNF transform.
*/ function __PRIVATE_getDnfTerms(e) {
	if (0 === e.getFilters().length) return [];
	const t = __PRIVATE_computeDistributedNormalForm(__PRIVATE_computeInExpansion(e));
	return __PRIVATE_hardAssert(__PRIVATE_isDisjunctiveNormalForm(t)), __PRIVATE_isSingleFieldFilter(t) || __PRIVATE_isFlatConjunction(t) ? [t] : t.getFilters();
}
/** Returns true if the given filter is a single field filter. e.g. (a == 10). */ function __PRIVATE_isSingleFieldFilter(e) {
	return e instanceof FieldFilter;
}
/**
* Returns true if the given filter is the conjunction of one or more field filters. e.g. (a == 10
* && b == 20)
*/ function __PRIVATE_isFlatConjunction(e) {
	return e instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(e);
}
/**
* Returns whether or not the given filter is in disjunctive normal form (DNF).
*
* <p>In boolean logic, a disjunctive normal form (DNF) is a canonical normal form of a logical
* formula consisting of a disjunction of conjunctions; it can also be described as an OR of ANDs.
*
* <p>For more info, visit: https://en.wikipedia.org/wiki/Disjunctive_normal_form
*/ function __PRIVATE_isDisjunctiveNormalForm(e) {
	return __PRIVATE_isSingleFieldFilter(e) || __PRIVATE_isFlatConjunction(e) || function __PRIVATE_isDisjunctionOfFieldFiltersAndFlatConjunctions(e) {
		if (e instanceof CompositeFilter && __PRIVATE_compositeFilterIsDisjunction(e)) {
			for (const t of e.getFilters()) if (!__PRIVATE_isSingleFieldFilter(t) && !__PRIVATE_isFlatConjunction(t)) return !1;
			return !0;
		}
		return !1;
	}(e);
}
function __PRIVATE_computeDistributedNormalForm(e) {
	if (__PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), e instanceof FieldFilter) return e;
	if (1 === e.filters.length) return __PRIVATE_computeDistributedNormalForm(e.filters[0]);
	const t = e.filters.map(((e) => __PRIVATE_computeDistributedNormalForm(e)));
	let n = CompositeFilter.create(t, e.op);
	return n = __PRIVATE_applyAssociation(n), __PRIVATE_isDisjunctiveNormalForm(n) ? n : (__PRIVATE_hardAssert(n instanceof CompositeFilter), __PRIVATE_hardAssert(__PRIVATE_compositeFilterIsConjunction(n)), __PRIVATE_hardAssert(n.filters.length > 1), n.filters.reduce(((e, t) => __PRIVATE_applyDistribution(e, t))));
}
function __PRIVATE_applyDistribution(e, t) {
	let n;
	return __PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), __PRIVATE_hardAssert(t instanceof FieldFilter || t instanceof CompositeFilter), n = e instanceof FieldFilter ? t instanceof FieldFilter ? function __PRIVATE_applyDistributionFieldFilters(e, t) {
		return CompositeFilter.create([e, t], "and");
	}(e, t) : __PRIVATE_applyDistributionFieldAndCompositeFilters(e, t) : t instanceof FieldFilter ? __PRIVATE_applyDistributionFieldAndCompositeFilters(t, e) : function __PRIVATE_applyDistributionCompositeFilters(e, t) {
		if (__PRIVATE_hardAssert(e.filters.length > 0 && t.filters.length > 0), __PRIVATE_compositeFilterIsConjunction(e) && __PRIVATE_compositeFilterIsConjunction(t)) return __PRIVATE_compositeFilterWithAddedFilters(e, t.getFilters());
		const n = __PRIVATE_compositeFilterIsDisjunction(e) ? e : t, r = __PRIVATE_compositeFilterIsDisjunction(e) ? t : e, i = n.filters.map(((e) => __PRIVATE_applyDistribution(e, r)));
		return CompositeFilter.create(i, "or");
	}(e, t), __PRIVATE_applyAssociation(n);
}
function __PRIVATE_applyDistributionFieldAndCompositeFilters(e, t) {
	if (__PRIVATE_compositeFilterIsConjunction(t)) return __PRIVATE_compositeFilterWithAddedFilters(t, e.getFilters());
	{
		const n = t.filters.map(((t) => __PRIVATE_applyDistribution(e, t)));
		return CompositeFilter.create(n, "or");
	}
}
/**
* Applies the associativity property to the given filter and returns the resulting filter.
*
* <ul>
*   <li>A | (B | C) == (A | B) | C == (A | B | C)
*   <li>A & (B & C) == (A & B) & C == (A & B & C)
* </ul>
*
* <p>For more info, visit: https://en.wikipedia.org/wiki/Associative_property#Propositional_logic
*/ function __PRIVATE_applyAssociation(e) {
	if (__PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), e instanceof FieldFilter) return e;
	const t = e.getFilters();
	if (1 === t.length) return __PRIVATE_applyAssociation(t[0]);
	if (__PRIVATE_compositeFilterIsFlat(e)) return e;
	const n = t.map(((e) => __PRIVATE_applyAssociation(e))), r = [];
	return n.forEach(((t) => {
		t instanceof FieldFilter ? r.push(t) : t instanceof CompositeFilter && (t.op === e.op ? r.push(...t.filters) : r.push(t));
	})), 1 === r.length ? r[0] : CompositeFilter.create(r, e.op);
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An in-memory implementation of IndexManager.
*/ var __PRIVATE_MemoryIndexManager = class {
	constructor() {
		this.un = new __PRIVATE_MemoryCollectionParentIndex();
	}
	addToCollectionParentIndex(e, t) {
		return this.un.add(t), PersistencePromise.resolve();
	}
	getCollectionParents(e, t) {
		return PersistencePromise.resolve(this.un.getEntries(t));
	}
	addFieldIndex(e, t) {
		return PersistencePromise.resolve();
	}
	deleteFieldIndex(e, t) {
		return PersistencePromise.resolve();
	}
	deleteAllFieldIndexes(e) {
		return PersistencePromise.resolve();
	}
	createTargetIndexes(e, t) {
		return PersistencePromise.resolve();
	}
	getDocumentsMatchingTarget(e, t) {
		return PersistencePromise.resolve(null);
	}
	getIndexType(e, t) {
		return PersistencePromise.resolve(0);
	}
	getFieldIndexes(e, t) {
		return PersistencePromise.resolve([]);
	}
	getNextCollectionGroupToUpdate(e) {
		return PersistencePromise.resolve(null);
	}
	getMinOffset(e, t) {
		return PersistencePromise.resolve(IndexOffset.min());
	}
	getMinOffsetFromCollectionGroup(e, t) {
		return PersistencePromise.resolve(IndexOffset.min());
	}
	updateCollectionGroup(e, t, n) {
		return PersistencePromise.resolve();
	}
	updateIndexEntries(e, t) {
		return PersistencePromise.resolve();
	}
};
/**
* Internal implementation of the collection-parent index exposed by MemoryIndexManager.
* Also used for in-memory caching by IndexedDbIndexManager and initial index population
* in indexeddb_schema.ts
*/ var __PRIVATE_MemoryCollectionParentIndex = class {
	constructor() {
		this.index = {};
	}
	add(e) {
		const t = e.lastSegment(), n = e.popLast(), r = this.index[t] || new SortedSet(ResourcePath.comparator), i = !r.has(n);
		return this.index[t] = r.add(n), i;
	}
	has(e) {
		const t = e.lastSegment(), n = e.popLast(), r = this.index[t];
		return r && r.has(n);
	}
	getEntries(e) {
		return (this.index[e] || new SortedSet(ResourcePath.comparator)).toArray();
	}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var Ae = new Uint8Array(0);
/**
* A persisted implementation of IndexManager.
*
* PORTING NOTE: Unlike iOS and Android, the Web SDK does not memoize index
* data as it supports multi-tab access.
*/
var __PRIVATE_IndexedDbIndexManager = class {
	constructor(e, t) {
		this.databaseId = t, this.cn = new __PRIVATE_MemoryCollectionParentIndex(), this.ln = new ObjectMap(((e) => __PRIVATE_canonifyTarget(e)), ((e, t) => __PRIVATE_targetEquals(e, t))), this.uid = e.uid || "";
	}
	/**
	* Adds a new entry to the collection parent index.
	*
	* Repeated calls for the same collectionPath should be avoided within a
	* transaction as IndexedDbIndexManager only caches writes once a transaction
	* has been committed.
	*/ addToCollectionParentIndex(e, t) {
		if (!this.cn.has(t)) {
			const n = t.lastSegment(), r = t.popLast();
			e.addOnCommittedListener((() => {
				this.cn.add(t);
			}));
			const i = {
				collectionId: n,
				parent: __PRIVATE_encodeResourcePath(r)
			};
			return __PRIVATE_collectionParentsStore(e).put(i);
		}
		return PersistencePromise.resolve();
	}
	getCollectionParents(e, t) {
		const n = [], r = IDBKeyRange.bound([t, ""], [__PRIVATE_immediateSuccessor(t), ""], !1, !0);
		return __PRIVATE_collectionParentsStore(e).U(r).next(((e) => {
			for (const r of e) {
				if (r.collectionId !== t) break;
				n.push(__PRIVATE_decodeResourcePath(r.parent));
			}
			return n;
		}));
	}
	addFieldIndex(e, t) {
		const n = __PRIVATE_indexConfigurationStore(e), r = function __PRIVATE_toDbIndexConfiguration(e) {
			return {
				indexId: e.indexId,
				collectionGroup: e.collectionGroup,
				fields: e.fields.map(((e) => [e.fieldPath.canonicalString(), e.kind]))
			};
		}(t);
		delete r.indexId;
		const i = n.add(r);
		if (t.indexState) {
			const n = __PRIVATE_indexStateStore(e);
			return i.next(((e) => {
				n.put(__PRIVATE_toDbIndexState(e, this.uid, t.indexState.sequenceNumber, t.indexState.offset));
			}));
		}
		return i.next();
	}
	deleteFieldIndex(e, t) {
		const n = __PRIVATE_indexConfigurationStore(e), r = __PRIVATE_indexStateStore(e), i = __PRIVATE_indexEntriesStore(e);
		return n.delete(t.indexId).next((() => r.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0)))).next((() => i.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0))));
	}
	deleteAllFieldIndexes(e) {
		const t = __PRIVATE_indexConfigurationStore(e), n = __PRIVATE_indexEntriesStore(e), r = __PRIVATE_indexStateStore(e);
		return t.j().next((() => n.j())).next((() => r.j()));
	}
	createTargetIndexes(e, t) {
		return PersistencePromise.forEach(this.hn(t), ((t) => this.getIndexType(e, t).next(((n) => {
			if (0 === n || 1 === n) {
				const n = new __PRIVATE_TargetIndexMatcher(t).an();
				if (null != n) return this.addFieldIndex(e, n);
			}
		}))));
	}
	getDocumentsMatchingTarget(e, t) {
		const n = __PRIVATE_indexEntriesStore(e);
		let r = !0;
		const i = /* @__PURE__ */ new Map();
		return PersistencePromise.forEach(this.hn(t), ((t) => this.Pn(e, t).next(((e) => {
			r && (r = !!e), i.set(t, e);
		})))).next((() => {
			if (r) {
				let e = __PRIVATE_documentKeySet();
				const r = [];
				return PersistencePromise.forEach(i, ((i, s) => {
					__PRIVATE_logDebug("IndexedDbIndexManager", `Using index ${function __PRIVATE_fieldIndexToString(e) {
						return `id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(((e) => `${e.fieldPath}:${e.kind}`)).join(",")}`;
					}(i)} to execute ${__PRIVATE_canonifyTarget(t)}`);
					const o = function __PRIVATE_targetGetArrayValues(e, t) {
						const n = __PRIVATE_fieldIndexGetArraySegment(t);
						if (void 0 === n) return null;
						for (const t of __PRIVATE_targetGetFieldFiltersForPath(e, n.fieldPath)) switch (t.op) {
							case "array-contains-any": return t.value.arrayValue.values || [];
							case "array-contains": return [t.value];
						}
						return null;
					}(s, i), _ = function __PRIVATE_targetGetNotInValues(e, t) {
						const n = /* @__PURE__ */ new Map();
						for (const r of __PRIVATE_fieldIndexGetDirectionalSegments(t)) for (const t of __PRIVATE_targetGetFieldFiltersForPath(e, r.fieldPath)) switch (t.op) {
							case "==":
							case "in":
								n.set(r.fieldPath.canonicalString(), t.value);
								break;
							case "not-in":
							case "!=": return n.set(r.fieldPath.canonicalString(), t.value), Array.from(n.values());
						}
						return null;
					}(s, i), a = function __PRIVATE_targetGetLowerBound(e, t) {
						const n = [];
						let r = !0;
						for (const i of __PRIVATE_fieldIndexGetDirectionalSegments(t)) {
							const t = 0 === i.kind ? __PRIVATE_targetGetAscendingBound(e, i.fieldPath, e.startAt) : __PRIVATE_targetGetDescendingBound(e, i.fieldPath, e.startAt);
							n.push(t.value), r && (r = t.inclusive);
						}
						return new Bound(n, r);
					}(s, i), u = function __PRIVATE_targetGetUpperBound(e, t) {
						const n = [];
						let r = !0;
						for (const i of __PRIVATE_fieldIndexGetDirectionalSegments(t)) {
							const t = 0 === i.kind ? __PRIVATE_targetGetDescendingBound(e, i.fieldPath, e.endAt) : __PRIVATE_targetGetAscendingBound(e, i.fieldPath, e.endAt);
							n.push(t.value), r && (r = t.inclusive);
						}
						return new Bound(n, r);
					}(s, i), c = this.In(i, s, a), l = this.In(i, s, u), h = this.Tn(i, s, _), P = this.En(i.indexId, o, c, a.inclusive, l, u.inclusive, h);
					return PersistencePromise.forEach(P, ((i) => n.G(i, t.limit).next(((t) => {
						t.forEach(((t) => {
							const n = DocumentKey.fromSegments(t.documentKey);
							e.has(n) || (e = e.add(n), r.push(n));
						}));
					}))));
				})).next((() => r));
			}
			return PersistencePromise.resolve(null);
		}));
	}
	hn(e) {
		let t = this.ln.get(e);
		if (t) return t;
		if (0 === e.filters.length) t = [e];
		else t = __PRIVATE_getDnfTerms(CompositeFilter.create(e.filters, "and")).map(((t) => __PRIVATE_newTarget(e.path, e.collectionGroup, e.orderBy, t.getFilters(), e.limit, e.startAt, e.endAt)));
		return this.ln.set(e, t), t;
	}
	/**
	* Constructs a key range query on `DbIndexEntryStore` that unions all
	* bounds.
	*/ En(e, t, n, r, i, s, o) {
		const _ = (null != t ? t.length : 1) * Math.max(n.length, i.length), a = _ / (null != t ? t.length : 1), u = [];
		for (let c = 0; c < _; ++c) {
			const _ = t ? this.dn(t[c / a]) : Ae, l = this.An(e, _, n[c % a], r), h = this.Rn(e, _, i[c % a], s), P = o.map(((t) => this.An(e, _, t, !0)));
			u.push(...this.createRange(l, h, P));
		}
		return u;
	}
	/** Generates the lower bound for `arrayValue` and `directionalValue`. */ An(e, t, n, r) {
		const i = new __PRIVATE_IndexEntry(e, DocumentKey.empty(), t, n);
		return r ? i : i.Zt();
	}
	/** Generates the upper bound for `arrayValue` and `directionalValue`. */ Rn(e, t, n, r) {
		const i = new __PRIVATE_IndexEntry(e, DocumentKey.empty(), t, n);
		return r ? i.Zt() : i;
	}
	Pn(e, t) {
		const n = new __PRIVATE_TargetIndexMatcher(t), r = null != t.collectionGroup ? t.collectionGroup : t.path.lastSegment();
		return this.getFieldIndexes(e, r).next(((e) => {
			let t = null;
			for (const r of e) n.rn(r) && (!t || r.fields.length > t.fields.length) && (t = r);
			return t;
		}));
	}
	getIndexType(e, t) {
		let n = 2;
		const r = this.hn(t);
		return PersistencePromise.forEach(r, ((t) => this.Pn(e, t).next(((e) => {
			e ? 0 !== n && e.fields.length < function __PRIVATE_targetGetSegmentCount(e) {
				let t = new SortedSet(FieldPath$1.comparator), n = !1;
				for (const r of e.filters) for (const e of r.getFlattenedFilters()) e.field.isKeyField() || ("array-contains" === e.op || "array-contains-any" === e.op ? n = !0 : t = t.add(e.field));
				for (const n of e.orderBy) n.field.isKeyField() || (t = t.add(n.field));
				return t.size + (n ? 1 : 0);
			}(t) && (n = 1) : n = 0;
		})))).next((() => function __PRIVATE_targetHasLimit(e) {
			return null !== e.limit;
		}(t) && r.length > 1 && 2 === n ? 1 : n));
	}
	/**
	* Returns the byte encoded form of the directional values in the field index.
	* Returns `null` if the document does not have all fields specified in the
	* index.
	*/ Vn(e, t) {
		const n = new __PRIVATE_IndexByteEncoder();
		for (const r of __PRIVATE_fieldIndexGetDirectionalSegments(e)) {
			const e = t.data.field(r.fieldPath);
			if (null == e) return null;
			const i = n.Yt(r.kind);
			__PRIVATE_FirestoreIndexValueWriter.vt.It(e, i);
		}
		return n.zt();
	}
	/** Encodes a single value to the ascending index format. */ dn(e) {
		const t = new __PRIVATE_IndexByteEncoder();
		return __PRIVATE_FirestoreIndexValueWriter.vt.It(e, t.Yt(0)), t.zt();
	}
	/**
	* Returns an encoded form of the document key that sorts based on the key
	* ordering of the field index.
	*/ mn(e, t) {
		const n = new __PRIVATE_IndexByteEncoder();
		return __PRIVATE_FirestoreIndexValueWriter.vt.It(__PRIVATE_refValue(this.databaseId, t), n.Yt(function __PRIVATE_fieldIndexGetKeyOrder(e) {
			const t = __PRIVATE_fieldIndexGetDirectionalSegments(e);
			return 0 === t.length ? 0 : t[t.length - 1].kind;
		}(e))), n.zt();
	}
	/**
	* Encodes the given field values according to the specification in `target`.
	* For IN queries, a list of possible values is returned.
	*/ Tn(e, t, n) {
		if (null === n) return [];
		let r = [];
		r.push(new __PRIVATE_IndexByteEncoder());
		let i = 0;
		for (const s of __PRIVATE_fieldIndexGetDirectionalSegments(e)) {
			const e = n[i++];
			for (const n of r) if (this.fn(t, s.fieldPath) && isArray(e)) r = this.gn(r, s, e);
			else {
				const t = n.Yt(s.kind);
				__PRIVATE_FirestoreIndexValueWriter.vt.It(e, t);
			}
		}
		return this.pn(r);
	}
	/**
	* Encodes the given bounds according to the specification in `target`. For IN
	* queries, a list of possible values is returned.
	*/ In(e, t, n) {
		return this.Tn(e, t, n.position);
	}
	/** Returns the byte representation for the provided encoders. */ pn(e) {
		const t = [];
		for (let n = 0; n < e.length; ++n) t[n] = e[n].zt();
		return t;
	}
	/**
	* Creates a separate encoder for each element of an array.
	*
	* The method appends each value to all existing encoders (e.g. filter("a",
	* "==", "a1").filter("b", "in", ["b1", "b2"]) becomes ["a1,b1", "a1,b2"]). A
	* list of new encoders is returned.
	*/ gn(e, t, n) {
		const r = [...e], i = [];
		for (const e of n.arrayValue.values || []) for (const n of r) {
			const r = new __PRIVATE_IndexByteEncoder();
			r.seed(n.zt()), __PRIVATE_FirestoreIndexValueWriter.vt.It(e, r.Yt(t.kind)), i.push(r);
		}
		return i;
	}
	fn(e, t) {
		return !!e.filters.find(((e) => e instanceof FieldFilter && e.field.isEqual(t) && ("in" === e.op || "not-in" === e.op)));
	}
	getFieldIndexes(e, t) {
		const n = __PRIVATE_indexConfigurationStore(e), r = __PRIVATE_indexStateStore(e);
		return (t ? n.U("collectionGroupIndex", IDBKeyRange.bound(t, t)) : n.U()).next(((e) => {
			const t = [];
			return PersistencePromise.forEach(e, ((e) => r.get([e.indexId, this.uid]).next(((n) => {
				t.push(function __PRIVATE_fromDbIndexConfiguration(e, t) {
					const n = t ? new IndexState(t.sequenceNumber, new IndexOffset(__PRIVATE_fromDbTimestamp(t.readTime), new DocumentKey(__PRIVATE_decodeResourcePath(t.documentKey)), t.largestBatchId)) : IndexState.empty(), r = e.fields.map((([e, t]) => new IndexSegment(FieldPath$1.fromServerFormat(e), t)));
					return new FieldIndex(e.indexId, e.collectionGroup, r, n);
				}(e, n));
			})))).next((() => t));
		}));
	}
	getNextCollectionGroupToUpdate(e) {
		return this.getFieldIndexes(e).next(((e) => 0 === e.length ? null : (e.sort(((e, t) => {
			const n = e.indexState.sequenceNumber - t.indexState.sequenceNumber;
			return 0 !== n ? n : __PRIVATE_primitiveComparator(e.collectionGroup, t.collectionGroup);
		})), e[0].collectionGroup)));
	}
	updateCollectionGroup(e, t, n) {
		const r = __PRIVATE_indexConfigurationStore(e), i = __PRIVATE_indexStateStore(e);
		return this.yn(e).next(((e) => r.U("collectionGroupIndex", IDBKeyRange.bound(t, t)).next(((t) => PersistencePromise.forEach(t, ((t) => i.put(__PRIVATE_toDbIndexState(t.indexId, this.uid, e, n))))))));
	}
	updateIndexEntries(e, t) {
		const n = /* @__PURE__ */ new Map();
		return PersistencePromise.forEach(t, ((t, r) => {
			const i = n.get(t.collectionGroup);
			return (i ? PersistencePromise.resolve(i) : this.getFieldIndexes(e, t.collectionGroup)).next(((i) => (n.set(t.collectionGroup, i), PersistencePromise.forEach(i, ((n) => this.wn(e, t, n).next(((t) => {
				const i = this.Sn(r, n);
				return t.isEqual(i) ? PersistencePromise.resolve() : this.bn(e, r, n, t, i);
			})))))));
		}));
	}
	Dn(e, t, n, r) {
		return __PRIVATE_indexEntriesStore(e).put({
			indexId: r.indexId,
			uid: this.uid,
			arrayValue: r.arrayValue,
			directionalValue: r.directionalValue,
			orderedDocumentKey: this.mn(n, t.key),
			documentKey: t.key.path.toArray()
		});
	}
	vn(e, t, n, r) {
		return __PRIVATE_indexEntriesStore(e).delete([
			r.indexId,
			this.uid,
			r.arrayValue,
			r.directionalValue,
			this.mn(n, t.key),
			t.key.path.toArray()
		]);
	}
	wn(e, t, n) {
		const r = __PRIVATE_indexEntriesStore(e);
		let i = new SortedSet(__PRIVATE_indexEntryComparator);
		return r.J({
			index: "documentKeyIndex",
			range: IDBKeyRange.only([
				n.indexId,
				this.uid,
				this.mn(n, t)
			])
		}, ((e, r) => {
			i = i.add(new __PRIVATE_IndexEntry(n.indexId, t, r.arrayValue, r.directionalValue));
		})).next((() => i));
	}
	/** Creates the index entries for the given document. */ Sn(e, t) {
		let n = new SortedSet(__PRIVATE_indexEntryComparator);
		const r = this.Vn(t, e);
		if (null == r) return n;
		const i = __PRIVATE_fieldIndexGetArraySegment(t);
		if (null != i) {
			const s = e.data.field(i.fieldPath);
			if (isArray(s)) for (const i of s.arrayValue.values || []) n = n.add(new __PRIVATE_IndexEntry(t.indexId, e.key, this.dn(i), r));
		} else n = n.add(new __PRIVATE_IndexEntry(t.indexId, e.key, Ae, r));
		return n;
	}
	/**
	* Updates the index entries for the provided document by deleting entries
	* that are no longer referenced in `newEntries` and adding all newly added
	* entries.
	*/ bn(e, t, n, r, i) {
		__PRIVATE_logDebug("IndexedDbIndexManager", "Updating index entries for document '%s'", t.key);
		const s = [];
		return function __PRIVATE_diffSortedSets(e, t, n, r, i) {
			const s = e.getIterator(), o = t.getIterator();
			let _ = __PRIVATE_advanceIterator(s), a = __PRIVATE_advanceIterator(o);
			for (; _ || a;) {
				let e = !1, t = !1;
				if (_ && a) {
					const r = n(_, a);
					r < 0 ? t = !0 : r > 0 && (e = !0);
				} else null != _ ? t = !0 : e = !0;
				e ? (r(a), a = __PRIVATE_advanceIterator(o)) : t ? (i(_), _ = __PRIVATE_advanceIterator(s)) : (_ = __PRIVATE_advanceIterator(s), a = __PRIVATE_advanceIterator(o));
			}
		}(r, i, __PRIVATE_indexEntryComparator, ((r) => {
			s.push(this.Dn(e, t, n, r));
		}), ((r) => {
			s.push(this.vn(e, t, n, r));
		})), PersistencePromise.waitFor(s);
	}
	yn(e) {
		let t = 1;
		return __PRIVATE_indexStateStore(e).J({
			index: "sequenceNumberIndex",
			reverse: !0,
			range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
		}, ((e, n, r) => {
			r.done(), t = n.sequenceNumber + 1;
		})).next((() => t));
	}
	/**
	* Returns a new set of IDB ranges that splits the existing range and excludes
	* any values that match the `notInValue` from these ranges. As an example,
	* '[foo > 2 && foo != 3]` becomes  `[foo > 2 && < 3, foo > 3]`.
	*/ createRange(e, t, n) {
		n = n.sort(((e, t) => __PRIVATE_indexEntryComparator(e, t))).filter(((e, t, n) => !t || 0 !== __PRIVATE_indexEntryComparator(e, n[t - 1])));
		const r = [];
		r.push(e);
		for (const i of n) {
			const n = __PRIVATE_indexEntryComparator(i, e), s = __PRIVATE_indexEntryComparator(i, t);
			if (0 === n) r[0] = e.Zt();
			else if (n > 0 && s < 0) r.push(i), r.push(i.Zt());
			else if (s > 0) break;
		}
		r.push(t);
		const i = [];
		for (let e = 0; e < r.length; e += 2) {
			if (this.Cn(r[e], r[e + 1])) return [];
			const t = [
				r[e].indexId,
				this.uid,
				r[e].arrayValue,
				r[e].directionalValue,
				Ae,
				[]
			], n = [
				r[e + 1].indexId,
				this.uid,
				r[e + 1].arrayValue,
				r[e + 1].directionalValue,
				Ae,
				[]
			];
			i.push(IDBKeyRange.bound(t, n));
		}
		return i;
	}
	Cn(e, t) {
		return __PRIVATE_indexEntryComparator(e, t) > 0;
	}
	getMinOffsetFromCollectionGroup(e, t) {
		return this.getFieldIndexes(e, t).next(__PRIVATE_getMinOffsetFromFieldIndexes);
	}
	getMinOffset(e, t) {
		return PersistencePromise.mapArray(this.hn(t), ((t) => this.Pn(e, t).next(((e) => e || fail())))).next(__PRIVATE_getMinOffsetFromFieldIndexes);
	}
};
/**
* Helper to get a typed SimpleDbStore for the collectionParents
* document store.
*/ function __PRIVATE_collectionParentsStore(e) {
	return __PRIVATE_getStore(e, "collectionParents");
}
/**
* Helper to get a typed SimpleDbStore for the index entry object store.
*/ function __PRIVATE_indexEntriesStore(e) {
	return __PRIVATE_getStore(e, "indexEntries");
}
/**
* Helper to get a typed SimpleDbStore for the index configuration object store.
*/ function __PRIVATE_indexConfigurationStore(e) {
	return __PRIVATE_getStore(e, "indexConfiguration");
}
/**
* Helper to get a typed SimpleDbStore for the index state object store.
*/ function __PRIVATE_indexStateStore(e) {
	return __PRIVATE_getStore(e, "indexState");
}
function __PRIVATE_getMinOffsetFromFieldIndexes(e) {
	__PRIVATE_hardAssert(0 !== e.length);
	let t = e[0].indexState.offset, n = t.largestBatchId;
	for (let r = 1; r < e.length; r++) {
		const i = e[r].indexState.offset;
		__PRIVATE_indexOffsetComparator(i, t) < 0 && (t = i), n < i.largestBatchId && (n = i.largestBatchId);
	}
	return new IndexOffset(t.readTime, t.documentKey, n);
}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var Re = {
	didRun: !1,
	sequenceNumbersCollected: 0,
	targetsRemoved: 0,
	documentsRemoved: 0
};
var LruParams = class LruParams {
	constructor(e, t, n) {
		this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n;
	}
	static withCacheSize(e) {
		return new LruParams(e, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Delete a mutation batch and the associated document mutations.
* @returns A PersistencePromise of the document mutations that were removed.
*/
function removeMutationBatch(e, t, n) {
	const r = e.store("mutations"), i = e.store("documentMutations"), s = [], o = IDBKeyRange.only(n.batchId);
	let _ = 0;
	const a = r.J({ range: o }, ((e, t, n) => (_++, n.delete())));
	s.push(a.next((() => {
		__PRIVATE_hardAssert(1 === _);
	})));
	const u = [];
	for (const e of n.mutations) {
		const r = __PRIVATE_newDbDocumentMutationKey(t, e.key.path, n.batchId);
		s.push(i.delete(r)), u.push(e.key);
	}
	return PersistencePromise.waitFor(s).next((() => u));
}
/**
* Returns an approximate size for the given document.
*/ function __PRIVATE_dbDocumentSize(e) {
	if (!e) return 0;
	let t;
	if (e.document) t = e.document;
	else if (e.unknownDocument) t = e.unknownDocument;
	else {
		if (!e.noDocument) throw fail();
		t = e.noDocument;
	}
	return JSON.stringify(t).length;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** A mutation queue for a specific user, backed by IndexedDB. */ LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(41943040, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
var __PRIVATE_IndexedDbMutationQueue = class __PRIVATE_IndexedDbMutationQueue {
	constructor(e, t, n, r) {
		this.userId = e, this.serializer = t, this.indexManager = n, this.referenceDelegate = r, this.Fn = {};
	}
	/**
	* Creates a new mutation queue for the given user.
	* @param user - The user for which to create a mutation queue.
	* @param serializer - The serializer to use when persisting to IndexedDb.
	*/ static lt(e, t, n, r) {
		__PRIVATE_hardAssert("" !== e.uid);
		return new __PRIVATE_IndexedDbMutationQueue(e.isAuthenticated() ? e.uid : "", t, n, r);
	}
	checkEmpty(e) {
		let t = !0;
		const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
		return __PRIVATE_mutationsStore(e).J({
			index: "userMutationsIndex",
			range: n
		}, ((e, n, r) => {
			t = !1, r.done();
		})).next((() => t));
	}
	addMutationBatch(e, t, n, r) {
		const i = __PRIVATE_documentMutationsStore(e), s = __PRIVATE_mutationsStore(e);
		return s.add({}).next(((o) => {
			__PRIVATE_hardAssert("number" == typeof o);
			const _ = new MutationBatch(o, t, n, r), a = function __PRIVATE_toDbMutationBatch(e, t, n) {
				const r = n.baseMutations.map(((t) => toMutation(e.ct, t))), i = n.mutations.map(((t) => toMutation(e.ct, t)));
				return {
					userId: t,
					batchId: n.batchId,
					localWriteTimeMs: n.localWriteTime.toMillis(),
					baseMutations: r,
					mutations: i
				};
			}(this.serializer, this.userId, _), u = [];
			let c = new SortedSet(((e, t) => __PRIVATE_primitiveComparator(e.canonicalString(), t.canonicalString())));
			for (const e of r) {
				const t = __PRIVATE_newDbDocumentMutationKey(this.userId, e.key.path, o);
				c = c.add(e.key.path.popLast()), u.push(s.put(a)), u.push(i.put(t, x));
			}
			return c.forEach(((t) => {
				u.push(this.indexManager.addToCollectionParentIndex(e, t));
			})), e.addOnCommittedListener((() => {
				this.Fn[o] = _.keys();
			})), PersistencePromise.waitFor(u).next((() => _));
		}));
	}
	lookupMutationBatch(e, t) {
		return __PRIVATE_mutationsStore(e).get(t).next(((e) => e ? (__PRIVATE_hardAssert(e.userId === this.userId), __PRIVATE_fromDbMutationBatch(this.serializer, e)) : null));
	}
	/**
	* Returns the document keys for the mutation batch with the given batchId.
	* For primary clients, this method returns `null` after
	* `removeMutationBatches()` has been called. Secondary clients return a
	* cached result until `removeCachedMutationKeys()` is invoked.
	*/
	Mn(e, t) {
		return this.Fn[t] ? PersistencePromise.resolve(this.Fn[t]) : this.lookupMutationBatch(e, t).next(((e) => {
			if (e) {
				const n = e.keys();
				return this.Fn[t] = n, n;
			}
			return null;
		}));
	}
	getNextMutationBatchAfterBatchId(e, t) {
		const n = t + 1, r = IDBKeyRange.lowerBound([this.userId, n]);
		let i = null;
		return __PRIVATE_mutationsStore(e).J({
			index: "userMutationsIndex",
			range: r
		}, ((e, t, r) => {
			t.userId === this.userId && (__PRIVATE_hardAssert(t.batchId >= n), i = __PRIVATE_fromDbMutationBatch(this.serializer, t)), r.done();
		})).next((() => i));
	}
	getHighestUnacknowledgedBatchId(e) {
		const t = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
		let n = -1;
		return __PRIVATE_mutationsStore(e).J({
			index: "userMutationsIndex",
			range: t,
			reverse: !0
		}, ((e, t, r) => {
			n = t.batchId, r.done();
		})).next((() => n));
	}
	getAllMutationBatches(e) {
		const t = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
		return __PRIVATE_mutationsStore(e).U("userMutationsIndex", t).next(((e) => e.map(((e) => __PRIVATE_fromDbMutationBatch(this.serializer, e)))));
	}
	getAllMutationBatchesAffectingDocumentKey(e, t) {
		const n = __PRIVATE_newDbDocumentMutationPrefixForPath(this.userId, t.path), r = IDBKeyRange.lowerBound(n), i = [];
		return __PRIVATE_documentMutationsStore(e).J({ range: r }, ((n, r, s) => {
			const [o, _, a] = n, u = __PRIVATE_decodeResourcePath(_);
			if (o === this.userId && t.path.isEqual(u)) return __PRIVATE_mutationsStore(e).get(a).next(((e) => {
				if (!e) throw fail();
				__PRIVATE_hardAssert(e.userId === this.userId), i.push(__PRIVATE_fromDbMutationBatch(this.serializer, e));
			}));
			s.done();
		})).next((() => i));
	}
	getAllMutationBatchesAffectingDocumentKeys(e, t) {
		let n = new SortedSet(__PRIVATE_primitiveComparator);
		const r = [];
		return t.forEach(((t) => {
			const i = __PRIVATE_newDbDocumentMutationPrefixForPath(this.userId, t.path), s = IDBKeyRange.lowerBound(i), o = __PRIVATE_documentMutationsStore(e).J({ range: s }, ((e, r, i) => {
				const [s, o, _] = e, a = __PRIVATE_decodeResourcePath(o);
				s === this.userId && t.path.isEqual(a) ? n = n.add(_) : i.done();
			}));
			r.push(o);
		})), PersistencePromise.waitFor(r).next((() => this.xn(e, n)));
	}
	getAllMutationBatchesAffectingQuery(e, t) {
		const n = t.path, r = n.length + 1, i = __PRIVATE_newDbDocumentMutationPrefixForPath(this.userId, n), s = IDBKeyRange.lowerBound(i);
		let o = new SortedSet(__PRIVATE_primitiveComparator);
		return __PRIVATE_documentMutationsStore(e).J({ range: s }, ((e, t, i) => {
			const [s, _, a] = e, u = __PRIVATE_decodeResourcePath(_);
			s === this.userId && n.isPrefixOf(u) ? u.length === r && (o = o.add(a)) : i.done();
		})).next((() => this.xn(e, o)));
	}
	xn(e, t) {
		const n = [], r = [];
		return t.forEach(((t) => {
			r.push(__PRIVATE_mutationsStore(e).get(t).next(((e) => {
				if (null === e) throw fail();
				__PRIVATE_hardAssert(e.userId === this.userId), n.push(__PRIVATE_fromDbMutationBatch(this.serializer, e));
			})));
		})), PersistencePromise.waitFor(r).next((() => n));
	}
	removeMutationBatch(e, t) {
		return removeMutationBatch(e._e, this.userId, t).next(((n) => (e.addOnCommittedListener((() => {
			this.On(t.batchId);
		})), PersistencePromise.forEach(n, ((t) => this.referenceDelegate.markPotentiallyOrphaned(e, t))))));
	}
	/**
	* Clears the cached keys for a mutation batch. This method should be
	* called by secondary clients after they process mutation updates.
	*
	* Note that this method does not have to be called from primary clients as
	* the corresponding cache entries are cleared when an acknowledged or
	* rejected batch is removed from the mutation queue.
	*/
	On(e) {
		delete this.Fn[e];
	}
	performConsistencyCheck(e) {
		return this.checkEmpty(e).next(((t) => {
			if (!t) return PersistencePromise.resolve();
			const n = IDBKeyRange.lowerBound(
				/**
				* Creates a [userId] key for use in the DbDocumentMutations index to iterate
				* over all of a user's document mutations.
				*/
				function __PRIVATE_newDbDocumentMutationPrefixForUser(e) {
					return [e];
				}(this.userId)
			), r = [];
			return __PRIVATE_documentMutationsStore(e).J({ range: n }, ((e, t, n) => {
				if (e[0] === this.userId) {
					const t = __PRIVATE_decodeResourcePath(e[1]);
					r.push(t);
				} else n.done();
			})).next((() => {
				__PRIVATE_hardAssert(0 === r.length);
			}));
		}));
	}
	containsKey(e, t) {
		return __PRIVATE_mutationQueueContainsKey(e, this.userId, t);
	}
	/** Returns the mutation queue's metadata from IndexedDb. */
	Nn(e) {
		return __PRIVATE_mutationQueuesStore(e).get(this.userId).next(((e) => e || {
			userId: this.userId,
			lastAcknowledgedBatchId: -1,
			lastStreamToken: ""
		}));
	}
};
/**
* @returns true if the mutation queue for the given user contains a pending
*         mutation for the given key.
*/ function __PRIVATE_mutationQueueContainsKey(e, t, n) {
	const r = __PRIVATE_newDbDocumentMutationPrefixForPath(t, n.path), i = r[1], s = IDBKeyRange.lowerBound(r);
	let o = !1;
	return __PRIVATE_documentMutationsStore(e).J({
		range: s,
		H: !0
	}, ((e, n, r) => {
		const [s, _, a] = e;
		s === t && _ === i && (o = !0), r.done();
	})).next((() => o));
}
/** Returns true if any mutation queue contains the given document. */
/**
* Helper to get a typed SimpleDbStore for the mutations object store.
*/
function __PRIVATE_mutationsStore(e) {
	return __PRIVATE_getStore(e, "mutations");
}
/**
* Helper to get a typed SimpleDbStore for the mutationQueues object store.
*/ function __PRIVATE_documentMutationsStore(e) {
	return __PRIVATE_getStore(e, "documentMutations");
}
/**
* Helper to get a typed SimpleDbStore for the mutationQueues object store.
*/ function __PRIVATE_mutationQueuesStore(e) {
	return __PRIVATE_getStore(e, "mutationQueues");
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Offset to ensure non-overlapping target ids. */
/**
* Generates monotonically increasing target IDs for sending targets to the
* watch stream.
*
* The client constructs two generators, one for the target cache, and one for
* for the sync engine (to generate limbo documents targets). These
* generators produce non-overlapping IDs (by using even and odd IDs
* respectively).
*
* By separating the target ID space, the query cache can generate target IDs
* that persist across client restarts, while sync engine can independently
* generate in-memory target IDs that are transient and can be reused after a
* restart.
*/
var __PRIVATE_TargetIdGenerator = class __PRIVATE_TargetIdGenerator {
	constructor(e) {
		this.Ln = e;
	}
	next() {
		return this.Ln += 2, this.Ln;
	}
	static Bn() {
		return new __PRIVATE_TargetIdGenerator(0);
	}
	static kn() {
		return new __PRIVATE_TargetIdGenerator(-1);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_IndexedDbTargetCache = class {
	constructor(e, t) {
		this.referenceDelegate = e, this.serializer = t;
	}
	allocateTargetId(e) {
		return this.qn(e).next(((t) => {
			return t.highestTargetId = new __PRIVATE_TargetIdGenerator(t.highestTargetId).next(), this.Qn(e, t).next((() => t.highestTargetId));
		}));
	}
	getLastRemoteSnapshotVersion(e) {
		return this.qn(e).next(((e) => SnapshotVersion.fromTimestamp(new Timestamp(e.lastRemoteSnapshotVersion.seconds, e.lastRemoteSnapshotVersion.nanoseconds))));
	}
	getHighestSequenceNumber(e) {
		return this.qn(e).next(((e) => e.highestListenSequenceNumber));
	}
	setTargetsMetadata(e, t, n) {
		return this.qn(e).next(((r) => (r.highestListenSequenceNumber = t, n && (r.lastRemoteSnapshotVersion = n.toTimestamp()), t > r.highestListenSequenceNumber && (r.highestListenSequenceNumber = t), this.Qn(e, r))));
	}
	addTargetData(e, t) {
		return this.Kn(e, t).next((() => this.qn(e).next(((n) => (n.targetCount += 1, this.$n(t, n), this.Qn(e, n))))));
	}
	updateTargetData(e, t) {
		return this.Kn(e, t);
	}
	removeTargetData(e, t) {
		return this.removeMatchingKeysForTargetId(e, t.targetId).next((() => __PRIVATE_targetsStore(e).delete(t.targetId))).next((() => this.qn(e))).next(((t) => (__PRIVATE_hardAssert(t.targetCount > 0), t.targetCount -= 1, this.Qn(e, t))));
	}
	/**
	* Drops any targets with sequence number less than or equal to the upper bound, excepting those
	* present in `activeTargetIds`. Document associations for the removed targets are also removed.
	* Returns the number of targets removed.
	*/ removeTargets(e, t, n) {
		let r = 0;
		const i = [];
		return __PRIVATE_targetsStore(e).J(((s, o) => {
			const _ = __PRIVATE_fromDbTarget(o);
			_.sequenceNumber <= t && null === n.get(_.targetId) && (r++, i.push(this.removeTargetData(e, _)));
		})).next((() => PersistencePromise.waitFor(i))).next((() => r));
	}
	/**
	* Call provided function with each `TargetData` that we have cached.
	*/ forEachTarget(e, t) {
		return __PRIVATE_targetsStore(e).J(((e, n) => {
			t(__PRIVATE_fromDbTarget(n));
		}));
	}
	qn(e) {
		return __PRIVATE_globalTargetStore(e).get("targetGlobalKey").next(((e) => (__PRIVATE_hardAssert(null !== e), e)));
	}
	Qn(e, t) {
		return __PRIVATE_globalTargetStore(e).put("targetGlobalKey", t);
	}
	Kn(e, t) {
		return __PRIVATE_targetsStore(e).put(__PRIVATE_toDbTarget(this.serializer, t));
	}
	/**
	* In-place updates the provided metadata to account for values in the given
	* TargetData. Saving is done separately. Returns true if there were any
	* changes to the metadata.
	*/ $n(e, t) {
		let n = !1;
		return e.targetId > t.highestTargetId && (t.highestTargetId = e.targetId, n = !0), e.sequenceNumber > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = e.sequenceNumber, n = !0), n;
	}
	getTargetCount(e) {
		return this.qn(e).next(((e) => e.targetCount));
	}
	getTargetData(e, t) {
		const n = __PRIVATE_canonifyTarget(t), r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
		let i = null;
		return __PRIVATE_targetsStore(e).J({
			range: r,
			index: "queryTargetsIndex"
		}, ((e, n, r) => {
			const s = __PRIVATE_fromDbTarget(n);
			__PRIVATE_targetEquals(t, s.target) && (i = s, r.done());
		})).next((() => i));
	}
	addMatchingKeys(e, t, n) {
		const r = [], i = __PRIVATE_documentTargetStore(e);
		return t.forEach(((t) => {
			const s = __PRIVATE_encodeResourcePath(t.path);
			r.push(i.put({
				targetId: n,
				path: s
			})), r.push(this.referenceDelegate.addReference(e, n, t));
		})), PersistencePromise.waitFor(r);
	}
	removeMatchingKeys(e, t, n) {
		const r = __PRIVATE_documentTargetStore(e);
		return PersistencePromise.forEach(t, ((t) => {
			const i = __PRIVATE_encodeResourcePath(t.path);
			return PersistencePromise.waitFor([r.delete([n, i]), this.referenceDelegate.removeReference(e, n, t)]);
		}));
	}
	removeMatchingKeysForTargetId(e, t) {
		const n = __PRIVATE_documentTargetStore(e), r = IDBKeyRange.bound([t], [t + 1], !1, !0);
		return n.delete(r);
	}
	getMatchingKeysForTargetId(e, t) {
		const n = IDBKeyRange.bound([t], [t + 1], !1, !0), r = __PRIVATE_documentTargetStore(e);
		let i = __PRIVATE_documentKeySet();
		return r.J({
			range: n,
			H: !0
		}, ((e, t, n) => {
			const s = new DocumentKey(__PRIVATE_decodeResourcePath(e[1]));
			i = i.add(s);
		})).next((() => i));
	}
	containsKey(e, t) {
		const n = __PRIVATE_encodeResourcePath(t.path), r = IDBKeyRange.bound([n], [__PRIVATE_immediateSuccessor(n)], !1, !0);
		let i = 0;
		return __PRIVATE_documentTargetStore(e).J({
			index: "documentTargetsIndex",
			H: !0,
			range: r
		}, (([e, t], n, r) => {
			0 !== e && (i++, r.done());
		})).next((() => i > 0));
	}
	/**
	* Looks up a TargetData entry by target ID.
	*
	* @param targetId - The target ID of the TargetData entry to look up.
	* @returns The cached TargetData entry, or null if the cache has no entry for
	* the target.
	*/
	ot(e, t) {
		return __PRIVATE_targetsStore(e).get(t).next(((e) => e ? __PRIVATE_fromDbTarget(e) : null));
	}
};
/**
* Helper to get a typed SimpleDbStore for the queries object store.
*/ function __PRIVATE_targetsStore(e) {
	return __PRIVATE_getStore(e, "targets");
}
/**
* Helper to get a typed SimpleDbStore for the target globals object store.
*/ function __PRIVATE_globalTargetStore(e) {
	return __PRIVATE_getStore(e, "targetGlobal");
}
/**
* Helper to get a typed SimpleDbStore for the document target object store.
*/ function __PRIVATE_documentTargetStore(e) {
	return __PRIVATE_getStore(e, "targetDocuments");
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function __PRIVATE_bufferEntryComparator([e, t], [n, r]) {
	const i = __PRIVATE_primitiveComparator(e, n);
	return 0 === i ? __PRIVATE_primitiveComparator(t, r) : i;
}
/**
* Used to calculate the nth sequence number. Keeps a rolling buffer of the
* lowest n values passed to `addElement`, and finally reports the largest of
* them in `maxValue`.
*/ var __PRIVATE_RollingSequenceNumberBuffer = class {
	constructor(e) {
		this.Un = e, this.buffer = new SortedSet(__PRIVATE_bufferEntryComparator), this.Wn = 0;
	}
	Gn() {
		return ++this.Wn;
	}
	zn(e) {
		const t = [e, this.Gn()];
		if (this.buffer.size < this.Un) this.buffer = this.buffer.add(t);
		else {
			const e = this.buffer.last();
			__PRIVATE_bufferEntryComparator(t, e) < 0 && (this.buffer = this.buffer.delete(e).add(t));
		}
	}
	get maxValue() {
		return this.buffer.last()[0];
	}
};
/**
* This class is responsible for the scheduling of LRU garbage collection. It handles checking
* whether or not GC is enabled, as well as which delay to use before the next run.
*/ var __PRIVATE_LruScheduler = class {
	constructor(e, t, n) {
		this.garbageCollector = e, this.asyncQueue = t, this.localStore = n, this.jn = null;
	}
	start() {
		-1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Hn(6e4);
	}
	stop() {
		this.jn && (this.jn.cancel(), this.jn = null);
	}
	get started() {
		return null !== this.jn;
	}
	Hn(e) {
		__PRIVATE_logDebug("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`), this.jn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, (async () => {
			this.jn = null;
			try {
				await this.localStore.collectGarbage(this.garbageCollector);
			} catch (e) {
				__PRIVATE_isIndexedDbTransactionError(e) ? __PRIVATE_logDebug("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e) : await __PRIVATE_ignoreIfPrimaryLeaseLoss(e);
			}
			await this.Hn(3e5);
		}));
	}
};
/**
* Implements the steps for LRU garbage collection.
*/ var __PRIVATE_LruGarbageCollectorImpl = class {
	constructor(e, t) {
		this.Jn = e, this.params = t;
	}
	calculateTargetCount(e, t) {
		return this.Jn.Yn(e).next(((e) => Math.floor(t / 100 * e)));
	}
	nthSequenceNumber(e, t) {
		if (0 === t) return PersistencePromise.resolve(__PRIVATE_ListenSequence.oe);
		const n = new __PRIVATE_RollingSequenceNumberBuffer(t);
		return this.Jn.forEachTarget(e, ((e) => n.zn(e.sequenceNumber))).next((() => this.Jn.Zn(e, ((e) => n.zn(e))))).next((() => n.maxValue));
	}
	removeTargets(e, t, n) {
		return this.Jn.removeTargets(e, t, n);
	}
	removeOrphanedDocuments(e, t) {
		return this.Jn.removeOrphanedDocuments(e, t);
	}
	collect(e, t) {
		return -1 === this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", "Garbage collection skipped; disabled"), PersistencePromise.resolve(Re)) : this.getCacheSize(e).next(((n) => n < this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), Re) : this.Xn(e, t)));
	}
	getCacheSize(e) {
		return this.Jn.getCacheSize(e);
	}
	Xn(e, t) {
		let n, r, i, s, o, a, u;
		const c = Date.now();
		return this.calculateTargetCount(e, this.params.percentileToCollect).next(((t) => (t > this.params.maximumSequenceNumbersToCollect ? (__PRIVATE_logDebug("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`), r = this.params.maximumSequenceNumbersToCollect) : r = t, s = Date.now(), this.nthSequenceNumber(e, r)))).next(((r) => (n = r, o = Date.now(), this.removeTargets(e, n, t)))).next(((t) => (i = t, a = Date.now(), this.removeOrphanedDocuments(e, n)))).next(((e) => {
			if (u = Date.now(), __PRIVATE_getLogLevel() <= LogLevel.DEBUG) __PRIVATE_logDebug("LruGarbageCollector", `LRU Garbage Collection\n\tCounted targets in ${s - c}ms\n\tDetermined least recently used ${r} in ` + (o - s) + `ms
\tRemoved ${i} targets in ` + (a - o) + `ms
\tRemoved ${e} documents in ` + (u - a) + `ms
Total Duration: ${u - c}ms`);
			return PersistencePromise.resolve({
				didRun: !0,
				sequenceNumbersCollected: r,
				targetsRemoved: i,
				documentsRemoved: e
			});
		}));
	}
};
function __PRIVATE_newLruGarbageCollector(e, t) {
	return new __PRIVATE_LruGarbageCollectorImpl(e, t);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Provides LRU functionality for IndexedDB persistence. */ var __PRIVATE_IndexedDbLruDelegateImpl = class {
	constructor(e, t) {
		this.db = e, this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t);
	}
	Yn(e) {
		const t = this.er(e);
		return this.db.getTargetCache().getTargetCount(e).next(((e) => t.next(((t) => e + t))));
	}
	er(e) {
		let t = 0;
		return this.Zn(e, ((e) => {
			t++;
		})).next((() => t));
	}
	forEachTarget(e, t) {
		return this.db.getTargetCache().forEachTarget(e, t);
	}
	Zn(e, t) {
		return this.tr(e, ((e, n) => t(n)));
	}
	addReference(e, t, n) {
		return __PRIVATE_writeSentinelKey(e, n);
	}
	removeReference(e, t, n) {
		return __PRIVATE_writeSentinelKey(e, n);
	}
	removeTargets(e, t, n) {
		return this.db.getTargetCache().removeTargets(e, t, n);
	}
	markPotentiallyOrphaned(e, t) {
		return __PRIVATE_writeSentinelKey(e, t);
	}
	/**
	* Returns true if anything would prevent this document from being garbage
	* collected, given that the document in question is not present in any
	* targets and has a sequence number less than or equal to the upper bound for
	* the collection run.
	*/ nr(e, t) {
		return function __PRIVATE_mutationQueuesContainKey(e, t) {
			let n = !1;
			return __PRIVATE_mutationQueuesStore(e).Y(((r) => __PRIVATE_mutationQueueContainsKey(e, r, t).next(((e) => (e && (n = !0), PersistencePromise.resolve(!e)))))).next((() => n));
		}(e, t);
	}
	removeOrphanedDocuments(e, t) {
		const n = this.db.getRemoteDocumentCache().newChangeBuffer(), r = [];
		let i = 0;
		return this.tr(e, ((s, o) => {
			if (o <= t) {
				const t = this.nr(e, s).next(((t) => {
					if (!t) return i++, n.getEntry(e, s).next((() => (n.removeEntry(s, SnapshotVersion.min()), __PRIVATE_documentTargetStore(e).delete(function __PRIVATE_sentinelKey$1(e) {
						return [0, __PRIVATE_encodeResourcePath(e.path)];
					}(s)))));
				}));
				r.push(t);
			}
		})).next((() => PersistencePromise.waitFor(r))).next((() => n.apply(e))).next((() => i));
	}
	removeTarget(e, t) {
		const n = t.withSequenceNumber(e.currentSequenceNumber);
		return this.db.getTargetCache().updateTargetData(e, n);
	}
	updateLimboDocument(e, t) {
		return __PRIVATE_writeSentinelKey(e, t);
	}
	/**
	* Call provided function for each document in the cache that is 'orphaned'. Orphaned
	* means not a part of any target, so the only entry in the target-document index for
	* that document will be the sentinel row (targetId 0), which will also have the sequence
	* number for the last time the document was accessed.
	*/ tr(e, t) {
		const n = __PRIVATE_documentTargetStore(e);
		let r, i = __PRIVATE_ListenSequence.oe;
		return n.J({ index: "documentTargetsIndex" }, (([e, n], { path: s, sequenceNumber: o }) => {
			0 === e ? (i !== __PRIVATE_ListenSequence.oe && t(new DocumentKey(__PRIVATE_decodeResourcePath(r)), i), i = o, r = s) : i = __PRIVATE_ListenSequence.oe;
		})).next((() => {
			i !== __PRIVATE_ListenSequence.oe && t(new DocumentKey(__PRIVATE_decodeResourcePath(r)), i);
		}));
	}
	getCacheSize(e) {
		return this.db.getRemoteDocumentCache().getSize(e);
	}
};
function __PRIVATE_writeSentinelKey(e, t) {
	return __PRIVATE_documentTargetStore(e).put(function __PRIVATE_sentinelRow(e, t) {
		return {
			targetId: 0,
			path: __PRIVATE_encodeResourcePath(e.path),
			sequenceNumber: t
		};
	}(t, e.currentSequenceNumber));
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An in-memory buffer of entries to be written to a RemoteDocumentCache.
* It can be used to batch up a set of changes to be written to the cache, but
* additionally supports reading entries back with the `getEntry()` method,
* falling back to the underlying RemoteDocumentCache if no entry is
* buffered.
*
* Entries added to the cache *must* be read first. This is to facilitate
* calculating the size delta of the pending changes.
*
* PORTING NOTE: This class was implemented then removed from other platforms.
* If byte-counting ends up being needed on the other platforms, consider
* porting this class as part of that implementation work.
*/ var RemoteDocumentChangeBuffer = class {
	constructor() {
		this.changes = new ObjectMap(((e) => e.toString()), ((e, t) => e.isEqual(t))), this.changesApplied = !1;
	}
	/**
	* Buffers a `RemoteDocumentCache.addEntry()` call.
	*
	* You can only modify documents that have already been retrieved via
	* `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
	*/ addEntry(e) {
		this.assertNotApplied(), this.changes.set(e.key, e);
	}
	/**
	* Buffers a `RemoteDocumentCache.removeEntry()` call.
	*
	* You can only remove documents that have already been retrieved via
	* `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
	*/ removeEntry(e, t) {
		this.assertNotApplied(), this.changes.set(e, MutableDocument.newInvalidDocument(e).setReadTime(t));
	}
	/**
	* Looks up an entry in the cache. The buffered changes will first be checked,
	* and if no buffered change applies, this will forward to
	* `RemoteDocumentCache.getEntry()`.
	*
	* @param transaction - The transaction in which to perform any persistence
	*     operations.
	* @param documentKey - The key of the entry to look up.
	* @returns The cached document or an invalid document if we have nothing
	* cached.
	*/ getEntry(e, t) {
		this.assertNotApplied();
		const n = this.changes.get(t);
		return void 0 !== n ? PersistencePromise.resolve(n) : this.getFromCache(e, t);
	}
	/**
	* Looks up several entries in the cache, forwarding to
	* `RemoteDocumentCache.getEntry()`.
	*
	* @param transaction - The transaction in which to perform any persistence
	*     operations.
	* @param documentKeys - The keys of the entries to look up.
	* @returns A map of cached documents, indexed by key. If an entry cannot be
	*     found, the corresponding key will be mapped to an invalid document.
	*/ getEntries(e, t) {
		return this.getAllFromCache(e, t);
	}
	/**
	* Applies buffered changes to the underlying RemoteDocumentCache, using
	* the provided transaction.
	*/ apply(e) {
		return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e);
	}
	/** Helper to assert this.changes is not null  */ assertNotApplied() {}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The RemoteDocumentCache for IndexedDb. To construct, invoke
* `newIndexedDbRemoteDocumentCache()`.
*/ var __PRIVATE_IndexedDbRemoteDocumentCacheImpl = class {
	constructor(e) {
		this.serializer = e;
	}
	setIndexManager(e) {
		this.indexManager = e;
	}
	/**
	* Adds the supplied entries to the cache.
	*
	* All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
	* returned by `newChangeBuffer()` to ensure proper accounting of metadata.
	*/ addEntry(e, t, n) {
		return __PRIVATE_remoteDocumentsStore(e).put(n);
	}
	/**
	* Removes a document from the cache.
	*
	* All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
	* returned by `newChangeBuffer()` to ensure proper accounting of metadata.
	*/ removeEntry(e, t, n) {
		return __PRIVATE_remoteDocumentsStore(e).delete(
			/**
			* Returns a key that can be used for document lookups via the primary key of
			* the DbRemoteDocument object store.
			*/
			function __PRIVATE_dbReadTimeKey(e, t) {
				const n = e.path.toArray();
				return [
					n.slice(0, n.length - 2),
					n[n.length - 2],
					__PRIVATE_toDbTimestampKey(t),
					n[n.length - 1]
				];
			}(t, n)
		);
	}
	/**
	* Updates the current cache size.
	*
	* Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
	* cache's metadata.
	*/ updateMetadata(e, t) {
		return this.getMetadata(e).next(((n) => (n.byteSize += t, this.rr(e, n))));
	}
	getEntry(e, t) {
		let n = MutableDocument.newInvalidDocument(t);
		return __PRIVATE_remoteDocumentsStore(e).J({
			index: "documentKeyIndex",
			range: IDBKeyRange.only(__PRIVATE_dbKey(t))
		}, ((e, r) => {
			n = this.ir(t, r);
		})).next((() => n));
	}
	/**
	* Looks up an entry in the cache.
	*
	* @param documentKey - The key of the entry to look up.
	* @returns The cached document entry and its size.
	*/ sr(e, t) {
		let n = {
			size: 0,
			document: MutableDocument.newInvalidDocument(t)
		};
		return __PRIVATE_remoteDocumentsStore(e).J({
			index: "documentKeyIndex",
			range: IDBKeyRange.only(__PRIVATE_dbKey(t))
		}, ((e, r) => {
			n = {
				document: this.ir(t, r),
				size: __PRIVATE_dbDocumentSize(r)
			};
		})).next((() => n));
	}
	getEntries(e, t) {
		let n = __PRIVATE_mutableDocumentMap();
		return this._r(e, t, ((e, t) => {
			const r = this.ir(e, t);
			n = n.insert(e, r);
		})).next((() => n));
	}
	/**
	* Looks up several entries in the cache.
	*
	* @param documentKeys - The set of keys entries to look up.
	* @returns A map of documents indexed by key and a map of sizes indexed by
	*     key (zero if the document does not exist).
	*/ ar(e, t) {
		let n = __PRIVATE_mutableDocumentMap(), r = new SortedMap(DocumentKey.comparator);
		return this._r(e, t, ((e, t) => {
			const i = this.ir(e, t);
			n = n.insert(e, i), r = r.insert(e, __PRIVATE_dbDocumentSize(t));
		})).next((() => ({
			documents: n,
			ur: r
		})));
	}
	_r(e, t, n) {
		if (t.isEmpty()) return PersistencePromise.resolve();
		let r = new SortedSet(__PRIVATE_dbKeyComparator);
		t.forEach(((e) => r = r.add(e)));
		const i = IDBKeyRange.bound(__PRIVATE_dbKey(r.first()), __PRIVATE_dbKey(r.last())), s = r.getIterator();
		let o = s.getNext();
		return __PRIVATE_remoteDocumentsStore(e).J({
			index: "documentKeyIndex",
			range: i
		}, ((e, t, r) => {
			const i = DocumentKey.fromSegments([
				...t.prefixPath,
				t.collectionGroup,
				t.documentId
			]);
			for (; o && __PRIVATE_dbKeyComparator(o, i) < 0;) n(o, null), o = s.getNext();
			o && o.isEqual(i) && (n(o, t), o = s.hasNext() ? s.getNext() : null), o ? r.$(__PRIVATE_dbKey(o)) : r.done();
		})).next((() => {
			for (; o;) n(o, null), o = s.hasNext() ? s.getNext() : null;
		}));
	}
	getDocumentsMatchingQuery(e, t, n, r, i) {
		const s = t.path, o = [
			s.popLast().toArray(),
			s.lastSegment(),
			__PRIVATE_toDbTimestampKey(n.readTime),
			n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()
		], _ = [
			s.popLast().toArray(),
			s.lastSegment(),
			[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
			""
		];
		return __PRIVATE_remoteDocumentsStore(e).U(IDBKeyRange.bound(o, _, !0)).next(((e) => {
			i?.incrementDocumentReadCount(e.length);
			let n = __PRIVATE_mutableDocumentMap();
			for (const i of e) {
				const e = this.ir(DocumentKey.fromSegments(i.prefixPath.concat(i.collectionGroup, i.documentId)), i);
				e.isFoundDocument() && (__PRIVATE_queryMatches(t, e) || r.has(e.key)) && (n = n.insert(e.key, e));
			}
			return n;
		}));
	}
	getAllFromCollectionGroup(e, t, n, r) {
		let i = __PRIVATE_mutableDocumentMap();
		const s = __PRIVATE_dbCollectionGroupKey(t, n), o = __PRIVATE_dbCollectionGroupKey(t, IndexOffset.max());
		return __PRIVATE_remoteDocumentsStore(e).J({
			index: "collectionGroupIndex",
			range: IDBKeyRange.bound(s, o, !0)
		}, ((e, t, n) => {
			const s = this.ir(DocumentKey.fromSegments(t.prefixPath.concat(t.collectionGroup, t.documentId)), t);
			i = i.insert(s.key, s), i.size === r && n.done();
		})).next((() => i));
	}
	newChangeBuffer(e) {
		return new __PRIVATE_IndexedDbRemoteDocumentChangeBuffer(this, !!e && e.trackRemovals);
	}
	getSize(e) {
		return this.getMetadata(e).next(((e) => e.byteSize));
	}
	getMetadata(e) {
		return __PRIVATE_documentGlobalStore(e).get("remoteDocumentGlobalKey").next(((e) => (__PRIVATE_hardAssert(!!e), e)));
	}
	rr(e, t) {
		return __PRIVATE_documentGlobalStore(e).put("remoteDocumentGlobalKey", t);
	}
	/**
	* Decodes `dbRemoteDoc` and returns the document (or an invalid document if
	* the document corresponds to the format used for sentinel deletes).
	*/ ir(e, t) {
		if (t) {
			const e = __PRIVATE_fromDbRemoteDocument(this.serializer, t);
			if (!(e.isNoDocument() && e.version.isEqual(SnapshotVersion.min()))) return e;
		}
		return MutableDocument.newInvalidDocument(e);
	}
};
/** Creates a new IndexedDbRemoteDocumentCache. */ function __PRIVATE_newIndexedDbRemoteDocumentCache(e) {
	return new __PRIVATE_IndexedDbRemoteDocumentCacheImpl(e);
}
/**
* Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
*
* Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
* delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
* when we apply the changes.
*/ var __PRIVATE_IndexedDbRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
	/**
	* @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
	* @param trackRemovals - Whether to create sentinel deletes that can be tracked by
	* `getNewDocumentChanges()`.
	*/
	constructor(e, t) {
		super(), this.cr = e, this.trackRemovals = t, this.lr = new ObjectMap(((e) => e.toString()), ((e, t) => e.isEqual(t)));
	}
	applyChanges(e) {
		const t = [];
		let n = 0, r = new SortedSet(((e, t) => __PRIVATE_primitiveComparator(e.canonicalString(), t.canonicalString())));
		return this.changes.forEach(((i, s) => {
			const o = this.lr.get(i);
			if (t.push(this.cr.removeEntry(e, i, o.readTime)), s.isValidDocument()) {
				const _ = __PRIVATE_toDbRemoteDocument(this.cr.serializer, s);
				r = r.add(i.path.popLast());
				const a = __PRIVATE_dbDocumentSize(_);
				n += a - o.size, t.push(this.cr.addEntry(e, i, _));
			} else if (n -= o.size, this.trackRemovals) {
				const n = __PRIVATE_toDbRemoteDocument(this.cr.serializer, s.convertToNoDocument(SnapshotVersion.min()));
				t.push(this.cr.addEntry(e, i, n));
			}
		})), r.forEach(((n) => {
			t.push(this.cr.indexManager.addToCollectionParentIndex(e, n));
		})), t.push(this.cr.updateMetadata(e, n)), PersistencePromise.waitFor(t);
	}
	getFromCache(e, t) {
		return this.cr.sr(e, t).next(((e) => (this.lr.set(t, {
			size: e.size,
			readTime: e.document.readTime
		}), e.document)));
	}
	getAllFromCache(e, t) {
		return this.cr.ar(e, t).next((({ documents: e, ur: t }) => (t.forEach(((t, n) => {
			this.lr.set(t, {
				size: n,
				readTime: e.get(t).readTime
			});
		})), e)));
	}
};
function __PRIVATE_documentGlobalStore(e) {
	return __PRIVATE_getStore(e, "remoteDocumentGlobal");
}
/**
* Helper to get a typed SimpleDbStore for the remoteDocuments object store.
*/ function __PRIVATE_remoteDocumentsStore(e) {
	return __PRIVATE_getStore(e, "remoteDocumentsV14");
}
/**
* Returns a key that can be used for document lookups on the
* `DbRemoteDocumentDocumentKeyIndex` index.
*/ function __PRIVATE_dbKey(e) {
	const t = e.path.toArray();
	return [
		t.slice(0, t.length - 2),
		t[t.length - 2],
		t[t.length - 1]
	];
}
function __PRIVATE_dbCollectionGroupKey(e, t) {
	const n = t.documentKey.path.toArray();
	return [
		e,
		__PRIVATE_toDbTimestampKey(t.readTime),
		n.slice(0, n.length - 2),
		n.length > 0 ? n[n.length - 1] : ""
	];
}
/**
* Comparator that compares document keys according to the primary key sorting
* used by the `DbRemoteDocumentDocument` store (by prefix path, collection id
* and then document ID).
*
* Visible for testing.
*/ function __PRIVATE_dbKeyComparator(e, t) {
	const n = e.path.toArray(), r = t.path.toArray();
	let i = 0;
	for (let e = 0; e < n.length - 2 && e < r.length - 2; ++e) if (i = __PRIVATE_primitiveComparator(n[e], r[e]), i) return i;
	return i = __PRIVATE_primitiveComparator(n.length, r.length), i || (i = __PRIVATE_primitiveComparator(n[n.length - 2], r[r.length - 2]), i || __PRIVATE_primitiveComparator(n[n.length - 1], r[r.length - 1]));
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Schema Version for the Web client:
* 1.  Initial version including Mutation Queue, Query Cache, and Remote
*     Document Cache
* 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
*     longer required because migration 3 unconditionally clears it.
* 3.  Dropped and re-created Query Cache to deal with cache corruption related
*     to limbo resolution. Addresses
*     https://github.com/firebase/firebase-ios-sdk/issues/1548
* 4.  Multi-Tab Support.
* 5.  Removal of held write acks.
* 6.  Create document global for tracking document cache size.
* 7.  Ensure every cached document has a sentinel row with a sequence number.
* 8.  Add collection-parent index for Collection Group queries.
* 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
*     an auto-incrementing ID. This is required for Index-Free queries.
* 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
* 11. Add bundles and named_queries for bundle support.
* 12. Add document overlays.
* 13. Rewrite the keys of the remote document cache to allow for efficient
*     document lookup via `getAll()`.
* 14. Add overlays.
* 15. Add indexing support.
* 16. Parse timestamp strings before creating index entries.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a local view (overlay) of a document, and the fields that are
* locally mutated.
*/
var OverlayedDocument = class {
	constructor(e, t) {
		this.overlayedDocument = e, this.mutatedFields = t;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A readonly view of the local state of all documents we're tracking (i.e. we
* have a cached version in remoteDocumentCache or local mutations for the
* document). The view is computed by applying the mutations in the
* MutationQueue to the RemoteDocumentCache.
*/ var LocalDocumentsView = class {
	constructor(e, t, n, r) {
		this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r;
	}
	/**
	* Get the local view of the document identified by `key`.
	*
	* @returns Local view of the document or null if we don't have any cached
	* state for it.
	*/ getDocument(e, t) {
		let n = null;
		return this.documentOverlayCache.getOverlay(e, t).next(((r) => (n = r, this.remoteDocumentCache.getEntry(e, t)))).next(((e) => (null !== n && __PRIVATE_mutationApplyToLocalView(n.mutation, e, FieldMask.empty(), Timestamp.now()), e)));
	}
	/**
	* Gets the local view of the documents identified by `keys`.
	*
	* If we don't have cached state for a document in `keys`, a NoDocument will
	* be stored for that key in the resulting set.
	*/ getDocuments(e, t) {
		return this.remoteDocumentCache.getEntries(e, t).next(((t) => this.getLocalViewOfDocuments(e, t, __PRIVATE_documentKeySet()).next((() => t))));
	}
	/**
	* Similar to `getDocuments`, but creates the local view from the given
	* `baseDocs` without retrieving documents from the local store.
	*
	* @param transaction - The transaction this operation is scoped to.
	* @param docs - The documents to apply local mutations to get the local views.
	* @param existenceStateChanged - The set of document keys whose existence state
	*   is changed. This is useful to determine if some documents overlay needs
	*   to be recalculated.
	*/ getLocalViewOfDocuments(e, t, n = __PRIVATE_documentKeySet()) {
		const r = __PRIVATE_newOverlayMap();
		return this.populateOverlays(e, r, t).next((() => this.computeViews(e, t, r, n).next(((e) => {
			let t = documentMap();
			return e.forEach(((e, n) => {
				t = t.insert(e, n.overlayedDocument);
			})), t;
		}))));
	}
	/**
	* Gets the overlayed documents for the given document map, which will include
	* the local view of those documents and a `FieldMask` indicating which fields
	* are mutated locally, `null` if overlay is a Set or Delete mutation.
	*/ getOverlayedDocuments(e, t) {
		const n = __PRIVATE_newOverlayMap();
		return this.populateOverlays(e, n, t).next((() => this.computeViews(e, t, n, __PRIVATE_documentKeySet())));
	}
	/**
	* Fetches the overlays for {@code docs} and adds them to provided overlay map
	* if the map does not already contain an entry for the given document key.
	*/ populateOverlays(e, t, n) {
		const r = [];
		return n.forEach(((e) => {
			t.has(e) || r.push(e);
		})), this.documentOverlayCache.getOverlays(e, r).next(((e) => {
			e.forEach(((e, n) => {
				t.set(e, n);
			}));
		}));
	}
	/**
	* Computes the local view for the given documents.
	*
	* @param docs - The documents to compute views for. It also has the base
	*   version of the documents.
	* @param overlays - The overlays that need to be applied to the given base
	*   version of the documents.
	* @param existenceStateChanged - A set of documents whose existence states
	*   might have changed. This is used to determine if we need to re-calculate
	*   overlays from mutation queues.
	* @return A map represents the local documents view.
	*/ computeViews(e, t, n, r) {
		let i = __PRIVATE_mutableDocumentMap();
		const s = __PRIVATE_newDocumentKeyMap(), o = function __PRIVATE_newOverlayedDocumentMap() {
			return __PRIVATE_newDocumentKeyMap();
		}();
		return t.forEach(((e, t) => {
			const o = n.get(t.key);
			r.has(t.key) && (void 0 === o || o.mutation instanceof __PRIVATE_PatchMutation) ? i = i.insert(t.key, t) : void 0 !== o ? (s.set(t.key, o.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o.mutation, t, o.mutation.getFieldMask(), Timestamp.now())) : s.set(t.key, FieldMask.empty());
		})), this.recalculateAndSaveOverlays(e, i).next(((e) => (e.forEach(((e, t) => s.set(e, t))), t.forEach(((e, t) => {
			var n;
			return o.set(e, new OverlayedDocument(t, null !== (n = s.get(e)) && void 0 !== n ? n : null));
		})), o)));
	}
	recalculateAndSaveOverlays(e, t) {
		const n = __PRIVATE_newDocumentKeyMap();
		let r = new SortedMap(((e, t) => e - t)), i = __PRIVATE_documentKeySet();
		return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next(((e) => {
			for (const i of e) i.keys().forEach(((e) => {
				const s = t.get(e);
				if (null === s) return;
				let o = n.get(e) || FieldMask.empty();
				o = i.applyToLocalView(s, o), n.set(e, o);
				const _ = (r.get(i.batchId) || __PRIVATE_documentKeySet()).add(e);
				r = r.insert(i.batchId, _);
			}));
		})).next((() => {
			const s = [], o = r.getReverseIterator();
			for (; o.hasNext();) {
				const r = o.getNext(), _ = r.key, a = r.value, u = __PRIVATE_newMutationMap();
				a.forEach(((e) => {
					if (!i.has(e)) {
						const r = __PRIVATE_calculateOverlayMutation(t.get(e), n.get(e));
						null !== r && u.set(e, r), i = i.add(e);
					}
				})), s.push(this.documentOverlayCache.saveOverlays(e, _, u));
			}
			return PersistencePromise.waitFor(s);
		})).next((() => n));
	}
	/**
	* Recalculates overlays by reading the documents from remote document cache
	* first, and saves them after they are calculated.
	*/ recalculateAndSaveOverlaysForDocumentKeys(e, t) {
		return this.remoteDocumentCache.getEntries(e, t).next(((t) => this.recalculateAndSaveOverlays(e, t)));
	}
	/**
	* Performs a query against the local view of all documents.
	*
	* @param transaction - The persistence transaction.
	* @param query - The query to match documents against.
	* @param offset - Read time and key to start scanning by (exclusive).
	* @param context - A optional tracker to keep a record of important details
	*   during database local query execution.
	*/ getDocumentsMatchingQuery(e, t, n, r) {
		/**
		* Returns whether the query matches a single document by path (rather than a
		* collection).
		*/
		return function __PRIVATE_isDocumentQuery$1(e) {
			return DocumentKey.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length;
		}(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : __PRIVATE_isCollectionGroupQuery(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r);
	}
	/**
	* Given a collection group, returns the next documents that follow the provided offset, along
	* with an updated batch ID.
	*
	* <p>The documents returned by this method are ordered by remote version from the provided
	* offset. If there are no more remote documents after the provided offset, documents with
	* mutations in order of batch id from the offset are returned. Since all documents in a batch are
	* returned together, the total number of documents returned can exceed {@code count}.
	*
	* @param transaction
	* @param collectionGroup The collection group for the documents.
	* @param offset The offset to index into.
	* @param count The number of documents to return
	* @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
	*/ getNextDocuments(e, t, n, r) {
		return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next(((i) => {
			const s = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
			let o = -1, _ = i;
			return s.next(((t) => PersistencePromise.forEach(t, ((t, n) => (o < n.largestBatchId && (o = n.largestBatchId), i.get(t) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e, t).next(((e) => {
				_ = _.insert(t, e);
			}))))).next((() => this.populateOverlays(e, t, i))).next((() => this.computeViews(e, _, t, __PRIVATE_documentKeySet()))).next(((e) => ({
				batchId: o,
				changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e)
			})))));
		}));
	}
	getDocumentsMatchingDocumentQuery(e, t) {
		return this.getDocument(e, new DocumentKey(t)).next(((e) => {
			let t = documentMap();
			return e.isFoundDocument() && (t = t.insert(e.key, e)), t;
		}));
	}
	getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
		const i = t.collectionGroup;
		let s = documentMap();
		return this.indexManager.getCollectionParents(e, i).next(((o) => PersistencePromise.forEach(o, ((o) => {
			const _ = function __PRIVATE_asCollectionQueryAtPath(e, t) {
				return new __PRIVATE_QueryImpl(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt);
			}(t, o.child(i));
			return this.getDocumentsMatchingCollectionQuery(e, _, n, r).next(((e) => {
				e.forEach(((e, t) => {
					s = s.insert(e, t);
				}));
			}));
		})).next((() => s))));
	}
	getDocumentsMatchingCollectionQuery(e, t, n, r) {
		let i;
		return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next(((s) => (i = s, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r)))).next(((e) => {
			i.forEach(((t, n) => {
				const r = n.getKey();
				null === e.get(r) && (e = e.insert(r, MutableDocument.newInvalidDocument(r)));
			}));
			let n = documentMap();
			return e.forEach(((e, r) => {
				const s = i.get(e);
				void 0 !== s && __PRIVATE_mutationApplyToLocalView(s.mutation, r, FieldMask.empty(), Timestamp.now()), __PRIVATE_queryMatches(t, r) && (n = n.insert(e, r));
			})), n;
		}));
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_MemoryBundleCache = class {
	constructor(e) {
		this.serializer = e, this.hr = /* @__PURE__ */ new Map(), this.Pr = /* @__PURE__ */ new Map();
	}
	getBundleMetadata(e, t) {
		return PersistencePromise.resolve(this.hr.get(t));
	}
	saveBundleMetadata(e, t) {
		return this.hr.set(
			t.id,
			/** Decodes a BundleMetadata proto into a BundleMetadata object. */
			function __PRIVATE_fromBundleMetadata(e) {
				return {
					id: e.id,
					version: e.version,
					createTime: __PRIVATE_fromVersion(e.createTime)
				};
			}(t)
		), PersistencePromise.resolve();
	}
	getNamedQuery(e, t) {
		return PersistencePromise.resolve(this.Pr.get(t));
	}
	saveNamedQuery(e, t) {
		return this.Pr.set(t.name, function __PRIVATE_fromProtoNamedQuery(e) {
			return {
				name: e.name,
				query: __PRIVATE_fromBundledQuery(e.bundledQuery),
				readTime: __PRIVATE_fromVersion(e.readTime)
			};
		}(t)), PersistencePromise.resolve();
	}
};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An in-memory implementation of DocumentOverlayCache.
*/ var __PRIVATE_MemoryDocumentOverlayCache = class {
	constructor() {
		this.overlays = new SortedMap(DocumentKey.comparator), this.Ir = /* @__PURE__ */ new Map();
	}
	getOverlay(e, t) {
		return PersistencePromise.resolve(this.overlays.get(t));
	}
	getOverlays(e, t) {
		const n = __PRIVATE_newOverlayMap();
		return PersistencePromise.forEach(t, ((t) => this.getOverlay(e, t).next(((e) => {
			null !== e && n.set(t, e);
		})))).next((() => n));
	}
	saveOverlays(e, t, n) {
		return n.forEach(((n, r) => {
			this.ht(e, t, r);
		})), PersistencePromise.resolve();
	}
	removeOverlaysForBatchId(e, t, n) {
		const r = this.Ir.get(n);
		return void 0 !== r && (r.forEach(((e) => this.overlays = this.overlays.remove(e))), this.Ir.delete(n)), PersistencePromise.resolve();
	}
	getOverlaysForCollection(e, t, n) {
		const r = __PRIVATE_newOverlayMap(), i = t.length + 1, s = new DocumentKey(t.child("")), o = this.overlays.getIteratorFrom(s);
		for (; o.hasNext();) {
			const e = o.getNext().value, s = e.getKey();
			if (!t.isPrefixOf(s.path)) break;
			s.path.length === i && e.largestBatchId > n && r.set(e.getKey(), e);
		}
		return PersistencePromise.resolve(r);
	}
	getOverlaysForCollectionGroup(e, t, n, r) {
		let i = new SortedMap(((e, t) => e - t));
		const s = this.overlays.getIterator();
		for (; s.hasNext();) {
			const e = s.getNext().value;
			if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
				let t = i.get(e.largestBatchId);
				null === t && (t = __PRIVATE_newOverlayMap(), i = i.insert(e.largestBatchId, t)), t.set(e.getKey(), e);
			}
		}
		const o = __PRIVATE_newOverlayMap(), _ = i.getIterator();
		for (; _.hasNext();) if (_.getNext().value.forEach(((e, t) => o.set(e, t))), o.size() >= r) break;
		return PersistencePromise.resolve(o);
	}
	ht(e, t, n) {
		const r = this.overlays.get(n.key);
		if (null !== r) {
			const e = this.Ir.get(r.largestBatchId).delete(n.key);
			this.Ir.set(r.largestBatchId, e);
		}
		this.overlays = this.overlays.insert(n.key, new Overlay(t, n));
		let i = this.Ir.get(t);
		void 0 === i && (i = __PRIVATE_documentKeySet(), this.Ir.set(t, i)), this.Ir.set(t, i.add(n.key));
	}
};
/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_MemoryGlobalsCache = class {
	constructor() {
		this.sessionToken = ByteString.EMPTY_BYTE_STRING;
	}
	getSessionToken(e) {
		return PersistencePromise.resolve(this.sessionToken);
	}
	setSessionToken(e, t) {
		return this.sessionToken = t, PersistencePromise.resolve();
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A collection of references to a document from some kind of numbered entity
* (either a target ID or batch ID). As references are added to or removed from
* the set corresponding events are emitted to a registered garbage collector.
*
* Each reference is represented by a DocumentReference object. Each of them
* contains enough information to uniquely identify the reference. They are all
* stored primarily in a set sorted by key. A document is considered garbage if
* there's no references in that set (this can be efficiently checked thanks to
* sorting by key).
*
* ReferenceSet also keeps a secondary set that contains references sorted by
* IDs. This one is used to efficiently implement removal of all references by
* some target ID.
*/ var __PRIVATE_ReferenceSet = class {
	constructor() {
		this.Tr = new SortedSet(__PRIVATE_DocReference.Er), this.dr = new SortedSet(__PRIVATE_DocReference.Ar);
	}
	/** Returns true if the reference set contains no references. */ isEmpty() {
		return this.Tr.isEmpty();
	}
	/** Adds a reference to the given document key for the given ID. */ addReference(e, t) {
		const n = new __PRIVATE_DocReference(e, t);
		this.Tr = this.Tr.add(n), this.dr = this.dr.add(n);
	}
	/** Add references to the given document keys for the given ID. */ Rr(e, t) {
		e.forEach(((e) => this.addReference(e, t)));
	}
	/**
	* Removes a reference to the given document key for the given
	* ID.
	*/ removeReference(e, t) {
		this.Vr(new __PRIVATE_DocReference(e, t));
	}
	mr(e, t) {
		e.forEach(((e) => this.removeReference(e, t)));
	}
	/**
	* Clears all references with a given ID. Calls removeRef() for each key
	* removed.
	*/ gr(e) {
		const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1), i = [];
		return this.dr.forEachInRange([n, r], ((e) => {
			this.Vr(e), i.push(e.key);
		})), i;
	}
	pr() {
		this.Tr.forEach(((e) => this.Vr(e)));
	}
	Vr(e) {
		this.Tr = this.Tr.delete(e), this.dr = this.dr.delete(e);
	}
	yr(e) {
		const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1);
		let i = __PRIVATE_documentKeySet();
		return this.dr.forEachInRange([n, r], ((e) => {
			i = i.add(e.key);
		})), i;
	}
	containsKey(e) {
		const t = new __PRIVATE_DocReference(e, 0), n = this.Tr.firstAfterOrEqual(t);
		return null !== n && e.isEqual(n.key);
	}
};
var __PRIVATE_DocReference = class {
	constructor(e, t) {
		this.key = e, this.wr = t;
	}
	/** Compare by key then by ID */ static Er(e, t) {
		return DocumentKey.comparator(e.key, t.key) || __PRIVATE_primitiveComparator(e.wr, t.wr);
	}
	/** Compare by ID then by key */ static Ar(e, t) {
		return __PRIVATE_primitiveComparator(e.wr, t.wr) || DocumentKey.comparator(e.key, t.key);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_MemoryMutationQueue = class {
	constructor(e, t) {
		this.indexManager = e, this.referenceDelegate = t, this.mutationQueue = [], this.Sr = 1, this.br = new SortedSet(__PRIVATE_DocReference.Er);
	}
	checkEmpty(e) {
		return PersistencePromise.resolve(0 === this.mutationQueue.length);
	}
	addMutationBatch(e, t, n, r) {
		const i = this.Sr;
		this.Sr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
		const s = new MutationBatch(i, t, n, r);
		this.mutationQueue.push(s);
		for (const t of r) this.br = this.br.add(new __PRIVATE_DocReference(t.key, i)), this.indexManager.addToCollectionParentIndex(e, t.key.path.popLast());
		return PersistencePromise.resolve(s);
	}
	lookupMutationBatch(e, t) {
		return PersistencePromise.resolve(this.Dr(t));
	}
	getNextMutationBatchAfterBatchId(e, t) {
		const n = t + 1, r = this.vr(n), i = r < 0 ? 0 : r;
		return PersistencePromise.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
	}
	getHighestUnacknowledgedBatchId() {
		return PersistencePromise.resolve(0 === this.mutationQueue.length ? -1 : this.Sr - 1);
	}
	getAllMutationBatches(e) {
		return PersistencePromise.resolve(this.mutationQueue.slice());
	}
	getAllMutationBatchesAffectingDocumentKey(e, t) {
		const n = new __PRIVATE_DocReference(t, 0), r = new __PRIVATE_DocReference(t, Number.POSITIVE_INFINITY), i = [];
		return this.br.forEachInRange([n, r], ((e) => {
			const t = this.Dr(e.wr);
			i.push(t);
		})), PersistencePromise.resolve(i);
	}
	getAllMutationBatchesAffectingDocumentKeys(e, t) {
		let n = new SortedSet(__PRIVATE_primitiveComparator);
		return t.forEach(((e) => {
			const t = new __PRIVATE_DocReference(e, 0), r = new __PRIVATE_DocReference(e, Number.POSITIVE_INFINITY);
			this.br.forEachInRange([t, r], ((e) => {
				n = n.add(e.wr);
			}));
		})), PersistencePromise.resolve(this.Cr(n));
	}
	getAllMutationBatchesAffectingQuery(e, t) {
		const n = t.path, r = n.length + 1;
		let i = n;
		DocumentKey.isDocumentKey(i) || (i = i.child(""));
		const s = new __PRIVATE_DocReference(new DocumentKey(i), 0);
		let o = new SortedSet(__PRIVATE_primitiveComparator);
		return this.br.forEachWhile(((e) => {
			const t = e.key.path;
			return !!n.isPrefixOf(t) && (t.length === r && (o = o.add(e.wr)), !0);
		}), s), PersistencePromise.resolve(this.Cr(o));
	}
	Cr(e) {
		const t = [];
		return e.forEach(((e) => {
			const n = this.Dr(e);
			null !== n && t.push(n);
		})), t;
	}
	removeMutationBatch(e, t) {
		__PRIVATE_hardAssert(0 === this.Fr(t.batchId, "removed")), this.mutationQueue.shift();
		let n = this.br;
		return PersistencePromise.forEach(t.mutations, ((r) => {
			const i = new __PRIVATE_DocReference(r.key, t.batchId);
			return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key);
		})).next((() => {
			this.br = n;
		}));
	}
	On(e) {}
	containsKey(e, t) {
		const n = new __PRIVATE_DocReference(t, 0), r = this.br.firstAfterOrEqual(n);
		return PersistencePromise.resolve(t.isEqual(r && r.key));
	}
	performConsistencyCheck(e) {
		return this.mutationQueue.length, PersistencePromise.resolve();
	}
	/**
	* Finds the index of the given batchId in the mutation queue and asserts that
	* the resulting index is within the bounds of the queue.
	*
	* @param batchId - The batchId to search for
	* @param action - A description of what the caller is doing, phrased in passive
	* form (e.g. "acknowledged" in a routine that acknowledges batches).
	*/ Fr(e, t) {
		return this.vr(e);
	}
	/**
	* Finds the index of the given batchId in the mutation queue. This operation
	* is O(1).
	*
	* @returns The computed index of the batch with the given batchId, based on
	* the state of the queue. Note this index can be negative if the requested
	* batchId has already been removed from the queue or past the end of the
	* queue if the batchId is larger than the last added batch.
	*/ vr(e) {
		if (0 === this.mutationQueue.length) return 0;
		return e - this.mutationQueue[0].batchId;
	}
	/**
	* A version of lookupMutationBatch that doesn't return a promise, this makes
	* other functions that uses this code easier to read and more efficient.
	*/ Dr(e) {
		const t = this.vr(e);
		if (t < 0 || t >= this.mutationQueue.length) return null;
		return this.mutationQueue[t];
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
* `newMemoryRemoteDocumentCache()`.
*/
var __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
	/**
	* @param sizer - Used to assess the size of a document. For eager GC, this is
	* expected to just return 0 to avoid unnecessarily doing the work of
	* calculating the size.
	*/
	constructor(e) {
		this.Mr = e, this.docs = function __PRIVATE_documentEntryMap() {
			return new SortedMap(DocumentKey.comparator);
		}(), this.size = 0;
	}
	setIndexManager(e) {
		this.indexManager = e;
	}
	/**
	* Adds the supplied entry to the cache and updates the cache size as appropriate.
	*
	* All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
	* returned by `newChangeBuffer()`.
	*/ addEntry(e, t) {
		const n = t.key, r = this.docs.get(n), i = r ? r.size : 0, s = this.Mr(t);
		return this.docs = this.docs.insert(n, {
			document: t.mutableCopy(),
			size: s
		}), this.size += s - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
	}
	/**
	* Removes the specified entry from the cache and updates the cache size as appropriate.
	*
	* All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
	* returned by `newChangeBuffer()`.
	*/ removeEntry(e) {
		const t = this.docs.get(e);
		t && (this.docs = this.docs.remove(e), this.size -= t.size);
	}
	getEntry(e, t) {
		const n = this.docs.get(t);
		return PersistencePromise.resolve(n ? n.document.mutableCopy() : MutableDocument.newInvalidDocument(t));
	}
	getEntries(e, t) {
		let n = __PRIVATE_mutableDocumentMap();
		return t.forEach(((e) => {
			const t = this.docs.get(e);
			n = n.insert(e, t ? t.document.mutableCopy() : MutableDocument.newInvalidDocument(e));
		})), PersistencePromise.resolve(n);
	}
	getDocumentsMatchingQuery(e, t, n, r) {
		let i = __PRIVATE_mutableDocumentMap();
		const s = t.path, o = new DocumentKey(s.child("")), _ = this.docs.getIteratorFrom(o);
		for (; _.hasNext();) {
			const { key: e, value: { document: o } } = _.getNext();
			if (!s.isPrefixOf(e.path)) break;
			e.path.length > s.length + 1 || __PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o), n) <= 0 || (r.has(o.key) || __PRIVATE_queryMatches(t, o)) && (i = i.insert(o.key, o.mutableCopy()));
		}
		return PersistencePromise.resolve(i);
	}
	getAllFromCollectionGroup(e, t, n, r) {
		fail();
	}
	Or(e, t) {
		return PersistencePromise.forEach(this.docs, ((e) => t(e)));
	}
	newChangeBuffer(e) {
		return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
	}
	getSize(e) {
		return PersistencePromise.resolve(this.size);
	}
};
/**
* Creates a new memory-only RemoteDocumentCache.
*
* @param sizer - Used to assess the size of a document. For eager GC, this is
* expected to just return 0 to avoid unnecessarily doing the work of
* calculating the size.
*/
/**
* Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
*/
var __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
	constructor(e) {
		super(), this.cr = e;
	}
	applyChanges(e) {
		const t = [];
		return this.changes.forEach(((n, r) => {
			r.isValidDocument() ? t.push(this.cr.addEntry(e, r)) : this.cr.removeEntry(n);
		})), PersistencePromise.waitFor(t);
	}
	getFromCache(e, t) {
		return this.cr.getEntry(e, t);
	}
	getAllFromCache(e, t) {
		return this.cr.getEntries(e, t);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_MemoryTargetCache = class {
	constructor(e) {
		this.persistence = e, this.Nr = new ObjectMap(((e) => __PRIVATE_canonifyTarget(e)), __PRIVATE_targetEquals), this.lastRemoteSnapshotVersion = SnapshotVersion.min(), this.highestTargetId = 0, this.Lr = 0, this.Br = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.kr = __PRIVATE_TargetIdGenerator.Bn();
	}
	forEachTarget(e, t) {
		return this.Nr.forEach(((e, n) => t(n))), PersistencePromise.resolve();
	}
	getLastRemoteSnapshotVersion(e) {
		return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
	}
	getHighestSequenceNumber(e) {
		return PersistencePromise.resolve(this.Lr);
	}
	allocateTargetId(e) {
		return this.highestTargetId = this.kr.next(), PersistencePromise.resolve(this.highestTargetId);
	}
	setTargetsMetadata(e, t, n) {
		return n && (this.lastRemoteSnapshotVersion = n), t > this.Lr && (this.Lr = t), PersistencePromise.resolve();
	}
	Kn(e) {
		this.Nr.set(e.target, e);
		const t = e.targetId;
		t > this.highestTargetId && (this.kr = new __PRIVATE_TargetIdGenerator(t), this.highestTargetId = t), e.sequenceNumber > this.Lr && (this.Lr = e.sequenceNumber);
	}
	addTargetData(e, t) {
		return this.Kn(t), this.targetCount += 1, PersistencePromise.resolve();
	}
	updateTargetData(e, t) {
		return this.Kn(t), PersistencePromise.resolve();
	}
	removeTargetData(e, t) {
		return this.Nr.delete(t.target), this.Br.gr(t.targetId), this.targetCount -= 1, PersistencePromise.resolve();
	}
	removeTargets(e, t, n) {
		let r = 0;
		const i = [];
		return this.Nr.forEach(((s, o) => {
			o.sequenceNumber <= t && null === n.get(o.targetId) && (this.Nr.delete(s), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++);
		})), PersistencePromise.waitFor(i).next((() => r));
	}
	getTargetCount(e) {
		return PersistencePromise.resolve(this.targetCount);
	}
	getTargetData(e, t) {
		const n = this.Nr.get(t) || null;
		return PersistencePromise.resolve(n);
	}
	addMatchingKeys(e, t, n) {
		return this.Br.Rr(t, n), PersistencePromise.resolve();
	}
	removeMatchingKeys(e, t, n) {
		this.Br.mr(t, n);
		const r = this.persistence.referenceDelegate, i = [];
		return r && t.forEach(((t) => {
			i.push(r.markPotentiallyOrphaned(e, t));
		})), PersistencePromise.waitFor(i);
	}
	removeMatchingKeysForTargetId(e, t) {
		return this.Br.gr(t), PersistencePromise.resolve();
	}
	getMatchingKeysForTargetId(e, t) {
		const n = this.Br.yr(t);
		return PersistencePromise.resolve(n);
	}
	containsKey(e, t) {
		return PersistencePromise.resolve(this.Br.containsKey(t));
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A memory-backed instance of Persistence. Data is stored only in RAM and
* not persisted across sessions.
*/
var __PRIVATE_MemoryPersistence = class {
	/**
	* The constructor accepts a factory for creating a reference delegate. This
	* allows both the delegate and this instance to have strong references to
	* each other without having nullable fields that would then need to be
	* checked or asserted on every access.
	*/
	constructor(e, t) {
		this.qr = {}, this.overlays = {}, this.Qr = new __PRIVATE_ListenSequence(0), this.Kr = !1, this.Kr = !0, this.$r = new __PRIVATE_MemoryGlobalsCache(), this.referenceDelegate = e(this), this.Ur = new __PRIVATE_MemoryTargetCache(this);
		this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = function __PRIVATE_newMemoryRemoteDocumentCache(e) {
			return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e);
		}(((e) => this.referenceDelegate.Wr(e))), this.serializer = new __PRIVATE_LocalSerializer(t), this.Gr = new __PRIVATE_MemoryBundleCache(this.serializer);
	}
	start() {
		return Promise.resolve();
	}
	shutdown() {
		return this.Kr = !1, Promise.resolve();
	}
	get started() {
		return this.Kr;
	}
	setDatabaseDeletedListener() {}
	setNetworkEnabled() {}
	getIndexManager(e) {
		return this.indexManager;
	}
	getDocumentOverlayCache(e) {
		let t = this.overlays[e.toKey()];
		return t || (t = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e.toKey()] = t), t;
	}
	getMutationQueue(e, t) {
		let n = this.qr[e.toKey()];
		return n || (n = new __PRIVATE_MemoryMutationQueue(t, this.referenceDelegate), this.qr[e.toKey()] = n), n;
	}
	getGlobalsCache() {
		return this.$r;
	}
	getTargetCache() {
		return this.Ur;
	}
	getRemoteDocumentCache() {
		return this.remoteDocumentCache;
	}
	getBundleCache() {
		return this.Gr;
	}
	runTransaction(e, t, n) {
		__PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
		const r = new __PRIVATE_MemoryTransaction(this.Qr.next());
		return this.referenceDelegate.zr(), n(r).next(((e) => this.referenceDelegate.jr(r).next((() => e)))).toPromise().then(((e) => (r.raiseOnCommittedEvent(), e)));
	}
	Hr(e, t) {
		return PersistencePromise.or(Object.values(this.qr).map(((n) => () => n.containsKey(e, t))));
	}
};
/**
* Memory persistence is not actually transactional, but future implementations
* may have transaction-scoped state.
*/ var __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
	constructor(e) {
		super(), this.currentSequenceNumber = e;
	}
};
var __PRIVATE_MemoryEagerDelegate = class __PRIVATE_MemoryEagerDelegate {
	constructor(e) {
		this.persistence = e, this.Jr = new __PRIVATE_ReferenceSet(), this.Yr = null;
	}
	static Zr(e) {
		return new __PRIVATE_MemoryEagerDelegate(e);
	}
	get Xr() {
		if (this.Yr) return this.Yr;
		throw fail();
	}
	addReference(e, t, n) {
		return this.Jr.addReference(n, t), this.Xr.delete(n.toString()), PersistencePromise.resolve();
	}
	removeReference(e, t, n) {
		return this.Jr.removeReference(n, t), this.Xr.add(n.toString()), PersistencePromise.resolve();
	}
	markPotentiallyOrphaned(e, t) {
		return this.Xr.add(t.toString()), PersistencePromise.resolve();
	}
	removeTarget(e, t) {
		this.Jr.gr(t.targetId).forEach(((e) => this.Xr.add(e.toString())));
		const n = this.persistence.getTargetCache();
		return n.getMatchingKeysForTargetId(e, t.targetId).next(((e) => {
			e.forEach(((e) => this.Xr.add(e.toString())));
		})).next((() => n.removeTargetData(e, t)));
	}
	zr() {
		this.Yr = /* @__PURE__ */ new Set();
	}
	jr(e) {
		const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
		return PersistencePromise.forEach(this.Xr, ((n) => {
			const r = DocumentKey.fromPath(n);
			return this.ei(e, r).next(((e) => {
				e || t.removeEntry(r, SnapshotVersion.min());
			}));
		})).next((() => (this.Yr = null, t.apply(e))));
	}
	updateLimboDocument(e, t) {
		return this.ei(e, t).next(((e) => {
			e ? this.Xr.delete(t.toString()) : this.Xr.add(t.toString());
		}));
	}
	Wr(e) {
		return 0;
	}
	ei(e, t) {
		return PersistencePromise.or([
			() => PersistencePromise.resolve(this.Jr.containsKey(t)),
			() => this.persistence.getTargetCache().containsKey(e, t),
			() => this.persistence.Hr(e, t)
		]);
	}
};
var __PRIVATE_MemoryLruDelegate = class __PRIVATE_MemoryLruDelegate {
	constructor(e, t) {
		this.persistence = e, this.ti = new ObjectMap(((e) => __PRIVATE_encodeResourcePath(e.path)), ((e, t) => e.isEqual(t))), this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t);
	}
	static Zr(e, t) {
		return new __PRIVATE_MemoryLruDelegate(e, t);
	}
	zr() {}
	jr(e) {
		return PersistencePromise.resolve();
	}
	forEachTarget(e, t) {
		return this.persistence.getTargetCache().forEachTarget(e, t);
	}
	Yn(e) {
		const t = this.er(e);
		return this.persistence.getTargetCache().getTargetCount(e).next(((e) => t.next(((t) => e + t))));
	}
	er(e) {
		let t = 0;
		return this.Zn(e, ((e) => {
			t++;
		})).next((() => t));
	}
	Zn(e, t) {
		return PersistencePromise.forEach(this.ti, ((n, r) => this.nr(e, n, r).next(((e) => e ? PersistencePromise.resolve() : t(r)))));
	}
	removeTargets(e, t, n) {
		return this.persistence.getTargetCache().removeTargets(e, t, n);
	}
	removeOrphanedDocuments(e, t) {
		let n = 0;
		const r = this.persistence.getRemoteDocumentCache(), i = r.newChangeBuffer();
		return r.Or(e, ((r) => this.nr(e, r, t).next(((e) => {
			e || (n++, i.removeEntry(r, SnapshotVersion.min()));
		})))).next((() => i.apply(e))).next((() => n));
	}
	markPotentiallyOrphaned(e, t) {
		return this.ti.set(t, e.currentSequenceNumber), PersistencePromise.resolve();
	}
	removeTarget(e, t) {
		const n = t.withSequenceNumber(e.currentSequenceNumber);
		return this.persistence.getTargetCache().updateTargetData(e, n);
	}
	addReference(e, t, n) {
		return this.ti.set(n, e.currentSequenceNumber), PersistencePromise.resolve();
	}
	removeReference(e, t, n) {
		return this.ti.set(n, e.currentSequenceNumber), PersistencePromise.resolve();
	}
	updateLimboDocument(e, t) {
		return this.ti.set(t, e.currentSequenceNumber), PersistencePromise.resolve();
	}
	Wr(e) {
		let t = e.key.toString().length;
		return e.isFoundDocument() && (t += __PRIVATE_estimateByteSize(e.data.value)), t;
	}
	nr(e, t, n) {
		return PersistencePromise.or([
			() => this.persistence.Hr(e, t),
			() => this.persistence.getTargetCache().containsKey(e, t),
			() => {
				const e = this.ti.get(t);
				return PersistencePromise.resolve(void 0 !== e && e > n);
			}
		]);
	}
	getCacheSize(e) {
		return this.persistence.getRemoteDocumentCache().getSize(e);
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Performs database creation and schema upgrades. */ var __PRIVATE_SchemaConverter = class {
	constructor(e) {
		this.serializer = e;
	}
	/**
	* Performs database creation and schema upgrades.
	*
	* Note that in production, this method is only ever used to upgrade the schema
	* to SCHEMA_VERSION. Different values of toVersion are only used for testing
	* and local feature development.
	*/ O(e, t, n, r) {
		const i = new __PRIVATE_SimpleDbTransaction("createOrUpgrade", t);
		n < 1 && r >= 1 && (function __PRIVATE_createPrimaryClientStore(e) {
			e.createObjectStore("owner");
		}(e), function __PRIVATE_createMutationQueue(e) {
			e.createObjectStore("mutationQueues", { keyPath: "userId" });
			e.createObjectStore("mutations", {
				keyPath: "batchId",
				autoIncrement: !0
			}).createIndex("userMutationsIndex", M, { unique: !0 }), e.createObjectStore("documentMutations");
		}(e), __PRIVATE_createQueryCache(e), function __PRIVATE_createLegacyRemoteDocumentCache(e) {
			e.createObjectStore("remoteDocuments");
		}(e));
		let s = PersistencePromise.resolve();
		return n < 3 && r >= 3 && (0 !== n && (function __PRIVATE_dropQueryCache(e) {
			e.deleteObjectStore("targetDocuments"), e.deleteObjectStore("targets"), e.deleteObjectStore("targetGlobal");
		}(e), __PRIVATE_createQueryCache(e)), s = s.next((() => function __PRIVATE_writeEmptyTargetGlobalEntry(e) {
			const t = e.store("targetGlobal"), n = {
				highestTargetId: 0,
				highestListenSequenceNumber: 0,
				lastRemoteSnapshotVersion: SnapshotVersion.min().toTimestamp(),
				targetCount: 0
			};
			return t.put("targetGlobalKey", n);
		}(i)))), n < 4 && r >= 4 && (0 !== n && (s = s.next((() => function __PRIVATE_upgradeMutationBatchSchemaAndMigrateData(e, t) {
			return t.store("mutations").U().next(((n) => {
				e.deleteObjectStore("mutations");
				e.createObjectStore("mutations", {
					keyPath: "batchId",
					autoIncrement: !0
				}).createIndex("userMutationsIndex", M, { unique: !0 });
				const r = t.store("mutations"), i = n.map(((e) => r.put(e)));
				return PersistencePromise.waitFor(i);
			}));
		}(e, i)))), s = s.next((() => {
			(function __PRIVATE_createClientMetadataStore(e) {
				e.createObjectStore("clientMetadata", { keyPath: "clientId" });
			})(e);
		}))), n < 5 && r >= 5 && (s = s.next((() => this.ni(i)))), n < 6 && r >= 6 && (s = s.next((() => (function __PRIVATE_createDocumentGlobalStore(e) {
			e.createObjectStore("remoteDocumentGlobal");
		}(e), this.ri(i))))), n < 7 && r >= 7 && (s = s.next((() => this.ii(i)))), n < 8 && r >= 8 && (s = s.next((() => this.si(e, i)))), n < 9 && r >= 9 && (s = s.next((() => {
			(function __PRIVATE_dropRemoteDocumentChangesStore(e) {
				e.objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges");
			})(e);
		}))), n < 10 && r >= 10 && (s = s.next((() => this.oi(i)))), n < 11 && r >= 11 && (s = s.next((() => {
			(function __PRIVATE_createBundlesStore(e) {
				e.createObjectStore("bundles", { keyPath: "bundleId" });
			})(e), function __PRIVATE_createNamedQueriesStore(e) {
				e.createObjectStore("namedQueries", { keyPath: "name" });
			}(e);
		}))), n < 12 && r >= 12 && (s = s.next((() => {
			(function __PRIVATE_createDocumentOverlayStore(e) {
				const t = e.createObjectStore("documentOverlays", { keyPath: G });
				t.createIndex("collectionPathOverlayIndex", z, { unique: !1 }), t.createIndex("collectionGroupOverlayIndex", j, { unique: !1 });
			})(e);
		}))), n < 13 && r >= 13 && (s = s.next((() => function __PRIVATE_createRemoteDocumentCache(e) {
			const t = e.createObjectStore("remoteDocumentsV14", { keyPath: O });
			t.createIndex("documentKeyIndex", N), t.createIndex("collectionGroupIndex", L);
		}(e))).next((() => this._i(e, i))).next((() => e.deleteObjectStore("remoteDocuments")))), n < 14 && r >= 14 && (s = s.next((() => this.ai(e, i)))), n < 15 && r >= 15 && (s = s.next((() => function __PRIVATE_createFieldIndex(e) {
			e.createObjectStore("indexConfiguration", {
				keyPath: "indexId",
				autoIncrement: !0
			}).createIndex("collectionGroupIndex", "collectionGroup", { unique: !1 });
			e.createObjectStore("indexState", { keyPath: K }).createIndex("sequenceNumberIndex", $, { unique: !1 });
			e.createObjectStore("indexEntries", { keyPath: U }).createIndex("documentKeyIndex", W, { unique: !1 });
		}(e)))), n < 16 && r >= 16 && (s = s.next((() => {
			t.objectStore("indexState").clear();
		})).next((() => {
			t.objectStore("indexEntries").clear();
		}))), n < 17 && r >= 17 && (s = s.next((() => {
			(function __PRIVATE_createGlobalsStore(e) {
				e.createObjectStore("globals", { keyPath: "name" });
			})(e);
		}))), s;
	}
	ri(e) {
		let t = 0;
		return e.store("remoteDocuments").J(((e, n) => {
			t += __PRIVATE_dbDocumentSize(n);
		})).next((() => {
			const n = { byteSize: t };
			return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n);
		}));
	}
	ni(e) {
		const t = e.store("mutationQueues"), n = e.store("mutations");
		return t.U().next(((t) => PersistencePromise.forEach(t, ((t) => {
			const r = IDBKeyRange.bound([t.userId, -1], [t.userId, t.lastAcknowledgedBatchId]);
			return n.U("userMutationsIndex", r).next(((n) => PersistencePromise.forEach(n, ((n) => {
				__PRIVATE_hardAssert(n.userId === t.userId);
				const r = __PRIVATE_fromDbMutationBatch(this.serializer, n);
				return removeMutationBatch(e, t.userId, r).next((() => {}));
			}))));
		}))));
	}
	/**
	* Ensures that every document in the remote document cache has a corresponding sentinel row
	* with a sequence number. Missing rows are given the most recently used sequence number.
	*/ ii(e) {
		const t = e.store("targetDocuments"), n = e.store("remoteDocuments");
		return e.store("targetGlobal").get("targetGlobalKey").next(((e) => {
			const r = [];
			return n.J(((n, i) => {
				const s = new ResourcePath(n), o = function __PRIVATE_sentinelKey(e) {
					return [0, __PRIVATE_encodeResourcePath(e)];
				}(s);
				r.push(t.get(o).next(((n) => n ? PersistencePromise.resolve() : ((n) => t.put({
					targetId: 0,
					path: __PRIVATE_encodeResourcePath(n),
					sequenceNumber: e.highestListenSequenceNumber
				}))(s))));
			})).next((() => PersistencePromise.waitFor(r)));
		}));
	}
	si(e, t) {
		e.createObjectStore("collectionParents", { keyPath: Q });
		const n = t.store("collectionParents"), r = new __PRIVATE_MemoryCollectionParentIndex(), addEntry = (e) => {
			if (r.add(e)) {
				const t = e.lastSegment(), r = e.popLast();
				return n.put({
					collectionId: t,
					parent: __PRIVATE_encodeResourcePath(r)
				});
			}
		};
		return t.store("remoteDocuments").J({ H: !0 }, ((e, t) => {
			return addEntry(new ResourcePath(e).popLast());
		})).next((() => t.store("documentMutations").J({ H: !0 }, (([e, t, n], r) => {
			return addEntry(__PRIVATE_decodeResourcePath(t).popLast());
		}))));
	}
	oi(e) {
		const t = e.store("targets");
		return t.J(((e, n) => {
			const r = __PRIVATE_fromDbTarget(n), i = __PRIVATE_toDbTarget(this.serializer, r);
			return t.put(i);
		}));
	}
	_i(e, t) {
		const n = t.store("remoteDocuments"), r = [];
		return n.J(((e, n) => {
			const i = t.store("remoteDocumentsV14"), s = function __PRIVATE_extractKey(e) {
				return e.document ? new DocumentKey(ResourcePath.fromString(e.document.name).popFirst(5)) : e.noDocument ? DocumentKey.fromSegments(e.noDocument.path) : e.unknownDocument ? DocumentKey.fromSegments(e.unknownDocument.path) : fail();
			}(n).path.toArray(), o = {
				prefixPath: s.slice(0, s.length - 2),
				collectionGroup: s[s.length - 2],
				documentId: s[s.length - 1],
				readTime: n.readTime || [0, 0],
				unknownDocument: n.unknownDocument,
				noDocument: n.noDocument,
				document: n.document,
				hasCommittedMutations: !!n.hasCommittedMutations
			};
			r.push(i.put(o));
		})).next((() => PersistencePromise.waitFor(r)));
	}
	ai(e, t) {
		const n = t.store("mutations"), r = __PRIVATE_newIndexedDbRemoteDocumentCache(this.serializer), i = new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Zr, this.serializer.ct);
		return n.U().next(((e) => {
			const n = /* @__PURE__ */ new Map();
			return e.forEach(((e) => {
				var t;
				let r = null !== (t = n.get(e.userId)) && void 0 !== t ? t : __PRIVATE_documentKeySet();
				__PRIVATE_fromDbMutationBatch(this.serializer, e).keys().forEach(((e) => r = r.add(e))), n.set(e.userId, r);
			})), PersistencePromise.forEach(n, ((e, n) => {
				const s = new User(n), o = __PRIVATE_IndexedDbDocumentOverlayCache.lt(this.serializer, s), _ = i.getIndexManager(s);
				return new LocalDocumentsView(r, __PRIVATE_IndexedDbMutationQueue.lt(s, this.serializer, _, i.referenceDelegate), o, _).recalculateAndSaveOverlaysForDocumentKeys(new __PRIVATE_IndexedDbTransaction(t, __PRIVATE_ListenSequence.oe), e).next();
			}));
		}));
	}
};
function __PRIVATE_createQueryCache(e) {
	e.createObjectStore("targetDocuments", { keyPath: k }).createIndex("documentTargetsIndex", q, { unique: !0 });
	e.createObjectStore("targets", { keyPath: "targetId" }).createIndex("queryTargetsIndex", B, { unique: !0 }), e.createObjectStore("targetGlobal");
}
var Ve = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
/**
* Oldest acceptable age in milliseconds for client metadata before the client
* is considered inactive and its associated data is garbage collected.
*/
/**
* An IndexedDB-backed instance of Persistence. Data is stored persistently
* across sessions.
*
* On Web only, the Firestore SDKs support shared access to its persistence
* layer. This allows multiple browser tabs to read and write to IndexedDb and
* to synchronize state even without network connectivity. Shared access is
* currently optional and not enabled unless all clients invoke
* `enablePersistence()` with `{synchronizeTabs:true}`.
*
* In multi-tab mode, if multiple clients are active at the same time, the SDK
* will designate one client as the “primary client”. An effort is made to pick
* a visible, network-connected and active client, and this client is
* responsible for letting other clients know about its presence. The primary
* client writes a unique client-generated identifier (the client ID) to
* IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
* update this entry, another client can acquire the lease and take over as
* primary.
*
* Some persistence operations in the SDK are designated as primary-client only
* operations. This includes the acknowledgment of mutations and all updates of
* remote documents. The effects of these operations are written to persistence
* and then broadcast to other tabs via LocalStorage (see
* `WebStorageSharedClientState`), which then refresh their state from
* persistence.
*
* Similarly, the primary client listens to notifications sent by secondary
* clients to discover persistence changes written by secondary clients, such as
* the addition of new mutations and query targets.
*
* If multi-tab is not enabled and another tab already obtained the primary
* lease, IndexedDbPersistence enters a failed state and all subsequent
* operations will automatically fail.
*
* Additionally, there is an optimization so that when a tab is closed, the
* primary lease is released immediately (this is especially important to make
* sure that a refreshed tab is able to immediately re-acquire the primary
* lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
* since it is an asynchronous API. So in addition to attempting to give up the
* lease, the leaseholder writes its client ID to a "zombiedClient" entry in
* LocalStorage which acts as an indicator that another tab should go ahead and
* take the primary lease immediately regardless of the current lease timestamp.
*
* TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
* longer optional.
*/
var __PRIVATE_IndexedDbPersistence = class __PRIVATE_IndexedDbPersistence {
	constructor(e, t, n, r, i, s, o, _, a, u, c = 17) {
		if (this.allowTabSynchronization = e, this.persistenceKey = t, this.clientId = n, this.ui = i, this.window = s, this.document = o, this.ci = a, this.li = u, this.hi = c, this.Qr = null, this.Kr = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Pi = null, this.inForeground = !1, this.Ii = null, this.Ti = null, this.Ei = Number.NEGATIVE_INFINITY, this.di = (e) => Promise.resolve(), !__PRIVATE_IndexedDbPersistence.D()) throw new FirestoreError(D.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
		this.referenceDelegate = new __PRIVATE_IndexedDbLruDelegateImpl(this, r), this.Ai = t + "main", this.serializer = new __PRIVATE_LocalSerializer(_), this.Ri = new __PRIVATE_SimpleDb(this.Ai, this.hi, new __PRIVATE_SchemaConverter(this.serializer)), this.$r = new __PRIVATE_IndexedDbGlobalsCache(), this.Ur = new __PRIVATE_IndexedDbTargetCache(this.referenceDelegate, this.serializer), this.remoteDocumentCache = __PRIVATE_newIndexedDbRemoteDocumentCache(this.serializer), this.Gr = new __PRIVATE_IndexedDbBundleCache(), this.window && this.window.localStorage ? this.Vi = this.window.localStorage : (this.Vi = null, !1 === u && __PRIVATE_logError("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
	}
	/**
	* Attempt to start IndexedDb persistence.
	*
	* @returns Whether persistence was enabled.
	*/ start() {
		return this.mi().then((() => {
			if (!this.isPrimary && !this.allowTabSynchronization) throw new FirestoreError(D.FAILED_PRECONDITION, Ve);
			return this.fi(), this.gi(), this.pi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", ((e) => this.Ur.getHighestSequenceNumber(e)));
		})).then(((e) => {
			this.Qr = new __PRIVATE_ListenSequence(e, this.ci);
		})).then((() => {
			this.Kr = !0;
		})).catch(((e) => (this.Ri && this.Ri.close(), Promise.reject(e))));
	}
	/**
	* Registers a listener that gets called when the primary state of the
	* instance changes. Upon registering, this listener is invoked immediately
	* with the current primary state.
	*
	* PORTING NOTE: This is only used for Web multi-tab.
	*/ yi(e) {
		return this.di = async (t) => {
			if (this.started) return e(t);
		}, e(this.isPrimary);
	}
	/**
	* Registers a listener that gets called when the database receives a
	* version change event indicating that it has deleted.
	*
	* PORTING NOTE: This is only used for Web multi-tab.
	*/ setDatabaseDeletedListener(e) {
		this.Ri.L((async (t) => {
			null === t.newVersion && await e();
		}));
	}
	/**
	* Adjusts the current network state in the client's metadata, potentially
	* affecting the primary lease.
	*
	* PORTING NOTE: This is only used for Web multi-tab.
	*/ setNetworkEnabled(e) {
		this.networkEnabled !== e && (this.networkEnabled = e, this.ui.enqueueAndForget((async () => {
			this.started && await this.mi();
		})));
	}
	/**
	* Updates the client metadata in IndexedDb and attempts to either obtain or
	* extend the primary lease for the local client. Asynchronously notifies the
	* primary state listener if the client either newly obtained or released its
	* primary lease.
	*/ mi() {
		return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", ((e) => __PRIVATE_clientMetadataStore(e).put({
			clientId: this.clientId,
			updateTimeMs: Date.now(),
			networkEnabled: this.networkEnabled,
			inForeground: this.inForeground
		}).next((() => {
			if (this.isPrimary) return this.wi(e).next(((e) => {
				e || (this.isPrimary = !1, this.ui.enqueueRetryable((() => this.di(!1))));
			}));
		})).next((() => this.Si(e))).next(((t) => this.isPrimary && !t ? this.bi(e).next((() => !1)) : !!t && this.Di(e).next((() => !0)))))).catch(((e) => {
			if (__PRIVATE_isIndexedDbTransactionError(e)) return __PRIVATE_logDebug("IndexedDbPersistence", "Failed to extend owner lease: ", e), this.isPrimary;
			if (!this.allowTabSynchronization) throw e;
			return __PRIVATE_logDebug("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), !1;
		})).then(((e) => {
			this.isPrimary !== e && this.ui.enqueueRetryable((() => this.di(e))), this.isPrimary = e;
		}));
	}
	wi(e) {
		return __PRIVATE_primaryClientStore(e).get("owner").next(((e) => PersistencePromise.resolve(this.vi(e))));
	}
	Ci(e) {
		return __PRIVATE_clientMetadataStore(e).delete(this.clientId);
	}
	/**
	* If the garbage collection threshold has passed, prunes the
	* RemoteDocumentChanges and the ClientMetadata store based on the last update
	* time of all clients.
	*/ async Fi() {
		if (this.isPrimary && !this.Mi(this.Ei, 18e5)) {
			this.Ei = Date.now();
			const e = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", ((e) => {
				const t = __PRIVATE_getStore(e, "clientMetadata");
				return t.U().next(((e) => {
					const n = this.xi(e, 18e5), r = e.filter(((e) => -1 === n.indexOf(e)));
					return PersistencePromise.forEach(r, ((e) => t.delete(e.clientId))).next((() => r));
				}));
			})).catch((() => []));
			if (this.Vi) for (const t of e) this.Vi.removeItem(this.Oi(t.clientId));
		}
	}
	/**
	* Schedules a recurring timer to update the client metadata and to either
	* extend or acquire the primary lease if the client is eligible.
	*/ pi() {
		this.Ti = this.ui.enqueueAfterDelay("client_metadata_refresh", 4e3, (() => this.mi().then((() => this.Fi())).then((() => this.pi()))));
	}
	/** Checks whether `client` is the local client. */ vi(e) {
		return !!e && e.ownerId === this.clientId;
	}
	/**
	* Evaluate the state of all active clients and determine whether the local
	* client is or can act as the holder of the primary lease. Returns whether
	* the client is eligible for the lease, but does not actually acquire it.
	* May return 'false' even if there is no active leaseholder and another
	* (foreground) client should become leaseholder instead.
	*/ Si(e) {
		if (this.li) return PersistencePromise.resolve(!0);
		return __PRIVATE_primaryClientStore(e).get("owner").next(((t) => {
			if (null !== t && this.Mi(t.leaseTimestampMs, 5e3) && !this.Ni(t.ownerId)) {
				if (this.vi(t) && this.networkEnabled) return !0;
				if (!this.vi(t)) {
					if (!t.allowTabSynchronization) throw new FirestoreError(D.FAILED_PRECONDITION, Ve);
					return !1;
				}
			}
			return !(!this.networkEnabled || !this.inForeground) || __PRIVATE_clientMetadataStore(e).U().next(((e) => void 0 === this.xi(e, 5e3).find(((e) => {
				if (this.clientId !== e.clientId) {
					const t = !this.networkEnabled && e.networkEnabled, n = !this.inForeground && e.inForeground, r = this.networkEnabled === e.networkEnabled;
					if (t || n && r) return !0;
				}
				return !1;
			}))));
		})).next(((e) => (this.isPrimary !== e && __PRIVATE_logDebug("IndexedDbPersistence", `Client ${e ? "is" : "is not"} eligible for a primary lease.`), e)));
	}
	async shutdown() {
		this.Kr = !1, this.Li(), this.Ti && (this.Ti.cancel(), this.Ti = null), this.Bi(), this.ki(), await this.Ri.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], ((e) => {
			const t = new __PRIVATE_IndexedDbTransaction(e, __PRIVATE_ListenSequence.oe);
			return this.bi(t).next((() => this.Ci(t)));
		})), this.Ri.close(), this.qi();
	}
	/**
	* Returns clients that are not zombied and have an updateTime within the
	* provided threshold.
	*/ xi(e, t) {
		return e.filter(((e) => this.Mi(e.updateTimeMs, t) && !this.Ni(e.clientId)));
	}
	/**
	* Returns the IDs of the clients that are currently active. If multi-tab
	* is not supported, returns an array that only contains the local client's
	* ID.
	*
	* PORTING NOTE: This is only used for Web multi-tab.
	*/ Qi() {
		return this.runTransaction("getActiveClients", "readonly", ((e) => __PRIVATE_clientMetadataStore(e).U().next(((e) => this.xi(e, 18e5).map(((e) => e.clientId))))));
	}
	get started() {
		return this.Kr;
	}
	getGlobalsCache() {
		return this.$r;
	}
	getMutationQueue(e, t) {
		return __PRIVATE_IndexedDbMutationQueue.lt(e, this.serializer, t, this.referenceDelegate);
	}
	getTargetCache() {
		return this.Ur;
	}
	getRemoteDocumentCache() {
		return this.remoteDocumentCache;
	}
	getIndexManager(e) {
		return new __PRIVATE_IndexedDbIndexManager(e, this.serializer.ct.databaseId);
	}
	getDocumentOverlayCache(e) {
		return __PRIVATE_IndexedDbDocumentOverlayCache.lt(this.serializer, e);
	}
	getBundleCache() {
		return this.Gr;
	}
	runTransaction(e, t, n) {
		__PRIVATE_logDebug("IndexedDbPersistence", "Starting transaction:", e);
		const r = "readonly" === t ? "readonly" : "readwrite", i = function __PRIVATE_getObjectStores(e) {
			return 17 === e ? te : 16 === e ? ee : 15 === e ? X : 14 === e ? Z : 13 === e ? Y : 12 === e ? J : 11 === e ? H : void fail();
		}(this.hi);
		let s;
		return this.Ri.runTransaction(e, r, i, ((r) => (s = new __PRIVATE_IndexedDbTransaction(r, this.Qr ? this.Qr.next() : __PRIVATE_ListenSequence.oe), "readwrite-primary" === t ? this.wi(s).next(((e) => !!e || this.Si(s))).next(((t) => {
			if (!t) throw __PRIVATE_logError(`Failed to obtain primary lease for action '${e}'.`), this.isPrimary = !1, this.ui.enqueueRetryable((() => this.di(!1))), new FirestoreError(D.FAILED_PRECONDITION, C);
			return n(s);
		})).next(((e) => this.Di(s).next((() => e)))) : this.Ki(s).next((() => n(s)))))).then(((e) => (s.raiseOnCommittedEvent(), e)));
	}
	/**
	* Verifies that the current tab is the primary leaseholder or alternatively
	* that the leaseholder has opted into multi-tab synchronization.
	*/
	Ki(e) {
		return __PRIVATE_primaryClientStore(e).get("owner").next(((e) => {
			if (null !== e && this.Mi(e.leaseTimestampMs, 5e3) && !this.Ni(e.ownerId) && !this.vi(e) && !(this.li || this.allowTabSynchronization && e.allowTabSynchronization)) throw new FirestoreError(D.FAILED_PRECONDITION, Ve);
		}));
	}
	/**
	* Obtains or extends the new primary lease for the local client. This
	* method does not verify that the client is eligible for this lease.
	*/ Di(e) {
		const t = {
			ownerId: this.clientId,
			allowTabSynchronization: this.allowTabSynchronization,
			leaseTimestampMs: Date.now()
		};
		return __PRIVATE_primaryClientStore(e).put("owner", t);
	}
	static D() {
		return __PRIVATE_SimpleDb.D();
	}
	/** Checks the primary lease and removes it if we are the current primary. */ bi(e) {
		const t = __PRIVATE_primaryClientStore(e);
		return t.get("owner").next(((e) => this.vi(e) ? (__PRIVATE_logDebug("IndexedDbPersistence", "Releasing primary lease."), t.delete("owner")) : PersistencePromise.resolve()));
	}
	/** Verifies that `updateTimeMs` is within `maxAgeMs`. */ Mi(e, t) {
		const n = Date.now();
		return !(e < n - t) && (!(e > n) || (__PRIVATE_logError(`Detected an update time that is in the future: ${e} > ${n}`), !1));
	}
	fi() {
		null !== this.document && "function" == typeof this.document.addEventListener && (this.Ii = () => {
			this.ui.enqueueAndForget((() => (this.inForeground = "visible" === this.document.visibilityState, this.mi())));
		}, this.document.addEventListener("visibilitychange", this.Ii), this.inForeground = "visible" === this.document.visibilityState);
	}
	Bi() {
		this.Ii && (this.document.removeEventListener("visibilitychange", this.Ii), this.Ii = null);
	}
	/**
	* Attaches a window.unload handler that will synchronously write our
	* clientId to a "zombie client id" location in LocalStorage. This can be used
	* by tabs trying to acquire the primary lease to determine that the lease
	* is no longer valid even if the timestamp is recent. This is particularly
	* important for the refresh case (so the tab correctly re-acquires the
	* primary lease). LocalStorage is used for this rather than IndexedDb because
	* it is a synchronous API and so can be used reliably from  an unload
	* handler.
	*/ gi() {
		var e;
		"function" == typeof (null === (e = this.window) || void 0 === e ? void 0 : e.addEventListener) && (this.Pi = () => {
			this.Li();
			const e = /(?:Version|Mobile)\/1[456]/;
			isSafari() && (navigator.appVersion.match(e) || navigator.userAgent.match(e)) && this.ui.enterRestrictedMode(!0), this.ui.enqueueAndForget((() => this.shutdown()));
		}, this.window.addEventListener("pagehide", this.Pi));
	}
	ki() {
		this.Pi && (this.window.removeEventListener("pagehide", this.Pi), this.Pi = null);
	}
	/**
	* Returns whether a client is "zombied" based on its LocalStorage entry.
	* Clients become zombied when their tab closes without running all of the
	* cleanup logic in `shutdown()`.
	*/ Ni(e) {
		var t;
		try {
			const n = null !== (null === (t = this.Vi) || void 0 === t ? void 0 : t.getItem(this.Oi(e)));
			return __PRIVATE_logDebug("IndexedDbPersistence", `Client '${e}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
		} catch (e) {
			return __PRIVATE_logError("IndexedDbPersistence", "Failed to get zombied client id.", e), !1;
		}
	}
	/**
	* Record client as zombied (a client that had its tab closed). Zombied
	* clients are ignored during primary tab selection.
	*/ Li() {
		if (this.Vi) try {
			this.Vi.setItem(this.Oi(this.clientId), String(Date.now()));
		} catch (e) {
			__PRIVATE_logError("Failed to set zombie client id.", e);
		}
	}
	/** Removes the zombied client entry if it exists. */ qi() {
		if (this.Vi) try {
			this.Vi.removeItem(this.Oi(this.clientId));
		} catch (e) {}
	}
	Oi(e) {
		return `firestore_zombie_${this.persistenceKey}_${e}`;
	}
};
/**
* Helper to get a typed SimpleDbStore for the primary client object store.
*/ function __PRIVATE_primaryClientStore(e) {
	return __PRIVATE_getStore(e, "owner");
}
/**
* Helper to get a typed SimpleDbStore for the client metadata object store.
*/ function __PRIVATE_clientMetadataStore(e) {
	return __PRIVATE_getStore(e, "clientMetadata");
}
/**
* Generates a string used as a prefix when storing data in IndexedDB and
* LocalStorage.
*/ function __PRIVATE_indexedDbStoragePrefix(e, t) {
	let n = e.projectId;
	return e.isDefaultDatabase || (n += "." + e.database), "firestore/" + t + "/" + n + "/";
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A set of changes to what documents are currently in view and out of view for
* a given query. These changes are sent to the LocalStore by the View (via
* the SyncEngine) and are used to pin / unpin documents as appropriate.
*/
var __PRIVATE_LocalViewChanges = class __PRIVATE_LocalViewChanges {
	constructor(e, t, n, r) {
		this.targetId = e, this.fromCache = t, this.$i = n, this.Ui = r;
	}
	static Wi(e, t) {
		let n = __PRIVATE_documentKeySet(), r = __PRIVATE_documentKeySet();
		for (const e of t.docChanges) switch (e.type) {
			case 0:
				n = n.add(e.doc.key);
				break;
			case 1: r = r.add(e.doc.key);
		}
		return new __PRIVATE_LocalViewChanges(e, t.fromCache, n, r);
	}
};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A tracker to keep a record of important details during database local query
* execution.
*/ var QueryContext = class {
	constructor() {
		/**
		* Counts the number of documents passed through during local query execution.
		*/
		this._documentReadCount = 0;
	}
	get documentReadCount() {
		return this._documentReadCount;
	}
	incrementDocumentReadCount(e) {
		this._documentReadCount += e;
	}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The Firestore query engine.
*
* Firestore queries can be executed in three modes. The Query Engine determines
* what mode to use based on what data is persisted. The mode only determines
* the runtime complexity of the query - the result set is equivalent across all
* implementations.
*
* The Query engine will use indexed-based execution if a user has configured
* any index that can be used to execute query (via `setIndexConfiguration()`).
* Otherwise, the engine will try to optimize the query by re-using a previously
* persisted query result. If that is not possible, the query will be executed
* via a full collection scan.
*
* Index-based execution is the default when available. The query engine
* supports partial indexed execution and merges the result from the index
* lookup with documents that have not yet been indexed. The index evaluation
* matches the backend's format and as such, the SDK can use indexing for all
* queries that the backend supports.
*
* If no index exists, the query engine tries to take advantage of the target
* document mapping in the TargetCache. These mappings exists for all queries
* that have been synced with the backend at least once and allow the query
* engine to only read documents that previously matched a query plus any
* documents that were edited after the query was last listened to.
*
* There are some cases when this optimization is not guaranteed to produce
* the same results as full collection scans. In these cases, query
* processing falls back to full scans. These cases are:
*
* - Limit queries where a document that matched the query previously no longer
*   matches the query.
*
* - Limit queries where a document edit may cause the document to sort below
*   another document that is in the local cache.
*
* - Queries that have never been CURRENT or free of limbo documents.
*/
var __PRIVATE_QueryEngine = class {
	constructor() {
		this.Gi = !1, this.zi = !1, this.ji = 100, this.Hi = function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
			return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4;
		}();
	}
	/** Sets the document view to query against. */ initialize(e, t) {
		this.Ji = e, this.indexManager = t, this.Gi = !0;
	}
	/** Returns all local documents matching the specified query. */ getDocumentsMatchingQuery(e, t, n, r) {
		const i = { result: null };
		return this.Yi(e, t).next(((e) => {
			i.result = e;
		})).next((() => {
			if (!i.result) return this.Zi(e, t, r, n).next(((e) => {
				i.result = e;
			}));
		})).next((() => {
			if (i.result) return;
			const n = new QueryContext();
			return this.Xi(e, t, n).next(((r) => {
				if (i.result = r, this.zi) return this.es(e, t, n, r.size);
			}));
		})).next((() => i.result));
	}
	es(e, t, n, r) {
		return n.documentReadCount < this.ji ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.ji, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.Hi * r ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, __PRIVATE_queryToTarget(t))) : PersistencePromise.resolve());
	}
	/**
	* Performs an indexed query that evaluates the query based on a collection's
	* persisted index values. Returns `null` if an index is not available.
	*/ Yi(e, t) {
		if (__PRIVATE_queryMatchesAllDocuments(t)) return PersistencePromise.resolve(null);
		let n = __PRIVATE_queryToTarget(t);
		return this.indexManager.getIndexType(e, n).next(((r) => 0 === r ? null : (null !== t.limit && 1 === r && (t = __PRIVATE_queryWithLimit(t, null, "F"), n = __PRIVATE_queryToTarget(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next(((r) => {
			const i = __PRIVATE_documentKeySet(...r);
			return this.Ji.getDocuments(e, i).next(((r) => this.indexManager.getMinOffset(e, n).next(((n) => {
				const s = this.ts(t, r);
				return this.ns(t, s, i, n.readTime) ? this.Yi(e, __PRIVATE_queryWithLimit(t, null, "F")) : this.rs(e, s, t, n);
			}))));
		})))));
	}
	/**
	* Performs a query based on the target's persisted query mapping. Returns
	* `null` if the mapping is not available or cannot be used.
	*/ Zi(e, t, n, r) {
		return __PRIVATE_queryMatchesAllDocuments(t) || r.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.Ji.getDocuments(e, n).next(((i) => {
			const s = this.ts(t, i);
			return this.ns(t, s, n, r) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), __PRIVATE_stringifyQuery(t)), this.rs(e, s, t, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r, -1)).next(((e) => e)));
		}));
	}
	/** Applies the query filter and sorting to the provided documents.  */ ts(e, t) {
		let n = new SortedSet(__PRIVATE_newQueryComparator(e));
		return t.forEach(((t, r) => {
			__PRIVATE_queryMatches(e, r) && (n = n.add(r));
		})), n;
	}
	/**
	* Determines if a limit query needs to be refilled from cache, making it
	* ineligible for index-free execution.
	*
	* @param query - The query.
	* @param sortedPreviousResults - The documents that matched the query when it
	* was last synchronized, sorted by the query's comparator.
	* @param remoteKeys - The document keys that matched the query at the last
	* snapshot.
	* @param limboFreeSnapshotVersion - The version of the snapshot when the
	* query was last synchronized.
	*/ ns(e, t, n, r) {
		if (null === e.limit) return !1;
		if (n.size !== t.size) return !0;
		const i = "F" === e.limitType ? t.last() : t.first();
		return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
	}
	Xi(e, t, n) {
		return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t)), this.Ji.getDocumentsMatchingQuery(e, t, IndexOffset.min(), n);
	}
	/**
	* Combines the results from an indexed execution with the remaining documents
	* that have not yet been indexed.
	*/ rs(e, t, n, r) {
		return this.Ji.getDocumentsMatchingQuery(e, n, r).next(((e) => (t.forEach(((t) => {
			e = e.insert(t.key, t);
		})), e)));
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Implements `LocalStore` interface.
*
* Note: some field defined in this class might have public access level, but
* the class is not exported so they are only accessible from this module.
* This is useful to implement optional features (like bundles) in free
* functions, such that they are tree-shakeable.
*/
var __PRIVATE_LocalStoreImpl = class {
	constructor(e, t, n, r) {
		this.persistence = e, this.ss = t, this.serializer = r, this.os = new SortedMap(__PRIVATE_primitiveComparator), this._s = new ObjectMap(((e) => __PRIVATE_canonifyTarget(e)), __PRIVATE_targetEquals), this.us = /* @__PURE__ */ new Map(), this.cs = e.getRemoteDocumentCache(), this.Ur = e.getTargetCache(), this.Gr = e.getBundleCache(), this.ls(n);
	}
	ls(e) {
		this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new LocalDocumentsView(this.cs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.cs.setIndexManager(this.indexManager), this.ss.initialize(this.localDocuments, this.indexManager);
	}
	collectGarbage(e) {
		return this.persistence.runTransaction("Collect garbage", "readwrite-primary", ((t) => e.collect(t, this.os)));
	}
};
function __PRIVATE_newLocalStore(e, t, n, r) {
	return new __PRIVATE_LocalStoreImpl(e, t, n, r);
}
/**
* Tells the LocalStore that the currently authenticated user has changed.
*
* In response the local store switches the mutation queue to the new user and
* returns any resulting document changes.
*/
async function __PRIVATE_localStoreHandleUserChange(e, t) {
	const n = __PRIVATE_debugCast(e);
	return await n.persistence.runTransaction("Handle user change", "readonly", ((e) => {
		let r;
		return n.mutationQueue.getAllMutationBatches(e).next(((i) => (r = i, n.ls(t), n.mutationQueue.getAllMutationBatches(e)))).next(((t) => {
			const i = [], s = [];
			let o = __PRIVATE_documentKeySet();
			for (const e of r) {
				i.push(e.batchId);
				for (const t of e.mutations) o = o.add(t.key);
			}
			for (const e of t) {
				s.push(e.batchId);
				for (const t of e.mutations) o = o.add(t.key);
			}
			return n.localDocuments.getDocuments(e, o).next(((e) => ({
				hs: e,
				removedBatchIds: i,
				addedBatchIds: s
			})));
		}));
	}));
}
/**
* Acknowledges the given batch.
*
* On the happy path when a batch is acknowledged, the local store will
*
*  + remove the batch from the mutation queue;
*  + apply the changes to the remote document cache;
*  + recalculate the latency compensated view implied by those changes (there
*    may be mutations in the queue that affect the documents but haven't been
*    acknowledged yet); and
*  + give the changed documents back the sync engine
*
* @returns The resulting (modified) documents.
*/
function __PRIVATE_localStoreAcknowledgeBatch(e, t) {
	const n = __PRIVATE_debugCast(e);
	return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", ((e) => {
		const r = t.batch.keys(), i = n.cs.newChangeBuffer({ trackRemovals: !0 });
		return function __PRIVATE_applyWriteToRemoteDocuments(e, t, n, r) {
			const i = n.batch, s = i.keys();
			let o = PersistencePromise.resolve();
			return s.forEach(((e) => {
				o = o.next((() => r.getEntry(t, e))).next(((t) => {
					const s = n.docVersions.get(e);
					__PRIVATE_hardAssert(null !== s), t.version.compareTo(s) < 0 && (i.applyToRemoteDocument(t, n), t.isValidDocument() && (t.setReadTime(n.commitVersion), r.addEntry(t)));
				}));
			})), o.next((() => e.mutationQueue.removeMutationBatch(t, i)));
		}(n, e, t, i).next((() => i.apply(e))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function __PRIVATE_getKeysWithTransformResults(e) {
			let t = __PRIVATE_documentKeySet();
			for (let n = 0; n < e.mutationResults.length; ++n) e.mutationResults[n].transformResults.length > 0 && (t = t.add(e.batch.mutations[n].key));
			return t;
		}(t)))).next((() => n.localDocuments.getDocuments(e, r)));
	}));
}
/**
* Returns the last consistent snapshot processed (used by the RemoteStore to
* determine whether to buffer incoming snapshots from the backend).
*/
function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e) {
	const t = __PRIVATE_debugCast(e);
	return t.persistence.runTransaction("Get last remote snapshot version", "readonly", ((e) => t.Ur.getLastRemoteSnapshotVersion(e)));
}
/**
* Updates the "ground-state" (remote) documents. We assume that the remote
* event reflects any write batches that have been acknowledged or rejected
* (i.e. we do not re-apply local mutations to updates from this event).
*
* LocalDocuments are re-calculated if there are remaining mutations in the
* queue.
*/ function __PRIVATE_localStoreApplyRemoteEventToLocalCache(e, t) {
	const n = __PRIVATE_debugCast(e), r = t.snapshotVersion;
	let i = n.os;
	return n.persistence.runTransaction("Apply remote event", "readwrite-primary", ((e) => {
		const s = n.cs.newChangeBuffer({ trackRemovals: !0 });
		i = n.os;
		const o = [];
		t.targetChanges.forEach(((s, _) => {
			const a = i.get(_);
			if (!a) return;
			o.push(n.Ur.removeMatchingKeys(e, s.removedDocuments, _).next((() => n.Ur.addMatchingKeys(e, s.addedDocuments, _))));
			let u = a.withSequenceNumber(e.currentSequenceNumber);
			null !== t.targetMismatches.get(_) ? u = u.withResumeToken(ByteString.EMPTY_BYTE_STRING, SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()) : s.resumeToken.approximateByteSize() > 0 && (u = u.withResumeToken(s.resumeToken, r)), i = i.insert(_, u), function __PRIVATE_shouldPersistTargetData(e, t, n) {
				if (0 === e.resumeToken.approximateByteSize()) return !0;
				if (t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 3e8) return !0;
				return n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
			}(a, u, s) && o.push(n.Ur.updateTargetData(e, u));
		}));
		let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
		if (t.documentUpdates.forEach(((r) => {
			t.resolvedLimboDocuments.has(r) && o.push(n.persistence.referenceDelegate.updateLimboDocument(e, r));
		})), o.push(__PRIVATE_populateDocumentChangeBuffer(e, s, t.documentUpdates).next(((e) => {
			_ = e.Ps, a = e.Is;
		}))), !r.isEqual(SnapshotVersion.min())) {
			const t = n.Ur.getLastRemoteSnapshotVersion(e).next(((t) => n.Ur.setTargetsMetadata(e, e.currentSequenceNumber, r)));
			o.push(t);
		}
		return PersistencePromise.waitFor(o).next((() => s.apply(e))).next((() => n.localDocuments.getLocalViewOfDocuments(e, _, a))).next((() => _));
	})).then(((e) => (n.os = i, e)));
}
/**
* Populates document change buffer with documents from backend or a bundle.
* Returns the document changes resulting from applying those documents, and
* also a set of documents whose existence state are changed as a result.
*
* @param txn - Transaction to use to read existing documents from storage.
* @param documentBuffer - Document buffer to collect the resulted changes to be
*        applied to storage.
* @param documents - Documents to be applied.
*/ function __PRIVATE_populateDocumentChangeBuffer(e, t, n) {
	let r = __PRIVATE_documentKeySet(), i = __PRIVATE_documentKeySet();
	return n.forEach(((e) => r = r.add(e))), t.getEntries(e, r).next(((e) => {
		let r = __PRIVATE_mutableDocumentMap();
		return n.forEach(((n, s) => {
			const o = e.get(n);
			s.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n)), s.isNoDocument() && s.version.isEqual(SnapshotVersion.min()) ? (t.removeEntry(n, s.readTime), r = r.insert(n, s)) : !o.isValidDocument() || s.version.compareTo(o.version) > 0 || 0 === s.version.compareTo(o.version) && o.hasPendingWrites ? (t.addEntry(s), r = r.insert(n, s)) : __PRIVATE_logDebug("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", o.version, " Watch version:", s.version);
		})), {
			Ps: r,
			Is: i
		};
	}));
}
/**
* Gets the mutation batch after the passed in batchId in the mutation queue
* or null if empty.
* @param afterBatchId - If provided, the batch to search after.
* @returns The next mutation or null if there wasn't one.
*/
function __PRIVATE_localStoreGetNextMutationBatch(e, t) {
	const n = __PRIVATE_debugCast(e);
	return n.persistence.runTransaction("Get next mutation batch", "readonly", ((e) => (void 0 === t && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(e, t))));
}
/**
* Reads the current value of a Document with a given key or null if not
* found - used for testing.
*/
/**
* Assigns the given target an internal ID so that its results can be pinned so
* they don't get GC'd. A target must be allocated in the local store before
* the store can be used to manage its view.
*
* Allocating an already allocated `Target` will return the existing `TargetData`
* for that `Target`.
*/
function __PRIVATE_localStoreAllocateTarget(e, t) {
	const n = __PRIVATE_debugCast(e);
	return n.persistence.runTransaction("Allocate target", "readwrite", ((e) => {
		let r;
		return n.Ur.getTargetData(e, t).next(((i) => i ? (r = i, PersistencePromise.resolve(r)) : n.Ur.allocateTargetId(e).next(((i) => (r = new TargetData(t, i, "TargetPurposeListen", e.currentSequenceNumber), n.Ur.addTargetData(e, r).next((() => r)))))));
	})).then(((e) => {
		const r = n.os.get(e.targetId);
		return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.os = n.os.insert(e.targetId, e), n._s.set(t, e.targetId)), e;
	}));
}
/**
* Returns the TargetData as seen by the LocalStore, including updates that may
* have not yet been persisted to the TargetCache.
*/
/**
* Unpins all the documents associated with the given target. If
* `keepPersistedTargetData` is set to false and Eager GC enabled, the method
* directly removes the associated target data from the target cache.
*
* Releasing a non-existing `Target` is a no-op.
*/
async function __PRIVATE_localStoreReleaseTarget(e, t, n) {
	const r = __PRIVATE_debugCast(e), i = r.os.get(t), s = n ? "readwrite" : "readwrite-primary";
	try {
		n || await r.persistence.runTransaction("Release target", s, ((e) => r.persistence.referenceDelegate.removeTarget(e, i)));
	} catch (e) {
		if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
		__PRIVATE_logDebug("LocalStore", `Failed to update sequence numbers for target ${t}: ${e}`);
	}
	r.os = r.os.remove(t), r._s.delete(i.target);
}
/**
* Runs the specified query against the local store and returns the results,
* potentially taking advantage of query data from previous executions (such
* as the set of remote keys).
*
* @param usePreviousResults - Whether results from previous executions can
* be used to optimize this query execution.
*/ function __PRIVATE_localStoreExecuteQuery(e, t, n) {
	const r = __PRIVATE_debugCast(e);
	let i = SnapshotVersion.min(), s = __PRIVATE_documentKeySet();
	return r.persistence.runTransaction("Execute query", "readwrite", ((e) => function __PRIVATE_localStoreGetTargetData(e, t, n) {
		const r = __PRIVATE_debugCast(e), i = r._s.get(n);
		return void 0 !== i ? PersistencePromise.resolve(r.os.get(i)) : r.Ur.getTargetData(t, n);
	}(r, e, __PRIVATE_queryToTarget(t)).next(((t) => {
		if (t) return i = t.lastLimboFreeSnapshotVersion, r.Ur.getMatchingKeysForTargetId(e, t.targetId).next(((e) => {
			s = e;
		}));
	})).next((() => r.ss.getDocumentsMatchingQuery(e, t, n ? i : SnapshotVersion.min(), n ? s : __PRIVATE_documentKeySet()))).next(((e) => (__PRIVATE_setMaxReadTime(r, __PRIVATE_queryCollectionGroup(t), e), {
		documents: e,
		Ts: s
	})))));
}
function __PRIVATE_localStoreGetCachedTarget(e, t) {
	const n = __PRIVATE_debugCast(e), r = __PRIVATE_debugCast(n.Ur), i = n.os.get(t);
	return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", ((e) => r.ot(e, t).next(((e) => e ? e.target : null))));
}
/**
* Returns the set of documents that have been updated since the last call.
* If this is the first call, returns the set of changes since client
* initialization. Further invocations will return document that have changed
* since the prior call.
*/
function __PRIVATE_localStoreGetNewDocumentChanges(e, t) {
	const n = __PRIVATE_debugCast(e), r = n.us.get(t) || SnapshotVersion.min();
	return n.persistence.runTransaction("Get new document changes", "readonly", ((e) => n.cs.getAllFromCollectionGroup(e, t, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r, -1), Number.MAX_SAFE_INTEGER))).then(((e) => (__PRIVATE_setMaxReadTime(n, t, e), e)));
}
/** Sets the collection group's maximum read time from the given documents. */
function __PRIVATE_setMaxReadTime(e, t, n) {
	let r = e.us.get(t) || SnapshotVersion.min();
	n.forEach(((e, t) => {
		t.readTime.compareTo(r) > 0 && (r = t.readTime);
	})), e.us.set(t, r);
}
/**
* Creates a new target using the given bundle name, which will be used to
* hold the keys of all documents from the bundle in query-document mappings.
* This ensures that the loaded documents do not get garbage collected
* right away.
*/
/**
* Applies the documents from a bundle to the "ground-state" (remote)
* documents.
*
* LocalDocuments are re-calculated if there are remaining mutations in the
* queue.
*/
async function __PRIVATE_localStoreApplyBundledDocuments(e, t, n, r) {
	const i = __PRIVATE_debugCast(e);
	let s = __PRIVATE_documentKeySet(), o = __PRIVATE_mutableDocumentMap();
	for (const e of n) {
		const n = t.Es(e.metadata.name);
		e.document && (s = s.add(n));
		const r = t.ds(e);
		r.setReadTime(t.As(e.metadata.readTime)), o = o.insert(n, r);
	}
	const _ = i.cs.newChangeBuffer({ trackRemovals: !0 }), a = await __PRIVATE_localStoreAllocateTarget(i, function __PRIVATE_umbrellaTarget(e) {
		return __PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(ResourcePath.fromString(`__bundle__/docs/${e}`)));
	}(r));
	return i.persistence.runTransaction("Apply bundle documents", "readwrite", ((e) => __PRIVATE_populateDocumentChangeBuffer(e, _, o).next(((t) => (_.apply(e), t))).next(((t) => i.Ur.removeMatchingKeysForTargetId(e, a.targetId).next((() => i.Ur.addMatchingKeys(e, s, a.targetId))).next((() => i.localDocuments.getLocalViewOfDocuments(e, t.Ps, t.Is))).next((() => t.Ps))))));
}
/**
* Returns a promise of a boolean to indicate if the given bundle has already
* been loaded and the create time is newer than the current loading bundle.
*/
/**
* Saves the given `NamedQuery` to local persistence.
*/
async function __PRIVATE_localStoreSaveNamedQuery(e, t, n = __PRIVATE_documentKeySet()) {
	const r = await __PRIVATE_localStoreAllocateTarget(e, __PRIVATE_queryToTarget(__PRIVATE_fromBundledQuery(t.bundledQuery))), i = __PRIVATE_debugCast(e);
	return i.persistence.runTransaction("Save named query", "readwrite", ((e) => {
		const s = __PRIVATE_fromVersion(t.readTime);
		if (r.snapshotVersion.compareTo(s) >= 0) return i.Gr.saveNamedQuery(e, t);
		const o = r.withResumeToken(ByteString.EMPTY_BYTE_STRING, s);
		return i.os = i.os.insert(o.targetId, o), i.Ur.updateTargetData(e, o).next((() => i.Ur.removeMatchingKeysForTargetId(e, r.targetId))).next((() => i.Ur.addMatchingKeys(e, n, r.targetId))).next((() => i.Gr.saveNamedQuery(e, t)));
	}));
}
/** Assembles the key for a client state in WebStorage */
function createWebStorageClientStateKey(e, t) {
	return `firestore_clients_${e}_${t}`;
}
/** Assembles the key for a mutation batch in WebStorage */
function createWebStorageMutationBatchKey(e, t, n) {
	let r = `firestore_mutations_${e}_${n}`;
	return t.isAuthenticated() && (r += `_${t.uid}`), r;
}
/** Assembles the key for a query state in WebStorage */
function createWebStorageQueryTargetMetadataKey(e, t) {
	return `firestore_targets_${e}_${t}`;
}
/**
* Holds the state of a mutation batch, including its user ID, batch ID and
* whether the batch is 'pending', 'acknowledged' or 'rejected'.
*/
var __PRIVATE_MutationMetadata = class __PRIVATE_MutationMetadata {
	constructor(e, t, n, r) {
		this.user = e, this.batchId = t, this.state = n, this.error = r;
	}
	/**
	* Parses a MutationMetadata from its JSON representation in WebStorage.
	* Logs a warning and returns null if the format of the data is not valid.
	*/ static Rs(e, t, n) {
		const r = JSON.parse(n);
		let i, s = "object" == typeof r && -1 !== [
			"pending",
			"acknowledged",
			"rejected"
		].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error);
		return s && r.error && (s = "string" == typeof r.error.message && "string" == typeof r.error.code, s && (i = new FirestoreError(r.error.code, r.error.message))), s ? new __PRIVATE_MutationMetadata(e, t, r.state, i) : (__PRIVATE_logError("SharedClientState", `Failed to parse mutation state for ID '${t}': ${n}`), null);
	}
	Vs() {
		const e = {
			state: this.state,
			updateTimeMs: Date.now()
		};
		return this.error && (e.error = {
			code: this.error.code,
			message: this.error.message
		}), JSON.stringify(e);
	}
};
/**
* Holds the state of a query target, including its target ID and whether the
* target is 'not-current', 'current' or 'rejected'.
*/
var __PRIVATE_QueryTargetMetadata = class __PRIVATE_QueryTargetMetadata {
	constructor(e, t, n) {
		this.targetId = e, this.state = t, this.error = n;
	}
	/**
	* Parses a QueryTargetMetadata from its JSON representation in WebStorage.
	* Logs a warning and returns null if the format of the data is not valid.
	*/ static Rs(e, t) {
		const n = JSON.parse(t);
		let r, i = "object" == typeof n && -1 !== [
			"not-current",
			"current",
			"rejected"
		].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
		return i && n.error && (i = "string" == typeof n.error.message && "string" == typeof n.error.code, i && (r = new FirestoreError(n.error.code, n.error.message))), i ? new __PRIVATE_QueryTargetMetadata(e, n.state, r) : (__PRIVATE_logError("SharedClientState", `Failed to parse target state for ID '${e}': ${t}`), null);
	}
	Vs() {
		const e = {
			state: this.state,
			updateTimeMs: Date.now()
		};
		return this.error && (e.error = {
			code: this.error.code,
			message: this.error.message
		}), JSON.stringify(e);
	}
};
/**
* This class represents the immutable ClientState for a client read from
* WebStorage, containing the list of active query targets.
*/ var __PRIVATE_RemoteClientState = class __PRIVATE_RemoteClientState {
	constructor(e, t) {
		this.clientId = e, this.activeTargetIds = t;
	}
	/**
	* Parses a RemoteClientState from the JSON representation in WebStorage.
	* Logs a warning and returns null if the format of the data is not valid.
	*/ static Rs(e, t) {
		const n = JSON.parse(t);
		let r = "object" == typeof n && n.activeTargetIds instanceof Array, i = __PRIVATE_targetIdSet();
		for (let e = 0; r && e < n.activeTargetIds.length; ++e) r = isSafeInteger(n.activeTargetIds[e]), i = i.add(n.activeTargetIds[e]);
		return r ? new __PRIVATE_RemoteClientState(e, i) : (__PRIVATE_logError("SharedClientState", `Failed to parse client data for instance '${e}': ${t}`), null);
	}
};
/**
* This class represents the online state for all clients participating in
* multi-tab. The online state is only written to by the primary client, and
* used in secondary clients to update their query views.
*/ var __PRIVATE_SharedOnlineState = class __PRIVATE_SharedOnlineState {
	constructor(e, t) {
		this.clientId = e, this.onlineState = t;
	}
	/**
	* Parses a SharedOnlineState from its JSON representation in WebStorage.
	* Logs a warning and returns null if the format of the data is not valid.
	*/ static Rs(e) {
		const t = JSON.parse(e);
		return "object" == typeof t && -1 !== [
			"Unknown",
			"Online",
			"Offline"
		].indexOf(t.onlineState) && "string" == typeof t.clientId ? new __PRIVATE_SharedOnlineState(t.clientId, t.onlineState) : (__PRIVATE_logError("SharedClientState", `Failed to parse online state: ${e}`), null);
	}
};
/**
* Metadata state of the local client. Unlike `RemoteClientState`, this class is
* mutable and keeps track of all pending mutations, which allows us to
* update the range of pending mutation batch IDs as new mutations are added or
* removed.
*
* The data in `LocalClientState` is not read from WebStorage and instead
* updated via its instance methods. The updated state can be serialized via
* `toWebStorageJSON()`.
*/
var __PRIVATE_LocalClientState = class {
	constructor() {
		this.activeTargetIds = __PRIVATE_targetIdSet();
	}
	fs(e) {
		this.activeTargetIds = this.activeTargetIds.add(e);
	}
	gs(e) {
		this.activeTargetIds = this.activeTargetIds.delete(e);
	}
	/**
	* Converts this entry into a JSON-encoded format we can use for WebStorage.
	* Does not encode `clientId` as it is part of the key in WebStorage.
	*/ Vs() {
		const e = {
			activeTargetIds: this.activeTargetIds.toArray(),
			updateTimeMs: Date.now()
		};
		return JSON.stringify(e);
	}
};
/**
* `WebStorageSharedClientState` uses WebStorage (window.localStorage) as the
* backing store for the SharedClientState. It keeps track of all active
* clients and supports modifications of the local client's data.
*/ var __PRIVATE_WebStorageSharedClientState = class {
	constructor(e, t, n, r, i) {
		this.window = e, this.ui = t, this.persistenceKey = n, this.ps = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.ys = this.ws.bind(this), this.Ss = new SortedMap(__PRIVATE_primitiveComparator), this.started = !1, this.bs = [];
		const s = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		this.storage = this.window.localStorage, this.currentUser = i, this.Ds = createWebStorageClientStateKey(this.persistenceKey, this.ps), this.vs = function createWebStorageSequenceNumberKey(e) {
			return `firestore_sequence_number_${e}`;
		}(this.persistenceKey), this.Ss = this.Ss.insert(this.ps, new __PRIVATE_LocalClientState()), this.Cs = new RegExp(`^firestore_clients_${s}_([^_]*)$`), this.Fs = new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`), this.Ms = new RegExp(`^firestore_targets_${s}_(\\d+)$`), this.xs = function createWebStorageOnlineStateKey(e) {
			return `firestore_online_state_${e}`;
		}(this.persistenceKey), this.Os = function createBundleLoadedKey(e) {
			return `firestore_bundle_loaded_v2_${e}`;
		}(this.persistenceKey), this.window.addEventListener("storage", this.ys);
	}
	/** Returns 'true' if WebStorage is available in the current environment. */ static D(e) {
		return !(!e || !e.localStorage);
	}
	async start() {
		const e = await this.syncEngine.Qi();
		for (const t of e) {
			if (t === this.ps) continue;
			const e = this.getItem(createWebStorageClientStateKey(this.persistenceKey, t));
			if (e) {
				const n = __PRIVATE_RemoteClientState.Rs(t, e);
				n && (this.Ss = this.Ss.insert(n.clientId, n));
			}
		}
		this.Ns();
		const t = this.storage.getItem(this.xs);
		if (t) {
			const e = this.Ls(t);
			e && this.Bs(e);
		}
		for (const e of this.bs) this.ws(e);
		this.bs = [], this.window.addEventListener("pagehide", (() => this.shutdown())), this.started = !0;
	}
	writeSequenceNumber(e) {
		this.setItem(this.vs, JSON.stringify(e));
	}
	getAllActiveQueryTargets() {
		return this.ks(this.Ss);
	}
	isActiveQueryTarget(e) {
		let t = !1;
		return this.Ss.forEach(((n, r) => {
			r.activeTargetIds.has(e) && (t = !0);
		})), t;
	}
	addPendingMutation(e) {
		this.qs(e, "pending");
	}
	updateMutationState(e, t, n) {
		this.qs(e, t, n), this.Qs(e);
	}
	addLocalQueryTarget(e, t = !0) {
		let n = "not-current";
		if (this.isActiveQueryTarget(e)) {
			const t = this.storage.getItem(createWebStorageQueryTargetMetadataKey(this.persistenceKey, e));
			if (t) {
				const r = __PRIVATE_QueryTargetMetadata.Rs(e, t);
				r && (n = r.state);
			}
		}
		return t && this.Ks.fs(e), this.Ns(), n;
	}
	removeLocalQueryTarget(e) {
		this.Ks.gs(e), this.Ns();
	}
	isLocalQueryTarget(e) {
		return this.Ks.activeTargetIds.has(e);
	}
	clearQueryState(e) {
		this.removeItem(createWebStorageQueryTargetMetadataKey(this.persistenceKey, e));
	}
	updateQueryState(e, t, n) {
		this.$s(e, t, n);
	}
	handleUserChange(e, t, n) {
		t.forEach(((e) => {
			this.Qs(e);
		})), this.currentUser = e, n.forEach(((e) => {
			this.addPendingMutation(e);
		}));
	}
	setOnlineState(e) {
		this.Us(e);
	}
	notifyBundleLoaded(e) {
		this.Ws(e);
	}
	shutdown() {
		this.started && (this.window.removeEventListener("storage", this.ys), this.removeItem(this.Ds), this.started = !1);
	}
	getItem(e) {
		const t = this.storage.getItem(e);
		return __PRIVATE_logDebug("SharedClientState", "READ", e, t), t;
	}
	setItem(e, t) {
		__PRIVATE_logDebug("SharedClientState", "SET", e, t), this.storage.setItem(e, t);
	}
	removeItem(e) {
		__PRIVATE_logDebug("SharedClientState", "REMOVE", e), this.storage.removeItem(e);
	}
	ws(e) {
		const t = e;
		if (t.storageArea === this.storage) {
			if (__PRIVATE_logDebug("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.Ds) return void __PRIVATE_logError("Received WebStorage notification for local change. Another client might have garbage-collected our state");
			this.ui.enqueueRetryable((async () => {
				if (this.started) {
					if (null !== t.key) {
						if (this.Cs.test(t.key)) {
							if (null == t.newValue) {
								const e = this.Gs(t.key);
								return this.zs(e, null);
							}
							{
								const e = this.js(t.key, t.newValue);
								if (e) return this.zs(e.clientId, e);
							}
						} else if (this.Fs.test(t.key)) {
							if (null !== t.newValue) {
								const e = this.Hs(t.key, t.newValue);
								if (e) return this.Js(e);
							}
						} else if (this.Ms.test(t.key)) {
							if (null !== t.newValue) {
								const e = this.Ys(t.key, t.newValue);
								if (e) return this.Zs(e);
							}
						} else if (t.key === this.xs) {
							if (null !== t.newValue) {
								const e = this.Ls(t.newValue);
								if (e) return this.Bs(e);
							}
						} else if (t.key === this.vs) {
							const e = function __PRIVATE_fromWebStorageSequenceNumber(e) {
								let t = __PRIVATE_ListenSequence.oe;
								if (null != e) try {
									const n = JSON.parse(e);
									__PRIVATE_hardAssert("number" == typeof n), t = n;
								} catch (e) {
									__PRIVATE_logError("SharedClientState", "Failed to read sequence number from WebStorage", e);
								}
								return t;
							}(t.newValue);
							e !== __PRIVATE_ListenSequence.oe && this.sequenceNumberHandler(e);
						} else if (t.key === this.Os) {
							const e = this.Xs(t.newValue);
							await Promise.all(e.map(((e) => this.syncEngine.eo(e))));
						}
					}
				} else this.bs.push(t);
			}));
		}
	}
	get Ks() {
		return this.Ss.get(this.ps);
	}
	Ns() {
		this.setItem(this.Ds, this.Ks.Vs());
	}
	qs(e, t, n) {
		const r = new __PRIVATE_MutationMetadata(this.currentUser, e, t, n), i = createWebStorageMutationBatchKey(this.persistenceKey, this.currentUser, e);
		this.setItem(i, r.Vs());
	}
	Qs(e) {
		const t = createWebStorageMutationBatchKey(this.persistenceKey, this.currentUser, e);
		this.removeItem(t);
	}
	Us(e) {
		const t = {
			clientId: this.ps,
			onlineState: e
		};
		this.storage.setItem(this.xs, JSON.stringify(t));
	}
	$s(e, t, n) {
		const r = createWebStorageQueryTargetMetadataKey(this.persistenceKey, e), i = new __PRIVATE_QueryTargetMetadata(e, t, n);
		this.setItem(r, i.Vs());
	}
	Ws(e) {
		const t = JSON.stringify(Array.from(e));
		this.setItem(this.Os, t);
	}
	/**
	* Parses a client state key in WebStorage. Returns null if the key does not
	* match the expected key format.
	*/ Gs(e) {
		const t = this.Cs.exec(e);
		return t ? t[1] : null;
	}
	/**
	* Parses a client state in WebStorage. Returns 'null' if the value could not
	* be parsed.
	*/ js(e, t) {
		const n = this.Gs(e);
		return __PRIVATE_RemoteClientState.Rs(n, t);
	}
	/**
	* Parses a mutation batch state in WebStorage. Returns 'null' if the value
	* could not be parsed.
	*/ Hs(e, t) {
		const n = this.Fs.exec(e), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
		return __PRIVATE_MutationMetadata.Rs(new User(i), r, t);
	}
	/**
	* Parses a query target state from WebStorage. Returns 'null' if the value
	* could not be parsed.
	*/ Ys(e, t) {
		const n = this.Ms.exec(e), r = Number(n[1]);
		return __PRIVATE_QueryTargetMetadata.Rs(r, t);
	}
	/**
	* Parses an online state from WebStorage. Returns 'null' if the value
	* could not be parsed.
	*/ Ls(e) {
		return __PRIVATE_SharedOnlineState.Rs(e);
	}
	Xs(e) {
		return JSON.parse(e);
	}
	async Js(e) {
		if (e.user.uid === this.currentUser.uid) return this.syncEngine.no(e.batchId, e.state, e.error);
		__PRIVATE_logDebug("SharedClientState", `Ignoring mutation for non-active user ${e.user.uid}`);
	}
	Zs(e) {
		return this.syncEngine.ro(e.targetId, e.state, e.error);
	}
	zs(e, t) {
		const n = t ? this.Ss.insert(e, t) : this.Ss.remove(e), r = this.ks(this.Ss), i = this.ks(n), s = [], o = [];
		return i.forEach(((e) => {
			r.has(e) || s.push(e);
		})), r.forEach(((e) => {
			i.has(e) || o.push(e);
		})), this.syncEngine.io(s, o).then((() => {
			this.Ss = n;
		}));
	}
	Bs(e) {
		this.Ss.get(e.clientId) && this.onlineStateHandler(e.onlineState);
	}
	ks(e) {
		let t = __PRIVATE_targetIdSet();
		return e.forEach(((e, n) => {
			t = t.unionWith(n.activeTargetIds);
		})), t;
	}
};
var __PRIVATE_MemorySharedClientState = class {
	constructor() {
		this.so = new __PRIVATE_LocalClientState(), this.oo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
	}
	addPendingMutation(e) {}
	updateMutationState(e, t, n) {}
	addLocalQueryTarget(e, t = !0) {
		return t && this.so.fs(e), this.oo[e] || "not-current";
	}
	updateQueryState(e, t, n) {
		this.oo[e] = t;
	}
	removeLocalQueryTarget(e) {
		this.so.gs(e);
	}
	isLocalQueryTarget(e) {
		return this.so.activeTargetIds.has(e);
	}
	clearQueryState(e) {
		delete this.oo[e];
	}
	getAllActiveQueryTargets() {
		return this.so.activeTargetIds;
	}
	isActiveQueryTarget(e) {
		return this.so.activeTargetIds.has(e);
	}
	start() {
		return this.so = new __PRIVATE_LocalClientState(), Promise.resolve();
	}
	handleUserChange(e, t, n) {}
	setOnlineState(e) {}
	shutdown() {}
	writeSequenceNumber(e) {}
	notifyBundleLoaded(e) {}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_NoopConnectivityMonitor = class {
	_o(e) {}
	shutdown() {}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Browser implementation of ConnectivityMonitor.
*/
var __PRIVATE_BrowserConnectivityMonitor = class {
	constructor() {
		this.ao = () => this.uo(), this.co = () => this.lo(), this.ho = [], this.Po();
	}
	_o(e) {
		this.ho.push(e);
	}
	shutdown() {
		window.removeEventListener("online", this.ao), window.removeEventListener("offline", this.co);
	}
	Po() {
		window.addEventListener("online", this.ao), window.addEventListener("offline", this.co);
	}
	uo() {
		__PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
		for (const e of this.ho) e(0);
	}
	lo() {
		__PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
		for (const e of this.ho) e(1);
	}
	/** Checks that all used attributes of window are available. */
	static D() {
		return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
	}
};
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The value returned from the most recent invocation of
* `generateUniqueDebugId()`, or null if it has never been invoked.
*/ var me = null;
/**
* Generates and returns an initial value for `lastUniqueDebugId`.
*
* The returned value is randomly selected from a range of integers that are
* represented as 8 hexadecimal digits. This means that (within reason) any
* numbers generated by incrementing the returned number by 1 will also be
* represented by 8 hexadecimal digits. This leads to all "IDs" having the same
* length when converted to a hexadecimal string, making reading logs containing
* these IDs easier to follow. And since the return value is randomly selected
* it will help to differentiate between logs from different executions.
*/
/**
* Generates and returns a unique ID as a hexadecimal string.
*
* The returned ID is intended to be used in debug logging messages to help
* correlate log messages that may be spatially separated in the logs, but
* logically related. For example, a network connection could include the same
* "debug ID" string in all of its log messages to help trace a specific
* connection over time.
*
* @return the 10-character generated ID (e.g. "0xa1b2c3d4").
*/
function __PRIVATE_generateUniqueDebugId() {
	return null === me ? me = function __PRIVATE_generateInitialUniqueDebugId() {
		return 268435456 + Math.round(2147483648 * Math.random());
	}() : me++, "0x" + me.toString(16);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var fe = {
	BatchGetDocuments: "batchGet",
	Commit: "commit",
	RunQuery: "runQuery",
	RunAggregationQuery: "runAggregationQuery"
};
/**
* Maps RPC names to the corresponding REST endpoint name.
*
* We use array notation to avoid mangling.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provides a simple helper class that implements the Stream interface to
* bridge to other implementations that are streams but do not implement the
* interface. The stream callbacks are invoked with the callOn... methods.
*/
var __PRIVATE_StreamBridge = class {
	constructor(e) {
		this.Io = e.Io, this.To = e.To;
	}
	Eo(e) {
		this.Ao = e;
	}
	Ro(e) {
		this.Vo = e;
	}
	mo(e) {
		this.fo = e;
	}
	onMessage(e) {
		this.po = e;
	}
	close() {
		this.To();
	}
	send(e) {
		this.Io(e);
	}
	yo() {
		this.Ao();
	}
	wo() {
		this.Vo();
	}
	So(e) {
		this.fo(e);
	}
	bo(e) {
		this.po(e);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var ge = "WebChannelConnection";
var __PRIVATE_WebChannelConnection = class extends class __PRIVATE_RestConnection {
	constructor(e) {
		this.databaseInfo = e, this.databaseId = e.databaseId;
		const t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r = encodeURIComponent(this.databaseId.database);
		this.Do = t + "://" + e.host, this.vo = `projects/${n}/databases/${r}`, this.Co = "(default)" === this.databaseId.database ? `project_id=${n}` : `project_id=${n}&database_id=${r}`;
	}
	get Fo() {
		return !1;
	}
	Mo(e, t, n, r, i) {
		const s = __PRIVATE_generateUniqueDebugId(), o = this.xo(e, t.toUriEncodedString());
		__PRIVATE_logDebug("RestConnection", `Sending RPC '${e}' ${s}:`, o, n);
		const _ = {
			"google-cloud-resource-prefix": this.vo,
			"x-goog-request-params": this.Co
		};
		return this.Oo(_, r, i), this.No(e, o, _, n).then(((t) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${e}' ${s}: `, t), t)), ((t) => {
			throw __PRIVATE_logWarn("RestConnection", `RPC '${e}' ${s} failed with error: `, t, "url: ", o, "request:", n), t;
		}));
	}
	Lo(e, t, n, r, i, s) {
		return this.Mo(e, t, n, r, i);
	}
	/**
	* Modifies the headers for a request, adding any authorization token if
	* present and any additional headers for the request.
	*/ Oo(e, t, n) {
		e["X-Goog-Api-Client"] = function __PRIVATE_getGoogApiClientValue() {
			return "gl-js/ fire/" + S;
		}(), e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach(((t, n) => e[n] = t)), n && n.headers.forEach(((t, n) => e[n] = t));
	}
	xo(e, t) {
		const n = fe[e];
		return `${this.Do}/v1/${t}:${n}`;
	}
	/**
	* Closes and cleans up any resources associated with the connection. This
	* implementation is a no-op because there are no resources associated
	* with the RestConnection that need to be cleaned up.
	*/ terminate() {}
} {
	constructor(e) {
		super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
	}
	No(e, t, n, r) {
		const i = __PRIVATE_generateUniqueDebugId();
		return new Promise(((s, o) => {
			const _ = new XhrIo();
			_.setWithCredentials(!0), _.listenOnce(EventType.COMPLETE, (() => {
				try {
					switch (_.getLastErrorCode()) {
						case ErrorCode.NO_ERROR:
							const t = _.getResponseJson();
							__PRIVATE_logDebug(ge, `XHR for RPC '${e}' ${i} received:`, JSON.stringify(t)), s(t);
							break;
						case ErrorCode.TIMEOUT:
							__PRIVATE_logDebug(ge, `RPC '${e}' ${i} timed out`), o(new FirestoreError(D.DEADLINE_EXCEEDED, "Request time out"));
							break;
						case ErrorCode.HTTP_ERROR:
							const n = _.getStatus();
							if (__PRIVATE_logDebug(ge, `RPC '${e}' ${i} failed with status:`, n, "response text:", _.getResponseText()), n > 0) {
								let e = _.getResponseJson();
								Array.isArray(e) && (e = e[0]);
								const t = null == e ? void 0 : e.error;
								if (t && t.status && t.message) o(new FirestoreError(function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e) {
									const t = e.toLowerCase().replace(/_/g, "-");
									return Object.values(D).indexOf(t) >= 0 ? t : D.UNKNOWN;
								}(t.status), t.message));
								else o(new FirestoreError(D.UNKNOWN, "Server responded with status " + _.getStatus()));
							} else o(new FirestoreError(D.UNAVAILABLE, "Connection failed."));
							break;
						default: fail();
					}
				} finally {
					__PRIVATE_logDebug(ge, `RPC '${e}' ${i} completed.`);
				}
			}));
			const a = JSON.stringify(r);
			__PRIVATE_logDebug(ge, `RPC '${e}' ${i} sending request:`, r), _.send(t, "POST", a, n, 15);
		}));
	}
	Bo(e, t, n) {
		const r = __PRIVATE_generateUniqueDebugId(), i = [
			this.Do,
			"/",
			"google.firestore.v1.Firestore",
			"/",
			e,
			"/channel"
		], s = createWebChannelTransport(), o = getStatEventTarget(), _ = {
			httpSessionIdParam: "gsessionid",
			initMessageHeaders: {},
			messageUrlParams: { database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}` },
			sendRawJson: !0,
			supportsCrossDomainXhr: !0,
			internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
			forceLongPolling: this.forceLongPolling,
			detectBufferingProxy: this.autoDetectLongPolling
		}, a = this.longPollingOptions.timeoutSeconds;
		void 0 !== a && (_.longPollingTimeout = Math.round(1e3 * a)), this.useFetchStreams && (_.useFetchStreams = !0), this.Oo(_.initMessageHeaders, t, n), _.encodeInitMessageHeaders = !0;
		const u = i.join("");
		__PRIVATE_logDebug(ge, `Creating RPC '${e}' stream ${r}: ${u}`, _);
		const c = s.createWebChannel(u, _);
		let l = !1, h = !1;
		const P = new __PRIVATE_StreamBridge({
			Io: (t) => {
				h ? __PRIVATE_logDebug(ge, `Not sending because RPC '${e}' stream ${r} is closed:`, t) : (l || (__PRIVATE_logDebug(ge, `Opening RPC '${e}' stream ${r} transport.`), c.open(), l = !0), __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} sending:`, t), c.send(t));
			},
			To: () => c.close()
		}), __PRIVATE_unguardedEventListen = (e, t, n) => {
			e.listen(t, ((e) => {
				try {
					n(e);
				} catch (e) {
					setTimeout((() => {
						throw e;
					}), 0);
				}
			}));
		};
		return __PRIVATE_unguardedEventListen(c, WebChannel.EventType.OPEN, (() => {
			h || (__PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} transport opened.`), P.yo());
		})), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.CLOSE, (() => {
			h || (h = !0, __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} transport closed`), P.So());
		})), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.ERROR, ((t) => {
			h || (h = !0, __PRIVATE_logWarn(ge, `RPC '${e}' stream ${r} transport errored:`, t), P.So(new FirestoreError(D.UNAVAILABLE, "The operation could not be completed")));
		})), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.MESSAGE, ((t) => {
			var n;
			if (!h) {
				const i = t.data[0];
				__PRIVATE_hardAssert(!!i);
				const s = i, o = s.error || (null === (n = s[0]) || void 0 === n ? void 0 : n.error);
				if (o) {
					__PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} received error:`, o);
					const t = o.status;
					let n = function __PRIVATE_mapCodeFromRpcStatus(e) {
						const t = le[e];
						if (void 0 !== t) return __PRIVATE_mapCodeFromRpcCode(t);
					}(t), i = o.message;
					void 0 === n && (n = D.INTERNAL, i = "Unknown error status: " + t + " with message " + o.message), h = !0, P.So(new FirestoreError(n, i)), c.close();
				} else __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} received:`, i), P.bo(i);
			}
		})), __PRIVATE_unguardedEventListen(o, Event.STAT_EVENT, ((t) => {
			t.stat === Stat.PROXY ? __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} detected buffering proxy`) : t.stat === Stat.NOPROXY && __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} detected no buffering proxy`);
		})), setTimeout((() => {
			P.wo();
		}), 0), P;
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Initializes the WebChannelConnection for the browser. */
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** The Platform's 'window' implementation or null if not available. */
function __PRIVATE_getWindow() {
	return "undefined" != typeof window ? window : null;
}
/** The Platform's 'document' implementation or null if not available. */ function getDocument() {
	return "undefined" != typeof document ? document : null;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function __PRIVATE_newSerializer(e) {
	return new JsonProtoSerializer(e, !0);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A helper for running delayed tasks following an exponential backoff curve
* between attempts.
*
* Each delay is made up of a "base" delay which follows the exponential
* backoff curve, and a +/- 50% "jitter" that is calculated and added to the
* base delay. This prevents clients from accidentally synchronizing their
* delays causing spikes of load to the backend.
*/
var __PRIVATE_ExponentialBackoff = class {
	constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
		this.ui = e, this.timerId = t, this.ko = n, this.qo = r, this.Qo = i, this.Ko = 0, this.$o = null, this.Uo = Date.now(), this.reset();
	}
	/**
	* Resets the backoff delay.
	*
	* The very next backoffAndWait() will have no delay. If it is called again
	* (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
	* subsequent ones will increase according to the backoffFactor.
	*/ reset() {
		this.Ko = 0;
	}
	/**
	* Resets the backoff delay to the maximum delay (e.g. for use after a
	* RESOURCE_EXHAUSTED error).
	*/ Wo() {
		this.Ko = this.Qo;
	}
	/**
	* Returns a promise that resolves after currentDelayMs, and increases the
	* delay for any subsequent attempts. If there was a pending backoff operation
	* already, it will be canceled.
	*/ Go(e) {
		this.cancel();
		const t = Math.floor(this.Ko + this.zo()), n = Math.max(0, Date.now() - this.Uo), r = Math.max(0, t - n);
		r > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.$o = this.ui.enqueueAfterDelay(this.timerId, r, (() => (this.Uo = Date.now(), e()))), this.Ko *= this.qo, this.Ko < this.ko && (this.Ko = this.ko), this.Ko > this.Qo && (this.Ko = this.Qo);
	}
	jo() {
		null !== this.$o && (this.$o.skipDelay(), this.$o = null);
	}
	cancel() {
		null !== this.$o && (this.$o.cancel(), this.$o = null);
	}
	/** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ zo() {
		return (Math.random() - .5) * this.Ko;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A PersistentStream is an abstract base class that represents a streaming RPC
* to the Firestore backend. It's built on top of the connections own support
* for streaming RPCs, and adds several critical features for our clients:
*
*   - Exponential backoff on failure
*   - Authentication via CredentialsProvider
*   - Dispatching all callbacks into the shared worker queue
*   - Closing idle streams after 60 seconds of inactivity
*
* Subclasses of PersistentStream implement serialization of models to and
* from the JSON representation of the protocol buffers for a specific
* streaming RPC.
*
* ## Starting and Stopping
*
* Streaming RPCs are stateful and need to be start()ed before messages can
* be sent and received. The PersistentStream will call the onOpen() function
* of the listener once the stream is ready to accept requests.
*
* Should a start() fail, PersistentStream will call the registered onClose()
* listener with a FirestoreError indicating what went wrong.
*
* A PersistentStream can be started and stopped repeatedly.
*
* Generic types:
*  SendType: The type of the outgoing message of the underlying
*    connection stream
*  ReceiveType: The type of the incoming message of the underlying
*    connection stream
*  ListenerType: The type of the listener that will be used for callbacks
*/
var __PRIVATE_PersistentStream = class {
	constructor(e, t, n, r, i, s, o, _) {
		this.ui = e, this.Ho = n, this.Jo = r, this.connection = i, this.authCredentialsProvider = s, this.appCheckCredentialsProvider = o, this.listener = _, this.state = 0, this.Yo = 0, this.Zo = null, this.Xo = null, this.stream = null, this.e_ = 0, this.t_ = new __PRIVATE_ExponentialBackoff(e, t);
	}
	/**
	* Returns true if start() has been called and no error has occurred. True
	* indicates the stream is open or in the process of opening (which
	* encompasses respecting backoff, getting auth tokens, and starting the
	* actual RPC). Use isOpen() to determine if the stream is open and ready for
	* outbound requests.
	*/ n_() {
		return 1 === this.state || 5 === this.state || this.r_();
	}
	/**
	* Returns true if the underlying RPC is open (the onOpen() listener has been
	* called) and the stream is ready for outbound requests.
	*/ r_() {
		return 2 === this.state || 3 === this.state;
	}
	/**
	* Starts the RPC. Only allowed if isStarted() returns false. The stream is
	* not immediately ready for use: onOpen() will be invoked when the RPC is
	* ready for outbound requests, at which point isOpen() will return true.
	*
	* When start returns, isStarted() will return true.
	*/ start() {
		this.e_ = 0, 4 !== this.state ? this.auth() : this.i_();
	}
	/**
	* Stops the RPC. This call is idempotent and allowed regardless of the
	* current isStarted() state.
	*
	* When stop returns, isStarted() and isOpen() will both return false.
	*/ async stop() {
		this.n_() && await this.close(0);
	}
	/**
	* After an error the stream will usually back off on the next attempt to
	* start it. If the error warrants an immediate restart of the stream, the
	* sender can use this to indicate that the receiver should not back off.
	*
	* Each error will call the onClose() listener. That function can decide to
	* inhibit backoff if required.
	*/ s_() {
		this.state = 0, this.t_.reset();
	}
	/**
	* Marks this stream as idle. If no further actions are performed on the
	* stream for one minute, the stream will automatically close itself and
	* notify the stream's onClose() handler with Status.OK. The stream will then
	* be in a !isStarted() state, requiring the caller to start the stream again
	* before further use.
	*
	* Only streams that are in state 'Open' can be marked idle, as all other
	* states imply pending network operations.
	*/ o_() {
		this.r_() && null === this.Zo && (this.Zo = this.ui.enqueueAfterDelay(this.Ho, 6e4, (() => this.__())));
	}
	/** Sends a message to the underlying stream. */ a_(e) {
		this.u_(), this.stream.send(e);
	}
	/** Called by the idle timer when the stream should close due to inactivity. */ async __() {
		if (this.r_()) return this.close(0);
	}
	/** Marks the stream as active again. */ u_() {
		this.Zo && (this.Zo.cancel(), this.Zo = null);
	}
	/** Cancels the health check delayed operation. */ c_() {
		this.Xo && (this.Xo.cancel(), this.Xo = null);
	}
	/**
	* Closes the stream and cleans up as necessary:
	*
	* * closes the underlying GRPC stream;
	* * calls the onClose handler with the given 'error';
	* * sets internal stream state to 'finalState';
	* * adjusts the backoff timer based on the error
	*
	* A new stream can be opened by calling start().
	*
	* @param finalState - the intended state of the stream after closing.
	* @param error - the error the connection was closed with.
	*/ async close(e, t) {
		this.u_(), this.c_(), this.t_.cancel(), this.Yo++, 4 !== e ? this.t_.reset() : t && t.code === D.RESOURCE_EXHAUSTED ? (__PRIVATE_logError(t.toString()), __PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."), this.t_.Wo()) : t && t.code === D.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.l_(), this.stream.close(), this.stream = null), this.state = e, await this.listener.mo(t);
	}
	/**
	* Can be overridden to perform additional cleanup before the stream is closed.
	* Calling super.tearDown() is not required.
	*/ l_() {}
	auth() {
		this.state = 1;
		const e = this.h_(this.Yo), t = this.Yo;
		Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((([e, n]) => {
			this.Yo === t && this.P_(e, n);
		}), ((t) => {
			e((() => {
				const e = new FirestoreError(D.UNKNOWN, "Fetching auth token failed: " + t.message);
				return this.I_(e);
			}));
		}));
	}
	P_(e, t) {
		const n = this.h_(this.Yo);
		this.stream = this.T_(e, t), this.stream.Eo((() => {
			n((() => this.listener.Eo()));
		})), this.stream.Ro((() => {
			n((() => (this.state = 2, this.Xo = this.ui.enqueueAfterDelay(this.Jo, 1e4, (() => (this.r_() && (this.state = 3), Promise.resolve()))), this.listener.Ro())));
		})), this.stream.mo(((e) => {
			n((() => this.I_(e)));
		})), this.stream.onMessage(((e) => {
			n((() => 1 == ++this.e_ ? this.E_(e) : this.onNext(e)));
		}));
	}
	i_() {
		this.state = 5, this.t_.Go((async () => {
			this.state = 0, this.start();
		}));
	}
	I_(e) {
		return __PRIVATE_logDebug("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e);
	}
	/**
	* Returns a "dispatcher" function that dispatches operations onto the
	* AsyncQueue but only runs them if closeCount remains unchanged. This allows
	* us to turn auth / stream callbacks into no-ops if the stream is closed /
	* re-opened, etc.
	*/ h_(e) {
		return (t) => {
			this.ui.enqueueAndForget((() => this.Yo === e ? t() : (__PRIVATE_logDebug("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())));
		};
	}
};
/**
* A PersistentStream that implements the Listen RPC.
*
* Once the Listen stream has called the onOpen() listener, any number of
* listen() and unlisten() calls can be made to control what changes will be
* sent from the server for ListenResponses.
*/ var __PRIVATE_PersistentListenStream = class extends __PRIVATE_PersistentStream {
	constructor(e, t, n, r, i, s) {
		super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, s), this.serializer = i;
	}
	T_(e, t) {
		return this.connection.Bo("Listen", e, t);
	}
	E_(e) {
		return this.onNext(e);
	}
	onNext(e) {
		this.t_.reset();
		const t = __PRIVATE_fromWatchChange(this.serializer, e), n = function __PRIVATE_versionFromListenResponse(e) {
			if (!("targetChange" in e)) return SnapshotVersion.min();
			const t = e.targetChange;
			return t.targetIds && t.targetIds.length ? SnapshotVersion.min() : t.readTime ? __PRIVATE_fromVersion(t.readTime) : SnapshotVersion.min();
		}(e);
		return this.listener.d_(t, n);
	}
	/**
	* Registers interest in the results of the given target. If the target
	* includes a resumeToken it will be included in the request. Results that
	* affect the target will be streamed back as WatchChange messages that
	* reference the targetId.
	*/ A_(e) {
		const t = {};
		t.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t.addTarget = function __PRIVATE_toTarget(e, t) {
			let n;
			const r = t.target;
			if (n = __PRIVATE_targetIsDocumentTarget(r) ? { documents: __PRIVATE_toDocumentsTarget(e, r) } : { query: __PRIVATE_toQueryTarget(e, r)._t }, n.targetId = t.targetId, t.resumeToken.approximateByteSize() > 0) {
				n.resumeToken = __PRIVATE_toBytes(e, t.resumeToken);
				const r = __PRIVATE_toInt32Proto(e, t.expectedCount);
				null !== r && (n.expectedCount = r);
			} else if (t.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
				n.readTime = toTimestamp(e, t.snapshotVersion.toTimestamp());
				const r = __PRIVATE_toInt32Proto(e, t.expectedCount);
				null !== r && (n.expectedCount = r);
			}
			return n;
		}(this.serializer, e);
		const n = __PRIVATE_toListenRequestLabels(this.serializer, e);
		n && (t.labels = n), this.a_(t);
	}
	/**
	* Unregisters interest in the results of the target associated with the
	* given targetId.
	*/ R_(e) {
		const t = {};
		t.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t.removeTarget = e, this.a_(t);
	}
};
/**
* A Stream that implements the Write RPC.
*
* The Write RPC requires the caller to maintain special streamToken
* state in between calls, to help the server understand which responses the
* client has processed by the time the next request is made. Every response
* will contain a streamToken; this value must be passed to the next
* request.
*
* After calling start() on this stream, the next request must be a handshake,
* containing whatever streamToken is on hand. Once a response to this
* request is received, all pending mutations may be submitted. When
* submitting multiple batches of mutations at the same time, it's
* okay to use the same streamToken for the calls to writeMutations.
*
* TODO(b/33271235): Use proto types
*/ var __PRIVATE_PersistentWriteStream = class extends __PRIVATE_PersistentStream {
	constructor(e, t, n, r, i, s) {
		super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, s), this.serializer = i;
	}
	/**
	* Tracks whether or not a handshake has been successfully exchanged and
	* the stream is ready to accept mutations.
	*/ get V_() {
		return this.e_ > 0;
	}
	start() {
		this.lastStreamToken = void 0, super.start();
	}
	l_() {
		this.V_ && this.m_([]);
	}
	T_(e, t) {
		return this.connection.Bo("Write", e, t);
	}
	E_(e) {
		return __PRIVATE_hardAssert(!!e.streamToken), this.lastStreamToken = e.streamToken, __PRIVATE_hardAssert(!e.writeResults || 0 === e.writeResults.length), this.listener.f_();
	}
	onNext(e) {
		__PRIVATE_hardAssert(!!e.streamToken), this.lastStreamToken = e.streamToken, this.t_.reset();
		const t = __PRIVATE_fromWriteResults(e.writeResults, e.commitTime), n = __PRIVATE_fromVersion(e.commitTime);
		return this.listener.g_(n, t);
	}
	/**
	* Sends an initial streamToken to the server, performing the handshake
	* required to make the StreamingWrite RPC work. Subsequent
	* calls should wait until onHandshakeComplete was called.
	*/ p_() {
		const e = {};
		e.database = __PRIVATE_getEncodedDatabaseId(this.serializer), this.a_(e);
	}
	/** Sends a group of mutations to the Firestore backend to apply. */ m_(e) {
		const t = {
			streamToken: this.lastStreamToken,
			writes: e.map(((e) => toMutation(this.serializer, e)))
		};
		this.a_(t);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Datastore and its related methods are a wrapper around the external Google
* Cloud Datastore grpc API, which provides an interface that is more convenient
* for the rest of the client SDK architecture to consume.
*/
/**
* An implementation of Datastore that exposes additional state for internal
* consumption.
*/
var __PRIVATE_DatastoreImpl = class extends class Datastore {} {
	constructor(e, t, n, r) {
		super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.y_ = !1;
	}
	w_() {
		if (this.y_) throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
	}
	/** Invokes the provided RPC with auth and AppCheck tokens. */ Mo(e, t, n, r) {
		return this.w_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([i, s]) => this.connection.Mo(e, __PRIVATE_toResourcePath(t, n), r, i, s))).catch(((e) => {
			throw "FirebaseError" === e.name ? (e.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new FirestoreError(D.UNKNOWN, e.toString());
		}));
	}
	/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */ Lo(e, t, n, r, i) {
		return this.w_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([s, o]) => this.connection.Lo(e, __PRIVATE_toResourcePath(t, n), r, s, o, i))).catch(((e) => {
			throw "FirebaseError" === e.name ? (e.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new FirestoreError(D.UNKNOWN, e.toString());
		}));
	}
	terminate() {
		this.y_ = !0, this.connection.terminate();
	}
};
/**
* A component used by the RemoteStore to track the OnlineState (that is,
* whether or not the client as a whole should be considered to be online or
* offline), implementing the appropriate heuristics.
*
* In particular, when the client is trying to connect to the backend, we
* allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
* a connection to succeed. If we have too many failures or the timeout elapses,
* then we set the OnlineState to Offline, and the client will behave as if
* it is offline (get()s will return cached data, etc.).
*/
var __PRIVATE_OnlineStateTracker = class {
	constructor(e, t) {
		this.asyncQueue = e, this.onlineStateHandler = t, this.state = "Unknown", this.S_ = 0, this.b_ = null, this.D_ = !0;
	}
	/**
	* Called by RemoteStore when a watch stream is started (including on each
	* backoff attempt).
	*
	* If this is the first attempt, it sets the OnlineState to Unknown and starts
	* the onlineStateTimer.
	*/ v_() {
		0 === this.S_ && (this.C_("Unknown"), this.b_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (() => (this.b_ = null, this.F_("Backend didn't respond within 10 seconds."), this.C_("Offline"), Promise.resolve()))));
	}
	/**
	* Updates our OnlineState as appropriate after the watch stream reports a
	* failure. The first failure moves us to the 'Unknown' state. We then may
	* allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
	* actually transition to the 'Offline' state.
	*/ M_(e) {
		"Online" === this.state ? this.C_("Unknown") : (this.S_++, this.S_ >= 1 && (this.x_(), this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.C_("Offline")));
	}
	/**
	* Explicitly sets the OnlineState to the specified state.
	*
	* Note that this resets our timers / failure counters, etc. used by our
	* Offline heuristics, so must not be used in place of
	* handleWatchStreamStart() and handleWatchStreamFailure().
	*/ set(e) {
		this.x_(), this.S_ = 0, "Online" === e && (this.D_ = !1), this.C_(e);
	}
	C_(e) {
		e !== this.state && (this.state = e, this.onlineStateHandler(e));
	}
	F_(e) {
		const t = `Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
		this.D_ ? (__PRIVATE_logError(t), this.D_ = !1) : __PRIVATE_logDebug("OnlineStateTracker", t);
	}
	x_() {
		null !== this.b_ && (this.b_.cancel(), this.b_ = null);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_RemoteStoreImpl = class {
	constructor(e, t, n, r, i) {
		this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, this.O_ = [], this.N_ = /* @__PURE__ */ new Map(), this.L_ = /* @__PURE__ */ new Set(), this.B_ = [], this.k_ = i, this.k_._o(((e) => {
			n.enqueueAndForget((async () => {
				__PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug("RemoteStore", "Restarting streams for network reachability change."), await async function __PRIVATE_restartNetwork(e) {
					const t = __PRIVATE_debugCast(e);
					t.L_.add(4), await __PRIVATE_disableNetworkInternal(t), t.q_.set("Unknown"), t.L_.delete(4), await __PRIVATE_enableNetworkInternal(t);
				}(this));
			}));
		})), this.q_ = new __PRIVATE_OnlineStateTracker(n, r);
	}
};
async function __PRIVATE_enableNetworkInternal(e) {
	if (__PRIVATE_canUseNetwork(e)) for (const t of e.B_) await t(!0);
}
/**
* Temporarily disables the network. The network can be re-enabled using
* enableNetwork().
*/ async function __PRIVATE_disableNetworkInternal(e) {
	for (const t of e.B_) await t(!1);
}
/**
* Starts new listen for the given target. Uses resume token if provided. It
* is a no-op if the target of given `TargetData` is already being listened to.
*/
function __PRIVATE_remoteStoreListen(e, t) {
	const n = __PRIVATE_debugCast(e);
	n.N_.has(t.targetId) || (n.N_.set(t.targetId, t), __PRIVATE_shouldStartWatchStream(n) ? __PRIVATE_startWatchStream(n) : __PRIVATE_ensureWatchStream(n).r_() && __PRIVATE_sendWatchRequest(n, t));
}
/**
* Removes the listen from server. It is a no-op if the given target id is
* not being listened to.
*/ function __PRIVATE_remoteStoreUnlisten(e, t) {
	const n = __PRIVATE_debugCast(e), r = __PRIVATE_ensureWatchStream(n);
	n.N_.delete(t), r.r_() && __PRIVATE_sendUnwatchRequest(n, t), 0 === n.N_.size && (r.r_() ? r.o_() : __PRIVATE_canUseNetwork(n) && n.q_.set("Unknown"));
}
/**
* We need to increment the expected number of pending responses we're due
* from watch so we wait for the ack to process any messages from this target.
*/ function __PRIVATE_sendWatchRequest(e, t) {
	if (e.Q_.xe(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
		const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
		t = t.withExpectedCount(n);
	}
	__PRIVATE_ensureWatchStream(e).A_(t);
}
/**
* We need to increment the expected number of pending responses we're due
* from watch so we wait for the removal on the server before we process any
* messages from this target.
*/ function __PRIVATE_sendUnwatchRequest(e, t) {
	e.Q_.xe(t), __PRIVATE_ensureWatchStream(e).R_(t);
}
function __PRIVATE_startWatchStream(e) {
	e.Q_ = new __PRIVATE_WatchChangeAggregator({
		getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
		ot: (t) => e.N_.get(t) || null,
		tt: () => e.datastore.serializer.databaseId
	}), __PRIVATE_ensureWatchStream(e).start(), e.q_.v_();
}
/**
* Returns whether the watch stream should be started because it's necessary
* and has not yet been started.
*/ function __PRIVATE_shouldStartWatchStream(e) {
	return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWatchStream(e).n_() && e.N_.size > 0;
}
function __PRIVATE_canUseNetwork(e) {
	return 0 === __PRIVATE_debugCast(e).L_.size;
}
function __PRIVATE_cleanUpWatchStreamState(e) {
	e.Q_ = void 0;
}
async function __PRIVATE_onWatchStreamConnected(e) {
	e.q_.set("Online");
}
async function __PRIVATE_onWatchStreamOpen(e) {
	e.N_.forEach(((t, n) => {
		__PRIVATE_sendWatchRequest(e, t);
	}));
}
async function __PRIVATE_onWatchStreamClose(e, t) {
	__PRIVATE_cleanUpWatchStreamState(e), __PRIVATE_shouldStartWatchStream(e) ? (e.q_.M_(t), __PRIVATE_startWatchStream(e)) : e.q_.set("Unknown");
}
async function __PRIVATE_onWatchStreamChange(e, t, n) {
	if (e.q_.set("Online"), t instanceof __PRIVATE_WatchTargetChange && 2 === t.state && t.cause) try {
		await async function __PRIVATE_handleTargetError(e, t) {
			const n = t.cause;
			for (const r of t.targetIds) e.N_.has(r) && (await e.remoteSyncer.rejectListen(r, n), e.N_.delete(r), e.Q_.removeTarget(r));
		}(e, t);
	} catch (n) {
		__PRIVATE_logDebug("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), n), await __PRIVATE_disableNetworkUntilRecovery(e, n);
	}
	else if (t instanceof __PRIVATE_DocumentWatchChange ? e.Q_.Ke(t) : t instanceof __PRIVATE_ExistenceFilterChange ? e.Q_.He(t) : e.Q_.We(t), !n.isEqual(SnapshotVersion.min())) try {
		const t = await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore);
		n.compareTo(t) >= 0 && await function __PRIVATE_raiseWatchSnapshot(e, t) {
			const n = e.Q_.rt(t);
			return n.targetChanges.forEach(((n, r) => {
				if (n.resumeToken.approximateByteSize() > 0) {
					const i = e.N_.get(r);
					i && e.N_.set(r, i.withResumeToken(n.resumeToken, t));
				}
			})), n.targetMismatches.forEach(((t, n) => {
				const r = e.N_.get(t);
				if (!r) return;
				e.N_.set(t, r.withResumeToken(ByteString.EMPTY_BYTE_STRING, r.snapshotVersion)), __PRIVATE_sendUnwatchRequest(e, t);
				__PRIVATE_sendWatchRequest(e, new TargetData(r.target, t, n, r.sequenceNumber));
			})), e.remoteSyncer.applyRemoteEvent(n);
		}(e, n);
	} catch (t) {
		__PRIVATE_logDebug("RemoteStore", "Failed to raise snapshot:", t), await __PRIVATE_disableNetworkUntilRecovery(e, t);
	}
}
/**
* Recovery logic for IndexedDB errors that takes the network offline until
* `op` succeeds. Retries are scheduled with backoff using
* `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
* validated via a generic operation.
*
* The returned Promise is resolved once the network is disabled and before
* any retry attempt.
*/ async function __PRIVATE_disableNetworkUntilRecovery(e, t, n) {
	if (!__PRIVATE_isIndexedDbTransactionError(t)) throw t;
	e.L_.add(1), await __PRIVATE_disableNetworkInternal(e), e.q_.set("Offline"), n || (n = () => __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)), e.asyncQueue.enqueueRetryable((async () => {
		__PRIVATE_logDebug("RemoteStore", "Retrying IndexedDB access"), await n(), e.L_.delete(1), await __PRIVATE_enableNetworkInternal(e);
	}));
}
/**
* Executes `op`. If `op` fails, takes the network offline until `op`
* succeeds. Returns after the first attempt.
*/ function __PRIVATE_executeWithRecovery(e, t) {
	return t().catch(((n) => __PRIVATE_disableNetworkUntilRecovery(e, n, t)));
}
async function __PRIVATE_fillWritePipeline(e) {
	const t = __PRIVATE_debugCast(e), n = __PRIVATE_ensureWriteStream(t);
	let r = t.O_.length > 0 ? t.O_[t.O_.length - 1].batchId : -1;
	for (; __PRIVATE_canAddToWritePipeline(t);) try {
		const e = await __PRIVATE_localStoreGetNextMutationBatch(t.localStore, r);
		if (null === e) {
			0 === t.O_.length && n.o_();
			break;
		}
		r = e.batchId, __PRIVATE_addToWritePipeline(t, e);
	} catch (e) {
		await __PRIVATE_disableNetworkUntilRecovery(t, e);
	}
	__PRIVATE_shouldStartWriteStream(t) && __PRIVATE_startWriteStream(t);
}
/**
* Returns true if we can add to the write pipeline (i.e. the network is
* enabled and the write pipeline is not full).
*/ function __PRIVATE_canAddToWritePipeline(e) {
	return __PRIVATE_canUseNetwork(e) && e.O_.length < 10;
}
/**
* Queues additional writes to be sent to the write stream, sending them
* immediately if the write stream is established.
*/ function __PRIVATE_addToWritePipeline(e, t) {
	e.O_.push(t);
	const n = __PRIVATE_ensureWriteStream(e);
	n.r_() && n.V_ && n.m_(t.mutations);
}
function __PRIVATE_shouldStartWriteStream(e) {
	return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWriteStream(e).n_() && e.O_.length > 0;
}
function __PRIVATE_startWriteStream(e) {
	__PRIVATE_ensureWriteStream(e).start();
}
async function __PRIVATE_onWriteStreamOpen(e) {
	__PRIVATE_ensureWriteStream(e).p_();
}
async function __PRIVATE_onWriteHandshakeComplete(e) {
	const t = __PRIVATE_ensureWriteStream(e);
	for (const n of e.O_) t.m_(n.mutations);
}
async function __PRIVATE_onMutationResult(e, t, n) {
	const r = e.O_.shift(), i = MutationBatchResult.from(r, t, n);
	await __PRIVATE_executeWithRecovery(e, (() => e.remoteSyncer.applySuccessfulWrite(i))), await __PRIVATE_fillWritePipeline(e);
}
async function __PRIVATE_onWriteStreamClose(e, t) {
	t && __PRIVATE_ensureWriteStream(e).V_ && await async function __PRIVATE_handleWriteError(e, t) {
		if (function __PRIVATE_isPermanentWriteError(e) {
			return __PRIVATE_isPermanentError(e) && e !== D.ABORTED;
		}(t.code)) {
			const n = e.O_.shift();
			__PRIVATE_ensureWriteStream(e).s_(), await __PRIVATE_executeWithRecovery(e, (() => e.remoteSyncer.rejectFailedWrite(n.batchId, t))), await __PRIVATE_fillWritePipeline(e);
		}
	}(e, t), __PRIVATE_shouldStartWriteStream(e) && __PRIVATE_startWriteStream(e);
}
async function __PRIVATE_remoteStoreHandleCredentialChange(e, t) {
	const n = __PRIVATE_debugCast(e);
	n.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug("RemoteStore", "RemoteStore received new credentials");
	const r = __PRIVATE_canUseNetwork(n);
	n.L_.add(3), await __PRIVATE_disableNetworkInternal(n), r && n.q_.set("Unknown"), await n.remoteSyncer.handleCredentialChange(t), n.L_.delete(3), await __PRIVATE_enableNetworkInternal(n);
}
/**
* Toggles the network state when the client gains or loses its primary lease.
*/ async function __PRIVATE_remoteStoreApplyPrimaryState(e, t) {
	const n = __PRIVATE_debugCast(e);
	t ? (n.L_.delete(2), await __PRIVATE_enableNetworkInternal(n)) : t || (n.L_.add(2), await __PRIVATE_disableNetworkInternal(n), n.q_.set("Unknown"));
}
/**
* If not yet initialized, registers the WatchStream and its network state
* callback with `remoteStoreImpl`. Returns the existing stream if one is
* already available.
*
* PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
* This is not done on Web to allow it to be tree-shaken.
*/ function __PRIVATE_ensureWatchStream(e) {
	return e.K_ || (e.K_ = function __PRIVATE_newPersistentWatchStream(e, t, n) {
		const r = __PRIVATE_debugCast(e);
		return r.w_(), new __PRIVATE_PersistentListenStream(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
	}(e.datastore, e.asyncQueue, {
		Eo: __PRIVATE_onWatchStreamConnected.bind(null, e),
		Ro: __PRIVATE_onWatchStreamOpen.bind(null, e),
		mo: __PRIVATE_onWatchStreamClose.bind(null, e),
		d_: __PRIVATE_onWatchStreamChange.bind(null, e)
	}), e.B_.push((async (t) => {
		t ? (e.K_.s_(), __PRIVATE_shouldStartWatchStream(e) ? __PRIVATE_startWatchStream(e) : e.q_.set("Unknown")) : (await e.K_.stop(), __PRIVATE_cleanUpWatchStreamState(e));
	}))), e.K_;
}
/**
* If not yet initialized, registers the WriteStream and its network state
* callback with `remoteStoreImpl`. Returns the existing stream if one is
* already available.
*
* PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
* This is not done on Web to allow it to be tree-shaken.
*/ function __PRIVATE_ensureWriteStream(e) {
	return e.U_ || (e.U_ = function __PRIVATE_newPersistentWriteStream(e, t, n) {
		const r = __PRIVATE_debugCast(e);
		return r.w_(), new __PRIVATE_PersistentWriteStream(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
	}(e.datastore, e.asyncQueue, {
		Eo: () => Promise.resolve(),
		Ro: __PRIVATE_onWriteStreamOpen.bind(null, e),
		mo: __PRIVATE_onWriteStreamClose.bind(null, e),
		f_: __PRIVATE_onWriteHandshakeComplete.bind(null, e),
		g_: __PRIVATE_onMutationResult.bind(null, e)
	}), e.B_.push((async (t) => {
		t ? (e.U_.s_(), await __PRIVATE_fillWritePipeline(e)) : (await e.U_.stop(), e.O_.length > 0 && (__PRIVATE_logDebug("RemoteStore", `Stopping write stream with ${e.O_.length} pending writes`), e.O_ = []));
	}))), e.U_;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents an operation scheduled to be run in the future on an AsyncQueue.
*
* It is created via DelayedOperation.createAndSchedule().
*
* Supports cancellation (via cancel()) and early execution (via skipDelay()).
*
* Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
* in newer versions of TypeScript defines `finally`, which is not available in
* IE.
*/
var DelayedOperation = class DelayedOperation {
	constructor(e, t, n, r, i) {
		this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(((e) => {}));
	}
	get promise() {
		return this.deferred.promise;
	}
	/**
	* Creates and returns a DelayedOperation that has been scheduled to be
	* executed on the provided asyncQueue after the provided delayMs.
	*
	* @param asyncQueue - The queue to schedule the operation on.
	* @param id - A Timer ID identifying the type of operation this is.
	* @param delayMs - The delay (ms) before the operation should be scheduled.
	* @param op - The operation to run.
	* @param removalCallback - A callback to be called synchronously once the
	*   operation is executed or canceled, notifying the AsyncQueue to remove it
	*   from its delayedOperations list.
	*   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
	*   the DelayedOperation class public.
	*/ static createAndSchedule(e, t, n, r, i) {
		const o = new DelayedOperation(e, t, Date.now() + n, r, i);
		return o.start(n), o;
	}
	/**
	* Starts the timer. This is called immediately after construction by
	* createAndSchedule().
	*/ start(e) {
		this.timerHandle = setTimeout((() => this.handleDelayElapsed()), e);
	}
	/**
	* Queues the operation to run immediately (if it hasn't already been run or
	* canceled).
	*/ skipDelay() {
		return this.handleDelayElapsed();
	}
	/**
	* Cancels the operation if it hasn't already been executed or canceled. The
	* promise will be rejected.
	*
	* As long as the operation has not yet been run, calling cancel() provides a
	* guarantee that the operation will not be run.
	*/ cancel(e) {
		null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(D.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
	}
	handleDelayElapsed() {
		this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then(((e) => this.deferred.resolve(e)))) : Promise.resolve()));
	}
	clearTimeout() {
		null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
	}
};
/**
* Returns a FirestoreError that can be surfaced to the user if the provided
* error is an IndexedDbTransactionError. Re-throws the error otherwise.
*/ function __PRIVATE_wrapInUserErrorIfRecoverable(e, t) {
	if (__PRIVATE_logError("AsyncQueue", `${t}: ${e}`), __PRIVATE_isIndexedDbTransactionError(e)) return new FirestoreError(D.UNAVAILABLE, `${t}: ${e}`);
	throw e;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* DocumentSet is an immutable (copy-on-write) collection that holds documents
* in order specified by the provided comparator. We always add a document key
* comparator on top of what is provided to guarantee document equality based on
* the key.
*/ var DocumentSet = class DocumentSet {
	/** The default ordering is by key if the comparator is omitted */
	constructor(e) {
		this.comparator = e ? (t, n) => e(t, n) || DocumentKey.comparator(t.key, n.key) : (e, t) => DocumentKey.comparator(e.key, t.key), this.keyedMap = documentMap(), this.sortedSet = new SortedMap(this.comparator);
	}
	/**
	* Returns an empty copy of the existing DocumentSet, using the same
	* comparator.
	*/ static emptySet(e) {
		return new DocumentSet(e.comparator);
	}
	has(e) {
		return null != this.keyedMap.get(e);
	}
	get(e) {
		return this.keyedMap.get(e);
	}
	first() {
		return this.sortedSet.minKey();
	}
	last() {
		return this.sortedSet.maxKey();
	}
	isEmpty() {
		return this.sortedSet.isEmpty();
	}
	/**
	* Returns the index of the provided key in the document set, or -1 if the
	* document key is not present in the set;
	*/ indexOf(e) {
		const t = this.keyedMap.get(e);
		return t ? this.sortedSet.indexOf(t) : -1;
	}
	get size() {
		return this.sortedSet.size;
	}
	/** Iterates documents in order defined by "comparator" */ forEach(e) {
		this.sortedSet.inorderTraversal(((t, n) => (e(t), !1)));
	}
	/** Inserts or updates a document with the same key */ add(e) {
		const t = this.delete(e.key);
		return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
	}
	/** Deletes a document with a given key */ delete(e) {
		const t = this.get(e);
		return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
	}
	isEqual(e) {
		if (!(e instanceof DocumentSet)) return !1;
		if (this.size !== e.size) return !1;
		const t = this.sortedSet.getIterator(), n = e.sortedSet.getIterator();
		for (; t.hasNext();) {
			const e = t.getNext().key, r = n.getNext().key;
			if (!e.isEqual(r)) return !1;
		}
		return !0;
	}
	toString() {
		const e = [];
		return this.forEach(((t) => {
			e.push(t.toString());
		})), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)";
	}
	copy(e, t) {
		const n = new DocumentSet();
		return n.comparator = this.comparator, n.keyedMap = e, n.sortedSet = t, n;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* DocumentChangeSet keeps track of a set of changes to docs in a query, merging
* duplicate events for the same doc.
*/ var __PRIVATE_DocumentChangeSet = class {
	constructor() {
		this.W_ = new SortedMap(DocumentKey.comparator);
	}
	track(e) {
		const t = e.doc.key, n = this.W_.get(t);
		n ? 0 !== e.type && 3 === n.type ? this.W_ = this.W_.insert(t, e) : 3 === e.type && 1 !== n.type ? this.W_ = this.W_.insert(t, {
			type: n.type,
			doc: e.doc
		}) : 2 === e.type && 2 === n.type ? this.W_ = this.W_.insert(t, {
			type: 2,
			doc: e.doc
		}) : 2 === e.type && 0 === n.type ? this.W_ = this.W_.insert(t, {
			type: 0,
			doc: e.doc
		}) : 1 === e.type && 0 === n.type ? this.W_ = this.W_.remove(t) : 1 === e.type && 2 === n.type ? this.W_ = this.W_.insert(t, {
			type: 1,
			doc: n.doc
		}) : 0 === e.type && 1 === n.type ? this.W_ = this.W_.insert(t, {
			type: 2,
			doc: e.doc
		}) : fail() : this.W_ = this.W_.insert(t, e);
	}
	G_() {
		const e = [];
		return this.W_.inorderTraversal(((t, n) => {
			e.push(n);
		})), e;
	}
};
var ViewSnapshot = class ViewSnapshot {
	constructor(e, t, n, r, i, s, o, _, a) {
		this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = s, this.syncStateChanged = o, this.excludesMetadataChanges = _, this.hasCachedResults = a;
	}
	/** Returns a view snapshot as if all documents in the snapshot were added. */ static fromInitialDocuments(e, t, n, r, i) {
		const s = [];
		return t.forEach(((e) => {
			s.push({
				type: 0,
				doc: e
			});
		})), new ViewSnapshot(e, t, DocumentSet.emptySet(t), s, n, r, !0, !1, i);
	}
	get hasPendingWrites() {
		return !this.mutatedKeys.isEmpty();
	}
	isEqual(e) {
		if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && __PRIVATE_queryEquals(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
		const t = this.docChanges, n = e.docChanges;
		if (t.length !== n.length) return !1;
		for (let e = 0; e < t.length; e++) if (t[e].type !== n[e].type || !t[e].doc.isEqual(n[e].doc)) return !1;
		return !0;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Holds the listeners and the last received ViewSnapshot for a query being
* tracked by EventManager.
*/ var __PRIVATE_QueryListenersInfo = class {
	constructor() {
		this.z_ = void 0, this.j_ = [];
	}
	H_() {
		return this.j_.some(((e) => e.J_()));
	}
};
var __PRIVATE_EventManagerImpl = class {
	constructor() {
		this.queries = __PRIVATE_newQueriesObjectMap(), this.onlineState = "Unknown", this.Y_ = /* @__PURE__ */ new Set();
	}
	terminate() {
		(function __PRIVATE_errorAllTargets(e, t) {
			const n = __PRIVATE_debugCast(e), r = n.queries;
			n.queries = __PRIVATE_newQueriesObjectMap(), r.forEach(((e, n) => {
				for (const e of n.j_) e.onError(t);
			}));
		})(this, new FirestoreError(D.ABORTED, "Firestore shutting down"));
	}
};
function __PRIVATE_newQueriesObjectMap() {
	return new ObjectMap(((e) => __PRIVATE_canonifyQuery(e)), __PRIVATE_queryEquals);
}
async function __PRIVATE_eventManagerListen(e, t) {
	const n = __PRIVATE_debugCast(e);
	let r = 3;
	const i = t.query;
	let s = n.queries.get(i);
	s ? !s.H_() && t.J_() && (r = 2) : (s = new __PRIVATE_QueryListenersInfo(), r = t.J_() ? 0 : 1);
	try {
		switch (r) {
			case 0:
				s.z_ = await n.onListen(
					i,
					/** enableRemoteListen= */
					!0
				);
				break;
			case 1:
				s.z_ = await n.onListen(
					i,
					/** enableRemoteListen= */
					!1
				);
				break;
			case 2: await n.onFirstRemoteStoreListen(i);
		}
	} catch (e) {
		const n = __PRIVATE_wrapInUserErrorIfRecoverable(e, `Initialization of query '${__PRIVATE_stringifyQuery(t.query)}' failed`);
		t.onError(n);
		return;
	}
	if (n.queries.set(i, s), s.j_.push(t), t.Z_(n.onlineState), s.z_) t.X_(s.z_) && __PRIVATE_raiseSnapshotsInSyncEvent(n);
}
async function __PRIVATE_eventManagerUnlisten(e, t) {
	const n = __PRIVATE_debugCast(e), r = t.query;
	let i = 3;
	const s = n.queries.get(r);
	if (s) {
		const e = s.j_.indexOf(t);
		e >= 0 && (s.j_.splice(e, 1), 0 === s.j_.length ? i = t.J_() ? 0 : 1 : !s.H_() && t.J_() && (i = 2));
	}
	switch (i) {
		case 0: return n.queries.delete(r), n.onUnlisten(
			r,
			/** disableRemoteListen= */
			!0
		);
		case 1: return n.queries.delete(r), n.onUnlisten(
			r,
			/** disableRemoteListen= */
			!1
		);
		case 2: return n.onLastRemoteStoreUnlisten(r);
		default: return;
	}
}
function __PRIVATE_eventManagerOnWatchChange(e, t) {
	const n = __PRIVATE_debugCast(e);
	let r = !1;
	for (const e of t) {
		const t = e.query, i = n.queries.get(t);
		if (i) {
			for (const t of i.j_) t.X_(e) && (r = !0);
			i.z_ = e;
		}
	}
	r && __PRIVATE_raiseSnapshotsInSyncEvent(n);
}
function __PRIVATE_eventManagerOnWatchError(e, t, n) {
	const r = __PRIVATE_debugCast(e), i = r.queries.get(t);
	if (i) for (const e of i.j_) e.onError(n);
	r.queries.delete(t);
}
function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
	e.Y_.forEach(((e) => {
		e.next();
	}));
}
var pe, ye;
/** Listen to both cache and server changes */
(ye = pe || (pe = {})).ea = "default", ye.Cache = "cache";
/**
* QueryListener takes a series of internal view snapshots and determines
* when to raise the event.
*
* It uses an Observer to dispatch events.
*/
var __PRIVATE_QueryListener = class {
	constructor(e, t, n) {
		this.query = e, this.ta = t, this.na = !1, this.ra = null, this.onlineState = "Unknown", this.options = n || {};
	}
	/**
	* Applies the new ViewSnapshot to this listener, raising a user-facing event
	* if applicable (depending on what changed, whether the user has opted into
	* metadata-only changes, etc.). Returns true if a user-facing event was
	* indeed raised.
	*/ X_(e) {
		if (!this.options.includeMetadataChanges) {
			const t = [];
			for (const n of e.docChanges) 3 !== n.type && t.push(n);
			e = new ViewSnapshot(e.query, e.docs, e.oldDocs, t, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults);
		}
		let t = !1;
		return this.na ? this.ia(e) && (this.ta.next(e), t = !0) : this.sa(e, this.onlineState) && (this.oa(e), t = !0), this.ra = e, t;
	}
	onError(e) {
		this.ta.error(e);
	}
	/** Returns whether a snapshot was raised. */ Z_(e) {
		this.onlineState = e;
		let t = !1;
		return this.ra && !this.na && this.sa(this.ra, e) && (this.oa(this.ra), t = !0), t;
	}
	sa(e, t) {
		if (!e.fromCache) return !0;
		if (!this.J_()) return !0;
		const n = "Offline" !== t;
		return (!this.options._a || !n) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t);
	}
	ia(e) {
		if (e.docChanges.length > 0) return !0;
		const t = this.ra && this.ra.hasPendingWrites !== e.hasPendingWrites;
		return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges;
	}
	oa(e) {
		e = ViewSnapshot.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.na = !0, this.ta.next(e);
	}
	J_() {
		return this.options.source !== pe.Cache;
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A complete element in the bundle stream, together with the byte length it
* occupies in the stream.
*/ var __PRIVATE_SizedBundleElement = class {
	constructor(e, t) {
		this.aa = e, this.byteLength = t;
	}
	ua() {
		return "metadata" in this.aa;
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Helper to convert objects from bundles to model objects in the SDK.
*/ var __PRIVATE_BundleConverterImpl = class {
	constructor(e) {
		this.serializer = e;
	}
	Es(e) {
		return fromName(this.serializer, e);
	}
	/**
	* Converts a BundleDocument to a MutableDocument.
	*/ ds(e) {
		return e.metadata.exists ? __PRIVATE_fromDocument(this.serializer, e.document, !1) : MutableDocument.newNoDocument(this.Es(e.metadata.name), this.As(e.metadata.readTime));
	}
	As(e) {
		return __PRIVATE_fromVersion(e);
	}
};
/**
* A class to process the elements from a bundle, load them into local
* storage and provide progress update while loading.
*/ var __PRIVATE_BundleLoader = class {
	constructor(e, t, n) {
		this.ca = e, this.localStore = t, this.serializer = n, this.queries = [], this.documents = [], this.collectionGroups = /* @__PURE__ */ new Set(), this.progress = __PRIVATE_bundleInitialProgress(e);
	}
	/**
	* Adds an element from the bundle to the loader.
	*
	* Returns a new progress if adding the element leads to a new progress,
	* otherwise returns null.
	*/ la(e) {
		this.progress.bytesLoaded += e.byteLength;
		let t = this.progress.documentsLoaded;
		if (e.aa.namedQuery) this.queries.push(e.aa.namedQuery);
		else if (e.aa.documentMetadata) {
			this.documents.push({ metadata: e.aa.documentMetadata }), e.aa.documentMetadata.exists || ++t;
			const n = ResourcePath.fromString(e.aa.documentMetadata.name);
			this.collectionGroups.add(n.get(n.length - 2));
		} else e.aa.document && (this.documents[this.documents.length - 1].document = e.aa.document, ++t);
		return t !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = t, Object.assign({}, this.progress)) : null;
	}
	ha(e) {
		const t = /* @__PURE__ */ new Map(), n = new __PRIVATE_BundleConverterImpl(this.serializer);
		for (const r of e) if (r.metadata.queries) {
			const e = n.Es(r.metadata.name);
			for (const n of r.metadata.queries) {
				const r = (t.get(n) || __PRIVATE_documentKeySet()).add(e);
				t.set(n, r);
			}
		}
		return t;
	}
	/**
	* Update the progress to 'Success' and return the updated progress.
	*/ async complete() {
		const e = await __PRIVATE_localStoreApplyBundledDocuments(this.localStore, new __PRIVATE_BundleConverterImpl(this.serializer), this.documents, this.ca.id), t = this.ha(this.documents);
		for (const e of this.queries) await __PRIVATE_localStoreSaveNamedQuery(this.localStore, e, t.get(e.name));
		return this.progress.taskState = "Success", {
			progress: this.progress,
			Pa: this.collectionGroups,
			Ia: e
		};
	}
};
/**
* Returns a `LoadBundleTaskProgress` representing the initial progress of
* loading a bundle.
*/ function __PRIVATE_bundleInitialProgress(e) {
	return {
		taskState: "Running",
		documentsLoaded: 0,
		bytesLoaded: 0,
		totalDocuments: e.totalDocuments,
		totalBytes: e.totalBytes
	};
}
/**
* Returns a `LoadBundleTaskProgress` representing the progress that the loading
* has succeeded.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var __PRIVATE_AddedLimboDocument = class {
	constructor(e) {
		this.key = e;
	}
};
var __PRIVATE_RemovedLimboDocument = class {
	constructor(e) {
		this.key = e;
	}
};
/**
* View is responsible for computing the final merged truth of what docs are in
* a query. It gets notified of local and remote changes to docs, and applies
* the query filters and limits to determine the most correct possible results.
*/ var __PRIVATE_View = class {
	constructor(e, t) {
		this.query = e, this.Ta = t, this.Ea = null, this.hasCachedResults = !1, this.current = !1, this.da = __PRIVATE_documentKeySet(), this.mutatedKeys = __PRIVATE_documentKeySet(), this.Aa = __PRIVATE_newQueryComparator(e), this.Ra = new DocumentSet(this.Aa);
	}
	/**
	* The set of remote documents that the server has told us belongs to the target associated with
	* this view.
	*/ get Va() {
		return this.Ta;
	}
	/**
	* Iterates over a set of doc changes, applies the query limit, and computes
	* what the new results should be, what the changes were, and whether we may
	* need to go back to the local cache for more results. Does not make any
	* changes to the view.
	* @param docChanges - The doc changes to apply to this view.
	* @param previousChanges - If this is being called with a refill, then start
	*        with this set of docs and changes instead of the current view.
	* @returns a new set of docs, changes, and refill flag.
	*/ ma(e, t) {
		const n = t ? t.fa : new __PRIVATE_DocumentChangeSet(), r = t ? t.Ra : this.Ra;
		let i = t ? t.mutatedKeys : this.mutatedKeys, s = r, o = !1;
		const _ = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null, a = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null;
		if (e.inorderTraversal(((e, t) => {
			const u = r.get(e), c = __PRIVATE_queryMatches(this.query, t) ? t : null, l = !!u && this.mutatedKeys.has(u.key), h = !!c && (c.hasLocalMutations || this.mutatedKeys.has(c.key) && c.hasCommittedMutations);
			let P = !1;
			if (u && c) u.data.isEqual(c.data) ? l !== h && (n.track({
				type: 3,
				doc: c
			}), P = !0) : this.ga(u, c) || (n.track({
				type: 2,
				doc: c
			}), P = !0, (_ && this.Aa(c, _) > 0 || a && this.Aa(c, a) < 0) && (o = !0));
			else !u && c ? (n.track({
				type: 0,
				doc: c
			}), P = !0) : u && !c && (n.track({
				type: 1,
				doc: u
			}), P = !0, (_ || a) && (o = !0));
			P && (c ? (s = s.add(c), i = h ? i.add(e) : i.delete(e)) : (s = s.delete(e), i = i.delete(e)));
		})), null !== this.query.limit) for (; s.size > this.query.limit;) {
			const e = "F" === this.query.limitType ? s.last() : s.first();
			s = s.delete(e.key), i = i.delete(e.key), n.track({
				type: 1,
				doc: e
			});
		}
		return {
			Ra: s,
			fa: n,
			ns: o,
			mutatedKeys: i
		};
	}
	ga(e, t) {
		return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
	}
	/**
	* Updates the view with the given ViewDocumentChanges and optionally updates
	* limbo docs and sync state from the provided target change.
	* @param docChanges - The set of changes to make to the view's docs.
	* @param limboResolutionEnabled - Whether to update limbo documents based on
	*        this change.
	* @param targetChange - A target change to apply for computing limbo docs and
	*        sync state.
	* @param targetIsPendingReset - Whether the target is pending to reset due to
	*        existence filter mismatch. If not explicitly specified, it is treated
	*        equivalently to `false`.
	* @returns A new ViewChange with the given docs, changes, and sync state.
	*/
	applyChanges(e, t, n, r) {
		const i = this.Ra;
		this.Ra = e.Ra, this.mutatedKeys = e.mutatedKeys;
		const s = e.fa.G_();
		s.sort(((e, t) => function __PRIVATE_compareChangeType(e, t) {
			const order = (e) => {
				switch (e) {
					case 0: return 1;
					case 2:
					case 3: return 2;
					case 1: return 0;
					default: return fail();
				}
			};
			return order(e) - order(t);
		}(e.type, t.type) || this.Aa(e.doc, t.doc))), this.pa(n), r = null != r && r;
		const o = t && !r ? this.ya() : [], _ = 0 === this.da.size && this.current && !r ? 1 : 0, a = _ !== this.Ea;
		if (this.Ea = _, 0 !== s.length || a) return {
			snapshot: new ViewSnapshot(this.query, e.Ra, i, s, e.mutatedKeys, 0 === _, a, !1, !!n && n.resumeToken.approximateByteSize() > 0),
			wa: o
		};
		return { wa: o };
	}
	/**
	* Applies an OnlineState change to the view, potentially generating a
	* ViewChange if the view's syncState changes as a result.
	*/ Z_(e) {
		return this.current && "Offline" === e ? (this.current = !1, this.applyChanges({
			Ra: this.Ra,
			fa: new __PRIVATE_DocumentChangeSet(),
			mutatedKeys: this.mutatedKeys,
			ns: !1
		}, !1)) : { wa: [] };
	}
	/**
	* Returns whether the doc for the given key should be in limbo.
	*/ Sa(e) {
		return !this.Ta.has(e) && !!this.Ra.has(e) && !this.Ra.get(e).hasLocalMutations;
	}
	/**
	* Updates syncedDocuments, current, and limbo docs based on the given change.
	* Returns the list of changes to which docs are in limbo.
	*/ pa(e) {
		e && (e.addedDocuments.forEach(((e) => this.Ta = this.Ta.add(e))), e.modifiedDocuments.forEach(((e) => {})), e.removedDocuments.forEach(((e) => this.Ta = this.Ta.delete(e))), this.current = e.current);
	}
	ya() {
		if (!this.current) return [];
		const e = this.da;
		this.da = __PRIVATE_documentKeySet(), this.Ra.forEach(((e) => {
			this.Sa(e.key) && (this.da = this.da.add(e.key));
		}));
		const t = [];
		return e.forEach(((e) => {
			this.da.has(e) || t.push(new __PRIVATE_RemovedLimboDocument(e));
		})), this.da.forEach(((n) => {
			e.has(n) || t.push(new __PRIVATE_AddedLimboDocument(n));
		})), t;
	}
	/**
	* Update the in-memory state of the current view with the state read from
	* persistence.
	*
	* We update the query view whenever a client's primary status changes:
	* - When a client transitions from primary to secondary, it can miss
	*   LocalStorage updates and its query views may temporarily not be
	*   synchronized with the state on disk.
	* - For secondary to primary transitions, the client needs to update the list
	*   of `syncedDocuments` since secondary clients update their query views
	*   based purely on synthesized RemoteEvents.
	*
	* @param queryResult.documents - The documents that match the query according
	* to the LocalStore.
	* @param queryResult.remoteKeys - The keys of the documents that match the
	* query according to the backend.
	*
	* @returns The ViewChange that resulted from this synchronization.
	*/
	ba(e) {
		this.Ta = e.Ts, this.da = __PRIVATE_documentKeySet();
		const t = this.ma(e.documents);
		return this.applyChanges(t, !0);
	}
	/**
	* Returns a view snapshot as if this query was just listened to. Contains
	* a document add for every existing document and the `fromCache` and
	* `hasPendingWrites` status of the already established view.
	*/
	Da() {
		return ViewSnapshot.fromInitialDocuments(this.query, this.Ra, this.mutatedKeys, 0 === this.Ea, this.hasCachedResults);
	}
};
/**
* QueryView contains all of the data that SyncEngine needs to keep track of for
* a particular query.
*/
var __PRIVATE_QueryView = class {
	constructor(e, t, n) {
		this.query = e, this.targetId = t, this.view = n;
	}
};
/** Tracks a limbo resolution. */ var LimboResolution = class {
	constructor(e) {
		this.key = e, this.va = !1;
	}
};
/**
* An implementation of `SyncEngine` coordinating with other parts of SDK.
*
* The parts of SyncEngine that act as a callback to RemoteStore need to be
* registered individually. This is done in `syncEngineWrite()` and
* `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
* serve as entry points to RemoteStore's functionality.
*
* Note: some field defined in this class might have public access level, but
* the class is not exported so they are only accessible from this module.
* This is useful to implement optional features (like bundles) in free
* functions, such that they are tree-shakeable.
*/ var __PRIVATE_SyncEngineImpl = class {
	constructor(e, t, n, r, i, s) {
		this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = s, this.Ca = {}, this.Fa = new ObjectMap(((e) => __PRIVATE_canonifyQuery(e)), __PRIVATE_queryEquals), this.Ma = /* @__PURE__ */ new Map(), this.xa = /* @__PURE__ */ new Set(), this.Oa = new SortedMap(DocumentKey.comparator), this.Na = /* @__PURE__ */ new Map(), this.La = new __PRIVATE_ReferenceSet(), this.Ba = {}, this.ka = /* @__PURE__ */ new Map(), this.qa = __PRIVATE_TargetIdGenerator.kn(), this.onlineState = "Unknown", this.Qa = void 0;
	}
	get isPrimaryClient() {
		return !0 === this.Qa;
	}
};
/**
* Initiates the new listen, resolves promise when listen enqueued to the
* server. All the subsequent view snapshots or errors are sent to the
* subscribed handlers. Returns the initial snapshot.
*/
async function __PRIVATE_syncEngineListen(e, t, n = !0) {
	const r = __PRIVATE_ensureWatchCallbacks(e);
	let i;
	const s = r.Fa.get(t);
	return s ? (r.sharedClientState.addLocalQueryTarget(s.targetId), i = s.view.Da()) : i = await __PRIVATE_allocateTargetAndMaybeListen(
		r,
		t,
		n,
		/** shouldInitializeView= */
		!0
	), i;
}
/** Query has been listening to the cache, and tries to initiate the remote store listen */ async function __PRIVATE_triggerRemoteStoreListen(e, t) {
	await __PRIVATE_allocateTargetAndMaybeListen(
		__PRIVATE_ensureWatchCallbacks(e),
		t,
		/** shouldListenToRemote= */
		!0,
		/** shouldInitializeView= */
		!1
	);
}
async function __PRIVATE_allocateTargetAndMaybeListen(e, t, n, r) {
	const i = await __PRIVATE_localStoreAllocateTarget(e.localStore, __PRIVATE_queryToTarget(t)), s = i.targetId, o = e.sharedClientState.addLocalQueryTarget(s, n);
	let _;
	return r && (_ = await __PRIVATE_initializeViewAndComputeSnapshot(e, t, s, "current" === o, i.resumeToken)), e.isPrimaryClient && n && __PRIVATE_remoteStoreListen(e.remoteStore, i), _;
}
/**
* Registers a view for a previously unknown query and computes its initial
* snapshot.
*/ async function __PRIVATE_initializeViewAndComputeSnapshot(e, t, n, r, i) {
	e.Ka = (t, n, r) => async function __PRIVATE_applyDocChanges(e, t, n, r) {
		let i = t.view.ma(n);
		i.ns && (i = await __PRIVATE_localStoreExecuteQuery(e.localStore, t.query, !1).then((({ documents: e }) => t.view.ma(e, i))));
		const s = r && r.targetChanges.get(t.targetId), o = r && null != r.targetMismatches.get(t.targetId), _ = t.view.applyChanges(i, e.isPrimaryClient, s, o);
		return __PRIVATE_updateTrackedLimbos(e, t.targetId, _.wa), _.snapshot;
	}(e, t, n, r);
	const s = await __PRIVATE_localStoreExecuteQuery(e.localStore, t, !0), o = new __PRIVATE_View(t, s.Ts), _ = o.ma(s.documents), a = TargetChange.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, i), u = o.applyChanges(_, e.isPrimaryClient, a);
	__PRIVATE_updateTrackedLimbos(e, n, u.wa);
	const c = new __PRIVATE_QueryView(t, n, o);
	return e.Fa.set(t, c), e.Ma.has(n) ? e.Ma.get(n).push(t) : e.Ma.set(n, [t]), u.snapshot;
}
/** Stops listening to the query. */ async function __PRIVATE_syncEngineUnlisten(e, t, n) {
	const r = __PRIVATE_debugCast(e), i = r.Fa.get(t), s = r.Ma.get(i.targetId);
	if (s.length > 1) return r.Ma.set(i.targetId, s.filter(((e) => !__PRIVATE_queryEquals(e, t)))), void r.Fa.delete(t);
	if (r.isPrimaryClient) {
		r.sharedClientState.removeLocalQueryTarget(i.targetId);
		r.sharedClientState.isActiveQueryTarget(i.targetId) || await __PRIVATE_localStoreReleaseTarget(r.localStore, i.targetId, !1).then((() => {
			r.sharedClientState.clearQueryState(i.targetId), n && __PRIVATE_remoteStoreUnlisten(r.remoteStore, i.targetId), __PRIVATE_removeAndCleanupTarget(r, i.targetId);
		})).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
	} else __PRIVATE_removeAndCleanupTarget(r, i.targetId), await __PRIVATE_localStoreReleaseTarget(r.localStore, i.targetId, !0);
}
/** Unlistens to the remote store while still listening to the cache. */ async function __PRIVATE_triggerRemoteStoreUnlisten(e, t) {
	const n = __PRIVATE_debugCast(e), r = n.Fa.get(t), i = n.Ma.get(r.targetId);
	n.isPrimaryClient && 1 === i.length && (n.sharedClientState.removeLocalQueryTarget(r.targetId), __PRIVATE_remoteStoreUnlisten(n.remoteStore, r.targetId));
}
/**
* Initiates the write of local mutation batch which involves adding the
* writes to the mutation queue, notifying the remote store about new
* mutations and raising events for any changes this write caused.
*
* The promise returned by this call is resolved when the above steps
* have completed, *not* when the write was acked by the backend. The
* userCallback is resolved once the write was acked/rejected by the
* backend (or failed locally for any other reason).
*/ async function __PRIVATE_syncEngineWrite(e, t, n) {
	const r = __PRIVATE_syncEngineEnsureWriteCallbacks(e);
	try {
		const e = await function __PRIVATE_localStoreWriteLocally(e, t) {
			const n = __PRIVATE_debugCast(e), r = Timestamp.now(), i = t.reduce(((e, t) => e.add(t.key)), __PRIVATE_documentKeySet());
			let s, o;
			return n.persistence.runTransaction("Locally write mutations", "readwrite", ((e) => {
				let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
				return n.cs.getEntries(e, i).next(((e) => {
					_ = e, _.forEach(((e, t) => {
						t.isValidDocument() || (a = a.add(e));
					}));
				})).next((() => n.localDocuments.getOverlayedDocuments(e, _))).next(((i) => {
					s = i;
					const o = [];
					for (const e of t) {
						const t = __PRIVATE_mutationExtractBaseValue(e, s.get(e.key).overlayedDocument);
						null != t && o.push(new __PRIVATE_PatchMutation(e.key, t, __PRIVATE_extractFieldMask(t.value.mapValue), Precondition.exists(!0)));
					}
					return n.mutationQueue.addMutationBatch(e, r, o, t);
				})).next(((t) => {
					o = t;
					const r = t.applyToLocalDocumentSet(s, a);
					return n.documentOverlayCache.saveOverlays(e, t.batchId, r);
				}));
			})).then((() => ({
				batchId: o.batchId,
				changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(s)
			})));
		}(r.localStore, t);
		r.sharedClientState.addPendingMutation(e.batchId), function __PRIVATE_addMutationCallback(e, t, n) {
			let r = e.Ba[e.currentUser.toKey()];
			r || (r = new SortedMap(__PRIVATE_primitiveComparator));
			r = r.insert(t, n), e.Ba[e.currentUser.toKey()] = r;
		}(r, e.batchId, n), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r, e.changes), await __PRIVATE_fillWritePipeline(r.remoteStore);
	} catch (e) {
		const t = __PRIVATE_wrapInUserErrorIfRecoverable(e, "Failed to persist write");
		n.reject(t);
	}
}
/**
* Applies one remote event to the sync engine, notifying any views of the
* changes, and releasing any pending mutation batches that would become
* visible because of the snapshot version the remote event contains.
*/ async function __PRIVATE_syncEngineApplyRemoteEvent(e, t) {
	const n = __PRIVATE_debugCast(e);
	try {
		const e = await __PRIVATE_localStoreApplyRemoteEventToLocalCache(n.localStore, t);
		t.targetChanges.forEach(((e, t) => {
			const r = n.Na.get(t);
			r && (__PRIVATE_hardAssert(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1), e.addedDocuments.size > 0 ? r.va = !0 : e.modifiedDocuments.size > 0 ? __PRIVATE_hardAssert(r.va) : e.removedDocuments.size > 0 && (__PRIVATE_hardAssert(r.va), r.va = !1));
		})), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e, t);
	} catch (e) {
		await __PRIVATE_ignoreIfPrimaryLeaseLoss(e);
	}
}
/**
* Applies an OnlineState change to the sync engine and notifies any views of
* the change.
*/ function __PRIVATE_syncEngineApplyOnlineStateChange(e, t, n) {
	const r = __PRIVATE_debugCast(e);
	if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
		const e = [];
		r.Fa.forEach(((n, r) => {
			const i = r.view.Z_(t);
			i.snapshot && e.push(i.snapshot);
		})), function __PRIVATE_eventManagerOnOnlineStateChange(e, t) {
			const n = __PRIVATE_debugCast(e);
			n.onlineState = t;
			let r = !1;
			n.queries.forEach(((e, n) => {
				for (const e of n.j_) e.Z_(t) && (r = !0);
			})), r && __PRIVATE_raiseSnapshotsInSyncEvent(n);
		}(r.eventManager, t), e.length && r.Ca.d_(e), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
	}
}
/**
* Rejects the listen for the given targetID. This can be triggered by the
* backend for any active target.
*
* @param syncEngine - The sync engine implementation.
* @param targetId - The targetID corresponds to one previously initiated by the
* user as part of TargetData passed to listen() on RemoteStore.
* @param err - A description of the condition that has forced the rejection.
* Nearly always this will be an indication that the user is no longer
* authorized to see the data matching the target.
*/ async function __PRIVATE_syncEngineRejectListen(e, t, n) {
	const r = __PRIVATE_debugCast(e);
	r.sharedClientState.updateQueryState(t, "rejected", n);
	const i = r.Na.get(t), s = i && i.key;
	if (s) {
		let e = new SortedMap(DocumentKey.comparator);
		e = e.insert(s, MutableDocument.newNoDocument(s, SnapshotVersion.min()));
		const n = __PRIVATE_documentKeySet().add(s);
		await __PRIVATE_syncEngineApplyRemoteEvent(r, new RemoteEvent(SnapshotVersion.min(), /* @__PURE__ */ new Map(), new SortedMap(__PRIVATE_primitiveComparator), e, n)), r.Oa = r.Oa.remove(s), r.Na.delete(t), __PRIVATE_pumpEnqueuedLimboResolutions(r);
	} else await __PRIVATE_localStoreReleaseTarget(r.localStore, t, !1).then((() => __PRIVATE_removeAndCleanupTarget(r, t, n))).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
}
async function __PRIVATE_syncEngineApplySuccessfulWrite(e, t) {
	const n = __PRIVATE_debugCast(e), r = t.batch.batchId;
	try {
		const e = await __PRIVATE_localStoreAcknowledgeBatch(n.localStore, t);
		__PRIVATE_processUserCallback(n, r, null), __PRIVATE_triggerPendingWritesCallbacks(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e);
	} catch (e) {
		await __PRIVATE_ignoreIfPrimaryLeaseLoss(e);
	}
}
async function __PRIVATE_syncEngineRejectFailedWrite(e, t, n) {
	const r = __PRIVATE_debugCast(e);
	try {
		const e = await function __PRIVATE_localStoreRejectBatch(e, t) {
			const n = __PRIVATE_debugCast(e);
			return n.persistence.runTransaction("Reject batch", "readwrite-primary", ((e) => {
				let r;
				return n.mutationQueue.lookupMutationBatch(e, t).next(((t) => (__PRIVATE_hardAssert(null !== t), r = t.keys(), n.mutationQueue.removeMutationBatch(e, t)))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, r))).next((() => n.localDocuments.getDocuments(e, r)));
			}));
		}(r.localStore, t);
		__PRIVATE_processUserCallback(r, t, n), __PRIVATE_triggerPendingWritesCallbacks(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r, e);
	} catch (n) {
		await __PRIVATE_ignoreIfPrimaryLeaseLoss(n);
	}
}
/**
* Registers a user callback that resolves when all pending mutations at the moment of calling
* are acknowledged .
*/ async function __PRIVATE_syncEngineRegisterPendingWritesCallback(e, t) {
	const n = __PRIVATE_debugCast(e);
	__PRIVATE_canUseNetwork(n.remoteStore) || __PRIVATE_logDebug("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
	try {
		const e = await function __PRIVATE_localStoreGetHighestUnacknowledgedBatchId(e) {
			const t = __PRIVATE_debugCast(e);
			return t.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", ((e) => t.mutationQueue.getHighestUnacknowledgedBatchId(e)));
		}(n.localStore);
		if (-1 === e) return void t.resolve();
		const r = n.ka.get(e) || [];
		r.push(t), n.ka.set(e, r);
	} catch (e) {
		const n = __PRIVATE_wrapInUserErrorIfRecoverable(e, "Initialization of waitForPendingWrites() operation failed");
		t.reject(n);
	}
}
/**
* Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
* if there are any.
*/ function __PRIVATE_triggerPendingWritesCallbacks(e, t) {
	(e.ka.get(t) || []).forEach(((e) => {
		e.resolve();
	})), e.ka.delete(t);
}
/** Reject all outstanding callbacks waiting for pending writes to complete. */ function __PRIVATE_processUserCallback(e, t, n) {
	const r = __PRIVATE_debugCast(e);
	let i = r.Ba[r.currentUser.toKey()];
	if (i) {
		const e = i.get(t);
		e && (n ? e.reject(n) : e.resolve(), i = i.remove(t)), r.Ba[r.currentUser.toKey()] = i;
	}
}
function __PRIVATE_removeAndCleanupTarget(e, t, n = null) {
	e.sharedClientState.removeLocalQueryTarget(t);
	for (const r of e.Ma.get(t)) e.Fa.delete(r), n && e.Ca.$a(r, n);
	if (e.Ma.delete(t), e.isPrimaryClient) e.La.gr(t).forEach(((t) => {
		e.La.containsKey(t) || __PRIVATE_removeLimboTarget(e, t);
	}));
}
function __PRIVATE_removeLimboTarget(e, t) {
	e.xa.delete(t.path.canonicalString());
	const n = e.Oa.get(t);
	null !== n && (__PRIVATE_remoteStoreUnlisten(e.remoteStore, n), e.Oa = e.Oa.remove(t), e.Na.delete(n), __PRIVATE_pumpEnqueuedLimboResolutions(e));
}
function __PRIVATE_updateTrackedLimbos(e, t, n) {
	for (const r of n) if (r instanceof __PRIVATE_AddedLimboDocument) e.La.addReference(r.key, t), __PRIVATE_trackLimboChange(e, r);
	else if (r instanceof __PRIVATE_RemovedLimboDocument) {
		__PRIVATE_logDebug("SyncEngine", "Document no longer in limbo: " + r.key), e.La.removeReference(r.key, t);
		e.La.containsKey(r.key) || __PRIVATE_removeLimboTarget(e, r.key);
	} else fail();
}
function __PRIVATE_trackLimboChange(e, t) {
	const n = t.key, r = n.path.canonicalString();
	e.Oa.get(n) || e.xa.has(r) || (__PRIVATE_logDebug("SyncEngine", "New document in limbo: " + n), e.xa.add(r), __PRIVATE_pumpEnqueuedLimboResolutions(e));
}
/**
* Starts listens for documents in limbo that are enqueued for resolution,
* subject to a maximum number of concurrent resolutions.
*
* Without bounding the number of concurrent resolutions, the server can fail
* with "resource exhausted" errors which can lead to pathological client
* behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
*/ function __PRIVATE_pumpEnqueuedLimboResolutions(e) {
	for (; e.xa.size > 0 && e.Oa.size < e.maxConcurrentLimboResolutions;) {
		const t = e.xa.values().next().value;
		e.xa.delete(t);
		const n = new DocumentKey(ResourcePath.fromString(t)), r = e.qa.next();
		e.Na.set(r, new LimboResolution(n)), e.Oa = e.Oa.insert(n, r), __PRIVATE_remoteStoreListen(e.remoteStore, new TargetData(__PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(n.path)), r, "TargetPurposeLimboResolution", __PRIVATE_ListenSequence.oe));
	}
}
async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, t, n) {
	const r = __PRIVATE_debugCast(e), i = [], s = [], o = [];
	r.Fa.isEmpty() || (r.Fa.forEach(((e, _) => {
		o.push(r.Ka(_, t, n).then(((e) => {
			var t;
			if ((e || n) && r.isPrimaryClient) {
				const i = e ? !e.fromCache : null === (t = null == n ? void 0 : n.targetChanges.get(_.targetId)) || void 0 === t ? void 0 : t.current;
				r.sharedClientState.updateQueryState(_.targetId, i ? "current" : "not-current");
			}
			if (e) {
				i.push(e);
				const t = __PRIVATE_LocalViewChanges.Wi(_.targetId, e);
				s.push(t);
			}
		})));
	})), await Promise.all(o), r.Ca.d_(i), await async function __PRIVATE_localStoreNotifyLocalViewChanges(e, t) {
		const n = __PRIVATE_debugCast(e);
		try {
			await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", ((e) => PersistencePromise.forEach(t, ((t) => PersistencePromise.forEach(t.$i, ((r) => n.persistence.referenceDelegate.addReference(e, t.targetId, r))).next((() => PersistencePromise.forEach(t.Ui, ((r) => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))))))));
		} catch (e) {
			if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
			__PRIVATE_logDebug("LocalStore", "Failed to update sequence numbers: " + e);
		}
		for (const e of t) {
			const t = e.targetId;
			if (!e.fromCache) {
				const e = n.os.get(t), r = e.snapshotVersion, i = e.withLastLimboFreeSnapshotVersion(r);
				n.os = n.os.insert(t, i);
			}
		}
	}(r.localStore, s));
}
async function __PRIVATE_syncEngineHandleCredentialChange(e, t) {
	const n = __PRIVATE_debugCast(e);
	if (!n.currentUser.isEqual(t)) {
		__PRIVATE_logDebug("SyncEngine", "User change. New user:", t.toKey());
		const e = await __PRIVATE_localStoreHandleUserChange(n.localStore, t);
		n.currentUser = t, function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e, t) {
			e.ka.forEach(((e) => {
				e.forEach(((e) => {
					e.reject(new FirestoreError(D.CANCELLED, t));
				}));
			})), e.ka.clear();
		}(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e.hs);
	}
}
function __PRIVATE_syncEngineGetRemoteKeysForTarget(e, t) {
	const n = __PRIVATE_debugCast(e), r = n.Na.get(t);
	if (r && r.va) return __PRIVATE_documentKeySet().add(r.key);
	{
		let e = __PRIVATE_documentKeySet();
		const r = n.Ma.get(t);
		if (!r) return e;
		for (const t of r) {
			const r = n.Fa.get(t);
			e = e.unionWith(r.view.Va);
		}
		return e;
	}
}
/**
* Reconcile the list of synced documents in an existing view with those
* from persistence.
*/ async function __PRIVATE_synchronizeViewAndComputeSnapshot(e, t) {
	const n = __PRIVATE_debugCast(e), r = await __PRIVATE_localStoreExecuteQuery(n.localStore, t.query, !0), i = t.view.ba(r);
	return n.isPrimaryClient && __PRIVATE_updateTrackedLimbos(n, t.targetId, i.wa), i;
}
/**
* Retrieves newly changed documents from remote document cache and raises
* snapshots if needed.
*/
async function __PRIVATE_syncEngineSynchronizeWithChangedDocuments(e, t) {
	const n = __PRIVATE_debugCast(e);
	return __PRIVATE_localStoreGetNewDocumentChanges(n.localStore, t).then(((e) => __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e)));
}
/** Applies a mutation state to an existing batch.  */
async function __PRIVATE_syncEngineApplyBatchState(e, t, n, r) {
	const i = __PRIVATE_debugCast(e), s = await function __PRIVATE_localStoreLookupMutationDocuments(e, t) {
		const n = __PRIVATE_debugCast(e), r = __PRIVATE_debugCast(n.mutationQueue);
		return n.persistence.runTransaction("Lookup mutation documents", "readonly", ((e) => r.Mn(e, t).next(((t) => t ? n.localDocuments.getDocuments(e, t) : PersistencePromise.resolve(null)))));
	}(i.localStore, t);
	null !== s ? ("pending" === n ? await __PRIVATE_fillWritePipeline(i.remoteStore) : "acknowledged" === n || "rejected" === n ? (__PRIVATE_processUserCallback(i, t, r || null), __PRIVATE_triggerPendingWritesCallbacks(i, t), function __PRIVATE_localStoreRemoveCachedMutationBatchMetadata(e, t) {
		__PRIVATE_debugCast(__PRIVATE_debugCast(e).mutationQueue).On(t);
	}(i.localStore, t)) : fail(), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(i, s)) : __PRIVATE_logDebug("SyncEngine", "Cannot apply mutation batch with id: " + t);
}
/** Applies a query target change from a different tab. */
async function __PRIVATE_syncEngineApplyPrimaryState(e, t) {
	const n = __PRIVATE_debugCast(e);
	if (__PRIVATE_ensureWatchCallbacks(n), __PRIVATE_syncEngineEnsureWriteCallbacks(n), !0 === t && !0 !== n.Qa) {
		const t = await __PRIVATE_synchronizeQueryViewsAndRaiseSnapshots(n, n.sharedClientState.getAllActiveQueryTargets().toArray());
		n.Qa = !0, await __PRIVATE_remoteStoreApplyPrimaryState(n.remoteStore, !0);
		for (const e of t) __PRIVATE_remoteStoreListen(n.remoteStore, e);
	} else if (!1 === t && !1 !== n.Qa) {
		const e = [];
		let t = Promise.resolve();
		n.Ma.forEach(((r, i) => {
			n.sharedClientState.isLocalQueryTarget(i) ? e.push(i) : t = t.then((() => (__PRIVATE_removeAndCleanupTarget(n, i), __PRIVATE_localStoreReleaseTarget(n.localStore, i, !0)))), __PRIVATE_remoteStoreUnlisten(n.remoteStore, i);
		})), await t, await __PRIVATE_synchronizeQueryViewsAndRaiseSnapshots(n, e), function __PRIVATE_resetLimboDocuments(e) {
			const t = __PRIVATE_debugCast(e);
			t.Na.forEach(((e, n) => {
				__PRIVATE_remoteStoreUnlisten(t.remoteStore, n);
			})), t.La.pr(), t.Na = /* @__PURE__ */ new Map(), t.Oa = new SortedMap(DocumentKey.comparator);
		}(n), n.Qa = !1, await __PRIVATE_remoteStoreApplyPrimaryState(n.remoteStore, !1);
	}
}
async function __PRIVATE_synchronizeQueryViewsAndRaiseSnapshots(e, t, n) {
	const r = __PRIVATE_debugCast(e), i = [], s = [];
	for (const e of t) {
		let t;
		const n = r.Ma.get(e);
		if (n && 0 !== n.length) {
			t = await __PRIVATE_localStoreAllocateTarget(r.localStore, __PRIVATE_queryToTarget(n[0]));
			for (const e of n) {
				const n = await __PRIVATE_synchronizeViewAndComputeSnapshot(r, r.Fa.get(e));
				n.snapshot && s.push(n.snapshot);
			}
		} else {
			const n = await __PRIVATE_localStoreGetCachedTarget(r.localStore, e);
			t = await __PRIVATE_localStoreAllocateTarget(r.localStore, n), await __PRIVATE_initializeViewAndComputeSnapshot(r, __PRIVATE_synthesizeTargetToQuery(n), e, !1, t.resumeToken);
		}
		i.push(t);
	}
	return r.Ca.d_(s), i;
}
/**
* Creates a `Query` object from the specified `Target`. There is no way to
* obtain the original `Query`, so we synthesize a `Query` from the `Target`
* object.
*
* The synthesized result might be different from the original `Query`, but
* since the synthesized `Query` should return the same results as the
* original one (only the presentation of results might differ), the potential
* difference will not cause issues.
*/
function __PRIVATE_synthesizeTargetToQuery(e) {
	return __PRIVATE_newQuery(e.path, e.collectionGroup, e.orderBy, e.filters, e.limit, "F", e.startAt, e.endAt);
}
/** Returns the IDs of the clients that are currently active. */
function __PRIVATE_syncEngineGetActiveClients(e) {
	return function __PRIVATE_localStoreGetActiveClients(e) {
		return __PRIVATE_debugCast(__PRIVATE_debugCast(e).persistence).Qi();
	}(__PRIVATE_debugCast(e).localStore);
}
/** Applies a query target change from a different tab. */
async function __PRIVATE_syncEngineApplyTargetState(e, t, n, r) {
	const i = __PRIVATE_debugCast(e);
	if (i.Qa) return void __PRIVATE_logDebug("SyncEngine", "Ignoring unexpected query state notification.");
	const s = i.Ma.get(t);
	if (s && s.length > 0) switch (n) {
		case "current":
		case "not-current":
			await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(i, await __PRIVATE_localStoreGetNewDocumentChanges(i.localStore, __PRIVATE_queryCollectionGroup(s[0])), RemoteEvent.createSynthesizedRemoteEventForCurrentChange(t, "current" === n, ByteString.EMPTY_BYTE_STRING));
			break;
		case "rejected":
			await __PRIVATE_localStoreReleaseTarget(i.localStore, t, !0), __PRIVATE_removeAndCleanupTarget(i, t, r);
			break;
		default: fail();
	}
}
/** Adds or removes Watch targets for queries from different tabs. */ async function __PRIVATE_syncEngineApplyActiveTargetsChange(e, t, n) {
	const r = __PRIVATE_ensureWatchCallbacks(e);
	if (r.Qa) {
		for (const e of t) {
			if (r.Ma.has(e) && r.sharedClientState.isActiveQueryTarget(e)) {
				__PRIVATE_logDebug("SyncEngine", "Adding an already active target " + e);
				continue;
			}
			const t = await __PRIVATE_localStoreGetCachedTarget(r.localStore, e), n = await __PRIVATE_localStoreAllocateTarget(r.localStore, t);
			await __PRIVATE_initializeViewAndComputeSnapshot(r, __PRIVATE_synthesizeTargetToQuery(t), n.targetId, !1, n.resumeToken), __PRIVATE_remoteStoreListen(r.remoteStore, n);
		}
		for (const e of n) r.Ma.has(e) && await __PRIVATE_localStoreReleaseTarget(r.localStore, e, !1).then((() => {
			__PRIVATE_remoteStoreUnlisten(r.remoteStore, e), __PRIVATE_removeAndCleanupTarget(r, e);
		})).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
	}
}
function __PRIVATE_ensureWatchCallbacks(e) {
	const t = __PRIVATE_debugCast(e);
	return t.remoteStore.remoteSyncer.applyRemoteEvent = __PRIVATE_syncEngineApplyRemoteEvent.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = __PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = __PRIVATE_syncEngineRejectListen.bind(null, t), t.Ca.d_ = __PRIVATE_eventManagerOnWatchChange.bind(null, t.eventManager), t.Ca.$a = __PRIVATE_eventManagerOnWatchError.bind(null, t.eventManager), t;
}
function __PRIVATE_syncEngineEnsureWriteCallbacks(e) {
	const t = __PRIVATE_debugCast(e);
	return t.remoteStore.remoteSyncer.applySuccessfulWrite = __PRIVATE_syncEngineApplySuccessfulWrite.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = __PRIVATE_syncEngineRejectFailedWrite.bind(null, t), t;
}
/**
* Loads a Firestore bundle into the SDK. The returned promise resolves when
* the bundle finished loading.
*
* @param syncEngine - SyncEngine to use.
* @param bundleReader - Bundle to load into the SDK.
* @param task - LoadBundleTask used to update the loading progress to public API.
*/ function __PRIVATE_syncEngineLoadBundle(e, t, n) {
	const r = __PRIVATE_debugCast(e);
	(async function __PRIVATE_loadBundleImpl(e, t, n) {
		try {
			const r = await t.getMetadata();
			if (await function __PRIVATE_localStoreHasNewerBundle(e, t) {
				const n = __PRIVATE_debugCast(e), r = __PRIVATE_fromVersion(t.createTime);
				return n.persistence.runTransaction("hasNewerBundle", "readonly", ((e) => n.Gr.getBundleMetadata(e, t.id))).then(((e) => !!e && e.createTime.compareTo(r) >= 0));
			}(e.localStore, r)) return await t.close(), n._completeWith(function __PRIVATE_bundleSuccessProgress(e) {
				return {
					taskState: "Success",
					documentsLoaded: e.totalDocuments,
					bytesLoaded: e.totalBytes,
					totalDocuments: e.totalDocuments,
					totalBytes: e.totalBytes
				};
			}(r)), Promise.resolve(/* @__PURE__ */ new Set());
			n._updateProgress(__PRIVATE_bundleInitialProgress(r));
			const i = new __PRIVATE_BundleLoader(r, e.localStore, t.serializer);
			let s = await t.Ua();
			for (; s;) {
				const e = await i.la(s);
				e && n._updateProgress(e), s = await t.Ua();
			}
			const o = await i.complete();
			return await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, o.Ia, void 0), await function __PRIVATE_localStoreSaveBundle(e, t) {
				const n = __PRIVATE_debugCast(e);
				return n.persistence.runTransaction("Save bundle", "readwrite", ((e) => n.Gr.saveBundleMetadata(e, t)));
			}(e.localStore, r), n._completeWith(o.progress), Promise.resolve(o.Pa);
		} catch (e) {
			return __PRIVATE_logWarn("SyncEngine", `Loading bundle failed with ${e}`), n._failWith(e), Promise.resolve(/* @__PURE__ */ new Set());
		}
	})(r, t, n).then(((e) => {
		r.sharedClientState.notifyBundleLoaded(e);
	}));
}
var __PRIVATE_MemoryOfflineComponentProvider = class {
	constructor() {
		this.kind = "memory", this.synchronizeTabs = !1;
	}
	async initialize(e) {
		this.serializer = __PRIVATE_newSerializer(e.databaseInfo.databaseId), this.sharedClientState = this.Wa(e), this.persistence = this.Ga(e), await this.persistence.start(), this.localStore = this.za(e), this.gcScheduler = this.ja(e, this.localStore), this.indexBackfillerScheduler = this.Ha(e, this.localStore);
	}
	ja(e, t) {
		return null;
	}
	Ha(e, t) {
		return null;
	}
	za(e) {
		return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
	}
	Ga(e) {
		return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Zr, this.serializer);
	}
	Wa(e) {
		return new __PRIVATE_MemorySharedClientState();
	}
	async terminate() {
		var e, t;
		null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t = this.indexBackfillerScheduler) || void 0 === t || t.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
	}
};
__PRIVATE_MemoryOfflineComponentProvider.provider = { build: () => new __PRIVATE_MemoryOfflineComponentProvider() };
var __PRIVATE_LruGcMemoryOfflineComponentProvider = class extends __PRIVATE_MemoryOfflineComponentProvider {
	constructor(e) {
		super(), this.cacheSizeBytes = e;
	}
	ja(e, t) {
		__PRIVATE_hardAssert(this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate);
		const n = this.persistence.referenceDelegate.garbageCollector;
		return new __PRIVATE_LruScheduler(n, e.asyncQueue, t);
	}
	Ga(e) {
		const t = void 0 !== this.cacheSizeBytes ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
		return new __PRIVATE_MemoryPersistence(((e) => __PRIVATE_MemoryLruDelegate.Zr(e, t)), this.serializer);
	}
};
/**
* Provides all components needed for Firestore with IndexedDB persistence.
*/ var __PRIVATE_IndexedDbOfflineComponentProvider = class extends __PRIVATE_MemoryOfflineComponentProvider {
	constructor(e, t, n) {
		super(), this.Ja = e, this.cacheSizeBytes = t, this.forceOwnership = n, this.kind = "persistent", this.synchronizeTabs = !1;
	}
	async initialize(e) {
		await super.initialize(e), await this.Ja.initialize(this, e), await __PRIVATE_syncEngineEnsureWriteCallbacks(this.Ja.syncEngine), await __PRIVATE_fillWritePipeline(this.Ja.remoteStore), await this.persistence.yi((() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve())));
	}
	za(e) {
		return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
	}
	ja(e, t) {
		const n = this.persistence.referenceDelegate.garbageCollector;
		return new __PRIVATE_LruScheduler(n, e.asyncQueue, t);
	}
	Ha(e, t) {
		const n = new __PRIVATE_IndexBackfiller(t, this.persistence);
		return new __PRIVATE_IndexBackfillerScheduler(e.asyncQueue, n);
	}
	Ga(e) {
		const t = __PRIVATE_indexedDbStoragePrefix(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
		return new __PRIVATE_IndexedDbPersistence(this.synchronizeTabs, t, e.clientId, n, e.asyncQueue, __PRIVATE_getWindow(), getDocument(), this.serializer, this.sharedClientState, !!this.forceOwnership);
	}
	Wa(e) {
		return new __PRIVATE_MemorySharedClientState();
	}
};
/**
* Provides all components needed for Firestore with multi-tab IndexedDB
* persistence.
*
* In the legacy client, this provider is used to provide both multi-tab and
* non-multi-tab persistence since we cannot tell at build time whether
* `synchronizeTabs` will be enabled.
*/ var __PRIVATE_MultiTabOfflineComponentProvider = class extends __PRIVATE_IndexedDbOfflineComponentProvider {
	constructor(e, t) {
		super(e, t, !1), this.Ja = e, this.cacheSizeBytes = t, this.synchronizeTabs = !0;
	}
	async initialize(e) {
		await super.initialize(e);
		const t = this.Ja.syncEngine;
		this.sharedClientState instanceof __PRIVATE_WebStorageSharedClientState && (this.sharedClientState.syncEngine = {
			no: __PRIVATE_syncEngineApplyBatchState.bind(null, t),
			ro: __PRIVATE_syncEngineApplyTargetState.bind(null, t),
			io: __PRIVATE_syncEngineApplyActiveTargetsChange.bind(null, t),
			Qi: __PRIVATE_syncEngineGetActiveClients.bind(null, t),
			eo: __PRIVATE_syncEngineSynchronizeWithChangedDocuments.bind(null, t)
		}, await this.sharedClientState.start()), await this.persistence.yi((async (e) => {
			await __PRIVATE_syncEngineApplyPrimaryState(this.Ja.syncEngine, e), this.gcScheduler && (e && !this.gcScheduler.started ? this.gcScheduler.start() : e || this.gcScheduler.stop()), this.indexBackfillerScheduler && (e && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : e || this.indexBackfillerScheduler.stop());
		}));
	}
	Wa(e) {
		const t = __PRIVATE_getWindow();
		if (!__PRIVATE_WebStorageSharedClientState.D(t)) throw new FirestoreError(D.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
		const n = __PRIVATE_indexedDbStoragePrefix(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey);
		return new __PRIVATE_WebStorageSharedClientState(t, e.asyncQueue, n, e.clientId, e.initialUser);
	}
};
/**
* Initializes and wires the components that are needed to interface with the
* network.
*/ var OnlineComponentProvider = class {
	async initialize(e, t) {
		this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = (e) => __PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine, e, 1), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
	}
	createEventManager(e) {
		return function __PRIVATE_newEventManager() {
			return new __PRIVATE_EventManagerImpl();
		}();
	}
	createDatastore(e) {
		const t = __PRIVATE_newSerializer(e.databaseInfo.databaseId), n = function __PRIVATE_newConnection(e) {
			return new __PRIVATE_WebChannelConnection(e);
		}(e.databaseInfo);
		return function __PRIVATE_newDatastore(e, t, n, r) {
			return new __PRIVATE_DatastoreImpl(e, t, n, r);
		}(e.authCredentials, e.appCheckCredentials, n, t);
	}
	createRemoteStore(e) {
		return function __PRIVATE_newRemoteStore(e, t, n, r, i) {
			return new __PRIVATE_RemoteStoreImpl(e, t, n, r, i);
		}(this.localStore, this.datastore, e.asyncQueue, ((e) => __PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine, e, 0)), function __PRIVATE_newConnectivityMonitor() {
			return __PRIVATE_BrowserConnectivityMonitor.D() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
		}());
	}
	createSyncEngine(e, t) {
		return function __PRIVATE_newSyncEngine(e, t, n, r, i, s, o) {
			const _ = new __PRIVATE_SyncEngineImpl(e, t, n, r, i, s);
			return o && (_.Qa = !0), _;
		}(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
	}
	async terminate() {
		var e, t;
		await async function __PRIVATE_remoteStoreShutdown(e) {
			const t = __PRIVATE_debugCast(e);
			__PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."), t.L_.add(5), await __PRIVATE_disableNetworkInternal(t), t.k_.shutdown(), t.q_.set("Unknown");
		}(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate(), null === (t = this.eventManager) || void 0 === t || t.terminate();
	}
};
OnlineComponentProvider.provider = { build: () => new OnlineComponentProvider() };
/**
* Builds a `ByteStreamReader` from a UInt8Array.
* @param source - The data source to use.
* @param bytesPerRead - How many bytes each `read()` from the returned reader
*        will read.
*/
function __PRIVATE_toByteStreamReaderHelper(e, t = 10240) {
	let n = 0;
	return {
		async read() {
			if (n < e.byteLength) {
				const r = {
					value: e.slice(n, n + t),
					done: !1
				};
				return n += t, r;
			}
			return { done: !0 };
		},
		async cancel() {},
		releaseLock() {},
		closed: Promise.resolve()
	};
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var __PRIVATE_AsyncObserver = class {
	constructor(e) {
		this.observer = e, this.muted = !1;
	}
	next(e) {
		this.muted || this.observer.next && this.Ya(this.observer.next, e);
	}
	error(e) {
		this.muted || (this.observer.error ? this.Ya(this.observer.error, e) : __PRIVATE_logError("Uncaught Error in snapshot listener:", e.toString()));
	}
	Za() {
		this.muted = !0;
	}
	Ya(e, t) {
		setTimeout((() => {
			this.muted || e(t);
		}), 0);
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A class representing a bundle.
*
* Takes a bundle stream or buffer, and presents abstractions to read bundled
* elements out of the underlying content.
*/ var __PRIVATE_BundleReaderImpl = class {
	constructor(e, t) {
		this.Xa = e, this.serializer = t, this.metadata = new __PRIVATE_Deferred(), this.buffer = new Uint8Array(), this.eu = function __PRIVATE_newTextDecoder() {
			return new TextDecoder("utf-8");
		}(), this.tu().then(((e) => {
			e && e.ua() ? this.metadata.resolve(e.aa.metadata) : this.metadata.reject(/* @__PURE__ */ new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null == e ? void 0 : e.aa)}`));
		}), ((e) => this.metadata.reject(e)));
	}
	close() {
		return this.Xa.cancel();
	}
	async getMetadata() {
		return this.metadata.promise;
	}
	async Ua() {
		return await this.getMetadata(), this.tu();
	}
	/**
	* Reads from the head of internal buffer, and pulling more data from
	* underlying stream if a complete element cannot be found, until an
	* element(including the prefixed length and the JSON string) is found.
	*
	* Once a complete element is read, it is dropped from internal buffer.
	*
	* Returns either the bundled element, or null if we have reached the end of
	* the stream.
	*/ async tu() {
		const e = await this.nu();
		if (null === e) return null;
		const t = this.eu.decode(e), n = Number(t);
		isNaN(n) && this.ru(`length string (${t}) is not valid number`);
		const r = await this.iu(n);
		return new __PRIVATE_SizedBundleElement(JSON.parse(r), e.length + n);
	}
	/** First index of '{' from the underlying buffer. */ su() {
		return this.buffer.findIndex(((e) => e === "{".charCodeAt(0)));
	}
	/**
	* Reads from the beginning of the internal buffer, until the first '{', and
	* return the content.
	*
	* If reached end of the stream, returns a null.
	*/ async nu() {
		for (; this.su() < 0;) if (await this.ou()) break;
		if (0 === this.buffer.length) return null;
		const e = this.su();
		e < 0 && this.ru("Reached the end of bundle when a length string is expected.");
		const t = this.buffer.slice(0, e);
		return this.buffer = this.buffer.slice(e), t;
	}
	/**
	* Reads from a specified position from the internal buffer, for a specified
	* number of bytes, pulling more data from the underlying stream if needed.
	*
	* Returns a string decoded from the read bytes.
	*/ async iu(e) {
		for (; this.buffer.length < e;) await this.ou() && this.ru("Reached the end of bundle when more is expected.");
		const t = this.eu.decode(this.buffer.slice(0, e));
		return this.buffer = this.buffer.slice(e), t;
	}
	ru(e) {
		throw this.Xa.cancel(), /* @__PURE__ */ new Error(`Invalid bundle format: ${e}`);
	}
	/**
	* Pulls more data from underlying stream to internal buffer.
	* Returns a boolean indicating whether the stream is finished.
	*/ async ou() {
		const e = await this.Xa.read();
		if (!e.done) {
			const t = new Uint8Array(this.buffer.length + e.value.length);
			t.set(this.buffer), t.set(e.value, this.buffer.length), this.buffer = t;
		}
		return e.done;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Internal transaction object responsible for accumulating the mutations to
* perform and the base versions for any documents read.
*/
var Transaction$2 = class {
	constructor(e) {
		this.datastore = e, this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = !1, this.lastTransactionError = null, this.writtenDocs = /* @__PURE__ */ new Set();
	}
	async lookup(e) {
		if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw this.lastTransactionError = new FirestoreError(D.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes."), this.lastTransactionError;
		const t = await async function __PRIVATE_invokeBatchGetDocumentsRpc(e, t) {
			const n = __PRIVATE_debugCast(e), r = { documents: t.map(((e) => __PRIVATE_toName(n.serializer, e))) }, i = await n.Lo("BatchGetDocuments", n.serializer.databaseId, ResourcePath.emptyPath(), r, t.length), s = /* @__PURE__ */ new Map();
			i.forEach(((e) => {
				const t = __PRIVATE_fromBatchGetDocumentsResponse(n.serializer, e);
				s.set(t.key.toString(), t);
			}));
			const o = [];
			return t.forEach(((e) => {
				const t = s.get(e.toString());
				__PRIVATE_hardAssert(!!t), o.push(t);
			})), o;
		}(this.datastore, e);
		return t.forEach(((e) => this.recordVersion(e))), t;
	}
	set(e, t) {
		this.write(t.toMutation(e, this.precondition(e))), this.writtenDocs.add(e.toString());
	}
	update(e, t) {
		try {
			this.write(t.toMutation(e, this.preconditionForUpdate(e)));
		} catch (e) {
			this.lastTransactionError = e;
		}
		this.writtenDocs.add(e.toString());
	}
	delete(e) {
		this.write(new __PRIVATE_DeleteMutation(e, this.precondition(e))), this.writtenDocs.add(e.toString());
	}
	async commit() {
		if (this.ensureCommitNotCalled(), this.lastTransactionError) throw this.lastTransactionError;
		const e = this.readVersions;
		this.mutations.forEach(((t) => {
			e.delete(t.key.toString());
		})), e.forEach(((e, t) => {
			const n = DocumentKey.fromPath(t);
			this.mutations.push(new __PRIVATE_VerifyMutation(n, this.precondition(n)));
		})), await async function __PRIVATE_invokeCommitRpc(e, t) {
			const n = __PRIVATE_debugCast(e), r = { writes: t.map(((e) => toMutation(n.serializer, e))) };
			await n.Mo("Commit", n.serializer.databaseId, ResourcePath.emptyPath(), r);
		}(this.datastore, this.mutations), this.committed = !0;
	}
	recordVersion(e) {
		let t;
		if (e.isFoundDocument()) t = e.version;
		else {
			if (!e.isNoDocument()) throw fail();
			t = SnapshotVersion.min();
		}
		const n = this.readVersions.get(e.key.toString());
		if (n) {
			if (!t.isEqual(n)) throw new FirestoreError(D.ABORTED, "Document version changed between two reads.");
		} else this.readVersions.set(e.key.toString(), t);
	}
	/**
	* Returns the version of this document when it was read in this transaction,
	* as a precondition, or no precondition if it was not read.
	*/ precondition(e) {
		const t = this.readVersions.get(e.toString());
		return !this.writtenDocs.has(e.toString()) && t ? t.isEqual(SnapshotVersion.min()) ? Precondition.exists(!1) : Precondition.updateTime(t) : Precondition.none();
	}
	/**
	* Returns the precondition for a document if the operation is an update.
	*/ preconditionForUpdate(e) {
		const t = this.readVersions.get(e.toString());
		if (!this.writtenDocs.has(e.toString()) && t) {
			if (t.isEqual(SnapshotVersion.min())) throw new FirestoreError(D.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
			return Precondition.updateTime(t);
		}
		return Precondition.exists(!0);
	}
	write(e) {
		this.ensureCommitNotCalled(), this.mutations.push(e);
	}
	ensureCommitNotCalled() {}
};
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* TransactionRunner encapsulates the logic needed to run and retry transactions
* with backoff.
*/ var __PRIVATE_TransactionRunner = class {
	constructor(e, t, n, r, i) {
		this.asyncQueue = e, this.datastore = t, this.options = n, this.updateFunction = r, this.deferred = i, this._u = n.maxAttempts, this.t_ = new __PRIVATE_ExponentialBackoff(this.asyncQueue, "transaction_retry");
	}
	/** Runs the transaction and sets the result on deferred. */ au() {
		this._u -= 1, this.uu();
	}
	uu() {
		this.t_.Go((async () => {
			const e = new Transaction$2(this.datastore), t = this.cu(e);
			t && t.then(((t) => {
				this.asyncQueue.enqueueAndForget((() => e.commit().then((() => {
					this.deferred.resolve(t);
				})).catch(((e) => {
					this.lu(e);
				}))));
			})).catch(((e) => {
				this.lu(e);
			}));
		}));
	}
	cu(e) {
		try {
			const t = this.updateFunction(e);
			return !__PRIVATE_isNullOrUndefined(t) && t.catch && t.then ? t : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
		} catch (e) {
			return this.deferred.reject(e), null;
		}
	}
	lu(e) {
		this._u > 0 && this.hu(e) ? (this._u -= 1, this.asyncQueue.enqueueAndForget((() => (this.uu(), Promise.resolve())))) : this.deferred.reject(e);
	}
	hu(e) {
		if ("FirebaseError" === e.name) {
			const t = e.code;
			return "aborted" === t || "failed-precondition" === t || "already-exists" === t || !__PRIVATE_isPermanentError(t);
		}
		return !1;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* FirestoreClient is a top-level class that constructs and owns all of the //
* pieces of the client SDK architecture. It is responsible for creating the //
* async queue that is shared by all of the other components in the system. //
*/
var FirestoreClient = class {
	constructor(e, t, n, r, i) {
		this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this.databaseInfo = r, this.user = User.UNAUTHENTICATED, this.clientId = __PRIVATE_AutoId.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = i, this.authCredentials.start(n, (async (e) => {
			__PRIVATE_logDebug("FirestoreClient", "Received user=", e.uid), await this.authCredentialListener(e), this.user = e;
		})), this.appCheckCredentials.start(n, ((e) => (__PRIVATE_logDebug("FirestoreClient", "Received new app check token=", e), this.appCheckCredentialListener(e, this.user))));
	}
	get configuration() {
		return {
			asyncQueue: this.asyncQueue,
			databaseInfo: this.databaseInfo,
			clientId: this.clientId,
			authCredentials: this.authCredentials,
			appCheckCredentials: this.appCheckCredentials,
			initialUser: this.user,
			maxConcurrentLimboResolutions: 100
		};
	}
	setCredentialChangeListener(e) {
		this.authCredentialListener = e;
	}
	setAppCheckTokenChangeListener(e) {
		this.appCheckCredentialListener = e;
	}
	terminate() {
		this.asyncQueue.enterRestrictedMode();
		const e = new __PRIVATE_Deferred();
		return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
			try {
				this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
			} catch (t) {
				const n = __PRIVATE_wrapInUserErrorIfRecoverable(t, "Failed to shutdown persistence");
				e.reject(n);
			}
		})), e.promise;
	}
};
async function __PRIVATE_setOfflineComponentProvider(e, t) {
	e.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug("FirestoreClient", "Initializing OfflineComponentProvider");
	const n = e.configuration;
	await t.initialize(n);
	let r = n.initialUser;
	e.setCredentialChangeListener((async (e) => {
		r.isEqual(e) || (await __PRIVATE_localStoreHandleUserChange(t.localStore, e), r = e);
	})), t.persistence.setDatabaseDeletedListener((() => e.terminate())), e._offlineComponents = t;
}
async function __PRIVATE_setOnlineComponentProvider(e, t) {
	e.asyncQueue.verifyOperationInProgress();
	const n = await __PRIVATE_ensureOfflineComponents(e);
	__PRIVATE_logDebug("FirestoreClient", "Initializing OnlineComponentProvider"), await t.initialize(n, e.configuration), e.setCredentialChangeListener(((e) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, e))), e.setAppCheckTokenChangeListener(((e, n) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, n))), e._onlineComponents = t;
}
/**
* Decides whether the provided error allows us to gracefully disable
* persistence (as opposed to crashing the client).
*/ async function __PRIVATE_ensureOfflineComponents(e) {
	if (!e._offlineComponents) if (e._uninitializedComponentsProvider) {
		__PRIVATE_logDebug("FirestoreClient", "Using user provided OfflineComponentProvider");
		try {
			await __PRIVATE_setOfflineComponentProvider(e, e._uninitializedComponentsProvider._offline);
		} catch (t) {
			const n = t;
			if (!function __PRIVATE_canFallbackFromIndexedDbError(e) {
				return "FirebaseError" === e.name ? e.code === D.FAILED_PRECONDITION || e.code === D.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || 22 === e.code || 20 === e.code || 11 === e.code;
			}(n)) throw n;
			__PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: " + n), await __PRIVATE_setOfflineComponentProvider(e, new __PRIVATE_MemoryOfflineComponentProvider());
		}
	} else __PRIVATE_logDebug("FirestoreClient", "Using default OfflineComponentProvider"), await __PRIVATE_setOfflineComponentProvider(e, new __PRIVATE_MemoryOfflineComponentProvider());
	return e._offlineComponents;
}
async function __PRIVATE_ensureOnlineComponents(e) {
	return e._onlineComponents || (e._uninitializedComponentsProvider ? (__PRIVATE_logDebug("FirestoreClient", "Using user provided OnlineComponentProvider"), await __PRIVATE_setOnlineComponentProvider(e, e._uninitializedComponentsProvider._online)) : (__PRIVATE_logDebug("FirestoreClient", "Using default OnlineComponentProvider"), await __PRIVATE_setOnlineComponentProvider(e, new OnlineComponentProvider()))), e._onlineComponents;
}
function __PRIVATE_getPersistence(e) {
	return __PRIVATE_ensureOfflineComponents(e).then(((e) => e.persistence));
}
function __PRIVATE_getLocalStore(e) {
	return __PRIVATE_ensureOfflineComponents(e).then(((e) => e.localStore));
}
function __PRIVATE_getRemoteStore(e) {
	return __PRIVATE_ensureOnlineComponents(e).then(((e) => e.remoteStore));
}
function __PRIVATE_getSyncEngine(e) {
	return __PRIVATE_ensureOnlineComponents(e).then(((e) => e.syncEngine));
}
function __PRIVATE_getDatastore(e) {
	return __PRIVATE_ensureOnlineComponents(e).then(((e) => e.datastore));
}
async function __PRIVATE_getEventManager(e) {
	const t = await __PRIVATE_ensureOnlineComponents(e), n = t.eventManager;
	return n.onListen = __PRIVATE_syncEngineListen.bind(null, t.syncEngine), n.onUnlisten = __PRIVATE_syncEngineUnlisten.bind(null, t.syncEngine), n.onFirstRemoteStoreListen = __PRIVATE_triggerRemoteStoreListen.bind(null, t.syncEngine), n.onLastRemoteStoreUnlisten = __PRIVATE_triggerRemoteStoreUnlisten.bind(null, t.syncEngine), n;
}
/** Enables the network connection and re-enqueues all pending operations. */ function __PRIVATE_firestoreClientEnableNetwork(e) {
	return e.asyncQueue.enqueue((async () => {
		const t = await __PRIVATE_getPersistence(e), n = await __PRIVATE_getRemoteStore(e);
		return t.setNetworkEnabled(!0), function __PRIVATE_remoteStoreEnableNetwork(e) {
			const t = __PRIVATE_debugCast(e);
			return t.L_.delete(0), __PRIVATE_enableNetworkInternal(t);
		}(n);
	}));
}
/** Disables the network connection. Pending operations will not complete. */ function __PRIVATE_firestoreClientDisableNetwork(e) {
	return e.asyncQueue.enqueue((async () => {
		const t = await __PRIVATE_getPersistence(e), n = await __PRIVATE_getRemoteStore(e);
		return t.setNetworkEnabled(!1), async function __PRIVATE_remoteStoreDisableNetwork(e) {
			const t = __PRIVATE_debugCast(e);
			t.L_.add(0), await __PRIVATE_disableNetworkInternal(t), t.q_.set("Offline");
		}(n);
	}));
}
/**
* Returns a Promise that resolves when all writes that were pending at the time
* this method was called received server acknowledgement. An acknowledgement
* can be either acceptance or rejection.
*/ function __PRIVATE_firestoreClientGetDocumentFromLocalCache(e, t) {
	const n = new __PRIVATE_Deferred();
	return e.asyncQueue.enqueueAndForget((async () => async function __PRIVATE_readDocumentFromCache(e, t, n) {
		try {
			const r = await function __PRIVATE_localStoreReadDocument(e, t) {
				const n = __PRIVATE_debugCast(e);
				return n.persistence.runTransaction("read document", "readonly", ((e) => n.localDocuments.getDocument(e, t)));
			}(e, t);
			r.isFoundDocument() ? n.resolve(r) : r.isNoDocument() ? n.resolve(null) : n.reject(new FirestoreError(D.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
		} catch (e) {
			const r = __PRIVATE_wrapInUserErrorIfRecoverable(e, `Failed to get document '${t} from cache`);
			n.reject(r);
		}
	}(await __PRIVATE_getLocalStore(e), t, n))), n.promise;
}
function __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(e, t, n = {}) {
	const r = new __PRIVATE_Deferred();
	return e.asyncQueue.enqueueAndForget((async () => function __PRIVATE_readDocumentViaSnapshotListener(e, t, n, r, i) {
		const s = new __PRIVATE_AsyncObserver({
			next: (_) => {
				s.Za(), t.enqueueAndForget((() => __PRIVATE_eventManagerUnlisten(e, o)));
				const a = _.docs.has(n);
				!a && _.fromCache ? i.reject(new FirestoreError(D.UNAVAILABLE, "Failed to get document because the client is offline.")) : a && _.fromCache && r && "server" === r.source ? i.reject(new FirestoreError(D.UNAVAILABLE, "Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to \"server\" to retrieve the cached document.)")) : i.resolve(_);
			},
			error: (e) => i.reject(e)
		}), o = new __PRIVATE_QueryListener(__PRIVATE_newQueryForPath(n.path), s, {
			includeMetadataChanges: !0,
			_a: !0
		});
		return __PRIVATE_eventManagerListen(e, o);
	}(await __PRIVATE_getEventManager(e), e.asyncQueue, t, n, r))), r.promise;
}
function __PRIVATE_firestoreClientGetDocumentsFromLocalCache(e, t) {
	const n = new __PRIVATE_Deferred();
	return e.asyncQueue.enqueueAndForget((async () => async function __PRIVATE_executeQueryFromCache(e, t, n) {
		try {
			const r = await __PRIVATE_localStoreExecuteQuery(e, t, !0), i = new __PRIVATE_View(t, r.Ts), s = i.ma(r.documents), o = i.applyChanges(s, !1);
			n.resolve(o.snapshot);
		} catch (e) {
			const r = __PRIVATE_wrapInUserErrorIfRecoverable(e, `Failed to execute query '${t} against cache`);
			n.reject(r);
		}
	}(await __PRIVATE_getLocalStore(e), t, n))), n.promise;
}
function __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(e, t, n = {}) {
	const r = new __PRIVATE_Deferred();
	return e.asyncQueue.enqueueAndForget((async () => function __PRIVATE_executeQueryViaSnapshotListener(e, t, n, r, i) {
		const s = new __PRIVATE_AsyncObserver({
			next: (n) => {
				s.Za(), t.enqueueAndForget((() => __PRIVATE_eventManagerUnlisten(e, o))), n.fromCache && "server" === r.source ? i.reject(new FirestoreError(D.UNAVAILABLE, "Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to \"server\" to retrieve the cached documents.)")) : i.resolve(n);
			},
			error: (e) => i.reject(e)
		}), o = new __PRIVATE_QueryListener(n, s, {
			includeMetadataChanges: !0,
			_a: !0
		});
		return __PRIVATE_eventManagerListen(e, o);
	}(await __PRIVATE_getEventManager(e), e.asyncQueue, t, n, r))), r.promise;
}
function __PRIVATE_firestoreClientRunAggregateQuery(e, t, n) {
	const r = new __PRIVATE_Deferred();
	return e.asyncQueue.enqueueAndForget((async () => {
		try {
			const i = await __PRIVATE_getDatastore(e);
			r.resolve(async function __PRIVATE_invokeRunAggregationQueryRpc(e, t, n) {
				var r;
				const i = __PRIVATE_debugCast(e), { request: s, ut: o, parent: _ } = __PRIVATE_toRunAggregationQueryRequest(i.serializer, __PRIVATE_queryToAggregateTarget(t), n);
				i.connection.Fo || delete s.parent;
				const a = (await i.Lo("RunAggregationQuery", i.serializer.databaseId, _, s, 1)).filter(((e) => !!e.result));
				__PRIVATE_hardAssert(1 === a.length);
				const u = null === (r = a[0].result) || void 0 === r ? void 0 : r.aggregateFields;
				return Object.keys(u).reduce(((e, t) => (e[o[t]] = u[t], e)), {});
			}(i, t, n));
		} catch (e) {
			r.reject(e);
		}
	})), r.promise;
}
function __PRIVATE_firestoreClientAddSnapshotsInSyncListener(e, t) {
	const n = new __PRIVATE_AsyncObserver(t);
	return e.asyncQueue.enqueueAndForget((async () => function __PRIVATE_addSnapshotsInSyncListener(e, t) {
		__PRIVATE_debugCast(e).Y_.add(t), t.next();
	}(await __PRIVATE_getEventManager(e), n))), () => {
		n.Za(), e.asyncQueue.enqueueAndForget((async () => function __PRIVATE_removeSnapshotsInSyncListener(e, t) {
			__PRIVATE_debugCast(e).Y_.delete(t);
		}(await __PRIVATE_getEventManager(e), n)));
	};
}
/**
* Takes an updateFunction in which a set of reads and writes can be performed
* atomically. In the updateFunction, the client can read and write values
* using the supplied transaction object. After the updateFunction, all
* changes will be committed. If a retryable error occurs (ex: some other
* client has changed any of the data referenced), then the updateFunction
* will be called again after a backoff. If the updateFunction still fails
* after all retries, then the transaction will be rejected.
*
* The transaction object passed to the updateFunction contains methods for
* accessing documents and collections. Unlike other datastore access, data
* accessed with the transaction will not reflect local changes that have not
* been committed. For this reason, it is required that all reads are
* performed before any writes. Transactions must be performed while online.
*/ function __PRIVATE_firestoreClientLoadBundle(e, t, n, r) {
	const i = function __PRIVATE_createBundleReader(e, t) {
		let n;
		n = "string" == typeof e ? __PRIVATE_newTextEncoder().encode(e) : e;
		return function __PRIVATE_newBundleReader(e, t) {
			return new __PRIVATE_BundleReaderImpl(e, t);
		}(function __PRIVATE_toByteStreamReader(e, t) {
			if (e instanceof Uint8Array) return __PRIVATE_toByteStreamReaderHelper(e, t);
			if (e instanceof ArrayBuffer) return __PRIVATE_toByteStreamReaderHelper(new Uint8Array(e), t);
			if (e instanceof ReadableStream) return e.getReader();
			throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
		}(n), t);
	}(n, __PRIVATE_newSerializer(t));
	e.asyncQueue.enqueueAndForget((async () => {
		__PRIVATE_syncEngineLoadBundle(await __PRIVATE_getSyncEngine(e), i, r);
	}));
}
function __PRIVATE_firestoreClientGetNamedQuery(e, t) {
	return e.asyncQueue.enqueue((async () => function __PRIVATE_localStoreGetNamedQuery(e, t) {
		const n = __PRIVATE_debugCast(e);
		return n.persistence.runTransaction("Get named query", "readonly", ((e) => n.Gr.getNamedQuery(e, t)));
	}(await __PRIVATE_getLocalStore(e), t)));
}
function __PRIVATE_firestoreClientSetIndexConfiguration(e, t) {
	return e.asyncQueue.enqueue((async () => async function __PRIVATE_localStoreConfigureFieldIndexes(e, t) {
		const n = __PRIVATE_debugCast(e), r = n.indexManager, i = [];
		return n.persistence.runTransaction("Configure indexes", "readwrite", ((e) => r.getFieldIndexes(e).next(((n) => function __PRIVATE_diffArrays(e, t, n, r, i) {
			e = [...e], t = [...t], e.sort(n), t.sort(n);
			const s = e.length, o = t.length;
			let _ = 0, a = 0;
			for (; _ < o && a < s;) {
				const s = n(e[a], t[_]);
				s < 0 ? i(e[a++]) : s > 0 ? r(t[_++]) : (_++, a++);
			}
			for (; _ < o;) r(t[_++]);
			for (; a < s;) i(e[a++]);
		}(n, t, __PRIVATE_fieldIndexSemanticComparator, ((t) => {
			i.push(r.addFieldIndex(e, t));
		}), ((t) => {
			i.push(r.deleteFieldIndex(e, t));
		})))).next((() => PersistencePromise.waitFor(i)))));
	}(await __PRIVATE_getLocalStore(e), t)));
}
function __PRIVATE_firestoreClientSetPersistentCacheIndexAutoCreationEnabled(e, t) {
	return e.asyncQueue.enqueue((async () => function __PRIVATE_localStoreSetIndexAutoCreationEnabled(e, t) {
		__PRIVATE_debugCast(e).ss.zi = t;
	}(await __PRIVATE_getLocalStore(e), t)));
}
function __PRIVATE_firestoreClientDeleteAllFieldIndexes(e) {
	return e.asyncQueue.enqueue((async () => function __PRIVATE_localStoreDeleteAllFieldIndexes(e) {
		const t = __PRIVATE_debugCast(e), n = t.indexManager;
		return t.persistence.runTransaction("Delete All Indexes", "readwrite", ((e) => n.deleteAllFieldIndexes(e)));
	}(await __PRIVATE_getLocalStore(e))));
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Compares two `ExperimentalLongPollingOptions` objects for equality.
*/
/**
* Creates and returns a new `ExperimentalLongPollingOptions` with the same
* option values as the given instance.
*/
function __PRIVATE_cloneLongPollingOptions(e) {
	const t = {};
	return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var we = /* @__PURE__ */ new Map();
/**
* An instance map that ensures only one Datastore exists per Firestore
* instance.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function __PRIVATE_validateNonEmptyArgument(e, t, n) {
	if (!n) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
/**
* Validates that two boolean options are not set at the same time.
* @internal
*/ function __PRIVATE_validateIsNotUsedTogether(e, t, n, r) {
	if (!0 === t && !0 === r) throw new FirestoreError(D.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
/**
* Validates that `path` refers to a document (indicated by the fact it contains
* an even numbers of segments).
*/ function __PRIVATE_validateDocumentPath(e) {
	if (!DocumentKey.isDocumentKey(e)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
}
/**
* Validates that `path` refers to a collection (indicated by the fact it
* contains an odd numbers of segments).
*/ function __PRIVATE_validateCollectionPath(e) {
	if (DocumentKey.isDocumentKey(e)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
/**
* Returns true if it's a non-null object without a custom prototype
* (i.e. excludes Array, Date, etc.).
*/
/** Returns a string describing the type / value of the provided input. */
function __PRIVATE_valueDescription(e) {
	if (void 0 === e) return "undefined";
	if (null === e) return "null";
	if ("string" == typeof e) return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
	if ("number" == typeof e || "boolean" == typeof e) return "" + e;
	if ("object" == typeof e) {
		if (e instanceof Array) return "an array";
		{
			const t = function __PRIVATE_tryGetCustomObjectType(e) {
				if (e.constructor) return e.constructor.name;
				return null;
			}(e);
			return t ? `a custom ${t} object` : "an object";
		}
	}
	return "function" == typeof e ? "a function" : fail();
}
function __PRIVATE_cast(e, t) {
	if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
		if (t.name === e.constructor.name) throw new FirestoreError(D.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
		{
			const n = __PRIVATE_valueDescription(e);
			throw new FirestoreError(D.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
		}
	}
	return e;
}
function __PRIVATE_validatePositiveNumber(e, t) {
	if (t <= 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${e}() requires a positive number, but it was: ${t}.`);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A concrete type describing all the values that can be applied via a
* user-supplied `FirestoreSettings` object. This is a separate type so that
* defaults can be supplied and the value can be checked for equality.
*/
var FirestoreSettingsImpl = class {
	constructor(e) {
		var t, n;
		if (void 0 === e.host) {
			if (void 0 !== e.ssl) throw new FirestoreError(D.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
			this.host = "firestore.googleapis.com", this.ssl = true;
		} else this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t;
		if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes) this.cacheSizeBytes = 41943040;
		else {
			if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
			this.cacheSizeBytes = e.cacheSizeBytes;
		}
		__PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (n = e.experimentalLongPollingOptions) && void 0 !== n ? n : {}), function __PRIVATE_validateLongPollingOptions(e) {
			if (void 0 !== e.timeoutSeconds) {
				if (isNaN(e.timeoutSeconds)) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);
				if (e.timeoutSeconds < 5) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);
				if (e.timeoutSeconds > 30) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`);
			}
		}(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
	}
	isEqual(e) {
		return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function __PRIVATE_longPollingOptionsEqual(e, t) {
			return e.timeoutSeconds === t.timeoutSeconds;
		}(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
	}
};
var Firestore$1 = class {
	/** @hideconstructor */
	constructor(e, t, n, r) {
		this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = !1, this._terminateTask = "notTerminated";
	}
	/**
	* The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
	* instance.
	*/ get app() {
		if (!this._app) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
		return this._app;
	}
	get _initialized() {
		return this._settingsFrozen;
	}
	get _terminated() {
		return "notTerminated" !== this._terminateTask;
	}
	_setSettings(e) {
		if (this._settingsFrozen) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
		this._settings = new FirestoreSettingsImpl(e), void 0 !== e.credentials && (this._authCredentials = function __PRIVATE_makeAuthCredentialsProvider(e) {
			if (!e) return new __PRIVATE_EmptyAuthCredentialsProvider();
			switch (e.type) {
				case "firstParty": return new __PRIVATE_FirstPartyAuthCredentialsProvider(e.sessionIndex || "0", e.iamToken || null, e.authTokenFactory || null);
				case "provider": return e.client;
				default: throw new FirestoreError(D.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
			}
		}(e.credentials));
	}
	_getSettings() {
		return this._settings;
	}
	_freezeSettings() {
		return this._settingsFrozen = !0, this._settings;
	}
	_delete() {
		return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask;
	}
	async _restart() {
		"notTerminated" === this._terminateTask ? await this._terminate() : this._terminateTask = "notTerminated";
	}
	/** Returns a JSON-serializable representation of this `Firestore` instance. */ toJSON() {
		return {
			app: this._app,
			databaseId: this._databaseId,
			settings: this._settings
		};
	}
	/**
	* Terminates all components used by this client. Subclasses can override
	* this method to clean up their own dependencies, but must also call this
	* method.
	*
	* Only ever called once.
	*/ _terminate() {
		/**
		* Removes all components associated with the provided instance. Must be called
		* when the `Firestore` instance is terminated.
		*/
		return function __PRIVATE_removeComponents(e) {
			const t = we.get(e);
			t && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), we.delete(e), t.terminate());
		}(this), Promise.resolve();
	}
};
/**
* Modify this instance to communicate with the Cloud Firestore emulator.
*
* Note: This must be called before this instance has been used to do any
* operations.
*
* @param firestore - The `Firestore` instance to configure to connect to the
* emulator.
* @param host - the emulator host (ex: localhost).
* @param port - the emulator port (ex: 9000).
* @param options.mockUserToken - the mock auth token to use for unit testing
* Security Rules.
*/ function connectFirestoreEmulator(e, t, n, r = {}) {
	var i;
	const s = (e = __PRIVATE_cast(e, Firestore$1))._getSettings(), o = `${t}:${n}`;
	if ("firestore.googleapis.com" !== s.host && s.host !== o && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, s), {
		host: o,
		ssl: !1
	})), r.mockUserToken) {
		let t, n;
		if ("string" == typeof r.mockUserToken) t = r.mockUserToken, n = User.MOCK_USER;
		else {
			t = createMockUserToken(r.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
			const s = r.mockUserToken.sub || r.mockUserToken.user_id;
			if (!s) throw new FirestoreError(D.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
			n = new User(s);
		}
		e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t, n));
	}
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `Query` refers to a query which you can read or listen to. You can also
* construct refined `Query` objects by adding filters and ordering.
*/ var Query = class Query {
	/** @hideconstructor protected */
	constructor(e, t, n) {
		this.converter = t, this._query = n, this.type = "query", this.firestore = e;
	}
	withConverter(e) {
		return new Query(this.firestore, e, this._query);
	}
};
/**
* A `DocumentReference` refers to a document location in a Firestore database
* and can be used to write, read, or listen to the location. The document at
* the referenced location may or may not exist.
*/ var DocumentReference = class DocumentReference {
	/** @hideconstructor */
	constructor(e, t, n) {
		this.converter = t, this._key = n, this.type = "document", this.firestore = e;
	}
	get _path() {
		return this._key.path;
	}
	/**
	* The document's identifier within its collection.
	*/ get id() {
		return this._key.path.lastSegment();
	}
	/**
	* A string representing the path of the referenced document (relative
	* to the root of the database).
	*/ get path() {
		return this._key.path.canonicalString();
	}
	/**
	* The collection this `DocumentReference` belongs to.
	*/ get parent() {
		return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
	}
	withConverter(e) {
		return new DocumentReference(this.firestore, e, this._key);
	}
};
/**
* A `CollectionReference` object can be used for adding documents, getting
* document references, and querying for documents (using {@link (query:1)}).
*/ var CollectionReference = class CollectionReference extends Query {
	/** @hideconstructor */
	constructor(e, t, n) {
		super(e, t, __PRIVATE_newQueryForPath(n)), this._path = n, this.type = "collection";
	}
	/** The collection's identifier. */ get id() {
		return this._query.path.lastSegment();
	}
	/**
	* A string representing the path of the referenced collection (relative
	* to the root of the database).
	*/ get path() {
		return this._query.path.canonicalString();
	}
	/**
	* A reference to the containing `DocumentReference` if this is a
	* subcollection. If this isn't a subcollection, the reference is null.
	*/ get parent() {
		const e = this._path.popLast();
		return e.isEmpty() ? null : new DocumentReference(this.firestore, null, new DocumentKey(e));
	}
	withConverter(e) {
		return new CollectionReference(this.firestore, e, this._path);
	}
};
function collection(e, t, ...n) {
	if (e = getModularInstance(e), __PRIVATE_validateNonEmptyArgument("collection", "path", t), e instanceof Firestore$1) {
		const r = ResourcePath.fromString(t, ...n);
		return __PRIVATE_validateCollectionPath(r), new CollectionReference(e, null, r);
	}
	{
		if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
		const r = e._path.child(ResourcePath.fromString(t, ...n));
		return __PRIVATE_validateCollectionPath(r), new CollectionReference(e.firestore, null, r);
	}
}
/**
* Creates and returns a new `Query` instance that includes all documents in the
* database that are contained in a collection or subcollection with the
* given `collectionId`.
*
* @param firestore - A reference to the root `Firestore` instance.
* @param collectionId - Identifies the collections to query over. Every
* collection or subcollection with this ID as the last segment of its path
* will be included. Cannot contain a slash.
* @returns The created `Query`.
*/ function collectionGroup(e, t) {
	if (e = __PRIVATE_cast(e, Firestore$1), __PRIVATE_validateNonEmptyArgument("collectionGroup", "collection id", t), t.indexOf("/") >= 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
	return new Query(e, null, function __PRIVATE_newQueryForCollectionGroup(e) {
		return new __PRIVATE_QueryImpl(ResourcePath.emptyPath(), e);
	}(t));
}
function doc(e, t, ...n) {
	if (e = getModularInstance(e), 1 === arguments.length && (t = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", t), e instanceof Firestore$1) {
		const r = ResourcePath.fromString(t, ...n);
		return __PRIVATE_validateDocumentPath(r), new DocumentReference(e, null, new DocumentKey(r));
	}
	{
		if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
		const r = e._path.child(ResourcePath.fromString(t, ...n));
		return __PRIVATE_validateDocumentPath(r), new DocumentReference(e.firestore, e instanceof CollectionReference ? e.converter : null, new DocumentKey(r));
	}
}
/**
* Returns true if the provided references are equal.
*
* @param left - A reference to compare.
* @param right - A reference to compare.
* @returns true if the references point to the same location in the same
* Firestore database.
*/ function refEqual(e, t) {
	return e = getModularInstance(e), t = getModularInstance(t), (e instanceof DocumentReference || e instanceof CollectionReference) && (t instanceof DocumentReference || t instanceof CollectionReference) && e.firestore === t.firestore && e.path === t.path && e.converter === t.converter;
}
/**
* Returns true if the provided queries point to the same collection and apply
* the same constraints.
*
* @param left - A `Query` to compare.
* @param right - A `Query` to compare.
* @returns true if the references point to the same location in the same
* Firestore database.
*/ function queryEqual(e, t) {
	return e = getModularInstance(e), t = getModularInstance(t), e instanceof Query && t instanceof Query && e.firestore === t.firestore && __PRIVATE_queryEquals(e._query, t._query) && e.converter === t.converter;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var __PRIVATE_AsyncQueueImpl = class {
	constructor(e = Promise.resolve()) {
		this.Pu = [], this.Iu = !1, this.Tu = [], this.Eu = null, this.du = !1, this.Au = !1, this.Ru = [], this.t_ = new __PRIVATE_ExponentialBackoff(this, "async_queue_retry"), this.Vu = () => {
			const e = getDocument();
			e && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + e.visibilityState), this.t_.jo();
		}, this.mu = e;
		const t = getDocument();
		t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Vu);
	}
	get isShuttingDown() {
		return this.Iu;
	}
	/**
	* Adds a new operation to the queue without waiting for it to complete (i.e.
	* we ignore the Promise result).
	*/ enqueueAndForget(e) {
		this.enqueue(e);
	}
	enqueueAndForgetEvenWhileRestricted(e) {
		this.fu(), this.gu(e);
	}
	enterRestrictedMode(e) {
		if (!this.Iu) {
			this.Iu = !0, this.Au = e || !1;
			const t = getDocument();
			t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Vu);
		}
	}
	enqueue(e) {
		if (this.fu(), this.Iu) return new Promise((() => {}));
		const t = new __PRIVATE_Deferred();
		return this.gu((() => this.Iu && this.Au ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise))).then((() => t.promise));
	}
	enqueueRetryable(e) {
		this.enqueueAndForget((() => (this.Pu.push(e), this.pu())));
	}
	/**
	* Runs the next operation from the retryable queue. If the operation fails,
	* reschedules with backoff.
	*/ async pu() {
		if (0 !== this.Pu.length) {
			try {
				await this.Pu[0](), this.Pu.shift(), this.t_.reset();
			} catch (e) {
				if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
				__PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + e);
			}
			this.Pu.length > 0 && this.t_.Go((() => this.pu()));
		}
	}
	gu(e) {
		const t = this.mu.then((() => (this.du = !0, e().catch(((e) => {
			this.Eu = e, this.du = !1;
			throw __PRIVATE_logError(
				"INTERNAL UNHANDLED ERROR: ",
				/**
				* Chrome includes Error.message in Error.stack. Other browsers do not.
				* This returns expected output of message + stack when available.
				* @param error - Error or FirestoreError
				*/
				function __PRIVATE_getMessageOrStack(e) {
					let t = e.message || "";
					e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack);
					return t;
				}(e)
			), e;
		})).then(((e) => (this.du = !1, e))))));
		return this.mu = t, t;
	}
	enqueueAfterDelay(e, t, n) {
		this.fu(), this.Ru.indexOf(e) > -1 && (t = 0);
		const r = DelayedOperation.createAndSchedule(this, e, t, n, ((e) => this.yu(e)));
		return this.Tu.push(r), r;
	}
	fu() {
		this.Eu && fail();
	}
	verifyOperationInProgress() {}
	/**
	* Waits until all currently queued tasks are finished executing. Delayed
	* operations are not run.
	*/ async wu() {
		let e;
		do
			e = this.mu, await e;
		while (e !== this.mu);
	}
	/**
	* For Tests: Determine if a delayed operation with a particular TimerId
	* exists.
	*/ Su(e) {
		for (const t of this.Tu) if (t.timerId === e) return !0;
		return !1;
	}
	/**
	* For Tests: Runs some or all delayed operations early.
	*
	* @param lastTimerId - Delayed operations up to and including this TimerId
	* will be drained. Pass TimerId.All to run all delayed operations.
	* @returns a Promise that resolves once all operations have been run.
	*/ bu(e) {
		return this.wu().then((() => {
			this.Tu.sort(((e, t) => e.targetTimeMs - t.targetTimeMs));
			for (const t of this.Tu) if (t.skipDelay(), "all" !== e && t.timerId === e) break;
			return this.wu();
		}));
	}
	/**
	* For Tests: Skip all subsequent delays for a timer id.
	*/ Du(e) {
		this.Ru.push(e);
	}
	/** Called once a DelayedOperation is run or canceled. */ yu(e) {
		const t = this.Tu.indexOf(e);
		this.Tu.splice(t, 1);
	}
};
function __PRIVATE_isPartialObserver(e) {
	/**
	* Returns true if obj is an object and contains at least one of the specified
	* methods.
	*/
	return function __PRIVATE_implementsAnyMethods(e, t) {
		if ("object" != typeof e || null === e) return !1;
		const n = e;
		for (const e of t) if (e in n && "function" == typeof n[e]) return !0;
		return !1;
	}(e, [
		"next",
		"error",
		"complete"
	]);
}
var LoadBundleTask = class {
	constructor() {
		this._progressObserver = {}, this._taskCompletionResolver = new __PRIVATE_Deferred(), this._lastProgress = {
			taskState: "Running",
			totalBytes: 0,
			totalDocuments: 0,
			bytesLoaded: 0,
			documentsLoaded: 0
		};
	}
	/**
	* Registers functions to listen to bundle loading progress events.
	* @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
	*   each time a Firestore document is loaded from the bundle.
	* @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
	*   error, and there should be no more updates after this.
	* @param complete - Called when the loading task is complete.
	*/ onProgress(e, t, n) {
		this._progressObserver = {
			next: e,
			error: t,
			complete: n
		};
	}
	/**
	* Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
	*
	* @param onRejected - Called when an error occurs during bundle loading.
	*/ catch(e) {
		return this._taskCompletionResolver.promise.catch(e);
	}
	/**
	* Implements the `Promise<LoadBundleTaskProgress>.then` interface.
	*
	* @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
	*   The update will always have its `taskState` set to `"Success"`.
	* @param onRejected - Called when an error occurs during bundle loading.
	*/ then(e, t) {
		return this._taskCompletionResolver.promise.then(e, t);
	}
	/**
	* Notifies all observers that bundle loading has completed, with a provided
	* `LoadBundleTaskProgress` object.
	*
	* @private
	*/ _completeWith(e) {
		this._updateProgress(e), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(e);
	}
	/**
	* Notifies all observers that bundle loading has failed, with a provided
	* `Error` as the reason.
	*
	* @private
	*/ _failWith(e) {
		this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(e), this._taskCompletionResolver.reject(e);
	}
	/**
	* Notifies a progress update of loading a bundle.
	* @param progress - The new progress.
	*
	* @private
	*/ _updateProgress(e) {
		this._lastProgress = e, this._progressObserver.next && this._progressObserver.next(e);
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Constant used to indicate the LRU garbage collection should be disabled.
* Set this value as the `cacheSizeBytes` on the settings passed to the
* {@link Firestore} instance.
*/ var Se = -1;
/**
* The Cloud Firestore service interface.
*
* Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
*/ var Firestore = class extends Firestore$1 {
	/** @hideconstructor */
	constructor(e, t, n, r) {
		super(e, t, n, r), this.type = "firestore", this._queue = new __PRIVATE_AsyncQueueImpl(), this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]";
	}
	async _terminate() {
		if (this._firestoreClient) {
			const e = this._firestoreClient.terminate();
			this._queue = new __PRIVATE_AsyncQueueImpl(e), this._firestoreClient = void 0, await e;
		}
	}
};
/**
* Initializes a new instance of {@link Firestore} with the provided settings.
* Can only be called before any other function, including
* {@link (getFirestore:1)}. If the custom settings are empty, this function is
* equivalent to calling {@link (getFirestore:1)}.
*
* @param app - The {@link @firebase/app#FirebaseApp} with which the {@link Firestore} instance will
* be associated.
* @param settings - A settings object to configure the {@link Firestore} instance.
* @param databaseId - The name of the database.
* @returns A newly initialized {@link Firestore} instance.
*/ function initializeFirestore(e, t, n) {
	n || (n = "(default)");
	const r = _getProvider(e, "firestore");
	if (r.isInitialized(n)) {
		const e = r.getImmediate({ identifier: n });
		if (deepEqual(r.getOptions(n), t)) return e;
		throw new FirestoreError(D.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
	}
	if (void 0 !== t.cacheSizeBytes && void 0 !== t.localCache) throw new FirestoreError(D.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");
	if (void 0 !== t.cacheSizeBytes && -1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
	return r.initialize({
		options: t,
		instanceIdentifier: n
	});
}
function getFirestore(t, n) {
	const r = "object" == typeof t ? t : getApp(), i = "string" == typeof t ? t : n || "(default)", s = _getProvider(r, "firestore").getImmediate({ identifier: i });
	if (!s._initialized) {
		const e = getDefaultEmulatorHostnameAndPort("firestore");
		e && connectFirestoreEmulator(s, ...e);
	}
	return s;
}
/**
* @internal
*/ function ensureFirestoreConfigured(e) {
	if (e._terminated) throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
	return e._firestoreClient || __PRIVATE_configureFirestore(e), e._firestoreClient;
}
function __PRIVATE_configureFirestore(e) {
	var t, n, r;
	const i = e._freezeSettings(), s = function __PRIVATE_makeDatabaseInfo(e, t, n, r) {
		return new DatabaseInfo(e, t, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(r.experimentalLongPollingOptions), r.useFetchStreams);
	}(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, i);
	e._componentsProvider || !(null === (n = i.localCache) || void 0 === n) && n._offlineComponentProvider && !(null === (r = i.localCache) || void 0 === r) && r._onlineComponentProvider && (e._componentsProvider = {
		_offline: i.localCache._offlineComponentProvider,
		_online: i.localCache._onlineComponentProvider
	}), e._firestoreClient = new FirestoreClient(e._authCredentials, e._appCheckCredentials, e._queue, s, e._componentsProvider && function __PRIVATE_buildComponentProvider(e) {
		const t = null == e ? void 0 : e._online.build();
		return {
			_offline: null == e ? void 0 : e._offline.build(t),
			_online: t
		};
	}(e._componentsProvider));
}
function enableIndexedDbPersistence(e, t) {
	__PRIVATE_logWarn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
	const n = e._freezeSettings();
	return __PRIVATE_setPersistenceProviders(e, OnlineComponentProvider.provider, { build: (e) => new __PRIVATE_IndexedDbOfflineComponentProvider(e, n.cacheSizeBytes, null == t ? void 0 : t.forceOwnership) }), Promise.resolve();
}
/**
* Attempts to enable multi-tab persistent storage, if possible. If enabled
* across all tabs, all operations share access to local persistence, including
* shared execution of queries and latency-compensated local document updates
* across all connected instances.
*
* On failure, `enableMultiTabIndexedDbPersistence()` will reject the promise or
* throw an exception. There are several reasons why this can fail, which can be
* identified by the `code` on the error.
*
*   * failed-precondition: The app is already open in another browser tab and
*     multi-tab is not enabled.
*   * unimplemented: The browser is incompatible with the offline persistence
*     implementation.
*
* Note that even after a failure, the {@link Firestore} instance will remain
* usable, however offline persistence will be disabled.
*
* @param firestore - The {@link Firestore} instance to enable persistence for.
* @returns A `Promise` that represents successfully enabling persistent
* storage.
* @deprecated This function will be removed in a future major release. Instead, set
* `FirestoreSettings.localCache` to an instance of `PersistentLocalCache` to
* turn on indexeddb cache. Calling this function when `FirestoreSettings.localCache`
* is already specified will throw an exception.
*/ async function enableMultiTabIndexedDbPersistence(e) {
	__PRIVATE_logWarn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
	const t = e._freezeSettings();
	__PRIVATE_setPersistenceProviders(e, OnlineComponentProvider.provider, { build: (e) => new __PRIVATE_MultiTabOfflineComponentProvider(e, t.cacheSizeBytes) });
}
/**
* Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
* If the operation fails with a recoverable error (see
* `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
* but the client remains usable.
*/ function __PRIVATE_setPersistenceProviders(e, t, n) {
	if ((e = __PRIVATE_cast(e, Firestore))._firestoreClient || e._terminated) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
	if (e._componentsProvider || e._getSettings().localCache) throw new FirestoreError(D.FAILED_PRECONDITION, "SDK cache is already specified.");
	e._componentsProvider = {
		_online: t,
		_offline: n
	}, __PRIVATE_configureFirestore(e);
}
/**
* Clears the persistent storage. This includes pending writes and cached
* documents.
*
* Must be called while the {@link Firestore} instance is not started (after the app is
* terminated or when the app is first initialized). On startup, this function
* must be called before other functions (other than {@link
* initializeFirestore} or {@link (getFirestore:1)})). If the {@link Firestore}
* instance is still running, the promise will be rejected with the error code
* of `failed-precondition`.
*
* Note: `clearIndexedDbPersistence()` is primarily intended to help write
* reliable tests that use Cloud Firestore. It uses an efficient mechanism for
* dropping existing data but does not attempt to securely overwrite or
* otherwise make cached data unrecoverable. For applications that are sensitive
* to the disclosure of cached data in between user sessions, we strongly
* recommend not enabling persistence at all.
*
* @param firestore - The {@link Firestore} instance to clear persistence for.
* @returns A `Promise` that is resolved when the persistent storage is
* cleared. Otherwise, the promise is rejected with an error.
*/ function clearIndexedDbPersistence(e) {
	if (e._initialized && !e._terminated) throw new FirestoreError(D.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
	const t = new __PRIVATE_Deferred();
	return e._queue.enqueueAndForgetEvenWhileRestricted((async () => {
		try {
			await async function __PRIVATE_indexedDbClearPersistence(e) {
				if (!__PRIVATE_SimpleDb.D()) return Promise.resolve();
				const t = e + "main";
				await __PRIVATE_SimpleDb.delete(t);
			}(__PRIVATE_indexedDbStoragePrefix(e._databaseId, e._persistenceKey)), t.resolve();
		} catch (e) {
			t.reject(e);
		}
	})), t.promise;
}
/**
* Waits until all currently pending writes for the active user have been
* acknowledged by the backend.
*
* The returned promise resolves immediately if there are no outstanding writes.
* Otherwise, the promise waits for all previously issued writes (including
* those written in a previous app session), but it does not wait for writes
* that were added after the function is called. If you want to wait for
* additional writes, call `waitForPendingWrites()` again.
*
* Any outstanding `waitForPendingWrites()` promises are rejected during user
* changes.
*
* @returns A `Promise` which resolves when all currently pending writes have been
* acknowledged by the backend.
*/ function waitForPendingWrites(e) {
	return function __PRIVATE_firestoreClientWaitForPendingWrites(e) {
		const t = new __PRIVATE_Deferred();
		return e.asyncQueue.enqueueAndForget((async () => __PRIVATE_syncEngineRegisterPendingWritesCallback(await __PRIVATE_getSyncEngine(e), t))), t.promise;
	}(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)));
}
/**
* Re-enables use of the network for this {@link Firestore} instance after a prior
* call to {@link disableNetwork}.
*
* @returns A `Promise` that is resolved once the network has been enabled.
*/ function enableNetwork(e) {
	return __PRIVATE_firestoreClientEnableNetwork(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)));
}
/**
* Disables network usage for this instance. It can be re-enabled via {@link
* enableNetwork}. While the network is disabled, any snapshot listeners,
* `getDoc()` or `getDocs()` calls will return results from cache, and any write
* operations will be queued until the network is restored.
*
* @returns A `Promise` that is resolved once the network has been disabled.
*/ function disableNetwork(e) {
	return __PRIVATE_firestoreClientDisableNetwork(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)));
}
/**
* Terminates the provided {@link Firestore} instance.
*
* After calling `terminate()` only the `clearIndexedDbPersistence()` function
* may be used. Any other function will throw a `FirestoreError`.
*
* To restart after termination, create a new instance of FirebaseFirestore with
* {@link (getFirestore:1)}.
*
* Termination does not cancel any pending writes, and any promises that are
* awaiting a response from the server will not be resolved. If you have
* persistence enabled, the next time you start this instance, it will resume
* sending these writes to the server.
*
* Note: Under normal circumstances, calling `terminate()` is not required. This
* function is useful only when you want to force this instance to release all
* of its resources or in combination with `clearIndexedDbPersistence()` to
* ensure that all local state is destroyed between test runs.
*
* @returns A `Promise` that is resolved when the instance has been successfully
* terminated.
*/ function terminate(e) {
	return _removeServiceInstance(e.app, "firestore", e._databaseId.database), e._delete();
}
/**
* Loads a Firestore bundle into the local cache.
*
* @param firestore - The {@link Firestore} instance to load bundles for.
* @param bundleData - An object representing the bundle to be loaded. Valid
* objects are `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
*
* @returns A `LoadBundleTask` object, which notifies callers with progress
* updates, and completion or error events. It can be used as a
* `Promise<LoadBundleTaskProgress>`.
*/ function loadBundle(e, t) {
	const n = ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), r = new LoadBundleTask();
	return __PRIVATE_firestoreClientLoadBundle(n, e._databaseId, t, r), r;
}
/**
* Reads a Firestore {@link Query} from local cache, identified by the given
* name.
*
* The named queries are packaged  into bundles on the server side (along
* with resulting documents), and loaded to local cache using `loadBundle`. Once
* in local cache, use this method to extract a {@link Query} by name.
*
* @param firestore - The {@link Firestore} instance to read the query from.
* @param name - The name of the query.
* @returns A `Promise` that is resolved with the Query or `null`.
*/ function namedQuery(e, t) {
	return __PRIVATE_firestoreClientGetNamedQuery(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), t).then(((t) => t ? new Query(e, null, t.query) : null));
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents an aggregation that can be performed by Firestore.
*/
var AggregateField = class {
	/**
	* Create a new AggregateField<T>
	* @param aggregateType Specifies the type of aggregation operation to perform.
	* @param _internalFieldPath Optionally specifies the field that is aggregated.
	* @internal
	*/
	constructor(e = "count", t) {
		this._internalFieldPath = t, this.type = "AggregateField", this.aggregateType = e;
	}
};
/**
* The results of executing an aggregation query.
*/ var AggregateQuerySnapshot = class {
	/** @hideconstructor */
	constructor(e, t, n) {
		this._userDataWriter = t, this._data = n, this.type = "AggregateQuerySnapshot", this.query = e;
	}
	/**
	* Returns the results of the aggregations performed over the underlying
	* query.
	*
	* The keys of the returned object will be the same as those of the
	* `AggregateSpec` object specified to the aggregation method, and the values
	* will be the corresponding aggregation result.
	*
	* @returns The results of the aggregations performed over the underlying
	* query.
	*/ data() {
		return this._userDataWriter.convertObjectMap(this._data);
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An immutable object representing an array of bytes.
*/ var Bytes = class Bytes {
	/** @hideconstructor */
	constructor(e) {
		this._byteString = e;
	}
	/**
	* Creates a new `Bytes` object from the given Base64 string, converting it to
	* bytes.
	*
	* @param base64 - The Base64 string used to create the `Bytes` object.
	*/ static fromBase64String(e) {
		try {
			return new Bytes(ByteString.fromBase64String(e));
		} catch (e) {
			throw new FirestoreError(D.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
		}
	}
	/**
	* Creates a new `Bytes` object from the given Uint8Array.
	*
	* @param array - The Uint8Array used to create the `Bytes` object.
	*/ static fromUint8Array(e) {
		return new Bytes(ByteString.fromUint8Array(e));
	}
	/**
	* Returns the underlying bytes as a Base64-encoded string.
	*
	* @returns The Base64-encoded string created from the `Bytes` object.
	*/ toBase64() {
		return this._byteString.toBase64();
	}
	/**
	* Returns the underlying bytes in a new `Uint8Array`.
	*
	* @returns The Uint8Array created from the `Bytes` object.
	*/ toUint8Array() {
		return this._byteString.toUint8Array();
	}
	/**
	* Returns a string representation of the `Bytes` object.
	*
	* @returns A string representation of the `Bytes` object.
	*/ toString() {
		return "Bytes(base64: " + this.toBase64() + ")";
	}
	/**
	* Returns true if this `Bytes` object is equal to the provided one.
	*
	* @param other - The `Bytes` object to compare against.
	* @returns true if this `Bytes` object is equal to the provided one.
	*/ isEqual(e) {
		return this._byteString.isEqual(e._byteString);
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `FieldPath` refers to a field in a document. The path may consist of a
* single field name (referring to a top-level field in the document), or a
* list of field names (referring to a nested field in the document).
*
* Create a `FieldPath` by providing field names. If more than one field
* name is provided, the path will point to a nested field in a document.
*/ var FieldPath = class {
	/**
	* Creates a `FieldPath` from the provided field names. If more than one field
	* name is provided, the path will point to a nested field in a document.
	*
	* @param fieldNames - A list of field names.
	*/
	constructor(...e) {
		for (let t = 0; t < e.length; ++t) if (0 === e[t].length) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
		this._internalPath = new FieldPath$1(e);
	}
	/**
	* Returns true if this `FieldPath` is equal to the provided one.
	*
	* @param other - The `FieldPath` to compare against.
	* @returns true if this `FieldPath` is equal to the provided one.
	*/ isEqual(e) {
		return this._internalPath.isEqual(e._internalPath);
	}
};
/**
* Returns a special sentinel `FieldPath` to refer to the ID of a document.
* It can be used in queries to sort or filter by the document ID.
*/ function documentId() {
	return new FieldPath("__name__");
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Sentinel values that can be used when writing document fields with `set()`
* or `update()`.
*/ var FieldValue = class {
	/**
	* @param _methodName - The public API endpoint that returns this class.
	* @hideconstructor
	*/
	constructor(e) {
		this._methodName = e;
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An immutable object representing a geographic location in Firestore. The
* location is represented as latitude/longitude pair.
*
* Latitude values are in the range of [-90, 90].
* Longitude values are in the range of [-180, 180].
*/ var GeoPoint = class {
	/**
	* Creates a new immutable `GeoPoint` object with the provided latitude and
	* longitude values.
	* @param latitude - The latitude as number between -90 and 90.
	* @param longitude - The longitude as number between -180 and 180.
	*/
	constructor(e, t) {
		if (!isFinite(e) || e < -90 || e > 90) throw new FirestoreError(D.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
		if (!isFinite(t) || t < -180 || t > 180) throw new FirestoreError(D.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
		this._lat = e, this._long = t;
	}
	/**
	* The latitude of this `GeoPoint` instance.
	*/ get latitude() {
		return this._lat;
	}
	/**
	* The longitude of this `GeoPoint` instance.
	*/ get longitude() {
		return this._long;
	}
	/**
	* Returns true if this `GeoPoint` is equal to the provided one.
	*
	* @param other - The `GeoPoint` to compare against.
	* @returns true if this `GeoPoint` is equal to the provided one.
	*/ isEqual(e) {
		return this._lat === e._lat && this._long === e._long;
	}
	/** Returns a JSON-serializable representation of this GeoPoint. */ toJSON() {
		return {
			latitude: this._lat,
			longitude: this._long
		};
	}
	/**
	* Actually private to JS consumers of our API, so this function is prefixed
	* with an underscore.
	*/ _compareTo(e) {
		return __PRIVATE_primitiveComparator(this._lat, e._lat) || __PRIVATE_primitiveComparator(this._long, e._long);
	}
};
/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a vector type in Firestore documents.
* Create an instance with {@link FieldValue.vector}.
*
* @class VectorValue
*/ var VectorValue = class {
	/**
	* @private
	* @internal
	*/
	constructor(e) {
		this._values = (e || []).map(((e) => e));
	}
	/**
	* Returns a copy of the raw number array form of the vector.
	*/ toArray() {
		return this._values.map(((e) => e));
	}
	/**
	* Returns `true` if the two VectorValue has the same raw number arrays, returns `false` otherwise.
	*/ isEqual(e) {
		return function __PRIVATE_isPrimitiveArrayEqual(e, t) {
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
			return !0;
		}(this._values, e._values);
	}
};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var be = /^__.*__$/;
/** The result of parsing document data (e.g. for a setData call). */ var ParsedSetData = class {
	constructor(e, t, n) {
		this.data = e, this.fieldMask = t, this.fieldTransforms = n;
	}
	toMutation(e, t) {
		return null !== this.fieldMask ? new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms) : new __PRIVATE_SetMutation(e, this.data, t, this.fieldTransforms);
	}
};
/** The result of parsing "update" data (i.e. for an updateData call). */ var ParsedUpdateData = class {
	constructor(e, t, n) {
		this.data = e, this.fieldMask = t, this.fieldTransforms = n;
	}
	toMutation(e, t) {
		return new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms);
	}
};
function __PRIVATE_isWrite(e) {
	switch (e) {
		case 0:
		case 2:
		case 1: return !0;
		case 3:
		case 4: return !1;
		default: throw fail();
	}
}
/** A "context" object passed around while parsing user data. */ var __PRIVATE_ParseContextImpl = class __PRIVATE_ParseContextImpl {
	/**
	* Initializes a ParseContext with the given source and path.
	*
	* @param settings - The settings for the parser.
	* @param databaseId - The database ID of the Firestore instance.
	* @param serializer - The serializer to use to generate the Value proto.
	* @param ignoreUndefinedProperties - Whether to ignore undefined properties
	* rather than throw.
	* @param fieldTransforms - A mutable list of field transforms encountered
	* while parsing the data.
	* @param fieldMask - A mutable list of field paths encountered while parsing
	* the data.
	*
	* TODO(b/34871131): We don't support array paths right now, so path can be
	* null to indicate the context represents any location within an array (in
	* which case certain features will not work and errors will be somewhat
	* compromised).
	*/
	constructor(e, t, n, r, i, s) {
		this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === i && this.vu(), this.fieldTransforms = i || [], this.fieldMask = s || [];
	}
	get path() {
		return this.settings.path;
	}
	get Cu() {
		return this.settings.Cu;
	}
	/** Returns a new context with the specified settings overwritten. */ Fu(e) {
		return new __PRIVATE_ParseContextImpl(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
	}
	Mu(e) {
		var t;
		const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r = this.Fu({
			path: n,
			xu: !1
		});
		return r.Ou(e), r;
	}
	Nu(e) {
		var t;
		const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r = this.Fu({
			path: n,
			xu: !1
		});
		return r.vu(), r;
	}
	Lu(e) {
		return this.Fu({
			path: void 0,
			xu: !0
		});
	}
	Bu(e) {
		return __PRIVATE_createError(e, this.settings.methodName, this.settings.ku || !1, this.path, this.settings.qu);
	}
	/** Returns 'true' if 'fieldPath' was traversed when creating this context. */ contains(e) {
		return void 0 !== this.fieldMask.find(((t) => e.isPrefixOf(t))) || void 0 !== this.fieldTransforms.find(((t) => e.isPrefixOf(t.field)));
	}
	vu() {
		if (this.path) for (let e = 0; e < this.path.length; e++) this.Ou(this.path.get(e));
	}
	Ou(e) {
		if (0 === e.length) throw this.Bu("Document fields must not be empty");
		if (__PRIVATE_isWrite(this.Cu) && be.test(e)) throw this.Bu("Document fields cannot begin and end with \"__\"");
	}
};
/**
* Helper for parsing raw user input (provided via the API) into internal model
* classes.
*/ var __PRIVATE_UserDataReader = class {
	constructor(e, t, n) {
		this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || __PRIVATE_newSerializer(e);
	}
	/** Creates a new top-level parse context. */ Qu(e, t, n, r = !1) {
		return new __PRIVATE_ParseContextImpl({
			Cu: e,
			methodName: t,
			qu: n,
			path: FieldPath$1.emptyPath(),
			xu: !1,
			ku: r
		}, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
	}
};
function __PRIVATE_newUserDataReader(e) {
	const t = e._freezeSettings(), n = __PRIVATE_newSerializer(e._databaseId);
	return new __PRIVATE_UserDataReader(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
/** Parse document data from a set() call. */ function __PRIVATE_parseSetData(e, t, n, r, i, s = {}) {
	const o = e.Qu(s.merge || s.mergeFields ? 2 : 0, t, n, i);
	__PRIVATE_validatePlainObject("Data must be an object, but it was:", o, r);
	const _ = __PRIVATE_parseObject(r, o);
	let a, u;
	if (s.merge) a = new FieldMask(o.fieldMask), u = o.fieldTransforms;
	else if (s.mergeFields) {
		const e = [];
		for (const r of s.mergeFields) {
			const i = __PRIVATE_fieldPathFromArgument$1(t, r, n);
			if (!o.contains(i)) throw new FirestoreError(D.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
			__PRIVATE_fieldMaskContains(e, i) || e.push(i);
		}
		a = new FieldMask(e), u = o.fieldTransforms.filter(((e) => a.covers(e.field)));
	} else a = null, u = o.fieldTransforms;
	return new ParsedSetData(new ObjectValue(_), a, u);
}
var __PRIVATE_DeleteFieldValueImpl = class __PRIVATE_DeleteFieldValueImpl extends FieldValue {
	_toFieldTransform(e) {
		if (2 !== e.Cu) throw 1 === e.Cu ? e.Bu(`${this._methodName}() can only appear at the top level of your update data`) : e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
		return e.fieldMask.push(e.path), null;
	}
	isEqual(e) {
		return e instanceof __PRIVATE_DeleteFieldValueImpl;
	}
};
/**
* Creates a child context for parsing SerializableFieldValues.
*
* This is different than calling `ParseContext.contextWith` because it keeps
* the fieldTransforms and fieldMask separate.
*
* The created context has its `dataSource` set to `UserDataSource.Argument`.
* Although these values are used with writes, any elements in these FieldValues
* are not considered writes since they cannot contain any FieldValue sentinels,
* etc.
*
* @param fieldValue - The sentinel FieldValue for which to create a child
*     context.
* @param context - The parent context.
* @param arrayElement - Whether or not the FieldValue has an array.
*/ function __PRIVATE_createSentinelChildContext(e, t, n) {
	return new __PRIVATE_ParseContextImpl({
		Cu: 3,
		qu: t.settings.qu,
		methodName: e._methodName,
		xu: n
	}, t.databaseId, t.serializer, t.ignoreUndefinedProperties);
}
var __PRIVATE_ServerTimestampFieldValueImpl = class __PRIVATE_ServerTimestampFieldValueImpl extends FieldValue {
	_toFieldTransform(e) {
		return new FieldTransform(e.path, new __PRIVATE_ServerTimestampTransform());
	}
	isEqual(e) {
		return e instanceof __PRIVATE_ServerTimestampFieldValueImpl;
	}
};
var __PRIVATE_ArrayUnionFieldValueImpl = class __PRIVATE_ArrayUnionFieldValueImpl extends FieldValue {
	constructor(e, t) {
		super(e), this.Ku = t;
	}
	_toFieldTransform(e) {
		const t = __PRIVATE_createSentinelChildContext(this, e, !0), r = new __PRIVATE_ArrayUnionTransformOperation(this.Ku.map(((e) => __PRIVATE_parseData(e, t))));
		return new FieldTransform(e.path, r);
	}
	isEqual(e) {
		return e instanceof __PRIVATE_ArrayUnionFieldValueImpl && deepEqual(this.Ku, e.Ku);
	}
};
var __PRIVATE_ArrayRemoveFieldValueImpl = class __PRIVATE_ArrayRemoveFieldValueImpl extends FieldValue {
	constructor(e, t) {
		super(e), this.Ku = t;
	}
	_toFieldTransform(e) {
		const t = __PRIVATE_createSentinelChildContext(this, e, !0), r = new __PRIVATE_ArrayRemoveTransformOperation(this.Ku.map(((e) => __PRIVATE_parseData(e, t))));
		return new FieldTransform(e.path, r);
	}
	isEqual(e) {
		return e instanceof __PRIVATE_ArrayRemoveFieldValueImpl && deepEqual(this.Ku, e.Ku);
	}
};
var __PRIVATE_NumericIncrementFieldValueImpl = class __PRIVATE_NumericIncrementFieldValueImpl extends FieldValue {
	constructor(e, t) {
		super(e), this.$u = t;
	}
	_toFieldTransform(e) {
		const t = new __PRIVATE_NumericIncrementTransformOperation(e.serializer, toNumber(e.serializer, this.$u));
		return new FieldTransform(e.path, t);
	}
	isEqual(e) {
		return e instanceof __PRIVATE_NumericIncrementFieldValueImpl && this.$u === e.$u;
	}
};
/** Parse update data from an update() call. */ function __PRIVATE_parseUpdateData(e, t, n, r) {
	const i = e.Qu(1, t, n);
	__PRIVATE_validatePlainObject("Data must be an object, but it was:", i, r);
	const s = [], o = ObjectValue.empty();
	forEach(r, ((e, r) => {
		const _ = __PRIVATE_fieldPathFromDotSeparatedString(t, e, n);
		r = getModularInstance(r);
		const a = i.Nu(_);
		if (r instanceof __PRIVATE_DeleteFieldValueImpl) s.push(_);
		else {
			const e = __PRIVATE_parseData(r, a);
			null != e && (s.push(_), o.set(_, e));
		}
	}));
	return new ParsedUpdateData(o, new FieldMask(s), i.fieldTransforms);
}
/** Parse update data from a list of field/value arguments. */ function __PRIVATE_parseUpdateVarargs(e, t, n, r, i, s) {
	const o = e.Qu(1, t, n), _ = [__PRIVATE_fieldPathFromArgument$1(t, r, n)], a = [i];
	if (s.length % 2 != 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
	for (let e = 0; e < s.length; e += 2) _.push(__PRIVATE_fieldPathFromArgument$1(t, s[e])), a.push(s[e + 1]);
	const u = [], c = ObjectValue.empty();
	for (let e = _.length - 1; e >= 0; --e) if (!__PRIVATE_fieldMaskContains(u, _[e])) {
		const t = _[e];
		let n = a[e];
		n = getModularInstance(n);
		const r = o.Nu(t);
		if (n instanceof __PRIVATE_DeleteFieldValueImpl) u.push(t);
		else {
			const e = __PRIVATE_parseData(n, r);
			null != e && (u.push(t), c.set(t, e));
		}
	}
	return new ParsedUpdateData(c, new FieldMask(u), o.fieldTransforms);
}
/**
* Parse a "query value" (e.g. value in a where filter or a value in a cursor
* bound).
*
* @param allowArrays - Whether the query value is an array that may directly
* contain additional arrays (e.g. the operand of an `in` query).
*/ function __PRIVATE_parseQueryValue(e, t, n, r = !1) {
	return __PRIVATE_parseData(n, e.Qu(r ? 4 : 3, t));
}
/**
* Parses user data to Protobuf Values.
*
* @param input - Data to be parsed.
* @param context - A context object representing the current path being parsed,
* the source of the data being parsed, etc.
* @returns The parsed value, or null if the value was a FieldValue sentinel
* that should not be included in the resulting parsed data.
*/ function __PRIVATE_parseData(e, t) {
	if (__PRIVATE_looksLikeJsonObject(e = getModularInstance(e))) return __PRIVATE_validatePlainObject("Unsupported field value:", t, e), __PRIVATE_parseObject(e, t);
	if (e instanceof FieldValue)
 /**
	* "Parses" the provided FieldValueImpl, adding any necessary transforms to
	* context.fieldTransforms.
	*/
	return function __PRIVATE_parseSentinelFieldValue(e, t) {
		if (!__PRIVATE_isWrite(t.Cu)) throw t.Bu(`${e._methodName}() can only be used with update() and set()`);
		if (!t.path) throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);
		const n = e._toFieldTransform(t);
		n && t.fieldTransforms.push(n);
	}(e, t), null;
	if (void 0 === e && t.ignoreUndefinedProperties) return null;
	if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
		if (t.settings.xu && 4 !== t.Cu) throw t.Bu("Nested arrays are not supported");
		return function __PRIVATE_parseArray(e, t) {
			const n = [];
			let r = 0;
			for (const i of e) {
				let e = __PRIVATE_parseData(i, t.Lu(r));
				e ??= { nullValue: "NULL_VALUE" }, n.push(e), r++;
			}
			return { arrayValue: { values: n } };
		}(e, t);
	}
	return function __PRIVATE_parseScalarValue(e, t) {
		if (null === (e = getModularInstance(e))) return { nullValue: "NULL_VALUE" };
		if ("number" == typeof e) return toNumber(t.serializer, e);
		if ("boolean" == typeof e) return { booleanValue: e };
		if ("string" == typeof e) return { stringValue: e };
		if (e instanceof Date) {
			const n = Timestamp.fromDate(e);
			return { timestampValue: toTimestamp(t.serializer, n) };
		}
		if (e instanceof Timestamp) {
			const n = new Timestamp(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
			return { timestampValue: toTimestamp(t.serializer, n) };
		}
		if (e instanceof GeoPoint) return { geoPointValue: {
			latitude: e.latitude,
			longitude: e.longitude
		} };
		if (e instanceof Bytes) return { bytesValue: __PRIVATE_toBytes(t.serializer, e._byteString) };
		if (e instanceof DocumentReference) {
			const n = t.databaseId, r = e.firestore._databaseId;
			if (!r.isEqual(n)) throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
			return { referenceValue: __PRIVATE_toResourceName(e.firestore._databaseId || t.databaseId, e._key.path) };
		}
		if (e instanceof VectorValue)
 /**
		* Creates a new VectorValue proto value (using the internal format).
		*/
		return function __PRIVATE_parseVectorValue(e, t) {
			return { mapValue: { fields: {
				__type__: { stringValue: "__vector__" },
				value: { arrayValue: { values: e.toArray().map(((e) => {
					if ("number" != typeof e) throw t.Bu("VectorValues must only contain numeric values.");
					return __PRIVATE_toDouble(t.serializer, e);
				})) } }
			} } };
		}(e, t);
		throw t.Bu(`Unsupported field value: ${__PRIVATE_valueDescription(e)}`);
	}(e, t);
}
function __PRIVATE_parseObject(e, t) {
	const n = {};
	return isEmpty(e) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : forEach(e, ((e, r) => {
		const i = __PRIVATE_parseData(r, t.Mu(e));
		null != i && (n[e] = i);
	})), { mapValue: { fields: n } };
}
function __PRIVATE_looksLikeJsonObject(e) {
	return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Timestamp || e instanceof GeoPoint || e instanceof Bytes || e instanceof DocumentReference || e instanceof FieldValue || e instanceof VectorValue);
}
function __PRIVATE_validatePlainObject(e, t, n) {
	if (!__PRIVATE_looksLikeJsonObject(n) || !function __PRIVATE_isPlainObject(e) {
		return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e));
	}(n)) {
		const r = __PRIVATE_valueDescription(n);
		throw "an object" === r ? t.Bu(e + " a custom object") : t.Bu(e + " " + r);
	}
}
/**
* Helper that calls fromDotSeparatedString() but wraps any error thrown.
*/ function __PRIVATE_fieldPathFromArgument$1(e, t, n) {
	if ((t = getModularInstance(t)) instanceof FieldPath) return t._internalPath;
	if ("string" == typeof t) return __PRIVATE_fieldPathFromDotSeparatedString(e, t);
	throw __PRIVATE_createError("Field path arguments must be of type string or ", e, !1, void 0, n);
}
/**
* Matches any characters in a field path string that are reserved.
*/ var De = /* @__PURE__ */ new RegExp("[~\\*/\\[\\]]");
/**
* Wraps fromDotSeparatedString with an error message about the method that
* was thrown.
* @param methodName - The publicly visible method name
* @param path - The dot-separated string form of a field path which will be
* split on dots.
* @param targetDoc - The document against which the field path will be
* evaluated.
*/ function __PRIVATE_fieldPathFromDotSeparatedString(e, t, n) {
	if (t.search(De) >= 0) throw __PRIVATE_createError(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, e, !1, void 0, n);
	try {
		return new FieldPath(...t.split("."))._internalPath;
	} catch (r) {
		throw __PRIVATE_createError(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, e, !1, void 0, n);
	}
}
function __PRIVATE_createError(e, t, n, r, i) {
	const s = r && !r.isEmpty(), o = void 0 !== i;
	let _ = `Function ${t}() called with invalid data`;
	n && (_ += " (via `toFirestore()`)"), _ += ". ";
	let a = "";
	return (s || o) && (a += " (found", s && (a += ` in field ${r}`), o && (a += ` in document ${i}`), a += ")"), new FirestoreError(D.INVALID_ARGUMENT, _ + e + a);
}
/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function __PRIVATE_fieldMaskContains(e, t) {
	return e.some(((e) => e.isEqual(t)));
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `DocumentSnapshot` contains data read from a document in your Firestore
* database. The data can be extracted with `.data()` or `.get(<field>)` to
* get a specific field.
*
* For a `DocumentSnapshot` that points to a non-existing document, any data
* access will return 'undefined'. You can use the `exists()` method to
* explicitly verify a document's existence.
*/ var DocumentSnapshot$1 = class {
	/** @hideconstructor protected */
	constructor(e, t, n, r, i) {
		this._firestore = e, this._userDataWriter = t, this._key = n, this._document = r, this._converter = i;
	}
	/** Property of the `DocumentSnapshot` that provides the document's ID. */ get id() {
		return this._key.path.lastSegment();
	}
	/**
	* The `DocumentReference` for the document included in the `DocumentSnapshot`.
	*/ get ref() {
		return new DocumentReference(this._firestore, this._converter, this._key);
	}
	/**
	* Signals whether or not the document at the snapshot's location exists.
	*
	* @returns true if the document exists.
	*/ exists() {
		return null !== this._document;
	}
	/**
	* Retrieves all fields in the document as an `Object`. Returns `undefined` if
	* the document doesn't exist.
	*
	* @returns An `Object` containing all fields in the document or `undefined`
	* if the document doesn't exist.
	*/ data() {
		if (this._document) {
			if (this._converter) {
				const e = new QueryDocumentSnapshot$1(this._firestore, this._userDataWriter, this._key, this._document, null);
				return this._converter.fromFirestore(e);
			}
			return this._userDataWriter.convertValue(this._document.data.value);
		}
	}
	/**
	* Retrieves the field specified by `fieldPath`. Returns `undefined` if the
	* document or field doesn't exist.
	*
	* @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
	* field.
	* @returns The data at the specified field location or undefined if no such
	* field exists in the document.
	*/
	get(e) {
		if (this._document) {
			const t = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e));
			if (null !== t) return this._userDataWriter.convertValue(t);
		}
	}
};
/**
* A `QueryDocumentSnapshot` contains data read from a document in your
* Firestore database as part of a query. The document is guaranteed to exist
* and its data can be extracted with `.data()` or `.get(<field>)` to get a
* specific field.
*
* A `QueryDocumentSnapshot` offers the same API surface as a
* `DocumentSnapshot`. Since query results contain only existing documents, the
* `exists` property will always be true and `data()` will never return
* 'undefined'.
*/ var QueryDocumentSnapshot$1 = class extends DocumentSnapshot$1 {
	/**
	* Retrieves all fields in the document as an `Object`.
	*
	* @override
	* @returns An `Object` containing all fields in the document.
	*/
	data() {
		return super.data();
	}
};
/**
* Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
*/ function __PRIVATE_fieldPathFromArgument(e, t) {
	return "string" == typeof t ? __PRIVATE_fieldPathFromDotSeparatedString(e, t) : t instanceof FieldPath ? t._internalPath : t._delegate._internalPath;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function __PRIVATE_validateHasExplicitOrderByForLimitToLast(e) {
	if ("L" === e.limitType && 0 === e.explicitOrderBy.length) throw new FirestoreError(D.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
/**
* An `AppliableConstraint` is an abstraction of a constraint that can be applied
* to a Firestore query.
*/ var AppliableConstraint = class {};
/**
* A `QueryConstraint` is used to narrow the set of documents returned by a
* Firestore query. `QueryConstraint`s are created by invoking {@link where},
* {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
* (endBefore:1)}, {@link (endAt:1)}, {@link limit}, {@link limitToLast} and
* can then be passed to {@link (query:1)} to create a new query instance that
* also contains this `QueryConstraint`.
*/ var QueryConstraint = class extends AppliableConstraint {};
function query(e, t, ...n) {
	let r = [];
	t instanceof AppliableConstraint && r.push(t), r = r.concat(n), function __PRIVATE_validateQueryConstraintArray(e) {
		const t = e.filter(((e) => e instanceof QueryCompositeFilterConstraint)).length, n = e.filter(((e) => e instanceof QueryFieldFilterConstraint)).length;
		if (t > 1 || t > 0 && n > 0) throw new FirestoreError(D.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
	}(r);
	for (const t of r) e = t._apply(e);
	return e;
}
/**
* A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
* a Firestore query by filtering on one or more document fields.
* `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
* be passed to {@link (query:1)} to create a new query instance that also contains
* this `QueryFieldFilterConstraint`.
*/ var QueryFieldFilterConstraint = class QueryFieldFilterConstraint extends QueryConstraint {
	/**
	* @internal
	*/
	constructor(e, t, n) {
		super(), this._field = e, this._op = t, this._value = n, this.type = "where";
	}
	static _create(e, t, n) {
		return new QueryFieldFilterConstraint(e, t, n);
	}
	_apply(e) {
		const t = this._parse(e);
		return __PRIVATE_validateNewFieldFilter(e._query, t), new Query(e.firestore, e.converter, __PRIVATE_queryWithAddedFilter(e._query, t));
	}
	_parse(e) {
		const t = __PRIVATE_newUserDataReader(e.firestore);
		return function __PRIVATE_newQueryFilter(e, t, n, r, i, s, o) {
			let _;
			if (i.isKeyField()) {
				if ("array-contains" === s || "array-contains-any" === s) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid Query. You can't perform '${s}' queries on documentId().`);
				if ("in" === s || "not-in" === s) {
					__PRIVATE_validateDisjunctiveFilterElements(o, s);
					const t = [];
					for (const n of o) t.push(__PRIVATE_parseDocumentIdValue(r, e, n));
					_ = { arrayValue: { values: t } };
				} else _ = __PRIVATE_parseDocumentIdValue(r, e, o);
			} else "in" !== s && "not-in" !== s && "array-contains-any" !== s || __PRIVATE_validateDisjunctiveFilterElements(o, s), _ = __PRIVATE_parseQueryValue(n, t, o, "in" === s || "not-in" === s);
			return FieldFilter.create(i, s, _);
		}(e._query, "where", t, e.firestore._databaseId, this._field, this._op, this._value);
	}
};
/**
* Creates a {@link QueryFieldFilterConstraint} that enforces that documents
* must contain the specified field and that the value should satisfy the
* relation constraint provided.
*
* @param fieldPath - The path to compare
* @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
*   "&lt;=", "!=").
* @param value - The value for comparison
* @returns The created {@link QueryFieldFilterConstraint}.
*/ function where(e, t, n) {
	const r = t, i = __PRIVATE_fieldPathFromArgument("where", e);
	return QueryFieldFilterConstraint._create(i, r, n);
}
/**
* A `QueryCompositeFilterConstraint` is used to narrow the set of documents
* returned by a Firestore query by performing the logical OR or AND of multiple
* {@link QueryFieldFilterConstraint}s or {@link QueryCompositeFilterConstraint}s.
* `QueryCompositeFilterConstraint`s are created by invoking {@link or} or
* {@link and} and can then be passed to {@link (query:1)} to create a new query
* instance that also contains the `QueryCompositeFilterConstraint`.
*/ var QueryCompositeFilterConstraint = class QueryCompositeFilterConstraint extends AppliableConstraint {
	/**
	* @internal
	*/
	constructor(e, t) {
		super(), this.type = e, this._queryConstraints = t;
	}
	static _create(e, t) {
		return new QueryCompositeFilterConstraint(e, t);
	}
	_parse(e) {
		const t = this._queryConstraints.map(((t) => t._parse(e))).filter(((e) => e.getFilters().length > 0));
		return 1 === t.length ? t[0] : CompositeFilter.create(t, this._getOperator());
	}
	_apply(e) {
		const t = this._parse(e);
		return 0 === t.getFilters().length ? e : (function __PRIVATE_validateNewFilter(e, t) {
			let n = e;
			const r = t.getFlattenedFilters();
			for (const e of r) __PRIVATE_validateNewFieldFilter(n, e), n = __PRIVATE_queryWithAddedFilter(n, e);
		}(e._query, t), new Query(e.firestore, e.converter, __PRIVATE_queryWithAddedFilter(e._query, t)));
	}
	_getQueryConstraints() {
		return this._queryConstraints;
	}
	_getOperator() {
		return "and" === this.type ? "and" : "or";
	}
};
/**
* Creates a new {@link QueryCompositeFilterConstraint} that is a disjunction of
* the given filter constraints. A disjunction filter includes a document if it
* satisfies any of the given filters.
*
* @param queryConstraints - Optional. The list of
* {@link QueryFilterConstraint}s to perform a disjunction for. These must be
* created with calls to {@link where}, {@link or}, or {@link and}.
* @returns The newly created {@link QueryCompositeFilterConstraint}.
*/ function or(...e) {
	return e.forEach(((e) => __PRIVATE_validateQueryFilterConstraint("or", e))), QueryCompositeFilterConstraint._create("or", e);
}
/**
* Creates a new {@link QueryCompositeFilterConstraint} that is a conjunction of
* the given filter constraints. A conjunction filter includes a document if it
* satisfies all of the given filters.
*
* @param queryConstraints - Optional. The list of
* {@link QueryFilterConstraint}s to perform a conjunction for. These must be
* created with calls to {@link where}, {@link or}, or {@link and}.
* @returns The newly created {@link QueryCompositeFilterConstraint}.
*/ function and(...e) {
	return e.forEach(((e) => __PRIVATE_validateQueryFilterConstraint("and", e))), QueryCompositeFilterConstraint._create("and", e);
}
/**
* A `QueryOrderByConstraint` is used to sort the set of documents returned by a
* Firestore query. `QueryOrderByConstraint`s are created by invoking
* {@link orderBy} and can then be passed to {@link (query:1)} to create a new query
* instance that also contains this `QueryOrderByConstraint`.
*
* Note: Documents that do not contain the orderBy field will not be present in
* the query result.
*/ var QueryOrderByConstraint = class QueryOrderByConstraint extends QueryConstraint {
	/**
	* @internal
	*/
	constructor(e, t) {
		super(), this._field = e, this._direction = t, this.type = "orderBy";
	}
	static _create(e, t) {
		return new QueryOrderByConstraint(e, t);
	}
	_apply(e) {
		const t = function __PRIVATE_newQueryOrderBy(e, t, n) {
			if (null !== e.startAt) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
			if (null !== e.endAt) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
			return new OrderBy(t, n);
		}(e._query, this._field, this._direction);
		return new Query(e.firestore, e.converter, function __PRIVATE_queryWithAddedOrderBy(e, t) {
			const n = e.explicitOrderBy.concat([t]);
			return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, n, e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt);
		}(e._query, t));
	}
};
/**
* Creates a {@link QueryOrderByConstraint} that sorts the query result by the
* specified field, optionally in descending order instead of ascending.
*
* Note: Documents that do not contain the specified field will not be present
* in the query result.
*
* @param fieldPath - The field to sort by.
* @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
* not specified, order will be ascending.
* @returns The created {@link QueryOrderByConstraint}.
*/ function orderBy(e, t = "asc") {
	const n = t, r = __PRIVATE_fieldPathFromArgument("orderBy", e);
	return QueryOrderByConstraint._create(r, n);
}
/**
* A `QueryLimitConstraint` is used to limit the number of documents returned by
* a Firestore query.
* `QueryLimitConstraint`s are created by invoking {@link limit} or
* {@link limitToLast} and can then be passed to {@link (query:1)} to create a new
* query instance that also contains this `QueryLimitConstraint`.
*/ var QueryLimitConstraint = class QueryLimitConstraint extends QueryConstraint {
	/**
	* @internal
	*/
	constructor(e, t, n) {
		super(), this.type = e, this._limit = t, this._limitType = n;
	}
	static _create(e, t, n) {
		return new QueryLimitConstraint(e, t, n);
	}
	_apply(e) {
		return new Query(e.firestore, e.converter, __PRIVATE_queryWithLimit(e._query, this._limit, this._limitType));
	}
};
/**
* Creates a {@link QueryLimitConstraint} that only returns the first matching
* documents.
*
* @param limit - The maximum number of items to return.
* @returns The created {@link QueryLimitConstraint}.
*/ function limit(e) {
	return __PRIVATE_validatePositiveNumber("limit", e), QueryLimitConstraint._create("limit", e, "F");
}
/**
* Creates a {@link QueryLimitConstraint} that only returns the last matching
* documents.
*
* You must specify at least one `orderBy` clause for `limitToLast` queries,
* otherwise an exception will be thrown during execution.
*
* @param limit - The maximum number of items to return.
* @returns The created {@link QueryLimitConstraint}.
*/ function limitToLast(e) {
	return __PRIVATE_validatePositiveNumber("limitToLast", e), QueryLimitConstraint._create("limitToLast", e, "L");
}
/**
* A `QueryStartAtConstraint` is used to exclude documents from the start of a
* result set returned by a Firestore query.
* `QueryStartAtConstraint`s are created by invoking {@link (startAt:1)} or
* {@link (startAfter:1)} and can then be passed to {@link (query:1)} to create a
* new query instance that also contains this `QueryStartAtConstraint`.
*/ var QueryStartAtConstraint = class QueryStartAtConstraint extends QueryConstraint {
	/**
	* @internal
	*/
	constructor(e, t, n) {
		super(), this.type = e, this._docOrFields = t, this._inclusive = n;
	}
	static _create(e, t, n) {
		return new QueryStartAtConstraint(e, t, n);
	}
	_apply(e) {
		const t = __PRIVATE_newQueryBoundFromDocOrFields(e, this.type, this._docOrFields, this._inclusive);
		return new Query(e.firestore, e.converter, function __PRIVATE_queryWithStartAt(e, t) {
			return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, t, e.endAt);
		}(e._query, t));
	}
};
function startAt(...e) {
	return QueryStartAtConstraint._create("startAt", e, !0);
}
function startAfter(...e) {
	return QueryStartAtConstraint._create("startAfter", e, !1);
}
/**
* A `QueryEndAtConstraint` is used to exclude documents from the end of a
* result set returned by a Firestore query.
* `QueryEndAtConstraint`s are created by invoking {@link (endAt:1)} or
* {@link (endBefore:1)} and can then be passed to {@link (query:1)} to create a new
* query instance that also contains this `QueryEndAtConstraint`.
*/ var QueryEndAtConstraint = class QueryEndAtConstraint extends QueryConstraint {
	/**
	* @internal
	*/
	constructor(e, t, n) {
		super(), this.type = e, this._docOrFields = t, this._inclusive = n;
	}
	static _create(e, t, n) {
		return new QueryEndAtConstraint(e, t, n);
	}
	_apply(e) {
		const t = __PRIVATE_newQueryBoundFromDocOrFields(e, this.type, this._docOrFields, this._inclusive);
		return new Query(e.firestore, e.converter, function __PRIVATE_queryWithEndAt(e, t) {
			return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, t);
		}(e._query, t));
	}
};
function endBefore(...e) {
	return QueryEndAtConstraint._create("endBefore", e, !1);
}
function endAt(...e) {
	return QueryEndAtConstraint._create("endAt", e, !0);
}
/** Helper function to create a bound from a document or fields */ function __PRIVATE_newQueryBoundFromDocOrFields(e, t, n, r) {
	if (n[0] = getModularInstance(n[0]), n[0] instanceof DocumentSnapshot$1) return function __PRIVATE_newQueryBoundFromDocument(e, t, n, r, i) {
		if (!r) throw new FirestoreError(D.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
		const s = [];
		for (const n of __PRIVATE_queryNormalizedOrderBy(e)) if (n.field.isKeyField()) s.push(__PRIVATE_refValue(t, r.key));
		else {
			const e = r.data.field(n.field);
			if (__PRIVATE_isServerTimestamp(e)) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field \"" + n.field + "\" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)");
			if (null === e) {
				const e = n.field.canonicalString();
				throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`);
			}
			s.push(e);
		}
		return new Bound(s, i);
	}(e._query, e.firestore._databaseId, t, n[0]._document, r);
	{
		const i = __PRIVATE_newUserDataReader(e.firestore);
		return function __PRIVATE_newQueryBoundFromFields(e, t, n, r, i, s) {
			const o = e.explicitOrderBy;
			if (i.length > o.length) throw new FirestoreError(D.INVALID_ARGUMENT, `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
			const _ = [];
			for (let s = 0; s < i.length; s++) {
				const a = i[s];
				if (o[s].field.isKeyField()) {
					if ("string" != typeof a) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof a}`);
					if (!__PRIVATE_isCollectionGroupQuery(e) && -1 !== a.indexOf("/")) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${a}' contains a slash.`);
					const n = e.path.child(ResourcePath.fromString(a));
					if (!DocumentKey.isDocumentKey(n)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
					const i = new DocumentKey(n);
					_.push(__PRIVATE_refValue(t, i));
				} else {
					const e = __PRIVATE_parseQueryValue(n, r, a);
					_.push(e);
				}
			}
			return new Bound(_, s);
		}(e._query, e.firestore._databaseId, i, t, n, r);
	}
}
function __PRIVATE_parseDocumentIdValue(e, t, n) {
	if ("string" == typeof (n = getModularInstance(n))) {
		if ("" === n) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
		if (!__PRIVATE_isCollectionGroupQuery(t) && -1 !== n.indexOf("/")) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
		const r = t.path.child(ResourcePath.fromString(n));
		if (!DocumentKey.isDocumentKey(r)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
		return __PRIVATE_refValue(e, new DocumentKey(r));
	}
	if (n instanceof DocumentReference) return __PRIVATE_refValue(e, n._key);
	throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(n)}.`);
}
/**
* Validates that the value passed into a disjunctive filter satisfies all
* array requirements.
*/ function __PRIVATE_validateDisjunctiveFilterElements(e, t) {
	if (!Array.isArray(e) || 0 === e.length) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
}
/**
* Given an operator, returns the set of operators that cannot be used with it.
*
* This is not a comprehensive check, and this function should be removed in the
* long term. Validations should occur in the Firestore backend.
*
* Operators in a query must adhere to the following set of rules:
* 1. Only one inequality per query.
* 2. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
*/ function __PRIVATE_validateNewFieldFilter(e, t) {
	const n = function __PRIVATE_findOpInsideFilters(e, t) {
		for (const n of e) for (const e of n.getFlattenedFilters()) if (t.indexOf(e.op) >= 0) return e.op;
		return null;
	}(e.filters, function __PRIVATE_conflictingOps(e) {
		switch (e) {
			case "!=": return ["!=", "not-in"];
			case "array-contains-any":
			case "in": return ["not-in"];
			case "not-in": return [
				"array-contains-any",
				"in",
				"not-in",
				"!="
			];
			default: return [];
		}
	}(t.op));
	if (null !== n) throw n === t.op ? new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`);
}
function __PRIVATE_validateQueryFilterConstraint(e, t) {
	if (!(t instanceof QueryFieldFilterConstraint || t instanceof QueryCompositeFilterConstraint)) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}
var AbstractUserDataWriter = class {
	convertValue(e, t = "none") {
		switch (__PRIVATE_typeOrder(e)) {
			case 0: return null;
			case 1: return e.booleanValue;
			case 2: return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
			case 3: return this.convertTimestamp(e.timestampValue);
			case 4: return this.convertServerTimestamp(e, t);
			case 5: return e.stringValue;
			case 6: return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));
			case 7: return this.convertReference(e.referenceValue);
			case 8: return this.convertGeoPoint(e.geoPointValue);
			case 9: return this.convertArray(e.arrayValue, t);
			case 11: return this.convertObject(e.mapValue, t);
			case 10: return this.convertVectorValue(e.mapValue);
			default: throw fail();
		}
	}
	convertObject(e, t) {
		return this.convertObjectMap(e.fields, t);
	}
	/**
	* @internal
	*/ convertObjectMap(e, t = "none") {
		const n = {};
		return forEach(e, ((e, r) => {
			n[e] = this.convertValue(r, t);
		})), n;
	}
	/**
	* @internal
	*/ convertVectorValue(e) {
		var t, n, r;
		return new VectorValue(null === (r = null === (n = null === (t = e.fields) || void 0 === t ? void 0 : t.value.arrayValue) || void 0 === n ? void 0 : n.values) || void 0 === r ? void 0 : r.map(((e) => __PRIVATE_normalizeNumber(e.doubleValue))));
	}
	convertGeoPoint(e) {
		return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude), __PRIVATE_normalizeNumber(e.longitude));
	}
	convertArray(e, t) {
		return (e.values || []).map(((e) => this.convertValue(e, t)));
	}
	convertServerTimestamp(e, t) {
		switch (t) {
			case "previous":
				const n = __PRIVATE_getPreviousValue(e);
				return null == n ? null : this.convertValue(n, t);
			case "estimate": return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));
			default: return null;
		}
	}
	convertTimestamp(e) {
		const t = __PRIVATE_normalizeTimestamp(e);
		return new Timestamp(t.seconds, t.nanos);
	}
	convertDocumentKey(e, t) {
		const n = ResourcePath.fromString(e);
		__PRIVATE_hardAssert(__PRIVATE_isValidResourceName(n));
		const r = new DatabaseId(n.get(1), n.get(3)), i = new DocumentKey(n.popFirst(5));
		return r.isEqual(t) || __PRIVATE_logError(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), i;
	}
};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Converts custom model object of type T into `DocumentData` by applying the
* converter if it exists.
*
* This function is used when converting user objects to `DocumentData`
* because we want to provide the user with a more specific error message if
* their `set()` or fails due to invalid data originating from a `toFirestore()`
* call.
*/ function __PRIVATE_applyFirestoreDataConverter(e, t, n) {
	let r;
	return r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r;
}
var __PRIVATE_LiteUserDataWriter = class extends AbstractUserDataWriter {
	constructor(e) {
		super(), this.firestore = e;
	}
	convertBytes(e) {
		return new Bytes(e);
	}
	convertReference(e) {
		const t = this.convertDocumentKey(e, this.firestore._databaseId);
		return new DocumentReference(this.firestore, null, t);
	}
};
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Create an AggregateField object that can be used to compute the sum of
* a specified field over a range of documents in the result set of a query.
* @param field Specifies the field to sum across the result set.
*/ function sum(e) {
	return new AggregateField("sum", __PRIVATE_fieldPathFromArgument$1("sum", e));
}
/**
* Create an AggregateField object that can be used to compute the average of
* a specified field over a range of documents in the result set of a query.
* @param field Specifies the field to average across the result set.
*/ function average(e) {
	return new AggregateField("avg", __PRIVATE_fieldPathFromArgument$1("average", e));
}
/**
* Create an AggregateField object that can be used to compute the count of
* documents in the result set of a query.
*/ function count() {
	return new AggregateField("count");
}
/**
* Compares two 'AggregateField` instances for equality.
*
* @param left Compare this AggregateField to the `right`.
* @param right Compare this AggregateField to the `left`.
*/ function aggregateFieldEqual(e, t) {
	var n, r;
	return e instanceof AggregateField && t instanceof AggregateField && e.aggregateType === t.aggregateType && (null === (n = e._internalFieldPath) || void 0 === n ? void 0 : n.canonicalString()) === (null === (r = t._internalFieldPath) || void 0 === r ? void 0 : r.canonicalString());
}
/**
* Compares two `AggregateQuerySnapshot` instances for equality.
*
* Two `AggregateQuerySnapshot` instances are considered "equal" if they have
* underlying queries that compare equal, and the same data.
*
* @param left - The first `AggregateQuerySnapshot` to compare.
* @param right - The second `AggregateQuerySnapshot` to compare.
*
* @returns `true` if the objects are "equal", as defined above, or `false`
* otherwise.
*/ function aggregateQuerySnapshotEqual(e, t) {
	return queryEqual(e.query, t.query) && deepEqual(e.data(), t.data());
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Metadata about a snapshot, describing the state of the snapshot.
*/ var SnapshotMetadata = class {
	/** @hideconstructor */
	constructor(e, t) {
		this.hasPendingWrites = e, this.fromCache = t;
	}
	/**
	* Returns true if this `SnapshotMetadata` is equal to the provided one.
	*
	* @param other - The `SnapshotMetadata` to compare against.
	* @returns true if this `SnapshotMetadata` is equal to the provided one.
	*/ isEqual(e) {
		return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
	}
};
/**
* A `DocumentSnapshot` contains data read from a document in your Firestore
* database. The data can be extracted with `.data()` or `.get(<field>)` to
* get a specific field.
*
* For a `DocumentSnapshot` that points to a non-existing document, any data
* access will return 'undefined'. You can use the `exists()` method to
* explicitly verify a document's existence.
*/ var DocumentSnapshot = class extends DocumentSnapshot$1 {
	/** @hideconstructor protected */
	constructor(e, t, n, r, i, s) {
		super(e, t, n, r, s), this._firestore = e, this._firestoreImpl = e, this.metadata = i;
	}
	/**
	* Returns whether or not the data exists. True if the document exists.
	*/ exists() {
		return super.exists();
	}
	/**
	* Retrieves all fields in the document as an `Object`. Returns `undefined` if
	* the document doesn't exist.
	*
	* By default, `serverTimestamp()` values that have not yet been
	* set to their final value will be returned as `null`. You can override
	* this by passing an options object.
	*
	* @param options - An options object to configure how data is retrieved from
	* the snapshot (for example the desired behavior for server timestamps that
	* have not yet been set to their final value).
	* @returns An `Object` containing all fields in the document or `undefined` if
	* the document doesn't exist.
	*/ data(e = {}) {
		if (this._document) {
			if (this._converter) {
				const t = new QueryDocumentSnapshot(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
				return this._converter.fromFirestore(t, e);
			}
			return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
		}
	}
	/**
	* Retrieves the field specified by `fieldPath`. Returns `undefined` if the
	* document or field doesn't exist.
	*
	* By default, a `serverTimestamp()` that has not yet been set to
	* its final value will be returned as `null`. You can override this by
	* passing an options object.
	*
	* @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
	* field.
	* @param options - An options object to configure how the field is retrieved
	* from the snapshot (for example the desired behavior for server timestamps
	* that have not yet been set to their final value).
	* @returns The data at the specified field location or undefined if no such
	* field exists in the document.
	*/
	get(e, t = {}) {
		if (this._document) {
			const n = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e));
			if (null !== n) return this._userDataWriter.convertValue(n, t.serverTimestamps);
		}
	}
};
/**
* A `QueryDocumentSnapshot` contains data read from a document in your
* Firestore database as part of a query. The document is guaranteed to exist
* and its data can be extracted with `.data()` or `.get(<field>)` to get a
* specific field.
*
* A `QueryDocumentSnapshot` offers the same API surface as a
* `DocumentSnapshot`. Since query results contain only existing documents, the
* `exists` property will always be true and `data()` will never return
* 'undefined'.
*/ var QueryDocumentSnapshot = class extends DocumentSnapshot {
	/**
	* Retrieves all fields in the document as an `Object`.
	*
	* By default, `serverTimestamp()` values that have not yet been
	* set to their final value will be returned as `null`. You can override
	* this by passing an options object.
	*
	* @override
	* @param options - An options object to configure how data is retrieved from
	* the snapshot (for example the desired behavior for server timestamps that
	* have not yet been set to their final value).
	* @returns An `Object` containing all fields in the document.
	*/
	data(e = {}) {
		return super.data(e);
	}
};
/**
* A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
* representing the results of a query. The documents can be accessed as an
* array via the `docs` property or enumerated using the `forEach` method. The
* number of documents can be determined via the `empty` and `size`
* properties.
*/ var QuerySnapshot = class {
	/** @hideconstructor */
	constructor(e, t, n, r) {
		this._firestore = e, this._userDataWriter = t, this._snapshot = r, this.metadata = new SnapshotMetadata(r.hasPendingWrites, r.fromCache), this.query = n;
	}
	/** An array of all the documents in the `QuerySnapshot`. */ get docs() {
		const e = [];
		return this.forEach(((t) => e.push(t))), e;
	}
	/** The number of documents in the `QuerySnapshot`. */ get size() {
		return this._snapshot.docs.size;
	}
	/** True if there are no documents in the `QuerySnapshot`. */ get empty() {
		return 0 === this.size;
	}
	/**
	* Enumerates all of the documents in the `QuerySnapshot`.
	*
	* @param callback - A callback to be called with a `QueryDocumentSnapshot` for
	* each document in the snapshot.
	* @param thisArg - The `this` binding for the callback.
	*/ forEach(e, t) {
		this._snapshot.docs.forEach(((n) => {
			e.call(t, new QueryDocumentSnapshot(this._firestore, this._userDataWriter, n.key, n, new SnapshotMetadata(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
		}));
	}
	/**
	* Returns an array of the documents changes since the last snapshot. If this
	* is the first snapshot, all documents will be in the list as 'added'
	* changes.
	*
	* @param options - `SnapshotListenOptions` that control whether metadata-only
	* changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
	* snapshot events.
	*/ docChanges(e = {}) {
		const t = !!e.includeMetadataChanges;
		if (t && this._snapshot.excludesMetadataChanges) throw new FirestoreError(D.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
		return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function __PRIVATE_changesFromSnapshot(e, t) {
			if (e._snapshot.oldDocs.isEmpty()) {
				let t = 0;
				return e._snapshot.docChanges.map(((n) => {
					const r = new QueryDocumentSnapshot(e._firestore, e._userDataWriter, n.doc.key, n.doc, new SnapshotMetadata(e._snapshot.mutatedKeys.has(n.doc.key), e._snapshot.fromCache), e.query.converter);
					return n.doc, {
						type: "added",
						doc: r,
						oldIndex: -1,
						newIndex: t++
					};
				}));
			}
			{
				let n = e._snapshot.oldDocs;
				return e._snapshot.docChanges.filter(((e) => t || 3 !== e.type)).map(((t) => {
					const r = new QueryDocumentSnapshot(e._firestore, e._userDataWriter, t.doc.key, t.doc, new SnapshotMetadata(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter);
					let i = -1, s = -1;
					return 0 !== t.type && (i = n.indexOf(t.doc.key), n = n.delete(t.doc.key)), 1 !== t.type && (n = n.add(t.doc), s = n.indexOf(t.doc.key)), {
						type: __PRIVATE_resultChangeType(t.type),
						doc: r,
						oldIndex: i,
						newIndex: s
					};
				}));
			}
		}(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges;
	}
};
function __PRIVATE_resultChangeType(e) {
	switch (e) {
		case 0: return "added";
		case 2:
		case 3: return "modified";
		case 1: return "removed";
		default: return fail();
	}
}
/**
* Returns true if the provided snapshots are equal.
*
* @param left - A snapshot to compare.
* @param right - A snapshot to compare.
* @returns true if the snapshots are equal.
*/ function snapshotEqual(e, t) {
	return e instanceof DocumentSnapshot && t instanceof DocumentSnapshot ? e._firestore === t._firestore && e._key.isEqual(t._key) && (null === e._document ? null === t._document : e._document.isEqual(t._document)) && e._converter === t._converter : e instanceof QuerySnapshot && t instanceof QuerySnapshot && e._firestore === t._firestore && queryEqual(e.query, t.query) && e.metadata.isEqual(t.metadata) && e._snapshot.isEqual(t._snapshot);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Reads the document referred to by this `DocumentReference`.
*
* Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
* for data from the server, but it may return cached data or fail if you are
* offline and the server cannot be reached. To specify this behavior, invoke
* {@link getDocFromCache} or {@link getDocFromServer}.
*
* @param reference - The reference of the document to fetch.
* @returns A Promise resolved with a `DocumentSnapshot` containing the
* current document contents.
*/ function getDoc(e) {
	e = __PRIVATE_cast(e, DocumentReference);
	const t = __PRIVATE_cast(e.firestore, Firestore);
	return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(t), e._key).then(((n) => __PRIVATE_convertToDocSnapshot(t, e, n)));
}
var __PRIVATE_ExpUserDataWriter = class extends AbstractUserDataWriter {
	constructor(e) {
		super(), this.firestore = e;
	}
	convertBytes(e) {
		return new Bytes(e);
	}
	convertReference(e) {
		const t = this.convertDocumentKey(e, this.firestore._databaseId);
		return new DocumentReference(this.firestore, null, t);
	}
};
/**
* Reads the document referred to by this `DocumentReference` from cache.
* Returns an error if the document is not currently cached.
*
* @returns A `Promise` resolved with a `DocumentSnapshot` containing the
* current document contents.
*/ function getDocFromCache(e) {
	e = __PRIVATE_cast(e, DocumentReference);
	const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
	return __PRIVATE_firestoreClientGetDocumentFromLocalCache(n, e._key).then(((n) => new DocumentSnapshot(t, r, e._key, n, new SnapshotMetadata(null !== n && n.hasLocalMutations, !0), e.converter)));
}
/**
* Reads the document referred to by this `DocumentReference` from the server.
* Returns an error if the network is not available.
*
* @returns A `Promise` resolved with a `DocumentSnapshot` containing the
* current document contents.
*/ function getDocFromServer(e) {
	e = __PRIVATE_cast(e, DocumentReference);
	const t = __PRIVATE_cast(e.firestore, Firestore);
	return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(t), e._key, { source: "server" }).then(((n) => __PRIVATE_convertToDocSnapshot(t, e, n)));
}
/**
* Executes the query and returns the results as a `QuerySnapshot`.
*
* Note: `getDocs()` attempts to provide up-to-date data when possible by
* waiting for data from the server, but it may return cached data or fail if
* you are offline and the server cannot be reached. To specify this behavior,
* invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
*
* @returns A `Promise` that will be resolved with the results of the query.
*/ function getDocs(e) {
	e = __PRIVATE_cast(e, Query);
	const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
	return __PRIVATE_validateHasExplicitOrderByForLimitToLast(e._query), __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n, e._query).then(((n) => new QuerySnapshot(t, r, e, n)));
}
/**
* Executes the query and returns the results as a `QuerySnapshot` from cache.
* Returns an empty result set if no documents matching the query are currently
* cached.
*
* @returns A `Promise` that will be resolved with the results of the query.
*/ function getDocsFromCache(e) {
	e = __PRIVATE_cast(e, Query);
	const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
	return __PRIVATE_firestoreClientGetDocumentsFromLocalCache(n, e._query).then(((n) => new QuerySnapshot(t, r, e, n)));
}
/**
* Executes the query and returns the results as a `QuerySnapshot` from the
* server. Returns an error if the network is not available.
*
* @returns A `Promise` that will be resolved with the results of the query.
*/ function getDocsFromServer(e) {
	e = __PRIVATE_cast(e, Query);
	const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
	return __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n, e._query, { source: "server" }).then(((n) => new QuerySnapshot(t, r, e, n)));
}
function setDoc(e, t, n) {
	e = __PRIVATE_cast(e, DocumentReference);
	const r = __PRIVATE_cast(e.firestore, Firestore), i = __PRIVATE_applyFirestoreDataConverter(e.converter, t, n);
	return executeWrite(r, [__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(r), "setDoc", e._key, i, null !== e.converter, n).toMutation(e._key, Precondition.none())]);
}
function updateDoc(e, t, n, ...r) {
	e = __PRIVATE_cast(e, DocumentReference);
	const i = __PRIVATE_cast(e.firestore, Firestore), s = __PRIVATE_newUserDataReader(i);
	let o;
	o = "string" == typeof (t = getModularInstance(t)) || t instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(s, "updateDoc", e._key, t, n, r) : __PRIVATE_parseUpdateData(s, "updateDoc", e._key, t);
	return executeWrite(i, [o.toMutation(e._key, Precondition.exists(!0))]);
}
/**
* Deletes the document referred to by the specified `DocumentReference`.
*
* @param reference - A reference to the document to delete.
* @returns A Promise resolved once the document has been successfully
* deleted from the backend (note that it won't resolve while you're offline).
*/ function deleteDoc(e) {
	return executeWrite(__PRIVATE_cast(e.firestore, Firestore), [new __PRIVATE_DeleteMutation(e._key, Precondition.none())]);
}
/**
* Add a new document to specified `CollectionReference` with the given data,
* assigning it a document ID automatically.
*
* @param reference - A reference to the collection to add this document to.
* @param data - An Object containing the data for the new document.
* @returns A `Promise` resolved with a `DocumentReference` pointing to the
* newly created document after it has been written to the backend (Note that it
* won't resolve while you're offline).
*/ function addDoc(e, t) {
	const n = __PRIVATE_cast(e.firestore, Firestore), r = doc(e), i = __PRIVATE_applyFirestoreDataConverter(e.converter, t);
	return executeWrite(n, [__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(e.firestore), "addDoc", r._key, i, null !== e.converter, {}).toMutation(r._key, Precondition.exists(!1))]).then((() => r));
}
function onSnapshot(e, ...t) {
	var n, r, i;
	e = getModularInstance(e);
	let s = {
		includeMetadataChanges: !1,
		source: "default"
	}, o = 0;
	"object" != typeof t[o] || __PRIVATE_isPartialObserver(t[o]) || (s = t[o], o++);
	const _ = {
		includeMetadataChanges: s.includeMetadataChanges,
		source: s.source
	};
	if (__PRIVATE_isPartialObserver(t[o])) {
		const e = t[o];
		t[o] = null === (n = e.next) || void 0 === n ? void 0 : n.bind(e), t[o + 1] = null === (r = e.error) || void 0 === r ? void 0 : r.bind(e), t[o + 2] = null === (i = e.complete) || void 0 === i ? void 0 : i.bind(e);
	}
	let a, u, c;
	if (e instanceof DocumentReference) u = __PRIVATE_cast(e.firestore, Firestore), c = __PRIVATE_newQueryForPath(e._key.path), a = {
		next: (n) => {
			t[o] && t[o](__PRIVATE_convertToDocSnapshot(u, e, n));
		},
		error: t[o + 1],
		complete: t[o + 2]
	};
	else {
		const n = __PRIVATE_cast(e, Query);
		u = __PRIVATE_cast(n.firestore, Firestore), c = n._query;
		const r = new __PRIVATE_ExpUserDataWriter(u);
		a = {
			next: (e) => {
				t[o] && t[o](new QuerySnapshot(u, r, n, e));
			},
			error: t[o + 1],
			complete: t[o + 2]
		}, __PRIVATE_validateHasExplicitOrderByForLimitToLast(e._query);
	}
	return function __PRIVATE_firestoreClientListen(e, t, n, r) {
		const i = new __PRIVATE_AsyncObserver(r), s = new __PRIVATE_QueryListener(t, i, n);
		return e.asyncQueue.enqueueAndForget((async () => __PRIVATE_eventManagerListen(await __PRIVATE_getEventManager(e), s))), () => {
			i.Za(), e.asyncQueue.enqueueAndForget((async () => __PRIVATE_eventManagerUnlisten(await __PRIVATE_getEventManager(e), s)));
		};
	}(ensureFirestoreConfigured(u), c, _, a);
}
function onSnapshotsInSync(e, t) {
	return __PRIVATE_firestoreClientAddSnapshotsInSyncListener(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), __PRIVATE_isPartialObserver(t) ? t : { next: t });
}
/**
* Locally writes `mutations` on the async queue.
* @internal
*/ function executeWrite(e, t) {
	return function __PRIVATE_firestoreClientWrite(e, t) {
		const n = new __PRIVATE_Deferred();
		return e.asyncQueue.enqueueAndForget((async () => __PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(e), t, n))), n.promise;
	}(ensureFirestoreConfigured(e), t);
}
/**
* Converts a {@link ViewSnapshot} that contains the single document specified by `ref`
* to a {@link DocumentSnapshot}.
*/ function __PRIVATE_convertToDocSnapshot(e, t, n) {
	const r = n.docs.get(t._key);
	return new DocumentSnapshot(e, new __PRIVATE_ExpUserDataWriter(e), t._key, r, new SnapshotMetadata(n.hasPendingWrites, n.fromCache), t.converter);
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Calculates the number of documents in the result set of the given query
* without actually downloading the documents.
*
* Using this function to count the documents is efficient because only the
* final count, not the documents' data, is downloaded. This function can
* count the documents in cases where the result set is prohibitively large to
* download entirely (thousands of documents).
*
* The result received from the server is presented, unaltered, without
* considering any local state. That is, documents in the local cache are not
* taken into consideration, neither are local modifications not yet
* synchronized with the server. Previously-downloaded results, if any, are not
* used. Every invocation of this function necessarily involves a round trip to
* the server.
*
* @param query The query whose result set size is calculated.
* @returns A Promise that will be resolved with the count; the count can be
* retrieved from `snapshot.data().count`, where `snapshot` is the
* `AggregateQuerySnapshot` to which the returned Promise resolves.
*/ function getCountFromServer(e) {
	return getAggregateFromServer(e, { count: count() });
}
/**
* Calculates the specified aggregations over the documents in the result
* set of the given query without actually downloading the documents.
*
* Using this function to perform aggregations is efficient because only the
* final aggregation values, not the documents' data, are downloaded. This
* function can perform aggregations of the documents in cases where the result
* set is prohibitively large to download entirely (thousands of documents).
*
* The result received from the server is presented, unaltered, without
* considering any local state. That is, documents in the local cache are not
* taken into consideration, neither are local modifications not yet
* synchronized with the server. Previously-downloaded results, if any, are not
* used. Every invocation of this function necessarily involves a round trip to
* the server.
*
* @param query The query whose result set is aggregated over.
* @param aggregateSpec An `AggregateSpec` object that specifies the aggregates
* to perform over the result set. The AggregateSpec specifies aliases for each
* aggregate, which can be used to retrieve the aggregate result.
* @example
* ```typescript
* const aggregateSnapshot = await getAggregateFromServer(query, {
*   countOfDocs: count(),
*   totalHours: sum('hours'),
*   averageScore: average('score')
* });
*
* const countOfDocs: number = aggregateSnapshot.data().countOfDocs;
* const totalHours: number = aggregateSnapshot.data().totalHours;
* const averageScore: number | null = aggregateSnapshot.data().averageScore;
* ```
*/ function getAggregateFromServer(e, t) {
	const n = __PRIVATE_cast(e.firestore, Firestore), r = ensureFirestoreConfigured(n), i = __PRIVATE_mapToArray(t, ((e, t) => new __PRIVATE_AggregateImpl(t, e.aggregateType, e._internalFieldPath)));
	return __PRIVATE_firestoreClientRunAggregateQuery(r, e._query, i).then(((t) => function __PRIVATE_convertToAggregateQuerySnapshot(e, t, n) {
		return new AggregateQuerySnapshot(t, new __PRIVATE_ExpUserDataWriter(e), n);
	}(n, e, t)));
}
var __PRIVATE_MemoryLocalCacheImpl = class {
	constructor(e) {
		this.kind = "memory", this._onlineComponentProvider = OnlineComponentProvider.provider, (null == e ? void 0 : e.garbageCollector) ? this._offlineComponentProvider = e.garbageCollector._offlineComponentProvider : this._offlineComponentProvider = __PRIVATE_MemoryOfflineComponentProvider.provider;
	}
	toJSON() {
		return { kind: this.kind };
	}
};
var __PRIVATE_PersistentLocalCacheImpl = class {
	constructor(e) {
		let t;
		this.kind = "persistent", (null == e ? void 0 : e.tabManager) ? (e.tabManager._initialize(e), t = e.tabManager) : (t = persistentSingleTabManager(void 0), t._initialize(e)), this._onlineComponentProvider = t._onlineComponentProvider, this._offlineComponentProvider = t._offlineComponentProvider;
	}
	toJSON() {
		return { kind: this.kind };
	}
};
var __PRIVATE_MemoryEagerGarbageCollectorImpl = class {
	constructor() {
		this.kind = "memoryEager", this._offlineComponentProvider = __PRIVATE_MemoryOfflineComponentProvider.provider;
	}
	toJSON() {
		return { kind: this.kind };
	}
};
var __PRIVATE_MemoryLruGarbageCollectorImpl = class {
	constructor(e) {
		this.kind = "memoryLru", this._offlineComponentProvider = { build: () => new __PRIVATE_LruGcMemoryOfflineComponentProvider(e) };
	}
	toJSON() {
		return { kind: this.kind };
	}
};
/**
* Creates an instance of `MemoryEagerGarbageCollector`. This is also the
* default garbage collector unless it is explicitly specified otherwise.
*/ function memoryEagerGarbageCollector() {
	return new __PRIVATE_MemoryEagerGarbageCollectorImpl();
}
/**
* Creates an instance of `MemoryLruGarbageCollector`.
*
* A target size can be specified as part of the setting parameter. The
* collector will start deleting documents once the cache size exceeds
* the given size. The default cache size is 40MB (40 * 1024 * 1024 bytes).
*/ function memoryLruGarbageCollector(e) {
	return new __PRIVATE_MemoryLruGarbageCollectorImpl(null == e ? void 0 : e.cacheSizeBytes);
}
/**
* Creates an instance of `MemoryLocalCache`. The instance can be set to
* `FirestoreSettings.cache` to tell the SDK which cache layer to use.
*/ function memoryLocalCache(e) {
	return new __PRIVATE_MemoryLocalCacheImpl(e);
}
/**
* Creates an instance of `PersistentLocalCache`. The instance can be set to
* `FirestoreSettings.cache` to tell the SDK which cache layer to use.
*
* Persistent cache cannot be used in a Node.js environment.
*/ function persistentLocalCache(e) {
	return new __PRIVATE_PersistentLocalCacheImpl(e);
}
var __PRIVATE_SingleTabManagerImpl = class {
	constructor(e) {
		this.forceOwnership = e, this.kind = "persistentSingleTab";
	}
	toJSON() {
		return { kind: this.kind };
	}
	/**
	* @internal
	*/ _initialize(e) {
		this._onlineComponentProvider = OnlineComponentProvider.provider, this._offlineComponentProvider = { build: (t) => new __PRIVATE_IndexedDbOfflineComponentProvider(t, null == e ? void 0 : e.cacheSizeBytes, this.forceOwnership) };
	}
};
var __PRIVATE_MultiTabManagerImpl = class {
	constructor() {
		this.kind = "PersistentMultipleTab";
	}
	toJSON() {
		return { kind: this.kind };
	}
	/**
	* @internal
	*/ _initialize(e) {
		this._onlineComponentProvider = OnlineComponentProvider.provider, this._offlineComponentProvider = { build: (t) => new __PRIVATE_MultiTabOfflineComponentProvider(t, null == e ? void 0 : e.cacheSizeBytes) };
	}
};
/**
* Creates an instance of `PersistentSingleTabManager`.
*
* @param settings Configures the created tab manager.
*/ function persistentSingleTabManager(e) {
	return new __PRIVATE_SingleTabManagerImpl(null == e ? void 0 : e.forceOwnership);
}
/**
* Creates an instance of `PersistentMultipleTabManager`.
*/ function persistentMultipleTabManager() {
	return new __PRIVATE_MultiTabManagerImpl();
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var ve = { maxAttempts: 5 };
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A write batch, used to perform multiple writes as a single atomic unit.
*
* A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
* provides methods for adding writes to the write batch. None of the writes
* will be committed (or visible locally) until {@link WriteBatch.commit} is
* called.
*/
var WriteBatch = class {
	/** @hideconstructor */
	constructor(e, t) {
		this._firestore = e, this._commitHandler = t, this._mutations = [], this._committed = !1, this._dataReader = __PRIVATE_newUserDataReader(e);
	}
	set(e, t, n) {
		this._verifyNotCommitted();
		const r = __PRIVATE_validateReference(e, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(r.converter, t, n), s = __PRIVATE_parseSetData(this._dataReader, "WriteBatch.set", r._key, i, null !== r.converter, n);
		return this._mutations.push(s.toMutation(r._key, Precondition.none())), this;
	}
	update(e, t, n, ...r) {
		this._verifyNotCommitted();
		const i = __PRIVATE_validateReference(e, this._firestore);
		let s;
		return s = "string" == typeof (t = getModularInstance(t)) || t instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "WriteBatch.update", i._key, t, n, r) : __PRIVATE_parseUpdateData(this._dataReader, "WriteBatch.update", i._key, t), this._mutations.push(s.toMutation(i._key, Precondition.exists(!0))), this;
	}
	/**
	* Deletes the document referred to by the provided {@link DocumentReference}.
	*
	* @param documentRef - A reference to the document to be deleted.
	* @returns This `WriteBatch` instance. Used for chaining method calls.
	*/ delete(e) {
		this._verifyNotCommitted();
		const t = __PRIVATE_validateReference(e, this._firestore);
		return this._mutations = this._mutations.concat(new __PRIVATE_DeleteMutation(t._key, Precondition.none())), this;
	}
	/**
	* Commits all of the writes in this write batch as a single atomic unit.
	*
	* The result of these writes will only be reflected in document reads that
	* occur after the returned promise resolves. If the client is offline, the
	* write fails. If you would like to see local modifications or buffer writes
	* until the client is online, use the full Firestore SDK.
	*
	* @returns A `Promise` resolved once all of the writes in the batch have been
	* successfully written to the backend as an atomic unit (note that it won't
	* resolve while you're offline).
	*/ commit() {
		return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
	}
	_verifyNotCommitted() {
		if (this._committed) throw new FirestoreError(D.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
	}
};
function __PRIVATE_validateReference(e, t) {
	if ((e = getModularInstance(e)).firestore !== t) throw new FirestoreError(D.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
	return e;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A reference to a transaction.
*
* The `Transaction` object passed to a transaction's `updateFunction` provides
* the methods to read and write data within the transaction context. See
* {@link runTransaction}.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A reference to a transaction.
*
* The `Transaction` object passed to a transaction's `updateFunction` provides
* the methods to read and write data within the transaction context. See
* {@link runTransaction}.
*/
var Transaction = class extends class Transaction$1 {
	/** @hideconstructor */
	constructor(e, t) {
		this._firestore = e, this._transaction = t, this._dataReader = __PRIVATE_newUserDataReader(e);
	}
	/**
	* Reads the document referenced by the provided {@link DocumentReference}.
	*
	* @param documentRef - A reference to the document to be read.
	* @returns A `DocumentSnapshot` with the read data.
	*/ get(e) {
		const t = __PRIVATE_validateReference(e, this._firestore), n = new __PRIVATE_LiteUserDataWriter(this._firestore);
		return this._transaction.lookup([t._key]).then(((e) => {
			if (!e || 1 !== e.length) return fail();
			const r = e[0];
			if (r.isFoundDocument()) return new DocumentSnapshot$1(this._firestore, n, r.key, r, t.converter);
			if (r.isNoDocument()) return new DocumentSnapshot$1(this._firestore, n, t._key, null, t.converter);
			throw fail();
		}));
	}
	set(e, t, n) {
		const r = __PRIVATE_validateReference(e, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(r.converter, t, n), s = __PRIVATE_parseSetData(this._dataReader, "Transaction.set", r._key, i, null !== r.converter, n);
		return this._transaction.set(r._key, s), this;
	}
	update(e, t, n, ...r) {
		const i = __PRIVATE_validateReference(e, this._firestore);
		let s;
		return s = "string" == typeof (t = getModularInstance(t)) || t instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "Transaction.update", i._key, t, n, r) : __PRIVATE_parseUpdateData(this._dataReader, "Transaction.update", i._key, t), this._transaction.update(i._key, s), this;
	}
	/**
	* Deletes the document referred to by the provided {@link DocumentReference}.
	*
	* @param documentRef - A reference to the document to be deleted.
	* @returns This `Transaction` instance. Used for chaining method calls.
	*/ delete(e) {
		const t = __PRIVATE_validateReference(e, this._firestore);
		return this._transaction.delete(t._key), this;
	}
} {
	/** @hideconstructor */
	constructor(e, t) {
		super(e, t), this._firestore = e;
	}
	/**
	* Reads the document referenced by the provided {@link DocumentReference}.
	*
	* @param documentRef - A reference to the document to be read.
	* @returns A `DocumentSnapshot` with the read data.
	*/ get(e) {
		const t = __PRIVATE_validateReference(e, this._firestore), n = new __PRIVATE_ExpUserDataWriter(this._firestore);
		return super.get(e).then(((e) => new DocumentSnapshot(this._firestore, n, t._key, e._document, new SnapshotMetadata(!1, !1), t.converter)));
	}
};
/**
* Executes the given `updateFunction` and then attempts to commit the changes
* applied within the transaction. If any document read within the transaction
* has changed, Cloud Firestore retries the `updateFunction`. If it fails to
* commit after 5 attempts, the transaction fails.
*
* The maximum number of writes allowed in a single transaction is 500.
*
* @param firestore - A reference to the Firestore database to run this
* transaction against.
* @param updateFunction - The function to execute within the transaction
* context.
* @param options - An options object to configure maximum number of attempts to
* commit.
* @returns If the transaction completed successfully or was explicitly aborted
* (the `updateFunction` returned a failed promise), the promise returned by the
* `updateFunction `is returned here. Otherwise, if the transaction failed, a
* rejected promise with the corresponding failure error is returned.
*/ function runTransaction(e, t, n) {
	e = __PRIVATE_cast(e, Firestore);
	const r = Object.assign(Object.assign({}, ve), n);
	(function __PRIVATE_validateTransactionOptions(e) {
		if (e.maxAttempts < 1) throw new FirestoreError(D.INVALID_ARGUMENT, "Max attempts must be at least 1");
	})(r);
	return function __PRIVATE_firestoreClientTransaction(e, t, n) {
		const r = new __PRIVATE_Deferred();
		return e.asyncQueue.enqueueAndForget((async () => {
			const i = await __PRIVATE_getDatastore(e);
			new __PRIVATE_TransactionRunner(e.asyncQueue, i, n, t, r).au();
		})), r.promise;
	}(ensureFirestoreConfigured(e), ((n) => t(new Transaction(e, n))), r);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
* {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
*/ function deleteField() {
	return new __PRIVATE_DeleteFieldValueImpl("deleteField");
}
/**
* Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
* include a server-generated timestamp in the written data.
*/ function serverTimestamp() {
	return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp");
}
/**
* Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
* @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
* value that already exists on the server. Each specified element that doesn't
* already exist in the array will be added to the end. If the field being
* modified is not already an array it will be overwritten with an array
* containing exactly the specified elements.
*
* @param elements - The elements to union into the array.
* @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
* `updateDoc()`.
*/ function arrayUnion(...e) {
	return new __PRIVATE_ArrayUnionFieldValueImpl("arrayUnion", e);
}
/**
* Returns a special value that can be used with {@link (setDoc:1)} or {@link
* updateDoc:1} that tells the server to remove the given elements from any
* array value that already exists on the server. All instances of each element
* specified will be removed from the array. If the field being modified is not
* already an array it will be overwritten with an empty array.
*
* @param elements - The elements to remove from the array.
* @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
* `updateDoc()`
*/ function arrayRemove(...e) {
	return new __PRIVATE_ArrayRemoveFieldValueImpl("arrayRemove", e);
}
/**
* Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
* @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
* the given value.
*
* If either the operand or the current field value uses floating point
* precision, all arithmetic follows IEEE 754 semantics. If both values are
* integers, values outside of JavaScript's safe number range
* (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
* precision loss. Furthermore, once processed by the Firestore backend, all
* integer operations are capped between -2^63 and 2^63-1.
*
* If the current field value is not of type `number`, or if the field does not
* yet exist, the transformation sets the field to the given value.
*
* @param n - The value to increment by.
* @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
* `updateDoc()`
*/ function increment(e) {
	return new __PRIVATE_NumericIncrementFieldValueImpl("increment", e);
}
/**
* Creates a new `VectorValue` constructed with a copy of the given array of numbers.
*
* @param values - Create a `VectorValue` instance with a copy of this array of numbers.
*
* @returns A new `VectorValue` constructed with a copy of the given array of numbers.
*/ function vector(e) {
	return new VectorValue(e);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Creates a write batch, used for performing multiple writes as a single
* atomic operation. The maximum number of writes allowed in a single {@link WriteBatch}
* is 500.
*
* Unlike transactions, write batches are persisted offline and therefore are
* preferable when you don't need to condition your writes on read data.
*
* @returns A {@link WriteBatch} that can be used to atomically execute multiple
* writes.
*/ function writeBatch(e) {
	return ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), new WriteBatch(e, ((t) => executeWrite(e, t)));
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function setIndexConfiguration(e, t) {
	const n = ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore));
	if (!n._uninitializedComponentsProvider || "memory" === n._uninitializedComponentsProvider._offline.kind) return __PRIVATE_logWarn("Cannot enable indexes when persistence is disabled"), Promise.resolve();
	return __PRIVATE_firestoreClientSetIndexConfiguration(n, function __PRIVATE_parseIndexes(e) {
		const t = "string" == typeof e ? function __PRIVATE_tryParseJson(e) {
			try {
				return JSON.parse(e);
			} catch (e) {
				throw new FirestoreError(D.INVALID_ARGUMENT, "Failed to parse JSON: " + (null == e ? void 0 : e.message));
			}
		}(e) : e, n = [];
		if (Array.isArray(t.indexes)) for (const e of t.indexes) {
			const t = __PRIVATE_tryGetString(e, "collectionGroup"), r = [];
			if (Array.isArray(e.fields)) for (const t of e.fields) {
				const e = __PRIVATE_fieldPathFromDotSeparatedString("setIndexConfiguration", __PRIVATE_tryGetString(t, "fieldPath"));
				"CONTAINS" === t.arrayConfig ? r.push(new IndexSegment(e, 2)) : "ASCENDING" === t.order ? r.push(new IndexSegment(e, 0)) : "DESCENDING" === t.order && r.push(new IndexSegment(e, 1));
			}
			n.push(new FieldIndex(FieldIndex.UNKNOWN_ID, t, r, IndexState.empty()));
		}
		return n;
	}(t));
}
function __PRIVATE_tryGetString(e, t) {
	if ("string" != typeof e[t]) throw new FirestoreError(D.INVALID_ARGUMENT, "Missing string value for: " + t);
	return e[t];
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `PersistentCacheIndexManager` for configuring persistent cache indexes used
* for local query execution.
*
* To use, call `getPersistentCacheIndexManager()` to get an instance.
*/ var PersistentCacheIndexManager = class {
	/** @hideconstructor */
	constructor(e) {
		this._firestore = e, this.type = "PersistentCacheIndexManager";
	}
};
/**
* Returns the PersistentCache Index Manager used by the given `Firestore`
* object.
*
* @return The `PersistentCacheIndexManager` instance, or `null` if local
* persistent storage is not in use.
*/ function getPersistentCacheIndexManager(e) {
	var t;
	e = __PRIVATE_cast(e, Firestore);
	const n = Ce.get(e);
	if (n) return n;
	if ("persistent" !== (null === (t = ensureFirestoreConfigured(e)._uninitializedComponentsProvider) || void 0 === t ? void 0 : t._offline.kind)) return null;
	const r = new PersistentCacheIndexManager(e);
	return Ce.set(e, r), r;
}
/**
* Enables the SDK to create persistent cache indexes automatically for local
* query execution when the SDK believes cache indexes can help improve
* performance.
*
* This feature is disabled by default.
*/ function enablePersistentCacheIndexAutoCreation(e) {
	__PRIVATE_setPersistentCacheIndexAutoCreationEnabled(e, !0);
}
/**
* Stops creating persistent cache indexes automatically for local query
* execution. The indexes which have been created by calling
* `enablePersistentCacheIndexAutoCreation()` still take effect.
*/ function disablePersistentCacheIndexAutoCreation(e) {
	__PRIVATE_setPersistentCacheIndexAutoCreationEnabled(e, !1);
}
/**
* Removes all persistent cache indexes.
*
* Please note this function will also deletes indexes generated by
* `setIndexConfiguration()`, which is deprecated.
*/ function deleteAllPersistentCacheIndexes(e) {
	__PRIVATE_firestoreClientDeleteAllFieldIndexes(ensureFirestoreConfigured(e._firestore)).then(((e) => __PRIVATE_logDebug("deleting all persistent cache indexes succeeded"))).catch(((e) => __PRIVATE_logWarn("deleting all persistent cache indexes failed", e)));
}
function __PRIVATE_setPersistentCacheIndexAutoCreationEnabled(e, t) {
	__PRIVATE_firestoreClientSetPersistentCacheIndexAutoCreationEnabled(ensureFirestoreConfigured(e._firestore), t).then(((e) => __PRIVATE_logDebug(`setting persistent cache index auto creation isEnabled=${t} succeeded`))).catch(((e) => __PRIVATE_logWarn(`setting persistent cache index auto creation isEnabled=${t} failed`, e)));
}
/**
* Maps `Firestore` instances to their corresponding
* `PersistentCacheIndexManager` instances.
*
* Use a `WeakMap` so that the mapping will be automatically dropped when the
* `Firestore` instance is garbage collected. This emulates a private member
* as described in https://goo.gle/454yvug.
*/ var Ce = /* @__PURE__ */ new WeakMap();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @internal
* @private
*
* This function is for internal use only.
*
* Returns the `QueryTarget` representation of the given query. Returns `null`
* if the Firestore client associated with the given query has not been
* initialized or has been terminated.
*
* @param query - The Query to convert to proto representation.
*/
function _internalQueryToProtoQueryTarget(e) {
	var t;
	const n = null === (t = ensureFirestoreConfigured(__PRIVATE_cast(e.firestore, Firestore))._onlineComponents) || void 0 === t ? void 0 : t.datastore.serializer;
	return void 0 === n ? null : __PRIVATE_toQueryTarget(n, __PRIVATE_queryToTarget(e._query))._t;
}
/**
* @internal
* @private
*
* This function is for internal use only.
*
* Returns `RunAggregationQueryRequest` which contains the proto representation
* of the given aggregation query request. Returns null if the Firestore client
* associated with the given query has not been initialized or has been
* terminated.
*
* @param query - The Query to convert to proto representation.
* @param aggregateSpec - The set of aggregations and their aliases.
*/ function _internalAggregationQueryToProtoRunAggregationQueryRequest(e, t) {
	var n;
	const r = __PRIVATE_mapToArray(t, ((e, t) => new __PRIVATE_AggregateImpl(t, e.aggregateType, e._internalFieldPath))), i = null === (n = ensureFirestoreConfigured(__PRIVATE_cast(e.firestore, Firestore))._onlineComponents) || void 0 === n ? void 0 : n.datastore.serializer;
	return void 0 === i ? null : __PRIVATE_toRunAggregationQueryRequest(i, __PRIVATE_queryToAggregateTarget(e._query), r, !0).request;
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Testing hooks for use by Firestore's integration test suite to reach into the
* SDK internals to validate logic and behavior that is not visible from the
* public API surface.
*
* @internal
*/ var TestingHooks = class {
	constructor() {
		throw new Error("instances of this class should not be created");
	}
	/**
	* Registers a callback to be notified when an existence filter mismatch
	* occurs in the Watch listen stream.
	*
	* The relative order in which callbacks are notified is unspecified; do not
	* rely on any particular ordering. If a given callback is registered multiple
	* times then it will be notified multiple times, once per registration.
	*
	* @param callback the callback to invoke upon existence filter mismatch.
	*
	* @return a function that, when called, unregisters the given callback; only
	* the first invocation of the returned function does anything; all subsequent
	* invocations do nothing.
	*/ static onExistenceFilterMismatch(e) {
		return __PRIVATE_TestingHooksSpiImpl.instance.onExistenceFilterMismatch(e);
	}
};
/**
* The implementation of `TestingHooksSpi`.
*/ var __PRIVATE_TestingHooksSpiImpl = class __PRIVATE_TestingHooksSpiImpl {
	constructor() {
		this.Uu = /* @__PURE__ */ new Map();
	}
	static get instance() {
		return Fe || (Fe = new __PRIVATE_TestingHooksSpiImpl(), function __PRIVATE_setTestingHooksSpi(e) {
			if (Pe) throw new Error("a TestingHooksSpi instance is already set");
			Pe = e;
		}(Fe)), Fe;
	}
	et(e) {
		this.Uu.forEach(((t) => t(e)));
	}
	onExistenceFilterMismatch(e) {
		const t = Symbol(), n = this.Uu;
		return n.set(t, e), () => n.delete(t);
	}
};
var Fe = null;
/**
* Cloud Firestore
*
* @packageDocumentation
*/ (function __PRIVATE_registerFirestore(e, t = !0) {
	(function __PRIVATE_setSDKVersion(e) {
		S = e;
	})(SDK_VERSION), _registerComponent(new Component("firestore", ((e, { instanceIdentifier: n, options: r }) => {
		const i = e.getProvider("app").getImmediate(), s = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(e.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(e.getProvider("app-check-internal")), function __PRIVATE_databaseIdFromApp(e, t) {
			if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new FirestoreError(D.INVALID_ARGUMENT, "\"projectId\" not provided in firebase.initializeApp.");
			return new DatabaseId(e.options.projectId, t);
		}(i, n), i);
		return r = Object.assign({ useFetchStreams: t }, r), s._setSettings(r), s;
	}), "PUBLIC").setMultipleInstances(!0)), registerVersion(w, "4.7.3", e), registerVersion(w, "4.7.3", "esm2017");
})();
//#endregion
export { AbstractUserDataWriter, AggregateField, AggregateQuerySnapshot, Bytes, Se as CACHE_SIZE_UNLIMITED, CollectionReference, DocumentReference, DocumentSnapshot, FieldPath, FieldValue, Firestore, FirestoreError, GeoPoint, LoadBundleTask, PersistentCacheIndexManager, Query, QueryCompositeFilterConstraint, QueryConstraint, QueryDocumentSnapshot, QueryEndAtConstraint, QueryFieldFilterConstraint, QueryLimitConstraint, QueryOrderByConstraint, QuerySnapshot, QueryStartAtConstraint, SnapshotMetadata, Timestamp, Transaction, VectorValue, WriteBatch, __PRIVATE_AutoId as _AutoId, ByteString as _ByteString, DatabaseId as _DatabaseId, DocumentKey as _DocumentKey, __PRIVATE_EmptyAppCheckTokenProvider as _EmptyAppCheckTokenProvider, __PRIVATE_EmptyAuthCredentialsProvider as _EmptyAuthCredentialsProvider, FieldPath$1 as _FieldPath, TestingHooks as _TestingHooks, __PRIVATE_cast as _cast, __PRIVATE_debugAssert as _debugAssert, _internalAggregationQueryToProtoRunAggregationQueryRequest, _internalQueryToProtoQueryTarget, __PRIVATE_isBase64Available as _isBase64Available, __PRIVATE_logWarn as _logWarn, __PRIVATE_validateIsNotUsedTogether as _validateIsNotUsedTogether, addDoc, aggregateFieldEqual, aggregateQuerySnapshotEqual, and, arrayRemove, arrayUnion, average, clearIndexedDbPersistence, collection, collectionGroup, connectFirestoreEmulator, count, deleteAllPersistentCacheIndexes, deleteDoc, deleteField, disableNetwork, disablePersistentCacheIndexAutoCreation, doc, documentId, enableIndexedDbPersistence, enableMultiTabIndexedDbPersistence, enableNetwork, enablePersistentCacheIndexAutoCreation, endAt, endBefore, ensureFirestoreConfigured, executeWrite, getAggregateFromServer, getCountFromServer, getDoc, getDocFromCache, getDocFromServer, getDocs, getDocsFromCache, getDocsFromServer, getFirestore, getPersistentCacheIndexManager, increment, initializeFirestore, limit, limitToLast, loadBundle, memoryEagerGarbageCollector, memoryLocalCache, memoryLruGarbageCollector, namedQuery, onSnapshot, onSnapshotsInSync, or, orderBy, persistentLocalCache, persistentMultipleTabManager, persistentSingleTabManager, query, queryEqual, refEqual, runTransaction, serverTimestamp, setDoc, setIndexConfiguration, setLogLevel, snapshotEqual, startAfter, startAt, sum, terminate, updateDoc, vector, waitForPendingWrites, where, writeBatch };

//# sourceMappingURL=firebase_firestore.js.map