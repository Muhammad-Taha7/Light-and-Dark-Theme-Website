 // Theme Management
    let isDark = false;
    const body = document.body;
    const nav = document.querySelector('nav');
    const mobileMenu = document.getElementById('mobile-menu');
    const servicesSection = document.querySelector('section:nth-of-type(2)');
    const darkBtn = document.getElementById('darkbtn');
    const mobileDarkBtn = document.getElementById('mobile-darkbtn');
    const menuBtn = document.getElementById('menu-btn');

    function toggleTheme() {
      isDark = !isDark;
      
      if (isDark) {
        // Dark mode
        body.className = 'font-sans bg-gray-900 text-white transition-colors duration-300';
        nav.className = 'sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 transition-colors duration-300';
        mobileMenu.className = 'hidden md:hidden bg-gray-900 border-t border-gray-700 transition-colors duration-300';
        servicesSection.className = 'py-20 bg-gray-800';
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
          link.className = link.className.replace('text-gray-900 hover:text-blue-600', 'text-white hover:text-blue-400');
        });

        // Update mobile nav links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.className = link.className.replace('text-gray-900 hover:text-blue-600 hover:bg-gray-50', 'text-white hover:text-blue-400 hover:bg-gray-800');
        });

        // Update service cards
        document.querySelectorAll('section:nth-of-type(2) .bg-white').forEach(card => {
          card.className = card.className.replace('bg-white', 'bg-gray-800').replace('border-gray-100', 'border-gray-700');
        });

        // Update buttons
        darkBtn.innerHTML = '<i class="fas fa-moon text-lg"></i>';
        mobileDarkBtn.innerHTML = '<i class="fas fa-moon text-lg"></i>';
        darkBtn.className = 'ml-4 p-3 rounded-full border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 hover:shadow-lg transition-all duration-200';
        mobileDarkBtn.className = 'p-3 rounded-full border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 transition-all duration-200';
        menuBtn.className = 'p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-200';
        
      } else {
        // Light mode
        body.className = 'font-sans bg-white text-gray-900 transition-colors duration-300';
        nav.className = 'sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-colors duration-300';
        mobileMenu.className = 'hidden md:hidden bg-white border-t border-gray-200 transition-colors duration-300';
        servicesSection.className = 'py-20 bg-gray-50';
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
          link.className = link.className.replace('text-white hover:text-blue-400', 'text-gray-900 hover:text-blue-600');
        });

        // Update mobile nav links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.className = link.className.replace('text-white hover:text-blue-400 hover:bg-gray-800', 'text-gray-900 hover:text-blue-600 hover:bg-gray-50');
        });

        // Update service cards
        document.querySelectorAll('section:nth-of-type(2) .bg-gray-800').forEach(card => {
          card.className = card.className.replace('bg-gray-800', 'bg-white').replace('border-gray-700', 'border-gray-100');
        });

        // Update buttons
        darkBtn.innerHTML = '<i class="fas fa-sun text-lg"></i>';
        mobileDarkBtn.innerHTML = '<i class="fas fa-sun text-lg"></i>';
        darkBtn.className = 'ml-4 p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 hover:shadow-lg transition-all duration-200';
        mobileDarkBtn.className = 'p-3 rounded-full border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 transition-all duration-200';
        menuBtn.className = 'p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200';
      }
    }

    // Event Listeners
    darkBtn.addEventListener('click', toggleTheme);
    mobileDarkBtn.addEventListener('click', toggleTheme);

    // Mobile Menu Toggle
    menuBtn.addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animation on Scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe service cards for animation
    document.querySelectorAll('.bg-white.rounded-2xl').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s ease-out';
      observer.observe(card);
    });




    // Preloader functionality
    let progress = 0;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      progress += Math.random() * 15 + 5; // Random increment between 5-20
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);
        
        // Complete loading animation
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.transform = 'scale(1.1)';
          preloader.style.transition = 'all 0.5s ease-out';
          
          setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';
            
            // Animate main content in
            setTimeout(() => {
              mainContent.style.transition = 'all 0.6s ease-out';
              mainContent.style.opacity = '1';
              mainContent.style.transform = 'translateY(0)';
            }, 50);
          }, 500);
        }, 500);
      }
      
      progressBar.style.width = progress + '%';
      progressText.textContent = Math.round(progress) + '%';
    }, 100);

    // Mobile menu functionality
    document.addEventListener('DOMContentLoaded', function() {
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Dark mode toggle (placeholder functionality)
      const darkBtn = document.getElementById('darkbtn');
      const mobileDarkBtn = document.getElementById('mobile-darkbtn');
      
      if (darkBtn) {
        darkBtn.addEventListener('click', function() {
          // Add your dark mode toggle logic here
          console.log('Dark mode toggle clicked');
        });
      }
      
      if (mobileDarkBtn) {
        mobileDarkBtn.addEventListener('click', function() {
          // Add your dark mode toggle logic here
          console.log('Mobile dark mode toggle clicked');
        });
      }
    });

    // Minimum loading time (ensure preloader shows for at least 2 seconds)
    setTimeout(() => {
      if (progress < 100) {
        progress = 100;
        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.transform = 'scale(1.1)';
          preloader.style.transition = 'all 0.5s ease-out';
          
          setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
              mainContent.style.transition = 'all 0.6s ease-out';
              mainContent.style.opacity = '1';
              mainContent.style.transform = 'translateY(0)';
            }, 50);
          }, 500);
        }, 500);
      }
    }, 2000);