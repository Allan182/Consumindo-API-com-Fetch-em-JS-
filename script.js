const btConsultar = document.querySelector("#btConsultar");

const consultaEndereco = () => {

    let cep = document.getElementById("cep").value;

    if (cep.length !== 8) {
        resultado.textContent = "Cep Inválido!!";
    } else {

        let url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(function (response) {
            response.json().then(viewAdress);
        });
    }
}
btConsultar.addEventListener("click", consultaEndereco);


const viewAdress = (dados) => {

    let resultado = document.getElementById("resultado");

    if (dados.erro) {
        resultado.innerHTML = "Não foi possível localizar Endereço!!!";
    } else {
        resultado.innerHTML =
            `<div class="outSaida">
                <p> Endereço: ${dados.logradouro} </p>
                <p> Complemento: ${dados.complemento} </p>
                <p> Bairro: ${dados.bairro} </p>
                <p> Cidade: ${dados.localidade} </p>
                <p> UF : ${dados.uf} </p>
            </div>`;
    }
}