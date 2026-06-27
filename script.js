const weatherData = [
  {
    city: "東京",
    temperature: 24,
    condition: "晴れ",
    icon: "☀️",
    humidity: 55,
    wind: 3.2,
    high: 27,
    low: 19,
  },
  {
    city: "大阪",
    temperature: 26,
    condition: "曇り",
    icon: "⛅",
    humidity: 62,
    wind: 2.8,
    high: 29,
    low: 21,
  },
  {
    city: "札幌",
    temperature: 15,
    condition: "雨",
    icon: "🌧️",
    humidity: 78,
    wind: 5.1,
    high: 17,
    low: 11,
  },
];

function getTemperatureClass(temp) {
  if (temp >= 30) return "hot";
  if (temp >= 20) return "warm";
  if (temp >= 10) return "cool";
  return "cold";
}

function createWeatherCard(data) {
  const card = document.createElement("div");
  card.classList.add("weather-card", getTemperatureClass(data.temperature));

  card.innerHTML = `
    <div class="card-header">
      <h2 class="city-name">${data.city}</h2>
      <span class="weather-icon">${data.icon}</span>
    </div>
    <div class="card-body">
      <div class="temperature">
        <span class="temp-value">${data.temperature}</span>
        <span class="temp-unit">°C</span>
      </div>
      <p class="condition">${data.condition}</p>
    </div>
    <div class="card-footer">
      <div class="detail">
        <span class="detail-label">💧 湿度</span>
        <span class="detail-value">${data.humidity}%</span>
      </div>
      <div class="detail">
        <span class="detail-label">💨 風速</span>
        <span class="detail-value">${data.wind} m/s</span>
      </div>
      <div class="detail">
        <span class="detail-label">🔺 最高</span>
        <span class="detail-value">${data.high}°C</span>
      </div>
      <div class="detail">
        <span class="detail-label">🔻 最低</span>
        <span class="detail-value">${data.low}°C</span>
      </div>
    </div>
  `;

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });

  return card;
}

function renderWeatherCards() {
  const container = document.getElementById("weather-container");
  if (!container) return;

  weatherData.forEach((data, index) => {
    const card = createWeatherCard(data);
    card.style.animationDelay = `${index * 0.15}s`;
    container.appendChild(card);
  });
}

function updateLastUpdated() {
  const el = document.getElementById("last-updated");
  if (!el) return;
  const now = new Date();
  const formatted = now.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  el.textContent = `最終更新: ${formatted}`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderWeatherCards();
  updateLastUpdated();
});