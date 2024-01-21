function crew(worker) {

    if (worker.dizziness === true) {
        let requiredAmount = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredAmount;
        if (worker.levelOfHydrated >= requiredAmount) {
            worker.dizziness = false;
        }
    }
    return worker;
}

crew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )