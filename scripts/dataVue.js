var dataApp = new Vue({
  el: '#data-app',
  data: {
    active: false,
    views: {
      numerical: {
        active: true
      },
      laps: {
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
        max: 34,
        min: 15,
        unit: "Volts",
        show: true
      },
      vUpper: {
        title: "Upper Battery",
        value: 12,
        low: 10,
        high: 17,
        max: 17,
        min: 0,
        unit: "Volts",
        show: true
      },
      vLower: {
        title: "Lower Battery",
        value: 12,
        low: 10,
        high: 17,
        max: 17,
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
        max: 70,
        min: 0,
        unit: "°c",
        show: true
      },
      tempTwo: {
        title: "Temperature 2",
        value: 27,
        low: 0,
        high: 50,
        max: 70,
        min: 0,
        unit: "°c",
        show: true
      },
      ah: {
        title: "Amp Hours Used",
        value: 4,
        low: 0,
        high: 25,
        max: 34,
        min: 0,
        unit: "Ah",
        show: true
      },
      brake: {
        title: "Brake",
        value: 0,
        low: 0,
        high: 0,
        max: 1,
        min: 0,
        unit: "",
        show: true
      },
      lap: {
        title: "Lap Number",
        value: 2,
        low: 0,
        high: 70,
        max: 70,
        min: 0,
        unit: "",
        show: true
      },

    },
    sessions: [{
      start: 'time',
      finish: 'time',
      laps: [{
          lap: 1,
          v: 23.5,
          i: 20
        },
        {
          lap: 2,
          v: 22,
          i: 19
        },
        {
          lap: 3,
          v: 21,
          i: 18
        },
      ]
    }, ]
  },
  watch: {
    active: function() {
      if (this.active) {
        setTimeout(() => this.activateGraph(), 200); //Gives time for the canvas element to be loaded to the DOM before placing graph
      }
    }
  },
  computed: {

  },
  methods: {
    activateGraph: function() {
      var voltageChartCtx = document.getElementById("voltageChart").getContext('2d');
      var voltageChart = new Chart(voltageChartCtx, graphConfig);
    }
  }

})