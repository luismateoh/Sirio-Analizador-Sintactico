(this["webpackJsonpSirio-Analizador-Sintactico"]=this["webpackJsonpSirio-Analizador-Sintactico"]||[]).push([[0],{463:function(e,a,r){"use strict";r.r(a);var t=r(1),n=r.n(t),c=r(40),i=r.n(c),s=(r(125),r(11)),o=r(478),l=r(479),d=r(480),b=r(473),h=r(76),O=r(474),v=r(469),j=r(3);var f=function(e){e.onSelect,e.activeKey;var a=Object(s.a)(e,["onSelect","activeKey"]);return Object(j.jsx)(O.a,{children:Object(j.jsxs)(v.a,Object(h.a)(Object(h.a)({},a),{},{children:[Object(j.jsx)(v.a.Header,{children:Object(j.jsx)("div",{style:{padding:"20px"},children:"SIRIO"})}),Object(j.jsx)(v.a.Body,{})]}))})},p=r(46);function u(e){return/(["'])((?:(?=(?:\\)*)\\.|.)*?)\1/gm.test(e.trim())}var E=r(475),x=r(470),C=r(467),m=r(472);var g=function(e){var a=e.tokens,r=(e.onSelect,e.activeKey,Object(s.a)(e,["tokens","onSelect","activeKey"]),{display:"flex",weight:"20px"}),t={fontSize:"1.2em",fontWeight:500,justifyContent:"left"},n={fontSize:"1.2em",fontWeight:500,textAlign:"right",paddingLeft:"1.2em"};function c(e){var a=Object(j.jsx)(E.a,{children:"No encontrado"});return 0===e.localeCompare("Cadena de texto")&&(a=Object(j.jsx)(E.a,{color:"orange",children:"Cadena de texto"})),0===e.localeCompare("Palabra reservada")&&(a=Object(j.jsx)(E.a,{color:"blue",children:"Palabra reservada"})),0===e.localeCompare("Identificador")&&(a=Object(j.jsx)(E.a,{color:"green",children:"Identificador"})),0===e.localeCompare("Constante Numerica")&&(a=Object(j.jsx)(E.a,{color:"violet",children:"Constante Num\xe9rica"})),0===e.localeCompare("Operador")&&(a=Object(j.jsx)(E.a,{color:"cyan",children:"Operador"})),0===e.localeCompare("Separador")&&(a=Object(j.jsx)(E.a,{color:"red",children:"Separador"})),a}return Object(j.jsx)(x.a,{header:"Analisis L\xe9xico",collapsible:!0,bordered:!0,style:{marginTop:"2%"},children:Object(j.jsx)("div",{children:Object(j.jsx)(x.a,{bordered:!0,children:Object(j.jsx)(C.a,{size:"sm",hover:!0,children:a.map((function(e,a){return Object(j.jsx)(C.a.Item,{index:a,children:Object(j.jsxs)(m.a,{justify:"left",children:[Object(j.jsx)(m.a.Item,{colspan:2,style:r,children:Object(j.jsxs)("div",{style:n,children:[a+1,"."]})}),Object(j.jsx)(m.a.Item,{colspan:4,style:r,children:Object(j.jsx)("div",{style:{textAlign:"right"},children:Object(j.jsx)("div",{children:c(e.key)})})}),Object(j.jsx)(m.a.Item,{colspan:9,style:r,children:Object(j.jsx)("div",{style:{textAlign:"left"},children:Object(j.jsx)("div",{style:t,children:e.value})})})]})},e.key)}))})})})})},S=r(118),D=(r(414),r(471)),A=r(466),L=r(476),T=r(477),k=r(468);var N=function(e){var a=e.response,r=(e.onSelect,e.activeKey,Object(s.a)(e,["response","onSelect","activeKey"]),a);return console.log(a),Object(j.jsx)(x.a,{header:"Analisis Sint\xe1ctico",collapsible:!0,bordered:!0,style:{marginTop:"2%"},children:Object(j.jsx)("div",{children:r})})};function I(e){var a=[];e.map((function(e){var r=e.key,t=e.value;switch(r){case"Palabra reservada":a.push(t.toString());break;case"Identificador":a.push("id");break;case"Separador":a.push(t.toString());break;case"Cadena de texto":a.push("str");break;case"Constante Numerica":a.push("num");break;case"Operador":a.push(t.toString())}}));var r,t,n,c,i,s,o,l="''",d="Sintaxis Correcta";function b(e,a){var r=!1,t=!0;for(var c in e){var s=e[c];if(t=!1,v(s,n)){r|=j(s,a);break}for(var o in i[s]){var d=i[s][o];t|=d==l,r|=j(d,a)}if(!t)break}return t&&(r|=j(l,a)),r}function h(e){var a=[],r=!0;for(var t in e){var c=e[t];if(r=!1,v(c,n)){j(c,a);break}for(var s in i[c]){var o=i[c][s];r|=o==l,j(o,a)}if(!(r|=void 0==i[c]||0==i[c].length))break}return r&&j(l,a),a}function O(e){var a=[];for(var r in e)a[r]=e[r].trim();return a}function v(e,a){for(var r in a)if(e==a[r])return!0;return!1}function j(e,a){return!v(e,a)&&(a[a.length]=e,!0)}return c="PROGRAM -> DECLIST\nDECLIST ->\tDECL DECLIST1\nDECLIST1 ->\tDECL DECLIST1\nDECLIST1 -> ''\nDECL ->\tVARDECL\nDECL -> STMT\nVARDECL ->\tvar VARDECLIST ;\nVARDECLIST ->\tVARDECINIT VARDECLIST\nVARDECLIST -> , VARDECINIT VARDECLIST\nVARDECLIST -> ''\nVARDECINIT ->\tid VARINITEXP\nVARINITEXP ->\t= SIMPLEEXP\nVARINITEXP -> ''\nSTMT ->\tSELECTMT\nSTMT -> ITERSTMT\nSELECTMT ->\tif ( SIMPLEEXP ) { DECLIST } ELSE\nELSE ->\telse { DECLIST }\nELSE -> ''\nITERSTMT ->\twhile ( SIMPLEEXP ) { DECLIST }\n\nSIMPLEEXP ->\tANDCOND\nANDCOND ->\tORCOND ANDCOND1\nANDCOND1 ->\tand ORCOND ANDCOND1\nANDCOND1 -> ''\nORCOND ->\tLOGCOND ORCOND1\nORCOND1 ->\tor LOGCOND ORCOND1\nORCOND1 -> ''\nLOGCOND ->\tE LOGCOND1\nLOGCOND1 ->\t< E LOGCOND1\nLOGCOND1 -> <= E LOGCOND1\nLOGCOND1 -> > E LOGCOND1\nLOGCOND1 -> >= E LOGCOND1\nLOGCOND1 -> == E LOGCOND1\nLOGCOND1 -> != E LOGCOND1\nLOGCOND1 -> ''\nE ->\tT E1\nE1 ->\t+ T E1\nE1 -> - T E1\nE1 -> ''\nT ->\tF T1\nT1 ->\t* F T1\nT1 -> / F T1\nT1 -> % F T1\nT1 -> ''\nF ->\t( SIMPLEEXP )\nF -> id\nF -> num\n".split("\n"),console.log(c),r=[],t=[],n=[],function(){for(var e in c){var a=c[e].split("->");if(2==a.length){var i=a[0].trim(),s=O(a[1].trim().split(" "));for(var o in j(i,r),j(i,t),s){var d=s[o];d!=l&&j(d,r)}}}!function(e,a,r){for(var t in e){var n=e[t];v(n,a)||(r[r.length]=n)}}(r,t,n)}(),function(){var e;i=new Object;do{for(var a in e=!1,c){var r=c[a].split("->");if(!(r.length<2)){var t=r[0].trim(),n=O(r[1].trim().split(" ")),s=i[t];void 0==s&&(s=[]),1==n.length&&n[0]==l?e|=j(l,s):e|=b(n,s),i[t]=s}}}while(e)}(),function(){var e;s=new Object;do{for(var a in e=!1,c){var r=c[a].split("->");if(!(r.length<2)){var n=r[0].trim(),i=O(r[1].trim().split(" "));if(0==a)void 0==(E=s[n])&&(E=[]),e|=j("$",E),s[n]=E;for(var o in i){var d=i[o];if(v(d,t)){var b=s[d];void 0==b&&(b=[]);var f=h(i.slice(parseInt(o)+1));for(var p in f){var u=f[p];if(u==l){var E=s[n];for(var x in E)e|=j(E[x],b)}else e|=j(u,b)}s[d]=b}}}}}while(e)}(),function(){for(var e in o=new Object,c){var a=c[e].trim().split("->");if(!(a.length<2)){var r=a[0].trim(),t=h(O(a[1].trim().split(" ")));for(var n in t){var i=t[n];if(i!=l){void 0==o[r]&&(o[r]=new Object);var d=o[r][i];o[r][i]=void 0==d?c[e].trim():d+"<br>"+c[e].trim()}else for(var n in s[r]){var b=s[r][n];void 0==o[r]&&(o[r]=new Object);d=o[r][b];o[r][b]=void 0==d?c[e].trim():d+"<br>"+c[e].trim()}}}}}(),function(){var e=a,r=["$",t[0]],n=new Object;n.label="root",n.children=[];for(var c=[n],i=0,s=0;i<1e3&&1<r.length;++i){var b=r[r.length-1],h=s<e.length?e[s]:"$";""==h.trim()&&(h="$");var O="";if(b==h)r.pop(),++s,c.pop().children.push(h);else{if(!v(b,t)){d="Error de sintaxis: Se esperaba, "+j.label+" se obtuvo: "+h.toString(),console.log(r);break}O=o[b][h];var j=new Object;if(j.label=b,j.children=[],c.pop().children.push(j),void 0==O){d="Error de sintaxis: Se esperaba, "+j.label+" se obtuvo: "+h.toString();break}r.pop();var f=O.split("->")[1].trim().split(" ").slice(0).reverse();for(var i in f)c.push(j);v(l,f)?c.pop().children.push(l):r=r.concat(f)}}}(),d}var y={width:"60rem"};var w=function(e){e.onSelect,e.activeKey,Object(s.a)(e,["onSelect","activeKey"]);var a=Object(t.useState)(),r=Object(p.a)(a,2),n=r[0],c=r[1],i=Object(t.useState)(),o=Object(p.a)(i,2),l=o[0],d=o[1],b=Object(t.useState)("void main() {\n  print('Hello, World!');\n}"),h=Object(p.a)(b,2),O=h[0],v=h[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)(x.a,{header:"Analizador l\xe9xico y sint\xe1ctico",bordered:!0,style:y,children:[Object(j.jsx)("p",{}),Object(j.jsxs)(D.a,{fluid:!0,children:[Object(j.jsxs)(A.a,{children:[Object(j.jsx)(L.a,{children:"C\xf3digo Dart"}),Object(j.jsx)(S.a,{value:O,setValue:v,width:"100%",height:"40vh",language:"dart",inlineNumbers:!0,borderRadius:"8px",tabSize:5})]}),Object(j.jsx)(A.a,{children:Object(j.jsxs)(T.a,{children:[Object(j.jsx)(k.a,{appearance:"default",color:"green",onClick:function(){var e,a;0!==O.trim().localeCompare("")?(c(),a=I(e=function(e){for(var a=e.split(/(?:(["'])((?:(?=(?:\\)*)\\.|.)*?)\1)/gm),r=[],t=0;t<a.length;t){var n=a[t];0===n.localeCompare('"')?(n='"'.concat(a[t+1],'"'),t++):0===n.localeCompare("'")&&(n="'".concat(a[t+1],"'"),t++),r.push(n),t++}r.forEach((function(e,a){var t=r[a];u(e)||(t=(t=(t=(t=t.replaceAll(/\n/g," ")).replaceAll(/\t/g," ")).replaceAll(/"/g,' " ')).replaceAll(/'/g," ' "),["(",")","[","]","{","}",";",",",":"].forEach((function(e){var a=new RegExp("\\".concat(e),"g");t=t.replaceAll(a," ".concat(e," "))})),["+","-","*","/","%","<",">","=","!","&","|","^","~","?","."].forEach((function(e){var a=new RegExp("\\".concat(e),"g");t=t.replaceAll(a," ".concat(e," "))})),t=(t=t.replaceAll(/(?<=\d)( \. )(?=\d)/g,".")).replaceAll(/(- )(?=\d)/g,"-"),["<<=",">>=","~/=]","..."].forEach((function(e){var a=new RegExp("\\".concat(e.charAt(0),"\\s\\s","\\",e.charAt(1),"\\s\\s","\\",e.charAt(2)),"g");t=t.replaceAll(a," ".concat(e.charAt(0),e.charAt(1),e.charAt(2)," "))})),["++","\u2013=","/=","%=","^=","+=","*=","&=","|=","||","&&","++","--","<<",">>","==","!=",">=","<=","~/","??","?."].forEach((function(e){var a=new RegExp("\\".concat(e.charAt(0),"\\s\\s","\\",e.charAt(1)),"g");t=t.replaceAll(a," ".concat(e.charAt(0),e.charAt(1)," "))}))),r[a]=t})),e=(e=(e=(e=r.join(" ")).trim()).replaceAll(/\s{2,}/g," ")).match(/[^\s"']+|(?:(["'])((?:(?=(?:\\)*)\\.|.)*?)\1)/g);var c=[];return e.forEach((function(e,a,r){var t="No encontrado";/(?:\[|]|\(|\)|{|}|,|;|:|\.{3})/g.test(e.trim())&&(t="Separador"),function(e){return/(?:<<=|>>=|~\/=|\u2013=|\/=|%=|\^=|\+=|\*=|&=|\|=|\|\||&&|\+\+|--|<<|>>|==|!=|>=|<=|\?\?|\?\.|~\/|!|&|\||\^|=|>|<|\+|\u2013|\*|\/|%|~|\?|\.|-)/g.test(e.trim())}(e)&&(t="Operador"),function(e){var a,r=0;return(e=e.split("")).forEach((function(e,t,n){var c;switch(e){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":c="d";break;case".":c=".";break;case"e":case"E":c="E";break;case"-":c="s";break;default:c="x",r=9,a=!1}switch(r){case 0:switch(c){case"d":r=2,a=!0;break;case".":r=8,a=!1;break;case"E":r=9,a=!1;break;case"s":r=1,a=!1}break;case 1:switch(c){case"d":r=2,a=!0;break;case".":r=8,a=!1;break;case"E":case"s":r=9,a=!1}break;case 2:switch(c){case"d":r=2,a=!0;break;case".":r=34,a=!0;break;case"E":r=5,a=!1;break;case"s":r=9,a=!1}break;case 34:switch(c){case"d":r=34,a=!0;break;case".":r=9,a=!1;break;case"E":r=5,a=!1;break;case"s":r=9,a=!1}break;case 5:switch(c){case"d":r=7,a=!0;break;case".":case"E":r=9,a=!1;break;case"s":r=6,a=!1}break;case 6:case 7:switch(c){case"d":r=7,a=!0;break;case".":case"E":case"s":r=9,a=!1}break;case 8:switch(c){case"d":r=34,a=!0;break;case".":case"E":case"s":r=9,a=!1}break;case 9:switch(c){case"d":case".":case"E":case"s":r=9,a=!1}}})),a}(e)&&(t="Constante Numerica"),function(e){return/^[a-zA-Z_$][a-zA-Z\d_$]*$/gm.test(e.trim())}(e)&&(t="Identificador"),function(e){return/\b(?:abstract|else|import|super|as|enum|in|switch|assert|export|interface|sync|async|extends|is|this|await|extensioyarn n|library|throw|break|external|mixin|true|case|factory|new|try|catch|false|null|typedef|class|final|on|var|const|finally|operator|void|continue|For|part|while|covarient|Function|rethrow|with|default|get|return|yield|deffered|hide|set|do|if|show|dynamic|implements|static)\b/.test(e.trim())}(e)&&(t="Palabra reservada"),u(e)&&(t="Cadena de texto"),c.push({key:t,value:e})})),c}(O.trim())),c(Object(j.jsx)(g,{tokens:e})),d(Object(j.jsx)(N,{response:a}))):c()},children:"Analizar"}),Object(j.jsx)(k.a,{appearance:"default",onClick:function(){v(""),c(),d()},children:"Limpiar"})]})})]})]}),n,l]})};var R=function(e){return e.onSelect,e.activeKey,Object(s.a)(e,["onSelect","activeKey"]),Object(j.jsxs)(o.a,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(l.a,{style:{height:"100%",maxWidth:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"2%"},children:Object(j.jsx)(d.a,{children:Object(j.jsx)(b.a,{children:Object(j.jsx)(w,{})})})})]})};var G=function(){return Object(j.jsx)(R,{})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))}},[[463,1,2]]]);
//# sourceMappingURL=main.9485adf2.chunk.js.map