const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.classList.add("chart-line-legend");
    listContainer.style.display = "flex";
    listContainer.style.flexDirection = "row";
    listContainer.style.flexWrap = "wrap";
    listContainer.style.justifyContent = "center";
    listContainer.style.gap = "18px";
    listContainer.style.margin = 0;
    listContainer.style.marginBottom = "0";
    listContainer.style.padding = 0;
    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

export const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.flexDirection = "row";
      li.style.alignItems = "center";

      const groupBox = document.createElement("div");
      groupBox.classList.add("legend-content");
      groupBox.style.alignItems = "center";
      groupBox.style.cursor = "pointer";
      groupBox.style.display = "flex";
      groupBox.style.gap = "0 6px";
      groupBox.style.flexDirection = "row";
      groupBox.style.alignItems = "center";
      groupBox.style.fontSize = "12px";
      groupBox.style.fontWeight = "500";

      groupBox.onclick = () => {
        const { type } = chart.config;
        if (type === "pie" || type === "doughnut") {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        }
        chart.update();
      };

      // Color circle
      const circleSpan = document.createElement("span");
      circleSpan.style.background = item.fillStyle;
      circleSpan.style.outline = "1px solid " + item.strokeStyle;
      circleSpan.style.borderRadius = "50%";
      circleSpan.style.display = "flex";
      circleSpan.style.alignItems = "center";
      circleSpan.style.justifyContent = "center";

      circleSpan.style.width = "18px";
      circleSpan.style.height = "18px";

      const boxSpanChild = document.createElement("span");
      boxSpanChild.style.backgroundColor = item.hidden ? "" : item.strokeStyle;
      boxSpanChild.style.borderRadius = "50%";
      boxSpanChild.style.display = "inline-block";
      boxSpanChild.style.height = "10px";
      boxSpanChild.style.width = "10px";
      circleSpan.appendChild(boxSpanChild);

      // Text
      const textContainer = document.createElement("p");
      textContainer.style.color = item.fontColor;
      textContainer.style.padding = 0;
      textContainer.style.margin = 0;
      textContainer.style.userSelect = "none";

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);
      groupBox.appendChild(circleSpan);
      groupBox.appendChild(textContainer);
      li.appendChild(groupBox);
      ul.appendChild(li);
    });
  },
};
