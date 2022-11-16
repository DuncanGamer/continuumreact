
import './App.css';
import Baner from './Baner';
import Carrusel from './Carrusel';
import Concert from './Concerts';
import Market1 from './Market1';
import Market2 from './Market2';
import Footer from './Footer';
import { useEffect, useState } from 'react'
import axios from 'axios'
import TitleConcerts from './TitleConcerts';




function App() {
  const [concerts, setConcerts] = useState([])

  useEffect(() => {

    axios.get("./data.json")

      .then((data) => {

        console.log(data)

        setConcerts(data.data.data)
      })
  }, [])


  return (
    <>
      <Carrusel />
      <Market1
        Titulo1="Simplier."
        Titulo2="Happier."
        Titulo3=" Better concerts."
        Paragraph="Lorem ipsum dolor sit, ametconsectetur adipisicing elitPorro in iusto sit cumque quo corporis perferendis sequi deserunt nobis ecusandaedignissimos dolor facilis nemo obcaecati quaerat assumenda Maxime natus ad " />
      <Market2 />

      <TitleConcerts />
      
    
      <div class=" container overflow-x-auto  mx-auto flex md:overflow-visible  px-6 py-6 ">
   
        <div class="  px-6 py-6 shrink-0  snap-center flex sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  ">
          {concerts.map(({ id, image, name, description, quantity}) => (

            <Concert key={id} image={image} name={name} description={description} quantity={quantity} />

          ))}
        </div>
      </div>
     
      <Baner />
      <Footer />



    </>
  );
}

export default App;
