
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".tab-link");
  const allTabTriggers = document.querySelectorAll("[data-tab]");
  const sections = document.querySelectorAll(".contents");
  const sidebar = document.querySelector(".sidebar");

  // ✅ Get all toggle buttons
  const toggleButtons = document.querySelectorAll(".sidebar-toggle");

  allTabTriggers.forEach(trigger => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const targetClass = this.getAttribute("data-tab").toLowerCase();
      sections.forEach(sec => sec.classList.remove("active"));
      const targetSection = document.querySelector(`.${targetClass}`);
      if (targetSection) targetSection.classList.add("active");

      navLinks.forEach(link => link.classList.remove("active"));
      if (this.classList.contains("tab-link")) {
        this.classList.add("active");
      }

      // ✅ Remove active from all toggle buttons and sidebar
      sidebar.classList.remove("active");
      toggleButtons.forEach(btn => btn.classList.remove("active"));
    });
  });




  // ✅ Toggle sidebar from any toggle button
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      toggleButtons.forEach(b => b.classList.toggle("active"));
    });
  });
});


// auto typing text
document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Full Stack WordPress Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Freelancer"
  ];
  const element = document.getElementById("typed-text");
  let roleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      element.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Typing speed
    } else {
      setTimeout(erase, 2000); // Delay before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      element.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Erasing speed
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  type(); // Start typing
});



// Testimonials-slder
let testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

setInterval(() => {
  nextTestimonial();
}, 4000);

// qoute-slider
let quotes = document.querySelectorAll('.quote');
let quoteIndex = 0;

function showQuote(index) {
  quotes.forEach(q => q.classList.remove('active'));
  quotes[index].classList.add('active');
}

function nextQuote() {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote(quoteIndex);
}

function prevQuote() {
  quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(quoteIndex);
}

// Auto change every 5 seconds
setInterval(() => {
  nextQuote();
}, 5000);
// // blogs-post
//   const blogPostsData = [
//       {
//         title: "How to Start with Web Development",
//         img: "images/57f3a018b36002ae48be6e5734dcae1a.jpg",
//         text: "Learn the basics of HTML, CSS, and JavaScript to kickstart your web development journey. This guide is perfect for beginners.",
//         content: "<h2>How to Start with Web Development</h2><p>Start with learning HTML for structure, CSS for styling, and JavaScript for interactivity. Build small projects like a portfolio or to-do app. Practice consistently and explore frameworks like React later.</p>"
//       },
//       {
//         title: "Top 5 CSS Tricks Every Developer Should Know",
//         img: "images/blog-post2.jpg",
//         text: "Enhance your web design skills with these must-know CSS techniques that make your site stand out.",
//         content: "<h2>Top 5 CSS Tricks</h2><ul><li>Flexbox Layouts</li><li>CSS Grid</li><li>Animations</li><li>Custom Fonts</li><li>Media Queries</li></ul>"
//       },
//       {
//         title: "Understanding JavaScript Promises",
//         img: "https://via.placeholder.com/800x400",
//         text: "JavaScript promises are an essential part of asynchronous programming. Learn how they work and when to use them.",
//         content: "<h2>Understanding JavaScript Promises</h2><p>Promises are used to handle asynchronous operations in JavaScript. A Promise has three states: pending, resolved, or rejected. You can use .then(), .catch(), and async/await for better control.</p>"
//       },
//       {
//         title: "Why SEO is Important for Your Website",
//         img: "https://via.placeholder.com/800x400",
//         text: "Search Engine Optimization helps your website rank better. Discover the basics of SEO and how to implement it.",
//         content: "<h2>Why SEO is Important</h2><p>SEO helps bring organic traffic to your website. Key aspects include keyword research, on-page SEO, backlinks, and mobile responsiveness. Good SEO improves visibility and credibility.</p>"
//       },
//       {
//         title: "Getting Started with Git and GitHub",
//         img: "https://via.placeholder.com/800x400",
//         text: "Version control is crucial for developers. Learn how Git and GitHub make collaboration easier.",
//         content: "<h2>Git and GitHub Basics</h2><p>Git is a distributed version control system. GitHub is a platform to host Git repositories. Learn to commit changes, push to remote, and manage branches.</p>"
//       },
//       {
//         title: "10 Web Design Tips for Beginners",
//         img: "https://via.placeholder.com/800x400",
//         text: "Design a stunning website with these beginner-friendly tips. Focus on usability and aesthetics.",
//         content: "<h2>Web Design Tips</h2><ul><li>Keep it simple</li><li>Use readable fonts</li><li>Ensure mobile-friendliness</li><li>Consistent color scheme</li><li>Easy navigation</li></ul>"
//       },
//       {
//         title: "10 Web Design Tips for Beginners",
//         img: "https://via.placeholder.com/800x400",
//         text: "Design a stunning website with these beginner-friendly tips. Focus on usability and aesthetics.",
//         content: "<h2>Web Design Tips</h2><ul><li>Keep it simple</li><li>Use readable fonts</li><li>Ensure mobile-friendliness</li><li>Consistent color scheme</li><li>Easy navigation</li></ul>"
//       }
//     ];

