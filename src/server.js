const app=require('./app');
require('dotenv').config();
const connetDB=require("./config/dbConfig");

connetDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server ${process.env.PORT} portunda çalışıyor!`);
});


