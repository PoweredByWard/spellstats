const kd = {
    credits: {
        text: "spellstats.com",
        href: "http://spellstats.com/",
      },
      title: {
        text: "K/D",
        style: {
          color: "rgb(255,255,255,0.9)",
          fontWeight: 700,
        },
      },
      series: [
        {
          name: "Wins",
          type: "column",
          borderColor: "rgb(255,255,255,0.9)",
          color: "rgb(247, 189, 105)",
          data: [
            {
              x: 1,
              y: 5,
              name: "12/21/2020",
            },
            {
              x: 2,
              y: 9,
              name: "12/22/2020",
            },
          ],
        },
        {
          yAxis: 1,
          name: "winrate",
          type: "line",
          borderColor: "rgb(255,255,255,0.9)",
          color: "rgb(161,59,63)",
          data: [
            {
              x: 1,
              y: 30,
              name: "12/21/2020",
            },
            {
              x: 2,
              y: 20,
              name: "12/22/2020",
            },
          ],
        },
      ],
      xAxis: {
        title: {
          text: "Wins",
          style: {
            color: "rgb(255,255,255,0.9)",
          },
        },
        categories: ["", "12/21/2020", "12/22/2020"],
      },
      yAxis: [
        {
          title: {
            text: "Wins",
            style: {
              color: "rgb(255,255,255,0.9)",
            },
          },
        },
        {
          opposite: true,
          title: {
            text: "Winrate",
            style: {
              color: "rgb(255,255,255,0.9)",
            },
          },
        },
      ],
      chart: {
        backgroundColor: "#212121",
        type: "column",
      },
};

const win = {
  credits: {
    text: "spellstats.com",
    href: "http://spellstats.com/",
  },
  title: {
    text: "Wins",
    style: {
      color: "rgb(255,255,255,0.9)",
      fontWeight: 700,
    },
  },
  series: [
    {
      name: "Wins",
      type: "column",
      borderColor: "rgb(255,255,255,0.9)",
      color: "rgb(247, 189, 105)",
      data: [
        {
          x: 1,
          y: 5,
          name: "12/21/2020",
        },
        {
          x: 2,
          y: 9,
          name: "12/22/2020",
        },
      ],
    },
    {
      yAxis: 1,
      name: "winrate",
      type: "line",
      borderColor: "rgb(255,255,255,0.9)",
      color: "rgb(161,59,63)",
      data: [
        {
          x: 1,
          y: 30,
          name: "12/21/2020",
        },
        {
          x: 2,
          y: 20,
          name: "12/22/2020",
        },
      ],
    },
  ],
  xAxis: {
    title: {
      text: "Wins",
      style: {
        color: "rgb(255,255,255,0.9)",
      },
    },
    categories: ["", "12/21/2020", "12/22/2020"],
  },
  yAxis: [
    {
      title: {
        text: "Wins",
        style: {
          color: "rgb(255,255,255,0.9)",
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Winrate",
        style: {
          color: "rgb(255,255,255,0.9)",
        },
      },
    },
  ],
  chart: {
    backgroundColor: "#212121",
    type: "column",
  },
};

export const getChartype = (name) => {
  switch (name.toLowerCase().trim()) {
    case "kd":
      return kd;
    case "win":
      return win;
    default:
      return win;
  }
};
