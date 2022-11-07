
import './App.css';
import Baner from './Baner';
import Carrusel from './Carrusel';
import ConcertsMaster from './ConcertsMaster';
import DernieresVentes from './DernieresVentes';
import Festivals from './Festivals';

import LesBonsPlans from './LesBonsPlans';

import Market1 from './Market1';
import Market2 from './Market2';

import Nav1 from './Nav1';
import NavDesktop from './NavDesktop';
import NavMobil from './NavMobil';

function App() {
  return (
   <>
   <Nav1/>
   <NavDesktop/>
   <NavMobil/>
   <Carrusel/>
   <Market1
   Titulo1= "Simpler."
   Titulo2= "Happier."
   Titulo3= " Better concerts."
   Paragraph = "Lorem ipsum dolor sit, ametconsectetur adipisicing elitPorro in iusto sit cumque quo corporis perferendis sequi deserunt nobis ecusandaedignissimos dolor facilis nemo obcaecati quaerat assumenda Maxime natus ad " />
   <Market2/>
  <ConcertsMaster/>
  <LesBonsPlans/>
  <Festivals/>
  <DernieresVentes/>
  <Baner/>
 
  
   </>
  );
}

export default App;
