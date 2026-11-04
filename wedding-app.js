/**
 * RAVINDER & KAVITA WEDDING - INTERACTIVE CONTROLLER
 * Faithful recreation of https://devikavigneshwedding.vercel.app/ & Aamantran Envelope
 */

const GANPATI_SVG = `<svg class="top-area-icon" xmlns="http://www.w3.org/2000/svg" viewBox="100 0 664 864" width="72" height="72"><g transform="translate(0, 864) scale(0.1, -0.1)" fill="#F7E7CE" stroke="none"><path d="M4052 8291 c-51 -24 -252 -217 -252 -242 0 -26 42 -51 73 -44 14 4 54 27 88 51 74 52 109 57 109 18 0 -19 -20 -48 -70 -101 -44 -47 -83 -102 -106 -148 -35 -71 -36 -78 -32 -153 4 -62 10 -89 31 -125 118 -201 469 -249 701 -96 90 60 144 179 133 290 -13 123 -73 220 -161 260 -50 23 -159 25 -209 4 -78 -33 -127 -115 -112 -191 7 -38 58 -99 115 -136 25 -16 25 -16 5 -32 -46 -36 -158 -47 -218 -22 -50 21 -87 70 -87 117 0 54 18 93 93 201 36 51 72 110 81 132 60 144 -52 277 -182 217z"/><path d="M5068 7576 c-32 -13 -104 -51 -160 -84 -176 -104 -291 -148 -508 -193 -86 -18 -151 -22 -357 -26 -224 -5 -254 -7 -268 -23 -38 -42 17 -98 140 -146 44 -17 77 -19 265 -19 228 0 282 6 480 55 180 45 269 81 417 168 93 54 132 93 159 157 20 50 17 82 -11 110 -31 32 -81 32 -157 1z"/><path d="M3065 7423 c-219 -49 -383 -177 -469 -365 -50 -108 -61 -167 -60 -308 3 -259 63 -393 365 -806 232 -319 358 -521 399 -639 48 -139 43 -301 -16 -508 -20 -70 -34 -130 -31 -134 13 -12 40 22 79 101 107 213 132 399 79 591 -36 127 -66 185 -255 484 -191 302 -294 502 -363 709 -32 98 -35 113 -31 202 3 85 8 104 40 170 45 94 91 147 176 203 246 162 515 90 639 -169 82 -172 63 -386 -42 -484 l-27 -25 -26 31 c-70 83 -164 95 -250 33 -73 -52 -65 -196 13 -257 77 -61 225 -68 335 -16 166 78 248 252 237 499 -12 254 -145 492 -342 610 -100 60 -198 85 -323 84 -59 -1 -116 -3 -127 -6z"/><path d="M5276 7223 c-27 -8 -75 -32 -105 -52 -103 -70 -186 -110 -306 -150 -139 -46 -255 -67 -450 -81 -77 -5 -198 -14 -270 -19 -149 -11 -163 -15 -171 -46 -10 -42 17 -78 86 -113 63 -32 70 -33 220 -38 134 -5 178 -3 330 20 231 34 358 64 515 121 147 53 203 83 240 127 74 88 94 205 41 240 -17 12 -77 8 -130 -9z"/><path d="M5490 6845 c-25 -8 -85 -35 -135 -61 -49 -26 -131 -68 -181 -94 -97 -50 -254 -100 -399 -126 -59 -11 -170 -18 -320 -21 -252 -6 -285 -12 -285 -58 0 -36 26 -57 112 -93 129 -54 263 -63 509 -37 311 33 461 69 624 153 99 51 199 141 229 206 25 54 10 107 -38 130 -40 19 -56 19 -116 1z"/><path d="M6010 6503 c-107 -17 -245 -100 -309 -186 -69 -93 -102 -226 -44 -175 33 28 210 129 264 150 66 25 227 36 294 19 122 -31 223 -108 273 -211 23 -48 27 -67 27 -145 -1 -71 -5 -100 -23 -138 -52 -115 -115 -176 -617 -597 -360 -302 -435 -368 -435 -382 0 -17 16 -7 272 158 627 405 759 496 843 585 136 144 194 268 195 415 0 238 -161 426 -424 496 -65 17 -241 23 -316 11z"/><path d="M5323 6359 c-28 -10 -43 -40 -52 -98 l-6 -46 -55 -7 c-148 -21 -181 -28 -213 -43 -45 -21 -64 -63 -51 -113 9 -35 7 -40 -28 -79 -45 -50 -48 -80 -13 -121 44 -52 214 -110 328 -112 l27 0 0 -144 c0 -238 -43 -488 -119 -696 -34 -93 -121 -256 -222 -420 -546 -876 -700 -1149 -766 -1355 -92 -286 -114 -511 -68 -724 19 -89 76 -235 90 -230 12 5 12 14 -5 144 -17 132 -8 358 20 490 32 152 92 321 166 465 62 123 242 412 561 900 234 359 323 535 407 805 114 367 148 793 96 1210 -19 149 -44 194 -97 174z m-46 -259 c8 -25 11 -56 8 -69 -5 -20 -10 -22 -38 -17 -18 4 -75 9 -127 13 -102 6 -130 18 -130 58 0 47 50 64 180 62 l94 -2 13 -45z m-93 -144 c48 -20 76 -54 76 -93 0 -30 -5 -36 -37 -50 -32 -13 -50 -14 -115 -5 -42 6 -99 22 -126 36 -76 39 -79 69 -9 104 50 25 160 29 211 8z"/><path d="M4263 5937 c115 -67 252 -163 319 -226 135 -127 197 -248 206 -405 4 -80 6 -87 17 -65 22 41 37 140 31 191 -10 69 -40 133 -102 215 -85 111 -195 188 -384 268 -117 49 -147 57 -87 22z"/><path d="M2433 5806 c-104 -24 -178 -70 -284 -175 -86 -87 -101 -107 -151 -211 -148 -302 -167 -659 -46 -905 119 -246 382 -338 624 -219 189 93 329 272 385 493 28 112 24 286 -8 329 -43 58 -115 32 -257 -91 -153 -133 -293 -407 -207 -407 15 0 56 33 231 186 9 7 21 10 28 5 20 -12 -21 -127 -67 -192 -108 -151 -276 -217 -398 -158 -124 60 -191 244 -180 499 7 172 46 297 134 432 53 81 95 117 190 165 65 32 78 35 128 30 68 -7 107 -33 136 -93 20 -43 22 -55 16 -177 l-6 -130 21 19 c85 74 142 181 158 294 23 160 -27 257 -152 295 -75 23 -219 28 -295 11z"/><path d="M4105 5730 c16 -54 54 -128 83 -161 24 -28 34 -51 42 -105 15 -91 48 -163 103 -218 65 -65 118 -89 197 -90 45 -1 69 -6 78 -16 10 -13 15 -12 32 8 21 25 50 111 50 146 0 98 -72 177 -226 252 -69 34 -132 73 -169 106 -32 29 -53 43 -47 32 21 -40 120 -121 205 -169 137 -76 200 -162 182 -246 -6 -28 -7 -27 -38 33 -42 85 -104 143 -215 203 -101 54 -181 120 -245 200 -28 36 -38 43 -32 25z m269 -309 c4 -5 -1 -22 -11 -38 -21 -38 -11 -77 32 -120 28 -28 40 -33 78 -33 25 0 57 4 71 10 21 8 27 6 37 -11 6 -11 8 -23 6 -26 -14 -13 -81 -20 -121 -11 -93 20 -196 152 -213 273 l-6 48 61 -42 c33 -22 63 -45 66 -50z"/><path d="M3875 4879 c-51 -52 -159 -99 -245 -105 -99 -7 -120 -12 -120 -27 0 -14 145 -147 160 -147 16 0 140 49 171 67 24 14 34 33 53 93 28 87 35 142 21 147 -6 2 -24 -11 -40 -28z"/><path d="M5552 4735 c-51 -13 -120 -38 -155 -55 -78 -40 -159 -91 -153 -97 2 -3 31 1 63 8 94 21 285 16 362 -11 149 -50 240 -156 266 -306 16 -99 -39 -245 -126 -331 -103 -103 -195 -133 -402 -133 -148 0 -409 -16 -467 -29 l-35 -8 50 -22 c225 -100 350 -202 453 -374 113 -187 180 -464 169 -691 -8 -173 -60 -300 -183 -454 -185 -231 -423 -332 -785 -332 -126 0 -256 17 -358 47 -307 89 -552 353 -674 728 -71 214 -92 383 -84 655 10 324 56 557 169 854 27 70 46 131 42 135 -9 9 -103 -98 -179 -204 -176 -246 -270 -528 -282 -850 -12 -330 38 -645 136 -850 97 -205 327 -464 533 -601 79 -53 247 -134 338 -164 363 -117 825 -26 1225 244 33 22 102 81 154 131 257 248 377 580 342 943 -15 156 -44 269 -115 451 -31 80 -53 147 -49 151 4 4 44 34 89 68 98 75 160 150 218 262 114 221 124 405 32 588 -67 132 -174 221 -311 257 -83 21 -175 18 -283 -10z"/><path d="M6395 4708 c-11 -6 -37 -27 -58 -47 -85 -81 -109 -294 -54 -461 86 -257 204 -360 444 -390 142 -18 321 20 449 95 78 46 188 142 213 185 28 50 33 113 9 136 -38 38 -112 12 -310 -108 -225 -136 -329 -151 -430 -60 -22 20 -48 53 -59 75 -28 53 -49 157 -49 242 -1 102 -16 196 -43 257 -37 84 -65 102 -112 76z"/><path d="M3811 4602 c-68 -31 -123 -61 -122 -65 1 -13 314 -288 339 -298 28 -11 58 3 67 30 4 13 -23 85 -76 203 -45 101 -82 184 -83 185 -1 1 -57 -24 -125 -55z"/><path d="M6925 4640 c-72 -17 -142 -75 -169 -142 -9 -21 -16 -63 -16 -95 0 -107 62 -189 166 -219 225 -65 399 198 247 375 -54 63 -154 99 -228 81z"/><path d="M2075 4206 c-366 -70 -677 -345 -794 -701 -87 -267 -78 -634 25 -954 37 -114 145 -324 221 -430 206 -286 580 -563 916 -677 220 -76 376 -103 622 -111 269 -8 572 24 745 80 42 14 29 15 -205 16 -488 2 -760 57 -1070 214 -374 190 -653 454 -809 766 -94 187 -146 395 -161 641 -12 194 35 384 126 516 240 347 692 459 1001 248 177 -120 292 -322 292 -509 -1 -116 -33 -212 -119 -353 l-27 -43 39 16 c144 60 242 176 278 327 22 92 19 258 -5 352 -70 273 -320 503 -639 588 -98 26 -334 34 -436 14z"/><path d="M6235 3693 c-78 -17 -169 -50 -218 -80 -32 -19 -57 -37 -55 -38 2 -2 47 -11 99 -19 382 -62 709 -300 838 -611 106 -253 67 -596 -94 -839 -169 -255 -545 -447 -1045 -535 -166 -29 -245 -38 -625 -66 -606 -45 -792 -70 -980 -132 -326 -107 -504 -262 -522 -454 -13 -138 90 -335 261 -497 121 -114 158 -124 55 -14 -73 77 -112 136 -139 209 -80 214 -13 415 170 508 30 15 110 38 193 55 290 59 544 86 922 100 758 28 1055 72 1405 207 377 145 625 353 729 614 139 347 132 705 -20 1026 -172 361 -488 576 -843 572 -61 -1 -120 -3 -131 -6z"/></g></svg>`;

