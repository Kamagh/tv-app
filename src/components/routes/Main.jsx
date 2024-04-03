import Image from 'next/image';
import Button from '../Button';

const Main = () => {
  return (
    <section className='p-20'>
      <div className={`featured-video-block relative w-full h-[400px] bg-cover bg-center`}>
        <div className='bg-opacity-70'>
          <p className='text-white text-xs font-bold'>Movie</p>
          <Image src='/assets/FeaturedTitleImage.png' alt='Movie Logo' className='mt-1' width={500} height={350} />
          <div className='flex mt-2'>
            <p className='text-white text-xs'>Release Year: 2023</p>
            <p className='text-white text-xs'>MPA Rating: PG-13</p>
            <p className='text-white text-xs'>Duration: 2h 15m</p>
          </div>
          <p className='text-white text-sm mt-4'>Short description of the movie goes here...</p>

          <div className='mt-4 flex'>
            <Button type='button' variant='primary' label='▶ Play'
                    className='px-4 py-2 bg-white text-black mr-2 min-w-max' />
            <Button type='button' variant='primary' label='More Info'
                    className='px-4 py-2 bg-blue-70 text-white mr-2' />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Main;