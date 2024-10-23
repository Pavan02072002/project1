document.addEventListener("DOMContentLoaded", function() {
    // Get buttons
    const employeeBtn = document.getElementById('employee-btn');
    const familyBtn = document.getElementById('family-btn');
    const departmentBtn = document.getElementById('department-btn');
    
    // Get form containers
    const employeeForm = document.getElementById('employee-form');
    const familyForm = document.getElementById('family-form');
    const departmentForm = document.getElementById('department-form');

    // Function to hide all forms
    function hideAllForms() {
        employeeForm.style.display = 'none';
        familyForm.style.display = 'none';
        departmentForm.style.display = 'none';
    }

    // Initially show only Employee form
    hideAllForms();
    employeeForm.style.display = 'block';

    // Show Employee Form
    employeeBtn.addEventListener('click', function() {
        hideAllForms();
        employeeForm.style.display = 'block';
    });

    // Show Family Form
    familyBtn.addEventListener('click', function() {
        hideAllForms();
        familyForm.style.display = 'block';
    });

    // Show Department Form
    departmentBtn.addEventListener('click', function() {
        hideAllForms();
        departmentForm.style.display = 'block';
    });
        });