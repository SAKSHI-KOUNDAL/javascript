
//FLASY VALUES IN JAVASCRIPT
//Falsy valuesare values that resolves  in boolean falsy in javascript.
//1.false ,2. 0 ,3." " ,4.NULL ,5.undefined ,5.NAN(not a number)
//CONDITION PURCHASE
/*let arr=[], x=6;
if (x>0||true||0||-1||)
{
    console.log("sakshi");
}
else
{
    console.log("koundal");
}*/
/*let  x=6;
if (x>8||true||0||null||undefined )
{
    console.log("sakshi");
}
else
{
    console.log("koundal");
}*/

//switch operator
/*let varia= "user";
switch(varia)
{
case "user" :{
    console.log("hi");
    break;
}
case"admin" :{
    console.log("hello");
    break;
}
case"subadmin" :{
    console.log("here");
    break;
}
default :{
    console.log("no match");
}
}*/
/*let varia= "user";
switch(varia)
{
case "user" :{
    console.log("hi");
    //break;
}
case"admin" :{
    console.log("hello");
    //break;
}
case"subadmin" :{
    console.log("here");
    //break;
}
default :{
    console.log("no match");
}
}*/
/*let arr=["sakshi", 24 , [0,4,5] , {name:sakshi,email:koundalsakshi,phone:4678999}]
console.log(arr[2][0]);*/
/*let arr = [
  "sakshi",
  24,
  [0, 4, 5],
  { name: "sakshi", email: "koundalsakshi", phone: 4678999 },
];
// console.log(arr[2][0]);
console.log(arr[3].phone);
/*let obj={
    name: "Sakshi",

}
console.log(obj.name);*/
/*let arr=[45,
    {name:"sakshi",email:"s.k@gmail.com"},
    [75,
        [0,1,
            {hobbies:[
                "singing","gaiming"
            ]
        }
    ]
]];
console.log(arr[2][1][2].hobbies);*/
//let arr=["sakshi","koundal","choudahay", "atul"];
 //console.log(arr[ arr.length - 1 ]);
//console.log(arr.sort());

//let arr=[74,{name:"sakshi",email:"s.k@gamil.com"},[]]
//let arr=[1,3,5,6];
/*console.log(arr);
arr[1]=9;
console.log(arr);*/
//finding array's lenght

//push method
//arr.push("sakshi");
//console.log(arr);

//pop method
//arr.pop();
//console.log(arr);
//console.log(arr.length);
//pop operation is performed at the end of the array.

//concat method in array
/*let arr2=["pen","books","table"];
let arr3=arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(arr3);
let arr4=arr.concat(arr2,arr3);
console.log(arr4);*/
//concat method


//IndexOf method in the array
//console.log(arr.indexOf(1))
//let str="hello world";
//console.log(str.indexOf("w"));
//let arr4=["abc","cbg","csk","dcf"];
//console.log(arr4.indexOf("c"))


//for loop
// for(let i=0;i<arr3.length;++i)//iterati
//     console.log(i);
//for (let i=0;i<10;i++){
 //   console.log(i);

//}
//for (let i=0;i<10;i+=3){
  //  console.log(i);
//}
//for (let i=10;i>=2;i-=2){
  //  console.log(i);
//}
/*let n = 5;
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        console.log("*");
    }
}*/
/*for (let i = 1; i <= n; i++) {
let n = 5;
	let str = "* ";
	console.log(str.repeat(i));
}*/

//do while
/*let i=0
do{
console.log(i)
i++
}while(i<-5);



while(i<-5){
console.log(i)
i++
}*/


//break and continue
 /*for(i=0;i<10;i++){
    if(i<5)
        {
            continue;
        
        }
        console.log(i);
    }*/
    //break condition
    /*for(i=0;i<10;++i)
    {
        console.log(i);

    if(i<5){
        break;
    }}*/
     //flag=false;
     /*for(let i=0;i<5;++i)
        {
            flag2=false;
            for(let j=i+1;j<5;++j){
                if(j===3){
                    flag2=true;
                }
                console.log(i+" "+j);
            }
            if(flag2){
                break;
            }
        }*/
        /*for(let i=0;i<5;++i){
            flag=false;
            if(flag){
                break;
            }
            for(j=0;j<3;++j){
                console.log(i+"  "+j);
            }
        }*/
        /*flag=false;
        for(let i=0;i<3;++i){
            if(flag){
                break;
            }
            for(j=0;j<3;++j){
                console.log(i+"  "+j);
            }
            flag=false;
        }*/
        /*let flag=false;
        for(i=0;i<5;++i){
            for(j=0;j<5;++j){
                if(i===2){
                    continue;
                }
                if(i==3 && j==1){
                    flag=true;
                }            
            console.log(i+" "+j);
            }
        if (flag){
            break;
        }
        }*/


