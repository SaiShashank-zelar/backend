module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
		  type: Sequelize.STRING
  	},
	  address: {
			type: Sequelize.STRING
	  },
	  age: {
			type: Sequelize.INTEGER
    },
    copyright: {
      type: Sequelize.STRING,
      defaultValue: "https://loizenai.com"
    }
	},
	{
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    });
	
	return Customer;
}
