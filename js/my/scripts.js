let back = document.getElementById('back');
let middle = document.getElementById('middle');
let front = document.getElementById('front');

let viewButtonAbout = document.getElementById('view-button-about-me');
let viewAboutText = document.getElementById('hide-about-me');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if(value>this.window.innerHeight){
        value = this.window.innerHeight;
    }

    back.style.top = value * 0.8 + 'px';
    middle.style.top = value * 0.5  + 'px';
    front.style.top = value * 0  + 'px';
});

viewButtonAbout.addEventListener('mouseup', () => {
    viewAboutText.textContent = ' a Bachelor of Computer Science Degree. I am the Treasurer of the Computer Science Club. My hobbies include playing chess, drawing, and traveling. ';
    let hideButton = makeElement('input', {type:'button', value:'Hide'});
    hideButton.classList.add('view-more');
    viewAboutText.appendChild(hideButton);
    hideButton.addEventListener('mouseup', ()=>{
        viewAboutText.textContent = '. . . ';
        viewAboutText.appendChild(viewButtonAbout);
    });
});


function makeElement(type, attributes){
    let element = document.createElement(type);
    if(attributes==null){
        return element;
    }
    let attributesList = Object.keys(attributes);
    attributesList.forEach(attr => {
        let val = attributes[attr];
        element[attr] = val;
    });
    return element;
}

function link(parent, children){
    children.forEach(child => {
        parent.appendChild(child);
    });
}

function removeChildren(parents){
    parents.forEach(parent => {
        children = parent.children;
        for(let i=0; i<children.length; i++){
            parent.removeChild(children[i]);
        }
    });
}