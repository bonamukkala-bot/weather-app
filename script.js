const apiKey = "8e859790cac301be06ad94a2cf589df8";

document.getElementById("btn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "⚠ Enter city name";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("API Response:", data); // DEBUG LINE

    if (res.status !== 200) {
      result.innerHTML = `❌ ${data.message}`;
      return;
    }

    result.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 ${data.main.temp} °C</p>
      <p>☁ ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (e) {
    result.innerHTML = "❌ Network error";
    console.error(e);
  }
}
