

const LAMPAK=[];


$(() => {
    loadLamp(4);
    $("input[type=range]").val(4);
    $("label[for=vol]").html(4);
    $("input[type=range]").on("change",function(){
        let meret =$("input[type=range]").val();
        loadLamp(meret);
        $("label[for=vol]").html(meret);
    });

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

