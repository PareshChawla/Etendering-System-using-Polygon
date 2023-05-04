import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Card from './Card'
import Header from './Header'
import { useHiu} from "react-router-dom";
import { useRouter } from "next/router";

export default function ViewTenders() {

  const router = useRouter();

  const [tenders, setTenders] = useState([]);
  const { contract } = useContract("0xcDEd284E807145149d07bCde1579af9564E0B1A2");
  const { data, isLoading } = useContractRead(contract, "viewTenders", []);
  console.log(tenders);

  const handleNavigate  = (id,description) =>{
    const data = { prop1: id, prop2: description };
    router.push({
      pathname: "/Makebid",
      query: { data: JSON.stringify(data) },
    });
  }

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
      <div className="bg-gray-100 bg-center rounded-lg mt-30 ml-20 mr-20  p-4">
        <h2 className="text-xl text-gray-800 font-semibold mb-2">All Tenders</h2>
        <ul className="list-disc list-inside">
          {tenders.map((tender) => (
            <li className="text-lg text-gray-700 mb-1" key={tender.id}>
              {tender.id}: {tender.tenderData.description}
            </li>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}


