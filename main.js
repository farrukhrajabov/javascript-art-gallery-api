let popupContainer = document.querySelector('.popup-img-container');
let popupBox = popupContainer.querySelectorAll('.popup');

document.querySelectorAll('.img-container .image').forEach(image => {
    image.onclick = () =>{
        popupContainer.style.display = 'flex';
        let name = image.getAttribute('data-name');
        popupBox.forEach(popup=>{
            let target = popup.getAttribute('data-target');
            if(name == target) {
                popup.classList.add('active');
            }
        });
    };
});

popupBox.forEach(close => {
    close.querySelector('.fa-sharp').onclick = () => {
        close.classList.remove('active');
        popupContainer.style.display = 'none';
    };
});

async function clickedEvent(img_id) {
const result = await fetch(`https://api.artic.edu/api/v1/artworks/${img_id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    console.log(data)
    console.log(data.data.title)
    console.log(data.data.date_display)
    console.log(data.data.artist_display)
}   