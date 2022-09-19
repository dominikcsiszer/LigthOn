let LAMPAK = []

class Lampa {
    #allapot
    constructor(x, y, allapot) {
        this.x = x
        this.y = y
        this.setAllapot(allapot)
    }

    setAllapot(allapot) {
        this.#allapot = allapot
    }
    changeAllapot() {
        this.allapot = !this.allapot
    }

    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
    kiir() {
        return "<div class='lampa'></div>"
    }
}

$(() => {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            const lampa = new Lampa(i, j, true)
            LAMPAK.push(lampa)
        }
    }

    LAMPAK.forEach(element => {
        console.log(element)
        $(".container").append(element.kiir())
    })

    $(".lampa").on("click", function() {
        $(this).toggleClass("active")
    })
})