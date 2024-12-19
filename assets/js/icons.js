
    // Empty star Icon  
    const emptyStarSvg = `<svg width="16" height="16" viewBox="0 0 11 8.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.20672 7.94042L7.5711 9.43817C7.87335 9.62942 8.24835 9.34479 8.15872 8.99192L7.47585 6.30504C7.45656 6.2302 7.45878 6.15143 7.48227 6.0778C7.50575 6.00416 7.54954 5.93865 7.6086 5.88879L9.72885 4.12442C10.0071 3.89267 9.86385 3.43029 9.50572 3.40704L6.7371 3.22704C6.66255 3.22175 6.59105 3.1954 6.5309 3.15106C6.47075 3.10671 6.42444 3.04619 6.39735 2.97654L5.3646 0.376293C5.33648 0.302395 5.28656 0.23879 5.22146 0.193911C5.15636 0.149033 5.07916 0.125 5.0001 0.125C4.92103 0.125 4.84383 0.149033 4.77873 0.193911C4.71364 0.23879 4.66372 0.302395 4.6356 0.376293L3.60285 2.97654C3.57581 3.04626 3.52952 3.10686 3.46937 3.15127C3.40922 3.19569 3.33768 3.2221 3.2631 3.22742L0.494473 3.40742C0.136723 3.43029 -0.00727701 3.89267 0.271348 4.12442L2.3916 5.88917C2.45059 5.93899 2.49434 6.00444 2.51782 6.078C2.5413 6.15156 2.54356 6.23025 2.52435 6.30504L1.89135 8.79692C1.78372 9.22029 2.2341 9.56192 2.59635 9.33204L4.79385 7.94042C4.85561 7.90115 4.92728 7.8803 5.00047 7.8803C5.07366 7.8803 5.14533 7.90115 5.2071 7.94042H5.20672Z" fill="#CCCCCC"/></svg>`;
    document.querySelectorAll('.empty_star').forEach(span => {
      span.innerHTML = emptyStarSvg;
    });
  
    // Filled star Icon
    const filledStarSvg = `<svg width="16" height="16" viewBox="0 0 10.5 10.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.20672 8.94042L8.5711 10.4382C8.87335 10.6294 9.24835 10.3448 9.15872 9.99192L8.47585 7.30504C8.45656 7.2302 8.45878 7.15143 8.48227 7.0778C8.50575 7.00416 8.54954 6.93865 8.6086 6.88879L10.7288 5.12442C11.0071 4.89267 10.8638 4.43029 10.5057 4.40704L7.7371 4.22704C7.66255 4.22175 7.59105 4.1954 7.5309 4.15106C7.47075 4.10671 7.42444 4.04619 7.39735 3.97654L6.3646 1.37629C6.33648 1.30239 6.28656 1.23879 6.22146 1.19391C6.15636 1.14903 6.07916 1.125 6.0001 1.125C5.92103 1.125 5.84383 1.14903 5.77873 1.19391C5.71364 1.23879 5.66372 1.30239 5.6356 1.37629L4.60285 3.97654C4.57581 4.04626 4.52952 4.10686 4.46937 4.15127C4.40922 4.19569 4.33768 4.2221 4.2631 4.22742L1.49447 4.40742C1.13672 4.43029 0.992723 4.89267 1.27135 5.12442L3.3916 6.88917C3.45059 6.93899 3.49434 7.00444 3.51782 7.078C3.5413 7.15156 3.54356 7.23025 3.52435 7.30504L2.89135 9.79692C2.78372 10.2203 3.2341 10.5619 3.59635 10.332L5.79385 8.94042C5.85561 8.90115 5.92728 8.8803 6.00047 8.8803C6.07366 8.8803 6.14533 8.90115 6.2071 8.94042H6.20672Z" fill="#1D2AA3"/></svg>`;
    document.querySelectorAll('.filled_star').forEach(span => {
      span.innerHTML = filledStarSvg;
    });

    //Header heart Icon
    const heartSvgIcon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="28"  viewBox="0 0 24 21"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`;
    document.querySelectorAll('.heart-icon').forEach(span => {
      span.innerHTML = heartSvgIcon;
    })

     // Empty Heart Icon
     const emptyheartSvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="28"  viewBox="0 0 24 21"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>`;
     document.querySelectorAll('.empty_heart').forEach(span => {
      span.innerHTML = emptyheartSvg;
      let currentState = 0;
    
      span.addEventListener('click', () => {
        
        if (currentState === 0) {
          span.innerHTML = filledheartSvg;
          currentState = 1;
        } else {
          span.innerHTML = emptyheartSvg;
          currentState = 0;
        }
      });
    });
    
  
    // Filled Heart Icon
    const filledheartSvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="28"  viewBox="0 0 24 21"  fill="#1D2AA3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>`;
    document.querySelectorAll('.filled_heart').forEach(span => {
      span.innerHTML = filledheartSvg;
    });
  
    // Cart Bag Icon
    const cartBagSvg = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.66667 8.69388H4.16667L2.5 18.1969H17.5L15.8333 8.69388H13.3333M6.66667 8.69388V5.97982C6.66667 4.13887 8.15905 2.64648 10 2.64648V2.64648C11.8409 2.64648 13.3333 4.13887 13.3333 5.97982V8.69388M6.66667 8.69388H13.3333M6.66667 8.69388V11.2856M13.3333 8.69388V11.2856" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    document.querySelectorAll('.cart_bag').forEach(span => {
      span.innerHTML = cartBagSvg;
    });

    //Bulk Cart Icon
    const bulkCartIcon =`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.9125 17.9258C12.4125 17.9258 11.2125 19.1258 11.2125 20.6258C11.2125 22.1258 12.4125 23.3258 13.9125 23.3258C15.4125 23.3258 16.6125 22.1258 16.6125 20.6258C16.6125 19.1633 15.375 17.9258 13.9125 17.9258ZM13.9125 21.6758C13.35 21.6758 12.9 21.2258 12.9 20.6633C12.9 20.1008 13.35 19.6508 13.9125 19.6508C14.475 19.6508 14.925 20.1008 14.925 20.6633C14.925 21.1883 14.4375 21.6758 13.9125 21.6758ZM6.78754 17.9258C5.28754 17.9258 4.08754 19.1258 4.08754 20.6258C4.08754 22.1258 5.28754 23.3258 6.78754 23.3258C8.28754 23.3258 9.48754 22.1258 9.48754 20.6258C9.48754 19.1633 8.25004 17.9258 6.78754 17.9258ZM6.78754 21.6758C6.22504 21.6758 5.77504 21.2258 5.77504 20.6633C5.77504 20.1008 6.22504 19.6508 6.78754 19.6508C7.35004 19.6508 7.80004 20.1008 7.80004 20.6633C7.80004 21.1883 7.35004 21.6758 6.78754 21.6758ZM21.825 0.675781H19.8C18.9 0.675781 18.1125 1.35078 18 2.25078L17.4 6.56328H15.825V3.82578C15.7875 3.15078 15.2625 2.62578 14.625 2.62578H11.85C11.7375 2.06328 11.25 1.65078 10.6875 1.65078H7.42504C6.78754 1.65078 6.22504 2.21328 6.22504 2.92578V3.63828H3.48754C2.85004 3.63828 2.28754 4.16328 2.28754 4.76328V6.60078C1.98754 6.67578 1.76254 6.82578 1.57504 7.05078C1.35004 7.35078 1.23754 7.76328 1.35004 8.13828V8.21328L3.67504 15.2258C3.82504 15.7508 4.31254 16.1258 4.87504 16.1258H15.225C16.6125 16.1258 17.8125 15.0758 18 13.6883L19.575 2.47578C19.575 2.40078 19.65 2.36328 19.725 2.36328H21.75C22.2 2.36328 22.6125 1.98828 22.6125 1.50078C22.6125 1.01328 22.275 0.675781 21.825 0.675781ZM14.1 6.56328H11.85V4.31328H14.1V6.56328ZM7.95004 3.33828H10.2V6.56328H7.95004V3.33828ZM4.01254 5.28828H6.26254V6.56328H4.01254V5.28828ZM16.3875 13.4258C16.3125 13.9883 15.825 14.4008 15.2625 14.4008H5.21254L3.18754 8.25078H17.1375L16.3875 13.4258Z"/></svg>`;
    document.querySelectorAll('.bulk-cart-icon').forEach(span => {
      span.innerHTML = bulkCartIcon;
    });

     // Search Icon
     const searchIcon = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /> <path d="M21 21l-6 -6" /></svg>`;
     document.querySelectorAll('.searchIcon').forEach(span => {
      span.innerHTML = searchIcon;
    });

    // Cevron Up Icon
    const cevronUpsvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>`;  
    document.querySelectorAll('.cevron-up').forEach(span => {
      span.innerHTML = cevronUpsvg;
    });

    // Cevron Down Icon
    const cevronDownsvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>`;
    document.querySelectorAll('.cevron-down').forEach(span => {
      span.innerHTML = cevronDownsvg;
    });

    // Cevron Right Icon
    const cevronRightsvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>`;
    document.querySelectorAll('.cevron-right').forEach(span => {
      span.innerHTML = cevronRightsvg;
    });

    // Cevron Left Icon
    const cevronLeftsvg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>`;
    document.querySelectorAll('.cevron-left').forEach(span => {
      span.innerHTML = cevronLeftsvg;
    });
    
    //caret-down Arrow icon
    const caretdownIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 20" fill="currentColor"class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>`;
    document.querySelectorAll('.caret-down').forEach(span => {
      span.innerHTML = caretdownIcon;
    });

    //caret-up Arrow icon
    const caretupIcon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>`;
    document.querySelectorAll('.caret-up').forEach(span => {
      span.innerHTML = caretupIcon;
    });

    // Single Tick Icon
    const singleTickIcon = `<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41536 1.125L3.6862 6.85417L1.08203 4.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;  
    document.querySelectorAll('.single-tick').forEach(span => {
      span.innerHTML = singleTickIcon;
    });

    // Cross Close Icon
    const crossCloseIcon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`;
    document.querySelectorAll('.cross-close').forEach(span => {
    span.innerHTML = crossCloseIcon;
    });
  
    // Cross Bin Icon
    const binIcon = `<svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 16C14 16.7956 13.6839 17.5587 13.1213 18.1213C12.5587 18.6839 11.7956 19 11 19H4C3.20435 19 2.44129 18.6839 1.87868 18.1213C1.31607 17.5587 1 16.7956 1 16V4H0V1H4.5L5.5 0H9.5L10.5 1H15V4H14V16ZM2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H2ZM14 3V2H10L9 1H6L5 2H1V3H14ZM4 6H5V16H4V6ZM10 6H11V16H10V6Z" fill="currentColor"/></svg>`;
    document.querySelectorAll('.bin-icon').forEach(span => {
    span.innerHTML = binIcon;
    });

    //Dashboard Icons
    const dashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M18 18H10V12H18V18ZM8 18H0V8H8V18ZM18 10H10V0H18V10ZM8 6H0V0H8V6Z" fill="currentColor"/>
    </svg>`;
   
    document.querySelectorAll('.dash-icon').forEach(span => {
    span.innerHTML = dashIcon;
    });


    const bulkIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 22.5H18V24H4.5V21H1.5V0H11.5664L16.2773 4.71094L21 9.43359V10.5H13.5V4.5H6V22.5ZM15 9H18.4336L15 5.56641V9ZM4.5 19.5V3H12.4336L10.9336 1.5H3V19.5H4.5ZM20.25 14.6953L23.9648 18.4102L22.9102 19.4648L21 17.5664V24H19.5V17.5664L17.5898 19.4648L16.5352 18.4102L20.25 14.6953ZM24 12V13.5H16.5V12H24Z" fill="currentColor"/>
    </svg>`;
   
    document.querySelectorAll('.bulk-icon').forEach(span => {
    span.innerHTML = bulkIcon;
    });


    const invoiceIcon = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 5H5M11 9H5M11 13H7M1 1H15V19L13.968 18.116C13.6055 17.8053 13.1439 17.6346 12.6665 17.6346C12.1891 17.6346 11.7275 17.8053 11.365 18.116L10.333 19L9.302 18.116C8.93946 17.8051 8.47761 17.6342 8 17.6342C7.52239 17.6342 7.06054 17.8051 6.698 18.116L5.667 19L4.635 18.116C4.27253 17.8053 3.81088 17.6346 3.3335 17.6346C2.85611 17.6346 2.39447 17.8053 2.032 18.116L1 19V1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
   
    document.querySelectorAll('.invoice-icon').forEach(span => {
    span.innerHTML = invoiceIcon;
    });


    const userIcon =`<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>`;
    document.querySelectorAll('.user-icon').forEach(span => {
      span.innerHTML = userIcon;
      });

    const subuserIcon = `<svg width="19" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14.252V16.342C13.0949 16.022 12.1263 15.9239 11.1754 16.0558C10.2245 16.1877 9.3192 16.5459 8.53543 17.1002C7.75166 17.6545 7.11234 18.3888 6.67116 19.2414C6.22998 20.094 5.99982 21.04 6 22H4C3.99954 20.7788 4.27866 19.5737 4.81597 18.4771C5.35328 17.3804 6.13452 16.4214 7.09982 15.6733C8.06512 14.9253 9.18886 14.4082 10.3849 14.1617C11.581 13.9152 12.8176 13.9467 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z" fill="currentColor"/>
    </svg>`;
   
    document.querySelectorAll('.subuser-icon').forEach(span => {
    span.innerHTML = subuserIcon;
    });
    

    const quotationIcon = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 5H5M11 9H5M11 13H7M1 1H15V19L13.968 18.116C13.6055 17.8053 13.1439 17.6346 12.6665 17.6346C12.1891 17.6346 11.7275 17.8053 11.365 18.116L10.333 19L9.302 18.116C8.93946 17.8051 8.47761 17.6342 8 17.6342C7.52239 17.6342 7.06054 17.8051 6.698 18.116L5.667 19L4.635 18.116C4.27253 17.8053 3.81088 17.6346 3.3335 17.6346C2.85611 17.6346 2.39447 17.8053 2.032 18.116L1 19V1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
   
    document.querySelectorAll('.quotation-icon').forEach(span => {
    span.innerHTML = quotationIcon;
    });


    const refreshIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16V9.00004H7L3.783 12.22C4.33247 12.7819 4.98837 13.2287 5.71241 13.5343C6.43644 13.8399 7.21411 13.9983 8 14C9.23925 13.9982 10.4475 13.6127 11.4589 12.8965C12.4702 12.1802 13.2349 11.1684 13.648 10H13.666C13.78 9.67504 13.867 9.34004 13.925 9.00004H15.937C15.6934 10.9333 14.7527 12.7111 13.2913 14C11.83 15.2888 9.9485 16 8 16H7.99C6.93982 16.0032 5.89944 15.798 4.9291 15.3963C3.95876 14.9946 3.07772 14.4045 2.337 13.66L0 16ZM2.074 7.00004H0.0619998C0.305476 5.06751 1.24564 3.29019 2.70616 2.00145C4.16667 0.712703 6.04719 0.00107558 7.995 3.98088e-05H8C9.05036 -0.00328613 10.0909 0.201826 11.0615 0.603496C12.032 1.00517 12.9132 1.59541 13.654 2.34004L16 3.98088e-05V7.00004H9L12.222 3.78004C11.672 3.21752 11.0153 2.77035 10.2903 2.46471C9.56537 2.15907 8.78674 2.0011 8 2.00004C6.76074 2.00187 5.55246 2.38738 4.54114 3.10361C3.52982 3.81985 2.76508 4.83166 2.352 6.00004H2.334C2.219 6.32504 2.132 6.66004 2.075 7.00004H2.074Z" fill="currentColor"/></svg>`;
    document.querySelectorAll('.refresh-icon').forEach(span => {
    span.innerHTML = refreshIcon;
    });

    const settingIcon = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8194 20H8.1794C7.95133 20 7.7301 19.9221 7.5524 19.7792C7.3747 19.6362 7.2512 19.4368 7.2024 19.214L6.7954 17.33C6.25245 17.0921 5.73763 16.7946 5.2604 16.443L3.4234 17.028C3.20596 17.0973 2.97135 17.0902 2.75852 17.0078C2.54569 16.9254 2.36745 16.7727 2.2534 16.575L0.429396 13.424C0.316541 13.2261 0.274179 12.9958 0.309238 12.7708C0.344298 12.5457 0.454705 12.3392 0.622396 12.185L2.0474 10.885C1.98259 10.2961 1.98259 9.70189 2.0474 9.113L0.622396 7.816C0.454467 7.66177 0.343911 7.45507 0.308845 7.22978C0.273779 7.00449 0.316285 6.77397 0.429396 6.576L2.2494 3.423C2.36345 3.22532 2.54169 3.07259 2.75452 2.99019C2.96735 2.90778 3.20196 2.90066 3.4194 2.97L5.2564 3.555C5.5004 3.375 5.7544 3.207 6.0174 3.055C6.2694 2.913 6.5294 2.784 6.7954 2.669L7.2034 0.787C7.25197 0.564198 7.37523 0.364688 7.55274 0.221549C7.73026 0.0784098 7.95136 0.000239966 8.1794 0H11.8194C12.0474 0.000239966 12.2685 0.0784098 12.446 0.221549C12.6236 0.364688 12.7468 0.564198 12.7954 0.787L13.2074 2.67C13.75 2.9079 14.2645 3.20539 14.7414 3.557L16.5794 2.972C16.7967 2.90292 17.0311 2.91017 17.2437 2.99256C17.4563 3.07495 17.6344 3.22753 17.7484 3.425L19.5684 6.578C19.8014 6.985 19.7204 7.5 19.3754 7.817L17.9504 9.117C18.0152 9.70589 18.0152 10.3001 17.9504 10.889L19.3754 12.189C19.7204 12.507 19.8004 13.021 19.5684 13.428L17.7484 16.581C17.6344 16.7785 17.4563 16.931 17.2437 17.0134C17.0311 17.0958 16.7967 17.1031 16.5794 17.034L14.7414 16.449C14.2646 16.8004 13.7501 17.0976 13.2074 17.335L12.7954 19.214C12.7466 19.4366 12.6233 19.6359 12.4458 19.7788C12.2683 19.9218 12.0473 19.9998 11.8194 20ZM5.6194 14.229L6.4394 14.829C6.6244 14.965 6.8174 15.09 7.0164 15.204C7.2044 15.313 7.3974 15.411 7.5954 15.5L8.5284 15.909L8.9854 18H11.0154L11.4724 15.908L12.4054 15.499C12.8124 15.319 13.1994 15.096 13.5584 14.833L14.3794 14.233L16.4204 14.883L17.4354 13.125L15.8524 11.682L15.9644 10.67C16.0144 10.227 16.0144 9.78 15.9644 9.338L15.8524 8.326L17.4364 6.88L16.4204 5.121L14.3794 5.771L13.5584 5.171C13.1992 4.90669 12.8126 4.68173 12.4054 4.5L11.4724 4.091L11.0154 2H8.9854L8.5264 4.092L7.5954 4.5C7.18758 4.67861 6.80087 4.90198 6.4424 5.166L5.6214 5.766L3.5814 5.116L2.5644 6.88L4.1474 8.321L4.0354 9.334C3.9854 9.777 3.9854 10.224 4.0354 10.666L4.1474 11.678L2.5644 13.121L3.5794 14.879L5.6194 14.229ZM9.9954 14C8.93453 14 7.91711 13.5786 7.16697 12.8284C6.41682 12.0783 5.9954 11.0609 5.9954 10C5.9954 8.93913 6.41682 7.92172 7.16697 7.17157C7.91711 6.42143 8.93453 6 9.9954 6C11.0563 6 12.0737 6.42143 12.8238 7.17157C13.574 7.92172 13.9954 8.93913 13.9954 10C13.9954 11.0609 13.574 12.0783 12.8238 12.8284C12.0737 13.5786 11.0563 14 9.9954 14ZM9.9954 8C9.60375 8.0004 9.22085 8.11577 8.89418 8.33181C8.56751 8.54785 8.31146 8.85505 8.1578 9.21528C8.00413 9.57552 7.95962 9.97295 8.02977 10.3583C8.09993 10.7436 8.28166 11.0998 8.55244 11.3828C8.82321 11.6657 9.17111 11.863 9.55296 11.95C9.9348 12.037 10.3338 12.01 10.7005 11.8724C11.0671 11.7347 11.3853 11.4924 11.6155 11.1756C11.8457 10.8587 11.9778 10.4812 11.9954 10.09V10.49V10C11.9954 9.46957 11.7847 8.96086 11.4096 8.58579C11.0345 8.21071 10.5258 8 9.9954 8Z" fill="currentColor"/>
    </svg>`; 

    document.querySelectorAll('.setting-icon').forEach(span => {
    span.innerHTML = settingIcon;
    });

    const userSettingicon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.65 0.141667 12.1333 0.425 11.65C0.708333 11.1667 1.1 10.8 1.6 10.55C2.45 10.1167 3.40833 9.75 4.475 9.45C5.54167 9.15 6.71667 9 8 9H8.35C8.45 9 8.55 9.01667 8.65 9.05C8.51667 9.35 8.40433 9.66267 8.313 9.988C8.22167 10.3133 8.15067 10.6507 8.1 11H8C6.81667 11 5.75433 11.15 4.813 11.45C3.87167 11.75 3.10067 12.05 2.5 12.35C2.35 12.4333 2.229 12.55 2.137 12.7C2.045 12.85 1.99933 13.0167 2 13.2V14H8.3C8.4 14.35 8.53333 14.696 8.7 15.038C8.86667 15.38 9.05 15.7007 9.25 16H0ZM14 17L13.7 15.5C13.5 15.4167 13.3127 15.3293 13.138 15.238C12.9633 15.1467 12.784 15.034 12.6 14.9L11.15 15.35L10.15 13.65L11.3 12.65C11.2667 12.4167 11.25 12.2 11.25 12C11.25 11.8 11.2667 11.5833 11.3 11.35L10.15 10.35L11.15 8.65L12.6 9.1C12.7833 8.96667 12.9627 8.85433 13.138 8.763C13.3133 8.67167 13.5007 8.584 13.7 8.5L14 7H16L16.3 8.5C16.5 8.58333 16.6877 8.675 16.863 8.775C17.0383 8.875 17.2173 9 17.4 9.15L18.85 8.65L19.85 10.4L18.7 11.4C18.7333 11.6 18.75 11.8083 18.75 12.025C18.75 12.2417 18.7333 12.45 18.7 12.65L19.85 13.65L18.85 15.35L17.4 14.9C17.2167 15.0333 17.0377 15.146 16.863 15.238C16.6883 15.33 16.5007 15.4173 16.3 15.5L16 17H14ZM15 14C15.55 14 16.021 13.8043 16.413 13.413C16.805 13.0217 17.0007 12.5507 17 12C16.9993 11.4493 16.8037 10.9787 16.413 10.588C16.0223 10.1973 15.5513 10.0013 15 10C14.4487 9.99867 13.978 10.1947 13.588 10.588C13.198 10.9813 13.002 11.452 13 12C12.998 12.548 13.194 13.019 13.588 13.413C13.982 13.807 14.4527 14.0027 15 14ZM8 6C8.55 6 9.021 5.80433 9.413 5.413C9.805 5.02167 10.0007 4.55067 10 4C9.99933 3.44933 9.80367 2.97867 9.413 2.588C9.02233 2.19733 8.55133 2.00133 8 2C7.44867 1.99867 6.978 2.19467 6.588 2.588C6.198 2.98133 6.002 3.452 6 4C5.998 4.548 6.194 5.019 6.588 5.413C6.982 5.807 7.45267 6.00267 8 6Z" fill="currentColor"/></svg>`;
    document.querySelectorAll('.usersetting-icon').forEach(span => {
      span.innerHTML = userSettingicon;
      });


    const logoutIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18H7C6.46957 18 5.96086 17.7893 5.58579 17.4142C5.21071 17.0391 5 16.5304 5 16V12H7V16H16V2H7V6H5V2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 13V10H0V8H9V5L14 9L9 13Z" fill="currentColor"/></svg>`;
  
    document.querySelectorAll('.logout-icon').forEach(span => {
    span.innerHTML = logoutIcon;
    });


    //Headphone Icon
    const headphoneIcon =  `<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4996 10.9487C20.4996 10.4988 20.4996 10.2739 20.5672 10.0737C20.7635 9.49129 21.2823 9.26637 21.8023 9.02976C22.3847 8.76325 22.6759 8.63064 22.9659 8.60724C23.2935 8.58124 23.6224 8.65144 23.9032 8.80875C24.275 9.01676 24.5351 9.41458 24.8003 9.737C26.0262 11.2269 26.6399 11.9718 26.8635 12.7922C27.0455 13.4552 27.0455 14.1494 26.8635 14.8112C26.5372 16.0098 25.5036 17.0135 24.7379 17.9444C24.3465 18.4189 24.1502 18.6568 23.9032 18.7959C23.6176 18.9543 23.2914 19.0244 22.9659 18.9974C22.6759 18.974 22.3847 18.8414 21.801 18.5749C21.281 18.3383 20.7635 18.1134 20.5672 17.5309C20.4996 17.3307 20.4996 17.1058 20.4996 16.656V10.9487ZM7.49892 10.9487C7.49892 10.3818 7.48332 9.87351 7.02569 9.47569C6.85928 9.33138 6.63827 9.23127 6.19755 9.02976C5.61382 8.76455 5.3226 8.63064 5.03268 8.60724C4.16554 8.53703 3.69881 9.12987 3.19958 9.7383C1.97232 11.2269 1.35868 11.9718 1.13377 12.7935C0.952806 13.4543 0.952806 14.1516 1.13377 14.8125C1.46139 16.0098 2.49624 17.0148 3.26069 17.9444C3.74301 18.5294 4.20454 19.0637 5.03268 18.9974C5.3226 18.974 5.61382 18.8414 6.19755 18.5749C6.63957 18.3747 6.85928 18.2733 7.02569 18.129C7.48332 17.7311 7.49892 17.2228 7.49892 16.6573V10.9487Z" stroke="#1D2AA3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.89844 8.60121C4.89844 4.29277 8.97286 0.800781 13.9989 0.800781C19.025 0.800781 23.0994 4.29277 23.0994 8.60121M23.0994 19.0018V20.0418C23.0994 22.3391 20.7723 24.2021 17.8992 24.2021H15.299" stroke="#1D2AA3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    document.querySelectorAll('.headphone-icon').forEach(span => {
    span.innerHTML = headphoneIcon;
    });


    //Email Icon
    const emailIcon =`<svg width="23" height="23" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5 9.98582V22.2777C26.5 23.3644 26.0633 24.4065 25.286 25.1749C24.5087 25.9433 23.4545 26.375 22.3553 26.375H4.39474C3.29548 26.375 2.24125 25.9433 1.46397 25.1749C0.686677 24.4065 0.25 23.3644 0.25 22.2777V9.98582C0.25 8.46982 1.07895 7.14503 2.32237 6.43483L13.375 0.125L24.4276 6.43483C25.6711 7.14503 26.5 8.46982 26.5 9.98582ZM2.62632 7.8962L13.375 14.766L24.1237 7.8962L13.375 1.69563L2.62632 7.8962ZM13.375 16.4186L1.81118 9.00247C1.70066 9.30294 1.63158 9.64438 1.63158 9.98582V22.2777C1.63158 23.0022 1.9227 23.6969 2.44089 24.2092C2.95908 24.7214 3.6619 25.0092 4.39474 25.0092H22.3553C23.0881 25.0092 23.7909 24.7214 24.3091 24.2092C24.8273 23.6969 25.1184 23.0022 25.1184 22.2777V9.98582C25.1184 9.64438 25.0493 9.30294 24.9388 9.00247L13.375 16.4186Z" fill="#1D2AA3"/></svg>`;
    document.querySelectorAll('.email-icon').forEach(span => {
    span.innerHTML = emailIcon;
    });


    //track Order icon
    const trackOrderIcon =`<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.74805 13.25V2C4.74805 1.80109 4.82706 1.61032 4.96772 1.46967C5.10837 1.32902 5.29913 1.25 5.49805 1.25H14.498C14.697 1.25 14.8877 1.32902 15.0284 1.46967C15.169 1.61032 15.248 1.80109 15.248 2V17C15.248 17.1989 15.169 17.3897 15.0284 17.5303C14.8877 17.671 14.697 17.75 14.498 17.75H6.24805M9.99805 3.5V4.25M4.74805 3.5H3.14905C2.96834 3.50003 2.79373 3.56529 2.65731 3.6838C2.52089 3.8023 2.43185 3.96608 2.40655 4.145L1.00555 13.9475L0.998047 14.0525V19.598C0.998111 19.7215 1.02868 19.8431 1.08703 19.952C1.14539 20.0608 1.22972 20.1536 1.33255 20.222L3.05905 21.374C3.18209 21.456 3.32665 21.4999 3.47455 21.5H8.03455C8.17371 21.5 8.31014 21.4613 8.42855 21.3882C8.54696 21.315 8.6427 21.2104 8.70505 21.086L9.94405 18.6095C9.97979 18.5374 10.0269 18.4716 10.0835 18.4145L10.748 17.75M15.248 5.75H16.163C16.3303 5.75005 16.4928 5.80603 16.6246 5.90904C16.7565 6.01205 16.8501 6.15618 16.8905 6.3185L17.2655 7.8185C17.2931 7.92904 17.2951 8.0444 17.2715 8.15584C17.2478 8.26728 17.1991 8.37186 17.1289 8.46164C17.0588 8.55143 16.9692 8.62406 16.8668 8.67402C16.7644 8.72398 16.652 8.74997 16.538 8.75H15.998C15.7991 8.75 15.6084 8.82902 15.4677 8.96967C15.3271 9.11032 15.248 9.30109 15.248 9.5V10.25C15.248 10.4489 15.3271 10.6397 15.4677 10.7803C15.6084 10.921 15.7991 11 15.998 11H16.748C16.947 11 17.1377 11.079 17.2784 11.2197C17.419 11.3603 17.498 11.5511 17.498 11.75V12.5C17.498 12.6989 17.419 12.8897 17.2784 13.0303C17.1377 13.171 16.947 13.25 16.748 13.25H15.248M3.99805 14L7.21705 10.781C7.28672 10.7112 7.36948 10.6557 7.4606 10.6179C7.55171 10.5801 7.6494 10.5607 7.74805 10.5607C7.8467 10.5607 7.94438 10.5801 8.0355 10.6179C8.12662 10.6557 8.20938 10.7112 8.27905 10.781L9.53905 12.041C9.66639 12.1687 9.74345 12.338 9.75612 12.5179C9.7688 12.6978 9.71623 12.8762 9.60805 13.0205L5.64805 18.3005C5.55068 18.4303 5.49805 18.5882 5.49805 18.7505V20.75M6.99805 12.5L7.74805 13.25M11.498 6.5C11.498 6.10218 11.34 5.72064 11.0587 5.43934C10.7774 5.15804 10.3959 5 9.99805 5C9.60022 5 9.21869 5.15804 8.93739 5.43934C8.65608 5.72064 8.49805 6.10218 8.49805 6.5M6.99805 7.25H12.998" stroke="white" stroke-width="1.5"/></svg>`;
    document.querySelectorAll('.trackorder-icon').forEach(span => {
    span.innerHTML = trackOrderIcon;
    });

    //message icon
    const messageIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z" stroke="#1D2AA3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    document.querySelectorAll('.msg-icon').forEach(span => {
    span.innerHTML = messageIcon;
    });

  //Calender Icon
    const calenderIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
    <path d="M14.25 3.5H3.75C2.92157 3.5 2.25 4.17157 2.25 5V15.5C2.25 16.3284 2.92157 17 3.75 17H14.25C15.0784 17 15.75 16.3284 15.75 15.5V5C15.75 4.17157 15.0784 3.5 14.25 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 2V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 2V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.25 8H15.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    document.querySelectorAll('.calender-icon').forEach(span => {
    span.innerHTML = calenderIcon;
    });




  //Whatsapp Icon
  const whatsappIcon =`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_69_5061)">
    <path d="M1.01585 23.7126C1.01473 27.7455 2.0685 31.6834 4.07222 35.1543L0.824219 47.0132L12.9604 43.8311C16.3171 45.6584 20.0781 46.6159 23.8999 46.6162H23.91C36.5267 46.6162 46.7971 36.3496 46.8025 23.7306C46.8049 17.6158 44.4257 11.8659 40.1031 7.53994C35.7812 3.21436 30.0333 0.830916 23.9091 0.828125C11.2908 0.828125 1.02124 11.0942 1.01603 23.7126" fill="url(#paint0_linear_69_5061)"/>
    <path d="M0.19907 23.7053C0.197767 27.8834 1.2893 31.962 3.36446 35.5572L0 47.8413L12.5713 44.5451C16.0352 46.4337 19.9351 47.4294 23.9034 47.4309H23.9137C36.9831 47.4309 47.6223 36.795 47.6279 23.7243C47.6301 17.3898 45.1654 11.4331 40.6884 6.95219C36.2108 2.47181 30.2573 0.00260465 23.9137 0C10.842 0 0.204279 10.6344 0.19907 23.7053ZM7.68577 34.938L7.21637 34.1929C5.24316 31.0554 4.20167 27.4298 4.20316 23.7068C4.20726 12.8426 13.0489 4.00372 23.9211 4.00372C29.1862 4.00595 34.1343 6.05842 37.856 9.78233C41.5775 13.5066 43.6253 18.4573 43.624 23.7228C43.6192 34.587 34.7773 43.427 23.9137 43.427H23.9059C20.3686 43.4251 16.8993 42.4752 13.8739 40.68L13.1539 40.253L5.69377 42.2089L7.68577 34.938Z" fill="url(#paint1_linear_69_5061)"/>
    <path d="M17.9861 13.7954C17.5422 12.8088 17.075 12.7889 16.6529 12.7716C16.3072 12.7567 15.912 12.7578 15.5172 12.7578C15.1221 12.7578 14.48 12.9065 13.9373 13.499C13.3941 14.0922 11.8633 15.5255 11.8633 18.4406C11.8633 21.3558 13.9866 24.1733 14.2826 24.569C14.579 24.964 18.3818 31.1377 24.4045 33.5128C29.4099 35.4866 30.4285 35.094 31.5148 34.995C32.6013 34.8964 35.0207 33.5621 35.5143 32.1785C36.0082 30.795 36.0082 29.6092 35.8601 29.3614C35.712 29.1145 35.3169 28.9662 34.7243 28.67C34.1317 28.3738 31.2184 26.9402 30.6754 26.7424C30.1321 26.5448 29.7371 26.4462 29.342 27.0395C28.9468 27.6319 27.8121 28.9662 27.4663 29.3614C27.1208 29.7575 26.7749 29.8068 26.1825 29.5104C25.5896 29.2131 23.6813 28.5882 21.4173 26.5697C19.6558 24.9991 18.4666 23.0596 18.121 22.4663C17.7753 21.8739 18.0839 21.5528 18.381 21.2576C18.6473 20.9921 18.9738 20.5656 19.2704 20.2198C19.5658 19.8737 19.6644 19.6269 19.862 19.2317C20.0597 18.8362 19.9608 18.4901 19.8129 18.1937C19.6644 17.8974 18.513 14.9669 17.9861 13.7954Z" fill="white"/>
    </g><defs><linearGradient id="paint0_linear_69_5061" x1="2299.74" y1="4619.34" x2="2299.74" y2="0.828125" gradientUnits="userSpaceOnUse"><stop stop-color="#1FAF38"/><stop offset="1" stop-color="#60D669"/></linearGradient><linearGradient id="paint1_linear_69_5061" x1="2381.4" y1="4784.13" x2="2381.4" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="white"/></linearGradient><clipPath id="clip0_69_5061"><rect width="47.6279" height="48" fill="white"/></clipPath></defs></svg>`;

