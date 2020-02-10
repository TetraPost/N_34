const app = document.querySelector('.propertyType');
const btnTwo = document.querySelector('.buttonTwo');
const textInfo = document.querySelector('.textInfo');

async function fetchData() {
  try {
    btnTwo.innerText = 'Wait';
    const response = await axios.get('/list');
    const dataRes = response.data;
    app.innerText = JSON.stringify(dataRes, undefined, 2);
    btnTwo.innerText = 'Push';
    textInfo.innerHTML = dataRes[1];
  } catch (error) {
    console.log(error);
  }
}

btnTwo.onclick = () => {
  fetchData();
};
