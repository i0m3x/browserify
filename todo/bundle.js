(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


function addThis(){
    console.log('function working')
    const item =  document.getElementById("item")
    let newItem = item.value
    console.log(newItem)
    item.value = '' // refers to html string elem that we got
    const item_list = document.getElementById("item_list") // creating a link
    btn.onclick = function(){

      const li = document.createElement("li") //create
      li.innerText = newItem
      item_list.appendChild(li) 
      
    }

  }

  module.exports = addThis //whoever wants it can have it

//node JS tells html which functions to run
//bundle tells html which js files to run


},{}],2:[function(require,module,exports){
const addThis = require('./addThis') //Hey, I want you
//https://github.com/lexiconPDX/learnNode/blob/master/mymodule.js

let btn = document.querySelector('#btn');
btn.onclick= addThis
// btn.addEventListener('click', addThis)
},{"./addThis":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhZGRUaGlzLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5cbmZ1bmN0aW9uIGFkZFRoaXMoKXtcbiAgICBjb25zb2xlLmxvZygnZnVuY3Rpb24gd29ya2luZycpXG4gICAgY29uc3QgaXRlbSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIilcbiAgICBsZXQgbmV3SXRlbSA9IGl0ZW0udmFsdWVcbiAgICBjb25zb2xlLmxvZyhuZXdJdGVtKVxuICAgIGl0ZW0udmFsdWUgPSAnJyAvLyByZWZlcnMgdG8gaHRtbCBzdHJpbmcgZWxlbSB0aGF0IHdlIGdvdFxuICAgIGNvbnN0IGl0ZW1fbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbV9saXN0XCIpIC8vIGNyZWF0aW5nIGEgbGlua1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcblxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikgLy9jcmVhdGVcbiAgICAgIGxpLmlubmVyVGV4dCA9IG5ld0l0ZW1cbiAgICAgIGl0ZW1fbGlzdC5hcHBlbmRDaGlsZChsaSkgXG4gICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gYWRkVGhpcyAvL3dob2V2ZXIgd2FudHMgaXQgY2FuIGhhdmUgaXRcblxuLy9ub2RlIEpTIHRlbGxzIGh0bWwgd2hpY2ggZnVuY3Rpb25zIHRvIHJ1blxuLy9idW5kbGUgdGVsbHMgaHRtbCB3aGljaCBqcyBmaWxlcyB0byBydW5cblxuIiwiY29uc3QgYWRkVGhpcyA9IHJlcXVpcmUoJy4vYWRkVGhpcycpIC8vSGV5LCBJIHdhbnQgeW91XG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9sZXhpY29uUERYL2xlYXJuTm9kZS9ibG9iL21hc3Rlci9teW1vZHVsZS5qc1xuXG5sZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bicpO1xuYnRuLm9uY2xpY2s9IGFkZFRoaXNcbi8vIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRoaXMpIl19
