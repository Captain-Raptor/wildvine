import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home/Index';
import Events from '../Pages/Events/Index';
import BroadCasting from '../Pages/BroadCasting/Index';
import Contacts from '../Pages/Contacts/Index';
import LocateChurch from '../Pages/LocateChurch/Index';
import Ministries from '../Pages/Ministries/Index';
import PrayerRequest from '../Pages/PrayerRequest/Index';
import Testimonials from '../Pages/Testimonials/Index';
import Footer from '../Components/General/Footer';
function Routing() {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/BroadCasting" element={<BroadCasting />} />
         <Route path='/contacts' element={<Contacts/>} />
         {/* <Route path='/events' element={<Events />} /> */}
         <Route path='/Locatechurch' element={<LocateChurch />} />
         <Route path='/Ministries' element={<Ministries />} />
         <Route path='/Prayerrequests' element={<PrayerRequest />} />
         <Route path='/Testimonials' element={<Testimonials />} />
         {/* <Route path='' element={} /> */}
         {/* <Route path='' element={} /> */}


    </Routes>
 
  
  )
}

export default Routing