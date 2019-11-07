var navVue = new Vue({
  el: '#navVue',
  data: {
    test: "testtest",
    nav: [{
      name: "Documentation",
      link: "http://docs.echook.uk/"
    }, {
      name: "Forum",
      link: "https://echook.boards.net/"
    }, {
      name: "Live Data",
      link: "data.echook.uk"
    }]
  }
})