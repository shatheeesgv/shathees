const http=require('http');
const path=require('path');
const PORT=5000;
const server=http.createServer((req,res)=>{
    res.write("hi guys!");
    res.end();
});
server.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server running in "+PORT);
    }
})
