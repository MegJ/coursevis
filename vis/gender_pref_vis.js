function drawGenderPrefChart(svgClass) {
  let width = 800;
  let height = 500;
  let gridHeight = height/4;
  let gridWidth = width/4 - padding;
  let gridSpacing = 3;

  let genderData = createGenderPreferenceData();
  let totalGenderData = createGenderListData();
  let totalPeople = getTotalPeople();

  let coralColorScale =  d3.scaleLinear([0, 40], ["white", coralColor])
    .interpolate(d3.interpolateRgb.gamma(0.5))
    .domain([0, 1.5]);

  let blueColorScale = d3.scaleSequential(d3.interpolateBlues)
    .domain([0, 1.5]);

  let rdPuColorScale = d3.scaleSequential(d3.interpolateRdPu)
    .domain([0, 2]);

  let redColorScale = d3.scaleSequential(d3.interpolateReds)
  .domain([0, 1.5]);

  let purpleColorScale = d3.scaleSequential(d3.interpolatePurples)
  .domain([0, 1]);
  let colorScale = [blueColorScale, redColorScale, purpleColorScale];

  let genderPrefSvg = d3.select(svgClass);

  // draw color rect for heatmap
  genderPrefSvg.selectAll(".genderPRect")
    .data(genderData)
    .enter()
    .append("rect")
      .attr("x", function(d, i) { return ((i % 3)+1) * (gridWidth) + padding; })
      .attr("y", function(d, i) { return Math.floor(i/3) * gridHeight + padding*2; })
      .attr("width", gridWidth-gridSpacing)
      .attr("height", gridHeight-gridSpacing)
      .style("fill", function(d, i) { return coralColorScale(d/totalGenderData[Math.floor(i/3)])});

  // add percentage text to heatmap
  genderPrefSvg.selectAll(".genderPText")
    .data(genderData)
    .enter()
    .append("text")
      .attr("x", function(d, i) { return ((i % 3)+1) * (gridWidth) + padding + gridWidth/2; })
      .attr("y", function(d, i) { return Math.floor(i/3) * gridHeight + padding*2 + gridHeight/2; })
      .text(function(d, i) {return (d/totalGenderData[Math.floor(i/3)] * 100).toFixed(1) + "%"})
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "normal")
      .style("font-size", "14px");

  // add x axis labels to heatmap
  genderPrefSvg.selectAll(".genderXAxis")
    .data(["Men", "Women", "Other"])
    .enter()
    .append("text")
      .attr("x", function(d, i) { return ((i % 3)+1) * (gridWidth) + padding + gridWidth/2; })
      .attr("y", padding*1.5)
      .text(function(d) {return d})
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
      .style("font-size", "14px");
  genderPrefSvg.append("text")
      .attr("x", padding*2.5 + gridWidth/2)
      .attr("y", padding*1.5)
      .text("Who do you like?")
      .style("text-anchor", "end")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
      .style("font-size", "14px");

  // add y axis labels to heatmap
  genderPrefSvg.selectAll(".genderYAxis")
    .data(["Men", "Women", "Other"])
    .enter()
    .append("text")
      .attr("x", padding*2.5 + gridWidth/2)
      .attr("y", function(d, i) { return i * gridHeight + padding*2 + gridHeight/2; })
      .text(function(d) {return d})
      .style("text-anchor", "end")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
      .style("font-size", "14px");
  genderPrefSvg.selectAll("genderYAxisNote")
    .data(["Men", "Women", "Other"])
    .enter()
    .append("text")
      .attr("x", padding*2.5 + gridWidth/2)
      .attr("y", function(d, i) { return i * gridHeight + padding*2 + gridHeight/2 + 15; })
      .text(function(d, i) {return (totalGenderData[i]/totalPeople * 100).toFixed(2) + "% of total";})
      .style("text-anchor", "end")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "normal")
      .style("font-size", "14px");

  // add dividers
  genderPrefSvg.selectAll(".genderLines")
    .data(["Men", "Women", "Other"])
    .enter()
    .append("line")
      .attr("x1", padding)
      .attr("x2", (4)* (gridWidth) + padding )
      .attr("y1", function(d, i) { return i * gridHeight + padding*2 -2;})
      .attr("y2", function(d, i) { return i * gridHeight + padding*2 -2;})
      .style("stroke", lightGreyColor)
      .style("stroke-width", "1px")
  }