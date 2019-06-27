var glow = {
	
	targetDiv: 'message',
	glowColour: '#0000FF',
	glowTime: 100,
	
	fire:function() {
		var that = this;
		var stop = false;
		var reserse = false;
	   
		this.interval = setInterval(function() {
			if(stop) {
				that.stop();
			}

			if(that.i < 3 && !reserse) {
				that.i++;
			}
			else {
				reserse = true;
				that.i--;
				if(that.i == 0) {
					stop = true;
				}
			}

			document.getElementById(that.targetDiv).style.border =  (that.i / 2) + "px solid " + that.glowColour;

		}, that.glowTime);

		return;
	},

	stop:function() {
		clearInterval(this.interval);
	}
	
}