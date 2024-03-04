    document.addEventListener("DOMContentLoaded", function() {
        var botao = document.getElementById("btnValidar");
    
        botao.onclick = () => {
            var radios = document.getElementsByName('modo2');
            var selectedRadio;
    
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    selectedRadio = radios[i];
                    break;
                }
            }
    
            if (selectedRadio && selectedRadio.value === 'modo-escuro') {
                document.body.style.backgroundColor = "#000000";
                document.getElementById("texto").style.color = "#ffffff";
            } else {
                document.body.style.backgroundColor = "#ffffff";
                document.getElementById("texto").style.color = "#000000";
            }
        };
    });
