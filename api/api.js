import request from "superagent";

const accessToken='OCQnKviM0RAnrue62I44iElV2NcINmDsHN-y-8tDqW8'
export const itemsAPI = {
  getItems() {
    return request.get('https://cdn.contentful.com/spaces/1a9so1kp6ial/environments/master/entries')
      .query({'content_type':'product'})
      .set('Authorization', `Bearer ${accessToken}`)
      .then(response => {
        return response.body;
      });
  },
}
