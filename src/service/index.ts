import axios from 'axios';
export const getData = async () => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100',
      headers: {},
    };

    return await axios.request(config);
  } catch (err) {
    console.log(err);
  }
};
