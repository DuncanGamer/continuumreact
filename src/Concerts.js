



function Concert(props) {
    return (
        <>
           

                <div class=" shrink-0 snap-center w-full flex flex-col   md:flex-row md:max-w-xl rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                    <img class=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={props.Image} alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-medium mb-2"> {props.Title} </h5>
                        <p class="text-gray-700 text-base mb-4">
                            {props.Text}
                        </p>
                        <p class="text-gray-600 text-xs">{props.Tikets}</p>

                    </div>
                    
                </div>
            

        </>
    )
}
export default Concert