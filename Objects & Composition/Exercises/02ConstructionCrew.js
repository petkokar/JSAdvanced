function crew(worker) {

    if (worker.dizziness) {
        let requiredAmount = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = !worker.dizziness;
    }
    return worker;
}

crew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )