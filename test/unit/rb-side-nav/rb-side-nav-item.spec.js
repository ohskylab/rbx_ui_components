define([
    'ui-components/rb-side-nav'
], function (rbSideNav) {
    describe('rb-side-nav-item', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbSideNav.name));
        beforeEach(angular.mock.module(function ($provide) {
            // mock the entire $state provider
            $provide.provider('$state', function () {
                return {
                    $get: function () {
                        return {
                            params: {}
                        };
                    }
                };
            });
        }));

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
            it('should render with claass', function () {
                compileTemplate('<rb-side-nav-item></rb-side-nav-item>');

                expect(element.hasClass('SideNav-item')).toBe(true);
            });
        });

        describe('label attribute', function () {
            it('should render label attribute', function () {
                compileTemplate('<rb-side-nav-item label="Menu item 1"></rb-side-nav-item>');

                expect(element.text()).toContain('Menu item 1');
            });
        });

        describe('count attribute', function () {
            it('should render count from attribute', function () {
                $scope.countValue = 10;
                compileTemplate('<rb-side-nav-item count="countValue"></rb-side-nav-item>');

                var statusSpan = angular.element(element[0].getElementsByClassName('SideNav-status')[0]);

                expect(statusSpan.length).toBe(1);
                expect(statusSpan.text()).toContain('10');

                // Check change in value updates DOM.
                $scope.countValue = 20;
                $scope.$apply();
                expect(statusSpan.text()).toContain('20');
            });

            it('should not render count element if attribute missing', function () {
                compileTemplate('<rb-side-nav-item></rb-side-nav-item>');

                var statusSpan = angular.element(element[0].getElementsByClassName('SideNav-status')[0]);

                expect(statusSpan.length).toBe(0);
            });

            it('should not render count element if invalid attribute is true', function () {
                $scope.countValue = 10;
                $scope.isInvalid = true;
                compileTemplate('<rb-side-nav-item invalid="isInvalid" count="countValue"></rb-side-nav-item>');

                var statusSpan = angular.element(element[0].getElementsByClassName('SideNav-status--count')[0]);

                expect(statusSpan.length).toBe(0);
            });
        });

        describe('invalid attribute', function () {
            it('should render a status with SideNav-status--invalid if true', function () {
                $scope.isInvalid = true;
                compileTemplate('<rb-side-nav-item invalid="isInvalid"></rb-side-nav-item>');

                var statusSpan = element[0].getElementsByClassName('SideNav-status--invalid');

                expect(statusSpan.length).toBe(1);

                // Check change in value updates DOM.
                $scope.isInvalid = false;
                $scope.$apply();
                expect(statusSpan.length).toBe(0);
            });
        });

        describe('valid attribute', function () {
            it('should render a status with SideNav-status--valid if true', function () {
                $scope.isValid = true;
                compileTemplate('<rb-side-nav-item valid="isValid"></rb-side-nav-item>');

                var statusSpan = element[0].getElementsByClassName('SideNav-status--valid');

                expect(statusSpan.length).toBe(1);

                // Check change in value updates DOM.
                $scope.isValid = false;
                $scope.$apply();
                expect(statusSpan.length).toBe(0);
            });
        });

        describe('icon attribute', function () {

            it('should use icon class from icon attribute', function () {
                compileTemplate('<rb-side-nav-item icon="frequency">' +
                    '</rb-side-nav-item>');

                expect(angular.element(element).hasClass('SideNav-item--frequency')).toBe(true);
            });

        });

        describe('active attribute', function () {

            it('should set active class if active attribute true', function () {
                $scope.isActive = true;
                compileTemplate('<rb-side-nav-item active="isActive"></rb-side-nav-item>');

                expect(element.hasClass('is-active')).toBe(true);

                // Check change in value updates DOM.
                $scope.isActive = false;
                $scope.$apply();

                expect(element.hasClass('is-active')).toBe(false);
            });

        });

        describe('ui-sref attribute', function () {
            it('should set ui-sref of anchor tag', function () {
                compileTemplate('<rb-side-nav-item ui-sref="state-a"></rb-side-nav-item>');

                var anchor = angular.element(element.find('a')[0]);

                expect(anchor.attr('ui-sref')).toBe('state-a');
            });
        });
    });
});
