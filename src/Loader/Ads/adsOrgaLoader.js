import { adOrga } from "../../apis/ad_orga/adOrga";

export async function AdsLoader() {
  return adOrga();
}
