// clase primer nivel
class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  // metodo
  datosPropietario() {
    return `El nombre del dueño es: ${this._nombre}\nEl domiclio es: ${this._direccion}\nEl numero telefonico de contacto: ${this._telefono}`;
  }
}

// clase segundo nivel
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  // get
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

// clase tercer nivel
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  // get and set

  // atr: nombreMascota
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevo_nombreMascota) {
    this._nombreMascota = nuevo_nombreMascota;
  }

  // atr: enfermedad
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nueva_enfermedad) {
    this._enfermedad = nueva_enfermedad;
  }
}

// capturando info desde DOM

let submit = document.querySelector("button[type=submit]");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  entregandoDatos();

  function registrando() {
    // captura los valores de los input otorgados por el usuario
    let nombrePropietario = document.getElementById("propietario").value;

    let telefonoPropietario = document.getElementById("telefono").value;
    let direccionPropietario = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipoMascota = document.getElementById("tipo").value;

    let enfermedadMascota = document.getElementById("enfermedad").value;

    if (tipoMascota == "perro") {
      // instanciamos la clase tercer nivel
      const Perro = new Mascota(
        nombrePropietario,
        direccionPropietario,
        telefonoPropietario,
        tipoMascota,
        nombreMascota,
        enfermedadMascota
      );
      console.log("Es de tipo Perro");
      return Perro;
    } else if (tipoMascota == "gato") {
      // instanciamos la clase tercer nivel
      const Gato = new Mascota(
        nombrePropietario,
        direccionPropietario,
        telefonoPropietario,
        tipoMascota,
        nombreMascota,
        enfermedadMascota
      );
      console.log("Es de tipo Gato");
      return Gato;
    } else {
      const Conejo = new Mascota(
        nombrePropietario,
        direccionPropietario,
        telefonoPropietario,
        tipoMascota,
        nombreMascota,
        enfermedadMascota
      );
      console.log("Es de tipo conejo");
      return Conejo;
    }
  }

  function entregandoDatos() {
    // capturamos elemento para plasmas informacion
    const animalData = registrando();
    console.log(animalData);
    // const tipo = animalData.tipo;
    const nombreAnimal = animalData.nombreMascota;
    const enfermedad = animalData.enfermedad;

    const data = document.getElementById("resultado");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.innerHTML = `${animalData.datosPropietario()}`;
    p2.innerHTML = `${animalData.tipo}, mientras que el nombre de la mascota es: ${nombreAnimal} y la enfermedad es: ${enfermedad}`;
    data.appendChild(p1);
    data.appendChild(p2);
  }
});
