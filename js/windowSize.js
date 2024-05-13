"use strict";


onload = function getSize(){

let h= this.document.documentElement.clientHeight;
let w = this.document.documentElement.clientWidth;

this.document.getElementById('wh').innerHTML = "<h1> Width: " + w +"</h1>" + "<h1> Height: " + h +"</h1>"  ;
this.window.addEventListener('resize', getSize);

}



