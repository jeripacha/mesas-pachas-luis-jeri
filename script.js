// Definición de stickers con nombre y cantidad
const areas = {
  pacha: [
    { name: "", quantity: "", drinks: ",", combos: "" },// pacha 1
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,flor de caña 5 años", combos: "cumpleañero" },// pacha 2
    { name: "", quantity: "", drinks: "", combos: "" },// pacha 3
    { name: "", quantity: "", drinks: ",", combos: "" },// pacha 4
    { name: "", quantity: "", drinks: ",", combos: "" },// pacha 5
    { name: "Ignacio aguilar", quantity: "980", drinks: "viuda,", combos: "pachamama" },// pacha 6
    { name: "", quantity: "", drinks: ",", combos: "" },// pacha 7
    { name: "Ignacio aguilar", quantity: "830", drinks: "viuda,flor de caña 5 años", combos: "parrales" },// pacha 8
    { name: "Ignacio aguilar", quantity: "900", drinks: "simgami parrales,", combos: "pachamama" },// pacha 9
  ],

  lounge: [
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 1
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 2
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 3
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 4
      { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,flor de caña 5 años", combos: "cumleañero" }, // lounge 5
      { name: "Ignacio aguilar", quantity: "680", drinks: "jager,", combos: "jager" }, // lounge 6
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 7
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 8
      { name: "Ignacio aguilar", quantity: "830", drinks: "singani parrales,fernet", combos: "parrales" }, // lounge 9
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 10
      { name: "", quantity: "", drinks: ",", combos: "" }, // lounge 11
  ],


  parrales: [
    { name: "Ignacio aguilar", quantity: "760", drinks: "singani parrales,", combos: "jager" }, // parrales 1
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,singani parrales", combos: "cumpleañero" }, // parrales 2
    { name: "Ignacio aguilar", quantity: "830", drinks: "singani parrales,viuda", combos: "parrales" }, // parrales 3
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,fernet", combos: "cumpleañero" }, // parrales 4
    { name: "Ignacio aguilar", quantity: "980", drinks: "flor de caña 5 años,singani parrales", combos: "cumpleañero" }, // parrales 5
    { name: "natalia rodriguez", quantity: "900", drinks: "singani parrales,", combos: "pachamama" }, // parrales 6
    { name: "natalia rodriguez", quantity: "900", drinks: "singani parrales,", combos: "pachamama" }, // parrales 7
    { name: "Ignacio aguilar", quantity: "680", drinks: "jager,", combos: "jager" }, // parrales 8
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,flor de caña 5 años", combos: "cumpleañero" }, // parrales 9
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,flor de caña 7 años", combos: "cumpleañero" }, // parrales 10
    { name: "Ignacio aguilar", quantity: "680", drinks: "flor de caña 5 años,viuda", combos: "parrales" }, // parrales 11
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,", combos: "pachamama" }, // parrales 12
    { name: "Ignacio aguilar", quantity: "680", drinks: "jager,", combos: "jager" }, // parrales 13
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,flor de caña 5 años", combos: "cumpleañero" }, // parrales 14
    { name: "Ignacio aguilar", quantity: "750", drinks: "singani parrales,", combos: "parrales" }, // parrales 15
    { name: "Ignacio aguilar", quantity: "980", drinks: "singani parrales,vodka", combos: "cumpleañero" }, // parrales 16
    { name: "Ignacio aguilar", quantity: "980", drinks: "viuda,flor de caña 5 años", combos: "cumpleañero" }, // parrales 17
    { name: "Ignacio aguilar", quantity: "830", drinks: "flor de caña 5 años,singani parrales", combos: "parrales" }, // parrales 18
  ],

  cholet: [ // Nueva área
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 1
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 2
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 3
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 4
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 5
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 6
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 7
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 8
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 9
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 10
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 11
      { name: "", quantity: "", drinks: ",", combos: "" }, // cholet 12
  ],

  camel: [ // Nueva área
    { name: "Ignacio aguilar", quantity: "830", drinks: "flor de caña 5 años,singani parrales", combos: "parrales" },// camel 1
    { name: "", quantity: "", drinks: ",", combos: "" },// camel 2
    { name: "Ignacio aguilar", quantity: "830", drinks: "singani parrales,singani parrales", combos: "parrales" },// camel 3
  ],
  extras: [ // Nueva área
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 1
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 2
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 3
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 4
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 5
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 6
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 7
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 8
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 9
    { name: "", quantity: "", drinks: ",", combos: "" }, // extras 10
  ],

  Vip: [ // Nueva área
    { name: "Ignacio aguilar", quantity: "830", drinks: "viuda,flor de caña 5 años", combos: "parrales" }, // Vip 1
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 2
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 3
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 4
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 5
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 6
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 7
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 8
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 9
    { name: "", quantity: "", drinks: ",", combos: "" }, // Vip 10
  ]

};

// Lista de stickers
const stickers = {
  pacha: "icons8-table-top-view-96 (2).png",
  parrales: "icons8-table-top-view-96 (2).png",
  lounge: "icons8-table-top-view-96 (2).png",
  cholet: "icons8-table-top-view-96 (2).png",
  camel: "icons8-table-top-view-96 (2).png",
  extras: "icons8-table-top-view-96 (2).png",
  Vip: "icons8-table-top-view-96 (2).png"
};

// Definición de números de cuenta
const accountNumbers = {
  "pedro": "190*****817",
  "Ignacio aguilar": "150*****327",
};

// Seleccionar los contenedores para cada área
const pachaContainer = document.getElementById("pacha-container");
const parralesContainer = document.getElementById("parrales-container");
const loungeContainer = document.getElementById("lounge-container");
const choletContainer = document.getElementById("cholet-container");
const camelContainer = document.getElementById("camel-container");
const extrasContainer = document.getElementById("extras-container");
const VipContainer = document.getElementById("Vip-container");

// Función para generar stickers
function createSticker(container, area, stickerUrl) {
  area.forEach((sticker, index) => {
    const stickerDiv = document.createElement("div");
    stickerDiv.className = "sticker";

    const img = document.createElement("img");
    img.src = stickerUrl;
    img.alt = `Sticker ${index + 1}`;

    const numberLabel = document.createElement("span");
    numberLabel.className = "sticker-number";
    numberLabel.textContent = (index + 1).toString();

    const quantityLabel = document.createElement("span");
    quantityLabel.className = "sticker-quantity";
    quantityLabel.textContent = sticker.quantity;

    const nameLabel = document.createElement("span");
    nameLabel.className = "sticker-name";
    nameLabel.textContent = sticker.name;
    nameLabel.style.display = "none";

    stickerDiv.addEventListener("mouseover", () => {
      nameLabel.style.display = "block";
    });
    stickerDiv.addEventListener("mouseout", () => {
      nameLabel.style.display = "none";
    });

    stickerDiv.appendChild(img);
    stickerDiv.appendChild(numberLabel);
    stickerDiv.appendChild(quantityLabel);
    stickerDiv.appendChild(nameLabel);
    container.appendChild(stickerDiv);
  });
}

// Generar los stickers para cada área
createSticker(pachaContainer, areas.pacha, stickers.pacha);
createSticker(parralesContainer, areas.parrales, stickers.parrales);
createSticker(loungeContainer, areas.lounge, stickers.lounge);
createSticker(choletContainer, areas.cholet, stickers.cholet);
createSticker(camelContainer, areas.camel, stickers.camel);
createSticker(extrasContainer, areas.extras, stickers.extras);
createSticker(VipContainer, areas.Vip, stickers.Vip);


// Función para calcular el total de cada área
function calcularTotal() {
  let totalPacha = areas.pacha.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cantidad
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalParrales = areas.parrales.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cantidad
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  let totalLounge = areas.lounge.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cantidad
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);
  let totalCholet = areas.cholet.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cant
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);
  let totalCamel = areas.camel.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cantidad
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);
  let totalExtras = areas.extras.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cant
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);
  let totalVip = areas.Vip.reduce((acc, sticker) => {
    if (sticker.name && sticker.quantity) { // Filtrar solo si hay nombre y cant
      return acc + (Number(sticker.quantity) || 0);
    }
    return acc;
  }, 0);

  const totalGeneral = totalPacha + totalParrales + totalLounge + totalCholet + totalCamel + totalExtras + totalVip;

  const totalPorNombre = {};

  [...areas.pacha, ...areas.parrales, ...areas.lounge, ...areas.cholet, ...areas.camel, ...areas.extras, ...areas.Vip].forEach(sticker => {
    const name = sticker.name;
    if (name && sticker.quantity) { // Filtrar solo si hay nombre y cantidad
      totalPorNombre[name] = (totalPorNombre[name] || 0) + (Number(sticker.quantity) || 0);
    }
  });

  return {
    totalGeneral,
    totalPorNombre,
  };
}

