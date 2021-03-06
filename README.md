# byu-card
This is an individual card or tile component, meant to be listed on a landing page or other listing page with many cards.

## To Use:
A. Drupal: Use the [module Views Card D7](https://github.com/byuweb/views_card_d7) -
Enable the module, and create a view. The style is defined within the view.

B. Not Drupal:
1. Reference the [js and css file for byu-card](https://cdn.byu.edu/byu-card/latest/byu-card.min.js)
2. Place your content inside `<byu-card>` tags. Your content should be a direct child to the `<byu-card>` tag. See the demo at https://github.com/byuweb/byu-card/blob/master/my-component/demo.html


## Styling Options:
Default Styling:
There will be padding around all elements but `<img>` tags. If you put your `<img>` inside of another `<div>` or `<p>`, it will have padding around  it and it won't extend to the edge nicely. If you aren't able to strip these wrapping `<div>`'s around your image, add the class *'image'* to   the direct child of `<byu-card>`.
```html
<byu-card>
  <div class="image">
    <img src="someimage.jpg"...>
  </div>
</byu-card>
```
There is a light box shadow, with a darker box shadow on hover.

Text & Font: `<byu-card>` doesn't style the text differently. If you want titles or styled headings in your card, we suggest using `<h2>`'s or `<h3>`'s. The styling and fonts there will be set by your normal theming elsewhere in your website.

ALIGNMENT: Default is center. You can change it to left aligned by A) using the setting in Drupal Views or B) using code on your *container element*. This is not changed on the <byu-card> element, but on its parent container.

BORDER: This can be changed by adding the class *'border-gray'* or *'border-navy'* to your `<byu-card>` element. You can also change the border radius by using the class *'border-small'* or *'border-large'*. Default border radius is *0*. Small is *10px*, Large is *25px*.

### Custom Styles
You are able to manipulate the width, and alignment of the byu-card elements with regular css. Here are a few quick examples:

#### Changing widths
If you have small content, you could tell it to stay in two columns for mobile:
```
@media screen and (max-width: 767px) {
    byu-card {
        width: 48%;
    }
}
```
You can have varying widths targeting specific byu-card elements by an id or class you add or via another selector:
```
byu-card:nth-of-type(2) {
    width: 38%;
}
byu-card:nth-of-type(1) {
    width: 60%;
}
```

## Example Code
Feel free to look at the included DEMO file and copy this to start with:
https://github.com/byuweb/byu-card/blob/master/my-component/demo.html

We wrap `<byu-card>` in a container, which we style with flex. The styling here is however you'd like, although we do have a default example here.
