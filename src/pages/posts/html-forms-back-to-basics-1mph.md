---
title: 'HTML Forms: Back to Basics'
date: '2019-03-28T04:48:20.000Z'
excerpt: >-
  Let's forget frameworks and libraries for a moment. Today we’re just going to
  talk about the &lt;form...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--t9c1XIrR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/tdhxw07gd7gwo6ctib50.png
comments_count: 4
positive_reactions_count: 77
tags:
  - dom
  - javascript
  - html
  - beginners
canonical_url: 'https://www.iamdeveloper.com/posts/html-forms-back-to-basics-1mph/'
template: post
---


Let's forget frameworks and libraries for a moment. Today we’re just going to talk about the 
`<form />`
 element and some of the things you can do with it in the DOM.

For web devs who are getting a little long in the tooth, you’re probably familiar with most of this, but for newer devs, this might be news to you. Either way, buckle up because we’re about to go old school with forms.

<center>
![Will Ferell in Old School in a grocery store sayinh "Awesome!"](https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif)
</center>

With newer DOM APIs like 
`querySelector`
 and 
`querySelectorAll`
, we can access forms via a selector, e.g. 
`document.querySelector(‘form’);`
. Did you know that you can also access forms directly from the 
`document`
? There is an 
`HTMLCollections`
 of forms available via 
`document.forms`
. Go ahead, I’ll let you open the dev tools in your favourite editor. Pretty neat eh?

So let’s say we’re on [amazon.ca](https://amazon.ca).

![](https://www.iamdeveloper.com/img/form-in-dev-tools.png)

You have a form that looks like this:


```html
<form class="nav-searchbar" name="site-search">
...
</form>
```


OK, so you know there is a 
`document.forms`
 object. Let’s take a peek in the dev tools.

![Chrome DevTools Console screenshot](https://www.iamdeveloper.com/img/form-in-dev-tools2.png "Chrome DevTools Console screenshot")


`document.forms[0]`
 finds our form, and there is one other form on the page, but there’s also two more properties on 
`document.forms`
. There’s 
`site-search`
 and 
`ue_backdetect`
. If we look at the markup above for our form, we see it has a 
`name`
 attribute with the value 
`’site-search'`
. That’s one of the extra properties on 
`document.forms`
. Sure enough, 
`document.forms[‘site-search’]`
 gives us a form. If we do 
`document.forms[0] === document.forms[‘site-search’]`
 in the console of our dev tools, we’ll see that it returns true.

![Chrome DevTools Console screenshot](https://www.iamdeveloper.com/img/form-in-dev-tools3.png "Chrome DevTools Console screenshot")

If you haven’t caught on yet, this means that you can access forms via an index, which represents the order they appear in the DOM, but you can also access it via a form’s 
`name`
 attribute.

<center>
![Character in a movie saying "Yes!"](https://media.giphy.com/media/Qh6NZWsFx1G1O/giphy.gif)
</center>

Alright, there’s more folks. Let’s get a reference to our form by running the following in the console, 
`const siteSearchForm = document.forms['site-search']`
.

Now let’s see what properties are available on our form.

![Chrome DevTools Console screenshot](https://www.iamdeveloper.com/img/form-properties.gif "Chrome DevTools Console screenshot")

OK, so we see some properties like 
`action`
, for the URL to 
`GET`
/
`POST`
 to, but as we go down the list, there’s one called 
`elements`
. Hmm, what could that be? 😉 If we access it in the dev tools console, we get the following:

![Chrome DevTools Console screenshot](https://www.iamdeveloper.com/img/form-in-dev-tools4.png "Chrome DevTools Console screenshot")

What? All the form inputs are in there! That’s right folks, you have access to all the 
`<input />`
s, 
`<textarea />`
s etc via this property. Pretty cool eh? Not only that, if the form inputs have a 
`name`
 attribute, we can do the same thing we did for 
`document.forms`
. We can access the form inputs by index or their name, e.g. 
`siteSearchForm.elements[‘field-keywords’]`
.

So accessing forms and form inputs can be done right off the 
`document`
 via the [
`document.forms`
](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms) property.

One last fun fact. Each form element has a 
`form`
 property which is a reference to the 
`<form />`
 DOM node that the form element is contained within.

![Console log of a form element](https://thepracticaldev.s3.amazonaws.com/i/ddf6hbntoqnde9u7i3ke.png)

Hope you enjoyed this DOM Throwback Thursday.

<center>
<img src="https://media.giphy.com/media/3h3ZcimVNfmi0MVvGA/giphy.gif" />
</center>

*[This post is also available on DEV.](https://dev.to/nickytonline/html-forms-back-to-basics-1mph)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
