#jQuery slideMenu
a jQuery plugin which renders a custom, menu move up,down,left,right on button over.

#reference
jQuery Plugin Pattern URL : https://github.com/jquery-boilerplate/jquery-patterns

if browser support css3 transition, return browser status URL : http://www.abeautifulsite.net/feature-detection-for-css-transitions-via-jquery-support/

Usage:

```
 $.support.transition = (function(){
     var thisBody = document.body || document.documentElement,
         thisStyle = thisBody.style,
         support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
     return support;
 })();
 // calling the plugin
 var ms = new $('#slide_panel').mTicker();
 // changes the default properties
 $.pluginSetup({
 	aniTIme:5,
 	intervalTime:1000,
 	callback:function(){}
 });
 // for example reset options
 // rechanges the default properties
 $.pluginSetup({
 	aniTIme:5,
 	intervalTime:8,
 	callback:function(){}
 });
 // restart plugin
 ms.mTicker();
