function  drawPoliticalDonut(svgClass) {
    let innerRadius = 130;
    let outerRadius = 380;
    let svg = d3.select(svgClass);
    let pieClass = "path_political";

    xOffset = 380;
    yOffset = 425;
  
    let data = createPoliticalPreferences();
  
    let colors = ["#5CD3FF", blueColor, "#8BD0F0", "#9CC3E0", "#ADB7D1", "#BDAAC1", "#DE91A2", "#EF8592", coralColor, "#FF5C67"];
  
    let pie = d3.pie()
      .value(function(d) { return d.value; })
      .startAngle(-90 * (Math.PI/180))
      .endAngle(90 * (Math.PI/180))
      .sort(null);
  

    let radiusScale = d3.scaleSqrt()
      .domain([0, 5])
      .range([0, outerRadius]);
  
    let newArc = d3.arc()
      .innerRadius(innerRadius+7.5)
      .outerRadius(d => radiusScale(d.data.activity) + 7.5);
  
    let arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(d => radiusScale(d.data.activity));

    let textArc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(d => radiusScale(d.data.activity));

    // add total text in the middle of pie
    svg.append("text")
      .datum(data)
      .attr("class", pieClass + "_text")
      .attr("x", xOffset)
      .attr("y", yOffset - 40)
      .style("fill", darkTextColor)
      .style("alignment-baseline", "middle")
      .style("text-anchor", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
            .style("font-size", 50);
        
    //add political activity text
    svg.append("text")
        .datum(data)
        .attr("class", pieClass + "_activity_text")
        .attr("x", xOffset)
        .attr("y", yOffset)
        .style("fill", darkTextColor)
        .style("alignment-baseline", "middle")
        .style("text-anchor", "middle")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
        .style("font-size", 16);
  
    // draw pie segments
    svg.datum(data).selectAll("." + pieClass)
        .data(pie)
    .enter().append("path")
      .attr("class", pieClass)
      .attr("id", function(d) {
        return pieClass + "_" + d.data.key;
      })
      .attr("fill", function(d, i) { return colors[i]; })
      .attr("d", arc)
      .attr("transform", "translate(" + xOffset + "," + yOffset + ")")
      .on("mouseover", function(d) {
        svg.select("." + pieClass + "_text")
          .text(d.data.value)

        
        svg.select("." + pieClass + "_activity_text")
          .text("Political activeness: " + Math.round(d.data.activity * 10) / 10)

        d3.select(this)
          .transition()
          .duration(300)
          .attr("d", newArc);
      })
      .on("mouseout", function() {
        svg.select("." + pieClass + "_text")
          .text("");

          svg.select("." + pieClass + "_activity_text")
          .text("");
  
        d3.select(this)
          .transition()
          .duration(250)
          .attr("d", arc);
      });

    // add x axis label
    svg.append("text")
      .attr("x", xOffset - 270)
      .attr("y", yOffset + 15)
      .text("← political activeness")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
      .style("font-size", "12px");
  
    // add pie segment labels
    svg.datum(data).selectAll("#" + pieClass + "_label")
        .data(pie).enter()
        .filter(function(d) {return (parseInt(d.data.key) <= 9)})
        .append('text')
              .attr('dy', '.35em')
              .text(function(d) { return d.data.key;})
              .attr('transform', function(d) {
                  var pos = textArc.centroid(d);
                  var x = pos[0];
                  var y = pos[1];
                  var hyp = Math.sqrt(x*x + y*y);
                  return 'translate(' + (xOffset + x/hyp*(outerRadius)) + "," + (yOffset + y/hyp*(outerRadius - 50))+ ')';
              })
              .style('text-anchor', function(d) {
                  return (midAngle(d)) < Math.PI ? 'start' : 'end';
              })
              .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
          .style("font-size", "12px");

    svg.append("line")
          .attr("class", "political_label")
          .attr("x1", outerRadius + xOffset - 50)
          .attr("x2", outerRadius  + xOffset + 20)
          .attr("y1", yOffset)
          .attr("y2", yOffset)
          .style("stroke", darkTextColor)
          .style("stroke-width", 2);
    svg.append("text")
          .attr("class", "political_label")
          .attr("x", outerRadius + xOffset + 20)
          .attr("y", yOffset + 3)
          .text("10")
          .style("font-family", "Inconsolata")
          .style("font-weight", "bold")
              .style("font-size", "12px");

    drawFunFact(svgClass, 50, 50, 30, "43");

    svg.append("text")
        .attr("class", "political_label")
        .attr("x", 100)
        .attr("y", 50-7.5)
        .text("percentage of participants listed")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
            .style("font-size", "12px");
    svg.append("text")
        .attr("class", "political_label")
        .attr("x", 100)
        .attr("y", 50+7.5)
        .text("politics as a dealbreaker")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
            .style("font-size", "12px");
  }
  
  function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }
  
  