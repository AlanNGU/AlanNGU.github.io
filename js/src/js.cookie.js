// build time:Mon May 25 2020 17:43:55 GMT+0800 (GMT+08:00)
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},t.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(f){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape);var s="";for(var p in i)i[p]&&(s+="; "+p,i[p]!==!0&&(s+="="+i[p]));return document.cookie=n+"="+r+s}n||(c={});for(var d=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,l=0;l<d.length;l++){var C=d[l].split("="),g=C.slice(1).join("=");'"'===g.charAt(0)&&(g=g.slice(1,-1));try{var m=C[0].replace(u,decodeURIComponent);if(g=o.read?o.read(g,m):o(g,m)||g.replace(u,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(f){}if(n===m){c=g;break}n||(c[m]=g)}catch(f){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
//rebuild by neat 