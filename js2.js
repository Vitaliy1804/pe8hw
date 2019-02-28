//let m = Number(prompt("Enter start number", "2"));
//let n = Number(prompt("Enter finish number", "10"));

//if(n <= m){
	// prompt("Enter correct finish number", "10")
//}test:
//for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) {
//      if (i % j == 0) 
////      	continue test;
///      	 }
//   console.log(i);	     	
//}
 
let num = Number(prompt("Enter a number","20"));

if (num === 0 || num === 1)
    alert( 1);
  for (var i = num - 1; i >= 1; i--) {
    num = num* i;
  }
  alert(`Factorial of your number is: ${(num)}`);

