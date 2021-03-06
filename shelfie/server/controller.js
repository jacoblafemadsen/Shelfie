module.exports = {
  create: (req, res) =>  {
    const db = req.app.get('db')
    const { name, price, url } = req.body
    db.add_product([name, url, price])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
  },
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.read_inventory()
    .then(inventory => res.status(200).send(inventory))
    .catch(() => res.status(500).send())
  },
  delete: (req, res) => {
    const db = req.app.get('db')
    const id = req.params.id
    console.log(id)
    db.delete_product([id])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
  },
  update: (req, res) => {
    const db = req.app.get('db')
    const id = req.params.id
    const { name, url, price } = req.body
    
    db.update_product([id, name, url, price])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send())
  }
}