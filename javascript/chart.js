const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["jan", "feb", "march", "april", "may", "june"],
    datasets: [
      {
        label: "Client Stats",
        data: [2, 3, 5, 10, 12, 15],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
