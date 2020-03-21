import Sequelize, { Model } from 'sequelize'

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.INTEGER,
        altura: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    )
    return this
  }
}

export default Students
