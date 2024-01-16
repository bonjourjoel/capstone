import ResponsiveGrid from "../../../widgets/ResponsiveGrid/ResponsiveGrid";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <ResponsiveGrid>
      <div>
        <h1 className="font-subtitle font-color-highlight2">Testimonials</h1>
        <p className="font-description">This section is the same kind of layout than "Today's specials" so i needn't loose time with it...</p>
        <br />
        <p className="font-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus risus non arcu feugiat, non imperdiet odio eleifend. Nulla facilisi. Morbi elementum neque et odio posuere, a fringilla est auctor. Praesent molestie eu enim iaculis blandit. Maecenas nec facilisis odio. Sed lacinia faucibus nisi nec commodo. Sed consequat nisl ante, ac aliquam urna porta et. Pellentesque a dui eu eros sagittis sodales non eget nunc. Pellentesque tristique ex ante, ultricies luctus nunc iaculis nec. Aenean vulputate bibendum diam, et gravida metus elementum vitae. Ut dictum sit amet tellus et aliquam. Proin libero purus, varius at porttitor eget, rutrum et metus.</p>
      </div>
    </ResponsiveGrid>
  )
}