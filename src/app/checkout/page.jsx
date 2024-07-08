import BackButton from '@/components/backButton';
import Container from '@/components/container';
import { CircleCheck, Disc2 } from 'lucide-react';
import nigeriaFlag from '../../../public/nigeriaFlag.png';
import Image from 'next/image';

const CheckoutPage = () => {
  return (
    <Container className='my-12 text-gray-prim'>
      <BackButton />

      <h1 className='font-bold text-[1.6rem] my-8'>Billing Details</h1>

      <section className='flex gap-16'>
        <aside className='w-[70%] flex flex-col gap-8'>
          <div className='flex gap-5'>
            <InputField
              name='firstName'
              text='First Name'
              placeholder='Davison'
              type='text'
            />
            <InputField
              name='lastName'
              text='Last Name'
              placeholder='Miracle'
              type='text'
            />
          </div>

          <div className='flex gap-5'>
            <label htmlFor='phoneNumber' className='flex flex-col gap-1 w-full'>
              <p className='font-bold text-lg'>Phone Number</p>
              <div className='h-12 w-full rounded-md bg-[#EAEEEF] px-3 flex items-center justify-between'>
                <div className='flex items-center gap-3 h-full'>
                  <aside>
                    <Image
                      src={nigeriaFlag}
                      alt='Nigeria flag and a dropdown icon'
                    />
                  </aside>
                  <hr className='w-1 h-3/5 border-r border-r-[#D9D9D9]' />
                  <input
                    type='number'
                    name='phoneNumber'
                    placeholder='9032412745'
                    className='h-full w-full font-semibold bg-transparent border-none focus:outline-none placeholder:text-gray-prim/65'
                  />
                </div>
                <CircleCheck color='#BF5428' size={20} />
              </div>
            </label>
            <InputField
              name='emailAddress'
              text='Email Address'
              placeholder='davisonmiracle@gmail.com'
              type='email'
            />
          </div>

          <label htmlFor='country' className='flex flex-col gap-1 w-full'>
            <p className='font-bold text-lg'>Country</p>
            <div className='h-12 w-full rounded-md bg-[#EAEEEF] px-3 flex items-center'>
              <div className='flex items-center gap-3 h-full'>
                <aside>
                  <Image
                    src={nigeriaFlag}
                    alt='Nigeria flag and a dropdown icon'
                  />
                </aside>
                <hr className='w-1 h-3/5 border-r border-r-[#D9D9D9]' />
                <input
                  type='number'
                  name='country'
                  placeholder='Nigeria'
                  className='h-full w-full font-semibold bg-transparent border-none focus:outline-none placeholder:text-gray-prim/65'
                />
              </div>
            </div>
          </label>

          <div className='flex gap-5'>
            <InputField
              name='state'
              text='State'
              placeholder='Lagos'
              type='text'
            />
            <InputField
              name='zipCode'
              text='Zip Code'
              placeholder='411024'
              type='number'
            />
          </div>

          <InputField
            name='billingAddress'
            text='Billing Address'
            placeholder='No 15 Sumola Mende Maryland'
            type='text'
          />
        </aside>

        <aside className='w-[30%] mt-8'>
          <div className='w-full h-14 rounded-md bg-[#EAEEEF] flex items-center font-bold pl-6 text-gray-prim text-lg'>
            Order Summary
          </div>
          <section className='mt-5 flex flex-col gap-3 text-gray-prim px-1'>
            <div className='flex justify-between'>
              <h2 className='font-bold text-lg'>Subtotal</h2>
              <p>$410.00</p>
            </div>
            <div className='flex justify-between'>
              <h2 className='font-bold text-lg'>Shipping</h2>
              <p>Free</p>
            </div>
            <p className='text-[#BF5428] text-sm cursor-pointer my-3 font-semibold'>
              Add Coupon Code
            </p>
            <div className='flex justify-between'>
              <h2 className='font-bold text-lg'>Total</h2>
              <p>$410.00</p>
            </div>
            <button className='w-fit mx-auto mt-2 px-12 py-2 text-sm text-white bg-green-sec rounded-md transition-all font-semibold hover:bg-transparent hover:text-green-sec border-2 border-green-sec'>
              Continue Payment
            </button>
          </section>
        </aside>
      </section>

      <h1 className='font-bold text-[1.6rem] mb-8 mt-10'>Payment Method</h1>

      <section className='flex flex-col gap-3 mb-6'>
        <div className='flex items-center gap-2'>
          <Disc2 size={20} color='#BF5428' />
          <p className='font-semibold'>Pay with Credit Card</p>
        </div>
        <div className='flex items-center gap-2'>
          <Disc2 size={20} />
          <p className='font-semibold'>Pay with PayPal</p>
        </div>
        <div className='flex items-center gap-2'>
          <Disc2 size={20} />
          <p className='font-semibold'>Pay with git cards</p>
        </div>
      </section>

      <section className='flex flex-col gap-8 w-[70%] mt-5'>
        <div className='flex gap-5'>
          <InputField
            name='cardName'
            text='Name on Card'
            placeholder='Davison Miracle'
            type='text'
          />
          <InputField
            name='cardNumber'
            text='Number on Card'
            placeholder='55356787689'
            type='number'
          />
        </div>

        <div className='flex gap-5'>
          <InputField
            name='expiryDate'
            text='Expiry Date'
            placeholder='05/27'
            type='text'
          />
          <InputField name='ccv' text='CCV' placeholder='313' type='number' />
        </div>
      </section>
    </Container>
  );
};

const InputField = ({ name, text, placeholder, type }) => {
  return (
    <label htmlFor={name} className='flex flex-col gap-1 w-full'>
      <p className='font-bold text-lg'>{text}</p>
      <div className='h-12 w-full rounded-md bg-[#EAEEEF] px-3'>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className='h-full w-full font-semibold bg-transparent border-none focus:outline-none placeholder:text-gray-prim/65'
        />
      </div>
    </label>
  );
};

export default CheckoutPage;
