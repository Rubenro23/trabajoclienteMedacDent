
var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente=JSON.parse(tablaPaciente);
if(tablaPaciente==null){
    var tablaPaciente=[];
}



function listar(){
    console.log("Ingresando a listar...");

    var dataFila= '';

    if(tablaPaciente.length >0){
        for(const i in tablaPaciente){
            var varPaciente=JSON.parse(tablaPaciente[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+ varPaciente.nombre +  varPaciente.apellidos +"<br>"+ varPaciente.telefono + "<br>"+varPaciente.dni + "<br>"+varPaciente.fecha +"</td>";
            dataFila += "<td>"+ varPaciente.cita+"</td>";
            


            dataFila +="</tr>";
        }

        document.getElementById("datosClientes").innerHTML = dataFila;
    }
}


function abrirForm(idForm){
    localStorage.setItem("idForm",JSON.stringify(idForm));
    window.location.replace("Formulario.html");
}