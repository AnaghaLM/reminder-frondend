import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReminderList from './pages/ReminderList';
import AddReminder from './pages/AddReminder';
import EditReminder from './pages/EditReminder';
import ViewReminder from './pages/ViewReminder';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<ReminderList />} />
        <Route path="/add-reminder" element={<AddReminder />} />
        <Route path="/edit/:id" element={<EditReminder />} />
        <Route path="/view/:id" element={<ViewReminder />} />
      </Routes>
    </>
  );
}
        
       
       

     

export default App;
