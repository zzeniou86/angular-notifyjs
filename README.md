
angular-notifyjs
================

Basic angular module that acts as an wrapper for [notify.js](https://github.com/jpillora/notifyjs)


Dependencies
----------------
*   [angularjs](http://angularjs.org/)

*   [notifyjs](https://github.com/jpillora/notifyjs)

Bower install method (see below) will install both dependencies if missing.


Installation
----------------

####First Step####

Get the code via git method

    https://github.com/zzeniou86/angular-notifyjs.git
    
or bower method

    bower install angular-notifyjs

_(please note that with bower, angular and notifyjs will be installed if not found)_

####Second step####

Include the javascript files in your projects

```html
<script src="bower_components/notifyjs/dist/notify.min.js"></script>
<script src="bower_components/notifyjs/dist/styles/notify-bootstrap.js"></script>
```

```html
<script src="bower_components/angular-notifyjs/angular-notifyjs.js"></script>
```

####Third step####

Add angular-notifyjs module in your angular app

```javascript
angular.module('myAppName', ['notifyjs'])
```

Basic Usage
----------------

Inject `notifyjs` in your controllers or services

Example:
```javascript
angular.module('myAppName')
  .controller('myController', function ($scope, notifyjs) {
    notifyjs("Hello there", "success");
  });
```

Detailed API of notifyjs can be found [here](http://notifyjs.com/)

To-DO:
--------------

*   Improve README.md (include notifyjsProvider usage)
*   Add basic API interface to notify service.
*   Implement notifyjs directive
