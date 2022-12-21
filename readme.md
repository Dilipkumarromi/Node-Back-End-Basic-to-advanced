# Date - 21-12-2022  Table field, Add, Modify, Delete 
---> Add Table Field
1. npx sequelize-cli migration:create --name modify_tbl_login

2.  queryInterface.addColumn(
      'tbl_logins', // table name
      'mobile', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    )


3. npx sequelize-cli db:migrate

---> Change Table Data types 
1. npx sequelize-cli migration:create --name ChangeDatatype_tbl_login

2.  queryInterface.changeColumn('tbl_logins', 'mobile', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
3. npx sequelize-cli db:migrate

---> Delete Table Data types 

1. npx sequelize-cli migration:create --name Delete_tbl_login

2.  await queryInterface.removeColumn('tbl_logins', 'mobile');

3.npx sequelize-cli db:migrate