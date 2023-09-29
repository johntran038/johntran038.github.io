let back = document.getElementById('back');
let middle = document.getElementById('middle');
let front = document.getElementById('front');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if(value>this.window.innerHeight){
        value = this.window.innerHeight;
    }

    back.style.top = value * 0.8 + 'px';
    middle.style.top = value * 0.5  + 'px';
    front.style.top = value * 0  + 'px';
});
