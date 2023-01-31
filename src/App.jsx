import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/pages/Home';
import UserAdmin from './components/pages/UserAdmin';
import NavBar from './components/common/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserForm from './components/pages/forms/UserForm';
import ProductAdmin from './components/pages/ProductsAdmin';
import ProductForm from './components/pages/forms/ProductForm';
import TicketAdmin from "./components/pages/TicketsAdmin";
import Test from './components/pages/Test';
import ClientAdmin from "./components/pages/ClientsAdmin";
import ClientForm from "./components/pages/forms/ClientsForm";
import RejectionAdmin from "./components/pages/RejectionAdmin";
import RejectionForm from "./components/pages/forms/RejectionForm";
import TicketForm from "./components/pages/forms/TicketsFrom";
import BoxAdmin from "./components/pages/BoxAdmin";
import InspectedBoxForm from "./components/pages/forms/InspectedBoxForm";
function App() {
  const queryClient = new QueryClient();
  

  return (
    <>
    <QueryClientProvider client={queryClient}>

      <NavBar />

      <Routes> 
        <Route path="/tickets/boxes/:uuid/form/:uuid" element={<InspectedBoxForm />} />
        <Route path="/tickets/boxes/:uuid" element={<BoxAdmin />} />
        <Route path="/admin/rejection_causes/form" element={<RejectionForm />} />
        <Route path="/admin/rejection_causes/" element={<RejectionAdmin />} />  
        <Route path="/admin/clients/form/" element={<ClientForm />} />
        <Route path="/admin/clients" element={<ClientAdmin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/tickets/form" element={<TicketForm />} />
        <Route path="/tickets" element={<TicketAdmin />} />
        <Route path="/admin/products/form" element={<ProductForm />} />
        <Route path="/admin/products" element={<ProductAdmin/>} />
        <Route path="/admin" element={<UserAdmin />} />
        <Route path="/admin/form" element={<UserForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
     </>
  );
}

export default App;
