import './App.css';
import  {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
const App=()=>{
  return (
    <ChatEngine
      height="100vh"
      projectID= "819bdb10-024f-433c-af7c-1d655ad4ffcd"
      userName="Yash"
      userSecret="Admin@123"
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  )
};
export default App;
