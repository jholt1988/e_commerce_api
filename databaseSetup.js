const {Client} = require('pg');

(async () => {


  const usersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id              INT               PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    userName        VARCHAR(50),      
    password        TEXT
  );
`
const userAccountTable=
`CREATE TABLE IF NOT EXISTS userAccounts (
  userId               INT,
  email           VARCHAR(50),      
  firstName       VARCHAR(50),
  lastName        VARCHAR(50),
  address         VARCHAR(50),
  city            VARCHAR(50),
  state           VARCHAR(50),
  zip             INT,
 FOREIGN KEY (userId) REFERENCES users(id),
 PRIMARY KEY (userId, email)
 
);`

const productsTable = `
  CREATE TABLE IF NOT EXISTS products (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    name            VARCHAR(50)     NOT NULL,
    price           BIGINT          NOT NULL,
    description     VARCHAR(50)     NOT NULL
  );
`

const ordersTable = `
  CREATE TABLE IF NOT EXISTS orders (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    total           INT             NOT NULL,
    status          VARCHAR(50)     NOT NULL,
    userId          INT             NOT NULL,
    created         DATE            NOT NULL,
    modified        DATE            NOT NULL,
   FOREIGN KEY (userId) REFERENCES users(id)
  );
`

const orderItemsTable = `
  CREATE TABLE IF NOT EXISTS orderItems (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    created         DATE            NOT NULL,
    orderId         INT             NOT NULL,
    qty             INT             NOT NULL,
    price           INT             NOT NULL,
    productId       INT             NOT NULL,
    name            VARCHAR(50)     NOT NULL,
    description     VARCHAR(200)    NOT NULL,
    FOREIGN KEY (orderId) REFERENCES orders(id)
  );
`

const cartsTable= `
  CREATE TABLE IF NOT EXISTS carts (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    userId          INT             NOT NULL,
    modified        DATE            NOT NULL,
    created         DATE            NOT NULL,
    FOREIGN KEY (userId)  REFERENCES users(id)
  );
`

const cartItemsTable= `
  CREATE TABLE IF NOT EXISTS cartItems (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    cartId          INT             NOT NULL,
    productId       INT             NOT NULL,
    qty             INT             NOT NULL,
   FOREIGN KEY (cartId) REFERENCES carts(id),
   FOREIGN KEY (productId) REFERENCES products(id)
  );
`
const userOrdersTable= `
CREATE TABLE IF NOT EXISTS userOrders (
  userId            INT,
  orderId           INT,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (orderId) REFERENCES orders(id),
  PRIMARY KEY (userId, orderId)
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
    await db.query(ordersTable);
    await db.query(orderItemsTable);
    await db.query(cartsTable);
    await db.query(userOrdersTable);
    await db.query(productsTable);
    await db.query(cartItemsTable);

    await db.end();

  } catch(err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  }

})();

