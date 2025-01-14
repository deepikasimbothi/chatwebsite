import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
      <MessageContainer/>
    </div>
  )
};

export default Home;