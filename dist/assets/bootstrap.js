/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
if (function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
  var n = [],
      i = Object.getPrototypeOf,
      r = n.slice,
      o = n.flat ? function(e) {
          return n.flat.call(e)
      } : function(e) {
          return n.concat.apply([], e)
      },
      s = n.push,
      a = n.indexOf,
      l = {},
      c = l.toString,
      u = l.hasOwnProperty,
      f = u.toString,
      d = f.call(Object),
      h = {},
      p = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType
      },
      g = function(e) {
          return null != e && e === e.window
      },
      m = e.document,
      v = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
      };

  function y(e, t, n) {
      var i, r, o = (n = n || m).createElement("script");
      if (o.text = e, t)
          for (i in v)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
      n.head.appendChild(o).parentNode.removeChild(o)
  }

  function b(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
  }
  var _ = "3.5.1",
      w = function(e, t) {
          return new w.fn.init(e, t)
      };

  function x(e) {
      var t = !!e && "length" in e && e.length,
          n = b(e);
      return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  w.fn = w.prototype = {
      jquery: _,
      constructor: w,
      length: 0,
      toArray: function() {
          return r.call(this)
      },
      get: function(e) {
          return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t
      },
      each: function(e) {
          return w.each(this, e)
      },
      map: function(e) {
          return this.pushStack(w.map(this, (function(t, n) {
              return e.call(t, n, t)
          })))
      },
      slice: function() {
          return this.pushStack(r.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      even: function() {
          return this.pushStack(w.grep(this, (function(e, t) {
              return (t + 1) % 2
          })))
      },
      odd: function() {
          return this.pushStack(w.grep(this, (function(e, t) {
              return t % 2
          })))
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: s,
      sort: n.sort,
      splice: n.splice
  }, w.extend = w.fn.extend = function() {
      var e, t, n, i, r, o, s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || p(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
          if (null != (e = arguments[a]))
              for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, s[t] = w.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      return s
  }, w.extend({
      expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof(n = u.call(t, "constructor") && t.constructor) || f.call(n) !== d))
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      globalEval: function(e, t, n) {
          y(e, {
              nonce: t && t.nonce
          }, n)
      },
      each: function(e, t) {
          var n, i = 0;
          if (x(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else
              for (i in e)
                  if (!1 === t.call(e[i], i, e[i])) break;
          return e
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (x(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : a.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
          return e.length = r, e
      },
      grep: function(e, t, n) {
          for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
          return i
      },
      map: function(e, t, n) {
          var i, r, s = 0,
              a = [];
          if (x(e))
              for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
          else
              for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
          return o(a)
      },
      guid: 1,
      support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase()
  }));
  var E = function(e) {
      var t, n, i, r, o, s, a, l, c, u, f, d, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
          w = e.document,
          x = 0,
          E = 0,
          T = le(),
          C = le(),
          S = le(),
          k = le(),
          D = function(e, t) {
              return e === t && (f = !0), 0
          },
          N = {}.hasOwnProperty,
          A = [],
          j = A.pop,
          L = A.push,
          O = A.push,
          q = A.slice,
          I = function(e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
              return -1
          },
          P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          H = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          M = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
          F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          B = new RegExp(H + "+", "g"),
          W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
          $ = new RegExp("^" + H + "*," + H + "*"),
          U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
          Q = new RegExp(H + "|>"),
          z = new RegExp(F),
          V = new RegExp("^" + R + "$"),
          X = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /HTML$/i,
          K = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function(e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
          },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          re = function(e, t) {
              return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          oe = function() {
              d()
          },
          se = _e((function(e) {
              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }), {
              dir: "parentNode",
              next: "legend"
          });
      try {
          O.apply(A = q.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
      } catch (t) {
          O = {
              apply: A.length ? function(e, t) {
                  L.apply(e, q.call(t))
              } : function(e, t) {
                  for (var n = e.length, i = 0; e[n++] = t[i++];);
                  e.length = n - 1
              }
          }
      }

      function ae(e, t, i, r) {
          var o, a, c, u, f, p, v, y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
          if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
          if (!r && (d(t), t = t || h, g)) {
              if (11 !== w && (f = Z.exec(e)))
                  if (o = f[1]) {
                      if (9 === w) {
                          if (!(c = t.getElementById(o))) return i;
                          if (c.id === o) return i.push(c), i
                      } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                  } else {
                      if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                      if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(o)), i
                  } if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                  if (v = e, y = t, 1 === w && (Q.test(e) || U.test(e))) {
                      for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = _)), a = (p = s(e)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                      v = p.join(",")
                  }
                  try {
                      return O.apply(i, y.querySelectorAll(v)), i
                  } catch (t) {
                      k(e, !0)
                  } finally {
                      u === _ && t.removeAttribute("id")
                  }
              }
          }
          return l(e.replace(W, "$1"), t, i, r)
      }

      function le() {
          var e = [];
          return function t(n, r) {
              return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
          }
      }

      function ce(e) {
          return e[_] = !0, e
      }

      function ue(e) {
          var t = h.createElement("fieldset");
          try {
              return !!e(t)
          } catch (e) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
          }
      }

      function fe(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
      }

      function de(e, t) {
          var n = t && e,
              i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n)
              for (; n = n.nextSibling;)
                  if (n === t) return -1;
          return e ? 1 : -1
      }

      function he(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }

      function pe(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }

      function ge(e) {
          return function(t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
      }

      function me(e) {
          return ce((function(t) {
              return t = +t, ce((function(n, i) {
                  for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
              }))
          }))
      }

      function ve(e) {
          return e && void 0 !== e.getElementsByTagName && e
      }
      for (t in n = ae.support = {}, o = ae.isXML = function(e) {
              var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
              return !Y.test(t || n && n.nodeName || "HTML")
          }, d = ae.setDocument = function(e) {
              var t, r, s = e ? e.ownerDocument || e : w;
              return s != h && 9 === s.nodeType && s.documentElement && (p = (h = s).documentElement, g = !o(h), w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ue((function(e) {
                  return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
              })), n.attributes = ue((function(e) {
                  return e.className = "i", !e.getAttribute("className")
              })), n.getElementsByTagName = ue((function(e) {
                  return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
              })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function(e) {
                  return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
              })), n.getById ? (i.filter.ID = function(e) {
                  var t = e.replace(te, ne);
                  return function(e) {
                      return e.getAttribute("id") === t
                  }
              }, i.find.ID = function(e, t) {
                  if (void 0 !== t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : []
                  }
              }) : (i.filter.ID = function(e) {
                  var t = e.replace(te, ne);
                  return function(e) {
                      var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                      return n && n.value === t
                  }
              }, i.find.ID = function(e, t) {
                  if (void 0 !== t.getElementById && g) {
                      var n, i, r, o = t.getElementById(e);
                      if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                          for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                      }
                      return []
                  }
              }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
              } : function(e, t) {
                  var n, i = [],
                      r = 0,
                      o = t.getElementsByTagName(e);
                  if ("*" === e) {
                      for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                      return i
                  }
                  return o
              }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                  if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
              }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function(e) {
                  var t;
                  p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
              })), ue((function(e) {
                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = h.createElement("input");
                  t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
              }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function(e) {
                  n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
              })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                  return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
              } : function(e, t) {
                  if (t)
                      for (; t = t.parentNode;)
                          if (t === e) return !0;
                  return !1
              }, D = t ? function(e, t) {
                  if (e === t) return f = !0, 0;
                  var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
              } : function(e, t) {
                  if (e === t) return f = !0, 0;
                  var n, i = 0,
                      r = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      a = [t];
                  if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                  if (r === o) return de(e, t);
                  for (n = e; n = n.parentNode;) s.unshift(n);
                  for (n = t; n = n.parentNode;) a.unshift(n);
                  for (; s[i] === a[i];) i++;
                  return i ? de(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
              }), h
          }, ae.matches = function(e, t) {
              return ae(e, null, null, t)
          }, ae.matchesSelector = function(e, t) {
              if (d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                  var i = y.call(e, t);
                  if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
              } catch (e) {
                  k(t, !0)
              }
              return 0 < ae(t, h, null, [e]).length
          }, ae.contains = function(e, t) {
              return (e.ownerDocument || e) != h && d(e), b(e, t)
          }, ae.attr = function(e, t) {
              (e.ownerDocument || e) != h && d(e);
              var r = i.attrHandle[t.toLowerCase()],
                  o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
              return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
          }, ae.escape = function(e) {
              return (e + "").replace(ie, re)
          }, ae.error = function(e) {
              throw new Error("Syntax error, unrecognized expression: " + e)
          }, ae.uniqueSort = function(e) {
              var t, i = [],
                  r = 0,
                  o = 0;
              if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), f) {
                  for (; t = e[o++];) t === e[o] && (r = i.push(o));
                  for (; r--;) e.splice(i[r], 1)
              }
              return u = null, e
          }, r = ae.getText = function(e) {
              var t, n = "",
                  i = 0,
                  o = e.nodeType;
              if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                  } else if (3 === o || 4 === o) return e.nodeValue
              } else
                  for (; t = e[i++];) n += r(t);
              return n
          }, (i = ae.selectors = {
              cacheLength: 50,
              createPseudo: ce,
              match: X,
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
                  ATTR: function(e) {
                      return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                  },
                  CHILD: function(e) {
                      return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                  },
                  PSEUDO: function(e) {
                      var t, n = !e[6] && e[2];
                      return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e ? function() {
                          return !0
                      } : function(e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t
                      }
                  },
                  CLASS: function(e) {
                      var t = T[e + " "];
                      return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && T(e, (function(e) {
                          return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                      }))
                  },
                  ATTR: function(e, t, n) {
                      return function(i) {
                          var r = ae.attr(i, e);
                          return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                      }
                  },
                  CHILD: function(e, t, n, i, r) {
                      var o = "nth" !== e.slice(0, 3),
                          s = "last" !== e.slice(-4),
                          a = "of-type" === t;
                      return 1 === i && 0 === r ? function(e) {
                          return !!e.parentNode
                      } : function(t, n, l) {
                          var c, u, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                              m = t.parentNode,
                              v = a && t.nodeName.toLowerCase(),
                              y = !l && !a,
                              b = !1;
                          if (m) {
                              if (o) {
                                  for (; g;) {
                                      for (d = t; d = d[g];)
                                          if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                      p = g = "only" === e && !p && "nextSibling"
                                  }
                                  return !0
                              }
                              if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                  for (b = (h = (c = (u = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                      if (1 === d.nodeType && ++b && d === t) {
                                          u[e] = [x, h, b];
                                          break
                                      }
                              } else if (y && (b = h = (c = (u = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b)
                                  for (;
                                      (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t)););
                              return (b -= r) === i || b % i == 0 && 0 <= b / i
                          }
                      }
                  },
                  PSEUDO: function(e, t) {
                      var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                      return r[_] ? r(t) : 1 < r.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                          for (var i, o = r(e, t), s = o.length; s--;) e[i = I(e, o[s])] = !(n[i] = o[s])
                      })) : function(e) {
                          return r(e, 0, n)
                      }) : r
                  }
              },
              pseudos: {
                  not: ce((function(e) {
                      var t = [],
                          n = [],
                          i = a(e.replace(W, "$1"));
                      return i[_] ? ce((function(e, t, n, r) {
                          for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                      })) : function(e, r, o) {
                          return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                      }
                  })),
                  has: ce((function(e) {
                      return function(t) {
                          return 0 < ae(e, t).length
                      }
                  })),
                  contains: ce((function(e) {
                      return e = e.replace(te, ne),
                          function(t) {
                              return -1 < (t.textContent || r(t)).indexOf(e)
                          }
                  })),
                  lang: ce((function(e) {
                      return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                          function(t) {
                              var n;
                              do {
                                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                              } while ((t = t.parentNode) && 1 === t.nodeType);
                              return !1
                          }
                  })),
                  target: function(t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id
                  },
                  root: function(e) {
                      return e === p
                  },
                  focus: function(e) {
                      return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function(e) {
                      var t = e.nodeName.toLowerCase();
                      return "input" === t && !!e.checked || "option" === t && !!e.selected
                  },
                  selected: function(e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                  },
                  empty: function(e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                          if (e.nodeType < 6) return !1;
                      return !0
                  },
                  parent: function(e) {
                      return !i.pseudos.empty(e)
                  },
                  header: function(e) {
                      return G.test(e.nodeName)
                  },
                  input: function(e) {
                      return K.test(e.nodeName)
                  },
                  button: function(e) {
                      var t = e.nodeName.toLowerCase();
                      return "input" === t && "button" === e.type || "button" === t
                  },
                  text: function(e) {
                      var t;
                      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                  },
                  first: me((function() {
                      return [0]
                  })),
                  last: me((function(e, t) {
                      return [t - 1]
                  })),
                  eq: me((function(e, t, n) {
                      return [n < 0 ? n + t : n]
                  })),
                  even: me((function(e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e
                  })),
                  odd: me((function(e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e
                  })),
                  lt: me((function(e, t, n) {
                      for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                      return e
                  })),
                  gt: me((function(e, t, n) {
                      for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                      return e
                  }))
              }
          }).pseudos.nth = i.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) i.pseudos[t] = he(t);
      for (t in {
              submit: !0,
              reset: !0
          }) i.pseudos[t] = pe(t);

      function ye() {}

      function be(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i
      }

      function _e(e, t, n) {
          var i = t.dir,
              r = t.next,
              o = r || i,
              s = n && "parentNode" === o,
              a = E++;
          return t.first ? function(t, n, r) {
              for (; t = t[i];)
                  if (1 === t.nodeType || s) return e(t, n, r);
              return !1
          } : function(t, n, l) {
              var c, u, f, d = [x, a];
              if (l) {
                  for (; t = t[i];)
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0
              } else
                  for (; t = t[i];)
                      if (1 === t.nodeType || s)
                          if (u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                          else {
                              if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                              if ((u[o] = d)[2] = e(t, n, l)) return !0
                          } return !1
          }
      }

      function we(e) {
          return 1 < e.length ? function(t, n, i) {
              for (var r = e.length; r--;)
                  if (!e[r](t, n, i)) return !1;
              return !0
          } : e[0]
      }

      function xe(e, t, n, i, r) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
          return s
      }

      function Ee(e, t, n, i, r, o) {
          return i && !i[_] && (i = Ee(i)), r && !r[_] && (r = Ee(r, o)), ce((function(o, s, a, l) {
              var c, u, f, d = [],
                  h = [],
                  p = s.length,
                  g = o || function(e, t, n) {
                      for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                      return n
                  }(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || !o && t ? g : xe(g, d, e, a, l),
                  v = n ? r || (o ? e : p || i) ? [] : s : m;
              if (n && n(m, v, a, l), i)
                  for (c = xe(v, h), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
              if (o) {
                  if (r || e) {
                      if (r) {
                          for (c = [], u = v.length; u--;)(f = v[u]) && c.push(m[u] = f);
                          r(null, v = [], c, l)
                      }
                      for (u = v.length; u--;)(f = v[u]) && -1 < (c = r ? I(o, f) : d[u]) && (o[c] = !(s[c] = f))
                  }
              } else v = xe(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : O.apply(s, v)
          }))
      }

      function Te(e) {
          for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function(e) {
                  return e === t
              }), a, !0), f = _e((function(e) {
                  return -1 < I(t, e)
              }), a, !0), d = [function(e, n, i) {
                  var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                  return t = null, r
              }]; l < o; l++)
              if (n = i.relative[e[l].type]) d = [_e(we(d), n)];
              else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                      for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                      return Ee(1 < l && we(d), 1 < l && be(e.slice(0, l - 1).concat({
                          value: " " === e[l - 2].type ? "*" : ""
                      })).replace(W, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && be(e))
                  }
                  d.push(n)
              } return we(d)
      }
      return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
          var n, r, o, s, a, l, c, u = C[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a;) {
              for (s in n && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = U.exec(a)) && (n = r.shift(), o.push({
                      value: n,
                      type: r[0].replace(W, " ")
                  }), a = a.slice(n.length)), i.filter) !(r = X[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                  value: n,
                  type: s,
                  matches: r
              }), a = a.slice(n.length));
              if (!n) break
          }
          return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
      }, a = ae.compile = function(e, t) {
          var n, r, o, a, l, u, f = [],
              p = [],
              m = S[e + " "];
          if (!m) {
              for (t || (t = s(e)), n = t.length; n--;)(m = Te(t[n]))[_] ? f.push(m) : p.push(m);
              (m = S(e, (r = p, a = 0 < (o = f).length, l = 0 < r.length, u = function(e, t, n, s, u) {
                  var f, p, m, v = 0,
                      y = "0",
                      b = e && [],
                      _ = [],
                      w = c,
                      E = e || l && i.find.TAG("*", u),
                      T = x += null == w ? 1 : Math.random() || .1,
                      C = E.length;
                  for (u && (c = t == h || t || u); y !== C && null != (f = E[y]); y++) {
                      if (l && f) {
                          for (p = 0, t || f.ownerDocument == h || (d(f), n = !g); m = r[p++];)
                              if (m(f, t || h, n)) {
                                  s.push(f);
                                  break
                              } u && (x = T)
                      }
                      a && ((f = !m && f) && v--, e && b.push(f))
                  }
                  if (v += y, a && y !== v) {
                      for (p = 0; m = o[p++];) m(b, _, t, n);
                      if (e) {
                          if (0 < v)
                              for (; y--;) b[y] || _[y] || (_[y] = j.call(s));
                          _ = xe(_)
                      }
                      O.apply(s, _), u && !e && 0 < _.length && 1 < v + o.length && ae.uniqueSort(s)
                  }
                  return u && (x = T, c = w), b
              }, a ? ce(u) : u))).selector = e
          }
          return m
      }, l = ae.select = function(e, t, n, r) {
          var o, l, c, u, f, d = "function" == typeof e && e,
              h = !r && s(e = d.selector || e);
          if (n = n || [], 1 === h.length) {
              if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                  if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                  d && (t = t.parentNode), e = e.slice(l.shift().value.length)
              }
              for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                  if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                      if (l.splice(o, 1), !(e = r.length && be(l))) return O.apply(n, r), n;
                      break
                  }
          }
          return (d || a(e, h))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
      }, n.sortStable = _.split("").sort(D).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function(e) {
          return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
      })), ue((function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      })) || fe("type|href|height|width", (function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      })), n.attributes && ue((function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      })) || fe("value", (function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      })), ue((function(e) {
          return null == e.getAttribute("disabled")
      })) || fe(P, (function(e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      })), ae
  }(e);
  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
  var T = function(e, t, n) {
          for (var i = [], r = void 0 !== n;
              (e = e[t]) && 9 !== e.nodeType;)
              if (1 === e.nodeType) {
                  if (r && w(e).is(n)) break;
                  i.push(e)
              } return i
      },
      C = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      },
      S = w.expr.match.needsContext;

  function k(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function N(e, t, n) {
      return p(t) ? w.grep(e, (function(e, i) {
          return !!t.call(e, i, e) !== n
      })) : t.nodeType ? w.grep(e, (function(e) {
          return e === t !== n
      })) : "string" != typeof t ? w.grep(e, (function(e) {
          return -1 < a.call(t, e) !== n
      })) : w.filter(t, e, n)
  }
  w.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, (function(e) {
          return 1 === e.nodeType
      })))
  }, w.fn.extend({
      find: function(e) {
          var t, n, i = this.length,
              r = this;
          if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
              for (t = 0; t < i; t++)
                  if (w.contains(r[t], this)) return !0
          })));
          for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
          return 1 < i ? w.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(N(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(N(this, e || [], !0))
      },
      is: function(e) {
          return !!N(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
      }
  });
  var A, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e, t, n) {
      var i, r;
      if (!e) return this;
      if (n = n || A, "string" == typeof e) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
              if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), D.test(i[1]) && w.isPlainObject(t))
                  for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this
          }
          return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
  }).prototype = w.fn, A = w(m);
  var L = /^(?:parents|prev(?:Until|All))/,
      O = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };

  function q(e, t) {
      for (;
          (e = e[t]) && 1 !== e.nodeType;);
      return e
  }
  w.fn.extend({
      has: function(e) {
          var t = w(e, this),
              n = t.length;
          return this.filter((function() {
              for (var e = 0; e < n; e++)
                  if (w.contains(this, t[e])) return !0
          }))
      },
      closest: function(e, t) {
          var n, i = 0,
              r = this.length,
              o = [],
              s = "string" != typeof e && w(e);
          if (!S.test(e))
              for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), w.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return T(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return T(e, "parentNode", n)
      },
      next: function(e) {
          return q(e, "nextSibling")
      },
      prev: function(e) {
          return q(e, "previousSibling")
      },
      nextAll: function(e) {
          return T(e, "nextSibling")
      },
      prevAll: function(e) {
          return T(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return T(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return T(e, "previousSibling", n)
      },
      siblings: function(e) {
          return C((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return C(e.firstChild)
      },
      contents: function(e) {
          return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
      }
  }, (function(e, t) {
      w.fn[e] = function(n, i) {
          var r = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (O[e] || w.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r)
      }
  }));
  var I = /[^\x20\t\r\n\f]+/g;

  function P(e) {
      return e
  }

  function H(e) {
      throw e
  }

  function R(e, t, n, i) {
      var r;
      try {
          e && p(r = e.promise) ? r.call(e).done(t).fail(n) : e && p(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
      } catch (e) {
          n.apply(void 0, [e])
      }
  }
  w.Callbacks = function(e) {
      var t, n;
      e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(I) || [], (function(e, t) {
          n[t] = !0
      })), n) : w.extend({}, e);
      var i, r, o, s, a = [],
          l = [],
          c = -1,
          u = function() {
              for (s = s || e.once, o = i = !0; l.length; c = -1)
                  for (r = l.shift(); ++c < a.length;) !1 === a[c].apply(r[0], r[1]) && e.stopOnFalse && (c = a.length, r = !1);
              e.memory || (r = !1), i = !1, s && (a = r ? [] : "")
          },
          f = {
              add: function() {
                  return a && (r && !i && (c = a.length - 1, l.push(r)), function t(n) {
                      w.each(n, (function(n, i) {
                          p(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                      }))
                  }(arguments), r && !i && u()), this
              },
              remove: function() {
                  return w.each(arguments, (function(e, t) {
                      for (var n; - 1 < (n = w.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                  })), this
              },
              has: function(e) {
                  return e ? -1 < w.inArray(e, a) : 0 < a.length
              },
              empty: function() {
                  return a && (a = []), this
              },
              disable: function() {
                  return s = l = [], a = r = "", this
              },
              disabled: function() {
                  return !a
              },
              lock: function() {
                  return s = l = [], r || i || (a = r = ""), this
              },
              locked: function() {
                  return !!s
              },
              fireWith: function(e, t) {
                  return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
              },
              fire: function() {
                  return f.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!o
              }
          };
      return f
  }, w.extend({
      Deferred: function(t) {
          var n = [
                  ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                  ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
              ],
              i = "pending",
              r = {
                  state: function() {
                      return i
                  },
                  always: function() {
                      return o.done(arguments).fail(arguments), this
                  },
                  catch: function(e) {
                      return r.then(null, e)
                  },
                  pipe: function() {
                      var e = arguments;
                      return w.Deferred((function(t) {
                          w.each(n, (function(n, i) {
                              var r = p(e[i[4]]) && e[i[4]];
                              o[i[1]]((function() {
                                  var e = r && r.apply(this, arguments);
                                  e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                              }))
                          })), e = null
                      })).promise()
                  },
                  then: function(t, i, r) {
                      var o = 0;

                      function s(t, n, i, r) {
                          return function() {
                              var a = this,
                                  l = arguments,
                                  c = function() {
                                      var e, c;
                                      if (!(t < o)) {
                                          if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                          c = e && ("object" == typeof e || "function" == typeof e) && e.then, p(c) ? r ? c.call(e, s(o, n, P, r), s(o, n, H, r)) : (o++, c.call(e, s(o, n, P, r), s(o, n, H, r), s(o, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                      }
                                  },
                                  u = r ? c : function() {
                                      try {
                                          c()
                                      } catch (e) {
                                          w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), o <= t + 1 && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l))
                                      }
                                  };
                              t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                          }
                      }
                      return w.Deferred((function(e) {
                          n[0][3].add(s(0, e, p(r) ? r : P, e.notifyWith)), n[1][3].add(s(0, e, p(t) ? t : P)), n[2][3].add(s(0, e, p(i) ? i : H))
                      })).promise()
                  },
                  promise: function(e) {
                      return null != e ? w.extend(e, r) : r
                  }
              },
              o = {};
          return w.each(n, (function(e, t) {
              var s = t[2],
                  a = t[5];
              r[t[1]] = s.add, a && s.add((function() {
                  i = a
              }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              }, o[t[0] + "With"] = s.fireWith
          })), r.promise(o), t && t.call(o, o), o
      },
      when: function(e) {
          var t = arguments.length,
              n = t,
              i = Array(n),
              o = r.call(arguments),
              s = w.Deferred(),
              a = function(e) {
                  return function(n) {
                      i[e] = this, o[e] = 1 < arguments.length ? r.call(arguments) : n, --t || s.resolveWith(i, o)
                  }
              };
          if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();
          for (; n--;) R(o[n], a(n), s.reject);
          return s.promise()
      }
  });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, w.readyException = function(t) {
      e.setTimeout((function() {
          throw t
      }))
  };
  var F = w.Deferred();

  function B() {
      m.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready()
  }
  w.fn.ready = function(e) {
      return F.then(e).catch((function(e) {
          w.readyException(e)
      })), this
  }, w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || F.resolveWith(m, [w])
      }
  }), w.ready.then = F.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
  var W = function(e, t, n, i, r, o, s) {
          var a = 0,
              l = e.length,
              c = null == n;
          if ("object" === b(n))
              for (a in r = !0, n) W(e, t, a, n[a], !0, o, s);
          else if (void 0 !== i && (r = !0, p(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                  return c.call(w(e), n)
              })), t))
              for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
      },
      $ = /^-ms-/,
      U = /-([a-z])/g;

  function Q(e, t) {
      return t.toUpperCase()
  }

  function z(e) {
      return e.replace($, "ms-").replace(U, Q)
  }
  var V = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function X() {
      this.expando = w.expando + X.uid++
  }
  X.uid = 1, X.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))), t
      },
      set: function(e, t, n) {
          var i, r = this.cache(e);
          if ("string" == typeof t) r[z(t)] = n;
          else
              for (i in t) r[z(i)] = t[i];
          return r
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, i = e[this.expando];
          if (void 0 !== i) {
              if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(I) || []).length;
                  for (; n--;) delete i[t[n]]
              }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t)
      }
  };
  var Y = new X,
      K = new X,
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function Z(e, t, n) {
      var i, r;
      if (void 0 === n && 1 === e.nodeType)
          if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
              try {
                  n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
              } catch (e) {}
              K.set(e, t, n)
          } else n = void 0;
      return n
  }
  w.extend({
      hasData: function(e) {
          return K.hasData(e) || Y.hasData(e)
      },
      data: function(e, t, n) {
          return K.access(e, t, n)
      },
      removeData: function(e, t) {
          K.remove(e, t)
      },
      _data: function(e, t, n) {
          return Y.access(e, t, n)
      },
      _removeData: function(e, t) {
          Y.remove(e, t)
      }
  }), w.fn.extend({
      data: function(e, t) {
          var n, i, r, o = this[0],
              s = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (r = K.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                  for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = z(i.slice(5)), Z(o, i, r[i]));
                  Y.set(o, "hasDataAttrs", !0)
              }
              return r
          }
          return "object" == typeof e ? this.each((function() {
              K.set(this, e)
          })) : W(this, (function(t) {
              var n;
              if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
              this.each((function() {
                  K.set(this, e, t)
              }))
          }), null, t, 1 < arguments.length, null, !0)
      },
      removeData: function(e) {
          return this.each((function() {
              K.remove(this, e)
          }))
      }
  }), w.extend({
      queue: function(e, t, n) {
          var i;
          if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, w.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = w.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = w._queueHooks(e, t);
          "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function() {
              w.dequeue(e, t)
          }), o)), !i && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return Y.get(e, n) || Y.access(e, n, {
              empty: w.Callbacks("once memory").add((function() {
                  Y.remove(e, [t + "queue", n])
              }))
          })
      }
  }), w.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
              var n = w.queue(this, e, t);
              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
          }))
      },
      dequeue: function(e) {
          return this.each((function() {
              w.dequeue(this, e)
          }))
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, i = 1,
              r = w.Deferred(),
              o = this,
              s = this.length,
              a = function() {
                  --i || r.resolveWith(o, [o])
              };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
          return a(), r.promise(t)
      }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = m.documentElement,
      re = function(e) {
          return w.contains(e.ownerDocument, e)
      },
      oe = {
          composed: !0
      };
  ie.getRootNode && (re = function(e) {
      return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var se = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
  };

  function ae(e, t, n, i) {
      var r, o, s = 20,
          a = i ? function() {
              return i.cur()
          } : function() {
              return w.css(e, t, "")
          },
          l = a(),
          c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
          u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
      if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--;) w.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
          u *= 2, w.style(e, t, u + c), n = n || []
      }
      return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
  }
  var le = {};

  function ce(e, t) {
      for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Y.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = le[a]) || (o = s.body.appendChild(s.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[a] = l)))) : "none" !== n && (c[u] = "none", Y.set(i, "display", n)));
      for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
      return e
  }
  w.fn.extend({
      show: function() {
          return ce(this, !0)
      },
      hide: function() {
          return ce(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
              se(this) ? w(this).show() : w(this).hide()
          }))
      }
  });
  var ue, fe, de = /^(?:checkbox|radio)$/i,
      he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      pe = /^$|^module$|\/(?:java|ecma)script/i;
  ue = m.createDocumentFragment().appendChild(m.createElement("div")), (fe = m.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ue.appendChild(fe), h.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", h.option = !!ue.lastChild;
  var ge = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };

  function me(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n
  }

  function ve(e, t) {
      for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, h.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;

  function be(e, t, n, i, r) {
      for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
          if ((o = e[h]) || 0 === o)
              if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
              else if (ye.test(o)) {
          for (s = s || f.appendChild(t.createElement("div")), a = (he.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
          w.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
      } else d.push(t.createTextNode(o));
      for (f.textContent = "", h = 0; o = d[h++];)
          if (i && -1 < w.inArray(o, i)) r && r.push(o);
          else if (c = re(o), s = me(f.appendChild(o), "script"), c && ve(s), n)
          for (u = 0; o = s[u++];) pe.test(o.type || "") && n.push(o);
      return f
  }
  var _e = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xe = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
      return !0
  }

  function Te() {
      return !1
  }

  function Ce(e, t) {
      return e === function() {
          try {
              return m.activeElement
          } catch (e) {}
      }() == ("focus" === t)
  }

  function Se(e, t, n, i, r, o) {
      var s, a;
      if ("object" == typeof t) {
          for (a in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], o);
          return e
      }
      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te;
      else if (!r) return e;
      return 1 === o && (s = r, (r = function(e) {
          return w().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = w.guid++)), e.each((function() {
          w.event.add(this, t, r, i, n)
      }))
  }

  function ke(e, t, n) {
      n ? (Y.set(e, t, !1), w.event.add(e, t, {
          namespace: !1,
          handler: function(e) {
              var i, o, s = Y.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                  if (s.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (s = r.call(arguments), Y.set(this, t, s), i = n(this, t), this[t](), s !== (o = Y.get(this, t)) || i ? Y.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
              } else s.length && (Y.set(this, t, {
                  value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
              }), e.stopImmediatePropagation())
          }
      })) : void 0 === Y.get(e, t) && w.event.add(e, t, Ee)
  }
  w.event = {
      global: {},
      add: function(e, t, n, i, r) {
          var o, s, a, l, c, u, f, d, h, p, g, m = Y.get(e);
          if (V(e))
              for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(ie, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(t) {
                      return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                  }), c = (t = (t || "").match(I) || [""]).length; c--;) h = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = w.event.special[h] || {}, u = w.extend({
                  type: h,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && w.expr.match.needsContext.test(r),
                  namespace: p.join(".")
              }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[h] = !0)
      },
      remove: function(e, t, n, i, r) {
          var o, s, a, l, c, u, f, d, h, p, g, m = Y.hasData(e) && Y.get(e);
          if (m && (l = m.events)) {
              for (c = (t = (t || "").match(I) || [""]).length; c--;)
                  if (h = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                      for (f = w.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                      s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || w.removeEvent(e, h, m.handle), delete l[h])
                  } else
                      for (h in l) w.event.remove(e, h + t[c], n, i, !0);
              w.isEmptyObject(l) && Y.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t, n, i, r, o, s, a = new Array(arguments.length),
              l = w.event.fix(e),
              c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
              u = w.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
              for (s = w.event.handlers.call(this, l, c), t = 0;
                  (r = s[t++]) && !l.isPropagationStopped();)
                  for (l.currentTarget = r.elem, n = 0;
                      (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, l), l.result
          }
      },
      handlers: function(e, t) {
          var n, i, r, o, s, a = [],
              l = t.delegateCount,
              c = e.target;
          if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
              for (; c !== this; c = c.parentNode || this)
                  if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                      for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length), s[r] && o.push(i);
                      o.length && a.push({
                          elem: c,
                          handlers: o
                      })
                  } return c = this, l < t.length && a.push({
              elem: c,
              handlers: t.slice(l)
          }), a
      },
      addProp: function(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: p(t) ? function() {
                  if (this.originalEvent) return t(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[e]
              },
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[w.expando] ? e : new w.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          click: {
              setup: function(e) {
                  var t = this || e;
                  return de.test(t.type) && t.click && k(t, "input") && ke(t, "click", Ee), !1
              },
              trigger: function(e) {
                  var t = this || e;
                  return de.test(t.type) && t.click && k(t, "input") && ke(t, "click"), !0
              },
              _default: function(e) {
                  var t = e.target;
                  return de.test(t.type) && t.click && k(t, "input") && Y.get(t, "click") || k(t, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  }, w.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }, w.Event = function(e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
  }, w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, w.event.addProp), w.each({
      focus: "focusin",
      blur: "focusout"
  }, (function(e, t) {
      w.event.special[e] = {
          setup: function() {
              return ke(this, e, Ce), !1
          },
          trigger: function() {
              return ke(this, e), !0
          },
          delegateType: t
      }
  })), w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, (function(e, t) {
      w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, i = e.relatedTarget,
                  r = e.handleObj;
              return i && (i === this || w.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
          }
      }
  })), w.fn.extend({
      on: function(e, t, n, i) {
          return Se(this, e, t, n, i)
      },
      one: function(e, t, n, i) {
          return Se(this, e, t, n, i, 1)
      },
      off: function(e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
          if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function() {
              w.event.remove(this, e, n, t)
          }))
      }
  });
  var De = /<script|<style|<link/i,
      Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
      return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
  }

  function Le(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Oe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function qe(e, t) {
      var n, i, r, o, s, a;
      if (1 === t.nodeType) {
          if (Y.hasData(e) && (a = Y.get(e).events))
              for (r in Y.remove(t, "handle events"), a)
                  for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
          K.hasData(e) && (o = K.access(e), s = w.extend({}, o), K.set(t, s))
      }
  }

  function Ie(e, t, n, i) {
      t = o(t);
      var r, s, a, l, c, u, f = 0,
          d = e.length,
          g = d - 1,
          m = t[0],
          v = p(m);
      if (v || 1 < d && "string" == typeof m && !h.checkClone && Ne.test(m)) return e.each((function(r) {
          var o = e.eq(r);
          v && (t[0] = m.call(this, r, o.html())), Ie(o, t, n, i)
      }));
      if (d && (s = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
          for (l = (a = w.map(me(r, "script"), Le)).length; f < d; f++) c = r, f !== g && (c = w.clone(c, !0, !0), l && w.merge(a, me(c, "script"))), n.call(e[f], c, f);
          if (l)
              for (u = a[a.length - 1].ownerDocument, w.map(a, Oe), f = 0; f < l; f++) c = a[f], pe.test(c.type || "") && !Y.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                  nonce: c.nonce || c.getAttribute("nonce")
              }, u) : y(c.textContent.replace(Ae, ""), c, u))
      }
      return e
  }

  function Pe(e, t, n) {
      for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
      return e
  }
  w.extend({
      htmlPrefilter: function(e) {
          return e
      },
      clone: function(e, t, n) {
          var i, r, o, s, a, l, c, u = e.cloneNode(!0),
              f = re(e);
          if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
              for (s = me(u), i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
          if (t)
              if (n)
                  for (o = o || me(e), s = s || me(u), i = 0, r = o.length; i < r; i++) qe(o[i], s[i]);
              else qe(e, u);
          return 0 < (s = me(u, "script")).length && ve(s, !f && me(e, "script")), u
      },
      cleanData: function(e) {
          for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (V(n)) {
                  if (t = n[Y.expando]) {
                      if (t.events)
                          for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                      n[Y.expando] = void 0
                  }
                  n[K.expando] && (n[K.expando] = void 0)
              }
      }
  }), w.fn.extend({
      detach: function(e) {
          return Pe(this, e, !0)
      },
      remove: function(e) {
          return Pe(this, e)
      },
      text: function(e) {
          return W(this, (function(e) {
              return void 0 === e ? w.text(this) : this.empty().each((function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              }))
          }), null, e, arguments.length)
      },
      append: function() {
          return Ie(this, arguments, (function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
          }))
      },
      prepend: function() {
          return Ie(this, arguments, (function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = je(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          }))
      },
      before: function() {
          return Ie(this, arguments, (function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          }))
      },
      after: function() {
          return Ie(this, arguments, (function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          }))
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map((function() {
              return w.clone(this, e, t)
          }))
      },
      html: function(e) {
          return W(this, (function(e) {
              var t = this[0] || {},
                  n = 0,
                  i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !De.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = w.htmlPrefilter(e);
                  try {
                      for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }), null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return Ie(this, arguments, (function(t) {
              var n = this.parentNode;
              w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
          }), e)
      }
  }), w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, (function(e, t) {
      w.fn[e] = function(e) {
          for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[t](n), s.apply(i, n.get());
          return this.pushStack(i)
      }
  }));
  var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function(t) {
          var n = t.ownerDocument.defaultView;
          return n && n.opener || (n = e), n.getComputedStyle(t)
      },
      Me = function(e, t, n) {
          var i, r, o = {};
          for (r in t) o[r] = e.style[r], e.style[r] = t[r];
          for (r in i = n.call(e), t) e.style[r] = o[r];
          return i
      },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
      var i, r, o, s, a = e.style;
      return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = w.style(e, t)), !h.pixelBoxStyles() && He.test(s) && Fe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function We(e, t) {
      return {
          get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }! function() {
      function t() {
          if (u) {
              c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
              var t = e.getComputedStyle(u);
              i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", o = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
          }
      }

      function n(e) {
          return Math.round(parseFloat(e))
      }
      var i, r, o, s, a, l, c = m.createElement("div"),
          u = m.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(h, {
          boxSizingReliable: function() {
              return t(), r
          },
          pixelBoxStyles: function() {
              return t(), s
          },
          pixelPosition: function() {
              return t(), i
          },
          reliableMarginLeft: function() {
              return t(), l
          },
          scrollboxSize: function() {
              return t(), o
          },
          reliableTrDimensions: function() {
              var t, n, i, r;
              return null == a && (t = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), a = 3 < parseInt(r.height), ie.removeChild(t)), a
          }
      }))
  }();
  var $e = ["Webkit", "Moz", "ms"],
      Ue = m.createElement("div").style,
      Qe = {};

  function ze(e) {
      return w.cssProps[e] || Qe[e] || (e in Ue ? e : Qe[e] = function(e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
              if ((e = $e[n] + t) in Ue) return e
      }(e) || e)
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ye = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Ke = {
          letterSpacing: "0",
          fontWeight: "400"
      };

  function Ge(e, t, n) {
      var i = te.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Je(e, t, n, i, r, o) {
      var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, r) : a += w.css(e, "border" + ne[s] + "Width", !0, r));
      return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
  }

  function Ze(e, t, n) {
      var i = Re(e),
          r = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
          o = r,
          s = Be(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (He.test(s)) {
          if (!n) return s;
          s = "auto"
      }
      return (!h.boxSizingReliable() && r || !h.reliableTrDimensions() && k(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === w.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
  }

  function et(e, t, n, i, r) {
      return new et.prototype.init(e, t, n, i, r)
  }
  w.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = Be(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r, o, s, a = z(t),
                  l = Xe.test(t),
                  c = e.style;
              if (l || (t = ze(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
              "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
          }
      },
      css: function(e, t, n, i) {
          var r, o, s, a = z(t);
          return Xe.test(t) || (t = ze(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in Ke && (r = Ke[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
      }
  }), w.each(["height", "width"], (function(e, t) {
      w.cssHooks[t] = {
          get: function(e, n, i) {
              if (n) return !Ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : Me(e, Ye, (function() {
                  return Ze(e, t, i)
              }))
          },
          set: function(e, n, i) {
              var r, o = Re(e),
                  s = !h.scrollboxSize() && "absolute" === o.position,
                  a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                  l = i ? Je(e, t, i, a, o) : 0;
              return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ge(0, n, l)
          }
      }
  })), w.cssHooks.marginLeft = We(h.reliableMarginLeft, (function(e, t) {
      if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
          marginLeft: 0
      }, (function() {
          return e.getBoundingClientRect().left
      }))) + "px"
  })), w.each({
      margin: "",
      padding: "",
      border: "Width"
  }, (function(e, t) {
      w.cssHooks[e + t] = {
          expand: function(n) {
              for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
              return r
          }
      }, "margin" !== e && (w.cssHooks[e + t].set = Ge)
  })), w.fn.extend({
      css: function(e, t) {
          return W(this, (function(e, t, n) {
              var i, r, o = {},
                  s = 0;
              if (Array.isArray(t)) {
                  for (i = Re(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
                  return o
              }
              return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          }), e, t, 1 < arguments.length)
      }
  }), ((w.Tween = et).prototype = {
      constructor: et,
      init: function(e, t, n, i, r, o) {
          this.elem = e, this.prop = n, this.easing = r || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = et.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
      }
  }).init.prototype = et.prototype, (et.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  }).scrollTop = et.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, w.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  }, w.fx = et.prototype.init, w.fx.step = {};
  var tt, nt, it, rt, ot = /^(?:toggle|show|hide)$/,
      st = /queueHooks$/;

  function at() {
      nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
  }

  function lt() {
      return e.setTimeout((function() {
          tt = void 0
      })), tt = Date.now()
  }

  function ct(e, t) {
      var n, i = 0,
          r = {
              height: e
          };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
  }

  function ut(e, t, n) {
      for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = r.length; o < s; o++)
          if (i = r[o].call(n, t, e)) return i
  }

  function ft(e, t, n) {
      var i, r, o = 0,
          s = ft.prefilters.length,
          a = w.Deferred().always((function() {
              delete l.elem
          })),
          l = function() {
              if (r) return !1;
              for (var t = tt || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
              return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
          },
          c = a.promise({
              elem: e,
              props: w.extend({}, t),
              opts: w.extend(!0, {
                  specialEasing: {},
                  easing: w.easing._default
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: tt || lt(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                  var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                  return c.tweens.push(i), i
              },
              stop: function(t) {
                  var n = 0,
                      i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
              }
          }),
          u = c.props;
      for (function(e, t) {
              var n, i, r, o, s;
              for (n in e)
                  if (r = t[i = z(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
                      for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                  else t[i] = r
          }(u, c.opts.specialEasing); o < s; o++)
          if (i = ft.prefilters[o].call(c, e, u, c.opts)) return p(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      return w.map(u, ut, c), p(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
          elem: e,
          anim: c,
          queue: c.opts.queue
      })), c
  }
  w.Animation = w.extend(ft, {
      tweeners: {
          "*": [function(e, t) {
              var n = this.createTween(e, t);
              return ae(n.elem, e, te.exec(t), n), n
          }]
      },
      tweener: function(e, t) {
          p(e) ? (t = e, e = ["*"]) : e = e.match(I);
          for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
      },
      prefilters: [function(e, t, n) {
          var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
              d = this,
              h = {},
              p = e.style,
              g = e.nodeType && se(e),
              m = Y.get(e, "fxshow");
          for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                  s.unqueued || a()
              }), s.unqueued++, d.always((function() {
                  d.always((function() {
                      s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
                  }))
              }))), t)
              if (r = t[i], ot.test(r)) {
                  if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                      if ("show" !== r || !m || void 0 === m[i]) continue;
                      g = !0
                  }
                  h[i] = m && m[i] || w.style(e, i)
              } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
              for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = w.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (d.done((function() {
                      p.display = c
                  })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                  }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                  display: c
              }), o && (m.hidden = !g), g && ce([e], !0), d.done((function() {
                  for (i in g || ce([e]), Y.remove(e, "fxshow"), h) w.style(e, i, h[i])
              }))), l = ut(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
      }],
      prefilter: function(e, t) {
          t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
      }
  }), w.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? w.extend({}, e) : {
          complete: n || !n && t || p(e) && e,
          duration: e,
          easing: n && t || t && !p(t) && t
      };
      return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
      }, i
  }, w.fn.extend({
      fadeTo: function(e, t, n, i) {
          return this.filter(se).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, i)
      },
      animate: function(e, t, n, i) {
          var r = w.isEmptyObject(e),
              o = w.speed(t, n, i),
              s = function() {
                  var t = ft(this, w.extend({}, e), o);
                  (r || Y.get(this, "finish")) && t.stop(!0)
              };
          return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
          var i = function(e) {
              var t = e.stop;
              delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
              var t = !0,
                  r = null != e && e + "queueHooks",
                  o = w.timers,
                  s = Y.get(this);
              if (r) s[r] && s[r].stop && i(s[r]);
              else
                  for (r in s) s[r] && s[r].stop && st.test(r) && i(s[r]);
              for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
              !t && n || w.dequeue(this, e)
          }))
      },
      finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each((function() {
              var t, n = Y.get(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = w.timers,
                  s = i ? i.length : 0;
              for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish
          }))
      }
  }), w.each(["toggle", "show", "hide"], (function(e, t) {
      var n = w.fn[t];
      w.fn[t] = function(e, i, r) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, r)
      }
  })), w.each({
      slideDown: ct("show"),
      slideUp: ct("hide"),
      slideToggle: ct("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, (function(e, t) {
      w.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i)
      }
  })), w.timers = [], w.fx.tick = function() {
      var e, t = 0,
          n = w.timers;
      for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), tt = void 0
  }, w.fx.timer = function(e) {
      w.timers.push(e), w.fx.start()
  }, w.fx.interval = 13, w.fx.start = function() {
      nt || (nt = !0, at())
  }, w.fx.stop = function() {
      nt = null
  }, w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  }, w.fn.delay = function(t, n) {
      return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function() {
              e.clearTimeout(r)
          }
      }))
  }, it = m.createElement("input"), rt = m.createElement("select").appendChild(m.createElement("option")), it.type = "checkbox", h.checkOn = "" !== it.value, h.optSelected = rt.selected, (it = m.createElement("input")).value = "t", it.type = "radio", h.radioValue = "t" === it.value;
  var dt, ht = w.expr.attrHandle;
  w.fn.extend({
      attr: function(e, t) {
          return W(this, w.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
          return this.each((function() {
              w.removeAttr(this, e)
          }))
      }
  }), w.extend({
      attr: function(e, t, n) {
          var i, r, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!h.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, i = 0,
              r = t && t.match(I);
          if (r && 1 === e.nodeType)
              for (; n = r[i++];) e.removeAttribute(n)
      }
  }), dt = {
      set: function(e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
      }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function(e, t, i) {
          var r, o, s = t.toLowerCase();
          return i || (o = ht[s], ht[s] = r, r = null != n(e, t, i) ? s : null, ht[s] = o), r
      }
  }));
  var pt = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function mt(e) {
      return (e.match(I) || []).join(" ")
  }

  function vt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }

  function yt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
  }
  w.fn.extend({
      prop: function(e, t) {
          return W(this, w.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
          return this.each((function() {
              delete this[w.propFix[e] || e]
          }))
      }
  }), w.extend({
      prop: function(e, t, n) {
          var i, r, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, r = w.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = w.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : pt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          for: "htmlFor",
          class: "className"
      }
  }), h.optSelected || (w.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
      w.propFix[this.toLowerCase()] = this
  })), w.fn.extend({
      addClass: function(e) {
          var t, n, i, r, o, s, a, l = 0;
          if (p(e)) return this.each((function(t) {
              w(this).addClass(e.call(this, t, vt(this)))
          }));
          if ((t = yt(e)).length)
              for (; n = this[l++];)
                  if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                      for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (a = mt(i)) && n.setAttribute("class", a)
                  } return this
      },
      removeClass: function(e) {
          var t, n, i, r, o, s, a, l = 0;
          if (p(e)) return this.each((function(t) {
              w(this).removeClass(e.call(this, t, vt(this)))
          }));
          if (!arguments.length) return this.attr("class", "");
          if ((t = yt(e)).length)
              for (; n = this[l++];)
                  if (r = vt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                      for (s = 0; o = t[s++];)
                          for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                      r !== (a = mt(i)) && n.setAttribute("class", a)
                  } return this
      },
      toggleClass: function(e, t) {
          var n = typeof e,
              i = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each((function(n) {
              w(this).toggleClass(e.call(this, n, vt(this), t), t)
          })) : this.each((function() {
              var t, r, o, s;
              if (i)
                  for (r = 0, o = w(this), s = yt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
          }))
      },
      hasClass: function(e) {
          var t, n, i = 0;
          for (t = " " + e + " "; n = this[i++];)
              if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t)) return !0;
          return !1
      }
  });
  var bt = /\r/g;
  w.fn.extend({
      val: function(e) {
          var t, n, i, r = this[0];
          return arguments.length ? (i = p(e), this.each((function(n) {
              var r;
              1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function(e) {
                  return null == e ? "" : e + ""
              }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
          }))) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
      }
  }), w.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = w.find.attr(e, "value");
                  return null != t ? t : mt(w.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, n, i, r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                  for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                          if (t = w(n).val(), s) return t;
                          a.push(t)
                      } return a
              },
              set: function(e, t) {
                  for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                  return n || (e.selectedIndex = -1), o
              }
          }
      }
  }), w.each(["radio", "checkbox"], (function() {
      w.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
          }
      }, h.checkOn || (w.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  })), h.focusin = "onfocusin" in e;
  var _t = /^(?:focusinfocus|focusoutblur)$/,
      wt = function(e) {
          e.stopPropagation()
      };
  w.extend(w.event, {
      trigger: function(t, n, i, r) {
          var o, s, a, l, c, f, d, h, v = [i || m],
              y = u.call(t, "type") ? t.type : t,
              b = u.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = h = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
              if (!r && !d.noBubble && !g(i)) {
                  for (l = d.delegateType || y, _t.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), a = s;
                  a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e)
              }
              for (o = 0;
                  (s = v[o++]) && !t.isPropagationStopped();) h = s, t.type = 1 < o ? l : d.bindType || y, (f = (Y.get(s, "events") || Object.create(null))[t.type] && Y.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && V(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
              return t.type = y, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !V(i) || c && p(i[y]) && !g(i) && ((a = i[c]) && (i[c] = null), w.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, wt), i[y](), t.isPropagationStopped() && h.removeEventListener(y, wt), w.event.triggered = void 0, a && (i[c] = a)), t.result
          }
      },
      simulate: function(e, t, n) {
          var i = w.extend(new w.Event, n, {
              type: e,
              isSimulated: !0
          });
          w.event.trigger(i, null, t)
      }
  }), w.fn.extend({
      trigger: function(e, t) {
          return this.each((function() {
              w.event.trigger(e, t, this)
          }))
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0)
      }
  }), h.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
  }, (function(e, t) {
      var n = function(e) {
          w.event.simulate(t, e.target, w.event.fix(e))
      };
      w.event.special[t] = {
          setup: function() {
              var i = this.ownerDocument || this.document || this,
                  r = Y.access(i, t);
              r || i.addEventListener(e, n, !0), Y.access(i, t, (r || 0) + 1)
          },
          teardown: function() {
              var i = this.ownerDocument || this.document || this,
                  r = Y.access(i, t) - 1;
              r ? Y.access(i, t, r) : (i.removeEventListener(e, n, !0), Y.remove(i, t))
          }
      }
  }));
  var xt = e.location,
      Et = {
          guid: Date.now()
      },
      Tt = /\?/;
  w.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (t) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
  };
  var Ct = /\[\]$/,
      St = /\r?\n/g,
      kt = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;

  function Nt(e, t, n, i) {
      var r;
      if (Array.isArray(t)) w.each(t, (function(t, r) {
          n || Ct.test(e) ? i(e, r) : Nt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
      }));
      else if (n || "object" !== b(t)) i(e, t);
      else
          for (r in t) Nt(e + "[" + r + "]", t[r], n, i)
  }
  w.param = function(e, t) {
      var n, i = [],
          r = function(e, t) {
              var n = p(t) ? t() : t;
              i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
          r(this.name, this.value)
      }));
      else
          for (n in e) Nt(n, e[n], t, r);
      return i.join("&")
  }, w.fn.extend({
      serialize: function() {
          return w.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map((function() {
              var e = w.prop(this, "elements");
              return e ? w.makeArray(e) : this
          })).filter((function() {
              var e = this.type;
              return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !kt.test(e) && (this.checked || !de.test(e))
          })).map((function(e, t) {
              var n = w(this).val();
              return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                  return {
                      name: t.name,
                      value: e.replace(St, "\r\n")
                  }
              })) : {
                  name: t.name,
                  value: n.replace(St, "\r\n")
              }
          })).get()
      }
  });
  var At = /%20/g,
      jt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      qt = /^(?:GET|HEAD)$/,
      It = /^\/\//,
      Pt = {},
      Ht = {},
      Rt = "*/".concat("*"),
      Mt = m.createElement("a");

  function Ft(e) {
      return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var i, r = 0,
              o = t.toLowerCase().match(I) || [];
          if (p(n))
              for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
  }

  function Bt(e, t, n, i) {
      var r = {},
          o = e === Ht;

      function s(a) {
          var l;
          return r[a] = !0, w.each(e[a] || [], (function(e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
          })), l
      }
      return s(t.dataTypes[0]) || !r["*"] && s("*")
  }

  function Wt(e, t) {
      var n, i, r = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && w.extend(!0, e, i), e
  }
  Mt.href = xt.href, w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: xt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Rt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": w.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
      },
      ajaxPrefilter: Ft(Pt),
      ajaxTransport: Ft(Ht),
      ajax: function(t, n) {
          "object" == typeof t && (n = t, t = void 0), n = n || {};
          var i, r, o, s, a, l, c, u, f, d, h = w.ajaxSetup({}, n),
              p = h.context || h,
              g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
              v = w.Deferred(),
              y = w.Callbacks("once memory"),
              b = h.statusCode || {},
              _ = {},
              x = {},
              E = "canceled",
              T = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (c) {
                          if (!s)
                              for (s = {}; t = Ot.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                          t = s[e.toLowerCase() + " "]
                      }
                      return null == t ? null : t.join(", ")
                  },
                  getAllResponseHeaders: function() {
                      return c ? o : null
                  },
                  setRequestHeader: function(e, t) {
                      return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, _[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return null == c && (h.mimeType = e), this
                  },
                  statusCode: function(e) {
                      var t;
                      if (e)
                          if (c) T.always(e[T.status]);
                          else
                              for (t in e) b[t] = [b[t], e[t]];
                      return this
                  },
                  abort: function(e) {
                      var t = e || E;
                      return i && i.abort(t), C(0, t), this
                  }
              };
          if (v.promise(T), h.url = ((t || h.url || xt.href) + "").replace(It, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
              l = m.createElement("a");
              try {
                  l.href = h.url, l.href = l.href, h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host
              } catch (t) {
                  h.crossDomain = !0
              }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Pt, h, n, T), c) return T;
          for (f in (u = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), r = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (Tt.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Lt, "$1"), d = (Tt.test(r) ? "&" : "?") + "_=" + Et.guid++ + d), h.url = r + d), h.ifModified && (w.lastModified[r] && T.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && T.setRequestHeader("If-None-Match", w.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);
          if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c)) return T.abort();
          if (E = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), i = Bt(Ht, h, n, T)) {
              if (T.readyState = 1, u && g.trigger("ajaxSend", [T, h]), c) return T;
              h.async && 0 < h.timeout && (a = e.setTimeout((function() {
                  T.abort("timeout")
              }), h.timeout));
              try {
                  c = !1, i.send(_, C)
              } catch (t) {
                  if (c) throw t;
                  C(-1, t)
              }
          } else C(-1, "No Transport");

          function C(t, n, s, l) {
              var f, d, m, _, x, E = n;
              c || (c = !0, a && e.clearTimeout(a), i = void 0, o = l || "", T.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, s && (_ = function(e, t, n) {
                  for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                      for (r in a)
                          if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break
                          } if (l[0] in n) o = l[0];
                  else {
                      for (r in n) {
                          if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break
                          }
                          s || (s = r)
                      }
                      o = o || s
                  }
                  if (o) return o !== l[0] && l.unshift(o), n[o]
              }(h, T, s)), !f && -1 < w.inArray("script", h.dataTypes) && (h.converters["text script"] = function() {}), _ = function(e, t, n, i) {
                  var r, o, s, a, l, c = {},
                      u = e.dataTypes.slice();
                  if (u[1])
                      for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                  for (o = u.shift(); o;)
                      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                      if (!(s = c[l + " " + o] || c["* " + o]))
                          for (r in c)
                              if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                  !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                  break
                              } if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else try {
                              t = s(t)
                          } catch (e) {
                              return {
                                  state: "parsererror",
                                  error: s ? e : "No conversion from " + l + " to " + o
                              }
                          }
                  }
                  return {
                      state: "success",
                      data: t
                  }
              }(h, _, T, f), f ? (h.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (w.etag[r] = x)), 204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = _.state, d = _.data, f = !(m = _.error))) : (m = E, !t && E || (E = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || E) + "", f ? v.resolveWith(p, [d, E, T]) : v.rejectWith(p, [T, E, m]), T.statusCode(b), b = void 0, u && g.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : m]), y.fireWith(p, [T, E]), u && (g.trigger("ajaxComplete", [T, h]), --w.active || w.event.trigger("ajaxStop")))
          }
          return T
      },
      getJSON: function(e, t, n) {
          return w.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return w.get(e, void 0, t, "script")
      }
  }), w.each(["get", "post"], (function(e, t) {
      w[t] = function(e, n, i, r) {
          return p(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
              url: e,
              type: t,
              dataType: r,
              data: n,
              success: i
          }, w.isPlainObject(e) && e))
      }
  })), w.ajaxPrefilter((function(e) {
      var t;
      for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  })), w._evalUrl = function(e, t, n) {
      return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
              "text script": function() {}
          },
          dataFilter: function(e) {
              w.globalEval(e, t, n)
          }
      })
  }, w.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (p(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
              for (var e = this; e.firstElementChild;) e = e.firstElementChild;
              return e
          })).append(this)), this
      },
      wrapInner: function(e) {
          return p(e) ? this.each((function(t) {
              w(this).wrapInner(e.call(this, t))
          })) : this.each((function() {
              var t = w(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          }))
      },
      wrap: function(e) {
          var t = p(e);
          return this.each((function(n) {
              w(this).wrapAll(t ? e.call(this, n) : e)
          }))
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each((function() {
              w(this).replaceWith(this.childNodes)
          })), this
      }
  }), w.expr.pseudos.hidden = function(e) {
      return !w.expr.pseudos.visible(e)
  }, w.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, w.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch (e) {}
  };
  var $t = {
          0: 200,
          1223: 204
      },
      Ut = w.ajaxSettings.xhr();
  h.cors = !!Ut && "withCredentials" in Ut, h.ajax = Ut = !!Ut, w.ajaxTransport((function(t) {
      var n, i;
      if (h.cors || Ut && !t.crossDomain) return {
          send: function(r, o) {
              var s, a = t.xhr();
              if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
              for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
              n = function(e) {
                  return function() {
                      n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o($t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                          binary: a.response
                      } : {
                          text: a.responseText
                      }, a.getAllResponseHeaders()))
                  }
              }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                  4 === a.readyState && e.setTimeout((function() {
                      n && i()
                  }))
              }, n = n("abort");
              try {
                  a.send(t.hasContent && t.data || null)
              } catch (r) {
                  if (n) throw r
              }
          },
          abort: function() {
              n && n()
          }
      }
  })), w.ajaxPrefilter((function(e) {
      e.crossDomain && (e.contents.script = !1)
  })), w.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return w.globalEval(e), e
          }
      }
  }), w.ajaxPrefilter("script", (function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  })), w.ajaxTransport("script", (function(e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs) return {
          send: function(i, r) {
              t = w("<script>").attr(e.scriptAttrs || {}).prop({
                  charset: e.scriptCharset,
                  src: e.url
              }).on("load error", n = function(e) {
                  t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
              }), m.head.appendChild(t[0])
          },
          abort: function() {
              n && n()
          }
      }
  }));
  var Qt, zt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = zt.pop() || w.expando + "_" + Et.guid++;
          return this[e] = !0, e
      }
  }), w.ajaxPrefilter("json jsonp", (function(t, n, i) {
      var r, o, s, a = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Vt, "$1" + r) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
          return s || w.error(r + " was not called"), s[0]
      }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
          s = arguments
      }, i.always((function() {
          void 0 === o ? w(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, zt.push(r)), s && p(o) && o(s[0]), s = o = void 0
      })), "script"
  })), h.createHTMLDocument = ((Qt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), w.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(i)) : t = m), o = !n && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
      var i, r, o
  }, w.fn.load = function(e, t, n) {
      var i, r, o, s = this,
          a = e.indexOf(" ");
      return -1 < a && (i = mt(e.slice(a)), e = e.slice(0, a)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && w.ajax({
          url: e,
          type: r || "GET",
          dataType: "html",
          data: t
      }).done((function(e) {
          o = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
      })).always(n && function(e, t) {
          s.each((function() {
              n.apply(this, o || [e.responseText, t, e])
          }))
      }), this
  }, w.expr.pseudos.animated = function(e) {
      return w.grep(w.timers, (function(t) {
          return e === t.elem
      })).length
  }, w.offset = {
      setOffset: function(e, t, n) {
          var i, r, o, s, a, l, c = w.css(e, "position"),
              u = w(e),
              f = {};
          "static" === c && (e.style.position = "relative"), a = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), u.css(f))
      }
  }, w.fn.extend({
      offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each((function(t) {
              w.offset.setOffset(this, e, t)
          }));
          var t, n, i = this[0];
          return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          } : void 0
      },
      position: function() {
          if (this[0]) {
              var e, t, n, i = this[0],
                  r = {
                      top: 0,
                      left: 0
                  };
              if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
              else {
                  for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                  e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0), r.left += w.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: t.top - r.top - w.css(i, "marginTop", !0),
                  left: t.left - r.left - w.css(i, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map((function() {
              for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
              return e || ie
          }))
      }
  }), w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, (function(e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function(i) {
          return W(this, (function(e, i, r) {
              var o;
              if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
              o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
          }), e, i, arguments.length)
      }
  })), w.each(["top", "left"], (function(e, t) {
      w.cssHooks[t] = We(h.pixelPosition, (function(e, n) {
          if (n) return n = Be(e, t), He.test(n) ? w(e).position()[t] + "px" : n
      }))
  })), w.each({
      Height: "height",
      Width: "width"
  }, (function(e, t) {
      w.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, (function(n, i) {
          w.fn[i] = function(r, o) {
              var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
              return W(this, (function(t, n, r) {
                  var o;
                  return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a)
              }), t, s ? r : void 0, s)
          }
      }))
  })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
      w.fn[t] = function(e) {
          return this.on(t, e)
      }
  })), w.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, i) {
          return this.on(t, e, n, i)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
      w.fn[t] = function(e, n) {
          return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
      }
  }));
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.proxy = function(e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = r.call(arguments, 2), (o = function() {
          return e.apply(t || this, i.concat(r.call(arguments)))
      }).guid = e.guid = e.guid || w.guid++, o
  }, w.holdReady = function(e) {
      e ? w.readyWait++ : w.ready(!0)
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = p, w.isWindow = g, w.camelCase = z, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, w.trim = function(e) {
      return null == e ? "" : (e + "").replace(Xt, "")
  }, "function" == typeof define && define.amd && define("jquery", [], (function() {
      return w
  }));
  var Yt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function(t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Yt), w
  }, void 0 === t && (e.jQuery = e.$ = w), w
})), function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery)
}(this, (function(e, t) {
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
  }

  function i(e, t, i) {
      return t && n(e.prototype, t), i && n(e, i), e
  }

  function r() {
      return (r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
      }).apply(this, arguments)
  }
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var o = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(e) {
          do {
              e += ~~(1e6 * Math.random())
          } while (document.getElementById(e));
          return e
      },
      getSelectorFromElement: function(e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
              var n = e.getAttribute("href");
              t = n && "#" !== n ? n.trim() : ""
          }
          try {
              return document.querySelector(t) ? t : null
          } catch (e) {
              return null
          }
      },
      getTransitionDurationFromElement: function(e) {
          if (!e) return 0;
          var n = t(e).css("transition-duration"),
              i = t(e).css("transition-delay"),
              r = parseFloat(n),
              o = parseFloat(i);
          return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
      },
      reflow: function(e) {
          return e.offsetHeight
      },
      triggerTransitionEnd: function(e) {
          t(e).trigger("transitionend")
      },
      supportsTransitionEnd: function() {
          return Boolean("transitionend")
      },
      isElement: function(e) {
          return (e[0] || e).nodeType
      },
      typeCheckConfig: function(e, t, n) {
          for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                  var r = n[i],
                      s = t[i],
                      a = s && o.isElement(s) ? "element" : null === (l = s) || void 0 === l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                  if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
              } var l
      },
      findShadowRoot: function(e) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
              var t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null
          }
          return e instanceof ShadowRoot ? e : e.parentNode ? o.findShadowRoot(e.parentNode) : null
      },
      jQueryDetection: function() {
          if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          var e = t.fn.jquery.split(" ")[0].split(".");
          if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }
  };
  o.jQueryDetection(), t.fn.emulateTransitionEnd = function(e) {
      var n = this,
          i = !1;
      return t(this).one(o.TRANSITION_END, (function() {
          i = !0
      })), setTimeout((function() {
          i || o.triggerTransitionEnd(n)
      }), e), this
  }, t.event.special[o.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function(e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
  };
  var s = "alert",
      a = t.fn[s],
      l = function() {
          function e(e) {
              this._element = e
          }
          var n = e.prototype;
          return n.close = function(e) {
              var t = this._element;
              e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
          }, n.dispose = function() {
              t.removeData(this._element, "bs.alert"), this._element = null
          }, n._getRootElement = function(e) {
              var n = o.getSelectorFromElement(e),
                  i = !1;
              return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
          }, n._triggerCloseEvent = function(e) {
              var n = t.Event("close.bs.alert");
              return t(e).trigger(n), n
          }, n._removeElement = function(e) {
              var n = this;
              if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                  var i = o.getTransitionDurationFromElement(e);
                  t(e).one(o.TRANSITION_END, (function(t) {
                      return n._destroyElement(e, t)
                  })).emulateTransitionEnd(i)
              } else this._destroyElement(e)
          }, n._destroyElement = function(e) {
              t(e).detach().trigger("closed.bs.alert").remove()
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this),
                      r = i.data("bs.alert");
                  r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
              }))
          }, e._handleDismiss = function(e) {
              return function(t) {
                  t && t.preventDefault(), e.close(this)
              }
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }]), e
      }();
  t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l._handleDismiss(new l)), t.fn[s] = l._jQueryInterface, t.fn[s].Constructor = l, t.fn[s].noConflict = function() {
      return t.fn[s] = a, l._jQueryInterface
  };
  var c = t.fn.button,
      u = function() {
          function e(e) {
              this._element = e
          }
          var n = e.prototype;
          return n.toggle = function() {
              var e = !0,
                  n = !0,
                  i = t(this._element).closest('[data-toggle="buttons"]')[0];
              if (i) {
                  var r = this._element.querySelector('input:not([type="hidden"])');
                  if (r) {
                      if ("radio" === r.type)
                          if (r.checked && this._element.classList.contains("active")) e = !1;
                          else {
                              var o = i.querySelector(".active");
                              o && t(o).removeClass("active")
                          } e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), t(r).trigger("change")), r.focus(), n = !1
                  }
              }
              this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
          }, n.dispose = function() {
              t.removeData(this._element, "bs.button"), this._element = null
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this).data("bs.button");
                  i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }]), e
      }();
  t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
      var n = e.target,
          i = n;
      if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
      else {
          var r = n.querySelector('input:not([type="hidden"])');
          if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
          ("LABEL" !== i.tagName || r && "checkbox" !== r.type) && u._jQueryInterface.call(t(n), "toggle")
      }
  })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
      var n = t(e.target).closest(".btn")[0];
      t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
  })), t(window).on("load.bs.button.data-api", (function() {
      for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
          var i = e[t],
              r = i.querySelector('input:not([type="hidden"])');
          r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
      }
      for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
          var a = e[o];
          "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
      }
  })), t.fn.button = u._jQueryInterface, t.fn.button.Constructor = u, t.fn.button.noConflict = function() {
      return t.fn.button = c, u._jQueryInterface
  };
  var f = "carousel",
      d = t.fn[f],
      h = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0
      },
      p = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean"
      },
      g = {
          TOUCH: "touch",
          PEN: "pen"
      },
      m = function() {
          function e(e, t) {
              this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
          }
          var n = e.prototype;
          return n.next = function() {
              this._isSliding || this._slide("next")
          }, n.nextWhenVisible = function() {
              !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
          }, n.prev = function() {
              this._isSliding || this._slide("prev")
          }, n.pause = function(e) {
              e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, n.cycle = function(e) {
              e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, n.to = function(e) {
              var n = this;
              this._activeElement = this._element.querySelector(".active.carousel-item");
              var i = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                  if (this._isSliding) t(this._element).one("slid.bs.carousel", (function() {
                      return n.to(e)
                  }));
                  else {
                      if (i === e) return this.pause(), void this.cycle();
                      var r = e > i ? "next" : "prev";
                      this._slide(r, this._items[e])
                  }
          }, n.dispose = function() {
              t(this._element).off(".bs.carousel"), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, n._getConfig = function(e) {
              return e = r({}, h, e), o.typeCheckConfig(f, e, p), e
          }, n._handleSwipe = function() {
              var e = Math.abs(this.touchDeltaX);
              if (!(e <= 40)) {
                  var t = e / this.touchDeltaX;
                  this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
              }
          }, n._addEventListeners = function() {
              var e = this;
              this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function(t) {
                  return e._keydown(t)
              })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function(t) {
                  return e.pause(t)
              })).on("mouseleave.bs.carousel", (function(t) {
                  return e.cycle(t)
              })), this._config.touch && this._addTouchEventListeners()
          }, n._addTouchEventListeners = function() {
              var e = this;
              if (this._touchSupported) {
                  var n = function(t) {
                          e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                      },
                      i = function(t) {
                          e._pointerEvent && g[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                              return e.cycle(t)
                          }), 500 + e._config.interval))
                      };
                  t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(e) {
                      return e.preventDefault()
                  })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function(e) {
                      return n(e)
                  })), t(this._element).on("pointerup.bs.carousel", (function(e) {
                      return i(e)
                  })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function(e) {
                      return n(e)
                  })), t(this._element).on("touchmove.bs.carousel", (function(t) {
                      return function(t) {
                          t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                      }(t)
                  })), t(this._element).on("touchend.bs.carousel", (function(e) {
                      return i(e)
                  })))
              }
          }, n._keydown = function(e) {
              if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                  case 37:
                      e.preventDefault(), this.prev();
                      break;
                  case 39:
                      e.preventDefault(), this.next()
              }
          }, n._getItemIndex = function(e) {
              return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
          }, n._getItemByDirection = function(e, t) {
              var n = "next" === e,
                  i = "prev" === e,
                  r = this._getItemIndex(t),
                  o = this._items.length - 1;
              if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
              var s = (r + ("prev" === e ? -1 : 1)) % this._items.length;
              return -1 === s ? this._items[this._items.length - 1] : this._items[s]
          }, n._triggerSlideEvent = function(e, n) {
              var i = this._getItemIndex(e),
                  r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                  o = t.Event("slide.bs.carousel", {
                      relatedTarget: e,
                      direction: n,
                      from: r,
                      to: i
                  });
              return t(this._element).trigger(o), o
          }, n._setActiveIndicatorElement = function(e) {
              if (this._indicatorsElement) {
                  var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                  t(n).removeClass("active");
                  var i = this._indicatorsElement.children[this._getItemIndex(e)];
                  i && t(i).addClass("active")
              }
          }, n._slide = function(e, n) {
              var i, r, s, a = this,
                  l = this._element.querySelector(".active.carousel-item"),
                  c = this._getItemIndex(l),
                  u = n || l && this._getItemByDirection(e, l),
                  f = this._getItemIndex(u),
                  d = Boolean(this._interval);
              if ("next" === e ? (i = "carousel-item-left", r = "carousel-item-next", s = "left") : (i = "carousel-item-right", r = "carousel-item-prev", s = "right"), u && t(u).hasClass("active")) this._isSliding = !1;
              else if (!this._triggerSlideEvent(u, s).isDefaultPrevented() && l && u) {
                  this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
                  var h = t.Event("slid.bs.carousel", {
                      relatedTarget: u,
                      direction: s,
                      from: c,
                      to: f
                  });
                  if (t(this._element).hasClass("slide")) {
                      t(u).addClass(r), o.reflow(u), t(l).addClass(i), t(u).addClass(i);
                      var p = parseInt(u.getAttribute("data-interval"), 10);
                      p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                      var g = o.getTransitionDurationFromElement(l);
                      t(l).one(o.TRANSITION_END, (function() {
                          t(u).removeClass(i + " " + r).addClass("active"), t(l).removeClass("active " + r + " " + i), a._isSliding = !1, setTimeout((function() {
                              return t(a._element).trigger(h)
                          }), 0)
                      })).emulateTransitionEnd(g)
                  } else t(l).removeClass("active"), t(u).addClass("active"), this._isSliding = !1, t(this._element).trigger(h);
                  d && this.cycle()
              }
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this).data("bs.carousel"),
                      o = r({}, h, t(this).data());
                  "object" == typeof n && (o = r({}, o, n));
                  var s = "string" == typeof n ? n : o.slide;
                  if (i || (i = new e(this, o), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                  else if ("string" == typeof s) {
                      if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                      i[s]()
                  } else o.interval && o.ride && (i.pause(), i.cycle())
              }))
          }, e._dataApiClickHandler = function(n) {
              var i = o.getSelectorFromElement(this);
              if (i) {
                  var s = t(i)[0];
                  if (s && t(s).hasClass("carousel")) {
                      var a = r({}, t(s).data(), t(this).data()),
                          l = this.getAttribute("data-slide-to");
                      l && (a.interval = !1), e._jQueryInterface.call(t(s), a), l && t(s).data("bs.carousel").to(l), n.preventDefault()
                  }
              }
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return h
              }
          }]), e
      }();
  t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", m._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function() {
      for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
          var r = t(e[n]);
          m._jQueryInterface.call(r, r.data())
      }
  })), t.fn[f] = m._jQueryInterface, t.fn[f].Constructor = m, t.fn[f].noConflict = function() {
      return t.fn[f] = d, m._jQueryInterface
  };
  var v = "collapse",
      y = t.fn[v],
      b = {
          toggle: !0,
          parent: ""
      },
      _ = {
          toggle: "boolean",
          parent: "(string|element)"
      },
      w = function() {
          function e(e, t) {
              this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
              for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                  var s = n[i],
                      a = o.getSelectorFromElement(s),
                      l = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                          return t === e
                      }));
                  null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          var n = e.prototype;
          return n.toggle = function() {
              t(this._element).hasClass("show") ? this.hide() : this.show()
          }, n.show = function() {
              var n, i, r = this;
              if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                      return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                  }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                  var s = t.Event("show.bs.collapse");
                  if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                      n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                      var a = this._getDimension();
                      t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                      var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                          c = o.getTransitionDurationFromElement(this._element);
                      t(this._element).one(o.TRANSITION_END, (function() {
                          t(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger("shown.bs.collapse")
                      })).emulateTransitionEnd(c), this._element.style[a] = this._element[l] + "px"
                  }
              }
          }, n.hide = function() {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass("show")) {
                  var n = t.Event("hide.bs.collapse");
                  if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                      var i = this._getDimension();
                      this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", o.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                      var r = this._triggerArray.length;
                      if (r > 0)
                          for (var s = 0; s < r; s++) {
                              var a = this._triggerArray[s],
                                  l = o.getSelectorFromElement(a);
                              null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass("show") || t(a).addClass("collapsed").attr("aria-expanded", !1))
                          }
                      this.setTransitioning(!0), this._element.style[i] = "";
                      var c = o.getTransitionDurationFromElement(this._element);
                      t(this._element).one(o.TRANSITION_END, (function() {
                          e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                      })).emulateTransitionEnd(c)
                  }
              }
          }, n.setTransitioning = function(e) {
              this._isTransitioning = e
          }, n.dispose = function() {
              t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, n._getConfig = function(e) {
              return (e = r({}, b, e)).toggle = Boolean(e.toggle), o.typeCheckConfig(v, e, _), e
          }, n._getDimension = function() {
              return t(this._element).hasClass("width") ? "width" : "height"
          }, n._getParent = function() {
              var n, i = this;
              o.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
              var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                  s = [].slice.call(n.querySelectorAll(r));
              return t(s).each((function(t, n) {
                  i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
              })), n
          }, n._addAriaAndCollapsedClass = function(e, n) {
              var i = t(e).hasClass("show");
              n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
          }, e._getTargetFromElement = function(e) {
              var t = o.getSelectorFromElement(e);
              return t ? document.querySelector(t) : null
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this),
                      o = i.data("bs.collapse"),
                      s = r({}, b, i.data(), "object" == typeof n && n ? n : {});
                  if (!o && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1), o || (o = new e(this, s), i.data("bs.collapse", o)), "string" == typeof n) {
                      if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                      o[n]()
                  }
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return b
              }
          }]), e
      }();
  t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
          i = o.getSelectorFromElement(this),
          r = [].slice.call(document.querySelectorAll(i));
      t(r).each((function() {
          var e = t(this),
              i = e.data("bs.collapse") ? "toggle" : n.data();
          w._jQueryInterface.call(e, i)
      }))
  })), t.fn[v] = w._jQueryInterface, t.fn[v].Constructor = w, t.fn[v].noConflict = function() {
      return t.fn[v] = y, w._jQueryInterface
  };
  var x = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      E = function() {
          for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
              if (x && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
          return 0
      }(),
      T = x && window.Promise ? function(e) {
          var t = !1;
          return function() {
              t || (t = !0, window.Promise.resolve().then((function() {
                  t = !1, e()
              })))
          }
      } : function(e) {
          var t = !1;
          return function() {
              t || (t = !0, setTimeout((function() {
                  t = !1, e()
              }), E))
          }
      };

  function C(e) {
      return e && "[object Function]" === {}.toString.call(e)
  }

  function S(e, t) {
      if (1 !== e.nodeType) return [];
      var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? n[t] : n
  }

  function k(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host
  }

  function D(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
          case "HTML":
          case "BODY":
              return e.ownerDocument.body;
          case "#document":
              return e.body
      }
      var t = S(e),
          n = t.overflow,
          i = t.overflowX,
          r = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + r + i) ? e : D(k(e))
  }

  function N(e) {
      return e && e.referenceNode ? e.referenceNode : e
  }
  var A = x && !(!window.MSInputMethodContext || !document.documentMode),
      j = x && /MSIE 10/.test(navigator.userAgent);

  function L(e) {
      return 11 === e ? A : 10 === e ? j : A || j
  }

  function O(e) {
      if (!e) return document.documentElement;
      for (var t = L(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === S(n, "position") ? O(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function q(e) {
      return null !== e.parentNode ? q(e.parentNode) : e
  }

  function I(e, t) {
      if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? e : t,
          r = n ? t : e,
          o = document.createRange();
      o.setStart(i, 0), o.setEnd(r, 0);
      var s, a, l = o.commonAncestorContainer;
      if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && O(s.firstElementChild) !== s ? O(l) : l;
      var c = q(e);
      return c.host ? I(c.host, t) : I(e, q(t).host)
  }

  function P(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
          n = "top" === t ? "scrollTop" : "scrollLeft",
          i = e.nodeName;
      if ("BODY" === i || "HTML" === i) {
          var r = e.ownerDocument.documentElement,
              o = e.ownerDocument.scrollingElement || r;
          return o[n]
      }
      return e[n]
  }

  function H(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = P(t, "top"),
          r = P(t, "left"),
          o = n ? -1 : 1;
      return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
  }

  function R(e, t) {
      var n = "x" === t ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
  }

  function M(e, t, n, i) {
      return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], L(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
  }

  function F(e) {
      var t = e.body,
          n = e.documentElement,
          i = L(10) && getComputedStyle(n);
      return {
          height: M("Height", t, n, i),
          width: M("Width", t, n, i)
      }
  }
  var B = function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      },
      W = function() {
          function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
              }
          }
          return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t
          }
      }(),
      $ = function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n, e
      },
      U = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
      };

  function Q(e) {
      return U({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
      })
  }

  function z(e) {
      var t = {};
      try {
          if (L(10)) {
              t = e.getBoundingClientRect();
              var n = P(e, "top"),
                  i = P(e, "left");
              t.top += n, t.left += i, t.bottom += n, t.right += i
          } else t = e.getBoundingClientRect()
      } catch (e) {}
      var r = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top
          },
          o = "HTML" === e.nodeName ? F(e.ownerDocument) : {},
          s = o.width || e.clientWidth || r.width,
          a = o.height || e.clientHeight || r.height,
          l = e.offsetWidth - s,
          c = e.offsetHeight - a;
      if (l || c) {
          var u = S(e);
          l -= R(u, "x"), c -= R(u, "y"), r.width -= l, r.height -= c
      }
      return Q(r)
  }

  function V(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = L(10),
          r = "HTML" === t.nodeName,
          o = z(e),
          s = z(t),
          a = D(e),
          l = S(t),
          c = parseFloat(l.borderTopWidth),
          u = parseFloat(l.borderLeftWidth);
      n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
      var f = Q({
          top: o.top - s.top - c,
          left: o.left - s.left - u,
          width: o.width,
          height: o.height
      });
      if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
          var d = parseFloat(l.marginTop),
              h = parseFloat(l.marginLeft);
          f.top -= c - d, f.bottom -= c - d, f.left -= u - h, f.right -= u - h, f.marginTop = d, f.marginLeft = h
      }
      return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = H(f, t)), f
  }

  function X(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = V(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : P(n),
          a = t ? 0 : P(n, "left"),
          l = {
              top: s - i.top + i.marginTop,
              left: a - i.left + i.marginLeft,
              width: r,
              height: o
          };
      return Q(l)
  }

  function Y(e) {
      var t = e.nodeName;
      if ("BODY" === t || "HTML" === t) return !1;
      if ("fixed" === S(e, "position")) return !0;
      var n = k(e);
      return !!n && Y(n)
  }

  function K(e) {
      if (!e || !e.parentElement || L()) return document.documentElement;
      for (var t = e.parentElement; t && "none" === S(t, "transform");) t = t.parentElement;
      return t || document.documentElement
  }

  function G(e, t, n, i) {
      var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = {
              top: 0,
              left: 0
          },
          s = r ? K(e) : I(e, N(t));
      if ("viewport" === i) o = X(s, r);
      else {
          var a = void 0;
          "scrollParent" === i ? "BODY" === (a = D(k(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
          var l = V(a, s, r);
          if ("HTML" !== a.nodeName || Y(s)) o = l;
          else {
              var c = F(e.ownerDocument),
                  u = c.height,
                  f = c.width;
              o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
          }
      }
      var d = "number" == typeof(n = n || 0);
      return o.left += d ? n : n.left || 0, o.top += d ? n : n.top || 0, o.right -= d ? n : n.right || 0, o.bottom -= d ? n : n.bottom || 0, o
  }

  function J(e) {
      return e.width * e.height
  }

  function Z(e, t, n, i, r) {
      var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var s = G(n, i, o, r),
          a = {
              top: {
                  width: s.width,
                  height: t.top - s.top
              },
              right: {
                  width: s.right - t.right,
                  height: s.height
              },
              bottom: {
                  width: s.width,
                  height: s.bottom - t.bottom
              },
              left: {
                  width: t.left - s.left,
                  height: s.height
              }
          },
          l = Object.keys(a).map((function(e) {
              return U({
                  key: e
              }, a[e], {
                  area: J(a[e])
              })
          })).sort((function(e, t) {
              return t.area - e.area
          })),
          c = l.filter((function(e) {
              var t = e.width,
                  i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight
          })),
          u = c.length > 0 ? c[0].key : l[0].key,
          f = e.split("-")[1];
      return u + (f ? "-" + f : "")
  }

  function ee(e, t, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          r = i ? K(t) : I(t, N(n));
      return V(n, r, i)
  }

  function te(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return {
          width: e.offsetWidth + i,
          height: e.offsetHeight + n
      }
  }

  function ne(e) {
      var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };
      return e.replace(/left|right|bottom|top/g, (function(e) {
          return t[e]
      }))
  }

  function ie(e, t, n) {
      n = n.split("-")[0];
      var i = te(e),
          r = {
              width: i.width,
              height: i.height
          },
          o = -1 !== ["right", "left"].indexOf(n),
          s = o ? "top" : "left",
          a = o ? "left" : "top",
          l = o ? "height" : "width",
          c = o ? "width" : "height";
      return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[ne(a)], r
  }

  function re(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function oe(e, t, n) {
      return (void 0 === n ? e : e.slice(0, function(e, t, n) {
          if (Array.prototype.findIndex) return e.findIndex((function(e) {
              return e[t] === n
          }));
          var i = re(e, (function(e) {
              return e[t] === n
          }));
          return e.indexOf(i)
      }(e, "name", n))).forEach((function(e) {
          e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = e.function || e.fn;
          e.enabled && C(n) && (t.offsets.popper = Q(t.offsets.popper), t.offsets.reference = Q(t.offsets.reference), t = n(t, e))
      })), t
  }

  function se() {
      if (!this.state.isDestroyed) {
          var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
          };
          e.offsets.reference = ee(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Z(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ie(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = oe(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
      }
  }

  function ae(e, t) {
      return e.some((function(e) {
          var n = e.name;
          return e.enabled && n === t
      }))
  }

  function le(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
          var r = t[i],
              o = r ? "" + r + n : e;
          if (void 0 !== document.body.style[o]) return o
      }
      return null
  }

  function ce() {
      return this.state.isDestroyed = !0, ae(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[le("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function ue(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window
  }

  function fe() {
      this.state.eventsEnabled || (this.state = function(e, t, n, i) {
          n.updateBound = i, ue(e).addEventListener("resize", n.updateBound, {
              passive: !0
          });
          var r = D(e);
          return function e(t, n, i, r) {
              var o = "BODY" === t.nodeName,
                  s = o ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, i, {
                  passive: !0
              }), o || e(D(s.parentNode), n, i, r), r.push(s)
          }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
      }(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function de() {
      var e, t;
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ue(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
          e.removeEventListener("scroll", t.updateBound)
      })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
  }

  function he(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function pe(e, t) {
      Object.keys(t).forEach((function(n) {
          var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && he(t[n]) && (i = "px"), e.style[n] = t[n] + i
      }))
  }
  var ge = x && /Firefox/i.test(navigator.userAgent);

  function me(e, t, n) {
      var i = re(e, (function(e) {
              return e.name === t
          })),
          r = !!i && e.some((function(e) {
              return e.name === n && e.enabled && e.order < i.order
          }));
      if (!r) {
          var o = "`" + t + "`",
              s = "`" + n + "`";
          console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
      }
      return r
  }
  var ve = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      ye = ve.slice(3);

  function be(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = ye.indexOf(e),
          i = ye.slice(n + 1).concat(ye.slice(0, n));
      return t ? i.reverse() : i
  }
  var _e = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function() {},
          onUpdate: function() {},
          modifiers: {
              shift: {
                  order: 100,
                  enabled: !0,
                  fn: function(e) {
                      var t = e.placement,
                          n = t.split("-")[0],
                          i = t.split("-")[1];
                      if (i) {
                          var r = e.offsets,
                              o = r.reference,
                              s = r.popper,
                              a = -1 !== ["bottom", "top"].indexOf(n),
                              l = a ? "left" : "top",
                              c = a ? "width" : "height",
                              u = {
                                  start: $({}, l, o[l]),
                                  end: $({}, l, o[l] + o[c] - s[c])
                              };
                          e.offsets.popper = U({}, s, u[i])
                      }
                      return e
                  }
              },
              offset: {
                  order: 200,
                  enabled: !0,
                  fn: function(e, t) {
                      var n, i = t.offset,
                          r = e.placement,
                          o = e.offsets,
                          s = o.popper,
                          a = o.reference,
                          l = r.split("-")[0];
                      return n = he(+i) ? [+i, 0] : function(e, t, n, i) {
                          var r = [0, 0],
                              o = -1 !== ["right", "left"].indexOf(i),
                              s = e.split(/(\+|\-)/).map((function(e) {
                                  return e.trim()
                              })),
                              a = s.indexOf(re(s, (function(e) {
                                  return -1 !== e.search(/,|\s/)
                              })));
                          s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                          var l = /\s*,\s*|\s+/,
                              c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                          return (c = c.map((function(e, i) {
                              var r = (1 === i ? !o : o) ? "height" : "width",
                                  s = !1;
                              return e.reduce((function(e, t) {
                                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                              }), []).map((function(e) {
                                  return function(e, t, n, i) {
                                      var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                          o = +r[1],
                                          s = r[2];
                                      if (!o) return e;
                                      if (0 === s.indexOf("%")) {
                                          var a = void 0;
                                          switch (s) {
                                              case "%p":
                                                  a = n;
                                                  break;
                                              case "%":
                                              case "%r":
                                              default:
                                                  a = i
                                          }
                                          return Q(a)[t] / 100 * o
                                      }
                                      return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                  }(e, r, t, n)
                              }))
                          }))).forEach((function(e, t) {
                              e.forEach((function(n, i) {
                                  he(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                              }))
                          })), r
                      }(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                  },
                  offset: 0
              },
              preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function(e, t) {
                      var n = t.boundariesElement || O(e.instance.popper);
                      e.instance.reference === n && (n = O(n));
                      var i = le("transform"),
                          r = e.instance.popper.style,
                          o = r.top,
                          s = r.left,
                          a = r[i];
                      r.top = "", r.left = "", r[i] = "";
                      var l = G(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                      r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                      var c = t.priority,
                          u = e.offsets.popper,
                          f = {
                              primary: function(e) {
                                  var n = u[e];
                                  return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), $({}, e, n)
                              },
                              secondary: function(e) {
                                  var n = "right" === e ? "left" : "top",
                                      i = u[n];
                                  return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), $({}, n, i)
                              }
                          };
                      return c.forEach((function(e) {
                          var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                          u = U({}, u, f[t](e))
                      })), e.offsets.popper = u, e
                  },
                  priority: ["left", "right", "top", "bottom"],
                  padding: 5,
                  boundariesElement: "scrollParent"
              },
              keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function(e) {
                      var t = e.offsets,
                          n = t.popper,
                          i = t.reference,
                          r = e.placement.split("-")[0],
                          o = Math.floor,
                          s = -1 !== ["top", "bottom"].indexOf(r),
                          a = s ? "right" : "bottom",
                          l = s ? "left" : "top",
                          c = s ? "width" : "height";
                      return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                  }
              },
              arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function(e, t) {
                      var n;
                      if (!me(e.instance.modifiers, "arrow", "keepTogether")) return e;
                      var i = t.element;
                      if ("string" == typeof i) {
                          if (!(i = e.instance.popper.querySelector(i))) return e
                      } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                      var r = e.placement.split("-")[0],
                          o = e.offsets,
                          s = o.popper,
                          a = o.reference,
                          l = -1 !== ["left", "right"].indexOf(r),
                          c = l ? "height" : "width",
                          u = l ? "Top" : "Left",
                          f = u.toLowerCase(),
                          d = l ? "left" : "top",
                          h = l ? "bottom" : "right",
                          p = te(i)[c];
                      a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), e.offsets.popper = Q(e.offsets.popper);
                      var g = a[f] + a[c] / 2 - p / 2,
                          m = S(e.instance.popper),
                          v = parseFloat(m["margin" + u]),
                          y = parseFloat(m["border" + u + "Width"]),
                          b = g - e.offsets.popper[f] - v - y;
                      return b = Math.max(Math.min(s[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = ($(n = {}, f, Math.round(b)), $(n, d, ""), n), e
                  },
                  element: "[x-arrow]"
              },
              flip: {
                  order: 600,
                  enabled: !0,
                  fn: function(e, t) {
                      if (ae(e.instance.modifiers, "inner")) return e;
                      if (e.flipped && e.placement === e.originalPlacement) return e;
                      var n = G(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                          i = e.placement.split("-")[0],
                          r = ne(i),
                          o = e.placement.split("-")[1] || "",
                          s = [];
                      switch (t.behavior) {
                          case "flip":
                              s = [i, r];
                              break;
                          case "clockwise":
                              s = be(i);
                              break;
                          case "counterclockwise":
                              s = be(i, !0);
                              break;
                          default:
                              s = t.behavior
                      }
                      return s.forEach((function(a, l) {
                          if (i !== a || s.length === l + 1) return e;
                          i = e.placement.split("-")[0], r = ne(i);
                          var c = e.offsets.popper,
                              u = e.offsets.reference,
                              f = Math.floor,
                              d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                              h = f(c.left) < f(n.left),
                              p = f(c.right) > f(n.right),
                              g = f(c.top) < f(n.top),
                              m = f(c.bottom) > f(n.bottom),
                              v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                              y = -1 !== ["top", "bottom"].indexOf(i),
                              b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                              _ = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && g),
                              w = b || _;
                          (d || v || w) && (e.flipped = !0, (d || v) && (i = s[l + 1]), w && (o = function(e) {
                              return "end" === e ? "start" : "start" === e ? "end" : e
                          }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = U({}, e.offsets.popper, ie(e.instance.popper, e.offsets.reference, e.placement)), e = oe(e.instance.modifiers, e, "flip"))
                      })), e
                  },
                  behavior: "flip",
                  padding: 5,
                  boundariesElement: "viewport",
                  flipVariations: !1,
                  flipVariationsByContent: !1
              },
              inner: {
                  order: 700,
                  enabled: !1,
                  fn: function(e) {
                      var t = e.placement,
                          n = t.split("-")[0],
                          i = e.offsets,
                          r = i.popper,
                          o = i.reference,
                          s = -1 !== ["left", "right"].indexOf(n),
                          a = -1 === ["top", "left"].indexOf(n);
                      return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = ne(t), e.offsets.popper = Q(r), e
                  }
              },
              hide: {
                  order: 800,
                  enabled: !0,
                  fn: function(e) {
                      if (!me(e.instance.modifiers, "hide", "preventOverflow")) return e;
                      var t = e.offsets.reference,
                          n = re(e.instance.modifiers, (function(e) {
                              return "preventOverflow" === e.name
                          })).boundaries;
                      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                          if (!0 === e.hide) return e;
                          e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                      } else {
                          if (!1 === e.hide) return e;
                          e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                      }
                      return e
                  }
              },
              computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function(e, t) {
                      var n = t.x,
                          i = t.y,
                          r = e.offsets.popper,
                          o = re(e.instance.modifiers, (function(e) {
                              return "applyStyle" === e.name
                          })).gpuAcceleration;
                      void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                      var s, a, l = void 0 !== o ? o : t.gpuAcceleration,
                          c = O(e.instance.popper),
                          u = z(c),
                          f = {
                              position: r.position
                          },
                          d = function(e, t) {
                              var n = e.offsets,
                                  i = n.popper,
                                  r = n.reference,
                                  o = Math.round,
                                  s = Math.floor,
                                  a = function(e) {
                                      return e
                                  },
                                  l = o(r.width),
                                  c = o(i.width),
                                  u = -1 !== ["left", "right"].indexOf(e.placement),
                                  f = -1 !== e.placement.indexOf("-"),
                                  d = t ? u || f || l % 2 == c % 2 ? o : s : a,
                                  h = t ? o : a;
                              return {
                                  left: d(l % 2 == 1 && c % 2 == 1 && !f && t ? i.left - 1 : i.left),
                                  top: h(i.top),
                                  bottom: h(i.bottom),
                                  right: d(i.right)
                              }
                          }(e, window.devicePixelRatio < 2 || !ge),
                          h = "bottom" === n ? "top" : "bottom",
                          p = "right" === i ? "left" : "right",
                          g = le("transform");
                      if (a = "bottom" === h ? "HTML" === c.nodeName ? -c.clientHeight + d.bottom : -u.height + d.bottom : d.top, s = "right" === p ? "HTML" === c.nodeName ? -c.clientWidth + d.right : -u.width + d.right : d.left, l && g) f[g] = "translate3d(" + s + "px, " + a + "px, 0)", f[h] = 0, f[p] = 0, f.willChange = "transform";
                      else {
                          var m = "bottom" === h ? -1 : 1,
                              v = "right" === p ? -1 : 1;
                          f[h] = a * m, f[p] = s * v, f.willChange = h + ", " + p
                      }
                      var y = {
                          "x-placement": e.placement
                      };
                      return e.attributes = U({}, y, e.attributes), e.styles = U({}, f, e.styles), e.arrowStyles = U({}, e.offsets.arrow, e.arrowStyles), e
                  },
                  gpuAcceleration: !0,
                  x: "bottom",
                  y: "right"
              },
              applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function(e) {
                      var t, n;
                      return pe(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                          !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                      })), e.arrowElement && Object.keys(e.arrowStyles).length && pe(e.arrowElement, e.arrowStyles), e
                  },
                  onLoad: function(e, t, n, i, r) {
                      var o = ee(r, t, e, n.positionFixed),
                          s = Z(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                      return t.setAttribute("x-placement", s), pe(t, {
                          position: n.positionFixed ? "fixed" : "absolute"
                      }), n
                  },
                  gpuAcceleration: void 0
              }
          }
      },
      we = function() {
          function e(t, n) {
              var i = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              B(this, e), this.scheduleUpdate = function() {
                  return requestAnimationFrame(i.update)
              }, this.update = T(this.update.bind(this)), this.options = U({}, e.Defaults, r), this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
              }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(U({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
                  i.options.modifiers[t] = U({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
              })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                  return U({
                      name: e
                  }, i.options.modifiers[e])
              })).sort((function(e, t) {
                  return e.order - t.order
              })), this.modifiers.forEach((function(e) {
                  e.enabled && C(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
              })), this.update();
              var o = this.options.eventsEnabled;
              o && this.enableEventListeners(), this.state.eventsEnabled = o
          }
          return W(e, [{
              key: "update",
              value: function() {
                  return se.call(this)
              }
          }, {
              key: "destroy",
              value: function() {
                  return ce.call(this)
              }
          }, {
              key: "enableEventListeners",
              value: function() {
                  return fe.call(this)
              }
          }, {
              key: "disableEventListeners",
              value: function() {
                  return de.call(this)
              }
          }]), e
      }();
  we.Utils = ("undefined" != typeof window ? window : global).PopperUtils, we.placements = ve, we.Defaults = _e;
  var xe = "dropdown",
      Ee = t.fn[xe],
      Te = new RegExp("38|40|27"),
      Ce = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null
      },
      Se = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
          popperConfig: "(null|object)"
      },
      ke = function() {
          function e(e, t) {
              this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
          }
          var n = e.prototype;
          return n.toggle = function() {
              if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                  var n = t(this._menu).hasClass("show");
                  e._clearMenus(), n || this.show(!0)
              }
          }, n.show = function(n) {
              if (void 0 === n && (n = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                  var i = {
                          relatedTarget: this._element
                      },
                      r = t.Event("show.bs.dropdown", i),
                      s = e._getParentFromElement(this._element);
                  if (t(s).trigger(r), !r.isDefaultPrevented()) {
                      if (!this._inNavbar && n) {
                          if (void 0 === we) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                          var a = this._element;
                          "parent" === this._config.reference ? a = s : o.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new we(a, this._menu, this._getPopperConfig())
                      }
                      "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown", i))
                  }
              }
          }, n.hide = function() {
              if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                  var n = {
                          relatedTarget: this._element
                      },
                      i = t.Event("hide.bs.dropdown", n),
                      r = e._getParentFromElement(this._element);
                  t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(r).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
              }
          }, n.dispose = function() {
              t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
          }, n.update = function() {
              this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
          }, n._addEventListeners = function() {
              var e = this;
              t(this._element).on("click.bs.dropdown", (function(t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle()
              }))
          }, n._getConfig = function(e) {
              return e = r({}, this.constructor.Default, t(this._element).data(), e), o.typeCheckConfig(xe, e, this.constructor.DefaultType), e
          }, n._getMenuElement = function() {
              if (!this._menu) {
                  var t = e._getParentFromElement(this._element);
                  t && (this._menu = t.querySelector(".dropdown-menu"))
              }
              return this._menu
          }, n._getPlacement = function() {
              var e = t(this._element.parentNode),
                  n = "bottom-start";
              return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
          }, n._detectNavbar = function() {
              return t(this._element).closest(".navbar").length > 0
          }, n._getOffset = function() {
              var e = this,
                  t = {};
              return "function" == typeof this._config.offset ? t.fn = function(t) {
                  return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
              } : t.offset = this._config.offset, t
          }, n._getPopperConfig = function() {
              var e = {
                  placement: this._getPlacement(),
                  modifiers: {
                      offset: this._getOffset(),
                      flip: {
                          enabled: this._config.flip
                      },
                      preventOverflow: {
                          boundariesElement: this._config.boundary
                      }
                  }
              };
              return "static" === this._config.display && (e.modifiers.applyStyle = {
                  enabled: !1
              }), r({}, e, this._config.popperConfig)
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this).data("bs.dropdown");
                  if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                      if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                      i[n]()
                  }
              }))
          }, e._clearMenus = function(n) {
              if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                  for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length; r < o; r++) {
                      var s = e._getParentFromElement(i[r]),
                          a = t(i[r]).data("bs.dropdown"),
                          l = {
                              relatedTarget: i[r]
                          };
                      if (n && "click" === n.type && (l.clickEvent = n), a) {
                          var c = a._menu;
                          if (t(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                              var u = t.Event("hide.bs.dropdown", l);
                              t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(c).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                          }
                      }
                  }
          }, e._getParentFromElement = function(e) {
              var t, n = o.getSelectorFromElement(e);
              return n && (t = document.querySelector(n)), t || e.parentNode
          }, e._dataApiKeydownHandler = function(n) {
              if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !Te.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                  var i = e._getParentFromElement(this),
                      r = t(i).hasClass("show");
                  if (r || 27 !== n.which) {
                      if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                      var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                          return t(e).is(":visible")
                      }));
                      if (0 !== o.length) {
                          var s = o.indexOf(n.target);
                          38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                      }
                  }
              }
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return Ce
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Se
              }
          }]), e
      }();
  t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', ke._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", ke._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", ke._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(e) {
      e.preventDefault(), e.stopPropagation(), ke._jQueryInterface.call(t(this), "toggle")
  })).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
      e.stopPropagation()
  })), t.fn[xe] = ke._jQueryInterface, t.fn[xe].Constructor = ke, t.fn[xe].noConflict = function() {
      return t.fn[xe] = Ee, ke._jQueryInterface
  };
  var De = t.fn.modal,
      Ne = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
      },
      Ae = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
      },
      je = function() {
          function e(e, t) {
              this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
          }
          var n = e.prototype;
          return n.toggle = function(e) {
              return this._isShown ? this.hide() : this.show(e)
          }, n.show = function(e) {
              var n = this;
              if (!this._isShown && !this._isTransitioning) {
                  t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                  var i = t.Event("show.bs.modal", {
                      relatedTarget: e
                  });
                  t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(e) {
                      return n.hide(e)
                  })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
                      t(n._element).one("mouseup.dismiss.bs.modal", (function(e) {
                          t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                      }))
                  })), this._showBackdrop((function() {
                      return n._showElement(e)
                  })))
              }
          }, n.hide = function(e) {
              var n = this;
              if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                  var i = t.Event("hide.bs.modal");
                  if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                      this._isShown = !1;
                      var r = t(this._element).hasClass("fade");
                      if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                          var s = o.getTransitionDurationFromElement(this._element);
                          t(this._element).one(o.TRANSITION_END, (function(e) {
                              return n._hideModal(e)
                          })).emulateTransitionEnd(s)
                      } else this._hideModal()
                  }
              }
          }, n.dispose = function() {
              [window, this._element, this._dialog].forEach((function(e) {
                  return t(e).off(".bs.modal")
              })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
          }, n.handleUpdate = function() {
              this._adjustDialog()
          }, n._getConfig = function(e) {
              return e = r({}, Ne, e), o.typeCheckConfig("modal", e, Ae), e
          }, n._triggerBackdropTransition = function() {
              var e = this;
              if ("static" === this._config.backdrop) {
                  var n = t.Event("hidePrevented.bs.modal");
                  if (t(this._element).trigger(n), n.defaultPrevented) return;
                  var i = this._element.scrollHeight > document.documentElement.clientHeight;
                  i || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                  var r = o.getTransitionDurationFromElement(this._dialog);
                  t(this._element).off(o.TRANSITION_END), t(this._element).one(o.TRANSITION_END, (function() {
                      e._element.classList.remove("modal-static"), i || t(e._element).one(o.TRANSITION_END, (function() {
                          e._element.style.overflowY = ""
                      })).emulateTransitionEnd(e._element, r)
                  })).emulateTransitionEnd(r), this._element.focus()
              } else this.hide()
          }, n._showElement = function(e) {
              var n = this,
                  i = t(this._element).hasClass("fade"),
                  r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
              this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && o.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
              var s = t.Event("shown.bs.modal", {
                      relatedTarget: e
                  }),
                  a = function() {
                      n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                  };
              if (i) {
                  var l = o.getTransitionDurationFromElement(this._dialog);
                  t(this._dialog).one(o.TRANSITION_END, a).emulateTransitionEnd(l)
              } else a()
          }, n._enforceFocus = function() {
              var e = this;
              t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(n) {
                  document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
              }))
          }, n._setEscapeEvent = function() {
              var e = this;
              this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function(t) {
                  e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
              })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
          }, n._setResizeEvent = function() {
              var e = this;
              this._isShown ? t(window).on("resize.bs.modal", (function(t) {
                  return e.handleUpdate(t)
              })) : t(window).off("resize.bs.modal")
          }, n._hideModal = function() {
              var e = this;
              this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                  t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
              }))
          }, n._removeBackdrop = function() {
              this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
          }, n._showBackdrop = function(e) {
              var n = this,
                  i = t(this._element).hasClass("fade") ? "fade" : "";
              if (this._isShown && this._config.backdrop) {
                  if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function(e) {
                          n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                      })), i && o.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                  if (!i) return void e();
                  var r = o.getTransitionDurationFromElement(this._backdrop);
                  t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(r)
              } else if (!this._isShown && this._backdrop) {
                  t(this._backdrop).removeClass("show");
                  var s = function() {
                      n._removeBackdrop(), e && e()
                  };
                  if (t(this._element).hasClass("fade")) {
                      var a = o.getTransitionDurationFromElement(this._backdrop);
                      t(this._backdrop).one(o.TRANSITION_END, s).emulateTransitionEnd(a)
                  } else s()
              } else e && e()
          }, n._adjustDialog = function() {
              var e = this._element.scrollHeight > document.documentElement.clientHeight;
              !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, n._resetAdjustments = function() {
              this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, n._checkScrollbar = function() {
              var e = document.body.getBoundingClientRect();
              this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, n._setScrollbar = function() {
              var e = this;
              if (this._isBodyOverflowing) {
                  var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                      i = [].slice.call(document.querySelectorAll(".sticky-top"));
                  t(n).each((function(n, i) {
                      var r = i.style.paddingRight,
                          o = t(i).css("padding-right");
                      t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                  })), t(i).each((function(n, i) {
                      var r = i.style.marginRight,
                          o = t(i).css("margin-right");
                      t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                  }));
                  var r = document.body.style.paddingRight,
                      o = t(document.body).css("padding-right");
                  t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
              }
              t(document.body).addClass("modal-open")
          }, n._resetScrollbar = function() {
              var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
              t(e).each((function(e, n) {
                  var i = t(n).data("padding-right");
                  t(n).removeData("padding-right"), n.style.paddingRight = i || ""
              }));
              var n = [].slice.call(document.querySelectorAll(".sticky-top"));
              t(n).each((function(e, n) {
                  var i = t(n).data("margin-right");
                  void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
              }));
              var i = t(document.body).data("padding-right");
              t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
          }, n._getScrollbarWidth = function() {
              var e = document.createElement("div");
              e.className = "modal-scrollbar-measure", document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t
          }, e._jQueryInterface = function(n, i) {
              return this.each((function() {
                  var o = t(this).data("bs.modal"),
                      s = r({}, Ne, t(this).data(), "object" == typeof n && n ? n : {});
                  if (o || (o = new e(this, s), t(this).data("bs.modal", o)), "string" == typeof n) {
                      if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                      o[n](i)
                  } else s.show && o.show(i)
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return Ne
              }
          }]), e
      }();
  t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
      var n, i = this,
          s = o.getSelectorFromElement(this);
      s && (n = document.querySelector(s));
      var a = t(n).data("bs.modal") ? "toggle" : r({}, t(n).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var l = t(n).one("show.bs.modal", (function(e) {
          e.isDefaultPrevented() || l.one("hidden.bs.modal", (function() {
              t(i).is(":visible") && i.focus()
          }))
      }));
      je._jQueryInterface.call(t(n), a, this)
  })), t.fn.modal = je._jQueryInterface, t.fn.modal.Constructor = je, t.fn.modal.noConflict = function() {
      return t.fn.modal = De, je._jQueryInterface
  };
  var Le = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Oe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      qe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function Ie(e, t, n) {
      if (0 === e.length) return e;
      if (n && "function" == typeof n) return n(e);
      for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
              var i = o[e],
                  s = i.nodeName.toLowerCase();
              if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
              var a = [].slice.call(i.attributes),
                  l = [].concat(t["*"] || [], t[s] || []);
              a.forEach((function(e) {
                  (function(e, t) {
                      var n = e.nodeName.toLowerCase();
                      if (-1 !== t.indexOf(n)) return -1 === Le.indexOf(n) || Boolean(e.nodeValue.match(Oe) || e.nodeValue.match(qe));
                      for (var i = t.filter((function(e) {
                              return e instanceof RegExp
                          })), r = 0, o = i.length; r < o; r++)
                          if (n.match(i[r])) return !0;
                      return !1
                  })(e, l) || i.removeAttribute(e.nodeName)
              }))
          }, a = 0, l = o.length; a < l; a++) s(a);
      return i.body.innerHTML
  }
  var Pe = "tooltip",
      He = t.fn[Pe],
      Re = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Me = ["sanitize", "whiteList", "sanitizeFn"],
      Fe = {
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
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
          popperConfig: "(null|object)"
      },
      Be = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
      },
      We = {
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
              ul: []
          },
          popperConfig: null
      },
      $e = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip"
      },
      Ue = function() {
          function e(e, t) {
              if (void 0 === we) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
              this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
          }
          var n = e.prototype;
          return n.enable = function() {
              this._isEnabled = !0
          }, n.disable = function() {
              this._isEnabled = !1
          }, n.toggleEnabled = function() {
              this._isEnabled = !this._isEnabled
          }, n.toggle = function(e) {
              if (this._isEnabled)
                  if (e) {
                      var n = this.constructor.DATA_KEY,
                          i = t(e.currentTarget).data(n);
                      i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                  } else {
                      if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                      this._enter(null, this)
                  }
          }, n.dispose = function() {
              clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
          }, n.show = function() {
              var e = this;
              if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
              var n = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                  t(this.element).trigger(n);
                  var i = o.findShadowRoot(this.element),
                      r = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                  if (n.isDefaultPrevented() || !r) return;
                  var s = this.getTipElement(),
                      a = o.getUID(this.constructor.NAME);
                  s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass("fade");
                  var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                      c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var u = this._getContainer();
                  t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new we(this.element, s, this._getPopperConfig(c)), t(s).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                  var f = function() {
                      e.config.animation && e._fixTransition();
                      var n = e._hoverState;
                      e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                  };
                  if (t(this.tip).hasClass("fade")) {
                      var d = o.getTransitionDurationFromElement(this.tip);
                      t(this.tip).one(o.TRANSITION_END, f).emulateTransitionEnd(d)
                  } else f()
              }
          }, n.hide = function(e) {
              var n = this,
                  i = this.getTipElement(),
                  r = t.Event(this.constructor.Event.HIDE),
                  s = function() {
                      "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                  };
              if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                  if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                      var a = o.getTransitionDurationFromElement(i);
                      t(i).one(o.TRANSITION_END, s).emulateTransitionEnd(a)
                  } else s();
                  this._hoverState = ""
              }
          }, n.update = function() {
              null !== this._popper && this._popper.scheduleUpdate()
          }, n.isWithContent = function() {
              return Boolean(this.getTitle())
          }, n.addAttachmentClass = function(e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e)
          }, n.getTipElement = function() {
              return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, n.setContent = function() {
              var e = this.getTipElement();
              this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
          }, n.setElementContent = function(e, n) {
              "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Ie(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
          }, n.getTitle = function() {
              var e = this.element.getAttribute("data-original-title");
              return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
          }, n._getPopperConfig = function(e) {
              var t = this;
              return r({}, {
                  placement: e,
                  modifiers: {
                      offset: this._getOffset(),
                      flip: {
                          behavior: this.config.fallbackPlacement
                      },
                      arrow: {
                          element: ".arrow"
                      },
                      preventOverflow: {
                          boundariesElement: this.config.boundary
                      }
                  },
                  onCreate: function(e) {
                      e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                  },
                  onUpdate: function(e) {
                      return t._handlePopperPlacementChange(e)
                  }
              }, this.config.popperConfig)
          }, n._getOffset = function() {
              var e = this,
                  t = {};
              return "function" == typeof this.config.offset ? t.fn = function(t) {
                  return t.offsets = r({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
              } : t.offset = this.config.offset, t
          }, n._getContainer = function() {
              return !1 === this.config.container ? document.body : o.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
          }, n._getAttachment = function(e) {
              return Be[e.toUpperCase()]
          }, n._setListeners = function() {
              var e = this;
              this.config.trigger.split(" ").forEach((function(n) {
                  if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                      return e.toggle(t)
                  }));
                  else if ("manual" !== n) {
                      var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                          r = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                      t(e.element).on(i, e.config.selector, (function(t) {
                          return e._enter(t)
                      })).on(r, e.config.selector, (function(t) {
                          return e._leave(t)
                      }))
                  }
              })), this._hideModalHandler = function() {
                  e.element && e.hide()
              }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, {
                  trigger: "manual",
                  selector: ""
              }) : this._fixTitle()
          }, n._fixTitle = function() {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, n._enter = function(e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                  "show" === n._hoverState && n.show()
              }), n.config.delay.show) : n.show())
          }, n._leave = function(e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                  "out" === n._hoverState && n.hide()
              }), n.config.delay.hide) : n.hide())
          }, n._isWithActiveTrigger = function() {
              for (var e in this._activeTrigger)
                  if (this._activeTrigger[e]) return !0;
              return !1
          }, n._getConfig = function(e) {
              var n = t(this.element).data();
              return Object.keys(n).forEach((function(e) {
                  -1 !== Me.indexOf(e) && delete n[e]
              })), "number" == typeof(e = r({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                  show: e.delay,
                  hide: e.delay
              }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), o.typeCheckConfig(Pe, e, this.constructor.DefaultType), e.sanitize && (e.template = Ie(e.template, e.whiteList, e.sanitizeFn)), e
          }, n._getDelegateConfig = function() {
              var e = {};
              if (this.config)
                  for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
              return e
          }, n._cleanTipClass = function() {
              var e = t(this.getTipElement()),
                  n = e.attr("class").match(Re);
              null !== n && n.length && e.removeClass(n.join(""))
          }, n._handlePopperPlacementChange = function(e) {
              this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
          }, n._fixTransition = function() {
              var e = this.getTipElement(),
                  n = this.config.animation;
              null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this).data("bs.tooltip"),
                      r = "object" == typeof n && n;
                  if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                      if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                      i[n]()
                  }
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return We
              }
          }, {
              key: "NAME",
              get: function() {
                  return Pe
              }
          }, {
              key: "DATA_KEY",
              get: function() {
                  return "bs.tooltip"
              }
          }, {
              key: "Event",
              get: function() {
                  return $e
              }
          }, {
              key: "EVENT_KEY",
              get: function() {
                  return ".bs.tooltip"
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Fe
              }
          }]), e
      }();
  t.fn[Pe] = Ue._jQueryInterface, t.fn[Pe].Constructor = Ue, t.fn[Pe].noConflict = function() {
      return t.fn[Pe] = He, Ue._jQueryInterface
  };
  var Qe = "popover",
      ze = t.fn[Qe],
      Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Xe = r({}, Ue.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      Ye = r({}, Ue.DefaultType, {
          content: "(string|element|function)"
      }),
      Ke = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover"
      },
      Ge = function(e) {
          var n, r;

          function o() {
              return e.apply(this, arguments) || this
          }
          r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
          var s = o.prototype;
          return s.isWithContent = function() {
              return this.getTitle() || this._getContent()
          }, s.addAttachmentClass = function(e) {
              t(this.getTipElement()).addClass("bs-popover-" + e)
          }, s.getTipElement = function() {
              return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, s.setContent = function() {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(".popover-header"), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
          }, s._getContent = function() {
              return this.element.getAttribute("data-content") || this.config.content
          }, s._cleanTipClass = function() {
              var e = t(this.getTipElement()),
                  n = e.attr("class").match(Ve);
              null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, o._jQueryInterface = function(e) {
              return this.each((function() {
                  var n = t(this).data("bs.popover"),
                      i = "object" == typeof e ? e : null;
                  if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                      if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                      n[e]()
                  }
              }))
          }, i(o, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return Xe
              }
          }, {
              key: "NAME",
              get: function() {
                  return Qe
              }
          }, {
              key: "DATA_KEY",
              get: function() {
                  return "bs.popover"
              }
          }, {
              key: "Event",
              get: function() {
                  return Ke
              }
          }, {
              key: "EVENT_KEY",
              get: function() {
                  return ".bs.popover"
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Ye
              }
          }]), o
      }(Ue);
  t.fn[Qe] = Ge._jQueryInterface, t.fn[Qe].Constructor = Ge, t.fn[Qe].noConflict = function() {
      return t.fn[Qe] = ze, Ge._jQueryInterface
  };
  var Je = "scrollspy",
      Ze = t.fn[Je],
      et = {
          offset: 10,
          method: "auto",
          target: ""
      },
      tt = {
          offset: "number",
          method: "string",
          target: "(string|element)"
      },
      nt = function() {
          function e(e, n) {
              var i = this;
              this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function(e) {
                  return i._process(e)
              })), this.refresh(), this._process()
          }
          var n = e.prototype;
          return n.refresh = function() {
              var e = this,
                  n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                  i = "auto" === this._config.method ? n : this._config.method,
                  r = "position" === i ? this._getScrollTop() : 0;
              this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                  var n, s = o.getSelectorFromElement(e);
                  if (s && (n = document.querySelector(s)), n) {
                      var a = n.getBoundingClientRect();
                      if (a.width || a.height) return [t(n)[i]().top + r, s]
                  }
                  return null
              })).filter((function(e) {
                  return e
              })).sort((function(e, t) {
                  return e[0] - t[0]
              })).forEach((function(t) {
                  e._offsets.push(t[0]), e._targets.push(t[1])
              }))
          }, n.dispose = function() {
              t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, n._getConfig = function(e) {
              if ("string" != typeof(e = r({}, et, "object" == typeof e && e ? e : {})).target && o.isElement(e.target)) {
                  var n = t(e.target).attr("id");
                  n || (n = o.getUID(Je), t(e.target).attr("id", n)), e.target = "#" + n
              }
              return o.typeCheckConfig(Je, e, tt), e
          }, n._getScrollTop = function() {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, n._getScrollHeight = function() {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, n._getOffsetHeight = function() {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }, n._process = function() {
              var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
              if (this._scrollHeight !== t && this.refresh(), e >= n) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i)
              } else {
                  if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                  for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
              }
          }, n._activate = function(e) {
              this._activeTarget = e, this._clear();
              var n = this._selector.split(",").map((function(t) {
                      return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  })),
                  i = t([].slice.call(document.querySelectorAll(n.join(","))));
              i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {
                  relatedTarget: e
              })
          }, n._clear = function() {
              [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                  return e.classList.contains("active")
              })).forEach((function(e) {
                  return e.classList.remove("active")
              }))
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this).data("bs.scrollspy");
                  if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                      if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                      i[n]()
                  }
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "Default",
              get: function() {
                  return et
              }
          }]), e
      }();
  t(window).on("load.bs.scrollspy.data-api", (function() {
      for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
          var i = t(e[n]);
          nt._jQueryInterface.call(i, i.data())
      }
  })), t.fn[Je] = nt._jQueryInterface, t.fn[Je].Constructor = nt, t.fn[Je].noConflict = function() {
      return t.fn[Je] = Ze, nt._jQueryInterface
  };
  var it = t.fn.tab,
      rt = function() {
          function e(e) {
              this._element = e
          }
          var n = e.prototype;
          return n.show = function() {
              var e = this;
              if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                  var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                      s = o.getSelectorFromElement(this._element);
                  if (r) {
                      var a = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                      i = (i = t.makeArray(t(r).find(a)))[i.length - 1]
                  }
                  var l = t.Event("hide.bs.tab", {
                          relatedTarget: this._element
                      }),
                      c = t.Event("show.bs.tab", {
                          relatedTarget: i
                      });
                  if (i && t(i).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                      s && (n = document.querySelector(s)), this._activate(this._element, r);
                      var u = function() {
                          var n = t.Event("hidden.bs.tab", {
                                  relatedTarget: e._element
                              }),
                              r = t.Event("shown.bs.tab", {
                                  relatedTarget: i
                              });
                          t(i).trigger(n), t(e._element).trigger(r)
                      };
                      n ? this._activate(n, n.parentNode, u) : u()
                  }
              }
          }, n.dispose = function() {
              t.removeData(this._element, "bs.tab"), this._element = null
          }, n._activate = function(e, n, i) {
              var r = this,
                  s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                  a = i && s && t(s).hasClass("fade"),
                  l = function() {
                      return r._transitionComplete(e, s, i)
                  };
              if (s && a) {
                  var c = o.getTransitionDurationFromElement(s);
                  t(s).removeClass("show").one(o.TRANSITION_END, l).emulateTransitionEnd(c)
              } else l()
          }, n._transitionComplete = function(e, n, i) {
              if (n) {
                  t(n).removeClass("active");
                  var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                  r && t(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
              }
              if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), o.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                  var s = t(e).closest(".dropdown")[0];
                  if (s) {
                      var a = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                      t(a).addClass("active")
                  }
                  e.setAttribute("aria-expanded", !0)
              }
              i && i()
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this),
                      r = i.data("bs.tab");
                  if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                      if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                      r[n]()
                  }
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }]), e
      }();
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
      e.preventDefault(), rt._jQueryInterface.call(t(this), "show")
  })), t.fn.tab = rt._jQueryInterface, t.fn.tab.Constructor = rt, t.fn.tab.noConflict = function() {
      return t.fn.tab = it, rt._jQueryInterface
  };
  var ot = t.fn.toast,
      st = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
      },
      at = {
          animation: !0,
          autohide: !0,
          delay: 500
      },
      lt = function() {
          function e(e, t) {
              this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
          }
          var n = e.prototype;
          return n.show = function() {
              var e = this,
                  n = t.Event("show.bs.toast");
              if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                  this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                  var i = function() {
                      e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function() {
                          e.hide()
                      }), e._config.delay))
                  };
                  if (this._element.classList.remove("hide"), o.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                      var r = o.getTransitionDurationFromElement(this._element);
                      t(this._element).one(o.TRANSITION_END, i).emulateTransitionEnd(r)
                  } else i()
              }
          }, n.hide = function() {
              if (this._element.classList.contains("show")) {
                  var e = t.Event("hide.bs.toast");
                  t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
              }
          }, n.dispose = function() {
              this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
          }, n._getConfig = function(e) {
              return e = r({}, at, t(this._element).data(), "object" == typeof e && e ? e : {}), o.typeCheckConfig("toast", e, this.constructor.DefaultType), e
          }, n._setListeners = function() {
              var e = this;
              t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
                  return e.hide()
              }))
          }, n._close = function() {
              var e = this,
                  n = function() {
                      e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
                  };
              if (this._element.classList.remove("show"), this._config.animation) {
                  var i = o.getTransitionDurationFromElement(this._element);
                  t(this._element).one(o.TRANSITION_END, n).emulateTransitionEnd(i)
              } else n()
          }, n._clearTimeout = function() {
              clearTimeout(this._timeout), this._timeout = null
          }, e._jQueryInterface = function(n) {
              return this.each((function() {
                  var i = t(this),
                      r = i.data("bs.toast");
                  if (r || (r = new e(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                      if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                      r[n](this)
                  }
              }))
          }, i(e, null, [{
              key: "VERSION",
              get: function() {
                  return "4.5.2"
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return st
              }
          }, {
              key: "Default",
              get: function() {
                  return at
              }
          }]), e
      }();
  t.fn.toast = lt._jQueryInterface, t.fn.toast.Constructor = lt, t.fn.toast.noConflict = function() {
      return t.fn.toast = ot, lt._jQueryInterface
  }, e.Alert = l, e.Button = u, e.Carousel = m, e.Collapse = w, e.Dropdown = ke, e.Modal = je, e.Popover = Ge, e.Scrollspy = nt, e.Tab = rt, e.Toast = lt, e.Tooltip = Ue, e.Util = o, Object.defineProperty(e, "__esModule", {
      value: !0
  })
})), document.querySelector(".hero .carousel")) {
document.querySelector(".hero .carousel .carousel-item.active .hero-slide--image").addEventListener("animationend", (() => {
  document.querySelector(".hero .carousel").dataset.revealed = !0, delete document.querySelector(".hero .carousel").dataset.animating
})), document.querySelector(".hero .carousel .carousel-item.active .hero-slide--image").addEventListener("animationstart", (() => {
  document.querySelector(".hero .carousel").dataset.animating = !0
}));
const e = e => {
  let t = document.querySelectorAll(".hero .carousel-indicators-hero .carousel-indicators-hero-list");
  t[0].style.webkitMaskPositionX = `calc(${t[0].children[e].offsetLeft}px - 1.875em)`, t[0].style.webkitMaskSize = `calc(${t[0].children[e].getBoundingClientRect().width}px + 1.875em) auto`, t[0].querySelector(".active").classList.remove("active"), t[0].children[e].classList.add("active"), t[0].scrollLeft = e * t[0].offsetWidth / 3 - t[0].offsetWidth / 3, e === t[0].children.length - 1 ? t[0].dataset.lastActive = !0 : delete t[0].dataset.lastActive, t[1].querySelector(".active").classList.remove("active"), t[1].children[e].classList.add("active"), t[0].children[e].querySelector("button").click()
};
let t;
document.querySelectorAll(".hero .carousel-indicators-hero .carousel-indicators-hero-list button").forEach((t => {
  t.addEventListener("click", (t => {
      let n = t.target.closest("li"),
          i = document.querySelector(".hero .carousel-inner"),
          r = [...n.parentNode.children].indexOf(n);
      i.querySelector(".active").classList.remove("active"), i.children[r].classList.add("active"), e(r), window.matchMedia("(max-width: 899.9px)").matches && (i.scrollTo(i.offsetWidth * r, 0), delete document.querySelector(".hero .carousel").dataset.revealed)
  }))
})), document.querySelector(".carousel-indicators-hero").addEventListener("keydown", (e => {
  "Tab" === e.key && (document.querySelector(".carousel-indicators-hero").dataset.tabbing = !0)
})), e(0), document.querySelectorAll(".indicators-scroll > button").forEach((e => {
  e.onclick = e => {
      let t, n = e.target,
          i = n.parentNode.querySelector(".carousel-indicators-hero-list:first-of-type"),
          r = [...i.children].indexOf(i.querySelector(".active"));
      t = [...n.parentNode.children].indexOf(n) > 0 ? r === i.children.length - 1 ? 0 : r + 1 : 0 === r ? i.children.length - 1 : r - 1, i.children[t].querySelector("button").click()
  }
})), $(".hero .carousel").on("slid.bs.carousel", (function() {
  let t = [...this.querySelector(".carousel-inner").children].indexOf(this.querySelector(".carousel-inner .active"));
  e(t)
})), window.addEventListener("resize", (n => {
  let i = document.querySelector(".hero .carousel");
  window.matchMedia("(min-width: 900px)").matches ? (i.querySelector(".carousel-item.active .hero-slide--image").style.display = "none", setTimeout((() => {
      i.querySelector(".carousel-item.active .hero-slide--image").style.display = ""
  }), 0), i.dataset.mobile && (i.querySelector(".carousel-inner").style.opacity = 0), delete i.dataset.mobile) : i.dataset.mobile = !0, delete i.dataset.revealed, clearTimeout(t), t = setTimeout((() => {
      i.querySelector(".carousel-inner").style.opacity = "", i.dataset.revealed = !0
  }), 1e3 * parseFloat(getComputedStyle(i).getPropertyValue("--duration")));
  let r = i.querySelector(".carousel-indicators-hero ol:last-of-type");
  e([...r.children].indexOf(r.querySelector(".active")))
}));
let n = () => !!navigator.userAgent.match("Chrome"),
  i = e => "rtl" === getComputedStyle(e).direction,
  r = e => i(e) && n() ? e.scrollWidth - e.scrollLeft - e.offsetWidth : (i(e) && !n() ? -1 : 1) * e.scrollLeft;
var isScrolling, lastScrollX;
let o = t => {
  if (window.matchMedia("(max-width: 899.9px)").matches) {
      let n = t.target;
      clearTimeout(isScrolling), lastScrollX = r(n), isScrolling = setTimeout((function() {
          if (lastScrollX === r(n) && r(n) % n.offsetWidth == 0) {
              let t = Math.round(r(n) / n.scrollWidth * n.children.length);
              e(t)
          }
      }), 66)
  }
};
document.querySelector(".hero .carousel-inner").addEventListener("scroll", o), document.addEventListener("visibilitychange", (e => {
  document.querySelectorAll(".carousel").forEach((e => {
      $(e).carousel(!0 === document.hidden ? "pause" : "cycle")
  }))
}), !1), document.querySelector(".hero .carousel").addEventListener("animationstart", (e => {
  "hero-right-arrow" === e.animationName && delete e.target.dataset.revealed
}))
}

