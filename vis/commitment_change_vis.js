function drawCommitmentComparisonChart(svgClass) {
    let maxBarHeight = commitmentSvgHeight-padding*4;

    y_offset = 15;

  
  
    let barSvg = d3.select(svgClass);

    let realCommitmentData = createCommitmentData();
    let fakeCommitmentData = createFakeCommitmentData();
    let data = [realCommitmentData, fakeCommitmentData];

    let max = d3.max([
        d3.max(data[0].map(function(d){
            return (d.value);
        })),
        d3.max(data[1].map(function(d){
            return(d.value);
        }))]);
    
    let x_axis_values = [
        "I plan to meet my matches",
        "I will potentially meet with my matches",
        "I just want to meet new people",
        "I am taking this for fun and will probably not make an effort to meet", 
    ];

    let x_axis = d3.scaleBand()
        .domain(x_axis_values)
        .range([padding*2, firstSvgWidth-(padding*2)])
        .padding([0.1]);

    let y_axis = d3.scaleLinear()
        .domain([0, max])
        .range([maxBarHeight, 0])
    
    let x_axis_subgroup = d3.scaleBand()
        .domain([0, 1])
        .range([0, x_axis.bandwidth()])
        .padding([0.1]);

    let color = d3.scaleOrdinal()
        .domain(data)
        .range([coralColor, blueColor]);

    
    barSvg.append("g")
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
            .attr("transform", function(d, i) {
                return "translate(" + x_axis_subgroup(i) + "," + y_offset + ")";})
        .selectAll("rect")
        .data(function(d, i) { 
            return (d.map(function (obj) {return {"key": obj.key, "value": obj.value, "group": i}}))})
        .enter().append("rect")
            .attr("x", function(d, i) {
                return x_axis(d.key);})
            .attr("y",  function(d) {
                return y_axis(d.value);
            })
            .attr("width", (x_axis.bandwidth() / 2) - 10)
            .attr("height", function(d) {
                return (maxBarHeight - y_axis(d.value))
            })
            .attr("fill", function(d){
                return color(d.group)});

    barSvg.append("g")
        .attr("class", "x_axis")
        .attr("transform", "translate(" + 0 + ", " + (maxBarHeight + y_offset) + ")")
        .call(d3.axisBottom(x_axis))
        .selectAll(".tick text")
        .call(wrap, x_axis.bandwidth() - padding * 2)
            .style("font-family", "Inconsolata")
            .style("font-size", "12px");
    
    barSvg.select(".domain").remove();

    


    
    drawTotalText(barSvg, x_axis, y_axis, realCommitmentData, x_axis.bandwidth()/2, 5 - y_offset, - x_axis.bandwidth() / 4);
    drawTotalText(barSvg.append("g"), x_axis, y_axis, fakeCommitmentData, x_axis.bandwidth()/2, 5 - y_offset,  x_axis.bandwidth() / 4);

    
    //add legend
    let labels = ["2020", "2021"]
    barSvg.append("g")
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
    
    //create legend labels
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

  
  }

