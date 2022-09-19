const express = require("express");
const app = express();
const cors = require("cors");


// From routes/Product.js
// GET -  localhost:3001/product/ 
// POST-  localhost:3001/product/ 

 const productRouter = require("./routes/Product");
 
 app.use("/product", productRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
