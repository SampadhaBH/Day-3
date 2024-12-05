//To categorize students based on their merits, you can create a JavaScript program that assigns categories based on their scores or grades. For this example, let's define the following categories:
// Function to categorize students based on their scores
function categorizeStudents(students) {
    students.forEach(student => {
        let category;

        if (student.score >= 90) {
            category = "Excellent";
        } else if (student.score >= 75) {
            category = "Good";
        } else if (student.score >= 50) {
            category = "Average";
        } else {
            category = "Poor";
        }

        console.log(`Student: ${student.name}, Score: ${student.score}, Category: ${category}`);
    });
}

// Example usage
const students = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 82 },
    { name: "Charlie", score: 67 },
    { name: "David", score: 45 },
    { name: "Eve", score: 78 },
];

categorizeStudents(students);