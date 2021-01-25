(async function() {
  const articles = await getArticle()
  
  for (let article of articles) {
    displayArticle(article)
  }
})()

function getArticle() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(bodyHttpResponse) {
      return bodyHttpResponse.json()
    })
    .then(function(articles) {
      return articles
    })
    .catch(function(error) {
      alert(error)
    })
}

function displayArticle(article) {
  const templateElt = document.getElementById("articleTemplate")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById("blog__title").textContent = article.title
  cloneElt.getElementById("blog__body").textContent = article.body

  document.getElementsByClassName("main")[0].appendChild(cloneElt)
}