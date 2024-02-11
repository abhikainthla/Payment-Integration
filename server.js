const express = require("express");
const app = express();
const port = 3000;
const Razorpay = require( "razorpay" );
const cors = require("cors");
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies

app.get("/", (req,res) => {
    res.setEncoding("hello world");
});

app.post("/payment", async (req, res)=>{
    let {amount} = req.body;
    var instance = new Razorpay({
        key_id :'rzp_test_7A6kAcwf6De6CI',
        key_secret :'sCrYLzBVLqRbKFFxbjkKjX2E',
    })
let order = await instance.orders.create({
        amount: amount*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
})   
      res.status(201).json({
        success : true,
        order,
        amount,
      })
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});