document.querySelectorAll('.whatsapp-icon').forEach(span => {
span.innerHTML = whatsappIcon;
});

//Facebook Icon
const facebookIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_198_476)">
    <path d="M11.9981 2.98875H13.6414V0.12675C13.3579 0.08775 12.3829 0 11.2474 0C8.87813 0 7.25513 1.49025 7.25513 4.22925V6.75H4.64062V9.9495H7.25513V18H10.4606V9.95025H12.9694L13.3676 6.75075H10.4599V4.5465C10.4606 3.62175 10.7096 2.98875 11.9981 2.98875Z" fill="#4D4D4D"/>
  </g>
  <defs>
    <clipPath id="clip0_198_476">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

document.querySelectorAll('.facebook-icon').forEach(span => {
  span.innerHTML = facebookIcon;
  });

  //Instagram Icon
  const instagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_198_117)">
    <path d="M17.982 5.29205C17.9398 4.33564 17.7852 3.67812 17.5636 3.10836C17.335 2.50359 16.9834 1.96213 16.5227 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03299 0C6.58916 0 6.28327 0.0105764 5.32329 0.0527447C4.36688 0.0949129 3.70936 0.249713 3.13975 0.471131C2.53483 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731077 2.50716 0.505951 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875658 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839946 12.7115C0.126163 13.6679 0.280963 14.3254 0.502517 14.8952C0.731077 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.5384 17.3038 3.13618 17.5288C3.70936 17.7504 4.36331 17.905 5.31986 17.9472C6.2797 17.9895 6.58573 17.9999 9.02956 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0277 11.4456 18.0277 9.00176C18.0277 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3223 13.5202 16.1747 13.9949 16.0516 14.3114C15.7491 15.0956 15.1268 15.7179 14.3426 16.0204C14.0261 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03657 16.3824C6.6349 16.3824 6.34659 16.372 5.40062 16.3297C4.52155 16.2911 4.04684 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39775 15.0568 2.16919 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71564 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71564 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.16919 3.31234 2.39775 2.95727 2.70021 2.66883C2.99195 2.36994 3.34358 2.14138 3.73395 1.99729C4.05042 1.87422 4.52869 1.72656 5.40419 1.68783C6.3536 1.64566 6.63847 1.63508 9.04 1.63508C11.4452 1.63508 11.73 1.64566 12.6759 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.3799 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3223 4.49731 16.3611 5.37295C16.4032 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4032 11.6917 16.3611 12.6411Z" fill="#4D4D4D"/>
    <path d="M9.03411 4.37793C6.48135 4.37793 4.41016 6.44898 4.41016 9.00188C4.41016 11.5548 6.48135 13.6258 9.03411 13.6258C11.587 13.6258 13.6581 11.5548 13.6581 9.00188C13.6581 6.44898 11.587 4.37793 9.03411 4.37793ZM9.03411 12.0013C7.37801 12.0013 6.03466 10.6581 6.03466 9.00188C6.03466 7.34564 7.37801 6.00244 9.03411 6.00244C10.6903 6.00244 12.0335 7.34564 12.0335 9.00188C12.0335 10.6581 10.6903 12.0013 9.03411 12.0013Z" fill="#4D4D4D"/>
    <path d="M14.9189 4.19521C14.9189 4.79133 14.4355 5.27469 13.8393 5.27469C13.2431 5.27469 12.7598 4.79133 12.7598 4.19521C12.7598 3.59894 13.2431 3.11572 13.8393 3.11572C14.4355 3.11572 14.9189 3.59894 14.9189 4.19521Z" fill="#4D4D4D"/>
  </g>
  <defs>
    <clipPath id="clip0_198_117">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

document.querySelectorAll('.instagram-icon').forEach(span => {
  span.innerHTML = instagramIcon;
  });