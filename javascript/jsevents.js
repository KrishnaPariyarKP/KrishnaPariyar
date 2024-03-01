document.addEventListener('DOMContentLoaded', function() {
    const menubar = document.querySelector('.menubar');
    const menu2 = document.querySelector('.menu2');

    menubar.addEventListener('click', function() {
      menu2.style.display = (menu2.style.display === 'block') ? 'none' : 'block';
    });
    window.addEventListener('scroll', function() {
      menu2.style.display = 'none'; // Hide the menu on scroll
  });
    document.addEventListener('click', function(event) {
        if (!menu2.contains(event.target) && event.target !== menubar) {
            menu2.style.display = 'none';
        }
    });
  });

  function downloadResume(){
     // Replace 'path_to_your_resume.pdf' with the actual path to your resume PDF file
  const resumeUrl = 'myresume.pdf';
  
  // Create an anchor element
  const a = document.createElement('a');
  a.href = resumeUrl;
  
  // Set the download attribute to force download
  a.download = 'myresume.pdf';
  
  // Append the anchor element to the body
  document.body.appendChild(a);
  
  // Programmatically trigger a click event on the anchor element
  a.click();
  
  // Remove the anchor element from the body
  document.body.removeChild(a);
  }
 