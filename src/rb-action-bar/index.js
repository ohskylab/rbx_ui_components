define([
    './rb-action-bar-directive',
    './rb-action-bar.css',
    'components/rb-button'
], function (rbActionBarDirective, css, rbButton) {
    /**
     * @ngdoc module
     * @name rb-action-bar
     * @description
     *
     * rbActionBar
     *
     */
    var rbActionBar = angular
        .module('rb-action-bar', [
            rbButton.name
        ])
        .directive('rbActionBar', rbActionBarDirective);

    return rbActionBar;

});
