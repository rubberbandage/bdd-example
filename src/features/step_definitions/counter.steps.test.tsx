import React from 'react';
import { configure, render, RenderResult } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { Counter } from "../../Counter";

const feature = loadFeature('src/features/counter.feature', {
  tagFilter: 'not @skip'
});

defineFeature(feature, test => {
  // So we can use 'data-automation-id as our testid attribute
  configure({testIdAttribute: 'data-automation-id'})

  let component: RenderResult

  test('Increments counter by 1', ({given, when, then}) => {
    given('component has mounted', () => {
      component = render(<Counter />);
    });

    when('clicking increment button', async () => {
      const incrementButton = await component.findByRole('button', {name: 'Increment'});
      incrementButton.click();
    });

    then(/^counter shows (-?\d+)$/, (value: string) => {
      const counter = component.getByTestId('Counter');
      expect(counter).toHaveTextContent(value);
    })
  });

  test('Decrements counter by 1', ({given, when, then}) => {
    given('component has mounted', () => {
      throw new Error('Not implemented')
    });

    when(/^clicking decrement button$/, () => {
      throw new Error('Not implemented')
    });

    then(/^counter shows (-?\d+)$/, () => {
      throw new Error('Not implemented')
    });
  });
});