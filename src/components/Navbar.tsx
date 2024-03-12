import Image from 'next/image';
import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-3 bg-black/90 sticky top-0'>
      <Link
        href='/'
        className='flex flex-row items-center justify-between space-x-3'
      >
        <Image
          src='/logo.png'
          height={50}
          width={50}
          alt='logo'
          className='rounded-md'
        />
        <h1 className='text-2xl font-semibold text-white'>Coursefy.</h1>
      </Link>
      <div>
        <Button className='text-xl' size='lg' variant='default'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
