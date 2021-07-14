(async function () {
  const articleId = getArticleId()
  const articleData = await getArticleData(articleId)
  displayArticle(articleData)
})()

function getArticleId() {
  return new URL(location.href).searchParams.get('id')
}

function getArticleData(articleId) {
  return fetch("https://jsonplaceholder.typicode.com/posts/" + articleId)
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json()
    })
    .then(function(article) {
      return article
    })
    .catch(function(error) {
      alert(error)
    })
}

function displayArticle(articleData) {
  document.getElementById("blog__title").textContent = articleData.title
  document.getElementById("blog__body").textContent = articleData.body
}