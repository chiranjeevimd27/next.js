// pages/index.js
import AudioCutter from '../components/AudioCutter';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <AudioCutter />
      </main>
    </div>
  );
}