//     const postsPerPage = 6;
//     let currentPage = 1;

//     function displayPosts() {
//       const start = (currentPage - 1) * postsPerPage;
//       const end = start + postsPerPage;
//       const postsToShow = blogPostsData.slice(start, end);
//       const container = document.getElementById("blog-posts");
//       container.innerHTML = postsToShow.map((post, index) => `
//         <div class="blog-post">
//           <img src="${post.img}" alt="${post.title}">
//           <h3>${post.title}</h3>
//           <p>${post.text}</p>
//           <a href="#" onclick="openSinglePost(${start + index}); return false;">Read More</a>
//         </div>
//       `).join("");
//     }

//     function openSinglePost(index) {
//       const post = blogPostsData[index];
//       const container = document.getElementById("blog-posts");
//       const pagination = document.getElementById("pagination");
//       pagination.innerHTML = "";
//       container.innerHTML = `
//         <div class="single-post">
//           <img src="${post.img}" alt="${post.title}">
//           ${post.content}
//           <a href="#" onclick="displayPosts(); displayPagination(); return false;">&larr; Back to Posts</a>
//         </div>
//       `;
//     }

//     function displayPagination() {
//       const totalPages = Math.ceil(blogPostsData.length / postsPerPage);
//       const paginationContainer = document.getElementById("pagination");
//       let buttons = '';
//       if (currentPage > 1) {
//         buttons += `<button onclick="changePage(${currentPage - 1})">&laquo; Previous</button>`;
//       }
//       for (let i = 1; i <= totalPages; i++) {
//         buttons += `<button onclick="changePage(${i})">${i}</button>`;
//       }
//       if (currentPage < totalPages) {
//         buttons += `<button onclick="changePage(${currentPage + 1})">Next &raquo;</button>`;
//       }
//       paginationContainer.innerHTML = buttons;
//     }

//     function changePage(page) {
//       currentPage = page;
//       displayPosts();
//       displayPagination();
//     }

