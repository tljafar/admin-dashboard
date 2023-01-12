import * as ChartJsHelpers from "chart.js/helpers";

export const customDoughnutTooltip = function (context) {
  const tooltipElId = "chartjs-doughnut-tooltip";
  let tooltipEl = document.getElementById(tooltipElId);
  const canvas = context.chart.canvas;
  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = tooltipElId;
    tooltipEl.classList.add("chart-pie-tooltip");
    tooltipEl.innerHTML = '<div class="legend-content"></div>';
    canvas.parentElement.style.position = "relative";
    canvas.parentElement.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  const tooltipModel = context.chart.tooltip;
  if (tooltipModel.opacity === 0) {
    // tooltipEl.style.opacity = 0;
    return;
  }
  if (tooltipModel.body) {
    const bodyLines = tooltipModel.body.map((bodyItem) => bodyItem.lines);
    let innerHtml = "";

    bodyLines.forEach(function (body, i) {
      let bodyLabel = body[0] || "";
      let bodyValue = body[1] || "";
      const colors = tooltipModel.labelColors[i];
      innerHtml += `<div style="color: ${colors.backgroundColor}; font-size: 15px; line-height: 1; margin-bottom: 10px;">${bodyLabel}</div>`;
      innerHtml += `<div style="color: #283977; font-size: 16px; line-height: 1">${bodyValue}</div>`;
    });
    tooltipEl.innerHTML = `<div class="legend-content">${innerHtml}</div>`;
  }
  const cutout = parseInt(tooltipModel.dataPoints[0].dataset.cutout || "55%");
  const bodyFont = ChartJsHelpers.toFont(tooltipModel.options.bodyFont);
  // Display, position, and set styles for font
  tooltipEl.style.display = "flex";
  tooltipEl.style.justifyContent = "center";
  tooltipEl.style.alignItems = "center";
  tooltipEl.style.textAlign = "center";
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = "absolute";
  tooltipEl.style.inset = `${(100 - cutout) / 2 + 10}% ${(100 - cutout) / 2 + 5}%`;

  tooltipEl.style.font = bodyFont.string;
  tooltipEl.style.fontWeight = 600;
  tooltipEl.style.pointerEvents = "none";
  tooltipEl.style.transition = "opacity 0.1s ease-in-out, top 0.1s ease-in-out, left 0.1s ease-in-out";
};

export const setInitTooltipValue = {
  afterDraw: (chart) => {
    if (!(chart.tooltip._active && chart.tooltip._active.length && chart.tooltip.getActiveElements().length)) {
      chart.tooltip.setActiveElements([{ datasetIndex: 0, index: 0 }]);
      chart.update();
    }
  },
};
