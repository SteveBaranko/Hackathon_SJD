<template>
  <div id='carouselList' class=" -translate-x-16 ">
  </div>
  <button @click="slideLeft" class="w-20 h-8 m-3 text-white rounded-xl bg-blue-500">
    slide left
  </button>
  <button @click="slideRight" class="w-20 h-8 m-3 text-white rounded-xl bg-blue-500">
    slide right
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const positions:string[] = ['-translate-x-80', '-translate-x-40', 'translate-x-0', 'translate-x-40', 'translate-x-80'];
const scale:string[] = ['scale-50', 'scale-75', 'scale-110', 'scale-75', 'scale-50'];
const opacity:string[] = ['opacity-0', 'opacity-100', 'opacity-100', 'opacity-100', 'opacity-0'];

export const baseObject = ():HTMLButtonElement => {
  const b = document.createElement('button'); 
  b.classList.add('absolute','transition-all','duration-300', 'ease-in-out', 'w-32', 'h-32', '-translate-y-48'); 
  return b;
}

const images:string[] = ['https://i.scdn.co/image/ab67616d0000b273e2c72f93d6358cdcf5ac5e36',
                          'https://i.scdn.co/image/ab67616d0000b273a5bf6380afb939747141f354',
                          'https://i.scdn.co/image/ab67616d0000b273f80fe67d0f4293be5b8f5251',
                          'https://i.scdn.co/image/ab67616d0000b273fa301e01c3ec11e2e06ca875',
                          'https://i.scdn.co/image/ab67616d0000b27388b4a33afa5a63808eb1ea2b',
                          'https://i.scdn.co/image/ab67616d0000b273f0aabc547215e3e84b1cc9f3',
                          'https://i.scdn.co/image/ab67616d0000b273b1bc705bc920ac76620bc818',
                          'https://i.scdn.co/image/ab67616d0000b273505190077497c230422f2934',
                          'https://i.scdn.co/image/ab67616d0000b273aa5e4c9da271951ac0b31fa2',
                          'https://i.scdn.co/image/ab67616d0000b2739596e3d019703b3a8a3f35ac'];

const allColors:string[] = ['bg-red-600', 'bg-yellow-700', 'bg-blue-800', 'bg-emerald-700', 'bg-orange-400', 'bg-slate-700', 'bg-cyan-200' , 'bg-lime-300', 'bg-teal-300', 'bg-sky-300'] // , 'bg-indigo-700','bg-pink-700', 'bg-rose-700', 'bg-violet-700', 'bg-cyan-700', 'bg-emerald-700', 'bg-fuchsia-700'];

export default defineComponent({
  name: 'MyCarousel',
  mounted() {
    // document.getElementById('carouselList')?.appendChild(div);
    for (let i= 0; i < 5; i++) {
      this.newDiv(i, i);
      /*
      const div = baseObject();
      div.classList.add(allColors[i]);
      div.classList.add(positions[i]);
      div.classList.add(scale[i]);
      div.classList.add(opacity[i]);
      div.id = `div-${i}`;
      document.getElementById('carouselList')?.appendChild(div);
      */
    }
    this.front = 0;
    this.back = 4;
  },
  unmounted() {
    // document.getElementById('carouselList')?.removeChild(div);
    for (let i = 0; i < 5; i++) {
      this.deleteDiv(`div-${i}`);
    }
  },
  methods: {
    slideLeft() {
      this.deleteDiv(`div-${this.remap[0]}`);
      for (let i = 0; i < 5; i++) {
        this.updateLeft(`div-${this.remap[i]}`, i);
        if (i < 4)
          this.remap[i] = this.remap[i+1];
      }
      this.front++;
      this.back++;
      this.remap[4] = this.back;
      this.newDiv(4, this.back)
    },
    slideRight() {
      this.deleteDiv(`div-${this.remap[4]}`);
      for (let i = 4; i >= 0; i--) {
        this.updateRight(`div-${this.remap[i]}`, i);
        if (i > 0)
          this.remap[i] = this.remap[i-1];
      }
      const minusminus = (x:number) => {return (x + (allColors.length-1))%allColors.length};
      this.front = minusminus(this.front);
      this.back = minusminus(this.back);
      this.remap[0] = this.front;
      this.newDiv(0, this.front);
    },
    updateLeft(id:string, curr:number) {
      if (curr <= 0) return;
      const div = document.getElementById(id);
      const currTranslate = positions[curr];
      const currScale = scale[curr];
      const currOpac = opacity[curr];
      curr--;
      const nextScale = scale[curr];
      const nextTranslate = positions[curr];
      const nextOpac = opacity[curr];
      div?.classList.remove(currTranslate);
      div?.classList.remove(currScale);
      div?.classList.remove(currOpac);
      div?.classList.add(nextTranslate);
      div?.classList.add(nextScale);
      div?.classList.add(nextOpac);
    },
    updateRight(id:string, curr:number) {
      if (curr >= positions.length-1) return;
      const div = document.getElementById(id);
      const currTranslate = positions[curr];
      const currScale = scale[curr];
      const currOpac = opacity[curr];
      curr++;
      const nextScale = scale[curr];
      const nextTranslate = positions[curr];
      const nextOpac = opacity[curr];
      div?.classList.remove(currTranslate);
      div?.classList.remove(currScale);
      div?.classList.remove(currOpac);
      div?.classList.add(nextTranslate);
      div?.classList.add(nextScale);
      div?.classList.add(nextOpac);
    },
    newDiv(ind:number, identifier:number) {
      const div = baseObject();
      div.classList.add(allColors[identifier % allColors.length]);
      div.classList.add(positions[ind]);
      div.classList.add(scale[ind]);
      div.classList.add(opacity[ind]);
      div.id = `div-${identifier}`;
      document.getElementById('carouselList')?.appendChild(div);

      const img = document.createElement('img');
      img.src = images[identifier % images.length];
      div.appendChild(img);
    },
    deleteDiv(id:string) {
      const div = document.getElementById(id);
      if (!div) return;
      document.getElementById('carouselList')?.removeChild(div);
    }
  },
  data() {
    let m:{ [key: number]: number } = {0:0, 1:1, 2:2, 3:3, 4:4};
    return {
      front: 0,
      back: 4,
      remap: m
    }
  },
});
</script>
