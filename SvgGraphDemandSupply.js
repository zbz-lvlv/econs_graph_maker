function SvgGraphDemandSupply(){
		
	SvgGraph.call(this);
	
	this.intersections = [];
	
	this.updateIntersections = function(){
		
		var demandLines = [];
		var supplyLines = [];
		
		let allElements = this.getAllElements();
		for(i = 0; i < allElements.length; i++){
			if($(allElements[i]).attr('type') == LineTypeEnum.DEMAND){
				demandLines.push(allElements[i]);
			}
			if($(allElements[i]).attr('type') == LineTypeEnum.SUPPLY){
				supplyLines.push(allElements[i]);
			}
		}
		
		for(i = 0; i < demandLines.length; i++){
			
			for(i2 = 0; i2 < supplyLines.length; i2++){
			
				let intersection = this.checkLineIntersection(
					parseInt($(demandLines[i]).attr('x1')), 
					parseInt($(demandLines[i]).attr('y1')),
					parseInt($(demandLines[i]).attr('x2')), 
					parseInt($(demandLines[i]).attr('y2')),
					parseInt($(supplyLines[i2]).attr('x1')), 
					parseInt($(supplyLines[i2]).attr('y1')),
					parseInt($(supplyLines[i2]).attr('x2')), 
					parseInt($(supplyLines[i2]).attr('y2')),
				);
				
				this.intersections.push(intersection);
			
			}
			
		}
		
	}
	
	this.checkLineIntersection = function(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY, demandIndex, supplyIndex) {
		// if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
		var denominator, a, b, numerator1, numerator2, result = {
			x: null,
			y: null,
			demandIndex: null,
			supplyIndex: null
		};
		denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
		if (denominator == 0) {
			return result;
		}
		a = line1StartY - line2StartY;
		b = line1StartX - line2StartX;
		numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
		numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
		a = numerator1 / denominator;
		b = numerator2 / denominator;

		// if we cast these lines infinitely in both directions, they intersect here:
		result.x = line1StartX + (a * (line1EndX - line1StartX));
		result.y = line1StartY + (a * (line1EndY - line1StartY));
		
		result.demandIndex = demandIndex;
		result.supplyIndex = supplyIndex;
		
		// if line1 and line2 are segments, they intersect if both of the above are true
		return result;
	};
		
}