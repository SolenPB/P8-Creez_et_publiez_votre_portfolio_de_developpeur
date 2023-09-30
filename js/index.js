const pictures = document.getElementsByClassName("scan");

for(let i = 0; i < 6; i++){
    pictures[i].addEventListener("mouseover", function(){
        pictures[i].classList.add("zoomIn")
        try{
            pictures[i].classList.remove("zoomOut")
        } catch {}
    })
    pictures[i].addEventListener("mouseout", function(){
        if(pictures[i].classList.contains("zoomIn")){
            pictures[i].classList.add("zoomOut")
        try{
            pictures[i].classList.remove("zoomIn")
        } catch {}
        }
    })
}
