const tabLinks = document.querySelectorAll('.tab-link');

      // Add click event listener to each tab link
      tabLinks.forEach(link => {
        link.addEventListener('click', () => {
          // Remove 'active' class from all tab links
          tabLinks.forEach(tab => {
            tab.classList.remove('active');
          });
          // Add 'active' class to the clicked tab link
          link.classList.add('active');

          // Get the target tab content id
          const tabId = link.getAttribute('href');

          // Hide all tab contents
          const tabContents = document.querySelectorAll('.tab-body');
          tabContents.forEach(content => {
            content.classList.remove('active', 'active-content');
          });

          // Show the selected tab content
          const selectedTab = document.querySelector(tabId);
          selectedTab.classList.add('active', 'active-content');
        });
      });
  