var dataset = [
    {
        "id": "ML",
        "value": 80
    },
    {
        "id": "DL",
        "value": 80
    },
    {
        "id": "Proj. Manag.",
        "value": 100
    },
    {
        "id": "D3",
        "value": 70
    },
    {
        "id": "Power BI",
        "value": 90
    },
    {
        "id": "Dash",
        "value": 80
    },
    {
        "id": "Python",
        "value": 90
    },

]

var width = 500;
var height = 500;
var marginTop = 25;
var marginLeft = 50;
var marginBottom = 100;
var marginRight = 0;

var chartWidth = width - marginLeft - marginRight;
var chartHeight = height - marginTop - marginBottom;

var ids = dataset.map(function(elem){
    return elem.id;
});

var xScale = d3.scaleBand()
                .domain(ids)
                .rangeRound([0, chartWidth])
                .padding(0.05);

// añadimos el elemento SVG (y lo guardamos!)
var svg = d3.select("#knowledge_image").append("svg")
    .attr("width", width)
    .attr("height", height);

var chart = svg.append("g")
                .attr("transform",
                    "translate(" + marginLeft + ", " + marginTop + ")");

var barWidth = xScale.bandwidth();

var maxValue = d3.max(dataset, function(elem) {
    return elem.value;
})

var heightScale = d3.scaleLinear()
                    .domain([0, maxValue])
                    .range([0, chartHeight]);

var colorScale = d3.scaleLinear()
                    .domain([0, maxValue])
                    .range(['white', 'blue']);

var categoryScale = d3.scaleOrdinal()
                        .range(d3.schemeCategory10);

// añadimos las rectas
chart.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
        .classed("bars", true)
        .attr("x", function(d, i) {
            return xScale(d.id);
        })
        .attr("y", chartHeight)
        .attr("width", barWidth)
        .attr("height", 0)
        .attr("fill", function(d, i) {
            return categoryScale(d.id);
        })
        .on("mouseover", function(d, i) {
            d3.select(this)
                .transition().duration(400)
                    .attr("fill", "black");
        })
        .on("mouseleave", function(d, i) {
            d3.select(this)
                .transition().duration(400)
                    .attr("fill", categoryScale(d.id));
        })
        .transition().duration(400)
            .attr("height", function(d) {
                return heightScale(d.value);
            })
            .attr("y", function(d, i) {
                return chartHeight - heightScale(d.value);
            });


// TEXT
chart.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
        .classed("labels", true)
        .attr("x", function(d, i) {
            return xScale(d.id) + barWidth / 2 ;
        })
        .attr("y", chartHeight)
        .text(function(d) {
            return d.value;
        })
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .transition().duration(400)
            .attr("y", function(d, i) {
                return chartHeight - heightScale(d.value) - 5;
            });


// EJES
var yScale = d3.scaleLinear()
                .range([chartHeight, 0])
                .domain([0, maxValue]);

var yAxis = d3.axisLeft().scale(yScale);

chart.append("g")
    .classed("yAxis", true)
    .call(yAxis);

var xAxis = d3.axisBottom().scale(xScale);

chart.append("g")
    .classed("xAxis", true)
    .attr("transform", "translate(0, " + (chartHeight) + ")")
    .call(xAxis)


    ;

d3.selectAll(".xAxis").attr("opacity", 0.7);
d3.selectAll(".yAxis").attr("opacity", 0.7);





   




