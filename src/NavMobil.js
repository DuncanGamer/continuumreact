
import logo from './/img/logo1.png'
function NavMobil (){
return(
    <>
     <div class=" lg:hidden container flex justify-between items-center mx-auto py-2 pl-3 pr-3 shadow-lg">
        <div>
            <img src={logo} alt="logo continum" width="20px"/>
        </div>
        <div>
            <i class="fa-solid fa-bars"></i>
        </div>

    </div>
    
    </>
)

}
export default NavMobil