var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // use parse.readAll(), GET REQUEST
    // iterate over the data array
    // use renderMessage
    // Parse.readAll((data));
  },

  renderMessage: function(Messages) {
    // append all the messages to $.chat
    // use _.template for security
    // MessageView.render()

    var escapedHtml = MessageView.render({
      username: _.escape(message.username),
      text: _.escape(message.text),
      roomname: _.escape(message.roomname),
      createdAt: _.escape(message.createdAt),
      updatedAt: _.escape(message.updatedAt)
    });

    $(escapedHtml).appendTo(MessagesView.$chats);
  },

  render: function() {
    var messages;

    messages = Messages.results;

    this.filter((message) => {
      return message.text;
    });
  }

};