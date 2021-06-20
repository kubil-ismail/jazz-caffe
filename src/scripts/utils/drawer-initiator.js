/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer }) {
    console.log(button);
    button.addEventListener('click', () => {
      this._toggleDrawer(button, drawer);
    });
  },

  _toggleDrawer(button, drawer) {
    if (button.classList.length === 1) {
      button.classList.add('navbar-collapse-btn-active');
      drawer.classList.add('navbar-collapse-active');
    } else {
      drawer.classList.remove('navbar-collapse-active');
      button.classList.remove('navbar-collapse-btn-active');
    }
  },
};

export default DrawerInitiator;
