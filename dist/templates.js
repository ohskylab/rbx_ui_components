angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("footers/rb-footer.tpl.html","<footer class=\"Footer\" role=\"contentinfo\"><ul class=\"Footer-items\"><li class=\"Footer-item\" ng-repeat=\"link in ::links track by $index\"><a class=\"Footer-itemInner\" ng-click=\"clickfunction({id:link.id})\" ng-aria>{{::link.text}}</a></li></ul><div class=\"Footer-copyright\"><p>{{::copyright}}</p></div></footer>");
$templateCache.put("headers/header/rb-header.tpl.html","<header class=\"Header\" role=\"banner\" ng-transclude></header>");
$templateCache.put("icons/icon/rb-icon.tpl.html","<div class=\"Icon Icon--{{::icon}}\" ng-transclude></div>");
$templateCache.put("nav-bars/nav-bar/rb-nav-bar.tpl.html","<nav class=\"Navigation\" role=\"navigation\"><ul class=\"Navigation-items\"><li class=\"Navigation-item\" ng-repeat=\"option in ::options track by $index\"><a class=\"Navigation-itemInner\" ng-class=\"{ \'is-active\': isactivefunction({id:option.id})}\" ng-click=\"clickfunction({id:option.id})\" ng-aria>{{::option.text}}</a></li></ul></nav>");
$templateCache.put("user/user/rb-user.tpl.html","<div class=\"User\" role=\"button\" tabindex=\"0\"><ul class=\"User-items\"><li class=\"User-item\">{{::username}}</li><li class=\"User-item\"><a class=\"User-itemInner\" ng-click=\"logoutfunction()\" ng-aria ng-transclude></a></li></ul></div>");}]);