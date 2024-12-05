//write a java script to check weather the person is eligible for sem exam// Function to check exam eligibility
function checkEligibility(attendancePercentage, prerequisitesCompleted) {
    // Check if attendance is at least 75% and all prerequisites are completed
    if (attendancePercentage >= 75 && prerequisitesCompleted) {
        console.log("The student is eligible for the semester exam.");
    } else {
        console.log("The student is NOT eligible for the semester exam.");
        
        // Provide specific reasons
        if (attendancePercentage < 75) {
            console.log("Reason: Attendance percentage is below 75%.");
        }
        if (!prerequisitesCompleted) {
            console.log("Reason: Not all prerequisites are completed.");
        }
    }
}

// Example usage
const attendance = 80; // Example attendance percentage
const prerequisites = true; // Example: true if prerequisites are completed

checkEligibility(attendance, prerequisites);