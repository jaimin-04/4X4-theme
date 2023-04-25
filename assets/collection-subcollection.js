const subcollections = document.querySelectorAll(".subcollection-product-list"); 
const urlArr = [];
subcollections.forEach(data => {
    let tmp = data.dataset.url;
    urlArr.push(tmp); 
})

let promises = [];

urlArr.forEach( (url) => {
  promises.push(
    new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          resolve(data);
      })
    })
  )
})

Promise.all(promises).then(datas => {
  datas.forEach( (data,index) => {
      let html_div = document.createElement('div');
      html_div.innerHTML = data;
      subcollections[index].innerHTML = html_div.querySelector('#product-grid-container').innerHTML;
      html_div.querySelector('#product-grid-container').innerHTML.trim().length && (subcollections[index].closest('.js-collection').style.display = null);
  })
});
