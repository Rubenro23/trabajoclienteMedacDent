
var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente=JSON.parse(tablaPaciente);
if(tablaPaciente==null){
    var tablaPaciente=[];
}


var idForm= localStorage.getItem("idForm");
idForm= JSON.parse(idForm);
if(idForm==null){
    var idForm=0;
}

cargarPagina();

function guardar(){
    console.log("Presiono guardar");
    var objPaciente=JSON.stringify({
        objPaciente: idForm,
        nombre:document.getElementById("name").value,
        apellidos:document.getElementById("surname").value,
        telefono:document.getElementById("mobile").value,
        dni:document.getElementById("dni").value,
        fecha:document.getElementById("age").value,
        cita:document.getElementById("day").value,

    });
    console.log(objPaciente);

    tablaPaciente.push(objPaciente);

    localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));
    window.location.replace("Citas.html");
}

function cargarPagina(){
    if(idForm > 0){

    }
}



