import { Formik, Form, Field, useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import {useCreateBox} from '../../../hooks/useTickets';
const InspectedBoxForm = () => {
  const {uuid} = useParams();
  const { mutate: CreateBox ,status, error} = useCreateBox(uuid);
  const initialValues = {
    lot_number: '',
    serial_number: '',
    box_number: '',
    date: moment().format('YYYY-MM-DD'),
    time_start: moment().format('HH:mm:ss'),
    time_end: '',
    pieces_verified: '',
    pieces_rejected: '',
    user: '',
    shift: ''
  };

  const validationSchema = Yup.object({
    lot_number: Yup.string().max(128).nullable(),
    serial_number: Yup.string().max(128).nullable(),
    box_number: Yup.string().max(128).nullable(),
    date: Yup.date().nullable(),
    time_start: Yup.string().nullable(),
    time_end: Yup.string().nullable(),
    pieces_verified: Yup.number().nullable(),
    pieces_rejected: Yup.number().nullable(),
    user: Yup.string().uuid().nullable(),
    shift: Yup.number().nullable()
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    CreateBox(values);
    resetForm();
    setSubmitting(false);
  }; 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
           {status === "loading" && <p>Creando ...</p>}
      {status === "error" && <p>Error: {JSON.stringify(error.response.data  )}</p>}
          <Field name="lot_number" type="text" placeholder="Lot number" />
          {errors.lot_number && touched.lot_number ? (
            <div className="error">{errors.lot_number}</div>
          ) : null}
          <Field name="serial_number" type="text" placeholder="Serial number" />
          {errors.serial_number && touched.serial_number ? (
            <div className="error">{errors.serial_number}</div>
          ) : null}
          <Field name="box_number" type="text" placeholder="Box number" />
          {errors.box_number && touched.box_number ? (
            <div className="error">{errors.box_number}</div>
          ) : null}
          <Field name="date" type="date" placeholder="Date" />
          {errors.date && touched.date ? (
            <div className="error">{errors.date}</div>
          ) : null}
          <Field name="time_start" type="time" placeholder="Time start
          " />
          {errors.time_start && touched.time_start ? (
            <div className="error">{errors.time_start}</div>  
          ) : null}
          <Field name="time_end" type="time" placeholder="Time end" />
          {errors.time_end && touched.time_end ? (
            <div className="error">{errors.time_end}</div>
          ) : null}
          <Field name="pieces_verified" type="number" placeholder="Pieces verified" />
          {errors.pieces_verified && touched.pieces_verified ? (
            <div className="error">{errors.pieces_verified}</div>
          ) : null}
          <Field name="pieces_rejected" type="number" placeholder="Pieces rejected" />
          {errors.pieces_rejected && touched.pieces_rejected ? (
            <div className="error">{errors.pieces_rejected}</div>
          ) : null}
          <Field name="user" type="text" placeholder="User" />
          {errors.user && touched.user ? (
            <div className="error">{errors.user}</div>
          ) : null}
          <Field name="shift" type="number" placeholder="Shift" />
          {errors.shift && touched.shift ? (
            <div className="error">{errors.shift}</div>
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default InspectedBoxForm;
