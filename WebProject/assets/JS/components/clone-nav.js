// clone-nav.js

// Define the custom element
class CloneNav extends HTMLElement {
  constructor() {
    super();
    // Insert the HTML content of the nav element
    this.innerHTML = `
    <nav class="bg-[#f5f5f5] px-[50px] ">
    <div class="max-w-[1800px] mx-auto ">
      <div class=" flex justify-between items-center">
        <div>
          <a href="../public/index.html"><img src="../assets/Images/nikeLOGO.png" alt="" class="w-[60px] "></a>
        </div>
        
        <ul class="md:flex gap-11 hidden">
          <li>
            <div class="group h-[80px] pt-7 hidden lg:block"id=" hoverLink"onmouseenter="navDrop(1)" onmouseleave="navHides(-1)">
              <a href="../public/new-feature.html" class="group-hover:text-blue-500 relative"
                >New & Featured</a>
              <section class="w-full bg-white p-[30px] absolute top-[110px] hidden z-[10000] left-0" id="new-feature">
                <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col top-0">
                    <li>Mother's Day Shop</li>
                    <li>Extra 25% Off Select Styles</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>New & Featured</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>New & Upcoming Drops</li>
                    <li>Add to Bag to See Price</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Trending</li>
                    <li>Lifestyle Running</li>
                    <li>The Color Shop</li>
                    <li>Shop Sport</li>
                    <li>Jordan Family Days</li>
                    <li>ACG</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shop Classics</li>
                    <li>Dunk</li>
                    <li>Air Jordan 1</li>
                    <li>Air Force</li>
                    <li>Air Max</li>
                    <li>Blazer</li>
                    <li>Vomero</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Explore</li>
                    <li>SNKRS Launch Calendar</li>
                    <li>Running Shoe Finder</li>
                    <li>Bra Finder</li>
                    <li>Product Care</li>
                    <li>Member Rewards</li>
                    <li>Member Rewards</li>
                  </ul>
                </div>
              </section>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(2)" onmouseleave="navHides(-2)">
              <a href="#" class="group-hover:text-blue-500 relative">Men</a>
              <!-- Badminton section -->
              <section class="w-full bg-white p-[40px] absolute top-[100px] hidden z-[10000] left-0" id="men">
                <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col" >
                    <li>Mother's Day Shop</li>
                    <li>Extra 25% Off Select Styles</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>New & Featured</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Add to Bag to See Price</li>
                    <li>All Sale</li>
                    <li>ACG Essentials</li>
                    <li>Time for Tennis</li>
                    <li>Jordan Family Days</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shoes</li>
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Dunk</li>
                    <li>Lifestyle Running</li>
                    <li>Air Max</li>
                    <li>Air Force 1</li>
                    <li>Training & Gym</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Nike SB</li>
                    <li>Sandals & Slides</li>
                    <li>Nike by You</li>
                    <li>Shoes $100 & Under</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Clothing</li>
                    <li>All Clothing</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Pants & Tights</li>
                    <li>Jackets & Vests</li>
                    <li>Tops & T-Shirts</li>
                    <li>Shorts</li>
                    <li>Matching Sets</li>
                    <li>Big & Tall</li>
                    <li>Jordan</li>
                    <li>Accessories</li>
                    <li>All Accessories</li>
                    <li>Bags & Backpacks</li>
                    <li>Hats & Headwear</li>
                    <li>Socks</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shop by Sport</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Golf</li>
                    <li>Soccer</li>
                    <li>Baseball</li>
                    <li>Football</li>
                    <li>Softball</li>
                    <li>Tennis</li>
                    <li>Dance</li>
                    <li>Swimming</li>
                    <li>Skateboarding</li>
                    <li>Fan Gear</li>
                    <li>Accessories</li>
                    <li>All Accessories</li>
                    <li>Bags & Backpacks</li>
                    <li>Hats & Headwear</li>
                    <li>Socks</li>
                  </ul>
                </div>
              </section>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(3)" onmouseleave="navHides(-3)">
              <a href="../public/women.html" class="group-hover:text-blue-500 relative">Women</a>
              <!-- Badminton section -->
              <section class="w-full bg-white p-[40px] absolute top-[100px] hidden z-[10000] left-0" id="women">
                <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Mother's Day Shop</li>
                    <li>Extra 25% Off Select Styles</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>New & Featured</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Add to Bag to See Price</li>
                    <li>All Sale</li>
                    <li>Collections</li>
                    <li>The Color Shop</li>
                    <li>Zenvy Collection</li>
                    <li>Loungewear</li>
                    <li>Jordan Family Days</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shoes</li>
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Dunk</li>
                    <li>Lifestyle Running</li>
                    <li>Air Max</li>
                    <li>Air Force 1</li>
                    <li>Training & Gym</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Nike SB</li>
                    <li>Sandals & Slides</li>
                    <li>Nike by You</li>
                    <li>Shoes $100 & Under</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Clothing</li>
                    <li>All Clothing</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Pants</li>
                    <li>Leggings</li>
                    <li>Jackets & Vests</li>
                    <li>Tops & T-Shirts</li>
                    <li>Shorts</li>
                    <li>Skirts & Dresses</li>
                    <li>Bras</li>
                    <li>Matching Sets</li>
                    <li>Plus Size</li>
                    <li>Jordan</li>
                    <li>Accessories</li>
                    <li>All Accessories</li>
                    <li>Bags & Backpacks</li>
                    <li>Hats & Headwear</li>
                    <li>Socks</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shop by Sport</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Golf</li>
                    <li>Soccer</li>
                    <li>Baseball</li>
                    <li>Football</li>
                    <li>Softball</li>
                    <li>Tennis</li>
                    <li>Dance</li>
                    <li>Swimming</li>
                    <li>Skateboarding</li>
                    <li>Fan Gear</li>
                    <li>Accessories</li>
                    <li>All Accessories</li>
                    <li>Bags & Backpacks</li>
                    <li>Hats & Headwear</li>
                    <li>Socks</li>
                  </ul>
                </div>
              </section>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(4)" onmouseleave="navHides(-4)">
              <a href="#" class="group-hover:text-blue-500 relative">Kids</a>
              <!-- Badminton section -->
              <section class="w-full bg-white p-[40px] absolute top-[100px] hidden z-[10000] left-0" id="kids">
                <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Mother's Day Shop</li>
                    <li>Extra 25% Off Select Styles</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>New & Featured</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Add to Bag to See Price</li>
                    <li>All Sale</li>
                    <li>Collections</li>
                    <li>EasyOn</li>
                    <li>Teen Essentials</li>
                    <li>New in Basketball</li>
                    <li>Skate X Lifestyle</li>
                    <li>Jordan Family Days</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shoes by Size</li>
                    <li>Big Kids (1Y - 7Y)</li>
                    <li>Little Kids (8C - 3Y)</li>
                    <li>Baby & Toddler (1C - 10C)</li>
                    <li>All Shoes</li>
                    <li>Lifestyle</li>
                    <li>Jordan</li>
                    <li>Dunk</li>
                    <li>Air Max</li>
                    <li>Air Force 1</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Sandals & Slides</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Clothing By Size</li>
                    <li>Big Kids (XS - XL)</li>
                    <li>Little Kids (4 - 7)</li>
                    <li>Baby & Toddler (0M - 4T)</li>
                    <li>Extended Sizing</li>
                    <li>All Clothing</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Pants & Tights</li>
                    <li>Jackets & Vests</li>
                    <li>Tops & T-Shirts</li>
                    <li>Shorts</li>
                    <li>Skirts & Dresses</li>
                    <li>Bras</li>
                    <li>Matching Sets</li>
                    <li>Jordan</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Shop by Sport</li>
                    <li>Basketball</li>
                    <li>Running</li>
                    <li>Golf</li>
                    <li>Soccer</li>
                    <li>Baseball</li>
                    <li>Football</li>
                    <li>Softball</li>
                    <li>Tennis</li>
                    <li>Dance</li>
                    <li>Swimming</li>
                    <li>Skateboarding</li>
                    <li>Fan Gear</li>
                    <li>Accessories</li>
                    <li>All Accessories</li>
                    <li>Bags & Backpacks</li>
                    <li>Hats & Headwear</li>
                    <li>Socks</li>
                  </ul>
                </div>
              </section>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(5)" onmouseleave="navHides(-5)">
              <a href="#" class="group-hover:text-blue-500 relative">Sale</a>
              <!-- Badminton section -->
              <section class="w-full bg-white p-[40px] absolute top-[100px] hidden z-[10000] left-0" id="sales">
                <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Mother's Day Shop</li>
                    <li>Extra 25% off Select Styles</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>All Sale</li>
                    <li>Sale Shoes</li>
                    <li>Sale Clothing</li>
                    <li>Sale Accessories</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Men</li>
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Shop All</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Women</li>
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Shop All</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Kids</li>
                    <li>Shoes</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Shop All</li>
                  </ul>
                </div>
              </section>
            </div>
          </li>
          <li>
            <div class="group h-[80px] pt-7" id="hoverLink" onmouseenter="navDrop(6)" onmouseleave="navHides(-6)">
              <a href="#" class="group-hover:text-blue-500 relative">Jordan</a>
              <section class="w-full bg-white p-[40px] absolute top-[100px] hidden z-[10000] left-0" id="jordan">
                <div id="HoverBox" class="max-w-[1200px] mx-auto flex">
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Jordan Family Days</li>
                    <li>Shop the Collections</li>
                    <li>Accessories</li>
                    <li>Shop All</li>
                    <li>Bags & Backpacks</li>
                    <li>Hats & Headwear</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>New & Featured</li>
                    <li>New Arrivals</li>
                    <li>Best Seller</li>
                    <li>Collections</li>
                    <li>Heat Check</li>
                    <li>Trending Colors</li>
                    <li>Golf Essentials</li>
                    <li>Girls Lemonade Stand</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Men</li>
                    <li>Shop All</li>
                    <li>Shoes</li>
                    <li>AJ1</li>
                    <li>Clothing</li>
                    <li>Basketball</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Women</li>
                    <li>Shop All</li>
                    <li>Shoes</li>
                    <li>AJ1</li>
                    <li>Clothing</li>
                    <li>Basketball</li>
                  </ul>
                  <ul class="max-w-[1600px] mx-auto flex mb-4 justify-center flex-col">
                    <li>Kids</li>
                    <li>Shop All</li>
                    <li>Shoes</li>
                    <li>AJ1</li>
                    <li>Clothing</li>
                    <li>Basketball</li>
                    <li>Big Kids</li>
                    <li>Little Kids</li>
                    <li>Baby & Toddler</li>
                  </ul>
                </div>
              </section>
            </div>
          </li>
        </ul>
        <div class="flex items-center gap-4">
          <div class="relative">
            <svg class=" absolute top-[5px]" aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
            <input type="text" placeholder="Search" class="pl-[28px] w-full border rounded-2xl py-[5px]" >
          </div>
          <div class="flex gap-4">
            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
          </div>
          <!--*SECTION - Sidebar  -->
          <div class="block cursor-pointer md:hidden ml-3" onclick="openNav()">
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
          </div>
          

            <!--*!SECTION - Sidebar  -->
        </div>
      </div>
    </div>

    <div>
      
    </div>
  </nav>
    `;

    // Include external JavaScript files
    this.includeExternalScripts();
  }

  includeExternalScripts() {
    // Array of script URLs
    const scriptUrls = [
      '../assets/JS/index.js',
      '../assets/JS/main.js'
    ];

    // Iterate over each script URL and create script elements
    scriptUrls.forEach(url => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      // Append the script element to the document's head
      document.head.appendChild(scriptElement);
    });
  }
}

// Define the custom element <clone-nav>
customElements.define('clone-nav', CloneNav);
