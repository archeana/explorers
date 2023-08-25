// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     const notesIcon = document.querySelector('.notes-icon');
//     const sidebar = document.querySelector('.sidebar');
//     const notesOverlay = document.querySelector('.notes-overlay');

//     // Add a click event listener to the notes icon
//     notesIcon.addEventListener('click', () => {
//         sidebar.style.left = '0'; // Move the sidebar into view
//         notesOverlay.style.display = 'block'; // Show the notes overlay
//     });
// });


(function () {
    const heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(heart => {
        heart.addEventListener('click', function () {
            heart.classList.toggle('red');
        });
    });
})();

(function () {
    const bookmarkIcons = document.querySelectorAll('.bookmark-icon');
    bookmarkIcons.forEach(bookmark => {
        bookmark.addEventListener('click', function () {
            bookmark.classList.toggle('blue'); // Fixed this line
        });
    });
})();

//filter///
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
