import axios from "axios";

const URL = "https://api.github.com/graphql";
// GitHub token HRISTINA STAYKOVA = 5035cb91a45fc3dc6a71ff45a2a2ca6e53163842

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
