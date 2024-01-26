function solve() {
  const inputText = document.getElementById("input");
  
  let sentenceArray = inputText.value.split('.').filter(Boolean);

  let pCount = Math.ceil(sentenceArray.length / 3);
  let htmlParagraphs = '';

  for(let i = 0; i < pCount; i++) {
    let paragraph = sentenceArray.splice(0, 3).join('. ');
    paragraph += '.';
    htmlParagraphs += `<p>${paragraph}</p>`;
  }
  
  document.getElementById('output').innerHTML = htmlParagraphs;
}

