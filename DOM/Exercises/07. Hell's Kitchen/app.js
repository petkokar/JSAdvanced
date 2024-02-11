function solve(input) {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textArea = document.querySelector('#inputs textarea');
   let textContent = textArea.value;
   const restaurants = {};

   function onClick () {
      for(let restaurant of textContent) {
         const [name, ...workers] = restaurant.split(" - ");
         const workersInfo = workers.map(worker => {
            const [workerName, salary] = worker.split(' ');
            return { name: workerName, salary: Number(salary)}
         });

         if (!restaurants[name]) {
            restaurants[name] = {
               workers: [],
               totalSalary: 0,
               avgSalary: 0,
               bestSalary: 0
            };
         }

         restaurants[name].workers = [...restaurants[name].workers, ...workersInfo];
         restaurants[name].totalSalary += workersInfo.reduce((acc, curr) => acc + curr.salary, 0);
         restaurants[name].avgSalary = restaurants[name].totalSalary / restaurants[name].workers.length;
         restaurants[name].bestSalary = Math.max(restaurants[name].bestSalary, ...workersInfo.map(worker => worker.salary));
      }

      determineBestRestaurant(restaurants);
   }

   function determineBestRestaurant(restaurants) {
      let bestName = '';
      let bestAvgSalary = 0;
      let bestBestSalary = 0;
      for(const [name, info] of Object.entries(restaurants)) {
         if (info.avgSalary > bestAvgSalary) {
            bestAvgSalary = info.avgSalary;
            bestName = name;
            bestBestSalary = info.bestSalary;
         }
      }
   }
}

solve(["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"])