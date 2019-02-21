let age = Number(prompt("Enter your age", ""));
let name = prompt("Enter your name", "");


if(age< 18){
	alert("You are not allowed to visit this website.")
}
    else if ( age>=18 && age<=22){
let userAnswer=	confirm( "Are you sure you want to continue?")

	if(userAnswer==true){
		alert('Welcome,'+ name+'.')
	}else{
            alert("You are not allowed to visit this website.")}


    } else{
	         alert('Welcome,'+ name+'.')
     }


