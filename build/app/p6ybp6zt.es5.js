/*! Built with http://stenciljs.com */
App.loadBundle("p6ybp6zt",["exports"],function(e){var t=window.App.h,n=(window.App.Context,function(){function e(){}return e.prototype.render=function(){if(this.match&&this.match.params.name)return t("div",{class:"app-profile"},t("p",null,"Hello! My name is ",this.match.params.name,". My name was passed in through a route param!"))},Object.defineProperty(e,"is",{get:function(){return"app-profile"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{match:{type:"Any",attr:"match"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".app-profile{padding:10px}"},enumerable:!0,configurable:!0}),e}());e.AppProfile=n,Object.defineProperty(e,"__esModule",{value:!0})});