// Función para contar total de combos y cuántos de cada tipo
function contarCombos() {
  const totalCombos = {};
  let totalCombosCount = 0;

  // Recorremos las áreas para contar los combos
  [...areas.pacha, ...areas.parrales, ...areas.lounge, ...areas.cholet, ...areas.camel, ...areas.extras, ...areas.Vip].forEach(sticker => {
    const combosList = sticker.combos ? sticker.combos.split(",").map(c => c.trim()).filter(c => c) : []; // Filtramos entradas vacías

    combosList.forEach(combo => {
      totalCombos[combo] = (totalCombos[combo] || 0) + 1; // Contamos cada tipo de combo
    });

    // Acumulamos el total de combos solo si hay alguno registrado
    totalCombosCount += combosList.length;
  });

  return { totalCombos, totalCombosCount };
}

// Ejemplo de uso
const { totalCombos, totalCombosCount } = contarCombos();
console.log("Total de combos:", totalCombosCount);
console.log("Cantidad por tipo de combo:", totalCombos);

// Función para contar total de bebidas y cuántas de cada tipo
function contarDrinks() {
  const totalDrinks = {};
  let totalCount = 0;

  // Recorremos las áreas para contar las bebidas
  [...areas.pacha, ...areas.parrales, ...areas.lounge, ...areas.cholet, ...areas.camel, ...areas.extras, ...areas.Vip].forEach(sticker => {
    const drinksList = sticker.drinks ? sticker.drinks.split(",").map(d => d.trim()).filter(d => d) : []; // Filtramos entradas vacías

    drinksList.forEach(drink => {
      totalDrinks[drink] = (totalDrinks[drink] || 0) + 1; // Contamos cada tipo de bebida
    });

    // Acumulamos el total de bebidas solo si hay alguna bebida
    totalCount += drinksList.length;
  });

  return { totalDrinks, totalCount };
}

