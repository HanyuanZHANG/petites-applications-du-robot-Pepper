app.directive('velocityTransition', function() {
    return {
        restrict: 'A',
        scope: {
            ops: '=velocityTransition'
        },
        link: function(scope, elem, attrs) {

            function animation() {
                if (scope.ops.delay) {
                    elem.css({ opacity: 0 });
                }

                var duration = (scope.ops.duration)?scope.ops.duration:700;

                elem.velocity("transition." + scope.ops.transition, {
                    delay: scope.ops.delay,
                    duration: duration,
                    complete: function(elements) {
                        if (scope.ops.fadeOut) {
                            $(elements).velocity("transition.fadeOut", {
                                delay: scope.ops.fadeOut
                            });
                        }
                    }
                });
            }

            if (angular.isDefined(attrs.velocityTransitionTrigger)) {

                attrs.$observe('velocityTransitionTrigger', function(newval) {
                    if (attrs.velocityTransitionTrigger !== null) {
                        animation();
                    }
                });

            } else {

                animation();

            }
        }
    };
});

app.directive('flashMessage', ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        scope: {
            message: '='
        },
        link: function(scope, elem, attrs) {
            scope.isFlashMessage = false;
            scope.message = "";

            scope.$watch('message', function() {
                if (scope.message !== "") {
                    scope.isFlashMessage = true;

                    $timeout(function() {
                        scope.isFlashMessage = false;
                    }, 1500);
                    $timeout(function() {
                        scope.message = "";
                    }, 2000);
                }
            });
        },
        template: '<div class="overlay-message-container" ng-show="isFlashMessage" ng-click="isFlashMessage = false">' +
        '<div class="overlay-message"><div class="overlay-icon"><i class="fa fa-check-square-o"></i></div>{{message}}</div>' +
        '</div>'
    };
}]);

app.directive('horizontalPosition', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.css({
                left: function() {
                    return (attrs.horizontalPosition * 235) + "px";
                }
            });
        }
    };
}]);

app.directive('ripple', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            function addRippleEffect(evt) {
                var parentOffset = elem.offset();
                var cursorX = evt.clientX - parentOffset.left;
                var cursorY = evt.clientY - parentOffset.top;

                elem.children('.ripple').remove();
                elem.append('<div class="ripple"></div>');
                elem.children('.ripple').css({
                    left : cursorX + 'px',
                    top : cursorY + 'px'
                });

                $('.ripple').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend');
            }

            elem.bind('mousedown', addRippleEffect);
        }
    };
});

app.directive('tikiEmit', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var e = new CustomEvent("app:click", {
                detail: {
                    action: attrs.tikiAction || null,
                    data: angular.fromJson(attrs.tikiData) || null
                }
            });
            elem.bind('click', function(evt) {
                document.dispatchEvent(e);
            });
        }
    };
});