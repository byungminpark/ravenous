const apiKey =
  "67BTPilT0Z06uBgSvHG5g_mTuSQiXsoriqy0yCNI-P_h03YEdjK0sPb9D48jBeeyWdHnCFL6Q_8UBMjqtfxm2xlJNtzEdCsWtPR8w8V537ouzHepYIRUYgwmNawKX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    const urlToFetch = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(urlToFetch, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            //응답한 객체의 Businesses의 Business들 하나하나 원하는 데이터 형태로 맵핑 후 리턴
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].alias,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
