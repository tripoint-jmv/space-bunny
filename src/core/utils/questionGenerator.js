const getRandomInts = (max) => {
  const nums = new Set();
  while (nums.size !== 3) {
    nums.add(Math.floor(Math.random() * max));
  }
  return [...nums];
};

const shuffledAnswers = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const generateQuestions = () => {
  const answerArr = getRandomInts(50);
  const [firstNum, secondNum] = [
    Math.floor(Math.random() * answerArr[0]),
    Math.floor(Math.random() * answerArr[2]),
  ];
  let correctAnswer = firstNum + secondNum;
  const answers = shuffledAnswers(answerArr.concat(correctAnswer));

  const additionQuestion = `What is ${firstNum} + ${secondNum}?`;

  let questions = [
    {
      question: additionQuestion,
      correctAnswer: correctAnswer,
      answers: answers,
    },
  ];
  return questions;
};
