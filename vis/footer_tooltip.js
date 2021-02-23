function drawFooterToolTip(svgClass) {
  let footerWidth = 500;
  let footerHeight = 350;
  let footerSvg = d3.select(svgClass);

  // title
  footerSvg.append("text")
    .attr("x", footerWidth/2)
    .attr("y", 30)
    .html("Meet the Devs")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("alignment-baseline", "middle")
    .style("text-anchor", "middle")
    .style("font-size", "14px");
  footerSvg.append("text")
    .attr("x", footerWidth/2 - padding*2+3)
    .attr("y", 15)
    .html("Date?")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("alignment-baseline", "middle")
    .style("text-anchor", "start")
    .style("font-size", "14px");
  footerSvg.append("line")
    .attr("x1", footerWidth/2 - padding*2)
    .attr("x2", footerWidth/2 - padding + 10)
    .attr("y1", 30)
    .attr("y2", 30)
    .style('stroke-width', 2)
    .style("stroke", darkTextColor);

  // add images
  footerSvg.append("image")
    .attr("x", 75-15)
    .attr("y", 75-30)
    .attr("width", 130)
    .attr("height", 130)
    .attr("xlink:href", "vis/megan.jpg");
  footerSvg.append("image")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75-30)
    .attr("width", 130)
    .attr("height", 130)
    .attr("xlink:href", "vis/lesley.jpg");

  // add bios
  footerSvg.append("text")
    .attr("x", 75-15+65)
    .attr("y", 75+65+50+10)
    .html("Megan")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "middle")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", 75-15)
    .attr("y", 75+65+50+15+15)
    .html("height*: 5'9")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", 75-15)
    .attr("y", 75+65+50+30+15)
    .html("year: senior")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", 75-15)
    .attr("y", 75+65+50+45+15)
    .html("interests: baking, reading,")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", 75-15)
    .attr("y", 75+65+50+60+15)
    .html("data journalism, travel")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", 75-15)
    .attr("y", 75+65+50+75+15)
    .html("continents lived on: 3")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", 75-15)
    .attr("y", 75+65+50+75+30)
    .html("ig: @_mjrock_")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");

  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130+65)
    .attr("y", 75+65+50+10)
    .html("Lesley")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "middle")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75+65+50+15+15)
    .html("height*: 5'5")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75+65+50+30+15)
    .html("year: senior")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75+65+50+45+15)
    .html("interests: bullet journal,")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75+65+50+60+15)
    .html("data vis, diy")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75+65+50+75+15)
    .html("boba drank in 2020: 108 cups")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth-75+15-130)
    .attr("y", 75+65+50+75+30)
    .html("ig: @les.huang")
    .style("font-family", "Inconsolata")
    .style("font-size", "12px");


  // contact info
  footerSvg.append("text")
    .attr("x", footerWidth/2)
    .attr("y", footerHeight-10-15)
    .html("*we may or may not have added 3in to our height,")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "middle")
    .style("font-size", "12px");
  footerSvg.append("text")
    .attr("x", footerWidth/2)
    .attr("y", footerHeight-10)
    .html("just like everyone else who took the survey 👀")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "middle")
    .style("font-size", "12px");
}