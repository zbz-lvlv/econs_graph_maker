function SvgGraphItemLine(svgGraph){
		
	SvgGraphItem.call(this);
	
	this.x1 = 200;
	this.y1 = 200;
	this.x2 = 400;
	this.y2 = 200;

	this.color = "#000000";
	this.thickness = 2;
	this.gradient = 1.0;

	this.variablesInputType = {};
	this.variablesInputType["x1"] = "text";
	this.variablesInputType["y1"] = "text";
	this.variablesInputType["x2"] = "text";
	this.variablesInputType["y2"] = "text";
	this.variablesInputType["color"] = "text";
	this.variablesInputType["thickness"] = "text";
	this.variablesInputType["gradient"] = "text";
	
	this.draw = function(){
		
		var obj = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		obj.setAttribute('x1', this.x1);
		obj.setAttribute('y1', this.y1);
		obj.setAttribute('x2', this.x2);
		obj.setAttribute('y2', this.y2);
		obj.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		
		svgGraph.draw(obj);

	}
	
}