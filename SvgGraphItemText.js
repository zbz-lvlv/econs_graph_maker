function SvgGraphItemText(svgGraph){

	this.textT = "";
	this.fontSizeT = 21;
	this.fontFamilyT = 'Verdana'
	this.fontColorT = '#000000'
	this.horizontalAlignment = 'start';
	this.verticalAlignment = 'middle';
	
	this.type = LabelTypeEnum.DEFAULT;

	this.x = 0;
	this.y = 0;
	
	this.draw = function(){

	    var svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	    svgText.setAttribute('x', this.x);      
	    svgText.setAttribute('y', this.y);   
		svgText.setAttribute('text-anchor', this.horizontalAlignment);
		svgText.setAttribute('alignment-baseline', this.verticalAlignment);
		svgText.setAttribute('type', this.type);
		svgText.setAttribute('style', "fill: " + this.fontColorT + "; font-size: " + this.fontSizeT + "; font-family: " + this.fontFamilyT);
		svgText.onclick = function() { onClickSvgGraphItemText(svgText); };
		svgText.textContent = this.textT;
		
		svgGraph.draw(svgText);
		
	}
	
}