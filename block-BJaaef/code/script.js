let header = document.querySelector('.header')
let heading = document.createElement('h1')
heading.innerHTML = "👑 Peoples of Got"
heading.classList.add('heading')

header.append(heading)

got.houses.forEach((house) => 
    house.people.map((people) => {
        let ul = document.querySelector('.unOrderdList')
        ul.classList.add("flex", "justify_between"  , "flex_wrap")

        let article = document.createElement('article');
        // article.setAttribute('class', 'listitem');
        article.classList.add("listitem")

        let headArticle = document.createElement('div')
        // headArticle.setAttribute('class', 'headarticle')
        headArticle.classList.add('headarticle','flex', 'align_items')

        let img = document.createElement('img');
        img.classList.add('image')
        img.src = people.image;

        let peopleName = document.createElement('h3');
        // peopleName.setAttribute('class','peopleName');
        peopleName.classList.add("peopleName")
        peopleName.innerHTML = people.name;




        let peopleDescription = document.createElement('p');
        // peopleDescription.setAttribute('class', 'peopleDescription');
        peopleDescription.classList.add('peopleDescription');
        peopleDescription.innerHTML = people.description;

        let wikiLin = document.createElement('a');
        wikiLin.innerHTML = "Learn More";
        wikiLin.href = people.wikiLink
        wikiLin.classList.add('wikiLink');

        ul.append(article);
        article.append(headArticle)
        headArticle.append(img,peopleName)
        article.append(peopleDescription, wikiLin)
})
)