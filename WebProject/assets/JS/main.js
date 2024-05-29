class Sidebar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div
        id="mySidenav"
        class="hidden bg-white absolute z-[100] w-[80%] h-screen overflow-y-auto transform transition-transform ease-in-out duration-300 top-0 font-sans right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="relative left-3 right-0 w-[35px] top-2"
          onclick="closeNav()"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <ul class="mt-4 ml-4 flex-col gap-[24px] flex ">
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px] font-bold"
                >New & Featured</a
              >
              <button
                onclick="showDropdown(1)"
                class=""
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 size-6 mr-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9]  mt-4"
              id="feature-drop"
            >
              <li class=" pb-2"><a href="">New Arrivals </a></li>
              <li class=" pb-2"><a href="">Sale: Up to 50% Off</a></li>
              <li class=" pb-2"><a href="">Features</a></li>
              <li class=" pb-2"><a href="">Trending</a></li>
              <li class=" pb-2"><a href="">Shop Classics</a></li>
              <li class=" pb-2"><a href="">Explore</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px] font-bold"
                >Men</a
              >
              <button
                onclick="showDropdown(2)"
                class=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 size-6 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            
                
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9]  mt-4"
              id="men-drop"
            >
              <li class=" pb-2"><a href="">New Arrivals</a></li>
              <li class=" pb-2"><a href="">Best Sellers</a></li>
              <li class=" pb-2"><a href="">Sale: Up to 50% Off</a></li>
              <li class=" pb-2"><a href="">Collections</a></li>
              <li class=" pb-2"><a href="">Shoes</a></li>
              <li class=" pb-2"><a href="">Clothing</a></li>
              <li class=" pb-2"><a href="">Accessories</a></li>
              <li class=" pb-2"><a href="">Shop by Sport</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px] font-bold"
                >Women</a
              >
              <button
                onclick="showDropdown(3)"
                class=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 size-6 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9]  mt-4"
              id="women-drop"
            >
            <li class=" pb-2"><a href="">New Arrivals</a></li>
            <li class=" pb-2"><a href="">Best Sellers</a></li>
            <li class=" pb-2"><a href="">Sale: Up to 50% Off</a></li>
            <li class=" pb-2"><a href="">Collections</a></li>
            <li class=" pb-2"><a href="">Shoes</a></li>
            <li class=" pb-2"><a href="">Clothing</a></li>
            <li class=" pb-2"><a href="">Accessories</a></li>
            <li class=" pb-2"><a href="">Shop by Sport</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px] font-bold"
                >Kids</a
              >
              <button
                onclick="showDropdown(4)"
                class=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 size-6 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9]  mt-4"
              id="kids-drop"
            >
            <li class=" pb-2"><a href="">New Arrivals</a></li>
            <li class=" pb-2"><a href="">Best Sellers</a></li>
            <li class=" pb-2"><a href="">Sale: Up to 50% Off</a></li>
            <li class=" pb-2"><a href="">Shop by Age</a></li>
            <li class=" pb-2"><a href="">Collections</a></li>
            <li class=" pb-2"><a href="">Shoes</a></li>
            <li class=" pb-2"><a href="">Clothing</a></li>
            <li class=" pb-2"><a href="">Accessories</a></li>
            <li class=" pb-2"><a href="">Shop by Sport</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px] font-bold"
                >Jordan</a
              >
              <button
                onclick="showDropdown(5)"
                class=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 size-6 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9]  mt-4 "
              id="jordan-drop"
            >
            <li class=" pb-2"><a href="">New Arrivals</a></li>
            <li class=" pb-2"><a href="">Best Sellers</a></li>
            <li class=" pb-2"><a href="">Sale: Up to 50% Off</a></li>
            <li class=" pb-2"><a href="">Collections</a></li>
            <li class=" pb-2"><a href="">Shoes</a></li>
            <li class=" pb-2"><a href="">Clothing</a></li>
            <li class=" pb-2"><a href="">Accessories</a></li>
            <li class=" pb-2"><a href="">Shop by Sport</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px] font-bold"
                >Sale</a
              >
              <button
                onclick="showDropdown(6)"
                class=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 size-6 mr-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <ul
              class="max-h-[0] overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9]  mt-4 border-t"
              id="sale-drop"
            >
            <li class=" pb-2"><a href="">Sale: Up to 50% Off</a></li>
            <li class=" pb-2"><a href="">Sale Shoes</a></li>
            <li class=" pb-2"><a href="">Sale Clothing</a></li>
            <li class=" pb-2"><a href="">Sale Accessories & Equipment</a></li>
            <li class=" pb-2"><a href="">Sale Mens</a></li>
            <li class=" pb-2"><a href="">Sale Womens</a></li>
            <li class=" pb-2"><a href="">Sale Kids</a></li>
            
            </ul>
          </li>
          
        </ul>
        <div class="ml-4 pb-4 pt-3">
            <div class="flex mt-4 ml-4 items-center gap-7 ">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32"><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
                    <title>Jordan</title>
                </svg>
                <p class="text-gray-600">Jordan</p>
            </div>
            <div class="flex mt-4 ml-4 items-center gap-7">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33"><path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.598.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg>
                <p class="text-gray-600">Converse</p>
            </div>
        </div>
        <div class="ml-4  pb-4 pt-5 px-5">
            <p>Become a Nike Member for</p>
            <p>the best products,</p>
            <p>inspiration and stories in</p>
            <div class="flex">
                <p>sport.</p>
                <p class="font-bold"> Learn More</p>
            </div>
            <div class="flex pt-2">
                
                <button class="bg-black text-white text-[12.5x] rounded-full px-4 py-1 mr-3">sport.</p>
                
                <button class="bg-white border-[1.5px] border-black text-black text-[12.5x] rounded-full px-3 py-1">sport.</p>
                
            </div>
            <div class="pt-6">
                <div class="flex pt-3">
                    <svg  aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                    <p class="pl-5">Bag</p>
                </div>
                <div class="flex pt-3">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path></svg>
                    <p class="pl-5">Orders</p>
                </div>
                <div class="flex pt-3">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg>
                    <p class="pl-5">Find a Store</p>
                </div>
                <div class="flex pt-3">
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path></svg>
                    <p class="pl-5">Help</p>
                </div>
            </div>
            
            
            
            
        </div>
    
      </div>

        `
    }
}

customElements.define('my-sidebar', Sidebar)