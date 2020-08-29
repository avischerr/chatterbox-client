var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');

    // var message = {
    //   username: App.username,
    //   text: text
    // };

    // FROM SOLUTION VIDEO
    // var message = {
    //   roomname: 'lobby',
    //   text: FormView.$form.find('#message').val,
    //   username: App.username
    // };
    // Parse.create(message, () => {
    //   Messages.add(message, MessagesView.render);
    // He adds an add method to Messages
    // });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};