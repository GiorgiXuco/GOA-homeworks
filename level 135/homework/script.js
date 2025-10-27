// შექმენით 3 Promise:
//  ◻️fastTask – დასრულდეს resolve("Fast task finished") 500ms-ში.
//  ◻️mediumTask – დასრულდეს resolve("Medium task finished") 1000ms-ში.
//  ◻️slowTask – დასრულდეს resolve("Slow task finished") 1500ms-ში.
// შემდეგ გამოიყენეთ Promise.race, რათა გამოიტანოთ მხოლოდ ის შედეგი, რომელიც პირველი დასრულდა.

const fastTask = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Fast task finished")
    }, 500)
})

const mediumTask = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Medium task finished");
    }, 1000)
})

const slowTask = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Slow task finished")
    }, 1500)
})


Promise.race([fastTask, mediumTask, slowTask])
    .then((result) => {
        console.log("პირველი დასრულებული:", result)
    })
    .catch((error) => {
        console.error("შეცდომა:", error)
    })