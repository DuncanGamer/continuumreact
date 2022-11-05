
import React, { Component } from 'react';
import logo from './/img/logo1.png'
function NavDesktop (){
    return (
        <>
        
         <div class="  hidden lg:block mt-6 shadow-md">
        <div class=" container flex justify-between items-center mx-auto py-5">
            <div class=" flex items-center gap-x-6 ">
                <img src={logo} alt="logo continum" width="60px"/>
                <a href="#" class=" hover:text-gray-600">Products</a>
                <a href="#" class=" hover:text-gray-600">Solutions</a>
                <a href="#" class=" hover:text-gray-600">Marketplace</a>
                <a href="#" class=" hover:text-gray-600">Community</a>
                <a href="#" class=" hover:text-gray-600">Pricing</a>
            </div>
            <div class=" flex gap-4">
                <a href="#"
                    class=" hover:shadow-lg shadow-md shadow-gray-500/50 border px-5 py-3 rounded-xl focus:outline-dotted focus:outline-1transition duration-300 ease-out hover:ease-in">Log
                    In</a>
                <a href="#" class=" px-5 py-3 rounded-xl hover:shadow-md shadow-lg shadow-blue-800  bg-blue-700 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in">Sing
                    Up</a>
            </div>

        </div>

    </div> 
        </>
    )
}
export default NavDesktop