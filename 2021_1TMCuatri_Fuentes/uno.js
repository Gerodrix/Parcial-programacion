
function mostrar()
{

	let producto;
	let precioProducto;
	let productoUnidades;
	let tipoInflamable;
	let marca;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let productoMasCaro;
	let marcaMasCara;
	let precioMasCaro;
	let flagPrecioMasCaro = 0;
	let contadorAlcohol = 0;
	let contadorIac = 0;
	let acumuladorIacMenor = 0;
	let contadorQuat = 0;
	let acumuladorCantAlcohol = 0;
	let acumuladorCantIac = 0;
	let acumuladorCantQuat = 0;
	let flagInflamable = 0;
	let maxUnidades;


	for	(let i=0; i<5; i++)
	{
		do 
		{
			producto =prompt("Ingrese 5 productos a comprar: ALCOHOL, IAC o QUAT");
		}while (producto != "ALCOHOL" && producto != "IAC" && producto != "QUAT");
	}
		do 
		{
			precioProducto =parseInt(prompt("Ingrese el precio (entre 100 y 300)"));
		}while (precioProducto < 100 || precioProducto > 300 || isNaN(precioProducto));

		do 
		{
			productoUnidades =parseInt(prompt("Ingrese cantidad del producto de 1 a 1000"));
		}while (productoUnidades < 1 || productoUnidades > 1000 || isNaN(productoUnidades));

		do 
		{
			tipoInflamable =(prompt("Ingrese el tipo de inflamable: ignifugo, combustible o explosivo"));
		}while (tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo");
		do 
		{
			marca =prompt("Ingrese la marca del producto");
		}while (isNaN(marca)== false);

		switch (producto)
		{
			case "ALCOHOL":
					contadorAlcohol++;
					acumuladorCantAlcohol+= productoUnidades;
				break;	
			case "IAC":
					contadorIac++;
					acumuladorCantIac+= productoUnidades;
					if(precioProducto <= 200)
					{
						acumuladorIacMenor+= productoUnidades;
					}
					document.write("Con precio menor a 200 se compraron: "+ acumuladorIacMenor);
				break;
			case "QUAT":
					contadorQuat++;
					acumuladorCantQuat+= productoUnidades;
				break;

		}

		if (contadorAlcohol > 0)
		{
			promedioAlcohol = acumuladorCantAlcohol / contadorAlcohol;
			document.write("promedio alcohol "+ promedioAlcohol)
		}
		else if (contadorIac > 0)
		{
			promedioIac = acumuladorCantIac / contadorIac;
			document.write("promedio iac "+ promedioIac)
		}
		else if (contadorQuat > 0)
		{
			promedioQuat = acumuladorCantQuat / contadorQuat;
			document.write("promedio QuatQuat "+ promedioQuat)
		}
			
		
		if(flagInflamable == 0 || productoUnidades > maxUnidades ) 
		{
			maxUnidades = productoUnidades;
			flagInflamable++;
			inflamableCantidad = tipoInflamable;
			document.write("El inflamable mas comprado fue: "+inflamableCantidad);
		}


		if (flagPrecioMasCaro == 0 || precioProducto > precioMasCaro)
		{
			marcaMasCara = marca;
			productoMasCaro = producto;
			precioMasCaro = precioProducto;
			flagPrecioMasCaro++;
			document.write("La marca mas cara y el producto mas caro es: "+marca + producto);
		}
}
