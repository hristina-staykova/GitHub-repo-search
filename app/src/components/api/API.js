import axios from "axios";

const URL = "https://api.github.com/graphql";
// GitHub token HRISTINA STAYKOVA = e0416664141796ae6b44fc0504c22b34642dcf26

function createAxiosClient(token) {
  return axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export default {
  getRepoData: function(repoName, repoOwner, token) {
    const GET_REPODATA = `
      {
        repository(name: "${repoName}", owner: "${repoOwner}") {
          issues(orderBy: {field: CREATED_AT, direction: DESC}, first: 50) {
            nodes {
              author{
                login
              }
              state
              comments(last: 10) {
                nodes {
                  author {
                    login
                  }
                  bodyText
                  createdAt
                }
              }
              title
              url
              createdAt
            }
          }
          pullRequests(orderBy: {field: CREATED_AT, direction: DESC}, first: 50) {
            nodes {
              title
              state
              author {
                login
              }
              url
              createdAt
              bodyText
            }
          }
        }
      }
      `;

    return createAxiosClient(token).post("", {
      query: GET_REPODATA
    });
  }
};
