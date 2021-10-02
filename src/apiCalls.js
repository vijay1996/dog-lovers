const URL = "https://api.thedogapi.com/v1/images/search?";
const VOTE_URL = "https://api.thedogapi.com/v1/votes"

export const fetchDogsFromApi = async ({
  apiURL = URL,
  limit = 10,
  page = 0,
  order = "asc",
}) => {
  try {
    const response = await fetch(
      `${apiURL}limit=${limit}&page=${page}&order=${order}}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_DOG_API_KEY}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    return error;
  }
};

export const castVoteViaApi = async ({
  apiURL = VOTE_URL,
  image_id = "",
  sub_id = "",
  value = 1,
}) => {
  try {
    const response = await fetch(
      `${apiURL}`,
      {
        method: "POST",
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_DOG_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "image_id": image_id,
          "value": value
        })
      }
    );
    return response.json();
  } catch (error) {
    return error;
  }
};

export const fetchVotesFromApi = async ({
  apiURL = VOTE_URL,
  image_id = "",
  sub_id = "",
  value = 1,
}) => {
  try {
    const response = await fetch(
      `${apiURL}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": `${process.env.REACT_APP_DOG_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.json();
  } catch (error) {
    return error;
  }
};