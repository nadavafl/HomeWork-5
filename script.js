function colculator(){
    let a = prompt('Please enter the first number:');
    let b = prompt('Please enter the second number:');
    let sum = a%b;
    if(sum != 0){
    alert ('The result has a remainder!'+' '+'The remainder is: '+sum);
    } else {
        alert('The result has not a remainder!');
    }
}