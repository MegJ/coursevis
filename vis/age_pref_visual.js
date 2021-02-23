function drawAgeChart(svgClass) {
    let offset = 80;

    let heatmapSvg = d3.select(svgClass)
      .append('g')
      .attr("transform", "translate(" + offset + ", 100)");

    //legend
    let legend = ["Women", "Men"];
    // create legend
    d3.select(svgClass).append("g")
    .selectAll(".key")
    .data(legend)
    .enter()
    .append("circle")
    .attr("class", "gender_options")
    .attr('id', function(d, i) { return "key_" + d;})
    .attr('cx', function(d, i) { return firstSvgWidth - (padding*2);})
    .attr('cy', function(d, i) { return 160 + i*30;})
    .attr('r', 8)
    .style('fill', '#f8f8f8')
    .style('stroke', darkTextColor)
    .style('stroke-width', 2)
    .on('click', function(d, i) {
        handleBarLegendChange(d, ".gender_options");
        heatmapSvg.selectAll("rect").remove();
        heatmapSvg.selectAll(".heatmap_notes").remove();
        heatmapSvg.selectAll(".total_text").remove();
        if(d == "Women"){
            drawMap(svgClass, heatmapSvg, true);
        } else {
            drawMap(svgClass, heatmapSvg, false);
        }
    });

    handleBarLegendChange("Women", ".gender_options");


    // create legend labels
    d3.select(svgClass).append("g")
    .selectAll('.key_labels')
    .data(legend)
        .enter()
        .append('text')
        .attr('x', function(d, i) { return firstSvgWidth-(padding*2) + 20;})
        .attr('y', function(d, i) { return 164 + i*30;})
        .text(function(d) {return d;})
        .style('fill', darkTextColor)
        .style("font-weight", "bold")
        .style("font-family", "Inconsolata")
        .style("font-size", "12px");
    
    drawMap(svgClass, heatmapSvg, true); //draw first time
}

