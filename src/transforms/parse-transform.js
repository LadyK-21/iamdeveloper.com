const jsdom = require("@tbranyen/jsdom");
const { JSDOM } = jsdom;
const slugify = require("slugify");

class CustomResourceLoader extends jsdom.ResourceLoader {
  fetch(_url, _options) {
    return Promise.resolve(Buffer.from("<html></html>"));
  }
}

module.exports = async function (value, outputPath) {
  if (!outputPath.endsWith(".html")) {
    return value;
  }

  const DOM = new JSDOM(value, {
    resources: new CustomResourceLoader(),
  });

  const document = DOM.window.document;
  const articleImages = document.querySelectorAll(
    "main article img, .intro img"
  );
  const articleHeadings = document.querySelectorAll(
    "main article h2, main article h3"
  );

  for (const image of articleImages) {
    image.setAttribute("loading", "lazy");

    // If an image has a title it means that the user added a caption
    // so replace the image with a figure containing that image and a caption
    if (image.hasAttribute("title")) {
      const figure = document.createElement("figure");
      const figCaption = document.createElement("figcaption");

      figCaption.innerHTML = image.getAttribute("title");

      image.removeAttribute("title");

      figure.appendChild(image.cloneNode(true));
      figure.appendChild(figCaption);

      image.replaceWith(figure);
    }
  }

  // Loop each heading and add a little anchor and an ID to each one
  for (heading of articleHeadings) {
    const headingSlug = slugify(heading.textContent.toLowerCase());
    const anchor = document.createElement("a");

    anchor.setAttribute("href", `#heading-${headingSlug}`);
    anchor.classList.add("heading-permalink");
    anchor.innerHTML = `
        <span class="visually-hidden"> permalink</span>
        <svg fill="currentColor" aria-hidden="true" focusable="false" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"/>
        </svg>`;

    heading.setAttribute("id", `heading-${headingSlug}`);
    heading.appendChild(anchor);
  }

  return "<!DOCTYPE html>\r\n" + (await document.documentElement.outerHTML);
};
