	alert("Imes Temperature Conversion App Wk 2 - Validation");	
	var count = 4;	
	var totaltempf = 0;
	var totaltempc = 0;
	
while (count > 0){
	

	var tempf = "a";
	
	while (isNaN(tempf)){
	var tempf = prompt("What is the temperature in Fahrenheit?");
	if (isNaN(tempf)){alert("Error, please type  a number! Program will now prompt again.");}
	}
	
	tempf = parseInt(tempf);
	
	var tempc = (tempf - 32)*(5/9);
	
	totaltempc += tempc;
	totaltempf += tempf;
	alert("You entered "+tempf+" degrees Fahrenheit."+"/n"+"The result is "+tempc+" degrees Celsius.");
	count += -1;
}

	alert("The sum of the 4 Fahrenheit values you entered is: "+totaltempf);
	alert("The average Celsius temp over 4 entries is: " + totaltempc/4);
