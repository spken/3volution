// Salon photos from coiffeur3volution.ch (the client's own site, 2016–2019 uploads),
// resized to max 1600px. Swap files for newer shots any time; keep the names.
import heroWaves from "@/assets/images/hero-waves.jpg";
import serviceHair from "@/assets/images/service-hair.jpg";
import visitSalon from "@/assets/images/visit-salon.jpg";
import storyBridal from "@/assets/images/story-bridal.jpg";
import teamHair from "@/assets/images/team-hair.jpg";
import teamBeauty from "@/assets/images/team-beauty.jpg";
import gallery1 from "@/assets/images/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery-4.jpg";
import gallery5 from "@/assets/images/gallery-5.jpg";
import gallery6 from "@/assets/images/gallery-6.jpg";
import gallery7 from "@/assets/images/gallery-7.jpg";
import gallery8 from "@/assets/images/gallery-8.jpg";

export const images = {
  // order matches dict.hero.panels (centre panel is the one shown on mobile)
  hero: [serviceHair, heroWaves, visitSalon],
  team: { hair: teamHair, beauty: teamBeauty },
  // order matches dict.lookbook.items
  lookbook: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, storyBridal, gallery7, gallery8],
} as const;
