//variable in js
//var,let,const
//undefined = var only declared value not assigned

var name = `leena`;
var name = `abcd`;
console.log(name);

//rules for creating var
/*
1. can not start with numbers
2. can start with letter,_ , $
3 case sensitive
*/
var city = 'rampur'

//let has block level scope
{
    let city = 'delhi';
    city = 'kolkata'
    console.log(city);
}
console.log(city);

//most common use case Types
/*
camelCase
kebab-case
snake_case
PascalCase
*/
