function calculator() {
    return {
        init: function(num1Selector, num2Selector, resultSelector) {
            this.num1Selector = num1Selector;
            this.num2Selector = num2Selector;
            this.resultSelector = resultSelector;
        },

        add: function() {
            let num1 = Number(document.querySelector(this.num1Selector).value)
            let num2 = Number(document.querySelector(this.num2Selector).value);
            let result = num1 + num2;
            document.querySelector(this.resultSelector).value = result;
        },

        subtract: function() {
            let num1 = Number(document.querySelector(this.num1Selector).value)
            let num2 = Number(document.querySelector(this.num2Selector).value);
            let result = num1 - num2;
            document.querySelector(this.resultSelector).value = result;
        }
    }
}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');