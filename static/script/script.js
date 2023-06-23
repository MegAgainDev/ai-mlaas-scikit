function getnews() {

    //Fetch Diabetes News from API provided by Newsapi.org
    fetch("https://newsapi.org/v2/top-headlines?q=diabetes&apiKey=85a9eb6500e044739b0e3531e084b51b").
    
    then(res => res.json()).then(data =>  {
        const randomNews = Math.floor(Math.random() * data.articles.length)
        //News Image
        document.getElementById("news-image").style.backgroundImage = "url('"+data.articles[randomNews].urlToImage+"')"

        //News Title Header
        document.getElementById("news-title-header").innerHTML = data.articles[randomNews].title

        //News Author
        document.getElementById("news-author").innerHTML = "<strong>Article Author:</strong>  "+data.articles[randomNews].author

        //News Title
        document.getElementById("news-title").innerHTML = data.articles[randomNews].title

        //News URL
        document.getElementById("news-link").href = data.articles[randomNews].url})
}
getnews()
setInterval(getnews, 20000)
