$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA,{
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#aaa'},
        to: { color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB,{
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1700,
        from: { color: '#aaa'},
        to: { color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC,{
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#aaa'},
        to: { color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD,{
        
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2300,
        from: { color: '#aaa'},
        to: { color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 6854);

            circle.setText(value);
        }
    });
        //Iniciando o loader quando o usúario chega no elemento
        let dataAreaOffset = $('#data-area').offset();
        let stop = 0;

        $(window).scroll(function(e) {

            let scroll = $(window).scrollTop();

            if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

                circleA.animate(1.0);
                circleB.animate(1.0);
                circleC.animate(1.0);
                circleD.animate(1.0);

                stop = 1;
            }
        });

        //Filtro do portfólio
           
        

});