import StartingPage from "./components/StartingPage/StartingPage";
import {Route, Routes} from "react-router-dom"
import NotFound from "./components/NotFound/NotFound";
import "./App.css"
import Chat1 from "./components/Chat1/Chat1";
import Chat2 from "./components/Chat2/Chat2";
import Chat4 from "./components/Chat4/Chat4";
import Chat3 from "./components/Chat3/Chat3";


function App() {
  const messages = [
    [{'text': "Hi!", 'time':"2022-08-21T05:26:27+00:00", "myMessage": false},
    {'text': "Hi! I haven't see you in few days. How are you?", 'time':"2022-08-21T05:27:27+00:00", "myMessage": true},
    {'text': "Not bad. I'm busy with the classes I'm taking. How about you?", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false},
    {'text': "I'm okay...", 'time':"2022-08-21T05:28:27+00:00", "myMessage": true}],
    [{'text': "Quickly come to the meeting room 1B, we have a big server issue", 'time':"2022-08-21T05:26:27+00:00", "myMessage": false},
    {'text': "I'm having a breakfast right now, can't you wait for 10 minutes?", 'time':"2022-08-21T05:27:27+00:00", "myMessage": true},
    {'text': "We are losing money! Quick!", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false}],
    [{'text': "Hi, Velazques.", 'time':"2022-08-21T05:26:27+00:00", "myMessage": false},
    {'text': "Good to meet you!", 'time':"2022-08-21T05:27:27+00:00", "myMessage": true},
     {'text': "Did you just arrive here?", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false},
      {'text': "Yeah, We arrived last week.", 'time':"2022-08-21T05:28:27+00:00", "myMessage": false}],
    []
   ]

  return (
    <div className='main'>
       <Routes>
          <Route path="/" element={<StartingPage/>} />
          <Route path="/1" element={<Chat1 messages={messages[0]}/>} />
          <Route path="/2" element={<Chat2  messages={messages[1]}/>} />
          <Route path="/3" element={<Chat3  messages={messages[2]}/>} />
          <Route path="/4" element={<Chat4  messages={messages[3]}/>} />
          <Route  path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;


