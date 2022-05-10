
var botao = document.querySelector('#botao');

botao.addEventListener("click",function(event){
    event.preventDefault(event);

    var form = document.querySelector(".container");
    var pessoa = criarValores(form);
    var linha = montaTr(pessoa);

    var erros = validaPessoa(pessoa);
    
    if(erros.length > 0){
        mensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela");

    tabela.appendChild(linha);
    
    form.reset();
    var mensagensErro = document.querySelector(".mensagensErro");
    mensagensErro.innerHTML = "";
})

function mensagemDeErro(erros){
    var ul = document.querySelector(".mensagensErro");
    ul.innerHTML = "";

    erros.forEach( function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        li.classList.add("back")
        ul.appendChild(li);
    });
}

function criarValores(form){
    
    var pessoa = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: form.peso.value/(form.altura.value * form.altura.value)
    }
    return pessoa; 
}

function montaTr(pessoa){

    var linha = document.createElement("tr");
    linha.classList.add('principal');

    var nomeTd = montaTd(pessoa.nome,"info-nome");
    var pesoTd = montaTd(pessoa.peso,"info-peso");
    var alturaTd = montaTd(pessoa.altura,"info-altura");
    var imcTd = montaTd(pessoa.imc.toFixed(2    ),"info-imc");

    linha.appendChild(nomeTd);
    linha.appendChild(pesoTd);
    linha.appendChild(alturaTd);
    linha.appendChild(imcTd);

    return linha;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
        
function validaPessoa(pessoa){
    var erros = [];

    if (pessoa.peso < 0 || pessoa.peso > 500) erros.push("Peso inválido");
    if (pessoa.altura < 0 || pessoa.altura > 2.8) erros.push("Altura inválida");
    if (pessoa.nome.length == 0) erros.push("Não deixe o nome em branco");
    if (pessoa.peso.length == 0) erros.push("Não deixe o peso em branco");
    if (pessoa.altura.length == 0) erros.push("Não deixe a altura em branco");
    return erros;
}

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("findOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },1000);
});

var filtro = document.querySelector("#filtragem");
var expressao = new RegExp(this.value,"i");

filtro.addEventListener("input",function(){
    console.log(this.value);
    var pessoas = document.querySelectorAll(".pessoa");
    var expressao = RegExp(this.value,"i")

    if(this.value.length > 0){
        
        for(i=0;i<pessoas.length;i++){
            var pessoa = pessoas[i];
            var tdNome = pessoa.querySelector(".info-nome");
            var nome = tdNome.textContent
    
            if(!expressao.test(nome)){
                pessoa.classList.add("invisivel");
            }else{
                pessoa.classList.remove("invisivel");
            }
        }
    }else{
        for(i=0; i < pessoas.length; i++){
            var pessoa = pessoas[i];
            pessoa.classList.remove("invisivel");
        }
    }
})