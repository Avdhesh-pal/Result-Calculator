const calculateFormEle = document.getElementById("calculateForm");
const calculateMarks = (event) => {
    const maxMark = 600;
    event.preventDefault(); // Corrected method name
    const formData = new FormData(calculateFormEle);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = +value; // Convert input values to numbers
    });

    const totalMarks = data.english + data.hindi + data.math + data.science + data.social + data.sanskrit; // Corrected spelling
    const percentage = (totalMarks / maxMark) * 100; // Fixed spelling
    const resultEl = document.createElement("p");
    resultEl.className = "result";
    resultEl.innerText = `You have got ${totalMarks} out of ${maxMark} and your percentage is ${percentage.toFixed(2)}%`; // toFixed for formatting
    calculateFormEle.after(resultEl);
}