const EK_ONKAR_SVG = `<svg class="top-area-icon" xmlns="http://www.w3.org/2000/svg" viewBox="50 0 764 864" width="72" height="72"><g transform="translate(0, 864) scale(0.1, -0.1)" fill="#F7E7CE" stroke="none"><path d="M7745 8259 c-68 -92 -145 -235 -244 -451 -48 -106 -105 -227 -126 -268 -49 -97 -118 -206 -122 -193 -6 17 184 497 259 655 38 81 68 153 66 160 -6 17 -84 -85 -141 -185 -26 -47 -92 -178 -146 -293 -160 -341 -168 -357 -220 -436 -44 -68 -54 -77 -98 -92 -123 -40 -278 -44 -395 -10 -136 40 -179 72 -418 315 -124 125 -255 250 -292 277 -151 113 -359 155 -548 110 -71 -16 -222 -91 -313 -154 -45 -32 -135 -93 -201 -137 -291 -196 -538 -506 -741 -932 -292 -614 -512 -1572 -545 -2379 -35 -847 162 -1604 554 -2121 73 -98 246 -277 341 -355 376 -308 908 -479 1415 -456 366 17 657 115 923 312 36 27 99 70 139 96 260 166 433 406 537 745 89 290 122 519 103 709 -22 203 -82 326 -236 480 -146 145 -279 225 -494 297 -56 19 -102 39 -102 43 0 5 20 32 45 60 135 157 197 289 260 556 18 78 25 136 25 209 0 92 -3 107 -30 164 -76 159 -280 281 -580 347 -95 20 -131 23 -365 23 -226 0 -276 -3 -385 -23 -327 -59 -605 -163 -720 -268 -25 -22 -74 -56 -109 -74 -77 -41 -156 -110 -181 -159 -44 -87 -109 -336 -110 -418 0 -53 23 -58 48 -12 31 57 50 75 113 108 47 26 63 30 69 21 6 -10 14 -6 32 13 30 32 82 55 218 95 226 66 435 95 675 95 276 -1 488 -46 679 -146 85 -44 190 -137 219 -193 l16 -32 -92 -89 c-51 -49 -137 -124 -192 -168 -137 -108 -182 -152 -210 -199 -40 -71 -115 -347 -115 -427 0 -42 27 -55 197 -93 175 -40 277 -73 388 -125 204 -95 377 -249 469 -416 65 -118 104 -343 73 -418 -29 -69 -108 -176 -181 -245 -59 -56 -89 -76 -162 -106 -206 -86 -419 -126 -675 -126 -254 0 -455 32 -692 110 -705 234 -1203 822 -1406 1663 -78 320 -104 547 -103 902 0 300 9 434 52 735 70 490 148 761 316 1100 172 344 393 627 558 711 238 122 498 78 726 -124 52 -46 140 -135 195 -197 177 -200 310 -298 456 -336 85 -23 260 -22 354 0 98 24 223 86 299 151 35 30 69 55 74 55 20 0 137 84 185 133 102 104 210 297 292 522 116 316 233 611 292 740 91 196 95 205 83 205 -5 0 -30 -28 -55 -61z"/><path d="M2360 7619 c-137 -24 -292 -94 -433 -197 -39 -29 -114 -80 -166 -113 -168 -110 -381 -334 -516 -544 -184 -284 -328 -690 -395 -1110 -20 -122 -22 -163 -17 -369 5 -253 19 -344 77 -503 97 -270 281 -476 525 -589 216 -100 496 -107 732 -18 116 44 249 120 315 182 15 14 30 23 34 20 5 -5 -43 -187 -177 -678 -167 -610 -263 -1095 -330 -1665 -17 -145 -17 -557 0 -655 88 -505 327 -909 586 -989 103 -32 285 -45 439 -32 346 31 627 122 816 265 36 27 94 67 130 89 36 22 92 60 124 86 60 47 184 189 212 243 14 27 10 25 -66 -28 -148 -104 -279 -142 -512 -151 -302 -12 -626 53 -811 164 -195 116 -351 340 -452 646 -70 215 -80 290 -79 592 0 221 4 300 22 435 67 495 121 733 372 1650 26 96 55 208 65 248 13 54 31 94 72 155 30 45 71 114 90 152 85 168 155 439 180 698 4 37 2 47 -10 47 -36 0 -88 -119 -132 -300 -15 -63 -31 -119 -36 -124 -4 -5 -1 18 6 50 30 125 77 364 95 489 53 358 54 845 4 1140 -78 456 -291 703 -621 720 -48 2 -113 0 -143 -6z"/></g></svg>`;

