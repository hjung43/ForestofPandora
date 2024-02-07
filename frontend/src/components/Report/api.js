import axios from "axios";
const token = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");

export async function reportArticle(id, content) {
  try {
    const data = { content: content };
    console.log("data", data);
    if (token) {
      const res = await axios({
        method: "POST",
        url: `/api/reports/articles/${id}`,
        data,
        // access token이랑 refresh token 둘 다 req header에 담아서 보냅니당
        headers: {
          authorization: `Bearer ${token}`,
          refreshtoken: refreshToken,
        },
      });
      console.log(res);
      return res;
    }
  } catch (err) {
    console.error(err);
  }
}
export async function reportComment(id, content) {
  try {
    const data = { content: content };
    console.log("data", data);
    if (token) {
      const res = await axios({
        method: "POST",
        url: `/api/reports/comments/${id}`,
        data,
        // access token이랑 refresh token 둘 다 req header에 담아서 보냅니당
        headers: {
          authorization: `Bearer ${token}`,
          refreshtoken: refreshToken,
        },
      });
      return res;
    }
  } catch (err) {
    console.error(err);
  }
}
export async function reportReply(id, content) {
  try {
    const data = { content: content };
    console.log("data", data);
    if (token) {
      const res = await axios({
        method: "POST",
        url: `/api/reports/replies/${id}`,
        data,
        // access token이랑 refresh token 둘 다 req header에 담아서 보냅니당
        headers: {
          authorization: `Bearer ${token}`,
          refreshtoken: refreshToken,
        },
      });
      return res;
    }
  } catch (err) {
    console.error(err);
  }
}
