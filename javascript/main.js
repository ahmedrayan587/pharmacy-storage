let productsString , database;
document.getElementById("product-form").onsubmit = ()=> {
    setTimeout(() => {
        productsString = JSON.stringify(products);
        window.localStorage.setItem("products", productsString);
    }, 1);
};
document.getElementById("reset-btn").onclick = ()=>{
    localStorage.clear();
};
window.onload = ()=> {
    if(productsString !== null){
        products = JSON.parse(localStorage.products);
    }
};
document.getElementById("print").onclick =()=>{
    print();
};
document.getElementById("exl").onclick =()=>{
    var table2excel = new Table2Excel();
  table2excel.export(document.getElementById("table"));
};