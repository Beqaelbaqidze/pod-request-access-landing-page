const btn = document.getElementById("btn");
const para = document.createElement("p");

function crt (){
    if(document.getElementById("inpt").value !==""){
        const paragraph = btn.appendChild(para)
        paragraph.innerHTML = "Oops! Please check your email";
        paragraph.style.color = "rgba(251, 62, 62, 1)";
        paragraph.style.justifyContent = "center";
        paragraph.style.fontFamily = "chivo";
        paragraph.style.margin = 0;
        btn.style.marginBottom = "66px";
    }
}