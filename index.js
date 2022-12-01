const gloable=require('./fristmodule')
gloable.myFunc();
console.log("number of var",gloable.num);
var obj = new gloable.myclass('shaju');
obj.printName();