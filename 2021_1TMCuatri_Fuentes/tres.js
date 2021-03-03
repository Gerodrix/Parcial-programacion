function mostrar()
{
	let estadoCivil;
	let edad;
	let edadMin;
	let tempCorporal;
	let nombre;
	let sexo;
	let precioPasaje = 600;
	let precioPasajeDescuento;
	let acumuladorCantViudo = 0;
	let contadorViudo= 0;
	let contadorSoltero= 0;
	let acumuladorCantSoltero = 0;
	let acumuladorCantCasado= 0;
	let contadorCasado=0;
	let promedioViudo;
	


	do{
		nombre = prompt ("Ingrese su nombre");
	}while (isNaN(nombre)==false)

	do{
		estadoCivil = prompt ("Ingrese su estado civil: soltero, casado o viudo");
	}while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")

	do{
		sexo = prompt ("Ingrese su sexo: hombre, mujer, otro");
	}while (sexo != "hombre" && sexo != "mujer" && sexo != "otro")

	do{
		tempCorporal = parseInt(prompt ("Ingrese su temperatura corporal:"));
	}while (isNaN(nombre)==true && tempCorporal <= 35)

	do{
		edad = parseInt(prompt ("Ingrese su edad: "));
	}while (isNaN(nombre)==true > 17)

	switch(estadoCivil)
	{
		case "soltero":
				contadorSoltero++;
				acumuladorCantSoltero+= estadoCivil;
			break;
		case "casado":
				contadorCasado++;
				acumuladorCantCasado+= estadoCivil;
			break;
		case "viudo":
				contadorViudo++;
				acumuladorCantViudo+= estadoCivil;
				if(estadoCivil=="viudo" && estadoCivil > 50/100)
				{
					precioPasajeDescuento = precioPasaje - precioPasaje * 25/100;
					document.write ("Por mayoría de viudos el pasaje pasa a: "+precioPasaje);
				}
				else{
					document.write("Sin descuento el pasaje será de: "+precioPasaje);
				}
				
			break;
			
	}
	if (estadoCivil == "viudo" && edad >= 60)
	{
		promedioViudo = acumuladorCantViudo / estadoCivil;
		document.write ("Hay "+promedioViudo+ "viudos mayores de 60");
	}
	else if(estadoCivil == "soltero" && edadMin <= 20 && sexo == "mujer")

	{
		document.write (nombre+edadMin);
	}
	
	
}


