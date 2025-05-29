import axios from "axios";

// Dados fixos (simulação de cadastro)
const product = {
  image: "",
  name: "",
  descripition: "",
  price: 40.00
};
const updatedData = {
  image: "",
  name: "",
  descripition: "",
  price: 30
};
const changeData = {
  // image: "",
  // name: "",
  // descripition: "",
  price: 1000
};



// ID do produto
const id = 6;

// Link
const link = "https://67620a7446efb3732373870b.mockapi.io/api/product"

async function registerProduct(product) {
  // Fazendo uma requisição do tipo POST
  axios.post(link, product)
    .then(response => {
      console.log(`
      ${response.status}: Produto cadastrado com sucesso!
      ${response.data}`);
    })
    .catch(erro => {
      console.log("Erro ao cadastrar o produto", erro);
    })
    .finally(() => {
      console.log("Requisição POST finalizada");
    })
}

async function getAllProduct() {
  // Faz a requisição do tipo GET ALL
  axios.get(link)
    .then(response => {
      console.log(response.data);
    })
    .catch(erro => {
      console.log("Erro ao buscar o produto", erro);
    })
    .finally(() => {
      console.log("Requisição GET ALL finalizada");
    })
}

async function getProduct(id) {
  // Faz a requisição do tipo GET
  axios.get(`${link}/${id}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(erro => {
      console.log("Erro ao buscar o produto", erro);
    })
    .finally(() => {
      console.log("Requisição GET finalizada");
    })
}

async function deleteProduct(id) {
  // Faz a requisição do tipo DELETE
  axios.delete(`${link}/${id}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(erro => {
      console.log("Erro ao deletar o produto", erro);
    })
    .finally(() => {
      console.log("Requisição DELETE finalizada");
    })
}

async function updateProduct(id, updatedData) {
  // Faz a requisição do tipo PUT
  axios.put(`${link}/${id}`, updatedData)
    .then(response => {
      console.log(response.data);
    })
    .catch(erro => {
      console.log("Erro ao atualizar o produto", erro);
    })
    .finally(() => {
      console.log("Requisição PUT finalizada");
    })
}

async function changeProduct(id, changeData) {
  // Faz a requisição do tipo PATCH
  axios.patch(`${link}/${id}`, changeData)
    .then(response => {
      console.log(response.data);
    })
    .catch(erro => {
      console.log("Erro ao atualizar o campo do produto", erro);
    })
    .finally(() => {
      console.log("Requisição PATCH finalizada");
    })
}

// --- Chamada das functions --- //

// Para cadastrar, precisamos enviar o object com os dados por parâmetro.
// await registerProduct(product);

// Busca tudo o que estiver no link (Endpoint)
// await getAllProduct();

// Busca o produto do id informado por parâmetro
// await getProduct(id);

// Deleta o produto do id informado por parâmetro
// await deleteProduct(id);

// Para atualizar, precisamos enviar o ID e o object com os dados alterados
// await updateProduct(id, updatedData);

// Para atualizar, precisamos enviar o ID e o object para ser alterado
// await changeProduct(id, changeData);