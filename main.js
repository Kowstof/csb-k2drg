/*global $*/

$(document).ready(function () {
  $.getJSON("cars.json", function (result) {
    $("main").html("");

    $(result).each(function () {
      var title = `${this.make} ${this.model} ${this.year}`;
      var mileage = this.mileage
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // regex source: https://stackoverflow.com/a/2901298

      var newCar = `<div class="car">
      <h2 class="car-title">${title}</h2>
      <img src="img/${this.image}" class="car-img" />

      <div class="car-details">
          <span class="car-detail">
            <img src="icons/icons8-standing-man-100.png" />
            <p>${this.seats}</p>
          </span>
          <span class="car-detail middle-detail">
            <img src="icons/icons8-gas-station-100.png" class="needs-space" />
            <p>${this.fuel}</p>
          </span>
          <span class="car-detail">
            <img src="icons/icons8-speed-100-2.png" class="needs-space" />
            <p>${mileage} km</p>
          </span>
        </div>

        <p class="car-description">${this.description}</p>
        <p class="car-price">$${this.price} / day</p>

        <button class="reserve-car">RESERVE</button>
      </div>`;

      $("main").append(newCar);
    });
  });
});
