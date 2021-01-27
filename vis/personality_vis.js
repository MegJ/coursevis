function drawHeatMap(svgClass) {
  let gridSize = 40;
  let gridSpacing = 5;

  let offset = 80;

  let heatmapSvg = d3.select(svgClass)
    .append('g')
    .attr("transform", "translate(" + offset + ", 100)");
  let heatmapData = convertNestedMapToList(createPersonalityByCollegeData());
  // console.log(heatmapData);

  let collegeTotal = {"aap": 124, "arts": 1649, "cals":1369, "engineering": 1331, "hotel": 311, "humec":480, "ilr": 354};

  let pList = {"INTJ": "Architect", "INTP": "Logician", "ENTJ": "Commander", "ENTP": "Debater", "INFJ": "Advocate", "INFP": "Mediator", "ENFJ": "Protagonist", "ENFP": "Campaigner", "ISTP": "Virtuoso", "ISFP": "Adventurer", "ESTP": "Entrepreneur", "ESFP": "Entertainer", "ISTJ": "Logistician", "ISFJ": "Defender", "ESTJ": "Executive", "ESFJ": "Consul"};

  let colorScale = d3.scaleSequential(d3.interpolateBlues)
    .domain([0, d3.max(heatmapData, function(d) {return d.total/collegeTotal[d.college]})]);

  let tooltip = d3.select("body")
    .append("div")
    .attr("class", svgClass + "_tooltip")
    .style("padding", 10)
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .attr("white-space", "pre-line")
    .style("background-color", "#fbfbfb")
    .style("border-radius", "5px")
    .style("border", "1px solid #cdcdcd");

  heatmapSvg.selectAll(".heatMapRect")
    .data(heatmapData)
    .enter()
    .append('rect')
    .attr("class", "heatmap_rect")
    .attr("id", function(d) {return "heatmap_" + d.college + "_" + d.personality;})
    .attr("y", function(d, i) { return Math.floor(i/16) * gridSize })
            .attr("x", function(d, i) { return (i % 16) * gridSize; })
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize-gridSpacing)
            .attr("height", gridSize-gridSpacing)
            .style("fill", function(d) {;return colorScale(d.total/collegeTotal[d.college]);})
            .on("mousemove", function (d) {
              var tooltipText = "<b>" + d.personality + " | " + pList[d.personality] + "</b>"
                + "<br/> <b>college:</b> " + d.college
                + "<br/> <b>total:</b> " + d.total;

              // add tooltip to screen
        tooltip
           .html(tooltipText)
           .style("font-family", "Montserrat")
           .style("font-size", "12px")
           .style("visibility", "visible")
           .style("max-width", 150)
           .style("top", function() { return event.pageY + 20 + "px"; })
           .style("left", function() { 
             if (d3.event.clientX < 500) {
               return event.pageX;
             } else {
               return event.pageX - 110;
             }
           });

         tooltip.style("visibility", "visible");
         })
            .on("mouseout", function(d) {
              tooltip.style("visibility", "hidden");
            });

        // hide notes when tooltip is showing
        d3.select(svgClass).on("mousemove", function () {
          let wOffset = document.querySelector(svgClass).getBoundingClientRect();

       if (d3.event.clientX - wOffset.x >= (offset)
        && d3.event.clientX - wOffset.x < offset+ gridSize*16
        && d3.event.clientY - wOffset.y > 100
        && d3.event.clientY - wOffset.y < 100+gridSize*7) {
         d3.selectAll(".heatmap_notes").style("visibility", "hidden");
       } else {
         d3.selectAll(".heatmap_notes").style("visibility", "visible");
       }
        });

        // draw y-axis
        var y = d3.scaleBand().domain(Object.keys(collegeTotal))
          .range([0, gridSize*7]);
        d3.select(svgClass)
          .append('g')
          .attr("class", "y_axis")
          .attr("transform", "translate(" + (offset-5) + ", 100)")
            .call(d3.axisLeft(y).ticks(7).tickSize(0))
        .style("font-family", "Inconsolata")
        .style("font-size", 12)
        .style("font-weight", "bold")
        .select(".domain").remove();

    // draw x-axis
    var x = d3.scaleBand().domain(Object.keys(pList))
      .range([-1*(gridSpacing/2), (gridSize * 16)-(gridSpacing/2)]);
    d3.select(svgClass)
          .append('g')
          .attr("transform", "translate(" + offset + ", 95)")
            .call(d3.axisTop(x))
        .style("font-family", "Inconsolata")
        .style("font-size", 12)
        .style("font-weight", "bold")
        .select(".domain").remove();

    // most common mbti note
    heatmapSvg.append("line")
      .attr("class", "heatmap_notes")
      .attr("x1", gridSize*10+2)
      .attr("x2", gridSize*11 - gridSpacing - 2)
      .attr("y1", gridSize*7)
      .attr("y2", gridSize*7)
      .style("stroke", darkTextColor)
      .style("stroke-width", 2);
    heatmapSvg.append("line")
      .attr("class", "heatmap_notes")
      .attr("x1", gridSize*10+2)
      .attr("x2", gridSize*11 - gridSpacing - 2)
      .attr("y1", gridSize*7 + 5)
      .attr("y2", gridSize*7 + 5)
      .style("stroke", darkTextColor)
      .style("stroke-width", 2);
    heatmapSvg.append("path")
      .attr("class", "heatmap_notes")
      .attr("d", "M " + (gridSize*10 + gridSize*11 - gridSpacing)/2 + " " + (gridSize*7 + 5)
        + "L " + (gridSize*10 + gridSize*11 - gridSpacing)/2 + " " + (gridSize*7.5))
      .style("stroke", darkTextColor)
      .style("stroke-width", 2)
      .style("fill", "none");
    heatmapSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", gridSize*9.9)
      .attr("y", gridSize*7.9)
      .text("most common mbti type is estp at 28%")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");
    heatmapSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", gridSize*9.9)
      .attr("y", gridSize*8.2)
      .text("however we're not surprised by this since")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");
    heatmapSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", gridSize*9.9)
      .attr("y", gridSize*8.5)
      .text("estp is also known as \"the entrepreneur\"")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");

    // second most common mbti note
    heatmapSvg.append("line")
      .attr("class", "heatmap_notes")
      .attr("x1", gridSize*8+2)
      .attr("x2", gridSize*9 - gridSpacing - 2)
      .attr("y1", gridSize*7)
      .attr("y2", gridSize*7)
      .style("stroke", darkTextColor)
      .style("stroke-width", 2);
    heatmapSvg.append("line")
      .attr("class", "heatmap_notes")
      .attr("x1", gridSize*8+2)
      .attr("x2", gridSize*9 - gridSpacing - 2)
      .attr("y1", gridSize*7 + 5)
      .attr("y2", gridSize*7 + 5)
      .style("stroke", darkTextColor)
      .style("stroke-width", 2);
    heatmapSvg.append("path")
      .attr("class", "heatmap_notes")
      .attr("d", "M " + (gridSize*8 + gridSize*9 - gridSpacing)/2 + " " + (gridSize*7 + 5)
        + "L " + (gridSize*8 + gridSize*9 - gridSpacing)/2 + " " + (gridSize*7.5)
        + "L " + (gridSize*7.6) + " " + (gridSize*7.5))
      .style("stroke", darkTextColor)
      .style("stroke-width", 2)
      .style("fill", "none");
     heatmapSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", gridSize*4.5)
      .attr("y", gridSize*7.5)
      .text("second most common")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");
    heatmapSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", gridSize*4.5)
      .attr("y", gridSize*7.8)
      .text("mbti type is istp")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");
    heatmapSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", gridSize*4.5)
      .attr("y", gridSize*8.1)
      .text("(the virtuoso) at 15%")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");

    // learn more note
    heatmapSvg.append("text")
      .attr("x", 0)
      .attr("y", gridSize*9.5)
      .html("*learn more about the 16 mbti type <a href=\"https:\/\/www.16personalities.com\/personality-types\" style=\"text-decoration: underline;\">here<\/a>")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");
       
}