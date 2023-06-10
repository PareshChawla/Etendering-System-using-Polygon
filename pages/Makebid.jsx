import { useState,useEffect } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Header from './Header'
import Footer from './Footer'

export default function MakeBid() {

    const router = useRouter();
    
    const [data, setData] = useState(null);
    const [tenderId, setTenderId] = useState("");
    const [desc, setDesc] = useState('');
    
    useEffect(() => {
      const { data: queryParamsData } = router.query;
      if (queryParamsData) {
        const { prop1, prop2 } = JSON.parse(queryParamsData);
        console.log(JSON.parse(queryParamsData)); // add this line to see the parsed data in the console
        setTenderId(prop1);
        setDesc(prop2);
      }
    }, [router, setData, setTenderId, setDesc]);
    
    console.log(desc); // this should now print the correct value of desc



  
    const [amount, setAmount] = useState("");
    const [rating, setRating] = useState("");

    const { contract } = useContract("0xcDEd284E807145149d07bCde1579af9564E0B1A2");
    const { mutateAsync: makeBid, isLoading } = useContractWrite(contract, "makeBid");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await makeBid({ args: [tenderId, amount, rating] });
            console.info("contract call success", data);
            // add any additional logic you need to update your UI or display success message
        } catch (err) {
            console.error("contract call failure", err);
            // add any additional logic you need to handle the error or display error message
        }
    };

    return (
        <>
        <Header />

        <div className="p-6" >
            <h2 className="text-2xl font-bold mb-6">Make Bid</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="tenderId" className="block text-gray-700 font-bold mb-2">
                        Tender ID
                    </label>
                    <input
                        type="text"
                        id="tenderId"
                        value={tenderId}
                        onChange={(event) => setTenderId(event.target.value)}
                        className="border-gray-400 border-2 rounded px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <input
                        type="text"
                        id="rating"
                        value={desc}
                        onChange={(event) => setRating(event.target.value)}
                        className="border-gray-400 border-2 rounded px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        className="border-gray-400 border-2 rounded px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                        Rating
                    </label>
                    <input
                        type="text"
                        id="rating"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        className="border-gray-400 border-2 rounded px-4 py-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50 disabled:pointer-events-none"
                    disabled={!tenderId || !amount || !rating || isLoading}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>

        <Footer />

        </>
    );
}