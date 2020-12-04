export const fetchProducts = (items) =>{
  return {type: "FETCH_PRODUCTS_SUCCESS", items }
}
export const getData = () =>{
  return {type: "FETCH_PRODUCTS_REQUEST" }
}
export const setError = (payload) =>{
  return {type: "FETCH_PRODUCTS_FAILURE",payload }
}

