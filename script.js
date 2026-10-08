// Função para calcular o valor sem centavos
function calcularValorSemCentavos(valorProduto) {
  // Math.floor remove os centavos
  let valorFinal = Math.floor(valorProduto);
  console.log(`Valor original: R$${valorProduto}`);
  console.log(`Você pode pagar: R$${valorFinal}`);
}

// Testando com alguns produtos
calcularValorSemCentavos(13.83);
calcularValorSemCentavos(25.99);
calcularValorSemCentavos(7.50);
calcularValorSemCentavos(42.10);
