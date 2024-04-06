import Logo from './Logo';

export default function Footer() {
  return (
    <footer className='w-full h-[7rem] flex justify-around items-center bg-slate-400'>
      <Logo />
      <div>
        <p>Location</p>
        <p className='w-[400px]'>
          Bihari Sabji Mandi near Raj boutique Rajiv Nagar Gurgaon Haryana -
          India
        </p>
      </div>
      <button>DONATE</button>
      <button>CONTACT US</button>
      <button>CONTACT US</button>
    </footer>
  );
}
