function drawFunFact(svgClass, x, y, radius, innerText, color=coralColor){
    let offset = 80;

    let circleSVG = d3.select(svgClass)
        .append('g');

    circleSVG.append("circle")
        .style("stroke", color)
        .style("fill", color)
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
        .text(innerText);
}





    

