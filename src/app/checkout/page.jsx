'use client';

import Container from '@/components/container';
import { useAppContext } from '../context';
import { useState } from 'react';
import Image from 'next/image';
import arrowBottom from '../../../public/arrow-bottom.png';
import CheckOutModal from '@/components/checkOutModal';

const countries = [
  'Nigeria',
  'Canada',
  'France',
  'Germany',
  'United States',
  'United Kingdom',
  'Ghana',
  'South Africa',
  'Uganda',
  'Kenya',
  'Belgium',
  'Saudi Arabia',
];

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
  billingAddress: '',
  state: '',
  zipCode: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  nameOnCard: '',
};

const CheckoutPage = () => {
  const { cartTotal, openModal, closeModal, isModalOpen } = useAppContext();
  const [chechoutInfo, setChechoutInfo] = useState(initialState);
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setChechoutInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (chechoutInfo === initialState) {
      setError(true);
      closeModal();
    } else {
      setError(false);
      openModal();
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${isModalOpen && 'fixed'} w-full`}
    >
      {isModalOpen && <CheckOutModal {...chechoutInfo} />}
      <Container className={`mt-24 mb-12 text-gray-prim`}>
        <h1 className='font-bold text-[1.6rem] my-8'>Billing Details</h1>

        <div className='flex gap-16 flex-col sm:flex-row'>
          <aside className='w-full flex flex-col gap-8 sm:w-3/4'>
            <div className='flex flex-col gap-5 sm:flex-row'>
              <InputField
                name='firstName'
                value={chechoutInfo.firstName}
                onChangeHandler={onChangeHandler}
                text='First Name'
                placeholder='enter first name'
                type='text'
              />
              <InputField
                name='lastName'
                value={chechoutInfo.lastName}
                text='Last Name'
                onChangeHandler={onChangeHandler}
                placeholder='enter last name'
                type='text'
              />
            </div>

            <div className='flex gap-5 flex-col sm:flex-row'>
              <InputField
                name='phoneNumber'
                value={chechoutInfo.phoneNumber}
                text='Phone Number'
                onChangeHandler={onChangeHandler}
                placeholder='enter phone number'
                type='number'
              />
              <InputField
                name='emailAddress'
                value={chechoutInfo.emailAddress}
                text='Email Address'
                onChangeHandler={onChangeHandler}
                placeholder='enter email address'
                type='email'
              />
            </div>

            <label htmlFor='country' className='flex flex-col gap-1 w-full'>
              <p className='font-bold text-lg'>Country</p>
              <div className='h-12 w-full rounded-md bg-gray-prim/10 px-3 flex items-center'>
                <select
                  name={selectedCountry}
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className='flex items-center gap-3 h-full w-full bg-transparent border-none focus:outline-none text-gray-prim cursor-pointer appearance-none text-sm placeholder:text-gray-prim/40 placeholder:text-sm'
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
                value={chechoutInfo.state}
                onChangeHandler={onChangeHandler}
                text='State'
                placeholder='enter state'
                type='text'
              />
              <InputField
                name='zipCode'
                value={chechoutInfo.zipCode}
                onChangeHandler={onChangeHandler}
                text='Zip Code'
                placeholder='enter zip code'
                type='number'
              />
            </div>

            <InputField
              name='billingAddress'
              value={chechoutInfo.billingAddress}
              text='Billing Address'
              onChangeHandler={onChangeHandler}
              placeholder='enter billing address'
              type='text'
            />
          </aside>

          <aside className='w-full mt-8 sm:w-1/4'>
            <div className='w-full h-14 rounded-md bg-[#EAEEEF] flex items-center font-bold pl-6 text-gray-prim text-lg'>
              Order Summary
            </div>
            <section className='mt-5 flex flex-col gap-3 text-gray-prim px-1'>
              <div className='flex justify-between'>
                <h2 className='font-bold text-lg'>Subtotal</h2>
                <p>${cartTotal}.00</p>
              </div>
              <div className='flex justify-between'>
                <h2 className='font-bold text-lg'>Shipping</h2>
                <p>Free</p>
              </div>

              <div className='flex justify-between mt-5'>
                <h2 className='font-bold text-lg'>Total</h2>
                <p>${cartTotal}.00</p>
              </div>
              <button
                type='submit'
                className='w-fit mx-auto mt-2 px-12 py-2 text-sm text-green-sec bg-transparent rounded-md transition-all font-semibold hover:bg-[#234149] border-2 border-green-sec hover:text-white'
                onClick={(e) => submitHandler(e)}
              >
                Preview Order
              </button>
              <p className='text-red-500 text-center'>
                Please fill in the input fields
              </p>
            </section>
          </aside>
        </div>

        <h1 className='font-bold text-[1.6rem] mb-2 mt-10'>Payment Method</h1>

        <section className='flex flex-col gap-3 mb-6 w-fit'>
          <label
            htmlFor='payWithCreditCard'
            className='flex items-center gap-2 '
          >
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
          <label
            htmlFor='payWithGiftCards'
            className='flex items-center gap-2 '
          >
            <input
              type='radio'
              name='payment'
              id='payWithGiftCards'
              className='accent-[#BF5428] w-4 h-4 cursor-pointer'
            />
            <p className='font-semibold'>Pay with gift cards</p>
          </label>
        </section>

        <section className='flex flex-col gap-8 w-full mt-10 sm:sm:w-[70%]'>
          <div className='flex flex-col gap-5 sm:flex-row'>
            <InputField
              name='nameOnCard'
              value={chechoutInfo.nameOnCard}
              onChangeHandler={onChangeHandler}
              text='Name on Card'
              placeholder='enter card name'
              type='text'
            />
            <InputField
              name='cardNumber'
              value={chechoutInfo.cardNumber}
              onChangeHandler={onChangeHandler}
              text='Card Number'
              placeholder='enter card number'
              type='number'
            />
          </div>

          <div className='flex gap-5 flex-col sm:flex-row'>
            <InputField
              name='expiryDate'
              value={chechoutInfo.expiryDate}
              onChangeHandler={onChangeHandler}
              text='Expiry Date'
              placeholder='enter expiry date'
              type='text'
            />
            <InputField
              name='cvv'
              value={chechoutInfo.cvv}
              onChangeHandler={onChangeHandler}
              text='CCV'
              placeholder='enter ccv'
              type='number'
            />
          </div>
        </section>

        <section className='flex flex-col gap-4 mt-8 w-fit'>
          <label
            htmlFor='useShippingAddress'
            className='flex items-center gap-2 '
          >
            <input
              type='checkbox'
              name='useShippingAddress'
              id='useShippingAddress'
              className='accent-green-sec w-7 h-7 cursor-pointer'
            />
            <p className='text-sm text-gray-prim'>
              Use shipping address as Billing address
            </p>
          </label>
          <label htmlFor='acceptTerms' className='flex items-center gap-2 '>
            <input
              type='checkbox'
              name='acceptTerms'
              id='acceptTerms'
              className='accent-green-sec w-7 h-7 cursor-pointer'
            />
            <p className='text-sm text-gray-prim'>
              Accept Terms and Conditoion{' '}
            </p>
          </label>
        </section>
      </Container>
    </form>
  );
};

const InputField = ({
  name,
  value,
  text,
  placeholder,
  type,
  onChangeHandler,
}) => {
  return (
    <label htmlFor={name} className='flex flex-col gap-1 w-full'>
      <p className='font-bold text-lg'>{text}</p>
      <div className='h-12 w-full rounded-md bg-gray-prim/10 px-3'>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required
          onChange={(e) => {
            onChangeHandler(e);
          }}
          className='h-full w-full text-sm font-semibold bg-transparent border-none focus:outline-none placeholder:text-gray-prim/40 placeholder:text-sm'
        />
      </div>
    </label>
  );
};

export default CheckoutPage;
