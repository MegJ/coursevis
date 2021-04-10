function drawHeightChart(svgClass, maleData, femaleData) {

  console.log(maleData)
  console.log(femaleData)

  let min_male_age = d3.min(maleData.map(x => +x["age"]))
  let max_male_age = d3.max(maleData.map(x => +x["age"]))

  let min_female_age = d3.min(femaleData.map(x => +x["age"]))
  let max_female_age = d3.max(femaleData.map(x => +x["age"]))

  let min_age = d3.min([min_male_age, min_female_age])
  let max_age = d3.max([max_female_age, max_male_age])

  console.log(femaleData.length)

  let female_age_map = {}
  for(let i = 0; i < femaleData.length; i++){
    let age = femaleData[i]["age"]
    if(age % 2 == 1){
      age = age - 1
    }
    if(age in female_age_map){
      female_age_map[age] = female_age_map[age] + 1;
    } else {
      female_age_map[age] = 1
    }
  }

  let female_data = []
  for (var key in female_age_map) {
      female_data.push( [ key, female_age_map[key] ] );
}

let male_age_map = {}
for(let i = 0; i < maleData.length; i++){
  let age = maleData[i]["age"]
  if(age % 2 == 1){
    age = age - 1
  }
  if(age in male_age_map){
    male_age_map[age] = male_age_map[age] + 1;
  } else {
    male_age_map[age] = 1
  }
}

let male_data = []
for (var key in male_age_map) {
    male_data.push( [ key, male_age_map[key] ] );
}

console.log(female_data);


  console.log(female_age_map);

  console.log(min_male_age)
  console.log(min_female_age)
  console.log(max_male_age)
  console.log(max_female_age)




  let midwayPoint = secSvgHeight/2;

  let femaleHeight = createFemaleHeightData();
  let maleHeight = createMaleHeightData();

  let x = d3.scaleLinear()
    .domain([min_age, max_age])
    .range([padding*5, secSvgWidth-(padding*5)]);

  let yfemale = d3.scaleLinear()
    .domain([0, 16])
    .range([midwayPoint, (padding*1)]);

  let ymale = d3.scaleLinear()
    .domain([0, 16])
    .range([midwayPoint, secSvgHeight-(padding*2)]);

  let heightSvg = d3.select(svgClass);

  let tooltip = addTooltipToVis("heightSvg_tooltip");

  heightSvg.append("path")
    .datum(female_data)
    .attr("class", "area")
    .attr("fill", coralColor)
    .attr("stroke", coralColor)
    .attr("stroke-width", "1")
    .attr("d", d3.area()
      .x(function (d, i) {
        console.log(+d[0]);
        return x(+d[0]);})
      .y0(yfemale(0))
      .y1(function (d) {
        console.log(d);
        return yfemale(d[1])})
      .curve(d3.curveBasis));

  heightSvg.append("path")
    .datum(male_data)
    .attr("fill", blueColor)
    .attr("stroke", blueColor)
    .attr("stroke-width", "1")
    .attr("d", d3.area()
      .x(function (d, i) {return x(+d[0]);})
      .y0(ymale(0))
      .y1(function (d) {return ymale(d[1])})
      .curve(d3.curveCardinal));

  // add x axis
  heightSvg.append("g")
    .attr("class", "x_axis_height")
    .attr("transform", "translate(" + (0) + ", " + (midwayPoint) + ")")
    .call(d3.axisBottom(x))
    .style("font-family", "Inconsolata")
    .style("color", darkTextColor)
    .style("font-size", "12px")
    .select(".domain").remove();

  heightSvg.append("text")
    .attr("transform", "translate(" + (secSvgWidth-padding*4.5) + ", " + (midwayPoint) + ")")
    .text("years old")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("color", darkTextColor)
    .style("font-size", "12px");

  heightSvg.append("text")
    .attr("transform", "translate(" + (padding*4+15) + ", " + (midwayPoint-10) + ")")
    .text("female")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px")
    .style("text-anchor", "end");

  heightSvg.append("text")
    .attr("transform", "translate(" + (padding*4+15) + ", " + (midwayPoint+20) + ")")
    .text("male")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px")
    .style("text-anchor", "end");

  // annotation for % > 6ft
  let tempMaleHeight = maleHeight.slice(17);
  var sixFeetMale = tempMaleHeight.reduce(function(a, b){ return a + b;}, 0);
  let totalMale = maleHeight.reduce(function(a, b){ return a + b;}, 0);

   //add legend

   let color = d3.scaleOrdinal()
   .domain([0, 1])
   .range([coralColor, blueColor]);

   let labels = ["actresses", "actors"]
   heightSvg.append("g")
       .selectAll("year_squares")
       .data(labels)
       .enter()
       .append("rect")
       .attr("class", "year_squares")
       .attr('id', function(d, i) { return "key_" + d;})

       .attr("x", function(d) {return firstSvgWidth - (padding*3)})
       .attr("y", function(d, i) {return 80 + i * 30;})
       .attr("width", 15)
       .attr("height", 15)
       .style("fill", function (d, i) {
           return color(i);

       })
       .style('stroke', darkTextColor)
       .style('stroke-width', 2);

       d3.select(svgClass).append("g")
       .selectAll('.key_labels')
       .data(labels)
           .enter()
           .append('text')
           .attr('x', function(d, i) { return firstSvgWidth-(padding*3) + 20;})
           .attr('y', function(d, i) { return 90 + i*30;})
           .text(function(d) {return d;})
           .style('fill', darkTextColor)
           .style("font-weight", "bold")
           .style("font-family", "Inconsolata")
           .style("font-size", "12px");



  // no-hover tool tips - female median height comment

  let medianActressAge = d3.median(femaleData.map(x => +x["age"]))
  let medianActorAge = d3.median(maleData.map(x => +x["age"]))


  console.log(medianActressAge);
  console.log(medianActorAge);

  console.log(female_age_map)
  console.log(male_age_map);



  heightSvg.append("circle")
    .attr("class", "nohover_tooltip")
    .attr("cx", x(medianActressAge))
    .attr("cy", yfemale(9))
    .attr("r", 4)
    .style('stroke-width', 2)
    .style('fill-opacity', 0)
    .style("stroke", "black");
  heightSvg.append("text")
    .attr("class", "nohover_tooltip")
    .attr("x", x(medianActressAge)+10)
    .attr("y", yfemale(9)-10)
    .text("median age: " + (medianActressAge) + " years old")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("font-size", "12px");

  // male median height comment
  heightSvg.append("circle")
    .attr("class", "nohover_tooltip")
    .attr("cx", x(medianActorAge))
    .attr("cy", ymale(10))
    .attr("r", 4)
    .style('stroke-width', 2)
    .style('fill-opacity', 0)
    .style("stroke", "black");
  heightSvg.append("text")
    .attr("class", "nohover_tooltip")
    .attr("x", x(medianActorAge) + 170)
    .attr("y", ymale(10))
    .text("median age: " + medianActorAge + " years old")
    .style("font-family", "Inconsolata")
    .style("font-weight", "bold")
    .style("text-anchor", "end")
    .style("font-size", "12px");

     heightSvg.append("line")
      .attr("class", "heatmap_notes")
      .attr("x1", x(21))
      .attr("x2", x(21))
      .attr("y1", yfemale(1))
      .attr("y2", yfemale(1) - 90)
      .style("stroke", darkTextColor)
      .style("stroke-width", 2);
    heightSvg.append("line")
      .attr("class", "heatmap_notes")
      .attr("x1", x(21))
      .attr("x2", x(21) - 10)
      .attr("y1", yfemale(1) - 90)
      .attr("y2", yfemale(1) - 90)
      .style("stroke", darkTextColor)
      .style("stroke-width", 2);
      // heightSvg.append("line")
      // .attr("class", "heatmap_notes")
      // .attr("x1", gridSize*1+2)
      // .attr("x2", gridSize*2 - gridSpacing - 2)
      // .attr("y1", gridSize*8 + 5)
      // .attr("y2", gridSize*8 + 5)
      // .style("stroke", darkTextColor)
      // .style("stroke-width", 2);
      // heatmapSvg.append("path")
       
      heightSvg.append("text")
      .attr("class", "heatmap_notes")
      .attr("x", x(21) - 115)
      .attr("y", yfemale(1) - 90)
      .text("Marlee Matlin, 21 ")
      .style("font-family", "Inconsolata")
      .style("font-weight", "bold")
          .style("font-size", "12px");
      heightSvg.append("text")
        .attr("class", "heatmap_notes")
        .attr("x", x(21) - 115)
        .attr("y", yfemale(1) - 75)
        .text("was the youngest")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
            .style("font-size", "12px");
        heightSvg.append("text")
        .attr("class", "heatmap_notes")
        .attr("x", x(21) - 115)
        .attr("y", yfemale(1) - 60)
        .text("best actress")
        .style("font-family", "Inconsolata")
        .style("font-weight", "bold")
            .style("font-size", "12px");


      heightSvg.append("line")
            .attr("class", "heatmap_notes")
            .attr("x1", x(80))
            .attr("x2", x(80))
            .attr("y1", yfemale(1))
            .attr("y2", yfemale(1) + 10)
            .style("stroke", darkTextColor)
            .style("stroke-width", 2);
      heightSvg.append("line")
            .attr("class", "heatmap_notes")
            .attr("x1", x(80))
            .attr("x2", x(80) - 20)
            .attr("y1", yfemale(1) + 90)
            .attr("y2", yfemale(1) + 90)
            .style("stroke", darkTextColor)
            .style("stroke-width", 2);


      
      // heightSvg.append("text")
      // .attr("class", "heatmap_notes")
      // .attr("x", gridSize*3.5)
      // .attr("y", gridSize*9.5 + 15)
      // .text("they would date an 18 year old.")
      // .style("font-family", "Inconsolata")
      // .style("font-weight", "bold")
      //     .style("font-size", "12px");


}