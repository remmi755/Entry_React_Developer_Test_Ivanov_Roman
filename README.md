[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=40&duration=4000&pause=1000&width=435&height=76&lines=Online+store)](https://git.io/typing-svg)

<h2>Main page</h2>

![](https://github.com/remmi755/Entry_React_Developer_Test_Ivanov_Roman/blob/master/Screenshot_14.jpg)

<h2>Product page</h2>

![](https://github.com/remmi755/Entry_React_Developer_Test_Ivanov_Roman/blob/master/Screenshot_11.jpg)

<h2>CartOverlay/h2>

![](https://github.com/remmi755/Entry_React_Developer_Test_Ivanov_Roman/blob/master/Screenshot_12.jpg)

<h2>Cart</h2>

![](https://github.com/remmi755/Entry_React_Developer_Test_Ivanov_Roman/blob/master/Screenshot_13.jpg)

## Required:

- React. Anything not written in React will be rejected automatically. This is a React position, we expect a React solution.
- Class components. Due to our [work specifics]([https://docs.scandipwa.com/stack/override-mechanism/extending-javascript](https://docs.scandipwa.com/developing-with-scandi/override-mechanism/extending-javascript)) we utilize them heavily.
- Create-react-app to scaffold the application.

## Allowed:

- State management libraries (e.g. Redux, Recoil)
- CSS-in-JS approach allowers (e.g. styled-components)

## Prohibited:

- UI libraries (e.g. Tailwind, Material UI, Ant Design)
- Functional components, due to the reasons described above.

## Functionality requirements

- PLP - product listing page, a.k.a. category page
- PDP - product description page, a.k.a. product page
- Cart page + Cart overlay (minicart)

## Details

See some more specific information on the main requirements below. Remember - if something is in the design, but is not explicitly described here or above, it should be implemented anyways.

- Ability to add/remove products and change their amounts in cart - on the cart page itself, PLP and PDP should be provided.
- For products that have various options (attributes) - the options should be selected.
- The selected options of added to cart products should be visible in cart overlay and in cart page.
- If an attribute is a swatch attribute (type = swatch), a representation of the value should be rendered on PDP and PLP, rather than text description (e.g. the color itself, not "Blue" or "0000FF")
- Filtering products by category name for all of the categories from BE
- The descriptions provided in HTML format should be parsed and presented as HTML, not as plain text
- Ability to change the currency of the store to one of the available currencies

How to start
In order to start this endpoint, follow these steps

1.Install dependencies
2.Build the project - yarn build
3.Start the project - yarn start
