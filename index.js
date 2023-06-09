const canvas = d3.select(".canvas-one");
const svg = canvas.append("svg");

svg.attr("height", "100vh").attr("width", "100%");

const group = svg.append("g").attr("transform", "translate(200, 200)");

group
  .append("circle")
  .attr("r", 30)
  .attr("cy", 60)
  .attr("cx", 100)
  .attr("fill", "pink");

group
  .append("line")
  .attr("stroke", "red")
  .attr("x1", 200)
  .attr("x2", 250)
  .attr("y1", 100)
  .attr("y2", 150);

group
  .append("rect")
  .attr("width", 600)
  .attr("height", 300)
  .attr("fill", "blue")
  .attr("x", 100)
  .attr("y", 200);

svg
  .append("text")
  .attr("x", 100)
  .attr("y", 600)
  .attr("fill", "grey")
  .text("information")
  .style("font-family", "impact");

// ------------------------------------------

const data = [
  {
    width: 400,
    height: 150,
    fill: "red",
  },
  {
    width: 300,
    height: 100,
    fill: "purple",
  },
  {
    width: 200,
    height: 50,
    fill: "green",
  },
];

const canvasTwo = d3.select(".canvas-two");

const svgTwo = canvasTwo
  .select(".svg-two")
  .data(data)
  .attr("height", "100vh")
  .attr("width", "100vw");

const rects = svgTwo
  .selectAll("rect")
  .data(data)
  .attr("height", (d) => d.height)
  .attr("width", (d) => d.width)
  .attr("fill", (d) => d.fill);

rects
  .enter()
  .append("rect")
  .attr("height", (d) => d.height)
  .attr("width", (d) => d.width)
  .attr("fill", (d) => d.fill);
