import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";
async function fetchProducts() {
  const { data } = await Api.get("/products/");
  return data;
}
export const createProduct = (Product) => Api.post("/products/", Product);
export const updateProduct = (Product) => Api.put(`/products/${Product.uuid}/`, Product);
export const deleteProduct = (Product) => Api.delete(`/products/${Product.uuid}/`);
export const getProduct = (uuid) => Api.get(`products/${uuid}/`);

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createProduct, onSuccess: () => queryClient.invalidateQueries("Products") ,
onError: (error) => { console.log(error); } });
}
export function useDeleteProduct(){
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteProduct, onSuccess: () => queryClient.invalidateQueries("Products") ,
  onError: (error) => { console.log(error); } });
}
export function useUpdateProduct() { 
  const queryClient = useQueryClient(); 
  return useMutation({ mutationFn: updateProduct, onSuccess: () => queryClient.invalidateQueries("Products") ,  
  onError: (error) => { console.log(error); } });
}
export function useFetchProducts() {
  return useQuery("Products", fetchProducts,); 
  
}
export function useFetchProduct(uuid) {
  return useQuery(["Products", uuid], () => getProduct(uuid));

}
