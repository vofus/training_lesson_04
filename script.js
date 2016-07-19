/* ==== 1 ==== */
;(function() {
	"use strict";

	function CalculateString(inputStr) {
		this._str = inputStr;
		console.log("Введена строка: " + this._str);
	}
	CalculateString.prototype.calc = function() {
		var result = 0,
			matchArr = [],
			searchPattern = /\-?\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig;

		matchArr = this._str.match(searchPattern);
		console.log(matchArr);

		if(matchArr[0]*1+"" !== "NaN") {
			result += matchArr[0]*1;
		}

		for(var i = 0; i < matchArr.length; i++) {
			switch(matchArr[i]) {
				case "+": result += matchArr[i+1] * 1; break;
				case "-": result -= matchArr[i+1] * 1; break;
				case "*": result *= matchArr[i+1] * 1; break;
				case "/": result /= matchArr[i+1] * 1; break;
				case "=": break;
				default: continue; break;
			}
		}

		return result;
	}

	var test = new CalculateString("- 3.5 землекопа +-4 поросенка *10 рублей - 5.5 $ /5 человек =");
	console.log(test.calc());

	var test2 = new CalculateString("7+7*2=ёжик");
	console.log(test2.calc());

})();

/* ==== 2 ==== */
(function() {
	"use strict";

	function RemoverChars(inputStr) {
		if(typeof(inputStr) === "string") {
			this._str = inputStr;
		} else {
			throw "Ошибка! Вводимые данные должны быть строкой.";
		}
	}
	RemoverChars.prototype.removeChars = function() {
		var result = this._str,
			matchArr = [],
			matchPattern = /[^\s,\.,\,,\:,\;,\!,\?]+/gi,
			firstWord = "";

		if(!/[^\s,\.,\,,\:,\;,\!,\?]+/i.test(result)) { return result; }
		matchArr = this._str.match(matchPattern);

		if(matchArr.length === 1) { return result; }
		firstWord = matchArr[0];

		for(var j=0; j<firstWord.length; j++) {
			var searchChar = new RegExp(firstWord[j], "i");
			var count = 0;
			for(var i=0; i<matchArr.length; i++) {
				if(searchChar.test(matchArr[i])) {
					count++;
				}
			}
			
			if(count === matchArr.length) {
				result = result.replace(new RegExp(firstWord[j], "gi"), "");
			}
			
		}

		return result;
	}

	var test = new RemoverChars("Чего-с изволите-с?Барин-с!");
	console.log(test.removeChars());

	var test2 = new RemoverChars("!??слово!плов олово$$$!");
	console.log(test2.removeChars());

	// Строка с одним словом
	var test3 = new RemoverChars("!!!ab!!");
	console.log(test3.removeChars());

	// Строка без слов
	var test4 = new RemoverChars("!!!");
	console.log(test4.removeChars());

	// Проверка на попытку создания объекта без передачи аргументов
	var test5 = new RemoverChars();
	console.log(test5.removeChars());

})();