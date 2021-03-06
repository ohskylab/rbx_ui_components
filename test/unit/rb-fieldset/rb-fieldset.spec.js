define([
    'ui-components/rb-fieldset'
], function (rbFieldset) {
    describe('rb-fieldset', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbFieldset.name));

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

        it('should add a label to the component', function () {
            var bodyText;
            compileTemplate('<rb-fieldset label="Default Text"></rb-fieldset>');

            bodyText = element[0].getElementsByClassName('Fieldset-title');

            expect(angular.element(bodyText).html()).toContain('Default Text');
        });

        it('should add content to the body of the component', function () {
            var bodyText;
            compileTemplate('<rb-fieldset label="Default Text">Some content</rb-fieldset>');

            bodyText = element[0].getElementsByClassName('Fieldset-body');

            expect(angular.element(bodyText).html()).toContain('Some content');
        });

        describe('types', function () {
            it('should not register an arbituary type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="barneyStinson"></rb-fieldset>');

                expect(element.hasClass('Fieldset--barneyStinson')).toBeFalsy();
            });

            it('should use the additional information type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="additionalInfo"></rb-fieldset>');

                expect(element.hasClass('Fieldset--additionalInfo')).toBeTruthy();
            });

            it('should use the goals type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="goals"></rb-fieldset>');

                expect(element.hasClass('Fieldset--goals')).toBeTruthy();
            });

            it('should use the basics type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="basics"></rb-fieldset>');

                expect(element.hasClass('Fieldset--basics')).toBeTruthy();
            });

            it('should use the breakdown type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="breakdown"></rb-fieldset>');

                expect(element.hasClass('Fieldset--breakdown')).toBeTruthy();
            });

            it('should use the finance type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="finance"></rb-fieldset>');

                expect(element.hasClass('Fieldset--finance')).toBeTruthy();
            });

            it('should use the metrics type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="metrics"></rb-fieldset>');

                expect(element.hasClass('Fieldset--metrics')).toBeTruthy();
            });

            it('should use the actions type', function () {
                compileTemplate('<rb-fieldset label="Default Text" type="actions"></rb-fieldset>');

                expect(element.hasClass('Fieldset--actions')).toBeTruthy();
            });
        });
    });
});
