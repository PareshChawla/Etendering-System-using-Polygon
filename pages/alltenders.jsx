import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect } from "react";

const alltenders = () => {

  const { contract } = useContract("0xcDEd284E807145149d07bCde1579af9564E0B1A2");
  const { data, isLoading } = useContractRead(contract, "viewTenders", []);
//   const {data: tender} = getTenders();

  useEffect(() => {
    // console.log(tender);
  }, [])
  

  return (
    <div>alltenders</div>
  )
}

export default alltenders