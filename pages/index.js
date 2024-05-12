import React , { useEffect, useContext, useState } from "react";

//INTERNAL IMPORT
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaigns,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext (CrowdFundingContext);

  const[allCampaign, setAllcampaign] = useState();
  const[usercampaign, setUsercampaign] = useState();

useEffect(() => {
  const fetchData = async () => {
    try {
      const allData = await getCampaigns();
      const userData = await getUserCampaigns();
      setAllcampaign(allData);
      setUsercampaign(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
  return () => {
  };
}, []);

  //Donate POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return(
    <>
      <Hero titleData = {titleData} createCampaigns={createCampaigns}/>
      <Card
      title =  "All Listed Campaigns"
      allCampaign  = {allCampaign}
      setOpenModel = {setOpenModel}
      setDonate  = {setDonateCampaign}
      />
      <Card 
      title= "Your created campaign "
      allCampaign = {usercampaign}
      setOpenModel = {setOpenModel}
      setDonate = {setDonateCampaign}
      />
      {openModel && (
        <PopUp
        setOpenModel = {setOpenModel}
        getDonations ={getDonations}
        donate = {donateCampaign}
        donateFunction ={donate}
        />
        )}
    </>
  );
};
export default index;