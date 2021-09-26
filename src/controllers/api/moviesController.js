const db = require("../../database/models");

module.exports = {
    create : (req,res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
            .then( Movie => res.status(200).json(
                {
                    meta: {
                        status: 200,
                        msg: "Pelicula creada"
                    },
                    data: Movie
                }
            ))
    },
    destroy: (req,res) => {
        db.Movie.destroy({
            where: {id: req.params.id}
        })
            .then(() => res.status(200).json(
                {
                    meta: {
                        status: 200,
                        msg: "Pelicula eliminada"
                    }
                }
            ))
    }
}