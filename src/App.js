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
