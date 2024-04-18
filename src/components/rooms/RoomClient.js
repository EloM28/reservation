import React, { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';

export const RoomClient = ({id}) => {
 const [roomList,setRoomList]=useState([])
 const [currentPage, setCurrentPage] = React.useState(0);
 const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const allRooms=roomList;
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
  const itemsPerPage = 6; // Nombre de chambres à afficher par page
  const pageCount = Math.ceil(allRooms.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentRooms = allRooms.slice(offset, offset + itemsPerPage);
  return (
    <div id={id}>
        <div className="container mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center text-gray-800">Available Rooms</h1>
        <div  className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {
        currentRooms.map((roomList, index) => (
                 
                   <div key={index} className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow">
                    <img
                        src={`/img/${index}.jpg`}
                        alt="Room 1"
                        className="object-cover w-full h-48"
                    />
                   <div className="p-4">
                     <h2 className="text-xl font-bold mb-2">{roomList.TypeChambre}</h2>
                     <p className="text-gray-700 mb-2">
                       {roomList.Description}
                     </p>
                     <p className="text-gray-700 font-bold mb-2">${roomList.PrixNuit} per night</p>
                     <button className="block w-full px-4 py-2 mt-4 text-center text-white bg-yellow-500 rounded hover:bg-yellow-600">
                       Book Now
                     </button>
                   </div>
                 </div>
                 
               ))
                }
             </div>
                </div>
                {/* Afficher la pagination */}
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousClassName={'pagination-previous'}
                    nextClassName={'pagination-next'}
                    breakClassName={'pagination-break'}
                    pageClassName={'pagination-page'}
                    pageLinkClassName={'pagination-link'}
                    previousLinkClassName={'pagination-link'}
                    nextLinkClassName={'pagination-link'}
                    disabledClassName={'pagination-disabled'}
                />
        </div>
  )
}
