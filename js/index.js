(async function() {
  const articles = await getArticles()

  for (article of articles) {
    displayArticle(article)
  }
})()

function getArticles() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json()
    })
    .then(function(articles) {
      return articles
    })
    .catch(function(error) {
      alert(error)
    })
}

function displayArticle(article) {
  const templateElt = document.getElementById("templateArticle")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById("blog__title").textContent = article.title
  cloneElt.getElementById("blog__body").textContent = article.body

  document.getElementById("main").appendChild(cloneElt)
}