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
    listContainer.style.gap = "10px";
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
      groupBox.style.flexDirection = "row";
      groupBox.style.alignItems = "center";
      groupBox.style.fontSize = "12px";
      groupBox.style.fontWeight = "500";

      groupBox.style.marginLeft = "10px";

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

      // Color box
      const boxSpan = document.createElement("span");
      boxSpan.style.background = item.fillStyle;
      // boxSpan.style.borderColor = item.strokeStyle;
      // boxSpan.style.borderWidth = 1 + "px";
      boxSpan.style.outline = "1px solid " + item.strokeStyle;
      boxSpan.style.borderRadius = "50%";
      boxSpan.style.display = "flex";
      boxSpan.style.alignItems = "center";
      boxSpan.style.justifyContent = "center";

      boxSpan.style.marginRight = "5px";
      boxSpan.style.width = "17px";
      boxSpan.style.height = "17px";

      const boxSpanChild = document.createElement("span");
      boxSpanChild.style.backgroundColor = item.hidden ? "" : item.strokeStyle;
      boxSpanChild.style.borderRadius = "10px";
      boxSpanChild.style.display = "inline-block";
      boxSpanChild.style.height = "9px";
      boxSpanChild.style.width = "9px";
      // boxSpanChild.style.margin = "4px";
      boxSpan.appendChild(boxSpanChild);

      // Text
      const textContainer = document.createElement("p");
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.userSelect = "none";
      //   textContainer.style.textDecoration = item.hidden ? "line-through" : "";

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      const svgInfo = document.createElement("span");
      svgInfo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15.384" height="15.384" viewBox="0 0 15.384 15.384" fill="currentColor">
      <g>
          <path d="M0,0H15.384V15.384H0Z" fill="none" />
          <path d="M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z" transform="translate(2.051 2.051)" />
      </g>
  </svg>`;
      svgInfo.style.width = "18px";
      svgInfo.style.height = "18px";
      svgInfo.style.marginLeft = "5px";
      svgInfo.style.display = "flex";
      svgInfo.style.cursor = "pointer";
      svgInfo.style.color = "#B8BED9";
      groupBox.appendChild(boxSpan);
      groupBox.appendChild(textContainer);
      li.appendChild(groupBox);
      li.appendChild(svgInfo);
      ul.appendChild(li);
    });
  },
};
