var dataApp = new Vue({
  el: '#data-app',
  data: {
    active: true,
    views: {
      numerical: {
        active: true
      },
      graph: {
        active: true
      },
      map: {
        active: true
      }
    },
    latest: {
      vTotal: {
        title: "Voltage Total",
        value: 24,
        low: 20,
        high: 24,
        max: 35,
        min: 15,
        unit: "Volts",
        show: true
      },
      vUpper: {
        title: "Upper Battery",
        value: 12,
        low: 10,
        high: 14,
        max: 20,
        min: 0,
        unit: "Volts",
        show: true
      },
      vLower: {
        title: "Lower Battery",
        value: 12,
        low: 10,
        high: 14,
        max: 20,
        min: 0,
        unit: "Volts",
        show: true
      },
      current: {
        title: "Current",
        value: 20,
        low: 0,
        high: 30,
        max: 35,
        min: 6,
        unit: "Amps",
        show: true
      },
      rpm: {
        title: "Motor Speed",
        value: 1800,
        low: 0,
        high: 2400,
        max: 3000,
        min: 1600,
        unit: "RPM",
        show: true
      },
      speed: {
        title: "Motor Speed",
        value: 20,
        low: 0,
        high: 50,
        max: 50,
        min: 0,
        unit: "Mph",
        show: true
      },
      throttle: {
        title: "Throttle",
        value: 100,
        low: 0,
        high: 101,
        max: 100,
        min: 0,
        unit: "%",
        show: true
      },
      tempOne: {
        title: "Temperature 1",
        value: 17,
        low: 0,
        high: 50,
        max: 100,
        min: 0,
        unit: "°c",
        show: true
      },

    }
  },
  computed: {

  }
})