import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
     	return (
     		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
     			<div className='w-full p-6 rounded-lg shadow-md bg-red-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
     				<h1 className='text-3xl font-semibold text-center text-red-600'>
     					Sign Up <span className='text-red-600'> ChatApp</span>
     				</h1>
    
     				<form>
     					<div>
     						<label className='label p-2'>
     							<span className='text-base label-text'>Full Name</span>
     						</label>
     						<input type='text' placeholder='Deepu' className='w-full input input-bordered  h-10' />
     					</div>
    
     					<div>
     						<label className='label p-2 '>
     							<span className='text-base label-text'>Username</span>
     						</label>
     						<input type='text' placeholder='deepu' className='w-full input input-bordered h-10' />
     					</div>
    
     					<div>
     						<label className='label'>
     							<span className='text-base label-text'>Password</span>
     						</label>
     						<input
     							type='password'
     							placeholder='Enter Password'
     							className='w-full input input-bordered h-10'
     						/>
     					</div>
    
     					<div>
     						<label className='label'>
     							<span className='text-base label-text'>Confirm Password</span>
     						</label>
     						<input
     							type='password'
     							placeholder='Confirm Password'
     							className='w-full input input-bordered h-10'
     						/>
     					</div>
    
     					<GenderCheckbox />
    
     					<a className='text-sm hover:underline hover:text-red-600 mt-2 inline-block' href='#'>
     						Already have an account?
     					</a>
    
     					<div>
     						<button className='btn btn-block btn-sm mt-2 border border-red-700'>Sign Up</button>
     					</div>
     				</form>
     			</div>
     		</div>
     	);
     };
 export default SignUp;