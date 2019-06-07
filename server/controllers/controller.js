module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.get_inventory().then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    create: (req, res) => {
        let db = req.app.get('db')
        db.create_product(req.body).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        
        db.delete_product(id).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let product = req.body
        product.id = id

        db.update_product(product).then(response => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    }
}