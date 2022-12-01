const PORT=process.env.PORT || 2500;
const http=require('http');
const fs=require('fs')
  
const app=http.createServer((req,res)=>{
    if(req.url==='/'){
        
        fs.readFile(`${__dirname}/main/home.html`,'utf8',(err,data)=>{
            if(err){
                throw err;
              
            }
            res.writeHead(200,{'Content-type':'text/html'},);
            res.end(data);
        })
    }

})
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})