import './App.css';

// Import `BucketList` so `BucketList` can be rendered
import BucketList from './components/BucketList';

function App() {
  return (
    <div className="bucket-app">
      {/* Render BucketList */}
      <BucketList />
    </div>
  );
}

export default App;
