const on=document.querySelector("#bulbon");
on.onclick=function(){
                       document.querySelector("img").setAttribute("src","bulbison.png");
                       document.querySelector("h1").innerHTML="Bulb is on!";
                      }
const off=document.querySelector("#bulboff");
off.onclick=function(){
                       document.querySelector("img").setAttribute("src","bulboff.png");
                       document.querySelector("h1").innerHTML="Bulb is off!";

                     }                      