function drawMap(svgClass, heatmapSvg, isFemale){

    let offset = 80;
    let gridSize = 32;
    let gridSpacing = 4;

    let heatmapData;
    let collegeTotal;
    let gender;

    if(isFemale){
        heatmapData = convertNestedMapToList(createFemaleAgePref()[0]);
        collegeTotal = createFemaleParticipantAgeMap()[0];
        gender = "women";
    } else {
        heatmapData = convertNestedMapToList(createMaleAgePref()[0]);
        collegeTotal = createMaleParticipantAgeMap()[0];
        gender = "men";
    }

    let ageList = [];
    for(let i = 17; i <= 35; i++ ){
        ageList.push(i);
    }
  
    let colorScale =  d3.scaleLinear([0, 40], ["white", coralColor])
    .interpolate(d3.interpolateRgb.gamma(0.5))
    .domain([0,  d3.max(heatmapData, function(d) {return d.total/collegeTotal[d.college]})]);

//add legend
    let legendColorScale = d3.scaleLinear([0, 40], ["white", coralColor])
    .interpolate(d3.interpolateRgb.gamma(0.5))
    .domain([0, 5]);

  
  d3.selectAll(".heatMapRect")
      .data([0, 1, 2, 3, 4, 5])
      .enter()
      .append('rect')
      .attr('class', ".heatMapLegend")
      .attr("id", function(d) {
        return "heatmap_" + d})
      .attr("y", 50)
      .attr("x", 100)
      .attr("rx", 40)
      .attr("ry", 40)
      .attr("width", 111)
      .attr("height", 111)
      .style("fill", "black");


    heatmapSvg.selectAll(".heatMapRect")
      .data([0, 1, 2, 3, 4, 5])
      .enter()
      .append('rect')
      .attr("class", "heatmap_rect")
      .attr("y", 300)
      .attr("x", function(d, i) { return d * gridSize + (13 * gridSize); })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", gridSize-gridSpacing)
      .attr("height", gridSize-gridSpacing)
      .style("fill", function(d) {;return legendColorScale(d);})  
    
      heatmapSvg.append("text")
      .attr("class", "legend_label")
      .attr("x", gridSize * 13)
      .attr("y", 315)
      .text("less")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
          .style("font-size", "12px");

              
      heatmapSvg.append("text")
      .attr("class", "legend_label")
      .attr("x", gridSize * 19)
      .attr("y", 315)
      .text("more")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
          .style("font-size", "12px");



    
    // let colorScale = d3.scaleSequential(d3.interpolateRdPu)
    //   .domain([0, 1.4 * d3.max(heatmapData, function(d) {return d.total/collegeTotal[d.college]})]);
  
    let tooltip = addTooltipToVis(svgClass + "_tooltip");
  
    heatmapSvg.selectAll(".heatMapRect")
      .data(heatmapData)
      .enter()
      .filter(function(d) {return (parseInt(d.personality) > 16 && parseInt(d.personality) <= 35)})
      .append('rect')
      .attr("class", "heatmap_rect")
      .attr("id", function(d) {return "heatmap_" + d.college + "_" + d.personality;})
      .attr("y", function(d, i) { return Math.floor(i/ageList.length) * gridSize })
      .attr("x", function(d, i) { return (i % ageList.length) * gridSize; })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", gridSize-gridSpacing)
      .attr("height", gridSize-gridSpacing)
      .style("fill", function(d) {;return colorScale(d.total/collegeTotal[d.college]);})  
      .on("mousemove", function (d) {
        var tooltipText = "<b>" + (Math.trunc(d.total / collegeTotal[d.college] * 100)) + "% of " + gender + " </b>"
         + "<b>age </b> " + d.college
          + "<br/> <b> would date</b> "
          + "<br/> <b>someone age</b> " + d.personality;

        updateToolTipText(tooltip, tooltipText, -20, 110);
        })
  
      .on("mouseout", function(d) {
        hideTooltip(tooltip, "testing");
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
        .range([0, gridSize*Object.keys(collegeTotal).length]);
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
      var x = d3.scaleBand().domain(ageList)
        .range([-1*(gridSpacing/2), (gridSize * ageList.length)-(gridSpacing/2)]);
      d3.select(svgClass)
        .append('g')
        .attr("transform", "translate(" + offset + ", 95)")
          .call(d3.axisTop(x))
        .style("font-family", "Inconsolata")
        .style("font-size", 12)
        .style("font-weight", "bold")
        .select(".domain").remove();

    if(!isFemale){ // call out note
        heatmapSvg.append("line")
        .attr("class", "heatmap_notes")
        .attr("x1", gridSize*1+2)
        .attr("x2", gridSize*2 - gridSpacing - 2)
        .attr("y1", gridSize*8)
        .attr("y2", gridSize*8)
        .style("stroke", darkTextColor)
        .style("stroke-width", 2);
        heatmapSvg.append("line")
        .attr("class", "heatmap_notes")
        .attr("x1", gridSize*1+2)
        .attr("x2", gridSize*2 - gridSpacing - 2)
        .attr("y1", gridSize*8 + 5)
        .attr("y2", gridSize*8 + 5)
        .style("stroke", darkTextColor)
        .style("stroke-width", 2);
        heatmapSvg.append("path")
        .attr("class", "heatmap_notes")
        .attr("d", "M " + (gridSize*1 + gridSize*2 - gridSpacing)/2 + " " + (gridSize*8 + 5)
            + "L " + (gridSize*1 + gridSize*2 - gridSpacing)/2 + " " + (gridSize*9.5)
            + "L" + (gridSize*3) + " " + (gridSize*9.5))
        .style("stroke", darkTextColor)
        .style("stroke-width", 2)
        .style("fill", "none");          
        heatmapSvg.append("text")
        .attr("class", "heatmap_notes")
        .attr("x", gridSize*3.5)
        .attr("y", gridSize*9.5)
        .text("33% of men ages 25 and older say")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
            .style("font-size", "12px");
        heatmapSvg.append("text")
        .attr("class", "heatmap_notes")
        .attr("x", gridSize*3.5)
        .attr("y", gridSize*9.5 + 15)
        .text("they would date an 18 year old.")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
            .style("font-size", "12px");
        heatmapSvg.append("text")
        .attr("class", "heatmap_notes")
        .attr("x", gridSize*3.5)
        .attr("y", gridSize*9.5 + 30)
        .text("That's a yikes from us")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
        .style("font-size", "12px");
    }

    // add disclaimer text 
    heatmapSvg.append("text")
      .attr("x", -80)
      .attr("y", -90)
      .text("*Participants who gave their gender as \"other\" are excluded due to small sample size.")
      .style("font-family", "Inconsolata")
      .style("font-size", "12px");
  }

  
