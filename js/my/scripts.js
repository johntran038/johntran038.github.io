let back = document.getElementById('back');
let middle = document.getElementById('middle');
let front = document.getElementById('front');
let welcomeText = document.getElementById('welcome-text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    // if(value>this.window.innerHeight){
    //     value = this.window.innerHeight;
    // }

    back.style.top = value * 0.8 + 'px';
    middle.style.top = value * 0.5  + 'px';
    front.style.top = value * 0  + 'px';
    welcomeText.style.marginRight = value * 3  + 'px';
});
