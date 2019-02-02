class Node{

    'use strict';


    // default node settings
    constructor(){
        this.prefs = {
            width: 110,
            height: 50,
            padding: { hor: 15, vert: 10 },
            placeholder: "Enter text here",
            fontSize: 14,
            rx: 10,
            ry: 10,
            settings: {
                shape: 'rounded',
                borderWidth: {
                    thin: 1,
                    normal: 2,
                    thick: 4
                },
                borderStyle: {
                    solid: 0,
                    dotted: 1,
                    dashed: 0.5
                },
            }
        };
        
        this.areaSize = 0;    

        this.mouseOver; // true while mouse is over node
        // contains functions, handling events over nodes
    }
    color(index) {
        var colors = ["aliceblue", "lightgreen", "antiquewhite", "aqua", "aquamarine", "coral", "cyan", "cornsilk", "gainsboro", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "khaki", "lavender", "lavenderblush", "lawngreen", "lightblue", "lightcoral", "lightcyan", "lightgray", "lightpink", "lightsalmon", "lightskyblue"];
        return colors[index % colors.length];
    }


    // contains functions, handling events over nodes
    handler() {

            function mouseover(d) {
                d.fixed = true;
                mouseOver = true;
    
                // prevent widget.hide() if mouse moved from widget to it's node

                MM.graph.selected_node = d;
    
                setTimeout(function() {
                    if (mouseOver && !MM.graph.mousedown_node && !MM.graph.nodeBeingResized && MM.graph.enableNewNode) {
                        MM.widget.show(d);
                    }
                }, 300);
    
                if (MM.graph.mousedown_node && d !== MM.graph.mousedown_node) {
                    // outline target node
                    d3.select(this).select("rect.node").style('stroke-width', 3);
                }
    
                showDeleteButton(d);                    
    
                if ($(".nodeDeleteBtn").attr("data") != d.id) {
                    d3.selectAll("svg").selectAll(".nodeDeleteBtn").remove();
                }
            }
    
            function mouseout(d) {
                mouseOver = false;
    
                setTimeout(function() {
                    if (!mouseOver && !MM.widget.hovered) {
                        if (!MM.graph.findNodeGById(d.id).classed("fixed")) {
                            d.fixed = false;
                        }
                        MM.widget.hide();
                    }
                }, 400);
    
                if(!MM.graph.mousedown_node || d === MM.graph.mousedown_node) return;
    
                // deoutline target node
                d3.select(this).select("rect.node").style('stroke-width', 1.5);
            }
    
            function mousedown(d) {
                // if ($(event.path[0]).attr("class") == "nodeDeleteBtn") {
                //     MM.graph.removeNode(MM.graph.selected_node);
                //     MM.restart();
                // }
    
                MM.graph.disableZooming();
                MM.widget.hide();
    
                // remove 'write here' placeholder of the last node edited (if no text was typed)
                if (MM.graph.lastClickedNode && !MM.graph.lastClickedNode.text) {
                    MM.node.updateTextField(MM.graph.findNodeGById(MM.graph.lastClickedNode.id));
                }
    
                MM.graph.lastClickedNode = d;
                MM.graph.mousedown_node = d;
                if(d3.event.ctrlKey) return;
    
                // if (d === MM.graph.selected_node) {
                //     MM.graph.deselectNodes();
                // } else {
                //     MM.graph.selectNode(d);
                // }
                MM.graph.selected_link = null;
    
                // reposition drag line
                d3.select("path.dragline")
                    .style('marker-end', 'url(#end-arrow)')
                    .classed('hidden', false)
                    .attr('d', 'M' + MM.graph.mousedown_node.x + ',' + MM.graph.mousedown_node.y + 'L' + MM.graph.mousedown_node.x + ',' + MM.graph.mousedown_node.y);
    
                MM.restart();
            }
    
            function mouseup(d) {
    
                if (!MM.graph.mousedown_node || MM.graph.mousedown_node === d) {
                    return;
                }
    
                // needed by FF
                d3.select("path.dragline")
                    .classed('hidden', true)
                    .style('marker-end', '');
    
                MM.graph.mouseup_node = d;
    
                // deoutline target node
                d3.select(this).select("rect.node").style('stroke-width', 1.5);
    
                // add link to graph (update if exists)
                var link;
                link = MM.graph.links.filter(function(l) {
                    return (l.source === MM.graph.mousedown_node && l.target === MM.graph.mouseup_node);
                })[0];
    
                if(!link) {
                    link = MM.graph.linkNodes(MM.graph.mousedown_node, MM.graph.mouseup_node);
                    MM.outliner.moveNodeUnderParent(MM.graph.mouseup_node, MM.graph.mousedown_node);
                }
    
                // select new link
                MM.graph.selected_link = link;
                // MM.graph.deselectNodes();
                MM.restart();
            }
    
            function dblclick(d) {
                d3.event.stopPropagation(); // to prevent zooming
    
                // if dblclicked rect.node
                if (d3.event.srcElement.className.baseVal === "node" && d3.event.srcElement.tagName === "rect") {
                    // put cursor to the end of the text
                    var textBackground = $172("g.node[node-id='" + d.id + "']").find("g.text rect.background");
                    var down = $172.Event("mousedown.");
                    down.clientX = textBackground.offset().left + textBackground[0].getBoundingClientRect().width-2;
                    down.clientY = textBackground.offset().top + textBackground[0].getBoundingClientRect().height-2;
                    textBackground.trigger(down);
                    textBackground.trigger($172.Event("mouseup."));
                }
            }
    
            function textFieldResized(height, node) {
                var newHeight = height + 2 * prefs.padding.vert;
                if (newHeight > node.datum().height) {
                    changeSize(node, null, newHeight, 200);
                }
            }
    
            function unpinNode(d) {
                d.fixed = false;
                d3.select(this.parentNode).classed("fixed", false);
                //d3.select("g.node[node-id='" + d.id + "']").classed("fixed", false);
            }
        }

    create(node) {
        node.id = +node.id;
        node.text = node.text || "";
        node.width = typeof node.width != "undefined" ? node.width : prefs.width;
        node.height = typeof node.height != "undefined" ? node.height : prefs.height;
        node.parents = node.parents || [];
        node.children = node.children || [];
        // default node settings
        node.settings = {
            shape: 'rounded',
            shapeColor: '#B2B2B2',
            borderStyle: 'solid',
            borderWidth: prefs.settings.borderWidth.normal
        };

        Object.defineProperty(node, 'size', {
            get: function() { return this.width * this.height }
        });

        return node;
    }
}

export default Node;