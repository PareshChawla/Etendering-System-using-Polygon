import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Admin() {
  const { contract } = useContract("0x49032ADEB9b5b42917D01EC592fef97D6D643C64");
  const { mutateAsync: createTender, isLoading } = useContractWrite(contract, "createTender")

  const [_id, setId] = useState("");
  const [_description, setDescription] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const data = await createTender({ args: [_id, _description] });
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }

    // Clear form fields after submitting
    setId("");
    setDescription("");
  };

  return (
    <div className="h-screen bg-teal-50">
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="expiry">
          Tender Id
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="expiry"
          name="expiry"
          type="text"
          value={_id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          value={_description}
          onChange={(e) => setDescription(e.target.value)}
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
  );
}