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
    <Header />

    {
      loader ? <Loader /> :  <div className=" min-h-screen">
      <div className=" bg-center rounded-lg mt-30 mx-20 p-4">
        <h2 className="text-xl  font-semibold mb-2">All Tenders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">





          {tenders.map((tender) => (

            <div className="col-md-12 bid-product">

              <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpiF0_09x9tl-QZkA5_Eaiz5NACUsec1NoA&usqp=CAU" alt="" />
              </div>

              <div className="product-content">
                <div className="card1-title">
                  <h3
                  >{tender.tenderData.description}
                  </h3>
                </div>

                <div className="card1-content">
                  <div className="price">
                    <h2>Expiry : 6 Days</h2>
                  </div>

                  <div className="auction-id">
                    <h2>Auction ID: {tender.tenderData.tenderer.substr(0,15)+"..."}</h2>
                  </div>

                </div>

                <div className="card1-bottom">
                  <p style={{ color: "#fff", fontSize: "20px" }}>Ends In : <span style={{ color: "red", fontSize: "18px" }}>19:20:30</span></p>
                </div>

                <button className="btn  w-100" onClick={() => handleNavigate(tender.id,tender.tenderData.description)}>Bid Now</button>

              </div>

            </div>


            // <div key={tender.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            //   <div className="px-6 py-4">
            //     <div className="font-bold text-xl mb-2">{tender.tenderData.title}</div>
            //     <p className="text-gray-700 text-base">{tender.tenderData.description}</p>
            //   </div>
            //   <div className="px-6 py-4">
            //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            //       {tender.tenderData.category}
            //     </span>
            //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            //       {tender.tenderData.date}
            //     </span>
            //   </div>
            // </div>


          ))}
        </div>
      </div>
    </div>
    
    }
    

   


    </>
  );
}