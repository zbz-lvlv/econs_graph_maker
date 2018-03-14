function SvgGraphItemText(svgGraph){

	SvgGraphItem.call(this);

	this.textT = "";
	this.fontSizeT = 17;
	this.fontFamilyT = 'Verdana'
	this.fontColorT = '#000000'

	this.x = 0;
	this.y = 0;
	
	this.draw = function(){

	    var svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	    svgText.setAttribute('x', this.x);      
	    svgText.setAttribute('y', this.y);   
		svgText.setAttribute('fill', this.fontColorT);
		svgText.setAttribute('text-anchor', 'middle');
		svgText.textContent = this.textT;
		
		svgGraph.draw(svgText);
		
	}
	
}