(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/global.ts

/* harmony default export */ var global = (external_styled_components_.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text[0]};
    font: 400 16px Roboto, sans-serif;

  }
  p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    max-width: 800px;
    text-indent: 30px;
    text-align: justify;
    padding: 10px 20px;
  }
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;

    &.normal {
      font-weight: normal;
      font-size: 30px;
    }
  }
  h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    color: ${props => props.theme.colors.text[0]};
    font-weight: 400;

    :hover {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
    }
  }


  ul {
    list-style: none;
  }
  .container {
    width: 100%;
    max-width: 1200px;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 700px) {
    padding: 0 15px;
  }
  }
  .blankSpace {
    width: 100%;
    height: calc(100vh - 497px);
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px 0;

    &.callaction {
      background: ${props => props.theme.colors.callaction.background};
    }
  }


`);
;// CONCATENATED MODULE: ./src/styles/theme.ts
const theme = {
  colors: {
    background: '#ffffff',
    text: ['#353535', '#DDDDDD', '#EEEEEE'],
    divider: 'rgba(46, 46, 46, 0.5)',
    footer: {
      background: ['#111111', '#0A0A0A']
    },
    callaction: {
      background: '#F9F9F9'
    },
    primary: '#F03C02'
  }
};
/* harmony default export */ var styles_theme = (theme);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
;// CONCATENATED MODULE: ./src/components/Header/Link.tsx




const Link = ({
  children,
  href
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: router.asPath === href ? 'active' : '',
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: href,
      onClick: e => {
        e.preventDefault();
        router.push(href);
      },
      children: children
    })
  });
};

/* harmony default export */ var Header_Link = (Link);
;// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ var logo = ({"src":"/_next/static/image/src/assets/logo.09d69dd483625151337fe13a79dcba32.png","height":157,"width":146,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA3ElEQVR42mNI9NjGzAAFGyfez9rcc/UCAzLoLtzi1FG45szylpefj8579//Wph0BYImSkMm6SW49j3ODpy6oCr/xf27pvU87Jt66P696txZDplPJ0iovtx4vy4Wzkl0mvU4yX3qiPXtf55KKA5MYki1c15Z42m/xVk/6E28b/DvDLeBKZ2p97tTk1gUM1T7BIf46jv9r9PQ3dwe4ZWQ5ml9p90g4vSYpKJQh0FTBIFDJ7H+DncPRsuCohCb/4gszfbImgB2U6GjXFa2tdbjCPyCo1CeiZVJEij3MFwAN01uxX7sx8wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/Header/styles.ts

const Container = external_styled_components_default().header.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1th1ztv-0"
})(["display:flex;justify-content:center;margin-top:15px;"]);
const ContainerImages = external_styled_components_default().div.withConfig({
  displayName: "styles__ContainerImages",
  componentId: "sc-1th1ztv-1"
})(["width:100%;display:flex;justify-content:center;align-items:center;padding:0 15px;max-height:154px;"]);
const ContainerNavigation = external_styled_components_default().div.withConfig({
  displayName: "styles__ContainerNavigation",
  componentId: "sc-1th1ztv-2"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:10px 0;margin-bottom:15px;.divider{background:", ";width:100%;height:0.1px;}"], props => props.theme.colors.divider);
const ContentMenu = external_styled_components_default().nav.withConfig({
  displayName: "styles__ContentMenu",
  componentId: "sc-1th1ztv-3"
})(["ul{@media (max-width:700px){flex-direction:column;}display:flex;flex-direction:row;li{height:43px;a{display:flex;align-items:center;text-transform:uppercase;padding:10px 20px;text-decoration:none;}&.active{a{color:", ";font-weight:500;}}}}"], props => props.theme.colors.primary);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx








const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx(ContainerImages, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: logo,
            alt: "Logo Vingadores"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerNavigation, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ContentMenu, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Link, {
                href: "/",
                children: "Home"
              }), /*#__PURE__*/jsx_runtime_.jsx(Header_Link, {
                href: "/the-avengers",
                children: "Os vingadores"
              }), /*#__PURE__*/jsx_runtime_.jsx(Header_Link, {
                href: "/community",
                children: "Comunidade"
              }), /*#__PURE__*/jsx_runtime_.jsx(Header_Link, {
                href: "/creator",
                children: "Criador"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "divider"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Footer/styles.ts

const styles_Container = external_styled_components_default().footer.withConfig({
  displayName: "styles__Container",
  componentId: "zh8qjy-0"
})(["position:relative;background:", ";width:100%;height:150px;margin-top:100px;> div{position:absolute;display:flex;justify-content:center;background:", ";width:100%;height:100px;bottom:0;}"], props => props.theme.colors.footer.background[0], props => props.theme.colors.footer.background[1]);
const Contet = external_styled_components_default().div.withConfig({
  displayName: "styles__Contet",
  componentId: "zh8qjy-1"
})(["width:100%;max-width:1200px;display:flex;align-items:center;p{color:", ";font-size:14px;a{color:", ";text-decoration:none;}}"], props => props.theme.colors.text[1], props => props.theme.colors.text[2]);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(styles_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Contet, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["Designed by", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://andreg.com.br",
            target: "_blank",
            rel: "noreferrer",
            children: "GASolutions"
          })]
        })
      })
    })
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: styles_theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {}), /*#__PURE__*/jsx_runtime_.jsx(global, {})]
  });
};

/* harmony default export */ var _app = (MyApp);

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
var __webpack_exports__ = __webpack_require__.X(0, [597,675], function() { return __webpack_exec__(427); });
module.exports = __webpack_exports__;

})();