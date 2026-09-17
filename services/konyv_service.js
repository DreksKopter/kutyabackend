const {
    konyvek
} = require("../database/konyvek_db")

const getHello = (req, res)=>{
    res.json({message: "Könyvek backend"})
}

const getKonyvek = (req, res) =>{
    res.json(konyvek)
}

const getKonyvById = (req, res) =>{
    const simnaid = Number(req.params.id)
    const konyv = konyvek.find(konyv => konyv.id = simnaid)
    res.json(konyv)
    //const masik = req.params[id];
    //const {id} = req.params;
}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvById
}