//     displayPosts();
//     displayPagination();


   const blogPostsData = [
      {
        title: "How to Start with Web Development",
        img: "https://i.pinimg.com/736x/bf/d8/9e/bfd89ebf40141163f30ffefcdde45aeb.jpg",
        text: "Learn the basics of HTML, CSS, and JavaScript to kickstart your web development journey. This guide is perfect for beginners.",
        content: "<h2>How to Start with Web Development</h2><p>Start with learning HTML for structure, CSS for styling, and JavaScript for interactivity. Build small projects like a portfolio or to-do app. Practice consistently and explore frameworks like React later.</p>"
      },
      {
        title: "Top 5 CSS Tricks Every Developer Should Know",
        img: "https://i.pinimg.com/736x/5a/f3/76/5af376c6db4e01d502d71527ccda2baf.jpg",
        text: "Enhance your web design skills with these must-know CSS techniques that make your site stand out.",
        content: "<h2>Top 5 CSS Tricks</h2><ul><li>Flexbox Layouts</li><li>CSS Grid</li><li>Animations</li><li>Custom Fonts</li><li>Media Queries</li></ul>"
      },
      {
        title: "Understanding JavaScript Promises",
        img: "images/blog-post-3.jpg",
        text: "JavaScript promises are an essential part of asynchronous programming. Learn how they work and when to use them.",
        content: "<h2>Understanding JavaScript Promises</h2><p>Promises are used to handle asynchronous operations in JavaScript. A Promise has three states: pending, resolved, or rejected. You can use .then(), .catch(), and async/await for better control.</p>"
      },
      {
        title: "Why SEO is Important for Your Website",
        img: "images/blog-post-4.jpg",
        text: "Search Engine Optimization helps your website rank better. Discover the basics of SEO and how to implement it.",
        content: "<h2>Why SEO is Important</h2><p>SEO helps bring organic traffic to your website. Key aspects include keyword research, on-page SEO, backlinks, and mobile responsiveness. Good SEO improves visibility and credibility.</p>"
      },
      {
        title: "Getting Started with Git and GitHub",
        img: "images/blog-post-5.jpg",
        text: "Version control is crucial for developers. Learn how Git and GitHub make collaboration easier.",
        content: "<h2>Git and GitHub Basics</h2><p>Git is a distributed version control system. GitHub is a platform to host Git repositories. Learn to commit changes, push to remote, and manage branches.</p>"
      },
      {
        title: "10 Web Design Tips for Beginners",
        img: "images/blog-post-6.jpg",
        text: "Design a stunning website with these beginner-friendly tips. Focus on usability and aesthetics.",
        content: "<h2>Web Design Tips</h2><ul><li>Keep it simple</li><li>Use readable fonts</li><li>Ensure mobile-friendliness</li><li>Consistent color scheme</li><li>Easy navigation</li></ul>"
      },
      {
        title: "10 Web Design Tips for Beginners",
        img: "images/blog-post-6.jpg",
        text: "Design a stunning website with these beginner-friendly tips. Focus on usability and aesthetics.",
        content: "<h2>Web Design Tips</h2><ul><li>Keep it simple</li><li>Use readable fonts</li><li>Ensure mobile-friendliness</li><li>Consistent color scheme</li><li>Easy navigation</li></ul>"
      }
    ];

    const postsPerPage = 6;
    let currentPage = 1;

    function displayPosts() {
      const start = (currentPage - 1) * postsPerPage;
      const end = start + postsPerPage;
      const postsToShow = blogPostsData.slice(start, end);
      const container = document.getElementById("blog-posts");
      container.innerHTML = postsToShow.map((post, index) => `
        <div class="blog-post">
          <img src="${post.img}" alt="${post.title}">
          <h3>${post.title}</h3>
          <p>${post.text}</p>
          <a href="#" onclick="openSinglePost(${start + index}); return false;">Read More</a>
        </div>
      `).join("");
    }

    function openSinglePost(index) {
      const post = blogPostsData[index];
      const container = document.getElementById("blog-posts");
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";
      container.innerHTML = `
        <div class="single-post">
          <img src="${post.img}" alt="${post.title}">
          ${post.content}
          <a href="#" onclick="displayPosts(); displayPagination(); return false;">&larr; Back to Posts</a>
        </div>
      `;
    }

    function displayPagination() {
      const totalPages = Math.ceil(blogPostsData.length / postsPerPage);
      const paginationContainer = document.getElementById("pagination");
      let buttons = '';
      if (currentPage > 1) {
        buttons += `<button onclick="changePage(${currentPage - 1})">&laquo; Previous</button>`;
      }
      for (let i = 1; i <= totalPages; i++) {
        buttons += `<button onclick="changePage(${i})">${i}</button>`;
      }
      if (currentPage < totalPages) {
        buttons += `<button onclick="changePage(${currentPage + 1})">Next &raquo;</button>`;
      }
      paginationContainer.innerHTML = buttons;
    }

    function changePage(page) {
      currentPage = page;
      displayPosts();
      displayPagination();
    }

    displayPosts();
    displayPagination();


    // form-submition
   
  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnnvkdqz", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    const responseText = document.getElementById("formResponse");

    if (response.ok) {
      responseText.textContent = "Message sent successfully!";
      form.reset();
    } else {
      responseText.textContent = "There was an error. Please try again.";
    }
  });





















  













  