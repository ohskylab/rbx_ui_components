define([
], function () {

    /**
     * @ngdoc link
     * @name rbCurrencyDisplayLink
     * @module rb-currency-display
     *
     * @restrict E
     *
     * @description
     * The link function for the `<rb-currency-display>` directive
     *
     * @scope
     *  'fullAmount': contains the full amount in which to display as currency
     *
     * @ngInject
     */
    function rbCurrencyDisplayLink (scope, element, attributes) {
        var value,
            decimalPlaces = attributes.decimalPlaces || 2;

        scope.$watch('amount', function (newValue) {
            // Rounds the amount to the correct amount of decimal places and splits the number.
            value = parseFloat(newValue).toFixed(decimalPlaces).toString().split('.');

            scope.integerPart = value[0];
            scope.fractionalPart = value[1] || 0;
        });
    }

    return rbCurrencyDisplayLink;

});
