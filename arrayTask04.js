const fruit = ['mango', 'jack fruit', 'orange'];
const book = ('Java Script', 'Python');
const number = "[]";

if(Array.isArray(fruit) && Array.isArray(book) && Array.isArray(number)){
    console.log("All Fruit Book Number is Array");
}
else if(Array.isArray(book) || Array.isArray(fruit) || Array.isArray(number)){
    if(Array.isArray(book)){
        console.log("Book variable is Array")
    }
    else{
        console.log("Book variable is not Array");
    }
    if(Array.isArray(fruit)){
        console.log("Fruit variable is Array")
    }
    else{
        console.log("Fruit variable is not Array");
    }
    if(Array.isArray(number)){
        console.log("Number variable is Array");
    }
    else{
        console.log("Number variable is not Array");
    }
}
else{
    console.log("None of them array");
}