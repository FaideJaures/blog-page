document.getElementById("open").addEventListener("click", function(){
    document.getElementById("close").style.display="flex";
    document.getElementById("open").style.display="none";

    document.getElementById("main").style.display="flex"
})

document.getElementById("close").addEventListener("click", function(){
    
    document.getElementById("close").style.display="none";
    document.getElementById("open").style.display="flex";

    document.getElementById("main").style.display="none"
})

