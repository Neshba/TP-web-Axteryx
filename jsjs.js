addEventListener('DOMContentLoaded', () => {
	const btn_menu = document.querySelector('.btn_menu')
	if (btn_menu) {
		btn_menu.addEventListener('click', () => {
			const menu_items = document.querySelector('.menu_items')
			menu_items.classList.toggle('show')	
		})
	}
})
 check = true ;









 submit.addEventListener('click', (e) => {
	e.preventDefault();	
	const nYa = document.getElementById('nYa');
	const submit = document.getElementById('submit');
	const name = document.getElementById('name').value;
	const xname = document.getElementById('name') ;
	const email = document.getElementById('email').value;
	const xemail = document.getElementById('email');
	const telephone = document.getElementById('telephone').value;
	const xtelephone = document.getElementById('telephone');
	const chUno = document.getElementById('chUno');
	const eTel = document.getElementById('eTel');
	
	const neshba = /^[a-zA-ZÀ-ÿ\s]{2,40}$/

	if (!neshba.test(name)){
		if (check){
		nYa.classList.remove('oculto');
		xname.style.borderColor = "red";
		check = false ;	
		}else {
				chUno.classList.add('oculto');
				nYa.classList.remove('oculto');
				xname.style.borderColor = "red";
				}
	}else { if(check){
		chUno.classList.remove('oculto');
		xname.style.borderColor = "rgb(0, 0, 230)"
		check = false ;	
		}else {
				nYa.classList.add('oculto');
				chUno.classList.remove('oculto');
				xname.style.borderColor = "rgb(0, 0, 230)"
				} }

				const mens = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

	if (!mens.test(email) ){
		if (check){
		eEmail.classList.remove('oculto');
		xemail.style.borderColor = "red";
		check = false ;	
		}else {				
				chDos.classList.add('oculto');
				eEmail.classList.remove('oculto');
				xemail.style.borderColor = "red";			}
		}else { if(check){
			chDos.classList.remove('oculto');
			xemail.style.borderColor = "rgb(0, 0, 230)"
			check = false ;	
			}else {
					eEmail.classList.add('oculto');
					chDos.classList.remove('oculto');
					xemail.style.borderColor = "rgb(0, 0, 230)"
				} }
			
				const tubazo =  /^\d{7,14}$/; 			
	
		if ( !(tubazo.test(telephone)) ){
			if (check){
			eTel.classList.remove('oculto');
			xtelephone.style.borderColor = "red";
			check = false ;	
			}else {
					chTres.classList.add('oculto');
					eTel.classList.remove('oculto');
					xtelephone.style.borderColor = "red";
								}
			}else { if(check){
				chTres.classList.remove('oculto');
				xtelephone.style.borderColor = "rgb(0, 0, 230)"
				check = false ;	
				}else {
						eTel.classList.add('oculto');
						chTres.classList.remove('oculto');
						xtelephone.style.borderColor = "rgb(0, 0, 230)"
						} }
					

} );


	
	
	












                                                                                          
/*
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.













function valimetro() { 
	

	let named = document.getElementById('name').value;                                                                  
	let iname = document.getElementById('name');                                                                       
	let email = document.getElementById('email').value;                                                                              
	let iemail = document.getElementById('email'); 
	let telephone= document.getElementById('telephone').value;                                                                                          
	let itelephone = document.getElementById('telephone');
	

let errorNyp = document.queryselector('errorNyp');                                                                                                                                                                                                       
let erroreMail = document.queryselector('erroreMail');                                                                                                          
let errorTel = document.queryselector('errorTel');

let valor = true ;

	if (named.length > 3 ) {
		alert("haaaaaaaaa")
		errorNyp.innerHTML = "ups, te olvidaste el nombre...";
		iname.style.borderColor = "red";
		iname.style.background = "red";
		valor = false ;
}		else {errorNyp.innerHTML = "" ;
		iname.style.borderColor = "green";}

	if (email == "") {
		erroreMail.innerHTML = "ups, te olvidaste del mail...";
		iemail.style.borderColor = "red";
		iemail.style.background= "red";
		valor = false ;
}		else {erroreMail.innerHTML = "" ;
		iemail.style.borderColor = "green"}

	if (telephone == "") {
		errorTel.innerHTML = "ups, te olvidaste del telefono...";
		itelephone.style.borderColor = "red"
		itelephone.style.backgroundColor = "red"
		valor = false ;
}		else {errorTel.innerHTML = "" ;
		telephone.style.borderColor = "green"}
		
		return valor ;
}




















































/*
const formulario = document.getElementById('formulario');
const aprobado = document.getElementById('pasoLaRevision');
const formu = document.getElementById('formu');
const date = new Date() ;
let fechita = date.toLocaleString()

formulario.addEventListener('submit' , async (e) => {
	alert("llega hasta aca papu gomes");
	e.preventDefault();
	if(valimetro() == true) {
		try {
			const respuesta = await fetch('http', {
				method: 'POST',
				mode:'cors',
				headers: {
					'content type':  'aplication/json', 
				},
				body: JSON.stringify({
					"nombre": formulario.name.value,
					"Email": formulario.email.value,
					"telefono": formulario.telephone.value,
					"tArea": formulario.tArea.value,
					"Fecha": fechita,


				}),


			});

			const contenido = await respuesta.json();
			console.log(contenido);
		
		}catch (error) {
  		console.log(error);
		}
		aprobado.classList.remove('oculto');
		formu.classList.add('oculto');
	}
} );


*/