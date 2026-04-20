window.addEventListener("load", () => {
  const ctx1 = document.getElementById("lineChart");

  //   선그래프
  function getFontSize(base) {
    return Math.max(12, base * (window.innerWidth / 1920));
  }
  const lineChart = new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["10월", "11월", "12월", "1월", "2월", "3월"],
      datasets: [
        {
          label: "기부금",
          data: [200000, 300000, 400000, 350000, 450000, 550000],
          borderColor: "#a67c52",
          backgroundColor: "#a67c52",
          tension: 0.3,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: getFontSize(18), // PC 기준 18
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: getFontSize(16), // PC 기준 16
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: getFontSize(16),
            },
          },
        },
      },
    },
  });

  window.addEventListener("resize", () => {
    lineChart.options.plugins.legend.labels.font.size = getFontSize(18);
    lineChart.options.scales.x.ticks.font.size = getFontSize(16);
    lineChart.options.scales.y.ticks.font.size = getFontSize(16);
    lineChart.update();
  });

  //   원그래프
  function getFontSize(base) {
    return Math.max(12, base * (window.innerWidth / 1920));
  }

  const ctx2 = document.getElementById("pieChart");

  const pieChart = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["사료", "생활용품", "의료", "시설개선"],
      datasets: [
        {
          data: [35, 30, 20, 15],
          backgroundColor: ["#c89f7a", "#b38766", "#a06f50", "#8c5a3c"],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: getFontSize(18), // PC 기준 18
            },
          },
        },
        tooltip: {
          bodyFont: {
            size: getFontSize(16), // PC 기준 16
          },
        },
      },
    },
  });

  window.addEventListener("resize", () => {
    pieChart.options.plugins.legend.labels.font.size = getFontSize(18);
    pieChart.options.plugins.tooltip.bodyFont.size = getFontSize(16);
    pieChart.update();
  });

  //   프로그래스 바
  const prograssbar = document.querySelector(".prograss-done");

  setTimeout(() => {
    prograssbar.style.width = prograssbar.getAttribute("data-done") + "%";
    prograssbar.style.opacity = 1;
  }, 500);
});
