const planetsCanvas = d3.select(".planets-canvas");

const svg = planetsCanvas
  .append("svg")
  .attr("width", "100%")
  .attr("height", 700);

d3.json("planets.json").then((data) => {
  const planets = svg.selectAll("planets").data(data);

  // adding attributes to planets already in the DOM
  planets
    .attr("cy", 60)
    .attr("cx", (d) => d.distance)
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill);

  // appending the enter selection to the DOM
  planets
    .enter()
    .append("circle")
    .attr("cy", 100)
    .attr("cx", (d) => d.distance)
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill);
});
