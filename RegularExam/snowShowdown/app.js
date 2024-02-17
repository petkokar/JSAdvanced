window.addEventListener("load", solve);

function solve() {
    const data = {
      name: document.getElementById('snowman-name'),
      height: document.getElementById('snowman-height'),
      location: document.getElementById('location'),
      creator: document.getElementById('creator-name'),
      specialAttr: document.getElementById('special-attribute')
    }

    let addButton = document.querySelector('.add-btn');
    let previewSection = document.querySelector('.snowman-preview');
    let snowListSection = document.querySelector('.snow-list');
    let mainElement = document.getElementById('hero');
    // let bodyElement = document.querySelector('.body');
    addButton.addEventListener('click', onAdd);

    function onAdd(e) {
      e.preventDefault();

      for(const key in data) {
        if(data[key].value === '') {
          return;
        }
      }

      let liElement = document.createElement('li');
      liElement.className = 'snowman-info';
      let articleElement = document.createElement('article');
      articleElement.innerHTML += `<p>Name: ${data.name.value}</p>`;
      articleElement.innerHTML += `<p>Height: ${data.height.value}</p>`;
      articleElement.innerHTML += `<p>Location: ${data.location.value}</p>`;
      articleElement.innerHTML += `<p>Creator: ${data.creator.value}</p>`;
      articleElement.innerHTML += `<p>Attribute: ${data.specialAttr.value}</p>`;
      let divContainer = document.createElement('div');
      divContainer.className = 'btn-container';
      let editBtn = document.createElement('button');
      let nextBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      nextBtn.className = 'next-btn';
      nextBtn.textContent = 'Next';
      divContainer.appendChild(editBtn);
      divContainer.appendChild(nextBtn);
      liElement.appendChild(articleElement);
      liElement.appendChild(divContainer);
      previewSection.appendChild(liElement);

      let backUp = {};

      for(let key in data) {
        backUp[key] = data[key].value;
        data[key].value = '';
      }

      addButton.disabled = true;

      editBtn.addEventListener('click', onEdit);
      nextBtn.addEventListener('click', onNext);

      function onEdit(){
        liElement.remove();

        for(let key in data) {
          data[key].value = backUp[key];
        }

        addButton.disabled = false;
      }

      function onNext(){
        divContainer.remove();
        let sendBtn = document.createElement('button');
        sendBtn.className = 'send-btn';
        sendBtn.textContent = 'Send';
        articleElement.appendChild(sendBtn);
        snowListSection.appendChild(liElement);
        sendBtn.addEventListener('click', onSend);

        function onSend() {
          mainElement.remove();
          let backBtn = document.createElement('button');
          backBtn.className = 'back-btn';
          backBtn.textContent = 'Back';
          document.body.appendChild(backBtn);
          document.getElementById('back-img').removeAttribute('hidden');

          backBtn.addEventListener('click', function() {
            window.location.reload();
          });
        }
      }

    }
}
