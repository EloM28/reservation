import React from 'react'
import { useState,useEffect } from 'react';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  

  const handleConfirmation = () => {
      // setIsOpen(false);
      onClose()
      onConfirm();
  };

  return (
      <>
          {isOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                      </div>

                      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                          Confirmation
                                      </h3>
                                      <div className="mt-2">
                                          <p className="text-sm text-gray-500">
                                              Êtes-vous sûr de vouloir supprimer cette ligne ?
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <button onClick={handleConfirmation} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                  Supprimer
                              </button>
                              <button onClick={handleConfirmation} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                  Annuler
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </>
  );
};

const Rooms = () => {
  const [formData, setFormData] = useState({
    roomNumber: '',
    category: '',
    status: '',
    price:'',
    description: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [hasMore2, setHasMore2] = useState(true);
  const [ident,setId]=useState(1)
  const [modify,setModify]=useState(false)
  const [modId,setModId]=useState(1)
  const pageSize=6;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('/api/getRooms?page=${currentPage}&pageSize=${pageSize}'); // Assurez-vous d'avoir une API de récupération de données configurée
      const data=await response.json()
      setRoomList(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const change=(data)=>{
    setIsOpen(true);
    setId(data.ID_Chambre)
  }
  const addRoom = async () => {
    
    try {
      console.log("OK",formData);
      // Faites une requête POST à votre API pour ajouter la chambre à la base de données
      const addRoom={
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
      }
      const response = await fetch('/api/room/insert',addRoom); 
      const data=await response.json()
      if(data.data.affectedRows==1){
        fetchData()
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
  const modifier=async(id)=>{
    const response=await fetch(`api/modifier/${id}`)
    const data=await response.json()
    console.log('data',data);
    console.log('data',data.data[0].date);
      setFormData({
        roomNumber: data.data[0].numChambre,
        category: data.data[0].TypeChambre,
        status: data.data[0].EtatChambre,
        price: data.data[0].PrixNuit,
        description:data.data[0].Description
      })
      setModId(data.data[0].ID_Chambre)
      setModify(true)
  }

  const modificate=async (e) => {
    e.preventDefault();
    try {
      const addData={
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({formData,modId})
      }
      const response = await fetch('/api/modifier/modificate',addData); 
      const data=await response.json()
      if(data.data.affectedRows==1){
        fetchData(); 
        setFormData({
          roomNumber: '',
          category: '',
          status: '',
          price:'',
          description: ''
      });
      setModify(false)
      }
      else{
        setError("Not added")
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
  const handleDelete= async (id) => {
    try {
      const response=await fetch(`/api/room/${id}`); // Assurez-vous d'avoir une API de suppression de données configurée
      const data=await response.json()
      console.log('res',data);
      if(data.data.affectedRows==1)
      fetchData(); // Rafraîchit la liste des données après la suppression
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !loading && hasMore) {
      setCurrentPage(prevPage => prevPage + 1);
    }
    if (scrollHeight - scrollTop === clientHeight && !loading2 && hasMore2) {
      setCurrentPage2(prevPage => prevPage + 1);
    }
  };
  return (
      <div className="flex">
      <div className="w-1/3 p-4">
        <h2 className="text-2xl text-center mb-4">Hotel Rooms</h2>
        <form onSubmit={addRoom} className="space-y-4">
          <div>
            <label className="block">Room Number:</label>
            <input type="roomNumber" name="roomNumber" value={formData.roomNumber} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>
          <div>
            <label className="block">Type:</label>
            <select name="category" value={formData.category} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="">Select catégory</option>
              <option value="standard">Standard</option>
              <option value="VIP">VIP</option>
              <option value="VVIP">VVIP</option>
            </select>
          </div>
          <div>
            <label className="block">Status:</label>
            <select name="status" value={formData.status} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full">
              <option value="">Select status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>
          <div>
            <label className="block">Price:</label>
            <input type="number" name="price" value={formData.cause} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>
          <div>
            <label className="block">Description :</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full h-32" />
          </div>
          {modify ?  <button onClick={modificate} className="bg-green-500 text-white px-4 py-2 items-center rounded hover:bg-green-600">Modifier</button>
          : <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ajouter</button>}
          
          
        </form>
      </div>
      <div className="w-2/3 p-4">
      <div className="overflow-y-auto h-72 mt-16" onScroll={handleScroll}>
    <table className="table-auto w-full">
        <caption className="caption-top text-xl">
          Table : Liste des Chambres.
        </caption>
      <thead>
        <tr>
          <th className="border px-4 py-2">Numéro</th>
          <th className="border px-4 py-2">Type Chambre</th>
          <th className="border px-4 py-2">Prix Nuit</th>
          <th className="border px-4 py-2">EtatChambre</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {roomList.map((room, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{room.numChambre}</td>
            <td className="border px-4 py-2">{room.TypeChambre}</td>
            <td className="border px-4 py-2">{room.PrixNuit}</td>
            <td className="border px-4 py-2">{room.EtatChambre}</td>
            <td className="border px-4 py-2">{room.Description}</td>
            <td className="border px-4 py-2">
              <div className='flex justify-center'>
                <button onClick={()=>modifier(room.ID_Chambre)}className="bg-green-500 text-white px-4 py-2 items-center rounded hover:bg-green-600">Modifier</button>
                <button onClick={() => change(room)} className="bg-red-500 text-white px-4 py-2 items-center rounded ml-2 hover:bg-red-600">Supprimer</button>
                <ConfirmationDialog isOpen={isOpen} 
                                    onClose={() => setIsOpen(false)} 
                                    onConfirm={()=>handleDelete(ident)} />
              </div>
            </td>
          </tr>
        ))}
         </tbody>
        </table>
      </div>
     </div>
    </div>
  )
}

export default Rooms