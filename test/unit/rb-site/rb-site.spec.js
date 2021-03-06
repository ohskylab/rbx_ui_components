define([
    'ui-components/rb-site'
], function (rbSite) {
    describe('rb-site', function () {

        var $scope,
            $compile,
            template = '<rb-site><main></main></rb-site>';

        beforeEach(angular.mock.module(rbSite.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        describe('attribute generation', function () {

            it('should convert attributes on rb-site to attributes on the generated wrapper',
                function () {
                    var site = $compile('<rb-site anyattr any-attr></rb-site>')($scope);

                    $scope.$apply();
                    expect(site[0].hasAttribute('anyattr')).toBe(true);
                    expect(site[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                var site = angular.element(template),
                    element = $compile(site)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render transcluded elements', function () {
                var site = angular.element(template),
                    element = $compile(site)($scope),
                    main = angular.element(element.find('main'));

                $scope.$apply();
                expect(main[0].tagName.toLowerCase()).toEqual('main');
            });
        });
    });
});
