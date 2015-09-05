module.exports = {
  handlers: {},
  dispatch: function(type, payload) {
    var handlers = this.handlers[type] || [];

    for (var i = handlers.length - 1; i >= 0; i--) {
      var item = handlers[i];
      item.handler.apply(item.context, [payload]);
    }
  },
  register: function(type, handler, context) {
    this.handlers[type] = this.handlers[type] || [];

    this.handlers[type].push({
      handler: handler,
      context: context
    });
  },
  unregister: function(type, payload) {
    var handlers = this.handlers[type] || [];

    for (var i = handlers.length - 1; i >= 0; i--) {
      if (payload == handlers[i]) {
        handlers.splice(i, 1);
        this.handlers = handlers;
        return;
      }
    }
  }
};
