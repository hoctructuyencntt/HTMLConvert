function formatText(command) {
    document.execCommand(command, false, null);
}

function formatBlock(block) {
    document.execCommand('formatBlock', false, block);
}

function insertList(command) {
    document.execCommand(command, false, null);
}

function insertImage() {
    let url = prompt('Enter the image URL:');
    if (url) {
        let imgHTML = `<img src="${url}" alt="Image" class="resizable">`;
        document.execCommand('insertHTML', false, imgHTML);
        makeImagesResizable();
    }
}

function insertYouTubeVideo() {
    let url = prompt('Enter the YouTube video URL:');
    if (url) {
        let embedUrl = url.replace('watch?v=', 'embed/');
        let iframe = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
        document.execCommand('insertHTML', false, iframe);
    }
}

function exportToHTML() {
    let content = document.getElementById('editor').innerHTML;
    let blob = new Blob([content], { type: 'text/html' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'document.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function makeImagesResizable() {
    $('img.resizable').resizable({
        aspectRatio: true
    });
}

// Initialize resizable functionality for existing images
$(document).ready(function() {
    makeImagesResizable();
});
