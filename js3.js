let num = Number(prompt("Enter a number","20"));

if (num === 0 || num === 1)
    alert( 1);
  for (var i = num - 1; i >= 1; i--) {
    num = num* i;
  }
  alert(`Factorial of your number is: ${(num)}`);
