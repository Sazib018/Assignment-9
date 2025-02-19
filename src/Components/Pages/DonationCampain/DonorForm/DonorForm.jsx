import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonorForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Donation Data:', data);
    toast.success('✅ Thank you! We will reach your destination soon', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    reset();
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg shadow-blue-400 mt-24">
      <h2 className="text-xl font-semibold text-center mb-4">Donate Winter Clothes</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            {...register('quantity', { required: 'Quantity is required', min: 1 })}
            className="w-full p-2 border rounded-md"
            min="1"
            onKeyDown={(e) => {
              if (e.key === '-' || e.key === 'ArrowDown') {
                e.preventDefault();
              }
            }}
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Item Type</label>
          <select {...register('itemType', { required: 'Item Type is required' })} className="w-full p-2 border rounded-md">
            <option value="">Select an item</option>
            <option value="Blanket">Blanket</option>
            <option value="Jacket">Jacket</option>
            <option value="Sweater">Sweater</option>
          </select>
          {errors.itemType && <p className="text-red-500 text-sm">{errors.itemType.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Pickup Location</label>
          <input
            type="text"
            {...register('pickupLocation', { required: 'Pickup location is required' })}
            className="w-full p-2 border rounded-md"
          />
          {errors.pickupLocation && <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Additional Notes (Optional)</label>
          <textarea {...register('notes')} className="w-full p-2 border rounded-md"></textarea>
        </div>


        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Submit Donation</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default DonorForm;
