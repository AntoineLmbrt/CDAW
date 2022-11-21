"use strict";

function modify(e)
{
    e.target.parentNode.children[1].textContent = 'MODIFIED !';
}

function deleter(e)
{
    e.target.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addNew").addEventListener("click", function(e){
        
        document.getElementById("users").innerHTML += `
        <div id=user`+id+`>
            <h4>Antoine LAMBERT</h4>
            <p>blablablablabla velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button class="modify">Modify Comment</button>
            <button class="remove">Remove Comment</button>
        </div>`;

    });

    let modifiers = document.getElementsByClassName("modify");
    Array.from(modifiers).forEach(m => m.addEventListener("click",modify));

    let remover = document.getElementsByClassName("remove");
    Array.from(remover).forEach(m => m.addEventListener("click",deleter));
});

