var app = {

  init: function() {

    this.loadNations();

  },

  loadNations: function() {

    let req = new Request({
      method: 'get',
      url: '/api/nation'
    }, (data) => {

      console.log(data);

    });

  }

};

document.addEventListener('DOMContentLoaded', function() { app.init(); });
