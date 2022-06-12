module.exports = function(sequelize, dataTypes){
    let alias = "Genre"
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        name:{
            type: dataTypes.STRING
        },
        ranking:{
            type: dataTypes.INTEGER
        },
        active:{
            type: dataTypes.BOOLEAN
        }
    }

let config = {
    tableName:"genres",
    timestamps: true,
    underscored: true
}

const Genre = sequelize.define(alias, cols, config)

return Genre

}