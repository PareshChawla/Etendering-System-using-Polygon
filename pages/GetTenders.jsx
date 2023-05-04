import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

export default function ViewTenders() {
  const [tenders, setTenders] = useState([]);
  const { contract } = useContract("0xcDEd284E807145149d07bCde1579af9564E0B1A2");
  const { data, isLoading } = useContractRead(contract, "viewTenders", []);

  useEffect(() => {
    if (!isLoading && data) {
      const tenderIds = Object.keys(data);
      const tenderList = tenderIds.map((id) => {
        return {
          id: id,
          tenderData: data[id],
        };
      });
      setTenders(tenderList);
    }
  }, [data, isLoading]);

  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="bg-gray-100 bg-center rounded-lg mt-30 mx-20 p-4">
        <h2 className="text-xl text-gray-800 font-semibold mb-2">All Tenders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tenders.map((tender) => (
            <div key={tender.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tender.tenderData.title}</div>
                <p className="text-gray-700 text-base">{tender.tenderData.description}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {tender.tenderData.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {tender.tenderData.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
