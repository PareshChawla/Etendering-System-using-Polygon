import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Header from './Header'
import Footer from './Footer'
import _ from 'lodash'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateTenderForm() {
  const { contract } = useContract("0xcDEd284E807145149d07bCde1579af9564E0B1A2");
  const { mutateAsync: createTender, isLoading } = useContractWrite(contract, "createTender");

  let message;
  const notifyA = () => toast.success(message);
  const notifyB = () => toast.error(message);


  const [description, setDescription] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if(_.isEmpty(description)){
      message = "Description cannot be empty"
      return notifyB(message)
    }


    if(_.isEmpty(expiry)){
      message = "Expiry cannot be empty"
      return notifyB(message)
    }

    try {
      const data = await createTender({ args: [description, expiry] });
      console.info("contract call successs", data);
      message = "Successfully created new tender"
      setDescription("");
      setExpiry("");
      return  notifyA(message)
    } catch (err) {
      setDescription("");
      setExpiry("");
      console.error("contract call failure", err);
    }

    // Clear form fields after submitting

  };

  return (

    <div className="bg-teal-50">
    <Header />
        <div className="h-screen bg-teal-50">

    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit} style={{marginTop:"150px"}}>
    <h2 className="text-2xl font-bold mb-6">Create New Tender</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="expiry">
          Expiry
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="expiry"
          name="expiry"
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Create Tender"}
        </button>
      </div>
    </form>
    </div>
    <Footer />
    </div>
  );
}