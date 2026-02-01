import React from 'react'

const AddProduct = ({onClose}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Blurred Background */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      ></div>

      {/* Modal Box */}
      <div className="relative z-10 w-[420px] bg-white rounded-2xl shadow-2xl p-8 border border-amber-800">
        <h3 className="text-xl font-semibold mb-6">
          Add New Product
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B5E34] outline-none"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B5E34] outline-none"
          />

            <textarea
            placeholder="Description"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B5E34] outline-none"
          ></textarea>

          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-[#8B5E34] text-white rounded-lg hover:bg-[#6f4a29]"
            >
              Save Product
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border rounded-lg hover:bg-neutral-100"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default AddProduct ;