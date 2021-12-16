let {listartareas,guardadato,borrartarea,filtrartarea} = require('./funciones/funcionesDeTareas')
let datos_json=require('./tareas/tareas.json')


/*
let nuevatarea= 
{
    "codigo": 36,
    "titulo": "Comprobar check",
    "estado": "Pendiente"

}

*/
//console.log(listartareas)
//console.log(guardadato(datos_json,nuevatarea))
console.log(borrartarea(datos_json,36))
console.log(filtrartarea(datos_json,"En progreso"))