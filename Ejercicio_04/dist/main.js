(()=>{"use strict";var e={958:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{static cuadrado(e){return 4*e}static rectangulo(e,r){return 2*e+2*r}static circulo(e){return 2*Math.PI*e}}},569:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=class{static cuadrado(e){return e**2}static rectangulo(e,r){return e*r}static circulo(e){return Math.PI*e**2}}},728:function(e,r,t){var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const a=u(t(860)),o=u(t(958)),l=u(t(569)),c=(0,a.default)();c.get("/perimetro",((e,r)=>{const{figura:t,lado1:u,lado2:a,lado:l,radio:c}=e.query;let i;if("cuadrado"===t&&l)i=o.default.cuadrado(Number(l));else if("rectangulo"===t&&u&&a)i=o.default.rectangulo(Number(u),Number(a));else{if("circulo"!==t||!c)return r.send("Parametro son invalidos");i=o.default.circulo(Number(c))}r.json({calculo:"Perimetro",figura:t,resultado:i})})),c.get("/superficie",((e,r)=>{const{figura:t,lado1:u,lado2:a,lado:o,radio:c}=e.query;let i;if("cuadrado"===t&&o)i=l.default.cuadrado(Number(o));else if("rectangulo"===t&&u&&a)i=l.default.rectangulo(Number(u),Number(a));else{if("circulo"!==t||!c)return r.send("Parametro son invalidos");i=l.default.circulo(Number(c))}r.json({calculo:"Superficie",figura:t,resultado:i})})),c.listen(8080,(()=>{console.log("Conectado en el puerto: ",8080)}))},860:e=>{e.exports=require("express")}},r={};!function t(u){var a=r[u];if(void 0!==a)return a.exports;var o=r[u]={exports:{}};return e[u].call(o.exports,o,o.exports,t),o.exports}(728)})();