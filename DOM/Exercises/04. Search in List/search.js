function search() {
   clearResults();
   const inputText = document.getElementById('searchText').value.toLowerCase();
   const towns = document.getElementById('towns');
   const list = towns.getElementsByTagName('li');
   const array = [];
   // const matchingTowns = array.filter(town => town === inputText.value);

   for(let city of list)  {
      const cityName = city.textContent.toLowerCase();

      if (cityName.includes(inputText)){
         city.style.fontWeight = 'bold';
         city.style.textDecoration = 'underline';

         array.push(cityName)
      }
   }

   document.getElementById('result').textContent = `${array.length} matches found`;
   function clearResults() {
      const towns = document.getElementById('towns');
      const list = towns.getElementsByTagName('li');
   
      for (let town of list) {
          town.style.fontWeight = 'normal';
          town.style.textDecoration = 'none';
      }
   
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = '';
   }
}

