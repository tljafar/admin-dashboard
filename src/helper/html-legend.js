const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
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
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = 1 + "px";
      boxSpan.style.borderStyle = "solid";
      boxSpan.style.borderRadius = "10px";
      boxSpan.style.display = "flex";
      boxSpan.style.marginRight = "5px";

      const boxSpanChild = document.createElement("span");
      boxSpanChild.style.backgroundColor = item.hidden ? "" : item.strokeStyle;
      boxSpanChild.style.borderRadius = "10px";
      boxSpanChild.style.display = "inline-block";
      boxSpanChild.style.height = "9px";
      boxSpanChild.style.width = "9px";
      boxSpanChild.style.margin = "4px";
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
      svgInfo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>`;
      svgInfo.style.width = "18px";
      svgInfo.style.height = "18px";
      svgInfo.style.marginLeft = "18px";
      svgInfo.style.display = "flex";
      svgInfo.style.cursor = "pointer";
      svgInfo.style.color = "#B8BED9"
      groupBox.appendChild(boxSpan);
      groupBox.appendChild(textContainer);
      li.appendChild(groupBox);
      li.appendChild(svgInfo);
      ul.appendChild(li);
    });
  },
};
