function budget() {
	var income = 0.0;
	//var form = document.getElementById("form");
	income = parseFloat(document.getElementById("income").value);
	var breakdownStyle = document.getElementById("breakdown").value;
	//income = 0.0;
	//var income = Number(pay);
	console.log(typeof income);
	console.log(income);
	var temp = 0;
	if (income >= 523601) {
	  temp = (income - 523601) * 0.37;
	  income -= 157804.25 + temp;
	} else if (income >= 209426 && income < 523601) {
	  temp = (income - 209426) * 0.35;
	  income -= 47843 + temp;
	} else if (income >= 164926 && income < 209426) {
	  temp = (income - 164926) * 0.32;
	  income -= 33603 + temp;
	} else if (income >= 86376 && income < 164926) {
	  temp = (income - 86376) * 0.24;
	  income -= 14751 + temp;
	} else if (income >= 40526 && income < 86376) {
	  temp = (income - 40526) * 0.22;
	  income -= 4664 + temp;
	} else if (income >= 9951 && income < 40526) {
	  temp = (income - 9951) * 0.12;
	  income -= 995 + temp;
	} else if (income < 9951) {
	  console.log(temp);
	  temp = income * 0.1;
	  income -= temp;
	  console.log(temp);
	}
  
	if (breakdownStyle == "simple") {
	  var needs = parseFloat(income * 0.5);
	  var wants = parseFloat(income * 0.3);
	  var savings = parseFloat(income * 0.2);
	  console.log(typeof needs);
	  console.log(needs);
	  document.getElementById("result").innerText =
		"Taxed Income: " +
		income.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\n\nNeeds: " +
		needs.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nWants: " +
		wants.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nSavings: " +
		savings.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		});
	  //document.getElementById("result").style.display = block;
	} else if (breakdownStyle == "complex") {
	  var housingMonthly = (income * 0.25) / 12;
	  var charity = income * 0.1;
	  var savings = income * 0.15;
	  var insurance = income * 0.15;
	  var entertainment = income * 0.1;
	  var food = income * 0.1;
	  var transport = income * 0.05;
	  var personal = income * 0.05;
	  var utilities = income * 0.05;
	  document.getElementById("result").innerText =
		"Taxed Income: " +
		income.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\n\nMonthly Housing: " +
		housingMonthly.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nCharity: " +
		charity.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nSavings: " +
		savings.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nInsurance: " +
		insurance.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nEntertainment: " +
		entertainment.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nFood: " +
		food.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nTransportation: " +
		transport.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nPersonal: " +
		personal.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		}) +
		"\nUtilities: " +
		utilities.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD",
		  minimumFractionDigits: 2
		});
	  //document.getElementById("result").style.display = block;
	}
  }
  
  var config = {
	content: [
	  {
		type: "row",
		content: [
		  {
			//DO NOT USE, FOR CALCULATOR
			type: "component",
			componentName: "Calculator",
			componentState: { text: "Calculator" }
		  },
		  {
			//USE THIS SECTION
			type: "component",
			componentName: "Budgeting Application",
			componentState: { text: "Budgeting Application" }
		  }
		]
	  }
	]
  };
  
  var myLayout = new GoldenLayout(config, "#layoutContainer");
  
  myLayout.registerComponent("Calculator", function (container, state) {
	(btnContainer = $('<div class="btnContainer"></div>')),
	  (bigContainer = $('<div class="bigContainer"></div>')),
	  (numContainer = $('<div class="numContainer"></div>'));
  
	//numbers 1 and 2
	var x = 0;
	var y = 0;
  var z = 0;
	var xory = 1;
 
  var output = "";
    
	//operator booleans
	var add = true;
	var sub = false;
	var mul = false;
	var div = false;
  var exp = false;
  
	container.getElement().append(bigContainer);
  bigContainer.append(btnContainer);
	bigContainer.append(numContainer);
  
	function makeButton(label, number) {
	  var button = $('<button class="button">' + label + "</button>");
  
button.click(function () {
		if (xory == 1) {
		  x = number;
		  xory = 2;
		  numContainer.append(x);
		} else {
		  y = number;
		  xory = 1;
		  numContainer.append(y);
		}
	  });
  
	  btnContainer.append(button);
	}
  
	function operButton(oplabel) {
	  var opbutton = $('<button class="button">' + oplabel + "</button>");
  
	  opbutton.click(function () {
		if (oplabel == "+") {
		  add = true;
		  sub = false;
		  mul = false;
		  div = false;
      exp = false;
		  numContainer.append(" ");
      numContainer.append(oplabel);
		  numContainer.append(" ");
    } else if (oplabel == "-") {
		  add = false;
		  sub = true;
		  mul = false;
		  div = false;
      exp = false;
		  numContainer.append(" ");
      numContainer.append(oplabel);
		  numContainer.append(" ");		} else if (oplabel == "*") {
		  add = false;
		  sub = false;
		  mul = true;
		  div = false;
      exp = false;
		  numContainer.append(" ");
      numContainer.append(oplabel);
		  numContainer.append(" ");
    } else if (oplabel == "^") {
		  add = false;
		  sub = false;
		  mul = false;
		  div = false;
      exp = true;
		  numContainer.append(" ");
      numContainer.append(oplabel);
		  numContainer.append(" ");
		} else {
		  add = false;
		  sub = false;
		  mul = false;
		  div = true;
      exp = false;
		  numContainer.append(" ");
      numContainer.append(oplabel);
		  numContainer.append(" ");
		}
	  });
  
	  btnContainer.append(opbutton);
	}
    
  function negbutton(neglabel) {
	  var negbutton = $('<negbutton class="button">' + neglabel + "</negbutton>");
  
	  negbutton.click(function () {
  /*if (xory == 1) {
		  x = x * -1;
      numContainer.insertAdjacentHTML('afterbegin',"-");
		} else {
		  y = y * -1;
		  xory = 1;
		  numContainer.insertAdjacentHTML('afterbegin',"-");
    }*/
	  });
  
	  btnContainer.append(negbutton);
	}
  
	function equalButton(eqlabel) {
	  var eqbutton = $('<eqbutton class="button">' + eqlabel + "</eqbutton>");
	  eqbutton.click(function () {
		if (add == true) {
		  numContainer.append(" = ");
      z = x + y;
      z = z.toFixed(2);
		  numContainer.append(z);
		} else if (sub == true) {
		  numContainer.append(" = ");
      z = x - y;
      z = z.toFixed(2);
		  numContainer.append(z);
		} else if (mul == true) {
		  numContainer.append(" = ");
		  z = x * y;
      z = z.toFixed(2);
		  numContainer.append(z);
    } else if (exp == true) {
		  numContainer.append(" = ");
      z = x ** y;
      z = z.toFixed(2);
		  numContainer.append(z);
		} else {
		  numContainer.append(" = ");
		  z = x / y;
      z = z.toFixed(2);
		  numContainer.append(z);
		}
	  });
  
	  btnContainer.append(eqbutton);
	}
  
	function clearButton(clearlabel) {
	  var clearbutton = $(
		'<clearbutton class="button">' + clearlabel + "</clearbutton>"
	  );
	  clearbutton.click(function () {
    
    x = 0;
		y = 0;
		xory = 1;
    numContainer.empty();
    });
  
	  btnContainer.append(clearbutton);
	}
    
  function ansButton(anslabel) {
	  var ansButton = $(
		'<ansButton class="button">' + anslabel + "</ansButton>"
	  );
	  ansButton.click(function () {
    
   if (xory == 1) {
		  x = z;
		  xory = 2;
		  numContainer.append(x);
		} else {
		  y = z;
		  xory = 1;
		  numContainer.append(y);
		}
	  });
  
	  btnContainer.append(ansButton);
	}
  
	makeButton("1", 1);
	makeButton("2", 2);
	makeButton("3", 3);
	operButton("+");
	makeButton("4", 4);
	makeButton("5", 5);
	makeButton("6", 6);
	operButton("-");
	makeButton("7", 7);
	makeButton("8", 8);
	makeButton("9", 9);
	operButton("*");
	makeButton("0", 0);
	equalButton("=");
  negbutton("neg");  
	operButton("/");
  clearButton("CE");
  ansButton("Ans");
  operButton("^");
    
  });
  myLayout.registerComponent(
	"Budgeting Application",
	function (container, state) {
	  container
		.getElement()
		.html(
		  '<h2> Budgeting Application </h2> <script type="text/javascript"> </script> <form id="form" target="_self"><label for="income">What is your untaxed income (yearly)?: </label> <input id="income" name="income" type=number value=1><br><div><label>Breakdown Style: </label> <select id = "breakdown"> <option value="simple">Simple</option><option value="complex">Complex</option></select></div><br> <enterbutton id = "click" onclick = "budget(); return false;">Enter</enterbutton></form><h3 id = "result"></h3>'
		);
	}
  );
  
  myLayout.init();
  
  /*
   * Since our layout is not a direct child
   * of the body we need to tell it when to resize
   */
  $(window).resize(function () {
	myLayout.updateSize();
  });
  