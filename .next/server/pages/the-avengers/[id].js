(function() {
var exports = {};
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./src/assets/photos/iron-man.jpg
var iron_man = __webpack_require__(159);
// EXTERNAL MODULE: ./src/assets/photos/capitao.jpg
var capitao = __webpack_require__(288);
// EXTERNAL MODULE: ./src/assets/photos/hulk.jpg
var hulk = __webpack_require__(895);
// EXTERNAL MODULE: ./src/assets/photos/pantera.jpg
var pantera = __webpack_require__(638);
// EXTERNAL MODULE: ./src/assets/photos/thor.jpg
var thor = __webpack_require__(391);
// EXTERNAL MODULE: ./src/assets/photos/scott-lang.png
var scott_lang = __webpack_require__(83);
// EXTERNAL MODULE: ./src/assets/photos/vespa.jpg
var vespa = __webpack_require__(862);
// EXTERNAL MODULE: ./src/assets/photos/gaviao.jpg
var gaviao = __webpack_require__(861);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/pages/the-avenger.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "the-avenger__Container",
  componentId: "zsefxh-0"
})(["ul{list-style:disc;li{margin-left:20px;}}"]);
;// CONCATENATED MODULE: ./src/pages/the-avengers/[id].tsx
















const _id_images = {
  'iron-man.jpg': iron_man/* default */.Z,
  'capitao.jpg': capitao/* default */.Z,
  'hulk.jpg': hulk/* default */.Z,
  'pantera.jpg': pantera/* default */.Z,
  'thor.jpg': thor/* default */.Z,
  'scott-lang.png': scott_lang/* default */.Z,
  'vespa.jpg': vespa/* default */.Z,
  'gaviao.jpg': gaviao/* default */.Z
};

const PageAvenger = ({
  character
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["The Avengers - ", character.name]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "callaction",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: character.name
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: _id_images[character.image],
              placeholder: "blur"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: character.text.map(t => /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: t
            }, t))
          }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: character.powers.map(({
                  strong,
                  text
                }) => {
                  if (text instanceof Array) {
                    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                        children: strong
                      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: text.map(({
                          strong: s,
                          text: t
                        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                            children: s
                          }), t]
                        }))
                      })]
                    });
                  }

                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: strong
                    }), text]
                  });
                })
              })
            })
          })]
        })
      })
    })]
  });
};

const getStaticPaths = async () => {
  const response = await external_axios_default().get('http://localhost:3333/characters');
  const paths = response.data.map(character => ({
    params: {
      id: character.id
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  };
};
const getStaticProps = async context => {
  const {
    id
  } = context.params;
  const response = await external_axios_default().get(`http://localhost:3333/characters?id=${id}`);
  return {
    props: {
      character: response.data[0]
    }
  };
};
/* harmony default export */ var _id_ = (PageAvenger);

/***/ }),

/***/ 376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,675,347], function() { return __webpack_exec__(576); });
module.exports = __webpack_exports__;

})();