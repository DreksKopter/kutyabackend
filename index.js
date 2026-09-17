const express = require("express")
const PORT = 3030
const app = express();

const {
    getHello,
    getKonyvek,
    getKonyvById
} = require("./services/konyv_service")

// req, body miatt
app.use(express.json());

app.get("/hello", getHello)
app.get("/konyvek", getKonyvek)
app.get("/konyvek/:id", getKonyvById)

// paraméterezés --> ugyan az a végpont különböző válaszokat tud adni paramétertől függően.
// egy végpontnak van req, és res objektuma, a paramétereket a req-ben találod
// rep.params.parameternev --> req.params["paraméternév"]
// paraméter megadása express js-ben: "/konyvek/:id" teszt: /konyvek/2
// paraméterben szereplő adatok szövegek "2"


//app.get("/konyvek/:id")

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})

