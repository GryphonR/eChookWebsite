var dataApp = new Vue({
  el: '#data-app',
  data: {
    active: true,
    latest: {
      VT: {
        title: "Voltage Total",
        value: 24,
        lowLimit: 22,
        highLimit: 24,
        max: 28,
        min: 6,
        unit: "Voltage"
      }
    }
  }
})