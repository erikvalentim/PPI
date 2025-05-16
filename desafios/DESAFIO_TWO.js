ordenar(key, ord) {
    let output;
    if (key === "name") {
      output = this.products.toSorted((a, b) =>a.name.toUpperCase().localeCompare(b.name.toUpperCase())).map((product) => product.name);
    } else if(key === "sto") {
    output = this.products.toSorted((a, b) => a.sto - b.sto);
    } else if(key === "ram") {
    output = this.products.toSorted((a, b) => a.ram - b.ram);
    } else if(key === "price") {
    output = this.products.toSorted((a, b) => a.price - b.price);
    } else if(key === "qty") {
    output = this.products.toSorted((a, b) => a.qty - b.qty);
    } else {
    output = this.products.toSorted((a, b) =>a.category.toUpperCase().localeCompare(b.category.toUpperCase())).map((product) => product.category);
    }
    if (ord == 1) {
      return output;
    } else {return output.reverse();}
  }