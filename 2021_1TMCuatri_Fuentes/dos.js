function mostrar()
{

  let tipoCursada;
  let cantMaterias;
  let nombre;
  let materia;
  let sexo;
  let nota;
  let edad;
  let contadorNotaHombre = 0;
  let acumuladorNotaHombre = 0;
  let contadorNotaMujer = 0;
  let acumuladorNotaMujer = 0;
  let contadorNotaOtro = 0;
  let acumuladorNotaOtro = 0;
  let notaPromedio;

      do{
        nombre = prompt ("Ingrese su nombre");
    
      }while (isNaN(nombre)==false)
        
      do{
        sexo = prompt ("Ingrese su sexo: hombre, mujer, otro");
      }while (sexo != "hombre" && sexo != "mujer" && sexo != "otro")
      
      do{
        tipoCursada = prompt ("Ingrese como va a cursar: libre, presencial o remota.");
      }   while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")

      do{
        materia = prompt ("Ingrese su materia: ");
      }   while (isNaN(tipoCursada)==false)
     
      do{
        cantMaterias = parseInt(prompt("Cuantas materias tiene?"));
      }while (isNaN(cantMaterias)==true && cantMaterias > 0 && cantMaterias <=8) 
        
      do{
         nota = prompt ("Ingrese su nota:");
      }while (isNaN(nota)==true && nota > 0 && nota <= 10)

      do{
        edad = prompt ("Ingrese su edad: ");
      }while (isNaN(edad)==true && nota > 17)
      
      switch(nota)
      {
	
            case "hombre":
                contadorNotaHombre++;
                acumuladorNotaHombre+= nota;
              break;
            case "mujer":
                contadorNotaMujer++;
                acumuladorNotaMujer+= nota;
              break;
            case "otro":
                contadorNotaOtro++;
                acumuladorNotaOtro+= nota;
              break;

    }
    acumuladorNotaMujer=acumuladorNotaMujer+notaPromedio;

    if(notaPromedio>nota && sexo == "mujer" && sexo == "otro")
    {
      document.write(nombre+"Fue el mejor promedio")
    }
    if (contadorNotaHombre>contadorNotaMujer && contadorNotaHombre >contadorNotaOtro)
    {
      notaPromedio="Nota hombre";
    }
    else 
    {
      if(contadorNotaOtro>contadorNotaMujer){
        notaPromedio="nota otro";
      }
      else{
        notaPromedio ="nota mujer";
      }
    }

    document.write ("la nota promedio es"+notaPromedio+"<br>");
}  
