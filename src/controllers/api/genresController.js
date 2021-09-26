const db = require("../../database/models");
//const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

module.exports = {
    list: (req,res) =>{
        db.Genre.findAll()
            .then(genres => res.status(200).json({
                meta: {
                    status: 200,
                    total: genres.length,
                    url: req.originalUrl
                },
                data: genres
            }))
            .catch(error => res.json(error))
    },
    detail: async (req,res) => {
        try {
            const genre = await db.Genre.findByPk(req.params.id)

            let response = {
                meta: {
                    status: 200,
                    url: req.originalUrl
                },
                data: genre
            }

            return res.status(200).json(response)
        } catch (error) {
            res.json(error)
        }
    }
}