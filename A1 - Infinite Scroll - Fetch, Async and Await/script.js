const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;
let globalData;


(async () => { 
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    let data = await res.json();
    showPosts(data);
    globalData = data;
})();


function showPosts(data) {
    
 

   data.forEach(post => {
   const postEl = document.createElement('div');
   postEl.classList.add('post');

   postEl.innerHTML = `
   <div class="number">${post.id}</div>
   <div class="post-info"> 
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">${post.body}</p>
   </div>
   
   `;

   postsContainer.appendChild(postEl);

})
}


function showLoading(data) {
    loading.classList.add('show'); 

    setTimeout(() => {
         
        setTimeout(()=> {
            page++;
            (async () => { 
                let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
                let data = await res.json();
                showPosts(data);
                globalData = data;
            })();
        }, 300)
    }, 1000);
}


function filterPosts(e) {
 const term = e.target.value.toUpperCase();
 const posts = document.querySelectorAll('.post');


 posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    if(title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex'
    } else {
        post.style.display = 'none';
    }
 });

}


function handleScroll() {
    const {scrollTop, scrollHeight, clientHeight} =  document.documentElement;
  
    if(scrollTop + clientHeight >= scrollHeight - 5) {
      showLoading(globalData);
    }
}

window.addEventListener('scroll', handleScroll);
filter.addEventListener('input', filterPosts);