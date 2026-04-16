const { populate } = require("dotenv")
const { hostname } = require("os")
const { Sequelize, DataTypes } = require("sequelize")
const dbHandler = new Sequelize("projekt", "root", "", { host: "127.1.1.1", dialect: "mysql"} )

const userTable = dbHandler.define("user", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
const userDataTable = dbHandler.define("userdata", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    money:{
        type: DataTypes.INTIGER,
        defaultValue: 500,
        allowNull: false
    },
    popularity:{
        type: DataTypes,
        defaultValue: 0,
        allowNull: false
    }
})

const AnimalTable = dbHandler.define("animals", {
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    popularity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SellPrice:{
        type: DataTypes.INTEGER,
        defaultValue: Price * 0.62,
        allowNull: false
    },
    Count:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    Active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    CordsX:{
        type: DataTypes.DOUBLE,
        defaultValue: 0
    },
    CordsY:{
        type: DataTypes.DOUBLE,
        defaultValue: 0
    },
    Hunger:{
        type: DataTypes.INTEGER,
        defaultValue: 100
    },
    Health:{
        type: DataTypes.INTEGER,
        defaultValue: 100
    },
    Relationship:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
})



userTable.hasOne(userDataTable)
userDataTable.belongsTo(userTable)
