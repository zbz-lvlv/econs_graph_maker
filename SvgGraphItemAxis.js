function SvgGraphItemAxis(svgGraph){
		
	SvgGraphItem.call(this);
	
	this.margin = 50;
	this.arrowSize = 5;
	
	this.color = "#000000";
	this.thickness = 2;
	
	this.xAxisX1 = this.margin;
	this.xAxisX2 = svgGraph.getWidth() - this.margin;
	this.xAxisY = svgGraph.getHeight() - this.margin;
	
	this.xAxisText = "";
	this.xAxisLabel = new SvgGraphItemText(svgGraph);
	
	this.yAxisX = this.margin;
	this.yAxisY1 = this.margin;
	this.yAxisY2 = svgGraph.getHeight() - this.margin;
	
	this.yAxisText = "";
	this.yAxisLabel = new SvgGraphItemText(svgGraph);
	
	this.variablesInputType = {};
	this.variablesInputType["margin"] = "text";
	this.variablesInputType["color"] = "text";
	this.variablesInputType["thickness"] = "text";
	this.variablesInputType["arrowSize"] = "text";
	
	this.draw = function(){
		
		var xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		xAxis.setAttribute('x1', this.xAxisX1);
		xAxis.setAttribute('y1', this.xAxisY);
		xAxis.setAttribute('x2', this.xAxisX2);
		xAxis.setAttribute('y2', this.xAxisY);
		xAxis.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		svgGraph.draw(xAxis);
		
		var xAxisArrowHead0 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		xAxisArrowHead0.setAttribute('x1', this.xAxisX2);
		xAxisArrowHead0.setAttribute('y1', this.xAxisY);
		xAxisArrowHead0.setAttribute('x2', this.xAxisX2 - this.arrowSize);
		xAxisArrowHead0.setAttribute('y2', this.xAxisY - this.arrowSize);
		xAxisArrowHead0.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		svgGraph.draw(xAxisArrowHead0);
		
		var xAxisArrowHead1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		xAxisArrowHead1.setAttribute('x1', this.xAxisX2);
		xAxisArrowHead1.setAttribute('y1', this.xAxisY);
		xAxisArrowHead1.setAttribute('x2', this.xAxisX2 - this.arrowSize);
		xAxisArrowHead1.setAttribute('y2', this.xAxisY + this.arrowSize);
		xAxisArrowHead1.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		svgGraph.draw(xAxisArrowHead1);
		
		this.xAxisLabel.textT = this.xAxisText;
		this.xAxisLabel.x = this.xAxisX2 - (this.margin * 1.5);
		this.xAxisLabel.y = this.xAxisY + (this.margin / 2);
		this.xAxisLabel.draw();
		
		var yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		yAxis.setAttribute('x1', this.yAxisX);
		yAxis.setAttribute('y1', this.yAxisY1);
		yAxis.setAttribute('x2', this.yAxisX);
		yAxis.setAttribute('y2', this.yAxisY2);
		yAxis.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		svgGraph.draw(yAxis);
		
		var yAxisArrowHead0 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		yAxisArrowHead0.setAttribute('x1', this.yAxisX);
		yAxisArrowHead0.setAttribute('y1', this.yAxisY1);
		yAxisArrowHead0.setAttribute('x2', this.yAxisX - this.arrowSize);
		yAxisArrowHead0.setAttribute('y2', this.yAxisY1 + this.arrowSize);
		yAxisArrowHead0.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		svgGraph.draw(yAxisArrowHead0);
		
		var yAxisArrowHead1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		yAxisArrowHead1.setAttribute('x1', this.yAxisX);
		yAxisArrowHead1.setAttribute('y1', this.yAxisY1);
		yAxisArrowHead1.setAttribute('x2', this.yAxisX + this.arrowSize);
		yAxisArrowHead1.setAttribute('y2', this.yAxisY1 + this.arrowSize);
		yAxisArrowHead1.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness);
		svgGraph.draw(yAxisArrowHead1);
		
		this.yAxisLabel.x = this.yAxisX;
		this.yAxisLabel.y = this.yAxisY1 - (this.margin / 2);
		this.yAxisLabel.textT = this.yAxisText;
		this.yAxisLabel.draw();

	}
	
}