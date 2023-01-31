import React from "react";
import { Formik, Form, Field } from "formik";
import { useCreaterejection_causes , useUpdaterejection_causes, useFetchRejection_cause} from "../../../hooks/useRejection_causes";
import { useParams}  from "react-router-dom"



export const RejectionForm = () => {
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

export  const UpdateRejection_cause = (props) => {

  const {uuid} = useParams();
  const  {mutate: Update, status, error: error2 }= useUpdaterejection_causes();

  const { data, isLoading,isIdle, error } = useFetchRejection_cause(uuid);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (isIdle) return <div>Idle...</div>;
  const userData= data.data
  const initialValues ={
    name:  userData.name,
    description: userData.description,
  }
  const handleSubmit = (values, { setSubmitting, resetForm}) => {
    values.uuid = uuid;
    setSubmitting(true);
    Update(values);
    setSubmitting(false);

  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
        <Form >
          <Field name="name" />
          <Field name="description" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

