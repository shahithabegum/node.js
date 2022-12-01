const path=require('path');
const fs=require('fs');
const readline=require('readline');
const { error } = require('console');
//  fs.mkdir('test',(err)=>{
//      if(err){throw err}
//     console.log('directory created');
//     fs.writeFile(path.join(`${__dirname}/test/test.js`),'I love node',(err)=>{
//         if(err){throw err}
//         console.log('file created')
//     })
// })

// fs.appendFile(path.join(`${__dirname}/test/test.js`),'I love CODE \n',(err)=>{
//     if(err){throw err}
//     console.log('file created')
// })

// fs.rename(path.join(`${__dirname}/test/test.js`),path.join(`${__dirname}/test/text.js`),(err)=>{
//     if(err){throw err}
//     console.log('file RENAMRD')
// })

const rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('enter your user name \n',(name)=>{
    if(name==='shaju'){
        fs.mkdir('dummy',(err)=>{
            if(err){throw err}
            console.log('DIr Created')
            fs.writeFile(path.join(`${__dirname}/dummy/dummy.js`),name,(err)=>{
                if(err){
                    throw err
                }
                console.log('File created')
            })
        })
    }
    
    rl.close();
})