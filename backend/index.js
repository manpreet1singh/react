const http=require('http')
//const vr=require('./module')
const fs=require("fs");
const server=http.createServer((req,res)=>{
    console.log("hello");
    res.setHeader('Content-Type','text/html')
//    fs.appendFile("demo.txt","and vrinda",(err)=>{
//     if(err) throw err;
//     console.log("Saved")
    
   //})
  
//    fs.writeFile("hello.txt","new file created ",(err)=>{
//     if(err) throw err;
//     res.end()
    
//    })
fs.unlink("hello.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted")
    res.end()
})

//    fs.readFile("demo.txt",(err,data)=>{
//     res.write(data)
//     res.end()
//    })
   
   
})
server.listen(3000)