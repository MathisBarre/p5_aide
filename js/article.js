(function() {
  const articleId = getArticleId()
  const articleData = await getArticleData(articleId)
  displayArticle(articleData)
})()

function getArticleId() {
  return new URL(location.href).searchParams.get("id") 
}

function getArticleData(articleId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
    .then(async function(httpBodyResponse) {
      return httpBodyResponse.json()
    })
    .then(function(article) {
      return article
    })
}

function displayArticle(articleData) {
  document.getElementById("blog__title").textContent = articleData.title
  document.getElementById("blog__body").textContent = articleData.body

  document.getElementById("blog__btn").addEventListener("click", function(event) {
    addArticleToFavorite(event, articleData)
  })
}

function addArticleToFavorite(event, articleData) {
  event.preventDefault()

  const favoriteArticles = getCurrentFavoriteArticle()
  const articleIsAlreadyAFavorite = testIfAlreadyOnList(favoriteArticles, articleData.id)

  if ( articleIsAlreadyAFavorite ) {
    console.log("already in list")
    return
  } else {
    favoriteArticles.push(articleData)
    saveFavoriteArticles(favoriteArticles)
  }
}

function getCurrentFavoriteArticle() {
  return JSON.parse(localStorage.getItem("favoriteArticles")) || []
}

function testIfAlreadyOnList(favoriteArticles, articleId) {
  const articleIndexInList = favoriteArticles.find((article) => {
    return article.id === articleId
  })

  return articleIndexInList !== undefined
}

function saveFavoriteArticles(favoriteArticles) {
  localStorage.setItem("favoriteArticles", JSON.stringify(favoriteArticles))
  console.log(favoriteArticles)
}