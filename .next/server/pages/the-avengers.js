(function() {
var exports = {};
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ the_avengers; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
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
;// CONCATENATED MODULE: ./src/styles/pages/the-avengers.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "the-avengers__Container",
  componentId: "sc-1eljd1j-0"
})(["width:100%;max-width:1100px;ul{li{padding:40px;border-radius:10px;background:", ";box-shadow:0px 4px 4px rgba(0,0,0,0.25);display:flex;flex-direction:row;margin-bottom:30px;div{h2{float:left;font-size:20px;}p{text-indent:0px;padding:0;}&.image{width:300px;}&.img{width:180px;}&.name{width:200px;}&.text{width:calc(100% - 500px);}}&:hover{border:0.5px solid #7ca8ed;cursor:pointer;}}}"], props => props.theme.colors.background);
;// CONCATENATED MODULE: ./src/pages/the-avengers/index.tsx

















const the_avengers_images = {
  'iron-man.jpg': iron_man/* default */.Z,
  'capitao.jpg': capitao/* default */.Z,
  'hulk.jpg': hulk/* default */.Z,
  'pantera.jpg': pantera/* default */.Z,
  'thor.jpg': thor/* default */.Z,
  'scott-lang.png': scott_lang/* default */.Z,
  'vespa.jpg': vespa/* default */.Z,
  'gaviao.jpg': gaviao/* default */.Z
};

const PageAvengers = ({
  characters
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "The Avengers - Os Vingadores"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "callaction",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Os vingadores"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "callaction",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx(Container, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "image",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: "Imagem"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "name",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: "Nome"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: "Resumo"
                    })
                  })]
                }), characters.map(character => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  onClick: () => router.push(`the-avengers/${character.id}`),
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "image",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "img",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                        src: the_avengers_images[character.image],
                        placeholder: "blur"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "name",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: character.name
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text",
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: character.abstract
                    })
                  })]
                }, character.id))]
              })
            })
          })
        })
      })]
    })]
  });
};

const getStaticProps = async () => {
  const response = await external_axios_default().get(`http://localhost:3333/characters`);
  return {
    props: {
      characters: response.data
    }
  };
};
/* harmony default export */ var the_avengers = (PageAvengers);

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

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,675,347], function() { return __webpack_exec__(754); });
module.exports = __webpack_exports__;

})();