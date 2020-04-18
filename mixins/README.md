# MIXINS

> This directory contains the local mixins that can be imported to
any component.

 * **fullHeight**

   This mixin is used to give full height, **not 100%**,
   ```100vh - ( top + bottom )```. Where _top_ and _bottom_ are application _header_ and _footer_ heights.

   To use this mixin, import it to desired component and give a
   ```ref="fullheight"``` attribute to the desired element.

> More information is available in the [vue.js documentation](https://vuejs.org/v2/guide/mixins.html).
