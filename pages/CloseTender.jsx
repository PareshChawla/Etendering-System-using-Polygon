import { useState } from 'react';
import { useContract, useContractWrite } from '@thirdweb-dev/react';

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Close Tender</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label htmlFor="tenderId" className="w-1/3">
            Tender ID:
          </label>
          <input
            type="text"
            id="tenderId"
            value={tenderId}
            onChange={(e) => setTenderId(e.target.value)}
            className="rounded-md border-gray-300 w-2/3 px-4 py-2"
          />
        </div>
        <button
          type="submit"
          disabled={!tenderId}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
        >
          {isLoading ? 'Closing...' : 'Close Tender'}
        </button>
      </form>
    </div>
  );
}
