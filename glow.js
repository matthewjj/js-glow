var glow = {
	i:0,
	duration:8,
	interval:'',
	stop:false,
	reverse:false,
	targetDiv: 'message',
	glowColour: '#0000FF',
	glowRate: 100,
	area: 'border',
	originalBackground: '',
	originalBorderColor: '',

	setDiv(targetDiv) {
		this.targetDiv = targetDiv;
	},

	setGlowColour(glowColour) {
		this.glowColour = glowColour;
	},

	setGlowRate(glowRate) {
		this.glowRate = glowRate;
	},

	setType(area) {
		this.area = area;
	},

	setDuration(duration) {
		this.duration = duration;
	},

	fire:function() {
	

		// var startDec = parseInt('ffffff', 16);
		// var endDec = parseInt(that.glowColour, 16);
		// var decIncrement = (startDec - endDec)  / 4;
	   
		switch(this.area) {
			case "border":
				this.border();
				break;

			case "rainbow-background":
				break;

			case 'background':
				
				this.background();

				break;
		}

		return;
	},

	glowTimer:function() {

		//var that = this;
		

		if(this.stop) {
			
			this.stopInterval();
			this.reverse = false;
			this.stop = false;
		}

		else if(this.i < this.duration && !this.reverse) {
			this.i++;
			
		}
		else {
			this.reverse = true;
			this.i--;
			if(this.i == 0) {
				this.stop = true;
			}
		}

		

	}, 

	background:function() {
		var that = this;

		this.orignalBackground = document.getElementById(this.targetDiv).style.background;
		var list = this.glowColour.match(/\d+/g)
		this.interval = setInterval(function() {

			document.getElementById(that.targetDiv).style.backgroundColor = 'rgb('+list[0]+', '+list[1]+', '+list[2]+', '+ ((1 / that.duration ) * that.i) +')';
			that.glowTimer();

		}, this.glowRate);

	},

	// rainbowBackground:function() {

	// 	var nextDec = startDec - (decIncrement * that.i);
	// 	var hexString = "#"+nextDec.toString(16);
				
	// 	document.getElementById(that.targetDiv).style.background = hexString;

	// 	this.interval = setInterval(function() {
	// 		that.glowTimer();

	// 	}, this.glowRate);
	// }

	border:function() {
		var that = this;

		this.originalBorderColor = document.getElementById(this.targetDiv).style.borderColor;
		var list = this.glowColour.match(/\d+/g)

		this.interval = setInterval(function() {

			document.getElementById(that.targetDiv).style.borderColor = 'rgb('+list[0]+', '+list[1]+', '+list[2]+', '+ ((1 / that.duration ) * that.i) +')';
			that.glowTimer();

		}, this.glowRate);
	},


	stopInterval:function() {
		clearInterval(this.interval);

		switch(this.area) {
			case 'background':
				
				document.getElementById(this.targetDiv).style.background = this.orignalBackground;

				break;
			case 'border':

				document.getElementById(this.targetDiv).style.borderColor = this.originalBorderColor;
				break;
		}
	}
	
}