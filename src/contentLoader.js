import Icon from './tonkotsuramenfront.jpg';

export function contentLoader() {
    console.log('contentLoader');
    const content = document.getElementById('content');

    if (content) {
        const div = document.createElement('div');
        div.className = 'content-box';
        const p = document.createElement('p');
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit enim turpis, in commodo massa rhoncus ac. Phasellus non magna ornare, posuere eros vitae, rutrum dui. Sed sed quam nibh. Duis sed mollis odio. Nullam finibus ligula sed tellus finibus, sit amet condimentum mauris dignissim. Pellentesque auctor viverra libero, auctor ultrices velit tempus in. Cras dictum lorem vel diam pulvinar, egestas elementum ligula porta. Etiam ullamcorper rutrum molestie. Nunc ac lectus at ipsum finibus placerat vitae sit amet orci. Duis ac viverra odio. Vivamus ultrices sodales nunc vitae pulvinar. Duis feugiat, libero vitae sollicitudin pretium, est magna rutrum lorem, sed tristique quam turpis nec elit. Vestibulum luctus lectus nulla, ac dignissim odio volutpat ut. Vivamus dapibus lacus sed est fringilla, ac gravida enim suscipit. Phasellus lacinia orci ut tincidunt mattis.';

        const image = document.createElement('img');
        image.src = Icon;
        image.alt = 'Tonkotsu Ramen';
        image.className="image";

        div.appendChild(p);
        div.appendChild(image);
        content.appendChild(div);
    } else {
        console.error("Element with id 'content' not found.");
    }
}

document.addEventListener('DOMContentLoaded', contentLoader);

