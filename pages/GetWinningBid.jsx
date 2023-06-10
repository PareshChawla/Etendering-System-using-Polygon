import { useState } from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';

export default function ViewWinningBid() {
  const { contract } = useContract('0xcDEd284E807145149d07bCde1579af9564E0B1A2');
  const [tenderId, setTenderId] = useState('');
  const { data, isLoading } = useContractRead(contract, 'getWinningBid', [tenderId]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">View Winning Bid</h2>
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
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
        >
          View Winning Bid
        </button>
      </form>

      {isLoading && <p>Loading winning bid...</p>}

      {data && (
        <div className="border p-4 mb-4">
          <p><strong>Rating:</strong> {data[0].toString()}</p>
          <p><strong>Tender Id:</strong> {data[1].toString()}</p>
          <p><strong>Amount:</strong> {data[2].toString()}</p>
          <p><strong>Address:</strong> {data[3].toString()}</p>
        </div>
      )}
    </div>
  );
}
