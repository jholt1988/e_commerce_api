const {Client} = require(pg);


(async () => {


const usersTable = 
`
CREATE TABLE IF NOT EXISTS User
(
  User_Name INT NOT NULL,
  Password INT NOT NULL,
  User_Id INT NOT NULL,
  PRIMARY KEY (User_Id)
);`



const cartTable= 
`
CREATE TABLE Cart
(
  Cart_ID INT NOT NULL,
  Created INT NOT NULL,
  Modified INT NOT NULL,
  User_Id INT NOT NULL,
  PRIMARY KEY (Cart_ID),
  FOREIGN KEY (User_Id) REFERENCES User(User_Id)
);`


const productsTable =
`CREATE TABLE Products
(
  Product_ID INT NOT NULL,
  Product_Name INT NOT NULL,
  Product_Price INT NOT NULL,
  Inventory INT NOT NULL,
  Description INT NOT NULL,
  PRIMARY KEY (Product_ID)
);`  

const orderTable=
`CREATE TABLE Order
(
  Total INT NOT NULL,
  Shipping_Address INT NOT NULL,
  Order_ID INT NOT NULL,
  Order_Date INT NOT NULL,
  Status INT NOT NULL,
  User_Id INT NOT NULL,
  PRIMARY KEY (Order_ID),
  FOREIGN KEY (User_Id) REFERENCES User(User_Id)
);`






const orderItemTable=
`CREATE TABLE Order_Item
(
  Created INT NOT NULL,
  Modified INT NOT NULL,
  Quantity INT NOT NULL,
  Price INT NOT NULL,
  OrderItemID INT NOT NULL,
  Product_ID INT NOT NULL,
  Order_ID INT NOT NULL,
  PRIMARY KEY (OrderItemID),
  FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID),
  FOREIGN KEY (Order_ID) REFERENCES Order(Order_ID)
);`


const userOrderTable=`
CREATE TABLE User_Orders
(
  Order_ID INT NOT NULL,
  User_Id INT NOT NULL,
  PRIMARY KEY (Order_ID, User_Id),
  FOREIGN KEY (Order_ID) REFERENCES Order(Order_ID),
  FOREIGN KEY (User_Id) REFERENCES User(User_Id)
);`

const userAccountTable=`
CREATE TABLE User_Account
(
  Email INT NOT NULL,
  First_Name INT NOT NULL,
  Last_Name INT NOT NULL,
  Street INT NOT NULL,
  City INT NOT NULL,
  State INT NOT NULL,
  Zip INT NOT NULL,
  User_Id INT NOT NULL,
  PRIMARY KEY (User_Id),
  FOREIGN KEY (User_Id) REFERENCES User(User_Id)
);`


try {
    const db = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSPORT,
      port: process.env.PGPORT
    });

    await db.connect();

    // Create tables on database
    await db.query(usersTable);
    await db.query(userAccountTable);
    await db.query(orderTable);
    await db.query(orderItemTable);
    await db.query(cartTable);
    await db.query(userOrderTable);
    await db.query(productsTable)

    await db.end();

  } catch(err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  }

})();