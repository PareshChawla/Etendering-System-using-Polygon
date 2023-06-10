import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Card from './Card'
import Header from './Header'
import { useHiu} from "react-router-dom";
import { useRouter } from "next/router";
import Loader from './Loader';

export default function ViewTenders() {

  const router = useRouter();

  const [tenders, setTenders] = useState([]);
  const [loader,setLoader] = useState(false)
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
    setLoader(true)
    if (!isLoading && data) {
      const tenderIds = Object.keys(data);
      const tenderList = tenderIds.map((id) => {
        return {
          id: id,
          tenderData: data[id],
        };
      });
      setLoader(false)
      setTenders(tenderList);
    }
  }, [data, isLoading]);

  return (
    <>
<<<<<<< HEAD
    <Header />

    {
      loader ? <Loader /> :  <div className=" min-h-screen">
      <div className=" bg-center rounded-lg mt-30 mx-20 p-4">
        <h2 className="text-xl  font-semibold mb-2">All Tenders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">





=======
      <div className="bg-gray-400 min-h-screen">
      <div className="bg-gray-100 bg-center rounded-lg mt-30 ml-20 mr-20  p-4">
        <h2 className="text-xl text-gray-800 font-semibold mb-2">All Tenders</h2>
        <ul className="list-disc list-inside">
>>>>>>> 18560a73242984a677bacf16eca66a4f353126d3
          {tenders.map((tender) => (
            <li className="text-lg text-gray-700 mb-1" key={tender.id}>
              {tender.id}: {tender.tenderData.description}
            </li>
          ))}
          </ul>
      </div>
      </div>
<<<<<<< HEAD
    </div>
    
    }
    

   


=======
>>>>>>> 18560a73242984a677bacf16eca66a4f353126d3
    </>
  );
}


