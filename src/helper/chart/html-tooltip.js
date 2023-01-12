import * as ChartJsHelpers from "chart.js/helpers";
import { format, parse } from "date-fns";
export const customTooltip = function (context) {
  // Tooltip Element
  let tooltipEl = document.getElementById("chartjs-tooltip");
  const canvas = context.chart.canvas;

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.innerHTML = "<table></table>";
    context.chart.canvas.parentElement.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set caret Position
  tooltipEl.classList.remove("above", "below", "no-transform");
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
    tooltipEl.classList.add("no-transform");
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }
  let tableRoot = tooltipEl.querySelector("table");

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title || [];
    const bodyLines = tooltipModel.body.map(getBody);

    let innerHtml = "<thead>";

    titleLines.forEach(function (title) {
      title = format(parse(title, "PPpp", new Date()), "MMMM, yyyy");
      innerHtml += '<tr><th style="font-size: 16px; text-align: center; padding-bottom: 16px; font-weight: 600">' + title + "</th></tr>";
    });
    innerHtml += "</thead><tbody>";

    bodyLines.forEach(function (body, i) {
      let bodyLabel = body[0] || "";
      let bodyValue = body[1] || "";
      const colors = tooltipModel.labelColors[i];
      let style = "color:" + colors.borderColor;
      style += "; display: block; font-size: 25px; line-height: 12px";
      let span = `<span style="${style}">&bull;</span><span style="flex-grow: 1; margin-left: 6px">${bodyLabel}</span><span style="font-weight:600; margin-left: 10px ">${bodyValue}</span>`;
      innerHtml += `<tr><td style="display: flex; align-items: center; padding-bottom: 5px">${span}</td></tr>`;
    });
    innerHtml += "</tbody>";

    tableRoot.innerHTML = innerHtml;
  }

  const position = context.chart.canvas.getBoundingClientRect();
  const { offsetLeft: positionX, offsetTop: positionY } = canvas;
  const bodyFont = ChartJsHelpers.toFont(tooltipModel.options.bodyFont);
  // Display, position, and set styles for font
  tooltipEl.style.display = "block";
  tooltipEl.style.backgroundColor = "white";
  tooltipEl.style.boxShadow = "0px 3px 6px #00000030";
  tooltipEl.style.borderRadius = "6px";
  tooltipEl.style.border = "0.2px solid #B8BED947";

  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = "absolute";
  tooltipEl.style.left = positionX + tooltipModel.caretX + 20 + "px";
  if (position.width / 2 < tooltipModel.caretX) {
    tooltipEl.style.left = positionX + tooltipModel.caretX - tableRoot.offsetWidth - 35 + "px";
  }
  tooltipEl.style.top = positionY + tooltipModel.height / 2 + "px";
  tooltipEl.style.font = bodyFont.string;
  tooltipEl.style.padding = tooltipModel.padding + "px " + tooltipModel.padding + "px";
  tooltipEl.style.pointerEvents = "none";
  tooltipEl.style.transition = "opacity 0.1s ease-in-out, top 0.1s ease-in-out, left 0.1s ease-in-out";
  tooltipEl.style.padding = "8px";
  tooltipEl.style.width = "max-content";
};
