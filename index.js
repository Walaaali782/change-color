
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if(window.localStorage.getItem("color")){
  //1=if color exqute
  exp.style.backgroundColor =window.localStorage.getItem("color")
   //2=remove active class for lis
   lis.forEach((li) => {
    li.classList.remove("active");
   });
   //3= add active class to current element
   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active") ;
}
lis.forEach((li) => {
  li.addEventListener("click",(e) => {
   // console.log(e.currentTarget.dataset.color);
   //remove active class for lis
   lis.forEach((li) => {
    li.classList.remove("active");
   });
    //add active class to current element
    e.currentTarget.classList.add("active")
    //add current  class to local storage
    window.localStorage.setItem("color",e.currentTarget.dataset.color);
    //change div backcolor
    exp.style.backgroundColor = e.currentTarget.dataset.color;
});

});

