// Question 1
var sum = 0;
for(var i =1; i < 1000; i++){
  if (i % 3 === 0 && i % 5 === 0){
    sum = sum + i
  }
}
console.log(sum)

// Question 2
var numberString = prompt("Enter a number");
var result = [numberString[0]]
for(var i = 1; i < numberString.length; i++){
  if( (numberString[i-1] % 2 === 0) && numberString[i] % 2 === 0){
    result.push('-', numberString[i])
  }
  else{
     result.push(numberString[i])
  }
}
console.log(result.join(''));

// Question 3
function mostFrequentItem(arr){
  var frequentItem = {};
  var mostFrequentItem = arr[0]
  for(var i = 0; i < arr.length; i++){
     if(!frequentItem[arr[i]]){
       frequentItem[arr[i]] = 1
     }
     else{
       ++frequentItem[arr[i]]
       if(frequentItem[arr[i]] > frequentItem[mostFrequentItem]){
         mostFrequentItem =arr[i]
       }
     }
  }
  console.log(mostFrequentItem, frequentItem[mostFrequentItem])
}
mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

