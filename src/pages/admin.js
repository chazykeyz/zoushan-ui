import React, { useState, useEffect } from "react";

import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMale } from "react-icons/io";
import { IoFemale } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { BsEyeFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios";
import { OrderReadAPI } from "./../constant";
import NavBar from "../components/navBar";

import { NavLink } from "react-router-dom";

// material ui stying
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(0,0,0,.02)",
    backdropFilter: "blur(4px)",
  },
}));

const Admin = () => {


    const [people, setPeople] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(OrderReadAPI).then((res) => {
        setPeople(res.data);
      });

    };
    dataFetch();
  }, []);
  const classes = useStyles();
  const [openUser, setOpenUser] = React.useState(false);
  const [openContract, setOpenContract] = React.useState(false);
  const [openPermission, setOpenPermission] = React.useState(false);
  const [openLoan, setOpenLoan] = React.useState(false);
  const [openSalary, setOpenSalary] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  // BROPBACKS
  // user info dropback

  return (
    <div
     
      style={{
        width: "98vw",
        overflow: "hidden",
      }}
    >
    <NavBar home={false}/>
      {/* drpbacks */}
      <div>


  
      </div>

      <div className="ml-8 text-3xl text-gray-400 font-black">Order DashBoard</div>
     
      <div className="my-4">
      

        <div className="-my-2 overflow-x-auto ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className=" overflow-hidden  sm:rounded-lg ">
              <table className="min-w-full divide-y ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                     Date
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                     Total Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                    Total Products
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500  tracking-wider"
                    >
                      Products
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="flex items-center justify-start">
           
                          <div className="ml-4 flex flex-col items-start">
                            <div className="text-base font-medium text-gray-900">
                             {person.user.username}
                            </div>
                            <div className="text-tiny text-gray-500">
                           {person.user.email}
                            </div>
                            <div className="text-tiny  p-1 px-3 inline-flex leading-5 font-medium rounded-full bg-red-100 text-red-800 ">
                              {person.user.phone_number}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-base text-gray-900">
                          {person.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div>
         </div>
                        <div
                          onClick={() => {
                            setOpenContract(true);
                          }}
                          className="cursor-pointer px-2 py-2 flex-col  items-start justify-around flex text-base leading-5 font-medium rounded-lg hover:bg-blue-500 hover:text-white bg-blue-100 text-blue-800"
                        >
                        <div> Country: {person.user.country}</div>
                         <div> Street: {person.user.city}</div>
       <div> Street: {person.user.street}</div>
        <div> Zip Code:    {person.user.zip_code}</div>
         
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div
                          onClick={() => {
                            setOpenPermission(true);
                          }}
                          className=" cursor-pointer p-2 items-center justify-around flex text-base leading-5 font-medium rounded-lg hover:bg-green-500 hover:text-white bg-green-100 text-green-800"
                        >
                             {person.time_Order}
                      
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                        <div
                          onClick={() => {
                            setOpenContract(true);
                          }}
                          className="px-2 py-2 items-center justify-around flex text-base leading-5 font-medium rounded-lg hover:bg-red-400 hover:text-white bg-red-100 text-red-500"
                        >
                          <BiDollar className="mx-1" /> {person.total_Price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          onClick={() => {
                            setOpenSalary(true);
                          }}
                          className="text-base text-gray-900"
                        >
                         {person.total_product_count} Items
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className=" ">
                          <div
                            onClick={() => {
                              setOpenDelete(true);
                            }}
                            className="px-2 cursor-pointer mx-1 py-2 items-center justify-around flex text-lg leading-5 font-medium rounded-lg hover:bg-purple-500 hover:text-white bg-purple-100 text-purple-800"
                          >
                            View Product
                          </div>
                        </div>
                      </td>
                            <Backdrop className={classes.backdrop} open={openDelete}>
             <div className=" grid grid-cols-12  w-screen">
          <div className="rounded-lg  col-span-10  col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
    
              <div className="rounded-t-xl bg-white overflow-hidden shadow  my-2 ">
                <div
                  className='font-semibold text-white text-xl  pt-10 p-4 bg-green-400'
                >
            {person.user.username}'s  Products
                 </div>
                <div className="p-4 h-80 overflow-y-scroll">
                  <div>
                    {person.product.map((item) => (
                      <div className="flex justify-between my-4 bg-gray-100 py-2 px-4 rounded-xl">
                        <div className="flex items-center ">
                          <div className="cursor-pointer flex-shrink-0 h-14 w-14  rounded-3xl ">
                            <img
                              className="h-13 w-13   rounded-3xl border-2 border-gray-100"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                              alt="profile"
                            />
                          </div>
              
                        </div>
                            
                        <div className=" flex items-center">
                          <div
                            style={{ borderWidth: 1 }}
                          
                            className="h-8 bg-purple-100 cursor-pointer text-purple-500  flex items-center px-4  rounded-xl"
                          >
                            {item.name}
                          </div>
                        </div>


                        
                        <div className=" flex items-center">
                          <div
                            style={{ borderWidth: 1 }}
                          
                            className="h-8 bg-purple-500 cursor-pointer text-white flex items-center px-4  rounded-xl"
                          >
                           Count: {item.product_count}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-start mt-3">
                <div
                  className="h-16  w-16 rounded-full text-white  bg-green-500 flex justify-center items-center cursor-pointer"
                  onClick={() => {
             setOpenDelete(false)
                  }}
                >
                  <AiOutlineClose size={20}/>
                </div>
              </div>
             
            
          </div>
        </div>
        </Backdrop>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
