define([
    'ui-components/rb-modal-confirm'
], function (modalConfirm) {
    describe('rb-modal-confirm', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            overlay,
            compileTemplate;

        beforeEach(angular.mock.module(modalConfirm.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();

                // Overlay element so we can check that's rendered
                overlay = angular.element(element[0].getElementsByClassName('OverlayModal-inner'));
                // Set element to root with 'ModalConfirm' class
                element = angular.element(overlay.children()[0]);
            };
        }));

        describe('rendering', function () {

            it('should render overlay component', function () {
                compileTemplate('<rb-modal-confirm></rb-modal-confirm>');

                expect(overlay.length).toBe(1);
            });

            it('should render root, title and body with classes', function () {
                compileTemplate('<rb-modal-confirm></rb-modal-confirm>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]),
                    secondChild = angular.element(childDivs[1]);

                expect(element.hasClass('ModalConfirm')).toBe(true);
                expect(childDivs.length).toBe(2);
                expect(firstChild.hasClass('ModalConfirm-title')).toBe(true);
                expect(secondChild.hasClass('ModalConfirm-body')).toBe(true);
            });

            it('should render title heading', function () {
                compileTemplate('<rb-modal-confirm></rb-modal-confirm>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]);

                expect(firstChild.find('h2').length).toBe(1);
                expect(firstChild.find('h2').hasClass('u-textHeading2')).toBe(true);
            });

            it('should render body', function () {
                compileTemplate('<rb-modal-confirm></rb-modal-confirm>');

                var childDivs = element.children(),
                    body = angular.element(childDivs[1]),
                    bodyChildren = body.children();

                expect(bodyChildren.length).toBe(2);
                expect(angular.element(bodyChildren[0]).hasClass('ModalConfirm-message')).toBe(true);
                expect(angular.element(bodyChildren[1]).hasClass('ModalConfirm-action')).toBe(true);
            });

            it('should render action buttons', function () {
                compileTemplate('<rb-modal-confirm></rb-modal-confirm>');

                var childDivs = element.children(),
                    body = angular.element(childDivs[1]),
                    bodyChildren = body.children(),
                    actionsDiv = angular.element(bodyChildren[1]),
                    actions = actionsDiv.children(),
                    firstAction = angular.element(actions[0]),
                    secondAction = angular.element(actions[1]);

                expect(actions.length).toBe(2);
                expect(firstAction.hasClass('ModalConfirm-actionItem')).toBe(true);
                expect(secondAction.hasClass('ModalConfirm-actionItem')).toBe(true);
                expect(firstAction.find('button').length).toBe(1);
                expect(secondAction.find('button').length).toBe(1);
                expect(angular.element(firstAction.find('button')[0]).attr('outline')).toBe('yes');
                expect(angular.element(firstAction.find('button')[0]).attr('ng-click')).toBe('onCancel()');
                expect(angular.element(firstAction.find('button')[0]).text().trim()).toBe('Cancel');
                expect(angular.element(secondAction.find('button')[0]).text().trim()).toBe('Confirm');
                expect(angular.element(secondAction.find('button')[0]).attr('ng-click')).toBe('onConfirm()');
            });
        });

        describe('transclusion', function () {

            it('should transclude into body message', function () {
                compileTemplate('<rb-modal-confirm>Are you sure you want to delete this campaign?</rb-modal-confirm>');

                var childDivs = element.children(),
                    body = angular.element(childDivs[1]),
                    bodyChildren = body.children();

                expect(bodyChildren.length).toBe(2);
                expect(angular.element(bodyChildren[0]).text()).toBe('Are you sure you want to delete this campaign?');
            });
        });

        describe('attributes', function () {

            it('should take title from title attribute', function () {
                compileTemplate('<rb-modal-confirm title="Are you sure?"></rb-modal-confirm>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]);

                expect(firstChild.find('h2').text()).toBe('Are you sure?');
            });

            it('should take onConfirm callback from on-confirm attribute', function () {
                $scope.myConfirmCallback = function () {};
                spyOn($scope, 'myConfirmCallback');
                compileTemplate('<rb-modal-confirm on-confirm="myConfirmCallback()"></rb-modal-confirm>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]);

                isolatedScope.onConfirm();
                expect($scope.myConfirmCallback).toHaveBeenCalled();
            });

            it('should take onCancel callback from on-cancel attribute', function () {
                $scope.myCancelCallback = function () {};
                spyOn($scope, 'myCancelCallback');
                compileTemplate('<rb-modal-confirm on-cancel="myCancelCallback()"></rb-modal-confirm>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]);

                isolatedScope.onCancel();
                expect($scope.myCancelCallback).toHaveBeenCalled();
            });

            it('should take confirm label from the confirm-label attribute', function () {
                compileTemplate('<rb-modal-confirm confirm-label="Go!"></rb-modal-confirm>');
                expect(angular.element(element.find('button')[1]).text().trim()).toBe('Go!');
            });

            it('should take cancel label from the cancel-label attribute', function () {
                compileTemplate('<rb-modal-confirm cancel-label="Abort!"></rb-modal-confirm>');
                expect(angular.element(element.find('button')[0]).text().trim()).toBe('Abort!');
            });

            it('should set confirm button state from the confirm-state attribute', function () {
                compileTemplate('<rb-modal-confirm confirm-state="danger"></rb-modal-confirm>');
                expect(angular.element(element.find('button')[1]).hasClass('Button--danger')).toBe(true);
            });

        });

    });
});
