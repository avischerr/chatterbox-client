var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function() {
    var escapedHtml = RoomView.render({
      room
    });

    RoomView.$select.append(escapedHtml);
  },

  render: function() {
  }

};
