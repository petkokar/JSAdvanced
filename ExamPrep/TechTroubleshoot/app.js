window.addEventListener('load', solution);

function solution() {
    const data = {
      employee: document.querySelector('#employee'),
      category: document.querySelector('#category'),
      urgency: document.querySelector('#urgency'),
      assignedTeam: document.querySelector('#team'),
      description: document.querySelector('#description')
    }

    let addBtn = document.querySelector('#add-btn');
    let previewContent = document.querySelector('.preview-list');
    let pendingContent = document.querySelector('.pending-list');
    let resolvedContent = document.querySelector('.resolved-list');

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
      e.preventDefault();

      for(const key in data) {
        if(data[key].value == '') {
          return;
        }
      }

      let liItem = document.createElement('li');
      liItem.className = 'problem-content';
      let articleItem = document.createElement('article');
      articleItem.innerHTML += `<p>From: ${data.employee.value}</p>`;
      articleItem.innerHTML += `<p>Category: ${data.category.value}</p>`;
      articleItem.innerHTML += `<p>Urgency: ${data.urgency.value}</p>`;
      articleItem.innerHTML += `<p>Assigned to: ${data.assignedTeam.value}</p>`;
      articleItem.innerHTML += `<p>Description: ${data.description.value}</p>`;
      liItem.appendChild(articleItem);

      let editBtn = document.createElement("button");
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      let continueBtn = document.createElement('button');
      continueBtn.className = 'continue-btn';
      continueBtn.textContent = 'Continue';
      liItem.appendChild(editBtn);
      liItem.appendChild(continueBtn);
      previewContent.appendChild(liItem);

      let backUp = {}
      for(key in data) {
        backUp[key] = data[key].value;
        data[key].value = '';
      }
      addBtn.disabled = true;

      editBtn.addEventListener('click', onEdit);
      continueBtn.addEventListener('click', onContinue);
      function onEdit() {
        liItem.remove();

        for(const key in data) {
          data[key].value = backUp[key];
        }

        addBtn.disabled = false;
      }

      function onContinue(){
        editBtn.remove();
        continueBtn.remove();
        let resolveBtn = document.createElement('button');
        resolveBtn.className = 'resolve-btn';
        resolveBtn.textContent = 'Resolved';
        liItem.appendChild(resolveBtn);
        pendingContent.appendChild(liItem);
        resolveBtn.addEventListener('click', onResolve);
        function onResolve() {
          // let resolveBtnRef = document.querySelector('.resolve-btn');
          resolveBtn.remove();
          // resolveBtnRef.remove();
          let clearBtn = document.createElement('button');
          clearBtn.className = 'clear-btn';
          clearBtn.textContent = 'Clear';
          liItem.appendChild(clearBtn);
          resolvedContent.appendChild(liItem);
  
          clearBtn.addEventListener('click', onClear);
        }
      }


      function onClear(){
        liItem.remove();
      }
    }
}


    
    
