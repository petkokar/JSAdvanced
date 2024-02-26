function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
         if(xhr.status == 200) {
            document.getElementById('res').textContent = xhr.responseText;
         } else {
            console.error('Error loading GitHub repository:', xhr.status);
         }
      }
   };

   xhr.open('GET', url, true);
   xhr.send();
}