/* eslint-disable indent */
/* eslint-disable quotes */
import CONFIG from "../../globals/config";

export const headmasterHome = `
    <div class="headmaster">
        <div class="headmaster-content">
          <div>
            <h1 class="text-center headmaster-title">
              With yummie recipe from Indonesia
            </h1>
            <p class="text-center headmaster-desc">
              Traditional recipes in concoction and produced with modern equipment so
              that they are more hygienic, in Olah without MSG and preservatives, making
              it taste different than others.
            </p>
          </div>
        </div>
         <picture>
            <source media="(max-width: 600px)" srcset="/images/heros/hero-image_1-small.jpg">
            <img 
                alt="Headmaster" 
                class="lazyload"
                data-src="/images/heros/hero-image_1-large.jpg"
            />
          </picture>
      </div>
`;

export const headmasterFavorite = `
    <div class="headmaster">
        <div class="headmaster-content">
          <div>
            <h1 class="text-center headmaster-title">
              Favorites Restaurant
            </h1>
            <p class="text-center headmaster-desc">
              You can view your favorites restaurant here
            </p>
          </div>
        </div>
        <picture>
            <source media="(max-width: 600px)" srcset="/images/heros/hero-image_1-small.jpg">
            <img 
                alt="Headmaster" 
                class="lazyload"
                data-src="/images/heros/hero-image_1-large.jpg"
            />
          </picture>
      </div>
`;

export const headmasterDetail = (param) => {
  const { name, description, pictureId } = param;
  return `
    <div class="headmaster headmaster-detail">
      <div class="headmaster-content">
        <div>
          <h1 class="text-center headmaster-title">
            ${name}
          </h1>
          <p class="text-center headmaster-desc">
            ${description}
          </p>
        </div>
      </div>
      <img 
        alt="Headmaster" 
        class="lazyload"
        data-src="${CONFIG.PICTURE_URL + pictureId}"
      />
    </div>
  `;
};
