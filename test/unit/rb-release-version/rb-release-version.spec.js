define([
    'ui-components/rb-release-version'
], function (rbReleaseVersion) {
    describe('rb-release-version', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbReleaseVersion.name));

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

        describe('', function () {
            it('should ', function () {
                compileTemplate('<rb-release-version></rb-release-version>');
            });
        });

    });
});
