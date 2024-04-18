import React from 'react'

export const About = () => {
  return (
    <div>
        <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texte */}
          <div className="md:w-2/3 md:pr-8">
            <h1 className="text-3xl font-semibold mb-4">À propos de notre hôtel</h1>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor risus quis ex scelerisque, id sollicitudin magna sodales. Nulla facilisi. Curabitur mattis pellentesque vestibulum. Fusce scelerisque viverra erat, ut cursus arcu ultricies sed. Phasellus ut luctus lorem. Suspendisse id dapibus lectus, id semper felis. Vivamus euismod, eros id consectetur facilisis, enim neque dapibus arcu, non auctor dolor tortor eu lorem. Proin elementum, tortor id imperdiet egestas, arcu urna convallis neque, sed ultricies neque sapien ac justo. Donec ac varius lacus. Nulla facilisi. Sed vulputate, mauris quis hendrerit luctus, ligula nulla mollis magna, a aliquam mauris quam id nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Ut porta tellus vel semper porttitor. Curabitur consequat metus eget mi luctus, id commodo magna porta.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img src={"img/20.jpg"} alt="Notre hôtel" className="w-full h-60 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
