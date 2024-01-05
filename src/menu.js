export function menu() {
    console.log('menu');
    const content = document.getElementById('content');

    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Nunc tincidunt sapien ut nunc gravida mattis. Aenean vitae imperdiet mi. Donec euismod tellus quis dolor condimentum posuere. Proin faucibus dictum diam, vel laoreet diam pellentesque sit amet. Cras ac ligula in felis hendrerit tempus. Ut eu pulvinar eros. Donec rhoncus consectetur felis. Mauris condimentum augue sed mauris posuere mollis. Sed mattis ultricies tellus, sit amet sodales mi dapibus vitae. Pellentesque sed felis interdum, mollis dui vel, ornare justo. Cras dapibus elit et leo ultricies, et pulvinar nunc hendrerit. Nunc bibendum nunc blandit, sodales odio eu, dignissim nulla. Aenean vel faucibus ante, in ornare diam. Nulla nec consectetur lacus, ut fringilla libero.';
        const div = document.createElement('div');
        div.className = 'content-box';

        div.appendChild(p);
        content.appendChild(div);
    } else {
        console.error("Element with id 'content' not found.");
    }
}