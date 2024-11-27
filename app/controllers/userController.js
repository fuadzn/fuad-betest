const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
  User.create(req.body)
    .then(() => {
      res.send({ message: "Data Berhasil Disimpan" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Data Tidak Ditemukan" });
      }
      res.send(data);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body)
     .then(() => {
        res.send({ message: "Data Berhasil Diubah" });
      })
     .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndDelete(id)
     .then(() => {
        res.send({ message: "Data Berhasil Dihapus" });
      })
     .catch((err) => res.status(500).send({ message: err.message }));
};
