export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories#json');
  const json = await request.json();
  return console.log(json);
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}


// alterando para fazer commit