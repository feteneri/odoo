import template from './opportunities.pug';
import './opportunities.css';

function initTabs() {
  const menuItemClass = 'opportunities__menu-item';
  const menuItemActiveClass = 'opportunities__menu-item_active';
  const menuItems = [...document.querySelectorAll(`.${menuItemClass}`)];
  const bodyClass = 'opportunities__body';
  const bodyActiveClass = 'opportunities__body_active';
  const bodies = [...document.querySelectorAll(`.${bodyClass}`)];

  function activateMenuItem(targetMenuItem) {
    const targetMenuItem = event.target;
    menuItems.forEach(menuItem => {
      menuItem.classList.remove(menuItemActiveClass);
    });
    targetMenuItem.classList.add(menuItemActiveClass);
  }

  function activateBody(targetMenuItem) {
    const targetAttribute = targetMenuItem.attributes['data-tab'].value;
    const targetBody = document.querySelectorAll(
      `.opportunities__body[data-tab="${targetAttribute}"]`
    )[0];
    bodies.forEach(body => {
      body.classList.remove(bodyActiveClass);
    });
    targetBody.classList.add(bodyActiveClass);
  }

  function handleMenuItemClick(event) {
    const targetMenuItem = event.target;
    activateMenuItem(targetMenuItem);
    activateBody(targetMenuItem);
  }

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', handleMenuItemClick);
  });
}

document.addEventListener('DOMContentLoaded', initTabs);

export default template;