function scrollToElementHash(e, t) {
if ("" !== e.hash) {
  t.preventDefault();
  var n = e.hash;
  $(n).length && $("html, body").animate({
      scrollTop: $(n).offset().top
  }, 800, (function() {
      window.location.hash = n;
      var e = $(n);
      if (e.focus(), e.is(":focus")) return !1;
      e.attr("tabindex", "-1"), e.focus()
  }))
}
}

function ready(e) {
"loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
}
$((function() {
$(".link-smooth-scroll").on("click", (function(e) {
  scrollToElementHash(this, e)
}))
})), document.querySelector(".tab-accordion-wrap") && $(document).ready((function() {
$(".tab-accordion-wrap .nav-link, .tab-accordion-wrap .card-head a").on("click", (function(e) {
  e.preventDefault()
}));
var e = window.location.href;
if (e.indexOf("#") > 0) {
  var t = e.substring(e.indexOf("#") + 1);
  $('.nav[role="tablist"] a[href="#' + t + '"]').tab("show")
}
$('a[role="tab"]').on("click", (function() {
  var t;
  const n = $(this).attr("href");
  t = e.split("#")[0] + n, history.replaceState(null, null, t)
}))
}));
let textImageControlCarousel = e => {
let t = e.target,
  n = [...t.parentNode.children].indexOf(t),
  i = t.closest(".carousel");
i.querySelector(".carousel-indicators").children[n].click(), i.querySelector(".carousel-item.active").classList.remove("active"), i.querySelectorAll(".carousel-item")[n].classList.add("active")
};

