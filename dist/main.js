!function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){console.log("HW#1:");console.log((t=>{const e=t.toString().slice("");return Math.max(...e)})(12312345678))},function(t,e,o){"use strict";o.r(e);o(0),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13)},,function(t,e){console.log("HW#3:"),console.log(function(t=8){let e="";for(let o=1;o<=t;o++){let t=Math.floor(Math.random()*"0123456789".length);e+="0123456789".substring(t,t+1)}return e}(8))},function(t,e){console.log("HW#4:");const o=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],n=(o.slice(2,4)+","+o.slice(5)).split(",");const s=function(t,e){let o=[];for(let n=0;n<t.length;n++)o.push([t[n],e[n]]);return o}((o.slice(0,2)+","+o.slice(4,5)).split(","),n).slice();console.log("#1 Студенческие пары: ",s)},function(t,e){console.log("HW#5:"),console.log(function(...t){return t.filter(t=>t%5==0)}(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2))},function(t,e){console.log("HW#6:");var o;console.log((o={name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},Object.keys(o.subjects).map(t=>t[0].toUpperCase()+t.slice(1).toLowerCase().replace("_"," "))))},function(t,e){console.log("HW#7:");console.log(function(){return this.tax*this.middleSalary*this.vacancies}.call({tax:.195,middleSalary:1789,vacancies:11476}))},function(t,e){console.log("HW#8: ");new class{constructor(t,e,o){this.university=t,this.course=e,this.fullName=o,this.studentMarks=[5,4,4,5],this.dismissStatus=!1}get marks(){return this.dismissStatus?null:this.studentMarks}set marks(t){if(this.dismissStatus)return null;this.studentMarks.push(t)}dismiss(){this.dismissStatus=!0}recover(){this.dismissStatus=!1}getInfo(){return console.log(`Студент ${this.course} курсу ${this.university} ${this.fullName}`)}getAverageMark(){return this.studentMarks.reduce((t,e)=>t+e,0)/this.studentMarks.length}}("Вищої Школи Психотерапії м.Одеса","3","Иван Иванов").getInfo()},function(t,e){!function(){for(let t=0;t<25;t++){let t=document.createElement("div");document.body.append(t),setInterval(()=>{t.style.backgroundColor="#"+Math.floor(16777215*Math.random()).toString(16)},1e3)}}(),console.log("HW#9: ")},function(t,e){console.log("HW#10: ")},function(t,e){console.log("HW#11: "),async function(t){let e=Date.now(),o=" ",n=0;for(;n<t;)o+=await new Promise(t=>{setTimeout(()=>{t(String.fromCharCode(Date.now().toString().slice(-5)))},50)}),n++;let s=Date.now();console.log(o+" За "+(s-e)+" ms")}(4)},function(t,e){},function(t,e){console.log("HW# 13: ");const o=function*(){for(let t=0;t<1/0;t++)yield t}();console.log(o.next().value),console.log(o.next().value),console.log(o.next().value),console.log(o.next().value),console.log(o.next().value),console.log("HW# 11: ")}]);