// Función para calcular el porcentaje de ocupación de cada área
function calcularPorcentajeOcupacion() {
  const porcentajes = {};

  for (const area in areas) {
    const totalStickers = areas[area].length; // Número total de stickers en el área
    const ocupados = areas[area].filter(sticker => sticker.name && sticker.quantity).length; // Contar cuántos stickers están ocupados

    // Calculamos el porcentaje de ocupación en base a la cantidad de stickers ocupados
    porcentajes[area] = (ocupados / totalStickers) * 100;
  }

  return porcentajes;
}


// Función para calcular el total extraído de pachamama
function calcularExtraidoPachamama() {
  let totalExtraido = 0;
  let detallesExtraidos = [];

  // Recorremos todas las áreas y buscamos los stickers con "pachamama" en combos
  [...areas.pacha, ...areas.parrales, ...areas.lounge, ...areas.cholet, ...areas.camel, ...areas.extras, ...areas.Vip].forEach(sticker => {
    if (sticker.combos && sticker.combos.includes("pachamama")) {
      const cantidad = Number(sticker.quantity);
      if (cantidad >= 400) {
        // Restamos 400 de la cantidad
        totalExtraido += 400;
        detallesExtraidos.push({
          name: sticker.name,
          cantidadExtraida: 400,
          cantidadRestante: cantidad - 400
        });
      }
    }
  });

  return { totalExtraido, detallesExtraidos };
}
function calcularGanancias(areas, cocaColaCantidad = 0, schweppesCantidad = 0, mamboBotanicoCantidad = 0, mamboUvaCantidad = 0, monsterCantidad = 0) {
  const precios = {
    "viuda descalza": 84,
    "singani parrales": 62,
    fernet: 80,
    "flor de caña 5 años": 73,
    "gin republica": 120,
    jager: 152,
    cocaCola: 9,
    vodka: 85,
    "Schweppes Ginger Ale 1.5": 15, 
    "Mambo Botanico": 12, // Añadido precio para Mambo Botánico
    "Mambo Uva": 12, // Añadido precio para Mambo Uva
    monster: 15, // Añadido precio para Monster
  };

  let totalesDrinks = {}; // Acumular cantidades por tipo de drink
  let totalQuantity = 0; // Suma de todas las cantidades

  // Calcular totales por drink y sumar los quantity
  for (const area in areas) {
    areas[area].forEach(({ quantity, drinks }) => {
      totalQuantity += parseInt(quantity) || 0;

      if (drinks) {
        drinks.split(",").forEach((drink) => {
          drink = drink.trim();

          // Solo contar si el drink tiene un nombre válido
          if (drink && precios[drink]) { 
            if (!totalesDrinks[drink]) {
              totalesDrinks[drink] = 0;
            }
            totalesDrinks[drink] += 1; // Contamos cada ocurrencia del drink
          }
        });
      }
    });
  }

  // Calcular ingresos por tipo de drink
  let totalGanadoDrinks = 0;
  const detalleVentas = [];
  for (const [drink, cantidad] of Object.entries(totalesDrinks)) {
    const precio = precios[drink] || 0;
    const ingreso = cantidad * precio;
    totalGanadoDrinks += ingreso;
    detalleVentas.push({ producto: drink, cantidad, ingreso });
  }

  // Calcular ingresos por Coca-Cola, SCHWEPPES GINGER ALE, MAMBO BOTANICO, MAMBO UVA y MONSTER
  const ingresoCocaCola = cocaColaCantidad * precios.cocaCola;
  const ingresoSchweppes = schweppesCantidad * precios["Schweppes Ginger Ale 1.5"];
  const ingresoMamboBotanico = mamboBotanicoCantidad * precios["Mambo Botanico"];
  const ingresoMamboUva = mamboUvaCantidad * precios["Mambo Uva"];
  const ingresoMonster = monsterCantidad * precios.monster;

  totalGanadoDrinks += ingresoCocaCola + ingresoSchweppes + ingresoMamboBotanico + ingresoMamboUva + ingresoMonster;

  // Agregar detalles de Coca-Cola, SCHWEPPES GINGER ALE, MAMBO BOTANICO, MAMBO UVA y MONSTER
  detalleVentas.push({ producto: "Coca-Cola", cantidad: cocaColaCantidad, ingreso: ingresoCocaCola });
  detalleVentas.push({ producto: "Schweppes Ginger Ale 1.5", cantidad: schweppesCantidad, ingreso: ingresoSchweppes });
  detalleVentas.push({ producto: "Mambo Botanico", cantidad: mamboBotanicoCantidad, ingreso: ingresoMamboBotanico });
  detalleVentas.push({ producto: "Mambo Uva", cantidad: mamboUvaCantidad, ingreso: ingresoMamboUva });
  detalleVentas.push({ producto: "Monster", cantidad: monsterCantidad, ingreso: ingresoMonster });

  // Calcular resultado final
  const resultado = Math.abs(totalGanadoDrinks - totalQuantity);

  return {
    totalQuantity,
    totalGanado: totalGanadoDrinks,
    resultado,
    detalleVentas,
  };
}


