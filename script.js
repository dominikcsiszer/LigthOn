

const LAMPAK=[];
window.addEventListener("load", function(){
    $("input[type=range]").val(4);
    general($("input[type=range]").val(4));
    $("input[type=range]").on("change",function(){
        let meret =$("input[type=range]").val();
        general(meret);
        $("label[for=vol]").html(meret);
    });
    
    console.log(LAMPAK);
});

$(() => {
    loadLamp(9)
    lampAction()
})


function loadLamp(n) {
    html ="";
    for (let index = 0; index < n; index++) {
        html+="<div id='"+index+"' class='lampa'></div>";
    }
    $(".container").html(html);
    LAMPAK.push($(".lampa"));
}

function lampAction() {
    $(".lampa").on("click", function(){
        $(this).toggleClass("active")
    })
}

