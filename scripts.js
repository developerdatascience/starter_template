const sidebar = document.getElementById('sidebar');
const toggleIcon = document.getElementById('sidebar-toggle');

toggleIcon.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});


// add another function

// Select the notification count element
const notificationCountElement = document.querySelector('.count');

// Initialize the notification count
let notificationCount = 0;

// Function to update the notification count in the UI
function updateNotificationCount(count) {
  notificationCountElement.textContent = count; // Update the text
  if (count > 0) {
    notificationCountElement.style.display = 'block'; // Show the count
  } else {
    notificationCountElement.style.display = 'none'; // Hide when count is 0
  }
}

// Function to simulate receiving notifications
function simulateNotifications(start, end) {
  notificationCount = start; // Start at the initial count
  updateNotificationCount(notificationCount); // Reflect the initial count

  // Increment the notification count one by one
  const interval = setInterval(() => {
    if (notificationCount < end) {
      notificationCount++; // Increment count
      updateNotificationCount(notificationCount); // Update UI
    } else {
      clearInterval(interval); // Stop when the count reaches the end
    }
  }, 1000); // Increment every 1 second
}

// Call the function with a range
simulateNotifications(0, 5);
