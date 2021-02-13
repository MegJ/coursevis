function drawBarChart(svgClass) {
  let maxBarHeight = firstSvgHeight - padding*3;
  let barWidth = padding*2;

  let genderData = createGenderData();
  let yearData = createYearData();
  let ethnicityData = createEthnicityData();
  let activitiesData = createActivitiesData();
  let collegeData = createCollegeData();

  let barSvg = d3.select(svgClass);
  
  // addTotalSignupText(barSvg)

  let x = getBarX(genderData, firstSvgWidth, "key");
  let y = getBarY(genderData, firstSvgHeight);

  drawBars(barSvg, x, y, genderData, maxBarHeight, barWidth, coralColor);

  // add x axis
  barSvg.append("g")
    .attr("class", "x_axis")
    .attr("transform", "translate(" + 0 + ", " + (maxBarHeight) + ")")
    .call(d3.axisBottom(x))
    .style("font-family", "Inconsolata")
        .style("font-size", "12px")
        .select(".domain").remove();

    drawTotalText(barSvg, x, y, genderData, barWidth, 5);
  
    // key for bar chart
     let barLegend = ["gender", "year", "ethnicity", "college", "activities"];

     // create legend
     d3.select(svgClass).append("g")
     .selectAll(".key")
       .data(barLegend)
       .enter()
       .append("circle")
       .attr("class", "legend_circles")
       .attr('id', function(d, i) { return "key_" + d;})
      .attr('cx', function(d, i) { return firstSvgWidth-padding*4;})
      .attr('cy', function(d, i) { return 160 + i*30;})
      .attr('r', 8)
      .style('fill', '#f8f8f8')
      .style('stroke', darkTextColor)
      .style('stroke-width', 2)
      .on('click', function(d, i) {
        handleBarLegendChange(d, ".legend_circles");
        barSvg.selectAll("rect").remove();
        barSvg.selectAll(".total_text").remove();
        
        if (d == "year") {
          x = getBarX(yearData, firstSvgWidth, "key");
          y = getBarY(yearData, firstSvgHeight);

          drawBars(barSvg, x, y, yearData, maxBarHeight, barWidth, coralColor);
          drawTotalText(barSvg, x, y, yearData, barWidth, 5);
          redrawXAxis(barSvg, x, maxBarHeight);

        }
        else if (d == "gender") {
          x = getBarX(genderData, firstSvgWidth, "key");
          y = getBarY(genderData, firstSvgHeight);

          drawBars(barSvg, x, y, genderData, maxBarHeight, barWidth, coralColor);
          drawTotalText(barSvg, x, y, genderData, barWidth, 5);
          redrawXAxis(barSvg, x, maxBarHeight);
        } else if (d == "ethnicity") {
          x = getBarX(ethnicityData, firstSvgWidth, "key");
          y = getBarY(ethnicityData, firstSvgHeight);

          drawBars(barSvg, x, y, ethnicityData, maxBarHeight, barWidth, coralColor);
          drawTotalText(barSvg, x, y, ethnicityData, barWidth, 5);
          redrawXAxis(barSvg, x, maxBarHeight);

        } else if (d == "college") {
          x = getBarX(collegeData, firstSvgWidth, "key");
          y = getBarY(collegeData, firstSvgHeight);

          drawBars(barSvg, x, y, collegeData, maxBarHeight, barWidth, coralColor);
          drawTotalText(barSvg, x, y, collegeData, barWidth, 5);
          redrawXAxis(barSvg, x, maxBarHeight);

        } else if (d == "activities") {
          x = getBarX(activitiesData, firstSvgWidth, "key");
          y = getBarY(activitiesData, firstSvgHeight);

          drawBars(barSvg, x, y, activitiesData, maxBarHeight, barWidth, coralColor);
          drawTotalText(barSvg, x, y, activitiesData, barWidth, 5);
          redrawXAxis(barSvg, x, maxBarHeight, true);

        }
      });

    handleBarLegendChange("gender", ".legend_circles");

    // create legend labels
    d3.select(svgClass).append("g")
    .selectAll('.key_labels')
    .data(barLegend)
      .enter()
      .append('text')
      .attr('x', function(d, i) { return firstSvgWidth-padding*4 + 20;})
      .attr('y', function(d, i) { return 164 + i*30;})
      .text(function(d) {return d;})
      .style('fill', darkTextColor)
      .style("font-weight", "bold")
      .style("font-family", "Inconsolata")
       .style("font-size", "12px");
}

function addTotalSignupText(barSvg) {
  barSvg.append("text")
    .attr("x", "50%")
    .attr("y", padding*2)
    .text("In 2020, we have " + getTotalPeople() + " people signed up to meet their perfect match!")
    .style("text-anchor", "middle")
    .style("fill", "#f8f8f8")
    .style("font-family", "Montserrat")
    .style("font-size", "20px")
    .style("font-weight", "bold");
  barSvg.append("text")
    .attr("x", "50%")
    .attr("y", padding*3.5)
    .text("Let's take a look at their breakdown:")
    .style("text-anchor", "middle")
    .style("fill", "#f8f8f8")
    .style("font-family", "Montserrat")
    .style("font-size", "20px")
    .style("font-weight", "bold");
}