import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/pages/Home';
import UserAdmin from './components/pages/UserAdmin';
import NavBar from './components/common/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import  { UserForm,UpdateForm} from  './components/pages/forms/UserForm';

import ProductAdmin from './components/pages/ProductsAdmin';
import {ProductForm, UpdateProduct } from './components/pages/forms/ProductForm';
import TicketAdmin from "./components/pages/TicketsAdmin";
import Test from './components/pages/Test';
import ClientAdmin from "./components/pages/ClientsAdmin";
import {ClientForm, UpdateClient} from "./components/pages/forms/ClientsForm";
import RejectionAdmin from "./components/pages/RejectionAdmin";
import {RejectionForm, UpdateRejection_cause} from "./components/pages/forms/RejectionForm";
function App() {
  const queryClient = new QueryClient();
  

  return (
    <>
    <QueryClientProvider client={queryClient}>

      <NavBar />

      <Routes> 
        
        <Route path="/admin/rejection_causes/form" element={<RejectionForm />} />
        <Route path="/admin/rejection_causes/form/:uuid" element={<UpdateRejection_cause />} />
        <Route path="/admin/rejection_causes/" element={<RejectionAdmin />} />  
        <Route path="/admin/clients/form/" element={<ClientForm />} />
        <Route path="/admin/clients/form/:uuid" element={<UpdateClient />} />
        <Route path="/admin/clients" element={<ClientAdmin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/tickets" element={<TicketAdmin />} />
        <Route path="/admin/products/form" element={<ProductForm />} />
        <Route path="/admin/products/form/:uuid" element={<UpdateProduct/>}/>
        <Route path="/admin/products" element={<ProductAdmin/>} />
        <Route path="/admin" element={<UserAdmin />} />
        <Route path="/admin/users/form" element={<UserForm />} />
        <Route path="/admin/users/form/:uuid" element={<UpdateForm/>} />
        <Route path="/" element={<Home />} />

        
        

      </Routes>
    </QueryClientProvider>
     </>
  );
}

export default App;
