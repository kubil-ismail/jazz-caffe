export const categoriesTemplate = (param) => {
  const { name } = param;
  return `
        <div class="grid-item" tabindex="0" aria-label="${name}">
            <div class="category-card">
                <h2>${name}</h2>
            </div>
        </div>
    `;
};

export const foodTemplate = (param) => {
  const { name } = param;
  return `
        <div class="grid-item" tabindex="0" aria-label="${name}">
            <div class="food-card">
                <h2>${name}</h2>
            </div>
        </div>
    `;
};

export const drinkTemplate = (param) => {
  const { name } = param;
  return `
        <div class="grid-item" tabindex="0" aria-label="${name}">
            <div class="drink-card">
                <h2>${name}</h2>
            </div>
        </div>
    `;
};

export const reviewTemplate = (param) => {
  const { name, review, date } = param;
  return `
        <div class="grid-item" tabindex="0" aria-label="${name}">
            <div class="reviews-card">
                <h2>${name}</h2>
                <p>${review}</p>
                <small>${date}</small>
            </div>
        </div>
    `;
};
