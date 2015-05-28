define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.choices = [
            {
                label: 'Radio label',
                value: 'radio_label'
            },
            {
                label: 'Radio invalid',
                value: 'radio_invalid'
            },
            {
                label: 'Radio disabled',
                value: 'radio_disabled',
                disabled: true
            },
            {
                label: 'Radio required',
                value: 'radio_required',
                required: true
            },
            {
                label: 'Radio checked',
                value: 'radio_checked'
            }
        ];

        this.iconChoices = [
            {
                label: 'Radio with icon red-base-16-refresh',
                value: 'red-base-16-refresh',
                icon: 'red-base-16-refresh'
            },
            {
                label: 'Radio with icon black-12-arrow-left',
                value: 'black-12-arrow-left',
                icon: 'black-12-arrow-left'
            }
        ];

        this.selected = 'radio_checked';

        this.choicesRow = [];
        for (var i = 0; i < 6; i++) {
            this.choicesRow.push({
                label: 'Radio label ' + (i + 1),
                value: 'radio_label_' + (i + 1)
            });
        }

        this.selectedRow = '';

    }

    return demoCtrl;
});
