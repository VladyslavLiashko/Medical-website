let supportChat = document.querySelector(".support-chat");
let chatMenu = document.querySelector(".chat-menu");
let closeBtn = document.querySelector(".chat-header button");
let input = document.querySelector("input");
let chatMain = document.querySelector(".message-wrapper")
closeBtn.addEventListener("click", function(){
    chatMenu.style.display = "none"
    supportChat.style.display = "block"
})
supportChat.addEventListener("click", function(){
    chatMenu.style.display = "block"
    supportChat.style.display = "none"
})
input.addEventListener("keypress", function(e){
    if(e.keyCode == 13){
       let p = document.createElement("p");
       p.classList.add("yourMessage");
       p.textContent = input.value;
       chatMain.append(p);
       input.value = "";
    }
})