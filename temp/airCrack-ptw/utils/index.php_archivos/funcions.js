

function loguejar(){
	var correcte = true;
	if (document.form1.usuari == ''){
		alert ("El camp USUARI �s incorrecte!");
		correcte = false;	
	}
	
	if (document.form1.pass == ''){
		alert ("El camp PASS �s incorrecte!");
		correcte = false;
	}
	if (correcte){
		document.form1.action = "index.php?sec=validar";
		document.form1.submit();
	}
}

function enviar_contacte(){
	var correcte = true;
        if (document.form2.nom == ''){
		alert ("El camp NOM �s obligatori!");
		correcte = false;	
	}
	if (document.form2.cognoms == ''){
		alert ("El camp COGNOMS �s obligatori!");
		correcte = false;	
	}
	if (document.form2.email == ''){
		alert ("El camp CORREU ELECTR�NIC �s obligatori!");
		correcte = false;	
	}else{
        var er_email = /^(.+\@.+\..+)$/
        if(!er_email.test(document.form2.email.value)) { 
           alert("El campo E-MAIL no �s v�lid.");
           correcte = false;
           }   
    	}
	if (document.form2.questio == ''){
		alert ("El camp QUESTI� �s obligatori!");
		correcte = false;	
	} 
	if (correcte){
		document.form2.action = "index.php?sec=mail&tipus=contactar";
		document.form2.submit();
	}
}

function enviar_registre(){
	var correcte = true;
	if (document.form3.nom == ''){
		alert ("El camp NOM �s obligatori!");
		correcte = false;	
	}
	if (document.form3.cognoms == ''){
		alert ("El camp COGNOMS �s obligatori!");
		correcte = false;	
	}
	if (document.form3.usuari == ''){
		alert ("El camp USUARI �s obligatori!");
		correcte = false;	
	}
	if (document.form3.pass == '' || document.form3.pass1 == ''){
		alert ("El camp CONTRASENYA �s obligatori!");
		correcte = false;	
	}
	if (document.form3.pass.value != document.form3.pass1.value){
		alert ("Les contrasenyes s�n diferents");
		correcte = false;
	}
	if (document.form3.email == ''){
		alert ("El camp CORREU ELECTR�NIC �s obligatori!");
		correcte = false;	
	}
	if (correcte){
		document.form3.action = "moduls/registrar_usuari.php";
		document.form3.submit();
	}

}


