let main = document.querySelector(".wrapper");
let servicesWrapper = document.querySelector(".services-wrapper");
let btn = document.querySelector("button");

let closeBtn = document.createElement("button");
closeBtn.textContent = "Закрыть"
let all = servicesWrapper.cloneNode(true);
all.style.display = "none";
closeBtn.style.display = "none";
closeBtn.style.marginLeft = "43%";
closeBtn.style.marginTop = "5%"
main.append(all);
main.append(closeBtn);

btn.addEventListener("click", function () {
    btn.style.display = "none";
    all.style.display = "flex";
    closeBtn.style.display = "block";
});
closeBtn.addEventListener("click", function () {
    all.style.display = "none";
    btn.style.display = "block";
    closeBtn.style.display = "none";
});

let text = document.createElement("p");
text.style.fontSize = "10px"
text.textContent =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text";
let btnWrapper = document.querySelector(".btn")
let textWrapper = document.querySelectorAll(".text-wrapper");
for (let i of textWrapper){
    
    i.parentElement.addEventListener("mouseenter", function(){
        i.style.backgroundColor = "#E95258";
        i.style.opacity = "0.9";
        i.style.position = "relative"
        i.style.top = "-25%"
        // i.style.transition = "2s"
        i.append(text)
        btnWrapper.style.marginTop = "0%"
        // i.lastElementChild.textContent = text
    })
    i.parentElement.addEventListener("mouseleave", function(){
        // i.lastChild.remove();
        i.style.backgroundColor = "#32495E";
        i.style.position = "unset";
        i.style.opacity = "1";
        btnWrapper.style.marginTop = "5%"
        text.remove();
    })
}