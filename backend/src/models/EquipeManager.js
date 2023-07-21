const AbstractManager = require("./AbstractManager");

class EquipeManager extends AbstractManager {
  constructor() {
    super({ table: "equipe" });
  }

  find(id) {
    return this.database.query(
      `select
        equipe.*,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "joueur_id", joueur.id,
            "firstname", joueur.firstname,
            "lastname", joueur.lastname,
            "photo", joueur.photo,
            "pseudo", joueur.pseudo,
            "biographie", joueur.biographie,
            "nationalite", joueur.nationalite,
          )
        ) as joueurs
        from  ${this.table}
        join joueur on joueur.equipe_id = equipe.id
        where equipe.id = ?
        group by equipe.id`,
      [id]
    );
  }

  insert(equipe) {
    return this.database.query(
      `insert into ${this.table} (team_name, description , logo) values (?,?,?)`,
      [equipe.team_name, equipe.description, equipe.logo]
    );
  }

  update(equipe) {
    return this.database.query(
      `update ${this.table} set team_name = ?, description = ?, logo = ?, where id = ?`,
      [equipe.team_name, equipe.description, equipe.logo, equipe.id]
    );
  }
}

module.exports = EquipeManager;
