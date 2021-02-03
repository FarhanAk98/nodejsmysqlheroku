// const dbConnection=require('./connections/dbConnection');
// console.log(dbConnection().then(con=>console.log(con)))
const ProductRepository=require('./repository/productRepository')
const productRepository=new ProductRepository();
const main=async()=>{
    // let savedProduct=await productRepository.saveProduct({
    //     productId:3,
    //     productName:'Iphone13',
    //     price:94562.5,
    //     description:'Iphone13Mini'
    // })
    // console.log('Saved Product --->',savedProduct);

    // let updatedProduct=await productRepository.updateProduct({
    //     productId:3,
    //     productName:'Iphone13',
    //     price:94500.5,
    //     description:'Iphone13Mini'
    // })
    // console.log('Updated Product --->',updatedProduct);

    // let deletedProduct=await productRepository.deleteProduct(3)
    // console.log('deleted Product --->',deletedProduct);

    // const products=await productRepository.findAllProducts()
    // console.log('Products List',products)

    const products=await productRepository.findAllProductsByName('Iphone12')
    console.log('Products List',products)
}
main();