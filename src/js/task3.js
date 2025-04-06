const randomIntegerFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
  
        if (success) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  };

  const logSuccess = ({ id, time }) =>
    console.log(`Transaction ${id} processed in ${time}ms`);

  const logError = id =>
    console.warn(`Error processing transaction ${id}. Please try again later.`);

  const transaction = document.querySelectorAll('.transaction')

  transaction.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('transaction-70')) {
        makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
      }
      if (button.classList.contains('transaction-71')) {
        makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
      }
      if (button.classList.contains('transaction-72')) {
        makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
      }
      if (button.classList.contains('transaction-73')) {
        makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
      }
    });
  });