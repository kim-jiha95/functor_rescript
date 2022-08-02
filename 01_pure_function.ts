const add1 = (x: number) => {
    return x + 1;
}

add1(1) // 2
add1(2) // 3
// 순수함수와 참조함수
let global_variable = 0;
const add_global_variable = (x: number) => {
    global_variable++;
    return x + global_variable;
}
/*
add_global_variable(1); // 2
add_global_variable(1); // 3
*/
const add1_and_increase_global = (x: number) => {
    global_variable++;
    console.log(global_variable)
    return x + 1;
}
/*
add1_and_increase_global(1) // 2
add1_and_increase_global(1) // 2
console.log(global_variable);
*/
//-----------------
/*
const x = add1_and_increase_global(1) + add1_and_increase_global(1);
console.log(x); //2
*/

const a1 = add1(1);
const x = a1 + a1;
console.log(x); //1

// todo : 참조투명성 - sideeffect