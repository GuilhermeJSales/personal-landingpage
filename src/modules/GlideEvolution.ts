import Glide from '@glidejs/glide';

export const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
  gap: 50,
  hoverpause: true,
  breakpoints: {
    1200: {
      perView: 2
    },
    800: {
      perView: 1
    }
  }
  
});

