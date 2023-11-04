import Ye, { useState as B, useRef as vr, useMemo as X, Children as oe, useCallback as Ie, cloneElement as Me } from "react";
var pe = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function pr() {
  if ($e)
    return K;
  $e = 1;
  var p = Ye, F = Symbol.for("react.element"), T = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, N = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(C, f, D) {
    var h, E = {}, _ = null, I = null;
    D !== void 0 && (_ = "" + D), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (h in f)
      P.call(f, h) && !S.hasOwnProperty(h) && (E[h] = f[h]);
    if (C && C.defaultProps)
      for (h in f = C.defaultProps, f)
        E[h] === void 0 && (E[h] = f[h]);
    return { $$typeof: F, type: C, key: _, ref: I, props: E, _owner: N.current };
  }
  return K.Fragment = T, K.jsx = k, K.jsxs = k, K;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function hr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Ye, F = Symbol.for("react.element"), T = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), C = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), $ = Symbol.iterator, V = "@@iterator";
    function j(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[V];
      return typeof r == "function" ? r : null;
    }
    var x = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        A("error", e, t);
      }
    }
    function A(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var W = !1, U = !1, l = !1, g = !1, b = !1, Y;
    Y = Symbol.for("react.module.reference");
    function Z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === P || e === S || b || e === N || e === D || e === h || g || e === I || W || U || l || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === E || e.$$typeof === k || e.$$typeof === C || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Y || e.getModuleId !== void 0));
    }
    function M(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case P:
          return "Fragment";
        case T:
          return "Portal";
        case S:
          return "Profiler";
        case N:
          return "StrictMode";
        case D:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return Q(r) + ".Consumer";
          case k:
            var t = e;
            return Q(t._context) + ".Provider";
          case f:
            return M(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case _: {
            var s = e, u = s._payload, o = s._init;
            try {
              return O(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var c = Object.assign, R = 0, q, ge, be, _e, me, ye, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Be() {
      {
        if (R === 0) {
          q = console.log, ge = console.info, be = console.warn, _e = console.error, me = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        R++;
      }
    }
    function Ve() {
      {
        if (R--, R === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: c({}, e, {
              value: q
            }),
            info: c({}, e, {
              value: ge
            }),
            warn: c({}, e, {
              value: be
            }),
            error: c({}, e, {
              value: _e
            }),
            group: c({}, e, {
              value: me
            }),
            groupCollapsed: c({}, e, {
              value: ye
            }),
            groupEnd: c({}, e, {
              value: Ee
            })
          });
        }
        R < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = x.ReactCurrentDispatcher, ie;
    function ee(e, r, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ie = n && n[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var ue = !1, re;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Ue();
    }
    function Ce(e, r) {
      if (!e || ue)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ue = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = se.current, se.current = null, Be();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (L) {
              n = L;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (L) {
              n = L;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            n = L;
          }
          e();
        }
      } catch (L) {
        if (L && n && typeof L.stack == "string") {
          for (var a = L.stack.split(`
`), m = n.stack.split(`
`), d = a.length - 1, v = m.length - 1; d >= 1 && v >= 0 && a[d] !== m[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (a[d] !== m[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || a[d] !== m[v]) {
                    var w = `
` + a[d].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, w), w;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = u, Ve(), Error.prepareStackTrace = s;
      }
      var G = e ? e.displayName || e.name : "", Ne = G ? ee(G) : "";
      return typeof e == "function" && re.set(e, Ne), Ne;
    }
    function qe(e, r, t) {
      return Ce(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function te(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, Je(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case D:
          return ee("Suspense");
        case h:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case E:
            return te(e.type, r, t);
          case _: {
            var n = e, s = n._payload, u = n._init;
            try {
              return te(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, xe = {}, we = x.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var u = Function.call.bind(ne);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              a = d;
            }
            a && !(a instanceof Error) && (ae(s), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), ae(null)), a instanceof Error && !(a.message in xe) && (xe[a.message] = !0, ae(s), i("Failed %s type: %s", t, a.message), ae(null));
          }
      }
    }
    var ze = Array.isArray;
    function le(e) {
      return ze(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Se(e) {
      if (He(e))
        return i("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Te(e);
    }
    var z = x.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe, fe;
    fe = {};
    function Ze(e) {
      if (ne.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (ne.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var t = O(z.current.type);
        fe[t] || (i('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(z.current.type), e.ref), fe[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          je || (je = !0, i("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, i("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, s, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: F,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, s) {
      {
        var u, o = {}, a = null, m = null;
        t !== void 0 && (Se(t), a = "" + t), Qe(r) && (Se(r.key), a = "" + r.key), Ze(r) && (m = r.ref, er(r, s));
        for (u in r)
          ne.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            o[u] === void 0 && (o[u] = d[u]);
        }
        if (a || m) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, v), m && tr(o, v);
        }
        return nr(e, a, m, s, n, z.current, o);
      }
    }
    var ce = x.ReactCurrentOwner, Pe = x.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === F;
    }
    function ke() {
      {
        if (ce.current) {
          var e = O(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var De = {};
    function sr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ce.current && (n = " It was passed a child from " + O(e._owner.type) + "."), J(e), i('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), J(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (le(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ve(n) && Ae(n, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = j(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              ve(o.value) && Ae(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !de) {
          de = !0;
          var s = O(r);
          i("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && i("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            J(e), i("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), i("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function Le(e, r, t, n, s, u) {
      {
        var o = Z(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = or(s);
          m ? a += m : a += ke();
          var d;
          e === null ? d = "null" : le(e) ? d = "array" : e !== void 0 && e.$$typeof === F ? (d = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, i("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, a);
        }
        var v = ar(e, r, t, s, u);
        if (v == null)
          return v;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (le(w)) {
                for (var G = 0; G < w.length; G++)
                  Fe(w[G], e);
                Object.freeze && Object.freeze(w);
              } else
                i("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(w, e);
        }
        return e === P ? ur(v) : ir(v), v;
      }
    }
    function lr(e, r, t) {
      return Le(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Le(e, r, t, !1);
    }
    var cr = fr, dr = lr;
    H.Fragment = P, H.jsx = cr, H.jsxs = dr;
  }()), H;
}
process.env.NODE_ENV === "production" ? pe.exports = pr() : pe.exports = hr();
var y = pe.exports;
const he = (p) => typeof p == "function";
function br({
  children: p,
  data: F = {},
  onSubmit: T,
  hasProgress: P = !0,
  hasNavigation: N,
  primaryColor: S = "#fe5f1e",
  progressColor: k = "#f4f4f4",
  navigationColor: C = "#fff",
  // Merged steps props
  item: f,
  mergedStep: D,
  mergedStore: h,
  mergedSetStore: E,
  mergedButtonsDisabled: _,
  mergedSetButtonsDisabled: I,
  mergedSetPrevStep: $,
  mergedSetNextStep: V
}) {
  const [j, x] = B(0), [i, A] = B(F), [W, U] = B(!1), l = vr(null), g = X(() => oe.toArray(
    he(p) ? p({}).props.children : p
  ), [p]), b = Ie(() => {
    const c = l.current;
    ($ ? () => c && c.prev && !c.prev() && $() : () => {
      c && c.prev && !c.prev() || x((q) => q - 1);
    })();
  }, [$]), Y = Ie(() => {
    const c = l.current;
    (V ? () => c && c.next && !c.next() && V() : () => {
      if (!(c && c.next && !c.next())) {
        if (j === g.length - 1 && T)
          return T(i);
        x((q) => q + 1);
      }
    })();
  }, [g.length, V, T, j, i]), Z = X(
    () => oe.toArray(
      he(p) ? p({
        data: h || i,
        setData: E || A,
        setButtonsDisabled: I || U,
        setPrevStep: b,
        setNextStep: Y
      }).props.children : p
    ),
    [p, h, E, i, b, Y]
  ), M = Z[D ?? j], Q = M.props.noProgress ? !1 : P, O = M.props.noNavigation ? !1 : N;
  return /* @__PURE__ */ y.jsxs("div", { className: "steps", children: [
    Q && /* @__PURE__ */ y.jsx("div", { className: "steps-progress", children: Z.map((c, R) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        style: { backgroundColor: R <= j ? S : k },
        "aria-label": `Step ${R + 1}`,
        disabled: R > j || _ || W,
        onClick: () => x(R)
      },
      R
    )) }),
    /* @__PURE__ */ y.jsx("h2", { className: "steps__title", children: M.props.title }),
    /* @__PURE__ */ y.jsx("div", { className: "steps__body", children: M.props.hasMiddleware ? Me(M, { ref: l }) : M }),
    O && /* @__PURE__ */ y.jsxs("div", { className: "steps__nav", children: [
      (j !== 0 || (f ? f > 0 : !1)) && /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "steps__navBtn steps__navBtn--prev",
          style: { backgroundColor: S },
          "aria-label": "Previous step",
          disabled: _ || W,
          onClick: b,
          children: /* @__PURE__ */ y.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "50px", height: "50px", fill: C, children: /* @__PURE__ */ y.jsx("path", { d: "M 19.8125 13.09375 C 19.59375 13.132813 19.398438 13.242188 19.25 13.40625 L 8.34375 24.28125 L 7.65625 25 L 8.34375 25.71875 L 19.25 36.59375 C 19.492188 36.890625 19.878906 37.027344 20.253906 36.941406 C 20.625 36.855469 20.917969 36.5625 21.003906 36.191406 C 21.089844 35.816406 20.953125 35.429688 20.65625 35.1875 L 11.46875 26 L 41 26 C 41.359375 26.003906 41.695313 25.816406 41.878906 25.503906 C 42.058594 25.191406 42.058594 24.808594 41.878906 24.496094 C 41.695313 24.183594 41.359375 23.996094 41 24 L 11.46875 24 L 20.65625 14.8125 C 20.980469 14.511719 21.066406 14.035156 20.871094 13.640625 C 20.679688 13.242188 20.246094 13.023438 19.8125 13.09375 Z" }) })
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "steps__navBtn steps__navBtn--next",
          style: { backgroundColor: S },
          "aria-label": "Next step",
          disabled: W,
          onClick: Y,
          children: /* @__PURE__ */ y.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "50px", height: "50px", fill: C, children: /* @__PURE__ */ y.jsx("path", { d: "M 29.84375 13.09375 C 29.46875 13.160156 29.167969 13.433594 29.0625 13.796875 C 28.957031 14.164063 29.066406 14.554688 29.34375 14.8125 L 38.53125 24 L 9 24 C 8.96875 24 8.9375 24 8.90625 24 C 8.355469 24.027344 7.925781 24.496094 7.953125 25.046875 C 7.980469 25.597656 8.449219 26.027344 9 26 L 38.53125 26 L 29.34375 35.1875 C 29.046875 35.429688 28.910156 35.816406 28.996094 36.191406 C 29.082031 36.5625 29.375 36.855469 29.746094 36.941406 C 30.121094 37.027344 30.507813 36.890625 30.75 36.59375 L 41.65625 25.71875 L 42.34375 25 L 41.65625 24.28125 L 30.75 13.40625 C 30.542969 13.183594 30.242188 13.070313 29.9375 13.09375 C 29.90625 13.09375 29.875 13.09375 29.84375 13.09375 Z" }) })
        }
      )
    ] })
  ] });
}
function _r({
  children: p,
  data: F = {},
  onSubmit: T,
  hasProgress: P = !0,
  hasNavigation: N,
  primaryColor: S = "#fe5f1e",
  progressColor: k = "#f4f4f4",
  navigationColor: C = "#fff"
}) {
  const [f, D] = B(0), [h, E] = B(0), [_, I] = B(0), [$, V] = B(!1), [j, x] = B(F), i = X(
    () => oe.toArray(
      he(p) ? p({}).props.children : p
    ),
    [p]
  ), A = X(
    () => i.reduce(
      (l, { props: g }, b) => (l.push(
        oe.toArray(g.children).length + (b > 0 ? l[b - 1] : b === 1 ? l[b - 1] - 1 : 0)
      ), l),
      []
    ),
    [i]
  ), W = X(
    () => i.reduce(
      (l, g, b) => (l.push([...Array(A[b] - (b > 0 ? A[b - 1] : 0)).keys()]), l),
      []
    ),
    [i, A]
  ), U = (l) => {
    if (l === A[A.length - 1] && T)
      return T(j);
    const g = A.findIndex((Y) => Y > l), b = W.flat()[l];
    D(g), E(b), I(l);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "merged-steps", children: [
    /* @__PURE__ */ y.jsx("div", { className: "steps-progress", children: P && W.reduce(
      (l, g, b) => (b <= f ? l.push(...g) : l.push(0), l),
      []
    ).map((l, g) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        style: { backgroundColor: g <= _ ? S : k },
        "aria-label": `Step ${g + 1}`,
        disabled: g > h,
        onClick: () => g < _ && U(g)
      },
      g
    )) }),
    Me(i[f], {
      children: i[f].props.children,
      onSubmit: T,
      hasProgress: !1,
      hasNavigation: N,
      primaryColor: S,
      progressColor: k,
      navigationColor: C,
      item: _,
      mergedStep: h,
      mergedStore: j,
      mergedSetStore: x,
      mergedButtonsDisabled: $,
      mergedSetButtonsDisabled: V,
      mergedSetPrevStep: () => U(_ - 1),
      mergedSetNextStep: () => U(_ + 1)
    })
  ] });
}
export {
  _r as MergeSteps,
  br as Steps
};
//# sourceMappingURL=index.js.map
