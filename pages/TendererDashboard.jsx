// import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
// import { useState } from "react";

// export default function TendererDashboard() {
//   const { contract } = useContract("0x3389BF7f189D81Fb3b189af61c17aB54B448FD55");
//   const { mutateAsync: createTender, isLoading } = useContractWrite(contract, "createTender");

//   const [tenderDescription, setTenderDescription] = useState("");

//   const handleCreateTender = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await createTender({ args: [tenderDescription] });
//       console.info("contract call success", data);
//       setTenderDescription("");
//     } catch (err) {
//       console.error("contract call failure", err);
//       setTenderDescription("");
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen flex flex-col">
//       <main className="flex-grow px-4 py-8">
//         <h1 className="text-2xl text-black font-semibold">Tenderer Dashboard</h1>
//         <div className="my-8">
//           <h2 className="text-xl text-black font-semibold">Create Tender</h2>
//           <form onSubmit={handleCreateTender} className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Tender description"
//               value={tenderDescription}
//               onChange={(e) => setTenderDescription(e.target.value)}
//               className="py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-cyan-400 flex-grow"
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="bg-cyan-400 text-white font-semibold rounded-lg py-2 px-4"
//             >
//               {isLoading ? "Creating..." : "Create Tender"}
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }
import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

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
    <div className="h-screen bg-teal-50">
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
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
  );
}
