function drawFunFact(svgClass, x, y, radius, number, text=null){
    console.log("hi");
    let offset = 80;

    let circleSVG = d3.select(svgClass)
        .append('g');

    circleSVG.selectAll("circle")
        .data([number])
        .enter().append("circle")
        .style("stroke", "#e66e92")
        .style("fill", "#FFADC6")
        .attr("r", radius)
        .attr("cx", x)
        .attr("cy", y);
    
    circleSVG
        .append("text")
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style("font-family", "Inconsolata")
        .attr('dy', radius)
        .attr('dx', radius)
        .style('font-weight', 'bold') 
        .style("font-size", radius)
        .style("fill", "white")
        .text(number);
}





    

