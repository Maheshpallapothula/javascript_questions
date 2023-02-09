/**
 * inserting an element makes inserting data into middle of the array of starting or any position.
 * let say i want to add 40 in the position of 3 then 
 */

let newElement, position, array,pr;

pr= console.log;
array = [1,2,3,4,5,6];
position = 3;
newElement = 40;

pr(`#1) Insert a element in specific position where position is ${position} and array is [${array}] and new element is ${newElement} ?.`);
// for(let i=array.length-1;i>=0;i--){ // decreasing the array length so that we can know where we want to place the value.
//     if(i>=position){                // check the position value is correctly placed.
//         array[i+1]=array[i];        // make some space to the fields and if position if equal then place same duplicate into it.
//         if(i===position){           // modify our position to new position value.
//             array[i]=newElement;    // modifed the value of the indexed position.
//         }
//     }
// }
array.splice(position,0,newElement); //for an easy use splice would be the better option the @position is the position of the element, 0 is the number where u can resume, new elemen provide new.
pr("#1) answer: ", array);


position = 2;
newElement = 20;

pr(`#2) Modify an array with specific position is ${position} and array is [${array}] and new element is ${newElement} ?.`);
array[position] = newElement; 
pr("#2) answer: ", array);

pr(`#3) Delete element in an array. based on position. where position is ${position}. and array is + [${array}]`);
// array = array.filter((value,index)=> index !== position);
array.splice(position,1); //another method to delete ele.
pr('#3 ans', array);


let k = [300,400,500,600];
pr(`#4 merge array's 1: [${array}], 2: [${k}]`);
k = [...k,...array];
pr('#4 ans', k);

pr(`write a maximum return function value in an array ? [${array}] `);
let maxValue = (array) => {
    return array.reduce( function (previous, current) {
        return  previous>current ? previous : current;
    })
}
pr("maximum value",maxValue(array));

pr(`write a minimum return function value in an array ? [${array}] `);
let minValue = (array) => {
    return array.reduce( function (previous, current) {
        return  previous < current ? previous : current;
    })
}
pr("minimum value",minValue(array));

pr(`delete first largest value in array and maintain second largest value ?. [${array}]`);

/**
 * first find largest value in array.
 * second find index of the large value.
 * second delete the largest value using splice method.
*/

// let largestValue = array.reduce( (pre, cur) => {
//     return pre>cur? pre : cur;
// });

let largestValue = Math.max(...array);

let indexValue = array.indexOf(largestValue);

pr("large value is", largestValue);
pr("index of large value is", indexValue);

array.splice(indexValue, 1);

pr(`the large value in the array is deleted and final array is [${array}]`);

pr(`missing elements in an array [${array}]`);
/**
 * first need to find min and max value.
 * then loop through min max values.
 * if array.index is less than 0 then push into new array.
*/
let MIN = Math.min(...array);
let MAX = Math.max(...array);
let missing = [];

for(let i = MIN; i< MAX; i++){
    if(array.indexOf(i)<0){
        missing.push(i);
    }
}

pr(`the missing value is ${missing}`);



pr(`sum of all elements in a given array ${array} ?.`)

let sum = array.reduce((a,b) => {
    return a+b;
});

pr("sum",sum);
