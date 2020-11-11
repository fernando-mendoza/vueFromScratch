new Vue({
  el: "#app",
  data() {
    return {
      name: "Bitcoin",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=002",
      changePercent: 0,
      prices: [1000, 2314, 4813, 1746, 8164, 2715],

      pricesWithDays: [
        { day: "Lunes", value: 8400 },
        { day: "Martes", value: 7900 },
        { day: "Miercoles", value: 8200 },
        { day: "Jueves", value: 9000 },
        { day: "Viernes", value: 9400 },
        { day: "Sabado", value: 10000 },
        { day: "Domingo", value: 10200 },
      ],
    };
  },
});
