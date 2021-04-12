module.exports = (sequelize, DataTypes) =>{
    
    const Usuario = sequelize.define(
        'Usuario',{
            nome:DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    Usuario.associate = (models) => {
        //relação 1:N (usuario tem varios posts)
        Usuario.hasMany(models.Post,{as: 'posts', foreignKey: 'usuarios_id'});
    }


    return Usuario;
}