function setDeviceBackground() {
$.each($(".text-image__contain .text-image__box"), (function(e, t) {
  $(t).toggleClass("box--simple", $(t).outerHeight(!1) > 500)
}))
}
document.querySelectorAll(".text-media-carousel").forEach((e => {
let t = e.querySelector(".carousel-indicators");
if (t) {
  let n = e.querySelectorAll(".text-image--text > div");
  n.length;
  n.forEach(((e, i) => {
      let r = document.createElement("div");
      r.classList.add("text-image--indicators");
      for (let e = 0; e < n.length; e++) {
          let n = document.createElement("button");
          n.innerHTML = t.children[e].innerHTML, e || (n.disabled = !0), r.append(n)
      }
      e.prepend(r), r.onclick = textImageControlCarousel
  }))
}
e.querySelector(".carousel").ontransitionend = e => {
  "height" === e.propertyName && setTimeout((() => e.target.style.height = ""), 100)
}
})), ready((() => {
$(".carousel").on("slide.bs.carousel", (function(e) {
  this.style.height = this.scrollHeight + "px", e.relatedTarget.style.display = "block";
  let t = e.relatedTarget.scrollHeight + "px";
  e.relatedTarget.style.display = "", this.style.height = t;
  let n = e.to;
  e.relatedTarget.querySelectorAll(".text-image--indicators [disabled]").forEach((e => {
      e.disabled = !1
  })), e.relatedTarget.querySelectorAll(`.text-image--indicators > :nth-child(${n+1})`).forEach((e => {
      e.disabled = !0
  }))
}))
})), window.addEventListener("load", (e => {
setTimeout((function() {
  if (void 0 === IntersectionObserver) return;
  const e = $(".carousel");
  if (0 === e.length) return;
  var t = new IntersectionObserver((function(e, t) {
      e.forEach((function(e) {
          jQuery(e.target).carousel(e.intersectionRatio > 0 ? "cycle" : "pause")
      }))
  }), {
      root: null,
      rootMargin: "-150px 0px",
      threshold: 0
  });
  e.each((function() {
      t.observe(this)
  }))
}))
})), $(window).on("resize", (function() {
setDeviceBackground()
})), $((function() {
setDeviceBackground()
}));
//# sourceMappingURL=script-jquery-bootstrap.min.map