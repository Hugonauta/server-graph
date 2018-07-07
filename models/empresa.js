module.exports = function(sequelize, DataTypes) {
    var empresa = sequelize.define('empresa', {
        empresa: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        codigo: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            field: 'codigo',
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        url_icon: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        eecf: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        cantidadPendientes: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

   /* empresa.associate = function(models) {
        models.empresa.belongsTo(models.author, { foreignKey: "author_id", targetKey: "id" });
    }*/

    return empresa;
}
