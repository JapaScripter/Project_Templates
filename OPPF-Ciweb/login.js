
	function submeteForm() {
	
		try {
			
			var formulario = document.getElementById('frmLogin');
			
			if (formulario == null) return true;

			if (formulario.strBid != null) {
				if (ssobid2 != null) formulario.strBid.value = ssobid2;
				if (ssobid1 != null) formulario.strBid.value = ssobid1;
				if (formulario.strBid.value.indexOf('"ip":') > 0) {
					var obj = JSON.parse(formulario.strBid.value);
					setCookie('A3WID', obj.ip);
				}
			};

			setCookie('USUID',"0000000");
			setTimeout(loginLoading,700);
			
			var s1 = " ".repeat(20);
			
			if (formulario.strInput1 != null) {
				s1 = formulario.strInput1.value.trim()+s1;
				formulario.strInput1.disabled = true;
			}
			
			var s3 = formulario.strTKN3.value+s1.substring(0,20);
			 
			var jse = new JSEncrypt();
			jse.setKey(cps);
			formulario.strTKN1.value = jse.encrypt(s3);
			
		}
		catch(err) {
		}

		return true;
	}
	
	function setCookie(szName, szValue)
	{
		var szCookieText = encodeURIComponent(szName) + '=' + encodeURIComponent(szValue) ;
		szCookieText += '; PATH=/; SameSite=Strict;';
		document.cookie = szCookieText;
	}
	
	function loginLoading() {
	
		try {
			
			var elem = document.getElementById('loginLoading');
			if (elem != null) elem.style.display = "block";

			var elem = document.getElementById('strInput0');
			if (elem != null) elem.readOnly = true;

			var elem = document.getElementById('strInput1');
			if (elem != null) elem.readOnly = true;

			var elem = document.getElementById('strInput2');
			if (elem != null) elem.readOnly = true;

			var elem = document.getElementById('strInput3');
			if (elem != null) elem.readOnly = true;

			var elem = document.getElementById('botaoLogin');
			if (elem != null) elem.disable = true;
		}
		catch(err) {
		}

	}

	function loginHome() {
		
		try {
			
			var formulario = document.getElementById('frmLogin');
			
			if (formulario.strStatus == null) return true;
			if (formulario.strStatus.value != "3") return true;
			
			top.location = "/sso/index.logout";
		}
		catch(err) {
		}
		
	}

	setTimeout(loginHome,300000);
