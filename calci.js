const inputtext = document.querySelector("#screen");
const buttoncont = document.querySelectorAll(".btn");
const clearbtn = document.querySelector("#clear");
const equalbtn = document.querySelector("#equal");
const deletebtn = document.querySelector("#delete");

buttoncont.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputtext.value += btn.innerText;
  });
});

equalbtn.addEventListener("click",()=>{
    inputtext.value = eval(inputtext.value);
    if(inputtext.value=="undefined") 
      {
        inputtext.value="";
      }
})

clearbtn.addEventListener("click",()=>{
    inputtext.value = "";
})

deletebtn.addEventListener("click",()=>{
  inputtext.value = inputtext.value.substring(0,inputtext.value.length-1);
  
})
