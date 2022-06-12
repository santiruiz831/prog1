module.exports = function(sequelize, dataTypes){
    let alias = "Movie"
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
        title:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.INTEGER
        },
        awards:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        length:{
            type: dataTypes.DATE
        },
        genre_id:{
            autoIncrement: false,
            type: dataTypes.INTEGER
        }
    }

let config = {
    tableName:"movies",
    timestamps: true,
    underscored: true
}

const Movie = sequelize.define(alias, cols, config)

return Movie

}