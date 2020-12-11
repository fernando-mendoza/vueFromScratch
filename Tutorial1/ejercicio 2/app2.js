new Vue({
  el: "#app",
  data() {
    return {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=002",
      changePercent: 0,
      color: "f4f4f4",
      value: 0,
      price: 8500,
      pricesWithDays: [
        { day: "Lunes", value: 8500 },
        { day: "Martes", value: 7900 },
        { day: "Miercoles", value: 8200 },
        { day: "Jueves", value: 9000 },
        { day: "Viernes", value: 9400 },
        { day: "Sabado", value: 10000 },
        { day: "Domingo", value: 10200 },
      ],

      showPrices: false,
    };
  },
  computed: {
    title() {
      return `${this.name} - ${this.symbol}`;
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.price;
    },
  },

  watch: {
    showPrices(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      this.color = this.color.split("").reverse().join("");
    },
  },
});

//v-13
