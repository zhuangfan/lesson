var calculator = {
	memory : 0,number : 0,num1 : 0,result : 0,oper : "",flag : true,eqOper : "",
	numberPressed : function(num) {
		console.log("number pressed: " + num);
		if (this.oper != "") {
			this.number = 0;
			calculatorUI.setDisplay(this.number);
			this.eqOper = this.oper;
			this.oper = "";
		}	 
		this.number = (this.number == 0) ? this.number + num : this.number + ''+ num;
		calculatorUI.setDisplay(this.number);	 
	},
	operatorPressed : function(operator) { 
		if (this.oper == "" || this.oper == "equals") {
		 
			this.num1 = parseFloat(calculatorUI.getDisplay());
			if (operator == "plus") {
				if (this.oper != "equals") {
					this.result = this.num1;
					this.number = this.result;
				}else{
					this.result = this.num1;
					this.number = this.result;
				}
				calculatorUI.setDisplay(this.number);		 
			} else if ("multiply" == operator) {
				if (this.oper != "equals") {
					this.result = this.num1;
					this.number = this.result;
				} else {
					this.result = this.num1;
					this.number = this.result;
				}
				calculatorUI.setDisplay(this.number);
			} else if ("minus" == operator) {
				if (this.oper != "equals") {
					this.result = this.num1;
					this.number = this.result;
				} else {
					this.result = this.num1;
					this.number = this.result;
				}
				calculatorUI.setDisplay(this.number);
			} else {
				if (this.num1 == 0) {
					alert("除数不能为0");
				}
				if (this.oper != "equals") {
					this.result = this.num1;
					this.number = this.result;
				}  
				calculatorUI.setDisplay(this.number);
			}
			this.oper = operator;
			this.flag = true;
			console.log("operator pressed: " + operator);
		}
	},
	equalPressed : function() {
		if (this.flag) {
			console.log("equal pressed");
			this.num1 = parseFloat(calculatorUI.getDisplay());
			if (this.eqOper == "plus") {
				this.result = this.result + this.num1;
			} else if ("minus" == this.eqOper) {
				this.result = this.result - this.num1;
			} else if ("multiply" == this.eqOper) {
				this.result = this.result * this.num1;
			} else {
				this.result = this.result / this.num1;
			}
			this.number = this.result;
			this.flag = false;
			this.oper = "equals";
			calculatorUI.setDisplay(this.number);
		}
	},
	dotPressed : function() { 
		str = this.number; 
		for (i = 0; i <= str.length; i++) {    
			if (str.substr(i, 1) == ".")
				return false;  
		}	 
		calculatorUI.setDisplay(this.number);
	},
	clearPressed : function() { 
		console.log("clear pressed");
		this.number = (this.number.toString().length == 1) ? 0 : this.number.substr(0, this.number.toString().length - 1);
		calculatorUI.setDisplay(this.number);
	},
	allClearPressed : function() {  
		console.log("all clear pressed");
		this.number = 0;
		calculatorUI.setDisplay(this.number);
	},
};
var calculatorUI = {
	operators : [ "plus", "minus", "multiply", "divide" ],
	initialize : function() {
		for (i = 0; i < 10; i++) {
			hash = "#" + i;
			$(hash).click(function() {
				calculator.numberPressed(Number($(this).attr("id")));
			});
		}
		for (i = 0; i < this.operators.length; i++) {
			hash = "#" + this.operators[i];
			$(hash).click(function() {
				calculator.operatorPressed($(this).attr("id"));
			});
		}
		$("#equal").click(function() {
			calculator.equalPressed();
		});
		$("#dot").click(function() {
			calculator.dotPressed();
		});
		$("#C").click(function() {
			calculator.clearPressed();
		});
		$("#AC").click(function() {
			calculator.allClearPressed();
		});
	},
	setDisplay : function() {
		$("#display").text(calculator.number);
	},
	getDisplay : function() {
		return $("#display").text();
	}
};
$(document).ready(function() {
	calculatorUI.initialize();
});
