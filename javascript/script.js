const cep = document.querySelector("#cep_input")
const cel = document.querySelector("#celular")
const btn = document.querySelector("#button")
const inputs = document.querySelectorAll("input")

const nome = document.querySelector("#nome")
const cpfCnpj = document.querySelector("#cpfCnpj")

inputs.forEach(input => {
    input.addEventListener("blur", ()=>{
    })
});

const showData = (result)=>{
    for(const campo in result){
        console.log(campo)
        if (document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", (e)=>{
    let search = cep.value.replace("-", "")
    
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }



    fetch(`https://viacep.com.br/ws/${search}/json/`, options).then(
        response => {response.json().then(
            data => showData(data)
        )}
    ).catch(
        e => console.log("Deu Erro: " + e,message)
    )
})
// Validação
nome.addEventListener("blur", () => {
    let re =
    /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(nome.value)){
        alert("Preencha seu nome apenas com letras!")
    } else if (nome.value.lenght < 2){
        alert("O campo nome deve ter mais de 2(duas) letras!")
    }
})

cpfCnpj.addEventListener("blur", () => {
    let value = document.getElementById("cpf").value;
    let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
        document.form.cpf.style.border = "1px solid red";
    // document.form.cpf.focus();
        return false;
    }
    document.form.cpf.style.border = "";
    return true;
})


