<template>
  <div>
    <h1>Header</h1>
    <NuxtPage />
    <h1>Footer</h1>
    <amp-consent id="ConsentManager" layout="nodisplay" type="ConsentManager">
      <div id="postPromptUI">
        <button on="tap:ConsentManager.prompt()" role="button">Manage privacy settings</button>
      </div>
    </amp-consent>
  </div>
</template>

<script setup>

useHead({
  // noscript: [
  //   {
  //     innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8GFW9MD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  //   }
  // ],
  // script: [
  //   {
  //     type: "application/json",
  //     innerHTML: JSON.stringify({
  //       postPromptUI: "postPromptUI",
  //       clientConfig: {
  //         cdid: "ff916782129fa",
  //         params: ""
  //       }
  //     }),
  //     tagPosition: "beforeEnd", // Ensure it goes inside <amp-consent>
  //   },
  //   {
  //     src: "https://www.googletagmanager.com/gtag/js?id=G-39CS26ZSZS",
  //     async: "true"
  //   }
  // ]
})
</script>