function drawTopWordsChart(svgClass, isDescribeSelf, uniqueKey) {
  let chartWidth = 900;
  let chartHeight = 800;
  let maleData = isDescribeSelf ? createMaleWordsForSelf() : createMaleWordsForPartner();
  let femaleData = isDescribeSelf ? createFemaleWordsForSelf() : createFemaleWordsForPartner();

  let wordSvg = d3.select(svgClass);
  let catData = isDescribeSelf ? ["Career", "Agreeableness", "Extraversion"] : ["Career", "Physical", "Agreeableness", "Extraversion"];
  
  // add lines 
  wordSvg.append("line")
    .attr("x1", padding*8)
    .attr("x2", padding*8)
    .attr("y1", padding*6)
    .attr("y2", chartHeight-(padding*6))
    .style("stroke", lightGreyColor)
    .style("stroke-width", 2);
  wordSvg.append("line")
    .attr("x1", chartWidth-padding*8)
    .attr("x2", chartWidth-padding*8)
    .attr("y1", padding*6)
    .attr("y2", chartHeight-(padding*6))
    .style("stroke", lightGreyColor)
    .style("stroke-width", 2);

  // add categories to svg
  wordSvg.selectAll(".categories")
    .data(["Career", "Agreeableness", "Extraversion"]).enter()
    .append("text")
      .attr("class", "categories"+uniqueKey)
      .attr("x", chartWidth/2)
      .attr("y", (d, i) => isDescribeSelf ? (chartHeight-(padding*12))/4*(i+1)+padding*6 : (chartHeight-(padding*12))/4*(i+1)+padding*6)
      .text((d) => d)
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("fill", (d,i) => (i==0) ? darkTextColor : lightGreyColor)
      .style("font-size", "25px")
      .style("cursor", "pointer")
      .on("mouseover", function(d) {
        d3.selectAll(".categories"+uniqueKey).style("fill", lightGreyColor);
        d3.select(this).style("fill", darkTextColor);
        drawCircles(wordSvg, femaleData[d], maleData[d], uniqueKey);
      });

    drawCircles(wordSvg, femaleData["Career"], maleData["Career"], uniqueKey);

  // add header
  wordSvg.append("text")
    .attr("x", chartWidth/2)
    .attr("y", 50)
    .text(isDescribeSelf ? "Top Adjectives Used to Describe Self" : "Top Adjectives Used to Describe Ideal Partner")
    .style("fill", darkTextColor)
    .style("text-anchor", "middle")
    .style("alignment-baseline", "middle")
    .style("font-family", "Inconsolata")
    .style("font-size", "25px");

  // add legend
  wordSvg.append("line")
    .attr("x1", chartWidth-padding*1.5)
    .attr("x2", chartWidth-padding*1.5)
    .attr("y1", chartHeight-padding*2.5+15)
    .attr("y2", chartHeight-(padding*2.5)-65)
    .style("stroke", lightGreyColor)
    .style("stroke-width", 1);
  wordSvg.append("circle")
    .attr("r", 20)
    .attr("cx", chartWidth-padding*1.5)
    .attr("cy", chartHeight-padding*2.5-25)
    .style("fill", lightGreyColor)
    .style("opacity", 0.5)
    .style("stroke", darkTextColor)
    .style("stroke-width", 2)
  wordSvg.append("text")
    .text("rank →")
    .attr("transform", "translate("+ (chartWidth-padding/4) +","+ (chartHeight-padding*2.5-40) +")rotate(90)")
    .style("fill", darkTextColor)
    .style("text-anchor", "middle")
    .style("alignment-baseline", "middle")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  wordSvg.append("text")
    .attr("x", (chartWidth-padding*4.5))
    .attr("y", chartHeight-padding*2.5)
    .text("radius = frequency ↗")
    .style("fill", darkTextColor)
    .style("text-anchor", "middle")
    .style("alignment-baseline", "middle")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");

  // add annotation for partner vis
  if (!isDescribeSelf) {
    // The most common "physical" adjective used to describe an ideal male partner was \"athletic\" and an ideal female partner was \"cute\"
    wordSvg.append("text")
      .attr("x", padding)
      .attr("y", chartHeight-60)
      .text("The most common \"physical\" adjective used")
      .style("fill", darkTextColor)
      .style("font-weight", "bold")
      .style("text-anchor", "start")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-size", "12px");
    wordSvg.append("text")
      .attr("x", padding)
      .attr("y", chartHeight-45)
      .text("to describe an ideal male partner was \"athletic\" ")
      .style("fill", darkTextColor)
      .style("font-weight", "bold")
      .style("text-anchor", "start")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-size", "12px");
    wordSvg.append("text")
      .attr("x", padding)
      .attr("y", chartHeight-30)
      .text("and an ideal female partner was \"cute\"")
      .style("fill", darkTextColor)
      .style("font-weight", "bold")
      .style("text-anchor", "start")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-size", "12px");
  }

}

