define([
    'components/rb-check-control'
], function (rbCheckControlSelectAll) {
    describe('rb-check-control-select-all', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            ngModel = [
                {
                    label: 'check One',
                    value: 'one'
                },
                {
                    label: 'check Two',
                    value: 'two'
                }
            ];

        beforeEach(angular.mock.module(rbCheckControlSelectAll.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                $scope.ngModel = angular.copy(ngModel);
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('change', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-select-all></rb-check-control-select-all>');
                spyOn(isolatedScope, 'checkAll');
            });

            it('should check all if the title is checked', function () {
                isolatedScope.isSelected = true;
                isolatedScope.change();

                expect(isolatedScope.checkAll).toHaveBeenCalledWith(true);
            });

            it('should un check all if the title is not checked', function () {
                isolatedScope.isSelected = false;
                isolatedScope.change();

                expect(isolatedScope.checkAll).toHaveBeenCalledWith(false);
            });
        });

        describe('check all', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-select-all ng-model="ngModel"></rb-check-control-select-all>');
            });

            it('should set all checkboxes as checked', function () {
                $scope.isSelected = true;

                isolatedScope.checkAll(true);

                expect(isolatedScope.ngModel[0].checked).toBe(true);
                expect(isolatedScope.ngModel[1].checked).toBe(true);
            });

            it('should set all checkboxes as un checked', function () {
                $scope.isSelected = false;

                isolatedScope.checkAll(false);

                expect(isolatedScope.ngModel[0].checked).toBe(false);
                expect(isolatedScope.ngModel[1].checked).toBe(false);
            });
        });

        describe('indeterminate', function () {
            beforeEach(function () {
                compileTemplate('<rb-check-control-select-all ng-model="ngModel"></rb-check-control-select-all>');
            });

            it('should be false if all checked', function () {
                isolatedScope.ngModel[0].checked = true;
                isolatedScope.ngModel[1].checked = true;

                var input = isolatedScope.update();

                expect(input[0].indeterminate).toBe(false);
            });

            it('should be false if all clear', function () {
                isolatedScope.ngModel[0].checked = false;
                isolatedScope.ngModel[1].checked = false;

                var input = isolatedScope.update();

                expect(input[0].indeterminate).toBe(false);
            });

            it('should be true any are checked', function () {
                isolatedScope.ngModel[0].checked = false;
                isolatedScope.ngModel[1].checked = true;

                var input = isolatedScope.update();

                expect(input[0].indeterminate).toBe(true);
            });
        });

        it('should be disabled if all children are disabled', function () {
            compileTemplate('<rb-check-control-select-all ng-model="ngModel"></rb-check-control-select-all>');

            // Set all options to be disabled
            angular.forEach(isolatedScope.ngModel, function (value) {
                value.disabled = true;
            });

            isolatedScope.update();

            expect(isolatedScope.isDisabled).toBe(true);
        });
    });
});
