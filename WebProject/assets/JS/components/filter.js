class CustomNav1 extends HTMLElement {
  constructor() {
    super();

    // Define the template
    this.innerHTML = `
    <ul class=" min-md:overflow-y-auto px-[10px] flex flex-col gap-3 pb-10">
                        <div class="  pb-3 flex justify-between">
                            <h3>Pick Up Today</h3>
                            <label class="inline-flex items-center mb-5 cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer">
                              <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                              peer-focus:ring-blue-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 
                              peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 
                              after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 
                              peer-checked:bg-gray-400">
                              </div>
                            </label>
                            
                        </div>
                        <hr class="border-1/0.25 border-gray-400">
                        <li class="pb-1"><a href="#">Shoes</a></li>
                        <li class="pb-1"><a href="#">Tops & T-Shirts</a></li>
                        <li class="pb-1"><a href="#">Shorts</a></li>
                        <li class="pb-1"><a href="#">Hoodies & Pullovers</a></li>
                        <li class="pb-1"><a href="#">Jackets & Vests</a></li>
                        <li class="pb-1"><a href="#">Pants & Tighs</a></li>
                        <li class="pb-1"><a href="#">Swimming</a></li>
                        <li class="pb-1"><a href="#">Accessories & Equipment</a></li>
                        
                    </ul>
                    
                    <ul class=" min-md:overflow-y-auto px-[20px] flex flex-col gap-3m">

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span class="pb-2">
                                gender
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500 ease-in-out" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Men</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Women</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Unisex</p>
                          </div>

                        </div>

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span>
                                Kids
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500 ease-in-out" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Girls</p>
                          </div>
                        </div>

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span>
                                Sale & Offers
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500 ease-in-out" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Price in Bag</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Sale</p>
                          </div>
                        </div>


                        <hr class="border-1/0.25 border-gray-400 py-1" ">
                        <button class="text-start flex justify-between pb-2" id="accordion-btn">
                            <span>
                                Color
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="pt-1 max-h-[0px] overflow-hidden duration-500 ease-in-out flex justify-between text-[11px]" id="accordion-dropdown">
                            <div class="">
                              <div class="flex flex-col items-center">
                                <div class="bg-black box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Black</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-green-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Green</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-orange-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Orange</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-red-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Red</p>
                              </div>
                            </div>
                            <div class="">
                              <div class="flex flex-col items-center">
                                <div class="bg-blue-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Blue</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-gray-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Gray</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-pink-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Pink</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-white box-border border-[1px] h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>White</p>
                              </div>
                            </div>
                            <div class="">
                              <div class="flex flex-col items-center">
                                <div class="bg-[#964b00] box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Brown</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Multi-Color</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-purple-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Purple</p>
                              </div>
                              <div class="flex flex-col items-center">
                                <div class="bg-yellow-500 box-border h-[2px] w-[2px] p-[13px] rounded-3xl"></div>
                                <p>Yellow</p>
                              </div>
                            </div>
                            
                        </div>

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span>
                                Shop by Price
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>  
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500 ease-in-out" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">$0 - $25</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">$25 - $50</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">$50 - $100</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">$100 - $500</p>
                          </div>
                          <button>+ More</button>
                        </div>

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span>
                                Brand
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Nike Sportswear</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Jordan</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Nike By You</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Converse</p>
                          </div>
                          <button>+ More</button>
                        </div>

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span>
                                Shop & Activities
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500 ease-in-out" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Life</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Running</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Training & Gym</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Basketball</p>
                          </div>
                          <button>+ More</button>
                        </div>

                        <hr class="border-1/0.25 border-gray-400 py-1">
                        <button class="text-start flex justify-between" id="accordion-btn">
                            <span>
                                Best For
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div class="max-h-[0px] overflow-hidden duration-500 ease-in-out" id="accordion-dropdown">
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Wet Weather Conditions</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Cold Weather Conditions</p>
                          </div>
                          <div class="flex items-center mb-1">
                            <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <p class="px-3">Dry Weather Conditions</p>
                          </div>
                        </div>
                    </ul>
    `;
  }
}

// Define the custom element
customElements.define('filter-clone', CustomNav1);
