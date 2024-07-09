'use client';

import BackButton from '@/components/backButton';
import Container from '@/components/container';
import { useAppContext } from '../context';
import { useState } from 'react';
import Image from 'next/image';
import arrowBottom from '../../../public/arrow-bottom.png';

const countries = [
  'Nigeria',
  'Canada',
  'France',
  'Germany',
  'United States',
  'United States',
  'Ghana',
  'South Africa',
  'Uganda',
  'Kenya',
  'Belgium',
  'Saudi Arabia',
];
const CheckoutPage = () => {
  const { cartTotal } = useAppContext();
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');

  return (
    <Container className='my-12 text-gray-prim'>
      <BackButton />

      <h1 className='font-bold text-[1.6rem] my-8'>Billing Details</h1>

      <section className='flex gap-16 flex-col sm:flex-row'>
        <aside className='w-full flex flex-col gap-8 sm:w-[70%]'>
          <div className='flex flex-col gap-5 sm:flex-row'>
            <InputField
              name='firstName'
              text='First Name'
              placeholder='enter first name'
              type='text'
            />
            <InputField
              name='lastName'
              text='Last Name'
              placeholder='enter last name'
              type='text'
            />
          </div>

          <div className='flex gap-5 flex-col sm:flex-row'>
            <InputField
              name='phoneNumber'
              text='Phone Number'
              placeholder='enter phone number'
              type='number'
            />
            <InputField
              name='emailAddress'
              text='Email Address'
              placeholder='enter email address'
              type='email'
            />
          </div>

          <label htmlFor='country' className='flex flex-col gap-1 w-full'>
            <p className='font-bold text-lg'>Country</p>
            <div className='h-12 w-full rounded-md bg-gray-prim/10 px-3 flex items-center'>
              <select
                value={selectedCountry}
                name={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className='flex items-center gap-3 h-full w-full bg-transparent border-none focus:outline-none text-gray-prim cursor-pointer appearance-none placeholder:text-gray-prim/65'
              >
                {countries.map((country) => {
                  return (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  );
                })}
              </select>
              <Image
                src={arrowBottom}
                alt='arrow button indicating a dropdown'
              />
            </div>
          </label>

          <div className='flex gap-5 flex-col sm:flex-row'>
            <InputField
              name='state'
              text='State'
              placeholder='enter state'
              type='text'
            />
            <InputField
              name='zipCode'
              text='Zip Code'
              placeholder='enter zip code'
              type='number'
            />
          </div>

          <InputField
            name='billingAddress'
            text='Billing Address'
            placeholder='enter billing address'
            type='text'
          />
        </aside>

        <aside className='w-full mt-8 sm:w-[30%]'>
          <div className='w-full h-14 rounded-md bg-[#EAEEEF] flex items-center font-bold pl-6 text-gray-prim text-lg'>
            Order Summary
          </div>
          <section className='mt-5 flex flex-col gap-3 text-gray-prim px-1'>
            <div className='flex justify-between'>
              <h2 className='font-bold text-lg'>Subtotal</h2>
              <p>${cartTotal}</p>
            </div>
            <div className='flex justify-between'>
              <h2 className='font-bold text-lg'>Shipping</h2>
              <p>Free</p>
            </div>
            <p className='text-[#BF5428] text-base cursor-pointer my-3 font-semibold'>
              Add Coupon Code
            </p>
            <div className='flex justify-between'>
              <h2 className='font-bold text-lg'>Total</h2>
              <p>${cartTotal}</p>
            </div>
            <button className='w-fit mx-auto mt-2 px-12 py-2 text-sm text-white bg-green-sec rounded-md transition-all font-semibold hover:bg-[#234149] border-2 border-green-sec'>
              Continue Payment
            </button>
          </section>
        </aside>
      </section>

      <h1 className='font-bold text-[1.6rem] mb-8 mt-10 '>Payment Method</h1>

      <section className='flex flex-col gap-3 mb-6 w-fit'>
        <label htmlFor='payWithCreditCard' className='flex items-center gap-2 '>
          <input
            type='radio'
            name='payment'
            id='payWithCreditCard'
            className='accent-[#BF5428] w-4 h-4 cursor-pointer'
          />
          <p className='font-semibold'>Pay with Credit Card</p>
        </label>
        <label htmlFor='payWithPaypal' className='flex items-center gap-2 '>
          <input
            type='radio'
            name='payment'
            id='payWithPaypal'
            className='accent-[#BF5428] w-4 h-4 cursor-pointer'
          />
          <p className='font-semibold'>Pay with PayPal</p>
        </label>
        <label htmlFor='payWithGiftCards' className='flex items-center gap-2 '>
          <input
            type='radio'
            name='payment'
            id='payWithGiftCards'
            className='accent-[#BF5428] w-4 h-4 cursor-pointer'
          />
          <p className='font-semibold'>Pay with gift cards</p>
        </label>
      </section>

      <section className='flex flex-col gap-8 w-full mt-5 sm:sm:w-[70%]'>
        <div className='flex flex-col gap-5 sm:flex-row'>
          <InputField
            name='cardName'
            text='Name on Card'
            placeholder='enter card name'
            type='text'
          />
          <InputField
            name='cardNumber'
            text='Card Number'
            placeholder='enter card number'
            type='number'
          />
        </div>

        <div className='flex gap-5 flex-col sm:flex-row'>
          <InputField
            name='expiryDate'
            text='Expiry Date'
            placeholder='enter expiry date'
            type='text'
          />
          <InputField
            name='ccv'
            text='CCV'
            placeholder='enter ccv'
            type='number'
          />
        </div>
      </section>

      <section className='flex flex-col gap-4 mt-14 w-fit'>
        <label
          htmlFor='useShippingAddress'
          className='flex items-center gap-2 '
        >
          <input
            type='checkbox'
            name='useShippingAddress'
            id='useShippingAddress'
            className='accent-green-sec w-6 h-6 cursor-pointer'
          />
          <p className='font-semibold'>
            Use shipping address as Billing address
          </p>
        </label>
        <label htmlFor='acceptTerms' className='flex items-center gap-2 '>
          <input
            type='checkbox'
            name='acceptTerms'
            id='acceptTerms'
            className='accent-green-sec w-6 h-6 cursor-pointer'
          />
          <p className='font-semibold'>Accept Terms and Conditoion </p>
        </label>
      </section>
    </Container>
  );
};

const InputField = ({ name, text, placeholder, type }) => {
  return (
    <label htmlFor={name} className='flex flex-col gap-1 w-full'>
      <p className='font-bold text-lg'>{text}</p>
      <div className='h-12 w-full rounded-md bg-gray-prim/10 px-3'>
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
