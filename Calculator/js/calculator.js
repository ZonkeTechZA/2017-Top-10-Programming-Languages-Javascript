function calculate()
{
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	
	var val1 = parseInt(num1);
	var val2 = parseInt(num2);
	var operation = document.getElementById("operation").value;
	if(operation == "add")
	{
		var result;
		if(isNaN(num1) || isNaN(num2))
		{
			alert("Invalid number(s) entered");
		}
		else
		{
			
			var result = val1+val2;
			document.getElementById("result").innerHTML = "Result: "+result;
		}
		
	}
	if(operation == "subtract")
	{var result;
		if(isNaN(num1) || isNaN(num2))
		{
			alert("Invalid number(s) entered");
		}
		else
		{
			
			var result = val1-val2;
			document.getElementById("result").innerHTML = "Result: "+result;
		}
	}
	if(operation == "divide")
	{
		var result;
		if(isNaN(num1) || isNaN(num2))
		{
			alert("Invalid number(s) entered");
		}
		else
		{
			if(val2 == 0)
			{
				result = "Tis impossible";
			}
			else
			{
				result = val1/val2;
			
			}
			document.getElementById("result").innerHTML = "Result: "+result;
		}
		
	}
	if(operation == "multiply")
	{
		var result;
		if(isNaN(num1) || isNaN(num2))
		{
			alert("Invalid number(s) entered");
		}
		else
		{
			
			var result = val1*val2;
			document.getElementById("result").innerHTML = "Result: "+result;
		}
	}
}