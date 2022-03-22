const express = require("express")
const app = express()
const port = 8000

const product = [

];

class Product {
    constructor() {
      this.name = faker.commerce.productName();
      this.price = "$" + faker.commerce.price();
      this.department = faker.commerce.department();
    }
  }
      
  console.log(new Product());
  /*
   * The output of the above console log will look like this
   * {
   *   name: 'Anime Figure',
   *   price: '$568.00
   *   department: 'Tools' 
   * }
   */
  
app.get("/api",(req,res)=>{
    res.json("hello world")
})

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
