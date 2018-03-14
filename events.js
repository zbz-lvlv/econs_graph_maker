function onClickDemandSupplyStandard(){
	
	let svgGraphDDSS = new SvgGraphDemandSupply();
	svgGraphDDSS.clearGraphSpace();
	
	var svgGraphItemLine = new SvgGraphItemLine(svgGraphDDSS);
	svgGraphItemLine.x1 = 0;
	svgGraphItemLine.y1 = 0;
	svgGraphItemLine.x2 = 100;
	svgGraphItemLine.y2 = 100;
	svgGraphItemLine.draw();
	
	var svgGraphItemAxis = new SvgGraphItemAxis(svgGraphDDSS);
	svgGraphItemAxis.xAxisText = "Quantity of";
	svgGraphItemAxis.yAxisText = "Price of";
	svgGraphItemAxis.draw();
	
	alert("Hello World");
}
