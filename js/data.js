document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('subscribers')) {
      document.getElementById('subscribers').innerText = '15,230';
      document.getElementById('videosCount').innerText = '132';
      document.getElementById('growthRate').innerText = '+12%';
  
      const videos = ['How to get 1K Subs', 'Top 5 SEO Tips', 'YouTube Shorts Growth'];
      const ul = document.getElementById('videoList');
      videos.forEach(v => {
        const li = document.createElement('li');
        li.innerText = v;
        ul.appendChild(li);
      });
    }
  
    if (document.getElementById('competitorList')) {
      const competitors = [
        { name: "TechGuru", growth: "+15%", engagement: "9.2/10" },
        { name: "CreatorQueen", growth: "+18%", engagement: "8.5/10" }
      ];
      const container = document.getElementById('competitorList');
      competitors.forEach(c => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${c.name}</strong><br>Growth: ${c.growth} | Engagement: ${c.engagement}<br><br>`;
        container.appendChild(div);
      });
    }
  });
  