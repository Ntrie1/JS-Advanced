function attachGradientEvents() {
    let gardientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gardientMouseoverHandler = (e) =>{
      let percent = Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100);
      resultElement.textContent = percent + '%';
    }

    const gardientMouseOutHandler = (e) => {
        resultElement.textContent = '';
    }


    gardientElement.addEventListener('mousemove', gardientMouseoverHandler);
    gardientElement.addEventListener('mouseout', gardientMouseOutHandler )

}