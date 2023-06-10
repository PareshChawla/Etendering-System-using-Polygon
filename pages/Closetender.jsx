import { useState } from 'react';
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import Header from './Header'
import Footer from './Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CloseTender() {

    
    let message;
    const notifyA = () => toast.success(message);
    const notifyB = () => toast.error(message);

    const { contract } = useContract('0xcDEd284E807145149d07bCde1579af9564E0B1A2');
    const { mutateAsync: closeTender, isLoading } = useContractWrite(contract, 'closeTender');
    const [tenderId, setTenderId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!tenderId){
            message = "Tender id cannot be empty"
            return notifyB(message)
        }
        
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
            <div>
                <h2 className="text-2xl font-bold mb-5 text-center my-5 ">Close Tender</h2>
                <form onSubmit={handleSubmit}>

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


                    <button
                        style={{marginLeft:"600px"}}
                        type="submit"
                        className="bg-blue-500 mb-5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
                    >
                       Close Tender
                    </button>
                </form>
            </div>

            <Footer className="my-5" />
        </>


    );
}