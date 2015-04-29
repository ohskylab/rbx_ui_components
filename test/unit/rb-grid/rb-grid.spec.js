define([
    'components/rb-grid'
], function (rbGrid) {
    describe('rb-grid', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module(rbGrid.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('rendering', function () {
            it('should render with class and transclude', function () {
                compileTemplate('<rb-grid>TEST</rb-grid>');

                expect(element.hasClass('Grid Grid--flexCells Grid--gutter')).toBe(true);
                expect(element.hasClass('Grid--flexCells')).toBe(true);
                expect(element.hasClass('Grid--gutter')).toBe(true);
                expect(element.text()).toBe('TEST');
            });
        });
    });
});
