import styled from 'styled-components';

const DocsMenuStyles = styled.div`
  --menu-width: 280px;

  position: relative;
  display: block;
  flex: 0 0 auto;
  width: var(--menu-width);
  letter-spacing: 0;

  // box-shadow: 1px 0px 0px rgba(0, 21, 58, 0.06);
  border-inline-end: 1px solid #f0f0f0;

  z-index: 1002;

  @media screen and (max-width: $screen-xs-max) {
    position: fixed;
    top: 0;
    left: 0;
    background: var(--color-white);
    transform: translateX(calc(-1 * var(--menu-width)));
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
    height: 100%;

    // Overlay is visible only when menu toggle
    // is pressed, opens on small screens only
    &.menu-overlay-visible {
      transform: none;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.6, 1);

      .menu-header {
        background: white;
        position: sticky;
        top: 1px;
        z-index: 1;

        border-bottom: 1px solid #e9edf3;
      }

      .menu-header__version-link {
        display: none;
      }

      .section-list {
        display: block;
      }
    }
  }

  li {
    list-style-type: none;
  }

  span {
    display: inline-block;
  }

  .sticky {
    position: sticky;
    top: 0;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .menu-header {
    display: flex;
    align-items: center;

    // border-block-end: 1px solid rgba(0, 21, 58, 0.06);

    height: 64px;

    padding: 0 var(--container);
  }

  .menu-header__logo-link,
  .menu-header__docs-link {
    border-bottom: none;
  }

  .menu-header__logo-link {
    svg {
      display: block;
    }
  }

  .menu-header__docs-link {
    color: #92a0b3;

    text-transform: uppercase;

    font-family: var(--f-family-text);
    font-weight: 600;
    font-size: 17px;

    letter-spacing: -0.02em;

    margin: 1px 7px 0 8px;
  }

  .menu-header__version-link {
    display: flex;
    align-items: center;

    background: #f6f8fb;
    border-radius: 12px;

    height: 24px;

    font-size: 12px;
    letter-spacing: -0.01em;

    padding: 0 8px;

    margin: 0 0 0 10px;

    border-bottom: none;
    cursor: pointer;

    color: var(--color-grey-blue);
  }

  .menu-header__version-link:hover {
    background: #e9ebee;
  }

  .section-label {
    color: var(--color-woodsmoke);
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  .section-active-indicator {
    position: relative;

    width: 14px;
    height: 14px;

    margin-right: 8px;
  }

  .section-active-indicator::after {
    content: '';

    position: absolute;

    top: 7px;
    left: 5px;

    width: 4px;
    height: 4px;

    background: #000;

    border-radius: 50%;
  }

  .section-active {
    .section-label {
      color: var(--color-capacitor-blue);
    }

    .section-active-indicator::after {
      background: var(--color-capacitor-blue);
    }
  }

  .section-list {
    display: none;

    padding: 0 15px 0 18px;

    border-bottom: 1px solid #dee3ea;
  }

  .section-list li {
    margin: 16px 0;
  }

  .menu-list li,
  .menu-list ul li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu-list {
    margin-top: 0;
    padding: 13px 15px 107px 18px;
  }

  .menu-list .section-label:first-of-type {
    margin-top: 0;
    margin-bottom: 0;
  }

  .menu-list ul {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .menu-list li {
    font-size: 14px;

    &.menu-footer {
      padding-top: 20px !important;
      padding-bottom: 20px !important;

      border-top: 1px solid #dee3ea;

      background: var(--color-white);
      color: #222d3a;

      a {
        display: flex;
        justify-content: space-between;
      }

      .arrow {
        letter-spacing: 0;

        padding-left: 10px;
      }

      &:hover {
        // color: var(--color-grey-blue);
      }
    }
  }

  .menu-list > li + li {
    margin-top: 16px;
  }

  .menu-list a {
    display: block;
    font-weight: 500;
    font-size: 13px;
    color: var(--color-grey-blue);
    text-decoration: none;
    border: 0;
    cursor: pointer;
  }

  .menu-list a:hover {
    border: 0;
  }

  .menu-list > li > a {
    margin-block-end: 6px;
    cursor: pointer;
    ion-icon {
      color: var(--c-carbon-90);
      font-weight: bold;
      font-size: 14px;
      vertical-align: middle;
      margin-block-end: 2px;
      margin-right: 8px;
    }

    transition: opacity 0.2s ease-out;
  }

  .menu-list .link-active {
    font-weight: 500;
    color: var(--color-dodger-blue);
  }

  .menu-list ul li {
    display: flex;
    border-radius: var(--radius-1);
    align-items: center;
    margin-inline-start: var(--space-3);
    margin-inline-end: var(--space-2);
    transition: height 8000ms ease-out;
    overflow: hidden;
  }

  .menu-list li ul {
    transition: height 2s;
  }

  .menu-list ul li + li {
    margin-block-start: 2px;
  }

  .menu-list ul li a {
    flex-grow: 1;
    padding: 5px 12px;
    display: block;
    transition: 0.2s transform ease-out, 0.2s color ease-out;
    border-radius: 4px;
  }

  .menu-list ul li a:hover,
  .menu-list ul li a:focus {
    opacity: 1;
  }

  .menu-list ul li a:not(.link-active):hover,
  .menu-list ul li a:not(.link-active):focus {
    color: var(--c-carbon-70);
  }

  .menu-list ul li a .bump-up {
    margin-block-end: 2px;
    height: calc(100% - 2px);
  }

  .menu-list ul li a.link-active {
    color: #0091fa;
    background: var(--c-cyan-0);
  }

  .menu-list .collapsed ul li {
    height: 0;
  }

  .menu-list .collapsed ul {
    height: 0;
  }
`;

export default DocsMenuStyles;
