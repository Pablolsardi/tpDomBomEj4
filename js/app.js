document.addEventListener('DOMContentLoaded', function () {

    const elementoHora = document.getElementById('numerosHora');
    const elementoSegundos = document.getElementById('numerosSegundos');
    const elementoFecha = document.getElementById('textoFecha');
    const elementoPMAM = document.getElementById('pmam');

    function actualizarReloj() {
        const now = new Date();
        const horas = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0');
        const dia = now.getDate().toString();
        const anio = now.getFullYear().toString().padStart(4, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

        const opcionesDia = { weekday: 'long' };
        const nombreDia = now.toLocaleDateString('es-ES', opcionesDia);

        const opcionesMes = { month: 'long' };
        const nombreMes = now.toLocaleDateString('es-ES', opcionesMes);

        const horaCompleta = `${horas}:${minutos}`;
        const fechaCompleta = `${nombreDia} ${dia} DE ${nombreMes} DEL ${anio}`;

        elementoHora.textContent = horaCompleta;
        elementoSegundos.textContent = segundos;
        elementoFecha.textContent = fechaCompleta.toUpperCase();
        elementoPMAM.textContent = ampm.toUpperCase();
    }

    setInterval(actualizarReloj, 1000);

    actualizarReloj();
});