function drawCircleSet(svg, data, isFemale, uniqueKey) {
  let chartHeight = 800;
  let chartWidth = 900;
  let y = d3.scaleLinear()
    .domain([1, 20])
    .range([padding*7, chartHeight-(padding*7)]);

  let r = d3.scaleSqrt()
    .domain([40, 1300])
    .range([padding/4, padding*4.25]);

  // draw circles for female data
  svg.selectAll(".femaleCircles")
    .data(data).enter()
    .append("circle")
      .attr("class", "dynamic"+uniqueKey)
      .attr("r", d => r(d.count))
      .attr("cx", isFemale ? padding*8 : (chartWidth - padding*8))
      .attr("cy", d => y(d.position))
      .style("fill", isFemale ? coralColor : blueColor)
      .style("opacity", 0.4)
      .on("mouseover", function(d) {
        // enlarge selected circle and change opacity
        d3.select(this)
          .transition()
          .duration(500)
          .style("opacity", 0.9)
          .attr("r", r(d.count)+5);

        // add text for frequency count
        svg.append("text")
          .attr("class", "dynamic"+uniqueKey)
          .attr("id", "temp_text")
          .attr("x", isFemale ? (padding*8 + r(d.count)+20) : (chartWidth - padding*8 - r(d.count) - 20))
          .attr("y", y(d.position))
          .text("count: " + d.count)
          .style("fill", darkTextColor)
          .style("text-anchor", isFemale ? "start" : "end")
          .style("alignment-baseline", "middle")
          .style("font-family", "Inconsolata")
          .style("font-size", "12px");
      })
      .on("mouseout", function(d) {
        // return circle to normal
        d3.select(this)
          .transition()
          .duration(500)
          .style("opacity", 0.5)
          .attr("r", r(d.count))

        d3.select("#temp_text").remove()
      })

  // add text for adjectives
  svg.selectAll(".femaleText")
    .data(data).enter()
    .append("text")
      .attr("class", "dynamic"+uniqueKey)
      .attr("x",  d => isFemale ? (padding*8 - r(d.count)-15) : (chartWidth - padding*8 + r(d.count) + 15))
      .attr("y", d => y(d.position))
      .text(d => d.adjective)
      .style("fill", darkTextColor)
      .style("font-weight", "bold")
      .style("text-anchor", isFemale ? "end" : "start")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-size", "12px");

  // add header for circle set
  svg.append("text")
      .attr("x",  d => isFemale ? (padding*8) : (chartWidth - padding*8))
      .attr("y", d => y(23))
      .text(isFemale ? "Female" : "Male")
      .style("fill", darkTextColor)
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .style("font-family", "Inconsolata")
      .style("font-size", "20px");
}

function drawCircles(svg, femaleData, maleData, uniqueKey) {
  d3.selectAll(".dynamic"+uniqueKey).remove();
  drawCircleSet(svg, femaleData, true, uniqueKey);
  drawCircleSet(svg, maleData, false, uniqueKey);
}