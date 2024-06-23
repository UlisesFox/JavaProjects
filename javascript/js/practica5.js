var alumnos = ["Ana Jimenez", "Diego Almaraz", "Alondra Urzula"];
var materias = ["Algoritmia", "Ingles", "Estatica", "BD", "ED"];
var registro = [21110119, 21110136, 21110134];

console.log(alumnos[1]);
for(var i=0; i<alumnos.length; i++){
    console.log(alumnos[i]);
}

for(var index in registro){
    console.log("Registro: ", registro[index])
}

materias.forEach((mat)=>{console.log(mat);});