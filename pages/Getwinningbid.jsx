import { useState } from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import Header from './Header'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewWinningBid() {



    let message;
    const notifyA = () => toast.success(message);
    const notifyB = () => toast.error(message);

    const { contract } = useContract('0xcDEd284E807145149d07bCde1579af9564E0B1A2');
    const [tenderId, setTenderId] = useState('');
    const { data, isLoading } = useContractRead(contract, 'getWinningBid', [tenderId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!tenderId){
            message = "Tender id cannot be empty"
            return notifyB(message)
        }
    };

    return (
        <>
            <Header />

            <div className='my-5 mb-5'>
                <h2 className="text-2xl font-bold mb-4 text-center">View Winning Bid</h2>
                <form onSubmit={handleSubmit}>

                    <div className="flex items-center mb-4 " style={{ marginLeft: "450px" }}>
                        {/* <label htmlFor="tenderId" className="w-100">
                            Tender ID:
                        </label> */}
                        <input
                            type="text"
                            id="tenderId"
                            value={tenderId}
                            onChange={(e) => setTenderId(e.target.value)}
                            className="rounded-md border-black-300 w-3/6 px-4 py-2 bg-blue-200"
                            placeholder='Enter your tender id'
                        />
                    </div>


                    <button
                        style={{ marginLeft: "600px" }}
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                    >
                        View Winning Bid
                    </button>
                </form>

                {/* {isLoading && <p style={{marginLeft:"610px"}}>Loading winning bid... </p>} */}

                {data && (
                    <div className="border p-4 mb-4">
                        <p><strong>Rating:</strong> {data[0].toString()}</p>
                        <p><strong>Tender Id:</strong> {data[1].toString()}</p>
                        <p><strong>Amount:</strong> {data[2].toString()}</p>
                        <p><strong>Address:</strong> {data[3].toString()}</p>
                    </div>
                )}
            </div>

            <Footer />

        </>
    );
}