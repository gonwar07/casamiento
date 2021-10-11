function countTime() {

    setInterval(function(){
        let date = new Date();
        // let endDate = new Date ("2021-11-20 18:00:00"); // Establecer la fecha límite
        let endDate = Date.parse('2021-11-20 18:00:00')
        let end = endDate.getTime();
        let leftTime = end-date; // Diferencia horaria                              
        let d, h, m, s;

        if (leftTime >= 0) {
            d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            h = Math.floor(leftTime / 1000 / 60 / 60 -(d*24));
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
            if (s < 10) {
                s = "0" + s;
            }
            if (m < 10) {
                m = "0" + m;
            }
            if (h < 10) {
                h = "0" + h;
            }
        } else {
            console.log('Cerrado')
        }

        document.getElementById("dias").innerHTML = d;
        document.getElementById("horas").innerHTML = h;
        document.getElementById("minutos").innerHTML = m;
        document.getElementById("segundos").innerHTML = s;
    }, 1000)
}

countTime()