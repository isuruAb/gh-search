export const getUrlParams = ({ params }) => {
  let url = "?";
  params.map((data) => {
    return (url = url + data.key + "=" + encodeURIComponent(data.value) + "&");
  });
  return url;
};
