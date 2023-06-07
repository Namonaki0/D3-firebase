const canvas = d3.select(".canvas");
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
