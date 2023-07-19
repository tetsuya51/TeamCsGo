const AbstractManager = require("./AbstractManager");

class JoueurManager extends AbstractManager {
  constructor() {
    super({ table: "joueur" });
  }

  insert(joueur) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, pseudo ,biographie , photo ,nationalite , equipe_id) values (?,?,?,?,?,?,?)`,
      [
        joueur.firstname,
        joueur.lastname,
        joueur.pseudo,
        joueur.biographie,
        joueur.photo,
        joueur.nationalite,
        joueur.equipe_id,
      ]
    );
  }

  update(joueur) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, pseudo = ?, biographie = ?, photo = ?, nationalite = ?, equipe_id = ?, where id = ?`,
      [
        joueur.firstname,
        joueur.lastname,
        joueur.pseudo,
        joueur.biographie,
        joueur.photo,
        joueur.nationalite,
        joueur.equipe_id,
        joueur.id,
      ]
    );
  }
}

module.exports = JoueurManager;
