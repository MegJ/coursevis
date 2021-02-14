function drawSleepDials(svgClass) {
  let innerRadius = 50;
  let outerRadius = 100;

  let hoverX = -1;

  let sleepSvg = d3.select(svgClass);

  let sleepData = createSleepData();
  let wakeData = createWakeData();

  let maxBarHeight = thirdSvgHeight/2;

  let x = d3.scaleLinear()
    .domain([0, 23])
    .range([padding*5.5, thirdSvgWidth-padding*5.5])

  let y = d3.scaleLinear()
    .domain([0, 1860]) // max value
    .range([innerRadius, outerRadius]);

  let ySleep = d3.scaleLinear()
    .domain([0, 1860]) // max value
    .range([thirdSvgHeight/2, padding*4]);

  let yWake = d3.scaleLinear()
    .domain([0, 1860]) // max value
    .range([thirdSvgHeight/2, thirdSvgHeight-padding*4]);

  let line = d3.lineRadial()
    .angle(function(d, i) {return x(i)})
    .radius(function(d, i) {return y(d)});

  var area = d3.radialArea()
    .angle(function(d, i) {
      return x(i);
    })
    .innerRadius(function(d) {
      return innerRadius;
    })
    .outerRadius(function(d, i) {
      return y(d[i]);
    })
    .curve(d3.curveCatmullRom.alpha(1));

  let tooltip = addTooltipToVis("sleepSvg_tooltip");

  // create initial bars
  sleepSvg.selectAll(".bars")
    .data(sleepData)
    .enter()
    .append("rect")
      .attr("class", "sleepBar")
      .attr("id", function(d, i) {return "sleepBar_" + i;})
      .attr("x", function(d, i) {return x(i);})
      .attr("y", function(d, i) {return ySleep(d[i]);})
      .attr("fill", function(d) {return coralColor;})
      .attr("height", function(d, i) {return maxBarHeight- ySleep(d[i]);})
      .attr("width", padding-5);
  sleepSvg.selectAll(".bars")
    .data(wakeData)
    .enter()
    .append("rect")
      .attr("class", "wakeBar")
      .attr("id", function(d, i) {return "wakeBar_" + i;})
      .attr("transform", "translate(0, " + 15 +")")
      .attr("x", function(d, i) {return x(i);})
      .attr("y", function(d, i) {return 250;})
      .attr("fill", function(d) {return blueColor;})
      .attr("height", function(d, i) {return yWake(d[i])-maxBarHeight;})
      .attr("width", padding-5);

  // x-axis
  sleepSvg.append("g")
    .attr("class", "x_axis_sleep")
    .attr("transform", "translate(" + ((padding-5)/2) + ", " + (thirdSvgHeight/2)  + ")")
    .call(d3.axisBottom(x).tickFormat(function (d) { return d+":00";}).tickSize(0))
    .style("font-family", "Inconsolata")
    .style("color", darkTextColor)
        .style("font-size", "12px")
        .select(".domain").remove();
  sleepSvg.append("text")
    .attr("class", "x_axis_sleep")
    .attr("x", padding*5)
    .attr("y", thirdSvgHeight/2 - padding)
    .text("when do people")
    .style("font-family", "Inconsolata")
    .style("text-anchor", "end")
    .style("font-weight", "bold")
    .style("font-size", "12px")
  sleepSvg.append("text")
    .attr("class", "x_axis_sleep")
    .attr("x", padding*5)
    .attr("y", thirdSvgHeight/2 - padding + 15)
    .text("fall asleep?")
    .style("font-family", "Inconsolata")
    .style("text-anchor", "end")
    .style("font-weight", "bold")
    .style("font-size", "12px")
  sleepSvg.append("text")
    .attr("class", "x_axis_sleep")
    .attr("x", padding*5)
    .attr("y", thirdSvgHeight/2 + padding+15)
    .text("when do people")
    .style("font-family", "Inconsolata")
    .style("text-anchor", "end")
    .style("font-weight", "bold")
    .style("font-size", "12px")
  sleepSvg.append("text")
    .attr("class", "x_axis_sleep")
    .attr("x", padding*5)
    .attr("y", thirdSvgHeight/2 + padding +30)
    .text("wake up?")
    .style("font-family", "Inconsolata")
    .style("text-anchor", "end")
    .style("font-weight", "bold")
    .style("font-size", "12px");
  sleepSvg.append("text")
    .attr("class", "x_axis_sleep")
    .attr("x", thirdSvgWidth-padding*4.5)
    .attr("y", thirdSvgHeight/2 + 10)
    .text("time (24hr)")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px");

  // late sleepers comment
  sleepSvg.append('line')
    .attr("class", "nohover_sleep")
    .attr("x1", x(4)+(padding-5)/2 -1)
    .attr("x2", x(6)+(padding-5)/2+1) 
    .attr("y1", thirdSvgHeight/2 - 20)
    .attr("y2", thirdSvgHeight/2 - 20)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append('line')
    .attr("class", "nohover_sleep")
    .attr("x1", x(4)+(padding-5)/2)
    .attr("x2", x(4)+(padding-5)/2)
    .attr("y1", thirdSvgHeight/2 - 20)
    .attr("y2", thirdSvgHeight/2 - 15)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append('line')
    .attr("class", "nohover_sleep")
    .attr("x1", x(6)+(padding-5)/2)
    .attr("x2", x(6)+(padding-5)/2)
    .attr("y1", thirdSvgHeight/2 - 20)
    .attr("y2", thirdSvgHeight/2 - 15)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append('line')
    .attr("class", "nohover_sleep")
    .attr("x1", x(5)+(padding-5)/2)
    .attr("x2", x(5)+(padding-5)/2)
    .attr("y1", thirdSvgHeight/2 - 20)
    .attr("y2", thirdSvgHeight/2 - 60)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append("text")
    .attr("class", "nohover_sleep")
    .attr("x", x(5)+(padding-5)/2 - padding/2)
    .attr("y", thirdSvgHeight/2 - 90)
    .text("42 people generally fall")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px");
  sleepSvg.append("text")
    .attr("class", "nohover_sleep")
    .attr("x", x(5)+(padding-5)/2 - padding/2)
    .attr("y", thirdSvgHeight/2 - 75)
    .text("asleep past 4:00am")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px");

  //median sleep times
  sleepSvg.append('line')
    .attr("class", "nohover_sleep")
    .attr("x1", x(0)+(padding-5)/2)
    .attr("x2", x(0)+(padding-5)/2)
    .attr("y1", ySleep(sleepData[0][0])-4)
    .attr("y2", ySleep(sleepData[0][0])-40)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append('circle')
    .attr("class", "nohover_sleep")
    .attr("cx", x(0)+(padding-5)/2)
    .attr("cy", ySleep(sleepData[0][0]))
    .attr("r", 4)
    .style('fill-opacity', 0)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append("text")
    .attr("class", "nohover_sleep")
    .attr("x", x(0)+(padding-5)/2 - padding/2)
    .attr("y", ySleep(sleepData[0][0])- 50)
    .text("median: 12:00am")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px");
  sleepSvg.append('line')
    .attr("class", "nohover_sleep")
    .attr("x1", x(8)+(padding-5)/2)
    .attr("x2", x(8)+(padding-5)/2)
    .attr("y1", yWake(sleepData[8][8])+maxBarHeight-padding*4+15)
    .attr("y2", yWake(sleepData[8][8])+maxBarHeight-padding*4+20+30)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);
  sleepSvg.append("text")
    .attr("class", "nohover_sleep")
    .attr("x", x(8)+(padding-5)/2 - padding/2)
    .attr("y", yWake(sleepData[8][8])+maxBarHeight-padding*4+20+30+15)
    .text("median: 8:00am")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px");
  sleepSvg.append('circle')
    .attr("class", "nohover_sleep")
    .attr("cx", x(8)+(padding-5)/2)
    .attr("cy", yWake(sleepData[8][8])+maxBarHeight-padding*4+15-4)
    .attr("r", 4)
    .style('fill-opacity', 0)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);

  d3.select(svgClass).on("mousemove", function() {
  let offset = document.querySelector(svgClass).getBoundingClientRect();

    d3.selectAll(".nohover_sleep").attr("opacity", 0);

    if (d3.event.clientX - offset.x >= (padding*5.5)
    && d3.event.clientX - offset.x < thirdSvgWidth-(padding*5)
    && d3.event.clientY - offset.y > padding*2
    && d3.event.clientY - offset.y < thirdSvgHeight-(padding*2)) {

    // get cursor's current x
    let tempX = x.invert((d3.event.clientX - offset.x)-(5)).toFixed(0);

    // set tooltip attributes
    var tooltipText = "<b> time: " + tempX + ":00" + "</b>"
    + "<br /><b>sleep count: </b> " + sleepData[tempX][String(tempX)]
    + "<br /><b>wake count: </b>" + wakeData[tempX][String(tempX)];

    // add tooltip to screen
    updateToolTipText(tooltip, tooltipText, 0, 130);     

      // bc function acts on mousemove, check that hovered bar changes
      if (hoverX != tempX) {

        //if change, set old bars back to original colors
        d3.select("#sleepBar_" + hoverX)
        .transition()
        .style("fill", maroonColor);
        d3.select("#wakeBar_" + hoverX)
        .transition()
        .style("fill", blueColor);

        // set new bars to hover colo
        d3.select("#sleepBar_" + tempX)
        .transition()
        .style("fill", lightGreyColor);
        d3.select("#wakeBar_" + tempX)
          .transition()
          .style("fill", lightGreyColor);

        hoverX = tempX;
      }

    } else {
      d3.selectAll(".sleepBar")
        .transition()
        .style("fill", maroonColor);

      d3.selectAll(".wakeBar")
        .transition()
        .style("fill", blueColor);

      d3.selectAll(".nohover_sleep").attr("opacity", 1);

      hoverX = -1;

      hideTooltip(tooltip, "#sleepSvg_tooltip");
    }
  });
}