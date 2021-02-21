function drawFunFact(svgClass, x, y, radius, number, text=null){
    console.log("hi");
    let offset = 80;

    let circleSVG = d3.select(svgClass)
        .append('g');

    circleSVG.selectAll("circle")
        .data([number])
        .enter().append("circle")
        .style("stroke", coralColor)
        .style("fill", coralColor)
        .attr("r", radius)
        .attr("cx", x)
        .attr("cy", y);
    
    circleSVG
        .append("text")
        .attr('y', y)
        .attr('x', x)
        .style("text-shadow", "2px 2px 2px #505050")
        .style('text-anchor', 'middle')
        .style('alignment-baseline', 'middle')
        .style("font-family", "Inconsolata")
        .style('font-weight', 'bold') 
        .style("font-size", radius/1.25)
        .style("fill", "white")
        .text(number);
}





    

