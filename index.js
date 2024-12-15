const calculateFormEle = document.getElementById("calculateForm");
const calculateMarks = (event) => {
    const maxMark = 600;
    event.preventDefault(); 
    const formData = new FormData(calculateFormEle);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = +value; // Convert input values to numbers
    });

    const totalMarks = data.english + data.hindi + data.math + data.science + data.social + data.sanskrit; // Corrected spelling
    const percentage = (totalMarks / maxMark) * 100; 
    let resultEl = document.querySelector(".result");
    if (!resultEl) {
        resultEl = document.createElement("p");
        resultEl.className = "result";
        calculateFormEle.after(resultEl);
    }  
    resultEl.innerText = `You have got ${totalMarks} out of ${maxMark} and your percentage is ${percentage.toFixed(2)}%`;
    isPrint = false;
    calculateFormEle.after(resultEl);
}
