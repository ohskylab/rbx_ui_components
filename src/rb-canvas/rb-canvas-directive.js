define([
    './rb-canvas.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbCanvas
     * @module rb-canvas
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-canvas>
     *     </rb-canvas>
     * </hljs>
     *
     * @ngInject
     */
    function rbCanvasDirective () {

        return {
            scope: {
                'mode': '=?',
                'message': '=?'
            },
            restrict: 'E',
            replace: true,
            template: template,
            transclude: true
        };
    }

    return rbCanvasDirective;
});
