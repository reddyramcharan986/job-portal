function searchJobs() {
    let input = document.getElementById("searchInput").value;

    if (input === "") {
        alert("Please enter a job name.");
    } else {
        alert("Searching for: " + input);
    }
}