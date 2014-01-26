'use strict';
angular.module('notifyjs', [])
  .provider('notifyjs', function notifyjsProvider() {
    // this.defaults = {
    //   clickToHide: true,
    //   autoHide: true,
    //   autoHideDelay: 5000,
    //   arrowShow: true,
    //   arrowSize: 5,
    //   breakNewLines: true,
    //   elementPosition: 'bottom',
    //   globalPosition: 'top right',
    //   style: 'bootstrap',
    //   className: 'error',
    //   showAnimation: 'slideDown',
    //   showDuration: 400,
    //   hideAnimation: 'slideUp',
    //   hideDuration: 200,
    //   gap: 5
    // }
    this.defaults = {};
    this.$get = function notifyjsService() {
      var notifyjs = $.notify;
      notifyjs.defaults(this.defaults);
      return notifyjs;
    };
  })
  .directive('notifyjs', function(notifyjs) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var notif_message = attrs.notifyjs ? attrs.notifyjs : 'default message'
        var notif_event = attrs.notifyOn ? attrs.notifyOn : 'click';
        var notif_class = attrs.notifyClass ? attrs.notifyClass : undefined;
        var notif_pos = attrs.notifyPos ? attrs.notifyPos : undefined;
        element.on(notif_event, function(e) {
          element.notify(notif_message, {className: notif_class, position: notif_pos});
        });
      }
    };
  })