// Función para mostrar el total y detalles en el modal
function mostrarDetalles() {
  const totals = calcularTotal();
  const { totalDrinks } = contarDrinks();
  const { totalCombos } = contarCombos(); // Llamamos a la nueva función
  const porcentajes = calcularPorcentajeOcupacion();
  const totalNames = Object.keys(totals.totalPorNombre);
  const totalNombreTitle = document.getElementById("total-nombre-title");
  const totalContainer = document.getElementById("total-container");

  totalContainer.innerHTML = "";


  if (totalNames.length === 1) {
    const name = totalNames[0];
    const accountNumber = accountNumbers[name] || "N/A";
    const totalAmount = totals.totalGeneral;

    totalContainer.innerHTML = `
      <div class="card-credit">
        <div class="total-label">Total Registrado</div>
        <h2>${name}</h2>
        <div class="amount">${totalAmount} bs</div>
        <div class="account-number">Cuenta: ${accountNumber}</div>
      </div>
    `;

    document.getElementById("total-nombre-container").innerHTML = "";
    document.getElementById("nombre-table").style.display = "none";
    totalNombreTitle.style.display = "none";
  } else {


    const totalPorNombreContainer = document.getElementById("total-nombre-container");
    totalPorNombreContainer.innerHTML = "";
    document.getElementById("nombre-table").style.display = "";
    totalNombreTitle.style.display = "";

    let totalMonto = 0;

    for (const [nombre, total] of Object.entries(totals.totalPorNombre)) {
      const accountNumber = accountNumbers[nombre] || "N/A";
      const row = document.createElement("tr");
      row.innerHTML = `<td>${nombre} (${accountNumber})</td><td>${total} bs</td>`;
      totalPorNombreContainer.appendChild(row);
      totalMonto += total;
    }

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td style="font-weight: bold; color:green;">Total:</td><td style="font-weight: bold;color:green;">${totalMonto} bs</td>`;
    totalPorNombreContainer.appendChild(totalRow);
  }

  // Contenedor para las tablas
  let containerStyle = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
    <style>
      /* Cuando la pantalla es pequeña (menos de 768px), las tablas se apilan una debajo de la otra */
      @media (max-width: 768px) {
        div {
          grid-template-columns: 1fr !important;
        }
      }
    </style>
  `;

  // Muestra los totales de combos en una tabla
  let combosTable = `<div><h3>Total de Combos</h3>
  <div style="display: flex; justify-content: center;">
    <table style="width: 100%; border-collapse: collapse; font-size: 19px;">
      <thead>
        <tr>
          <th style="border: 1px solid #ddd; background-color: white; padding: 4px; width: 70%; color: black;">Combo</th>
          <th style="border: 1px solid #ddd; background-color: white; padding: 4px; width: 30%; color: black;">Cantidad</th>
        </tr>
      </thead>
      <tbody>`;
  let totalCombosCount = 0;

  for (const [combo, count] of Object.entries(totalCombos)) {
    combosTable += `
      <tr>
        <td style="border: 1px solid #ddd; padding: 4px;">${combo}</td>
        <td style="border: 1px solid #ddd; padding: 4px;">${count}</td>
      </tr>`;
    totalCombosCount += count; // Sumar al total general de combos
  }

  combosTable += `
      <tr style="font-weight: bold; color: black;">
        <td style="border: 1px solid #ddd; padding: 4px;">Total:</td>
        <td style="border: 1px solid #ddd; padding: 4px;">${totalCombosCount}</td>
      </tr>
    </tbody>
  </table>
  </div></div>`;

  // Mostrar detalles de la extracción de pachamama
  const { totalExtraido, detallesExtraidos } = calcularExtraidoPachamama();

  // Crear una tabla para mostrar los detalles de Pachamama extraída
  let pachamamaTable = `<div><h3>GANANCIAS DE MAMA</h3>
    <div style="display: flex; justify-content: center;">
      <table style="width: 100%; border-collapse: collapse; font-size: 19px;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; background-color: white; padding: 4px; color: black;">Cantidad</th>

          </tr>
        </thead>
        <tbody>`;

  detallesExtraidos.forEach(detalle => {
    pachamamaTable += `
        <tr>
          <td style="border: 1px solid #ddd; padding: 4px;">${detalle.cantidadExtraida}</td>
        </tr>`;
  });

  pachamamaTable += `
        <tr style="font-weight: bold; color:black;">
          <td style="border: 1px solid #ddd; padding: 4px;" colspan="2">Depositar a MAMA: ${totalExtraido} bs</td>
        </tr>
      </tbody>
    </table>
    </div></div>`;


  // Muestra los totales de bebidas en una tabla
  let drinksTable = `<div><h3>Total de Bebidas</h3>
    <div style="display: flex; justify-content: center;">
      <table style="width: 100%; border-collapse: collapse; font-size: 19px; border-left: 1px solid #ddd; border-right: 1px solid #ddd;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; border-top: 1px solid #ddd; background-color: white; padding: 4px; width: 70%; color: black;">Bebida</th>
            <th style="border: 1px solid #ddd; border-top: 1px solid #ddd; background-color: white; padding: 4px; width: 30%; color: black;">Cantidad</th>
          </tr>
        </thead>
        <tbody>`;

  let totalDrinksCount = 0; // Para el total general

  for (const [drink, count] of Object.entries(totalDrinks)) {
    drinksTable += `
        <tr>
          <td style="border: 1px solid #ddd; padding: 4px; border-left: none;">${drink}</td>
          <td style="border: 1px solid #ddd; padding: 4px; border-right: none;">${count}</td>
        </tr>`;
    totalDrinksCount += count; // Sumar al total general
  }

  drinksTable += `
        <tr style="font-weight: bold; color: black;">
          <td style="border: 1px solid #ddd; padding: 4px;">Total:</td>
          <td style="border: 1px solid #ddd; padding: 4px;">${totalDrinksCount}</td>
        </tr>
      </tbody>
    </table>
    </div></div>`;


  // Agregamos todas las tablas al contenedor
  totalContainer.innerHTML += containerStyle + combosTable + pachamamaTable + drinksTable + '</div>';





  let count900 = 0;
  let count980 = 0;
  let count680 = 0; // Nueva variable para contar mesas de 680 bs
  let count750 = 0; // Nueva variable para contar mesas de 750 bs
  let countOthers = 0;

  const otrosMontos = []; // Para almacenar los montos de otras mesas

  [...areas.pacha, ...areas.parrales, ...areas.lounge, ...areas.cholet, ...areas.camel, ...areas.extras, ...areas.Vip].forEach(sticker => {
    const quantity = Number(sticker.quantity);

    if (quantity === 900) {
      count900++;
    } else if (quantity === 980) {
      count980++;
    } else if (quantity === 680) { // Condición para mesas de 680 bs
      count680++;
    } else if (quantity === 750) { // Condición para mesas de 750 bs
      count750++;
    } else if (quantity) {
      countOthers++;
      otrosMontos.push(`${sticker.name}: ${quantity} bs`); // Agregar a la lista de otros montos
    }
  });


  const countContainer = document.getElementById("count-container");
  countContainer.innerHTML = `
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 980 bs:</div>
          <div class="card-value">${count980}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 900 bs:</div>
          <div class="card-value">${count900}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 680 bs:</div>
          <div class="card-value">${count680}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-title">Mesas de 750 bs:</div>
          <div class="card-value">${count750}</div>
        </div>
      </div>
      <div class="card" id="otros-montos-card">
        <div class="card-content">
          <div class="card-title">Mesas de otros montos:</div>
          <div class="card-value">${countOthers}</div>
        </div>
        <div class="otros-montos-list" style="display: none;"></div>
      </div>
    </div>
  `;

  const otrosMontosCard = document.getElementById("otros-montos-card");
  const listaContainer = otrosMontosCard.querySelector(".otros-montos-list");

  otrosMontosCard.addEventListener("click", () => {
    if (listaContainer.style.display === "none" || listaContainer.style.display === "") {
      // Asegúrate de que se muestre primero
      listaContainer.style.display = "block";
      listaContainer.innerHTML = otrosMontos.map(monto => `<div style="color: black; font-weight: bold; font-size: 18px;">${monto}</div>`).join('');

      // Calcular y aplicar la altura máxima
      const height = listaContainer.scrollHeight + "px";
      listaContainer.style.maxHeight = height;

      // Esperar a que se establezca la altura antes de aplicar la transición
      setTimeout(() => {
        listaContainer.style.maxHeight = height; // Activar la transición
      }, 0);
    } else {
      // Para ocultar la lista
      listaContainer.style.maxHeight = listaContainer.scrollHeight + "px"; // Asegurarse de que tenga la altura actual

      // Luego, ajustar max-height a 0 para la transición
      setTimeout(() => {
        listaContainer.style.maxHeight = "0"; // Aplicar la transición a cero
      }, 0);

      // Esperar la finalización de la transición antes de ocultar completamente
      setTimeout(() => {
        listaContainer.style.display = "none"; // Ocultar completamente después de la transición
      }, 900); // Debe coincidir con el tiempo de transición de CSS
    }
  });


  // Mostrar porcentajes de ocupación
  const porcentajeContainer = document.createElement("div");
  porcentajeContainer.className = "porcentaje-container"; // Clase para CSS
  porcentajeContainer.innerHTML = `
    <h3>Porcentaje de áreas Ocupadas</h3>
    <div class="porcentaje-area">
      <div class="area pacha">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.pacha.toFixed(2)}%;"></div>
        <p>Pacha: ${porcentajes.pacha.toFixed(2)}%</p>
      </div>
      <div class="area parrales">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.parrales.toFixed(2)}%;"></div>
        <p>Parrales: ${porcentajes.parrales.toFixed(2)}%</p>
      </div>
      <div class="area lounge">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.lounge.toFixed(2)}%;"></div>
        <p>lounge: ${porcentajes.lounge.toFixed(2)}%</p>
         </div>
       <div class="area cholet">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.cholet.toFixed(2)}%;"></div>
        <p>Cholet: ${porcentajes.cholet.toFixed(2)}%</p>
      </div>
      <div class="area camel">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.camel.toFixed(2)}%;"></div>
        <p>Camel: ${porcentajes.camel.toFixed(2)}%</p>
      </div>
      <div class="area extras">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.extras.toFixed(2)}%;"></div>
        <p>Extras: ${porcentajes.extras.toFixed(2)}%</p>
      </div>
      <div class="area Vip">
        <div class="porcentaje-circle" style="--porcentaje: ${porcentajes.Vip.toFixed(2)}%;"></div>
        <p>Vip:     ${porcentajes.Vip.toFixed(2)}%</p>
      </div>
    </div>
  `;

  countContainer.appendChild(porcentajeContainer);
  document.getElementById("modal").style.display = "block";
  modal.classList.add("show");
}

// Cerrar el modal al hacer clic en la X
document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");

  modal.addEventListener('animationend', () => {
    document.getElementById("modal").style.display = "none";
    modal.classList.remove("hide");
  }, { once: true });
});

