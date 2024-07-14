function scrollToElement(elementSelector, instance = 0) {
//select all elems that matches the selctor 
const elements = document.querySelectorAll(elementSelector);
//check if there are elements matching the selector and if the required instance exists
  if(elements.length > instance) {
    //scroll to the specified instance of element
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }

}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});
