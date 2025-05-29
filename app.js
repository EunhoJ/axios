import axios from "axios";

// Fazendo uma requisição do tipo GET
axios.get("https://67620a7446efb3732373870b.mockapi.io/api/product")

// Se tiver sucesso, retorna os dados
.then(response => {
  console.log(response.data);
})

// Converte para JSON
.then()

// Se der Erro
.catch(erro => {
  console.error('Erro ao fazer a requisição GET:', erro);
})

// Finaliza o process
.finally(done => {
  console.log("Requisição GET Finalizada");
});