function drawCommitmentBarChart(svgClass) {
  let maxBarHeight = commitmentSvgHeight - padding*3;
  let barWidth = padding*2;

  let commitementData = convertDemoDataToMap(getSummary(jsonData, "commitment", "survey"));

  let barSvg = d3.select(svgClass);
  
  // addTotalSignupText(barSvg)

  let x = getBarX(commitementData, firstSvgWidth, "key");
  let y = getBarY(commitementData, commitmentSvgHeight);

  drawBars(barSvg, x, y, commitementData, maxBarHeight, barWidth, coralColor);

  // add x axis
  barSvg.append("g")
    .attr("class", "x_axis")
    .attr("transform", "translate(" + 0 + ", " + (maxBarHeight) + ")")
    .call(d3.axisBottom(x))
    .selectAll(".tick text")
    .call(wrap, x.bandwidth())
        .style("font-family", "Inconsolata")
        .style("font-size", "12px");
  
  barSvg.select(".domain").remove();
        

  drawTotalText(barSvg, x, y, commitementData, barWidth, 5);
}