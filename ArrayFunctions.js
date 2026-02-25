//Array functions
let marks = [35, 58, 66, 67, 74];

//Sum of all elements
let sum = 0;
for (let i=0; i<marks.length; i++)
{
    sum = sum + marks[i];
}
console.log(sum);

//Sum of all elements using .reuce method
var totalMarks = marks.reduce((total,mark)=>total+mark,0);
console.log(totalMarks);

let numbers = [2,3,5,7,76,34,23]
console.log(numbers);
let evenNum = new Array();

//Create new array of only even numbers
for (let j=0; j<numbers.length; j++)
{
    if(numbers[j]%2 == 0)
    {
        evenNum.push(numbers[j]);
    }
}
console.log(evenNum);

//Create new array of only even numbers using .filter method
var filterNewArray = numbers.filter(num=>num%2==0)
console.log(filterNewArray);

//Using map method to multiply all elements in the array by 3
var mapArray = filterNewArray.map(nums=>nums*3);
console.log(mapArray);

//Create new array with only even nos., multiply them by 3 and sum them
let newArr = [3,12,45,6,7,4]
console.log(newArr);
evenNos = newArr.filter(even=>even%2==0);
console.log(evenNos);
mapEven = evenNos.map(mapEle=>mapEle*3);
console.log(mapEven);
sumArr = mapEven.reduce((sumNew,elements)=>sumNew+elements,0); //even nos.
console.log(sumArr);

//chaining everythin in 1 step
sumArr1 = newArr.filter(even=>even%2==0).map(mapEle=>mapEle*3).reduce((sumNew,elements)=>sumNew+elements,0);
console.log(sumArr1);

//sorting a string array
fruits = ["apple","orange","strawberry","watermelon"]
console.log(fruits.sort());
console.log(fruits.reverse())

//sorting a numbers array
sortNums = [2,45,7,6,10,35]
console.log(sortNums.sort((a,b) => a-b)); //Ascending
console.log(sortNums.sort((a,b) => b-a)); //Descending





