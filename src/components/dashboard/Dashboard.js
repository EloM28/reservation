import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';
    

export const Dashboard = () => {
  const [error,setError]=useState('')
    const router=useRouter()
  const addRoom = async (values) => {
    
    try {
      // Faites une requête POST à votre API pour ajouter la chambre à la base de données
      const addRoom={
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(values)
      }
      const response = await fetch('/api/room/insert',addRoom); 
      const data=await response.json()
      if(data.data.affectedRows==1){
        router.push('/rooms')
      }
      else{
        console.log("object Room not inserted");
        setError("Room not inserted")
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la chambre :', error);
      alert('Une erreur s\'est produite lors de l\'ajout de la chambre.');
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Page d'administration</h1>
      <span className="text-red-600"> {error} </span>
      <Formik
        initialValues={{ roomNumber: '', category: '',status:'', price: '',description:'' }}
        validate={(values) => {
          const errors = {};

          // Effectuez les validations nécessaires sur les valeurs du formulaire
          if (!values.roomNumber) {
            errors.roomNumber = 'Veuillez entrer un numéro de chambre.';
          }
          if (!values.category) {
            errors.category = 'Veuillez entrer une category de chambre.';
          }
          if (!values.status) {
            errors.status = 'Veuillez entrer un status de chambre.';
          }
          if (!values.price) {
            errors.price = 'Veuillez entrer un prix de chambre.';
          }
          if (!values.description) {
            errors.price = 'Veuillez entrer une description de chambre.';
          }

          return errors;
        }}
        onSubmit={addRoom}
      >
        <Form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="roomNumber" className="block font-medium mb-1">Numéro de chambre :</label>
            <Field type="text" id="roomNumber" name="roomNumber" className="w-full px-3 py-2 border rounded" />
            <ErrorMessage name="roomNumber" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="category"  className="block font-medium mb-1">Category :</label>
            <Field as="select" id="category" name="category" className="w-full px-3 py-2 border rounded">
              <option value="">Select catégory</option>
              <option value="standard">Standard</option>
              <option value="VIP">VIP</option>
              <option value="VVIP">VVIP</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="status"  className="block font-medium mb-1">Status :</label>
            <Field as="select" id="status" name="status" className="w-full px-3 py-2 border rounded">
              <option value="">Select status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">Prix :</label>
            <Field type="number" id="price" name="price" className="w-full px-3 py-2 border rounded" />
            <ErrorMessage name="price" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-1">Description :</label>
            <Field type="textarea" id="description" name="description" className="w-full px-3 py-7 border rounded " />
            <ErrorMessage name="description" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Room
          </button>
        </Form>
      </Formik>
    </div>
  );
      }
