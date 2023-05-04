import { useState } from 'react';
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import Header from './Header'
import Footer from './Footer'

export default function CloseTender() {
    const { contract } = useContract('0xcDEd284E807145149d07bCde1579af9564E0B1A2');
    const { mutateAsync: closeTender, isLoading } = useContractWrite(contract, 'closeTender');
    const [tenderId, setTenderId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await closeTender({ args: [tenderId] });
            console.info('contract call success', data);
            alert(`Tender ${tenderId} closed successfully`);
        } catch (err) {
            console.error('contract call failure', err);
        }
    };

    return (
        <>
            <Header />
            <div className='my-5 mb-5'>


                <h2 className="text-2xl font-bold mb-4 text-center">Close Tender</h2>
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
                        disabled={!tenderId}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                    >
                        {isLoading ? 'Closing...' : 'Close Tender'}
                    </button>

                </form>

            </div>

            <Footer />
        </>
    );
}