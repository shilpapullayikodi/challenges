import { getProductById } from "../../../services/productServices";
export default function handler(request, response) {
  const { id } = request.query;

  if (getProductById(id)) {
    response.status(200).json(getProductById(id));
  } else {
    response.status(404).json({ message: `Product with id ${id} not found` });
  }
}
