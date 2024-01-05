export function contact() {
    console.log('contact');
    const content = document.getElementById('content');


    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Vestibulum tincidunt sem eu ex porta imperdiet. In facilisis arcu sit amet eros elementum interdum. Donec lacus mi, maximus eu suscipit sed, dapibus a nunc. Fusce eget facilisis massa. Cras ut sapien ac ipsum bibendum rhoncus. Duis et eros vel lacus pellentesque varius a at ante. Proin ipsum purus, malesuada non vulputate in, aliquet nec nulla. In fermentum, tortor tempus ornare tristique, sem arcu suscipit justo, eu semper dolor dui a nibh. Ut ac pretium lorem, a faucibus nunc. Praesent mollis, dui ornare blandit convallis, felis dui dictum odio, ac suscipit erat arcu vitae neque. Maecenas eget aliquet orci, eu volutpat felis. Donec varius est nec nibh ultrices aliquet. Ut ac porta diam.';
        const div = document.createElement('div');
        div.className = 'content-box';

        div.appendChild(p);
        content.appendChild(div);
    } else {
        console.error("Element with id 'content' not found.");
    }
}

