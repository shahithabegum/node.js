const crypto=require('crypto');
const readline=require('readline');

var username='shaju';
var pasword='';
const rl=readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question('enter your user name: ',(name)=>{
   if(name===username){
   rl.question('enter your password:',(pasword)=>{
   const cryptotxt=crypto.createHmac('sha256','keytxt').update(pasword).digest('hex');
    console.log(cryptotxt);
    rl.close();
   })
}else{
    rl.setPrompt("user name not matched!!! \n");
    rl.prompt();
    rl.on('line',(inp)=>{
        if(inp===username){
            rl.question('enter your password:',(pasword)=>{
                const cryptotxt=crypto.createHmac('sha256','keytxt').update(pasword).digest('hex');
                 console.log(cryptotxt);
                 rl.close();
                })
        }
        else{
            rl.setPrompt(inp+"wrong !!!!! \n")
            rl.prompt();
        }
    })
}
   
})
rl.on('close',()=>{
    console.log("success");
})