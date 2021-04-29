function  drawCoursesChart(svgClass, classes_data) {
    let innerRadius = 300;
    let outerRadius = 500;
    let svg = d3.select(svgClass);
    let pieClass = "path_courses";
    let yearDivisions = findYearDivisions(classes_data);

    xOffset = 500;
    yOffset = 550;

    let data = classes_data
    
    let tooltip = addTooltipToVis("heightSvg_tooltip");


    let colors = ["#F2A65A", "#F58549", "#EEC170", "#D496A7", "#8DF7BB", "#78E0DC", "#8EEDF7", "#A1CDF1"]
    colors.reverse();
  
    let pie = d3.pie()
      .value(function(d) { return d.value; })
      .sort(null);
  
    let pie2 = d3.pie()
      .value(function(d) { return d.value; })
      .padAngle(.02)
      .sort(null);

    let radiusScale = d3.scaleSqrt()
      .domain([0, 4])
      .range([innerRadius, outerRadius]);

    let creditsScale = d3.scaleLinear()
      .domain([0, 4])
      .range([60, 10])
  
    let newArc = d3.arc()
      .innerRadius(innerRadius+7.5)
      .outerRadius(function(d){
        let class_number = d.data.Number;
        class_number = parseInt(class_number.substring(0, 1));
        return radiusScale(class_number) + 20;
      })
  
    let arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(function(d){
        let class_number = d.data.Number;
        class_number = parseInt(class_number.substring(0, 1));
        return radiusScale(class_number);
      })
    
    let innerArc = d3.arc()
      .innerRadius(innerRadius - 50)
      .outerRadius(innerRadius - 20);
    
    let term_arc = d3.arc()
      .innerRadius(innerRadius - 80)
      .outerRadius(innerRadius - 90);

    //draw pie segments    
    svg.datum(data).selectAll("." + pieClass)
        .data(pie)
    .enter().append("path")
      .attr("class", pieClass)
      .attr("id", function(d) {
        return pieClass + "_" + parseInt(d.data.key);
      })
      .attr("fill", function(d) { 
        if(d.data.Category == "Engineering Distribution"){
          return colors[0]
        } else if (d.data.Category == "CS") {
          return colors[1]
        } else if (d.data.Category == "CS distribution" ){
          return colors[2]
        } else if (d.data.Category == "Liberal Arts Distribution"){
          return colors[3]
        } else if (d.data.Category == "PE"){
          return colors[4]
        } else if (d.data.Category == "Arts distribution"){
          return colors[5]
        } else if (d.data.Category == "English"){
          return colors[6]
        } else if (d.data.Category == "Language"){
          return colors[7]
        }})
      .attr("d", arc)
      .attr("transform", "translate(" + xOffset + "," + yOffset + ")")
      .on("mouseover", function(d) {
        var name = d.data.Name;
        d3.select(this)
          .transition()
          .duration(300)
          .attr("d", newArc);
          var tooltipText = "<b>" + d.data.Prefix + " " + d.data.Number + " " + " </br>" + name;
   
         updateToolTipText(tooltip, tooltipText, -20, 110);
      })
      .on("mouseout", function() {
        hideTooltip(tooltip, "testing");

        svg.select("." + pieClass + "_text")
          .text("");

          svg.select("." + pieClass + "_activity_text")
          .text("");
  
        d3.select(this)
          .transition()
          .duration(250)
          .attr("d", arc);
      });


  // draw year divisions
  svg.datum(yearDivisions).selectAll("." + "yearDivisions")
  .data(pie2)
  .enter().append("path")
    .attr("class", pieClass)
    .attr("id", function(d) {
      return "yearDivisions_" + parseInt(d.data.key);
    })
    .attr("transform", "translate(" + xOffset + "," + yOffset + ")")
    .attr("fill", lightGreyColor)
    .attr("d", term_arc);

  //add year division labels
  svg.datum(yearDivisions).selectAll("#yearDivisions_label")
        .data(pie).enter()
        .append('text')
            .attr('dy', '.35em')
            .text(function(d) { return d.data.key;})
            .attr('transform', function(d) {
                var pos = term_arc.centroid(d);
                var x = pos[0];
                var y = pos[1];
                var hyp = Math.sqrt(x*x + y*y);
                return 'translate(' + (xOffset + x/hyp*(innerRadius-100)) + "," + (yOffset + y/hyp*(innerRadius-100))+ ')';
            })
            .style('text-anchor', function(d) {
                return (midAngle(d)) < Math.PI ? 'end' : 'start';
            })
            .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");


    //add radial lines
      svg.datum(data).selectAll("#" + pieClass + "_label")
      .data(pie).enter()
        .append('path')
          .attr('d', function(d) {
            var pos = innerArc.centroid(d);
            var x = pos[0];
            var y = pos[1];
            var hyp = Math.sqrt(x*x + y * y);
            var startx = Math.round(xOffset + x/hyp*(innerRadius-10))
            var starty = Math.round(yOffset + y/hyp*(innerRadius - 10))
            var endx = Math.round(xOffset + x/hyp*(innerRadius-60))
            var endy = Math.round(yOffset + y/hyp*(innerRadius - 60))
            return ("M " + startx + " " + starty + "L " + endx + " " + endy)
          })
          .style("stroke", lightGreyColor)
          .style("stroke-width", 2)
          .style("fill", "none");

    //add circles
    svg.datum(data).selectAll("#" + pieClass + "_label")
    .data(pie).enter()
      .append('circle')
          .attr('cx', function(d) {
            var pos = innerArc.centroid(d);
            var x = pos[0];
            var y = pos[1];
            var hyp = Math.sqrt(x*x + y * y);
            var n = (Math.round(xOffset + x/hyp*(innerRadius-creditsScale(parseInt(d.data.credits)))));
            return (Math.round(xOffset + x/hyp*(innerRadius-creditsScale(parseInt(d.data.credits)))));
          })
          .attr('cy', function(d) {
            var pos = innerArc.centroid(d);
            var x = pos[0];
            var y = pos[1];
            var hyp = Math.sqrt(x*x + y * y);
            return (Math.round(yOffset + y/hyp*(innerRadius-creditsScale(parseInt(d.data.credits)))));
          })
          .attr('r', "5")
          .attr("fill", function(d) { 
            if(d.data.Category == "Engineering Distribution"){
              return colors[0]
            } else if (d.data.Category == "CS") {
              return colors[1]
            } else if (d.data.Category == "CS distribution" ){
              return colors[2]
            } else if (d.data.Category == "Liberal Arts Distribution"){
              return colors[3]
            } else if (d.data.Category == "PE"){
              return colors[4]
            } else if (d.data.Category == "Arts distribution"){
              return colors[5]
            } else if (d.data.Category == "English"){
              return colors[6]
            } else if (d.data.Category == "Language"){
              return colors[7]
            }})
        .style('stroke', darkTextColor)
        .style('stroke-width', 1);
      
         
    //add class level labels
    svg.append("text")
        .attr("class", "political_label")
        .attr("x", xOffset)
        .attr("y", yOffset - outerRadius - 8)
        .text("4000 level")
        .style("font-family", "Inconsolata")
        .style("alignment-baseline", "middle")
        .style("font-weight", "bold")
        .style("font-size", "14px");

      svg.append("text")
      .attr("class", "political_label")
      .attr("x", xOffset)
      .attr("y", yOffset - outerRadius + 30 - 8)
      .text("3000 level")
      .style("font-family", "Inconsolata")
      .style("alignment-baseline", "middle")
      .style("font-weight", "bold")
      .style("font-size", "14px");

      svg.append("text")
      .attr("class", "political_label")
      .attr("x", xOffset)
      .attr("y", yOffset - outerRadius + 60 - 8)
      .text("2000 level")
      .style("font-family", "Inconsolata")
      .style("alignment-baseline", "middle")
      .style("font-weight", "bold")
      .style("font-size", "14px");

    svg.append("text")
      .attr("class", "political_label")
      .attr("x", xOffset)
      .attr("y", yOffset - outerRadius + 100 - 8)
      .text("1000 level")
      .style("font-family", "Inconsolata")
      .style("alignment-baseline", "middle")
      .style("font-weight", "bold")
      .style("font-size", "14px");

      svg.append("circle")
      .attr('cx', xOffset)
      .attr('cy', yOffset)
      .attr("r", outerRadius)
      .attr("stroke", lightGreyColor)
      .style("fill", "none")
      .style('stroke-width', '5px')
      .style('stroke-dasharray', '6, 5');


      svg.append("circle")
      .attr('cx', xOffset)
      .attr('cy', yOffset)
      .attr("r", outerRadius - 30)
      .attr("stroke", lightGreyColor)
      .style("fill", "none")
      .style('stroke-width', '5px')
      .style('stroke-dasharray', '6, 5');


      svg.append("circle")
      .attr('cx', xOffset)
      .attr('cy', yOffset)
      .attr("r", outerRadius - 60)
      .attr("stroke", lightGreyColor)
      .style("fill", "none")
      .style('stroke-width', '5px')
      .style('stroke-dasharray', '6, 5');

    svg.append("circle")
      .attr('cx', xOffset)
      .attr('cy', yOffset)
      .attr("r", outerRadius - 100)
      .attr("stroke", lightGreyColor)
      .style("fill", "none")
      .style('stroke-width', '5px')
      .style('stroke-dasharray', '6, 5');

   //add legend
   let labels = ["Engineering Distribution", "Computer Science", "CS Distribution",
   "Liberal Studies", "Physical Education", "A&S Distribution", "English", "Foreign Language"
  ]
   svg.append("g")
       .selectAll("year_squares")
       .data(labels)
       .enter()
       .append("circle")
       .attr("class", "year_squares")
       .attr('id', function(d, i) { return "key_" + d;})
       .attr("cx", xOffset + outerRadius)
       .attr("cy", function(d, i) {return 80 + i * 30;})
       .attr("r", 10)
       .style("fill", function (d, i) {
           return colors[i];

       })
       .style('stroke', darkTextColor)
       .style('stroke-width', 2);
   
   //create legend labels
   d3.select(svgClass).append("g")
   .selectAll('.key_labels')
   .data(labels)
       .enter()
       .append('text')
       .attr('x', xOffset + outerRadius+ 20)
       .attr('y', function(d, i) { return 90 + i*30;})
       .text(function(d) {return d;})
       .style('fill', darkTextColor)
       .style("font-weight", "bold")
       .style("font-family", "Inconsolata")
       .style("font-size", "12px");

      svg.append("text")
       .attr("class", "political_label")
       .attr("x", 20)
       .attr("y", 20)
       .text("how to read:")
       .style('fill', darkTextColor)
       .style("font-family", "Inconsolata")
       .style("font-weight", "bold")
       .style("font-family", "Inconsolata")
       .style("font-size", "15px");

       svg.append("text")
       .attr("class", "political_label")
       .attr("x", 0)
       .attr("y", 70)
       .text("# of credits")
       .style('fill', darkTextColor)
       .style("font-family", "Inconsolata")
       .style("font-weight", "bold")
       .style("font-family", "Inconsolata")
       .style("font-size", "15px");

      let credits = [1, 2, 3, 4];
      svg.append("g")
      .selectAll("credits_legend")
      .data(credits)
        .enter()
        .append("path")
        .attr('d', function(d) {
            startX = 90 + 15 * d;
            return ("M " + startX + " 40 L " + startX + " 90")})
        .style("stroke", lightGreyColor)
        .style("stroke-width", 2)
        .style("fill", "none");

      svg.append("g")
      .selectAll("credits_legend")
      .data(credits)
        .enter()
        .append("circle")
        .attr('cx', function(d){
          return (90 + 15 * d);
        })
        .attr('cy', function(d) {
          return (30 + creditsScale(d));
        })
        .attr('r', 5)
        .attr('fill', colors[0])
        .style('stroke', darkTextColor)
        .style('stroke-width', 1);

      svg.append("g")
        .selectAll("credits_legend")
        .data(credits)
          .enter()
          .append("text")
          .attr('x', function(d) {return (90 + 15 * d)})
          .attr('y', 110)
          .text(function(d) {return d;})
          .style('fill', darkTextColor)
          .style("font-weight", "bold")
          .style("font-family", "Inconsolata")
          .style("font-size", "12px");
  

    //addd legend for credits
    
  }
  
  function findYearDivisions(data){
    let term_list = [];
    var courses_taken = 0;
    let term = "";
    for(var i = 0; i < data.length; i++){
      var current_term = data[i].term;
      if(current_term != term || i == (data.length - 1)){
        if(courses_taken > 0){
          term_list.push({
            "key": term,
            "value": courses_taken
          })
        }
        courses_taken = 0
        term = current_term
      }
      courses_taken += 1;
    }
    return (term_list); 
  }

  function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

  /* FUNCTIONS TO HANDLE TOOLTIP FUNCTIONALITY */
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
  
  