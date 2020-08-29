var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // use parse.readAll(), GET REQUEST
    // iterate over the data array
    // use renderMessage
    // Parse.readAll((data));
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);

  },

  render: function() {
    MessagesView.$chats.html('');



    // var messages;

    // messages = Messages.results;

    // Messages.each((message) =>
    //   MessagesView.renderMessage(message));
  }

  // FROM SOLUTION VIDEO:
  // MessagesView.$chats.append($message);

};