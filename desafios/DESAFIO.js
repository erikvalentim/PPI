function Product(name, sto, ram, price, qty, category) {
    this.name = name;
    this.sto = sto;
    this.ram = ram;
    this.price = price;
    this.qty = qty;
    this.category = category;
  }
  
  const cart = {
    products_fc: [new Product("Macbook Pro M4", 512, 16, 1599.9, 2, "Macbook")],
    products: [
      {
        name: "Macbook Pro M4",
        sto: 512,
        ram: 16,
        price: 1599.9,
        qty: 2,
        category: "Macbook",
      },
      {
        name: "Macbook Air M4",
        sto: 256,
        ram: 16,
        price: 1099.9,
        qty: 5,
        category: "Macbook",
      },
      {
        name: "Apple Watch Series 10 46mm",
        ram: 16,
        sto: 64,
        price: 429.9,
        qty: 3,
        category: "Watch",
      },
      {
        name: "iPhone 16",
        sto: 128,
        ram: 16,
        price: 899.9,
        qty: 10,
        category: "iPhone",
      },
      {
        name: "iPhone 16 Pro Max",
        sto: 1024,
        ram: 16,
        price: 1199.9,
        qty: 1,
        category: "iPhone",
      },
      {
        name: "iMac M4",
        sto: 512,
        ram: 24,
        price: 1799.9,
        qty: 1,
        category: "iMac",
      },
      {
        name: "iPad Pro 13in",
        sto: 2048,
        ram: 8,
        price: 2199.9,
        qty: 1,
        category: "iPad",
      },
    ],
    calcularTotal() {
      return this.products
        .reduce((acc, product) => acc + product.price * product.qty, 0)
        .toFixed(2);
    },
    ordenarPorPrecoCrescente() {
      return this.products.toSorted((a, b) => a.price - b.price);
    },
    ordenarPorPrecoDecrescente() {
      return this.products.toSorted((a, b) => b.price - a.price);
    },
    ordenarPorNomeAZ() {
      return this.products.toSorted((a, b) =>
        a.name.toUpperCase().localeCompare(b.name.toUpperCase())
      );
    },
    ordenarPorNomeZA() {
      return this.products.toSorted((a, b) =>
        b.name.toUpperCase().localeCompare(a.name.toUpperCase())
      );
    },
    filtrarPorCategoria(categoria) {
      return this.products.filter(
        (product) => product.category.toUpperCase() === categoria.toUpperCase()
      );
    },
    ordenar(key, ord = "c") {
      let output;
      if (this.products[key] == String) {
        output = this.products.toSorted((a, b) =>a[key].toUpperCase().localeCompare(b[key].toUpperCase())).map((product) => product[key]);
      } else {
        output = this.products.toSorted((a, b) => a[key] - b[key]);
      }
      if (ord === "c") {
        return output;
      } else {
        return output.reverse();
      }
    }
  };
  
  
  console.log("Total: " + cart.calcularTotal());
  console.log(cart.ordenar("name", 1))
  console.log(cart.ordenar("name"))
  console.log(cart.ordenar("sto", 1))
  console.log(cart.ordenar("sto"))
  console.log(cart.ordenar("ram", 1))
  console.log(cart.ordenar("ram"))
  console.log(cart.ordenar("price", 1))
  console.log(cart.ordenar("price"))
  console.log(cart.ordenar("qty", 1))
  console.log(cart.ordenar("qty"))
  console.log(cart.filtrarPorCategoria("iphone").map((product) => product.name));
  
  
  /*
  console.log(cart.ordenarPorPrecoCrescente().map((product) => product.price));
  console.log(cart.ordenarPorPrecoDecrescente().map((product) => product.price));
  console.log(cart.ordenarPorNomeAZ().map((product) => product.name));
  console.log(cart.ordenarPorNomeZA().map((product) => product.name));
  console.log(cart.filtrarPorCategoria("iphone").map((product) => product.name));*/
  /**
   * Filtra elementos do array de produtos com base em uma função de filtro.
   * @param {Function} filtro - Função que recebe um produto e retorna true para manter o item.
   * @returns {Array} - Array de produtos filtrados.
   */
  cart.filtrar = function(filtro) {
    return this.products.filter(filtro);
  };

  // Exemplo de uso:
  // Filtrar produtos com preço maior que 1000
  console.log(cart.filtrar(product => product.price > 1000));
