let inputBtn = document.querySelector(".btn");

inputBtn.addEventListener("click",function() {

   //create list
   let uL = document.querySelector(".myUL");
  let newLi = document.createElement("li");
   let newInput = document.querySelector(".listAdd").value;
   let newInputtxt = document.createTextNode(newInput);

   newLi.appendChild(newInputtxt);
   uL.appendChild(newLi);
   document.querySelector('.listAdd').value = '';

 //add close span button on each list

   let span = document.createElement("SPAN");
   let closeTxt =document.createTextNode("X");
   let eachLI= document.getElementsByTagName('LI');

   let i;
   span.appendChild(closeTxt);
   span.className = "close";

   for(i = 0; i < eachLI.length; i++) {

     eachLI[i].appendChild(span);

   }

  //delite lists
   let closeBtn = document.querySelectorAll(".close");
   let e;

   for(e = 0; e < closeBtn.length; e++) {
      closeBtn[e].onclick = function () {
        let closeEl = this.parentElement;
        closeEl.remove();
      }
   }


})
