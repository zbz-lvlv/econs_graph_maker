var numberOfDemandLines = 0;
var numberOfSupplyLines = 0;

let svgGraphDDSS = new SvgGraphDemandSupply();

function onClickDemandSupplyStandard(){
	
	svgGraphDDSS.clearGraphSpace();
	svgGraphDDSS.clearRightSideBar();
	
	svgGraphDDSS.numberOfDemandLines = 0;
	svgGraphDDSS.numberOfSupplyLines = 0;
	
	svgGraphDDSS.onClickDemandSupplyStandard();
	
}

function ddSSAddDemandLine(){
	let dLine = svgGraphDDSS.addDemandLine();
	let newIntersections = svgGraphDDSS.updateIntersections(dLine, 'DEMAND');
	svgGraphDDSS.updateIntersectionLabels(newIntersections);
}

function ddSSAddSupplyLine(){
	let sLine = svgGraphDDSS.addSupplyLine();
	let newIntersections = svgGraphDDSS.updateIntersections(sLine, 'SUPPLY');
	svgGraphDDSS.updateIntersectionLabels(newIntersections);
}

function ddSSAddLabel(){
	svgGraphDDSS.addLabel();
}

function ddSSAddArrow(){
	svgGraphDDSS.addArrow();
}