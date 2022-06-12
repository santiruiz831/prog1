module.exports = function(sequelize, dataTypes){
    let alias = "Actor"
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
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.INTEGER
        },
        favorite_movie_id:{
            autoIncrement: false,
            type: dataTypes.INTEGER
        }
    }

let config = {
    tableName:"actors",
    timestamps: true,
    underscored: true
}

const Actor = sequelize.define(alias, cols, config)

return Actor

}