//app.js
var event = require('lib/event.js');

App({
  onLaunch: function () {
      event(this);
  },
  globalData:{
  }
})