var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function() {
    var escapedHtml = RoomView.render({
      room
    });

    RoomsView.$select.append(escapedHtml);
  },

  render: function() {
  }

};
