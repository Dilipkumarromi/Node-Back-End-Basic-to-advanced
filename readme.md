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

# JWT token Verify
1. Middleware--> create a new token verify code
2. http://localhost:81/user/list  --GET Method Pass login token in Authorization in Bearer Token

# Send email with Nodemailer
1. .env --> add secure var name as: email,password,port,etc
2. create send email function in utility
3. create email controller
4. create send email router

# ajv with nodeJs API - 23-02-2023
1. install ajv =>  npm i ajv 
2. https://ajv.js.org/

# import data in database from excel
1. npm i xlsx

