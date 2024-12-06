const accItem = document.getElementsByClassName('accordion-title');
let i;
let last;
for (i = 0; i < accItem.length; i++) {
  accItem[i].addEventListener("click", function(){
    if(last) {
      last.classList.toggle("accordion-active",false);
    }
    this.classList.toggle("accordion-active");
    last = this;
  });
}