/** FUNCTIONS FOR GENERATING A BAR GRAPH **/
function getBarX(data, svgWidth, xd) {
  return d3.scaleBand()
    .domain(data.map(function(d) {return d[xd];}))
    .range([padding*5, svgWidth-(padding*5)])
    .paddingInner(0.4);
}

function getBarY(data, svgHeight) {
  return d3.scaleLinear()
    .domain([0, d3.max(data, function(d) {return +d.value;})])
    .range([svgHeight-padding*3, padding*3]);
}

function drawBars(svg, x, y, data, maxBarHeight, barWidth, color) {
  // create initial bars
  svg.selectAll(".bars")
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d) {return x(d.key);})
      .attr("y", function(d) {return y(0);})
      .attr("fill", function(d) {return color;})
      .attr("height", function(d) {return maxBarHeight - y(0);})
      .attr("width", x.bandwidth());

  // animate the bars
  svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", function(d) {return y(d.value);})
    .attr("height", function(d) {return maxBarHeight - y(d.value);})
    .delay(function(d, i) {return i*100;});
}

/* adds text for value on top of respective bar for a bar graph */
function drawTotalText(barSvg, x, y, data, barWidth, gutter) {
  // create total text above bar
    barSvg.selectAll(".total_text")
      .data(data)
    .enter()
      .append("text")
        .attr("class", "total_text")
        .text(function(d) {return d.value})
        .attr("x", function(d) {return x(d.key) + x.bandwidth()/2;})
      .attr("y", function(d) {return y(d.value) - gutter;})
      .style("text-anchor", "middle")
      .style("fill", darkTextColor)
      .style("font-weight", "bold")
      .style("font-family", "Inconsolata")
          .style("font-size", "12px")
          .style("opacity", 0);

    // animate text
    barSvg.selectAll(".total_text")
      .transition()
      .duration(900)
      .style("opacity", 1)
      .delay(function(d, i) {return i*100;});
}

/* used for wrapping text in bar graph axes labels */
// code adapted from https://bl.ocks.org/mbostock/7555321
function wrap(text, width) {
  text.each(function() {
  var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
  while (word = words.pop()) {
    line.push(word);
    tspan.text(line.join(" "));
    if (tspan.node().getComputedTextLength() > width) {
      line.pop();
      tspan.text(line.join(" "));
      line = [word];
      tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
    }
  }
  });
}

/* FUNCTIONS FOR HANDLING BAR GRAPH ANIMATIONS */

/* bar graph axes will need to be redrawn when the represented data changes */
function redrawXAxis(x, maxBarHeight, slantText = false) {
  d3.selectAll(".x_axis")
    .transition()
    .duration(0)
    .call(d3.axisBottom(x))
    .attr("transform", "translate(" + 0 + ", " + (maxBarHeight) + ")");

  d3.select(".domain").remove();
    
  if (slantText) {
    d3.selectAll(".x_axis .tick text")
          .attr("transform", "rotate(-25)")
          .style("text-anchor", "end");
  }
}

/* handles animation for bar graph when represented data changes */
function handleBarLegendChange(d, circle_id) {
  d3.selectAll(circle_id)
    .transition()
    .duration(500)
    .style("fill", "#f8f8f8");

  d3.select("#key_" + d)
    .transition()
    .duration(500)
    .style("fill", darkTextColor);
}

/* FUNCTIONS TO HANDLE TOOLTIP FUNCTIONALITY */
// height sleep personality

function addTooltipToVis(className) {
  return d3.select("body")
    .append("div")
    .attr("class", className)
    .style("padding", 10)
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .attr("white-space", "pre-line")
    .style("background-color", "#fbfbfb")
    .style("border-radius", "5px")
    .style("border", "1px solid #cdcdcd");
}

function updateToolTipText(tooltip, tooltipText, topOffset, leftOffset) {
  tooltip
    .html(tooltipText)
    .style("font-family", "Montserrat")
    .style("font-size", "12px")
    .style("visibility", "visible")
    .style("max-width", 150)
    .style("top", function() { return event.pageY - topOffset + "px"; })
    .style("left", function() { return event.pageX - leftOffset +"px"; });
}

function hideTooltip(tooltip, className) {
  tooltip.style("visibility", "hidden");
  d3.selectAll(className).remove();
}