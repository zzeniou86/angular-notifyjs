/* global angular */
'use strict';
angular.module('notifyjs', [])
  .provider('notifyjs', function notifyjsProvider() {
    var _this = this,
      _defaults;

    /**
     * Cache the $.notify referance
     */
    _this.$notifyjs = $.notify;

    /**
     * Array to store custom notification settings
     * See: _this.processAddStyleCache
     * @type {Array}
     */
    _this.addStyleCache = [];

    /**
     * Defaults object.
     * If you use BOWER you might want to leave this empty!
     * @type {Object}
     */
    _defaults = {
      // // you can define your own defaults here
      // // more for use when you are not using BOWER
      // clickToHide: true,
      // autoHide: true,
      //autoHideDelay: 5000,
      // arrowShow: true,
      // arrowSize: 5,
      // breakNewLines: true,
      // elementPosition: 'bottom',
      // globalPosition: 'top right',
      // style: 'bootstrap',
      // className: 'error',
      // showAnimation: 'slideDown',
      // showDuration: 400,
      // hideAnimation: 'slideUp',
      // hideDuration: 200,
      //gap: 5
    };

    /**
     * Return an object with all defaults
     * @param  {Object} opts [property values to override the default settings]
     * @return {Object}      [collated options]
     */
    _this.defaults = function (opts) {
      //console.log('_this.defaults(opts)', opts);
      return $.extend(_defaults, opts);
    };

    /**
     * Mapping of the addStyle method on the $.notify object
     * @param {String} name [Custom style name]
     * @param {Object} obj  [Object with all the properties for a custom addStyle block]
     */
    _this.addStyle = function (name, obj) {
      //console.log('_this.addStyle(name, obj)', name, obj);
      _this.$notifyjs.addStyle(name, obj);
    };

    /**
     * Utility method to create multiple custom notifications
     */
    _this.processAddStyleCache = function () {
      //console.log('_this.processAddStyleCache()');
      if (_this.addStyleCache.length !== 0) {
        angular.forEach(_this.addStyleCache, function (obj) {
          _this.addStyle(obj.name, obj);
        });
      }
    };

    /**
     * Provider $get function
     * @return {Object} [Instance of the $.notify object]
     */
    _this.$get = function notifyjsService() {

      /**
       * Set the default config
       */
      _this.$notifyjs.defaults(_this.defaults());

      /**
       * Process any custom notification settings
       */
      _this.processAddStyleCache();

      /**
       * Return the instance
       */

      return _this.$notifyjs;
    };

  })
  .directive('notifyjs', function (notifyjs) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var notif_message = attrs.notifyjs ? attrs.notifyjs : 'default message';
        var notif_event = attrs.notifyOn ? attrs.notifyOn : 'click';
        var notif_class = attrs.notifyClass ? attrs.notifyClass : undefined;
        var notif_pos = attrs.notifyPos ? attrs.notifyPos : undefined;

        element.on(notif_event, function (e) {
          element.notify(notif_message, {
            className: notif_class,
            position: notif_pos
          });
        });
      }
    };
  });
