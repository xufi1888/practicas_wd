const container = document.querySelector('.container');

function looper(jsonObj) {
    jsonObj.forEach((actor)=>{
        const actorContainer = document.createElement('div');
        actorContainer.classList.add('actor_container');
        container.appendChild(actorContainer);

        const actorPhotoContainer = document.createElement('div');
        actorPhotoContainer.classList.add('actor_photo_container');
        actorContainer.appendChild(actorPhotoContainer);

        const actorPhotoImg = document.createElement('img');
        actorPhotoImg.classList.add('actor_photo_img');
        actorPhotoImg.src= "img/profile.webp";
        actorPhotoContainer.appendChild(actorPhotoImg);

        const actorInfo = document.createElement('div');
        actorInfo.classList.add('actor_info');
        actorContainer.appendChild(actorInfo);

        itemCreator(actorInfo, "h3", "name", " ", actor.name)
        itemCreator(actorInfo, "p", "alt_name", "Also Known As: ", actor.alternative_name)
        itemCreator(actorInfo, "p", "rating", "Ranking: ", actor.rating)
        itemCreator(actorInfo, "p", "id", "ID: ", actor.objectID)
        rankingColours(actorContainer, actor)
    })
}

function itemCreator(container, itemTag, itemClass, itemLabel, itemValue) {
    const actorItem = document.createElement(itemTag);
    container.appendChild(actorItem);
    const valueOfItem = itemValue ? itemValue : "No Disponible";
    actorItem.innerHTML = `<span class="actor_info_${itemClass}">${itemLabel}</span>${valueOfItem}`
}

function rankingColours(actorContainer, actor) {
    if(actor.rating > 3000) {
        actorContainer.classList.add('ranking_1st')
    } else if (actor.rating > 2000 && actor.rating < 3000) {
        actorContainer.classList.add('ranking_2nd')
    } else if (actor.rating > 1000 && actor.rating < 2000) {
        actorContainer.classList.add('ranking_3rd')
    } else if (actor.rating > 500 && actor.rating < 1000) {
        actorContainer.classList.add('ranking_4th')
    } else if (actor.rating > 0 && actor.rating <= 500) {
        actorContainer.classList.add('ranking_5th')
    }

}


function init(){
    fetch('actors.json')
    .then((response)=>{
        actorData = response.json().then((data)=>{
            looper(data)
        })
    })
}

init()