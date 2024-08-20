# Prettier sorting Tailwind classes

## Install

Run `npm install -D prettier prettier-plugin-tailwindcss` to install the two packages as a dev dependancies.

Create a file called `.prettierrc` and put the following inside it.

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Test

To test its working correctly, add the following classes to a div, and see if they get swapped when you hit save:

```html
className="flex-col flex"
```

## More information on installation and how classes are sorted

[Here is the article](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) from Tailwind on how this works.
