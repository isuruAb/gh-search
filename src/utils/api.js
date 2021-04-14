import { getUrlParams } from "./url";

export const getData = ({ params }) => {
  return fetch(process.env.REACT_APP_API_ENDPOINT + getUrlParams({ params }))
    .then((response) => response.json())
    .then((data) => data);
};
