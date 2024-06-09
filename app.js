const URL = "https://jsonplaceholder.typicode.com/posts";
const data = () => {
  const dataObject = {
    posts: [],
  };
  return dataObject;
};
const methods = {
  fetchPosts() {  
    // fetch(URL)
    // .then((res)=>{
    //   return res.json();
    // })
    // .then((data)=>{
    //   this.posts=data
    // })
    fetch(URL)
      .then((res) => res.json())
      .then((data) =>this.posts=data);
  },
};

const appInformation = {
  data,
  methods,
  mounted() {
    this.fetchPosts();
  },
};

const app = Vue.createApp(appInformation);
app.mount("#app");
