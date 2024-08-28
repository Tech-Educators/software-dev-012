import AccordionDemo from "@/components/Accordian";
import MyIcon from "@/components/CustomSVGIcon";
import PopoverDemo from "@/components/Popover";
import { ExitFullScreenIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div>
      <h1>Radix</h1>
      <h2>Radix Primitives</h2>
      <AccordionDemo />
      <PopoverDemo />
      <h2>Radix Icons</h2>
      <p>
        I am a p tag but I really wish I had icons... <ExitFullScreenIcon />
      </p>
      <p>Or we can just use the SVG copied from the Radix Website</p>
      <MyIcon />
      <MyIcon />
      <MyIcon />
      <MyIcon />
    </div>
  );
}
