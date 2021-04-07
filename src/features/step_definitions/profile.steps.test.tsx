import React from 'react';
import { configure, render, RenderResult } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import Profile from "../../components/Profile";

const feature = loadFeature('src/features/profile.feature', {
  tagFilter: 'not @skip'
});

defineFeature(feature, test => {
  // So we can use 'data-automation-id as our testid attribute
  configure({testIdAttribute: 'data-automation-id'})

  let component: RenderResult

  test('View profile', ({given, when, then}) => {
    given(/^component has mounted for "([^"]*)"$/, (username: string) => {
      component = render(<Profile name={username} />);
    });

    then(/^I see my username "(.*)" displayed$/, (value: string) => {
      const counter = component.getByTestId('Profile-Username');
      expect(counter).toHaveTextContent(value);
    })
  });
});