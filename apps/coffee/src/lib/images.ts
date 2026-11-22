// Placeholder stock photos (Unsplash License). Swap the files for real photos later;
// keep the file names and the whole site updates.
import heroIcedLatte from "@/assets/images/hero-iced-latte.jpg";
import heroLatteTop from "@/assets/images/hero-latte-top.jpg";
import storyPour from "@/assets/images/story-pour.jpg";
import craftTools from "@/assets/images/craft-tools.jpg";
import craftRoast from "@/assets/images/craft-roast.jpg";
import craftPourover from "@/assets/images/craft-pourover.jpg";
import galleryInterior from "@/assets/images/gallery-interior.jpg";
import galleryCheers from "@/assets/images/gallery-cheers.jpg";
import galleryPlants from "@/assets/images/gallery-plants.jpg";
import galleryCroissant from "@/assets/images/gallery-croissant.jpg";
import galleryEspresso from "@/assets/images/gallery-espresso.jpg";
import galleryCup from "@/assets/images/gallery-cup.jpg";
import galleryIced from "@/assets/images/gallery-iced.jpg";
import visitWindow from "@/assets/images/visit-window.jpg";
import beans from "@/assets/images/beans.jpg";

export const images = {
  heroIcedLatte,
  heroLatteTop,
  storyPour,
  pillars: [craftTools, craftRoast, craftPourover],
  menu: { espresso: galleryEspresso, slow: galleryIced, food: galleryCroissant },
  // order matches dict.gallery.alts
  gallery: [galleryInterior, galleryCheers, galleryIced, galleryCroissant, galleryPlants, galleryCup, galleryEspresso],
  visitWindow,
  beans,
} as const;
