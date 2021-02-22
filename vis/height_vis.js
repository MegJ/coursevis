function drawHeightChart(svgClass) {
  let midwayPoint = secSvgHeight/2;

  let femaleHeight = getHeightList(jsonData, true);
  let maleHeight = getHeightList(jsonData, false);
  console.log(maleHeight)

  let x = d3.scaleLinear()
    .domain([minHeight, femaleHeight.length+minHeight])
    .range([padding*5, secSvgWidth-(padding*5)]);

  let yfemale = d3.scaleLinear()
    .domain([0, d3.max([d3.max(femaleHeight), d3.max(maleHeight)])])
    .range([midwayPoint, (padding*2)]);

  let ymale = d3.scaleLinear()
    .domain([0, d3.max([d3.max(femaleHeight), d3.max(maleHeight)])])
    .range([midwayPoint, secSvgHeight-(padding*2)]);

  let heightSvg = d3.select(svgClass);

  let tooltip = addTooltipToVis("heightSvg_tooltip");

  heightSvg.append("path")
    .datum(femaleHeight)
    .attr("class", "area")
    .attr("fill", coralColor)
    .attr("stroke", coralColor)
    .attr("stroke-width", "1")
    .attr("d", d3.area()
      .x(function (d, i) {return x(i+minHeight);})
      .y0(yfemale(0))
      .y1(function (d) {return yfemale(d)})
      .curve(d3.curveMonotoneX));

  heightSvg.append("path")
    .datum(maleHeight)
    .attr("fill", blueColor)
    .attr("stroke", blueColor)
    .attr("stroke-width", "1")
    .attr("d", d3.area()
      .x(function (d, i) {return x(i+minHeight);})
      .y0(ymale(0))
      .y1(function (d) {return ymale(d)})
      .curve(d3.curveMonotoneX));

  // add x axis
  heightSvg.append("g")
    .attr("class", "x_axis_height")
    .attr("transform", "translate(" + (0) + ", " + (midwayPoint) + ")")
    .call(d3.axisBottom(x))
    .style("font-family", "Inconsolata")
    .style("color", darkTextColor)
    .style("font-size", "12px")
    .select(".domain").remove();

  heightSvg.append("text")
    .attr("transform", "translate(" + (secSvgWidth-padding*5) + ", " + (midwayPoint) + ")")
    .text("height (inches)")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("color", darkTextColor)
    .style("font-size", "12px");

  heightSvg.append("text")
    .attr("transform", "translate(" + (padding*4+15) + ", " + (midwayPoint-10) + ")")
    .text("female")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px")
    .style("text-anchor", "end");

  heightSvg.append("text")
    .attr("transform", "translate(" + (padding*4+15) + ", " + (midwayPoint+20) + ")")
    .text("male")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px")
    .style("text-anchor", "end");

  // annotation for % > 6ft
  let tempMaleHeight = maleHeight.slice(21);
  var sixFeetMale = tempMaleHeight.reduce(function(a, b){ return a + b;}, 0);
  let totalMale = maleHeight.reduce(function(a, b){ return a + b;}, 0);
  drawFunFact(svgClass, 100, 350, 20, ((sixFeetMale/totalMale)*100).toFixed(0), blueColor);
  heightSvg.append("text")
    .attr("x", 100 + 20 + 10)
    .attr("y", 350)
    .text("percentage of men who are 6ft or taller")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("alignment-baseline", "middle")
    .style("font-size", "12px");

  // no-hover tool tips - female median height comment
  // var medianFemale = calculateMedianForHeight(femaleHeight);
  // heightSvg.append("circle")
  //   .attr("class", "nohover_tooltip")
  //   .attr("cx", x(medianFemale))
  //   .attr("cy", yfemale(femaleHeight[medianFemale-minHeight]))
  //   .attr("r", 4)
  //   .style('stroke-width', 2)
  //   .style('fill-opacity', 0)
  //   .style("stroke", darkTextColor);
  // heightSvg.append("text")
  //   .attr("class", "nohover_tooltip")
  //   .attr("x", x(medianFemale)+10)
  //   .attr("y", yfemale(femaleHeight[medianFemale-minHeight])-10)
  //   .text("median height: " + (medianFemale) + " in")
  //   .style("font-family", "Inconsolata")
  //   .style("font-weight", "bold")
  //   .style("font-size", "12px");

  // male median height comment
  // var medianMale = calculateMedianForHeight(maleHeight);
  // heightSvg.append("circle")
  //   .attr("class", "nohover_tooltip")
  //   .attr("cx", x(medianMale))
  //   .attr("cy", ymale(maleHeight[medianMale-minHeight]))
  //   .attr("r", 4)
  //   .style('stroke-width', 2)
  //   .style('fill-opacity', 0)
  //   .style("stroke", darkTextColor);
  // heightSvg.append("text")
  //   .attr("class", "nohover_tooltip")
  //   .attr("x", x(medianMale)-5)
  //   .attr("y", ymale(maleHeight[medianMale-minHeight])+20)
  //   .text("median height: " + medianMale + " in")
  //   .style("font-family", "Inconsolata")
  //   .style("font-weight", "bold")
  //   .style("text-anchor", "end")
  //   .style("font-size", "12px");

  // 6ft comment
  // heightSvg.append("circle")
  //   .attr("class", "nohover_tooltip")
  //   .attr("cx", x(72))
  //   .attr("cy", ymale(maleHeight[72-minHeight]))
  //   .attr("r", 4)
  //   .style('stroke-width', 2)
  //   .style('fill-opacity', 0)
  //   .style("stroke", darkTextColor);
  // heightSvg.append("line")
  //   .attr("class", "nohover_tooltip")
  //   .attr("x1", x(72)+4)
  //   .attr("x2", x(75))
  //   .attr("y2", ymale(maleHeight[72-minHeight]))
  //   .attr("y1", ymale(maleHeight[72-minHeight]))
  //   .style('stroke-width', 2)
  //   .style("stroke", darkTextColor);
  // heightSvg.append("text")
  //   .attr("class", "nohover_tooltip")
  //   .attr("x", x(75)+4)
  //   .attr("y", ymale(maleHeight[72-minHeight])-5)
  //   .text("only ~30% of male participants are 6ft+")
  //   .style("font-family", "Inconsolata")
  //   .style("font-weight", "bold")
  //   .style("font-size", "12px");
  // heightSvg.append("text")
  //   .attr("class", "nohover_tooltip")
  //   .attr("x", x(75)+4)
  //   .attr("y", ymale(maleHeight[72-minHeight])+10)
  //   .text("(but it's 2020 and it's time to forgo")
  //   .style("font-family", "Inconsolata")
  //   .style("font-weight", "bold")
  //   .style("font-size", "12px");
  // heightSvg.append("text")
  //   .attr("class", "nohover_tooltip")
  //   .attr("x", x(75)+4)
  //   .attr("y", ymale(maleHeight[72-minHeight])+25)
  //   .text("patriarchal standards 🎉)")
  //   .style("font-family", "Inconsolata")
  //   .style("font-weight", "bold")
  //   .style("font-size", "12px");

  d3.select(svgClass).on("mousemove", function() {
    var offset = document.querySelector(svgClass).getBoundingClientRect();

    hideTooltip(tooltip, ".height_tooltip");

    // window for bar chart
    if (d3.event.clientX - offset.x >= (padding*5)
      && d3.event.clientX - offset.x < secSvgWidth-(padding*5)-10
      && d3.event.clientY - offset.y > padding*2
      && d3.event.clientY - offset.y < secSvgHeight-(padding*4)) {

      d3.selectAll("#height_tooltip")
        .transition()
        .attr("opacity", 1);

      d3.selectAll(".nohover_tooltip").attr("opacity", 0);

      var height = Math.round(x.invert(d3.event.clientX - offset.x));

      // set tooltip attributes
      var tooltipText = "<b>" + height + " inches | " + convertInToFeet((height)) + "</b>"
      + "<br /><b>female count: </b> " + femaleHeight[(height-minHeight)]
      + "<br /><b>male count: </b>" + maleHeight[(height-minHeight)];

      // add tooltip to screen
      updateToolTipText(tooltip, tooltipText, 10, 150);
        
      // add circles + line
      heightSvg.append("circle")
        .attr("class", "height_tooltip")
        .attr("cx", x(height))
        .attr("cy", yfemale(femaleHeight[height-minHeight]))
        .attr("r", 4)
        .style('stroke-width', 2)
        .style('fill-opacity', 0)
        .style("stroke", darkTextColor);
      heightSvg.append("circle")
        .attr("class", "height_tooltip")
        .attr("cx", x(height))
        .attr("cy", ymale(maleHeight[height-minHeight]))
        .attr("r", 4)
        .style('stroke-width', 2)
        .style('fill-opacity', 0)
        .style("stroke", darkTextColor);
      // make sure that lines are not drawn when circles are too close
      if (ymale(maleHeight[height-minHeight]) - yfemale(femaleHeight[height-minHeight]) >= 8) {
        heightSvg.append("line")
          .attr("class", "height_tooltip")
          .attr("x1", x(height))
          .attr("x2", x(height))
          .attr("y2", ymale(maleHeight[height-minHeight])-4)
          .attr("y1", yfemale(femaleHeight[height-minHeight])+4)
          .style('stroke-width', 2)
          .style("stroke", darkTextColor);
      }
          
  } else {
    hideTooltip(tooltip, ".height_tooltip");

    d3.selectAll(".nohover_tooltip")
      .attr("opacity", 1);
    }

  }).on("mouseleave", function () {
    d3.selectAll(".nohover_tooltip").attr("opacity", 1);
    
    hideTooltip(tooltip, ".height_tooltip");
  });

    // drawFunFact(svgClass, 100, 350, 40, "6'1");
}