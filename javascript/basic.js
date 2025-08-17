/*let item = {
    name: "Laptop",
    price: 50000,
    quantity: 2,
    dimensions: {
        width: 15,  
        height: 10,
        depth: 1
    },
    categories: ["electronics", "computers"]
}
console.log(item.categories[1]);
console.log(item);
console.log(item.name);
console.log(item.price);    
console.log(item.quantity);
//second way to create an object
/*let item2 = new Object();
item2.name = "Mobile";
item2.price = 20000;    
item2.quantity = 5;
console.log(item2);
console.log(item2.name);*/
// changing the value of an object property
/*item.price = 55000;
console.log(item.price);
console.log(item);
// adding a new property to an object
item.returnable = true
console.log(item)
//saquare bracket notation
console.log(item[`price`])
item[`price`] = 60000;
console.log(item);
//Assign variable to change 
let itemPrice = item[`price`];
console.log(itemPrice);
console.log(item);*/
/*let item = {
    name: "Laptop",
    price: 50000,
    quantity: 2,
    buy: function() {
        console.log(`Buying ${this.name} for ${this.price}`);
    },
    addtolist() {
        console.log(`Your item has been added to the wishlist`);
    }

};
console.log(item.buy());
//loops
let i
for(i=10; i>=1;i--){
    console.log(i)
}
//while loop
let i = 1;//i=1
while(i <= 10) { //1<=10
    console.log(i); //print 1
    i++;//i=2   
}
let i=1
do{
    console.log(i); //print 1
    i++;
}
while(i <= 10); //2<=10
let i = 1;//i=1
while(i <1) { //1<=10
    console.log(i); //print 1
    i++;//i=2   
}
do{
    console.log(i); //print 1
    i++;
}while(i <1)
//breaking out of a loop
while(true) {
    let num = Number(prompt("Enter a number (0 to exit):"));
    if(!isNan(num))
        break;
}
for (i=1;i<=10;i++) {//1,2,3
    if(i % 2 === 0) //1,2,3
        continue; // Skip even numbers
        console.log(i); //1//3 This line will not execute for even numbers
}
let arr = ["apple","banana", "cherry"];
for (let i of arr)
    console.log(i); // Output each element in the array
let item = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};
for (let i in item){
    console.log(`${i}: ${item[i]}`); // Output each key-value pair in the object
}
let json3 = `[
    {
        "stock":"TCS",
        "price": 3500
    },
    {
        "stock":"HCL",
        "price": 3500
    },
    {
        "stock":"IDFC",
        "price": 3500
    }
]`;
console.log(json3);
let stocks = JSON.parse(json3);
console.log(stocks)
console.log(JSON.stringify(stocks));
*/
console.log(fetch("https://techy-api.vercel.app/api/json"))


