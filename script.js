const LAMPAK=[];
window.addEventListener("load", function(){
    general(9);
    console.log(LAMPAK);
});

function general(hany){
    html ="";
    for (let index = 0; index < hany; index++) {
        html+="<div id='"+index+"' class='lampa'></div>";
        
    }
    $(".container").html(html);
    LAMPAK.push($(".lampa"));
}

function bovithetoseg(){
    $("")
}
function valami(){

}