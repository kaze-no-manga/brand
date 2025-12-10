# 1.0.0 (2025-12-10)


### Bug Fixes

* **docs:** correct JSX comment syntax in Colors stories ([88dc6c8](https://github.com/kaze-no-manga/brand/commit/88dc6c874f11669869811f89d7de2aa19c8d8886))


### Code Refactoring

* optimize package size and focus on design tokens ([60b16dc](https://github.com/kaze-no-manga/brand/commit/60b16dcacf042769c850824426c1d2f57e90c954))


### Features

* add automated favicon generation from brand logo ([a7431a0](https://github.com/kaze-no-manga/brand/commit/a7431a0f2a7f813015ba9e83d14aeef064ebed4e)), closes [#8b5cf6](https://github.com/kaze-no-manga/brand/issues/8b5cf6)
* add color tokens with primary purple palette ([f8728b9](https://github.com/kaze-no-manga/brand/commit/f8728b9cf86ac7c4dea30e42142dae1c2684e320)), closes [#8b5cf6](https://github.com/kaze-no-manga/brand/issues/8b5cf6)
* add color tokens with primary purple palette ([9d90d13](https://github.com/kaze-no-manga/brand/commit/9d90d130c836108484b7d4f78e8e3addd14068d0)), closes [#8b5cf6](https://github.com/kaze-no-manga/brand/issues/8b5cf6)
* add comprehensive dark mode support to design system ([4c6a7f0](https://github.com/kaze-no-manga/brand/commit/4c6a7f0dc8809986c5fdacdad3e58a7bec7a802a))
* add comprehensive Storybook documentation with latest version ([2aaa114](https://github.com/kaze-no-manga/brand/commit/2aaa11441cbad3177dadbab690c087afb5f42ced))
* implement complete design system with tokens, tailwind preset and comprehensive test suite ([82f53b0](https://github.com/kaze-no-manga/brand/commit/82f53b0930fdbc4a4f7c1f2afb6980305408f8a7))


### BREAKING CHANGES

* Favicon generation removed - each app should generate its own favicons as needed
* Colors object structure expanded with theme-aware properties
* Initial release of design system package
