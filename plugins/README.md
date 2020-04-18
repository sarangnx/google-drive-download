# PLUGINS

> This directory contains Javascript plugins that run
before mounting the root Vue.js application.

 * **notifications**

   Notification component's methods are used as a plugin.
   This enables methods in notification store to create
   notifications from any component by ```this.$method```
   format.

   Methods available are:

   * ```Vue.$notify```
   * ```Vue.$success```
   * ```Vue.$error```
   * ```Vue.$warn```
   * ```Vue.$info```

> More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).
