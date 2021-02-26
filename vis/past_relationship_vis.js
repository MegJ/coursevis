function drawRelationshipInfographic(svgClass) {
    let innerCircle = 60;
    let innerRadius = 70;
    let outerRadius = 90;

    let padding = 35;

    let pollSvg = d3.select(svgClass);
  
    // console.log(average_number_people_dated);
    // let mealData = convertDemoDataToMap(getSummary(jsonData, "meal", "survey"));
    // let startOverData = convertDemoDataToMap(getSummary(jsonData, "startover", "survey"));
    // let timeMoneyData = convertDemoDataToMap(getSummary(jsonData, "timeormoney", "survey"));
    // let qualityData = convertDemoDataToMap(getSummary(jsonData, "quality", "survey"));
  
    // addPollText(pollSvg, 200, 200, outerRadius,"Who would you most want", "to have a meal with?");
    
    addPollText(pollSvg, outerRadius + padding, 450, outerRadius,"Percentage of people who","have been in a relationship", "at least one person");
    createCircleInfographic(innerRadius, outerRadius, innerCircle, pollSvg, "never_dated", percent_of_people_never_dated, outerRadius + padding, 150, [coralColor, lightGreyColor], percent_of_people_never_dated + "%");
   
    addPollText(pollSvg, outerRadius * 3  + padding * 2, 450, outerRadius,"Median length of longest", "relationship in months");
     createCircleInfographic(innerRadius, outerRadius, innerCircle, pollSvg, "median_relationship", 0, 2 * padding + outerRadius * 3, 150, [blueColor, lightGreyColor], median_relationship_length, false);
   
    createCircleInfographic(innerRadius, outerRadius, innerCircle, pollSvg, "dated_longer_than_one_year", percent_of_relationships_longer_than_one_year, outerRadius * 5 + padding * 3, 150, [blueColor, lightGreyColor], percent_of_relationships_longer_than_one_year + "%");
    addPollText(pollSvg, outerRadius * 5  + padding * 3, 450, outerRadius,"Percentage of relationships", "that were longer than 1 year");

    addPollText(pollSvg, outerRadius * 7  + padding * 4, 450, outerRadius,"the average number of", "previous relationships");
    createCircleInfographic(innerRadius, outerRadius, innerCircle, pollSvg, "average_people_dated", 0, outerRadius * 7 + padding * 4, 150, [blueColor, lightGreyColor], average_number_people_dated, false);

    drawFunFact(svgClass, 40, 380, 20, "36%", blueColor);

    pollSvg.append("text")
        .attr("x", 65)
        .attr("y", 380)
        .text("the percent of engineers who have never dated")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
        .style("alignment-baseline", "middle")
        .style("font-size", "12px");

        pollSvg.append("text")
        .attr("x", 65)
        .attr("y", 395)
        .text("(the highest percent across all colleges!)")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
        .style("alignment-baseline", "middle")
        .style("font-size", "12px");



  }
  
  function createCircleInfographic(innerRadius, outerRadius, innerCircle, svg, pieClass, percent, xOffset, yOffset, colors, text, is_percent = true, font_size=40) {
      
    // let colors = [ coralColor, blueColor,greenColor,yellowColor,  pinkColor,purpleColor,  ];


    let data = [percent, 100 - percent];
  
    let pie = d3.pie()
      .value(function(d) {return d})
      .sort(null);
  
    let arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
  
    let newArc = d3.arc()
      .innerRadius(innerRadius+7.5)
      .outerRadius(outerRadius+7.5);	
  
    let textArc = d3.arc()
      .innerRadius(innerRadius+10)
      .outerRadius(outerRadius+10);
  
    // add total text in the middle of pie
    svg.append("text")
      .datum(data)
      .attr("class", pieClass + "_text")
      .attr("x", xOffset)
      .attr("y", yOffset)
      .style("fill", darkTextColor)
      .style("alignment-baseline", "middle")
      .style("text-anchor", "middle")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
            .style("font-size", 50);
  
          // draw pie segments
    if(is_percent){
        svg.datum(data).selectAll("." + pieClass)
            .data(pie)
        .enter().append("path")
        .attr("class", pieClass)
        .attr("id", function(d) {
            return pieClass + "_" + d.data.key;
        })
        .attr("fill", function(d, i) { return colors[i]; })
        .attr("d", arc)
        .attr("transform", "translate(" + xOffset + "," + yOffset + ")");
    
        // add pie segment labels
        svg.datum(data).selectAll("#" + pieClass + "_label")
            .data(pie).enter()
            .append('text')
                .attr('dy', '.35em')
                .text(function(d) { return d.data.key;})
                .attr('transform', function(d) {
                    var pos = textArc.centroid(d);
                    var x = pos[0];
                    var y = pos[1];
                    var hyp = Math.sqrt(x*x + y*y);
                    return 'translate(' + (xOffset + x/hyp*(outerRadius+15)) + "," + (yOffset + y/hyp*(outerRadius+15))+ ')';
                })
                .style('text-anchor', function(d) {
                    return (midAngle(d)) < Math.PI ? 'start' : 'end';
                })
                .style("font-family", "Inconsolata")
            .style("font-weight", "bold")
            .style("font-size", "12px");
    } else {
        svg.append("circle")
        .attr('cx', xOffset)
        .attr('cy', yOffset)
        .attr("r", outerRadius - 10)
        .attr("stroke", lightGreyColor)
        .style("fill", "none")
        .style('stroke-width', '5px')
        .style('stroke-dasharray', '6, 5');

    }

      //add central circle
        svg.append("circle")
        .attr('cx', xOffset)
        .attr('cy', yOffset)
        .attr('r', innerCircle)
        .style('fill', lightGreyColor);

    //add central pie text
    svg.append("text")
        .attr('x', xOffset)
        .attr('y', yOffset)
        .text(text)
        .style("alignment-baseline", "middle")
        .style("text-anchor", "middle")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
        .style("font-size", 40);

  }
  