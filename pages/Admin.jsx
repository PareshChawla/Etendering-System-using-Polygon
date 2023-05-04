import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Header from './Header'
import Footer from './Footer'

export default function CreateTenderForm() {
  const { contract } = useContract("0xcDEd284E807145149d07bCde1579af9564E0B1A2");
  const { mutateAsync: createTender, isLoading } = useContractWrite(contract, "createTender");

  const [description, setDescription] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createTender({ args: [description, expiry] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }

    // Clear form fields after submitting
    setDescription("");
    setExpiry("");
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