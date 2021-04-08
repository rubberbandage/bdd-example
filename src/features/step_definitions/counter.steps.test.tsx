import React from 'react';
import { configure, render, RenderResult } from '@testing-library/react';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import Counter from "../../components/Counter";

const feature = loadFeature('src/features/counter.feature', {
  tagFilter: 'not @skip'
});

defineFeature(feature, test => {
  // So we can use 'data-automation-id as our testid attribute
  configure({testIdAttribute: 'data-automation-id'})

  let component: RenderResult

  test('Increments counter by 1', ({ given, when, then}) => {
    given('component has mounted', () => {
      component = render(<Counter />);
    });

    when('I click increment', () => {
      const incrementButton = component.getByTestId('Button-Increment');
      incrementButton.click();
    });

    then(/^counter shows (-?\d+)$/, (value) => {
      const counter = component.getByTestId('Counter');
      expect(counter).toHaveTextContent(value);
    });
  });

  test('Decrements counter by 1', ({given, when, then}) => {
    given(/^component has mounted with (-?\d+)$/, initialValue => {
      component = render(<Counter initialValue={initialValue} />);
    });

    when(/^I click decrement$/, async () => {
      const incrementButton = await component.findByRole('button', {name: 'Decrement'});
      incrementButton.click();
    });

    then(/^counter shows (-?\d+)$/, (value) => {
      const counter = component.getByTestId('Counter');
      expect(counter).toHaveTextContent(value);
    });
  });
});