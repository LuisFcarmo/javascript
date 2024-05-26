import GERACPF from './modules/GERACPF'

import './assets/css/style.css'

(function () {
    const gera = new GERACPF()
    const cpfgerado = document.querySelector(".resultado")
    cpfgerado.innerHTML = gera.GeraNovoCpf()

})();