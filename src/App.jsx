import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/pages/Home';
import UserAdmin from './components/pages/UserAdmin';
import NavBar from './components/common/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserForm from './components/pages/forms/UserForm';
import { ReactQueryDevtools } from 'react-query-devtools'
import ProductAdmin from './components/pages/ProductsAdmin';
import ProductForm from './components/pages/forms/ProductForm';
function App() {
  const queryClient = new QueryClient();
  

  return (
    <>
    <QueryClientProvider client={queryClient}>

      <NavBar />

      <Routes> 
        <Route path="/products/form" element={<ProductForm />} />
        <Route path="/products" element={<ProductAdmin/>} />
        <Route path="/admin/form/:uuid" element={<UserForm />} />
        <Route path="/admin" element={<UserAdmin />} />
        <Route path="/admin/form" element={<UserForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
     <ReactQueryDevtools initialIsOpen={false} />
     </>
  );
}

export default App;