const OM_SVG = `<div class="sacred-om-symbol" style="font-family:'Noto Serif Devanagari','Mangal','Arial Unicode MS',serif;font-size:58px;line-height:1;color:#F7E7CE;font-weight:700;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.55));user-select:none;">&#2384;</div>`;

// Global unseal function for immediate response
window.unsealAndOpenEnvelope = function() {
  const env = document.getElementById('royalEnvelope');
  const envScr = document.getElementById('envelopeScreen');
  const splashScreen = document.querySelector('.splash-screen');
  const splashLottie = splashScreen ? splashScreen.querySelector('lottie-player') : null;
  const weddingAudio = document.getElementById('weddingAudio');

  if (window._envelopeHasOpened) return;
  window._envelopeHasOpened = true;

  console.log("Unsealing envelope...");

  // 1. Play music immediately on this first tap
  if (weddingAudio) {
    weddingAudio.volume = 0.7;
    weddingAudio.play().then(() => {
      const audioIcon = document.querySelector('.audio-icon');
      if (audioIcon) {
        audioIcon.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#d96c8a"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
      }
    }).catch(err => console.log('Audio autoplay:', err));
  }

  // 2. Add .animate to slide open all 4 flaps
  if (env) {
    env.classList.add('animate');
  }

  // 3. Immediately hide splash screen so envelope opens directly into wedding card
  if (splashScreen) {
    splashScreen.classList.add('fade-out');
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 400);
  }

  // 4. Remove envelope overlay after unsealing motion
  setTimeout(() => {
    if (envScr) {
      envScr.style.display = 'none';
    }
    document.body.classList.remove('envelope-active');
  }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  // Support direct hash or ?unsealed=1 navigation
  if (window.location.search.includes('unsealed=1') || (window.location.hash && window.location.hash.length > 1)) {
    document.body.classList.remove('envelope-active');
    const envScrInit = document.getElementById('envelopeScreen');
    if (envScrInit) envScrInit.style.display = 'none';
    window._envelopeHasOpened = true;
  }

  // --- 1. Sound & Audio System ---
  const weddingAudio = document.getElementById('weddingAudio');
  const audioControl = document.querySelector('.audio-control');
  const audioIcon = document.querySelector('.audio-icon');
  let isPlaying = false;

  const SOUND_ON_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#d96c8a"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
  const SOUND_OFF_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#8d5e5e"><path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.27 4.27 1.27-1.27L4.27 3zM14 7h4V3h-6v5.18l2 2V7z"/></svg>`;

  function toggleAudio() {
    if (!weddingAudio) return;
    if (isPlaying) {
      weddingAudio.pause();
      isPlaying = false;
      if (audioIcon) audioIcon.innerHTML = SOUND_OFF_SVG;
    } else {
      weddingAudio.play();
      isPlaying = true;
      if (audioIcon) audioIcon.innerHTML = SOUND_ON_SVG;
    }
  }

  if (audioControl) {
    audioControl.addEventListener('click', toggleAudio);
  }

  // --- 2. Rotating Religious Greetings (Matching aamantran.link) ---
  const religiousGreetings = [
    { id: "ganpati", svg: GANPATI_SVG, text: "श्री गणेशाय नमः" },
    { id: "ek-onkar", svg: EK_ONKAR_SVG, text: "ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ" },
    { id: "om", svg: OM_SVG, text: "॥ ॐ नमः शिवाय ॥" },
    { id: "vivah", svg: GANPATI_SVG, text: "॥ शुभ विवाह ॥" }
  ];

  let currentGreetingIndex = 0;
  const greetingBox = document.getElementById('religiousGreeting');
  const greetingIcon = document.getElementById('greetingIcon');
  const greetingText = document.getElementById('greetingText');

  function renderGreeting(idx) {
    const item = religiousGreetings[idx];
    if (greetingIcon) greetingIcon.innerHTML = item.svg;
    if (greetingText) greetingText.textContent = item.text;
  }

  // Show Ganpati by default
  renderGreeting(0);

  // Cycle every 1600ms with smooth fade effect
  const greetingTimer = setInterval(() => {
    if (window._envelopeHasOpened) {
      clearInterval(greetingTimer);
      return;
    }
    if (greetingBox) {
      greetingBox.classList.add('fade-transition');
      setTimeout(() => {
        currentGreetingIndex = (currentGreetingIndex + 1) % religiousGreetings.length;
        renderGreeting(currentGreetingIndex);
        greetingBox.classList.remove('fade-transition');
      }, 250);
    }
  }, 1600);

  // --- 3. Robust Click & Touch Handlers for Envelope ---
  const seal = document.getElementById('envelopeSeal');
  const env = document.getElementById('royalEnvelope');
  const envScr = document.getElementById('envelopeScreen');
  const clickToOpen = document.querySelector('.click-to-open');

  [seal, env, envScr, clickToOpen].forEach(el => {
    if (!el) return;
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.unsealAndOpenEnvelope();
    });
    el.addEventListener('touchend', (e) => {
      e.preventDefault();
      window.unsealAndOpenEnvelope();
    });
  });

  // Splash Screen Handling
  const splashScreen = document.querySelector('.splash-screen');
  const splashLottie = splashScreen ? splashScreen.querySelector('lottie-player') : null;

  if (splashLottie && window.WEDDING_LOTTIE_DATA) {
    try { splashLottie.load(window.WEDDING_LOTTIE_DATA); } catch(e){}
  }

  window.dismissSplash = function() {
    if (!splashScreen || splashScreen.classList.contains('fade-out')) return;
    splashScreen.classList.add('fade-out');

    // Re-paint scratch canvases once main content is fully visible
    setTimeout(() => {
      scratchCards.forEach(card => {
        const fn = card._repaintCanvas;
        if (fn) fn();
      });
    }, 400);
  };

  if (splashScreen) {
    splashScreen.addEventListener('click', () => {
      window.dismissSplash();
    });
  }

  // --- 4. Interactive Canvas Scratch Cards ---
  const scratchCards = document.querySelectorAll('.scratch-card');
  let revealedCards = 0;

  scratchCards.forEach((card) => {
    const canvas = card.querySelector('.scratch-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let isDrawing = false;
    let isRevealed = false;

    function resizeAndPaint() {
      if (isRevealed) return;
      const rect = card.getBoundingClientRect();
      const w = Math.round(rect.width) || card.offsetWidth || 105;
      const h = Math.round(rect.height) || card.offsetHeight || 140;

      canvas.width = w;
      canvas.height = h;
      paintCanvas(w, h);
    }

    function paintCanvas(w, h) {
      if (isRevealed) return;
      w = w || canvas.width;
      h = h || canvas.height;

      // Exact original linear gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#f48b8b');
      grad.addColorStop(0.5, '#fcebeb');
      grad.addColorStop(1, '#f48b8b');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Exact original SCRATCH typography
      ctx.fillStyle = '#8d5e5e';
      ctx.font = '700 12px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '2px';
      ctx.fillText('SCRATCH', w / 2, h / 2 + 5);
    }

    card._repaintCanvas = resizeAndPaint;
    resizeAndPaint();
    window.addEventListener('resize', resizeAndPaint);

    function getCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: cx - rect.left,
        y: cy - rect.top
      };
    }

    function eraseAt(x, y) {
      if (isRevealed) return;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
      checkRevealProgress();
    }

    function checkRevealProgress() {
      if (isRevealed) return;
      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      let clearCount = 0;
      const totalPixels = data.length / 4;

      for (let i = 0; i < data.length; i += 16) {
        if (data[i + 3] === 0) {
          clearCount += 4;
        }
      }

      if ((clearCount / totalPixels) * 100 > 45) {
        isRevealed = true;
        canvas.style.transition = 'opacity 0.5s ease-out';
        canvas.style.opacity = '0';
        setTimeout(() => {
          canvas.style.display = 'none';
          revealedCards++;
          triggerConfetti(card);
        }, 500);
      }
    }

    // Mouse Events
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      const pos = getCoords(e);
      eraseAt(pos.x, pos.y);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDrawing) return;
      const pos = getCoords(e);
      eraseAt(pos.x, pos.y);
    });

    window.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    // Touch Events
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      isDrawing = true;
      const pos = getCoords(e);
      eraseAt(pos.x, pos.y);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const pos = getCoords(e);
      eraseAt(pos.x, pos.y);
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
      isDrawing = false;
    });
  });

  function triggerConfetti(card) {
    const confettiWrapper = document.createElement('div');
    confettiWrapper.className = 'confetti-wrapper';
    card.appendChild(confettiWrapper);

    for (let i = 1; i <= 15; i++) {
      const bit = document.createElement('div');
      bit.className = 'confetti';
      bit.style.animation = `confetti-burst-${i} 0.8s ease-out forwards`;
      confettiWrapper.appendChild(bit);
    }

    setTimeout(() => confettiWrapper.remove(), 1000);
  }

  // --- 5. Countdown Timer (Target: Nov 22, 2026 11:00 AM) ---
  const targetTime = new Date('2026-11-22T11:00:00').getTime();
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  // --- 6. A Legacy of Love Coverflow Slider Controller ---
  const legacySlides = document.querySelectorAll('.legacy-slide');
  const legacyDots = document.querySelectorAll('.legacy-dot');
  const legacyPrev = document.getElementById('legacyPrevBtn');
  const legacyNext = document.getElementById('legacyNextBtn');
  const legacyViewport = document.getElementById('legacyViewport');
  let currentLegacyIndex = 0;
  let legacyAutoplayTimer = null;
  const totalLegacySlides = legacySlides.length;

  function updateLegacySlider(index) {
    if (totalLegacySlides === 0) return;
    currentLegacyIndex = (index + totalLegacySlides) % totalLegacySlides;

    legacySlides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');

      const diff = (i - currentLegacyIndex + totalLegacySlides) % totalLegacySlides;

      if (diff === 0) {
        slide.classList.add('active');
      } else if (diff === 1) {
        slide.classList.add('next');
      } else if (diff === totalLegacySlides - 1) {
        slide.classList.add('prev');
      } else if (diff === 2) {
        slide.classList.add('far-next');
      } else if (diff === totalLegacySlides - 2) {
        slide.classList.add('far-prev');
      }
    });

    legacyDots.forEach((dot, i) => {
      if (i === currentLegacyIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function startLegacyAutoplay() {
    stopLegacyAutoplay();
    legacyAutoplayTimer = setInterval(() => {
      updateLegacySlider(currentLegacyIndex + 1);
    }, 3000); // 3 sec autoplay
  }

  function stopLegacyAutoplay() {
    if (legacyAutoplayTimer) {
      clearInterval(legacyAutoplayTimer);
      legacyAutoplayTimer = null;
    }
  }

  if (legacySlides.length > 0) {
    updateLegacySlider(0);
    startLegacyAutoplay();

    // Click on slide directly
    legacySlides.forEach((slide, idx) => {
      slide.addEventListener('click', () => {
        if (slide.classList.contains('prev')) {
          updateLegacySlider(currentLegacyIndex - 1);
        } else if (slide.classList.contains('next')) {
          updateLegacySlider(currentLegacyIndex + 1);
        }
      });
    });

    // Prev / Next button clicks
    if (legacyPrev) {
      legacyPrev.addEventListener('click', () => {
        updateLegacySlider(currentLegacyIndex - 1);
        startLegacyAutoplay();
      });
    }

    if (legacyNext) {
      legacyNext.addEventListener('click', () => {
        updateLegacySlider(currentLegacyIndex + 1);
        startLegacyAutoplay();
      });
    }

    // Dot indicators click
    legacyDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updateLegacySlider(idx);
        startLegacyAutoplay();
      });
    });

    // Touch Swipe handling
    let touchStartX = 0;
    let touchEndX = 0;

    if (legacyViewport) {
      legacyViewport.addEventListener('mouseenter', stopLegacyAutoplay);
      legacyViewport.addEventListener('mouseleave', startLegacyAutoplay);

      legacyViewport.addEventListener('touchstart', (e) => {
        stopLegacyAutoplay();
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      legacyViewport.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            updateLegacySlider(currentLegacyIndex + 1); // swipe left -> next
          } else {
            updateLegacySlider(currentLegacyIndex - 1); // swipe right -> prev
          }
        }
        startLegacyAutoplay();
      }, { passive: true });
    }
  }

  // --- 7. Falling Feathers & Petals ---
  const rosePetals = document.querySelector('.rose-petals');
  if (rosePetals) {
    const petalColors = ['#d96c8a', '#f48b8b', '#e2889e', '#f9c5d1'];
    for (let i = 1; i <= 12; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.animationName = `petal-fall-${i}`;
      petal.style.left = `${(i * 8)}%`;
      petal.style.animationDuration = `${7 + (i % 5)}s`;
      petal.style.animationDelay = `${(i * 0.8)}s`;
      petal.style.width = `${12 + (i % 6)}px`;
      petal.style.height = `${16 + (i % 6)}px`;
      petal.style.background = petalColors[i % petalColors.length];
      petal.style.opacity = '0.6';
      rosePetals.appendChild(petal);
    }
  }

  // --- 8. Scroll Reveal Observer ---
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-bounce, .reveal-pop'
  );

  const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollRevealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => scrollRevealObserver.observe(el));


});
