import Navbar from "./components/Navbar";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

//pages

import Home from "./pages/Home"
import About from "./pages/About"
import HBC from "./pages/Hobby_based_clubs"
import RootLayout from "./layout/RootLayout";
import UpcomingEvents from "./pages/Upcoming_events";
import OurProjectsPage from "./pages/Our_projects_page";
import ClubService from "./pages/projects/ClubService";
import InternationalService from "./pages/projects/InternationalService";
import PartnerInService from "./pages/projects/PartnerInService";
import MediaProduction from "./pages/projects/MediaProduction";
import CommunityService from "./pages/projects/CommunityService";
import PublicRelationsandMarketing from "./pages/projects/PublicRelationsandMarketing";
import EditorialService from "./pages/projects/EditorialService";
import Siksha from "./pages/projects/Siksha";
import Sports from "./pages/projects/Sports"
import DigitalCommunication from "./pages/projects/DigitalCommunication";
import ProfessionalDevelopment from "./pages/projects/ProfessionalDevelopment";
import EnterprenurshipDevelopment from "./pages/projects/EnterprenurshipDevelopment";
import SocialMediaRelations from "./pages/projects/SocialMediaRelations";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/HBC' element={<HBC />} />
      <Route path='/Upcoming_events' element={<UpcomingEvents />} />
      <Route path="/Our_projects_page" element={<OurProjectsPage />} />
      
      <Route path="Our_projects_page/ClubService" element={<ClubService />} />
      <Route path="Our_projects_page/InternationalService" element={<InternationalService />} />
      <Route path="Our_projects_page/PartnerInService" element={<PartnerInService />} />
      <Route path="Our_projects_page/MediaProduction" element={<MediaProduction />} />
      <Route path="Our_projects_page/CommunityService" element={<CommunityService />} />
      <Route path="Our_projects_page/PublicRelationsandMarketing" element={<PublicRelationsandMarketing />} />
      <Route path="Our_projects_page/EditorialService" element={<EditorialService />} />
      <Route path="Our_projects_page/Siksha" element={<Siksha />} />
      <Route path="Our_projects_page/Sports" element={<Sports />} />
      <Route path="Our_projects_page/DigitalCommunication" element={<DigitalCommunication />} />
      <Route path="Our_projects_page/ProfessionalDevelopment" element={<ProfessionalDevelopment />} />
      <Route path="Our_projects_page/EnterprenurshipDevelopment" element={<EnterprenurshipDevelopment />} />
      <Route path="Our_projects_page/SocialMediaRelations" element={<SocialMediaRelations />} />

    </Route>
  )
)

export default function App(blogs) {



  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  })
  return (
    <div className="max-h-max" >

      {/* <Navbar></Navbar> */}
      <RouterProvider router={router} />

    </div>
  );
}
