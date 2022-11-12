
import Battle from './/img/Battle-of-the-bands.png'
import Adele from './/img/Adele.png'
import Indie from './/img/Idieair.png'

import Artic from './/img/Artic.png'
import BruceSprinting from './/img/Bruce-sprinting.png'
import BryanAdams from './/img/Bryan-Adams.png'




function Concert() {
     
    
    return (
        <>
    
    <div class=" container m-auto pb-5">
            <h3 class=" px-4 text-xl text-gray-600  font-bold">CONCERTS</h3>
        </div>
        <div class=" container relative snap-x overflow-x-auto mx-auto flex lg:flex-row gap-y-6 justify-between gap-5 px-6 py-6 ">
                <div class=" shrink-0 snap-center w-full flex flex-col   md:overflow-x-scroll  md:flex-row md:max-w-xl rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                    <img class=" w-full h-full md:h-auto  object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src="" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-medium mb-2"> </h5>
                        <p class="text-gray-700 text-base mb-4">
                            
                        </p>
                        <p class="text-gray-600 text-xs"></p>

                    </div>
                    
                </div> 
            
        </div>

        </>
    )
}
export default Concert