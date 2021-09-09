let preloader=document.querySelector(".preloader");
function loading(){
    preloader.style.display="none";
}


// Hamburger menu

let hamburger=document.querySelector(".hamburger-menu");
let mobilemenu=document.querySelector(".mobile-menu");
let crossham=document.querySelector(".cross-bar");
hamburger.addEventListener("click",function(){
 mobilemenu.style.width=200+"px";
 this.style.display="none"
});

crossham.addEventListener("click",function(){
  mobilemenu.style.width=0;
  hamburger.style.display="block";
})

// FAQ
let answer=document.querySelectorAll(".answer");
let box=document.querySelectorAll(".box-faq");
let boxarrow=document.querySelectorAll(".box-faq-text");

let question=document.querySelectorAll(".faq-question");
console.log(question.length);
 


for(let i=0;i<question.length;i++){
question[i].addEventListener("click",function(e){

    let panel=this.nextElementSibling;
    if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
  answer.style.padding=0;
    
} else {
  
  panel.style.maxHeight = panel.scrollHeight + "px";
  answer.style.padding=16+"px";
}

  
  
})
}
// FAq Finish

// Quotes


      $(document).ready(function(){
        $('.slides-container').slick({
          dots:false,
       
       
        autoplay: true,
        autoplaySpeed: 4000,
    
        responsive: [
          {
            breakpoint: 768,
            settings: {
           
              centerMode: false,
              centerPadding: '40px',
             
         
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
           
              centerMode: false,
              centerPadding: '40px',
             
              slidesToShow: 1
            }
          }
        ]
        });
      });


      // Scroll to top
 

      let scroll=document.querySelector("#scroll");

      window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scroll.style.visibility = "visible";
  } else {
    scroll.style.visibility = "hidden";
  }
}
      scroll.addEventListener("click",()=>{
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      })
