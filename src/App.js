
import './App.css';
import Carrusel from './Carrusel';
import Market1 from './Market1';

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
   Paragraph = "Lorem ipsum dolor sit, ametconsectetur adipisicing elit
   Porro in iusto sit cumque quo corporis perferendis sequi deserunt nobis 
   ecusandaedignissimos dolor facilis nemo obcaecati quaerat assumenda Maxime natus ad " />
   
   </>
  );
}

export default App;
