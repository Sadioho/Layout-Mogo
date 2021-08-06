if (function (t, e) {
        var n, o, i = typeof e,
            r = t.location,
            s = t.document,
            a = s.documentElement,
            l = t.jQuery,
            c = t.$,
            u = {},
            d = [],
            f = "1.10.2",
            p = d.concat,
            h = d.push,
            g = d.slice,
            m = d.indexOf,
            v = u.toString,
            y = u.hasOwnProperty,
            b = f.trim,
            x = function (t, e) {
                return new x.fn.init(t, e, o)
            },
            w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            T = /\S+/g,
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            S = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            E = /^[\],:{}\s]*$/,
            k = /(?:^|:|,)(?:\s*\[)+/g,
            A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            P = /^-ms-/,
            D = /-([\da-z])/gi,
            L = function (t, e) {
                return e.toUpperCase()
            },
            j = function (t) {
                (s.addEventListener || "load" === t.type || "complete" === s.readyState) && (I(), x.ready())
            },
            I = function () {
                s.addEventListener ? (s.removeEventListener("DOMContentLoaded", j, !1), t.removeEventListener("load", j, !1)) : (s.detachEvent("onreadystatechange", j), t.detachEvent("onload", j))
            };

        function F(t) {
            var e = t.length,
                n = x.type(t);
            return !x.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
        }
        x.fn = x.prototype = {
                jquery: f,
                constructor: x,
                init: function (t, n, o) {
                    var i, r;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : $.exec(t)) || !i[1] && n) return !n || n.jquery ? (n || o).find(t) : this.constructor(n).find(t);
                        if (i[1]) {
                            if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), S.test(i[1]) && x.isPlainObject(n))
                                for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                            return this
                        }
                        if ((r = s.getElementById(i[2])) && r.parentNode) {
                            if (r.id !== i[2]) return o.find(t);
                            this.length = 1, this[0] = r
                        }
                        return this.context = s, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : x.isFunction(t) ? o.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), x.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function () {
                    return g.call(this)
                },
                get: function (t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function (t) {
                    var e = x.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function (t, e) {
                    return x.each(this, t, e)
                },
                ready: function (t) {
                    return x.ready.promise().done(t), this
                },
                slice: function () {
                    return this.pushStack(g.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                map: function (t) {
                    return this.pushStack(x.map(this, (function (e, n) {
                        return t.call(e, n, e)
                    })))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: h,
                sort: [].sort,
                splice: [].splice
            }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
                var t, n, o, i, r, s, a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || x.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)
                    if (null != (r = arguments[l]))
                        for (i in r) t = a[i], a !== (o = r[i]) && (u && o && (x.isPlainObject(o) || (n = x.isArray(o))) ? (n ? (n = !1, s = t && x.isArray(t) ? t : []) : s = t && x.isPlainObject(t) ? t : {}, a[i] = x.extend(u, s, o)) : o !== e && (a[i] = o));
                return a
            }, x.extend({
                expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
                noConflict: function (e) {
                    return t.$ === x && (t.$ = c), e && t.jQuery === x && (t.jQuery = l), x
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (t) {
                    t ? x.readyWait++ : x.ready(!0)
                },
                ready: function (t) {
                    if (!0 === t ? !--x.readyWait : !x.isReady) {
                        if (!s.body) return setTimeout(x.ready);
                        x.isReady = !0, !0 !== t && --x.readyWait > 0 || (n.resolveWith(s, [x]), x.fn.trigger && x(s).trigger("ready").off("ready"))
                    }
                },
                isFunction: function (t) {
                    return "function" === x.type(t)
                },
                isArray: Array.isArray || function (t) {
                    return "array" === x.type(t)
                },
                isWindow: function (t) {
                    return null != t && t == t.window
                },
                isNumeric: function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[v.call(t)] || "object" : typeof t
                },
                isPlainObject: function (t) {
                    var n;
                    if (!t || "object" !== x.type(t) || t.nodeType || x.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !y.call(t, "constructor") && !y.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    if (x.support.ownLast)
                        for (n in t) return y.call(t, n);
                    for (n in t);
                    return n === e || y.call(t, n)
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function (t) {
                    throw Error(t)
                },
                parseHTML: function (t, e, n) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (n = e, e = !1), e = e || s;
                    var o = S.exec(t),
                        i = !n && [];
                    return o ? [e.createElement(o[1])] : (o = x.buildFragment([t], e, i), i && x(i).remove(), x.merge([], o.childNodes))
                },
                parseJSON: function (n) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && ((n = x.trim(n)) && E.test(n.replace(A, "@").replace(N, "]").replace(k, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), e)
                },
                parseXML: function (n) {
                    var o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        t.DOMParser ? o = (new DOMParser).parseFromString(n, "text/xml") : ((o = new ActiveXObject("Microsoft.XMLDOM")).async = "false", o.loadXML(n))
                    } catch (t) {
                        o = e
                    }
                    return o && o.documentElement && !o.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), o
                },
                noop: function () {},
                globalEval: function (e) {
                    e && x.trim(e) && (t.execScript || function (e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function (t) {
                    return t.replace(P, "ms-").replace(D, L)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e, n) {
                    var o = 0,
                        i = t.length,
                        r = F(t);
                    if (n) {
                        if (r)
                            for (; i > o && !1 !== e.apply(t[o], n); o++);
                        else
                            for (o in t)
                                if (!1 === e.apply(t[o], n)) break
                    } else if (r)
                        for (; i > o && !1 !== e.call(t[o], o, t[o]); o++);
                    else
                        for (o in t)
                            if (!1 === e.call(t[o], o, t[o])) break;
                    return t
                },
                trim: b && !b.call("\ufeff ") ? function (t) {
                    return null == t ? "" : b.call(t)
                } : function (t) {
                    return null == t ? "" : (t + "").replace(C, "")
                },
                makeArray: function (t, e) {
                    var n = e || [];
                    return null != t && (F(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : h.call(n, t)), n
                },
                inArray: function (t, e, n) {
                    var o;
                    if (e) {
                        if (m) return m.call(e, t, n);
                        for (o = e.length, n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
                            if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function (t, n) {
                    var o = n.length,
                        i = t.length,
                        r = 0;
                    if ("number" == typeof o)
                        for (; o > r; r++) t[i++] = n[r];
                    else
                        for (; n[r] !== e;) t[i++] = n[r++];
                    return t.length = i, t
                },
                grep: function (t, e, n) {
                    var o = [],
                        i = 0,
                        r = t.length;
                    for (n = !!n; r > i; i++) n !== !!e(t[i], i) && o.push(t[i]);
                    return o
                },
                map: function (t, e, n) {
                    var o, i = 0,
                        r = t.length,
                        s = [];
                    if (F(t))
                        for (; r > i; i++) null != (o = e(t[i], i, n)) && (s[s.length] = o);
                    else
                        for (i in t) null != (o = e(t[i], i, n)) && (s[s.length] = o);
                    return p.apply([], s)
                },
                guid: 1,
                proxy: function (t, n) {
                    var o, i, r;
                    return "string" == typeof n && (r = t[n], n = t, t = r), x.isFunction(t) ? (o = g.call(arguments, 2), (i = function () {
                        return t.apply(n || this, o.concat(g.call(arguments)))
                    }).guid = t.guid = t.guid || x.guid++, i) : e
                },
                access: function (t, n, o, i, r, s, a) {
                    var l = 0,
                        c = t.length,
                        u = null == o;
                    if ("object" === x.type(o))
                        for (l in r = !0, o) x.access(t, n, l, o[l], !0, s, a);
                    else if (i !== e && (r = !0, x.isFunction(i) || (a = !0), u && (a ? (n.call(t, i), n = null) : (u = n, n = function (t, e, n) {
                            return u.call(x(t), n)
                        })), n))
                        for (; c > l; l++) n(t[l], o, a ? i : i.call(t[l], l, n(t[l], o)));
                    return r ? t : u ? n.call(t) : c ? n(t[0], o) : s
                },
                now: function () {
                    return (new Date).getTime()
                },
                swap: function (t, e, n, o) {
                    var i, r, s = {};
                    for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                    for (r in i = n.apply(t, o || []), e) t.style[r] = s[r];
                    return i
                }
            }), x.ready.promise = function (e) {
                if (!n)
                    if (n = x.Deferred(), "complete" === s.readyState) setTimeout(x.ready);
                    else if (s.addEventListener) s.addEventListener("DOMContentLoaded", j, !1), t.addEventListener("load", j, !1);
                else {
                    s.attachEvent("onreadystatechange", j), t.attachEvent("onload", j);
                    var o = !1;
                    try {
                        o = null == t.frameElement && s.documentElement
                    } catch (t) {}
                    o && o.doScroll && function t() {
                        if (!x.isReady) {
                            try {
                                o.doScroll("left")
                            } catch (e) {
                                return setTimeout(t, 50)
                            }
                            I(), x.ready()
                        }
                    }()
                }
                return n.promise(e)
            }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function (t, e) {
                u["[object " + e + "]"] = e.toLowerCase()
            })), o = x(s),
            function (t, e) {
                var n, o, i, r, s, a, l, c, u, d, f, p, h, g, m, v, y, b = "sizzle" + -new Date,
                    w = t.document,
                    T = 0,
                    C = 0,
                    $ = st(),
                    S = st(),
                    E = st(),
                    k = !1,
                    A = function (t, e) {
                        return t === e ? (k = !0, 0) : 0
                    },
                    N = typeof e,
                    P = 1 << 31,
                    D = {}.hasOwnProperty,
                    L = [],
                    j = L.pop,
                    I = L.push,
                    F = L.push,
                    O = L.slice,
                    H = L.indexOf || function (t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    _ = z.replace("w", "w#"),
                    q = "\\[" + R + "*(" + z + ")" + R + "*(?:([*^$|!~]?=)" + R + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + R + "*\\]",
                    B = ":(" + z + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + q.replace(3, 8) + ")*)|.*)\\)|)",
                    W = RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    X = RegExp("^" + R + "*," + R + "*"),
                    U = RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    V = RegExp(R + "*[+~]"),
                    Y = RegExp("=" + R + "*([^\\]'\"]*)" + R + "*\\]", "g"),
                    Q = RegExp(B),
                    Z = RegExp("^" + _ + "$"),
                    K = {
                        ID: RegExp("^#(" + z + ")"),
                        CLASS: RegExp("^\\.(" + z + ")"),
                        TAG: RegExp("^(" + z.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + q),
                        PSEUDO: RegExp("^" + B),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + M + ")$", "i"),
                        needsContext: RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                    },
                    G = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /^(?:input|select|textarea|button)$/i,
                    et = /^h\d$/i,
                    nt = /'|\\/g,
                    ot = RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                    it = function (t, e, n) {
                        var o = "0x" + e - 65536;
                        return o != o || n ? e : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)
                    };
                try {
                    F.apply(L = O.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
                } catch (t) {
                    F = {
                        apply: L.length ? function (t, e) {
                            I.apply(t, O.call(e))
                        } : function (t, e) {
                            for (var n = t.length, o = 0; t[n++] = e[o++];);
                            t.length = n - 1
                        }
                    }
                }

                function rt(t, e, n, i) {
                    var r, s, a, l, c, u, p, m, v, x;
                    if ((e ? e.ownerDocument || e : w) !== f && d(e), n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (l = (e = e || f).nodeType) && 9 !== l) return [];
                    if (h && !i) {
                        if (r = J.exec(t))
                            if (a = r[1]) {
                                if (9 === l) {
                                    if (!(s = e.getElementById(a)) || !s.parentNode) return n;
                                    if (s.id === a) return n.push(s), n
                                } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(a)) && y(e, s) && s.id === a) return n.push(s), n
                            } else {
                                if (r[2]) return F.apply(n, e.getElementsByTagName(t)), n;
                                if ((a = r[3]) && o.getElementsByClassName && e.getElementsByClassName) return F.apply(n, e.getElementsByClassName(a)), n
                            } if (o.qsa && (!g || !g.test(t))) {
                            if (m = p = b, v = e, x = 9 === l && t, 1 === l && "object" !== e.nodeName.toLowerCase()) {
                                for (u = gt(t), (p = e.getAttribute("id")) ? m = p.replace(nt, "\\$&") : e.setAttribute("id", m), m = "[id='" + m + "'] ", c = u.length; c--;) u[c] = m + mt(u[c]);
                                v = V.test(t) && e.parentNode || e, x = u.join(",")
                            }
                            if (x) try {
                                return F.apply(n, v.querySelectorAll(x)), n
                            } catch (t) {} finally {
                                p || e.removeAttribute("id")
                            }
                        }
                    }
                    return Ct(t.replace(W, "$1"), e, n, i)
                }

                function st() {
                    var t = [];
                    return function e(n, o) {
                        return t.push(n += " ") > r.cacheLength && delete e[t.shift()], e[n] = o
                    }
                }

                function at(t) {
                    return t[b] = !0, t
                }

                function lt(t) {
                    var e = f.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ct(t, e) {
                    for (var n = t.split("|"), o = t.length; o--;) r.attrHandle[n[o]] = e
                }

                function ut(t, e) {
                    var n = e && t,
                        o = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || P) - (~t.sourceIndex || P);
                    if (o) return o;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function dt(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function ft(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function pt(t) {
                    return at((function (e) {
                        return e = +e, at((function (n, o) {
                            for (var i, r = t([], n.length, e), s = r.length; s--;) n[i = r[s]] && (n[i] = !(o[i] = n[i]))
                        }))
                    }))
                }
                for (n in a = rt.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, o = rt.support = {}, d = rt.setDocument = function (t) {
                        var n = t ? t.ownerDocument || t : w,
                            i = n.defaultView;
                        return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, p = n.documentElement, h = !a(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", (function () {
                            d()
                        })), o.attributes = lt((function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        })), o.getElementsByTagName = lt((function (t) {
                            return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                        })), o.getElementsByClassName = lt((function (t) {
                            return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                        })), o.getById = lt((function (t) {
                            return p.appendChild(t).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                        })), o.getById ? (r.find.ID = function (t, e) {
                            if (typeof e.getElementById !== N && h) {
                                var n = e.getElementById(t);
                                return n && n.parentNode ? [n] : []
                            }
                        }, r.filter.ID = function (t) {
                            var e = t.replace(ot, it);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete r.find.ID, r.filter.ID = function (t) {
                            var e = t.replace(ot, it);
                            return function (t) {
                                var n = typeof t.getAttributeNode !== N && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }), r.find.TAG = o.getElementsByTagName ? function (t, n) {
                            return typeof n.getElementsByTagName !== N ? n.getElementsByTagName(t) : e
                        } : function (t, e) {
                            var n, o = [],
                                i = 0,
                                r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                                return o
                            }
                            return r
                        }, r.find.CLASS = o.getElementsByClassName && function (t, n) {
                            return typeof n.getElementsByClassName !== N && h ? n.getElementsByClassName(t) : e
                        }, m = [], g = [], (o.qsa = G.test(n.querySelectorAll)) && (lt((function (t) {
                            t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + M + ")"), t.querySelectorAll(":checked").length || g.push(":checked")
                        })), lt((function (t) {
                            var e = n.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (o.matchesSelector = G.test(v = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt((function (t) {
                            o.disconnectedMatch = v.call(t, "div"), v.call(t, "[s!='']:x"), m.push("!=", B)
                        })), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), y = G.test(p.contains) || p.compareDocumentPosition ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                o = e && e.parentNode;
                            return t === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, A = p.compareDocumentPosition ? function (t, e) {
                            if (t === e) return k = !0, 0;
                            var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                            return i ? 1 & i || !o.sortDetached && e.compareDocumentPosition(t) === i ? t === n || y(w, t) ? -1 : e === n || y(w, e) ? 1 : u ? H.call(u, t) - H.call(u, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                        } : function (t, e) {
                            var o, i = 0,
                                r = t.parentNode,
                                s = e.parentNode,
                                a = [t],
                                l = [e];
                            if (t === e) return k = !0, 0;
                            if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : u ? H.call(u, t) - H.call(u, e) : 0;
                            if (r === s) return ut(t, e);
                            for (o = t; o = o.parentNode;) a.unshift(o);
                            for (o = e; o = o.parentNode;) l.unshift(o);
                            for (; a[i] === l[i];) i++;
                            return i ? ut(a[i], l[i]) : a[i] === w ? -1 : l[i] === w ? 1 : 0
                        }, n) : f
                    }, rt.matches = function (t, e) {
                        return rt(t, null, null, e)
                    }, rt.matchesSelector = function (t, e) {
                        if ((t.ownerDocument || t) !== f && d(t), e = e.replace(Y, "='$1']"), !(!o.matchesSelector || !h || m && m.test(e) || g && g.test(e))) try {
                            var n = v.call(t, e);
                            if (n || o.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                        } catch (t) {}
                        return rt(e, f, null, [t]).length > 0
                    }, rt.contains = function (t, e) {
                        return (t.ownerDocument || t) !== f && d(t), y(t, e)
                    }, rt.attr = function (t, n) {
                        (t.ownerDocument || t) !== f && d(t);
                        var i = r.attrHandle[n.toLowerCase()],
                            s = i && D.call(r.attrHandle, n.toLowerCase()) ? i(t, n, !h) : e;
                        return s === e ? o.attributes || !h ? t.getAttribute(n) : (s = t.getAttributeNode(n)) && s.specified ? s.value : null : s
                    }, rt.error = function (t) {
                        throw Error("Syntax error, unrecognized expression: " + t)
                    }, rt.uniqueSort = function (t) {
                        var e, n = [],
                            i = 0,
                            r = 0;
                        if (k = !o.detectDuplicates, u = !o.sortStable && t.slice(0), t.sort(A), k) {
                            for (; e = t[r++];) e === t[r] && (i = n.push(r));
                            for (; i--;) t.splice(n[i], 1)
                        }
                        return t
                    }, s = rt.getText = function (t) {
                        var e, n = "",
                            o = 0,
                            i = t.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += s(t)
                            } else if (3 === i || 4 === i) return t.nodeValue
                        } else
                            for (; e = t[o]; o++) n += s(e);
                        return n
                    }, (r = rt.selectors = {
                        cacheLength: 50,
                        createPseudo: at,
                        match: K,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(ot, it), t[3] = (t[4] || t[5] || "").replace(ot, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                            },
                            PSEUDO: function (t) {
                                var n, o = !t[5] && t[2];
                                return K.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : o && Q.test(o) && (n = gt(o, !0)) && (n = o.indexOf(")", o.length - n) - o.length) && (t[0] = t[0].slice(0, n), t[2] = o.slice(0, n)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(ot, it).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function (t) {
                                var e = $[t + " "];
                                return e || (e = RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && $(t, (function (t) {
                                    return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== N && t.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function (t, e, n) {
                                return function (o) {
                                    var i = rt.attr(o, t);
                                    return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (t, e, n, o, i) {
                                var r = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === o && 0 === i ? function (t) {
                                    return !!t.parentNode
                                } : function (e, n, l) {
                                    var c, u, d, f, p, h, g = r !== s ? "nextSibling" : "previousSibling",
                                        m = e.parentNode,
                                        v = a && e.nodeName.toLowerCase(),
                                        y = !l && !a;
                                    if (m) {
                                        if (r) {
                                            for (; g;) {
                                                for (d = e; d = d[g];)
                                                    if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                h = g = "only" === t && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                            for (p = (c = (u = m[b] || (m[b] = {}))[t] || [])[0] === T && c[1], f = c[0] === T && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                                if (1 === d.nodeType && ++f && d === e) {
                                                    u[t] = [T, p, f];
                                                    break
                                                }
                                        } else if (y && (c = (e[b] || (e[b] = {}))[t]) && c[0] === T) f = c[1];
                                        else
                                            for (;
                                                (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[b] || (d[b] = {}))[t] = [T, f]), d !== e)););
                                        return (f -= i) === o || 0 == f % o && f / o >= 0
                                    }
                                }
                            },
                            PSEUDO: function (t, e) {
                                var n, o = r.pseudos[t] || r.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                                return o[b] ? o(e) : o.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? at((function (t, n) {
                                    for (var i, r = o(t, e), s = r.length; s--;) t[i = H.call(t, r[s])] = !(n[i] = r[s])
                                })) : function (t) {
                                    return o(t, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: at((function (t) {
                                var e = [],
                                    n = [],
                                    o = l(t.replace(W, "$1"));
                                return o[b] ? at((function (t, e, n, i) {
                                    for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                                })) : function (t, i, r) {
                                    return e[0] = t, o(e, null, r, n), !n.pop()
                                }
                            })),
                            has: at((function (t) {
                                return function (e) {
                                    return rt(t, e).length > 0
                                }
                            })),
                            contains: at((function (t) {
                                return function (e) {
                                    return (e.textContent || e.innerText || s(e)).indexOf(t) > -1
                                }
                            })),
                            lang: at((function (t) {
                                return Z.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(ot, it).toLowerCase(),
                                    function (e) {
                                        var n;
                                        do {
                                            if (n = h ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            })),
                            target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function (t) {
                                return t === p
                            },
                            focus: function (t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: function (t) {
                                return !1 === t.disabled
                            },
                            disabled: function (t) {
                                return !0 === t.disabled
                            },
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                                return !0
                            },
                            parent: function (t) {
                                return !r.pseudos.empty(t)
                            },
                            header: function (t) {
                                return et.test(t.nodeName)
                            },
                            input: function (t) {
                                return tt.test(t.nodeName)
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                            },
                            first: pt((function () {
                                return [0]
                            })),
                            last: pt((function (t, e) {
                                return [e - 1]
                            })),
                            eq: pt((function (t, e, n) {
                                return [0 > n ? n + e : n]
                            })),
                            even: pt((function (t, e) {
                                for (var n = 0; e > n; n += 2) t.push(n);
                                return t
                            })),
                            odd: pt((function (t, e) {
                                for (var n = 1; e > n; n += 2) t.push(n);
                                return t
                            })),
                            lt: pt((function (t, e, n) {
                                for (var o = 0 > n ? n + e : n; --o >= 0;) t.push(o);
                                return t
                            })),
                            gt: pt((function (t, e, n) {
                                for (var o = 0 > n ? n + e : n; e > ++o;) t.push(o);
                                return t
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[n] = dt(n);
                for (n in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[n] = ft(n);

                function ht() {}

                function gt(t, e) {
                    var n, o, i, s, a, l, c, u = S[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (a = t, l = [], c = r.preFilter; a;) {
                        for (s in (!n || (o = X.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(i = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace(W, " ")
                            }), a = a.slice(n.length)), r.filter) !(o = K[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: s,
                            matches: o
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return e ? a.length : a ? rt.error(t) : S(t, l).slice(0)
                }

                function mt(t) {
                    for (var e = 0, n = t.length, o = ""; n > e; e++) o += t[e].value;
                    return o
                }

                function vt(t, e, n) {
                    var o = e.dir,
                        r = n && "parentNode" === o,
                        s = C++;
                    return e.first ? function (e, n, i) {
                        for (; e = e[o];)
                            if (1 === e.nodeType || r) return t(e, n, i)
                    } : function (e, n, a) {
                        var l, c, u, d = T + " " + s;
                        if (a) {
                            for (; e = e[o];)
                                if ((1 === e.nodeType || r) && t(e, n, a)) return !0
                        } else
                            for (; e = e[o];)
                                if (1 === e.nodeType || r)
                                    if ((c = (u = e[b] || (e[b] = {}))[o]) && c[0] === d) {
                                        if (!0 === (l = c[1]) || l === i) return !0 === l
                                    } else if ((c = u[o] = [d])[1] = t(e, n, a) || i, !0 === c[1]) return !0
                    }
                }

                function yt(t) {
                    return t.length > 1 ? function (e, n, o) {
                        for (var i = t.length; i--;)
                            if (!t[i](e, n, o)) return !1;
                        return !0
                    } : t[0]
                }

                function bt(t, e, n, o, i) {
                    for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, o, i)) && (s.push(r), c && e.push(a));
                    return s
                }

                function xt(t, e, n, o, i, r) {
                    return o && !o[b] && (o = xt(o)), i && !i[b] && (i = xt(i, r)), at((function (r, s, a, l) {
                        var c, u, d, f = [],
                            p = [],
                            h = s.length,
                            g = r || function (t, e, n) {
                                for (var o = 0, i = e.length; i > o; o++) rt(t, e[o], n);
                                return n
                            }(e || "*", a.nodeType ? [a] : a, []),
                            m = !t || !r && e ? g : bt(g, f, t, a, l),
                            v = n ? i || (r ? t : h || o) ? [] : s : m;
                        if (n && n(m, v, a, l), o)
                            for (c = bt(v, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
                        if (r) {
                            if (i || t) {
                                if (i) {
                                    for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                                    i(null, v = [], c, l)
                                }
                                for (u = v.length; u--;)(d = v[u]) && (c = i ? H.call(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                            }
                        } else v = bt(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, l) : F.apply(s, v)
                    }))
                }

                function wt(t) {
                    for (var e, n, o, i = t.length, s = r.relative[t[0].type], a = s || r.relative[" "], l = s ? 1 : 0, u = vt((function (t) {
                            return t === e
                        }), a, !0), d = vt((function (t) {
                            return H.call(e, t) > -1
                        }), a, !0), f = [function (t, n, o) {
                            return !s && (o || n !== c) || ((e = n).nodeType ? u(t, n, o) : d(t, n, o))
                        }]; i > l; l++)
                        if (n = r.relative[t[l].type]) f = [vt(yt(f), n)];
                        else {
                            if ((n = r.filter[t[l].type].apply(null, t[l].matches))[b]) {
                                for (o = ++l; i > o && !r.relative[t[o].type]; o++);
                                return xt(l > 1 && yt(f), l > 1 && mt(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, o > l && wt(t.slice(l, o)), i > o && wt(t = t.slice(o)), i > o && mt(t))
                            }
                            f.push(n)
                        } return yt(f)
                }

                function Tt(t, e) {
                    var n = 0,
                        o = e.length > 0,
                        s = t.length > 0,
                        a = function (a, l, u, d, p) {
                            var h, g, m, v = [],
                                y = 0,
                                b = "0",
                                x = a && [],
                                w = null != p,
                                C = c,
                                $ = a || s && r.find.TAG("*", p && l.parentNode || l),
                                S = T += null == C ? 1 : Math.random() || .1;
                            for (w && (c = l !== f && l, i = n); null != (h = $[b]); b++) {
                                if (s && h) {
                                    for (g = 0; m = t[g++];)
                                        if (m(h, l, u)) {
                                            d.push(h);
                                            break
                                        } w && (T = S, i = ++n)
                                }
                                o && ((h = !m && h) && y--, a && x.push(h))
                            }
                            if (y += b, o && b !== y) {
                                for (g = 0; m = e[g++];) m(x, v, l, u);
                                if (a) {
                                    if (y > 0)
                                        for (; b--;) x[b] || v[b] || (v[b] = j.call(d));
                                    v = bt(v)
                                }
                                F.apply(d, v), w && !a && v.length > 0 && y + e.length > 1 && rt.uniqueSort(d)
                            }
                            return w && (T = S, c = C), x
                        };
                    return o ? at(a) : a
                }

                function Ct(t, e, n, i) {
                    var s, a, c, u, d, f = gt(t);
                    if (!i && 1 === f.length) {
                        if ((a = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = a[0]).type && o.getById && 9 === e.nodeType && h && r.relative[a[1].type]) {
                            if (!(e = (r.find.ID(c.matches[0].replace(ot, it), e) || [])[0])) return n;
                            t = t.slice(a.shift().value.length)
                        }
                        for (s = K.needsContext.test(t) ? 0 : a.length; s-- && (c = a[s], !r.relative[u = c.type]);)
                            if ((d = r.find[u]) && (i = d(c.matches[0].replace(ot, it), V.test(a[0].type) && e.parentNode || e))) {
                                if (a.splice(s, 1), !(t = i.length && mt(a))) return F.apply(n, i), n;
                                break
                            }
                    }
                    return l(t, f)(i, e, !h, n, V.test(t)), n
                }
                ht.prototype = r.filters = r.pseudos, r.setFilters = new ht, l = rt.compile = function (t, e) {
                    var n, o = [],
                        i = [],
                        r = E[t + " "];
                    if (!r) {
                        for (e || (e = gt(t)), n = e.length; n--;)(r = wt(e[n]))[b] ? o.push(r) : i.push(r);
                        r = E(t, Tt(i, o))
                    }
                    return r
                }, o.sortStable = b.split("").sort(A).join("") === b, o.detectDuplicates = k, d(), o.sortDetached = lt((function (t) {
                    return 1 & t.compareDocumentPosition(f.createElement("div"))
                })), lt((function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                })) || ct("type|href|height|width", (function (t, n, o) {
                    return o ? e : t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                })), o.attributes && lt((function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                })) || ct("value", (function (t, n, o) {
                    return o || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
                })), lt((function (t) {
                    return null == t.getAttribute("disabled")
                })) || ct(M, (function (t, n, o) {
                    var i;
                    return o ? e : (i = t.getAttributeNode(n)) && i.specified ? i.value : !0 === t[n] ? n.toLowerCase() : null
                })), x.find = rt, x.expr = rt.selectors, x.expr[":"] = x.expr.pseudos, x.unique = rt.uniqueSort, x.text = rt.getText, x.isXMLDoc = rt.isXML, x.contains = rt.contains
            }(t);
        var O = {};
        x.Callbacks = function (t) {
            t = "string" == typeof t ? O[t] || function (t) {
                var e = O[t] = {};
                return x.each(t.match(T) || [], (function (t, n) {
                    e[n] = !0
                })), e
            }(t) : x.extend({}, t);
            var n, o, i, r, s, a, l = [],
                c = !t.once && [],
                u = function (e) {
                    for (o = t.memory && e, i = !0, s = a || 0, a = 0, r = l.length, n = !0; l && r > s; s++)
                        if (!1 === l[s].apply(e[0], e[1]) && t.stopOnFalse) {
                            o = !1;
                            break
                        } n = !1, l && (c ? c.length && u(c.shift()) : o ? l = [] : d.disable())
                },
                d = {
                    add: function () {
                        if (l) {
                            var e = l.length;
                            (function e(n) {
                                x.each(n, (function (n, o) {
                                    var i = x.type(o);
                                    "function" === i ? t.unique && d.has(o) || l.push(o) : o && o.length && "string" !== i && e(o)
                                }))
                            })(arguments), n ? r = l.length : o && (a = e, u(o))
                        }
                        return this
                    },
                    remove: function () {
                        return l && x.each(arguments, (function (t, e) {
                            for (var o;
                                (o = x.inArray(e, l, o)) > -1;) l.splice(o, 1), n && (r >= o && r--, s >= o && s--)
                        })), this
                    },
                    has: function (t) {
                        return t ? x.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [], r = 0, this
                    },
                    disable: function () {
                        return l = c = o = e, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return c = e, o || d.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (t, e) {
                        return !l || i && !c || (e = [t, (e = e || []).slice ? e.slice() : e], n ? c.push(e) : u(e)), this
                    },
                    fire: function () {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return d
        }, x.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", x.Callbacks("memory")]
                    ],
                    n = "pending",
                    o = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return x.Deferred((function (n) {
                                x.each(e, (function (e, r) {
                                    var s = r[0],
                                        a = x.isFunction(t[e]) && t[e];
                                    i[r[1]]((function () {
                                        var t = a && a.apply(this, arguments);
                                        t && x.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === o ? n.promise() : this, a ? [t] : arguments)
                                    }))
                                })), t = null
                            })).promise()
                        },
                        promise: function (t) {
                            return null != t ? x.extend(t, o) : o
                        }
                    },
                    i = {};
                return o.pipe = o.then, x.each(e, (function (t, r) {
                    var s = r[2],
                        a = r[3];
                    o[r[1]] = s.add, a && s.add((function () {
                        n = a
                    }), e[1 ^ t][2].disable, e[2][2].lock), i[r[0]] = function () {
                        return i[r[0] + "With"](this === i ? o : this, arguments), this
                    }, i[r[0] + "With"] = s.fireWith
                })), o.promise(i), t && t.call(i, i), i
            },
            when: function (t) {
                var e, n, o, i = 0,
                    r = g.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && x.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : x.Deferred(),
                    c = function (t, n, o) {
                        return function (i) {
                            n[t] = this, o[t] = arguments.length > 1 ? g.call(arguments) : i, o === e ? l.notifyWith(n, o) : --a || l.resolveWith(n, o)
                        }
                    };
                if (s > 1)
                    for (e = Array(s), n = Array(s), o = Array(s); s > i; i++) r[i] && x.isFunction(r[i].promise) ? r[i].promise().done(c(i, o, r)).fail(l.reject).progress(c(i, n, e)) : --a;
                return a || l.resolveWith(o, r), l.promise()
            }
        }), x.support = function (e) {
            var n, o, r, a, l, c, u, d, f, p = s.createElement("div");
            if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], !(o = p.getElementsByTagName("a")[0]) || !o.style || !n.length) return e;
            c = (a = s.createElement("select")).appendChild(s.createElement("option")), r = p.getElementsByTagName("input")[0], o.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== p.className, e.leadingWhitespace = 3 === p.firstChild.nodeType, e.tbody = !p.getElementsByTagName("tbody").length, e.htmlSerialize = !!p.getElementsByTagName("link").length, e.style = /top/.test(o.getAttribute("style")), e.hrefNormalized = "/a" === o.getAttribute("href"), e.opacity = /^0.5/.test(o.style.opacity), e.cssFloat = !!o.style.cssFloat, e.checkOn = !!r.value, e.optSelected = c.selected, e.enctype = !!s.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, a.disabled = !0, e.optDisabled = !c.disabled;
            try {
                delete p.test
            } catch (t) {
                e.deleteExpando = !1
            }
            for (f in (r = s.createElement("input")).setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), (l = s.createDocumentFragment()).appendChild(r), e.appendChecked = r.checked, e.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", (function () {
                    e.noCloneEvent = !1
                })), p.cloneNode(!0).click()), {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) p.setAttribute(u = "on" + f, "t"), e[f + "Bubbles"] = u in t || !1 === p.attributes[u].expando;
            for (f in p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === p.style.backgroundClip, x(e)) break;
            return e.ownLast = "0" !== f, x((function () {
                var n, o, r, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    l = s.getElementsByTagName("body")[0];
                l && ((n = s.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (r = p.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = d && 0 === r[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                    zoom: 1
                } : {}, (function () {
                    e.boxSizing = 4 === p.offsetWidth
                })), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(p, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(p, null) || {
                    width: "4px"
                }).width, (o = p.appendChild(s.createElement("div"))).style.cssText = p.style.cssText = a, o.style.marginRight = o.style.width = "0", p.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== p.offsetWidth, e.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = p = r = o = null)
            })), n = a = l = c = o = r = null, e
        }({});
        var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            M = /([A-Z])/g;

        function R(t, n, o, i) {
            if (x.acceptData(t)) {
                var r, s, a = x.expando,
                    l = t.nodeType,
                    c = l ? x.cache : t,
                    u = l ? t[a] : t[a] && a;
                if (u && c[u] && (i || c[u].data) || o !== e || "string" != typeof n) return u || (u = l ? t[a] = d.pop() || x.guid++ : a), c[u] || (c[u] = l ? {} : {
                    toJSON: x.noop
                }), ("object" == typeof n || "function" == typeof n) && (i ? c[u] = x.extend(c[u], n) : c[u].data = x.extend(c[u].data, n)), s = c[u], i || (s.data || (s.data = {}), s = s.data), o !== e && (s[x.camelCase(n)] = o), "string" == typeof n ? null == (r = s[n]) && (r = s[x.camelCase(n)]) : r = s, r
            }
        }

        function z(t, e, n) {
            if (x.acceptData(t)) {
                var o, i, r = t.nodeType,
                    s = r ? x.cache : t,
                    a = r ? t[x.expando] : x.expando;
                if (s[a]) {
                    if (e && (o = n ? s[a] : s[a].data)) {
                        x.isArray(e) ? e = e.concat(x.map(e, x.camelCase)) : e in o ? e = [e] : e = (e = x.camelCase(e)) in o ? [e] : e.split(" "), i = e.length;
                        for (; i--;) delete o[e[i]];
                        if (n ? !q(o) : !x.isEmptyObject(o)) return
                    }(n || (delete s[a].data, q(s[a]))) && (r ? x.cleanData([t], !0) : x.support.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function _(t, n, o) {
            if (o === e && 1 === t.nodeType) {
                var i = "data-" + n.replace(M, "-$1").toLowerCase();
                if ("string" == typeof (o = t.getAttribute(i))) {
                    try {
                        o = "true" === o || "false" !== o && ("null" === o ? null : +o + "" === o ? +o : H.test(o) ? x.parseJSON(o) : o)
                    } catch (t) {}
                    x.data(t, n, o)
                } else o = e
            }
            return o
        }

        function q(t) {
            var e;
            for (e in t)
                if (("data" !== e || !x.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }
        x.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (t) {
                return !!(t = t.nodeType ? x.cache[t[x.expando]] : t[x.expando]) && !q(t)
            },
            data: function (t, e, n) {
                return R(t, e, n)
            },
            removeData: function (t, e) {
                return z(t, e)
            },
            _data: function (t, e, n) {
                return R(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return z(t, e, !0)
            },
            acceptData: function (t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && x.noData[t.nodeName.toLowerCase()];
                return !e || !0 !== e && t.getAttribute("classid") === e
            }
        }), x.fn.extend({
            data: function (t, n) {
                var o, i, r = null,
                    s = 0,
                    a = this[0];
                if (t === e) {
                    if (this.length && (r = x.data(a), 1 === a.nodeType && !x._data(a, "parsedAttrs"))) {
                        for (o = a.attributes; o.length > s; s++) 0 === (i = o[s].name).indexOf("data-") && _(a, i = x.camelCase(i.slice(5)), r[i]);
                        x._data(a, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each((function () {
                    x.data(this, t)
                })) : arguments.length > 1 ? this.each((function () {
                    x.data(this, t, n)
                })) : a ? _(a, t, x.data(a, t)) : null
            },
            removeData: function (t) {
                return this.each((function () {
                    x.removeData(this, t)
                }))
            }
        }), x.extend({
            queue: function (t, n, o) {
                var i;
                return t ? (n = (n || "fx") + "queue", i = x._data(t, n), o && (!i || x.isArray(o) ? i = x._data(t, n, x.makeArray(o)) : i.push(o)), i || []) : e
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = x.queue(t, e),
                    o = n.length,
                    i = n.shift(),
                    r = x._queueHooks(t, e);
                "inprogress" === i && (i = n.shift(), o--), i && ("fx" === e && n.unshift("inprogress"), delete r.stop, i.call(t, (function () {
                    x.dequeue(t, e)
                }), r)), !o && r && r.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return x._data(t, n) || x._data(t, n, {
                    empty: x.Callbacks("once memory").add((function () {
                        x._removeData(t, e + "queue"), x._removeData(t, n)
                    }))
                })
            }
        }), x.fn.extend({
            queue: function (t, n) {
                var o = 2;
                return "string" != typeof t && (n = t, t = "fx", o--), o > arguments.length ? x.queue(this[0], t) : n === e ? this : this.each((function () {
                    var e = x.queue(this, t, n);
                    x._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
                }))
            },
            dequeue: function (t) {
                return this.each((function () {
                    x.dequeue(this, t)
                }))
            },
            delay: function (t, e) {
                return t = x.fx && x.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function (e, n) {
                    var o = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(o)
                    }
                }))
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, n) {
                var o, i = 1,
                    r = x.Deferred(),
                    s = this,
                    a = this.length,
                    l = function () {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;)(o = x._data(s[a], t + "queueHooks")) && o.empty && (i++, o.empty.add(l));
                return l(), r.promise(n)
            }
        });
        var B, W, X = /[\t\r\n\f]/g,
            U = /\r/g,
            V = /^(?:input|select|textarea|button|object)$/i,
            Y = /^(?:a|area)$/i,
            Q = /^(?:checked|selected)$/i,
            Z = x.support.getSetAttribute,
            K = x.support.input;
        x.fn.extend({
            attr: function (t, e) {
                return x.access(this, x.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each((function () {
                    x.removeAttr(this, t)
                }))
            },
            prop: function (t, e) {
                return x.access(this, x.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return t = x.propFix[t] || t, this.each((function () {
                    try {
                        this[t] = e, delete this[t]
                    } catch (t) {}
                }))
            },
            addClass: function (t) {
                var e, n, o, i, r, s = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (x.isFunction(t)) return this.each((function (e) {
                    x(this).addClass(t.call(this, e, this.className))
                }));
                if (l)
                    for (e = (t || "").match(T) || []; a > s; s++)
                        if (o = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                            for (r = 0; i = e[r++];) 0 > o.indexOf(" " + i + " ") && (o += i + " ");
                            n.className = x.trim(o)
                        } return this
            },
            removeClass: function (t) {
                var e, n, o, i, r, s = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (x.isFunction(t)) return this.each((function (e) {
                    x(this).removeClass(t.call(this, e, this.className))
                }));
                if (l)
                    for (e = (t || "").match(T) || []; a > s; s++)
                        if (o = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                            for (r = 0; i = e[r++];)
                                for (; o.indexOf(" " + i + " ") >= 0;) o = o.replace(" " + i + " ", " ");
                            n.className = t ? x.trim(o) : ""
                        } return this
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : x.isFunction(t) ? this.each((function (n) {
                    x(this).toggleClass(t.call(this, n, this.className, e), e)
                })) : this.each((function () {
                    if ("string" === n)
                        for (var e, o = 0, r = x(this), s = t.match(T) || []; e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : x._data(this, "__className__") || "")
                }))
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, o = this.length; o > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function (t) {
                var n, o, i, r = this[0];
                return arguments.length ? (i = x.isFunction(t), this.each((function (n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, x(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : x.isArray(r) && (r = x.map(r, (function (t) {
                        return null == t ? "" : t + ""
                    }))), (o = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in o && o.set(this, r, "value") !== e || (this.value = r))
                }))) : r ? (o = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in o && (n = o.get(r, "value")) !== e ? n : "string" == typeof (n = r.value) ? n.replace(U, "") : null == n ? "" : n : void 0
            }
        }), x.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = x.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, n, o = t.options, i = t.selectedIndex, r = "select-one" === t.type || 0 > i, s = r ? null : [], a = r ? i + 1 : o.length, l = 0 > i ? a : r ? i : 0; a > l; l++)
                            if (!(!(n = o[l]).selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                                if (e = x(n).val(), r) return e;
                                s.push(e)
                            } return s
                    },
                    set: function (t, e) {
                        for (var n, o, i = t.options, r = x.makeArray(e), s = i.length; s--;)((o = i[s]).selected = x.inArray(x(o).val(), r) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            },
            attr: function (t, n, o) {
                var r, s, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === i ? x.prop(t, n, o) : (1 === a && x.isXMLDoc(t) || (n = n.toLowerCase(), r = x.attrHooks[n] || (x.expr.match.bool.test(n) ? W : B)), o === e ? r && "get" in r && null !== (s = r.get(t, n)) ? s : null == (s = x.find.attr(t, n)) ? e : s : null !== o ? r && "set" in r && (s = r.set(t, o, n)) !== e ? s : (t.setAttribute(n, o + ""), o) : (x.removeAttr(t, n), e))
            },
            removeAttr: function (t, e) {
                var n, o, i = 0,
                    r = e && e.match(T);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) o = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Z || !Q.test(n) ? t[o] = !1 : t[x.camelCase("default-" + n)] = t[o] = !1 : x.attr(t, n, ""), t.removeAttribute(Z ? n : o)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!x.support.radioValue && "radio" === e && x.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function (t, n, o) {
                var i, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !x.isXMLDoc(t)) && (n = x.propFix[n] || n, r = x.propHooks[n]), o !== e ? r && "set" in r && (i = r.set(t, o, n)) !== e ? i : t[n] = o : r && "get" in r && null !== (i = r.get(t, n)) ? i : t[n]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = x.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : V.test(t.nodeName) || Y.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), W = {
            set: function (t, e, n) {
                return !1 === e ? x.removeAttr(t, n) : K && Z || !Q.test(n) ? t.setAttribute(!Z && x.propFix[n] || n, n) : t[x.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, x.each(x.expr.match.bool.source.match(/\w+/g), (function (t, n) {
            var o = x.expr.attrHandle[n] || x.find.attr;
            x.expr.attrHandle[n] = K && Z || !Q.test(n) ? function (t, n, i) {
                var r = x.expr.attrHandle[n],
                    s = i ? e : (x.expr.attrHandle[n] = e) != o(t, n, i) ? n.toLowerCase() : null;
                return x.expr.attrHandle[n] = r, s
            } : function (t, n, o) {
                return o ? e : t[x.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        })), K && Z || (x.attrHooks.value = {
            set: function (t, n, o) {
                return x.nodeName(t, "input") ? (t.defaultValue = n, e) : B && B.set(t, n, o)
            }
        }), Z || (B = {
            set: function (t, n, o) {
                var i = t.getAttributeNode(o);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(o)), i.value = n += "", "value" === o || n === t.getAttribute(o) ? n : e
            }
        }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (t, n, o) {
            var i;
            return o ? e : (i = t.getAttributeNode(n)) && "" !== i.value ? i.value : null
        }, x.valHooks.button = {
            get: function (t, n) {
                var o = t.getAttributeNode(n);
                return o && o.specified ? o.value : e
            },
            set: B.set
        }, x.attrHooks.contenteditable = {
            set: function (t, e, n) {
                B.set(t, "" !== e && e, n)
            }
        }, x.each(["width", "height"], (function (t, n) {
            x.attrHooks[n] = {
                set: function (t, o) {
                    return "" === o ? (t.setAttribute(n, "auto"), o) : e
                }
            }
        }))), x.support.hrefNormalized || x.each(["href", "src"], (function (t, e) {
            x.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        })), x.support.style || (x.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || e
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        }), x.support.optSelected || (x.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            x.propFix[this.toLowerCase()] = this
        })), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], (function () {
            x.valHooks[this] = {
                set: function (t, n) {
                    return x.isArray(n) ? t.checked = x.inArray(x(t).val(), n) >= 0 : e
                }
            }, x.support.checkOn || (x.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }));
        var G = /^(?:input|select|textarea)$/i,
            J = /^key/,
            tt = /^(?:mouse|contextmenu)|click/,
            et = /^(?:focusinfocus|focusoutblur)$/,
            nt = /^([^.]*)(?:\.(.+)|)$/;

        function ot() {
            return !0
        }

        function it() {
            return !1
        }

        function rt() {
            try {
                return s.activeElement
            } catch (t) {}
        }
        x.event = {
            global: {},
            add: function (t, n, o, r, s) {
                var a, l, c, u, d, f, p, h, g, m, v, y = x._data(t);
                if (y) {
                    for (o.handler && (o = (u = o).handler, s = u.selector), o.guid || (o.guid = x.guid++), (l = y.events) || (l = y.events = {}), (f = y.handle) || ((f = y.handle = function (t) {
                            return typeof x === i || t && x.event.triggered === t.type ? e : x.event.dispatch.apply(f.elem, arguments)
                        }).elem = t), c = (n = (n || "").match(T) || [""]).length; c--;) g = v = (a = nt.exec(n[c]) || [])[1], m = (a[2] || "").split(".").sort(), g && (d = x.event.special[g] || {}, g = (s ? d.delegateType : d.bindType) || g, d = x.event.special[g] || {}, p = x.extend({
                        type: g,
                        origType: v,
                        data: r,
                        handler: o,
                        guid: o.guid,
                        selector: s,
                        needsContext: s && x.expr.match.needsContext.test(s),
                        namespace: m.join(".")
                    }, u), (h = l[g]) || ((h = l[g] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, m, f) || (t.addEventListener ? t.addEventListener(g, f, !1) : t.attachEvent && t.attachEvent("on" + g, f))), d.add && (d.add.call(t, p), p.handler.guid || (p.handler.guid = o.guid)), s ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[g] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, o, i) {
                var r, s, a, l, c, u, d, f, p, h, g, m = x.hasData(t) && x._data(t);
                if (m && (u = m.events)) {
                    for (c = (e = (e || "").match(T) || [""]).length; c--;)
                        if (p = g = (a = nt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = x.event.special[p] || {}, f = u[p = (o ? d.delegateType : d.bindType) || p] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) s = f[r], !i && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || o && o !== s.selector && ("**" !== o || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, m.handle) || x.removeEvent(t, p, m.handle), delete u[p])
                        } else
                            for (p in u) x.event.remove(t, p + e[c], n, o, !0);
                    x.isEmptyObject(u) && (delete m.handle, x._removeData(t, "events"))
                }
            },
            trigger: function (n, o, i, r) {
                var a, l, c, u, d, f, p, h = [i || s],
                    g = y.call(n, "type") ? n.type : n,
                    m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                if (c = f = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !et.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, (n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n)).isTrigger = r ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = i), o = null == o ? [n] : x.makeArray(o, [n]), d = x.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, o))) {
                    if (!r && !d.noBubble && !x.isWindow(i)) {
                        for (u = d.delegateType || g, et.test(u + g) || (c = c.parentNode); c; c = c.parentNode) h.push(c), f = c;
                        f === (i.ownerDocument || s) && h.push(f.defaultView || f.parentWindow || t)
                    }
                    for (p = 0;
                        (c = h[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? u : d.bindType || g, (a = (x._data(c, "events") || {})[n.type] && x._data(c, "handle")) && a.apply(c, o), (a = l && c[l]) && x.acceptData(c) && a.apply && !1 === a.apply(c, o) && n.preventDefault();
                    if (n.type = g, !r && !n.isDefaultPrevented() && (!d._default || !1 === d._default.apply(h.pop(), o)) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                        (f = i[l]) && (i[l] = null), x.event.triggered = g;
                        try {
                            i[g]()
                        } catch (t) {}
                        x.event.triggered = e, f && (i[l] = f)
                    }
                    return n.result
                }
            },
            dispatch: function (t) {
                t = x.event.fix(t);
                var n, o, i, r, s, a = [],
                    l = g.call(arguments),
                    c = (x._data(this, "events") || {})[t.type] || [],
                    u = x.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (a = x.event.handlers.call(this, t, c), n = 0;
                        (r = a[n++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, s = 0;
                            (i = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, (o = ((x.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l)) !== e && !1 === (t.result = o) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, n) {
                var o, i, r, s, a = [],
                    l = n.delegateCount,
                    c = t.target;
                if (l && c.nodeType && (!t.button || "click" !== t.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                            for (r = [], s = 0; l > s; s++) r[o = (i = n[s]).selector + " "] === e && (r[o] = i.needsContext ? x(o, this).index(c) >= 0 : x.find(o, this, null, [c]).length), r[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        } return n.length > l && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function (t) {
                if (t[x.expando]) return t;
                var e, n, o, i = t.type,
                    r = t,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = tt.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, t = new x.Event(r), e = o.length; e--;) t[n = o[e]] = r[n];
                return t.target || (t.target = r.srcElement || s), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, n) {
                    var o, i, r, a = n.button,
                        l = n.fromElement;
                    return null == t.pageX && null != n.clientX && (r = (i = t.target.ownerDocument || s).documentElement, o = i.body, t.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !t.relatedTarget && l && (t.relatedTarget = l === t.target ? n.toElement : l), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== rt() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === rt() && this.blur ? (this.blur(), !1) : e
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                    },
                    _default: function (t) {
                        return x.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, o) {
                var i = x.extend(new x.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                o ? x.event.trigger(i, null, e) : x.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, x.removeEvent = s.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var o = "on" + e;
            t.detachEvent && (typeof t[o] === i && (t[o] = null), t.detachEvent(o, n))
        }, x.Event = function (t, n) {
            return this instanceof x.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? ot : it) : this.type = t, n && x.extend(this, n), this.timeStamp = t && t.timeStamp || x.now(), this[x.expando] = !0, e) : new x.Event(t, n)
        }, x.Event.prototype = {
            isDefaultPrevented: it,
            isPropagationStopped: it,
            isImmediatePropagationStopped: it,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = ot, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = ot, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = ot, this.stopPropagation()
            }
        }, x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, (function (t, e) {
            x.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, o = this,
                        i = t.relatedTarget,
                        r = t.handleObj;
                    return (!i || i !== o && !x.contains(o, i)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        })), x.support.submitBubbles || (x.event.special.submit = {
            setup: function () {
                return !x.nodeName(this, "form") && (x.event.add(this, "click._submit keypress._submit", (function (t) {
                    var n = t.target,
                        o = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : e;
                    o && !x._data(o, "submitBubbles") && (x.event.add(o, "submit._submit", (function (t) {
                        t._submit_bubble = !0
                    })), x._data(o, "submitBubbles", !0))
                })), e)
            },
            postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && x.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function () {
                return !x.nodeName(this, "form") && (x.event.remove(this, "._submit"), e)
            }
        }), x.support.changeBubbles || (x.event.special.change = {
            setup: function () {
                return G.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", (function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                })), x.event.add(this, "click._change", (function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, t, !0)
                }))), !1) : (x.event.add(this, "beforeactivate._change", (function (t) {
                    var e = t.target;
                    G.test(e.nodeName) && !x._data(e, "changeBubbles") && (x.event.add(e, "change._change", (function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || x.event.simulate("change", this.parentNode, t, !0)
                    })), x._data(e, "changeBubbles", !0))
                })), e)
            },
            handle: function (t) {
                var n = t.target;
                return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
            },
            teardown: function () {
                return x.event.remove(this, "._change"), !G.test(this.nodeName)
            }
        }), x.support.focusinBubbles || x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (t, e) {
            var n = 0,
                o = function (t) {
                    x.event.simulate(e, t.target, x.event.fix(t), !0)
                };
            x.event.special[e] = {
                setup: function () {
                    0 == n++ && s.addEventListener(t, o, !0)
                },
                teardown: function () {
                    0 == --n && s.removeEventListener(t, o, !0)
                }
            }
        })), x.fn.extend({
            on: function (t, n, o, i, r) {
                var s, a;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (o = o || n, n = e), t) this.on(s, n, o, t[s], r);
                    return this
                }
                if (null == o && null == i ? (i = n, o = n = e) : null == i && ("string" == typeof n ? (i = o, o = e) : (i = o, o = n, n = e)), !1 === i) i = it;
                else if (!i) return this;
                return 1 === r && (a = i, (i = function (t) {
                    return x().off(t), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = x.guid++)), this.each((function () {
                    x.event.add(this, t, i, o, n)
                }))
            },
            one: function (t, e, n, o) {
                return this.on(t, e, n, o, 1)
            },
            off: function (t, n, o) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, x(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, n, t[r]);
                    return this
                }
                return (!1 === n || "function" == typeof n) && (o = n, n = e), !1 === o && (o = it), this.each((function () {
                    x.event.remove(this, t, o, n)
                }))
            },
            trigger: function (t, e) {
                return this.each((function () {
                    x.event.trigger(t, e, this)
                }))
            },
            triggerHandler: function (t, n) {
                var o = this[0];
                return o ? x.event.trigger(t, n, o, !0) : e
            }
        });
        var st = /^.[^:#\[\.,]*$/,
            at = /^(?:parents|prev(?:Until|All))/,
            lt = x.expr.match.needsContext,
            ct = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function ut(t, e) {
            do {
                t = t[e]
            } while (t && 1 !== t.nodeType);
            return t
        }

        function dt(t, e, n) {
            if (x.isFunction(e)) return x.grep(t, (function (t, o) {
                return !!e.call(t, o, t) !== n
            }));
            if (e.nodeType) return x.grep(t, (function (t) {
                return t === e !== n
            }));
            if ("string" == typeof e) {
                if (st.test(e)) return x.filter(e, t, n);
                e = x.filter(e, t)
            }
            return x.grep(t, (function (t) {
                return x.inArray(t, e) >= 0 !== n
            }))
        }

        function ft(t) {
            var e = pt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }
        x.fn.extend({
            find: function (t) {
                var e, n = [],
                    o = this,
                    i = o.length;
                if ("string" != typeof t) return this.pushStack(x(t).filter((function () {
                    for (e = 0; i > e; e++)
                        if (x.contains(o[e], this)) return !0
                })));
                for (e = 0; i > e; e++) x.find(t, o[e], n);
                return (n = this.pushStack(i > 1 ? x.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            has: function (t) {
                var e, n = x(t, this),
                    o = n.length;
                return this.filter((function () {
                    for (e = 0; o > e; e++)
                        if (x.contains(this, n[e])) return !0
                }))
            },
            not: function (t) {
                return this.pushStack(dt(this, t || [], !0))
            },
            filter: function (t) {
                return this.pushStack(dt(this, t || [], !1))
            },
            is: function (t) {
                return !!dt(this, "string" == typeof t && lt.test(t) ? x(t) : t || [], !1).length
            },
            closest: function (t, e) {
                for (var n, o = 0, i = this.length, r = [], s = lt.test(t) || "string" != typeof t ? x(t, e || this.context) : 0; i > o; o++)
                    for (n = this[o]; n && n !== e; n = n.parentNode)
                        if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                            n = r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? x.unique(r) : r)
            },
            index: function (t) {
                return t ? "string" == typeof t ? x.inArray(this[0], x(t)) : x.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                var n = "string" == typeof t ? x(t, e) : x.makeArray(t && t.nodeType ? [t] : t),
                    o = x.merge(this.get(), n);
                return this.pushStack(x.unique(o))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), x.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return x.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return x.dir(t, "parentNode", n)
            },
            next: function (t) {
                return ut(t, "nextSibling")
            },
            prev: function (t) {
                return ut(t, "previousSibling")
            },
            nextAll: function (t) {
                return x.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return x.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return x.dir(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return x.dir(t, "previousSibling", n)
            },
            siblings: function (t) {
                return x.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return x.sibling(t.firstChild)
            },
            contents: function (t) {
                return x.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : x.merge([], t.childNodes)
            }
        }, (function (t, e) {
            x.fn[t] = function (n, o) {
                var i = x.map(this, e, n);
                return "Until" !== t.slice(-5) && (o = n), o && "string" == typeof o && (i = x.filter(o, i)), this.length > 1 && (ct[t] || (i = x.unique(i)), at.test(t) && (i = i.reverse())), this.pushStack(i)
            }
        })), x.extend({
            filter: function (t, e, n) {
                var o = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === o.nodeType ? x.find.matchesSelector(o, t) ? [o] : [] : x.find.matches(t, x.grep(e, (function (t) {
                    return 1 === t.nodeType
                })))
            },
            dir: function (t, n, o) {
                for (var i = [], r = t[n]; r && 9 !== r.nodeType && (o === e || 1 !== r.nodeType || !x(r).is(o));) 1 === r.nodeType && i.push(r), r = r[n];
                return i
            },
            sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ht = / jQuery\d+="(?:null|\d+)"/g,
            gt = RegExp("<(?:" + pt + ")[\\s/>]", "i"),
            mt = /^\s+/,
            vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            yt = /<([\w:]+)/,
            bt = /<tbody/i,
            xt = /<|&#?\w+;/,
            wt = /<(?:script|style|link)/i,
            Tt = /^(?:checkbox|radio)$/i,
            Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $t = /^$|\/(?:java|ecma)script/i,
            St = /^true\/(.*)/,
            Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            kt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            At = ft(s).appendChild(s.createElement("div"));

        function Nt(t, e) {
            return x.nodeName(t, "table") && x.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function Pt(t) {
            return t.type = (null !== x.find.attr(t, "type")) + "/" + t.type, t
        }

        function Dt(t) {
            var e = St.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function Lt(t, e) {
            for (var n, o = 0; null != (n = t[o]); o++) x._data(n, "globalEval", !e || x._data(e[o], "globalEval"))
        }

        function jt(t, e) {
            if (1 === e.nodeType && x.hasData(t)) {
                var n, o, i, r = x._data(t),
                    s = x._data(e, r),
                    a = r.events;
                if (a)
                    for (n in delete s.handle, s.events = {}, a)
                        for (o = 0, i = a[n].length; i > o; o++) x.event.add(e, n, a[n][o]);
                s.data && (s.data = x.extend({}, s.data))
            }
        }

        function It(t, e) {
            var n, o, i;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !x.support.noCloneEvent && e[x.expando]) {
                    for (o in (i = x._data(e)).events) x.removeEvent(e, o, i.handle);
                    e.removeAttribute(x.expando)
                }
                "script" === n && e.text !== t.text ? (Pt(e).text = t.text, Dt(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), x.support.html5Clone && t.innerHTML && !x.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Tt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function Ft(t, n) {
            var o, r, s = 0,
                a = typeof t.getElementsByTagName !== i ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== i ? t.querySelectorAll(n || "*") : e;
            if (!a)
                for (a = [], o = t.childNodes || t; null != (r = o[s]); s++) !n || x.nodeName(r, n) ? a.push(r) : x.merge(a, Ft(r, n));
            return n === e || n && x.nodeName(t, n) ? x.merge([t], a) : a
        }

        function Ot(t) {
            Tt.test(t.type) && (t.defaultChecked = t.checked)
        }
        kt.optgroup = kt.option, kt.tbody = kt.tfoot = kt.colgroup = kt.caption = kt.thead, kt.th = kt.td, x.fn.extend({
            text: function (t) {
                return x.access(this, (function (t) {
                    return t === e ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(t))
                }), null, t, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, (function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, t).appendChild(t)
                }))
            },
            prepend: function () {
                return this.domManip(arguments, (function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Nt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                }))
            },
            before: function () {
                return this.domManip(arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                }))
            },
            after: function () {
                return this.domManip(arguments, (function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                }))
            },
            remove: function (t, e) {
                for (var n, o = t ? x.filter(t, this) : this, i = 0; null != (n = o[i]); i++) e || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (e && x.contains(n.ownerDocument, n) && Lt(Ft(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && x.cleanData(Ft(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && x.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map((function () {
                    return x.clone(this, t, e)
                }))
            },
            html: function (t) {
                return x.access(this, (function (t) {
                    var n = this[0] || {},
                        o = 0,
                        i = this.length;
                    if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(ht, "") : e;
                    if (!("string" != typeof t || wt.test(t) || !x.support.htmlSerialize && gt.test(t) || !x.support.leadingWhitespace && mt.test(t) || kt[(yt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(vt, "<$1></$2>");
                        try {
                            for (; i > o; o++) 1 === (n = this[o] || {}).nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (t) {}
                    }
                    n && this.empty().append(t)
                }), null, t, arguments.length)
            },
            replaceWith: function () {
                var t = x.map(this, (function (t) {
                        return [t.nextSibling, t.parentNode]
                    })),
                    e = 0;
                return this.domManip(arguments, (function (n) {
                    var o = t[e++],
                        i = t[e++];
                    i && (o && o.parentNode !== i && (o = this.nextSibling), x(this).remove(), i.insertBefore(n, o))
                }), !0), e ? this : this.remove()
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (t, e, n) {
                t = p.apply([], t);
                var o, i, r, s, a, l, c = 0,
                    u = this.length,
                    d = this,
                    f = u - 1,
                    h = t[0],
                    g = x.isFunction(h);
                if (g || !(1 >= u || "string" != typeof h || x.support.checkClone) && Ct.test(h)) return this.each((function (o) {
                    var i = d.eq(o);
                    g && (t[0] = h.call(this, o, i.html())), i.domManip(t, e, n)
                }));
                if (u && (o = (l = x.buildFragment(t, this[0].ownerDocument, !1, !n && this)).firstChild, 1 === l.childNodes.length && (l = o), o)) {
                    for (r = (s = x.map(Ft(l, "script"), Pt)).length; u > c; c++) i = l, c !== f && (i = x.clone(i, !0, !0), r && x.merge(s, Ft(i, "script"))), e.call(this[c], i, c);
                    if (r)
                        for (a = s[s.length - 1].ownerDocument, x.map(s, Dt), c = 0; r > c; c++) i = s[c], $t.test(i.type || "") && !x._data(i, "globalEval") && x.contains(a, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Et, "")));
                    l = o = null
                }
                return this
            }
        }), x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (t, e) {
            x.fn[t] = function (t) {
                for (var n, o = 0, i = [], r = x(t), s = r.length - 1; s >= o; o++) n = o === s ? this : this.clone(!0), x(r[o])[e](n), h.apply(i, n.get());
                return this.pushStack(i)
            }
        })), x.extend({
            clone: function (t, e, n) {
                var o, i, r, s, a, l = x.contains(t.ownerDocument, t);
                if (x.support.html5Clone || x.isXMLDoc(t) || !gt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (At.innerHTML = t.outerHTML, At.removeChild(r = At.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t)))
                    for (o = Ft(r), a = Ft(t), s = 0; null != (i = a[s]); ++s) o[s] && It(i, o[s]);
                if (e)
                    if (n)
                        for (a = a || Ft(t), o = o || Ft(r), s = 0; null != (i = a[s]); s++) jt(i, o[s]);
                    else jt(t, r);
                return (o = Ft(r, "script")).length > 0 && Lt(o, !l && Ft(t, "script")), o = a = i = null, r
            },
            buildFragment: function (t, e, n, o) {
                for (var i, r, s, a, l, c, u, d = t.length, f = ft(e), p = [], h = 0; d > h; h++)
                    if ((r = t[h]) || 0 === r)
                        if ("object" === x.type(r)) x.merge(p, r.nodeType ? [r] : r);
                        else if (xt.test(r)) {
                    for (a = a || f.appendChild(e.createElement("div")), l = (yt.exec(r) || ["", ""])[1].toLowerCase(), u = kt[l] || kt._default, a.innerHTML = u[1] + r.replace(vt, "<$1></$2>") + u[2], i = u[0]; i--;) a = a.lastChild;
                    if (!x.support.leadingWhitespace && mt.test(r) && p.push(e.createTextNode(mt.exec(r)[0])), !x.support.tbody)
                        for (i = (r = "table" !== l || bt.test(r) ? "<table>" !== u[1] || bt.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; i--;) x.nodeName(c = r.childNodes[i], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (x.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = f.lastChild
                } else p.push(e.createTextNode(r));
                for (a && f.removeChild(a), x.support.appendChecked || x.grep(Ft(p, "input"), Ot), h = 0; r = p[h++];)
                    if ((!o || -1 === x.inArray(r, o)) && (s = x.contains(r.ownerDocument, r), a = Ft(f.appendChild(r), "script"), s && Lt(a), n))
                        for (i = 0; r = a[i++];) $t.test(r.type || "") && n.push(r);
                return a = null, f
            },
            cleanData: function (t, e) {
                for (var n, o, r, s, a = 0, l = x.expando, c = x.cache, u = x.support.deleteExpando, f = x.event.special; null != (n = t[a]); a++)
                    if ((e || x.acceptData(n)) && (s = (r = n[l]) && c[r])) {
                        if (s.events)
                            for (o in s.events) f[o] ? x.event.remove(n, o) : x.removeEvent(n, o, s.handle);
                        c[r] && (delete c[r], u ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, d.push(r))
                    }
            },
            _evalUrl: function (t) {
                return x.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
        }), x.fn.extend({
            wrapAll: function (t) {
                if (x.isFunction(t)) return this.each((function (e) {
                    x(this).wrapAll(t.call(this, e))
                }));
                if (this[0]) {
                    var e = x(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    })).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                return x.isFunction(t) ? this.each((function (e) {
                    x(this).wrapInner(t.call(this, e))
                })) : this.each((function () {
                    var e = x(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                }))
            },
            wrap: function (t) {
                var e = x.isFunction(t);
                return this.each((function (n) {
                    x(this).wrapAll(e ? t.call(this, n) : t)
                }))
            },
            unwrap: function () {
                return this.parent().each((function () {
                    x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
                })).end()
            }
        });
        var Ht, Mt, Rt, zt = /alpha\([^)]*\)/i,
            _t = /opacity\s*=\s*([^)]*)/,
            qt = /^(top|right|bottom|left)$/,
            Bt = /^(none|table(?!-c[ea]).+)/,
            Wt = /^margin/,
            Xt = RegExp("^(" + w + ")(.*)$", "i"),
            Ut = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
            Vt = RegExp("^([+-])=(" + w + ")", "i"),
            Yt = {
                BODY: "block"
            },
            Qt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Zt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Kt = ["Top", "Right", "Bottom", "Left"],
            Gt = ["Webkit", "O", "Moz", "ms"];

        function Jt(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), o = e, i = Gt.length; i--;)
                if ((e = Gt[i] + n) in t) return e;
            return o
        }

        function te(t, e) {
            return t = e || t, "none" === x.css(t, "display") || !x.contains(t.ownerDocument, t)
        }

        function ee(t, e) {
            for (var n, o, i, r = [], s = 0, a = t.length; a > s; s++)(o = t[s]).style && (r[s] = x._data(o, "olddisplay"), n = o.style.display, e ? (r[s] || "none" !== n || (o.style.display = ""), "" === o.style.display && te(o) && (r[s] = x._data(o, "olddisplay", re(o.nodeName)))) : r[s] || (i = te(o), (n && "none" !== n || !i) && x._data(o, "olddisplay", i ? n : x.css(o, "display"))));
            for (s = 0; a > s; s++)(o = t[s]).style && (e && "none" !== o.style.display && "" !== o.style.display || (o.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function ne(t, e, n) {
            var o = Xt.exec(e);
            return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : e
        }

        function oe(t, e, n, o, i) {
            for (var r = n === (o ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += x.css(t, n + Kt[r], !0, i)), o ? ("content" === n && (s -= x.css(t, "padding" + Kt[r], !0, i)), "margin" !== n && (s -= x.css(t, "border" + Kt[r] + "Width", !0, i))) : (s += x.css(t, "padding" + Kt[r], !0, i), "padding" !== n && (s += x.css(t, "border" + Kt[r] + "Width", !0, i)));
            return s
        }

        function ie(t, e, n) {
            var o = !0,
                i = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = Mt(t),
                s = x.support.boxSizing && "border-box" === x.css(t, "boxSizing", !1, r);
            if (0 >= i || null == i) {
                if ((0 > (i = Rt(t, e, r)) || null == i) && (i = t.style[e]), Ut.test(i)) return i;
                o = s && (x.support.boxSizingReliable || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + oe(t, e, n || (s ? "border" : "content"), o, r) + "px"
        }

        function re(t) {
            var e = s,
                n = Yt[t];
            return n || ("none" !== (n = se(t, e)) && n || ((e = ((Ht = (Ht || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement))[0].contentWindow || Ht[0].contentDocument).document).write("<!doctype html><html><body>"), e.close(), n = se(t, e), Ht.detach()), Yt[t] = n), n
        }

        function se(t, e) {
            var n = x(e.createElement(t)).appendTo(e.body),
                o = x.css(n[0], "display");
            return n.remove(), o
        }
        x.fn.extend({
            css: function (t, n) {
                return x.access(this, (function (t, n, o) {
                    var i, r, s = {},
                        a = 0;
                    if (x.isArray(n)) {
                        for (r = Mt(t), i = n.length; i > a; a++) s[n[a]] = x.css(t, n[a], !1, r);
                        return s
                    }
                    return o !== e ? x.style(t, n, o) : x.css(t, n)
                }), t, n, arguments.length > 1)
            },
            show: function () {
                return ee(this, !0)
            },
            hide: function () {
                return ee(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                    te(this) ? x(this).show() : x(this).hide()
                }))
            }
        }), x.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Rt(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: x.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (t, n, o, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a, l = x.camelCase(n),
                        c = t.style;
                    if (n = x.cssProps[l] || (x.cssProps[l] = Jt(c, l)), a = x.cssHooks[n] || x.cssHooks[l], o === e) return a && "get" in a && (r = a.get(t, !1, i)) !== e ? r : c[n];
                    if ("string" === (s = typeof o) && (r = Vt.exec(o)) && (o = (r[1] + 1) * r[2] + parseFloat(x.css(t, n)), s = "number"), !(null == o || "number" === s && isNaN(o) || ("number" !== s || x.cssNumber[l] || (o += "px"), x.support.clearCloneStyle || "" !== o || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (o = a.set(t, o, i)) === e))) try {
                        c[n] = o
                    } catch (t) {}
                }
            },
            css: function (t, n, o, i) {
                var r, s, a, l = x.camelCase(n);
                return n = x.cssProps[l] || (x.cssProps[l] = Jt(t.style, l)), (a = x.cssHooks[n] || x.cssHooks[l]) && "get" in a && (s = a.get(t, !0, o)), s === e && (s = Rt(t, n, i)), "normal" === s && n in Zt && (s = Zt[n]), "" === o || o ? (r = parseFloat(s), !0 === o || x.isNumeric(r) ? r || 0 : s) : s
            }
        }), t.getComputedStyle ? (Mt = function (e) {
            return t.getComputedStyle(e, null)
        }, Rt = function (t, n, o) {
            var i, r, s, a = o || Mt(t),
                l = a ? a.getPropertyValue(n) || a[n] : e,
                c = t.style;
            return a && ("" !== l || x.contains(t.ownerDocument, t) || (l = x.style(t, n)), Ut.test(l) && Wt.test(n) && (i = c.width, r = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = i, c.minWidth = r, c.maxWidth = s)), l
        }) : s.documentElement.currentStyle && (Mt = function (t) {
            return t.currentStyle
        }, Rt = function (t, n, o) {
            var i, r, s, a = o || Mt(t),
                l = a ? a[n] : e,
                c = t.style;
            return null == l && c && c[n] && (l = c[n]), Ut.test(l) && !qt.test(n) && (i = c.left, (s = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = i, s && (r.left = s)), "" === l ? "auto" : l
        }), x.each(["height", "width"], (function (t, n) {
            x.cssHooks[n] = {
                get: function (t, o, i) {
                    return o ? 0 === t.offsetWidth && Bt.test(x.css(t, "display")) ? x.swap(t, Qt, (function () {
                        return ie(t, n, i)
                    })) : ie(t, n, i) : e
                },
                set: function (t, e, o) {
                    var i = o && Mt(t);
                    return ne(0, e, o ? oe(t, n, o, x.support.boxSizing && "border-box" === x.css(t, "boxSizing", !1, i), i) : 0)
                }
            }
        })), x.support.opacity || (x.cssHooks.opacity = {
            get: function (t, e) {
                return _t.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var n = t.style,
                    o = t.currentStyle,
                    i = x.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = o && o.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === x.trim(r.replace(zt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || o && !o.filter) || (n.filter = zt.test(r) ? r.replace(zt, i) : r + " " + i)
            }
        }), x((function () {
            x.support.reliableMarginRight || (x.cssHooks.marginRight = {
                get: function (t, n) {
                    return n ? x.swap(t, {
                        display: "inline-block"
                    }, Rt, [t, "marginRight"]) : e
                }
            }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], (function (t, n) {
                x.cssHooks[n] = {
                    get: function (t, o) {
                        return o ? (o = Rt(t, n), Ut.test(o) ? x(t).position()[n] + "px" : o) : e
                    }
                }
            }))
        })), x.expr && x.expr.filters && (x.expr.filters.hidden = function (t) {
            return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || x.css(t, "display"))
        }, x.expr.filters.visible = function (t) {
            return !x.expr.filters.hidden(t)
        }), x.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function (t, e) {
            x.cssHooks[t + e] = {
                expand: function (n) {
                    for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[t + Kt[o] + e] = r[o] || r[o - 2] || r[0];
                    return i
                }
            }, Wt.test(t) || (x.cssHooks[t + e].set = ne)
        }));
        var ae = /%20/g,
            le = /\[\]$/,
            ce = /\r?\n/g,
            ue = /^(?:submit|button|image|reset|file)$/i,
            de = /^(?:input|select|textarea|keygen)/i;

        function fe(t, e, n, o) {
            var i;
            if (x.isArray(e)) x.each(e, (function (e, i) {
                n || le.test(t) ? o(t, i) : fe(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, o)
            }));
            else if (n || "object" !== x.type(e)) o(t, e);
            else
                for (i in e) fe(t + "[" + i + "]", e[i], n, o)
        }
        x.fn.extend({
            serialize: function () {
                return x.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map((function () {
                    var t = x.prop(this, "elements");
                    return t ? x.makeArray(t) : this
                })).filter((function () {
                    var t = this.type;
                    return this.name && !x(this).is(":disabled") && de.test(this.nodeName) && !ue.test(t) && (this.checked || !Tt.test(t))
                })).map((function (t, e) {
                    var n = x(this).val();
                    return null == n ? null : x.isArray(n) ? x.map(n, (function (t) {
                        return {
                            name: e.name,
                            value: t.replace(ce, "\r\n")
                        }
                    })) : {
                        name: e.name,
                        value: n.replace(ce, "\r\n")
                    }
                })).get()
            }
        }), x.param = function (t, n) {
            var o, i = [],
                r = function (t, e) {
                    e = x.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (n === e && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, (function () {
                r(this.name, this.value)
            }));
            else
                for (o in t) fe(o, t[o], n, r);
            return i.join("&").replace(ae, "+")
        }, x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function (t, e) {
            x.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        })), x.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, o) {
                return this.on(e, t, n, o)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var pe, he, ge = x.now(),
            me = /\?/,
            ve = /#.*$/,
            ye = /([?&])_=[^&]*/,
            be = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            xe = /^(?:GET|HEAD)$/,
            we = /^\/\//,
            Te = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Ce = x.fn.load,
            $e = {},
            Se = {},
            Ee = "*/".concat("*");
        try {
            he = r.href
        } catch (t) {
            (he = s.createElement("a")).href = "", he = he.href
        }

        function ke(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var o, i = 0,
                    r = e.toLowerCase().match(T) || [];
                if (x.isFunction(n))
                    for (; o = r[i++];) "+" === o[0] ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(n)) : (t[o] = t[o] || []).push(n)
            }
        }

        function Ae(t, n, o, i) {
            var r = {},
                s = t === Se;

            function a(l) {
                var c;
                return r[l] = !0, x.each(t[l] || [], (function (t, l) {
                    var u = l(n, o, i);
                    return "string" != typeof u || s || r[u] ? s ? !(c = u) : e : (n.dataTypes.unshift(u), a(u), !1)
                })), c
            }
            return a(n.dataTypes[0]) || !r["*"] && a("*")
        }

        function Ne(t, n) {
            var o, i, r = x.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== e && ((r[i] ? t : o || (o = {}))[i] = n[i]);
            return o && x.extend(!0, t, o), t
        }
        pe = Te.exec(he.toLowerCase()) || [], x.fn.load = function (t, n, o) {
            if ("string" != typeof t && Ce) return Ce.apply(this, arguments);
            var i, r, s, a = this,
                l = t.indexOf(" ");
            return l >= 0 && (i = t.slice(l, t.length), t = t.slice(0, l)), x.isFunction(n) ? (o = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && x.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: n
            }).done((function (t) {
                r = arguments, a.html(i ? x("<div>").append(x.parseHTML(t)).find(i) : t)
            })).complete(o && function (t, e) {
                a.each(o, r || [t.responseText, e, t])
            }), this
        }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
            x.fn[e] = function (t) {
                return this.on(e, t)
            }
        })), x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: he,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ee,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": x.parseJSON,
                    "text xml": x.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? Ne(Ne(t, x.ajaxSettings), e) : Ne(x.ajaxSettings, t)
            },
            ajaxPrefilter: ke($e),
            ajaxTransport: ke(Se),
            ajax: function (t, n) {
                "object" == typeof t && (n = t, t = e), n = n || {};
                var o, i, r, s, a, l, c, u, d = x.ajaxSetup({}, n),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                    h = x.Deferred(),
                    g = x.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = be.exec(s);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else C.always(t[C.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || w;
                            return c && c.abort(e), $(0, e), this
                        }
                    };
                if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || he) + "").replace(ve, "").replace(we, pe[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = x.trim(d.dataType || "*").toLowerCase().match(T) || [""], null == d.crossDomain && (o = Te.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === pe[1] && o[2] === pe[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (pe[3] || ("http:" === pe[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = x.param(d.data, d.traditional)), Ae($e, d, n, C), 2 === b) return C;
                for (i in (l = d.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !xe.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (me.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ye.test(r) ? r.replace(ye, "$1_=" + ge++) : r + (me.test(r) ? "&" : "?") + "_=" + ge++)), d.ifModified && (x.lastModified[r] && C.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && C.setRequestHeader("If-None-Match", x.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : d.accepts["*"]), d.headers) C.setRequestHeader(i, d.headers[i]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, C, d) || 2 === b)) return C.abort();
                for (i in w = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[i](d[i]);
                if (c = Ae(Se, d, n, C)) {
                    C.readyState = 1, l && p.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (a = setTimeout((function () {
                        C.abort("timeout")
                    }), d.timeout));
                    try {
                        b = 1, c.send(v, $)
                    } catch (t) {
                        if (!(2 > b)) throw t;
                        $(-1, t)
                    }
                } else $(-1, "No Transport");

                function $(t, n, o, i) {
                    var u, v, y, w, T, $ = n;
                    2 !== b && (b = 2, a && clearTimeout(a), c = e, s = i || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, o && (w = function (t, n, o) {
                        var i, r, s, a, l = t.contents,
                            c = t.dataTypes;
                        for (;
                            "*" === c[0];) c.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
                        if (r)
                            for (a in l)
                                if (l[a] && l[a].test(r)) {
                                    c.unshift(a);
                                    break
                                } if (c[0] in o) s = c[0];
                        else {
                            for (a in o) {
                                if (!c[0] || t.converters[a + " " + c[0]]) {
                                    s = a;
                                    break
                                }
                                i || (i = a)
                            }
                            s = s || i
                        }
                        return s ? (s !== c[0] && c.unshift(s), o[s]) : e
                    }(d, C, o)), w = function (t, e, n, o) {
                        var i, r, s, a, l, c = {},
                            u = t.dataTypes.slice();
                        if (u[1])
                            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        r = u.shift();
                        for (; r;)
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && o && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (i in c)
                                    if ((a = i.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[i] : !0 !== c[i] && (r = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(d, w, C, u), u ? (d.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (x.lastModified[r] = T), (T = C.getResponseHeader("etag")) && (x.etag[r] = T)), 204 === t || "HEAD" === d.type ? $ = "nocontent" : 304 === t ? $ = "notmodified" : ($ = w.state, v = w.data, u = !(y = w.error))) : (y = $, (t || !$) && ($ = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || $) + "", u ? h.resolveWith(f, [v, $, C]) : h.rejectWith(f, [C, $, y]), C.statusCode(m), m = e, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [C, d, u ? v : y]), g.fireWith(f, [C, $]), l && (p.trigger("ajaxComplete", [C, d]), --x.active || x.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function (t, e, n) {
                return x.get(t, e, n, "json")
            },
            getScript: function (t, n) {
                return x.get(t, e, n, "script")
            }
        }), x.each(["get", "post"], (function (t, n) {
            x[n] = function (t, o, i, r) {
                return x.isFunction(o) && (r = r || i, i = o, o = e), x.ajax({
                    url: t,
                    type: n,
                    dataType: r,
                    data: o,
                    success: i
                })
            }
        })), x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return x.globalEval(t), t
                }
            }
        }), x.ajaxPrefilter("script", (function (t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        })), x.ajaxTransport("script", (function (t) {
            if (t.crossDomain) {
                var n, o = s.head || x("head")[0] || s.documentElement;
                return {
                    send: function (e, i) {
                        (n = s.createElement("script")).async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || i(200, "success"))
                        }, o.insertBefore(n, o.firstChild)
                    },
                    abort: function () {
                        n && n.onload(e, !0)
                    }
                }
            }
        }));
        var Pe = [],
            De = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Pe.pop() || x.expando + "_" + ge++;
                return this[t] = !0, t
            }
        }), x.ajaxPrefilter("json jsonp", (function (n, o, i) {
            var r, s, a, l = !1 !== n.jsonp && (De.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && De.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(De, "$1" + r) : !1 !== n.jsonp && (n.url += (me.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function () {
                return a || x.error(r + " was not called"), a[0]
            }, n.dataTypes[0] = "json", s = t[r], t[r] = function () {
                a = arguments
            }, i.always((function () {
                t[r] = s, n[r] && (n.jsonpCallback = o.jsonpCallback, Pe.push(r)), a && x.isFunction(s) && s(a[0]), a = s = e
            })), "script") : e
        }));
        var Le, je, Ie = 0,
            Fe = t.ActiveXObject && function () {
                var t;
                for (t in Le) Le[t](e, !0)
            };

        function Oe() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }
        x.ajaxSettings.xhr = t.ActiveXObject ? function () {
            return !this.isLocal && Oe() || function () {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        } : Oe, je = x.ajaxSettings.xhr(), x.support.cors = !!je && "withCredentials" in je, (je = x.support.ajax = !!je) && x.ajaxTransport((function (n) {
            var o;
            if (!n.crossDomain || x.support.cors) return {
                send: function (i, r) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) l.setRequestHeader(a, i[a])
                    } catch (t) {}
                    l.send(n.hasContent && n.data || null), o = function (t, i) {
                        var a, c, u, d;
                        try {
                            if (o && (i || 4 === l.readyState))
                                if (o = e, s && (l.onreadystatechange = x.noop, Fe && delete Le[s]), i) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (t) {
                                        u = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                }
                        } catch (t) {
                            i || r(-1, t)
                        }
                        d && r(a, u, d, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(o) : (s = ++Ie, Fe && (Le || (Le = {}, x(t).unload(Fe)), Le[s] = o), l.onreadystatechange = o) : o()
                },
                abort: function () {
                    o && o(e, !0)
                }
            }
        }));
        var He, Me, Re = /^(?:toggle|show|hide)$/,
            ze = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
            _e = /queueHooks$/,
            qe = [function (t, e, n) {
                var o, i, r, s, a, l, c = this,
                    u = {},
                    d = t.style,
                    f = t.nodeType && te(t),
                    p = x._data(t, "fxshow");
                for (o in n.queue || (null == (a = x._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || l()
                    }), a.unqueued++, c.always((function () {
                        c.always((function () {
                            a.unqueued--, x.queue(t, "fx").length || a.empty.fire()
                        }))
                    }))), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === x.css(t, "display") && "none" === x.css(t, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== re(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", x.support.shrinkWrapBlocks || c.always((function () {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    }))), e)
                    if (i = e[o], Re.exec(i)) {
                        if (delete e[o], r = r || "toggle" === i, i === (f ? "hide" : "show")) continue;
                        u[o] = p && p[o] || x.style(t, o)
                    } if (!x.isEmptyObject(u))
                    for (o in p ? "hidden" in p && (f = p.hidden) : p = x._data(t, "fxshow", {}), r && (p.hidden = !f), f ? x(t).show() : c.done((function () {
                            x(t).hide()
                        })), c.done((function () {
                            var e;
                            for (e in x._removeData(t, "fxshow"), u) x.style(t, e, u[e])
                        })), u) s = Xe(f ? p[o] : 0, o, c), o in p || (p[o] = s.start, f && (s.end = s.start, s.start = "width" === o || "height" === o ? 1 : 0))
            }],
            Be = {
                "*": [function (t, e) {
                    var n = this.createTween(t, e),
                        o = n.cur(),
                        i = ze.exec(e),
                        r = i && i[3] || (x.cssNumber[t] ? "" : "px"),
                        s = (x.cssNumber[t] || "px" !== r && +o) && ze.exec(x.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], i = i || [], s = +o || 1;
                        do {
                            s /= a = a || ".5", x.style(n.elem, t, s + r)
                        } while (a !== (a = n.cur() / o) && 1 !== a && --l)
                    }
                    return i && (s = n.start = +s || +o || 0, n.unit = r, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };

        function We() {
            return setTimeout((function () {
                He = e
            })), He = x.now()
        }

        function Xe(t, e, n) {
            for (var o, i = (Be[e] || []).concat(Be["*"]), r = 0, s = i.length; s > r; r++)
                if (o = i[r].call(n, e, t)) return o
        }

        function Ue(t, e, n) {
            var o, i, r = 0,
                s = qe.length,
                a = x.Deferred().always((function () {
                    delete l.elem
                })),
                l = function () {
                    if (i) return !1;
                    for (var e = He || We(), n = Math.max(0, c.startTime + c.duration - e), o = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(o);
                    return a.notifyWith(t, [c, o, n]), 1 > o && s ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: x.extend({}, e),
                    opts: x.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: He || We(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var o = x.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(o), o
                    },
                    stop: function (e) {
                        var n = 0,
                            o = e ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; o > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (function (t, e) {
                    var n, o, i, r, s;
                    for (n in t)
                        if (o = x.camelCase(n), i = e[o], r = t[n], x.isArray(r) && (i = r[1], r = t[n] = r[0]), n !== o && (t[o] = r, delete t[n]), (s = x.cssHooks[o]) && "expand" in s)
                            for (n in r = s.expand(r), delete t[o], r) n in t || (t[n] = r[n], e[n] = i);
                        else e[o] = i
                }(u, c.opts.specialEasing); s > r; r++)
                if (o = qe[r].call(c, t, u, c.opts)) return o;
            return x.map(u, Xe, c), x.isFunction(c.opts.start) && c.opts.start.call(t, c), x.fx.timer(x.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function Ve(t, e, n, o, i) {
            return new Ve.prototype.init(t, e, n, o, i)
        }

        function Ye(t, e) {
            var n, o = {
                    height: t
                },
                i = 0;
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) o["margin" + (n = Kt[i])] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function Qe(t) {
            return x.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        x.Animation = x.extend(Ue, {
            tweener: function (t, e) {
                x.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, o = 0, i = t.length; i > o; o++) n = t[o], Be[n] = Be[n] || [], Be[n].unshift(e)
            },
            prefilter: function (t, e) {
                e ? qe.unshift(t) : qe.push(t)
            }
        }), x.Tween = Ve, Ve.prototype = {
            constructor: Ve,
            init: function (t, e, n, o, i, r) {
                this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = o, this.unit = r || (x.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = Ve.propHooks[this.prop];
                return t && t.get ? t.get(this) : Ve.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = Ve.propHooks[this.prop];
                return this.pos = e = this.options.duration ? x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this
            }
        }, Ve.prototype.init.prototype = Ve.prototype, Ve.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function (t) {
                    x.fx.step[t.prop] ? x.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[x.cssProps[t.prop]] || x.cssHooks[t.prop]) ? x.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, Ve.propHooks.scrollTop = Ve.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, x.each(["toggle", "show", "hide"], (function (t, e) {
            var n = x.fn[e];
            x.fn[e] = function (t, o, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Ye(e, !0), t, o, i)
            }
        })), x.fn.extend({
            fadeTo: function (t, e, n, o) {
                return this.filter(te).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, o)
            },
            animate: function (t, e, n, o) {
                var i = x.isEmptyObject(t),
                    r = x.speed(e, n, o),
                    s = function () {
                        var e = Ue(this, x.extend({}, t), r);
                        (i || x._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, i || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function (t, n, o) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(o)
                };
                return "string" != typeof t && (o = n, n = t, t = e), n && !1 !== t && this.queue(t || "fx", []), this.each((function () {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        r = x.timers,
                        s = x._data(this);
                    if (n) s[n] && s[n].stop && i(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && _e.test(n) && i(s[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(o), e = !1, r.splice(n, 1));
                    (e || !o) && x.dequeue(this, t)
                }))
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each((function () {
                    var e, n = x._data(this),
                        o = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        r = x.timers,
                        s = o ? o.length : 0;
                    for (n.finish = !0, x.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) o[e] && o[e].finish && o[e].finish.call(this);
                    delete n.finish
                }))
            }
        }), x.each({
            slideDown: Ye("show"),
            slideUp: Ye("hide"),
            slideToggle: Ye("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (t, e) {
            x.fn[t] = function (t, n, o) {
                return this.animate(e, t, n, o)
            }
        })), x.speed = function (t, e, n) {
            var o = t && "object" == typeof t ? x.extend({}, t) : {
                complete: n || !n && e || x.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !x.isFunction(e) && e
            };
            return o.duration = x.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in x.fx.speeds ? x.fx.speeds[o.duration] : x.fx.speeds._default, (null == o.queue || !0 === o.queue) && (o.queue = "fx"), o.old = o.complete, o.complete = function () {
                x.isFunction(o.old) && o.old.call(this), o.queue && x.dequeue(this, o.queue)
            }, o
        }, x.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, x.timers = [], x.fx = Ve.prototype.init, x.fx.tick = function () {
            var t, n = x.timers,
                o = 0;
            for (He = x.now(); n.length > o; o++)(t = n[o])() || n[o] !== t || n.splice(o--, 1);
            n.length || x.fx.stop(), He = e
        }, x.fx.timer = function (t) {
            t() && x.timers.push(t) && x.fx.start()
        }, x.fx.interval = 13, x.fx.start = function () {
            Me || (Me = setInterval(x.fx.tick, x.fx.interval))
        }, x.fx.stop = function () {
            clearInterval(Me), Me = null
        }, x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (t) {
            return x.grep(x.timers, (function (e) {
                return t === e.elem
            })).length
        }), x.fn.offset = function (t) {
            if (arguments.length) return t === e ? this : this.each((function (e) {
                x.offset.setOffset(this, t, e)
            }));
            var n, o, r = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                a = s && s.ownerDocument;
            return a ? (n = a.documentElement, x.contains(n, s) ? (typeof s.getBoundingClientRect !== i && (r = s.getBoundingClientRect()), o = Qe(a), {
                top: r.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : r) : void 0
        }, x.offset = {
            setOffset: function (t, e, n) {
                var o = x.css(t, "position");
                "static" === o && (t.style.position = "relative");
                var i, r, s = x(t),
                    a = s.offset(),
                    l = x.css(t, "top"),
                    c = x.css(t, "left"),
                    u = {},
                    d = {};
                ("absolute" === o || "fixed" === o) && x.inArray("auto", [l, c]) > -1 ? (i = (d = s.position()).top, r = d.left) : (i = parseFloat(l) || 0, r = parseFloat(c) || 0), x.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (u.top = e.top - a.top + i), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : s.css(u)
            }
        }, x.fn.extend({
            position: function () {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        o = this[0];
                    return "fixed" === x.css(o, "position") ? e = o.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), x.nodeName(t[0], "html") || (n = t.offset()), n.top += x.css(t[0], "borderTopWidth", !0), n.left += x.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - x.css(o, "marginTop", !0),
                        left: e.left - n.left - x.css(o, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map((function () {
                    for (var t = this.offsetParent || a; t && !x.nodeName(t, "html") && "static" === x.css(t, "position");) t = t.offsetParent;
                    return t || a
                }))
            }
        }), x.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function (t, n) {
            var o = /Y/.test(n);
            x.fn[t] = function (i) {
                return x.access(this, (function (t, i, r) {
                    var s = Qe(t);
                    return r === e ? s ? n in s ? s[n] : s.document.documentElement[i] : t[i] : (s ? s.scrollTo(o ? x(s).scrollLeft() : r, o ? r : x(s).scrollTop()) : t[i] = r, e)
                }), t, i, arguments.length, null)
            }
        })), x.each({
            Height: "height",
            Width: "width"
        }, (function (t, n) {
            x.each({
                padding: "inner" + t,
                content: n,
                "": "outer" + t
            }, (function (o, i) {
                x.fn[i] = function (i, r) {
                    var s = arguments.length && (o || "boolean" != typeof i),
                        a = o || (!0 === i || !0 === r ? "margin" : "border");
                    return x.access(this, (function (n, o, i) {
                        var r;
                        return x.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : i === e ? x.css(n, o, a) : x.style(n, o, i, a)
                    }), n, s ? i : e, s, null)
                }
            }))
        })), x.fn.size = function () {
            return this.length
        }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (t.jQuery = t.$ = x, "function" == typeof define && define.amd && define("jquery", [], (function () {
            return x
        })))
    }(window), $.ajaxPrefilter((function (t, e, n) {
        t.crossDomain && (t.contents.script = !1)
    })), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function (t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function (t) {
    "use strict";
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            o = this;
        return t(this).one("bsTransitionEnd", (function () {
            n = !0
        })), setTimeout((function () {
            n || t(o).trigger(t.support.transition.end)
        }), e), this
    }, t((function () {
        t.support.transition = function () {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    }))
}(jQuery),
function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function (n) {
            t(n).on("click", e, this.close)
        };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
        var o = t(this),
            i = o.attr("data-target");
        i || (i = (i = o.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
        var r = t(document).find(i);

        function s() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s())
    };
    var o = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.alert");
            i || o.data("bs.alert", i = new n(this)), "string" == typeof e && i[e].call(o)
        }))
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function (t) {
    "use strict";
    var e = function (n, o) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, o), this.isLoading = !1
    };

    function n(n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.button"),
                r = "object" == typeof n && n;
            i || o.data("bs.button", i = new e(this, r)), "toggle" == n ? i.toggle() : n && i.setState(n)
        }))
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function (e) {
        var n = "disabled",
            o = this.$element,
            i = o.is("input") ? "val" : "html",
            r = o.data();
        e += "Text", null == r.resetText && o.data("resetText", o[i]()), setTimeout(t.proxy((function () {
            o[i](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(n).removeAttr(n).prop(n, !1))
        }), this), 0)
    }, e.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
        var o = t(e.target).closest(".btn");
        n.call(o, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    }))
}(jQuery),
function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };

    function n(n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.carousel"),
                r = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n),
                s = "string" == typeof n ? n : r.slide;
            i || o.data("bs.carousel", i = new e(this, r)), "number" == typeof n ? i.to(n) : s ? i[s]() : r.interval && i.pause().cycle()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, e.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, e.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, e.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function () {
            e.to(t)
        })) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, e.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, e.prototype.slide = function (n, o) {
        var i = this.$element.find(".item.active"),
            r = o || this.getItemForDirection(n, i),
            s = this.interval,
            a = "next" == n ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), "object" == typeof r && r.length && r[0].offsetWidth, i.addClass(a), r.addClass(a), i.one("bsTransitionEnd", (function () {
                r.removeClass([n, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout((function () {
                    l.$element.trigger(f)
                }), 0)
            })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var i = function (e) {
        var o = t(this),
            i = o.attr("href");
        i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
        var r = o.attr("data-target") || i,
            s = t(document).find(r);
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), o.data()),
                l = o.attr("data-slide-to");
            l && (a.interval = !1), n.call(s, a), l && s.data("bs.carousel").to(l), e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", (function () {
        t('[data-ride="carousel"]').each((function () {
            var e = t(this);
            n.call(e, e.data())
        }))
    }))
}(jQuery),
function (t) {
    "use strict";
    var e = function (n, o) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, o), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function n(e) {
        var n, o = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(o)
    }

    function o(n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.collapse"),
                r = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
            !i && r.toggle && /show|hide/.test(n) && (r.toggle = !1), i || o.data("bs.collapse", i = new e(this, r)), "string" == typeof n && i[n]()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (n = i.data("bs.collapse")) && n.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    i && i.length && (o.call(i, "hide"), n || i.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var n = t.Event("hide.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var o = this.dimension();
                this.$element[o](this.$element[o]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return i.call(this);
                this.$element[o](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }, e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, e.prototype.getParent = function () {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function (e, o) {
            var i = t(o);
            this.addAriaAndCollapsedClass(n(i), i)
        }), this)).end()
    }, e.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = t.fn.collapse;
    t.fn.collapse = o, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
        var i = t(this);
        i.attr("data-target") || e.preventDefault();
        var r = n(i),
            s = r.data("bs.collapse") ? "toggle" : i.data();
        o.call(r, s)
    }))
}(jQuery),
function (t) {
    "use strict";
    var e = '[data-toggle="dropdown"]',
        n = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

    function o(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = "#" !== n ? t(document).find(n) : null;
        return o && o.length ? o : e.parent()
    }

    function i(n) {
        n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each((function () {
            var e = t(this),
                i = o(e),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        })))
    }
    n.VERSION = "3.4.1", n.prototype.toggle = function (e) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var r = o(n),
                s = r.hasClass("open");
            if (i(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, n.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = o(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(e).trigger("focus"), i.trigger("click");
                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && 0 < l && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.dropdown");
            i || o.data("bs.dropdown", i = new n(this)), "string" == typeof e && i[e].call(o)
        }))
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", (function (t) {
        t.stopPropagation()
    })).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function () {
            this.$element.trigger("loaded.bs.modal")
        }), this))
    };

    function n(n, o) {
        return this.each((function () {
            var i = t(this),
                r = i.data("bs.modal"),
                s = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            r || i.data("bs.modal", r = new e(this, s)), "string" == typeof n ? r[n](o) : s.show && r.show(o)
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function (n) {
        var o = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: n
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function () {
            o.$element.one("mouseup.dismiss.bs.modal", (function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            }))
        })), this.backdrop((function () {
            var i = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), i && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: n
            });
            i ? o.$dialog.one("bsTransitionEnd", (function () {
                o.$element.trigger("focus").trigger(r)
            })).emulateTransitionEnd(e.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(r)
        })))
    }, e.prototype.hide = function (n) {
        n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
    }, e.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }), this))
    }, e.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function (t) {
            27 == t.which && this.hide()
        }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, e.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop((function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        }))
    }, e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function (n) {
        var o = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && i;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function (t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }), this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
            r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                o.removeBackdrop(), n && n()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
        } else n && n()
    }, e.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, e.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, e.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, e.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each((function (e, o) {
            var i = o.style.paddingRight,
                r = t(o).css("padding-right");
            t(o).data("padding-right", i).css("padding-right", parseFloat(r) + n + "px")
        })))
    }, e.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function (e, n) {
            var o = t(n).data("padding-right");
            t(n).removeData("padding-right"), n.style.paddingRight = o || ""
        }))
    }, e.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
        var o = t(this),
            i = o.attr("href"),
            r = o.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(document).find(r),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, s.data(), o.data());
        o.is("a") && e.preventDefault(), s.one("show.bs.modal", (function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", (function () {
                o.is(":visible") && o.trigger("focus")
            }))
        })), n.call(s, a, this)
    }))
}(jQuery),
function (t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"],
        n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        o = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        i = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function r(e, r) {
        var s = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(s, r)) return -1 === t.inArray(s, n) || Boolean(e.nodeValue.match(o) || e.nodeValue.match(i));
        for (var a = t(r).filter((function (t, e) {
                return e instanceof RegExp
            })), l = 0, c = a.length; l < c; l++)
            if (s.match(a[l])) return !0;
        return !1
    }

    function s(e, n, o) {
        if (0 === e.length) return e;
        if (o && "function" == typeof o) return o(e);
        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
        var i = document.implementation.createHTMLDocument("sanitization");
        i.body.innerHTML = e;
        for (var s = t.map(n, (function (t, e) {
                return e
            })), a = t(i.body).find("*"), l = 0, c = a.length; l < c; l++) {
            var u = a[l],
                d = u.nodeName.toLowerCase();
            if (-1 !== t.inArray(d, s))
                for (var f = t.map(u.attributes, (function (t) {
                        return t
                    })), p = [].concat(n["*"] || [], n[d] || []), h = 0, g = f.length; h < g; h++) r(f[h], p) || u.removeAttribute(f[h].nodeName);
            else u.parentNode.removeChild(u)
        }
        return i.body.innerHTML
    }
    var a = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
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
            img: ["src", "alt", "title", "width", "height"],
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
            ul: []
        }
    }, a.prototype.init = function (e, n, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), r = i.length; r--;) {
            var s = i[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, a.prototype.getDefaults = function () {
        return a.DEFAULTS
    }, a.prototype.getOptions = function (n) {
        var o = this.$element.data();
        for (var i in o) o.hasOwnProperty(i) && -1 !== t.inArray(i, e) && delete o[i];
        return (n = t.extend({}, this.getDefaults(), o, n)).delay && "number" == typeof n.delay && (n.delay = {
            show: n.delay,
            hide: n.delay
        }), n.sanitize && (n.template = s(n.template, n.whiteList, n.sanitizeFn)), n
    }, a.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, (function (t, o) {
            n[t] != o && (e[t] = o)
        })), e
    }, a.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
            n.timeout = setTimeout((function () {
                "in" == n.hoverState && n.show()
            }), n.options.delay.show)
        }
    }, a.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, a.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout((function () {
                "out" == n.hoverState && n.hide()
            }), n.options.delay.hide)
        }
    }, a.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                i = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), i.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && i.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? i.appendTo(t(document).find(this.options.container)) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = i[0].offsetWidth,
                f = i[0].offsetHeight;
            if (c) {
                var p = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + f > h.bottom ? "top" : "top" == s && u.top - f < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s, i.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, d, f);
            this.applyPlacement(g, s);
            var m = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", m).emulateTransitionEnd(a.TRANSITION_DURATION) : m()
        }
    }, a.prototype.applyPlacement = function (e, n) {
        var o = this.tip(),
            i = o[0].offsetWidth,
            r = o[0].offsetHeight,
            s = parseInt(o.css("margin-top"), 10),
            a = parseInt(o.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            c = o[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - i + l : 2 * u.top - r + c,
            p = d ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(f, o[0][p], d)
    }, a.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, a.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = s(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, a.prototype.hide = function (e) {
        var n = this,
            o = t(this.$tip),
            i = t.Event("hide.bs." + this.type);

        function r() {
            "in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        if (this.$element.trigger(i), !i.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(a.TRANSITION_DURATION) : r(), this.hoverState = null, this
    }, a.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, a.prototype.hasContent = function () {
        return this.getTitle()
    }, a.prototype.getPosition = function (e) {
        var n = (e = e || this.$element)[0],
            o = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = o ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, i, a, l, s)
    }, a.prototype.getCalculatedOffset = function (t, e, n, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, a.prototype.getViewportAdjustedDelta = function (t, e, n, o) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + o;
            a < s.top ? i.top = s.top - a : l > s.top + s.height && (i.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < s.left ? i.left = s.left - c : u > s.right && (i.left = s.left + s.width - u)
        }
        return i
    }, a.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, a.prototype.getUID = function (t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, a.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, a.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, a.prototype.enable = function () {
        this.enabled = !0
    }, a.prototype.disable = function () {
        this.enabled = !1
    }, a.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, a.prototype.toggle = function (e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, a.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide((function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        }))
    }, a.prototype.sanitizeHtml = function (t) {
        return s(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var l = t.fn.tooltip;
    t.fn.tooltip = function (e) {
        return this.each((function () {
            var n = t(this),
                o = n.data("bs.tooltip"),
                i = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new a(this, i)), "string" == typeof e && o[e]())
        }))
    }, t.fn.tooltip.Constructor = a, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = l, this
    }
}(jQuery),
function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        if (this.options.html) {
            var o = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === o && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === o ? "html" : "append"](n)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = function (n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.popover"),
                r = "object" == typeof n && n;
            !i && /destroy|hide/.test(n) || (i || o.data("bs.popover", i = new e(this, r)), "string" == typeof n && i[n]())
        }))
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(n, o) {
        this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            i || o.data("bs.scrollspy", i = new e(this, r)), "string" == typeof n && i[n]()
        }))
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function () {
            var e = t(this),
                i = e.data("target") || e.attr("href"),
                r = /^#./.test(i) && t(i);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + o, i]
            ] || null
        })).sort((function (t, e) {
            return t[0] - e[0]
        })).each((function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        }))
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            o = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), o <= e) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < i[0]) return this.activeTarget = null, this.clear();
        for (t = i.length; t--;) s != r[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(n).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", (function () {
        t('[data-spy="scroll"]').each((function () {
            var e = t(this);
            n.call(e, e.data())
        }))
    }))
}(jQuery),
function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };

    function n(n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.tab");
            i || o.data("bs.tab", i = new e(this)), "string" == typeof n && i[n]()
        }))
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(document).find(o);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), (function () {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                }))
            }
        }
    }, e.prototype.activate = function (n, o, i) {
        var r = o.find("> .active"),
            s = i && t.support.transition && (r.length && r.hasClass("fade") || !!o.find("> .fade").length);

        function a() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), r.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var i = function (e) {
        e.preventDefault(), n.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function (t) {
    "use strict";
    var e = function (n, o) {
        this.options = t.extend({}, e.DEFAULTS, o);
        var i = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = i.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function n(n) {
        return this.each((function () {
            var o = t(this),
                i = o.data("bs.affix"),
                r = "object" == typeof n && n;
            i || o.data("bs.affix", i = new e(this, r)), "string" == typeof n && i[n]()
        }))
    }
    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0,
        target: window
    }, e.prototype.getState = function (t, e, n, o) {
        var i = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return i < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= r.top) && "bottom" : !(i + s <= t - o) && "bottom";
        var a = null == this.affixed,
            l = a ? i : r.top;
        return null != n && i <= n ? "top" : null != o && t - o <= l + (a ? s : e) && "bottom"
    }, e.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }, e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var n = this.$element.height(),
                o = this.options.offset,
                i = o.top,
                r = o.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (r = i = o), "function" == typeof i && (i = o.top(this.$element)), "function" == typeof r && (r = o.bottom(this.$element));
            var a = this.getState(s, n, i, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - n - r
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", (function () {
        t('[data-spy="affix"]').each((function () {
            var e = t(this),
                o = e.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), n.call(e, o)
        }))
    }))
}(jQuery),
function (t, e, n, o) {
    "use strict";

    function i(t, e) {
        var o, i, r, s = [],
            a = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "") ? s = (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]') : s = [o], (a = n(s).index(o)) < 0 && (a = 0), (r = n.fancybox.open(s, e, a)).$trigger = o))
    }
    if (t.console = t.console || {
            info: function (t) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var r = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            s = n(t),
            a = n(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            u = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
                t.clearTimeout(e)
            },
            d = function () {
                var t, n = e.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (void 0 !== n.style[t]) return o[t];
                return "transitionend"
            }(),
            f = function (t) {
                return t && t.length && t[0].offsetHeight
            },
            p = function (t, e) {
                var o = n.extend(!0, {}, t, e);
                return n.each(e, (function (t, e) {
                    n.isArray(e) && (o[t] = e)
                })), o
            },
            h = function (t) {
                var o, i;
                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
            },
            g = function (t, e, o) {
                var i = this;
                i.opts = p({
                    index: o
                }, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = p(i.opts, e)), n.fancybox.isMobile && (i.opts = p(i.opts, i.opts.mobile)), i.id = i.opts.id || ++l, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
            };
        n.extend(g.prototype, {
                init: function () {
                    var o, i, r = this,
                        s = r.group[r.currIndex].opts;
                    s.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(s.buttons, (function (t, e) {
                        i += s.btnTpl[e] || ""
                    })), o = n(r.translate(r, s.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).appendTo(s.parentEl), r.$refs = {
                        container: o
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function (t) {
                        r.$refs[t] = o.find(".fancybox-" + t)
                    })), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
                },
                translate: function (t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, (function (t, e) {
                        return void 0 === n[e] ? t : n[e]
                    }))
                },
                addContent: function (t) {
                    var e, o = this,
                        i = n.makeArray(t);
                    n.each(i, (function (t, e) {
                        var i, r, s, a, l, c = {},
                            u = {};
                        n.isPlainObject(e) ? (c = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (i = n(e)).data() || {}, (u = n.extend(!0, {}, u, u.options)).$orig = i, c.src = o.opts.src || u.src || i.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                            type: "html",
                            src: e + ""
                        }, c.opts = n.extend(!0, {}, o.opts, u), n.isArray(u.buttons) && (c.opts.buttons = u.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = p(c.opts, c.opts.mobile)), r = c.type || c.opts.type, a = c.src || "", !r && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe", c = n.extend(!0, c, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === a.charAt(0) && (r = "inline")), r ? c.type = r : o.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = o.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === o.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [o, c])), "function" === n.type(o.opts.caption) && (c.opts.caption = o.opts.caption.apply(e, [o, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), o.group.push(c)
                    })), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function () {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function (t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function (t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function (t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    })).on("click.fb", "[data-fancybox-zoom]", (function (t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    })), s.on("orientationchange.fb resize.fb", (function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = c((function () {
                            e.update(t)
                        }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function () {
                            e.$refs.stage.show(), e.update(t)
                        }), n.fancybox.isMobile ? 600 : 250))
                    })), a.on("keydown.fb", (function (t) {
                        var o = (n.fancybox ? n.fancybox.getInstance() : null).current,
                            i = t.keyCode || t.which;
                        if (9 != i) return !o.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select") ? void 0 : 8 === i || 27 === i ? (t.preventDefault(), void e.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void e.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, i);
                        o.opts.trapFocus && e.focus(t)
                    })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function (t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    })), e.idleInterval = t.setInterval((function () {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }), 1e3))
                },
                removeEvents: function () {
                    var e = this;
                    s.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function (t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function (t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function (t, e) {
                    var o, i, r, s, a, l, c, u, d, p = this,
                        h = p.group.length;
                    if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
                        if (t = parseInt(t, 10), !(r = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= h)) return !1;
                        if (o = p.firstRun = !Object.keys(p.slides).length, a = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, s = p.createSlide(t), h > 1 && ((r || s.index < h - 1) && p.createSlide(t + 1), (r || s.index > 0) && p.createSlide(t - 1)), p.current = s, p.currIndex = s.index, p.currPos = s.pos, p.trigger("beforeShow", o), p.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = p.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.addClass("fancybox-is-open").trigger("focus"), p.loadSlide(s), void p.preload("image");
                        l = n.fancybox.getTranslate(a.$slide), c = n.fancybox.getTranslate(p.$refs.stage), n.each(p.slides, (function (t, e) {
                            n.fancybox.stop(e.$slide, !0)
                        })), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (d = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(p.slides, (function (t, o) {
                            o.$slide.removeClass("fancybox-animated").removeClass((function (t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            }));
                            var i = o.pos * l.width + o.pos * o.opts.gutter;
                            n.fancybox.setTranslate(o.$slide, {
                                top: 0,
                                left: i - c.left + d
                            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), f(o.$slide), n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: (o.pos - s.pos) * l.width + (o.pos - s.pos) * o.opts.gutter
                            }, e, (function () {
                                o.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === p.currPos && p.complete()
                            }))
                        }))) : e && s.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, u, e, (function () {
                            a.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }), !1)), s.isLoaded ? p.revealContent(s) : p.loadSlide(s), p.preload("image")
                    }
                },
                createSlide: function (t) {
                    var e, o, i = this;
                    return o = (o = t % i.group.length) < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), i.updateSlide(i.slides[t])), i.slides[t]
                },
                scaleToActual: function (t, e, o) {
                    var i, r, s, a, l, c = this,
                        u = c.current,
                        d = u.$content,
                        f = n.fancybox.getTranslate(u.$slide).width,
                        p = n.fancybox.getTranslate(u.$slide).height,
                        h = u.width,
                        g = u.height;
                    c.isAnimating || c.isMoved() || !d || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0, n.fancybox.stop(d), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, (i = n.fancybox.getTranslate(d)).top -= n.fancybox.getTranslate(u.$slide).top, i.left -= n.fancybox.getTranslate(u.$slide).left, a = h / i.width, l = g / i.height, r = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && ((r = i.left * a - (t * a - t)) > 0 && (r = 0), r < f - h && (r = f - h)), g > p && ((s = i.top * l - (e * l - e)) > 0 && (s = 0), s < p - g && (s = p - g)), c.updateCursor(h, g), n.fancybox.animate(d, {
                        top: s,
                        left: r,
                        scaleX: a,
                        scaleY: l
                    }, o || 366, (function () {
                        c.isAnimating = !1
                    })), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function (t) {
                    var e, o = this,
                        i = o.current,
                        r = i.$content;
                    o.isAnimating || o.isMoved() || !r || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(r), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(r, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / r.width(),
                        scaleY: e.height / r.height()
                    }, t || 366, (function () {
                        o.isAnimating = !1
                    })))
                },
                getFitPos: function (t) {
                    var e, o, i, r, s = t.$content,
                        a = t.$slide,
                        l = t.width || t.opts.width,
                        c = t.height || t.opts.height,
                        u = {};
                    return !!(t.isLoaded && s && s.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, o = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), o -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), l && c || (l = e, c = o), (l *= i = Math.min(1, e / l, o / c)) > e - .5 && (l = e), (c *= i) > o - .5 && (c = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - c)) + parseFloat(a.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)), u.width = l, u.height = c, u)
                },
                update: function (t) {
                    var e = this;
                    n.each(e.slides, (function (n, o) {
                        e.updateSlide(o, t)
                    }))
                },
                updateSlide: function (t, e) {
                    var o = this,
                        i = t && t.$content,
                        r = t.width || t.opts.width,
                        s = t.height || t.opts.height,
                        a = t.$slide;
                    o.adjustCaption(t), i && (r || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), o.trigger("onUpdate", t, e)
                },
                centerSlide: function (t) {
                    var e = this,
                        o = e.current,
                        i = o.$slide;
                    !e.isClosing && o && (i.siblings().css({
                        transform: "",
                        opacity: ""
                    }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, (function () {
                        i.css({
                            transform: "",
                            opacity: ""
                        }), o.isComplete || e.complete()
                    }), !1))
                },
                isMoved: function (t) {
                    var e, o, i = t || this.current;
                    return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
                },
                updateCursor: function (t, e) {
                    var o, i, r = this,
                        s = r.current,
                        a = r.$refs.container;
                    s && !r.isClosing && r.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), i = !!(o = r.canPan(t, e)) || r.isZoomable(), a.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? a.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || r.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"))
                },
                isZoomable: function () {
                    var t, e = this,
                        n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function (t, e) {
                    var o = !1,
                        i = this.current,
                        r = i.$content;
                    return void 0 !== t && void 0 !== e ? o = t < i.width && e < i.height : r && (o = (o = n.fancybox.getTranslate(r)).width < i.width && o.height < i.height), o
                },
                canPan: function (t, e) {
                    var o = this.current,
                        i = null,
                        r = !1;
                    return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (r = this.getFitPos(o), void 0 !== t && void 0 !== e ? i = {
                        width: t,
                        height: e
                    } : o.isComplete && (i = n.fancybox.getTranslate(o.$content)), i && r && (r = Math.abs(i.width - r.width) > 1.5 || Math.abs(i.height - r.height) > 1.5)), r
                },
                loadSlide: function (t) {
                    var e, o, i, r = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === r.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                        switch (e = t.type, (o = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                r.setImage(t);
                                break;
                            case "iframe":
                                r.setIframe(t);
                                break;
                            case "html":
                                r.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                                break;
                            case "ajax":
                                r.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function (e, n) {
                                        "success" === n && r.setContent(t, e)
                                    },
                                    error: function (e, n) {
                                        e && "abort" !== n && r.setError(t)
                                    }
                                })), o.one("onReset", (function () {
                                    i.abort()
                                }));
                                break;
                            default:
                                r.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function (t) {
                    var o, i = this;
                    setTimeout((function () {
                        var e = t.$image;
                        i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                    }), 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (o = e.createElement("img")).onerror = function () {
                        n(this).remove(), t.$ghost = null
                    }, o.onload = function () {
                        i.afterLoad(t)
                    }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
                },
                checkSrcset: function (e) {
                    var n, o, i, r, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        i = t.devicePixelRatio || 1, r = t.innerWidth * i, (o = s.split(",").map((function (t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach((function (t, n) {
                                var o = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n) return e.url = t;
                                o && (e.value = o, e.postfix = t[t.length - 1])
                            })), e
                        }))).sort((function (t, e) {
                            return t.value - e.value
                        }));
                        for (var a = 0; a < o.length; a++) {
                            var l = o[a];
                            if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= i) {
                                n = l;
                                break
                            }
                        }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
                    }
                },
                setBigImage: function (t) {
                    var o = this,
                        i = e.createElement("img"),
                        r = n(i);
                    t.$image = r.one("error", (function () {
                        o.setError(t)
                    })).one("load", (function () {
                        var e;
                        t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), r.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function () {
                            t.$ghost && !o.isClosing && t.$ghost.hide()
                        }), Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
                    })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : i.error && r.trigger("error")
                },
                resolveImageSlideSize: function (t, e, n) {
                    var o = parseInt(t.opts.width, 10),
                        i = parseInt(t.opts.height, 10);
                    t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
                },
                setIframe: function (t) {
                    var e, o = this,
                        i = t.opts.iframe,
                        r = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(r), r.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", (function (e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                    })), r.on("refresh.fb", (function () {
                        var n, o = t.$content,
                            s = i.css.width,
                            a = i.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents().find("body")
                            } catch (t) {}
                            n && n.length && n.children().length && (r.css("overflow", "visible"), o.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === s && (s = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), o.css("width", s || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), o.css("height", a || ""), r.css("overflow", "auto")), o.removeClass("fancybox-is-hidden")
                        }
                    }))) : o.afterLoad(t), e.attr("src", t.src), r.one("onReset", (function () {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    }))
                },
                setContent: function (t, e) {
                    var o = this;
                    o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), function (t) {
                        return t && t.hasOwnProperty && t instanceof n
                    }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function () {
                        n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    })), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
                },
                setError: function (t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function (t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function (t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function (t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function (t) {
                        return 2 == t.button && t.preventDefault(), !0
                    })), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function (t) {
                    var e, n = this,
                        o = t || n.current,
                        i = o.opts.caption,
                        r = o.opts.preventCaptionOverlap,
                        s = n.$refs.caption,
                        a = !1;
                    s.toggleClass("fancybox-caption--separate", r), r && i && i.length && (o.pos !== n.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(i), a = e.outerHeight(!0), e.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", a || ""))
                },
                adjustLayout: function (t) {
                    var e, n, o, i, r = t || this.current;
                    r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""), r.$content.outerHeight() > r.$slide.height() + .5 && (o = r.$slide[0].style["padding-bottom"], i = r.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = r.$slide[0].scrollHeight, r.$slide.css("padding-bottom", 0), Math.abs(e - r.$slide[0].scrollHeight) < 1 && (n = i), r.$slide.css("padding-bottom", o))), r.$content.css("margin-bottom", n))
                },
                revealContent: function (t) {
                    var e, o, i, r, s = this,
                        a = t.$slide,
                        l = !1,
                        c = !1,
                        u = s.isMoved(t),
                        d = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !u && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (c = s.getThumbPos(t)) ? l = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - c.width / c.height) > .1), r && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), f(t.$content), void n.fancybox.animate(t.$content, l, i, (function () {
                        s.isAnimating = !1, s.complete()
                    }))) : (s.updateSlide(t), e ? (n.fancybox.stop(a), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, a.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), f(a), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", i, (function () {
                        a.removeClass(o).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === s.currPos && s.complete()
                    }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), d || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                },
                getThumbPos: function (t) {
                    var e, o, i, r, s, a = !1,
                        l = t.$thumb;
                    return !(!l || !h(l[0])) && (e = n.fancybox.getTranslate(l), o = parseFloat(l.css("border-top-width") || 0), i = parseFloat(l.css("border-right-width") || 0), r = parseFloat(l.css("border-bottom-width") || 0), s = parseFloat(l.css("border-left-width") || 0), a = {
                        top: e.top + o,
                        left: e.left + s,
                        width: e.width - i - s,
                        height: e.height - o - r,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && a)
                },
                complete: function () {
                    var t, e = this,
                        o = e.current,
                        i = {};
                    !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, (function (t, o) {
                        o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                    })), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function () {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    })), o.opts.autoFocus && "html" === o.contentType && ((t = o.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function (t) {
                    var e, n, o = this;
                    o.group.length < 2 || (n = o.slides[o.currPos + 1], (e = o.slides[o.currPos - 1]) && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
                },
                focus: function (t, o) {
                    var i, r, s = this,
                        a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    s.isClosing || ((i = (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(a).filter((function () {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    }))).length ? (r = i.index(e.activeElement), t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (r < 0 || r == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
                },
                activate: function () {
                    var t = this;
                    n(".fancybox-container").each((function () {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function (t, e) {
                    var o, i, r, s, a, l, u, d = this,
                        p = d.current,
                        h = function () {
                            d.cleanUp(t)
                        };
                    return !(d.isClosing || (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, c((function () {
                        d.update()
                    })), 1) : (d.removeEvents(), r = p.$content, o = p.opts.animationEffect, i = n.isNumeric(e) ? e : o ? p.opts.animationDuration : 0, p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(p.$slide) : o = !1, p.$slide.siblings().trigger("onReset").remove(), i && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), d.hideLoading(p), d.hideControls(!0), d.updateCursor(), "zoom" !== o || r && i && "image" === p.type && !d.isMoved() && !p.hasError && (u = d.getThumbPos(p)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(r), s = n.fancybox.getTranslate(r), l = {
                        top: s.top,
                        left: s.left,
                        scaleX: s.width / u.width,
                        scaleY: s.height / u.height,
                        width: u.width,
                        height: u.height
                    }, a = p.opts.zoomOpacity, "auto" == a && (a = Math.abs(p.width / p.height - u.width / u.height) > .1), a && (u.opacity = 0), n.fancybox.setTranslate(r, l), f(r), n.fancybox.animate(r, u, i, h), 0) : (o && i ? n.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), 0))))
                },
                cleanUp: function (e) {
                    var o, i, r, s = this,
                        a = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = s.$trigger), a && a.length && (i = t.scrollX, r = t.scrollY, a.trigger("focus"), n("html, body").scrollTop(r).scrollLeft(i))), s.current = null, (o = n.fancybox.getInstance()) ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function (t, e) {
                    var o, i = Array.prototype.slice.call(arguments, 1),
                        r = this,
                        s = e && e.opts ? e : r.current;
                    if (s ? i.unshift(s) : s = r, i.unshift(r), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
                    "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", i) : a.trigger(t + ".fb", i)
                },
                updateControls: function () {
                    var t = this,
                        o = t.current,
                        i = o.index,
                        r = t.$refs.container,
                        s = t.$refs.caption,
                        a = o.opts.caption;
                    o.$slide.trigger("refresh"), a && a.length ? (t.$caption = s, s.children().eq(0).html(a)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), r.find("[data-fancybox-count]").html(t.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), r.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function (t) {
                    var e = ["infobar", "toolbar", "nav"];
                    !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map((function (t) {
                        return "fancybox-show-" + t
                    })).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function () {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: r,
                getInstance: function (t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
                },
                open: function (t, e, n) {
                    return new g(t, e, n)
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function () {
                    this.close(!0), a.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function () {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function (t) {
                    var e;
                    return !(!t || !t.length) && {
                        top: (e = t[0].getBoundingClientRect()).top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    }
                },
                setTranslate: function (t, e) {
                    var n = "",
                        o = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
                },
                animate: function (t, e, o, i, r) {
                    var s, a = this;
                    n.isFunction(o) && (i = o, o = null), a.stop(t), s = a.getTranslate(t), t.on(d, (function (l) {
                        (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: s.width * e.scaleX,
                            height: s.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== r && t.removeClass(e), n.isFunction(i) && i(l))
                    })), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function () {
                        t.trigger(d)
                    }), o + 33))
                },
                stop: function (t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function (t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, i) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, i), this
            }, a.on("click.fb-start", "[data-fancybox]", i), a.on("click.fb-start", "[data-fancybox-trigger]", (function (t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            })),
            function () {
                var t = null;
                a.on("mousedown mouseup focus blur", ".fancybox-button", (function (e) {
                    switch (e.type) {
                        case "mousedown":
                            t = n(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                }))
            }()
    }
}(window, document, jQuery),
function (t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function (e, n, o) {
            if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, (function (t, n) {
                e = e.replace("$" + t, n || "")
            })), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
        };
    t(document).on("objectNeedsType.fb", (function (o, i, r) {
        var s, a, l, c, u, d, f, p = r.src || "",
            h = !1;
        s = t.extend(!0, {}, e, r.opts.media), t.each(s, (function (e, o) {
            if (l = p.match(o.matcher)) {
                if (h = o.type, f = e, d = {}, o.paramPlace && l[o.paramPlace]) {
                    "?" == (u = l[o.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");
                    for (var i = 0; i < u.length; ++i) {
                        var s = u[i].split("=", 2);
                        2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, o.params, r.opts[e], d), p = "function" === t.type(o.url) ? o.url.call(this, l, c, r) : n(o.url, l, c), a = "function" === t.type(o.thumb) ? o.thumb.call(this, l, c, r) : n(o.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, (function (t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                })) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
            }
        })), h ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a), "iframe" === h && (r.opts = t.extend(!0, r.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(r, {
            type: h,
            src: p,
            origSrc: r.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (r.type = r.opts.defaultType)
    }));
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function (t) {
            var e, n = this;
            this[t].loaded ? setTimeout((function () {
                n.done(t)
            })) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function () {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function (e) {
            var n, o;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(o.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(o).on("ended", (function () {
                n.next()
            })))
        }
    };
    t(document).on({
        "afterShow.fb": function (t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function (t, e, n) {
    "use strict";
    var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e)
        },
        r = function (e) {
            var n = [];
            for (var o in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
            return n
        },
        s = function (t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        a = function (t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function (e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                o = t.getComputedStyle(e)["overflow-x"],
                i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                r = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
            return i || r
        },
        c = function (t) {
            for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        u = function (t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    u.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, u.prototype.ontouchstart = function (o) {
        var i = this,
            l = n(o.target),
            u = i.instance,
            d = u.current,
            f = d.$slide,
            p = d.$content,
            h = "touchstart" == o.type;
        if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(o.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!d || u.isAnimating || d.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
            i.realPoints = i.startPoints = r(o), i.startPoints.length && (d.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = l, i.$content = p, i.opts = d.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = u.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
            }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(u.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (l.is(i.$stage) || i.$stage.find(l).length) || (l.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (i.isScrollable = c(l) || c(l.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || d.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
        }
    }, u.prototype.onscroll = function (t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
    }, u.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = r(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, u.prototype.onSwipe = function (e) {
        var r, s = this,
            a = s.instance,
            l = s.isSwiping,
            c = s.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
            top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
            left: c
        }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o((function () {
            s.sliderLastPos && (n.each(s.instance.slides, (function (t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                })
            })), s.$container.addClass("fancybox-is-sliding"))
        }));
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = r > 45 && r < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
            a.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(a.slides, (function (t, e) {
                var o, i;
                n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass((function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                })), e.pos === a.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left
                })
            })), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }, u.prototype.onPan = function () {
        var t = this;
        s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o((function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }, u.prototype.limitMovement = function () {
        var t, e, n, o, i, r, s = this,
            a = s.canvasWidth,
            l = s.canvasHeight,
            c = s.distanceX,
            u = s.distanceY,
            d = s.contentStartPos,
            f = d.left,
            p = d.top,
            h = d.width,
            g = d.height;
        return i = h > a ? f + c : f, r = p + u, t = Math.max(0, .5 * a - .5 * h), e = Math.max(0, .5 * l - .5 * g), n = Math.min(a - h, .5 * a - .5 * h), o = Math.min(l - g, .5 * l - .5 * g), c > 0 && i > t && (i = t - 1 + Math.pow(-t + f + c, .8) || 0), c < 0 && i < n && (i = n + 1 - Math.pow(n - f - c, .8) || 0), u > 0 && r > e && (r = e - 1 + Math.pow(-e + p + u, .8) || 0), u < 0 && r < o && (r = o + 1 - Math.pow(o - p - u, .8) || 0), {
            top: r,
            left: i
        }
    }, u.prototype.limitPosition = function (t, e, n, o) {
        var i = this.canvasWidth,
            r = this.canvasHeight;
        return n > i ? t = (t = t > 0 ? 0 : t) < i - n ? i - n : t : t = Math.max(0, i / 2 - n / 2), o > r ? e = (e = e > 0 ? 0 : e) < r - o ? r - o : e : e = Math.max(0, r / 2 - o / 2), {
            top: e,
            left: t
        }
    }, u.prototype.onZoom = function () {
        var e = this,
            r = e.contentStartPos,
            a = r.width,
            l = r.height,
            c = r.left,
            u = r.top,
            d = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            f = Math.floor(a * d),
            p = Math.floor(l * d),
            h = (a - f) * e.percentageOfImageAtPinchPointX,
            g = (l - p) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            b = {
                top: u + (g + (v - e.centerPointStartY)),
                left: c + (h + y),
                scaleX: d,
                scaleY: d
            };
        e.canTap = !1, e.newWidth = f, e.newHeight = p, e.contentLastPos = b, e.requestId && i(e.requestId), e.requestId = o((function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))
    }, u.prototype.ontouchend = function (t) {
        var o = this,
            s = o.isSwiping,
            a = o.isPanning,
            l = o.isZooming,
            c = o.isScrolling;
        if (o.endPoints = r(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
        o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, a ? o.endPanning() : l ? o.endZooming() : o.endSwiping(s, c)
    }, u.prototype.endSwiping = function (t, e) {
        var o = this,
            i = !1,
            r = o.instance.group.length,
            s = Math.abs(o.distanceX),
            a = "x" == t && r > 1 && (o.dMs > 130 && s > 10 || s > 50);
        o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), i = o.instance.close(!0, 250)) : a && o.distanceX > 0 ? i = o.instance.previous(300) : a && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function () {
        var t, e, o, i = this;
        i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), (o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366))
    }, u.prototype.endZooming = function () {
        var t, e, o, i, r = this,
            s = r.instance.current,
            a = r.newWidth,
            l = r.newHeight;
        r.contentLastPos && (t = r.contentLastPos.left, i = {
            top: e = r.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(r.$content, i), a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (o = r.limitPosition(t, e, a, l), n.fancybox.animate(r.$content, o, 150)))
    }, u.prototype.onTap = function (e) {
        var o, i = this,
            s = n(e.target),
            a = i.instance,
            l = a.current,
            c = e && r(e) || i.startPoints,
            u = c[0] ? c[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
            d = c[0] ? c[0].y - n(t).scrollTop() - i.stagePos.top : 0,
            f = function (t) {
                var o = l.opts[t];
                if (n.isFunction(o) && (o = o.apply(a, [l, e])), o) switch (o) {
                    case "close":
                        a.close(i.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls();
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(u, d) : a.group.length < 2 && a.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
            else if (s.is(".fancybox-slide")) o = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(u - i.tapX) > 50 || Math.abs(d - i.tapY) > 50) return this;
                f("dblclick" + o)
            } else i.tapX = u, i.tapY = d, l.opts["dblclick" + o] && l.opts["dblclick" + o] !== l.opts["click" + o] ? i.tapped = setTimeout((function () {
                i.tapped = null, a.isAnimating || f("click" + o)
            }), 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", (function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    })).on("beforeClose.fb", (function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    }))
}(window, document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function (t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var t = this,
                n = t.instance,
                o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function () {
                t.toggle()
            })), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function (t) {
            var n = this,
                o = n.instance,
                i = o.current;
            i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed), n.timer = setTimeout((function () {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }), i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
        },
        clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function () {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function () {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function (n, o, i, r, s) {
            var a = o && o.SlideShow;
            !a || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (r.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", (function () {
        var n = e.fancybox.getInstance(),
            o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    }))
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = function () {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1] in t) {
                for (var r = 0; r < i.length; r++) n[e[0][r]] = i[r];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function (e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                t[n.exitFullscreen]()
            },
            toggle: function (e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function () {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function () {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(n.fullscreenchange, (function () {
            var t = o.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        }))
    }
    e(t).on({
        "onInit.fb": function (t, e) {
            n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var o = function (t) {
        this.init(t)
    };
    e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
            var e = this,
                n = t.group,
                o = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, r = n.length; i < r && (n[i].thumb && o++, !(o > 1)); i++);
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function () {
                e.toggle()
            })), e.isActive = !0) : e.$button.hide()
        },
        create: function () {
            var t, o = this,
                i = o.instance,
                r = o.opts.parentEl,
                s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(r).addBack().filter(r)), o.$grid.on("click", "a", (function () {
                i.jumpTo(e(this).attr("data-index"))
            }))), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, (function (e, n) {
                (t = n.thumb) || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            })), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function (t) {
            var e, n, o = this,
                i = o.$list,
                r = o.$grid;
            o.instance.current && (n = (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && !e.Thumbs && ((n = new o(e)).isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
            var r = e && e.Thumbs;
            r && r.isActive && 71 === i && (o.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", (function () {
        var t, n, o = e.fancybox.getInstance(),
            i = o.current || null;
        i && ("function" === e.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [o, i])), n = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function (t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, (function (t) {
                return e[t]
            }))
        }(t)).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), e.fancybox.open({
            src: o.translate(o, n),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                    o.$refs.container.one("beforeClose.fb", (function () {
                        t.close(null, 0)
                    })), e.$content.find(".fancybox-share__button").click((function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    }))
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    }))
}(document, jQuery),
function (t, e, n) {
    "use strict";

    function o() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: n.join("-")
        }
    }

    function i(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function r(t) {
        var e, n;
        return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }))
    }), n((function () {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function (t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = r(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function (n, o, i, s) {
                var a;
                i && !1 !== i.opts.hash && (a = r(o)) && (o.currentHash = a + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout((function () {
                    "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
                }), 300)))
            },
            "beforeClose.fb": function (n, o, i) {
                i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
            }
        }), n(t).on("hashchange.fb", (function () {
            var t = o(),
                e = null;
            n.each(n(".fancybox-container").get().reverse(), (function (t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash) return e = i, !1
            })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
        })), setTimeout((function () {
            n.fancybox.getInstance() || i(o())
        }), 50))
    }))
}(window, document, jQuery),
function (t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function (t) {
                var o = e.current,
                    i = (new Date).getTime();
                e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            }))
        }
    })
}(document, jQuery),
function () {
    var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        e = [].slice;
    ! function (t, e) {
        "function" == typeof define && define.amd ? define("waypoints", ["jquery"], (function (n) {
            return e(n, t)
        })) : e(t.jQuery, t)
    }(this, (function (n, o) {
        var i, r, s, a, l, c, u, d, f, p, h, g, m, v, y, b;
        return i = n(o), d = t.call(o, "ontouchstart") >= 0, a = {
            horizontal: {},
            vertical: {}
        }, l = 1, u = {}, c = "waypoints-context-id", h = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", r = function () {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, t.data(c, this.id), u[this.id] = this, t.bind(g, (function () {
                    var t;
                    if (!e.didScroll && !d) return e.didScroll = !0, t = function () {
                        return e.doScroll(), e.didScroll = !1
                    }, o.setTimeout(t, n[b].settings.scrollThrottle)
                })), t.bind(h, (function () {
                    var t;
                    if (!e.didResize) return e.didResize = !0, t = function () {
                        return n[b]("refresh"), e.didResize = !1
                    }, o.setTimeout(t, n[b].settings.resizeThrottle)
                }))
            }
            return t.prototype.doScroll = function () {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !d || t.vertical.oldScroll && t.vertical.newScroll || n[b]("refresh"), n.each(t, (function (t, o) {
                    var i, r, s;
                    return s = [], r = o.newScroll > o.oldScroll, i = r ? o.forward : o.backward, n.each(e.waypoints[t], (function (t, e) {
                        var n, i;
                        return o.oldScroll < (n = e.offset) && n <= o.newScroll || o.newScroll < (i = e.offset) && i <= o.oldScroll ? s.push(e) : void 0
                    })), s.sort((function (t, e) {
                        return t.offset - e.offset
                    })), r || s.reverse(), n.each(s, (function (t, e) {
                        if (e.options.continuous || t === s.length - 1) return e.trigger([i])
                    }))
                })), this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }, t.prototype.refresh = function () {
                var t, e, o, i = this;
                return o = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: o ? 0 : e.left,
                        contextScroll: o ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: o ? 0 : e.top,
                        contextScroll: o ? 0 : this.oldScroll.y,
                        contextDimension: o ? n[b]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, (function (t, e) {
                    return n.each(i.waypoints[t], (function (t, o) {
                        var i, r, s, a, l;
                        if (i = o.options.offset, s = o.offset, r = n.isWindow(o.element) ? 0 : o.$element.offset()[e.offsetProp], n.isFunction(i) ? i = i.apply(o.element) : "string" == typeof i && (i = parseFloat(i), o.options.offset.indexOf("%") > -1 && (i = Math.ceil(e.contextDimension * i / 100))), o.offset = r - e.contextOffset + e.contextScroll - i, (!o.options.onlyOnScroll || null == s) && o.enabled) return null !== s && s < (a = e.oldScroll) && a <= o.offset ? o.trigger([e.backward]) : null !== s && s > (l = e.oldScroll) && l >= o.offset || null === s && e.oldScroll >= o.offset ? o.trigger([e.forward]) : void 0
                    }))
                }))
            }, t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([h, g].join(" ")), delete u[this.id]
            }, t
        }(), s = function () {
            function t(t, e, o) {
                var i, r;
                "bottom-in-view" === (o = n.extend({}, n.fn[y].defaults, o)).offset && (o.offset = function () {
                    var t;
                    return t = n[b]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = o.horizontal ? "horizontal" : "vertical", this.callback = o.handler, this.context = e, this.enabled = o.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = o, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, (i = null != (r = t.data(v)) ? r : []).push(this.id), t.data(v, i)
            }
            return t.prototype.trigger = function (t) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
            }, t.prototype.disable = function () {
                return this.enabled = !1
            }, t.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, t.prototype.destroy = function () {
                return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function (t) {
                var e, o;
                return (o = n(t).data(v)) ? (e = n.extend({}, a.horizontal, a.vertical), n.map(o, (function (t) {
                    return e[t]
                }))) : []
            }, t
        }(), p = {
            init: function (t, e) {
                return null == e && (e = {}), null == e.handler && (e.handler = t), this.each((function () {
                    var t, o, i, a;
                    return t = n(this), i = null != (a = e.context) ? a : n.fn[y].defaults.context, n.isWindow(i) || (i = t.closest(i)), i = n(i), (o = u[i.data(c)]) || (o = new r(i)), new s(t, o, e)
                })), n[b]("refresh"), this
            },
            disable: function () {
                return p._invoke(this, "disable")
            },
            enable: function () {
                return p._invoke(this, "enable")
            },
            destroy: function () {
                return p._invoke(this, "destroy")
            },
            prev: function (t, e) {
                return p._traverse.call(this, t, e, (function (t, e, n) {
                    if (e > 0) return t.push(n[e - 1])
                }))
            },
            next: function (t, e) {
                return p._traverse.call(this, t, e, (function (t, e, n) {
                    if (e < n.length - 1) return t.push(n[e + 1])
                }))
            },
            _traverse: function (t, e, i) {
                var r, s;
                return null == t && (t = "vertical"), null == e && (e = o), s = f.aggregate(e), r = [], this.each((function () {
                    var e;
                    return e = n.inArray(this, s[t]), i(r, e, s[t])
                })), this.pushStack(r)
            },
            _invoke: function (t, e) {
                return t.each((function () {
                    var t;
                    return t = s.getWaypointsByElement(this), n.each(t, (function (t, n) {
                        return n[e](), !0
                    }))
                })), this
            }
        }, n.fn[y] = function () {
            var t, o;
            return o = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[o] ? p[o].apply(this, t) : n.isFunction(o) ? p.init.apply(this, arguments) : n.isPlainObject(o) ? p.init.apply(this, [null, o]) : o ? n.error("The " + o + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[y].defaults = {
            context: o,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, f = {
            refresh: function () {
                return n.each(u, (function (t, e) {
                    return e.refresh()
                }))
            },
            viewportHeight: function () {
                var t;
                return null != (t = o.innerHeight) ? t : i.height()
            },
            aggregate: function (t) {
                var e, o, i;
                return e = a, t && (e = null != (i = u[n(t).data(c)]) ? i.waypoints : void 0), e ? (o = {
                    horizontal: [],
                    vertical: []
                }, n.each(o, (function (t, i) {
                    return n.each(e[t], (function (t, e) {
                        return i.push(e)
                    })), i.sort((function (t, e) {
                        return t.offset - e.offset
                    })), o[t] = n.map(i, (function (t) {
                        return t.element
                    })), o[t] = n.unique(o[t])
                })), o) : []
            },
            above: function (t) {
                return null == t && (t = o), f._filter(t, "vertical", (function (t, e) {
                    return e.offset <= t.oldScroll.y
                }))
            },
            below: function (t) {
                return null == t && (t = o), f._filter(t, "vertical", (function (t, e) {
                    return e.offset > t.oldScroll.y
                }))
            },
            left: function (t) {
                return null == t && (t = o), f._filter(t, "horizontal", (function (t, e) {
                    return e.offset <= t.oldScroll.x
                }))
            },
            right: function (t) {
                return null == t && (t = o), f._filter(t, "horizontal", (function (t, e) {
                    return e.offset > t.oldScroll.x
                }))
            },
            enable: function () {
                return f._invoke("enable")
            },
            disable: function () {
                return f._invoke("disable")
            },
            destroy: function () {
                return f._invoke("destroy")
            },
            extendFn: function (t, e) {
                return p[t] = e
            },
            _invoke: function (t) {
                var e;
                return e = n.extend({}, a.vertical, a.horizontal), n.each(e, (function (e, n) {
                    return n[t](), !0
                }))
            },
            _filter: function (t, e, o) {
                var i, r;
                return (i = u[n(t).data(c)]) ? (r = [], n.each(i.waypoints[e], (function (t, e) {
                    if (o(i, e)) return r.push(e)
                })), r.sort((function (t, e) {
                    return t.offset - e.offset
                })), n.map(r, (function (t) {
                    return t.element
                }))) : []
            }
        }, n[b] = function () {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], f[n] ? f[n].apply(null, t) : f.aggregate.call(null, n)
        }, n[b].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, i.load((function () {
            return n[b]("refresh")
        }))
    }))
}.call(this),
    function (t) {
        "use strict";
        t.fn.countUp = function (e) {
            var n = t.extend({
                time: 2e3,
                delay: 10
            }, e);
            return this.each((function () {
                var e = t(this),
                    o = n;
                e.waypoint((function () {
                    var t = [],
                        n = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : o.time,
                        i = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : o.delay,
                        r = n / i,
                        s = e.text(),
                        a = /[0-9]+,[0-9]+/.test(s);
                    s = s.replace(/,/g, "");
                    for (var l = (/^[0-9]+$/.test(s), /^[0-9]+\.[0-9]+$/.test(s)), c = l ? (s.split(".")[1] || []).length : 0, u = r; u >= 1; u--) {
                        var d = parseInt(Math.round(s / r * u));
                        if (l && (d = parseFloat(s / r * u).toFixed(c)), a)
                            for (;
                                /(\d+)(\d{3})/.test(d.toString());) d = d.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(d)
                    }
                    e.data("counterup-nums", t), e.text("0");
                    e.data("counterup-func", (function () {
                        e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), i) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                    })), setTimeout(e.data("counterup-func"), i)
                }), {
                    offset: "100%",
                    triggerOnce: !0
                })
            }))
        }
    }(jQuery);