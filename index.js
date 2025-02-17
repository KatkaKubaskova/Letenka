const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

  // Zobrazení názvů startovní a cílové země
  document.body.innerHTML += '<p>Odlet z: ' + flight.countryFrom.name + '→ Přílet do: ' + flight.countryTo.name + '</p>';

  // Uložení rozměrů zavazadel do proměnné
  const baggage = flight.baglimit;

//Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.
document.body.innerHTML += '<p>Šířka zavazadla: ' + baggage.hand_width + '</p>';
    
document.body.innerHTML += '<p>Výška zavazadla: ' + baggage.hand_height + '</p>';

document.body.innerHTML += '<p>Délka zavazadla: ' + baggage.hand_length + '</p>';

document.body.innerHTML += '<p>Hmotnost zavazadla: ' + baggage.hand_weight + '</p>';
    


//Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.

const secondBagPriceCZK = Math.ceil(flight.bags_price[2] * 25); // Přepočet 1 EUR = 25 CZK
document.body.innerHTML += '<p>Cena za druhé zavazadlo : ' + secondBagPriceCZK + 'Kč</p>';
