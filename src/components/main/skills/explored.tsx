import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function SecondarySkills() {
  const skills = [
    {
      quote:
        "I’ve used React Native for small projects and prototyping, leveraging my experience with React and the Expo ecosystem.",
      name: "React Native",
      designation: "Mobile UI prototyping with React and Expo",
      src: "/react-native-wpp.webp",
    },
    {
      quote:
        "Built simple Android apps using Java and Kotlin, including UI layouts and basic logic handling through Android Studio.",
      name: "Android Studio",
      designation: "Java & Kotlin for native Android apps",
      src: "/android-wpp.webp",
    },
    {
      quote:
        "Laravel was my first backend framework experience. I used Blade templates and Eloquent ORM to build web applications quickly.",
      name: "Laravel",
      designation: "Backend web development with Blade and Eloquent",
      src: "/laravel-wpp.webp",
    },
    {
      quote:
        "WordPress gave me early experience with CMS-driven websites. I’ve worked on theme customization and plugin integrations.",
      name: "WordPress",
      designation: "Theme development and plugin integration",
      src: "/wordpress-wpp.webp",
    },
    {
      quote:
        "Unity introduced me to game development with C#. I built several prototypes, learning about physics, scenes, and UI components.",
      name: "Unity",
      designation: "2D/3D game development with C#",
      src: "/unity-wpp.webp",
    },
    {
      quote:
        "Godot's simplicity and GDScript syntax made it easy to build small 2D game projects and experiment with new ideas.",
      name: "Godot Engine",
      designation: "Lightweight game prototyping with GDScript",
      src: "/godot-wpp.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={skills} autoplay={true} />;
}
