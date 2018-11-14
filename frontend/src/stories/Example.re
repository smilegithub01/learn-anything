open BsStorybook.Story;

let _module = [%bs.raw "module"];

storiesOf("Example", _module)
->(
    add("default", () =>
      <span> {ReasonReact.string("Hello storybook!")} </span>
    )
  );