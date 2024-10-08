import './App.css'

export default function App() {
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-between items-center p-8 lg:p-10'>
        <div className='flex-grow flex flex-col justify-center items-center'>
          <div className='max-w-[400px] text-center'>
            <img src='./DSC01483.jpg' className='rounded-xl mx-auto'></img>

            <div className='flex justify-between w-full mt-4'>
              <p className=''>닫은</p>
              <p>Straks tilbake</p>
            </div>
          </div>
        </div>


        <div className='flex flex-col items-center justify-center text-gray-400 text-wrap'>
          <a href='https://archive.markusevanger.no' className="cursor-pointer underline">visit old site</a>
          <p className='text-wrap'>markusevanger@gmail.com</p>
        </div>
      </div>
    </>
  )
}


