(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2klF":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"672q":function(e,t,r){var n=r("zmto"),a=r("QP3L");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.preToCodeBlock=function(e){if(e.children&&e.children.props&&"code"===e.children.props.mdxType){var t=e.children.props,r=t.children,o=t.className,c=void 0===o?"":o,s=a(t,["children","className"]),l=c.match(/language-([\0-\uFFFF]*)/);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({codeString:r.trim(),className:c,language:null!=l?l[1]:""},s)}}},"9eSz":function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.default=void 0;var a,i=n(r("v06X")),o=n(r("XEEL")),c=n(r("uDP2")),s=n(r("j8BX")),l=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),b=function(e){var t=d(e),r=p(t);return m[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,O=y&&window.IntersectionObserver,v=new WeakMap;function j(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function P(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function x(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var E=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+o+c+r+n+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,c=l.default.createElement(k,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),c):c})),k=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},g,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&O&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,c=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,b=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,O=e.Tag,v=e.itemProp,S=e.loading,x=e.draggable,E=m||b;if(!E)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,s.default)({opacity:L?1:0,transition:z?"opacity "+y+"ms":"none"},c),D="boolean"==typeof h?"lightgray":h,C={transitionDelay:y+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&C,c,f),T={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:v},V=this.state.isHydrated?g(E):E[0];if(m)return l.default.createElement(O,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},l.default.createElement(O,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),D&&l.default.createElement(O,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&C)}),V.base64&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:T,imageVariants:E,generateSources:P}),V.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:T,imageVariants:E,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,j(E),l.default.createElement(k,{alt:r,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:S},V,{imageVariants:E}))}}));if(b){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete W.display,l.default.createElement(O,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},D&&l.default.createElement(O,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:D,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},z&&C)}),V.base64&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:T,imageVariants:E,generateSources:P}),V.tracedSVG&&l.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:T,imageVariants:E,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,j(E),l.default.createElement(k,{alt:r,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:S},V,{imageVariants:E}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),M=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function D(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}L.propTypes={resolutions:z,sizes:M,fixed:D(u.default.oneOfType([z,u.default.arrayOf(z)])),fluid:D(u.default.oneOfType([M,u.default.arrayOf(M)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=L;t.default=C},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Ck4i:function(e,t,r){var n=r("Q83E"),a=r("2klF");function i(t,r,o){return a()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n(i,r.prototype),i},i.apply(null,arguments)}e.exports=i},Q83E:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},QP3L:function(e,t,r){var n=r("WBuD");e.exports=function(e,t){if(null==e)return{};var r,a,i=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},R7tm:function(e,t,r){var n=r("qHws"),a=r("gC2u"),i=r("dQcQ"),o=r("m7BV");e.exports=function(e){return n(e)||a(e)||i(e)||o()}},WBuD:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},"Wo9+":function(e,t,r){e.exports={lineNumberStyle:"code-module--line-number-style--2tWK5"}},X8hv:function(e,t,r){var n=r("Ck4i"),a=r("R7tm"),i=r("0jh0"),o=r("uDP2");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r("q1tI"),u=r("7ljp").mdx,d=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=o(e,["scope","children"]),c=d(t),f=l.useMemo((function(){if(!r)return null;var e=s({React:l,mdx:u},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(i)))}),[r,t]);return l.createElement(f,s({},i))}},dQcQ:function(e,t,r){var n=r("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},dlzO:function(e,t,r){"use strict";r("q1tI");var n=r("TJpk"),a=r.n(n),i=r("Wbzz"),o=r("qKvR");function c(e){var t=e.description,r=e.lang,n=e.meta,c=e.title,s=e.imageSource,l=e.imageAlt,u=Object(i.c)("764694655").site,d=t||u.siteMetadata.description,f=s?""+u.siteMetadata.siteUrl+s:null,p=l||d;return Object(o.c)(a.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(s?[{name:"og:image",content:f},{name:"og:image:alt",content:p},{name:"twitter:image",content:f},{name:"twitter:image:alt",content:p},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(n)})}c.defaultProps={lang:"en",meta:[]},t.a=c},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,t,r){var n=r("hMe3");e.exports=function(e){if(Array.isArray(e))return n(e)}},xjC2:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return W}));var n=r("FqMR"),a=r("q1tI"),i=r.n(a),o=r("k1TG"),c=r("7ljp"),s=r("A2+M"),l=r("dlzO"),u=r("MXbp"),d=r("qKvR"),f=function(e){return Object(d.c)(u.b.h1,e)},p=r("2A+t"),g=function(e){return Object(p.c)(u.b.p,Object(o.a)({sx:{fontSize:1,mt:-3,mb:3}},e))},m=r("9eSz"),b=r.n(m),h=function(e){var t,r=e.post;return Object(d.c)(i.a.Fragment,null,(null==r||null===(t=r.image)||void 0===t?void 0:t.childImageSharp)&&Object(d.c)(b.a,{fluid:r.image.childImageSharp.fluid,alt:r.imageAlt?r.imageAlt:r.excerpt}))},y=r("Jad9"),O=r("izhR"),v=r("Wbzz"),j=u.b.div,S=function(e){var t=e.tags;return Object(d.c)(j,null,t.map((function(e,t){return Object(d.c)(v.a,{key:e,to:"/tag/"+e},Object(d.c)(O.a,{ml:Math.min(t,1)},e))})))},w=r("672q");var P=r("8o2o"),x=r("3Mpw"),E={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},R=r("Wo9+"),I=r.n(R);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=/{([\d,-]+)}/,M=function(e){var t=e.codeString,r=e.language,n=e.metastring,a=Object(P.a)(e,["codeString","language","metastring"]),i=function(e){if(!z.test(e))return function(){return!1};var t=z.exec(e)[1].split(",").map((function(e){return e.split("-").map((function(e){return parseInt(e,10)}))}));return function(e){var r=e+1;return t.some((function(e){var t=e[0],n=e[1];return n?r>=t&&r<=n:r===t}))}}(n);return Object(d.c)(x.a,Object(o.a)({},x.b,{code:t,language:r,theme:E},a),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,c=e.getTokenProps;return Object(d.c)("div",{className:"gatsby-highlight","data-language":r},Object(d.c)("pre",{className:t,style:L(L({},n),{},{overflowX:"auto"})},a.map((function(e,t){var r=o({line:e,key:t});return i(t)&&(r.className=r.className+" highlight-line"),Object(d.c)("div",r,Object(d.c)("span",{className:I.a.lineNumberStyle},t+1),e.map((function(e,t){return Object(d.c)("span",c({token:e,key:t}))})))}))))}))},D={a:function(e){var t=e.children,r=e.href;if(r.startsWith("/"))return Object(d.c)(v.a,{to:r},t);var n=r.startsWith("#");return Object(d.c)("a",{href:r,target:n?null:"_blank",rel:n?null:"noopener noreferrer"},t)},pre:function(e){var t=Object(w.preToCodeBlock)(e);return t?Object(d.c)(M,t):Object(d.c)("pre",e)}},C=function(e){var t,r,n,a,u=e.data,p=u.post,m=u.site.siteMetadata.title,b=e.location,O=e.previous,v=e.next;return Object(d.c)(i.a.Fragment,null,Object(d.c)(y.a,Object(o.a)({location:b,title:m},{previous:O,next:v}),Object(d.c)(l.a,{title:p.title,description:p.excerpt,imageSource:p.socialImage?null===(t=p.socialImage)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.fluid.src:null===(n=p.image)||void 0===n||null===(a=n.childImageSharp)||void 0===a?void 0:a.fluid.src,imageAlt:p.imageAlt}),Object(d.c)("main",null,Object(d.c)("article",null,Object(d.c)("header",null,Object(d.c)(h,{post:p}),Object(d.c)(f,null,p.title),Object(d.c)(g,null,p.date),Object(d.c)(S,{tags:p.tags})),Object(d.c)("section",null,Object(d.c)(c.MDXProvider,{components:D},Object(d.c)(s.MDXRenderer,null,p.body)))))))};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(e){var t=e.location,r=e.data,n=r.blogPost,a=r.previous,i=r.next;return Object(d.c)(C,{data:T(T({},r),{},{post:n}),location:t,previous:a,next:i})},W=(t.default=V,"2093620386")},zmto:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-576ffbf5153701b9d621.js.map