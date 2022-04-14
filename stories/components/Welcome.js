// @flow

import React from 'react';

const Welcome = () => (
  <article>
    <h1>Welcome to Storybook</h1>
    <p>
      This library is designed to showcase the available components for building a React application.
      Components are organized by style package so that you can find components to fit the style of your project.
    </p>
    <h2>Addons</h2>
    <p>
      Storybook provides a variety of
      <> </>
      <a href='https://storybook.js.org/docs/addons/addon-gallery/'>addons</a>
      <> </>
      to aid
      in testing, inspection, and documentation. Each of the addons will display as a tab below the component preview.
      The addons used by this project include:
    </p>
    <ul>
      <li>
        <b>Actions: </b>
        Used to capture mouse and keyboard events
      </li>
      <li>
        <b>Knobs: </b>
        Allows the viewer to change props on the fly to view variations of the component
      </li>
    </ul>
  </article>
);

export default Welcome;
