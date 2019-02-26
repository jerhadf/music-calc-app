(function(t) {
  function e(e) {
    for (
      var s, r, l = e[0], o = e[1], u = e[2], p = 0, f = [];
      p < l.length;
      p++
    )
      (r = l[p]), i[r] && f.push(i[r][0]), (i[r] = 0);
    for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
    c && c(e);
    while (f.length) f.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], s = !0, l = 1; l < n.length; l++) {
        var o = n[l];
        0 !== i[o] && (s = !1);
      }
      s && (a.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var s = {},
    i = { app: 0 },
    a = [];
  function r(e) {
    if (s[e]) return s[e].exports;
    var n = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = s),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            n,
            s,
            function(e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var u = 0; u < l.length; u++) e(l[u]);
  var c = o;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "034f": function(t, e, n) {
    "use strict";
    var s = n("64a9"),
      i = n.n(s);
    i.a;
  },
  "148d": function(t, e, n) {},
  1862: function(t, e, n) {
    "use strict";
    var s = n("5f92"),
      i = n.n(s);
    i.a;
  },
  1985: function(t, e, n) {
    "use strict";
    var s = n("7130"),
      i = n.n(s);
    i.a;
  },
  "2a27": function(t, e, n) {
    "use strict";
    var s = n("e5a8"),
      i = n.n(s);
    i.a;
  },
  "450f": function(t, e, n) {
    "use strict";
    var s = n("f099"),
      i = n.n(s);
    i.a;
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var s = n("2b0e"),
      i = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { attrs: { id: "app" } }, [
          n(
            "section",
            { staticClass: "hero is-bold is-primary is-fullheight" },
            [
              t._m(0),
              n("div", { staticClass: "hero-body" }, [
                n(
                  "div",
                  { staticClass: "container" },
                  [
                    n("AppTitle", {
                      attrs: { title: "The Music-Time Calculator" }
                    }),
                    n("SongInput", {
                      attrs: { input_msg: "Enter your song!" },
                      model: {
                        value: t.song,
                        callback: function(e) {
                          t.song = "string" === typeof e ? e.trim() : e;
                        },
                        expression: "song"
                      }
                    }),
                    n("ArtistInput", {
                      attrs: { input_msg: "Enter the artist!" },
                      model: {
                        value: t.artist,
                        callback: function(e) {
                          t.artist = "string" === typeof e ? e.trim() : e;
                        },
                        expression: "artist"
                      }
                    }),
                    n(
                      "transition",
                      { attrs: { name: "slide" } },
                      [
                        t.show_time
                          ? n("TimeInput", {
                              attrs: { input_msg: "How much time? (minutes)" },
                              model: {
                                value: t.time,
                                callback: function(e) {
                                  t.time = "string" === typeof e ? e.trim() : e;
                                },
                                expression: "time"
                              }
                            })
                          : t._e(),
                        t.show_count
                          ? n("CountInput", {
                              attrs: { input_msg: "How many times to listen?" },
                              model: {
                                value: t.count,
                                callback: function(e) {
                                  t.count =
                                    "string" === typeof e ? e.trim() : e;
                                },
                                expression: "count"
                              }
                            })
                          : t._e()
                      ],
                      1
                    ),
                    n("Calculate", {
                      nativeOn: {
                        click: function(e) {
                          return t.callSpotifyAPI(e);
                        }
                      }
                    })
                  ],
                  1
                )
              ]),
              n("div", { staticClass: "hero-foot" }, [
                n("nav", { staticClass: "tabs is-boxed is-fullwidth" }, [
                  n(
                    "div",
                    { staticClass: "container" },
                    [
                      n("MenuItem", {
                        attrs: {
                          song: t.song,
                          artist: t.artist,
                          time: t.time,
                          count: t.count
                        },
                        on: { selected: t.changeSelected }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        ]);
      },
      a = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "hero-head" }, [
            n("nav", { staticClass: "navbar" }, [
              n("div", { staticClass: "container" }, [
                n("div", { staticClass: "navbar-brand" }, [
                  n("a", { staticClass: "navbar-item" }, [
                    n("span", { staticClass: "icon" }, [
                      n("i", { staticClass: "fas fa-music fa-3x" })
                    ]),
                    n("span", [
                      n("i", {
                        staticClass: "fas fa-clock fa-3x",
                        attrs: { id: "clock-icon" }
                      })
                    ]),
                    n("span", [
                      n("i", { staticClass: "fas fa-calculator fa-3x" })
                    ])
                  ])
                ]),
                n(
                  "div",
                  {
                    staticClass: "navbar-menu",
                    attrs: { id: "navbarMenuHeroA" }
                  },
                  [
                    n("div", { staticClass: "navbar-end" }, [
                      n("span", { staticClass: "navbar-item" }, [
                        n(
                          "a",
                          {
                            staticClass: "button is-primary is-inverted",
                            attrs: { href: "https://github.com/vintners" }
                          },
                          [
                            n("span", { staticClass: "icon" }, [
                              n("i", { staticClass: "fab fa-github" })
                            ]),
                            n("span", { attrs: { id: "github-name" } }, [
                              t._v("jeremy")
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]);
        }
      ],
      r = n("e814"),
      l = n.n(r),
      o = (n("a481"),
      function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "app-title" }, [
          t._m(0),
          n("h2", { staticClass: "title" }, [t._v(" " + t._s(t.title) + " ")]),
          t._m(1)
        ]);
      }),
      u = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "container center" }, [
            n("figure", { staticClass: "image" }, [
              n("img", {
                staticClass: "is-rounded",
                staticStyle: { "max-width": "130px" },
                attrs: { src: "public\\img\\calculator_color.png" }
              })
            ])
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("p", { staticClass: "subtitle" }, [
            t._v("\n        Find the "),
            n("strong", [t._v("time you need")]),
            t._v(" to listen to songs!\n    ")
          ]);
        }
      ],
      c = { name: "AppTitle", props: { title: String } },
      p = c,
      f = (n("2a27"), n("2877")),
      m = Object(f["a"])(p, o, u, !1, null, "f273873a", null),
      d = m.exports,
      v = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "song-input" }, [
          n("div", { staticClass: "field" }, [
            n("div", { staticClass: "control has-icons-left" }, [
              n("input", {
                staticClass: "input is-large is-rounded is-info",
                attrs: { type: "text", placeholder: t.input_msg },
                on: {
                  input: function(e) {
                    return t.$emit("input", e.target.value);
                  }
                }
              }),
              t._m(0)
            ])
          ])
        ]);
      },
      h = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("span", { staticClass: "icon is-small is-left" }, [
            n("i", { staticClass: "fas fa-music" })
          ]);
        }
      ],
      g = { name: "SongInput", props: { input_msg: String } },
      _ = g,
      b = (n("7678"), Object(f["a"])(_, v, h, !1, null, "5e0825a9", null)),
      C = b.exports,
      y = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "artist-input" }, [
          n("div", { staticClass: "field" }, [
            n("div", { staticClass: "control has-icons-left" }, [
              n("input", {
                staticClass: "input is-large is-rounded is-info",
                attrs: { type: "text", placeholder: t.input_msg },
                on: {
                  input: function(e) {
                    return t.$emit("input", e.target.value);
                  }
                }
              }),
              t._m(0)
            ])
          ])
        ]);
      },
      x = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("span", { staticClass: "icon is-small is-left" }, [
            n("i", { staticClass: "fas fa-user-circle" })
          ]);
        }
      ],
      w = { name: "ArtistInput", props: { input_msg: String } },
      $ = w,
      S = Object(f["a"])($, y, x, !1, null, null, null),
      I = S.exports,
      k = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      E = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "button",
            { staticClass: "button is-light is-outlined is-large" },
            [n("p", { staticClass: "btn-txt" }, [t._v("Calculate!")])]
          );
        }
      ],
      O = {
        data: function() {
          return {};
        }
      },
      j = O,
      A = (n("450f"), Object(f["a"])(j, k, E, !1, null, "281d227e", null)),
      P = A.exports,
      T = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "control has-icons-left" }, [
          n("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: t.internalValue,
                expression: "internalValue"
              }
            ],
            staticClass: "input is-large is-rounded is-info",
            attrs: {
              type: "number",
              placeholder: t.input_msg,
              width: "100",
              oninput: "this.value=this.value.replace(/[^0-9]/g,'');"
            },
            domProps: { value: t.internalValue },
            on: {
              input: [
                function(e) {
                  e.target.composing || (t.internalValue = e.target.value);
                },
                function(e) {
                  return t.$emit("input", e.target.value);
                }
              ],
              keydown: t.controlInput
            }
          }),
          t._m(0)
        ]);
      },
      V = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("span", { staticClass: "icon is-small is-left" }, [
            n("i", { staticClass: "fas fa-clock" })
          ]);
        }
      ],
      M = (n("c5f6"),
      {
        name: "TimeInput",
        props: {
          input_msg: String,
          value: { type: String, default: "" },
          max: { type: Number, default: 44 }
        },
        computed: {
          internalValue: {
            get: function() {
              return this.value;
            },
            set: function(t) {
              this.$emit("input", t);
            }
          }
        },
        methods: {
          controlInput: function(t) {
            this.value.length >= this.max &&
              t.keyCode >= 48 &&
              t.keyCode <= 90 &&
              t.preventDefault();
          }
        }
      }),
      H = M,
      N = Object(f["a"])(H, T, V, !1, null, null, null),
      D = N.exports,
      J = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "control has-icons-left" }, [
          n("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: t.internalValue,
                expression: "internalValue"
              }
            ],
            staticClass: "input is-large is-rounded is-info",
            attrs: {
              type: "number",
              placeholder: t.input_msg,
              width: "100",
              oninput: "this.value=this.value.replace(/[^0-9]/g,'');"
            },
            domProps: { value: t.internalValue },
            on: {
              input: [
                function(e) {
                  e.target.composing || (t.internalValue = e.target.value);
                },
                function(e) {
                  return t.$emit("input", e.target.value);
                }
              ],
              keydown: t.controlInput
            }
          }),
          t._m(0)
        ]);
      },
      R = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("span", { staticClass: "icon is-small is-left" }, [
            n("i", { staticClass: "fas fa-headphones" })
          ]);
        }
      ],
      X = {
        name: "CountInput",
        props: {
          input_msg: String,
          value: { type: String, default: "" },
          max: { type: Number, default: 44 }
        },
        computed: {
          internalValue: {
            get: function() {
              return this.value;
            },
            set: function(t) {
              this.$emit("input", t);
            }
          }
        },
        methods: {
          controlInput: function(t) {
            this.value.length >= this.max &&
              t.keyCode >= 48 &&
              t.keyCode <= 90 &&
              t.preventDefault();
          }
        }
      },
      F = X,
      L = (n("1862"), Object(f["a"])(F, J, R, !1, null, null, null)),
      U = L.exports,
      q = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("ul", [
          n(
            "li",
            {
              class: { "is-active": "time" == t.selected },
              attrs: { id: "menu-item" },
              on: { click: t.toggleActive }
            },
            [
              n("a", [
                t._v(
                  "How many times could I listen to " +
                    t._s(t.song) +
                    " by " +
                    t._s(t.artist) +
                    " in " +
                    t._s(t.time) +
                    " minutes?"
                )
              ])
            ]
          ),
          n(
            "li",
            {
              class: { "is-active": "count" == t.selected },
              attrs: { id: "menu-item" },
              on: { click: t.toggleActive }
            },
            [
              n("a", [
                t._v(
                  "How long to listen to " +
                    t._s(t.song) +
                    " by " +
                    t._s(t.artist) +
                    " " +
                    t._s(t.count) +
                    " times?"
                )
              ])
            ]
          )
        ]);
      },
      z = [],
      B = {
        name: "MenuItem",
        props: {
          text: String,
          song: String,
          artist: String,
          time: String,
          count: String
        },
        data: function() {
          return { selected: "time" };
        },
        methods: {
          toggleActive: function() {
            "time" == this.selected
              ? (this.selected = "count")
              : (this.selected = "time"),
              this.$emit("selected");
          }
        }
      },
      G = B,
      K = (n("1985"), Object(f["a"])(G, q, z, !1, null, null, null)),
      Q = K.exports,
      W = {
        name: "app",
        components: {
          AppTitle: d,
          SongInput: C,
          ArtistInput: I,
          Calculate: P,
          TimeInput: D,
          MenuItem: Q,
          CountInput: U
        },
        data: function() {
          return {
            artist: "[artist]",
            time: "X",
            count: "X",
            song: "[song]",
            show_time: !0,
            show_count: !1,
            API_response: void 0
          };
        },
        methods: {
          changeSelected: function() {
            (this.show_time = !this.show_time),
              (this.show_count = !this.show_count);
          },
          callSpotifyAPI: function() {
            var t = this,
              e = this.artist.replace(/ /g, "_"),
              n = this.song.replace(/ /g, "_");
            if (this.show_time) l()(this.time);
            else l()(this.count);
            this.$api
              .get("search?artist=".concat(e, "&track=").concat(n))
              .then(function(e) {
                alert("Recieved response!"),
                  (t.API_response = e.data),
                  console.dir(e.data);
              })
              .catch(function(t) {
                alert("Error!"), console.log(t);
              });
          }
        }
      },
      Y = W,
      Z = (n("034f"), Object(f["a"])(Y, i, a, !1, null, null, null)),
      tt = Z.exports,
      et = (n("92c6"), n("8a03")),
      nt = n.n(et),
      st = (n("5abe"), n("a255")),
      it = n.n(st),
      at = n("d9ca"),
      rt = n.n(at),
      lt = n("bc3a"),
      ot = n.n(lt);
    (s["default"].config.productionTip = !1),
      new s["default"]({
        render: function(t) {
          return t(tt);
        }
      }).$mount("#app"),
      s["default"].use(nt.a),
      s["default"].use(ot.a),
      s["default"].use({
        install: function(t) {
          t.prototype.$api = ot.a.create({ baseURL: "http://localhost:8080/" });
        }
      }),
      s["default"].use(it.a, new rt.a());
  },
  "5f92": function(t, e, n) {},
  "64a9": function(t, e, n) {},
  7130: function(t, e, n) {},
  7678: function(t, e, n) {
    "use strict";
    var s = n("148d"),
      i = n.n(s);
    i.a;
  },
  e5a8: function(t, e, n) {},
  f099: function(t, e, n) {}
});
//# sourceMappingURL=app.c8845c5b.js.map
