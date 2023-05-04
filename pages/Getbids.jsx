import { useState } from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import Header from './Header'
import Footer from './Footer'

export default function ViewBids() {
    const { contract } = useContract('0xcDEd284E807145149d07bCde1579af9564E0B1A2');
    const [tenderId, setTenderId] = useState('');
    const { data, isLoading } = useContractRead(contract, 'getBids', [tenderId]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (

        <>
            <Header />
            
            <div style={{marginTop:"50px"}}>
                <h2 className="text-2xl font-bold mb-4 text-center">Check All Bids</h2>
                <form onSubmit={() => handleSubmit}>
                    <div className="flex items-center mb-4 " style={{marginLeft:"450px"}}>
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
                    <button style={{marginLeft:"600px"}}
                        type="submit"
                        className="mb-5 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                    >
                        View Bids
                    </button>
                </form>

                {isLoading && <p style={{marginLeft:"610px"}}>Loading bids... </p>}

                {data && data.map((bid) => (
                    <div key={bid[0].toString()} className="border p-4 mb-4">
                        <p><strong>Rating:</strong> {bid[0].toString()}</p>
                        <p><strong>Tender Id:</strong> {bid[1].toString()}</p>
                        <p><strong>Amount:</strong> {bid[2].toString()}</p>
                        <p><strong>Bidder Address:</strong> {bid[3]}</p>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}