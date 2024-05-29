import { allLatestNews } from './data/feature-card.js'; // Ensure this is correctly imported

const dataSources = {
    'all-latest-news': allLatestNews,
}

const FeatureData = (newsContents) => {
    return `
    <div class="lg:w-[100%] lg:px-[20px] grid lg:grid-cols-3 grid-cols-2">
        ${newsContents.map((content) => `
        <div class="px-3 pb-4">
          <a class="" href="#">
            <div class="">
              <img class="" src="${content.img}" alt="hehe">
            </div>
            <ul class="">
              <li><h5 class="text-red-600">Just in</h5></li>
              <li><h5>${content.name}</h5></li>
              <li><h6 class="text-slate-400">Men's Shoes</h6></li>
              <li><h6 class="text-slate-400">2 Colors</h6></li>
              <li><h6 class="">${content.price}</h6></li>
            </ul>
          </a>
        </div>
        `).join("")}
    </div>
    `
}

class DataFeature extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute('data-source');
        const dataSourceKey = dataSources[dataAtt];
        if (dataSourceKey) {
            this.innerHTML = FeatureData(dataSourceKey);
        } else {
            console.error(`Data source "${dataAtt}" not found.`);
        }
    }
}

customElements.define('feature-card', DataFeature);
