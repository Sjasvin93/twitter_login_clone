import './App.css';

function App() {
  return (
    <div className='flex items-center justify-center bg-[#1d9bf0] min-h-screen'>
      <div className='bg-white rounded-2xl p-7 min-h-96 w-[400px]'>
        <div className='pb-2 flex justify-center items-center'>
          <img src='/twitter.png' alt='twitter' className='h-10 w-10'/>
        </div>
        <div className='flex items-center justify-center font-bold pb-4'>
          Sign in to Twitter
        </div>
        <div className='pb-4'>
          <div className='pb-2'>
            <button className='flex justify-center items-center border border-black rounded-2xl w-full text-sm py-2'>
              <img src='/google.png' alt='Google' className='w-4 h-4 mr-2' />
              login with google 
            </button>
          </div>
          <div className='pb-2'>
          <button className='flex justify-center items-center border border-black rounded-2xl w-full text-sm py-2'>
              <img src='/apple.png' alt='Google' className='w-4 h-4 mr-2' />
              login with apple
            </button>
          </div>
        </div>
        <hr></hr>
        <span className="block w-12 bg-white m-auto mt-[-14px] text-center">OR</span>
        <div className='pb-4'>
          <div className='pb-6'>
            <input placeholder='Enter email or mobile number' className='border border-black w-full rounded-sm py-2'/>
          </div>
          <div className='pb-2'>
            <button className='w-full text-sm py-2 rounded-2xl bg-black text-white'>login</button>
          </div>
        </div>
        <div className='text-center text-sm font-semibold'>
          <label>Forgot password? <a className='text-[#1d9bf0]' href='google.com'>Sign up</a></label>
        </div>
      </div>
    </div>
  );
}

export default App;
