function addChannelInput() {
    const div = document.createElement('div');
    div.innerHTML = `<input type="text" placeholder="Enter another Channel ID" class="channel-input"/>`;
    document.getElementById('channels').appendChild(div);
  }
  
  function goToPreferences() {
    window.location.href = 'preferences.html';
  }
  
  function goToDashboard() {
    window.location.href = 'dashboard.html';
  }
  
  function goToCompetitors() {
    window.location.href = 'competitors.html';
  }
  
  function searchCompetitor() {
    const name = document.getElementById("searchCompetitor").value;
    alert(`Searching for: ${name} (demo only)`);
  }
// Fancy click animation
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 300);
    });
  });
  // app.js

// Function to fetch dashboard data
async function fetchDashboardData(channelID) {
    try {
        const response = await fetch(`http://localhost:5000/api/dashboard/${channelID}`);
        
        if (response.ok) {
            const data = await response.json();
            displayDashboardData(data); // Call function to display the data
        } else {
            console.error('Failed to fetch data:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display the data in the HTML
function displayDashboardData(data) {
    const dashboardDiv = document.getElementById('dashboard');
    dashboardDiv.innerHTML = `
        <h2>YouTube Channel Information</h2>
        <p><strong>Channel Name:</strong> ${data.channel.channelName}</p>
        <p><strong>Subscribers:</strong> ${data.channel.subscribers}</p>
        <p><strong>Views:</strong> ${data.channel.views}</p>

        <h2>Analytics Data</h2>
        <p><strong>Total Earnings:</strong> ${data.analytics.earnings}</p>
        <p><strong>Views Today:</strong> ${data.analytics.viewsToday}</p>
    `;
}

// Start the fetch with channelID = 1 for testing
fetchDashboardData(1);

//intro.html functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1;
    return;
  }

  slides[currentSlide].classList.add('active');
  updateSlider();

  // Hide the "Next" button only on the last slide
  if (currentSlide === slides.length - 1) {
    nextBtn.style.display = 'none';
  }
});

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  document.querySelector('.slides').style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// When user clicks "Get Started"
function goToMain() {
  window.location.href = 'index.html';
}

