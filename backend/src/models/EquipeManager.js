const AbstractManager = require("./AbstractManager");

class EquipeManager extends AbstractManager {
  constructor() {
    super({ table: "equipe" });
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
