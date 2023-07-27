//Question for test revise the below Link

// https://res.cloudinary.com/dhn7j7hrf/image/upload/c_crop,w_700,h_755/v1690432065/WhatsApp_Image_2023-07-25_at_15.11.19_ungaev.jpg

import TimelineView from './components/TimelineView'

import './App.css'

const App = () => (
  <div>
    <TimelineView
      time={10}
      //   end={10}
      direction="clockwise"
      callback={() => console.log('timer Completed')}
    />
    <TimelineView
      time={10}
      direction="antiClockwise"
      callback={() => console.log('timer Completed')}
    />
    {/* <TimelineView
      end={20}
      direction="antiClockwise"
      callback={() => console.log('timer Completed')}
    /> */}
  </div>
)

export default App