// Opción 1 del menú
document.getElementById("opcion-1").addEventListener("click", () => {
  mostrarDetalles();
  sideMenu.classList.remove("open");
});

// Función para mostrar/ocultar el menú
const menuSticker = document.getElementById("top-left-sticker");
const sideMenu = document.getElementById("side-menu");

menuSticker.addEventListener("click", (event) => {
  sideMenu.classList.toggle("open");
  event.stopPropagation();
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (sideMenu.classList.contains("open") && !sideMenu.contains(event.target) && !menuSticker.contains(event.target)) {
    sideMenu.classList.remove("open");
  }
});

function mostrarGanancias() {
  // Puedes cambiar los valores de Coca-Cola, Schweppes, Mambo Botánico, Mambo Uva y Monster aquí
  const cocaColaCantidad = 15;
  const schweppesCantidad = 24;
  const mamboBotanicoCantidad = 20; 
  const mamboUvaCantidad = 10; 
  const monsterCantidad = 8; // Cantidad de Monster

  const { totalQuantity, totalGanado, resultado, detalleVentas } = calcularGanancias(areas, cocaColaCantidad, schweppesCantidad, mamboBotanicoCantidad, mamboUvaCantidad, monsterCantidad);

  const gananciasContainer = document.getElementById("ganancias-container");

  // Limpiar contenido previo del modal
  gananciasContainer.innerHTML = "";
  // URLs de los íconos personalizados para cada tarjeta
  const iconoQuantityUrl = "https://img.icons8.com/?size=100&id=63196&format=png&color=000000";
  const iconoGanadoUrl = "https://img.icons8.com/?size=100&id=13013&format=png&color=000000";
  const iconoResultadoUrl = "https://img.icons8.com/?size=100&id=AyHHKGHt204t&format=png&color=000000";

  // Crear tarjetas con íconos personalizados
  const tarjetasHtml = `
    <div class="tarjeta">
      <img src="${iconoQuantityUrl}" alt="Total Quantity Icon" class="icono-quantity">
      <h3>Total De Ingresos</h3>
      <p>${totalQuantity.toLocaleString()} Bs</p> <!-- Formato con comas -->
    </div>
    <div class="tarjeta">
      <img src="${iconoGanadoUrl}" alt="Total Ganado Icon" class="icono-ganado">
      <h3>Inversión</h3>
      <p>${totalGanado.toLocaleString()} Bs</p> <!-- Formato con comas -->
    </div>
    <div class="tarjeta">
      <img src="${iconoResultadoUrl}" alt="Ganancias Neta Icon" class="icono-resultado">
      <h3>Ganancias Neta</h3>
      <p>${resultado.toLocaleString()} Bs</p> <!-- Formato con comas -->
    </div>
  `;

  gananciasContainer.innerHTML += tarjetasHtml;


  // Estilo para dispositivos pequeños
  let style = `
    <style>
      @media (max-width: 768px) {
        .detalle-ventas table {
          font-size: 14px; /* Reducir el tamaño de la fuente */
        }
        .detalle-ventas th, .detalle-ventas td {
          padding: 6px; /* Reducir el padding */
        }
        .detalle-ventas h3 {
          font-size: 18px; /* Reducir el tamaño del título */
        }
      }
    </style>
  `;

  // Mostrar detalles de ventas
  let detalleVentasHtml = `
    <div class="detalle-ventas">
      <h3>DetalleS De Inversion</h3>
      <table class="ventas-table" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Producto</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Cantidad Usada</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Costo Invertido</th>
          </tr>
        </thead>
        <tbody>
  `;

  detalleVentas.forEach((venta) => {
    detalleVentasHtml += `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">${venta.producto}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${venta.cantidad}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${venta.ingreso} Bs</td>
      </tr>
    `;
  });

  detalleVentasHtml += `
        </tbody>
      </table>
    </div>
  `;

  // Agregar el HTML generado al contenedor
  gananciasContainer.innerHTML += detalleVentasHtml;




  // Mostrar el modal
  const modal = document.getElementById("modal-ganancias");
  modal.style.display = "block";
  modal.classList.add("show");
}


// Asociar el evento al botón "ver ganancias"
document.getElementById("ver-ganancias").addEventListener("click", () => {
  mostrarGanancias();
  sideMenu.classList.remove("open");
});

// Cerrar el modal de ganancias al hacer clic en la X
document.getElementById("close-ganancias-modal").addEventListener("click", () => {
  const gananciasModal = document.getElementById("modal-ganancias");
  gananciasModal.classList.remove("show");
  gananciasModal.classList.add("hide");

  gananciasModal.addEventListener(
    "animationend",
    () => {
      gananciasModal.style.display = "none";
      gananciasModal.classList.remove("hide");
    },
    { once: true }
  );
});
