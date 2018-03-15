function onClickDemandSupplyStandard(){
	
	let svgGraphDDSS = new SvgGraphDemandSupply();
	svgGraphDDSS.clearGraphSpace();
	svgGraphDDSS.clearRightSideBar();
	
	var svgGraphItemAxis = new SvgGraphItemAxis(svgGraphDDSS);
	svgGraphItemAxis.xAxisText = "Quantity of apples/kg";
	svgGraphItemAxis.yAxisText = "Price of apple/$";
	svgGraphItemAxis.draw();
	
	var demandLine = new SvgGraphItemLine(svgGraphDDSS);
	demandLine.type = LineTypeEnum.DEMAND;
	demandLine.x1 = svgGraphItemAxis.yAxisX + 50;
	demandLine.y1 = svgGraphItemAxis.yAxisY1 + 50;
	demandLine.y2 = svgGraphItemAxis.xAxisY - 50;
	demandLine.x2 = demandLine.x1 + demandLine.y2 - demandLine.y1;
	demandLine.labelText = "DD"
	demandLine.draw();
	
	var supplyLine = new SvgGraphItemLine(svgGraphDDSS);
	supplyLine.type = LineTypeEnum.SUPPLY;
	supplyLine.x1 = svgGraphItemAxis.yAxisX + 50;
	supplyLine.y1 = svgGraphItemAxis.xAxisY - 50;
	supplyLine.y2 = svgGraphItemAxis.yAxisY1 + 50;
	supplyLine.x2 = supplyLine.x1 + supplyLine.y1 - supplyLine.y2;
	supplyLine.labelText = "SS";
	supplyLine.draw();
	
	svgGraphDDSS.updateIntersections();
	
	for(i = 0; i < svgGraphDDSS.intersections.length; i++){
		
		let thisIntersection = svgGraphDDSS.intersections[i];
		
		var priceLabel = new SvgGraphItemText(svgGraphDDSS);
		priceLabel.x = svgGraphItemAxis.yAxisX - 10;
		priceLabel.y = thisIntersection.y;
		priceLabel.textT = "P1";
		priceLabel.horizontalAlignment = 'end'
		priceLabel.verticalAlignment = 'middle'
		priceLabel.draw();
		
		var quantityLabel = new SvgGraphItemText(svgGraphDDSS);
		quantityLabel.x = thisIntersection.x;
		quantityLabel.y = svgGraphItemAxis.xAxisY + 10;
		quantityLabel.textT = "Q1";
		quantityLabel.horizontalAlignment = 'middle'
		quantityLabel.verticalAlignment = 'hanging'
		quantityLabel.draw();
		
		var priceLine = new SvgGraphItemLine(svgGraphDDSS);
		priceLine.x1 = thisIntersection.x;
		priceLine.y1 = thisIntersection.y;
		priceLine.x2 = svgGraphItemAxis.yAxisX;
		priceLine.y2 = thisIntersection.y;
		priceLine.thickness = 2;
		priceLine.dashes = "5, 5";
		priceLine.draw();
		
		var quantityLine = new SvgGraphItemLine(svgGraphDDSS);
		quantityLine.x1 = thisIntersection.x;
		quantityLine.y1 = thisIntersection.y;
		quantityLine.x2 = thisIntersection.x;
		quantityLine.y2 = svgGraphItemAxis.xAxisY;
		quantityLine.thickness = 2;
		quantityLine.dashes = "5, 5";
		quantityLine.draw();
		
		var equilibriumLabel = new SvgGraphItemText(svgGraphDDSS);
		equilibriumLabel.x = thisIntersection.x + 18;
		equilibriumLabel.y = thisIntersection.y;
		equilibriumLabel.textT = "E1";
		equilibriumLabel.horizontalAlignment = 'start'
		equilibriumLabel.verticalAlignment = 'middle'
		equilibriumLabel.draw();
		
	}
	
	var addItemsTemplate = document.getElementById('demandSupplyAddItemsTemplate');
    document.getElementById('rightSideNavigationBar').appendChild(addItemsTemplate.content.cloneNode(true));
	
	var attributesTemplate = document.getElementById('svgGraphAttributeTemplate');
    document.getElementById('rightSideNavigationBar').appendChild(attributesTemplate.content.cloneNode(true));
	
}

function onClickExport(linkExport){
	
	//Load a svg snippet in the canvas with id = 'svgGraph'
    let graphCanvas = document.createElement('canvas');
	graphCanvas.width = window.screen.availWidth - 2 * SIDE_BAR_WIDTH;
	graphCanvas.height = window.screen.availHeight - (window.outerHeight - window.innerHeight) - TOP_BAR_HEIGHT;
	
	let svg = document.getElementById('svgGraph');
	
	var svg_xml = (new XMLSerializer()).serializeToString(svg);

	// write serialized svg to canvas
	canvg(graphCanvas, svg_xml, {useCORS: true});

	linkExport.href = graphCanvas.toDataURL('image/png');

}