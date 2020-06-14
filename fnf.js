class fnf{
    constructor(name,number,remarks,gender){
        this.number = number;
        let remark = remarks;
        if(remark === null){remark = "No remarks";}
        let name1 = name;
        if(!name1.startsWith("Mohammod") || !name1.startsWith("Mosammod")){
            if(gender === "M"){
                name1 = "Mohammad " + name1;
            }else {name1 = "Mosammod "+ name1};
        }
        this.name = name1;
        this.gender = gender;
        this.remarks = remark;
    }
    toDescribe(){
        return `${this.name}      Number: ${this.number} \n Remarks: ${this.remarks}`
    }
}
const list = [];
list.push(new fnf("Yamin","01818672900",null,"M"));
list.push(new fnf("Ansu Fati","01234444",null,"life"));
console.log(list);
//var choice;
while(choice !== "0"){
var choice=Number(prompt("Enter your choice (number) ? \n 1.SEE FNF \n 2.ADD FNF \n 3.REMOVE FNF \n 0.QUIT"));
choice = Number(choice.toFixed(0));
if(choice>4 || choice<1)
    {alert("Wrong Input ! Try Again");}
else{  
    switch (choice){
       case 1 : {for(let i = 0; i<=list.length-1;i++){
            alert(`Id:${i+1}  ${list[i].toDescribe()}`)};
            break;}
        case 2: {const name = prompt("Enter name of Number Owner?");
            const number = prompt("Enter the number?");
            const gender = prompt("Tell the gender \n m:Male \n n:Female");
            const remarks = prompt("Give Remarks:");
            list.push(new fnf(name,number,gender,remarks));
            break;}
        case 3: {const remov = prompt("Enter the id to remove fnf ?");
            list.splice(remov,1);
            break;}
        }
}
}
alert("see you later");