
	function OnLoad() {
		return resizeForm();
	}
	
	function OnLoadBid() {
		loadBid();
		return resizeForm();
	}

	function OnResize() {
		return resizeForm();
	}
	
	function resizeForm() {
	
		try {
			
			var navContainer = document.getElementById('nav_CONTAINER');
			var navHeight = navContainer.offsetHeight ;

			var formContainer = document.getElementById('nav_CONTAINER_BLOCK');
			var formHeight = formContainer.offsetHeight ;			
			
			var newTop = Math.min(100,(navHeight - formHeight) / 2);

			formContainer.style.top = newTop + 'px';
			formContainer.style.visibility = 'visible';
			
		}
		catch(err) {
		}

		return true;
	}
	
	var ssobid1 = null;
	var ssobid2 = null;
	
	function loadBid() {
	
		try {
	
			var bidURL1 = "https://api.ipify.org/?format=json";
			
			if (window.location.hostname.indexOf(".extranet.caixa") > -1) {
				bidURL1 = window.location.protocol + "//ciwebip.extranet.caixa/api/rs/get-ip/";
			} 			
			if (window.location.hostname.indexOf("construtora") > -1) {
				bidURL1 = "https://api.ipify.org/?format=json";
			} 			

			var xhttp1 = new XMLHttpRequest();
			xhttp1.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				ssobid1 = this.responseText;
				}
			};
			xhttp1.open("GET", bidURL1);
			xhttp1.send();
			
		}
		catch(err) {
		}
			
	}	
