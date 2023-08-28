
const calculateTotalPrice = () => {
    const myCart = localStorage.getItem('myCart');
    let myCartArray = JSON.parse(myCart);
    if (!myCartArray) {
        myCartArray = [];
    }
    let totalPrice = 0;
    myCartArray.forEach((product) => {
        totalPrice += product.price;
    })
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
}

export default calculateTotalPrice
