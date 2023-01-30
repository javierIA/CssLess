import React from "react";
import { Formik, Form, Field } from "formik";
import { useCreaterejection_causes } from "../../../hooks/useRejection_causes";

const RejectionForm = () => {
const { mutate: CreateRejection, status, error } = useCreaterejection_causes();

return (
<Formik
initialValues={{ name: "", description: "" }}
onSubmit={(values, { setSubmitting }) => {
CreateRejection(values);
setSubmitting(false);
}}
>
{({ isSubmitting }) => (
<Form>
<div>
{status === "loading" && <p>Creando ...</p>}
{status === "error" && <p>Error: {JSON.stringify(error.response.data)}</p>}
<label htmlFor="name">Nombre</label>
<Field type="text" name="name" id="name" required />
</div>
<div>
<label htmlFor="description">Description</label>
<Field type="text" name="description" id="description" required />
</div>
<button type="submit" disabled={isSubmitting}>
Enviar
</button>
</Form>
)}
</Formik>
);
};

export default RejectionForm;
