import axios from 'axios'



async function Post (urls , callback) {
  const Port = process.env.PORT || 7000;
  axios({
    method: 'post',
    url: `/api`,
    headers: {},
    data: {
      longURL: urls,
    }
  }).then(response =>{
    const code = response.data
    callback(null,code);
  });

}


export default Post;
