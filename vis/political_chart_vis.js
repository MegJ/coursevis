function drawPoliticalChart(svgClass){

    offset = 20;
    
    let height = 60;
    let politicalData = createPoliticalPreferences();
    let colors = ['#50AEFE', '#88C8EA', '#E0B4E4','#FFADC6', '#FF457E'];

    let total = d3.sum(politicalData, d => d.total);

    let percentage = d3.scaleLinear()
        .domain([0, total])
        .range([0, 100]);

    let cumulative = 0;
    let cumulativeData = politicalData.map(d => {
        cumulative += d.total;
        return {
            key: d.key,
            total: d.total,
            cumulative: cumulative - d.total,
            percentage: Math.trunc((d.total / total) * 100)
        }
    });

    let politicalChartSvg = d3.select(svgClass)
        .append('g')
        .attr("transform", "translate(" + offset + ", 100)");


    let xScale = d3.scaleLinear()
        .domain([0, total])
        .range([0, thirdSvgWidth - padding]);

    let tooltip = addTooltipToVis(svgClass + "_tooltip");

    politicalChartSvg.selectAll('politicalChartRect')
        .data(cumulativeData)
        .enter().append('rect')
        .attr('class', 'political-rect')
        .attr('x', d => xScale(d.cumulative))
        .attr('y', height/2)
        .attr('height', height)
        .attr('width', d => xScale(d.total))
        .attr('fill', (d, i) => colors[i])
        .on("mousemove", function (d) {
            var tooltipText = "<b>" + d.key + "</b>"
              + "<br/> <b>total:</b> " + d.total
              + "<br/> <b>percent:</b> " + d.percentage + "%</b>";
      
            // add tooltip to screen
            updateToolTipText(tooltip, tooltipText, -20, 110);
          })
          .on("mouseout", function(d) {
            hideTooltip(tooltip, "testing");
          });


politicalChartSvg.selectAll('.text-label')
.data(cumulativeData)
.enter().append('text')
.attr('class', 'political-label')
.attr('text-anchor', 'middle')
.attr('x', d => xScale(d.cumulative) + (xScale(d.total) / 2))
.attr('y', height * 2)
.style("font-weight", "bold")
.style("font-family", "Inconsolata")
.style("font-size", "12px")
.text(d => d.key)
}
