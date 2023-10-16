function handleFile() {
    const file = document.getElementById('fileInput').files[0]; 
    const reader = new FileReader();
    reader.onload = (e) => {
        const xmlString = e.target.result;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const outputDiv = document.getElementById('output');
        const books = xmlDoc.getElementsByTagName("book")[0].getElementsByTagName("author")[0].textContent;
        outputDiv.innerHTML = books;
        };
        reader.readAsText(file);
}



