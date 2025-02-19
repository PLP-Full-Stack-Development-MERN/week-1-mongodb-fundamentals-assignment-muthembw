Use("library");
db.createcCollection("books")

//add books records 
db.books.insertOne({title:"Pride & Prejudice", author:"June Lee", publishedyear:1970, genre:"romance", ISBN:67890});
 db.books.insertMany([
{ title: "The Hobbit",
 author:"Tolkien",
publishedYear: 1937,
 genre:"Fantasy",
 ISBN:456789
 },
 {
 title:"The Great Gatsby",
 author:"Scott. F",
 publishedYear:1925,
 genre:"Classic",
 ISBN:123456
 },
 { title: "To Kill a MockingBird",
 author:"Harper Lee",
 publishedYear:1960,
 genre:"Fiction",
 ISBN:563829
 },
 {
 title:"KLB Series",
 author:"Mercy mui",
publishedYear: 1980,
genre:"Education",
 ISBN:789064
 }]);

//finding all the book records
 db.books.find();
//finding only one book record
library> db.books.findOne({author:"Harper Lee"});
//finding all book records published after 2000
db.books.findOne({publishedYear:{$gt:2000}});

//updating the published year
db.books.updateOne({title:"Pride & Prejudice"}, {$set: {publishedYear:1825}});

//Add a rating to all records
db.books.updateMany({},{$set:{rating:4.92}});

//delete book records where isbn is
db.books.deleteOne({ISBN:789064});

//delete book record where genre is
db.books.deleteMany({genre:"Classic"});

//total number of books per genre
db.books.aggregate([
    {
      $group: {
        _id: "$genre",          
        totalBooks: { $sum: 1 } 
      }
    }
  ]);
  db.books.aggregate([
     {
     $group:{
     _id:null,
     averageyearpublished:{$avg:"$publishedyear"}
     }
     } ]);
    db.books.aggregate([
           { $sort: { rating: -1 } },
           { $limit: 1 },
           { $project: { title: 1, rating: 1, _id: 0 } }
         ]);
    //creating index on the author field
         db.books.createIndex({ author: 1 });

    //checking the indexex
    db.books.getIndexes();

    //retrieving the authors
    db.books.find({}, { author: 1, _id: 0 });

  //- Explain the benefits of indexing in MongoDB.**
//1.Faster Query Performance:Indexes enable MongoDB to quickly locate data without scanning every document.
//Example: Searching by author in a large books collection becomes much faster with an index.
 //2. Efficient Sorting:Indexes speed up queries with sort(), preventing expensive operations that require sorting large datasets in memory.
 //3. Optimized Aggregations:Aggregation pipelines benefit from indexes, improving performance when filtering or grouping data.
 //4. Improved Query Selectivity: Highly selective queries (those returning fewer documents) perform significantly better with indexes.
//5. Faster Range Queries:Queries using operators like $gt, $lt, or $in run faster with indexes.
//6. Unique Constraints: Unique indexes prevent duplicate values in a field, ensuring data integrity.

//creating a database for E-commerce
Use("e-commerce");
db.createCollection("users");
db.createCollection("products");
db.createCollection("orders");

db.users.insertOne({userId: 1, name:"Violet Magima", email:"violet23@gmail.com", password:"one1", address:"Loyal House 123Avenue"});

 
db.users.insertMany([
    {userId: 2,
     name:"Bree Masila",
     email:"jkuatscit0@gmail.com",
     password:"two2",
     address:"Pravin OrionHouse"
    },
     {userId:3,
     name:"Wairimu Max" ,
     email:"maxwairimu@gmail.com",
    password:"three3",
     address:"Unitas House"
     },
     { userId:4,
    name:"Malcom May",
     email:"maymal@gmail.com",
    password:"four4",
     address:"Ruiru Bluepost"
     }]);
    
    db.products.insertMany([
     { _id: 1,
     name:"Huda Foundation",
     description:"24-hour lasting Foundation",
     price:1200,
     category:"make-up",
      stock:50
    },
     { _id:2,
     name:"Matt Lipstic",
     description:"Dark red matt lipstic for everyone!",
     price:700,
     category:"make-up",
     stock:78
     },
     { _id:3,
     name:"Vaseline Body Oil",
     description:"Cocoa Butter body oil",
     price:1500,
    category:"skincare" ,
     stock: 16
     },
     { _id:4,
     name:"Vits Sunscreen",
     description:"With vitamin A ",
     price: 1000,
     category:"skincare"
     },
    { _id: 5,
    name:"Latarfa Candy",
     description:"Lartafa perfume with candy smell",
     price:2000,
     category:"perfumes",
     stock:10
     }]);
    
     db.orders.insertMany([
        {
          userId: 1,
          products: [
            { productId: 1, name: "Huda Foundation", quantity: 2, price: 1200 },
            { productId: 2, name: "Matt Lipstic", quantity: 1, price: 700 }
          ],
          totalAmount: (1200 * 2) + (700 * 1), // 3100
          shippingAddress: "Loyal House 123Avenue",
          status: "processing",
          orderDate: new Date()
        },
        {
          userId: 2,
          products: [
            { productId: 3, name: "Vaseline Body Oil", quantity: 1, price: 1500 },
            { productId: 4, name: "Vits Sunscreen", quantity: 2, price: 1000 }
          ],
          totalAmount: (1500 * 1) + (1000 * 2), // 3500
          shippingAddress: "Pravin OrionHouse",
          status: "shipped",
          orderDate: new Date()
        },
        {
          userId: 3,
          products: [
            { productId: 5, name: "Latarfa Candy", quantity: 1, price: 2000 },
            { productId: 2, name: "Matt Lipstic", quantity: 2, price: 700 }
          ],
          totalAmount: (2000 * 1) + (700 * 2), // 3400
          shippingAddress: "Unitas House",
          status: "delivered",
          orderDate: new Date()
        },
        {
          userId: 4,
          products: [
            { productId: 1, name: "Huda Foundation", quantity: 1, price: 1200 },
            { productId: 4, name: "Vits Sunscreen", quantity: 1, price: 1000 },
            { productId: 3, name: "Vaseline Body Oil", quantity: 1, price: 1500 }
          ],
          totalAmount: (1200 * 1) + (1000 * 1) + (1500 * 1), // 3700
          shippingAddress: "Ruiru Bluepost",
          status: "pending",
          orderDate: new Date()
        }
      ]);
      