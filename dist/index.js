import Ye, { useState as q, useRef as vr, useMemo as K, Children as ee, useCallback as he, cloneElement as Me } from "react";
var ge = { exports: {} }, Z = {};
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
    return Z;
  $e = 1;
  var l = Ye, L = Symbol.for("react.element"), S = Symbol.for("react.fragment"), D = Object.prototype.hasOwnProperty, W = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(T, f, A) {
    var g, _ = {}, c = null, x = null;
    A !== void 0 && (c = "" + A), f.key !== void 0 && (c = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (g in f)
      D.call(f, g) && !k.hasOwnProperty(g) && (_[g] = f[g]);
    if (T && T.defaultProps)
      for (g in f = T.defaultProps, f)
        _[g] === void 0 && (_[g] = f[g]);
    return { $$typeof: L, type: T, key: c, ref: x, props: _, _owner: W.current };
  }
  return Z.Fragment = S, Z.jsx = I, Z.jsxs = I, Z;
}
var Q = {};
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
    var l = Ye, L = Symbol.for("react.element"), S = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), F = Symbol.iterator, Y = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        w("error", e, t);
      }
    }
    function w(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var V = !1, O = !1, B = !1, i = !1, v = !1, y;
    y = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === D || e === k || v || e === W || e === A || e === g || i || e === x || V || O || B || typeof e == "object" && e !== null && (e.$$typeof === c || e.$$typeof === _ || e.$$typeof === I || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === y || e.getModuleId !== void 0));
    }
    function U(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function p(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case D:
          return "Fragment";
        case S:
          return "Portal";
        case k:
          return "Profiler";
        case W:
          return "StrictMode";
        case A:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return p(r) + ".Consumer";
          case I:
            var t = e;
            return p(t._context) + ".Provider";
          case f:
            return U(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case c: {
            var s = e, u = s._payload, o = s._init;
            try {
              return E(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, m = 0, J, be, _e, ye, me, Ee, Re;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Ve() {
      {
        if (m === 0) {
          J = console.log, be = console.info, _e = console.warn, ye = console.error, me = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        m++;
      }
    }
    function Be() {
      {
        if (m--, m === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: J
            }),
            info: N({}, e, {
              value: be
            }),
            warn: N({}, e, {
              value: _e
            }),
            error: N({}, e, {
              value: ye
            }),
            group: N({}, e, {
              value: me
            }),
            groupCollapsed: N({}, e, {
              value: Ee
            }),
            groupEnd: N({}, e, {
              value: Re
            })
          });
        }
        m < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = j.ReactCurrentDispatcher, ue;
    function re(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ue = n && n[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var le = !1, te;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Ue();
    }
    function xe(e, r) {
      if (!e || le)
        return "";
      {
        var t = te.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      le = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ie.current, ie.current = null, Ve();
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
            } catch ($) {
              n = $;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch ($) {
              n = $;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            n = $;
          }
          e();
        }
      } catch ($) {
        if ($ && n && typeof $.stack == "string") {
          for (var a = $.stack.split(`
`), R = n.stack.split(`
`), h = a.length - 1, b = R.length - 1; h >= 1 && b >= 0 && a[h] !== R[b]; )
            b--;
          for (; h >= 1 && b >= 0; h--, b--)
            if (a[h] !== R[b]) {
              if (h !== 1 || b !== 1)
                do
                  if (h--, b--, b < 0 || a[h] !== R[b]) {
                    var P = `
` + a[h].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, P), P;
                  }
                while (h >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        le = !1, ie.current = u, Be(), Error.prepareStackTrace = s;
      }
      var z = e ? e.displayName || e.name : "", Ne = z ? re(z) : "";
      return typeof e == "function" && te.set(e, Ne), Ne;
    }
    function qe(e, r, t) {
      return xe(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ne(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Je(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case A:
          return re("Suspense");
        case g:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case _:
            return ne(e.type, r, t);
          case c: {
            var n = e, s = n._payload, u = n._init;
            try {
              return ne(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, we = {}, Te = j.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var u = Function.call.bind(ae);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              a = h;
            }
            a && !(a instanceof Error) && (oe(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), oe(null)), a instanceof Error && !(a.message in we) && (we[a.message] = !0, oe(s), d("Failed %s type: %s", t, a.message), oe(null));
          }
      }
    }
    var ze = Array.isArray;
    function fe(e) {
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
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Oe(e) {
      if (He(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), je(e);
    }
    var X = j.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Se, ce;
    ce = {};
    function Ze(e) {
      if (ae.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (ae.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var t = E(X.current.type);
        ce[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(X.current.type), e.ref), ce[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Se || (Se = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        $$typeof: L,
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
        var u, o = {}, a = null, R = null;
        t !== void 0 && (Oe(t), a = "" + t), Qe(r) && (Oe(r.key), a = "" + r.key), Ze(r) && (R = r.ref, er(r, s));
        for (u in r)
          ae.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (u in h)
            o[u] === void 0 && (o[u] = h[u]);
        }
        if (a || R) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, b), R && tr(o, b);
        }
        return nr(e, a, R, s, n, X.current, o);
      }
    }
    var de = j.ReactCurrentOwner, ke = j.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === L;
    }
    function De() {
      {
        if (de.current) {
          var e = E(de.current.type);
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
    var Ae = {};
    function sr(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Ae[t])
          return;
        Ae[t] = !0;
        var n = "";
        e && e._owner && e._owner !== de.current && (n = " It was passed a child from " + E(e._owner.type) + "."), G(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), G(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            pe(n) && Fe(n, r);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = M(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              pe(o.value) && Fe(o.value, r);
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
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var s = E(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            G(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Ie(e, r, t, n, s, u) {
      {
        var o = H(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = or(s);
          R ? a += R : a += De();
          var h;
          e === null ? h = "null" : fe(e) ? h = "array" : e !== void 0 && e.$$typeof === L ? (h = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, a);
        }
        var b = ar(e, r, t, s, u);
        if (b == null)
          return b;
        if (o) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (fe(P)) {
                for (var z = 0; z < P.length; z++)
                  Le(P[z], e);
                Object.freeze && Object.freeze(P);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(P, e);
        }
        return e === D ? ur(b) : ir(b), b;
      }
    }
    function lr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var cr = fr, dr = lr;
    Q.Fragment = D, Q.jsx = cr, Q.jsxs = dr;
  }()), Q;
}
process.env.NODE_ENV === "production" ? ge.exports = pr() : ge.exports = hr();
var C = ge.exports;
const se = (l) => typeof l == "function";
function br({
  children: l,
  data: L = {},
  onSubmit: S,
  hasProgress: D = !0,
  hasNavigation: W,
  primaryColor: k = "#fe5f1e",
  progressColor: I = "#f4f4f4",
  navigationColor: T = "#fff",
  // Merged steps props
  item: f,
  mergedStep: A,
  mergedButtonsDisabled: g,
  mergedSetPrevStep: _,
  mergedSetNextStep: c
}) {
  const [x, F] = q(0), [Y, M] = q(L), [j, d] = q(!1), w = vr(null), V = K(() => ee.toArray(
    se(l) ? l({}).props.children : l
  ), [l]), O = he((U = 1) => {
    const p = w.current, E = _ ? (m = 1) => _(m) : (m = 1) => F((J) => J - m);
    (_ ? () => {
      p && p.prev && !p.prev(E) || _(U);
    } : () => {
      p && p.prev && !p.prev(E) || F((m) => m - U);
    })();
  }, [_]), B = he((U = 1) => {
    const p = w.current, E = c ? (m = 1) => c(m) : (m = 1) => F((J) => J + m);
    (c ? () => {
      p && p.next && !p.next(E) || c(U);
    } : () => {
      if (!(p && p.next && !p.next(E))) {
        if (x === V.length - 1 && S)
          return S(Y);
        F((m) => m + U);
      }
    })();
  }, [V.length, c, S, x, Y]), i = K(
    () => ee.toArray(
      se(l) ? l({
        data: Y,
        setData: M,
        setButtonsDisabled: d,
        setPrevStep: O,
        setNextStep: B
      }).props.children : l
    ),
    [l, Y, O, B]
  ), v = i[A ?? x], y = v.props.noProgress ? !1 : D, H = v.props.noNavigation ? !1 : W;
  return /* @__PURE__ */ C.jsxs("div", { className: "steps", children: [
    y && /* @__PURE__ */ C.jsx("div", { className: "steps-progress", children: i.map((U, p) => /* @__PURE__ */ C.jsx(
      "button",
      {
        type: "button",
        style: { backgroundColor: p <= x ? k : I },
        "aria-label": `Step ${p + 1}`,
        disabled: p > x || g || j,
        onClick: () => F(p)
      },
      p
    )) }),
    /* @__PURE__ */ C.jsx("h2", { className: "steps__title", children: v.props.title }),
    /* @__PURE__ */ C.jsx("div", { className: "steps__body", children: v.props.hasMiddleware ? Me(v, { ref: w }) : v }),
    H && /* @__PURE__ */ C.jsxs("div", { className: "steps__nav", children: [
      (x !== 0 || (f ? f > 0 : !1)) && /* @__PURE__ */ C.jsx(
        "button",
        {
          type: "button",
          className: "steps__navBtn steps__navBtn--prev",
          style: { backgroundColor: k },
          "aria-label": "Previous step",
          disabled: g || j,
          onClick: () => O(),
          children: /* @__PURE__ */ C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "50px", height: "50px", fill: T, children: /* @__PURE__ */ C.jsx("path", { d: "M 19.8125 13.09375 C 19.59375 13.132813 19.398438 13.242188 19.25 13.40625 L 8.34375 24.28125 L 7.65625 25 L 8.34375 25.71875 L 19.25 36.59375 C 19.492188 36.890625 19.878906 37.027344 20.253906 36.941406 C 20.625 36.855469 20.917969 36.5625 21.003906 36.191406 C 21.089844 35.816406 20.953125 35.429688 20.65625 35.1875 L 11.46875 26 L 41 26 C 41.359375 26.003906 41.695313 25.816406 41.878906 25.503906 C 42.058594 25.191406 42.058594 24.808594 41.878906 24.496094 C 41.695313 24.183594 41.359375 23.996094 41 24 L 11.46875 24 L 20.65625 14.8125 C 20.980469 14.511719 21.066406 14.035156 20.871094 13.640625 C 20.679688 13.242188 20.246094 13.023438 19.8125 13.09375 Z" }) })
        }
      ),
      /* @__PURE__ */ C.jsx(
        "button",
        {
          type: "button",
          className: "steps__navBtn steps__navBtn--next",
          style: { backgroundColor: k },
          "aria-label": "Next step",
          disabled: g || j,
          onClick: () => B(),
          children: /* @__PURE__ */ C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "50px", height: "50px", fill: T, children: /* @__PURE__ */ C.jsx("path", { d: "M 29.84375 13.09375 C 29.46875 13.160156 29.167969 13.433594 29.0625 13.796875 C 28.957031 14.164063 29.066406 14.554688 29.34375 14.8125 L 38.53125 24 L 9 24 C 8.96875 24 8.9375 24 8.90625 24 C 8.355469 24.027344 7.925781 24.496094 7.953125 25.046875 C 7.980469 25.597656 8.449219 26.027344 9 26 L 38.53125 26 L 29.34375 35.1875 C 29.046875 35.429688 28.910156 35.816406 28.996094 36.191406 C 29.082031 36.5625 29.375 36.855469 29.746094 36.941406 C 30.121094 37.027344 30.507813 36.890625 30.75 36.59375 L 41.65625 25.71875 L 42.34375 25 L 41.65625 24.28125 L 30.75 13.40625 C 30.542969 13.183594 30.242188 13.070313 29.9375 13.09375 C 29.90625 13.09375 29.875 13.09375 29.84375 13.09375 Z" }) })
        }
      )
    ] })
  ] });
}
function _r({
  children: l,
  data: L = {},
  onSubmit: S,
  hasProgress: D = !0,
  hasNavigation: W,
  primaryColor: k = "#fe5f1e",
  progressColor: I = "#f4f4f4",
  navigationColor: T = "#fff"
}) {
  const [f, A] = q(0), [g, _] = q(0), [c, x] = q(0), [F, Y] = q(!1), [M, j] = q(L), d = K(
    () => ee.toArray(
      se(l) ? l({}).props.children : l
    ),
    [l]
  ), w = K(
    () => d.reduce(
      (i, { props: v }, y) => (i.push(
        ee.toArray(v.children).length + (y > 0 ? i[y - 1] : y === 1 ? i[y - 1] - 1 : 0)
      ), i),
      []
    ),
    [d]
  ), V = K(
    () => d.reduce(
      (i, v, y) => (i.push([...Array(w[y] - (y > 0 ? w[y - 1] : 0)).keys()]), i),
      []
    ),
    [d, w]
  ), O = he((i) => {
    if (i === w[w.length - 1] && S)
      return S(M);
    const v = w.findIndex((H) => H > i), y = V.flat()[i];
    A(v), _(y), x(i);
  }, [S, w, V, M]), B = K(() => ee.toArray(
    se(l) ? l({
      data: M,
      setData: j,
      setButtonsDisabled: Y,
      setPrevStep: (i = 1) => O(c - i),
      setNextStep: (i = 1) => O(c + i)
    }) : l
  ), [l, O, c, M]);
  return /* @__PURE__ */ C.jsxs("div", { className: "merged-steps", children: [
    /* @__PURE__ */ C.jsx("div", { className: "steps-progress", children: D && V.reduce(
      (i, v, y) => (y <= f ? i.push(...v) : i.push(0), i),
      []
    ).map((i, v) => /* @__PURE__ */ C.jsx(
      "button",
      {
        type: "button",
        style: { backgroundColor: v <= c ? k : I },
        "aria-label": `Step ${v + 1}`,
        disabled: v > g,
        onClick: () => v < c && O(v)
      },
      v
    )) }),
    Me(B[0].props.children[f], {
      children: B[0].props.children[f].props.children,
      hasProgress: !1,
      hasNavigation: W,
      primaryColor: k,
      navigationColor: T,
      // Merged props
      item: c,
      mergedStep: g,
      mergedButtonsDisabled: F,
      mergedSetPrevStep: (i = 1) => O(c - i),
      mergedSetNextStep: (i = 1) => O(c + i)
    })
  ] });
}
export {
  _r as MergeSteps,
  br as Steps
};
//# sourceMappingURL=index.js.map
