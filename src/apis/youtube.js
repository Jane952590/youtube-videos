import axios from "axios";

const KEY = "AIzaSyByW8GzTtEbTq8zI3r-X3LqNJNNb1-ruK4";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
