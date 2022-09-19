let LAMPAK = []

$(() => {
    let meret =$("input[type=range]").val();
    loadLamp(meret);
    $("label[for=vol]").html(meret);
    $("input[type=range]").on("change",function(){
        loadLamp(meret);
        $("label[for=vol]").html(meret);
        lampAction();
    });
})

function loadLamp(n) {
    $("label[for=vol]").html(n);
    LAMPAK = []
    html ="";
    for (let index = 0; index < n; index++) {
        LAMPAK.push("<div class='lampa'></div>")
    }

    let random = Math.floor(Math.random() * n/2)+1
    for (let index = 0; index < random; index++) {
        let randomIndex = Math.floor(Math.random() * LAMPAK.length)+1
        LAMPAK[randomIndex] = "<div class='lampa active'></div>"
    }

    $(".container").html(LAMPAK);
    lampAction()
}

function lampAction() {
    $(".lampa").on("click", function() {
        $(this).toggleClass("active")
    })

    $("input[type=range]").change(function() {
        loadLamp($("input[type=range]").val())
    })
}
