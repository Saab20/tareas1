let fs =require('fs')

function listartareas(tareas){
    tareas.forEach(function(elemento) {
        console.log(elemento)
        
    });
}

function guardadato(tareas,nuevatarea){
    tareas.push(nuevatarea)
    fs.writeFileSync('./tareas/tareas.json',JSON.stringify(tareas,null,' '))
     
}

function borrartarea(tareas,codigo){
    let tareanueva=tareas.filter(function(elemnto){
        return elemnto.codigo!=codigo
    })

    fs.writeFileSync('./tareas/tareas.json',JSON.stringify(tareanueva,null,' '))

    return tareanueva
}

function filtrartarea(tareas,estado){
     let tareasfiltradas = tareas.filter(function(elemento){
         return elemento.estado==estado
     })

    return tareasfiltradas
}



module.exports={listartareas,guardadato,borrartarea,filtrartarea}