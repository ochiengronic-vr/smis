// SCHOOL MANAGEMENT SYSTEM
// ========================================
// TSMIS APPLICATION
// ========================================

console.log("TSMIS application started");


// ========================================
// DASHBOARD DATA
// ========================================

const dashboardData = {
    students: 850,
    teachers: 42,
    classes: 18,
    feesCollected: "KSh 1.2M"
};


// ========================================
// GET HTML ELEMENTS
// ========================================

const studentCount = document.getElementById("studentCount");
const teacherCount = document.getElementById("teacherCount");
const classCount = document.getElementById("classCount");


// ========================================
// DISPLAY DATA
// ========================================

studentCount.textContent = dashboardData.students;
teacherCount.textContent = dashboardData.teachers;
classCount.textContent = dashboardData.classes;

// ========================================
// SIDEBAR NAVIGATION
// ========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
