$(() => {
    loadLamp(9)
    lampAction()
})

const LAMPAK = []
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