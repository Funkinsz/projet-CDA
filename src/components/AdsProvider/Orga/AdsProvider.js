import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context";
import { adOrga } from "../../../apis/ad_orga/adOrga";

export default function AdsProvider({ children }) {
  const initialAds = useLoaderData();
  const [ads, setAds] = useState(initialAds);

  async function readAds(credentials) {
    const allAds = await adOrga(credentials);
    setAds(allAds);
  }

  return (
    <AuthContext.Provider value={{ ads, readAds }}>
      {children}
    </AuthContext.Provider>
  );
}
