define([
    'html!./demo.tpl.html'
], function (template) {

    // @ngInject
    function demoState ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('rb-page-title', {
            url: '/rb-page-title',
            controller: 'header-ctrl as demoCtrl',
            template: template
        });
    }

    return demoState;
});