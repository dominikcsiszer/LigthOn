$(() => {
    loadLamp(9)
    lampAction()
})


const LAMPAK = []
function loadLamp(n) {

}

function lampAction() {
    LAMPAK.forEach(element => {
        element.on("click", () =>{
            console.log(this)
        })
    })

    // $(".lampa").on("click", () => {
    //     console.log(this)
    //     $(this).toggleClass("active")
    // })
}