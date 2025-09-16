// function hello(user="Guest")
// {
//     console.log(`Hello ${user}`)
// }
// hello(`Ashish`);
// hello();
function sum(a,b)
{
    console.log('Before return');
    return (a+b);
    console.log('After return');
}
console.log(sum(3,4));
console.log(sum());
console.log(sum(3));
const hello=()=>console.log('hello')
hello();

const add=(a,b)=>a+b
console.log(add(4,5));

function hello(user,callback)
{
    console.log(`hello ${user}`);
    callback();
}
hello('admin',function(){
    console.log((add(4,5)));
})
hello('Admin',()=>{
    console.log((add(4,5)));
});