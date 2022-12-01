//ReadLine module
//Import readlineModule
// const readline=require('readline');
// //create readline interface
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// //for questioning
// rl.question('what is your age',(age)=>{
//     if(age>=18){
//         console.log("welcome to vote"+age);
//         rl.close();
//     }
//     else{
//         rl.setPrompt("please enter right age for vote");
//         rl.prompt();
//         rl.on('line',(inp)=>
//         {
//             if(inp>=18){
//                 console.log('welcome to vote');
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt('if your under 18 your not eligible for vote sorry !!!!!')
//                 rl.prompt();
//             }
//         })
//     }
// })
//eventListener Module
//Import event module
const events=require('events');
//create emitter
const myEmitter=new events.EventEmitter();
var x=['shaju','thara','jaleel','haseena']
function ary(){
    for(let i=0;i<x.length;i++){
        console.log(x[i])
    }
}
myEmitter.on('eventname',ary)
setTimeout(()=>{
    myEmitter.emit('eventname');
},2000);
