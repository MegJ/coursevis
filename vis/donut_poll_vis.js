function drawPollDonuts(svgClass) {
  let innerRadius = 70;
  let outerRadius = 120;
  let pollSvg = d3.select(svgClass);

  let mealData = createMealData();
  let startOverData = createStartOverData();
  let timeMoneyData = createTimeMoneyData();
  let qualityData = createBestQualityData();
  let plansData = createFriayPlansData();
  let productiveData = createProductiveData();

  addPollText(pollSvg, 200, 200, outerRadius,"Who would you most want", "to have a meal with?");
  createSingleDonut(innerRadius, outerRadius, pollSvg, "path_meal", mealData, 200, 200);

  addPollText(pollSvg, 600, 200, outerRadius,"If you could start college", "all over again, would you?");
  createSingleDonut(innerRadius, outerRadius, pollSvg, "path_start_over", startOverData, 600, 200);

  addPollText(pollSvg, 200, 600, outerRadius,"Would you rather have more", "time, money, or influence?");
  createSingleDonut(innerRadius, outerRadius, pollSvg, "path_time_money", timeMoneyData, 200, 600);

  addPollText(pollSvg, 600, 600, outerRadius,"What quality do you value", "the most?");
  createSingleDonut(innerRadius, outerRadius, pollSvg, "path_quality", qualityData, 600, 600);

  addPollText(pollSvg, 200, 1000, outerRadius,"What would an average (post-covid)", "Friday night look like?");
  createSingleDonut(innerRadius, outerRadius, pollSvg, "path_plans", plansData, 200, 1000);

  addPollText(pollSvg, 600, 1000, outerRadius,"At what time of day are", "you most productive?");
  createSingleDonut(innerRadius, outerRadius, pollSvg, "path_productive", productiveData, 600, 1000);

  // add annotation for "start over" result increase
  pollSvg.append("text")
    .attr("x", 600)
    .attr("y", 350)
    .text("There is a " + 59 + "% increase from 2020. ")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle")
    .style("font-size", 12);
  pollSvg.append("path")
    .attr("d", "M 605 350 L 650 350 L 650 300")
    .style("stroke", darkTextColor)
    .style("stroke-width", 2)
    .style("fill", "none");

  // add annotation for "friday night" results
  pollSvg.append("text")
    .attr("x", 205)
    .attr("y", 1165)
    .text("Netflix party is always a covid-safe")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "start")
    .style("alignment-baseline", "middle")
    .style("font-size", 12);
  pollSvg.append("text")
    .attr("x", 205)
    .attr("y", 1165+15)
    .text("alternative for Friday nights.")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "start")
    .style("alignment-baseline", "middle")
    .style("font-size", 12);
  pollSvg.append("path")
    .attr("d", "M 210 1100 L 210 1155")
    .style("stroke", darkTextColor)
    .style("stroke-width", 2)
    .style("fill", "none");
}

function createSingleDonut(innerRadius, outerRadius, svg, pieClass, data, xOffset, yOffset) {
  let colors = [ coralColor, blueColor,greenColor,yellowColor,  pinkColor,purpleColor,  ];

  let pie = d3.pie()
    .value(function(d) { return d.value; })
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
        .text(d.data.value);

      d3.select(this)
        .transition()
        .duration(300)
        .attr("d", newArc);
    })
    .on("mouseout", function() {
      svg.select("." + pieClass + "_text")
        .text("");

      d3.select(this)
        .transition()
        .duration(250)
        .attr("d", arc);
    });

  // add pie segment labels
  svg.datum(data).selectAll("#" + pieClass + "_label")
      .data(pie).enter()
      .append('text')
            .attr('dy', '.35em')
            .text(function(d) { return d.data.key;})
            .attr('transform', function(d) {
                console.log(d.startAngle);
                var pos = textArc.centroid(d);
                console.log(pos);
                var x = d.startAngle[0];
                var y = d.startAngle[1];
                var hyp = Math.sqrt(x*x + y*y);
                return 'translate(' + (xOffset + x/hyp*(outerRadius+15)) + "," + (yOffset + y/hyp*(outerRadius+15))+ ')';
            })
            .style('text-anchor', function(d) {
                return (midAngle(d)) < Math.PI ? 'start' : 'end';
            })
            .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
        .style("font-size", "12px");
}
console.log("hi");
function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

function addPollText(svg, x, y, outerRadius, text1, text2) {
  svg.append("text")
    .attr("x", x)
    .attr("y", y-outerRadius-60)
    .text(text1)
    .style("fill", darkTextColor)
    .style("alignment-baseline", "middle")
    .style("text-anchor", "middle")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
          .style("font-size", 15);
        svg.append("text")
    .attr("x", x)
    .attr("y", y-outerRadius-45)
    .text(text2)
    .style("fill", darkTextColor)
    .style("alignment-baseline", "middle")
    .style("text-anchor", "middle")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
          .style("font-size", 15);
}