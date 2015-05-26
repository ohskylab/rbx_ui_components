define([
    'html!./rb-datetime-control.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDatetimeControl
     * @module rb-datetime-control
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *     <form name="userForm">
     *         <rb-datetime-control
     *             form="userForm"
     *             title="Your Name"
     *             placeholder-date="DD/MM/YYYY"
     *             placeholder-time="HH:MM"
     *             ng-model="demoCtrl.data.name"
     *             is-required="true"
     *             help-message="This is what we will call you!">
     *         </rb-datetime-control>
     *     </form>
     * </hljs>
     *
     * @ngInject
     */
    function rbDatetimeControlDirective () {

        return {
            scope: {
                isDisabled: '@',
                isRequired: '@',
                isReadonly: '@',
                title: '@',
                placeholderDate: '@',
                placeholderTime: '@',
                helpMessage: '@',
                ngModel: '=',
                form: '=',
                name: '@',
                inherit: '@',
                inheritLabel: '@'
            },
            restrict: 'E',
            replace: true,
            template: template,
            link: function (scope, element, attrs) {
                // Dynamic date/time field names
                scope.dateName = scope.name + 'Date';
                scope.timeName = scope.name + 'Time';

                scope.disableInputs = false;

                scope.toggleInherited = function (inheritedDateTime) {
                    if (scope.inherited) {
                        scope.ngModel = inheritedDateTime;
                        scope.disableInputs = true;
                    } else {
                        scope.ngModel = '';
                        scope.disableInputs = false;
                    }
                };

                scope.disabledTextInputs = function () {
                    // This doesn't seem to work inside ng-disabled?
                    return scope.disableInputs || scope.isDisabled === 'true';
                };
            }
        };
    }

    return rbDatetimeControlDirective;
});