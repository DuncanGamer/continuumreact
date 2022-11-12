
import './App.css';
import Baner from './Baner';
import Carrusel from './Carrusel';
import ConcertsMaster from './ConcertsMaster';

import Festivals from './Festivals';

import Concert from './Concerts';

import Market1 from './Market1';
import Market2 from './Market2';
import Footer from './Footer';





function App() {
  
  return (
   <>
   
   

   
   <Carrusel/>
   <Market1
   Titulo1= "Simplier."
   Titulo2= "Happier."
   Titulo3= " Better concerts."
   Paragraph = "Lorem ipsum dolor sit, ametconsectetur adipisicing elitPorro in iusto sit cumque quo corporis perferendis sequi deserunt nobis ecusandaedignissimos dolor facilis nemo obcaecati quaerat assumenda Maxime natus ad " />
   <Market2/>
   <Concert/>
  
 
  
  <Baner/>
  <Footer/>
  
 
  
   </>
  );
}

export default App;
