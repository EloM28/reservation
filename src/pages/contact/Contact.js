import React from 'react'

export const Contact = () => {
    const customStyle = {
        border:'dashed rgb(0,0,0)',
        // Ajoutez d'autres propriétés de style si nécessaire
      };
  return (
        <div className="container mx-auto py-8 space-x-4 ">
        <div className="flex flex-col md:flex-row  ">
          {/* Formulaire de contact */}
          <div className="md:w-1/3 md:pr-8">
            <h1 className="text-3xl font-semibold mb-4">Contactez-nous</h1>
            <form className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 mb-2">Nom :</label>
              <input type="text" id="name" className="mb-4 p-2 border border-gray-400 rounded-md" />

              <label htmlFor="email" className="text-gray-800 mb-2">Email :</label>
              <input type="email" id="email" className="mb-4 p-2 border border-gray-400 rounded-md" />

              <label htmlFor="message" className="text-gray-800 mb-2">Message :</label>
              <textarea id="message" rows="4" className="mb-4 p-2 border border-gray-400 rounded-md"></textarea>

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Envoyer</button>
            </form>
          </div>

          {/* Carte */}
          <div className="md:w-2/3 mt-8 md:mt-0 mr-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8789869890184!2d29.370626773744796!3d-3.3797370414953356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c182e2c00c0367%3A0x4bd4a480509c269a!2sH%C3%B4tel%20Emeraude!5e0!3m2!1sen!2sbi!4v1710455296693!5m2!1sen!2sbi" 
          width="600"
           height="450"
            style={customStyle}
            allowfullscreen=""
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2dlongitude!3dlatitude!4m15!2m14!1m13!1sYOUR+HOTEL+ADDRESS!3m1!4m1!2sYOUR+HOTEL+NAME!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe> */}
          </div>
        </div>
      </div>
  )
}
