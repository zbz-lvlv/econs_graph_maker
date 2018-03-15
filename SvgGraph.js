function SvgGraph(){
	
	var svg = document.getElementById("svgGraph");
	
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
		return window.screen.availWidth - 2 * SIDE_BAR_WIDTH;
	}
	
	this.getHeight = function(){
		return window.screen.availHeight - (window.outerHeight - window.innerHeight) - TOP_BAR_HEIGHT;
	}
	
	this.getAllElements = function(){
		return svg.childNodes;
	}
	
	this.clearGraphSpace = function(){
		while (svg.firstChild) {
			svg.removeChild(svg.firstChild);
		}
		
		var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttribute('x', 0);
		rect.setAttribute('y', 0);
		rect.setAttribute('height', this.getHeight());
		rect.setAttribute('width', this.getWidth());
		rect.setAttribute('fill', '#ffffff');
		svg.appendChild(rect);
	}
	
	this.clearRightSideBar = function(){
		let rightSideBar = document.getElementById("rightSideNavigationBar");
		
		while (rightSideBar.firstChild){
			rightSideBar.removeChild(rightSideBar.firstChild);
		}
	}

}

