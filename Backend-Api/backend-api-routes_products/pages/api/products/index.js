import { getAllProducts } from "../../../services/productServices";
export default function handler(request, reponse) {
  reponse.status(200).json(getAllProducts());
}
