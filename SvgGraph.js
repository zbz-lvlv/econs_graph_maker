function SvgGraph(){
	
	var svg = document.getElementById("svgGraph");
	
	var itemsArray = [];
	
	var backColor = "FFFFFF";
	
	this.addItem = function(){
	
	}
	
	this.editItem = function(){
		
	}
	
	this.removeItem = function(){
	
	}
	
	this.draw = function(objToBeDrawn){
		svg.appendChild(objToBeDrawn);
	}
	
	this.refresh = function(){
	
	}
	
	this.getWidth = function(){
		return svg.getBoundingClientRect().width;
	}
	
	this.getHeight = function(){
		return svg.getBoundingClientRect().height;
	}
	
	this.clearGraphSpace = function(){
		while (svg.firstChild) {
			svg.removeChild(svg.firstChild);
		}
	}

}

