window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: false, // change to false
    width: 730,
    // height: 260,

    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      fontSize: 36,
      itemWidth: 220,
      maxHeight: 120,
    },

    data: [
      {
        type: "doughnut",
        innerRadius: 70,
        startAngle: 270,
        reversed: true,
        showInLegend: true,
        legendText: "{x }, {legendText}",
        dataPoints: [
          { x: 28, y: 71, color: "#24AFB5", legendText: "28%" },

          { x: 37, y: 50, color: "#DBDBDB", legendText: "37%" },
          {
            x: 22,
            y: 55,
            color: "rgba(36, 175, 181, 0.2)",
            legendText: "22%",
          },
          { x: 13, y: 65, color: "#F7F7F7", legendText: "13%" },
        ],
      },
    ],
  });

  chart.render();
};
