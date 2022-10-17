<template>
  <div class="top-bar">
    <div class="col py-3">
      <h3>Left Sidebar with Submenus</h3>
      <p class="lead">
        An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a
        single menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in
        width on smaller screens.
      </p>
      <ul class="list-unstyled">
        <li>
          <h5>Responsive</h5>
          shrinks in width, hides text labels and collapses to icons only on mobile
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.top-bar {
  height: 67px;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-slate-200) / var(--tw-border-opacity));
}
</style>
