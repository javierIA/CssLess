import Api from "../services/Api";
import { useQuery, useMutation, useQueryClient } from "react-query";

async function fetchTickets() {
const { data } = await Api.get("/tickets/");
return data;
}

export const createTicket = (Ticket) => Api.post("/tickets/", Ticket);
export const updateTicket = (Ticket) => Api.put(`/tickets/${Ticket.uuid}/`, Ticket);
export const deleteTicket = (Ticket) => Api.delete(`/tickets/${Ticket.uuid}/`);
export const getTicket = (uuid) => Api.get(`/tickets/${uuid}/`);
export const getTicketBoxes = (uuid) => Api.get(`/tickets/${uuid}/boxes/`);
export const createTicketBox = (Ticket, Box) => Api.post(`/tickets/${Ticket.uuid}/boxes/`, Box);
export const updateTicketBox = (Ticket, Box) => Api.put(`/tickets/${Ticket.uuid}/boxes/${Box.uuid}/`, Box);
export const deleteTicketBox = (Ticket, Box) => Api.delete(`/tickets/${Ticket.uuid}/boxes/${Box.uuid}/`);
export const getTicketBox = (Ticket, BoxUuid) => Api.get(`/tickets/${Ticket.uuid}/boxes/${BoxUuid}/`);
export const createTicketProduct = (Ticket, Product) => Api.post(`/tickets/${Ticket.uuid}/product/`, Product);
export const updateTicketProduct = (Ticket, Product) => Api.put(`/tickets/${Ticket.uuid}/product/${Product.uuid}/`, Product);
export const deleteTicketProduct = (Ticket, Product) => Api.delete(`/tickets/${Ticket.uuid}/product/${Product.uuid}/`);
export const getTicketProduct = (Ticket, ProductUuid) => Api.get(`/tickets/${Ticket.uuid}/product/${ProductUuid}/`);
export const getTicketProducts = (Ticket) => Api.get(`/tickets/${Ticket.uuid}/product/`);

export function useFecthTickets() {
const queryClient = useQueryClient();
return useQuery("tickets", fetchTickets, {
onSuccess: () => {
queryClient.invalidateQueries("tickets");
}
});

}
export function useCreateTicket() {
const queryClient = useQueryClient();
return useMutation(createTicket, {
onSuccess: () => {
queryClient.invalidateQueries("tickets");
}
});
}
 
export function useDeleteTicket() {
const queryClient = useQueryClient();
return useMutation(deleteTicket, {
onSuccess: () => {
queryClient.invalidateQueries("tickets");
}
}); }
export function useCreateBox() {
const queryClient = useQueryClient();
return useMutation(createTicketBox, {
onSuccess: () => {
queryClient.invalidateQueries("box");
}
}); 

}
export function useFecthBoxes(uuid) {
 const queryClient = useQueryClient();
return useQuery(["box", uuid], () => getTicketBoxes(uuid), {
onSuccess: () => {
queryClient.invalidateQueries("box");
}
 });
}
export function useDeleteBox() {
const queryClient = useQueryClient();
return useMutation(deleteTicketBox, {
onSuccess: () => {
queryClient.invalidateQueries("box");
}
}); }
