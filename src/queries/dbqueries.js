module.exports={
    INSERT_PRODUCTS:`INSERT INTO PRODUCTS VALUES(?,?,?,?)`,
    FETCH_PRODUCTS:`SELECT * FROM products`,
    UPDATE_PRODUCT:`UPDATE products SET price=? WHERE productId=?`,
    DELETE_PRODUCT:`DELETE FROM products WHERE productId=?`,
    SEARCH_BY_NAME:`SELECT * FROM products WHERE productName=?`
}