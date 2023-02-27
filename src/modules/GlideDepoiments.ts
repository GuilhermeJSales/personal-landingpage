import Glide from '@glidejs/glide';

export const glideDepoiment = new Glide('.glide-depoiment', {
  type: 'slider',
  startAt: 0,
  perView: 1,
  focusAt: 'center',
  gap: 50,
  autoplay:6000,
  hoverpause: false,
  dragThreshold: false,
});

