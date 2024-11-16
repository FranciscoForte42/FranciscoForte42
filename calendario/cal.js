function mostrar() {
    
let lista = document.getElementById('listaMes')
let indice = lista.selectedIndex
let mes = lista[indice].value
let año = document.getElementById('numAño').value
let cal = document.getElementById('calen')
let contol = 0

cal.innerHTML = '<tr class="dias"><td>Domingo</td><td>Lunes</td><td>Martes</td><td>Miercoles</td><td>Jueves</td><td>Viernes</td><td>Sabado</td></tr>'

let cadenatexto = ""

let fecha = new Date(año,mes,1)
let dia = fecha.getDay()
parseInt(dia)
contol = dia * -1

mes = parseInt(mes) + 1
let fechaf = new Date(año,mes,0)
let diaf = fechaf.getDate()

for (let i = 0; i < 5; i++) {
    cadenatexto += '<tr>'
    for (let c = 0; c < 7; c++) {
        contol = contol + 1

            if (contol <= 0 || contol > diaf) {
                cadenatexto += '<td></td>'
            }else{
                cadenatexto += `<td>${contol}</td>`
            }        
    }
    cadenatexto += '</tr>'
}

cal.innerHTML += cadenatexto

}