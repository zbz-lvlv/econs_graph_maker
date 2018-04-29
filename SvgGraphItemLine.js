function SvgGraphItemLine(svgGraph){
	
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2 = 0;

	this.color = "#000000";
	this.thickness = 3;
	this.gradient = 1.0;
	
	this.dashes = "";
	
	this.label = new SvgGraphItemText(svgGraph);
	this.labelText = "";
	this.labelTextHorizontalAlignment = 'middle';
	this.labelTextVerticalAlignment = 'hanging';
	this.labelPosition = 0; //1: Below, -1: Above
	
	this.type = LineTypeEnum.DEFAULT;
	
	this.variablesInputType = {};
	this.variablesInputType["x1"] = "text";
	this.variablesInputType["y1"] = "text";
	this.variablesInputType["x2"] = "text";
	this.variablesInputType["y2"] = "text";
	this.variablesInputType["color"] = "text";
	this.variablesInputType["thickness"] = "text";
	this.variablesInputType["gradient"] = "text";

	this.currentX = 0;
	this.currentY = 0;
	this.currentMatrix = [];

	this.draw = function(){
		
		var obj = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		obj.setAttribute('x1', this.x1);
		obj.setAttribute('y1', this.y1);
		obj.setAttribute('x2', this.x2);
		obj.setAttribute('y2', this.y2);
		obj.setAttribute('style', "stroke:" + this.color + ";stroke-width:" + this.thickness + ";stroke-dasharray:" + this.dashes);
		obj.setAttribute('type', this.type);

		obj.onclick = function () { onClickSvgGraphItemLine(obj); };
		obj.onmousedown = function () { this.mouseDown(obj); };
		obj.onmousemove = function () { this.mouseMove(obj); };
		obj.onmouseup = function () { this.mouseUp(obj); };

		svgGraph.draw(obj);
		
		this.label.textT = this.labelText;
		this.label.x = this.x2;
		this.label.y = this.y2 + 5 * this.labelPosition;
		this.label.horizontalAlignment = this.labelTextHorizontalAlignment;
		this.label.verticalAlignment = this.labelTextVerticalAlignment;
		this.label.type = LabelTypeEnum.LINE;
		this.label.draw();

	}

	this.mouseDown = function (obj) {

	    this.currentX = obj.clientX;
	    this.currentY = obj.clientY;

	    this.currentMatrix = obj.getAttributeNS(null, "transform").slice(7, -1).split(' ');
	    for (var i = 0; i < this.currentMatrix.length; i++) {
	        this.currentMatrix[i] = parseFloat(this.currentMatrix[i]);
	    }

	    obj.onmousemove = this.mouseMove;
	    obj.onmouseup = this.mouseUp;

	}

	this.mouseMove = function (obj) {

	    dx = obj.clientX - this.currentX;
	    dy = obj.clientY - this.currentY;

	    this.currentMatrix[4] += dx;
	    this.currentMatrix[5] += dy;

	    newMatrix = "matrix(" + this.currentMatrix.join(' ') + ")";
	    obj.setAttributeNS(null, "transform", newMatrix);

	    this.currentX = obj.clientX;
	    this.currentY = obj.clientY;

	}

	this.mouseUp = function (obj) {

	    obj.selectedElement.removeAttributeNS(null, "onmousemove");
	    obj.selectedElement.removeAttributeNS(null, "onmouseout");
	    obj.selectedElement.removeAttributeNS(null, "onmouseup");

	}
	
}

