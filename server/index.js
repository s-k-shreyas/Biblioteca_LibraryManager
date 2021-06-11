const express = require("express")
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user:'root',
    password:'password',
    database: 'Library'
});


app.use(cors())


db.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + db.threadId);
  });

app.get("/",(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send("Welcome to Biblioteca");
})

app.get("/get",(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const sqlSelect = "SELECT * from Book_list";
    db.query(sqlSelect, (err,result) =>{
        res.send(result);
    })
})

    
app.listen(3002, ()=> {
    console.log("Running on port 3002");
})