🚀 **Step 1: Install MongoDB**
Download MongoDB:

Visit the official MongoDB website: MongoDB Download Center
Select the version compatible with my OS (Windows).
Install:

Follow the installation wizard instructions.
On Windows, choose "Complete" installation and ensure you select Install MongoDB Compass (GUI tool).
Verify Installation:

**Open a terminal (Command Prompt or Terminal).**

mongod --version
You should see version details if the installation is successful.

**📂 Step 2: Start MongoDB Server**

Start the server:
By default, it runs on port 27017.
 Use mongose for MongoDB Compass:

Launch MongoDB Compass to connect via a GUI.
Connection string (default local server):
mongodb://localhost:27017

**📝 Step 3: Create and Use Your Databases**
Using the Mongo Shell or Terminal:
Open a new terminal and type:
**use library**- Create and switch to the library database:

**use e-commerce**-Create and switch to the e-commerce database:

**📖 Step 4: Create Collections & Insert Data**
For the library database:
Create books collection:

db.createCollection("books")
Insert sample book data:
db.books.insertMany([
  { title: "MongoDB Basics", author: "John Doe", year: 2020, copies: 3 });
 
View inserted books:

db.books.find().pretty()

For the e-commerce database:
Create users, products and orders collections:

db.createCollection("users")
db.createCollection("products")
db.createCollection("orders")
Insert sample product data:

db.products.insertMany([
  { name: "Laptop", price: 1200, stock: 10 },
  { name: "Mouse", price: 25, stock: 50 }
])
Insert an order:

db.orders.insertOne({
  order_id: 101,
  product: "Laptop",
  quantity: 2,
  total: 2400,
  order_date: new Date()
})
**🔍 Step 5: Perform CRUD Operations**
Create:
db.books.insertOne({ title: "New Book", author: "Alice Brown", year: 2023, copies: 2 })

Read:
db.books.find({ author: "John Doe" }).pretty()

Update:
db.books.updateOne({ title: "MongoDB Basics" }, { $set: { copies: 4 } })

Delete:
db.books.deleteOne({ title: "New Book" })

**📊 Step 6: Aggregations & Indexing**
Aggregation Example:

db.orders.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$total" } } }
])
Create an Index:
db.books.createIndex({ title: 1 })

**🛑 Step 7: Stop the MongoDB Server**
In the terminal running mongod, press CTRL + C to stop the server.