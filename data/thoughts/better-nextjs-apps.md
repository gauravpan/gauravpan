---
title: "Writing better Next.js apps"
excerpt: "This article lists my experiences that I got from developing next js apps and exploring open source nextjs websites."
date: "2020-05-16T05:35:07.322Z"
author:
  name: Gaurav Pandey
  picture: "/gaurav.jpg"
ogImage:
  url: "/nextjs.jpg"
---

If you are new to nextjs, let me clear you that Nextjs is not used for Server Side Rendering(SSR) only.
You can create same app as create-react-app with much better development experience.
Even, if you don't need SEO, nextjs is a perfect option as you can increase user experience by showing loading indicator in HTML.

Nextjs removes the burden of code splitting and provides prefetching out of the box.
We can generate dynamically static webpages scaling our website to the moon. Here is how i do Nextjs.

### 1. Page Skeleton

You can use Page based skeleton loader to provide a better experience for your users. First questions you could have are,

Why page based? Isn't my component based perfect?

You are not wrong here. Component based loader works as well but you will have more size in bytes and height as well.
Loader is for users having low connectivity issue.
So, it would be better to send minimal skeleton HTML.

```javascript
// pages/page.jsx

function MyPage() {
    const user = useUser();
    if(!user) return <FullPageSkeletonLoader>;
    return <Page /> ;
}
export default Page;
```

### 2. Better Authentication Redirects

Once I accidently expand head tag while I was inspecting [vercel dashboard](https://vercel.com/dashboard), then I found GOLD.

Normaly, If user visits restricted page **/admin**, user will be redirected to **/login** page.
For that redirect to happen, user will have to wait for javascript to download that will redirect him and unnecessary javasript will be downloaded as well.

To redirect without downloading javascript is possible in nextjs. We need to inject little script inside head to do this.

```javascript
// inside <head> of https://vercel.com/dashboard

<script>
  if (!document.cookie || document.cookie.indexOf('authorization=') === -1)
  {location.replace(
    "/login?next=" + encodeURIComponent(location.pathname + location.search)
  )}
  else {document.documentElement.classList.add("render")}
</script>
```

### 3. Resonsive Viewport

Difference between mobile apps and website is that mobile apps don't allow users to zoom in.
You can have this behaviour in your mobile app by adding following code.

```javascript
// pages/page.jsx

import Head from "next/head";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function App() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const content = isLargerThan600
    ? "width=device-width, initial-scale=1.0"
    : "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";

  return (
    <>
      <Head>
        <title>Hajurbuwa</title>
        <meta name="viewport" content={content} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
```

### 4. Measuring Performance

Next js allows performance measuring out of the box, all you need to do is export reportWebVitals function.
You will get reports as first argument.
You would definitely like to use this feature in production.

```javascript
// pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
```

### 5. Disable Runtime JS

In some pages, we don't actually need javascript like in this blog page.
So, sending javascript is totally unnecessary.
We can disable client side javascript completely as

```javascript
// pages/page.jsx

export const config = {
  unstable_runtimeJS: false,
};
```

### 6. Page Component

```javascript
// pages/_app.js
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
```

Component inside MyApp is regular javascript function, so feel free to pass additional methods or field.
Example, you can use it to pass title or Layout component.
It makes code look clean and you don't need to import **next/head** in every page.

```javascript
// pages/page.jsx

import {PageLayout} from '../components/layouts'

Page.title = "Page Title";
Page.Layout = PageLayout;
export default Page() {
    return <> hello there </>
}
```

Thanks for reading an article, hope this article is useful for you.

Happy Coding!!
