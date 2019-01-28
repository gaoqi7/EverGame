let svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height")
    radius = 32;

svg.on("click", function(){
    let coords = d3.mouse(this);
    console.log(coords);
    let point = {x: coords[0], y: coords[1]};
    console.log("drawing circle at", point.x, point.y);
    svg.append("circle")
        .attr("class", "click-circle")
        .attr("cs", point.x)
        .attr("cy", point.y)
        .size("r", 20)
        .style("cursor: pointer; fill: black;");
})


function createNew() {

}