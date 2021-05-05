var special_text = "home";
active(special_text);
function Remove(index){
    var a = document.getElementsByClassName("nav-item");
    for(var i=0; i<a.length;i++){
        a[i].style.setProperty("--set-width", "0");
    }
    special_text = index +"";
    active(special_text);   
}
function active(id){
    document.getElementById(id).style.setProperty("--set-width", "50%");
    console.log(id);
}